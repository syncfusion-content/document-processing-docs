---
layout: post
title: Customize the Annotation Toolbar in Angular PDF Viewer | Syncfusion
description: Learn here all about how to Show or hide and customize the annotation toolbar in the Angular PDF Viewer with runnable examples.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Customize the Annotation Toolbar in Angular PDF Viewer

## Overview

This guide shows how to show or hide the annotation toolbar and how to choose which tools appear and their order.

**Outcome:** A working Angular example that toggles the annotation toolbar and uses [`annotationToolbarItems`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbarsettings#annotationtoolbaritems) to customize the toolbar.

## Prerequisites

- EJ2 Angular PDF Viewer installed and added in your project. See [getting started guide](../getting-started)
- A valid [`resourceUrl`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#resourceurl) or [`serviceUrl`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#serviceurl) for viewer assets when running locally

## Steps

### 1. Show or hide the annotation toolbar

Use the [`showAnnotationToolbar`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbar#showannotationtoolbar) method on the viewer toolbar to control visibility.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, ViewChild } from '@angular/core';
import {
  PdfViewerComponent, PdfViewerModule, LinkAnnotationService,
  BookmarkViewService, MagnificationService,ThumbnailViewService,
  ToolbarService, NavigationService, TextSearchService, 
  TextSelectionService, PrintService, FormDesignerService,
  FormFieldsService, AnnotationService,
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <div class="content-wrapper">
      <button (click)="hideToolbar()" style="margin-bottom: 10px;">
        {{ show ? 'Hide' : 'Show' }} Annotation Toolbar
      </button>
      <ejs-pdfviewer
        #pdfViewer
        id="pdfViewer"
        [documentPath]="document"
        [resourceUrl]="resource"
        style="height:calc(100vh - 50px); display:block"
      >
      </ejs-pdfviewer>
    </div>
  `,
  providers: [
    LinkAnnotationService, BookmarkViewService, MagnificationService,
    ThumbnailViewService, ToolbarService, NavigationService,
    TextSearchService, TextSelectionService, PrintService,
    AnnotationService, FormDesignerService, FormFieldsService,
  ],
})
export class AppComponent {
  @ViewChild('pdfViewer')
  public pdfViewer?: PdfViewerComponent;

  public document: string = 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib';
  public show: boolean = true;

  hideToolbar(): void {
    if (this.pdfViewer && this.pdfViewer.toolbar) {
      this.pdfViewer.toolbar.showAnnotationToolbar(this.show);
      this.show = !this.show;
    }
  }
}
{% endhighlight %}
{% endtabs %}

### 2. Show or hide annotation toolbar items

Use [`annotationToolbarItems`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbarsettings#annotationtoolbaritems) with a list of [`AnnotationToolbarItem`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/annotationtoolbaritem) values. The toolbar shows only items in this list.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerComponent, PdfViewerModule, LinkAnnotationService,
  BookmarkViewService, MagnificationService, ThumbnailViewService,
  ToolbarService, NavigationService, TextSearchService,
  TextSelectionService, PrintService, FormDesignerService,
  FormFieldsService, AnnotationService,
  AnnotationToolbarItem,
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <div class="content-wrapper">
      <ejs-pdfviewer
        id="pdfViewer"
        [documentPath]="document"
        [resourceUrl]="resource"
        [toolbarSettings]="toolbarSettings"
        style="height:calc(100vh); display:block"
      >
      </ejs-pdfviewer>
    </div>
  `,
  providers: [
    LinkAnnotationService, BookmarkViewService, MagnificationService,
    ThumbnailViewService, ToolbarService, NavigationService,
    TextSearchService, TextSelectionService, PrintService,
    AnnotationService, FormDesignerService,
    FormFieldsService,
  ],
})
export class AppComponent {
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib';

  public annotationToolbarItems: AnnotationToolbarItem[] = [
    'HighlightTool',
    'UnderlineTool',
    'StrikethroughTool',
    'ColorEditTool',
    'OpacityEditTool',
    'AnnotationDeleteTool',
    'CommentPanelTool',
  ];

  public toolbarSettings = {
    annotationToolbarItems: this.annotationToolbarItems,
  };
}
{% endhighlight %}
{% endtabs %}

**Complete example**

The following is a complete, runnable example. It wires a toggle button and a viewer with a custom annotation toolbar list.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, ViewChild } from '@angular/core';
import {
  PdfViewerComponent, PdfViewerModule, LinkAnnotationService,
  BookmarkViewService, MagnificationService, ThumbnailViewService,
  ToolbarService, NavigationService, TextSearchService,
  TextSelectionService, PrintService, FormDesignerService,
  FormFieldsService, AnnotationService, 
  AnnotationToolbarItem,
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <div class="content-wrapper">
      <button (click)="hideToolbar()" style="margin-bottom: 10px;">
        {{ show ? 'Hide' : 'Show' }} Annotation Toolbar
      </button>
      <ejs-pdfviewer
        #pdfViewer
        id="pdfViewer"
        [documentPath]="document"
        [resourceUrl]="resource"
        [toolbarSettings]="toolbarSettings"
        style="height:calc(100vh - 50px); display:block"
      >
      </ejs-pdfviewer>
    </div>
  `,
  providers: [
    LinkAnnotationService, BookmarkViewService, MagnificationService,
    ThumbnailViewService, ToolbarService, NavigationService,
    TextSearchService, TextSelectionService, PrintService,
    AnnotationService, FormDesignerService,
    FormFieldsService,
  ],
})
export class AppComponent {
  @ViewChild('pdfViewer')
  public pdfViewer?: PdfViewerComponent;

  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib';
  public show: boolean = true;

  public annotationToolbarItems: AnnotationToolbarItem[] = [
    'HighlightTool',
    'UnderlineTool',
    'StrikethroughTool',
    'ColorEditTool',
    'OpacityEditTool',
    'AnnotationDeleteTool',
    'CommentPanelTool',
  ];

  public toolbarSettings = {
    annotationToolbarItems: this.annotationToolbarItems,
  };

  hideToolbar(): void {
    if (this.pdfViewer && this.pdfViewer.toolbar) {
      this.pdfViewer.toolbar.showAnnotationToolbar(this.show);
      this.show = !this.show;
    }
  }
}
{% endhighlight %}
{% endtabs %}

## Troubleshooting

- Annotation toolbar tools do not appear.
    - **Cause**: The items are not valid [`AnnotationToolbarItem`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/annotationtoolbaritem) strings or the viewer is not injected with [`AnnotationService`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/annotation) / [`ToolbarService`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbar) modules.
    - **Solution**: Confirm services in providers includes [`ToolbarService`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbar) and [`AnnotationService`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/annotation) and use valid item names.

## Related topics

- [Customize form designer toolbar](./form-designer-toolbar)
- [Customize primary toolbar](./primary-toolbar)
