import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";

import { fetchCustomersData } from "../../api/customersApi";
import SearchBar from "../../components/searchBar/SearchBar";

const styles = {
  heading: {
    paddingBottom: "1rem",
    fontWeight: "bold",
    fontSize: "36px",
    fontFamily: "IBM Plex Sans, sans-serif",
  },
  text: {
    fontFamily: "IBM Plex Sans, sans-serif",
  },
  textTableName: {
    fontFamily: "IBM Plex Sans, sans-serif",
    color: "#a4aabd",
  },
};

function Customers() {
  const [customersData, setCustomersData] = useState(null);
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    // Fetch customer data
    fetchCustomersData()
      .then((data) => {
        setCustomersData(data);
        setSearchResults(data); // Set search results to customer data initially
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (results) => {
    if (results.length > 0) {
      setSearchResults(results);
    } else {
      setSearchResults(customersData);
    }
  };

  return (
    <Box sx={{ padding: "5rem", fontFamily: "IBM Plex Sans, sans-serif" }}>
      {customersData ? (
        <div>
          <SearchBar customersData={customersData} onSearch={handleSearch} />
          <Typography variant="h6" textAlign="start" sx={styles.heading}>
            Customers
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={styles.textTableName}>Name</TableCell>
                  <TableCell sx={styles.textTableName}>ARR</TableCell>
                  <TableCell sx={styles.textTableName}>ID</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {searchResults.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell sx={styles.text}>{customer.name}</TableCell>
                    <TableCell sx={styles.text}>{customer.arr}</TableCell>
                    <TableCell sx={styles.text}>{customer.id}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : (
        <Typography variant="body1">Loading customers data...</Typography>
      )}
    </Box>
  );
}

export default Customers;
