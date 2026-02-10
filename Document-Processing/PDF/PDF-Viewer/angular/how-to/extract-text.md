---
layout: post
title: Extract Text in Vue PDF Viewer component | Syncfusion
description: Learn about the Extract Text in Syncfusion Vue PDF Viewer component of Syncfusion Essential JS 2 and more.
control: Extract Text
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

## Extract text method in the PDF Viewer

The `extractText` method retrieves text content and, optionally, positional data for elements on one or more pages. It returns a Promise that resolves to an object containing extracted `textData` (detailed items with bounds) and `pageText` (concatenated plain text).

Parameters overview:

- `startIndex` — Starting page index (0-based).
- `endIndex` or options — Either the ending page index for a range extraction, or an options object specifying extraction criteria for a single page.
- `options` (optional) — Extraction options such as `TextOnly` or `TextAndBounds` to control whether bounds are included.

Returned object shape (example):

- `textData` — Array of objects describing extracted text items, including bounds and page-level text.
- `pageText` — Concatenated plain text for the specified page(s).

Usage notes:

- The sample code in the repository demonstrates both single-page and range extraction; inspect returned objects to handle text and bounds as required.

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
    <button #btn1 (click)="extrctText()">extrctText</button>
    <button #btn2 (click)="extrctsText()">extrctsText</button>
      <ejs-pdfviewer 
        id="pdfViewer"
        [resourceUrl]="resourceUrl"
        [documentPath]="document"
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

  ngOnInit(): void { }
  // Function to extract text from a specific page (page 1)
 extrctText(): void {   
  const viewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
  viewer.extractText(1, 'TextOnly').then((val: any) => {
     console.log('Extracted Text from Page 1:');
      console.log(val);
  });
}

// Function to extract text from a range of pages (pages 0 to 2)
extrctsText(): void {    
  const viewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
  viewer.extractText(0, 2, 'TextOnly').then((val: any) => {
     console.log('Extracted Text from Pages 0 to 2:');
     console.log(val);
  });
}

}
```

#### Explanation:
**Single Page Extraction:** The first `extractText` call extracts text from page 1 (`startIndex = 1`), using the 'TextOnly' option for plain text extraction.

**Multiple Pages Extraction:** The second extractText call extracts text from pages 0 through 2 (`startIndex = 0, endIndex = 2`), using the `TextOnly` option for plain text extraction.

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to)