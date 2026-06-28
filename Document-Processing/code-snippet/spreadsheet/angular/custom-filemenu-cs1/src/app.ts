import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, SpreadsheetAllModule, MenuSelectEventArgs } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
imports: [
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<ejs-spreadsheet #spreadsheet (created)="handleCreated()" (fileMenuItemSelect)="handleFileMenuItemSelect($event)" openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
    saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save">
    </ejs-spreadsheet>`
})
export class AppComponent {
  @ViewChild('spreadsheet')
  public spreadsheetObj: SpreadsheetComponent | undefined;
  handleCreated(){
       if(!this.spreadsheetObj) return;
       // Add a single custom item after "Save"
       this.spreadsheetObj.addFileMenuItems(
        [
          { text: "Quick Export (.csv)", iconCss: "e-icons e-export" }
        ],
        "Print"
      );
  }
  // Run the action for our custom item
  handleFileMenuItemSelect(args: MenuSelectEventArgs) {
    //To enable / disable context menu items.
    if (!this.spreadsheetObj) return;

    if (args.item.text === 'Quick Export (.csv)') {
      this.spreadsheetObj.save({ saveType: 'Csv' });
    }
  }
}


