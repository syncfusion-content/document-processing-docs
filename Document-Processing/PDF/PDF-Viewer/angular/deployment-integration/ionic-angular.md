---
layout: post
title: Ionic Angular in Angular PDF Viewer | Syncfusion
description: Learn about the ionic angular in the Angular PDF Viewer and how it helps users work with PDF documents more effectively.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Ionic Angular in Angular PDF Viewer

## Overview

This guide covers integrating the Angular PDF Viewer into an Ionic Angular application. Ionic provides a cross-platform UI framework built on Angular.

N> This guide assumes you have an existing Ionic Angular project (v8.0+) with Angular v20+. The PDF Viewer works seamlessly with Ionic's tab-based navigation and responsive design patterns.

## Prerequisites

- **Node.js**: v18 or later (recommended v20+)
- **Ionic CLI**: v7.0 or later (`npm install -g @ionic/cli`)
- **Angular**: v20.0 or later (built-in with Ionic v8+)

## Tutorial – Create Ionic Angular Application

### Step 1: Create an Ionic Angular App

If you don't have an Ionic Angular project, create one:

```bash
ionic start deployment-docs tabs --type=angular
```

### Step 2: Run the Application

Start the application:

```bash
ionic serve
```

## Install the PDF Viewer Package

### Step 3: Install Package

Add the Syncfusion Angular PDF Viewer and its dependencies:

```bash
npm install @syncfusion/ej2-angular-pdfviewer
```
## How-to – Integrate PDF Viewer

### Step 4: Update Root Component (tab1.page.ts)

Replace the contents of `src/app/tab1/tab1.page.ts` with the following code:

```ts
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  PdfViewerComponent, PdfViewerModule, LinkAnnotationService,
  BookmarkViewService, MagnificationService,
  ThumbnailViewService, ToolbarService,
  NavigationService, TextSearchService,
  TextSelectionService, PrintService,
  AnnotationService, FormFieldsService,
  FormDesignerService, PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-tab1',
  standalone: true,
  template:  `<div class="control-section">
      <div class="content-wrapper">
        <ejs-pdfviewer
          [documentPath]="document"
          [resourceUrl]="resource"
          style="height: 640px; display: block;">
        </ejs-pdfviewer>
      </div>
    </div>`,
  styleUrls: ['tab1.page.scss'],
  providers: [
    LinkAnnotationService, BookmarkViewService,
    MagnificationService, ThumbnailViewService,
    ToolbarService, NavigationService,
    TextSearchService, TextSelectionService,
    PrintService, AnnotationService,
    FormFieldsService, FormDesignerService,
    PageOrganizerService
  ],
  encapsulation: ViewEncapsulation.None,
  imports: [PdfViewerModule],
})
export class Tab1Page {
  constructor() {}
  @ViewChild('pdfviewer')
  public pdfviewerControl?: PdfViewerComponent;

  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource = 'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib';
}
```

### Step 5: Add Syncfusion Styles (global.scss)

Place the Syncfusion CSS imports in your global stylesheet (`src/global.scss`).

Themes for PDF Viewer can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/angular/documentation/appearance/theme#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/angular/documentation/appearance/theme-studio). For more information, see the [themes documentation](https://ej2.syncfusion.com/angular/documentation/appearance/theme).

This guide uses the `Tailwind 3` theme as an example. Install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package:

```bash
npm install @syncfusion/ej2-tailwind3-theme
```

```css
/* Syncfusion styles */
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/pdfviewer/index.css';
```

N> The `index.css` file automatically includes all required dependent component styles for the PDF Viewer. You do not need to import individual dependency styles such as Base, Buttons, Inputs, Navigations, Popups, SplitButtons, and Notifications separately.

### Step 6: Run the Application

Start the development server:

```bash
ionic serve
```

[View Sample on GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/Environment%20Integration)

## See Also

- [Angular PDF Viewer Documentation](https://www.syncfusion.com/angular-components/angular-pdf-viewer)
- [Ionic Angular Documentation](https://ionicframework.com/docs/angular/overview)
- [Angular Standalone Components](https://v17.angular.io/guide/standalone-components)
- [Capacitor Documentation](https://capacitorjs.com/docs)