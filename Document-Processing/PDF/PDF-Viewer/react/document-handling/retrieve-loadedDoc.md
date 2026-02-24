---
layout: post
title: Retrieve the Loaded Document in React PDF Viewer | syncfusion
description: Learn how to access the loaded PDF document instance in the React PDF Viewer using refs and the documentLoad event.
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Retrieve the Loaded Document Instance in React PDF Viewer

This page explains how to access the React PDF Viewer instance using a React ref, listen for the [`documentLoad`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#documentload) life-cycle event, and retrieve document information, page details, and metadata—so you can safely invoke viewer APIs after the PDF is loaded.

---

## Explanation: Why access the loaded document instance?

- The viewer instance (via **React ref**) gives you a stable handle to call APIs such as [`zoom`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/magnification), [`print`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/print), [`download`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/download), and [`navigation`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/navigation).
- The **document load event** (fires after the PDF is parsed and pages are ready) is the correct moment to read **document information** (title, author, page count, etc.) and **page metrics**, and to trigger post‑load UI logic.
- Accessing the instance too early (before load completes) may cause null/undefined errors or incomplete information.

---

## Reference: What you can access/call after load

After the PDF is loaded you can:

- **Read document information**: title, author, subject, keywords (metadata), page count.
- **Read page details**: total pages, current page, page size(s).
- **Call Viewer APIs** (typical examples):
  - **Zoom / Fit**: `zoomTo(125)`; fit to page/width
  - **Navigation**: go to a specific page
  - **Interactions**: enable/disable features (based on injected services)
  - **Export**: `download()`, `print()`

> Always invoke these after the `documentLoad` event fires, or from user actions that occur after load. Guard calls with optional chaining or readiness flags.

---

## How‑to: Get the instance with a ref and read details on load

Below is a focused snippet showing:
1) Creating a **ref** for the viewer,
2) Wiring the **`documentLoad`** event, and
3) Reading basic **document info** and **page count**, then calling **viewer APIs** safely.

```jsx
import * as ReactDOM from 'react-dom/client';
import * as React from 'react';
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Print,
  Inject,
} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewerRef = React.useRef(null);

  // Fires after the PDF is fully loaded and ready
  const onDocumentLoad = (args) => {
     // 1) Access the component instance
    const viewer = viewerRef.current;
    if (!viewer) return;

    // 2) Read loaded document details (shape depends on event payload/version)
    console.log('documentLoad args:', args);

    // 4) Call viewer APIs (after load)
    const pageCount =
      (viewer && viewer.pageCount) ||
      (args && args.pageCount) ||
      '(unknown)';
    const documentName = (args && args.documentName) || '(unnamed)';
    console.log(`Loaded: ${documentName}, pages: ${pageCount}`);

    // Safe API calls after load
    viewer.magnification.zoomTo(200);
    viewer.navigation.goToPage(5);
  };

  return (
    <div className="control-section">
      <PdfViewerComponent
        id="container"
        ref={viewerRef}
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ height: '640px' }}
        enableLocalStorage={true}
        documentLoad={onDocumentLoad}
      >
        <Inject services={[Toolbar, Magnification, Navigation, Print]} />
      </PdfViewerComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
```

**Notes**
- The event name is `documentLoad` (the callback receives load args).
- The exact event args and public methods available on the component may vary with the package version and injected services. Use `console.log(args)` once to see what’s present in your build.
- Always guard calls with optional chaining (e.g., `viewer?.magnification?.zoomTo(125)`).

---

## Tutorial: End‑to‑End — Read metadata & call APIs after load

This example demonstrates a complete flow:
- Setting up a **viewer ref**
- Subscribing to `documentLoad`
- Extracting **metadata** and **pages**
- Exposing **buttons** to call viewer APIs only after load

