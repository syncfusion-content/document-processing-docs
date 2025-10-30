---
layout: post
title: Annotation Toolbar Customization in Angular PDF Viewer control | Syncfusion
description: Learn here all about annotation toolbar customization in Syncfusion Angular PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Annotation Toolbar Customization
publishingplatform: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Annotation Toolbar Customization

The annotation toolbar can be customized by showing or hiding default items and by controlling the order in which they appear.

## Show or hide the annotation toolbar

Show or hide the annotation toolbar programmatically during initialization or at runtime.

Use the [EnableAnnotationToolbar](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/pdfViewerModel/#enableannotationtoolbar) property or the [showAnnotationToolbar](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbar/#showannotationtoolbar) method to toggle visibility.

The following code snippet explains how to show or hide the annotation toolbar using the `showAnnotationToolbar` method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { Component, OnInit, ViewChild } from '@angular/core';
import { PdfViewerComponent, LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService,
         AnnotationService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
  <div class="content-wrapper">
    <button id="change" (click)="onChangeVisibility()">Change Annotation Toolbar Visibility</button>
    <ejs-pdfviewer
      #pdfViewer
      id="pdfViewer"
      [documentPath]="document"
      [resourceUrl]="resource"
      style="height:500px;display:block">
    </ejs-pdfviewer>
  </div>` ,
  providers: [
    LinkAnnotationService, BookmarkViewService, MagnificationService,
    ThumbnailViewService, ToolbarService, NavigationService,
    TextSearchService, TextSelectionService, PrintService,
    AnnotationService, FormDesignerService, FormFieldsService
  ]
})
export class AppComponent {
  @ViewChild('pdfViewer', { static: false }) pdfViewer?: PdfViewerComponent;

  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  ngOnInit(): void {}

  onChangeVisibility(): void {
    // Hide the annotation toolbar
    if (this.pdfViewer && this.pdfViewer.toolbar) {
      this.pdfViewer.toolbar.showAnnotationToolbar(false);
    }
  }
}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
<div class="content-wrapper">
  <button id="change" (click)="onChangeVisibility()">Change Annotation Toolbar Visibility</button>
  <ejs-pdfviewer
    #pdfViewer
    id="pdfViewer"
    [documentPath]="document"
    [resourceUrl]="resource"
    style="height:500px;display:block">
  </ejs-pdfviewer>
</div>
{% endhighlight %}
{% endtabs %}

## How to customize the annotation toolbar

Choose which tools appear and control their order in the annotation toolbar.

Use [`PdfViewerToolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbarSettings/) with the [`AnnotationToolbarItems`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbarSettings/#annotationtoolbaritems) property to choose which tools are displayed in the annotation toolbar. The property accepts a list of [`AnnotationToolbarItem`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/annotationToolbarItem/) values. Only the items included in this list are shown; any item not listed is hidden. The rendered order follows the sequence of items in the list.

The annotation toolbar is presented when entering annotation mode in PDF Viewer and adapts responsively based on the available width. Include the Close tool to allow users to exit the annotation toolbar when needed.

The following example demonstrates how to customize the annotation toolbar by specifying a selected set of tools using `AnnotationToolbarItem`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService,
         AnnotationService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
  <div class="content-wrapper">
    <ejs-pdfviewer
      id="pdfViewer"
      [documentPath]="document"
      [resourceUrl]="resource"
      [toolbarSettings]="toolbarSettings"
      style="height:500px;display:block">
    </ejs-pdfviewer>
  </div>` ,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               AnnotationService, FormDesignerService, FormFieldsService]
})
export class AppComponent {
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public toolbarSettings = {
    annotationToolbarItems: [
      'HighlightTool',
      'UnderlineTool',
      'StrikethroughTool',
      'ColorEditTool',
      'OpacityEditTool',
      'AnnotationDeleteTool',
      'StampAnnotationTool',
      'HandWrittenSignatureTool',
      'InkAnnotationTool',
      'ShapeTool',
      'CalibrateTool',
      'StrokeColorEditTool',
      'ThicknessEditTool',
      'FreeTextAnnotationTool',
      'FontFamilyAnnotationTool',
      'FontSizeAnnotationTool',
      'FontStylesAnnotationTool',
      'FontAlignAnnotationTool',
      'FontColorAnnotationTool',
      'CommentPanelTool'
    ]
  };

  ngOnInit(): void {}
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}
<div class="content-wrapper">
  <ejs-pdfviewer
    id="pdfViewer"
    [documentPath]="document"
    [resourceUrl]="resource"
    [toolbarSettings]="toolbarSettings"
    style="height:500px;display:block">
  </ejs-pdfviewer>
</div>
{% endhighlight %}
{% endtabs %}
