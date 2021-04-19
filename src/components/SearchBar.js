import React, { Component } from "react"

// export class SearchBar extends Component {
//   constructor() {
//     super()
//   }
//   // forms
//   // local state
//   // onChange event listener
//   // onChange event handler
//   // state is bound to the input
//   render() {
//     return (

//     )
//   }
// }

// export default SearchBar

function SearchBar(props) {
  const { handleInput, searchInput } = props
  
  return (
    <div>
      <input
        type="text"
        onChange={handleInput}
        value={searchInput}
      />
    </div>
  )
}

export default SearchBar
