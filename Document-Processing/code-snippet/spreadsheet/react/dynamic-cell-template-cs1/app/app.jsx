import { useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, setCell } from '@syncfusion/ej2-react-spreadsheet';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

function App() {
  let spreadsheet = null;
  const spreadsheetRef = useRef(null);

  const dropDownOptions = [10, 20, 30, 40, 50, 60];

  const onCreated = () => {
    spreadsheet = spreadsheetRef.current;
    if (!spreadsheet) return;
    spreadsheet.setRowsHeight(35, ['1:100']);
    // Rendering dropdown list for a specific range initially.
    const activeSheet = spreadsheet.getActiveSheet();
    for (let colIdx = 0; colIdx <= 3; colIdx++) {
        setCell(0, colIdx, activeSheet, { template: 'dropdown-list' }, true);
    }
    spreadsheet.resize();
  };

  // If you want to handle the dropdown via a custom ribbon button, you can
  // create a small handler like this:
  // const handleCreated = () => {
  //   const spreadsheet = spreadsheetRef.current;
  //   spreadsheet.addRibbonTabs([{ header: { text: 'Template' }, content: [{
  //     text: 'DropDown List', click: () => {
  //       const sheet = spreadsheet.getActiveSheet();
  //       const [rowIdx, colIdx] = getCellIndexes(sheet.activeCell);
  //       const cellModel = getCell(rowIdx, colIdx, sheet);
  //       const cellEle = spreadsheet.getCell(rowIdx, colIdx);
  //       if (cellModel && cellModel.template === 'dropdown-list') return;
  //       addDropDownlist(cellModel, cellEle, dropDownOptions);
  //       spreadsheet.updateCell({ template: 'dropdown-list' }, sheet.activeCell);
  //     }
  //   }] }]);
  // };

  // Triggers before the cell is appended to the DOM.
  const beforeCellRender = (args) => {
    if (args.rowIndex !== undefined && args.colIndex !== undefined) {
      // To render dropdown if template property 'dropdown-list' is set.
      if (args.cell && args.cell.template === 'dropdown-list') {
        addDropDownlist(args.cell, args.element, dropDownOptions);
      }
    }
  };

  // To render the dropdown list.
  const addDropDownlist = (cell, element, legendOptions) => {
    element.innerHTML = '';
    const inputEle = document.createElement('input');
    element.appendChild(inputEle);
    new DropDownList({
      placeholder: 'Select a value',
      dataSource: legendOptions,
      cssClass: 'e-dropdown-list',
      // Preserve existing value if present
      value: cell && cell.value ? cell.value : null,
    }, inputEle);
  };

  return (
    <SpreadsheetComponent
      ref={spreadsheetRef}
      created={onCreated}
      beforeCellRender={beforeCellRender}
    />
  );
}

export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);