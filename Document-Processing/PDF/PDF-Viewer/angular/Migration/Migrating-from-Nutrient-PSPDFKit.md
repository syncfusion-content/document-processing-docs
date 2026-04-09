---
layout: post
title: Migrating from Nutrient (PSPDFKit) to Angular PDF Viewer | Syncfusion
description: Learn here all about how to migrate from Nutrient.io (PSPDFKit) Web SDK to Syncfusion Angular PDF Viewer.
platform: document-processing
documentation: ug
control: PDF Viewer
---

# Migrating from Nutrient Web SDK to Syncfusion Angular PDF Viewer

This guide helps you migrate an Angular application built using **Nutrient Web SDK (formerly PSPDFKit Web SDK)** to the **Syncfusion Angular PDF Viewer**. It mirrors the React migration guide but is tailored specifically for **Angular architecture, modules, and component life cycle**.

The objective is to replace the **imperative SDK-based initialization** used by Nutrient with the **declarative Angular component model** provided by Syncfusion.

## Overview

| Aspect | Nutrient Web SDK | Syncfusion Angular PDF Viewer |
|-------|------------------|------------------------------|
| Integration style | SDK initialization via `load()` | Declarative Angular component |
| Framework pattern | Framework-agnostic | Native Angular component |
| UI | SDK-provided UI | Built-in Angular toolbar |
| Annotations & forms | SDK APIs | Angular services & APIs |
| Hosting | Local / CDN | Fully client-side |

## Architectural Differences

### Nutrient Web SDK (PSPDFKit)
- Viewer mounted imperatively into a DOM element
- Manual life cycle handling (`load`, `unload`)
- SDK-managed UI and events

### Syncfusion Angular PDF Viewer
- Viewer rendered using `<ejs-pdfviewer>` component
- Life cycle managed by Angular
- Features enabled via service injection
- Events bound using Angular outputs

## Installation

### Nutrient Web SDK

```bash
npm install @nutrient-sdk/viewer
```

Or include the SDK via CDN in `index.html`.


### Syncfusion Angular PDF Viewer

```bash
npm install @syncfusion/ej2-angular-pdfviewer
```

Install required dependencies:

```bash
npm install @syncfusion/ej2-base @syncfusion/ej2-buttons @syncfusion/ej2-dropdowns @syncfusion/ej2-inputs @syncfusion/ej2-navigations @syncfusion/ej2-popups @syncfusion/ej2-splitbuttons
```

## Angular Module Setup

```ts
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PdfViewerModule } from '@syncfusion/ej2-angular-pdfviewer';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PdfViewerModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## Viewer Initialization Comparison

### Nutrient Web SDK (Angular)

```ts
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

declare const NutrientViewer: any;

@Component({
  selector: 'app-old-viewer',
  template: '<div #container style="height:100vh"></div>'
})
export class OldViewerComponent implements AfterViewInit {
  @ViewChild('container', { static: true }) container!: ElementRef;

  ngAfterViewInit(): void {
    NutrientViewer.load({
      container: this.container.nativeElement,
      document: '/assets/sample.pdf'
    });
  }
}
```

### Syncfusion Angular PDF Viewer

```html
<ejs-pdfviewer id="pdfViewer"
    [documentPath]='https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'
    [resourceUrl]='https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'
    style="height:640px;display:block">
</ejs-pdfviewer>
```

## Feature Enablement

Features are enabled automatically or via service injection:

```ts
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  TextSearchService,
  FormFieldsService
} from '@syncfusion/ej2-angular-pdfviewer';

@NgModule({
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    TextSearchService,
    FormFieldsService
  ]
})
```

### Feature checklist (Syncfusion)

- [Page Navigation](../interactive-pdf-navigation/overview)
- [Text Search](../text-search/overview)
- [Annotations](../annotation/overview)
- [Form Fields](../forms/overview)

## Event Handling

### Nutrient Web SDK

Check [Events Guide](https://www.nutrient.io/guides/web/events/) to know more about event handling in Apryse.


```ts
instance.addEventListener('documentLoaded', () => {
  console.log('Document loaded');
});
```

### Syncfusion  Viewer

Check [Syncfusion Events Guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/events#documentload) to know more about event handling in Syncfusion React PDF Viewer.

```html
<ejs-pdfviewer
  (documentLoad)="onDocumentLoad()"
  (pageChange)="onPageChange($event)">
</ejs-pdfviewer>
```

```ts
onDocumentLoad(): void {
  console.log('Document loaded');
}

onPageChange(args: any): void {
  console.log(args.currentPageNumber);
}
```

## Minimal Migration Steps

1. Remove Nutrient SDK setup
2. Add Syncfusion PDF Viewer packages
3. Configure Angular module
4. Replace SDK initialization with `<ejs-pdfviewer>`
5. Re-map events and APIs

## Reference: key Syncfusion `PdfViewerComponent` methods & events

- [PdfViewerComponent API index](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default)
- [load()](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#load) — programmatically load a PDF.
- [download()](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#download) — trigger download of current document.
- [addAnnotation(annotation: any)](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#addannotation) — add an annotation programmatically.
- [exportAnnotation(annotationDataFormat)](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#exportannotation) / [exportAnnotationsAsBase64String()](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#exportannotationsasbase64string):   — export annotations for persistence.
- [extractText(pageIndex: number, options?: any)](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#extracttext): — extract text and coordinates.
- [Events](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#events): [documentLoad](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#documentload), [pageRenderComplete](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#pagerendercomplete), [pageChange](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#pagechange), [annotationAdd](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#annotationadd), [annotationRemove](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#annotationremove), [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#toolbarclick).

## See Also

- [Nutrient Web SDK (PSPDFKit) getting started](https://www.nutrient.io/sdk/web/getting-started/other-frameworks/angular)
- [Syncfusion Angular PDF Viewer Getting Started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started)
- [Syncfusion Angular PDF Viewer API](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer)
