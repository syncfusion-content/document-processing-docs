
import { Spreadsheet, BeforeSaveEventArgs, SaveCompleteEventArgs } from '@syncfusion/ej2-spreadsheet';
import { data } from './datasource.ts';

let spreadsheet: Spreadsheet = new Spreadsheet({
  openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
  saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
  sheets: [{
    name: 'Car Sales Report',
    ranges: [{ dataSource: data }],
    columns: [
      { width: 180 }, { width: 130 }, { width: 130 }, { width: 180 },
      { width: 130 }, { width: 120 }
    ]
  }],

  beforeSave: (args: BeforeSaveEventArgs): void => {
    args.needBlobData = true; // To trigger the saveComplete event.
    args.isFullPost = false; // Get the spreadsheet data as blob data in the saveComplete event.
  },

  saveComplete: (args: SaveCompleteEventArgs): void => {
    // To obtain the blob data
    console.log(args.blobData);
  }

});

spreadsheet.appendTo('#spreadsheet');
