---
layout: post
title: Add Rectangle Annotation via Text Search | Syncfusion
description: Learn to add rectangle annotations using text search bounds in the Angular PDF Viewer component, including initialization and search controls.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Add Rectangle Annotations via Text Search in Angular PDF Viewer

A concise guide that demonstrates how to add rectangle annotations at highlighted text search results in the Angular PDF Viewer. The guide explains where to wire the callback, required services, and quick troubleshooting steps.

## Steps to add rectangle annotations on search result highlight

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) to create a simple PDF Viewer sample in Angular.

**Step 2:** Set up the PDF Viewer component to add rectangle annotations based on the bounds of highlighted search text in the PDF Viewer.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, OnInit} from '@angular/core';
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
      <div style="margin-top: 20px;">
       <!-- Search control buttons -->
        <button (click)="handleSearch()">Search PDF</button>
        <button (click)="handleSearchNext()">Search Next</button>
        <button (click)="handleCancelSearch()">Cancel Search</button>
      </div>
      <ejs-pdfviewer #pdfViewer
            id="pdfViewer"
            [documentPath]='document'
            [resourceUrl]='resource'
            style="height:640px;display:block"
            (textSearchHighlight)="handleTextSearchHighlight($event)">
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
  public resource: string = 'https://cdn.syncfusion.com/ej2/28.1.33/dist/ej2-pdfviewer-lib';
  pdfViewerComponent: any;

  ngOnInit(): void {
  }

  //handles the search operation for the term 'PDF'
  handleSearch() {
    var pdfviewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
    pdfviewer.textSearchModule.searchText('PDF', false);
  }

  //proceeds to the next search result
  handleSearchNext() {
    var pdfviewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
    pdfviewer.textSearchModule.searchNext();
}

  //cancels the current search operation
  handleCancelSearch() {
    var pdfviewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
    pdfviewer.textSearchModule.cancelTextSearch();
  }

  //Callback to add a rectangle annotation when search text is highlighted
  handleTextSearchHighlight(args: any) {
    var pdfviewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
    console.log(args);
    const bounds = args.bounds;
    pdfviewer.annotationModule.addAnnotation('Rectangle', {
      pageNumber: args.pageNumber,
      offset: { x: bounds.left, y: bounds.top },
      width: bounds.width,
      height: bounds.height,
    });
  }
}

{% endhighlight %}
{% endtabs %}

Following this guide enables the PDF Viewer to add rectangle annotations at text search result locations, improving visibility for users navigating search matches.

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to)