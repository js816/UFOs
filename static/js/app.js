// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    var changedElement = d3.select(this);
    // 4b. Save the value that was changed as a variable.
    var elementValue = changedElement.property("value");
    // 4c. Save the id of the filter that was changed as a variable.
    var filterId = changedElement.attr("id");
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (elementValue) {
      filters[filterId] = elementValue;
    }
    else {
      delete filters[filterId];
    }
  
    // Adding for debugging
    // console.log(filters);
    // console.log(Object.keys(filters));
    // console.log(Object.values(filters));
    // 6. Call function to apply all filters and rebuild the table
    // Debugging, trying passing in filters for the fuction
    filterTable(filters);
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  // Debugging, trying passing in filters for the function
  function filterTable(filters) {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
  
    // Debugging before the loop
    // console.log(filters);
    // console.log(Object.keys(filters));
    // console.log(Object.values(filters));

    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    // filter by row.key === value
    //filters.forEach(filteredData = filteredData.filter(row => row.filterId === elementValue));
    // filters.forEach(filteredData = filteredData.filter(row => row.filter = ))
    /*
    for (const filter in filters) {
      // filterKey = Object.keys(filter);
      console.log(filter);
      console.log(Object.values(filter));
      console.log(Object.keys(filter));
      filteredData = filteredData.filter(row => row.filter === filter);
      // console.log(filters[filter]);
    }
    */
    
    // Debugging by adapting code found here:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
    for (const [key, value] of Object.entries(filters)) {
      //filteredData = filteredData.filter(row => row.key === value);
      // Filter works with row.datetime, etc but not row.key even though key = datetime
      filteredData = filteredData.filter(row => row.datetime === value);
      // Debugging with two == instead of three ===
      //filteredData = filteredData.filter(row => row.key == value);
      console.log(`filteredData = filteredData.filter(row => row.${key} === ${value});`);
      console.log(`${key} === ${value}`);
      console.log(key);
      console.log(value);
    };

    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);
