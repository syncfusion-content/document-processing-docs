---
layout: post
title: Angular PDF Viewer with Ionic | Syncfusion
description: Short quickstart for integrating the Angular PDF Viewer into an Ionic Angular application for mobile and web deployment documentation.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular PDF Viewer using Ionic Angular

## Overview

This guide covers integrating the Angular PDF Viewer into an Ionic Angular application. Ionic provides a cross-platform UI framework built on Angular.

N> This guide assumes you have an existing Ionic Angular project (v8.0+) with Angular v20+. The PDF Viewer works seamlessly with Ionic's tab-based navigation and responsive design patterns.

## Prerequisites

- **Node.js**: v18 or later (recommended v20+)
- **Ionic CLI**: v7.0 or later (`npm install -g @ionic/cli`)
- **Angular**: v20.0 or later (built-in with Ionic v8+)

## Tutorial – Create Ionic Angular Application

## Step 1: Create an Ionic Angular App

If you don't have an Ionic Angular project, create one:

```bash
ionic start deployment-docs tabs --type=angular
```

### Step 2: Run the Application
Start the Application

```bash
ionic serve
```

## Install the PDF Viewer Package

### Step 3: Install Package

Add the Angular PDF Viewer and its dependencies:

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

### Step 5: Add Syncfusion Styles (app.css)

Place the Syncfusion CSS imports in your global stylesheet (`src/global.scss`).

```css
/* Syncfusion styles */
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-pdfviewer/styles/material.css';
```

## Step 6: Run the Application

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