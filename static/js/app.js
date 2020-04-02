// from data.js
var tableData = data;


// console.log(tableData)
// YOUR CODE HERE!
var tbody = d3.select("tbody")

// function popTable(list){
    
//     tbody.html("")
//     for (var i=0;i < list.length; i ++){
//         var row = tbody.append("tr")
//         var values = Object.values(list[i])

//         for (var j=0;j < values.length; j++){
//             row.append("td").text(values[j])
//         }
//     }
// }

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      const row = tbody.append("tr");
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      // console.log(dataRow)
      Object.values(dataRow).forEach((val) => {
          // console.log(val)
        let cell = row.append("td");
          cell.text(val);
        }
      );
    });
  }

function onBtnClick(){
    var date = d3.select("#datetime").property("value")
    // var inputValue = input.property("value")
    let filteredData = tableData;
    if (date){
        console.log(filteredData)
       filteredData = filteredData.filter(d=> d.datetime === date)
        // console.log(inputValue)
        // console.log(filteredData)
    }
    buildTable(filteredData)

}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", onBtnClick);
// Build the table when the page loads
buildTable(tableData);