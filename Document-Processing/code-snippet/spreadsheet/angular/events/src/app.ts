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
    template: `<div><ejs-spreadsheet (actionBegin)='actionBegin($event)' openUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open' allowOpen='true'> </ejs-spreadsheet><div>
    <h4><b>Event Trace</b></h4>
    <div id="evt">
        <div>
            <span id="EventLog"></span>
        </div>
        <button id="clearBtn" class="e-btn" (click)="clearBtnClick()">Clear</button>
    </div>
</div>
</div>`
})
export class AppComponent {
    actionBegin (args: any) {
        this.appendElement(`actionBegin triggered for <b>&nbsp;${args.action}</b> action<hr>`);
        console.log(args);
    }
    actionComplete(args: any){
        this.appendElement(`actionComplete triggered for <b>&nbsp;${args.action}</b> action<hr>`);
        console.log(args);
    }
    appendElement(html: any){
        const span = document.createElement("span");
        span.innerHTML = html;
        const log = document.getElementById('EventLog');
        if (log) {
            log.insertBefore(span, log.firstChild);
        }
    };
    clearBtnClick(){
        const eventLog = document.getElementById('EventLog');
        if (eventLog) {
            eventLog.innerHTML = "";
        }
    };
}