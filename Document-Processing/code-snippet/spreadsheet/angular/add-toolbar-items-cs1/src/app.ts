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
    template: `<div>
    <ejs-spreadsheet #spreadsheet [openUrl]="openUrl" [saveUrl]="saveUrl" (created)="created()" [showFormulaBar]="false"
        [showSheetTabs]="false" [allowInsert]="true"
        [allowDelete]="true"
        [allowMerge]="true">

        <e-sheets>
            <e-sheet>
                <e-columns>
                    <e-column [width]=120></e-column>
                    <e-column [width]=140></e-column>
                    <e-column [width]=140></e-column>
                    <e-column [width]=160></e-column>
                </e-columns>
            </e-sheet>
    </e-sheets>
    </ejs-spreadsheet>
 </div>`
})
export class AppComponent implements OnInit {

    @ViewChild('spreadsheet') public spreadsheetObj?: SpreadsheetComponent;

    public CUSTOM_IDS = {
        quickNote: 'custom_quick_note',
        highlight: 'custom_highlight',
        clear: 'custom_clear',
    };

    created() {
        if (!this.spreadsheetObj) return;

        this.spreadsheetObj.addToolbarItems('Home', [
            {
              id: this.CUSTOM_IDS.quickNote,
              text: 'Quick Note',
              tooltipText: 'Insert a short note in the current selection',
              click: () => this.onQuickNote(),
            },
            {
              id: this.CUSTOM_IDS.highlight,
              text: 'Highlight',
              tooltipText: 'Highlight the current selection',
              click: () => this.onHighlight()
            },
            {
              id: this.CUSTOM_IDS.clear,
              text: 'Clear',
              tooltipText: 'Clear contents of the current selection',
              click: () => this.onClear(),
            },
          ] as any);
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
