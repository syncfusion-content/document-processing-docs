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
    template: `
    <div>
    <button (click)="removeById()" style="margin-right: 8px">
        Remove by Id
    </button>

    <button (click)="removeActive()">
        Remove Active Chart
    </button>

    <ejs-spreadsheet #spreadsheet (created)="created()">
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
    </ejs-spreadsheet>
</div>
    `
})
export class AppComponent {
    @ViewChild('spreadsheet')
    spreadsheetObj: SpreadsheetComponent | undefined;
    data: Object[] = chartData;
    created() {
    if (!this.spreadsheetObj) return;

    // Insert a Column chart based on A1:B6
    this.spreadsheetObj.insertChart([
      {
        type: 'Column', // Column | Bar | Line | Pie | Doughnut | Area | Scatter ...
        range: 'A1:B6',
        top: 120,
        left: 20,
        height: 300,
        width: 500,
      },
    ]);
  }

  removeById() {
    this.spreadsheetObj!.deleteChart('e_spreadsheet_chart_5'); // removes the chart with id "salesChart"
  }

  removeActive() {
    this.spreadsheetObj!.deleteChart(); // no id → removes the currently selected chart
  }
}
