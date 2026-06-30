import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet';
import { BeforeOpenCloseMenuEventArgs, MenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';


@Component({
imports: [
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<ejs-spreadsheet #spreadsheet (contextMenuBeforeOpen)="onContextMenuBeforeOpen($event)">
    </ejs-spreadsheet>`
})
export class AppComponent {
  @ViewChild('spreadsheet')
  public spreadsheetObj!: SpreadsheetComponent;
  // Add a custom context menu item right before the menu opens
  onContextMenuBeforeOpen(args: BeforeOpenCloseMenuEventArgs) {
    // To remove existing context menu items.
    if (this.spreadsheetObj) {
      this.spreadsheetObj.removeContextMenuItems(['Insert Column'], false);
    }
  }
}