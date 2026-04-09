---
layout: post
title: Migrating from PDF.js to Syncfusion Angular PDF Viewer
description: Learn how to migrate from PDF.js to Syncfusion Angular PDF Viewer, covering architecture, features, and code changes.
platform: document-processing
documentation: ug
control: PDF Viewer
---

# Migrating from PDF.js to Syncfusion Angular PDF Viewer

This guide explains how to migrate an existing [PDF.js](https://mozilla.github.io/pdf.js/) implementation to the [Syncfusion Angular PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started). It covers architectural differences, feature mapping, and required code changes.

## Overview

PDF.js is a low-level JavaScript library that focuses on rendering PDF pages using HTML canvas. Developers are responsible for building navigation, zooming, text selection, annotations, forms, and user interface components.

Syncfusion Angular PDF Viewer is a **high-level Angular component** that provides complete PDF viewing and interaction capabilities out of the box, including UI, performance optimizations, and Angular-friendly APIs.

## Architecture Notes

Key migration considerations:

- **Rendering model**: PDF.js exposes page and canvas APIs; Syncfusion manages rendering internally.
- **UI and tooling**: PDF.js requires custom toolbars; Syncfusion provides a configurable built-in toolbar.
- **Event model**: PDF.js uses promise-based life cycle; Syncfusion exposes Angular events such as `documentLoad` and `pageRenderComplete`.
- **Persistence**: Annotation and form persistence should be migrated to Syncfusion export/import APIs.

## Installation

### PDF.js

```bash
npm install pdfjs-dist
```

### Syncfusion Angular PDF Viewer

```bash
npm install @syncfusion/ej2-angular-pdfviewer
```

Add the required module:

```ts
import { PdfViewerModule } from '@syncfusion/ej2-angular-pdfviewer';

@NgModule({
  imports: [PdfViewerModule]
})
export class AppModule {}
```

## Rendering a PDF

### PDF.js Example

```ts
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.getDocument('sample.pdf').promise.then(pdf => {
  pdf.getPage(1).then(page => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');
    const viewport = page.getViewport({ scale: 1.5 });

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    page.render({ canvasContext: context!, viewport });
  });
});
```

### Syncfusion Angular PDF Viewer Example

```html
<ejs-pdfviewer
  id="container"
  [documentPath]="'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'"
  [resourceUrl]="'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'"
  style="height:640px;display:block">
</ejs-pdfviewer>
```

```ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  NavigationService,
  MagnificationService,
  AnnotationService,
  TextSearchService,
  FormFieldsService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [
    ToolbarService,
    NavigationService,
    MagnificationService,
    AnnotationService,
    TextSearchService,
    FormFieldsService
  ]
})
export class AppComponent {}
```

## Feature Checklist (Syncfusion)

- [Page Navigation](../interactive-pdf-navigation/overview)
- [Text Search](../text-search/overview)
- [Annotations](../annotation/overview)
- [Form Fields](../forms/overview)

## Event Handling

### PDF.js

```ts
page.render(...).promise.then(() => console.log('Rendered'));
```

### Syncfusion Angular

Check [Syncfusion Events Guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/events#documentload) to know more about event handling in Syncfusion React PDF Viewer.

```html
<ejs-pdfviewer
  (documentLoad)="onDocumentLoad()"
  (pageChange)="pageChange($event)">
</ejs-pdfviewer>
```

```ts
onDocumentLoad() {
  console.log('Document loaded');
}

onPageChange(args: any) {
  console.log('Current page:', args.currentPageNumber);
}
```

## Step-by-Step Migration Guide

### 1. Prepare the Project

- Create a feature branch
- Add smoke tests for existing PDF.js behavior
- Identify components using `pdf js-dist`

### 2. Remove PDF.js Rendering Logic

**Before**

```ts
import * as pdfjsLib from 'pdf js-dist';
```

**After**

- Remove canvas elements
- Remove `pdf js` dependency

### 3. Add Syncfusion Viewer

- Install the package
- Import PdfViewerModule

### 4. Configure Styles

Add the following styles globally:

```css
@import '~@syncfusion/ej2-base/styles/material.css';
@import '~@syncfusion/ej2-buttons/styles/material.css';
@import '~@syncfusion/ej2-dropdowns/styles/material.css';
@import '~@syncfusion/ej2-inputs/styles/material.css';
@import '~@syncfusion/ej2-navigations/styles/material.css';
@import '~@syncfusion/ej2-popups/styles/material.css';
@import '~@syncfusion/ej2-splitbuttons/styles/material.css';
@import '~@syncfusion/ej2-pdfviewer/styles/material.css';
```

### 5. Configure Resource URL

Use Syncfusion CDN or host locally:

```html
<ejs-pdfviewer
  [resourceUrl]="'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'">
</ejs-pdfviewer>
```

### 6. Migrate Features

- Replace navigation and zoom with toolbar
- Use annotation APIs for persistence
- Use built-in text search
- Replace custom print/download logic

## API mapping: common PDF.js → Syncfusion equivalents

| PDF.js | Reason / Syncfusion equivalent |
|---|---|
| `pdfjsLib.getDocument(url).promise` | Document loading handled by `PdfViewerComponent` via `documentPath` or `load()` method. |
| `pdf.getPage(n)` | Viewer exposes page events and `getPageInfo(pageIndex)`; page life cycle is surfaced via `pageRenderInitiate` / `pageRenderComplete` events. |
| `page.render({ canvasContext, viewport })` | Rendering is internal — replace with `PdfViewerComponent` rendering; no manual canvas drawing required. |
| `page.getTextContent()` | Use `extractText(pageIndex, options)` or enable `enableTextSearch`/`enableTextSelection` for built-in search/selection. |
| Custom toolbar buttons controlling canvas | Use `Toolbar` service, or add custom toolbar items and handle `toolbarClick` events. |
| Custom annotation storage | Use `addAnnotation`, `exportAnnotation`, `importAnnotation`, and `exportAnnotationsAsBase64String` methods. |
| Manual print/download flows | Use `download()` and built-in Print service. |
| Page render promise | Listen to `pageRenderComplete` / `documentLoad` events for life cycle hooks. |

## Common Migration Checklist

- Remove all PDF.js imports
- Replace canvas rendering with `<ejs-pdfviewer>`
- Inject only required services
- Migrate life cycle events
- Verify annotations, forms, and search
- Remove obsolete tests and utilities

## Reference: key Syncfusion `PdfViewerComponent` methods & events

- [PdfViewerComponent API index](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default)
- [load()](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#load) — programmatically load a PDF.
- [download()](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#download) — trigger download of current document.
- [addAnnotation(annotation: any)](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#addannotation) — add an annotation programmatically.
- [exportAnnotation(annotationDataFormat)](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#exportannotation) / [exportAnnotationsAsBase64String()](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#exportannotationsasbase64string):   — export annotations for persistence.
- [extractText(pageIndex: number, options?: any)](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#extracttext): — extract text and coordinates.
- [Events](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#events): [documentLoad](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#documentload), [pageRenderComplete](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#pagerendercomplete), [pageChange](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#pagechange), [annotationAdd](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#annotationadd), [annotationRemove](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#annotationremove), [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#toolbarclick).

## See Also

- [PDF.js Getting Started](https://mozilla.github.io/pdf.js/getting_started/)
- [Syncfusion Angular PDF Viewer Getting Started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started)
- [Syncfusion Angular PDF Viewer API](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer)
