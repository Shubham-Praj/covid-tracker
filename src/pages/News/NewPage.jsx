import { Box, Grid, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import { authHeader } from "../../services/HeaderService";
import NewCard from "./NewCard";

function NewPage() {
  const [tableData, setTableData] = useState([]);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getNewsData = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_COVID_BASE_URL}${process.env.REACT_APP_ALL_COVID_NEWS}`,
      authHeader()
    );

    const data = await res.json();
    console.log(data);
    setTableData(data.news);
  };

  useEffect(() => {
    getNewsData();
  }, []);

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          aria-label="basic tabs example"
        >
          <Tab value={0} label="Item One" />
          <Tab value={1} label="Item Two" />
          <Tab value={2} label="Item Three" />
        </Tabs>
      </Box>
      <Box value={value} index={0}>
        Item One
      </Box>
      <Box value={value} index={1}>
        Item Two
      </Box>
      <Box value={value} index={2}>
        Item Three
      </Box>
      <div>I am NewPage {tableData.length}</div>;
      <Grid
        container
        rowSpacing={2}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {tableData.length > 0 &&
          tableData.map((news) => {
            return (
              <Grid item xs={2} sm={4} md={4} key={news.news_id}>
                <NewCard />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}

export default NewPage;
