
## hierarchy of components

* App.js
  * SearchBar.js
  * Issues.js
    * Status.js
    * Issue.js


## Total state


App.js
  - input text (string)
  - issues/apiResponse changes based on input [{}]

  SearchBar.js

  Issues.js

    Issue.js

    Status.js
      - (prop) issues/apiResponse.length


## You do

Add logic to update searchBar input
  * onChange
  * setState

Add logic to FILTER filteredIssues

