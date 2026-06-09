import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, SpreadsheetAllModule, CellStyleModel } from '@syncfusion/ej2-angular-spreadsheet';
import { dataSource } from './datasource';

@Component({
imports: [
        
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<ejs-spreadsheet #spreadsheet
      (actionBegin)="actionBegin($event)"
      >
      <e-sheets>
        <e-sheet name="Sheet 1">
            <e-ranges>
              <e-range [dataSource]="data" startCell="A1"></e-range>
            </e-ranges>
          </e-sheet>
        </e-sheets>
      </ejs-spreadsheet>`
})
export class AppComponent {
  @ViewChild('spreadsheet')
  spreadsheetObj!: SpreadsheetComponent;

  data: object[] = dataSource;

  actionBegin(args: any): void{
    const action: string = args.action;
    const eventArgs: any= args.args.eventArgs;

    // Check the action is beforeReplaceAll.
    if (action === 'beforeReplaceAll') {
      if (!this.spreadsheetObj) return;

      // Get the active sheet's selected range.
      const selectedRange: string | undefined = this.spreadsheetObj.getActiveSheet().selectedRange;
      if (!selectedRange) return;

      // Convert the selected range into cell collection.
      const selectedRangeCollection: string[] = this.generateCellCollection(selectedRange, this.spreadsheetObj);
      const replaceAllCollection: Array<string | null> = eventArgs.addressCollection as Array<string | null>;
      if (!Array.isArray(replaceAllCollection)) return;

      // Create a Set from selectedRangeCollection for efficient lookup.
      const selectedSet: Set<string> = new Set<string>(selectedRangeCollection);
      const updatedCollection: Array<string | null> = [];

      // Iterate through replaceAllCollection and keep only cells within selection.
      for (const cell of replaceAllCollection) {
        if (cell && selectedSet.has(cell)) {
          updatedCollection.push(cell);
        } else {
          // If the cell is not in selectedRangeCollection, add null to the updated collection
          updatedCollection.push(null);
        }
      }

      if (updatedCollection.length > 0) {
        // Assign the newly created cell collection to the addressCollection of replaceAll action.
        eventArgs.addressCollection = updatedCollection;
      }
    }
  };

  generateCellCollection(range: string, spreadsheet: SpreadsheetComponent): string[] {
    // Initialize the collection that will hold cell references.
    const collection: string[] = [];

    // Split the range string into start and end cell references.
    let [startCell, endCell]: string[] = range.split(':');
    endCell = endCell || startCell;
    
    // Get the name of the active sheet.
    const activeSheetName: string = spreadsheet.getActiveSheet().name!;

    // Extract column and row numbers from start and end cell references.
    const [startCol, startRow]: string[] = startCell.match(/[A-Z]+|\d+/g) || [];
    const [endCol, endRow]: string[] = endCell.match(/[A-Z]+|\d+/g) || [];

    // Calculate ASCII codes for start and end columns.
    const colRange: [number, number] = [startCol.toUpperCase().charCodeAt(0), endCol.toUpperCase().charCodeAt(0)];

    // Parse start and end row numbers.
    const rowRange: [number, number] = [parseInt(startRow), parseInt(endRow)];

    // Iterate over columns and rows within the specified range.
    for (let col: number = colRange[0]; col <= colRange[1]; col++) {
      for (let row: number = rowRange[0]; row <= rowRange[1]; row++) {
        // Push each cell reference into the collection array
        collection.push(`${activeSheetName}!${String.fromCharCode(col)}${row}`);
      }
    }
    // Return the array of cell references.
    return collection;
  };
}