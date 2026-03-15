---
layout: post
title: Controlling File Downloads in Angular PDF Viewer component | Syncfusion
description: Learn here how to Controlling File Downloads in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Controlling File Downloads in Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer

The PDF Viewer exposes a `downloadStart` event that enables interception of a document download before it begins. Use this event to apply custom logic and, if needed, cancel the download by setting the event's `cancel` flag.

### Using the downloadStart Event

The `downloadStart` event fires immediately before the download process starts. The event handler receives a `DownloadStartEventArgs` object (for example, `args`) that exposes properties such as `cancel` and `fileName` which can be used to inspect or stop the download.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, OnInit } from '@angular/core';
import { PdfViewerModule, LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService,
         AnnotationService, DownloadStartEventArgs, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';
@Component({
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
                  <ejs-pdfviewer id="pdfViewer"
                            [documentPath]='document'
                            (downloadStart)="downloadStart($event)"
                            style="height:640px;display:block">
                  </ejs-pdfviewer>
              </div>`,
   providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService]
  })
  export class AppComponent implements OnInit {
    public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    public resource: string = "https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib";
    ngOnInit(): void {
    }
    public downloadStart(args: DownloadStartEventArgs): void {
        // Your custom logic here
        args.cancel = true; // Prevent download action
      }
}

{% endhighlight %}

{% highlight ts tabtitle="Server-Backed" %}

import { Component, OnInit } from '@angular/core';
import { PdfViewerModule, LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService,
         AnnotationService, PageOrganizerService, DownloadStartEventArgs } from '@syncfusion/ej2-angular-pdfviewer';
@Component({
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
                  <ejs-pdfviewer id="pdfViewer"
                            [serviceUrl]='service'
                            [documentPath]='document'
                            (downloadStart)="downloadStart($event)"
                            style="height:640px;display:block">
                  </ejs-pdfviewer>
              </div>`,
   providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService]
  })
  export class AppComponent implements OnInit {
    public service = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';
    public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

    ngOnInit(): void {
    }
  public downloadStart(args: DownloadStartEventArgs): void {
    // Your custom logic here
    args.cancel = true; // Prevent download action
  }
}

{% endhighlight %}
{% endtabs %}

By default, the `cancel` argument is `false`, so the download proceeds unless the handler explicitly sets `args.cancel = true`.

### Enhanced Flexibility

Using the [downloadStart](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/downloadStartEventArgs/) event enables conditional control over downloads—for example, to enforce authentication, restrict downloads for certain documents, or prompt users for confirmation. When using server-backed viewers, confirm whether server-side behavior requires additional handling; canceling the client-side event prevents the local download but may not affect server workflows.