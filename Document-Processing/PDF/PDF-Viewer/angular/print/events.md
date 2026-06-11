---
layout: post
title: Print Events in Angular PDF Viewer | Syncfusion
description: Learn how to configure print events and track usage and implements workflows in the Syncfusion Angular PDF Viewer component.
platform: document-processing
control: Print
documentation: ug
domainurl: ##DomainURL##
---

# Print events in Angular PDF Viewer

This page lists each event emitted by the Angular PDF Viewer's [`Print`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/print) feature, the argument schema, and the minimal behavior notes needed for implementation.

## Events

| Name         | Description |
|--------------|-------------|
| [`printStart`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#printstart) | Raised when a print action begins. Use the event to log activity or cancel printing. |
| [`printEnd`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#printend)   | Raised after a print action completes. Use the event to notify users or clean up resources. |

### `printStart`

This event is emitted when printing is initiated by toolbar or through programmatic API. Use to validate prerequisites, record analytics, or cancel printing.

**Arguments** - ([`PrintStartEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/printstarteventargs)):

- `fileName` - The document file name being printed.
- `cancel` - Default: `false`. Set to `true` to cancel the print operation.

Setting `args.cancel = true` prevents the client-side print flow; for server-backed printing it prevents the service request that produces print output. Find the code example [here](../security/restricting-download-and-print#3-block-print-with-the-printstart-event)

**Minimal usage example:**

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
  PrintStartEventArgs,
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
        (printStart)="printStart($event)"
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

  printStart(args: PrintStartEventArgs): void {
    console.log('Print action has started for file: ' + args.fileName);
  }
}
{% endhighlight %}
{% endtabs %}

### `printEnd`

This event is emitted after the printing completes. Use to finalize analytics, clear temporary state, or notify users.

Arguments - ([`PrintEndEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/printendeventargs)):

- `fileName` - The printed document name.

**Minimal usage example:**

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
  PrintEndEventArgs,
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
        (printEnd)="printEnd($event)"
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

  printEnd(args: PrintEndEventArgs): void {
    console.log('Printed file name: ' + args.fileName);
  }
}
{% endhighlight %}
{% endtabs %}

## See also

- [Overview](./overview)
- [Print quality](./print-quality)
- [Enable print rotation](./enable-print-rotation)
- [Print modes](./print-modes)