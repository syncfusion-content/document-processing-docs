---
layout: post
title: Syncfusion Angular PDF Viewer in Nx Workspace | Syncfusion
description: A quick guide to integrate Syncfusion Angular PDF Viewer with Angular applications in an Nx monorepo workspace.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Syncfusion Angular PDF Viewer in an Nx Workspace

This guide explains how to create an **Nx workspace**, scaffold an **Angular application**, and integrate the **Syncfusion Angular PDF Viewer** using modern **standalone Angular components**. It targets **enterprise Angular applications** that use **Nx monorepo architecture**.

## Prerequisites

- **Node.js:** LTS version (v18 or later recommended)
- **npm:** v10 or later (comes with Node.js)
- **Basic knowledge of Angular** and command-line tools

Verify installations:

```bash
node --version
npm --version
```

---

## Step 1: Create an Nx Workspace

### 1.1 Navigate to a Parent Directory

Choose a location where you want to create your Nx workspace:

```bash
cd "D:/NX workspace"
```

Ensure the directory is empty or create a new folder for your workspace.

### 1.2 Create Nx Workspace with Angular Preset

Create a new Nx workspace with Angular as the starter preset:

```bash
npx create-nx-workspace@latest org
```

When prompted, choose:

- **Starter**: `Angular`
- **Remote caching**: `Skip for now`
- **Bundler**: `Webpack`
- **SSR / SSG**: `No`

This creates a clean Angular-enabled Nx workspace with all necessary configurations.

### 1.3 Move into the Workspace

Navigate into your workspace directory:

```bash
cd org
```

Verify Nx installation:

```bash
npx nx --version
```

---

## Step 2: Create an Angular Application

Generate a new Angular application within your Nx workspace:

```bash
npx nx generate @nx/angular:application pdf-viewer-app
```

Recommended options when prompted:

- **Routing**: `Yes`
- **Standalone API**: `Yes` (default)
- **Stylesheet format**: `CSS`

This creates a new Angular application named `pdf-viewer-app` with standalone components enabled.

---

## Step 3: Validate the Setup

### 3.1 Start the Development Server

Run the application to verify it's working correctly:

```bash
npx nx serve pdf-viewer-app
```

### 3.2 Open in Browser

Navigate to the application:

```
http://localhost:4200
```

You should see the default Nx welcome page. This confirms your Angular application is ready for PDF Viewer integration.

---

## Step 4: Install Syncfusion Angular PDF Viewer

Install the Syncfusion Angular PDF Viewer package in your workspace:

```bash
npm install @syncfusion/ej2-angular-pdfviewer --save
```

This single package includes all dependencies and is shared across the entire Nx workspace.

---

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

---

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

---

## Step 7: Running the Application with PDF Viewer

```bash
npx nx serve pdf-viewer-app
```

The Syncfusion PDF Viewer loads with toolbar, annotations, and navigation enabled.

Navigate to `http://localhost:4200` in your browser. You should see:

- The application header
- A fully functional PDF Viewer with toolbar
- Features: zoom, search, print, annotations, and more

---

## Step 8: Explanation (Architecture Notes)

- Nx uses `project.json` instead of `angular.json`
- Standalone components reduce NgModule complexity
- Syncfusion PDF Viewer works entirely on the client side (CSR)
- This setup scales for enterprise mono-repos

---

### Key Points

- **Nx uses `project.json`** instead of `angular.json` for app configuration
- **Standalone components** reduce NgModule complexity and improve tree-shaking
- **Syncfusion PDF Viewer works on client-side (CSR)** and doesn't require SSR
- **Dependencies are shared** across the entire workspace, reducing bundle size
- **Scalable for enterprise mono-repos** with multiple applications

---

## Common Nx Commands

Run these commands to build, serve, and manage your application:

```bash
# Serve the application in development mode
npx nx serve pdf-viewer-app

# Build the application for production
npx nx build pdf-viewer-app

# Display project configuration
npx nx show project pdf-viewer-app

# Run linting checks
npx nx lint pdf-viewer-app

# Execute unit tests
npx nx test pdf-viewer-app
```

---

## Troubleshooting

### Issue: Toolbar not visible

**Solution:**
- Ensure all Syncfusion CSS imports are included in `src/styles.css`
- Check browser console (F12) for any CSS loading errors
- Verify all services are included in the `providers` array of the component

### Issue: PDF document not loading

**Solution:**
- Verify the `documentPath` URL is accessible and CORS-enabled
- Check that `resourceUrl` points to the correct CDN version
- Confirm the PDF file exists at the specified location

### Issue: Component not rendering

**Solution:**
- Ensure `PdfViewerModule` is imported in the component's `imports` array
- Check that `@syncfusion/ej2-angular-pdfviewer` is installed: `npm list @syncfusion/ej2-angular-pdfviewer`
- Verify the development server is running without errors

---

[View Sample on GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples)

## See Also

- [Syncfusion Angular PDF Viewer Documentation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/overview)
- [Nx Documentation](https://nx.dev/docs)
- [Angular Standalone Components Guide](https://v17.angular.io/docs)
- [Nx Angular Plugin](https://nx.dev/nx-api/angular)
