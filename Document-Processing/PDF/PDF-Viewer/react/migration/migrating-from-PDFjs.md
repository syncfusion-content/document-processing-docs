---
layout: post
title: Migrating from PDF.js to Syncfusion React PDF Viewer | Syncfusion
description: Learn how to migrate from PDF.js to Syncfusion React PDF Viewer with this comprehensive guide covering architecture, features, and code changes.
platform: document-processing
documentation: ug
control: PDF Viewer
---

# Migrating from PDF.js to Syncfusion React PDF Viewer

This guide explains how to migrate an existing [PDF.js](https://mozilla.github.io/pdf.js/) implementation to the [Syncfusion React PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started), covering architectural differences, feature mapping, and required code changes.

## Overview

PDF.js is a low-level JavaScript library that focuses on rendering PDF pages using HTML canvas and requires developers to manually implement navigation, zooming, text selection, annotations, and UI controls.

Syncfusion React PDF Viewer is a **fully featured, high-level React component** that provides built-in rendering, UI, interaction tools, and performance optimizations out of the box.

## Key Differences

| Aspect | PDF.js | Syncfusion React PDF Viewer |
|------|-------|-----------------------------|
| Rendering | Manual canvas rendering | Automatic rendering |
| UI Controls | Custom implementation | Built-in toolbar |
| Text Selection | Manual text layer | Built-in |
| Annotations | Custom logic | Built-in |
| Forms | Limited | Built-in |
| Performance | Manual tuning | Optimized pipeline |

## Installation

### PDF.js

```bash
npm install pdfjs-dist
```

### Syncfusion React PDF Viewer

```bash
npm install @syncfusion/ej2-react-pdfviewer
```

## Rendering a PDF

### PDF.js Example

```js
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.getDocument('sample.pdf').promise.then(pdf => {
  pdf.getPage(1).then(page => {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const viewport = page.getViewport({ scale: 1.5 });
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    page.render({ canvasContext: context, viewport });
  });
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
    LinkAnnotation,
    BookmarkView,
    ThumbnailView,
    Print,
    TextSelection,
    Annotation,
    TextSearch,
    FormFields,
    FormDesigner,
    Inject
} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
    return (
        <div className="control-section">
            <PdfViewerComponent
                id="container"
                documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                style={{ height: '640px' }}
            >
                <Inject services={[
                    Toolbar,
                    Magnification,
                    Navigation,
                    Annotation,
                    LinkAnnotation,
                    BookmarkView,
                    ThumbnailView,
                    Print,
                    TextSelection,
                    TextSearch,
                    FormFields,
                    FormDesigner
                ]} />
            </PdfViewerComponent>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
```

## Toolbar and Navigation

- PDF.js requires manual toolbar and navigation logic
- Syncfusion provides a configurable toolbar with navigation, zoom, print, and download

## Text Search and Selection

- PDF.js: text layers and search logic must be implemented manually
- Syncfusion: built-in text selection and search UI

```jsx
<PdfViewerComponent enableTextSearch={true} />
```

## Annotations and Forms

| Feature | PDF.js | Syncfusion Viewer |
|------|------|------|
| Text Markup | Custom | Built-in |
| Shapes | Custom | Built-in |
| Form Fields | Limited | Built-in |
| Persistence | Manual | Supported |

## Event Handling

### PDF.js

```js
page.render().promise.then(() => console.log('Rendered'));
```

### Syncfusion Viewer

```jsx
<PdfViewerComponent
  documentLoad={() => console.log('Document loaded')}
  pageChange={(args) => console.log(args.currentPage)}
/>
```

## Performance Considerations

- Syncfusion PDF Viewer uses internal worker communication
- Handles large and complex PDFs efficiently
- No external cloud dependency required
  
## Tutorial: Step-by-step migration

This minimal tutorial shows a focused migration path from a canvas-based PDF.js renderer to the `PdfViewerComponent`.

1) Project preparations

- Remove existing `pdfjs-dist` usage from the components you will replace. Keep a working branch so you can compare behavior.
- Install Syncfusion React PDF Viewer:

```bash
npm install @syncfusion/ej2-react-pdfviewer
```

Add CSS references and local resources

Syncfusion PDF Viewer requires several CSS packages and (for local hosting) the `ej2-pdfviewer-lib` resources. Add the CSS imports to `src/index.css` and copy the `ej2-pdfviewer-lib` folder into your `public` directory if you host resources locally.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import "../node_modules/@syncfusion/ej2-pdfviewer/styles/material.css";
```

To host local resources, copy the `ej2-pdfviewer-lib` folder:

```bash
cp -R ./node_modules/@syncfusion/ej2-pdfviewer/dist/ej2-pdfviewer-lib public/ej2-pdfviewer-lib
```

Or set `resourceUrl` to the Syncfusion CDN (example shown later).

2) Replace the renderer component

- Before (file: `src/components/PdfCanvas.js` — simplified):

```js
import * as pdfjsLib from 'pdfjs-dist';

