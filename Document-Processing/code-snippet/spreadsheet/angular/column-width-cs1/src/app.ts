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
      // To change width of single column
      this.spreadsheetObj.setColumnsWidth(100, ['F']);
      // To change width of multiple columns
      this.spreadsheetObj.setColumnsWidth(120, ['A:C', 'G:I', 'K:M']);
    }
  };
}