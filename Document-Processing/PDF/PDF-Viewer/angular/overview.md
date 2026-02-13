---
title: Overview of Angular PDF Viewer Component | Syncfusion
description: Checkout and learn about overview of the Syncfusion Angular PDF Viewer component and much more details.
platform: document-processing
control: PDF Viewer
documentation: UG
---

# Overview of Angular PDF Viewer Component

The [Angular PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk) component is a lightweight, modular viewer for displaying and printing PDF files. It provides core interactions such as zooming, scrolling, text search, text selection, and text copy. Thumbnail, bookmark, hyperlink and table-of-contents support enable efficient navigation within PDF files.


## Setup

### Create an Angular application

Use the [Angular CLI](https://github.com/angular/angular-cli) to set up an Angular application. To install the Angular CLI, run:

```
npm install -g @angular/cli
```
Create a new Angular application with the Angular CLI:

```
ng new my-app
cd my-app
```
### Adding the Syncfusion PDF Viewer package

All Syncfusion Angular packages are published on the [npm registry](https://www.npmjs.com/~syncfusionorg). To add the Angular PDF Viewer package, run:

```
ng add @syncfusion/ej2-angular-pdfviewer
```

This command performs the following configuration in the Angular app:

* Adds the `@syncfusion/ej2-angular-pdfviewer` package and its peer dependencies to `package.json`.
* Imports the `PdfViewerModule` into the application module (`app.module.ts`).
* Registers the Syncfusion UI default theme (Material) in `angular.json`.

After these changes, the Syncfusion Angular PDF Viewer module is available for use in the application.

### Adding CSS references for PDF Viewer

Add the required CSS references for the PDF Viewer to `src/styles.css` from the `../node_modules/@syncfusion` package folder.

```
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/material.css';
@import "../node_modules/@syncfusion/ej2-angular-pdfviewer/styles/material.css";
```
### Add PDF Viewer component

In `src/app/app.component.ts`, use the <ejs-pdfviewer> selector in the `@Component` template to render the Syncfusion Angular PDF Viewer component.

```
import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         AnnotationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService
       } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
                <ejs-pdfviewer id="pdfViewer"
                    [documentPath]='document'
                    [resourceUrl]='resource'
                    style="height:640px;display:block">
                </ejs-pdfviewer>
             </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               AnnotationService, FormDesignerService, FormFieldsService]
})
export class AppComponent implements OnInit {
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib";
  ngOnInit(): void {
  }
}
```

## Key Features

* [`View PDF Document`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) - Open and display both normal and protected PDF files.
* [`Annotations`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/annotation/text-markup-annotation) - Annotate documents with text markup, shapes, stamps, ink, and sticky notes. Form filling and form designing are supported.
* [`Form Fields`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/form-designer/create-programmatically) - Create and fill form fields; supports form designing features.
* [`Signature`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/annotation/signature-annotation) - Support for hand-written and digital signatures.
* [`Toolbar`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/toolbar) - Built-in and customizable toolbars for common PDF Viewer actions.
* [`Navigation`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/navigation) - Navigate using bookmarks, thumbnails, hyperlinks, and the table of contents.
* [`Magnification`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/magnification) - Fit-to-page, fit-to-width, and automatic fit options.
* [`Search`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/text-search) - Search text across the PDF document.
* [`Core Interactions`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/interaction-mode) - Scrolling, zooming, panning, selection, and page navigation.
* [`Print`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/print) - Print the entire document or specific pages from the browser.
* [`Globalization`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/globalization) - Built-in support for localizing the UI.

## Supported Web platforms

* [JavaScript (ES5)](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started)
* [JavaScript (ES6)](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started)
* [React](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started)
* [Vue](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started)
* [ASP.NET Core](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started)
* [ASP.NET MVC](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started)
* [Blazor](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/overview)