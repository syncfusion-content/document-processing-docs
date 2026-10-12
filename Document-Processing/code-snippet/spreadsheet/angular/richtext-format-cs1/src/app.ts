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
                            value: 'Annual Sales Report 2026 (Draft)',
                            richText: [
                                { text: 'Annual Sales Report ', style: { fontWeight: 'bold' } },
                                { text: '2026', style: { color: '#0078D4' } },
                                { text: ' (Draft)', style: { fontStyle: 'italic' } }
                            ]
                        }
                    ]
                },
                {
                    cells: [
                        {
                            value: 'Customer Loyalty Program',
                            richText: [
                                { text: 'Customer Loyalty ', style: { textDecoration: 'underline' } },
                                { text: 'Program', style: { fontFamily: 'Georgia', fontSize: '14pt' } }
                            ]
                        }
                    ]
                },
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
                }
            ]
        }
    ];

    public onCreated(): void {
        if (this.spreadsheetObj) {
            this.spreadsheetObj.updateCell({
                value: 'Premium Membership valid until 31st Dec 2026',
                richText: [
                        { text: 'Premium Membership ', style: { fontWeight: 'bold', color: '#2E7D32' } },
                        { text: 'valid until ', style: { fontStyle: 'italic' } },
                        { text: '31', style: { textDecoration: 'underline' } },
                        { text: 'st', style: { verticalAlign: 'super' } },
                        { text: ' Dec 2026' }
                    ]
                },
                'A5'
            );
        }
    }
}



