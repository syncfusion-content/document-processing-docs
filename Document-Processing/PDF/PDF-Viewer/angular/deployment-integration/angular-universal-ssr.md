---
layout: post
title: Angular Universal Ssr in Angular PDF Viewer | Syncfusion
description: Learn about the angular universal ssr in the Angular PDF Viewer and how it helps users work with PDF documents more effectively.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Angular Universal Ssr in Angular PDF Viewer

This guide shows how to create an Angular Universal SSR application and integrate the Angular PDF Viewer component.

## Prerequisites

- **Node.js:** v20 or later
- **Angular CLI:** v21 or later
- **npm:** v10 or later

## Tutorial – Create Angular Application with SSR

### Step 1: Create Angular SSR Project

Create a new Angular application with Server-Side Rendering:

```bash
ng new angular-ssr-pdfviewer --ssr --standalone
cd angular-ssr-pdfviewer
```

### Step 2: Run the Application

To start the application, use the following commands:

```bash
npm run build
npm run serve:ssr:angular-ssr-pdfviewer
```

## Install Angular PDF Viewer

### Step 3: Install Syncfusion PDF Viewer

Install the Angular PDF Viewer package:

```bash
npm install @syncfusion/ej2-angular-pdfviewer
```

### Step 4: Add Syncfusion CSS Imports

Themes for PDF Viewer can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/angular/documentation/appearance/theme#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/angular/documentation/appearance/theme-studio). For more information, see the [themes documentation](https://ej2.syncfusion.com/angular/documentation/appearance/theme).

This guide uses the `Tailwind 3` theme as an example. Install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package:

```bash
npm install @syncfusion/ej2-tailwind3-theme
```

Update `src/app/app.css` with the PDF Viewer theme import. The `index.css` file automatically includes all required dependent component styles for the PDF Viewer. You do not need to import individual dependency styles such as Base, Buttons, Dropdowns, Inputs, Navigations, Popups, SplitButtons, and Notifications separately:

```css
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/pdfviewer/index.css';
```

## How-to – Integrate PDF Viewer

### Step 5: Update Root Component (app.ts)

Replace the contents of `src/app/app.ts` with the following code:

```ts
import { Component, signal, ViewChild, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
  protected readonly title = signal('angular-ssr-pdfviewer');
  @ViewChild('pdfviewer')
  public pdfviewerControl?: PdfViewerComponent;

  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource = 'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib';
}
```

### Step 6: Build and Run

Build the SSR application:

```bash
npm run build
```

N> While building an Angular Universal (SSR) application with the Syncfusion PDF Viewer, you may encounter bundle size or font budget errors.
To avoid build failures, increase the size budgets in the `angular.json` file under the `build → configurations → production → budgets` section.

Run the SSR server:

```bash
npm run serve:ssr:angular-ssr-pdfviewer
```

[View Sample on GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/Environment%20Integration)

## See Also

- [Angular PDF Viewer Documentation](https://ej2.syncfusion.com/angular/documentation/pdfviewer/pdfviewer-overview)
- [Angular Universal Documentation](https://v17.angular.io/guide/ssr)
