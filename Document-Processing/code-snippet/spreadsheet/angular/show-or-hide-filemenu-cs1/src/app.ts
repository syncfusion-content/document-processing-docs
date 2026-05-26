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
      <button (click)="disableNew=false">Enable New</button>
      <button (click)="disableNew=true">Disable New</button>
    </div>
    <ejs-spreadsheet #spreadsheet (fileMenuBeforeOpen)="handleFileMenuBeforeOpen($event)" openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
    saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save">
    </ejs-spreadsheet>`
})
export class AppComponent {
  @ViewChild('spreadsheet')
  public spreadsheetObj: SpreadsheetComponent | undefined;
  public disableNew: boolean = true; 

  // Enable/disable items when the menu is about to open
  handleFileMenuBeforeOpen(args: BeforeOpenCloseMenuEventArgs) {
    if (!this.spreadsheetObj) return;

    const newItemId = `${this.spreadsheetObj.element.id}_New`;
    // Enable when false, disable when true
    if (this.disableNew) {
      this.spreadsheetObj.enableFileMenuItems([newItemId], !this.disableNew, true);
    } else {
      this.spreadsheetObj.enableFileMenuItems([newItemId], !this.disableNew, false);
    }
  }
}


