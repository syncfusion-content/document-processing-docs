// Initialize the Spreadsheet component.

var columns = [
    { width: 180 }, { width: 130 }, { width: 130 },
    { width: 180 }, { width: 130 }, { width: 120 }
];

var sheet = [{
    name: 'Car Sales Report',
    ranges: [{ dataSource: data }],
    columns: columns
}]

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheet
});

// Render initialized Spreadsheet.
spreadsheet.appendTo('#spreadsheet');

document.getElementById("insertSheet").onclick = function () {
    spreadsheet.insertSheet(
        [
            {
                index: 1,
                name: 'new_sheet',
                ranges: [
                    {
                        dataSource: employeeData,
                        startCell: 'A1'
                    },
                ],
                columns: columns,
            },
        ]
    );
    // Use the timeout function to wait until the sheet is inserted.
    setTimeout(function () {
        // Method for switching to a new sheet.
        spreadsheet.goTo('new_sheet!A1');
    })
};