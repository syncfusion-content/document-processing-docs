import { Component, ViewChild } from '@angular/core';
import { SpreadsheetAllModule, SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { getDefaultData } from './datasource';

@Component({
  imports: [SpreadsheetAllModule],
  standalone: true,
  selector: 'app-container',
  template: `
    <style>
      :host{display:block;padding:12px}
    </style>
    <ejs-spreadsheet #spreadsheet [sheets]="sheets" (actionBegin)="actionBegin($event)"></ejs-spreadsheet>
  `
})
export class AppComponent {
  @ViewChild('spreadsheet') public spreadsheetObj!: SpreadsheetComponent;

  public sheets: any[] = [
    {
      name: 'Sheet1',
      ranges: [
        {
          dataSource: getDefaultData,
          startCell: 'A1'
        }
      ]
    }
  ];

  public actionBegin = (args: any): void => {
    const action: string = args.action;
    const eventArgs: any = args.args && args.args.eventArgs;

    if (action === 'beforeReplaceAll') {
      const spreadsheet = this.spreadsheetObj;
      if (!spreadsheet) return;

      const selectedRange: string | undefined = spreadsheet.getActiveSheet().selectedRange;
      if (!selectedRange) return;

      const selectedRangeCollection: string[] = this.generateCellCollection(selectedRange, spreadsheet);
      const replaceAllCollection: Array<string | null> = eventArgs.addressCollection as Array<string | null>;
      if (!Array.isArray(replaceAllCollection)) return;

      const selectedSet: Set<string> = new Set<string>(selectedRangeCollection);
      const updatedCollection: Array<string | null> = [];

      for (const cell of replaceAllCollection) {
        if (cell && selectedSet.has(cell)) {
          updatedCollection.push(cell);
        } else {
          updatedCollection.push(null);
        }
      }

      if (updatedCollection.length > 0) {
        eventArgs.addressCollection = updatedCollection;
      }
    }
  };

  private generateCellCollection(range: string, spreadsheet: SpreadsheetComponent): string[] {
    const collection: string[] = [];
    let [startCell, endCell]: string[] = range.split(':');
    endCell = endCell || startCell;
    const activeSheetName: string = spreadsheet.getActiveSheet().name!;

    const startMatches = startCell.match(/[A-Z]+|\d+/g) || [];
    const endMatches = endCell.match(/[A-Z]+|\d+/g) || [];
    const startCol = startMatches[0] || '';
    const startRow = startMatches[1] || '1';
    const endCol = endMatches[0] || startCol;
    const endRow = endMatches[1] || startRow;

    const colRange: [number, number] = [startCol.toUpperCase().charCodeAt(0), endCol.toUpperCase().charCodeAt(0)];
    const rowRange: [number, number] = [parseInt(startRow), parseInt(endRow)];

    for (let col: number = colRange[0]; col <= colRange[1]; col++) {
      for (let row: number = rowRange[0]; row <= rowRange[1]; row++) {
        collection.push(`${activeSheetName}!${String.fromCharCode(col)}${row}`);
      }
    }
    return collection;
  }
}