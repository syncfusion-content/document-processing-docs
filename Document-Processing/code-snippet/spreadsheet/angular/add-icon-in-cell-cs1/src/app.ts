import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
imports: [
        SpreadsheetAllModule
    ],

standalone: true,
    selector: 'app-container',
    template: `<ejs-spreadsheet #spreadsheet (created)="handleCreated()" (beforeCellRender)="handleBeforeCellRender($event)">
    </ejs-spreadsheet>`
})
export class AppComponent {
  @ViewChild('spreadsheet')
  public spreadsheetObj: SpreadsheetComponent | undefined;

  // To create plus icon wrapper.
  createPlusIconWrapper = (): HTMLElement => {
    const wrapperDiv: HTMLDivElement = document.createElement("div");
    wrapperDiv.className = 'e-custom-wrapper';
    const iconSpan: HTMLSpanElement = document.createElement("span");
    iconSpan.className = 'e-icons e-plus e-custom-icon';
    wrapperDiv.appendChild(iconSpan);
    return wrapperDiv;
  };
  handleCreated():void{
    if (!this.spreadsheetObj) return;
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
              this.spreadsheetObj.updateCell(
                { template: 'plus-icon' } as any,
                sheet.activeCell
              );
              this.spreadsheetObj.resize();
            },
          },
        ],
      },
    ]);
  };
  handleBeforeCellRender(args: any): void{
    if (args.cell && args.cell.template === 'plus-icon') {
      const wrapperDiv: HTMLElement = this.createPlusIconWrapper();
      args.element.insertBefore(wrapperDiv, args.element.firstChild);
    }
  };
}