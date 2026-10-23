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
                                    <e-cell [index]='0' value='Check Box Control'></e-cell>
                                    <e-cell [index]='1' value=''></e-cell>
                                    <e-cell [index]='2' value='Cell Link'></e-cell>
                                    <e-cell [index]='3' value=''></e-cell>
                                </e-cells>
                            </e-row>
                            <e-row [index]='3'>
                                <e-cells>
                                    <e-cell [index]='0' value='Notifications'></e-cell>
                                    <e-cell [index]='1' value=''></e-cell>
                                    <e-cell [index]='2' value='Cell Link'></e-cell>
                                    <e-cell [index]='3' value=''></e-cell>
                                </e-cells>
                            </e-row>
                            <e-row [index]='5'>
                                <e-cells>
                                    <e-cell [index]='0' value='Select All'></e-cell>
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
            // Insert Check Box form control
            // Parameters: target cell, name, x offset, y offset, width, height
            spreadsheet.addFormControl({
                type: 'CheckBox',
                target: 'B2',
                name: 'checkboxControl',
                caption: 'Accept Terms',
                checkedValue: true,
                uncheckedValue: false,
                linkedCell: 'D2',
                fontName: 'Calibri',
                fontSize: 14
            } as FormControlModel);

            // Insert another Check Box with different properties
            spreadsheet.addFormControl({
                type: 'CheckBox',
                target: 'B4',
                name: 'checkboxControl2',
                caption: 'Enable Notifications',
                checkedValue: true,
                uncheckedValue: false,
                linkedCell: 'D4'
            } as FormControlModel);

            // Insert Check Box with mixed state
            spreadsheet.addFormControl({
                type: 'CheckBox',
                target: 'B6',
                name: 'checkboxControl3',
                caption: 'Select All Options',
                linkedCell: 'D6'
            } as FormControlModel);
        }
    }
}
