import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, CellStyleModel, FormControlModel, SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [SpreadsheetAllModule],
    template: `<ejs-spreadsheet #spreadsheet [showFormulaBar]="false" [allowFormControl]="true">
                    <e-sheets>
                        <e-sheet name="FormControls" [formControls]="formControls">
                            <e-columns>
                                <e-column [width]="150"></e-column>
                                <e-column [width]="150"></e-column>
                                <e-column [width]="150"></e-column>
                                <e-column [width]="150"></e-column>
                            </e-columns>
                            <e-rows>
                                <e-row [index]="0">
                                    <e-cells>
                                        <e-cell [index]="0" value="Form Controls Demo" [style]="boldCenter"></e-cell>
                                    </e-cells>
                                </e-row>
                                <e-row [index]="1">
                                    <e-cells>
                                        <e-cell [index]="0" value="Check Box Control"></e-cell>
                                        <e-cell [index]="1" value=""></e-cell>
                                        <e-cell [index]="2" value="Cell Link"></e-cell>
                                        <e-cell [index]="3" value=""></e-cell>
                                    </e-cells>
                                </e-row>
                                <e-row [index]="3">
                                    <e-cells>
                                        <e-cell [index]="0" value="Notifications"></e-cell>
                                        <e-cell [index]="1" value=""></e-cell>
                                        <e-cell [index]="2" value="Cell Link"></e-cell>
                                        <e-cell [index]="3" value=""></e-cell>
                                    </e-cells>
                                </e-row>
                                <e-row [index]="5">
                                    <e-cells>
                                        <e-cell [index]="0" value="Select All"></e-cell>
                                        <e-cell [index]="1" value=""></e-cell>
                                        <e-cell [index]="2" value="Cell Link"></e-cell>
                                        <e-cell [index]="3" value=""></e-cell>
                                    </e-cells>
                                </e-row>
                            </e-rows>
                        </e-sheet>
                    </e-sheets>
                </ejs-spreadsheet>`,
    styles: [`
        :host ::ng-deep {
            .e-spreadsheet {
                min-height: 600px;
            }
        }
    `]
})
export class AppComponent {
    @ViewChild('spreadsheet') spreadsheetObj!: SpreadsheetComponent;

    boldCenter: CellStyleModel = { fontWeight: 'bold', textAlign: 'center' };

    formControls: FormControlModel[] = [
        {
            type: 'CheckBox',
            text: 'Accept Terms',
            cellLink: 'D2',
            value: 'Unchecked',
            top: 40,
            left: 150,
            height: 20,
            width: 120
        },
        {
            type: 'CheckBox',
            text: 'Enable Notifications',
            cellLink: 'D4',
            value: 'Unchecked',
            top: 80,
            left: 150,
            height: 20,
            width: 120
        },
        {
            type: 'CheckBox',
            text: 'Select All Options',
            cellLink: 'D6',
            value: 'Unchecked',
            top: 120,
            left: 150,
            height: 20,
            width: 120
        }
    ];
}
