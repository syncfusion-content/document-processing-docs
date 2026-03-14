---
layout: post
title: Primary Toolbar in Angular PDF Viewer Component | Syncfusion
description: Learn here all about primary toolbar customization in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Primary Toolbar Customization in Angular PDF Viewer

The primary toolbar of the PDF Viewer can be customized by rearranging existing items, disabling default items, and adding custom items. New items can be inserted at a specific index among existing toolbar items to control placement.

## Show or hide the primary toolbar

Toggle the built-in primary toolbar to create custom toolbar experiences or simplify the UI. When a custom toolbar is required, hide the built-in toolbar. Use the [enableToolbar](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/pdfViewerModel/#enabletoolbar) property or the [showToolbar](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbar/#showtoolbar) method to show or hide the primary toolbar.

### Show or hide the toolbar using the `enableToolbar` property:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

import { Component, NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PdfViewerModule, PdfViewerComponent, ToolbarService, MagnificationService, NavigationService, AnnotationService, LinkAnnotationService, ThumbnailViewService, BookmarkViewService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
    <ejs-pdfviewer id="PdfViewer"
      style="height:500px;width:100%;"
      [documentPath]="documentPath"
      [resourceUrl]="resourceUrl"
      [enableToolbar]="false">
    </ejs-pdfviewer>
  `
})
export class AppComponent {
  @ViewChild(PdfViewerComponent, { static: false }) pdfViewer?: PdfViewerComponent;
  public documentPath: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PdfViewerModule],
  providers: [
    ToolbarService, MagnificationService, NavigationService, AnnotationService, LinkAnnotationService,
    ThumbnailViewService, BookmarkViewService, TextSelectionService, TextSearchService,
    FormFieldsService, FormDesignerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Angular PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.23/material.css" rel="stylesheet" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
</head>
<body>
    <app-root>Loading....</app-root>
</body>
</html>

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to show or hide the toolbar using the `showToolbar` method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

import { Component, NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PdfViewerModule, PdfViewerComponent, ToolbarService, MagnificationService, NavigationService, AnnotationService, LinkAnnotationService, ThumbnailViewService, BookmarkViewService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="hideToolbar()">showToolbarItem</button>
    <ejs-pdfviewer id="PdfViewer"
      #pdfviewer
      style="height:500px;width:100%;"
      [documentPath]="documentPath"
      [resourceUrl]="resourceUrl">
    </ejs-pdfviewer>
  `
})
export class AppComponent {
  @ViewChild('pdfviewer', { static: false }) pdfViewer?: PdfViewerComponent;
  public documentPath: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  hideToolbar(): void {
    this.pdfViewer?.toolbar.showToolbar(false);
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PdfViewerModule],
  providers: [
    ToolbarService, MagnificationService, NavigationService, AnnotationService, LinkAnnotationService,
    ThumbnailViewService, BookmarkViewService, TextSelectionService, TextSearchService,
    FormFieldsService, FormDesignerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Angular PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.23/material.css" rel="stylesheet" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
</head>
<body>
    <app-root>Loading....</app-root>
</body>
</html>

{% endhighlight %}
{% endtabs %}
