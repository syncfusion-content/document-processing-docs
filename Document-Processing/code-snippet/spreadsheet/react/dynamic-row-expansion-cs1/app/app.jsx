import React, { useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import { getCellAddress, getCellIndexes } from '@syncfusion/ej2-spreadsheet';
import { defaultData } from './data';

function App() {
  const spreadsheetRef = useRef(null);
  const fullDataSource = useRef(new Map());
  const headers = useRef([]);

  const ngOnInit = () => {
    const rawData = defaultData();
    // Populate the Map with a 0-based index as the key.
    rawData.forEach((item, index) => {
      fullDataSource.current.set(index, item);
    });
    if (fullDataSource.current.size > 0) {
      headers.current = Object.keys(fullDataSource.current.get(0));
    }
  };

  // To populate row headers.
  const populateHeaders = () => {
    headers.current.forEach((header, colIndex) => {
      const address = getCellAddress(0, colIndex + 1); // Headers start at column B
      spreadsheetRef.current?.updateCell({ value: header }, address);
    });
  };

  // Populates a row using its rowId.
  const populateRow = (rowId) => {
    if (!fullDataSource.current.has(rowId)) return;

    const rowIdx = rowId + 1;
    // To insert an empty row
    spreadsheetRef.current?.insertRow([{ index: rowIdx }]);
    const recordToLoad = fullDataSource.current.get(rowId);

    Object.keys(recordToLoad).forEach((header, colIndex) => {
      const address = getCellAddress(rowIdx, colIndex + 1);
      spreadsheetRef.current?.updateCell({ value: recordToLoad[header] }, address);
    });
  };

  // To create plus icon wrapper.
  const createPlusIconWrapper = () => {
    const wrapperDiv = document.createElement('div');
    wrapperDiv.className = 'e-custom-wrapper';
    wrapperDiv.addEventListener('click', () => plusIconClickHandler());
    const iconSpan = document.createElement('span');
    iconSpan.className = 'e-icons e-plus e-custom-icon';
    wrapperDiv.appendChild(iconSpan);
    return wrapperDiv;
  };

  // Triggers when plus icon is clicked
  const plusIconClickHandler = () => {
    if (!spreadsheetRef.current) return;
    // Populate the row where the icon was clicked.
    const activeCellIdx = getCellIndexes(
      spreadsheetRef.current.getActiveSheet().activeCell
    );
    populateRow(activeCellIdx[0] - 1);
    spreadsheetRef.current.selectRange(
      getCellAddress(activeCellIdx[0] + 1, activeCellIdx[1])
    );
  };

  // Triggers after the component is created
  const handleCreated = () => {
    // Prepare data map and headers
    ngOnInit();

    if (!spreadsheetRef.current) return;
    // Add a header Ribbon tab with a button to initialize everything on click.
    spreadsheetRef.current.addRibbonTabs([
      {
        header: { text: 'Template' },
        content: [
          {
            text: 'Initialize',
            tooltipText: 'Initialize',
            click: () => {
              if (!spreadsheetRef.current) return;
              // 1. Populate Headers
              populateHeaders();
              // 2. Add the plus icon template to A2
              spreadsheetRef.current.updateCell({ template: 'plus-icon' }, 'A2');
              // 3. Load the initial set of records into empty rows
              for (let rowId = 0; rowId < 3; rowId++) {
                populateRow(rowId);
              }
              // 4. Format the header row
              spreadsheetRef.current.cellFormat(
                { fontWeight: 'bold', textAlign: 'center' },
                'B1:G1'
              );
              // Ensure layout updates
              spreadsheetRef.current.resize();
            },
          },
        ],
      },
    ]);
  };

  // Triggers before the cell is appended to DOM
  const handleBeforeCellRender = (args) => {
    if (args.cell && args.cell.template === 'plus-icon') {
      // Pass the rowIndex to the wrapper to make the click handler reliable.
      const wrapperDiv = createPlusIconWrapper();
      args.element.insertBefore(wrapperDiv, args.element.firstChild);
    }
  };

  return (
    <div>
      <SpreadsheetComponent
        ref={spreadsheetRef}
        created={handleCreated}
        beforeCellRender={handleBeforeCellRender}
        openUrl="https://services.syncfusion.com/js/production/api/spreadsheet/open"
        saveUrl="https://services.syncfusion.com/js/production/api/spreadsheet/save"
      />
    </div>
  );
}

export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);
