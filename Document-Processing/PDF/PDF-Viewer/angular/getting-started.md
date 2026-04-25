---
title: Setup for Local Development – Angular PDF Viewer | Syncfusion
description: Learn how to set up and run the Angular Standalone PDF Viewer component using Syncfusion Essential JS 2.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Standalone PDF Viewer

This guide explains how to create a simple **Angular Standalone PDF Viewer** application and demonstrates the basic usage of the Syncfusion PDF Viewer component.

> **Note:** This guide supports **Angular 21** and other recent Angular versions. Starting from Angular 19, standalone components are the default, and this documentation follows that architecture.

---

## Prerequisites

Ensure that your system meets the [Syncfusion Angular system requirements](https://ej2.syncfusion.com/angular/documentation/system-requirement).

---

## Setup Angular Environment

### Install Angular CLI

Install the latest Angular CLI globally:

```bash
npm install -g @angular/cli
```

To install a specific version:

```bash
npm install -g @angular/cli@21.0.0
```

---

## Create an Angular Application

Create a new Angular application using the Angular CLI:

```bash
ng new my-app
cd my-app
```

> **Note:** In Angular 20 and later, the CLI generates `app.ts`, `app.html`, and `app.css` instead of `app.component.*` files.

---

## Installing Syncfusion® PDF Viewer package

Install the Syncfusion Angular PDF Viewer package from npm:

```bash
npm install @syncfusion/ej2-angular-pdfviewer --save
```

* Validate that your server has been configured to utilize the Content-Type: application/wasm MIME type. Additional information can be found in the [Troubleshooting](./troubleshooting/troubleshooting) section.

---

## Adding CSS references

Add the required Syncfusion styles to the `src/styles.css` file:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/material.css';
@import '../node_modules/@syncfusion/ej2-pdfviewer/styles/material.css';
```

---

## Add the PDF Viewer component

To load and display a PDF document, only the **PdfViewerModule** is required.

Update `src/app/app.ts` as shown below:

```ts
import { Component } from '@angular/core';
import { PdfViewerModule, LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService,
         AnnotationService, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
   providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService]
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [documentPath]="documentPath"
      [resourceUrl]="resourcesUrl"
      style="height:640px; display:block">
    </ejs-pdfviewer>
  `
})
export class App {

  // Specifies the path or Base64 string of the PDF document to be loaded.
  // You can provide a remote URL or a local file from the assets folder.
  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  // Specifies the path to the PDFium resource files required by the PDF Viewer.
  // This points to a CDN-hosted ej2-pdfviewer-lib folder.
  public resourcesUrl: string =
    'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
}
```

---

## Run the application

Run the application using the Angular CLI:

```bash
ng serve --open
```

The PDF document will be rendered in the browser.

---

{% previewsample "/document-processing/samples/pdfviewer/angular/getting-started-cs1-standalone" %}

---

## Angular version compatibility and older versions

For detailed compatibility information, refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility).

For older Angular versions, refer to the following guides:
* [Create a Standalone PDF Viewer in Angular 17 and above with-no-standalone-flag](./how-to/create-a-standalone-pdf-viewer-in-angular-17-and-above-with-no-standalone-flag).
* [Create a Standalone PDF Viewer in Angular 17 and above without --no-standalone flag](./how-to/create-a-standalone-pdf-viewer-in-angular-17-and-above-without-no-standalone-flag).
* [Create a Standalone PDF Viewer in Angular 12](./how-to/create-a-standalone-pdf-viewer-in-angular-12)
