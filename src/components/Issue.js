import React from 'react'

function Issue(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.issue} opened on {props.date} by {props.author}</p>
    </div>
  )
}

export default Issue
