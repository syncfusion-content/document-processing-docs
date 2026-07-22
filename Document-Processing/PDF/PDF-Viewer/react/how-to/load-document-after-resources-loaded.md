---
layout: post
title: Load a Document After PDFium Resources Are Ready | Syncfusion
description: Learn how to load a PDF only after assets are ready in the Syncfusion React PDF Viewer (Standalone) using the resourcesLoaded event.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Ensure PDFium resources are ready before loading PDFs

When using the Standalone PDF Viewer, the component downloads the PDFium runtime assets (scripts/wasm) from the path specified in `resourceUrl`. Calling `load()` before those assets are ready can fail with a "PDFium not initialized" error or silently leave the viewer blank. Use the `resourcesLoaded` event to defer document loading until all required assets are ready.

## When does resourcesLoaded trigger?

The `resourcesLoaded` event fires once the viewer finishes loading all required PDFium assets. At this point, it is safe to call the `load` method to open a document (by URL or Base64). The event fires for the viewer's asset-load life cycle, not for every document load, so you can call `load` again later (for example, in response to a user action) without waiting for the event.

## How to load a document after resourcesLoaded

- Set the `resourceUrl` to a valid PDF Viewer assets path (CDN or a hosted path).
- Listen to resourcesLoaded and call load inside the handler.

```js
//index.js
import React, { useRef, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection,
  Annotation,
  FormDesigner,
  FormFields,
  PageOrganizer,
  Inject
} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  // viewerRef is a stable ref; it does not need to be a useCallback dependency.
  const viewerRef = useRef(null);

  const onResourcesLoaded = useCallback(() => {
    // PDFium assets are ready; it is safe to call load() now.

    // 1) Load by URL (recommended for your case)
    viewerRef.current?.load(
      'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      ''
    );

    // 2) Load by Base64 (uncomment to use).
    // const base64 = 'data:application/pdf;base64,JVBERi0xLjMNCiXi48...';
    // if (base64) {
    //   viewerRef.current?.load(base64, '');
    // }
  }, []);

  return (
    <div style={{ height: 640 }}>
      <PdfViewerComponent
        id="pdfViewer"
        ref={viewerRef}
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        resourcesLoaded={onResourcesLoaded}
        style={{ display: 'block', height: '100%' }}
      >
        <Inject
          services={[
            Toolbar,
            Magnification,
            Navigation,
            LinkAnnotation,
            ThumbnailView,
            BookmarkView,
            TextSelection,
            Annotation,
            FormDesigner,
            FormFields,
            PageOrganizer
          ]}
        />
      </PdfViewerComponent>
    </div>
  );
}

// Mount the app (make sure you have <div id="sample"></div> in index.html).
const container = document.getElementById('sample');
const root = createRoot(container);
root.render(<App />);
```

[View Sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to)

## Notes and best practices

- Always set a valid `resourceUrl` when using the Standalone PDF Viewer. If the path is incorrect, the event will not fire and `load()` will fail.
- If the assets CDN is blocked by the network, the event will not fire. Allowlist the asset host (and the document URL host, when applicable) in CORS and CSP settings.
- Load documents inside `resourcesLoaded` to guarantee that the PDFium runtime is ready and to prevent intermittent errors on slower networks.

## See also

- [Events in React PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/events)
- [Open PDF files](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/open-pdf-files)
- [Save PDF files](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/save-pdf-files)
- [Getting started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started)
