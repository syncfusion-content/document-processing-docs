// Initialize Spreadsheet component.
var spreadsheet = new ej.spreadsheet.Spreadsheet({
    created: function () {
        fetch('https://cdn.syncfusion.com/scripts/spreadsheet/Sample.xlsx') // fetch the remote url
            .then(function (response) {
                response.blob().then(function (fileBlob) { // convert the excel file to blob
                    var file = new File([fileBlob], 'Sample.xlsx'); // convert the blob into file
                    spreadsheet.open({ file: file }); // open the file into Spreadsheet
                });
            });
    }
});

// Render initialized Spreadsheet component.
spreadsheet.appendTo('#spreadsheet');
