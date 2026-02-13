---
layout: post
title: Retrieving Base64 Value from a PDF in Angular PDF Viewer|Syncfusion.
description: Learn here all about how to retrieve the Base64 value of a loaded PDF document in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Retrieve Base64 from a PDF in PDF Viewer

### Overview

This guide shows how to obtain the Base64-encoded value of a PDF document loaded in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer using Angular. Producing a Base64 string is useful for sending the PDF to a server, embedding it in JSON payloads, or client-side processing.

### How to retrieve the Base64 value

**Step 1: Create the PDF Viewer sample**

Follow the [Getting Started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) guide for the Angular PDF Viewer.

**Step 2: Set up the Angular component**

Create an Angular component and update the template to include a button that triggers conversion to a Base64 string. The samples below show both standalone and server-backed viewer configurations.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, OnInit } from '@angular/core';
import {
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  AnnotationService,
  TextSearchService,
  TextSelectionService,
  FormFieldsService,
  FormDesignerService,
  PrintService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
    <div class="content-wrapper">
      <button (click)="getBase64()" style="margin-bottom: 20px;">Get Base64</button>
      <ejs-pdfviewer
        id="pdfViewer"
        [documentPath]="document"
        [resourceUrl]="resourceUrl"
        style="height: 640px; display: block;">
      </ejs-pdfviewer>
    </div>
  `,
  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    AnnotationService,
    TextSearchService,
    TextSelectionService,
    FormFieldsService,
    FormDesignerService,
    PrintService
  ]
})
export class AppComponent implements OnInit {
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/27.2.2/dist/ej2-pdfviewer-lib';

  ngOnInit(): void { }

  getBase64() {
    const viewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
    viewer.saveAsBlob().then((blobData: Blob) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64data = reader.result as string;
        console.log(base64data);  // Outputs a data URL containing the Base64 string of the PDF
      };
      reader.readAsDataURL(blobData);
    });
  }
}

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { Component, OnInit } from '@angular/core';
import {
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  AnnotationService,
  TextSearchService,
  TextSelectionService,
  FormFieldsService,
  FormDesignerService,
  PrintService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
    <div class="content-wrapper">
      <button (click)="getBase64()" style="margin-bottom: 20px;">Get Base64</button>
      <ejs-pdfviewer
        id="pdfViewer"
        [documentPath]='document'
        [serviceUrl]='service'
        style="height: 640px; display: block;">
      </ejs-pdfviewer>
    </div>
  `,
  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    AnnotationService,
    TextSearchService,
    TextSelectionService,
    FormFieldsService,
    FormDesignerService,
    PrintService
  ]
})
export class AppComponent implements OnInit {
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public service: string = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';

  ngOnInit(): void { }

  getBase64() {
    const viewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
    viewer.saveAsBlob().then((blobData: Blob) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64data = reader.result as string;
        console.log(base64data);  // Outputs a data URL containing the Base64 string of the PDF
      };
      reader.readAsDataURL(blobData);
    });
  }
}

{% endhighlight %}
{% endtabs %}

### Conclusion

By implementing these steps in the Angular component, a PDF document loaded in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer can be converted into a Base64-encoded data URL when a button is clicked. This facilitates the manipulation or transfer of PDF data as needed.

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to)
