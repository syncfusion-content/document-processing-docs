import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';

let sheet: SheetModel[] = [
  {
    name: 'PriceDetails',
    rows: [
      {
        cells: [
          { value: 'Item Name' },
          { value: 'Stock Detail' },
          { value: 'Website' },
        ],
      },
      {
        cells: [
          { value: 'Casual Shoes' },
          { value: 'OUT OF STOCK' },
          { value: 'Amazon' },
        ],
      },
      {
        cells: [
          {
            value: 'Sports Shoes',
            notes: {
              text: 'These shoes have the highest sales in terms of quantity this month.',
              isVisible: true
            },
          },
          { value: 'IN STOCK' },
          {
            value: 'Overstack',
            notes: { text: 'This website is best for buying sports shoes.' },
          },
        ],
      },
      {
        cells: [
          { value: 'Formal Shoes' },
          { value: 'IN STOCK' },
          { value: 'AliExpress' },
        ],
      },
      {
        cells: [
          { value: 'Sandals & Floaters' },
          { value: 'OUT OF STOCK' },
          { value: 'AliBaba' },
        ],
      },
      {
        cells: [
          { value: 'Flip-Flops & Slippers' },
          { value: 'IN STOCK' },
          { value: 'Taobao' },
        ],
      },
    ],
    columns: [{ width: 160 }, { width: 160 }, { width: 120 }],
  },
  {
    name: 'Stock',
    rows: [
      {
        cells: [{ value: 'Item Name' }, { value: 'Available Count' }],
      },
      {
        cells: [{ value: 'Sports Shoes' }, { value: '30' }],
      },
      {
        cells: [{ value: 'Formal Shoes' }, { value: '25' }],
      },
      {
        cells: [{ value: 'Flip-Flops & Slippers' }, { value: '40' }],
      },
      {
        cells: [{ value: 'Running Shoes' }, { value: '25' }],
      },
    ],
    columns: [{ width: 160 }, { width: 120 }],
  },
];

let spreadsheet: Spreadsheet = new Spreadsheet({
  sheets: sheet,
  allowOpen: true,
  openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
  allowSave: true,
  saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
  created: function (): void {
    spreadsheet.cellFormat({ fontWeight: 'bold' }, 'A1:C1');
  }
});
spreadsheet.appendTo('#spreadsheet');
