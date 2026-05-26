import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet';

import { BeforeOpenCloseMenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
imports: [
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<div style="padding:12px">
    <div style="display:flex; gap:8px; margin-bottom:12px">
      <button (click)="hideItems=false">Show</button>
      <button (click)="hideItems=true">Hide</button>
    </div>
    <ejs-spreadsheet #spreadsheet (fileMenuBeforeOpen)="handleFileMenuBeforeOpen($event)" openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
    saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save">
    </ejs-spreadsheet>`
})
export class AppComponent {
  @ViewChild('spreadsheet')
  public spreadsheetObj: SpreadsheetComponent | undefined;
  public hideItems: boolean = true; 

  // File menu items are created dynamically; update visibility here
  handleFileMenuBeforeOpen(args: BeforeOpenCloseMenuEventArgs) {
    if (!this.spreadsheetObj) return;
    // Toggle this to control visibility
    if (this.hideItems) {
      this.spreadsheetObj.hideFileMenuItems(['Open', 'Save As']);
    } else {
      this.spreadsheetObj.hideFileMenuItems(['Open', 'Save As'], false);
    }
  }
}


