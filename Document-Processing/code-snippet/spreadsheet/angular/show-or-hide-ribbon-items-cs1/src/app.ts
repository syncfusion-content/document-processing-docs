import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component, OnInit,ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
imports: [
        
        SpreadsheetAllModule
    ],

standalone: true,
    selector: 'app-container',
    template: `
    <div style="padding: 12;">
    <div style="gap: 8; margin-bottom: 12">
        <button (click)="showInsertTab()">Show Insert Tab</button>
        <button (click)="hideInsertTab()">Hide Insert Tab</button>
        <button (click)="showHomeItems()">Show Home Items</button>
        <button (click)="hideHomeItems()">Hide Home Items</button>
        <ejs-spreadsheet #spreadsheet (created)='created()'>
        </ejs-spreadsheet>
    </div>
 </div>
    `
})
export class AppComponent implements OnInit {

    @ViewChild('spreadsheet') public spreadsheetObj?: SpreadsheetComponent;
    ngOnInit(): void {
    }
    // Items in the Home tab to hide/show (by index)
    // Adjust these indices based on your app's ribbon layout
    public homeItemsToToggle = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 14, 15];

    hideInsertTab() {
        if (!this.spreadsheetObj) return;
        this.spreadsheetObj.hideRibbonTabs(['Insert']);
    };

    showInsertTab() {
        if (!this.spreadsheetObj) return;
        (this.spreadsheetObj as any).hideRibbonTabs(['Insert'], false);
    };

    hideHomeItems() {
        if (!this.spreadsheetObj) return;
        this.spreadsheetObj.hideToolbarItems('Home', this.homeItemsToToggle);
    };

    showHomeItems() {
        if (!this.spreadsheetObj) return;
        (this.spreadsheetObj as any).hideToolbarItems('Home', this.homeItemsToToggle, false);
    };

    created() {
        if (!this.spreadsheetObj) return;

        // Initial state: hide the "Insert" tab and selected "Home" items
        this.spreadsheetObj.hideRibbonTabs(['Insert']);
        this.spreadsheetObj.hideToolbarItems('Home', this.homeItemsToToggle);
    }

    onQuickNote(){
        if (!this.spreadsheetObj) return;
        const sheet: any = this.spreadsheetObj.getActiveSheet();
        const range = sheet.selectedRange || sheet.activeCell || 'A1';
        this.spreadsheetObj.updateCell({ notes: { text: 'Note' } } as any, range);
    };

    onHighlight(){
        if (!this.spreadsheetObj) return;
        const sheet: any = this.spreadsheetObj.getActiveSheet();
        const range = sheet.selectedRange || sheet.activeCell || 'A1';
        this.spreadsheetObj.cellFormat({ backgroundColor: '#FFF9C4', color: '#5D4037' }, range);
    };

    onClear(){
        if (!this.spreadsheetObj) return;
        const sheet: any = this.spreadsheetObj.getActiveSheet();
        const range = sheet.selectedRange || sheet.activeCell || 'A1';
        this.spreadsheetObj.clear({ type: 'Clear All', range });
    };
}
