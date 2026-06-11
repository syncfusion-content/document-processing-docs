ej.base.enableRipple(true);

let spreadsheet = new ej.spreadsheet.Spreadsheet({
    openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
    saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
    openComplete: function() {
        if (spreadsheet) {
        spreadsheet.activeSheetIndex = 2;
        }
    }
});

spreadsheet.appendTo('#spreadsheet');
