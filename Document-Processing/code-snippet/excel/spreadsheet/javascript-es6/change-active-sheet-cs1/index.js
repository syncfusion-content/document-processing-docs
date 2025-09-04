ej.base.enableRipple(true);

let spreadsheet = new ej.spreadsheet.Spreadsheet({
    openUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/open',
    saveUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/save',
    openComplete: function() {
        if (spreadsheet) {
        spreadsheet.activeSheetIndex = 2;
        }
    }
});

spreadsheet.appendTo('#spreadsheet');
