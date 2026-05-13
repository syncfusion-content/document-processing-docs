import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component } from '@angular/core';
import { SpreadsheetComponent, BeforeSaveEventArgs, BeforeOpenEventArgs } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
imports: [
        
        DropDownButtonModule,
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<ejs-spreadsheet (actionBegin)='beforeOpen($event)' openUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open' allowOpen='true'> </ejs-spreadsheet>
            <div>
                <h4><b>Event Trace</b></h4>
                <div id="evt">
                    <div>
                        <span id="EventLog"></span>
                    </div>
                    <button id="clearBtn" className='e-btn' onClick={clearBtnClick}>Clear</button>
                </div>
            </div>`
})
export class AppComponent {
     beforeOpen (args: BeforeOpenEventArgs) {
        // your code snippets here
    }
}