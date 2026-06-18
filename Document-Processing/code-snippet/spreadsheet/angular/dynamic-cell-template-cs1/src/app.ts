import { Component, ViewChild } from '@angular/core';
import { SpreadsheetAllModule, SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { getCellIndexes, getCell, setCell } from '@syncfusion/ej2-spreadsheet';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [SpreadsheetAllModule],
  template: `
    <style>
      .e-dropdown-list { min-width: 140px; }
      :host{display:block;padding:12px}
    </style>
    <ejs-spreadsheet #spreadsheet (created)="onCreated()" (beforeCellRender)="beforeCellRender($event)"></ejs-spreadsheet>
  `
})
export class AppComponent {
  @ViewChild('spreadsheet') public spreadsheetObj?: SpreadsheetComponent;

  private dropDownOptions: number[] = [10, 20, 30, 40, 50, 60];

  public onCreated(): void {
    const spreadsheet = this.spreadsheetObj;
    if (!spreadsheet) return;

    spreadsheet.addRibbonTabs([
      {
        header: { text: 'Template' },
        content: [
          {
            text: 'DropDown List',
            click: () => {
              const sheet: any = spreadsheet.getActiveSheet();
              const [rowIdx, colIdx]: number[] = getCellIndexes((sheet as any).activeCell);
              const cellModel: any = getCell(rowIdx, colIdx, sheet as any);
              const cellEle: HTMLElement = spreadsheet.getCell(rowIdx, colIdx) as HTMLElement;
              if (cellModel && (cellModel as any).template === 'dropdown-list') return;
              this.addDropDownlist(cellEle as HTMLElement, this.dropDownOptions);
            }
          }
        ]
      }
    ]);

    spreadsheet.setRowsHeight(35, ['1:100']);
    const activeSheet: any = spreadsheet.getActiveSheet();
    for (let colIdx = 0; colIdx <= 3; colIdx++) {
      setCell(0, colIdx, activeSheet as any, { template: 'dropdown-list' } as any, true);
    }
    spreadsheet.resize();
  }

  public beforeCellRender(args: any): void {
    if (args.rowIndex !== undefined && args.colIndex !== undefined) {
      if (args.cell && args.cell.template === 'dropdown-list') {
        this.addDropDownlist(args.element as HTMLElement, this.dropDownOptions);
      }
    }
  }

  private addDropDownlist(element: HTMLElement, legendOptions: number[]): void {
    if (!this.spreadsheetObj) return;
    element.innerHTML = '';
    const inputEle: HTMLInputElement = document.createElement('input');
    element.appendChild(inputEle);
    new DropDownList({
      placeholder: 'Select a value',
      dataSource: legendOptions,
      cssClass: 'e-dropdown-list',
      change: (event: any) => {
        const sheet: any = this.spreadsheetObj!.getActiveSheet();
        const addr = (sheet as any).activeCell;
        this.spreadsheetObj!.updateCell({ value: event.value?.toString() }, addr);
      }
    }, inputEle);
  }
}