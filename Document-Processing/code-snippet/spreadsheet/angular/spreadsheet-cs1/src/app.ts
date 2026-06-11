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
    template: '<ejs-spreadsheet openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open" saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save"></ejs-spreadsheet>'
})
export class AppComponent { }


