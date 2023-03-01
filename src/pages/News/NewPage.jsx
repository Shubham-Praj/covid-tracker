import { Box, Grid, Tab, Tabs } from "@mui/material";
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
  const [allCovidTableData, setAllCovidTableData] = useState([]);
  const [allHealthTableData, setAllHealthTableData] = useState([]);
  const [allVaccineTableData, setAllVaccineTableData] = useState([]);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getAllCovidNewsData = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_COVID_BASE_URL}${process.env.REACT_APP_ALL_COVID_NEWS}`,
      authHeader()
    );

    const data = await res.json();
    setAllCovidTableData(data.news);
  };

  const getAllHealthNewsData = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_COVID_BASE_URL}${process.env.REACT_APP_ALL_HEALTH_NEWS}`,
      authHeader()
    );

    const data = await res.json();
    setAllHealthTableData(data.news);
  };

  const getAllVaccineNewsData = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_COVID_BASE_URL}${process.env.REACT_APP_ALL_VACCINE_NEWS}`,
      authHeader()
    );

    const data = await res.json();

    setAllVaccineTableData(data.news);
  };

  useEffect(() => {
    getAllCovidNewsData();
    getAllHealthNewsData();
    getAllVaccineNewsData();
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
      </TabPanel>

      <TabPanel value={value} index={1}>
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
      </TabPanel>

      <TabPanel value={value} index={2}>
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
      </TabPanel>
    </>
  );
}

export default NewPage;
