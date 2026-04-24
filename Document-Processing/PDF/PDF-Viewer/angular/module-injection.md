---
layout: post
title: Module Injection for Angular PDF Viewer | Syncfusion
description: This guide explains how to inject required modules in the Syncfusion Angular PDF Viewer to enable optional features like toolbar, annotations, navigation, and search.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Module Injection in Angular PDF Viewer

To customize the **Angular PDF Viewer** with specific features, you must import and inject the required modules. The PDF Viewer provides the following services to enable its functionalities.

## Available modules

* `LinkAnnotationService`: Enables hyperlink navigation.
* `BookmarkViewService`: Displays and navigates document bookmarks.
* `MagnificationService`: Provides zoom in/out operations.
* `NavigationService`: Enables page navigation.
* `TextSelectionService`: Enables text selection.
* `ThumbnailViewService`: Displays page thumbnails for navigation.
* `ToolbarService`: Enables the built-in toolbar UI.
* `PrintService`: Enables printing.
* `AnnotationService`: Enables annotation features.
* `TextSearchService`: Enables text search.
* `FormFieldsService`: Enables form field support.
* `FormDesignerService`: Enables designing and editing of form fields.
* `PageOrganizerService`: Enables page organization features.

---

## Module injection

The required modules should be injected into the PDF Viewer using the **`providers`** section of the Angular component, as shown below. Only the injected module functionalities will be loaded and available in the PDF Viewer.

**src/app/app.ts**

```ts
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  NavigationService,
  MagnificationService,
  TextSelectionService,
  TextSearchService,
  AnnotationService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    NavigationService,
    MagnificationService,
    TextSelectionService,
    TextSearchService,
    AnnotationService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      style="height: 640px; display: block">
    </ejs-pdfviewer>
  `
})
export class AppComponent {}
```

---

## Important notes

- Inject **only the required modules** to reduce bundle size and improve performance.
- Module injection applies to **both standalone and server-backed modes**.
- If a feature is used without injecting its corresponding module, the PDF Viewer will throw a runtime error and fail to render the feature.
