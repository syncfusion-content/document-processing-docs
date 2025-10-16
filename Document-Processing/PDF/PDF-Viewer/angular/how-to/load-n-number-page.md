---
layout: post
title: Load N Number of Pages in Angular PDF Viewer | Syncfusion
description: Learn how to load N number of pages on initial loading in the Syncfusion Angular PDF Viewer component of Essential JS 2.
platform: document-processing
control: Load N number of pages on initial loading
documentation: ug
domainurl: ##DomainURL##
---

# Load N Number of Pages on Initial Loading

Initial rendering in a PDF viewer allows control over the number of pages displayed when opening a PDF document. This enhances the user experience by providing flexibility in loading a specific number of pages initially, with additional pages dynamically rendered as the user scrolls through the document. This approach improves the responsiveness of the PDF Viewer and minimizes delays, enabling users to access specific pages without waiting for the entire document to load.

To utilize this capability in Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer, use the [initialRenderPages](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#initialrenderpages) property. The desired outcome can be achieved by setting this property to the specific number of pages to be loaded initially. However, caution is advised when setting a high value for `initialRenderPages` in large documents with numerous pages. Rendering a large number of pages simultaneously can increase memory usage and slow down loading times, impacting PDF Viewer performance.

Using the [initialRenderPages](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#initialrenderpages) property judiciously is advisable, especially when dealing with larger documents. It is more suitable for scenarios where a smaller range of pages, such as 10-20, can be loaded to provide a quick initial view of the document.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         AnnotationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService
       } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
                <ejs-pdfviewer id="pdfViewer"
                       [documentPath]='document'
                       [initialRenderPages]='initialRender'
                       style="height:640px;display:block">
                </ejs-pdfviewer>
             </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               AnnotationService, TextSearchService, TextSelectionService,
               PrintService, FormDesignerService, FormFieldsService]
})
export class AppComponent implements OnInit {
  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public initialRender = 10;
  ngOnInit(): void {
  }
}

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         AnnotationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService
       } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
                <ejs-pdfviewer id="pdfViewer"
                       [serviceUrl]='service'
                       [documentPath]='document'
                       [initialRenderPages]='initialRender'
                       style="height:640px;display:block">
                </ejs-pdfviewer>
             </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               AnnotationService, TextSearchService, TextSelectionService,
               PrintService, FormDesignerService, FormFieldsService]
})
export class AppComponent implements OnInit {
  public service = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';
  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public initialRender = 10;
  ngOnInit(): void {
  }
}

{% endhighlight %}
{% endtabs %}

For a complete example, find the sample demonstrating [how to load n number of pages on initial loading](https://stackblitz.com/edit/angular-yzgy7n-yceens?file=app.component.html).