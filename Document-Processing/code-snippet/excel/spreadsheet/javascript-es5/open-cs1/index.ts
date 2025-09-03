


import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';

//Initialize the Spreadsheet control
let spreadsheet: Spreadsheet = new Spreadsheet({
    allowOpen: true,
    openUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/open'
});

//Render the initialized Spreadsheet
spreadsheet.appendTo('#spreadsheet');


