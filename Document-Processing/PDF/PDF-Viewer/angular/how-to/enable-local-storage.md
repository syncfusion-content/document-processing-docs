---
layout: post
title: Manage Local Storage in Angular PDF Viewer component | Syncfusion
description: Learn how to manage local storage in the Syncfusion Angular PDF Viewer component of Essential JS 2.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Manage local storage in Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer

The Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer provides the `enableLocalStorage` property, which allows control over how session-specific data is stored. This data can be stored in an internal collection or use the default session storage.

### Using the enableLocalStorage Property

Set the `enableLocalStorage` property to manage whether the PDF Viewer uses session storage (default) or an internal collection. When set to `true`, session-specific data is kept in memory; otherwise, session storage is used.

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

- **Increased memory usage**: Setting `enableLocalStorage` to `true` can increase memory usage, particularly with larger documents or those containing many interactive elements, such as form fields and annotations.
- **Avoiding memory leaks**: Properly disposing of the PDF Viewer instance when it is no longer needed is crucial to prevent memory leaks, especially when using in-memory storage.
- **Default behavior**: By default, this property is set to `false`, meaning the session storage mechanism is utilized unless explicitly changed.

### Enhanced control

Leveraging the `enableLocalStorage` property provides greater flexibility in managing how data is stored during a session, allowing optimization of performance and storage based on the application’s specific requirements.

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to)