```jsx
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  PdfViewerComponent,
  Inject,
  Toolbar,
  Magnification,
  Navigation,
  Print,
  TextSelection,
  TextSearch,
} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewerRef = React.useRef(null);
  const [ready, setReady] = React.useState(false);
  const [docInfo, setDocInfo] = React.useState({ name: '', pageCount: undefined, author: '', title: '' });

  const handleDocumentLoad = (args) => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    console.log('documentLoad args:', args);

    const info = {
      name: args && args.documentName,
      pageCount: (viewer && viewer.pageCount) || (args && args.pageCount),
      author: args && args.documentInformation && args.documentInformation.author,
      title: args && args.documentInformation && args.documentInformation.title,
    };
    setDocInfo(info);

    // Defer just a tick to ensure layout/modules ready before calling APIs
    requestAnimationFrame(() => {
      try {
        if (viewer && viewer.magnification && viewer.magnification.zoomTo) {
          viewer.magnification.zoomTo(150); // default zoom after load
        }
        if (viewer && viewer.navigation && viewer.navigation.goToPage) {
          const targetPage = 1; // keep within bounds if you want to guard
          if (!info.pageCount || targetPage <= info.pageCount) {
            viewer.navigation.goToPage(targetPage);
          }
        }
      } catch (e) {
        console.warn('Post-load actions failed:', e);
      } finally {
        setReady(true);
      }
    });
  };

  // ---- UI action handlers (module APIs) ----
  const zoomTo = (percent) => {
    const viewer = viewerRef.current;
    try {
      viewer && viewer.magnification && viewer.magnification.zoomTo && viewer.magnification.zoomTo(percent);
    } catch (e) {
      console.warn('zoomTo failed:', e);
    }
  };

  const goTo = (page) => {
    const viewer = viewerRef.current;
    try {
      viewer && viewer.navigation && viewer.navigation.goToPage && viewer.navigation.goToPage(page);
    } catch (e) {
      console.warn('goToPage failed:', e);
    }
  };

  const printDoc = () => {
    const viewer = viewerRef.current;
    try {
      viewer && viewer.print && viewer.print.print();
    } catch (e) {
      console.warn('print failed:', e);
    }
  };

  const downloadDoc = () => {
    const viewer = viewerRef.current;
    try {
      viewer && viewer.download && viewer.download();
    } catch (e) {
      console.warn('download failed:', e);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        <strong>Status:</strong> {ready ? 'Document loaded' : 'Loading…'}
        <br />
        {ready && (
          <>
            <div>File: {docInfo.name || '(unknown)'}</div>
            <div>Pages: {docInfo.pageCount != null ? docInfo.pageCount : '(unknown)'}</div>
            <div>Author: {docInfo.author || '(n/a)'}</div>
            <div>Title: {docInfo.title || '(n/a)'}</div>
          </>
        )}
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
        <button onClick={() => zoomTo(100)} disabled={!ready}>Zoom 100%</button>
        <button onClick={() => zoomTo(150)} disabled={!ready}>Zoom 150%</button>
        <button onClick={() => goTo(1)} disabled={!ready}>Go to Page 1</button>
        <button onClick={() => goTo(5)} disabled={!ready}>Go to Page 5</button>
        <button onClick={printDoc} disabled={!ready}>Print</button>
        <button onClick={downloadDoc} disabled={!ready}>Download</button>
      </div>

      <div style={{ height: '80vh' }}>
        <PdfViewerComponent
          id="pdfViewer"
          ref={viewerRef}
          // If you use a server for rendering, set it here:
          // serviceUrl="https://your-server/api/pdfviewer"

          // For quick local run, use a public sample:
          documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"

          // If you're running purely client-side, make sure resourceUrl matches your package version:
          // resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
          resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
          documentLoad={handleDocumentLoad}
          style={{ height: '100%', width: '100%' }}
        >
          <Inject services={[Toolbar, Magnification, Navigation, Print, TextSelection, TextSearch]} />
        </PdfViewerComponent>
      </div>
    </div>
  );
}

// Render like your previous example (ensure an element with id="sample" exists in index.html)
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
```

---

## See also
- React PDF Viewer – [API Reference](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default) ([methods](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#methods), [events](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#events), [properties](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#properties))
- Events: [`documentLoad`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#documentload) and related argument shape (check your package version)
- [Modules and Services](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/feature-module) (e.g., Magnification, Navigation, Print) — ensure the features you call are injected
