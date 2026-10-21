import { Component, ViewChild } from '@angular/core';
import { SpreadsheetAllModule, SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { dataSource1 } from './datasource';

@Component({
  imports: [SpreadsheetAllModule],
  standalone: true,
  selector: 'app-root',
  template: `<div class="control-pane">
    <div class="control-section spreadsheet-control">
        <button class="e-btn e-primary" (click)="handleSaveAsJson()">
            Save as JSON
          </button>
          <ejs-spreadsheet #spreadsheet>
            <e-sheets>
                  <e-sheet name="Price Details">
                    <e-ranges>
                      <e-range [dataSource]="priceData"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column [width]=130></e-column>
                      <e-column [width]=92></e-column>
                      <e-column [width]=96></e-column>
                    </e-columns>
                  </e-sheet>
                </e-sheets>
          </ejs-spreadsheet>
          <pre>{{ savedJson }}</pre>
    </div>
  </div>`
})
export class AppComponent {
  @ViewChild('spreadsheet')
  public spreadsheetObj!: SpreadsheetComponent;
  public savedJson: string | null = null;

  public handleSaveAsJson(): void {
    this.spreadsheetObj.saveAsJson().then((response: any) => {
      this.savedJson = JSON.stringify(response, null, 2);
    });
  }
}

