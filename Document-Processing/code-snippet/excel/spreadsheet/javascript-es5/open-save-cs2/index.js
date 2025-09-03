 //Initialize Spreadsheet component.
    var spreadsheet = new ej.spreadsheet.Spreadsheet({
        openUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/open',
        saveUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/save',
        created: function () {
            fetch("https://cdn.syncfusion.com/scripts/spreadsheet/Sample.xlsx") // fetch the remote url
                .then((response) => {
                    response.blob().then((fileBlob) => { // convert the excel file to blob
                    var file = new File([fileBlob], "Sample.xlsx"); //convert the blob into file
                    spreadsheet.open({ file: file }); // open the file into Spreadsheet
                    })
                })
        }
    });
    //Render initialized Spreadsheet component.
    spreadsheet.appendTo('#spreadsheet');

