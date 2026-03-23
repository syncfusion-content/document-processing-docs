---
layout: post
title: Migrating from Nutrient.io (PSPDFKit) to React PDF Viewer | Syncfusion
description: Learn here all about how to migrate from Nutrient.io (PSPDFKit) to Syncfusion React PDF Viewer and Component
platform: document-processing
documentation: ug
control: PDF Viewer
---

# Migrating from Nutrient Web SDK (PSPDFKit) to Syncfusion React PDF Viewer

This guide helps you migrate applications built using **Nutrient Web SDK (formerly PSPDFKit Web SDK)** to the **Syncfusion React PDF Viewer**. It outlines architectural differences, feature mapping, and required changes in a React-based application.

## Overview

Nutrient Web SDK (PSPDFKit) provides a powerful Web SDK for PDF viewing and editing, typically integrated via an SDK initialization model backed by WebAssembly-based rendering.

Syncfusion React PDF Viewer offers a **declarative React component** with built-in UI, annotations, form handling, and optimized performance, without requiring WebAssembly or external cloud services.

## Architectural Comparison

| Aspect | Nutrient Web SDK (PSPDFKit) | Syncfusion React PDF Viewer |
|------|------------------------|-----------------------------|
| Integration Model | SDK initialization | Declarative React component |
| Rendering Engine | WebAssembly | Internal optimized engine |
| UI Composition | SDK-provided UI | Built-in toolbar with services |
| Feature Enablement | Configuration & APIs | Service injection |
| Deployment | Self-hosted / cloud | Fully self-hosted |

## Installation

### Nutrient Web SDK (PSPDFKit / Nutrient)

The Nutrient Web SDK can be used via CDN or installed as a package. The CDN exposes `window.NutrientViewer` and is a quick way to try the SDK; for production you may prefer the package manager installation.

```bash
# CDN: add the script tag to `index.html` (example version shown)
<!-- <script src="https://cdn.cloud.nutrient.io/pspdfkit-web@1.13.0/nutrient-viewer.js"></script> -->

# or install the package for local use
npm install @nutrient-sdk/viewer
```

### Syncfusion React PDF Viewer

```bash
npm install @syncfusion/ej2-react-pdfviewer
```

## Viewer Initialization Comparison

### Nutrient Web SDK (CDN example)

```jsx
import { useEffect, useRef } from 'react';

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const { NutrientViewer } = window;
    if (container && NutrientViewer) {
      NutrientViewer.load({
        container,
        // document can be a URL or a file in `public/`
        document: 'https://www.nutrient.io/downloads/nutrient-web-demo.pdf',
      });
    }

    return () => {
      NutrientViewer?.unload(container);
    };
  }, []);

  return (
    // Ensure explicit width/height on the container
    <div ref={containerRef} style={{ height: '100vh', width: '100vw' }} />
  );
}

export default App;
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
  Inject,
} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  return (
    <PdfViewerComponent
      id="container"
      documentPath="sample.pdf"
      style={{ height: '640px' }}
    >
      <Inject
        services={[
          Toolbar,
          Magnification,
          Navigation,
          Annotation,
          TextSearch,
          FormFields,
        ]}
      />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
```

## Feature Mapping

| Feature | Nutrient Web SDK (PSPDFKit) | Syncfusion Viewer |
|------|------------------------|------------------|
| Page Navigation | Supported | Supported |
| Zoom & Fit | Supported | Supported |
| Text Selection & Search | Supported | Supported |
| Annotations | Supported | Supported |
| Form Filling | Supported | Supported |
| Advanced Editing / Redaction | Supported | Not supported |

## Event Handling

### Nutrient Web SDK

```js
instance.addEventListener('documentLoaded', () => {
  console.log('Document loaded');
});
```

### Syncfusion Viewer

```jsx
<PdfViewerComponent
  documentLoad={() => console.log('Document loaded')}
  pageChange={(args) => console.log(args.currentPage)}
/>
```

## Performance & Deployment

- Runs entirely in the browser
- No WebAssembly or proprietary runtime required
- Optimized for large PDFs in standalone mode
- Well-suited for self-hosted and on‑premises deployments


## Migration Checklist

- Remove PSPDFKit SDK initialization logic
- Replace DOM-based SDK mounting with PdfViewerComponent
- Map annotation and form workflows to injected services
- Verify feature parity and licensing requirements

## How-to: minimal migration steps

Follow these concise steps to migrate a Nutrient integration to `PdfViewerComponent`.

- Ensure the Nutrient container has explicit dimensions before replacing it.
- Replace the `NutrientViewer.load()` mount with a React `PdfViewerComponent` as shown below.

Minimal file difference (before → after)

Before (e.g., `src/viewers/NutrientViewer.js`):

```js
// CDN usage or package: mounting into a DOM node
import { useEffect, useRef } from 'react';

function OldViewer() {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    const { NutrientViewer } = window;
    NutrientViewer?.load({ container, document: '/sample.pdf' });
    return () => NutrientViewer?.unload(container);
  }, []);
  return <div ref={containerRef} style={{ height: 600 }} />;
}
```

After (e.g., `src/components/PdfViewer.js`):

```jsx
import React from 'react';
import { PdfViewerComponent, Toolbar, Inject } from '@syncfusion/ej2-react-pdfviewer';

export default function PdfViewer() {
  return (
    <PdfViewerComponent id="pdfViewer" documentPath="/sample.pdf" style={{ height: 600 }}>
      <Inject services={[Toolbar]} />
    </PdfViewerComponent>
  );
}
```

## API mapping: Nutrient → Syncfusion

| Nutrient Web SDK | Syncfusion React PDF Viewer |
|---|---|
| `NutrientViewer.load({ container, document })` | Use `<PdfViewerComponent documentPath="..." />` or `load()` for programmatic loads. |
| `NutrientViewer.unload(container)` | `unload()` / component unmount; call `viewerRef.current.unload()` if using ref API. |
| Viewer-level events (document loaded, page change) | `documentLoad`, `pageChange`, `pageRenderComplete` events on `PdfViewerComponent`. |
| Annotations API (add/serialize) | `addAnnotation()`, `importAnnotation()`, `exportAnnotation()`, `exportAnnotationsAsBase64String()`. |
| Search API | Enable `enableTextSearch` or use `extractText()` for programmatic extraction. |

## See Also

- [Apryse WebViewer Getting Started](https://www.nutrient.io/sdk/web/getting-started/react-vite/)
- [Syncfusion React PDF Viewer Getting Started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started)
