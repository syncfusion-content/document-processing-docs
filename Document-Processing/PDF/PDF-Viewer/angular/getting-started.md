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
import { PdfViewerModule } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
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

## Module injection (Optional features)

The following services can be injected **only if required** to enable additional capabilities such as annotations, thumbnails, search, or form fields:

* `LinkAnnotationService`: Enables hyperlink navigation.
* `BookmarkViewService`: Displays and navigates document bookmarks.
* `MagnificationService`: Provides zoom in/out operations.
* `NavigationService`: Enables page navigation.
* `TextSelectionService`: Enables text selection.
* `ThumbnailViewService`: Displays page thumbnails for navigation.
* `ToolbarService`: Enables the built-in toolbar UI.
* `PrintService`: Enables printing.
* `AnnotationService`: Enables annotation features.
* `TextSearchService`: Enables text search.
* `FormFieldsService`: Enables form field support.
* `FormDesignerService`: Enables designing and editing of form fields.
* `PageOrganizerService`: Enables page organization features.

Inject only the services needed for your use case to optimize application performance.

---

## Angular version compatibility and older versions

For detailed compatibility information, refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility).

For older Angular versions, refer to the following guides:
- Angular 17 and above (with `--no-standalone` flag)
- Angular 17 and above (default standalone)
- Angular 12
