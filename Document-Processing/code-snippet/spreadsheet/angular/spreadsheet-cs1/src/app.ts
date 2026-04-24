import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'
import { Component } from '@angular/core';

@Component({
imports: [
        SpreadsheetAllModule
    ],

standalone: true,
    selector: 'app-root',
    template: '<ejs-spreadsheet (beforeOpen)='beforeOpen($event)' openUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open' allowOpen='true' (beforeSave)='beforeSave($event)' saveUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save' allowSave='true'> </ejs-spreadsheet>'
})
export class AppComponent { }


