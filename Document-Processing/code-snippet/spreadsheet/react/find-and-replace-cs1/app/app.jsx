import * as React from 'react';
import './App.css';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import { getDefaultData } from './data';

function App() {
  const spreadsheetRef = React.useRef(null);

  const actionBegin = (args) => {
    const action = args?.action;
    const eventArgs = args?.args?.eventArgs ?? args?.eventArgs;

    // Check the action is beforeReplaceAll.
    if (action === 'beforeReplaceAll') {
      // Check the mode is Sheet.
      if (eventArgs?.mode === 'Sheet') {
        const spreadsheet = spreadsheetRef.current;
        if (!spreadsheet) return;

        // Get the active sheet's selected range.
        const selectedRange = spreadsheet.getActiveSheet()?.selectedRange;
        if (!selectedRange) return;

        // Convert the selected range into cell collection.
        const selectedRangeCollection = generateCellCollection(selectedRange, spreadsheet);
        const replaceAllCollection = eventArgs.addressCollection;
        if (!Array.isArray(replaceAllCollection)) return;

        // Create a Set from selectedRangeCollection for efficient lookup.
        const selectedSet = new Set(selectedRangeCollection);
        const updatedCollection = [];

        // Iterate through replaceAllCollection and keep only cells within selection.
        for (const cell of replaceAllCollection) {
          if (cell && selectedSet.has(cell)) {
            updatedCollection.push(cell);
          } else {
            // If the cell is not in selectedRangeCollection, add null to the updated collection
            updatedCollection.push(null);
          }
        }

        if (updatedCollection.length > 0) {
          // Assign the newly created cell collection to the addressCollection of replaceAll action.
          eventArgs.addressCollection = updatedCollection;
        }
      }
    }
  };

  const generateCellCollection = (range, spreadsheet) => {
    // Initialize the collection that will hold cell references.
    const collection = [];
    // Split the range string into start and end cell references.
    let [startCell, endCell] = range.split(':');
    endCell = endCell || startCell;
    // Get the name of the active sheet.
    const activeSheetName = spreadsheet.getActiveSheet()?.name || 'Sheet1';

    // Extract column and row numbers from start and end cell references.
    const [startCol, startRow] = startCell.match(/[A-Z]+|\d+/g) || [];
    const [endCol, endRow] = endCell.match(/[A-Z]+|\d+/g) || [];

    // Calculate ASCII codes for start and end columns.
    const colRange = [startCol.toUpperCase().charCodeAt(0), endCol.toUpperCase().charCodeAt(0)];
    // Parse start and end row numbers.
    const rowRange = [parseInt(startRow, 10), parseInt(endRow, 10)];
    // Iterate over columns and rows within the specified range.
    for (let col = colRange[0]; col <= colRange[1]; col++) {
      for (let row = rowRange[0]; row <= rowRange[1]; row++) {
        // Push each cell reference into the collection array
        collection.push(`${activeSheetName}!${String.fromCharCode(col)}${row}`);
      }
    }
    // Return the array of cell references.
    return collection;
  };

  return (
    <SpreadsheetComponent
      openUrl="https://services.syncfusion.com/react/production/api/spreadsheet/open"
      saveUrl="https://services.syncfusion.com/react/production/api/spreadsheet/save"
      ref={spreadsheetRef}
      actionBegin={actionBegin}
      sheets={[
        {
          name: 'Sheet1',
          ranges: [
            {
              dataSource: getDefaultData(),
              startCell: 'A1'
            }
          ]
        }
      ]}
    >
    </SpreadsheetComponent>
  );
}

export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);