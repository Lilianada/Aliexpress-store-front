import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import "./style.scss";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <form className="search_container">
      <div className="search_bar">
        <IoSearch className="search_icon" />
        <input
          type="search"
          className="search_input"
          placeholder="Search all categories..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      {/* Remove the button for real-time search */}
    </form>
  );
}
