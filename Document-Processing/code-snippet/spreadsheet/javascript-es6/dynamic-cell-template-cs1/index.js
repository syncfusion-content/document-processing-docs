// app.ts
import {
  Spreadsheet,
  CellModel,
  BeforeCellRenderEventArgs,
  getCellIndexes,
  getCell,
  setCell
} from '@syncfusion/ej2-spreadsheet';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

// Options used in the dropdown
const dropDownOptions = [10, 20, 30, 40, 50, 60];

// Helper: render a DropDownList inside a cell element
function addDropDownList(element, options) {
  // Clear existing content before injecting the dropdown
  element.innerHTML = '';

  const inputEle = document.createElement('input');
  element.appendChild(inputEle);

  const ddl = new DropDownList({
    placeholder: 'Select a value',
    dataSource: options,
    cssClass: 'e-dropdown-list',
    change: (event) => {
      // Update the active cell with the selected value
      const activeAddress = (spreadsheet.getActiveSheet()).activeCell;
      spreadsheet.updateCell(
        { value: String((event).value) },
        activeAddress
      );
    }
  });

  ddl.appendTo(inputEle);
}

// Initialize Spreadsheet
const spreadsheet = new Spreadsheet({
  created: () => {
    // Add a custom Ribbon tab to insert a dropdown in the active cell
    spreadsheet.addRibbonTabs([
      {
        header: { text: 'Template' },
        content: [
          {
            text: 'DropDown List',
            click: () => {
              const sheet = spreadsheet.getActiveSheet();
              const [rowIdx, colIdx] = getCellIndexes(sheet.activeCell);
              const cellModel = getCell(rowIdx, colIdx, sheet);
              const cellEle = spreadsheet.getCell(rowIdx, colIdx);

              // Prevent re-adding if the template is already set to dropdown
              if (cellModel && cellModel.template === 'dropdown-list') return;

              // Directly render the dropdown in the current cell
              addDropDownList(cellEle, dropDownOptions);
            }
          }
        ]
      }
    ]); // Use proper ribbon typings if available in your setup

    // Set row heights
    spreadsheet.setRowsHeight(35, ['1:100']);

    // Initially render dropdowns in row 1 for columns A:D
    const activeSheet = spreadsheet.getActiveSheet();
    for (let colIdx = 0; colIdx <= 3; colIdx++) {
      setCell(0, colIdx, activeSheet, { template: 'dropdown-list' }, true);
    }

    spreadsheet.resize();
  },

  // Render template-driven dropdowns during cell DOM creation
  beforeCellRender: (args) => {
    const hasCoords =
      (args).rowIndex !== undefined && (args).colIndex !== undefined;
    if (!hasCoords) return;

    const cell = args.cell & { template: string };
    if (cell && cell.template === 'dropdown-list') {
      addDropDownList(args.element, dropDownOptions);
    }
  }
});

// Mount the Spreadsheet to the host element
spreadsheet.appendTo('#spreadsheet');