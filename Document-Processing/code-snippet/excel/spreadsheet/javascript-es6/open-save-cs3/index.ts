


import { BeforeOpenEventArgs, Spreadsheet } from '@syncfusion/ej2-spreadsheet';

//Initialize the Spreadsheet control
    let spreadsheet: Spreadsheet = new Spreadsheet({
        openUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/open',
        saveUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/save',
        beforeOpen: (args: BeforeOpenEventArgs) => {
            args.requestData['headers'] = {
                ...args.requestData,
                headers: { Authorization: 'YOUR TEXT' },
            }
        }
    });
//Render the initialized Spreadsheet
spreadsheet.appendTo('#spreadsheet');


