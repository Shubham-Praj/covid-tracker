import { Box, Grid, Paper, Skeleton, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { authHeader } from "../../services/HeaderService";
import { CovidDataTable } from "./CovidDataTable";
import DataCards from "./DataCards";
import { DataChart } from "./DataChart";

export const CovidDataPage = () => {
  const [cardData, setCardData] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [filteredTableData, setFilteredTableData] = useState([]);

  const cardDataHandler = (selectedData) => {
    setCardData(selectedData);
  };

  console.log("dsds", tableData.length);

  const onSearchHandler = (searchTerm) => {
    const filteredData = tableData.filter((data) => {
      return data.Country.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setFilteredTableData(filteredData);
  };

  const getAllWorldData = async (continentName) => {
    const res = await fetch(
      `${process.env.REACT_APP_COVID_BASE_URL}${process.env.REACT_APP_ALL_COVID_DATA}${continentName}`,
      authHeader()
    );

    const data = await res.json();

    if (continentName === "") {
      data.shift();
    }
    setCardData(data[0]);
    setTableData(data);
    setFilteredTableData(data);
  };

  useEffect(() => {
    getAllWorldData("");
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DataCards cardData={cardData} />
        </Grid>
        {/* <Grid item xs={6}>
          <Box sx={{ width: "100%", height: "40vh" }}>
            <DataChart rows={filteredTableData} />
          </Box>
        </Grid> */}
      </Grid>

      <Box>
        <CovidDataTable
          rows={filteredTableData}
          cardDataHandler={cardDataHandler}
          onSearchHandler={onSearchHandler}
          getAllWorldData={getAllWorldData}
        />
      </Box>
    </Box>
  );
};
