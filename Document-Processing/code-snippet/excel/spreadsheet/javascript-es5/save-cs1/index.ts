


import { Spreadsheet, ColumnModel } from '@syncfusion/ej2-spreadsheet';
import { data } from './datasource.ts';
import { DropDownButton, ItemModel } from "@syncfusion/ej2-splitbuttons";

//Initialize action items.
let items: ItemModel[] = [
  {
    text: "Save As xlsx"
  },
  {
    text: "Save As xls"
  },
  {
    text: "Save As csv"
  },
  {
    text: "Save As pdf"
  }
];

// Initialize the DropDownButton component.
let drpDownBtn: DropDownButton = new DropDownButton({
  items: items,
  cssClass: "e-round-corner",
  select: (args: MenuEventArgs) => {
    if (args.item.text === 'Save As xlsx')
      spreadsheet.save({url: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save', fileName: "Sample", saveType: "Xlsx"});
    if (args.item.text === 'Save As xls')
      spreadsheet.save({url: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save', fileName: "Sample", saveType: "Xls"});
    if (args.item.text === 'Save As csv')
      spreadsheet.save({url: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',fileName: "Sample", saveType: "Csv"});
    if (args.item.text === 'Save As pdf')
      spreadsheet.save({url: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',fileName: "Sample", saveType: "Pdf"});
  }
});

// Render initialized DropDownButton.
drpDownBtn.appendTo("#element");


let columns: ColumnModel[] = [{ width: 100 }, { width: 130 },{ width: 96},
    { width: 130 }, { width: 130 },{ width: 96},
    { width: 100 }, { width: 100 },{ width: 110}, { width: 100 }, { width: 130 },{ width: 150}]

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: [{ ranges: [{ dataSource: data }], columns: columns }],
    allowSave: true
});

//Render the initialized Spreadsheet.
spreadsheet.appendTo('#spreadsheet');


