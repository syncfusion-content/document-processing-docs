import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'

import { Component, OnInit, ViewChild } from '@angular/core';
import { SpreadsheetComponent, CellStyleModel, FormControlModel } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
    imports: [
        SpreadsheetAllModule
    ],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-spreadsheet #spreadsheet>
                <e-sheets>
                    <e-sheet name='FormControls'>
                        <e-columns>
                            <e-column [width]='150'></e-column>
                            <e-column [width]='150'></e-column>
                            <e-column [width]='150'></e-column>
                            <e-column [width]='150'></e-column>
                        </e-columns>
                        <e-rows>
                            <e-row [index]='0'>
                                <e-cells>
                                    <e-cell [index]='0' value='Form Controls Demo' [style]='boldCenter'></e-cell>
                                </e-cells>
                            </e-row>
                            <e-row [index]='1'>
                                <e-cells>
                                    <e-cell [index]='0' value='Shipping Options'></e-cell>
                                    <e-cell [index]='1' value=''></e-cell>
                                    <e-cell [index]='2' value='Cell Link'></e-cell>
                                    <e-cell [index]='3' value=''></e-cell>
                                </e-cells>
                            </e-row>
                            <e-row [index]='3'>
                                <e-cells>
                                    <e-cell [index]='0' value='Payment Method'></e-cell>
                                    <e-cell [index]='1' value=''></e-cell>
                                    <e-cell [index]='2' value='Cell Link'></e-cell>
                                    <e-cell [index]='3' value=''></e-cell>
                                </e-cells>
                            </e-row>
                        </e-rows>
                    </e-sheet>
                </e-sheets>
            </ejs-spreadsheet>`,
    styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
    public boldCenter: CellStyleModel = { fontWeight: 'bold', textAlign: 'center' };
    @ViewChild('spreadsheet') public spreadsheetObj!: SpreadsheetComponent;

    ngOnInit(): void {
        let spreadsheet = this.spreadsheetObj;
        if (spreadsheet) {
            // Insert Radio Button form control for Shipping
            spreadsheet.addFormControl({
                type: 'RadioButton',
                target: 'B2',
                name: 'shippingOption1',
                caption: 'Standard Shipping',
                linkedCell: 'D2'
            } as FormControlModel);

            spreadsheet.addFormControl({
                type: 'RadioButton',
                target: 'B3',
                name: 'shippingOption2',
                caption: 'Express Shipping',
                linkedCell: 'D2'
            } as FormControlModel);

            // Insert Radio Button form control for Payment
            spreadsheet.addFormControl({
                type: 'RadioButton',
                target: 'B4',
                name: 'paymentOption1',
                caption: 'Credit Card',
                linkedCell: 'D4'
            } as FormControlModel);

            spreadsheet.addFormControl({
                type: 'RadioButton',
                target: 'B5',
                name: 'paymentOption2',
                caption: 'PayPal',
                linkedCell: 'D4'
            } as FormControlModel);
        }
    }
}
