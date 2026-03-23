---
layout: post
title: Migrating from Apryse to Syncfusion React PDF Viewer | Syncfusion
description: Learn here all about how to migrate from Apryse WebViewer (PDFTron) to Syncfusion React PDF Viewer and Component
platform: document-processing
documentation: ug
control: PDF Viewer
---

# Migrating from Apryse WebViewer to Syncfusion React PDF Viewer

This guide assists developers in migrating applications built with [Apryse WebViewer](https://docs.apryse.com/web/guides/get-started/react)(formerly PDFTron WebViewer) to the [Syncfusion React PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started). It focuses on architectural differences, feature mapping, and required changes in a React environment.

## Overview

Apryse WebViewer is a feature-rich PDF SDK that relies on a modular JavaScript API and WebAssembly-based rendering engine.

Syncfusion React PDF Viewer provides a **native React component-based PDF viewing experience** with built-in UI, annotations, forms, and performance optimizations—without requiring WebAssembly or external cloud services.

## Key Architectural Differences

| Aspect | Apryse WebViewer | Syncfusion React PDF Viewer |
|------|-----------------|-----------------------------|
| Integration Model | JS SDK initialization | Declarative React component |
| Rendering Engine | WebAssembly | Internal optimized engine |
| UI | Configurable UI modules | Built-in toolbar via services |
| Feature Enablement | API-based | Service injection | 
| Deployment | Self-hosted / cloud | Fully self-hosted |

## Installation

### Apryse WebViewer

```bash
npm install @pdftron/webviewer
```

### Syncfusion React PDF Viewer

```bash
npm install @syncfusion/ej2-react-pdfviewer
```

## Viewer Initialization Comparison

### Apryse WebViewer

```js
import WebViewer from '@pdftron/webviewer';

WebViewer({
  path: '/lib',
  initialDoc: 'sample.pdf'
}, document.getElementById('viewer'))
.then(instance => {
  const { documentViewer, annotationManager } = instance.Core;
});
```

### Syncfusion React PDF Viewer

```jsx
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
    PdfViewerComponent,
    Toolbar,
    Magnification,
    Navigation,
    Annotation,
    TextSearch,
    FormFields,
    Inject
} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
    return (
        <PdfViewerComponent
            id="container"
            documentPath="sample.pdf"
            style={{ height: '640px' }}
        >
            <Inject services={[
                Toolbar,
                Magnification,
                Navigation,
                Annotation,
                TextSearch,
                FormFields
            ]} />
        </PdfViewerComponent>
    );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
```

## Feature Mapping

| Feature | Apryse WebViewer | Syncfusion Viewer |
|------|-----------------|------------------|
| Page Navigation | Built-in | Built-in |
| Zoom & Fit | Built-in | Built-in |
| Text Search | Built-in | Built-in |
| Annotations | Built-in | Built-in |
| Form Fields | Built-in | Built-in |
| Redaction / Advanced Editing | Available (licensed) | Not supported |

## Event Handling

### Apryse

```js
documentViewer.addEventListener('documentLoaded', () => {
  console.log('Document loaded');
});
```

### Syncfusion

```jsx
<PdfViewerComponent
  documentLoad={() => console.log('Document loaded')}
/>
```

## Performance & Deployment

- Syncfusion PDF Viewer works entirely in the browser
- No WebAssembly or external runtime dependencies
- Optimized for large PDFs in standalone mode
- Suitable for self-hosted and on-premises deployments

## Migration Checklist

- Remove WebViewer initialization and DOM-based mounting
- Replace Apryse APIs with PdfViewerComponent configuration
- Map annotation and form workflows to built-in services
- Re-validate licensing and feature availability

## Tutorial: quick migration recipe

Follow these concise steps to replace an Apryse WebViewer integration with `PdfViewerComponent`.

1) Prepare the project

- Keep a working branch and add simple checks for current behavior (open document, navigate pages, annotation toggle).
- Install Syncfusion React PDF Viewer:

```bash
npm install @syncfusion/ej2-react-pdfviewer
```

2) Add required CSS and resources

Add the Syncfusion CSS imports to your global stylesheet (e.g., `src/index.css`) and decide whether to use the CDN `resourceUrl` or host `ej2-pdfviewer-lib` locally in `public/`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-pdfviewer/styles/material.css';
```

To host local resources, copy:

```bash
cp -R ./node_modules/@syncfusion/ej2-pdfviewer/dist/ej2-pdfviewer-lib public/ej2-pdfviewer-lib
```

3) Replace initialization

- Apryse mounts a WebViewer instance into a DOM element; replace that mount with a React `PdfViewerComponent`. Move configuration options into `PdfViewerComponent` props and inject only required services.

4) Migrate features incrementally

- Start with basic viewing (document load, page navigation), then add search, annotations, and forms.
- For each feature, map the Apryse API usage to the Syncfusion method/event (see API mapping below), update back-end persistence for annotations if needed, and run the smoke checks.

Minimal file difference (before → after)

This small, copy-paste difference shows a single-file replacement pattern: remove the WebViewer DOM mount and replace with a React component that uses `PdfViewerComponent`.

Before (e.g., `src/viewers/OldWebViewer.js`):

```js
import WebViewer from '@pdftron/webviewer';

