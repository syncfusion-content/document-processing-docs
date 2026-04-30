---
layout: post
title: Syncfusion Angular PDF Viewer using Vite | Syncfusion
description: Step-by-step guide to integrate the Syncfusion Angular PDF Viewer in an Angular application that uses the Vite-based Angular CLI build system.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion Angular PDF Viewer using Vite

## Overview

This guide explains how to create an Angular application powered by the Vite build system and integrate the Syncfusion Angular PDF Viewer using standalone components.

## Prerequisites

- Node.js: v18 or later
- npm: v9 or later
- Angular CLI: Latest
- Basic knowledge of Angular standalone components

## Tutorial – Create Angular Application with Vite

### Step 1: Create a New Angular Application

```bash
npm install -g @angular/cli
ng new angular-vite-pdfviewer
cd angular-vite-pdfviewer
```

### Step 2: Run the Application
Start the development server:

```bash
ng serve
```
## Install Syncfusion Angular PDF Viewer

### Step 3: Install Package
Install the Syncfusion Angular PDF Viewer package:

```bash
npm install @syncfusion/ej2-angular-pdfviewer
```

## How-to – Integrate PDF Viewer

### Step 4: Update Root Component (app.ts)

Replace the contents of `src/app/app.ts` with the following code:

```ts
import { Component, ViewChild, ViewEncapsulation, signal } from '@angular/core';
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
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <div class="control-section">
      <div class="content-wrapper">
        <ejs-pdfviewer
          [documentPath]="document"
          [resourceUrl]="resource"
          style="height: 640px; display: block;">
        </ejs-pdfviewer>
      </div>
    </div>
  `,
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
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pdfviewer-vite-app');

  @ViewChild('pdfviewer')
  public pdfviewerControl?: PdfViewerComponent;

  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource = 'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib';
}
```

### Step 5: Add Syncfusion Styles (app.css)
Open `src/app/app.css` and add the following imports:

```css
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-notifications/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-angular-pdfviewer/styles/material.css';
```

### Step 6: Run the Application

```bash
ng serve
```

[View Sample on GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples)

## See Also

- [Syncfusion Angular PDF Viewer Documentation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/overview)
- [Angular Standalone Components Guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started)
- [Angular CLI Application Builder (Vite)](https://angular.dev/tools/cli/build-system-migration)