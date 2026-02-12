---
layout: post
title: Managing Local Storage in Angular PDF Viewer component | Syncfusion
description: Learn how to manage local storage in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Managing Local Storage in Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer

The Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer exposes the `enableLocalStorage` property to control how session-specific viewer data is stored. Configure this property to choose between the viewer's internal storage mechanism (in-memory collection) and the browser's session storage.

### Using the `enableLocalStorage` property

Set `enableLocalStorage` to control whether the viewer preserves session data in an internal (in-memory) collection or uses browser session storage. When `enableLocalStorage` is `true`, the viewer keeps session data in memory for the current application session; when `false` (the default), session storage is used. Review memory implications before enabling in-memory storage for large documents or heavy interactive content.

{% tabs %}
{% highlight html tabtitle="Server-Backed" %}

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
      <ejs-pdfviewer
        id="pdfViewer"
        [serviceUrl]="service"
        [documentPath]="document"
        [enableLocalStorage]="true"
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
  public document: string = 'PDF_Succinctly.pdf';
  public service: string = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';

  ngOnInit(): void { }

}

{% endhighlight %}
{% endtabs %}

### Impact and considerations

- **Increased memory usage**: Enabling in-memory storage can increase memory consumption, especially for large documents or when many interactive elements (form fields, annotations) are present.
- **Dispose when unused**: Dispose or destroy the PDF Viewer instance when it is no longer required to avoid memory leaks, particularly when `enableLocalStorage` is `true`.
- **Default behavior**: The default value is `false`, which uses the browser session storage unless explicitly changed.

### Enhanced control

Using `enableLocalStorage` gives control over where session-specific state is kept, allowing optimization for performance or persistence needs. Consider the application's memory profile and document characteristics when selecting the storage mode.

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to)