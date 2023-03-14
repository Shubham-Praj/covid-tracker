import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CardMedia, TableFooter, TablePagination } from "@mui/material";

export const CovidDataTable = (props) => {
  let { rows, cardDataHandler } = { ...props };

  const formatter = Intl.NumberFormat("en", { notation: "compact" });

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Box sx={{ m: 2 }}>
        <TableContainer component={Paper} elevation={2} sx={{ maxHeight: 300 }}>
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Continent</TableCell>
                <TableCell align="center">Country</TableCell>
                <TableCell align="center">Total Cases</TableCell>
                <TableCell align="center">Total Recovered</TableCell>
                <TableCell align="center">Active Cases</TableCell>
                <TableCell align="center">Total Death</TableCell>
                {/* <TableCell align="center">Total Cases</TableCell>
                <TableCell align="center">Total Cases</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? rows?.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              )?.map((row) => (
                <TableRow
                  key={row.id}
                  hover
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  onClick={() => cardDataHandler(row)}
                >
                  <TableCell align="center">{row.Continent}</TableCell>
                  <TableCell align="center">{row.Country} </TableCell>
                  <TableCell align="center">
                    {formatter.format(row.TotalCases)}
                  </TableCell>
                  <TableCell align="center">
                    {formatter.format(row.TotalRecovered)}
                  </TableCell>
                  <TableCell align="center">
                    {formatter.format(row.ActiveCases)}
                  </TableCell>
                  <TableCell align="center">
                    {formatter.format(row.TotalDeaths)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>

            <TableFooter align="center">
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[]}
                  count={rows?.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
