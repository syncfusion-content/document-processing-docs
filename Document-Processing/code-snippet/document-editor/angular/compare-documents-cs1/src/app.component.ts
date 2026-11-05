import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DocumentEditorContainerModule, DocumentEditorContainer} from '@syncfusion/ej2-angular-documenteditor';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { originalDocument, revisedDocument } from './sample-data';

@Component({
imports: [ ButtonModule, DocumentEditorContainerModule ],
standalone: true,
    selector: "app-container",
    template: `<button ejs-button cssClass="e-primary" (click)="onCompareClick()">Compare Documents</button>
    <ejs-documenteditorcontainer #documenteditor height="590px" style="width:100%;display:block" [enableToolbar]=false [showPropertiesPane]=false [enableTrackChanges]=true [serviceUrl]="serviceUrl"></ejs-documenteditorcontainer>`,
    encapsulation: ViewEncapsulation.None,
    providers: []
})
export class AppComponent {
    @ViewChild("documenteditor")
    public documentEditorContainer?: DocumentEditorContainer;
    public serviceUrl: string = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

    onCompareClick(): void {
        //Prepare the form data with the original and revised document content to send it to server side.
        const formData: FormData = new FormData();
        formData.append('OriginalFile', new File([JSON.stringify(originalDocument)], 'original.sfdt', { type: 'application/json' }));
        formData.append('RevisedFile', new File([JSON.stringify(revisedDocument)], 'revised.sfdt', { type: 'application/json' }));
        //Send the original and revised document content to the server side CompareDocuments Web API to perform comparison.
        const httpRequest: XMLHttpRequest = new XMLHttpRequest();
        //Replace your running web service URL here.
        httpRequest.open('POST', this.serviceUrl + 'CompareDocuments');
        httpRequest.responseType = 'text';
        httpRequest.onload = () => {
            if (httpRequest.status === 200 || httpRequest.status === 304) {
                if(this.documentEditorContainer){
                    this.documentEditorContainer.documentEditor.showRevisions = true;
                    this.documentEditorContainer.documentEditor.open(httpRequest.responseText);
                }
            } else {
                alert('Failed to compare the documents. Please try again.');
            }
        };
        httpRequest.send(formData);
    }
}
