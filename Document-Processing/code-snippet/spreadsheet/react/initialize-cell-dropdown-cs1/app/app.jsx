import React, { useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, setCell} from '@syncfusion/ej2-react-spreadsheet';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { getComponent } from '@syncfusion/ej2-base'

function App() {
  let spreadsheet;
  let isPaste;
  const spreadsheetRef = useRef(null);

  const legendOptions = [10,20,30,40,50,60];

  const onCreated = () => {
    spreadsheet = spreadsheetRef.current;
    spreadsheet.setRowsHeight(35, ['1:100']);
    // Rendering dropdown list for a specific range initially.
    const activeSheet = spreadsheet.getActiveSheet();
    for (let rowIdx = 0; rowIdx <= 5; rowIdx++) {
      for (let colIdx = 0; colIdx <= 3; colIdx++) {
        setCell(rowIdx, colIdx, activeSheet, { template: 'dropdown-list' }, true)
      }
    }
    spreadsheet.resize();
  };
  

  // Triggers before the cell is appended to the DOM.
  const beforeCellRender = (args) => {
    if (spreadsheet) {
      if (args.rowIndex !== undefined && args.colIndex !== undefined) {
        // To render dropdown if template property 'dropdown-list' is set.
        if (args.cell && args.cell.template === 'dropdown-list') {
          addDropDownlist(args.cell, args.element, legendOptions);
        }
      }
    }
  }

  // To render the dropdown list.
  const addDropDownlist = (cell, element, legendOptions) => {
    element.innerHTML = '';
    var inputEle = document.createElement('input');
    element.appendChild(inputEle);
    new DropDownList({
      placeholder: 'Select a value',
      dataSource: legendOptions,
      cssClass: 'e-dropdown-list',
      value: cell && cell.value ? cell.value : null,
      change: (event) => {
        dropDownChangeHandler(event);
      }
    }, inputEle);
  }

  // To handle the change event of dropdown list.
  const dropDownChangeHandler = (event) => {
    const sheet = spreadsheet.getActiveSheet();
    spreadsheetRef.current.updateCell({ value: event.value.toString() }, sheet.activeCell);
  }

  // Triggers before any action begins in the spreadsheet.
  const actionBegin = (args) => {
    if (args.action === 'clipboard' && args.args.eventArgs.requestType === 'paste') {
      isPaste = true;
    }
  }

  // Triggers before changing any cell properties in the spreadsheet.
  const beforeCellUpdate = (args) => {
    if (isPaste) {
      if (args.cell) {
        if (args.cell.template === 'dropdown-list') {
          const cellEle = spreadsheet.getCell(args.rowIndex, args.colIndex);
          const ddlEle = cellEle.querySelector('.e-dropdownlist.e-control');
          if (ddlEle) {
            const ddlComp = getComponent(ddlEle, 'dropdownlist');
            // Updating the value alone if the cell contains the dropdownlist component
            ddlComp.value = spreadsheet.getDisplayText(args.cell);
          } else {
            // To render the dropdown component if the cell does not contain dropdown.
            addDropDownlist(args.cell, cellEle, legendOptions)
          }
        }
      }
      else {
        const cellEle = spreadsheet.getCell(args.rowIndex, args.colIndex);
        const ddlEle = cellEle.querySelector('.e-dropdownlist.e-control');
        if (ddlEle) {
          cellEle.innerHTML = ''; // To remove the dropdown element from cut cell.
        };
      }
    }
  }

  //Triggers after an action completes in the spreadsheet.
  const actionComplete = (args) => {
    if (args.action === 'clipboard' && args.eventArgs.requestType === 'paste') {
      isPaste = false;
    }
  }

  return (
    <SpreadsheetComponent
      ref={spreadsheetRef}
      created={onCreated}
      beforeCellRender={beforeCellRender}
      beforeCellUpdate={beforeCellUpdate}
      height="600px"
      actionBegin={actionBegin}
      actionComplete={actionComplete}
      sheets={[
        {
          name: 'Sheet1',
          rowCount: 10,
          colCount: 5,
        },
      ]}
    />
  );
}

export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);