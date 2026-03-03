//Initialize Spreadsheet component.
var spreadsheet = new ej.spreadsheet.Spreadsheet({
    openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
    saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
    beforeOpen: function (args) {
        // Ensure requestData exists
        if (!args.requestData) {
            args.requestData = {};
        }
        // Ensure headers object exists (preserve any existing headers)
        if (!args.requestData.headers) {
            args.requestData.headers = {};
        }
        // Set/override the Authorization header
        args.requestData.headers.Authorization = 'YOUR TEXT';
    }
});
//Render initialized Spreadsheet component.
spreadsheet.appendTo('#spreadsheet');