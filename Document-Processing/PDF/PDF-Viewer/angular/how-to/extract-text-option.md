---
layout: post
title: Extract text Option in Angular PDF Viewer component | Syncfusion
description: Learn here all about Extract text Option in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Extract text Option
documentation: ug
domainurl: ##DomainURL##
---

## Extract text option in the Angular PDF Viewer

The `extractTextOption` property controls the amount of text and layout information returned by the viewer. Adjusting this value helps balance memory usage and the level of detail required for downstream processing. The viewer exposes four options:

- **None** — Do not extract or return any text or layout data. Use this option to minimize memory usage when textual information is not required.
- **TextOnly** — Return plain text only; layout and bounds are omitted. Note: using `TextOnly` may disable some viewer text features such as synchronous `findText`; use `findTextAsync` when asynchronous search is required.
- **BoundsOnly** — Return layout and positional data (bounds) without the plain text content.
- **TextAndBounds** — Return both plain text and its positional information (bounds). This is the default and is useful when both content and layout are required.

The following example demonstrates how to configure the `extractTextOption` property to control the level of text extraction:

```ts

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
        [resourceUrl]="resourceUrl"
        [documentPath]="document"
        [extractTextOption]="extractTextOption"
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
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/29.1.33/dist/ej2-pdfviewer-lib';
  public extractTextOption = 'None'; // Options: 'None', 'TextOnly', 'BoundsOnly', 'TextAndBounds'
  ngOnInit(): void { }

}

```

### Description of Each Option
**extractTextOption.TextAndBounds (default):** This option returns both plain text and its positional data (bounds). Use this option when you need to access both the content of the PDF and its layout for further processing or analysis.

**extractTextOption.TextOnly:** This option returns only the plain text from the PDF. No positional or layout data is included. Note that when using this option, text search functionality will be disabled. In such cases, it is recommended to use findTextAsync for text searching.

**extractTextOption.BoundsOnly:** This option returns only the layout information (bounds) of the text, excluding the actual content. It is useful when the focus is on the position of text elements rather than the text itself.

**extractTextOption.None:** This option does not extract or return any text or layout information. It is used to optimize memory usage when no text extraction is necessary. This setting is only relevant for the `extractTextCompleted` event and cannot be used with the `ExtractText` method.

N> Text Search: When using the `extractTextOption.TextOnly` and `extractTextOption.None` option, the findText method will not work. Instead, you should use the findTextAsync method to perform text searches asynchronously.

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to)