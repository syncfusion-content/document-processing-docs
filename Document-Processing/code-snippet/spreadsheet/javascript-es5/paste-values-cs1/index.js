// app.ts
import { Spreadsheet, ActionEventArgs } from '@syncfusion/ej2-spreadsheet';
import { getDefaultData } from './datasource.ts';

// Initialize Spreadsheet
const spreadsheet = new Spreadsheet({
  sheets: [
    {
      name: 'Sheet1',
      ranges: [
        {
          dataSource: getDefaultData,
          startCell: 'A1'
        }
      ]
    }
  ],

  // Equivalent of React actionBegin
  actionBegin: (args) => {
    // When user pastes: force paste type to "Values"
    if (args.action === 'clipboard') {
      args.args.eventArgs.type = 'Values';
    }
  }
});

// Mount Spreadsheet instance to host element
spreadsheet.appendTo('#spreadsheet');