import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, getFormatFromType, ChartModel, BeforeChartEventArgs } from '@syncfusion/ej2-angular-spreadsheet';
import { chartData } from './datasource';

@Component({
imports: [
        
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<ejs-spreadsheet #spreadsheet (created)="created()">
                <e-sheets>
                  <e-sheet>
                    <e-ranges>
                      <e-range [dataSource]="data"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column [width]=120></e-column>
                      <e-column [width]=180></e-column>
                      <e-column [width]=100></e-column>
                      <e-column [width]=120></e-column>
                      <e-column [width]=120></e-column>
                    </e-columns>
                  </e-sheet>
                </e-sheets>
              </ejs-spreadsheet>`
})
export class AppComponent {
    @ViewChild('spreadsheet')
    spreadsheetObj: SpreadsheetComponent | undefined;
    data: Object[] = chartData;
    created() {
        if(!this.spreadsheetObj) return;
      
        // Insert a Column chart based on A1:B6
        this.spreadsheetObj.insertChart([{
          type: 'Column',               // Column | Bar | Line | Pie | Doughnut | Area | Scatter ...
          range: 'A1:B6',
          top: 120, left: 20, height: 300, width: 500
        }]);
        this.spreadsheetObj.insertChart([{
          type: 'Pie',
          range: 'A1:B6',
          top: 120, left: 500, height: 300, width: 500
        }]);
        this.spreadsheetObj.insertChart([{
          type: 'Area',
          range: 'A1:B6',
          top: 120, left: 1000, height: 300, width: 500
        }]);
    }
}


