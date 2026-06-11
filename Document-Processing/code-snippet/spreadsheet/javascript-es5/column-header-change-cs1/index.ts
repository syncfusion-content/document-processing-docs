import { Spreadsheet, CellRenderEventArgs } from '@syncfusion/ej2-spreadsheet';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

let spreadsheet: Spreadsheet = new Spreadsheet({
  beforeCellRender: (args: CellRenderEventArgs) => {
    if (
      args.colIndex >= 0 &&
      args.colIndex <= 10 &&
      args.element.classList.contains('e-header-cell')
    ) {
      let text: string = 'custom header ' + args.colIndex.toString();
      args.element.innerText = text;
    }
  }
});

spreadsheet.appendTo('#spreadsheet');
