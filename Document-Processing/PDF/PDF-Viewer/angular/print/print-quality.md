---
layout: post
title: Customize Print Quality in Angular PDF Viewer | Syncfusion
description: Learn how to customize print quality for PDF Documents in the Syncfusion Angular PDF Viewer component.
platform: document-processing
control: Print
documentation: ug
domainurl: ##DomainURL##
---

# Customize Print Quality in Angular PDF Viewer

This article shows a concise, task-oriented workflow to set and verify print quality for documents rendered by the Angular PDF Viewer by using the [`printScaleFactor`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#printscalefactor) property.

**Goal:** Set a suitable [`printScaleFactor`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#printscalefactor) to improve printed output sharpness while balancing performance and memory use.

## Steps

### 1. Choose a target print quality.

- Valid [`printScaleFactor`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#printscalefactor) values: **0.5 – 5**. Higher values increase image sharpness and resource use.
- Default value: **1**.

### 2. Set `printScaleFactor` during initialization

It is recommended that you set the [`printScaleFactor`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#printscalefactor) in the viewer options during initialization.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, ViewChild, OnInit } from '@angular/core';
import {
  PdfViewerComponent,
  PdfViewerModule,
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  AnnotationService,
  FormFieldsService,
  FormDesignerService,
  PageOrganizerService,
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    AnnotationService,
    FormFieldsService,
    FormDesignerService,
    PageOrganizerService,
  ],
  template: `
      <ejs-pdfviewer
        #pdfviewer
        id="PdfViewer"
        [documentPath]="document"
        [resourceUrl]="resource"
        [printScaleFactor]="0.5"
        style="height: 100vh; width: 100%; display: block"
      >
      </ejs-pdfviewer>
    `,
})
export class AppComponent implements OnInit {
  @ViewChild('pdfviewer')
  public pdfviewerControl!: PdfViewerComponent;

  public document: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public resource: string =
    'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib';

  ngOnInit(): void {
    // Initialization logic (if needed)
  }
}
{% endhighlight %}
{% endtabs %}

### 3. Set `printScaleFactor` after instantiation

As an alternative option, the [`printScaleFactor`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#printscalefactor) can be dynamically changed during runtime

{% highlight ts %}
// Update printScaleFactor at runtime
pdfviewer.printScaleFactor = 2; // increase print resolution for upcoming prints
{% endhighlight %}

### 4. Verify output

Use browser Print Preview or produce a printed/PDF copy to confirm sharpness and acceptable render time.

## Notes

- Values outside the supported range **0.5 – 5** will be ignored and fall back to the default (`1`).
- Increasing [`printScaleFactor`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#printscalefactor) raises CPU, memory, and rendering time requirements. Test on target machines and documents before setting a higher factor.

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to/Customization%20of%20print%20Quality)

## See Also

- [Overview](./overview)
- [Enable print rotation](./enable-print-rotation)
- [Print modes](./print-modes)
- [Print events](./events)