---
layout: post
title: Fix document loading issues in v23.1+ for the React PDF Viewer component
description: Resolve document rendering failures in v23.1 or newer by calling dataBind before load, verifying source URLs, checking CORS and CSP, and confirming network connectivity in the React PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

## Document loading issues in version 23.1 or newer

If a PDF does not render in the viewer after upgrading to v23.1 or newer, use the checklist below to identify and resolve common causes. The most frequent fix is calling `dataBind()` before `load()` so data binding is initialized correctly in the newer lifecycle.

Example:

{% raw %}
```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, Inject } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {
  function documentLoad() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
    viewer.dataBind();
    viewer.load("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",null);
  }
  return (<div>
    <div className='control-section'>
     {/* Render the PDF Viewer */}
     <button onClick={documentLoad}>Load</button>
      <PdfViewerComponent
        ref={(scope) => { pdfviewer = scope; }}
        id="container"
        style={{ 'height': '640px' }}>
            <Inject services={[ Toolbar, Magnification, Navigation, LinkAnnotation, Annotation,
                                  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch]} />
      </PdfViewerComponent>
    </div>
  </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

```
{% endraw %}

Troubleshooting checklist (in order)

1. Initialization order: call `dataBind()` before `load()` (required in v23.1+). If using React refs, ensure the ref is available before calling these methods.
2. Verify the document source: confirm the `documentPath`, `serviceUrl`, or `resourceUrl` is correct and returns the expected content.
3. Network connectivity: confirm the browser can reach the document URL (check network tab for failed requests).
4. Console errors: inspect the browser console for CORS errors, 4xx/5xx responses, or runtime exceptions.
5. CORS configuration: for cross-origin `serviceUrl` or document URLs, ensure the server sets `Access-Control-Allow-Origin` and allows the `Authorization` header if used.
6. Content Security Policy: confirm CSP allows loading resources from the target origins (scripts, fonts, and media).
7. Version and cache: update to the latest PDF Viewer release and clear caches (browser/Service Worker) to rule out stale assets.
8. Server behavior: if the viewer uses a backend service, verify the service is running and returns correct responses for PDF requests.

React-specific notes

- Prefer using a React ref to access the `PdfViewerComponent` instance instead of `document.getElementById(...)` where possible: `const viewerRef = useRef(null);` then `<PdfViewerComponent ref={viewerRef} ... />` and call `viewerRef.current.dataBind()` / `viewerRef.current.load(...)` after the ref is initialized.
- If calling `dataBind()` and `load()` from lifecycle methods or hooks, ensure they run after the component mounts (for example in `useEffect` with the correct dependencies).

Following this checklist typically resolves document loading issues encountered after upgrading to v23.1 or newer.