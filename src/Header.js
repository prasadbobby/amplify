import React, { useState } from "react";

function Header () {
  const [search, setSearch] = useState('');
  return (
    <div className = "header">
      <h2>Header component</h2>
      <input 
        type = "text" 
        placeholder = "Search Amplify.."
        value = {search}
        onChangeText = {(event) => setSearch(event.target.value)}>
      />
      <button onClick = {() => handleSearch()}>Search</button>
    </div>
  );
}

export default Header;
