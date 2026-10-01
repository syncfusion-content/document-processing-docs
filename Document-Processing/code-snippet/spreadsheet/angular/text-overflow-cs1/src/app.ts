import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'


import { Component, ViewChild } from '@angular/core';

@Component({
imports: [
        
        DropDownButtonModule,
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: "<ejs-spreadsheet #spreadsheet [sheets]="sheets"> </ejs-spreadsheet>,"
})

export class AppComponent {

    @ViewChild('spreadsheet')

    public sheets: any[] = [
        {
            name: 'Famous Quotes',
            columns: [{ width: 160 }, { width: 110 }, { width: 110 }, { width: 100 }, { width: 100 }, { width: 110 }],
            rows: [
                {
                    cells: [{
                        value: 'Famous Quotes',
                        style: {
                            fontWeight: 'bold',
                            fontSize: '16pt'
                        }
                    }]
                },
                {
                    cells: [{
                        value: 'Success is the sum of small efforts repeated day after day.',
                        style: { fontSize: '14pt' }
                    }]
                },
                {
                    cells: [{
                        value: 'Quality is never an accident it is always the result of intelligent effort.',
                        style: { fontSize: '14pt' }
                    }]
                },
                {
                    cells: [{
                        value: 'The future depends on what you do today and how consistently you do it.',
                        style: { fontSize: '14pt' }
                    }]
                },
                {
                    cells: [{
                        value: 'Well organized information helps teams make better decisions and achieve goals.',
                        style: { fontSize: '14pt' }
                    }]
                },
                {
                    cells: [{
                        value: 'Great achievements are built through planning persistence and continuous improvement.',
                        style: { fontSize: '14pt' }
                    }]
                }
            ]
        }
    ];
}



