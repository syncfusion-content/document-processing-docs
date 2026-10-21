import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, SpreadsheetAllModule, CellStyleModel, SheetModel, getRangeAddress, setRow, getCellAddress, getRangeIndexes } from '@syncfusion/ej2-angular-spreadsheet';
import { createCheckBox } from '@syncfusion/ej2-angular-buttons';
import { select } from '@syncfusion/ej2-base';
import { dataSource } from './datasource';

@Component({
imports: [
        
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<div class='control-pane'>
    <div class='control-section spreadsheet-control'>
      <ejs-spreadsheet #spreadsheet
        [cellStyle]="cellStyle"
        [scrollSettings]="scrollSettings"
        [showRibbon]="false"
        [allowAutoFill]="false"
        [allowOpen]="false"
        [allowSave]="false"
        [showSheetTabs]="false"
        [showFormulaBar]="false"
        [showAggregate]="false"
        (created)="onCreated()"
        (beforeCellRender)="beforeCellRender($event)"
        (cellEdit)="beforeEditHandler($event)"
        (beforeSelect)="beforeSelect($event)"
      >
      <e-sheets>
        <e-sheet
            name="Car Sales Report"
            [showHeaders]="false"
            [standardHeight]="36"
            [rowCount]="100"
            [colCount]="100"
            [frozenRows]="1"
            [frozenColumns]="1"
          >
            <e-ranges>
              <e-range [dataSource]="data" startCell="B1"></e-range>
            </e-ranges>
            <e-columns>
              <e-column [width]=40></e-column>
              <e-column [width]=100></e-column>
              <e-column [width]=150></e-column>
              <e-column [width]=150></e-column>
              <e-column [width]=150></e-column>
              <e-column [width]=150></e-column>
              <e-column [width]=150></e-column>
              <e-column [width]=100></e-column>
              <e-column [width]=100></e-column>
              <e-column [width]=100></e-column>
              <e-column [width]=100></e-column>
              <e-column [width]=180></e-column>
              <e-column [width]=180></e-column>
            </e-columns>
          </e-sheet>
        </e-sheets>
      </ejs-spreadsheet>
    </div>
  </div>`
})
export class AppComponent {
  @ViewChild('spreadsheet')
  spreadsheetObj!: SpreadsheetComponent;

  data: object[] = dataSource;
  public cellStyle: CellStyleModel = { verticalAlign: 'middle' };
  public scrollSettings = { isFinite: true };

  onCreated(): void {
    if (!this.spreadsheetObj) return;
    const usedRange: any = this.spreadsheetObj.getActiveSheet().usedRange;
    const lastCell: string = getCellAddress(0, usedRange.colIndex);
    this.spreadsheetObj.cellFormat({ fontWeight: 'bold' }, `A1:${lastCell}`);
    this.updateRowCountBasedOnData();
  }

  updateRowCountBasedOnData(): void {
    const sheet: SheetModel = this.spreadsheetObj.getActiveSheet();
    const usedRange: any = sheet.usedRange;
    this.spreadsheetObj.setSheetPropertyOnMute(sheet, 'rowCount', usedRange.rowIndex > 0 ? usedRange.rowIndex + 1 : 2);
    this.spreadsheetObj.resize();
  }

  updateSelectedState(selectAllInput?: any, rowCallBack?: any, updateSelectedRange?: any): void {
    const sheet: any = this.spreadsheetObj.getActiveSheet();
    let selectedCount = 0;
    const lastColIdx = sheet.colCount - 1;
    const newRangeColl: string[] = [];
    let selectionStartIdx: number | undefined;
    let isSelectionStarted: boolean | undefined;

    for (let rowIdx = 1; rowIdx < sheet.rowCount; rowIdx++) {
      if (rowCallBack) rowCallBack(rowIdx);
      if (sheet.rows[rowIdx] && sheet.rows[rowIdx].selected) {
        if (updateSelectedRange && !isSelectionStarted) {
          isSelectionStarted = true;
          selectionStartIdx = rowIdx;
        }
        selectedCount++;
      } else if (isSelectionStarted) {
        newRangeColl.push(getRangeAddress([selectionStartIdx!, 0, rowIdx - 1, lastColIdx]));
        isSelectionStarted = false;
      }
    }

    if (selectAllInput) {
      if (selectedCount > 0) {
        if (selectedCount === sheet.rowCount - 1) {
          selectAllInput.classList.remove('e-stop');
          selectAllInput.classList.add('e-check');
        } else {
          selectAllInput.classList.add('e-stop');
        }
      } else {
        selectAllInput.classList.remove('e-check');
        selectAllInput.classList.remove('e-stop');
      }
    }

    if (updateSelectedRange) {
      if (isSelectionStarted) {
        newRangeColl.push(getRangeAddress([selectionStartIdx!, 0, sheet.rowCount - 1, lastColIdx]));
      } else if (!newRangeColl.length) {
        newRangeColl.push(getRangeAddress([0, 0, 0, 0]));
      }
      this.spreadsheetObj.selectRange(newRangeColl.join(' '));
    }
  }

  renderCheckbox(args: any): void {
    const sheet: any = this.spreadsheetObj.getActiveSheet();
    const rowIdx: number = args.rowIndex;
    const checkbox = createCheckBox(this.spreadsheetObj.createElement, false, {
      checked: !!(sheet.rows[rowIdx] && sheet.rows[rowIdx].selected)
    });
    args.element.appendChild(checkbox);

    checkbox.addEventListener('click', () => {
      const updateCheckboxSelection = (curRowIdx: any) => {
        if (curRowIdx === rowIdx) {
          const inputEle = select('.e-frame', checkbox);
          let checked = !inputEle.classList.contains('e-check');
          setRow(sheet, rowIdx, { selected: checked } as any);
          if (checked) inputEle.classList.add('e-check');
          else inputEle.classList.remove('e-check');
        }
      };
      const selectAllCell: any = this.spreadsheetObj.getCell(0, 0);
      this.updateSelectedState(selectAllCell && select('.e-frame', selectAllCell) as any, updateCheckboxSelection, true);
    });
  }

  renderSelectAllCheckbox(tdEle: any): void {
    const checkbox = createCheckBox(this.spreadsheetObj.createElement, false);
    const inputEle: HTMLElement = select('.e-frame', checkbox);
    this.updateSelectedState(inputEle);
    tdEle.appendChild(checkbox);

    checkbox.addEventListener('click', () => {
      const sheet: SheetModel = this.spreadsheetObj.getActiveSheet();
      const checked: boolean = !inputEle.classList.contains('e-check');
      const rowCallback = (rowIdx: number) => {
        setRow(sheet, rowIdx, { selected: checked } as any);
        const cell: any = this.spreadsheetObj.getCell(rowIdx, 0);
        const checkboxInput: HTMLElement = cell && select('.e-frame', cell);
        if (checkboxInput) {
          if (checked) checkboxInput.classList.add('e-check');
          else checkboxInput.classList.remove('e-check');
        }
      };
      this.updateSelectedState(inputEle, rowCallback, true);
      if (!checked) this.spreadsheetObj.selectRange('A1');
    });
  }

  beforeCellRender(args: any): void {
    if (args.colIndex === 0 && args.rowIndex !== undefined) {
      const sheet: any = this.spreadsheetObj.getActiveSheet();
      if (args.rowIndex === 0) {
        this.renderSelectAllCheckbox(args.element);
      } else if (args.rowIndex < sheet.rowCount) {
        this.renderCheckbox(args);
      }
    }
  }

  beforeSelect(args: any): void {
    const sheet: any = this.spreadsheetObj.getActiveSheet();
    const cellRngIdx: number[] = getRangeIndexes(args.range);
    const startRow = cellRngIdx[0];
    const startCol = cellRngIdx[1];
    const endRow = cellRngIdx[2];
    const endCol = cellRngIdx[3];
    const lastColIdx = sheet.colCount - 1;

    if (startRow === endRow && startCol === endCol) return;
    if (startCol === 0 && endCol === lastColIdx) return;
    args.cancel = true;
  }

  beforeEditHandler(args: any): void {
    args.cancel = true;
  }
}