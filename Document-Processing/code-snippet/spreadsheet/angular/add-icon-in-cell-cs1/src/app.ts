import { Component, ViewChild } from '@angular/core';
import { SpreadsheetAllModule, SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
  imports: [SpreadsheetAllModule],
  standalone: true,
  selector: 'app-container',
  template: `
    <style>
      .e-custom-wrapper{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:50%;background:#e0e0e0;margin-right:6px}
      .e-custom-icon{font-size:12px}
      /* small padding to show ribbon and sheet */
      :host{display:block;padding:12px}
    </style>
    <ejs-spreadsheet #spreadsheet (created)="handleCreated()" (beforeCellRender)="handleBeforeCellRender($event)"></ejs-spreadsheet>
  `
})
export class AppComponent {
  @ViewChild('spreadsheet') public spreadsheetObj?: SpreadsheetComponent;

  private createPlusIconWrapper(): HTMLElement {
    const wrapperDiv = document.createElement('div');
    wrapperDiv.className = 'e-custom-wrapper';
    const iconSpan = document.createElement('span');
    iconSpan.className = 'e-icons e-plus e-custom-icon';
    wrapperDiv.appendChild(iconSpan);
    return wrapperDiv;
  }

  public handleCreated(): void {
    if (!this.spreadsheetObj) return;
    // place plus-icon templates into A1,B1,C1
    this.spreadsheetObj.updateCell({ template: 'plus-icon' } as any, 'A1');
    this.spreadsheetObj.updateCell({ template: 'plus-icon' } as any, 'B1');
    this.spreadsheetObj.updateCell({ template: 'plus-icon' } as any, 'C1');
    this.spreadsheetObj.resize();
    this.spreadsheetObj.addRibbonTabs([
      {
        header: { text: 'Template' },
        content: [
          {
            text: 'Add Icon',
            tooltipText: 'Initialize',
            click: () => {
              if (!this.spreadsheetObj) return;
              const sheet: any = this.spreadsheetObj.getActiveSheet();
              this.spreadsheetObj.updateCell({ template: 'plus-icon' } as any, sheet.activeCell);
              this.spreadsheetObj.resize();
            },
          },
        ],
      },
    ]);
  }

  public handleBeforeCellRender(args: any): void {
    if (args.cell && args.cell.template === 'plus-icon') {
      const wrapper = this.createPlusIconWrapper();
      args.element.insertBefore(wrapper, args.element.firstChild);
    }
  }
}


