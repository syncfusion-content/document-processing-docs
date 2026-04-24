---
title: Setup for Server-Backed Angular PDF Viewer | Syncfusion
description: Learn how to set up and run the Syncfusion Angular PDF Viewer in server-backed mode using Essential JS 2.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular PDF Viewer (Server-Backed)

This guide explains how to create and run the **Angular PDF Viewer in server-backed mode**. In this mode, PDF rendering is handled by a server-side web service, while the Angular application acts as the client.

> **Note:** This guide supports **Angular 21** and other recent Angular versions. From Angular 19 onwards, standalone components are the default, and this documentation follows that architecture.

---

## Prerequisites

Ensure that your development environment meets the [Syncfusion Angular system requirements](https://ej2.syncfusion.com/angular/documentation/system-requirement).

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

## Create an Angular application

Create a new Angular application using the CLI:

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

To load and display a PDF using server-backed mode, only the **PdfViewerModule** is required. The PDF Viewer communicates with a server-side web service through the `serviceUrl` property.

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
      [serviceUrl]="serviceUrl"
      [documentPath]="documentPath"
      style="height:640px; display:block">
    </ejs-pdfviewer>
  `
})
export class App {

  // Specifies the URL of the server-side PDF Viewer web service.
  // This endpoint handles PDF rendering and processing.
  public serviceUrl: string =
    'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';

  // Specifies the path or name of the PDF document to be loaded.
  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
}
```

> **Note:** The service URL shown above is for evaluation purposes only. For production, host your own PDF Viewer web service.

---

## Run the application

Run the Angular application using the CLI:

```bash
ng serve --open
```

The application will start and connect to the configured PDF Viewer web service.

---

{% previewsample "/document-processing/samples/pdfviewer/angular/getting-started-cs1" %}

---

## Module injection (Optional features)

The following services can be injected **only if required** to enable additional features such as annotations, thumbnails, search, or form field support:

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

Inject only the services required for your use case to optimize application performance.

---

## Run the PDF Viewer web service

To host your own PDF Viewer service:

1. Download the web service sample from GitHub:
   https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices
2. Navigate to the appropriate folder based on your .NET version:
   - .NET 6.0 → PdfViewerWebService_6.0
   - .NET 8.0 → PdfViewerWebService_8.0
3. Restore dependencies and run the service:

```bash
dotnet restore
dotnet run
```

The service will run at `https://localhost:7255/pdfviewer`. Configure this URL in the `serviceUrl` property.

> **Note:** In server-backed mode, `pdfium.js` and `pdfium.wasm` are not required because all PDF rendering happens on the server.

---

## Angular version compatibility and older versions

For detailed compatibility information, refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility).

* [Create a Standalone PDF Viewer in Angular 17 and above with-no-standalone-flag](./how-to/create-a-standalone-pdf-viewer-in-angular-17-and-above-with-no-standalone-flag).
* [Create a Standalone PDF Viewer in Angular 17 and above without --no-standalone flag](./how-to/create-a-standalone-pdf-viewer-in-angular-17-and-above-without-no-standalone-flag).
* [Create a Standalone PDF Viewer in Angular 12](./how-to/create-a-standalone-pdf-viewer-in-angular-12)

For older Angular versions, refer to the respective Angular PDF Viewer guides.

---

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/Getting%20started%20-%20Server-Back)
