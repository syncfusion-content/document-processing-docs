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
                            <e-column [width]='150'></e-column>
                            <e-column [width]='150'></e-column>
                        </e-columns>
                        <e-rows>
                            <e-row [index]='0'>
                                <e-cells>
                                    <e-cell [index]='0' value='Form Controls Demo' [style]='boldCenter'></e-cell>
                                </e-cells>
                            </e-row>
                            <e-row [index]='0'>
                                <e-cells>
                                    <e-cell [index]='4' value='Delivery Options'></e-cell>
                                    <e-cell [index]='5' value=''></e-cell>
                                </e-cells>
                            </e-row>
                            <e-row [index]='1'>
                                <e-cells>
                                    <e-cell [index]='4' value='Standard'></e-cell>
                                </e-cells>
                            </e-row>
                            <e-row [index]='2'>
                                <e-cells>
                                    <e-cell [index]='4' value='Express'></e-cell>
                                </e-cells>
                            </e-row>
                            <e-row [index]='3'>
                                <e-cells>
                                    <e-cell [index]='4' value='Overnight'></e-cell>
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
            // Insert Combo Box (Dropdown) form control for Delivery
            spreadsheet.addFormControl({
                type: 'ComboBox',
                target: 'B2',
                name: 'deliveryComboBox',
                inputRange: 'E1:E3',
                linkedCell: 'B3'
            } as FormControlModel);

            // Insert Combo Box (Dropdown) form control for Payment Method
            spreadsheet.addFormControl({
                type: 'ComboBox',
                target: 'B4',
                name: 'paymentComboBox',
                inputRange: 'F1:F3',
                linkedCell: 'B5'
            } as FormControlModel);

            // Insert Combo Box (Dropdown) form control for Priority
            spreadsheet.addFormControl({
                type: 'ComboBox',
                target: 'B6',
                name: 'priorityComboBox',
                inputRange: 'G1:G3',
                linkedCell: 'B7'
            } as FormControlModel);
        }
    }
}
