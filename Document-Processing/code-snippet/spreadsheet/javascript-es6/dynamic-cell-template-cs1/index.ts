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
const dropDownOptions: number[] = [10, 20, 30, 40, 50, 60];

// Helper: render a DropDownList inside a cell element
function addDropDownList(element: HTMLElement, options: number[]): void {
  // Clear existing content before injecting the dropdown
  element.innerHTML = '';

  const inputEle: HTMLInputElement = document.createElement('input');
  element.appendChild(inputEle);

  const ddl = new DropDownList({
    placeholder: 'Select a value',
    dataSource: options,
    cssClass: 'e-dropdown-list',
    change: (event: ChangeEventArgs): void => {
      // Update the active cell with the selected value
      const activeAddress: string = (spreadsheet.getActiveSheet() as any).activeCell;
      spreadsheet.updateCell(
        { value: String((event as any).value) } as CellModel,
        activeAddress
      );
    }
  });

  ddl.appendTo(inputEle);
}

// Initialize Spreadsheet
const spreadsheet: Spreadsheet = new Spreadsheet({
  created: (): void => {
    // Add a custom Ribbon tab to insert a dropdown in the active cell
    spreadsheet.addRibbonTabs([
      {
        header: { text: 'Template' },
        content: [
          {
            text: 'DropDown List',
            click: (): void => {
              const sheet: any = spreadsheet.getActiveSheet();
              const [rowIdx, colIdx]: number[] = getCellIndexes(sheet.activeCell);
              const cellModel: any = getCell(rowIdx, colIdx, sheet);
              const cellEle: HTMLElement = spreadsheet.getCell(rowIdx, colIdx) as HTMLElement;

              // Prevent re-adding if the template is already set to dropdown
              if (cellModel && cellModel.template === 'dropdown-list') return;

              // Directly render the dropdown in the current cell
              addDropDownList(cellEle, dropDownOptions);
            }
          }
        ]
      }
    ] as any); // Use proper ribbon typings if available in your setup

    // Set row heights
    spreadsheet.setRowsHeight(35, ['1:100']);

    // Initially render dropdowns in row 1 for columns A:D
    const activeSheet: any = spreadsheet.getActiveSheet();
    for (let colIdx = 0; colIdx <= 3; colIdx++) {
      setCell(0, colIdx, activeSheet, { template: 'dropdown-list' } as any, true);
    }

    spreadsheet.resize();
  },

  // Render template-driven dropdowns during cell DOM creation
  beforeCellRender: (args: BeforeCellRenderEventArgs): void => {
    const hasCoords =
      (args as any).rowIndex !== undefined && (args as any).colIndex !== undefined;
    if (!hasCoords) return;

    const cell = args.cell as CellModel & { template?: string };
    if (cell && cell.template === 'dropdown-list') {
      addDropDownList(args.element as HTMLElement, dropDownOptions);
    }
  }
});

// Mount the Spreadsheet to the host element
spreadsheet.appendTo('#spreadsheet');