---
layout: post
title: Angular PDF Viewer in Nx Workspace | Syncfusion
description: A quick guide to integrate Angular PDF Viewer with Angular applications in an Nx mono repo workspace.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular PDF Viewer in an Nx Workspace

This guide explains how to create an **Nx workspace**, scaffold an **Angular application**, and integrate the **Angular PDF Viewer** using modern **standalone Angular components**.

## Prerequisites

- **Node.js:** LTS version (v18 or later recommended)
- **npm:** v10 or later (comes with Node.js)
- **Basic knowledge of Angular** and command-line tools

## Step 1: Create an Nx Workspace

Create a new Nx workspace with Angular as the starter preset:

```bash
npx create-nx-workspace@latest org
```

N> To verify Nx installation navigate into you workspace directory and use `npx nx --version`

## Step 2: Create an Angular Application

Generate a new Angular application within your Nx workspace:

```bash
npx nx generate @nx/angular:application pdf-viewer-app
```

## Step 3: Validate the Setup

Start the Development Server using the following command:

```bash
npx nx serve pdf-viewer-app
```

## Step 4: Install Angular PDF Viewer

Install the Angular PDF Viewer package in your workspace:

```bash
npm install @syncfusion/ej2-angular-pdfviewer --save
```

## Step 5: Integrating PDF Viewer in a Standalone Component

Nx generates standalone components by default. The Syncfusion PDF Viewer is configured inside the `nx-welcome` component.

### `nx-welcome.ts`

```ts
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  selector: 'app-nx-welcome',
  imports: [CommonModule, PdfViewerModule],
  template: `
    <div class="control-section">
      <div class="content-wrapper">
        <ejs-pdfviewer
          #pdfviewer
          id="pdfViewer"
          [documentPath]="document"
          [resourceUrl]="resource"
          style="height:640px;display:block">
        </ejs-pdfviewer>
      </div>
    </div>
  `,
  providers: [
    LinkAnnotationService, BookmarkViewService,
    MagnificationService, ThumbnailViewService,
    ToolbarService, NavigationService, TextSearchService,
    TextSelectionService, PrintService,
    AnnotationService, FormFieldsService,
    FormDesignerService, PageOrganizerService
  ],
  encapsulation: ViewEncapsulation.None
})
export class NxWelcome {
  @ViewChild('pdfviewer')
  public pdfviewerControl?: PdfViewerComponent;

  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib';
}
```

## Step 6: Adding Syncfusion Theme Styles

Since modern Nx versions do not rely on a single `angular.json`, styles can be imported via CSS.

### `app.css`

```css
@import '../../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../../../node_modules/@syncfusion/ej2-pdfviewer/styles/material.css';
@import '../../../node_modules/@syncfusion/ej2-notifications/styles/material.css';
```

## Step 7: Running the Application with PDF Viewer

```bash
npx nx serve pdf-viewer-app
```

[View Sample on GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/Environment%20Integration)

## See Also

- [Angular PDF Viewer Documentation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/overview)
- [Nx Documentation](https://nx.dev/docs)
- [Angular Standalone Components Guide](https://v17.angular.io/docs)
- [Nx Angular Plugin](https://nx.dev/nx-api/angular)
