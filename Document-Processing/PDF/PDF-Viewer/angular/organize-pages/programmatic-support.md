---
layout: post
title: Programmatical Organize Pages in Angular PDF Viewer control | Syncfusion
description: Learn here all about Programmatic Support for Organize Pages in Syncfusion Angular PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Programmatic Support for Organize Pages in Angular PDF Viewer control

The PDF Viewer provides comprehensive programmatic support for organizing pages, allowing you to integrate and manage PDF functionalities directly within your application. This section details the available APIs to enable, control, and interact with the page organization features.

## Enable or disable the page organizer

The page organizer feature can be enabled or disabled using the `enablePageOrganizer` property. By default, this feature is enabled.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         TextSearchService, AnnotationService, TextSelectionService,
         FormFieldsService, FormDesignerService, PageOrganizerService, PrintService
       } from '@syncfusion/ej2-angular-pdfviewer';
@Component({
  selector: 'app-container',
  template: `<div class="content-wrapper">
               <ejs-pdfviewer id="pdfViewer"
                        [documentPath]="document"
                        [resourceUrl]="resource"
                        [enablePageOrganizer]="true"
                        style="height:640px;display:block">
               </ejs-pdfviewer>
            </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               AnnotationService, TextSearchService, TextSelectionService,
               FormFieldsService, FormDesignerService, PageOrganizerService, PrintService]
  })
  export class AppComponent implements OnInit {
      public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
      public resource = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
  }

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         TextSearchService, AnnotationService, TextSelectionService,
         FormFieldsService, FormDesignerService, PageOrganizerService, PrintService
       } from '@syncfusion/ej2-angular-pdfviewer';
@Component({
  selector: 'app-container',
  template: `<div class="content-wrapper">
               <ejs-pdfviewer id="pdfViewer"
                        [serviceUrl]="service"
                        [documentPath]="document"
                        [enablePageOrganizer]="true"
                        style="height:640px;display:block">
               </ejs-pdfviewer>
            </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               AnnotationService, TextSearchService, TextSelectionService,
               FormFieldsService, FormDesignerService, PageOrganizerService, PrintService]
  })
  export class AppComponent implements OnInit {
      public service = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';
      public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  }

{% endhighlight %}
{% endtabs %}

## Open the page organizer on document load

You can control whether the page organizer dialog opens automatically when a document is loaded using the `isPageOrganizerOpen` property. The default value is `false`.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         TextSearchService, AnnotationService, TextSelectionService,
         FormFieldsService, FormDesignerService, PageOrganizerService, PrintService
       } from '@syncfusion/ej2-angular-pdfviewer';
@Component({
  selector: 'app-container',
  template: `<div class="content-wrapper">
               <ejs-pdfviewer id="pdfViewer"
                        [documentPath]="document"
                        [resourceUrl]="resource"
                        [isPageOrganizerOpen]="true"
                        style="height:640px;display:block">
               </ejs-pdfviewer>
            </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               AnnotationService, TextSearchService, TextSelectionService,
               FormFieldsService, FormDesignerService, PageOrganizerService, PrintService]
  })
  export class AppComponent implements OnInit {
      public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
      public resource = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
  }

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         TextSearchService, AnnotationService, TextSelectionService,
         FormFieldsService, FormDesignerService, PageOrganizerService, PrintService
       } from '@syncfusion/ej2-angular-pdfviewer';
@Component({
  selector: 'app-container',
  template: `<div class="content-wrapper">
               <ejs-pdfviewer id="pdfViewer"
                        [serviceUrl]="service"
                        [documentPath]="document"
                        [isPageOrganizerOpen]="true"
                        style="height:640px;display:block">
               </ejs-pdfviewer>
            </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               AnnotationService, TextSearchService, TextSelectionService,
               FormFieldsService, FormDesignerService, PageOrganizerService, PrintService]
  })
  export class AppComponent implements OnInit {
      public service = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';
      public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  }

{% endhighlight %}
{% endtabs %}

