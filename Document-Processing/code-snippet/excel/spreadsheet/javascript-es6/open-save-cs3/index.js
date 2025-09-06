 //Initialize Spreadsheet component.
    var spreadsheet = new ej.spreadsheet.Spreadsheet({
        openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
        saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
        beforeOpen: function (args) {
            args.requestData['headers'] = {
              ...args.requestData,
              headers: { Authorization: 'YOUR TEXT' },
            };
        }
    });
    //Render initialized Spreadsheet component.
    spreadsheet.appendTo('#spreadsheet');

