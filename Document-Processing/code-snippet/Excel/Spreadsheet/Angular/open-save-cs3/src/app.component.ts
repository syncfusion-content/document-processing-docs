import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component } from '@angular/core';
import { SpreadsheetComponent, BeforeSaveEventArgs } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
imports: [
        
        DropDownButtonModule,
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: "<ejs-spreadsheet (beforeSave)='beforeSave($event)' saveUrl='https://services.syncfusion.com/angular/production/api/spreadsheet/save' allowSave='true'> </ejs-spreadsheet>"
})
export class AppComponent {
     beforeSave (args: BeforeSaveEventArgs) {
        // your code snippets here
    }
 }


