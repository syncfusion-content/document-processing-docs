import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { getCellIndexes, getRangeIndexes, SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { enableRipple } from '@syncfusion/ej2-base';
import { defaultData } from './datasource';

enableRipple(true);

@Component({
imports: [
        
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<div>
    <ejs-spreadsheet #spreadsheet (created)="created()" (cellEdit)="cellEdit($event)" (actionBegin)="actionBegin($event)" >
                <e-sheets>
                  <e-sheet name="Price Details">
                    <e-ranges>
                      <e-range [dataSource]="defaultData"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column [width]=130></e-column>
                      <e-column [width]=100></e-column>
                      <e-column [width]=100></e-column>
                    </e-columns>
                  </e-sheet>
                </e-sheets>
              </ejs-spreadsheet></div>`
})
export class AppComponent {
    @ViewChild('spreadsheet')
    spreadsheetObj: SpreadsheetComponent | undefined;

    defaultData: object[] = defaultData;
    

    created() {
        this.spreadsheetObj!.cellFormat({fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
    }
    // Columns to be prevented editing.
    public readOnlyColumns = [0,2];

    // Triggers when cell editing starts in the spreadsheet.
   cellEdit = (args: any) =>{
        var addressRange = getCellIndexes(args.address.split('!')[1]);
        // preventing cellEditing from the readOnly columns
        if (this.readOnlyColumns.includes(addressRange[1])) {
            args.cancel = true;
        }
    }

    // Triggers whenever any action begins in spreadsheet. 
   actionBegin = (args: any) =>{
        var address: any;
        if (args.action == "clipboard") {
            address = args.args.eventArgs.pastedRange;
        }
        else if (args.action == "autofill") {
            address = args.args.eventArgs.fillRange;
        }
        else if (args.action == "format" || args.action == "validation" || args.action == "conditionalFormat") {
            address = args.args.eventArgs.range;
        }
        else if (args.action == "cut") {
            address = args.args.copiedRange
        }
        if (address) {
            var addressRange = getRangeIndexes(address);
            var colStart = addressRange[1];
            var colEnd = addressRange[3];
            // preventing other actions from the readOnly columns
            for (var col = colStart; col <= colEnd; col++) {
                if (this.readOnlyColumns.includes(col)) {
                    if (args.args.action == "cut") {
                        args.args.cancel = true;
                    } else {
                        args.args.eventArgs.cancel = true;
                    }
                    break;
                }
            }
        }
    }
}