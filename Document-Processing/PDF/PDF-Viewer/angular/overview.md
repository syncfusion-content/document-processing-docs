---
title: Overview of Angular PDF Viewer Component | Syncfusion
description: Overview of the Syncfusion Angular PDF Viewer component and its features.
platform: document-processing
control: PDF Viewer
documentation: UG
---

# Overview of Angular PDF Viewer Component

The [Angular PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk) component is a lightweight, modular component for viewing and printing PDF files. It provides a rich viewing experience with core interactions such as zooming, scrolling, text searching, text selection, and text copying. Thumbnail, bookmark, hyperlink, and table of contents support enable easy navigation within and across PDF files.


## Setup

### Create an Angular application

The [Angular CLI](https://github.com/angular/angular-cli) can be used to set up Angular applications. To install the Angular CLI, use the following command.

```
npm install -g @angular/cli
```
Create a new Angular application using the following Angular CLI commands.

```
ng new my-app
cd my-app
```
### Add Syncfusion PDF Viewer package

All Syncfusion Angular packages are published in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry. To install the Angular PDF Viewer package, use the following command.

```
ng add @syncfusion/ej2-angular-pdfviewer
```

The command performs the following configuration in the Angular app:

* Adds `@syncfusion/ej2-angular-pdfviewer package` and its peer dependencies to your package.json file.
* Imports the `PdfViewerModule` in your application module app.module.ts.
* Registers the Syncfusion UI default theme (material) in the `angular.json` file.

This simplifies adding the Syncfusion Angular PDF Viewer module to a project and using it in an application.

### Add CSS references for PDF Viewer

Add the CSS references needed for the PDF Viewer in `src/styles.css` from the `../node_modules/@syncfusion` package folder.

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
### Add the PDF Viewer component

In `src/app/app.component.ts`, use the <ejs-pdfviewer> selector in the template attribute of the @Component directive to render the Syncfusion Angular PDF Viewer component.

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

## Key features

* [`View PDF document`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) - Opens and displays normal and protected PDF files with AES and RC4 encryption.
* [`Annotations`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/annotation/text-markup-annotation) - Annotates with text markup, shapes, stamps, ink, and sticky notes. Supports form filling and form designing.
* [`Form fields`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/form-designer/create-programmatically) - Supports form filling and form designing.
* [`Signature`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/annotation/signature-annotation) - Supports handwritten and digital signatures.
* [`Toolbar`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/toolbar) - Built-in and custom toolbars for interacting with PDF Viewer functionality.
* [`Navigation`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/navigation) - Easy navigation using bookmarks, thumbnails, hyperlinks, and table of contents.
* [`Magnification`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/magnification) - Fit to page, fit to width, and automatic (fits to the visible area).
* [`Search`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/text-search) - Searches text across the PDF document.
* [`Core interactions`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/interaction-mode) - Enables scrolling, zooming, panning, selection, and page navigation.
* [`Print`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/print) - Prints the entire document or a specific page directly from the browser.
* [`Globalization`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/globalization) - Provides built-in support to localize the UI.

## Supported web platforms

* [JavaScript (ES5)](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started)
* [JavaScript](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started)
* [React](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started)
* [Vue](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started)
* [ASP.NET Core](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started)
* [ASP.NET MVC](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started)
* [Blazor](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/overview)