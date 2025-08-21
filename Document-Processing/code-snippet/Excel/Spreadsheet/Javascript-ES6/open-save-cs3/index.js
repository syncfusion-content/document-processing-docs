 //Initialize Spreadsheet component.
    var spreadsheet = new ej.spreadsheet.Spreadsheet({
        openUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/open',
        saveUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/save',
        beforeOpen: function (args) {
            args.requestData['headers'] = {
              ...args.requestData,
              headers: { Authorization: 'YOUR TEXT' },
            };
        }
    });
    //Render initialized Spreadsheet component.
    spreadsheet.appendTo('#spreadsheet');

