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
    template: `<ejs-spreadsheet #spreadsheet (created)='created()' [showFormulaBar]="true"
        [showSheetTabs]="true"></ejs-spreadsheet>`
})
export class AppComponent implements OnInit {

    @ViewChild('spreadsheet') public spreadsheetObj?: SpreadsheetComponent;
    ngOnInit(): void {
    }
    created(){
        if (!this.spreadsheetObj) return;

        this.spreadsheetObj.addRibbonTabs(
            [
                {
                    header: { text: 'Custom tab' },
                    content: [
                        {
                            text: 'Custom',
                            tooltipText: 'Custom Btn',
                            cssClass: 'e-custom-btn',
                            click: () => {
                                // Your custom action here
                                this.spreadsheetObj.updateCell({ value: 'Custom action executed' } as any, 'A1');
                            }
                        }
                    ]
                }
            ]
        );
    };
}
