---
layout: post
title: Control File Downloads in Angular PDF Viewer | Syncfusion
description: Learn how to control file downloads in the Syncfusion Angular PDF Viewer component of Essential JS 2.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Control file downloads in Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer

In the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer, a new feature enables file download management. This feature allows interception and potential skipping of the PDF document download process, providing enhanced control over user interactions within the application.

### Using the downloadStart Event

The key to this functionality lies in the `downloadStart` event, which offers a mechanism to intercept the initiation of the download process. Within the event handler, the `cancel` argument can be set to `true` to programmatically prevent the download action from proceeding.

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

By default, the `cancel` argument is set to `false`, indicating that the download action proceeds unless explicitly cancelled by custom logic.

### Enhanced flexibility

By leveraging the [downloadStart](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/downloadStartEventArgs/) event and its `cancel` argument, custom logic can be implemented to control and potentially prevent download actions based on the application's specific requirements. This enhancement provides greater flexibility in managing user interactions with PDF documents, empowering experience tailoring.
