import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

let spreadsheet: Spreadsheet = new Spreadsheet({
    openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
    saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
    openComplete: function() {
        if (spreadsheet) {
        spreadsheet.activeSheetIndex = 2;
        }
    }
});

spreadsheet.appendTo('#spreadsheet');
