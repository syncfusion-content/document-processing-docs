


import { Spreadsheet, BeforeOpenEventArgs } from '@syncfusion/ej2-spreadsheet';

//Initialize the Spreadsheet control
let spreadsheet: Spreadsheet = new Spreadsheet({
    allowOpen: true,
    openUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/open',
    beforeOpen: (args: BeforeOpenEventArgs) => {
        // your code snippets here
    }
});

//Render the initialized Spreadsheet
spreadsheet.appendTo('#spreadsheet');


