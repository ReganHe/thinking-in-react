import React, { Component } from 'react'
import './App.css';
import Issues from './components/Issues'
import SearchBar from './components/SearchBar'
import apiResponse from './apiResponse'

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Issues issuesToShow={apiResponse} />
      </div>
    )
  }
}

export default App
