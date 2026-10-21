import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, SpreadsheetAllModule, CellStyleModel, getCellIndexes, getRangeIndexes } from '@syncfusion/ej2-angular-spreadsheet';
import { dataSource } from './datasource';

@Component({
imports: [
        
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<ejs-spreadsheet #spreadsheet
      (cellEdit)="cellEdit($event)"
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
  
  // Columns to be prevented editing.
  public readOnlyColumns: number[] = [0, 2];

  // Triggers when cell editing starts in the spreadsheet.
  cellEdit(args: any){
    const addressRange: number[] = getCellIndexes(args.address.split('!')[1]);
    // preventing cellEditing from the readOnly columns
    if (this.readOnlyColumns.includes(addressRange[1])) {
      args.cancel = true;
    }
  }

  // Triggers whenever any action begins in spreadsheet. 
  actionBegin(args: any){
    var address: string | undefined;
    if (args.action == "clipboard") {
      address = args.args.eventArgs.pastedRange;
    }
    else if (args.action == "autofill") {
      address = args.args.eventArgs.fillRange;
    }
    else if (args.action == "format" || args.action == "validation" || args.action == "conditionalFormat") {
      address = args.args.eventArgs.range;
    }
    else if (args.action == "cut") {
      address = args.args.copiedRange
    }
    if (address) {
      const addressRange: number[] = getRangeIndexes(address);
      const colStart: number = addressRange[1];
      const colEnd: number = addressRange[3];
      // preventing other actions from the readOnly columns
      for (var col: number = colStart; col <= colEnd; col++) {
        if (this.readOnlyColumns.includes(col)) {
          if (args.args.action == "cut") {
            args.args.cancel = true;
          } else {
            args.args.eventArgs.cancel = true;
          }
          break;
        }
      }
    }
  }
}