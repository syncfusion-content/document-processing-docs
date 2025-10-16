---
layout: post
title: Retrieve Base64 Value from a PDF in Angular PDF Viewer | Syncfusion
description: Learn how to retrieve the Base64 value of a loaded PDF document in the Syncfusion Angular PDF Viewer component of Essential JS 2.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Retrieve Base64 value from a PDF in PDF Viewer

### Overview

This guide demonstrates how to fetch the Base64-encoded value of a PDF document loaded in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer using Angular. This is useful for sending the PDF as a Base64 string or processing it in the front end.

### How to retrieve Base64 value

**Step 1:** Create a simple PDF Viewer sample by following the steps in this [guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started).

**Step 2:** Set up the Angular component

Create an Angular component and update the template to include a button that triggers the conversion to a Base64 string.


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
        console.log(base64data);  // Outputs the base64 string of the PDF
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
        console.log(base64data);  // Outputs the base64 string of the PDF
      };
      reader.readAsDataURL(blobData);
    });
  }
}

{% endhighlight %}
{% endtabs %}

### Conclusion

By implementing these steps in an Angular component, a PDF document loaded in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer can be converted to a Base64 string upon button click. This facilitates the manipulation or transfer of PDF data as needed.

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to)
