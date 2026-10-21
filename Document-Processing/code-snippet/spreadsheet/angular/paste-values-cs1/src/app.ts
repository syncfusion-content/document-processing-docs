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
    // If the user is pasting, force paste to values only.
    if (args.action === "clipboard") {
      args.args.eventArgs.type = 'Values';
    }
  };
}