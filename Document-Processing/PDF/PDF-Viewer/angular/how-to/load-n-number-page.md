---
layout: post
title: Load N number of pages in Angular PDF Viewer component | Syncfusion
description: Learn how to Load N number of pages on initial loading in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Load N number of pages on initial loading
documentation: ug
domainurl: ##DomainURL##
---

# Load N pages initially

Control the number of pages the PDF Viewer renders on the initial load to improve perceived performance and reduce initial memory usage. Additional pages are rendered dynamically as the user scrolls through the document, allowing quick access to early pages without loading the entire file.

Set the [initialRenderPages](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#initialrenderpages) property to specify how many pages to render initially. For large documents, avoid high values for `initialRenderPages` because rendering many pages at once increases memory use and may slow loading. Typical ranges of 10–20 pages work well for most documents; adjust based on document size and client capabilities.

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

Find the sample [how to load n number of pages on initial loading](https://stackblitz.com/edit/angular-yzgy7n-yceens?file=app.component.html)