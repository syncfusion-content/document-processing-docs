import { Component, ViewChild } from '@angular/core';
import { SpreadsheetAllModule, SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { getDefaultData } from './datasource';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [SpreadsheetAllModule],
  template: `
    <ejs-spreadsheet #spreadsheet (actionBegin)="actionBegin($event)" [sheets]="sheets"></ejs-spreadsheet>
  `
})
export class AppComponent {
  @ViewChild('spreadsheet') public spreadsheetRef?: SpreadsheetComponent;

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

  public actionBegin(args: any): void {
    // If the user is pasting via clipboard, force paste to values only.
    if (args.action === "clipboard") {
      args.args.eventArgs.type = 'Values';
    }
  }
}