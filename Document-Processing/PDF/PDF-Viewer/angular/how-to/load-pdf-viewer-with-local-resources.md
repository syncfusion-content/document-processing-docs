---
layout: post
title: Load PDF Viewer with Local Resources in Angular | Syncfusion
description: Learn how to configure the Syncfusion Angular PDF Viewer to load PDF documents and PDFium resources locally instead of from CDN.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Load PDF Viewer with Local Resources in Angular

This guide shows how to configure the **Angular PDF Viewer (Standalone)** to load PDF documents and required PDFium resources from your local application instead of using a CDN.

> **Note:** Local resource loading is supported only in **standalone mode**. Do not use this approach with the server-backed PDF Viewer.

## Prerequisites

Follow the [getting started guide](../getting-started) to create a basic Angular PDF Viewer application.

## Configuration Steps

### Step 1: Copy the Resource Files

Copy the `ej2-pdfviewer-lib` folder into the Angular `src/assets/` directory using the following commands:

{% tabs %}
{% highlight bash tabtitle="Windows" %}

xcopy /E /I xcopy /E /I node_modules\@syncfusion\ej2-pdfviewer\dist\ej2-pdfviewer-lib public\assets\ej2-pdfviewer-lib

{% endhighlight %}
{% highlight bash tabtitle="Mac/Linux" %}

cp -R ./node_modules/@syncfusion/ej2-pdfviewer/dist/ej2-pdfviewer-lib public/assets/ej2-pdfviewer-lib

{% endhighlight %}
{% endtabs %}

### Step 2: Add Your PDF Document

Place your PDF file inside the `src/assets/` folder.

**Your folder structure:**

```
src/
 └── assets/
     ├── ej2-pdfviewer-lib/
     │   ├── pdfium.js
     │   └── pdfium.wasm
     └── pdfsuccinctly.pdf
```

### Step 3: Update the PDF Viewer Component

Configure the Angular PDF Viewer to use local paths.

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
      // Path to your locally hosted PDF file
      [documentPath]="documentPath"
      // Path to the locally hosted PDFium resource files
      [resourceUrl]="resourceUrl"
      style="height: 640px; display: block">
    </ejs-pdfviewer>
  `
})
export class AppComponent {

  public documentPath: string = window.location.origin + '/assets/pdfsuccinctly.pdf';

  public resourceUrl: string = window.location.origin + '/assets/ej2-pdfviewer-lib';
}
```

### Step 5: Run the Application

Run the Angular application:

```bash
ng serve --open
```

The PDF Viewer will now load the document and resources from **local assets**.

[View sample on GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to/Refer%20resource%20url%20locally)
