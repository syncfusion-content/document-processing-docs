---
title: Overview of Angular PDF Viewer Component | Syncfusion
description: Checkout and learn about overview of the Syncfusion Angular PDF Viewer component and much more details.
platform: document-processing
control: PDF Viewer
documentation: UG
---

# Overview of Angular PDF Viewer Component

The [`angular PDF Viewer`](https://www.syncfusion.com/angular-components/angular-pdf-viewer) component is a lightweight and modular component for viewing and printing PDF files. It provides the best viewing experience available with core interactions such as zooming, scrolling, text searching, text selection, and text copying. The thumbnail, bookmark, hyperlink and table of contents support provides easy navigation within and outside the PDF files.


## Setup

### Create a Angular Application

You can use [Angular CLI](https://github.com/angular/angular-cli) to setup your Angular applications. To install the Angular CLI, use the following command.

```
npm install -g @angular/cli
```
Create a new Angular application using the following Angular CLI command.

```
ng new my-app
cd my-app
```
### Adding Syncfusion PDF Viewer package

All Syncfusion angular packages are published in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry. To install the angular PDF Viewer package, use the following command.

```
ng add @syncfusion/ej2-angular-pdfviewer
```

The above command does the below configuration to your Angular app.

* Adds `@syncfusion/ej2-angular-pdfviewer package` and its peer dependencies to your package.json file.
* Imports the `PdfViewerModule` in your application module app.module.ts.
* Registers the Syncfusion UI default theme (material) in the `angular.json` file.

This makes it easy to add the Syncfusion Angular PDF Viewer module to your project and start using it in your application.

### Adding CSS references for PDF Viewer

Add CSS references needed for a PDF Viewer in `src/styles.css` from the `../node_modules/@syncfusion` package folder.

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

In `src/app/app.component.ts``, use <ejs-pdfviewer> selector in the template attribute of the @Component directive to render the Syncfusion Angular PDF Viewer component.

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

*[`View PDF Document`](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started) - Open and display both the normal and the protected PDF files with AES and RC4 encryption.
*[`Annotations`](https://ej2.syncfusion.com/angular/documentation/pdfviewer/annotation/text-markup-annotation) - Annotate with text markup, shapes, stamps, ink, and sticky notes.Form filling and form designing can be done.
*[`Form Fields`](https://ej2.syncfusion.com/angular/documentation/pdfviewer/form-designer/create-fillable-pdf-forms/create-programmatically) - Form filling and form designing can be done.
*[`Signature`](https://ej2.syncfusion.com/angular/documentation/pdfviewer/handwritten-signature) - Hand-written and digital signatures are allowed.
*[`Toolbar`](https://ej2.syncfusion.com/angular/documentation/pdfviewer/toolbar) - Built-in-toolbar and custom toolbars to perform user interaction of PDF Viewer functionalities.
*[`Navigation`](https://ej2.syncfusion.com/angular/documentation/pdfviewer/navigation) - Easy navigation with the help of bookmarks, thumbnails, hyperlinks, and table of contents.
*[`Magnification`](https://ej2.syncfusion.com/angular/documentation/pdfviewer/magnification) - Fit to page, fit to width, and automatic (fits to the visible area).
*[`Search`](https://ej2.syncfusion.com/angular/documentation/pdfviewer/text-search) - Search a text easily across the PDF document.
*[`Core Interactions`](https://ej2.syncfusion.com/angular/documentation/pdfviewer/interaction-mode) - Allows scrolling, zooming, panning, selection, and page navigation.
*[`Print`](https://ej2.syncfusion.com/angular/documentation/pdfviewer/print) - Print the entire document or a specific page directly from the browser.
*[`Globalization`](https://ej2.syncfusion.com/angular/documentation/pdfviewer/globalization) - Provides inherent support to localize the UI.

## Supported Web platforms

* [Javascript(ES5)](https://ej2.syncfusion.com/javascript/documentation/pdfviewer/getting-started)
* [Javascript](https://ej2.syncfusion.com/documentation/pdfviewer/getting-started)
* [React](https://ej2.syncfusion.com/react/documentation/pdfviewer/getting-started)
* [Vue](https://ej2.syncfusion.com/vue/documentation/pdfviewer/getting-started)
* [ASP.NET Core](https://ej2.syncfusion.com/aspnetcore/documentation/pdfviewer/getting-started)
* [ASP.NET MVC](https://ej2.syncfusion.com/aspnetmvc/documentation/pdfviewer/getting-started)
* [Blazor](https://helpstaging.syncfusion.com/document-processing/pdf/pdf-viewer2/blazor/overview)