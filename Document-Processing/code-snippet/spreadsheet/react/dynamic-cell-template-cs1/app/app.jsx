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

function App() {
  const spreadsheetRef = useRef(null)

  const dropdownData = ['Option 1', 'Option 2', 'Option 3', 'Other'];

  const addDropDownToCell = (data, placeholder, row, col, cellModel, element, selectedValue) => {
    var inputEle = document.createElement('input');
    element.appendChild(inputEle);
    new DropDownList({
      placeholder: placeholder,
      dataSource: data,
      cssClass: 'cell-dropdown',
      value: selectedValue || null,
      change: (event)=>{
        dropDownChangeHandler(event, row, col, element);
      }
    }, element.firstElementChild);
  };

  const dropDownChangeHandler = (event, row, col, element)=>{
    const sheet = spreadsheetRef.current?.getActiveSheet();
        if (event.value === "Other") {
            const dropDownEle = element.querySelector('.cell-dropdown .e-dropdownlist.e-control');
            if (dropDownEle) {
                const ddlComp = getComponent(dropDownEle, 'dropdownlist');
                const cell = getCell(row, col, sheet);
                if(cell && cell.template) {
                  delete cell.template;
                  delete cell.value;
                }
                ddlComp.destroy();
                dropDownEle.remove();
                
            }
        } else {
            spreadsheetRef.current.updateCell({value: event.value.toString()}, sheet.activeCell);
        }
  }

  const handleCreated = () => {
    const spreadsheet = spreadsheetRef.current;
    spreadsheet.addRibbonTabs([{
      header: { text: 'Template' }, content: [{
        text: 'DropDown List',
        tooltipText: 'DropDown List',
        click: () => {
          const spreadsheet = spreadsheetRef.current;
          const sheet = spreadsheet.getActiveSheet();
          const [rowIdx, colIdx] = getCellIndexes(sheet.activeCell);
          const cellModel = getCell(rowIdx, colIdx, sheet);
          const cellEle = spreadsheet.getCell(rowIdx, colIdx);

          if (cellModel && cellModel.template === 'dropdown-list') return;
          addDropDownToCell(dropdownData, 'Value', rowIdx, colIdx, cellModel, cellEle);
          spreadsheet.updateCell({template: 'dropdown-list'}, sheet.activeCell)
          spreadsheet.setRowHeight(40, rowIdx);
        }
      }]
    }]);
  };

  const handleBeforeCellRender = (args) => {
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
  );
};

export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);