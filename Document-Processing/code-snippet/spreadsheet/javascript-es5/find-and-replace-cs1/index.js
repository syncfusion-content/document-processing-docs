// app.ts
import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import { getDefaultData } from './datasource.ts';

function generateCellCollection(range, spreadsheet) {
  const collection = [];

  // Split into start / end (if only one cell, endCell = startCell)
  let [startCell, endCell] = range.split(':');
  endCell = endCell || startCell;

  const sheetName = spreadsheet.getActiveSheet().name;

  // Extract column+row parts
  const [startCol, startRow] = startCell.match(/[A-Z]+|\d+/g) || [];
  const [endCol, endRow] = endCell.match(/[A-Z]+|\d+/g) || [];

  // Convert columns to ASCII for looping
  const colRange = [
    startCol.toUpperCase().charCodeAt(0),
    endCol.toUpperCase().charCodeAt(0)
  ];

  const rowRange = [
    parseInt(startRow),
    parseInt(endRow)
  ];

  // Build full sheet‑qualified cell list
  for (let col = colRange[0]; col <= colRange[1]; col++) {
    for (let row = rowRange[0]; row <= rowRange[1]; row++) {
      collection.push(`${sheetName}!${String.fromCharCode(col)}${row}`);
    }
  }
  return collection;
}

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

  // Equivalent of React's `actionBegin`
  actionBegin: (args) => {
    const action = args.action;
    const eventArgs = args.args && args.args.eventArgs;

    if (action === 'beforeReplaceAll') {
      // Selected range from active sheet
      const selectedRange = spreadsheet.getActiveSheet().selectedRange;

      if (!selectedRange || !eventArgs) return;

      const selectedRangeCollection = generateCellCollection(
        selectedRange,
        spreadsheet
      );

      const replaceAllCollection = eventArgs.addressCollection;

      if (!Array.isArray(replaceAllCollection)) return;

      // Fast lookup using Set
      const selectedSet = new Set(selectedRangeCollection);
      const updatedCollection = [];

      for (const cell of replaceAllCollection) {
        if (cell && selectedSet.has(cell)) {
          updatedCollection.push(cell);
        } else {
          updatedCollection.push(null);
        }
      }

      if (updatedCollection.length > 0) {
        eventArgs.addressCollection = updatedCollection;
      }
    }
  }
});

spreadsheet.appendTo('#spreadsheet');