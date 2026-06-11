import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

//Initialize DataManager.
let data: DataManager = new DataManager({
  url: 'https://services.syncfusion.com/js/production/api/Orders',
  crossDomain: true,
  adaptor: new WebApiAdaptor()
});

let spreadsheet: Spreadsheet = new Spreadsheet({
  sheets: [
    {
      name: 'Order details',
      ranges: [{ dataSource: data }],
      columns: [
        { width: 80 },
        { width: 80 },
        { width: 80 },
        { width: 80 },
        { width: 80 },
        { width: 80 },
        { width: 280 },
        { width: 180 },
        { width: 80 },
        { width: 180 },
        { width: 180 },
      ]
    }
  ],
  created: (): void => {
    //Applies cell and number formatting to specified range of the active sheet.
    spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' },
      'A1:K1');
  }
});

spreadsheet.appendTo('#spreadsheet');
