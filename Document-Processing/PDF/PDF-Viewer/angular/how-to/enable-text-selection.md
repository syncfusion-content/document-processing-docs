---
layout: post
title: Enable or disable text selection in Angular PDF Viewer | Syncfusion
description: Learn how to enable or disable text selection in the Angular PDF Viewer using the enableTextSelection property.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Enable or disable text selection in Angular PDF Viewer

This guide explains how to enable or disable text selection in the Syncfusion Angular PDF Viewer using both initialization-time settings and runtime toggling.

**Outcome:** By the end of this guide, you will be able to control whether users can select text in the PDF Viewer.

## Steps to toggle text selection

### 1. Disable text selection at initialization

Follow one of these steps to disable text selection when the viewer first loads:

**Remove the text selection module**

Remove the [`TextSelectionService`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/textselection) from the providers array to disable text selection during initialization.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, ViewChild } from '@angular/core';
import {
  PdfViewerComponent,
  PdfViewerModule,
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  AnnotationService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService,
  PrintService,
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <ejs-pdfviewer
      #pdfViewer
      id="pdfViewer"
      [resourceUrl]="resourceUrl"
      [documentPath]="document"
      style="height: 640px; display: block;"
    >
    </ejs-pdfviewer>
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
    FormFieldsService,
    FormDesignerService,
    PrintService
  ]
})
export class AppComponent {
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib';

  @ViewChild('pdfViewer')
  public pdfViewerObj!: PdfViewerComponent;
}
{% endhighlight %}
{% endtabs %}

**Set `enableTextSelection` to false**

Use the [`enableTextSelection`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#enabletextselection) property during initialization to disable or enable text selection. The following example disables the text selection during initialization.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, ViewChild } from '@angular/core';
import {
  PdfViewerComponent,
  PdfViewerModule,
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
  PrintService,
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <ejs-pdfviewer
      #pdfViewer
      id="pdfViewer"
      [resourceUrl]="resourceUrl"
      [documentPath]="document"
      [enableTextSelection]="false"
      style="height: 640px; display: block;"
    >
    </ejs-pdfviewer>
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
export class AppComponent {
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib';

  @ViewChild('pdfViewer')
  public pdfViewerObj!: PdfViewerComponent;
}
{% endhighlight %}
{% endtabs %}

### 2. Toggle text selection at runtime

The [`enableTextSelection`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#enabletextselection) property can also be used to toggle the text selection at runtime.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, ViewChild } from '@angular/core';
import {
  PdfViewerComponent,
  PdfViewerModule,
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
  PrintService,
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <div class="content-wrapper">
      <div class="button-container" style="margin-bottom: 10px;">
        <button (click)="enableTextSelection()" style="margin-right: 10px;">
          Enable Text Selection
        </button>
        <button (click)="disableTextSelection()">
          Disable Text Selection
        </button>
      </div>
      <ejs-pdfviewer
        #pdfViewer
        id="pdfViewer"
        [resourceUrl]="resourceUrl"
        [documentPath]="document"
        style="height: calc(100vh - 50px); width: 100%; display: block;"
      >
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
export class AppComponent {
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib';

  @ViewChild('pdfViewer')
  public pdfViewerObj!: PdfViewerComponent;

  enableTextSelection(): void {
    if (this.pdfViewerObj) {
      this.pdfViewerObj.enableTextSelection = true;
    }
  }

  disableTextSelection(): void {
    if (this.pdfViewerObj) {
      this.pdfViewerObj.enableTextSelection = false;
    }
  }
}
{% endhighlight %}
{% endtabs %}

N> When text selection is disabled, the viewer automatically switches to pan mode.

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to)

## Use cases and considerations

- Document protection: Disable text selection to help prevent copying sensitive content.
- Read-only documents: Provide a cleaner viewing experience by preventing selection.
- Interactive apps: Toggle selection based on user roles or document states.

N> Text selection is enabled by default. Set `enableTextSelection` to `false` to disable it.

## Troubleshooting

If text selection remains active, ensure that the [`TextSelectionService`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/textselection) is removed from the providers array or [`enableTextSelection`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#enabletextselection) is set to `false`.

## See also

- [Text Selection API reference](../text-selection/reference)
- [Angular PDF Viewer events](../events)