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
    <div style={{ padding: 12 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <button onClick={enableInsertTab}>Enable Insert Tab</button>
        <button onClick={disableInsertTab}>Disable Insert Tab</button>
        <button onClick={enableHomeItems}>Enable Home Items</button>
        <button onClick={disableHomeItems}>Disable Home Items</button>
      </div>

      <SpreadsheetComponent
        ref={spreadsheetRef}
        created={handleCreated}
      />
    </div>
    `
})
export class AppComponent implements OnInit {

    @ViewChild('spreadsheet') public spreadsheetObj?: SpreadsheetComponent;
    ngOnInit(): void {
    }
    
    public homeItemsToToggle: number[] = [0, 1, 2, 3, 4, 5];

    disableInsertTab() {
        if (!this.spreadsheetObj) return;
        this.spreadsheetObj.enableRibbonTabs(['Insert'], false);
    };

    enableInsertTab() {
        if (!this.spreadsheetObj) return;
        this.spreadsheetObj.enableRibbonTabs(['Insert'], true);
    };

    disableHomeItems() {
        if (!this.spreadsheetObj) return;
        this.spreadsheetObj.enableToolbarItems('Home', this.homeItemsToToggle, false);
    };

    enableHomeItems() {
        if (!this.spreadsheetObj) return;
        this.spreadsheetObj.enableToolbarItems('Home', this.homeItemsToToggle, true);
    };

    created() {
        if (!this.spreadsheetObj) return;

        this.spreadsheetObj.enableRibbonTabs(['Insert'], false);
        this.spreadsheetObj.enableToolbarItems('Home', this.homeItemsToToggle, false);
    }
}
