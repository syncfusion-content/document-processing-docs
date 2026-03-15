---
layout: post
title: Find Text Async Angular PDF Viewer component | Syncfusion
description: Learn about the `findTextAsync` in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Find Text Async
documentation: ug
domainurl: ##DomainURL##
---

# Find Text using findTextAsync Method in Syncfusion PdfViewer

The findTextAsync method in the Syncfusion PDF Viewer control allows you to search for specific text or an array of strings asynchronously within a PDF document. The method returns the bounding rectangles for each occurrence of the search term, allowing you to find and work with text positions in the document.

Here is an example of how you can use the **findTextAsync** method:

```typescript
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
    <button #btn1 (click)="findText()">findText</button>
    <button #btn2 (click)="findTexts()">findTexts</button>
      <ejs-pdfviewer
        id="pdfViewer"
        [resourceUrl]="resourceUrl"
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
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/29.1.33/dist/ej2-pdfviewer-lib';

  ngOnInit(): void { }

  findText(): void {
    const viewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
    //Search for a single string ('pdf') with a case-insensitive search across all pages
    viewer.textSearchModule.findTextAsync('pdf', false).then((res: any) =>{
        console.log(res);
    });
}
findTexts(): void {
  const viewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
   //Search for multiple strings (['pdf', 'the']) with a case-insensitive search across all pages
    viewer.textSearchModule.findTextAsync(['pdf', 'the'], false).then((res: any) =>{
        console.log(res);
    });
}
}

```

### Description:

The `findTextAsync` method performs an asynchronous text search within a PDF document. It returns a Promise that resolves with an array of result objects describing each match. Each match object contains information such as the page index and the bounding rectangles for the matched text, which can be used to highlight or navigate to occurrences. By default, the search runs across all pages; supply the optional `pageIndex` parameter to limit the search to a specific page.

### Parameters:

**text (string | string[]):**

The text or an array of texts you want to search for in the document.

**matchCase (boolean):**

Indicates whether the search should be case-sensitive.
When set to true, the search will match the exact case.
When set to false, the search will ignore case differences.

**pageIndex (optional, number):**

Specifies the page number (zero-based index) to search within the document.
If not provided, the search will be performed across all pages in the document. For example, passing `0` searches only the first page of the document.
If the search finds no matches, the returned array will be empty; the Promise still resolves (it does not reject) in this case.

### Example Workflow:

**findTextAsync('pdf', false):**
This will search for the term "pdf" in a case-insensitive manner across all pages of the document.

**findTextAsync(['pdf', 'the'], false):**
This will search for the terms "pdf" and "the" in a case-insensitive manner across all pages of the document.

**findTextAsync('pdf', false, 0):**
This will search for the term "pdf" in a case-insensitive manner only on the first page (page 0).

**findTextAsync(['pdf', 'the'], false, 1):**
This will search for the terms "pdf" and "the" in a case-insensitive manner only on the second page (page 1).

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to)