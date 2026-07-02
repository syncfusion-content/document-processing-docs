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
      (created)="created"
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
  
  create(): void{
    if (this.spreadsheetObj) {
      // To change height for single row
      this.spreadsheetObj.setRowsHeight(40, ['2']);
      // To change height for multiple rows
      this.spreadsheetObj.setRowsHeight(40, ['4:8', '10:12']);
    }
  };
}