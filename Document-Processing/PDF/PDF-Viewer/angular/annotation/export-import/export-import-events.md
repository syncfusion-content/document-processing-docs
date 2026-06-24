---
layout: post
title: Import/Export events in Angular PDF Viewer | Syncfusion
description: Learn how to handle Import/Export events for PDF Annotations in the Syncfusion Angular PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Import/Export events in Angular PDF Viewer

Import/export events let developers monitor and control annotation data as it flows into and out of the PDF Viewer. These events enable validation, progress reporting, audit logging, and conditional blocking of import/export operations.

Common use cases:
- Progress UI and user feedback
- Validation and sanitization of imported annotation data
- Audit logging and telemetry
- Blocking or altering operations based on business rules

Each event exposes typed event-args: `ImportStartEventArgs`, `ImportSuccessEventArgs`, `ImportFailureEventArgs`, `ExportStartEventArgs`, `ExportSuccessEventArgs`, and `ExportFailureEventArgs` that describe the operation context.

## Import events
- [`importStart`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#importstart): Triggers when an import operation starts.
- [`importSuccess`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#importsuccess): Triggers when annotations are successfully imported.
- [`importFailed`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#importfailed): Triggers when importing annotations fails.

## Handle import events

Example: handle import events by wiring event bindings on the Angular PDF Viewer component.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  AnnotationService,
  TextSelectionService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  imports: [PdfViewerModule],
  providers: [ToolbarService, AnnotationService, TextSelectionService],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [documentPath]="document"
      [resourceUrl]="resource"
      style="height: 650px"
      (importStart)="onImportStart($event)"
      (importSuccess)="onImportSuccess($event)"
      (importFailed)="onImportFailed($event)">
    </ejs-pdfviewer>
  `
})
export class AppComponent {
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  onImportStart(args: any): void {
    console.log('Import started', args);
  }

  onImportSuccess(args: any): void {
    console.log('Import success', args);
  }

  onImportFailed(args: any): void {
    console.error('Import failed', args);
  }
}
{% endhighlight %}
{% endtabs %}

## Export events
- [`exportStart`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#exportstart): Triggers when an export operation starts.
- [`exportSuccess`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#exportsuccess): Triggers when annotations are successfully exported.
- [`exportFailed`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#exportfailed): Triggers when exporting annotations fails.

## Handle export events

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  AnnotationService,
  TextSelectionService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  imports: [PdfViewerModule],
  providers: [ToolbarService, AnnotationService, TextSelectionService],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [documentPath]="document"
      [resourceUrl]="resource"
      style="height: 650px"
      (exportStart)="onExportStart($event)"
      (exportSuccess)="onExportSuccess($event)"
      (exportFailed)="onExportFailed($event)">
    </ejs-pdfviewer>
  `
})
export class AppComponent {
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  onExportStart(args: any): void {
    console.log('Export started', args);
  }

  onExportSuccess(args: any): void {
    console.log('Export success', args);
  }

  onExportFailed(args: any): void {
    console.error('Export failed', args);
  }
}
{% endhighlight %}
{% endtabs %}

N> `importStart`, `importSuccess`, and `importFailed` cover the lifecycle of annotation imports; `exportStart`, `exportSuccess`, and `exportFailed` cover the lifecycle of annotation exports.

## See also
- [Annotation Overview](../../overview)
- [Annotation Types](../../annotations/annotation-types/area-annotation)
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../../annotations/create-modify-annotation)
- [Customize Annotation](../../annotations/customize-annotation)
- [Remove Annotation](../../annotations/delete-annotation)
- [Handwritten Signature](../../annotations/signature-annotation)
- [Export Annotation](../export-import/export-annotation)
- [Import Annotation](../export-import/import-annotation)
- [Annotation Permission](../../annotations/annotation-permission)
- [Annotation in Mobile View](../../annotations/annotations-in-mobile-view)
- [Annotation Events](../../annotations/annotation-event)
- [Annotation API](../../annotations/annotations-api)
