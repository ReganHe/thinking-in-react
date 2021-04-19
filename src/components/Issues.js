import React from "react"
import Status from "./Status"
import Issue from "./Issue"

function Issues(props) {
  // render multiple Issue using .map
  // map over apiresponse
  let allIssues = props.issuesToShow.map((issue, i) => {
    return (
      <Issue
        key={i}
        title={issue.title}
        issue={issue.issue}
        author={issue.author}
        date={issue.date}
      />
    )
  })
  return (
    <div>
      <Status />
      {/* <Issue /> */}
      {allIssues}
    </div>
  )
}

export default Issues
