import { Box, Paper, styled, Typography } from "@mui/material";
import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const PaperItem = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  width: "100%",
  margin: 2,
}));

export default function DataCards(props) {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  let { cardData } = { ...props };

  return (
    <>
      <Typography
        variant="h6"
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          m: 2,
        }}
      >
        {cardData?.Continent} <PlayArrowIcon /> {cardData?.Country}
      </Typography>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-evenly",
          m: 2,
        }}
      >
        <PaperItem elevation={3}>
          <Typography variant="subtitle1">Total Cases</Typography>
          <Typography variant="h6">
            {formatter.format(cardData?.TotalCases)}
          </Typography>
        </PaperItem>
        <PaperItem elevation={3}>
          <Typography variant="subtitle1">Total Recovered</Typography>
          <Typography variant="h6">
            {formatter.format(cardData?.TotalRecovered)}
          </Typography>
        </PaperItem>
        <PaperItem elevation={3}>
          <Typography variant="subtitle1">Active Cases</Typography>
          <Typography variant="h6">
            {formatter.format(cardData?.ActiveCases)}
          </Typography>
        </PaperItem>
        <PaperItem elevation={3}>
          <Typography variant="subtitle1">Total Deaths</Typography>
          <Typography variant="h6">
            {formatter.format(cardData?.TotalDeaths)}
          </Typography>
        </PaperItem>
      </Box>
    </>
  );
}
