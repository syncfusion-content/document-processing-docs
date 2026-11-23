// Initialize Spreadsheet component without openUrl for client-side processing.
var spreadsheet = new ej.spreadsheet.Spreadsheet({
    allowOpen: true,
    created: function () {
        fetch('https://cdn.syncfusion.com/scripts/spreadsheet/Sample.xlsx')
            .then(function (response) { return response.blob(); })
            .then(function (fileBlob) {
                // Convert obtained blob data into a File object.
                var file = new File([fileBlob], 'Sample.xlsx', {
                    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                });
                spreadsheet.open({ file: file });
            });
    }
});

// Render initialized Spreadsheet.
spreadsheet.appendTo('#spreadsheet');
