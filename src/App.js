import React, { Component } from 'react'
import './App.css';
import Issues from './components/Issues'
import SearchBar from './components/SearchBar'
import apiResponse from './apiResponse'

class App extends Component {
  constructor() {
    super()

    this.state = {
      searchInput: "",
      filteredIssues: apiResponse
    }
  }

  render() {
    const { searchInput, filteredIssues } = this.state 

    return (
      <div>
        <SearchBar searchInput={searchInput} />
        <Issues issuesToShow={filteredIssues} />
      </div>
    )
  }
}

export default App
