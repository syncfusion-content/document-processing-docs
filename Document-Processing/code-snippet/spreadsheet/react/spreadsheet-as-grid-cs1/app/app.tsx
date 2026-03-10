import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SheetsDirective, SheetDirective, ColumnsDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-react-spreadsheet';
import { ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { SpreadsheetComponent, getRangeAddress, setRow, getCellAddress, getRangeIndexes } from '@syncfusion/ej2-react-spreadsheet';
import { defaultData } from './data';
import { createCheckBox } from '@syncfusion/ej2-react-buttons';
import { select } from '@syncfusion/ej2-base';

/**
 * Checkbox selection sample
 */
function Default() {
  let spreadsheet: SpreadsheetComponent;
  const cellStyle = { verticalAlign: 'middle' };
  const scrollSettings = { isFinite: true };

  const onCreated = () => {
    const usedRange = spreadsheet.getActiveSheet().usedRange;
    const lastCell = getCellAddress(0, usedRange.colIndex);
    spreadsheet.cellFormat({ fontWeight: 'bold' }, `A1:${lastCell}`);
    updateRowCountBasedOnData();
  };

  // This method handles updating the sheet total row count based on the loaded data (used range).
  const updateRowCountBasedOnData = () => {
    const sheet = spreadsheet.getActiveSheet();
    const usedRange = sheet.usedRange;
    // Updating sheet row count based on the loaded data.
    spreadsheet.setSheetPropertyOnMute(sheet, 'rowCount', usedRange.rowIndex > 0 ? usedRange.rowIndex + 1 : 2);
    spreadsheet.resize();
  };

  // This method handles updating the selection and the checkbox state.
  const updateSelectedState = (selectAllInput?: any, rowCallBack?: any, updateSelectedRange?: any) => {
    const sheet = spreadsheet.getActiveSheet();
    let selectedCount = 0;
    const lastColIdx = sheet.colCount - 1;
    const newRangeColl = [];
    let selectionStartIdx; let isSelectionStarted;
    // Iterating all content rows.
    for (let rowIdx = 1; rowIdx < sheet.rowCount; rowIdx++) {
      if (rowCallBack) {
        rowCallBack(rowIdx); // Invoking the callback for each row, in the callback the selection model and checkbox state updates are handled based on the current interaction.
      }
      // Updating overall selection count and updated selected range.
      if (sheet.rows[rowIdx] && sheet.rows[rowIdx].selected) {
        if (updateSelectedRange && !isSelectionStarted) {
          isSelectionStarted = true;
          selectionStartIdx = rowIdx;
        }
        selectedCount++;
      } else if (isSelectionStarted) {
        newRangeColl.push(getRangeAddress([selectionStartIdx, 0, rowIdx - 1, lastColIdx]));
        isSelectionStarted = false;
      }
    }
    if (selectAllInput) {
      // Updating the current state in the select all checkbox.
      if (selectedCount > 0) {
        if (selectedCount === sheet.rowCount - 1) {
          selectAllInput.classList.remove('e-stop');
          // The class 'e-check' will add the checked state in the UI.
          selectAllInput.classList.add('e-check');
        } else {
          // The class 'e-stop' will add the indeterminate state in the UI.
          selectAllInput.classList.add('e-stop');
        }
      } else {
        selectAllInput.classList.remove('e-check');
        selectAllInput.classList.remove('e-stop');
      }
    }
    if (updateSelectedRange) {
      if (isSelectionStarted) {
        newRangeColl.push(getRangeAddress([selectionStartIdx, 0, sheet.rowCount - 1, lastColIdx]));
      } else if (!newRangeColl.length) {
        // If all rows are unselected, we are moving the selection to A1 cell.
        newRangeColl.push(getRangeAddress([0, 0, 0, 0]));
      }
      // Updating the new selected range in the Spreadsheet.
      spreadsheet.selectRange(newRangeColl.join(' '));
    }
  };

  // This method handles checkbox rendering in all rows and its interactions.
  const renderCheckbox = (args: any) => {
    const sheet = spreadsheet.getActiveSheet();
    const rowIdx = args.rowIndex;
    // Creating checkbox for all content rows.
    const checkbox = createCheckBox(
      spreadsheet.createElement,
      false,
      {
        checked: !!(sheet.rows[rowIdx] && sheet.rows[rowIdx].selected)
      }
    );
    // Appending the checkbox in the first column cell element.
    args.element.appendChild(checkbox);
    // Added click event to handle the checkbox interactions.
    checkbox.addEventListener('click', () => {
      const updateCheckboxSelection = (curRowIdx: any) => {
        if (curRowIdx === rowIdx) {
          const inputEle = select('.e-frame', checkbox);
          let checked = !inputEle.classList.contains('e-check');
          // Updating the current selection state to the custom selected property in the row model for interal prupose.
          setRow(sheet, rowIdx, { selected: checked });
          if (checked) {
            inputEle.classList.add('e-check');
          } else {
            inputEle.classList.remove('e-check');
          }
        }
      }
      const selectAllCell = spreadsheet.getCell(0, 0);
      updateSelectedState(selectAllCell && select('.e-frame', selectAllCell), updateCheckboxSelection, true);
    });
  };

  // This method handles select all checkbox rendering and its interactions.
  const renderSelectAllCheckbox = (tdEle: any) => {
    // Creating selectall checkbox.
    const checkbox = createCheckBox(spreadsheet.createElement, false);
    const inputEle = select('.e-frame', checkbox);
    // Updating select all checkbox state on initial rendering.
    updateSelectedState(inputEle);
    // Appending the selectall checkbox in the A1 cell element.
    tdEle.appendChild(checkbox);
    // Added click event to handle the select all actions.
    checkbox.addEventListener('click', () => {
        const sheet = spreadsheet.getActiveSheet();
        const checked = !inputEle.classList.contains('e-check');
        const rowCallback = (rowIdx: number) => {
            // Updating the current selection state to the custom selected property in the row model for internal purpose.
            setRow(sheet, rowIdx, { selected: checked });
            // Updating the content checkboxes state based on the selectall checkbox state.
            const cell = spreadsheet.getCell(rowIdx, 0);
            const checkboxInput = cell && select('.e-frame', cell);
            if (checkboxInput) {
                if (checked) {
                    // The class 'e-check' will add the checked state in the UI.
                    checkboxInput.classList.add('e-check');
                } else {
                    checkboxInput.classList.remove('e-check');
                }
            }
        };
        updateSelectedState(inputEle, rowCallback, true);
        // If unchecking, also clear the spreadsheet selection highlight
        if (!checked) {
            spreadsheet.selectRange('A1');
        }
    });
  };

  // Triggers before appending the cell (TD) elements in the sheet content (DOM).
  const beforeCellRender = (args: any) => {
    // Checking first column to add checkbox only to the first column.
    if (args.colIndex === 0 && args.rowIndex !== undefined) {
      const sheet = spreadsheet.getActiveSheet();
      if (args.rowIndex === 0) { // Rendering select all checkbox in the A1 cell.
        renderSelectAllCheckbox(args.element);
      } else if (args.rowIndex < sheet.rowCount) { // Rendering checkboxs in the content cell.
        renderCheckbox(args);
      }
    }
  };

  // Triggers before cell selection in spreadsheet
  const beforeSelect = (args: any) => {
    const sheet = spreadsheet.getActiveSheet();
    const cellRngIdx: number[] = getRangeIndexes(args.range);
    const startRow: number = cellRngIdx[0];
    const startCol: number = cellRngIdx[1];
    const endRow: number = cellRngIdx[2];
    const endCol: number = cellRngIdx[3];
    const lastColIdx: number = sheet.colCount - 1;

    // Allow single cell selection
    if (startRow === endRow && startCol === endCol) {
      return;
    }

    // Allow full row or multiple full rows (from first column to last column)
    // This enables checkbox-based single and multiple row selections
    if (startCol === 0 && endCol === lastColIdx) {
      return;
    }

    // Cancel all other selections (partial ranges, multi-cell selections, column selections)
    args.cancel = true;
  }

  // Triggers before initiating the editor in the cell.
  const beforeEditHandler = (args: any) => {
    args.cancel = true;
  };

  return (<div className='control-pane'>
    <div className='control-section spreadsheet-control'>
      <SpreadsheetComponent ref={(ssObj: any) => { spreadsheet = ssObj; }} cellStyle={cellStyle} scrollSettings={scrollSettings} showRibbon={false} allowAutoFill={false} allowOpen={false} allowSave={false} showSheetTabs={false} showFormulaBar={false} showAggregate={false} created={onCreated} beforeCellRender={beforeCellRender} cellEdit={beforeEditHandler} beforeSelect={beforeSelect}>
        <SheetsDirective>
          <SheetDirective name="Car Sales Report" showHeaders={false} standardHeight={36} rowCount={100} colCount={100} frozenRows={1} frozenColumns={1} >
            <RangesDirective>
              <RangeDirective dataSource={defaultData} startCell='B1'></RangeDirective>
            </RangesDirective>
            <ColumnsDirective>
              <ColumnDirective width={40}></ColumnDirective>
              <ColumnDirective width={100}></ColumnDirective>
              <ColumnDirective width={150}></ColumnDirective>
              <ColumnDirective width={150}></ColumnDirective>
              <ColumnDirective width={150}></ColumnDirective>
              <ColumnDirective width={150}></ColumnDirective>
              <ColumnDirective width={150}></ColumnDirective>
              <ColumnDirective width={100}></ColumnDirective>
              <ColumnDirective width={100}></ColumnDirective>
              <ColumnDirective width={100}></ColumnDirective>
              <ColumnDirective width={100}></ColumnDirective>
              <ColumnDirective width={180}></ColumnDirective>
              <ColumnDirective width={180}></ColumnDirective>
            </ColumnsDirective>
          </SheetDirective>
        </SheetsDirective>
      </SpreadsheetComponent>
    </div>
  </div>);
}
export default Default;

const root = createRoot(document.getElementById('sample')!);
root.render(<Default />);