## Customize page organizer settings

The `pageOrganizerSettings` API allows you to customize the page management functionalities. You can enable or disable actions such as deleting, inserting, rotating, copying, importing, and rearranging pages, as well as configure thumbnail zoom settings. By default, all actions are enabled, and standard zoom settings are applied.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         TextSearchService, AnnotationService, TextSelectionService,
         FormFieldsService, FormDesignerService, PageOrganizerService, PrintService
       } from '@syncfusion/ej2-angular-pdfviewer';
@Component({
  selector: 'app-container',
  template: `<div class="content-wrapper">
               <ejs-pdfviewer id="pdfViewer"
                        [documentPath]="document"
                        [resourceUrl]="resource"
                        [pageOrganizerSettings]="{canDelete: true, canInsert: true, canRotate: true, canCopy: true, canRearrange: true, canImport: true, imageZoom: 1, showImageZoomingSlider: true, imageZoomMin: 1, imageZoomMax: 5}"
                        style="height:640px;display:block">
               </ejs-pdfviewer>
            </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               AnnotationService, TextSearchService, TextSelectionService,
               FormFieldsService, FormDesignerService, PageOrganizerService, PrintService]
  })
  export class AppComponent implements OnInit {
      public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
      public resource = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
  }

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         TextSearchService, AnnotationService, TextSelectionService,
         FormFieldsService, FormDesignerService, PageOrganizerService, PrintService
       } from '@syncfusion/ej2-angular-pdfviewer';
@Component({
  selector: 'app-container',
  template: `<div class="content-wrapper">
               <ejs-pdfviewer id="pdfViewer"
                        [serviceUrl]="service"
                        [documentPath]="document"
                        [pageOrganizerSettings]="{canDelete: true, canInsert: true, canRotate: true, canCopy: true, canRearrange: true, canImport: true, imageZoom: 1, showImageZoomingSlider: true, imageZoomMin: 1, imageZoomMax: 5}"
                        style="height:640px;display:block">
               </ejs-pdfviewer>
            </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               AnnotationService, TextSearchService, TextSelectionService,
               FormFieldsService, FormDesignerService, PageOrganizerService, PrintService]
  })
  export class AppComponent implements OnInit {
      public service = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';
      public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  }

{% endhighlight %}
{% endtabs %}

## Open the page organizer dialog

The `openPageOrganizer` method programmatically opens the page organizer dialog, providing access to page management tools.

```html
<button id="openPageOrganizer">Open PageOrganizer Pane</button>
```

```ts
import { Component, ViewChild } from '@angular/core';
import { PdfViewerComponent } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-container',
  template: `
    <div class="content-wrapper">
      <button id="openPageOrganizer" (click)="openPageOrganizer()">Open PageOrganizer Pane</button>
      <ejs-pdfviewer #pdfViewer id="pdfViewer" style="height:640px;display:block"></ejs-pdfviewer>
    </div>
  `
})
export class AppComponent {
  @ViewChild('pdfViewer', { static: false }) public viewer!: PdfViewerComponent;
  public openPageOrganizer(): void {
    this.viewer.pageOrganizer.openPageOrganizer();
  }
}
```

## Close the page organizer dialog

The `closePageOrganizer` method programmatically closes the page organizer dialog.

```html
<button id="closePageOrganizer">Close PageOrganizer Pane</button>
```

```ts
import { Component, ViewChild } from '@angular/core';
import { PdfViewerComponent } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-container',
  template: `
    <div class="content-wrapper">
      <button id="closePageOrganizer" (click)="closePageOrganizer()">Close PageOrganizer Pane</button>
      <ejs-pdfviewer #pdfViewer id="pdfViewer" style="height:640px;display:block"></ejs-pdfviewer>
    </div>
  `
})
export class AppComponent {
  @ViewChild('pdfViewer', { static: false }) public viewer!: PdfViewerComponent;
  public closePageOrganizer(): void {
    this.viewer.pageOrganizer.closePageOrganizer();
  }
}
```
