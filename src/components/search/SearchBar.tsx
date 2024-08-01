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

  return (
    <Paper
      className="w-full border-0"
      component="form"
      onSubmit={(e) => e.preventDefault()} // Prevent form submission on Enter key press
      sx={{
        p: "4px 4px",
        display: "flex",
        alignItems: "center",
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
      <button className="bg-orange-500 h-full w-[20%] p-2 hover:bg-orange-600">
        <SearchIcon />
      </button>
    </Paper>
  );
};
