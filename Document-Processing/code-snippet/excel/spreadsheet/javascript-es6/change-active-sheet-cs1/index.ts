import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

let spreadsheet: Spreadsheet = new Spreadsheet({
    openUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/open',
    saveUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/save',
    openComplete: function() {
        if (spreadsheet) {
        spreadsheet.activeSheetIndex = 2;
        }
    }
});

spreadsheet.appendTo('#spreadsheet');
