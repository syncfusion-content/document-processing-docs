---
layout: post
title: Migrating from Apryse WebViewer to Syncfusion Angular PDF Viewer
description: Learn how to migrate an Angular application from Apryse (PDFTron) WebViewer to Syncfusion Angular PDF Viewer, including setup, architecture differences, feature mapping, and API replacements.
platform: document-processing
documentation: ug
control: PDF Viewer
---

# Migrating from Apryse Web Viewer to Syncfusion Angular PDF Viewer

This guide helps Angular developers migrate applications built using **Apryse Web Viewer** to the **Syncfusion Angular PDF Viewer**. It explains architectural differences, setup changes, feature mapping, and common API replacements specific to an Angular environment.

## Overview

**Apryse Web Viewer** is an SDK-style viewer that is mounted imperatively into a DOM element and exposes a rich JavaScript API surface.

**Syncfusion Angular PDF Viewer** provides a **fully declarative Angular component-based experience**, offering built-in UI, annotations, form fields, text search, and navigation through Angular modules and services—without requiring external runtime SDK initialization.

Key migration benefits:
- Native Angular component integration
- Simplified life cycle management
- Modular feature injection (smaller bundles)
- Built-in toolbar and UI consistency

## Architecture Differences

| Concept | Apryse Web Viewer | Syncfusion Angular PDF Viewer |
|--------|-----------------|-------------------------------|
| Integration style | Imperative DOM-based SDK mount | Declarative Angular component |
| Initialization | Web Viewer({...}, element) | `<ejs-pdfviewer>` component |
| UI | SDK-provided toolbar | Angular services & toolbar module |
| Events | documentViewer.addEventListener | Angular event bindings |
| Annotations | AnnotationManager | Built-in annotation module |

Migration generally involves **removing the Apryse SDK mount** and **replacing it with the `ejs-pdfviewer` Angular component**.

## Installation

### Apryse Web Viewer
```bash
npm install @pdftron/webviewer
```

### Syncfusion Angular PDF Viewer
```bash
npm install @syncfusion/ej2-angular-pdfviewer
```

## Module Setup

### AppModule Configuration (Syncfusion)

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PdfViewerModule } from '@syncfusion/ej2-angular-pdfviewer';

@NgModule({
  imports: [BrowserModule, PdfViewerModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Add the required Syncfusion styles in `angular.json` or `styles.css`:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-pdfviewer/styles/material.css';
```

## Viewer Initialization Comparison

### Apryse Web Viewer (Angular)

```ts
import WebViewer from '@pdftron/webviewer';

ngAfterViewInit() {
  WebViewer(
    {
      path: 'lib/webviewer',
      initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf'
    },
    this.viewer.nativeElement
  ).then(instance => {
    const { documentViewer } = instance.Core;
    documentViewer.addEventListener('documentLoaded', () => {
      console.log('Document loaded');
    });
  });
}
```

### Syncfusion Angular PDF Viewer

```html
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]='https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'
  [resourceUrl]='https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib'
  (documentLoad)="onDocumentLoad()">
</ejs-pdfviewer>
```

```ts
onDocumentLoad(): void {
  console.log('Document loaded');
}
```

## Feature Mapping

| Feature | Apryse | Syncfusion Angular |
|--------|--------|-------------------|
| Page navigation | `documentViewer` APIs | Built-in navigation module |
| Text search | Search APIs | `enableTextSearch` |
| Annotations | `annotationManager` | Annotation service |
| Form fields | FormsManager | FormFields module |
| Download / Print | SDK methods | `download()` / Print module |

## Event Handling

### Apryse

```ts
documentViewer.addEventListener('pageNumberUpdated', (page) => {
  console.log(page);
});
```

### Syncfusion

```html
<ejs-pdfviewer (pageChange)="pageChange($event)"></ejs-pdfviewer>
```

```ts
pageChange(args: any): void {
  console.log(args.currentPageNumber);
}
```

## Annotation Migration

### Apryse
```ts
annotationManager.exportAnnotations();
```

### Syncfusion
```ts
this.pdfViewer.exportAnnotation();
```

For importing persisted annotations:
```ts
this.pdfViewer.importAnnotation(annotationData);
```

## Migration Checklist

- Remove `Apryse web viewer` initialization and DOM mounting code
- Install `@syncfusion/ej2-angular-pdfviewer`
- Import `PdfViewerModule` into Angular modules
- Replace SDK initialization with `<ejs-pdfviewer>`
- Inject only required services (Toolbar, Annotation, FormFields, TextSearch)
- Map Apryse events to Angular PDF Viewer events
- Adapt annotation and form-field persistence logic
- Update licensing and deployment setup

## Quick Migration Guide

1. Create a migration branch
2. Remove Apryse WebViewer SDK usage
3. Install Syncfusion Angular PDF Viewer
4. Add required styles and module imports
5. Replace DOM-based viewer mount with Angular component
6. Gradually enable features: navigation → search → annotation → forms
7. Test large PDFs and annotation persistence

## Reference: key Syncfusion `PdfViewerComponent` methods & events

- [PdfViewerComponent API index](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default)
- [load()](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#load) — programmatically load a PDF.
- [download()](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#download) — trigger download of current document.
- [addAnnotation(annotation: any)](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#addannotation) — add an annotation programmatically.
- [exportAnnotation(annotationDataFormat)](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#exportannotation) / [exportAnnotationsAsBase64String()](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#exportannotationsasbase64string):   — export annotations for persistence.
- [extractText(pageIndex: number, options?: any)](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#extracttext): — extract text and coordinates.
- [Events](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#events): [documentLoad](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#documentload), [pageRenderComplete](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#pagerendercomplete), [pageChange](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#pagechange), [annotationAdd](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#annotationadd), [annotationRemove](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#annotationremove), [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#toolbarclick).

## See Also

- [Apryse Angular Web Viewer Getting Started](https://docs.apryse.com/web/guides/get-started/angular)
- [Syncfusion Angular PDF Viewer Getting Started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started)
- [Syncfusion Angular PDF Viewer API](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer)
