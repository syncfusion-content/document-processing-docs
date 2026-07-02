import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons'

import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, SpreadsheetAllModule, PrintType } from '@syncfusion/ej2-angular-spreadsheet';
import { dataSource } from './datasource';


@Component({
  imports: [
    DropDownButtonModule,
    SpreadsheetAllModule
  ],
  standalone: true,
  selector: 'app-container',
  template: `
  <div>
    <ejs-spreadsheet #spreadsheet (created)='created()' openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open" saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save">
    <e-sheets>
            <e-sheet name="Car Sales Report">
                <e-ranges>
                    <e-range [dataSource]="data"></e-range>
                </e-ranges>
            </e-sheet>
    </e-sheets>
    </ejs-spreadsheet>
 </div>
  `
})
export class AppComponent {
  @ViewChild('spreadsheet')
  spreadsheetObj: SpreadsheetComponent | undefined;
  public data: object[] = dataSource;

  created() {
    if (this.spreadsheetObj) {
      // Suspend UI updates
      this.spreadsheetObj.suspendRefresh();

      // Perform multiple operations
      this.spreadsheetObj.insertRow(0, 0);
      this.spreadsheetObj.updateCell({ value: 'Project Budget Tracker - Q2 2026' }, 'A1');
      this.spreadsheetObj.merge('A1:K1');
      this.spreadsheetObj.updateCell({ value: 'Reference' }, 'K2');
      this.spreadsheetObj.updateCell({ value: 'Total Budget' }, 'A13');
      this.spreadsheetObj.updateCell({ formula: '=SUM(F3:F12)' }, 'F13');
      this.spreadsheetObj.updateCell({ formula: '=SUM(G3:G12)' }, 'G13');
      this.spreadsheetObj.updateCell({ formula: '=SUM(H3:H12)' }, 'H13');
      this.spreadsheetObj.addHyperlink('https://help.syncfusion.com/document-processing/excel/spreadsheet/react/overview', 'K3:K12', 'Open Guide');
      this.spreadsheetObj.cellFormat({ fontWeight: 'bold', fontSize: '14pt', textAlign: 'center', verticalAlign: 'middle', backgroundColor: '#4472C4', color: '#FFFFFF' }, 'A1:K1');
      this.spreadsheetObj.cellFormat({ fontWeight: 'bold', textAlign: 'center', backgroundColor: '#EAEAEA' }, 'A2:K2');
      this.spreadsheetObj.numberFormat('$#,##0.00', 'F3:H13');
      this.spreadsheetObj.addDataValidation({ type: 'WholeNumber', operator: 'Between', value1: '1', value2: '5', isHighlighted: true }, 'J3:J12');
      this.spreadsheetObj.wrap('A3:A12', true);
      this.spreadsheetObj.setBorder({ border: '1px solid #C8C8C8' }, 'A2:K13', 'Outer');
      this.spreadsheetObj.setRowHeight(50, 0);
      this.spreadsheetObj.setRowsHeight(30, ['1:13']);
      this.spreadsheetObj.setColWidth(220, 0);
      this.spreadsheetObj.setColumnsWidth(90, ['B:K']);

      // Resume and apply all changes
      this.spreadsheetObj.resumeRefresh();
    }
  }

}
