// index.ts
import { Spreadsheet, BeforeOpenEventArgs } from '@syncfusion/ej2-spreadsheet';

// Initialize the Spreadsheet control
const spreadsheet: Spreadsheet = new Spreadsheet({
  allowOpen: true,
  openUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/open',
  beforeOpen: (args: BeforeOpenEventArgs): void => {
    args.parseOptions = {
      ignoreStyle: true,
      ignoreFormat: true,
      ignoreChart: true,
      ignoreImage: true,
      ignoreMergedCell: true,
      ignoreFormula: true,
      ignoreValidation: true,
      ignoreConditionalFormat: true,
    };
  },
});

// Append the spreadsheet to the DOM
spreadsheet.appendTo('#spreadsheet');