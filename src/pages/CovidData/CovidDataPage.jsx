import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { authHeader } from "../../services/HeaderService";
import { CovidDataTable } from "./CovidDataTable";
import DataCards from "./DataCards";
import { DataChart } from "./DataChart";

export const CovidDataPage = () => {
  const [cardData, setCardData] = useState(null);
  const [globalDetails, setGlobalDetails] = useState(null);
  const [tableData, setTableData] = useState();

  const cardDataHandler = (selectedData) => {
    setCardData(selectedData);
  };

  const getAllWorldData = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_COVID_BASE_URL}${process.env.REACT_APP_ALL_COVID_DATA}`,
      authHeader()
    );

    const data = await res.json();

    data.shift();
    setGlobalDetails(data[0]);
    setCardData(data[0]);
    data.shift();
    setTableData(data);
  };

  useEffect(() => {
    getAllWorldData();
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box>
        Filters
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "50%",
            backgroundColor: "red",
          }}
        >
          sdsds
        </Box>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <DataCards cardData={cardData} />
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ width: "50%", height: "40vh" }}>
            Chart
            <DataChart rows={tableData.splice(0, 20)} />
          </Box>
        </Grid>
      </Grid>

      <Box>
        <CovidDataTable rows={tableData} cardDataHandler={cardDataHandler} />
      </Box>
    </Box>
  );
};
