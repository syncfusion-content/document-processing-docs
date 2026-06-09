import { Component, ViewChild } from '@angular/core';
import { SpreadsheetAllModule, SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { enableRipple } from '@syncfusion/ej2-base';

import { defaultData } from './datasource';

enableRipple(true);

@Component({
  imports: [SpreadsheetAllModule],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-spreadsheet #spreadsheet (created)="created()" [allowOpen]="true" [allowSave]="true"
  [openUrl]="openUrl" [saveUrl]="saveUrl">
    <e-sheets>
      <e-sheet name="Project Budget">
        <e-ranges>
          <e-range [dataSource]="data"></e-range>
        </e-ranges>
        <e-columns>
          <e-column></e-column>
          <e-column></e-column>
          <e-column></e-column>
          <e-column></e-column>
          <e-column></e-column>
          <e-column></e-column>
          <e-column></e-column>
          <e-column></e-column>
          <e-column></e-column>
          <e-column></e-column>
        </e-columns>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>`
})
export class AppComponent {
  @ViewChild('spreadsheet')
  public spreadsheetObj?: SpreadsheetComponent;

  public data: object[] = defaultData;
  public openUrl = 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open';
  public saveUrl = 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save';

  public created(): void {
    if (!this.spreadsheetObj) {
      return;
    }

    this.spreadsheetObj.suspendRefresh();
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
    this.spreadsheetObj.resumeRefresh();
  }
}


