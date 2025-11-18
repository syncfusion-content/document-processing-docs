---
layout: post
title: Load document after resources Loaded React PDF Viewer | Syncfusion
description: Learn how to load a PDF only after assets are ready in the Syncfusion React PDF Viewer (Standalone) using the resourcesLoaded event.
platform: document-processing
control: PDF Viewer 
documentation: ug
domainurl: ##DomainURL##
---

# Load a PDF only after PDFium resources are ready

In Standalone mode, the React PDF Viewer downloads its PDFium runtime assets (scripts/wasm) from the location specified in resourceUrl. Attempting to load a document before those assets are available can cause errors. Use the resourcesLoaded event to defer document loading until all required assets are ready.

## When does resourcesLoaded trigger?

The resourcesLoaded event fires once the viewer finishes loading all required PDFium assets. At this point, it is safe to call the load method to open a document (by URL or Base64).

## How to Load Document after resourcesLoaded

- Set the resourceUrl to a valid PDF Viewer assets path (CDN or your hosted path).
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
  const viewerRef = useRef(null);

  const onResourcesLoaded = useCallback(() => {
    // Choose ONE of the following load options:

    // 1) Load by URL (recommended for your case)
    viewerRef.current?.load(
      'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      ''
    );

    // 2) Load by Base64 (uncomment if needed)
    // supply your Base64 string
    // const base64 ='data:application/pdf;base64,JVBERi0xLjMNCiXi48...';

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

// Mount (make sure you have <div id="sample"></div> in index.html)
const container = document.getElementById('sample');
const root = createRoot(container);
root.render(<App />);
```

[View Sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to)

## Notes and best practices

- Always set a valid resourceUrl when using the Standalone PDF Viewer. If the path is incorrect or blocked by the network, the event cannot fire.
- Load documents inside resourcesLoaded. This guarantees the PDFium runtime is ready and prevents intermittent errors on slower networks.
- The event fires for the viewer’s asset load lifecycle, not for every document load. After it fires once, you can safely call load again later (for example, in response to user actions) without waiting for the event.

## See also

- [Events in React PDF Viewer](../events/#resourcesloaded)
- [Open PDF files](../open-pdf-files)
- [Save PDF files](../save-pdf-files)
- [Getting started](../getting-started)
