import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet';
import { BeforeOpenCloseMenuEventArgs, MenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
imports: [
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<ejs-spreadsheet #spreadsheet (contextMenuBeforeOpen)="handleContextMenuBeforeOpen($event)"(contextMenuItemSelect)="handleContextMenuItemSelect($event)">
    </ejs-spreadsheet>`
})
export class AppComponent {
  @ViewChild('spreadsheet')
  public spreadsheetObj: SpreadsheetComponent | undefined;
  
  // Add a custom context menu item right before the menu opens
  handleContextMenuBeforeOpen(args: BeforeOpenCloseMenuEventArgs) {
    if (!this.spreadsheetObj) return;

    // Only modify the Spreadsheet's own context menu
    if (args.element.id === `${this.spreadsheetObj.element.id}_contextmenu`) {
      this.spreadsheetObj.addContextMenuItems([{ text: 'Custom Item' }], 'Paste Special', false);  //To pass the items, Item before / after that the element to be inserted, Set false if the items need to be inserted before the text.
    }
  }

  // Handle clicks on context menu items (including our custom one)
  handleContextMenuItemSelect(args: MenuEventArgs) {
    if (!this.spreadsheetObj) return;

    switch (args.item.text) {
      case 'Custom Item': {
        // Example action: write a note into the active cell
        const sheet: any = this.spreadsheetObj.getActiveSheet();
        const range = sheet.activeCell || 'A1';
        this.spreadsheetObj.updateCell({ value: 'Custom item clicked' } as any, range);
        break;
      }
      // You can also branch on built‑in items if you want custom behavior for them
      // case 'Paste Special':
      //   // custom logic for Paste Special (optional)
      //   break;
      default:
        break;
    }
  }
}


