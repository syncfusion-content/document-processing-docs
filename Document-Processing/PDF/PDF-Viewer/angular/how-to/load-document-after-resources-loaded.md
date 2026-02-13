---
layout: post
title: Load document after resources Loaded Angular PDF Viewer | Syncfusion
description: Learn here all about how to Load document after loading assets in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer 
documentation: ug
domainurl: ##DomainURL##
---

# Load a PDF only after PDFium resources are ready in Angular

When using the Standalone PDF Viewer, the component downloads the PDFium runtime assets (scripts/wasm) from the path specified in `resourceUrl`. Attempting to load a document before those assets are available can cause errors. Use the `resourcesLoaded` event to defer document loading until all required assets are ready.

## When does resourcesLoaded trigger?

The `resourcesLoaded` event fires once the viewer finishes loading all required PDFium assets. At this point, it is safe to call the [`load`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#load) method to open a document (by URL or Base64).

## How to load a document after resourcesLoaded

- Set the `resourceUrl` to a valid PDF Viewer assets path (CDN or a hosted path).
- Listen to `(resourcesLoaded)` and call `load` inside the handler.

```html
<!-- app.html -->
<ejs-pdfviewer
  #pdfViewer
  id="pdfViewer"
  [resourceUrl]="resourceUrl"
  (resourcesLoaded)="resourcesLoaded()"
  style="height: 640px; display: block"
>
</ejs-pdfviewer>
```

```ts
// app.ts
import { Component, ViewChild } from '@angular/core';
import { PdfViewerComponent, ToolbarService, MagnificationService, NavigationService, LinkAnnotationService, ThumbnailViewService, BookmarkViewService, TextSelectionService, AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ],
  styleUrls: ['app.css'],
  standalone: true,
  imports: [PdfViewerModule],
})
export class AppComponent {
  @ViewChild('pdfViewer') 
  public pdfViewer!: PdfViewerComponent;

  // Point to the PDF Viewer assets (scripts/wasm) location
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  // Sample sources to demonstrate both URL and Base64 loading
  public documentUrl = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public base64: string = '';// supply your Base64 here when needed

  // Called by the (resourcesLoaded) event
  public resourcesLoaded(): void {
    // Choose ONE of the following load options:

    // 1) Load by URL
    this.pdfViewer.load(this.documentUrl, "");

    // 2) Load by Base64 (uncomment if you want to load Base64)
    // if (this.base64) {
    //   this.pdfViewer.load(`data:application/pdf;base64,${this.base64}`, "");
    // }
  }
}
```

[View Sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to)

## Notes and best practices

- Always set a valid `resourceUrl` when using the Standalone PDF Viewer. If the path is incorrect or blocked by the network, the event cannot fire.
- Load documents inside `resourcesLoaded`. This guarantees the PDFium runtime is ready and prevents intermittent errors on slower networks.
- The event fires for the viewer’s asset load life cycle, not for every document load. After it fires once, you can safely call `load` again later (for example, in response to user actions) without waiting for the event.

## See also

- [Events in Angular PDF Viewer](../events#resourcesloaded)
- [Open PDF files](../open-pdf-files)
- [Save PDF files](../save-pdf-files)
- [Getting started](../getting-started)