WebViewer({
  path: '/lib',
  initialDoc: 'sample.pdf'
}, document.getElementById('viewer'))
.then(instance => {
  const { documentViewer, annotationManager } = instance.Core;
  // existing custom wiring
});
```

After (e.g., `src/components/PdfViewer.jsx`):

```jsx
import React from 'react';
import { PdfViewerComponent, Toolbar, Inject } from '@syncfusion/ej2-react-pdfviewer';

export default function PdfViewer() {
  return (
    <PdfViewerComponent
      id="pdfViewer"
      documentPath="/assets/sample.pdf"
      resourceUrl="/assets/ej2-pdfviewer-lib"
      style={{ height: '700px' }}
    >
      <Inject services={[Toolbar]} />
    </PdfViewerComponent>
  );
}
```

## API mapping: Apryse WebViewer → Syncfusion equivalents

| Apryse WebViewer | Syncfusion React PDF Viewer |
|---|---|
| `WebViewer({ path, initialDoc }, element)` | Use `<PdfViewerComponent documentPath="..." resourceUrl="..." />` and `load()` for programmatic loads. |
| `instance.Core.documentViewer` (page events) | `pageRenderInitiate`, `pageRenderComplete`, `pageChange`, `documentLoad` events. |
| `annotationManager` (add/serialize annotations) | `addAnnotation()`, `importAnnotation()`, `exportAnnotation()`, `exportAnnotationsAsBase64String()` methods and `annotationAdd` event. |
| `documentViewer.getAnnotationManager()` | Use `PdfViewerComponent` methods for annotations and `annotation*` events. |
| Custom UI modules | Use the `Toolbar` service or `ToolbarComponent` for custom toolbar items and handle `toolbarClick`. |
| Text search APIs | Enable `enableTextSearch` or call `extractText()` for programmatic text extraction. |
| Form field APIs | Use `formField*` events: `formFieldClick`, `validateFormFields`, `retrieveFormFields`, `exportFormFieldsAsObject`. |
| Print / Export modules | `download()` and Print service. |

## Expanded Migration Checklist (concrete actions)

- Create a migration branch and add simple smoke tests for: document load, page navigation, text search, add annotation, and download.
- Remove `@pdftron/webviewer` initialization and related DOM-manipulation code.
- Install and import `@syncfusion/ej2-react-pdfviewer` and required CSS.
- Replace the DOM mount with a React component: create `PdfViewer.jsx` / `PdfViewer.tsx` and update app routes.
- Add `resourceUrl` configuration or copy `ej2-pdfviewer-lib` into `public/` for local hosting.
- Inject only necessary services (e.g., `Toolbar`, `Annotation`, `FormFields`, `TextSearch`) to limit bundle size.
- Migrate event handlers:
  - Apryse `documentLoaded` → Syncfusion `documentLoad`.
  - Apryse page render callbacks → `pageRenderComplete` and `pageRenderInitiate`.
  - Apryse annotation events → Syncfusion `annotationAdd`, `annotationRemove`, etc.
- Migrate annotation persistence: adapt serialization format or use Syncfusion export/import helpers.
- Migrate form workflows to Syncfusion `formField` events and verify validation hooks.
- Replace any WebViewer-specific custom UI with Syncfusion toolbar/custom toolbar items and `toolbarClick` handling.
- Test thoroughly on supported browsers and performance with large PDFs.
- Remove obsolete tests and code paths tied to Apryse.

## Reference: key Syncfusion `PdfViewerComponent` methods & events

- `load(document: string | Uint8Array, password?: string)` — programmatically load a PDF.
- `download()` — trigger download of current document.
- `addAnnotation(annotation: any)` — add an annotation programmatically.
- `exportAnnotation(annotationDataFormat)` / `exportAnnotationsAsBase64String()` — export annotations for persistence.
- `extractText(pageIndex: number, options?: any): Promise` — extract text and coordinates.
- Events: `documentLoad`, `pageRenderComplete`, `pageChange`, `annotationAdd`, `annotationRemove`, `toolbarClick`.

## See Also

- [Apryse WebViewer Getting Started](https://docs.apryse.com/web)
- [Syncfusion React PDF Viewer Getting Started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started)