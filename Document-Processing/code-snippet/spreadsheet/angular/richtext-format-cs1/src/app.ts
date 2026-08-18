import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'


import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, BeforeSaveEventArgs, BeforeOpenEventArgs } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
imports: [
        
        DropDownButtonModule,
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: "<ejs-spreadsheet #spreadsheet [sheets]="sheets" [showFormulaBar]="false" (created)="onCreated()"> </ejs-spreadsheet>,"
})

export class AppComponent {

    @ViewChild('spreadsheet')
    public spreadsheetObj!: SpreadsheetComponent;

    public sheets: any[] = [
        {
            columns: [{ width: 200 }],
            rows: [
                { cells: [{ value: 'Plain Text' }] },
                {
                    cells: [
                        {
                            value: 'Mineral Water H2O',
                            richText: [
                                { text: 'Mineral Water H' },
                                { text: '2', style: { verticalAlign: 'sub' } },
                                { text: 'O' }
                            ]
                        }
                    ]
                },
                {
                    cells: [
                        {
                            value: 'Energy Supplement C6H12O6',
                            richText: [
                                { text: 'Energy Supplement C' },
                                { text: '6', style: { verticalAlign: 'sub' } },
                                { text: 'H' },
                                { text: '12', style: { verticalAlign: 'sub' } },
                                { text: 'O' },
                                { text: '6', style: { verticalAlign: 'sub' } }
                            ]
                        }
                    ]
                },
                { cells: [{ value: 'H2O' }] }
            ]
        }
    ];

    public onCreated(): void {
        if (this.spreadsheetObj) {

            // Update A4 with subscript H2O
            this.spreadsheetObj.updateCell(
                {
                    richText: [
                        { text: 'H' },
                        { text: '2', style: { verticalAlign: 'sub' } },
                        { text: 'O' }
                    ]
                },
                'A4'
            );

            // Update A5 with superscript
            this.spreadsheetObj.updateCell(
                {
                    value: 'X2',
                    richText: [
                        { text: 'X' },
                        { text: '2', style: { verticalAlign: 'super' } }
                    ]
                },
                'A5'
            );
        }
    }
}



