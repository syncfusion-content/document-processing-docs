---
layout: post
title: Programmatical Organize Pages in Angular PDF Viewer | Syncfusion
description: Learn here all about Programmatic Support for Organize Pages in Syncfusion Angular PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Programmatic Support for Organize Pages in Angular PDF Viewer control

The PDF Viewer exposes programmatic APIs to manage page organization. Use these APIs to enable the page organizer, open or close the organizer dialog, and customize page-management behaviors from application code.

## Enable or disable the page organizer

Enable the page organizer using the `enablePageOrganizer` property. The default value is `true`.

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

Control whether the page organizer opens automatically when a document loads using the `isPageOrganizerOpen` property. The default value is `false`.

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

Use the `pageOrganizerSettings` property to configure page-management actions and thumbnail zoom behavior. Settings include toggles for deleting, inserting, rotating, copying, importing, and rearranging pages, and controls for thumbnail zoom. By default, all actions are enabled, and standard zoom settings are applied.

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

Call the `openPageOrganizer` method on the viewer's `pageOrganizer` API to programmatically open the organizer dialog and access page-management tools.

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

Call the `closePageOrganizer` method on the viewer's `pageOrganizer` API to programmatically close the organizer dialog.

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
