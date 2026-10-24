import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, CellStyleModel, FormControlModel, SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [SpreadsheetAllModule],
    template: `<ejs-spreadsheet #spreadsheet [showFormulaBar]="false" [allowFormControl]="true">
                    <e-sheets>
                        <e-sheet name="DropDownDemo" [formControls]="formControls">
                            <e-columns>
                                <e-column [width]="150"></e-column>
                                <e-column [width]="200"></e-column>
                                <e-column [width]="150"></e-column>
                                <e-column [width]="150"></e-column>
                                <e-column [width]="100"></e-column>
                                <e-column [width]="100"></e-column>
                                <e-column [width]="100"></e-column>
                                <e-column [width]="150"></e-column>
                                <e-column [width]="150"></e-column>
                                <e-column [width]="100"></e-column>
                            </e-columns>
                            <e-rows>
                                <e-row [index]="0">
                                    <e-cells>
                                        <e-cell [index]="0" value="Drop Down Form Controls" [style]="boldCenter"></e-cell>
                                        <e-cell [index]="7" value="Delivery Options"></e-cell>
                                        <e-cell [index]="8" value="Payment Methods"></e-cell>
                                        <e-cell [index]="9" value="Priority"></e-cell>
                                    </e-cells>
                                </e-row>
                                <e-row [index]="1">
                                    <e-cells>
                                        <e-cell [index]="0" value="Delivery Options"></e-cell>
                                        <e-cell [index]="1" value=""></e-cell>
                                        <e-cell [index]="2" value="Selected Index"></e-cell>
                                        <e-cell [index]="3" value=""></e-cell>
                                        <e-cell [index]="7" value="Standard Delivery"></e-cell>
                                        <e-cell [index]="8" value="Cash on Delivery"></e-cell>
                                        <e-cell [index]="9" value="Low"></e-cell>
                                    </e-cells>
                                </e-row>
                                <e-row [index]="2">
                                    <e-cells>
                                        <e-cell [index]="7" value="Express Delivery"></e-cell>
                                        <e-cell [index]="8" value="Credit Card"></e-cell>
                                        <e-cell [index]="9" value="Medium"></e-cell>
                                    </e-cells>
                                </e-row>
                                <e-row [index]="3">
                                    <e-cells>
                                        <e-cell [index]="0" value="Payment Method"></e-cell>
                                        <e-cell [index]="1" value=""></e-cell>
                                        <e-cell [index]="2" value="Selected Index"></e-cell>
                                        <e-cell [index]="3" value=""></e-cell>
                                        <e-cell [index]="7" value="Priority Delivery"></e-cell>
                                        <e-cell [index]="8" value="Debit Card"></e-cell>
                                        <e-cell [index]="9" value="High"></e-cell>
                                    </e-cells>
                                </e-row>
                                <e-row [index]="4">
                                    <e-cells>
                                        <e-cell [index]="7" value="Pickup at Store"></e-cell>
                                        <e-cell [index]="8" value="Online Payment"></e-cell>
                                    </e-cells>
                                </e-row>
                                <e-row [index]="5">
                                    <e-cells>
                                        <e-cell [index]="0" value="Priority Level"></e-cell>
                                        <e-cell [index]="1" value=""></e-cell>
                                        <e-cell [index]="2" value="Selected Index"></e-cell>
                                        <e-cell [index]="3" value=""></e-cell>
                                        <e-cell [index]="7" value="Digital Download"></e-cell>
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
            type: 'DropDown',
            text: 'Select Delivery',
            cellLink: 'D2',
            inputRange: 'H1:H5',
            selectedIndex: 0,
            top: 40,
            left: 150,
            height: 22,
            width: 120
        },
        {
            type: 'DropDown',
            text: 'Select Payment',
            cellLink: 'D4',
            inputRange: 'I1:I4',
            selectedIndex: 0,
            top: 100,
            left: 150,
            height: 22,
            width: 120
        },
        {
            type: 'DropDown',
            text: 'Select Priority',
            cellLink: 'D6',
            inputRange: 'J1:J3',
            selectedIndex: 1,
            top: 160,
            left: 150,
            height: 22,
            width: 120
        }
    ];
}
