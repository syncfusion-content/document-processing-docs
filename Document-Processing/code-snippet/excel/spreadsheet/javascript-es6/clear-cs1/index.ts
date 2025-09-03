


import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import { DropDownButton, ItemModel } from "@syncfusion/ej2-splitbuttons";
import { orderData } from './datasource.ts';

//Initialize action items.
let items: ItemModel[] = [
  {
    text: "Clear All"
  },
  {
    text: "Clear Formats"
  },
  {
    text: "Clear Contents"
  },
  {
    text: "Clear Hyperlinks"
  }
];

// Initialize the DropDownButton component.
let drpDownBtn: DropDownButton = new DropDownButton({
  items: items,
  cssClass: "e-round-corner",
  select: (args: MenuEventArgs) => {
    if (args.item.text === 'Clear All')
      spreadsheet.clear({ type: 'Clear All', range: 'D1:D10' }); // Clear the content, formats and hyperlinks applied in the provided range.
    if (args.item.text === 'Clear Formats')
      spreadsheet.clear({ type: 'Clear Formats', range: 'B1:B10' }); // Clear the formats applied in the provided range
    if (args.item.text === 'Clear Contents')
      spreadsheet.clear({ type: 'Clear Contents', range: 'A1:A10' }); // Clear the content in the provided range
    if (args.item.text === 'Clear Hyperlinks')
      spreadsheet.clear({ type: 'Clear Hyperlinks', range: 'F2:F6' }); // Clear the hyperlinks applied in the provided range
  }
});

// Render initialized DropDownButton.
drpDownBtn.appendTo("#element");

//Initialize the SpreadSheet control
let spreadsheet: Spreadsheet = new Spreadsheet({
  sheets: [{
    ranges: [{ dataSource: orderData }],
    columns: [{ width: 80 }, { width: 80 }, { width: 80 },
    { width: 160 }, { width: 100 }, { width: 150 }]
  }],
  created: (): void => {
    spreadsheet.cellFormat({ fontWeight: 'bold', fontSize: '12pt' }, 'A1:E1');
    spreadsheet.cellFormat({ color: '#10c469' }, 'B1:B10');
  },
});
spreadsheet.appendTo('#spreadsheet');



