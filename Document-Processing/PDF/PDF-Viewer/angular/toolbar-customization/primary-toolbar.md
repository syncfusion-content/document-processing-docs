---
layout: post
title: Primary Toolbar in Angular PDF Viewer Component | Syncfusion
description: Learn here all about primary toolbar customization in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Customize Primary Toolbar in Angular PDF Viewer

## Overview

This guide explains how to show or hide the primary toolbar, remove default items, and add custom toolbar items.

**Outcome**: Working Angular example customizing the primary toolbar.

## Prerequisites

- EJ2 Angular PDF Viewer installed and added in project. See [getting started guide](../getting-started)

## Steps

### 1. Show or hide primary toolbar at initialization

Set [`enableToolbar`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#enabletoolbar) to `false` to hide the built-in toolbar.

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
    [enableToolbar]="false">
  </ejs-pdfviewer>`
})
export class AppComponent {
  public documentPath: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
}
{% endhighlight %}
{% endtabs %}

### 2. Show or hide primary toolbar at runtime

Use the viewer's [`showToolbar()`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbar#showtoolbar) method to show or hide dynamically.

```ts
// with a ViewChild reference named pdfViewerObj
this.pdfViewerObj.toolbar.showToolbar(false);
```

### 3. Show or hide primary toolbar items

Provide the [`toolbarItems`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbarsettings#toolbaritems) array with the exact set and order of items you want to show. Any item omitted is hidden.

{% highlight ts %}
<ejs-pdfviewer
  [toolbarSettings]="{ toolbarItems: ['OpenOption', 'DownloadOption', 'PrintOption', 'MagnificationTool'] }">
</ejs-pdfviewer>
{% endhighlight %}

### 4. Add a custom primary toolbar item

Add a custom item by including an object in [`toolbarItems`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbarsettings#toolbaritems) and handling its action via [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#toolbarclick). The following example shows adding a simple custom button at initialization.

{% highlight ts %}
const customItems = [
  'OpenOption',
  {
    id: 'custom_btn',
    text: 'Fit to Width',
    align: 'Center'
  },
  'DownloadOption'
];
<ejs-pdfviewer [toolbarSettings]="{ toolbarItems: customItems }" (toolbarClick)="onToolbarClick($event)"></ejs-pdfviewer>
{% endhighlight %}

**Complete example:**

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, ViewChild } from '@angular/core';
import { PdfViewerModule, ToolbarService, MagnificationService, NavigationService, AnnotationService, LinkAnnotationService,
  ThumbnailViewService, BookmarkViewService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService,
  PageOrganizerService, PdfViewerComponent } from '@syncfusion/ej2-angular-pdfviewer';
import { CommonModule } from '@angular/common';
import { ToolbarClickEventArgs } from '@syncfusion/ej2-navigations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule, CommonModule],
  providers: [
    ToolbarService, MagnificationService, NavigationService, AnnotationService, LinkAnnotationService,
    ThumbnailViewService, BookmarkViewService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService,
    PageOrganizerService
  ],
  template: `<div>
    <button (click)="hideToolbar()">{{ showTool ? 'Hide' : 'Show' }} toolbar</button>
    <ejs-pdfviewer #pdfviewer
      id="PdfViewer"
      style="height:500px;width:100%;"
      [documentPath]="documentPath"
      [resourceUrl]="resourceUrl"
      [toolbarSettings]="{ toolbarItems: toolbarItems }"
      (toolbarClick)="onToolbarClick($event)">
    </ejs-pdfviewer>
  </div>`
})
export class AppComponent {
  @ViewChild('pdfviewer')
  public pdfViewerObj!: PdfViewerComponent;

  public showTool: boolean = true;
  public documentPath: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public toolbarItems: any[] = [
    'OpenOption',
    {
      id: 'custom_btn',
      text: 'Fit to Width',
      align: 'Center'
    },
    'DownloadOption'
  ];

  hideToolbar(): void {
    this.showTool = !this.showTool;
    this.pdfViewerObj.toolbar.showToolbar(this.showTool);
  }

  onToolbarClick(event: ToolbarClickEventArgs): void {
    if (event.item && event.item.id === 'custom_btn') {
      this.pdfViewerObj.magnification.fitToWidth();
    }
  }
}
{% endhighlight %}
{% endtabs %}

## Expected result

- The primary toolbar shows only the items you list in [`toolbarItems`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbarsettings#toolbaritems).
- Clicking the `Hide toolbar` / `Show toolbar` button calls [`showToolbar()`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbar#showtoolbar) and hides or shows the toolbar at runtime.
- Clicking the custom `Fit to Width` button calls `fitToWidth()` method.

## Troubleshooting

- Toolbar still shows all default items.
    - **Solution**: [`toolbarItems`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbarsettings#toolbaritems) must be supplied exactly; verify names and that [`ToolbarService`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbar) is injected.

## Related topics

- [Annotation toolbar customization](./annotation-toolbar)
- [Form designer toolbar customization](./form-designer-toolbar)
