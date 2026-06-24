---
layout: post
title: Form Designer Toolbar in Angular PDF Viewer Component | Syncfusion
description: Learn here all about form designer toolbar customization in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Customize the Form Designer Toolbar in Angular PDF Viewer

## Overview

This guide shows how to show or hide the form designer toolbar, and how to configure which tools appear and their order.

**Outcome**: a working Angular example customizing the form designer toolbar.

## Prerequisites

- EJ2 Angular PDF Viewer installed and added in project. See [getting started guide](../getting-started)
- If using standalone WASM mode, provide [`resourceUrl`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#resourceurl) or a [`serviceUrl`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#serviceurl) for server mode.

## Steps

### 1. Show or hide Form Designer toolbar at initialization

Set the [`enableFormDesigner`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#enableformdesigner) property on PDF Viewer instance to `true` or `false` to control initial visibility.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import { PdfViewerModule, ToolbarService, MagnificationService, NavigationService, AnnotationService, LinkAnnotationService,
  ThumbnailViewService, BookmarkViewService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService, MagnificationService, NavigationService, AnnotationService, LinkAnnotationService,
    ThumbnailViewService, BookmarkViewService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService
  ],
  template: `<ejs-pdfviewer id="PdfViewer"
               style="height:500px;width:100%;"
               [documentPath]="documentPath"
               [resourceUrl]="resourceUrl"
               [enableFormDesigner]="true">
  </ejs-pdfviewer>`
})
export class AppComponent {
  public documentPath: string = 'https://cdn.syncfusion.com/content/pdf/formdesigner.pdf';
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
}
{% endhighlight %}
{% endtabs %}

### 2. Show or hide form designer toolbar at runtime

Use the [`enableFormDesigner`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#enableformdesigner) API on the viewer's instance on a custom method to toggle form designer visibility at runtime.

{% highlight ts %}
this.pdfViewerObj.enableFormDesigner = true;
{% endhighlight %}

### 3. Show or hide form designer toolbar items

Use [`formDesignerToolbarItems`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbarsettings#formdesignertoolbaritems) and supply an ordered array of [`FormDesignerToolbarItem`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formdesignertoolbaritem) names.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
<ejs-pdfviewer
  [toolbarSettings]="toolbarSettings">
</ejs-pdfviewer>
{% endhighlight %}
{% endtabs %}

**Complete example:**

## Complete example with runtime toggle

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, ViewChild } from '@angular/core';
import { PdfViewerModule, ToolbarService, MagnificationService, NavigationService, AnnotationService, LinkAnnotationService,
  ThumbnailViewService, BookmarkViewService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService,
  PdfViewerComponent } from '@syncfusion/ej2-angular-pdfviewer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule, CommonModule],
  providers: [
    ToolbarService, MagnificationService, NavigationService, AnnotationService, LinkAnnotationService,
    ThumbnailViewService, BookmarkViewService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService
  ],
  template: `<div>
    <button (click)="hideFormDesignerToolbar()">{{ show ? 'Hide' : 'Show' }} Form Designer Toolbar</button>
    <ejs-pdfviewer #pdfviewer
                   id="PdfViewer"
                   style="height:500px;width:100%;"
                   [documentPath]="documentPath"
                   [resourceUrl]="resourceUrl"
                   [toolbarSettings]="toolbarSettings"
                   [enableFormDesigner]="show">
    </ejs-pdfviewer>
  </div>`
})
export class AppComponent {
  @ViewChild('pdfviewer')
  public pdfViewerObj!: PdfViewerComponent;
  
  public show: boolean = true;
  public documentPath: string = 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf';
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
  
  public toolbarSettings: any = {
    formDesignerToolbarItems: [
      'TextboxTool', 'RadioButtonTool', 'CheckBoxTool',
      'DropdownTool', 'ListboxTool', 'DrawSignatureTool', 'DeleteTool'
    ]
  };
  
  hideFormDesignerToolbar(): void {
    this.show = !this.show;
    this.pdfViewerObj.enableFormDesigner = this.show;
  }
}
{% endhighlight %}
{% endtabs %}

## Expected result

- The form designer toolbar appears (or is hidden) according to [`enableFormDesigner`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#enableformdesigner).
- Only the listed tools appear.

## Troubleshooting

- Toolbar or form designer tools do not appear.

    - **Cause**: [`FormDesigner`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#formdesigner) or [`Toolbar`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#toolbar) service not injected.
    - **Solution**: ensure [`FormDesigner`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#formdesigner) and [`Toolbar`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#toolbar) services are injected in the PDF Viewer component's providers array.

## Related topics

- [Primary toolbar customization](./primary-toolbar)
- [Annotation toolbar customization](./annotation-toolbar)
