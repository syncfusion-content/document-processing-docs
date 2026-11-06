import { Component, ViewChild } from '@angular/core';
import {
    SpreadsheetComponent,
    SpreadsheetAllModule
} from '@syncfusion/ej2-angular-spreadsheet';
import { defaultData } from './datasource';

@Component({
    imports: [
        SpreadsheetAllModule
    ],

    standalone: true,
    selector: 'app-container',

    template: `
    <ejs-spreadsheet #spreadsheet (created)="created()">
        <e-sheets>
            <e-sheet name="Price Details">
                <e-ranges>
                    <e-range [dataSource]="data"></e-range>
                </e-ranges>

                <e-formcontrols>
                    <e-formcontrol
                        type="CheckBox"
                        text="Check Box 1"
                        cellLink="G1"
                        [height]="40"
                        [width]="180">
                    </e-formcontrol>
                </e-formcontrols>

                <e-columns>
                    <e-column [width]="180"></e-column>
                    <e-column [width]="130"></e-column>
                    <e-column [width]="130"></e-column>
                    <e-column [width]="180"></e-column>
                    <e-column [width]="130"></e-column>
                    <e-column [width]="120"></e-column>
                </e-columns>
            </e-sheet>
        </e-sheets>
    </ejs-spreadsheet>`
})
export class AppComponent {
    @ViewChild('spreadsheet')
    spreadsheetObj!: SpreadsheetComponent;

    public data: Object[] = defaultData;

    created(): void {
        this.spreadsheetObj.cellFormat(
            {
                fontWeight: 'bold',
                textAlign: 'center',
                verticalAlign: 'middle'
            },
            'A1:F1'
        );

        this.spreadsheetObj.numberFormat('$#,##0.00', 'F2:F31');
        this.spreadsheetObj.numberFormat('m/d/yyyy', 'E2:E30');
    }
}