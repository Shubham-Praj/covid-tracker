import { Box, Paper, styled } from "@mui/material";
import React from "react";

const PaperItem = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  height: 60,
  lineHeight: "60px",
  margin: 2,
}));

export default function DataCards() {
  return (
    <Box
      sx={{ display: "flex", width: "100%", justifyContent: "space-evenly" }}
    >
      <PaperItem elevation={3}>Total Cases</PaperItem>
      <PaperItem elevation={3}>Total Recovered</PaperItem>
      <PaperItem elevation={3}>Active Cases</PaperItem>
      <PaperItem elevation={3}>Total Deaths</PaperItem>
    </Box>
  );
}
