import React from 'react';

function SearchBar(props) {
  const { handleInput, searchInput } = props;

  return (
    <div>
      <input type="text" onChange={handleInput} value={searchInput} />
    </div>
  );
}

export default SearchBar;
