import React from "react";
import "./SearchBar.css"

function SearchBar({setSearchTerm}){
    return (
    <div className="search-bar">
        <input type="text" placeholder="Search for a product" 
        onChange={(e) => setSearchTerm(e.target.value)} />
    </div>
    );
}

export default SearchBar;