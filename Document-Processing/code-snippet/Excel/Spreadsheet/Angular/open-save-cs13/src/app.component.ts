import { Component } from '@angular/core';
import { SpreadsheetAllModule, BeforeOpenEventArgs } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ SpreadsheetAllModule ],
  template: `
    <ejs-spreadsheet [allowOpen]="true" openUrl="https://services.syncfusion.com/angular/production/api/spreadsheet/open" (beforeOpen)="beforeOpen($event)">
    </ejs-spreadsheet>
  `
})
export class AppComponent {
  public beforeOpen(args: BeforeOpenEventArgs): void {
    args.parseOptions = {
        ignoreStyle: true,
        ignoreFormat: true,
        ignoreChart: true,
        ignoreImage: true,
        ignoreMergedCell: true,
        ignoreFormula: true,
        ignoreValidation: true,
        ignoreConditionalFormat: true,
    };
  }
}