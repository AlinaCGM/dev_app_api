import React, { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ customersData, onSearch }) {
  console.log(customersData, "customersData, alina");
  const [userInput, setUserInput] = useState("");

  const filteredCustomers = customersData.filter((customer) =>
    customer.name.toLowerCase().includes(userInput.toLowerCase())
  );

  const handleInputChange = (event) => {
    const input = event.target.value;
    setUserInput(input);
    let results;
    if (input === "") {
      results = customersData;
    } else {
      results = filteredCustomers;
    }

    onSearch(results); // Call the onSearch prop with the results
  };

  return (
    <div>
      <TextField
        id="search-input"
        label="Search by customer name"
        value={userInput}
        onChange={handleInputChange}
      />
      <IconButton color="primary" aria-label="search">
        <SearchIcon />
      </IconButton>
    </div>
  );
}

export default SearchBar;
