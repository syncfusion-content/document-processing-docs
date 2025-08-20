import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component, OnInit } from '@angular/core';
import { SpreadsheetComponent, BeforeSaveEventArgs } from '@syncfusion/ej2-angular-spreadsheet';
import { data } from './datasource';

@Component({
imports: [
        
        DropDownButtonModule,
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: "<ejs-spreadsheet #spreadsheet (beforeSave)='beforeSave($event)' saveUrl='https://services.syncfusion.com/angular/production/api/spreadsheet/save' allowSave='true'> <e-sheets> <e-sheet> <e-ranges> <e-range [dataSource]='data'></e-range></e-ranges><e-columns><e-column [width]=90></e-column><e-column [width]=100></e-column><e-column [width]=96></e-column><e-column [width]=120></e-column><e-column [width]=130></e-column><e-column [width]=120></e-column></e-columns></e-sheet></e-sheets></ejs-spreadsheet>"
})
export class AppComponent implements OnInit {
    public data?: object[];
    ngOnInit(): void {
        this.data = data;
    }
    beforeSave (args: BeforeSaveEventArgs) {
        args.pdfLayoutSettings!.orientation = 'Landscape'; // You can change the orientation of the PDF document
    }
 }


