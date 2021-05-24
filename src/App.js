import React, { useState, useEffect } from 'react';
import './App.css';
import Issues from './components/Issues';
import SearchBar from './components/SearchBar';
import apiResponse from './apiResponse';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [filteredIssues, setFilteredIssues] = useState(apiResponse);

  useEffect(() => {
    document.title = `Your searched ${filteredIssues.length} issues`;
  });

  const handleInput = (e) => {
    setSearchInput(e.target.value);
    if (e.target.value.length > 0) {
      let filteredIssues = apiResponse.filter((issue) => {
        if (issue.title.includes(e.target.value)) {
          return true;
        }
        return false;
      });

      console.log(filteredIssues);
      setFilteredIssues(filteredIssues);
    } else {
      setFilteredIssues(apiResponse);
    }
  };

  return (
    <div>
      <SearchBar searchInput={searchInput} handleInput={handleInput} />
      <Issues issuesToShow={filteredIssues} />
    </div>
  );
}

export default App;
