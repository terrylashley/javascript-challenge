// from data.js
var tableData = data;
var tbody = d3.select('tbody');

populateTable(tableData);

// =============================================
function populateTable(data) {
    tbody.html("");

    data.forEach(dataRow => {
        var row = tbody.append('tr');

        Object.values(dataRow).forEach(val => {
            var cell = row.append('td');

            cell.text(val);
        })
    })
}