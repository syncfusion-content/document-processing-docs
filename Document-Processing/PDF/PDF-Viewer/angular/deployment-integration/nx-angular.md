---
layout: post
title: Nx Angular in Angular PDF Viewer | Syncfusion
description: Learn about the nx angular in the Angular PDF Viewer and how it helps users work with PDF documents more effectively.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Nx Angular in Angular PDF Viewer

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

N> To verify Nx installation navigate into your workspace directory and use `npx nx --version`

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

## Step 4: Install Syncfusion Angular PDF Viewer

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

Themes for PDF Viewer can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/angular/documentation/appearance/theme#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/angular/documentation/appearance/theme-studio). For more information, see the [themes documentation](https://ej2.syncfusion.com/angular/documentation/appearance/theme).

This guide uses the `Tailwind 3` theme as an example. Install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package:

```bash
npm install @syncfusion/ej2-tailwind3-theme
```

### `app.css`

```css
@import '../../../node_modules/@syncfusion/ej2-tailwind3-theme/styles/pdfviewer/index.css';
```

N> The `index.css` file automatically includes all required dependent component styles for the PDF Viewer. You do not need to import individual dependency styles such as Base, Buttons, Dropdowns, Inputs, Navigations, Popups, SplitButtons, and Notifications separately.

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
