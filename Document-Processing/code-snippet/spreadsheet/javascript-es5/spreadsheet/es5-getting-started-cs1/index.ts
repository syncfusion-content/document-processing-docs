

import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';

// Initialize the Spreadsheet component
let spreadsheet: Spreadsheet = new Spreadsheet({
    openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
    saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save'
});

// Render initialized Spreadsheet
spreadsheet.appendTo('#element');


