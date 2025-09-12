


import { BeforeOpenEventArgs, Spreadsheet } from '@syncfusion/ej2-spreadsheet';

//Initialize the Spreadsheet control
    let spreadsheet: Spreadsheet = new Spreadsheet({
        openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
        saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
        beforeOpen: (args: BeforeOpenEventArgs) => {
            args.requestData['headers'] = {
                ...args.requestData,
                headers: { Authorization: 'YOUR TEXT' },
            }
        }
    });
//Render the initialized Spreadsheet
spreadsheet.appendTo('#spreadsheet');


