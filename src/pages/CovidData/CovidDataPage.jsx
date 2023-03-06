import { Box } from "@mui/material";
import React from "react";
import { CovidDataTable } from "./CovidDataTable";

function CovidDataPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box>Filters</Box>

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box>Cards Section</Box>
        <Box>Chart</Box>
      </Box>

      <Box>
        Table
        <CovidDataTable />
      </Box>
    </Box>
  );
}

export default CovidDataPage;
