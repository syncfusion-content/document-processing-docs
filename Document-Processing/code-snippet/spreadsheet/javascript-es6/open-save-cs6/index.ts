


import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import { data } from './datasource.ts';

//Initialize the SpreadSheet control
let spreadsheet: Spreadsheet = new Spreadsheet({
  sheets: [{
                ranges: [{ dataSource: data }],
                columns: [{ width: 80 }, { width: 80 },{ width: 80},
                          { width: 160 }, { width: 100 }, {width: 150}]
            }],
            saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
            beforeSave: (args: BeforeSaveEventArgs) => {
               args.customParams = { customParams: 'you can pass custom params in server side'}; // you can pass the custom params
            }
  }
});
spreadsheet.appendTo('#spreadsheet');


