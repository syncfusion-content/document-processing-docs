---
layout: post
title: Mobile Toolbar Interface in Angular PDF Viewer control | Syncfusion
description: Learn All About the Mobile Toolbar Interface in Syncfusion Angular PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---
# Customize mobile toolbar in Angular PDF Viewer

## Overview

This how-to explains how to enable the desktop toolbar on mobile devices running the Syncfusion Angular PDF Viewer, and how to preserve touch scrolling when the desktop toolbar is used.

## Prerequisites

- EJ2 Angular PDF Viewer installed and added in your Angular project.
- For standalone mode: a valid [`resourceUrl`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#resourceurl) hosting the PDF Viewer assets.
- For server-backed mode: a working [`serviceUrl`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#serviceurl) endpoint.

## Steps

**Step 1:** Enable desktop toolbar on mobile: set [`enableDesktopMode`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#enabledesktopmode) to `true` on PDF Viewer.

**Step 2:** (Optional, recommended) Disable text-selection to preserve smooth touch scrolling: set [`enableTextSelection`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#enabletextselection) to `false`.

**Step 3:** Inject the [`ToolbarService`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbar) and other services required by your toolbar features via providers array.

**Example:**

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import { PdfViewerModule, ToolbarService, MagnificationService, NavigationService, AnnotationService, LinkAnnotationService,
  ThumbnailViewService, BookmarkViewService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService,
  PrintService, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService, MagnificationService, NavigationService, AnnotationService, LinkAnnotationService,
    ThumbnailViewService, BookmarkViewService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService,
    PrintService, PageOrganizerService
  ],
  template: `<ejs-pdfviewer
    id="pdfViewer"
    [documentPath]="document"
    [resourceUrl]="resource"
    [enableDesktopMode]="true"
    [enableTextSelection]="false"
    style="height:640px;width:100%;display:block">
  </ejs-pdfviewer>`
})
export class AppComponent {
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
}
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}
import { Component } from '@angular/core';
import { PdfViewerModule, ToolbarService, MagnificationService, NavigationService, AnnotationService, LinkAnnotationService,
  ThumbnailViewService, BookmarkViewService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService,
  PrintService, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService, MagnificationService, NavigationService, AnnotationService, LinkAnnotationService,
    ThumbnailViewService, BookmarkViewService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService,
    PrintService, PageOrganizerService
  ],
  template: `<ejs-pdfviewer
    id="pdfViewer"
    [documentPath]="document"
    [serviceUrl]="service"
    [enableDesktopMode]="true"
    [enableTextSelection]="false"
    style="height:640px;width:100%;display:block">
  </ejs-pdfviewer>`
})
export class AppComponent {
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public service: string = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
}
{% endhighlight %}
{% endtabs %}

## Troubleshooting

- Print option not visible on mobile: set [`enableDesktopMode`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#enabledesktopmode) to `true`; otherwise the mobile toolbar omits Print.
- Touch scrolling is jerky after enabling desktop toolbar: set [`enableTextSelection`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#enabletextselection) to `false` to avoid text-selection capturing touch events.
- Missing assets or broken UI: confirm [`resourceUrl`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#resourceurl) points to the correct version of the `ej2-pdfviewer-lib` and is reachable from the device.
- Server errors in server-backed mode: verify [`serviceUrl`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#serviceurl) CORS configuration and that the back end is running.

## Related topics

- [Customize form designer toolbar](./form-designer-toolbar)
- [Customize annotation toolbar](./annotation-toolbar)
- [Create a custom toolbar](./custom-toolbar)