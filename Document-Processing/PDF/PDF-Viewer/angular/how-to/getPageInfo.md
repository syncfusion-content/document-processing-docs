---
layout: post
title: Get Page Info in Angular PDF Viewer component | Syncfusion
description: Learn about getting page information in the Syncfusion Angular PDF Viewer component of Essential JS 2.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Get page info in Angular PDF Viewer component

The PDF Viewer library allows retrieval of information for a specified page in the viewer using the `getPageInfo()` method. This provides essential<sup style="font-size:70%">&reg;</sup> information, such as the dimensions and rotation.

Follow these steps to get page information:

**Step 1:** Create a simple PDF Viewer sample by following the steps in this [guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started).

**Step 2:** The following code snippet implements the functionality for retrieving the height, width, and rotation of a specified page in the viewer:

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

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
      <button (click)="retrievePageInfo()" style="margin-bottom: 20px;">Get Page Info</button>
      <ejs-pdfviewer
        id="pdfViewer"
        [documentPath]="document"
        [resourceUrl]="resourceUrl"
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
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/27.2.2/dist/ej2-pdfviewer-lib';

  ngOnInit(): void { }

  retrievePageInfo() {
    const viewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
    // Set the page index for which info is required
    const pageIndex = 0;
    // To Retrieve and log the page information
    console.log(viewer.getPageInfo(pageIndex));

    // To Log the specific page information details to the console
    const pageInfo = viewer.getPageInfo(pageIndex);
    if (pageInfo) {
      console.log(`Page Info for Page Index ${pageIndex}:`);
      console.log(`Height: ${pageInfo.height}`);
      console.log(`Width: ${pageInfo.width}`);
      console.log(`Rotation: ${pageInfo.rotation}`);
    }
  }
}

{% endhighlight %}
{% endtabs %}

By following these steps, the get page info API can be successfully integrated and used in the EJ2 PDF Viewer.

[View Sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to)