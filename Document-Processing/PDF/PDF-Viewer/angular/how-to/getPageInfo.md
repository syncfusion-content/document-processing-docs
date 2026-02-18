---
layout: post
title: Get Page Info in Angular PDF Viewer component | Syncfusion
description: Learn here all about Get Page Info in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Get Page Info in Angular PDF Viewer component

The `getPageInfo()` method returns metadata for a specified page in the viewer, such as `height`, `width`, and `rotation`. `pageIndex` is zero-based. Call `getPageInfo()` after the viewer is ready to ensure page data is available (for example, in `ngAfterViewInit` or after the document has been loaded).

The following example retrieves and logs the page dimensions and rotation for a specified page.

**Step 1:** Follow the steps provided in the [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) to create a simple PDF Viewer sample.

**Step 2:** The following code snippet implements retrieval of height, width, and rotation for a specified page in the viewer.

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

    // To log the specific page information details to the console
    const pageInfo = viewer.getPageInfo(pageIndex);
    if (pageInfo) {
      console.log(`Page Info for page index ${pageIndex}:`);
      console.log(`Height: ${pageInfo.height}`);
      console.log(`Width: ${pageInfo.width}`);
      console.log(`Rotation: ${pageInfo.rotation}`);
    }
  }
}

{% endhighlight %}
{% endtabs %}

By following these steps, you can successfully integrate and use the get page info API in the EJ2 PDF Viewer.

[View Sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to)