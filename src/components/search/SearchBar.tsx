import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { search } from "@/api"; // Make sure this path is correct
import { Product } from "@/types";
interface SearchBarProps {
  setProducts: (products: Product[]) => void;
}
export const SearchBar: React.FC<SearchBarProps> = ({ setProducts }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [expanded, setExpanded] = useState<boolean>(false);
  const handleSearch = async () => {
    try {
      const result = await search(searchTerm);
      setProducts(result.data); // Update the products state with the search results
    } catch (error) {
      console.error("Error searching foods:", error);
    }
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default behavior of form submission
      handleSearch();
    }
  };
  const handleExpand = () => {
    setExpanded((pre) => searchTerm ? pre : !pre);
    if (!expanded) {
      setTimeout(() => {
        handleSearch();
      }, 300); // Wait for the transition to complete before performing the search
    } else {
      handleSearch();
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={(e) => e.preventDefault()} // Prevent form submission on Enter key press
      sx={{
        p: "4px 4px",
        display: "flex",
        alignItems: "center",
        width: expanded ? 350 : 55, // Adjust the width based on the expanded state
        transition: "width 0.3s ease-in-out" // Smooth transition effect
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={handleExpand} // Expand the input when the button is clicked
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
