import React, { useRef } from 'react';
import { createRoot } from 'react-dom/client';
import {
  SpreadsheetComponent,
  SheetsDirective,
  SheetDirective,
  RangesDirective,
  RangeDirective,
  ColumnsDirective,
  ColumnDirective,
  getCellIndexes,
  getCell,
  setCell,
  getRangeAddress
} from '@syncfusion/ej2-react-spreadsheet';
import {DropDownList} from '@syncfusion/ej2-dropdowns';
import { getComponent } from '@syncfusion/ej2-base';

function App(): React.ReactElement {
  const spreadsheetRef = useRef<SpreadsheetComponent | null>(null)

  const dropdownData: string[] = ['Option 1', 'Option 2', 'Option 3', 'Other'];

  const addDropDownToCell = (
    data: string[],
    placeholder: string,
    row: number,
    col: number,
    cellModel: any,
    element: HTMLElement,
    selectedValue?: string
  ) => {
    var inputEle = document.createElement('input');
    element.appendChild(inputEle);
    new DropDownList({
      placeholder: placeholder,
      dataSource: data,
      cssClass: 'cell-dropdown',
      value: selectedValue || null,
      change: (event: any)=>{
        dropDownChangeHandler(event, row, col, element);
      }
    }, element.firstElementChild as any);
  };

  const dropDownChangeHandler = (event: any, row: number, col: number, element: HTMLElement)=>{
    const sheet = spreadsheetRef.current?.getActiveSheet();
        if (event.value === "Other") {
            const dropDownEle = element.querySelector('.cell-dropdown .e-dropdownlist.e-control');
            if (dropDownEle) {
                const ddlComp = getComponent(dropDownEle as any, 'dropdownlist') as any;
                const cell = getCell(row, col, sheet as any);
                if(cell && (cell as any).template) {
                  delete (cell as any).template;
                  delete (cell as any).value;
                }
                ddlComp.destroy();
                (dropDownEle as HTMLElement).remove();
                
            }
        } else {
            spreadsheetRef.current?.updateCell({value: event.value.toString()}, (sheet as any).activeCell);
        }
  }

  const handleCreated = (): void => {
    const spreadsheet = spreadsheetRef.current!;
    spreadsheet.addRibbonTabs([{
      header: { text: 'Template' }, content: [{
        text: 'DropDown List',
        tooltipText: 'DropDown List',
        click: () => {
          const spreadsheet = spreadsheetRef.current!;
          const sheet = spreadsheet.getActiveSheet();
          const [rowIdx, colIdx] = getCellIndexes((sheet as any).activeCell);
          const cellModel = getCell(rowIdx, colIdx, sheet as any);
          const cellEle = spreadsheet.getCell(rowIdx, colIdx);

          if (cellModel && (cellModel as any).template === 'dropdown-list') return;
          addDropDownToCell(dropdownData, 'Value', rowIdx, colIdx, cellModel, cellEle as any);
          spreadsheet.updateCell({template: 'dropdown-list'} as any, (sheet as any).activeCell)
          spreadsheet.setRowHeight(40, rowIdx);
        }
      }]
    }]);
  };

  const handleBeforeCellRender = (args: any) => {
    if (args.cell?.template === 'dropdown-list') {
    const selectedValue = args.cell.value || '';
     // Clear any previous content — including text and dropdown
     if(args.element.firstChild) {
      args.element.removeChild(args.element.firstChild);
    }
      addDropDownToCell(dropdownData, 'Value', args.rowIndex, args.colIndex, args.cell, args.element, selectedValue);
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
      >
          <SheetsDirective>
                    <SheetDirective>
                        <ColumnsDirective>
                            <ColumnDirective width={180}></ColumnDirective>
                            <ColumnDirective width={130}></ColumnDirective>
                            <ColumnDirective width={130}></ColumnDirective>
                            <ColumnDirective width={180}></ColumnDirective>
                            <ColumnDirective width={130}></ColumnDirective>
                            <ColumnDirective width={120}></ColumnDirective>
                        </ColumnsDirective>
                    </SheetDirective>
                </SheetsDirective>
      </SpreadsheetComponent>
    </div>
  );
};

export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);