export default function PdfCanvas() {
    // existing canvas-based initialization and render loop
}
```

- After (file: `src/components/PdfViewer.jsx`):

```jsx
import React from 'react';
import {
    PdfViewerComponent,
    Toolbar,
    Navigation,
    Magnification,
    Inject
} from '@syncfusion/ej2-react-pdfviewer';

export default function PdfViewer() {
    return (
        <PdfViewerComponent
            id="pdfViewer"
            documentPath="/assets/sample.pdf"
            style={{ height: '700px' }}
        >
            <Inject services={[Toolbar, Navigation, Magnification]} />
        </PdfViewerComponent>
    );
}
```

3) Wire resources and service URLs

- If you previously used worker files for PDF.js, decide whether to use Syncfusion's CDN `resourceUrl` or host the Syncfusion library files yourself. Example:

```jsx
<PdfViewerComponent
    documentPath="/assets/sample.pdf"
    resourceUrl="https://cdn.syncfusion.com/ej2/latest/dist/ej2-pdfviewer-lib"
    style={{ height: '700px' }}
>
    <Inject services={[Toolbar, Navigation]} />
</PdfViewerComponent>
```

4) Migrate interactions and tests

- Replace manual navigation, zoom, and annotation calls with the corresponding `PdfViewerComponent` props and methods.
- Add simple integration checks: open a document, navigate to a page, add an annotation, search text, and save/export.

## API mapping: common PDF.js → Syncfusion equivalents

| PDF.js | Reason / Syncfusion equivalent |
|---|---|
| `pdfjsLib.getDocument(url).promise` | Document loading handled by `PdfViewerComponent` via `documentPath` or `load()` method. |
| `pdf.getPage(n)` | Viewer exposes page events and `getPageInfo(pageIndex)`; page lifecycle is surfaced via `pageRenderInitiate` / `pageRenderComplete` events. |
| `page.render({ canvasContext, viewport })` | Rendering is internal — replace with `PdfViewerComponent` rendering; no manual canvas drawing required. |
| `page.getTextContent()` | Use `extractText(pageIndex, options)` or enable `enableTextSearch`/`enableTextSelection` for built-in search/selection. |
| Custom toolbar buttons controlling canvas | Use `Toolbar` service, or add custom toolbar items and handle `toolbarClick` events. |
| Custom annotation storage | Use `addAnnotation`, `exportAnnotation`, `importAnnotation`, and `exportAnnotationsAsBase64String` methods. |
| Manual print/download flows | Use `download()` and built-in Print service. |
| Page render promise | Listen to `pageRenderComplete` / `documentLoad` events for lifecycle hooks. |

## Expanded Migration Checklist (concrete steps)

- Create a feature branch and add automated/manual smoke tests for existing PDF.js behavior.
- Remove `pdfjs-dist` import and any canvas DOM elements dedicated to PDF rendering.
- Add `@syncfusion/ej2-react-pdfviewer` to `package.json` and run `npm install`.
- Replace the rendering component file(s): create `PdfViewer.jsx` and migrate app routes/imports to use it.
- Ensure required CSS and assets are included (Syncfusion component styles are usually in the package or CDN). If you use a CDN `resourceUrl`, add it to `PdfViewerComponent` as `resourceUrl`.
- Inject only the services you need (Toolbar, Annotation, TextSearch, Forms) to keep bundle size minimal.
- Migrate event handlers:
    - PDF.js: `getDocument().then(...).then(page => page.render().promise.then(...))` → Syncfusion: `documentLoad`, `pageRenderComplete`, `pageChange` events.
    - For form interactions, map existing input handlers to `formField` events like `formFieldClick` and `validateFormFields`.
- Migrate search and text extraction to `enableTextSearch` and `extractText()` where required.
- Migrate annotations using `addAnnotation`, `importAnnotation`, and persistence APIs. Verify serialization format if you persist annotations to your backend.
- Update toolbar and UI to use `ToolbarComponent` or `PdfViewerComponent`'s built-in toolbar (toggling via `enableToolbar`).
- Test on target browsers and configurations; verify performance for large PDFs.
- Remove stale code paths and unit tests specific to PDF.js implementation.

N> To know more about available Features in Syncfusion React PDF Viewer. Check [PDF Viewer Key Features](../overview#key-features)

## Reference: key Syncfusion `PdfViewerComponent` methods & events

- `load(document: string | Uint8Array, password?: string)` — programmatically load a PDF.
- `download()` — trigger download of current document.
- `addAnnotation(annotation: any)` — add an annotation programmatically.
- `extractText(pageIndex: number, options?: any): Promise` — extract page text and optionally coordinates.
- Events: `documentLoad`, `pageRenderComplete`, `pageChange`, `annotationAdd`, `toolbarClick` — use to mirror app behaviors previously tied to PDF.js render promises.

## See Also

- [PDF.js Getting Started](https://mozilla.github.io/pdf.js/getting_started/)
- [Syncfusion React PDF Viewer Getting Started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started)
