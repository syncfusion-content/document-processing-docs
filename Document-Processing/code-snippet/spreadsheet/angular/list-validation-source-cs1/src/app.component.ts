import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { enableRipple } from '@syncfusion/ej2-base';
import { defaultData, groupData } from './datasource';

enableRipple(true);

@Component({
  imports: [

    SpreadsheetAllModule
  ],


  standalone: true,
  selector: 'app-container',
  template: `<div>
    <ejs-spreadsheet #spreadsheet (created)="created()" >
                <e-sheets>
                  <e-sheet name="Car Sales Report">
                    <e-ranges>
                      <e-range [dataSource]="data"></e-range>
                    </e-ranges>
                    <e-rows>
                      <e-row [index]="0">
                        <e-cells>
                          <e-cell [index]="1" value="Group Id"></e-cell>
                        </e-cells>
                      </e-row>
                    </e-rows>
                    <e-columns>
                      <e-column [width]=130></e-column>
                      <e-column [width]=100></e-column>
                    </e-columns>
                  </e-sheet>
                  <e-sheet name="List Validation Source">
                    <e-ranges>
                      <e-range [dataSource]="grpData"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column [width]=130></e-column>
                      <e-column [width]=100></e-column>
                    </e-columns>
                  </e-sheet>
                </e-sheets>
              </ejs-spreadsheet></div>`
})
export class AppComponent {
  @ViewChild('spreadsheet')
  public spreadsheetObj: SpreadsheetComponent | undefined;

  public data: Object[] = defaultData;
  public grpData: Object[] = groupData;

  created() {
    // Apply styles to the specified range in the active sheet.
    this.spreadsheetObj!.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:B1');
    //Pass the value1 as the reference of cell range to provide more values.
    this.spreadsheetObj!.addDataValidation(
      {
        type: 'List',
        inCellDropDown: true,
        value1: '=List Validation source!$B$2:$B$41',
      },
      'B2:B30'
    );
  }
}