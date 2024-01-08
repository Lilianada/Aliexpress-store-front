import React from "react";
import { IoSearch } from "react-icons/io5";
import "./style.scss";

export default function SearchBar() {
  return (
    <form className="search_container">
      <div className="search_bar">
        <IoSearch className="search_icon"/>
        <input type="search" className="search_input" placeholder="Search all categories..." />
      </div>
      <button type="submit" className="search_button">
        Search
      </button>
    </form>
  );
}
