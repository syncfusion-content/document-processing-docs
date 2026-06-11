import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'
import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { jsonData } from './datasource';

@Component({
  imports: [

    SpreadsheetAllModule
  ],


  standalone: true,
  selector: 'app-container',
  template: `<ejs-spreadsheet #spreadsheet (created)="created()"><e-sheets> <e-sheet><e-columns><e-column [width]=90></e-column><e-column [width]=100></e-column><e-column [width]=96></e-column><e-column [width]=120></e-column><e-column [width]=130></e-column><e-column [width]=120></e-column></e-columns></e-sheet></e-sheets></ejs-spreadsheet>`
})
export class AppComponent {
  public data?: object[];
  @ViewChild('spreadsheet') public spreadsheetObj!: SpreadsheetComponent;

  created() {
    this.spreadsheetObj.openFromJson({ file: jsonData });
  }
};