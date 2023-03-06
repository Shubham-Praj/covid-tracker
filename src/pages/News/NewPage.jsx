import {
  Box,
  CircularProgress,
  Grid,
  Pagination,
  Tab,
  Tabs,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { authHeader } from "../../services/HeaderService";
import NewsCard from "./NewCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function NewPage() {
  const [loaderOnPage, setLoaderOnPage] = useState(null);

  const [allCovidTableData, setAllCovidTableData] = useState([]);
  const [allHealthTableData, setAllHealthTableData] = useState([]);
  const [allVaccineTableData, setAllVaccineTableData] = useState([]);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getAllCovidNewsData = async (pageNumber) => {
    setLoaderOnPage("covid-news");

    const res = await fetch(
      `${process.env.REACT_APP_COVID_BASE_URL}${process.env.REACT_APP_ALL_COVID_NEWS}/${pageNumber}`,
      authHeader()
    );

    const data = await res.json();

    setAllCovidTableData(data.news);
    setLoaderOnPage(null);
  };

  const getAllHealthNewsData = async (pageNumber) => {
    setLoaderOnPage("health-news");

    const res = await fetch(
      `${process.env.REACT_APP_COVID_BASE_URL}${process.env.REACT_APP_ALL_HEALTH_NEWS}/${pageNumber}`,
      authHeader()
    );

    const data = await res.json();
    setAllHealthTableData(data.news);
    setLoaderOnPage(null);
  };

  const getAllVaccineNewsData = async (pageNumber) => {
    setLoaderOnPage("vaccine-news");

    const res = await fetch(
      `${process.env.REACT_APP_COVID_BASE_URL}${process.env.REACT_APP_ALL_VACCINE_NEWS}/${pageNumber}`,
      authHeader()
    );

    const data = await res.json();

    if (data.hasOwnProperty("news")) {
      setAllVaccineTableData(data.news);
    }
    setLoaderOnPage(null);
  };

  useEffect(() => {
    getAllCovidNewsData(0);
    getAllHealthNewsData(0);
    getAllVaccineNewsData(0);
  }, []);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            <Tab label="All Covid News" {...a11yProps(0)} />
            <Tab label="All Health News" {...a11yProps(1)} />
            <Tab label="All Vaccine News" {...a11yProps(2)} />
          </Tabs>
        </Box>
      </Box>

      <TabPanel value={value} index={0}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {loaderOnPage === "covid-news" && <CircularProgress />}
        </Box>

        {loaderOnPage !== "covid-news" && (
          <Grid container rowSpacing={2} columnSpacing={2} sx={{ p: 2 }}>
            {allCovidTableData?.length > 0 &&
              allCovidTableData?.map((news) => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={news?.news_id}>
                    <NewsCard news={news} />
                  </Grid>
                );
              })}
          </Grid>
        )}

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            count={8}
            variant="outlined"
            shape="rounded"
            onChange={(event, value) => getAllCovidNewsData(value)}
          />
        </Box>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {loaderOnPage === "health-news" && <CircularProgress />}
        </Box>

        {loaderOnPage !== "health-news" && (
          <Grid container rowSpacing={2} columnSpacing={2} sx={{ p: 2 }}>
            {allHealthTableData.length > 0 &&
              allHealthTableData.map((news) => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={news.news_id}>
                    <NewsCard news={news} />
                  </Grid>
                );
              })}
          </Grid>
        )}

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            count={8}
            variant="outlined"
            shape="rounded"
            onChange={(event, value) => getAllHealthNewsData(value)}
          />
        </Box>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {loaderOnPage === "vaccine-news" && <CircularProgress />}
        </Box>

        {loaderOnPage !== "vaccine-news" && (
          <Grid container rowSpacing={2} columnSpacing={2} sx={{ p: 2 }}>
            {allVaccineTableData.length > 0 &&
              allVaccineTableData.map((news) => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={news.news_id}>
                    <NewsCard news={news} />
                  </Grid>
                );
              })}
          </Grid>
        )}

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {/* <Pagination
            count={1}
            variant="outlined"
            shape="rounded"
            onChange={(event, value) => getAllVaccineNewsData(value)}
          /> */}
        </Box>
      </TabPanel>
    </>
  );
}

export default NewPage;
