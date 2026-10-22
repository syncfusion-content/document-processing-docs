import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DocumentEditorAllModule } from '@syncfusion/ej2-angular-documenteditor'


import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DocumentEditorComponent } from '@syncfusion/ej2-angular-documenteditor';
import { originalDocument, revisedDocument } from './sample-data';

@Component({
imports: [
    ButtonModule,
    DocumentEditorAllModule
],


standalone: true,
    selector: "app-container",
    template: `<button ejs-button cssClass="e-primary" (click)="onCompareClick()">Compare Documents</button>
    <ejs-documenteditor #documenteditor height="590px" style="width:100%;display:block" [isReadOnly]=false [enableTrackChanges]=true [enableComment]=true [enableSfdtExport]=true [serviceUrl]="serviceUrl"></ejs-documenteditor>`,
    encapsulation: ViewEncapsulation.None,
    providers: []
})
export class AppComponent {
    @ViewChild("documenteditor")
    public documentEditor?: DocumentEditorComponent;
    //Utilise the correct Service URL where the CompareDocuments Web API is hosted.
    //If you choose to use localhost, please update the URL below to 'http://localhost:62870/api/DocumentEditor/';
    public serviceUrl: string = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

    onCompareClick(): void {
        //Prepare the form data with the original and revised document content to send it to server side.
        const formData: FormData = new FormData();
        formData.append('originalFile', new Blob([originalDocument], { type: 'application/octet-stream' }), 'originalDocument.sfdt');
        formData.append('revisedFile', new Blob([revisedDocument], { type: 'application/octet-stream' }), 'revisedDocument.sfdt');
        //Send the original and revised document content to the server side CompareDocuments Web API to perform comparison.
        const httpRequest: XMLHttpRequest = new XMLHttpRequest();
        //Replace your running web service URL here.
        httpRequest.open('POST', this.serviceUrl + 'CompareDocuments');
        httpRequest.responseType = 'text';
        httpRequest.onload = () => {
            if (httpRequest.status === 200 || httpRequest.status === 304) {
                //Show the tracked changes (revisions) in the Document Editor.
                (this.documentEditor as DocumentEditorComponent).showRevisions = true;
                //Open the resultant document (comparison result with tracked changes) in the Document Editor.
                (this.documentEditor as DocumentEditorComponent).open(httpRequest.responseText);
            } else {
                alert('Failed to compare the documents. Please try again.');
            }
        };
        httpRequest.send(formData);
    }
}
