---
layout: post
title: Load PDF Viewer with Local Resources in TypeScript | Syncfusion
description: Learn how to configure the Syncfusion TypeScript PDF Viewer to load PDF documents and PDFium resources locally instead of from CDN.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Load PDF Viewer with Local Resources in TypeScript

This guide shows how to configure the **Syncfusion TypeScript (JavaScript/ES6) PDF Viewer** to load PDF documents and required PDFium resources from your local application instead of using a CDN.

## Prerequisites

Follow the [getting started guide](../getting-started) to create a basic **TypeScript PDF Viewer (Standalone)** application.

> **Note:** Local resource loading is supported only in **standalone mode**. Do not use this approach with server-backed PDF Viewer.

## Configuration Steps

### Step 1: Copy the Resource Files

Copy the `ej2-pdfviewer-lib` folder to your application output directory (commonly `dist/`) using the following commands:

{% tabs %}
{% highlight bash tabtitle="Windows" %}

xcopy /E /I node_modules\@syncfusion\ej2-pdfviewer\dist\ej2-pdfviewer-lib public\assets\ej2-pdfviewer-lib

{% endhighlight %}
{% highlight bash tabtitle="Mac/Linux" %}

cp -R ./node_modules/@syncfusion/ej2-pdfviewer/dist/ej2-pdfviewer-lib public/assets/ej2-pdfviewer-lib

{% endhighlight %}
{% endtabs %}

### Step 2: Add Your PDF Document

Place your PDF file inside the same output directory.

**Your folder structure:**

```
dist/
 ├── ej2-pdfviewer-lib/
 │   ├── pdfium.js
 │   └── pdfium.wasm
 └── pdfsuccinctly.pdf
```

### Step 3: Update the PDF Viewer Code

Configure the PDF Viewer to use local paths.

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';

  PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer({
  // Path to your locally hosted PDF document
  documentPath: window.location.origin + '/pdfsuccinctly.pdf',

  // Path to the locally hosted PDFium resource files
  resourceUrl: window.location.origin + '/ej2-pdfviewer-lib'
});

pdfviewer.appendTo('#PdfViewer');
```

Ensure your `index.html` contains a container element:

```html
<div id="PdfViewer" style="height: 640px"></div>
```

### Step 4: Run the Application

Build and run your application:

```bash
npm start
```

The PDF Viewer will now load the document and resources from **local files**.

[View sample on GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/How%20to/Refer%20resource%20url%20locally)
