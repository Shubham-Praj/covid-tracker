import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { authHeader } from "../../services/HeaderService";
import { CovidDataTable } from "./CovidDataTable";
import DataCards from "./DataCards";
import { DataChart } from "./DataChart";

export const CovidDataPage = () => {
  const [tableData, setTableData] = useState();

  const getAllWorldData = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_COVID_BASE_URL}${process.env.REACT_APP_ALL_COVID_DATA}`,
      authHeader()
    );

    const data = await res.json();

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
          <DataCards />
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ width: "50%", height: "40vh" }}>
            Chart
            <DataChart />
          </Box>
        </Grid>
      </Grid>

      <Box>
        Table
        <CovidDataTable rows={tableData} />
      </Box>
    </Box>
  );
};
