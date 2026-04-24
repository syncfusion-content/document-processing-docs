### layout: post
title: Setup for Local Development – TypeScript PDF Viewer | Syncfusion
description: Learn how to set up and run the Syncfusion TypeScript PDF Viewer in standalone mode using Essential JS 2.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##

## Getting started with the TypeScript PDF Viewer

This guide explains how to create and run a **TypeScript PDF Viewer** application using Syncfusion Essential JS 2 in **standalone mode**.

> **Note:** Standalone mode renders PDF files directly in the browser without requiring a server-side web service.

---

## Prerequisites

Ensure that your system meets the [Syncfusion system requirements](https://ej2.syncfusion.com/javascript/documentation/system-requirement). Node.js v14.15.0 or later is required.

---

## Setup the development environment

This example uses the Syncfusion Essential JS 2 quickstart project with a webpack configuration.

### Clone the quickstart project

```bash
git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack ej2-quickstart
cd ej2-quickstart
```

### Install dependencies

```bash
npm install
```

---

## Installing Syncfusion® PDF Viewer package

The quickstart project already includes the `@syncfusion/ej2` meta package. No additional installation is required if it is present.

---

## Adding CSS references

Add the required Syncfusion styles to `src/styles/styles.css`:

```css
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-notifications/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-pdfviewer/styles/material.css';
```

---

## Add the PDF Viewer component

Import the PDF Viewer and inject only the required modules. Update `src/app.ts` as shown below:

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';

   PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

    let pdfviewer: PdfViewer = new PdfViewer();
    // Specifies the URL or path of the PDF document to be loaded.
    // You can provide a remote URL or a local PDF file path.
    pdfviewer.documentPath =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

    // Specifies the URL of the PDFium resource files required by the PDF Viewer.
    // This should point to the ej2-pdfviewer-lib folder, either from a CDN
    // or a locally hosted location.
    pdfviewer.resourceUrl =
    'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
   pdfviewer.appendTo('#PdfViewer');
```

Add a container element for the PDF Viewer in `index.html`:

```html
<div id="PdfViewer" style="height: 640px"></div>
```

---

## Run the application

Build and launch the application using the following command:

```bash
npm start
```

The PDF document will be rendered in the browser.

---

{% previewsample "/document-processing/code-snippet/pdfviewer/javascript-es6/getting-started-cs2" %}

[Open in StackBlitz](https://stackblitz.com/fork/javascript)

---

For a complete feature overview, refer to the [JavaScript PDF Viewer feature tour](https://www.syncfusion.com/pdf-viewer-sdk/javascript).
