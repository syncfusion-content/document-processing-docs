---
layout: post
title: Configure annotation selector settings in Angular PDF Viewer | Syncfusion
description: Learn how to configure annotation selector settings in the Angular PDF Viewer using annotationSelectorSettings and related options.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Configure Annotation Selector Settings

### Annotation Selector Settings

Use the [annotationSelectorSettings](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/annotationSelectorSettings/) property to customize the appearance and behavior of the annotation selector in the UI.

### AnnotationSelectorSettingsModel

The [AnnotationSelectorSettingsModel](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/annotationSelectorSettingsModel/) defines settings such as border colors, sizes, and shapes, enabling fine-grained control over how annotations are displayed and interacted with.

Steps to configure annotation selector settings

- Step 1: Create a PDF Viewer instance and initialize it.
- Step 2: Set the annotationSelectorSettings property to customize selector behavior.

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
  PrintService,
  AnnotationResizerLocation,
  CursorType
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
  <ejs-pdfviewer id="pdfViewer"
             [documentPath]='document'
                 [resourceUrl]='resource'
                 [annotationSelectorSettings]="annotationSelection"
             style="height:640px;display:block">
  </ejs-pdfviewer>
</div>`,
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
    PrintService]
})
export class AppComponent implements OnInit {
  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/27.1.48/dist/ej2-pdfviewer-lib';
  public annotationSelection = {
    selectionBorderColor: 'blue',
    resizerBorderColor: 'red',
    resizerFillColor: '#4070ff',
    resizerSize: 8,
    selectionBorderThickness: 1,
    resizerShape: 'Circle',
    selectorLineDashArray: [5, 6],
    resizerLocation: AnnotationResizerLocation.Corners | AnnotationResizerLocation.Edges,
    resizerCursorType: CursorType.grab
  };
  ngOnInit(): void {
  }
}
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

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
  PrintService,
  AnnotationResizerLocation,
  CursorType
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
  <ejs-pdfviewer id="pdfViewer"
             [documentPath]='document'
                 [serviceUrl]='service'
                 [annotationSelectorSettings]="annotationSelection"
             style="height:640px;display:block">
  </ejs-pdfviewer>
</div>`,
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
    PrintService]
})
export class AppComponent implements OnInit {
  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/27.1.48/dist/ej2-pdfviewer-lib';
  public annotationSelection = {
    selectionBorderColor: 'blue',
    resizerBorderColor: 'red',
    resizerFillColor: '#4070ff',
    resizerSize: 8,
    selectionBorderThickness: 1,
    resizerShape: 'Circle',
    selectorLineDashArray: [5, 6],
    resizerLocation: AnnotationResizerLocation.Corners | AnnotationResizerLocation.Edges,
    resizerCursorType: CursorType.grab
  };
  ngOnInit(): void {
  }
}
{% endhighlight %}
{% endtabs %}

#### Key properties

- selectionBorderColor: Sets the color for the border around selected annotations.
- resizerBorderColor: Sets the color for the border of the resizer handles.
- resizerFillColor: Defines the fill color for the resizer handles.
- resizerSize: Determines the size of the resizer handles.
- selectionBorderThickness: Specifies the thickness of the selection border.
- resizerShape: Sets the shape of the resizer handles (for example, Circle or Square).
- selectorLineDashArray: Specifies the dash pattern for the selector line.
- resizerLocation: Determines where the resizers appear relative to the annotation (for example, Corners or Edges).
- resizerCursorType: Sets the cursor style when hovering over a resizer.

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to)