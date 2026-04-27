---
layout: post
title: Setup for Server-Backed TypeScript PDF Viewer | Syncfusion
description: Learn how to set up and run the Syncfusion TypeScript PDF Viewer in server-backed mode using a PDF Viewer web service.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with TypeScript PDF Viewer (Server-Backed)

This guide explains how to create and run the **TypeScript PDF Viewer in server-backed mode**. In this mode, PDF rendering and processing are performed on a server-side web service, while the TypeScript application acts as the client.

> **Note:** This guide supports recent versions of Essential JS 2. Server-backed mode is recommended for large files, restricted client environments, or server-side processing requirements.

---

## Setup the development environment


Open a command prompt in the target directory and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack).

This example uses the Syncfusion Essential JS 2 **quickstart webpack project**.

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

To load and display a PDF in server-backed mode, configure the PDF Viewer with the `serviceUrl` property.

Update `src/app.ts` as shown below:

```ts
import { PdfViewer, Toolbar, Magnification, 
         Navigation, Annotation, LinkAnnotation,
         ThumbnailView, BookmarkView, TextSelection, 
         TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation,
               Annotation, LinkAnnotation, ThumbnailView,
               BookmarkView, TextSelection, TextSearch,
               FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer({
  // Specifies the URL of the server-side PDF Viewer web service
  serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'
});

pdfviewer.appendTo('#PdfViewer');

// Load a PDF document through the server
pdfviewer.load('https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf', '');
```

Add a container element in `index.html`:

```html
<div id="PdfViewer" style="height: 640px"></div>
```

> **Note:** The Web API service URL shown above is provided for evaluation only. For production, host your own PDF Viewer web service.

---

## Run the application

Run the application using the following command:

```bash
npm start
```

The application will connect to the configured PDF Viewer web service and render the document in the browser.

---

## Run the PDF Viewer web service

To host your own PDF Viewer web service:

1. Download the web service sample from GitHub:
   [GitHub Web service sample](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices)
2. Navigate to the appropriate folder based on your .NET version:
   - .NET 6.0 → PdfViewerWebService_6.0
   - .NET 8.0 → PdfViewerWebService_8.0
3. Restore and run the service:

```bash
dotnet restore
dotnet run
```

The service will run at:

```
https://localhost:7255/pdfviewer
```

Configure this URL in the `serviceUrl` property of the PDF Viewer.

> **Important:** In server-backed mode, do **not** include `pdfium.js` or `pdfium.wasm`. All rendering is performed on the server.

---

N> For hosting the web service on Linux, include [SkiaSharp.NativeAssets.Linux](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.119.1). For AWS environments, use the following packages:

| **Amazon Web Services (AWS)** |**NuGet package name** |
| --- | --- |
| AWS Lambda|[SkiaSharp.NativeAssets.Linux](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.119.1)|
| AWS Elastic Beanstalk |[SkiaSharp.NativeAssets.Linux.NoDependencies v3.119.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux.NoDependencies/3.119.1)|