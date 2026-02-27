import { useRef } from 'react';
import { SpreadsheetComponent, setCell } from '@syncfusion/ej2-react-spreadsheet';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import type { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { getComponent } from '@syncfusion/ej2-base';

function App() {
  let spreadsheet: SpreadsheetComponent | null = null;
  let isPaste = false;
  const spreadsheetRef = useRef<SpreadsheetComponent | null>(null);

  const legendOptions: number[] = [10, 20, 30, 40, 50, 60];

  const onCreated = (): void => {
    spreadsheet = spreadsheetRef.current;
    if (!spreadsheet) return;
    spreadsheet.setRowsHeight(35, ['1:100']);
    // Rendering dropdown list for a specific range initially.
    const activeSheet = spreadsheet.getActiveSheet();
    for (let rowIdx = 0; rowIdx <= 5; rowIdx++) {
      for (let colIdx = 0; colIdx <= 3; colIdx++) {
        setCell(rowIdx, colIdx, activeSheet as any, { template: 'dropdown-list' } as any, true);
      }
    }
    spreadsheet.resize();
  };
  

  // Triggers before the cell is appended to the DOM.
  const beforeCellRender = (args: any): void => {
    if (!spreadsheet) return;
    if (args.rowIndex !== undefined && args.colIndex !== undefined) {
      // To render dropdown if template property 'dropdown-list' is set.
      if (args.cell && args.cell.template === 'dropdown-list') {
        addDropDownlist(args.cell, args.element as HTMLElement, legendOptions);
      }
    }
  };

  // To render the dropdown list.
  const addDropDownlist = (cell: any, element: HTMLElement, legendOptions: number[]): void => {
    element.innerHTML = '';
    const inputEle = document.createElement('input');
    element.appendChild(inputEle);
    new DropDownList({
      placeholder: 'Select a value',
      dataSource: legendOptions,
      cssClass: 'e-dropdown-list',
      // Preserve existing value if present
      value: cell && cell.value ? (cell.value as any) : null,
      change: (event: ChangeEventArgs) => {
        dropDownChangeHandler(event);
      }
    }, inputEle);
  };

  // To handle the change event of dropdown list.
  const dropDownChangeHandler = (event: ChangeEventArgs): void => {
    if (!spreadsheet || !spreadsheetRef.current) return;
    const sheet = spreadsheet.getActiveSheet();
    const value = event.value != null ? String(event.value) : '';
    spreadsheetRef.current.updateCell({ value }, sheet.activeCell as string);
  };

  // Triggers before any action begins in the spreadsheet.
  const actionBegin = (args: any): void => {
    if (args.action === 'clipboard' && args.args?.eventArgs?.requestType === 'paste') {
      isPaste = true;
    }
  };

  // Triggers before changing any cell properties in the spreadsheet.
  const beforeCellUpdate = (args: any): void => {
    if (!isPaste || !spreadsheet) return;
    if (args.cell) {
      if (args.cell.template === 'dropdown-list') {
        const cellEle = spreadsheet.getCell(args.rowIndex, args.colIndex) as HTMLElement;
        const ddlEle = cellEle.querySelector('.e-dropdownlist.e-control');
        if (ddlEle) {
          const ddlComp = getComponent(ddlEle as any, 'dropdownlist') as DropDownList;
          // Updating the value alone if the cell contains the dropdownlist component
          ddlComp.value = spreadsheet.getDisplayText(args.cell) as any;
        } else {
          // To render the dropdown component if the cell does not contain dropdown.
          addDropDownlist(args.cell, cellEle, legendOptions)
        }
      }
    } else {
      const cellEle = spreadsheet.getCell(args.rowIndex, args.colIndex) as HTMLElement;
      const ddlEle = cellEle.querySelector('.e-dropdownlist.e-control');
      if (ddlEle) {
        cellEle.innerHTML = ''; // To remove the dropdown element from cut cell.
      }
    }
  };

  //Triggers after an action completes in the spreadsheet.
  const actionComplete = (args: any): void => {
    if (args.action === 'clipboard' && args.eventArgs?.requestType === 'paste') {
      isPaste = false;
    }
  };

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

const root = createRoot(document.getElementById('root')!);
root.render(<App />);