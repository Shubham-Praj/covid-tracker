import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { authHeader } from "../../services/HeaderService";
import { CovidDataTable } from "./CovidDataTable";

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
      <Box>Filters</Box>

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box>Cards Section</Box>
        <Box>Chart</Box>
      </Box>

      <Box>
        Table
        <CovidDataTable rows={tableData} />
      </Box>
    </Box>
  );
};
