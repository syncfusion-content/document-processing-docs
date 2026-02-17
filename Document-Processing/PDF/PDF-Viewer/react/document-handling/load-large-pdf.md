---
layout: post
title: Document Handling in React Pdfviewer component | Syncfusion
description: This page helps you to learn about how to Open PDF from URL, Base64, Blob, Stream, Cloud storage in Syncfusion React Pdfviewer component.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Handling Large PDF Files in React PDF Viewer

This article explains why large PDF files require special handling in web applications and provides best practices for loading and displaying them efficiently in the Syncfusion React PDF Viewer.

---

## Explanation: Why Large PDFs Need Special Handling

Large PDF files (typically 50MB–100MB or more) can cause high memory usage and performance issues in browsers. Browsers may become unresponsive or crash when attempting to load or render very large documents, especially if inefficient loading methods are used.

---

## How-to Guide: Best Ways to Load Large PDFs

Follow these recommendations to optimize the loading and viewing experience for large PDF files:

### 1. Load from Blob (Recommended)

If you fetch the PDF from a custom API or server, use the Blob approach. This avoids base64 encoding overhead and is more memory-efficient.

```js
fetch('https://your-api/large-file.pdf')
    .then((response) => response.blob())
    .then((blob) => {
        const blobUrl = URL.createObjectURL(blob);
        viewer.load(blobUrl, null); // Load using blob URL
    })
    .catch((error) => {
        console.error('Error loading PDF:', error);
    });
```

### 2. Avoid Base64 for Large Files

Base64 encoding increases file size by ~33% and consumes more memory. For large PDFs, always prefer Blob or direct URL loading over base64.

### 3. Minimize Injected Modules

Reduce the number of injected modules in the PDF Viewer to lower background processing and memory usage. For large files, avoid modules like:
- Text Search
- Text Selection
- Organize Pages
- Thumbnail View

**Example:**
```tsx
<PdfViewerComponent
	id="container"
	documentPath={...}
	serviceUrl={...}
	style={{ height: '640px' }}
>
	<Inject services={[Toolbar, Magnification, Navigation, Print]} />
</PdfViewerComponent>
```

### 4. Enable Local Storage for Performance

Enabling local storage in the PDF Viewer can improve performance and smoothness when working with large files. This allows the viewer to cache document data locally, reducing repeated network requests and memory spikes.

Use the `enableLocalStorage` property to control this behavior. When set to `true`, session data is stored in memory for the current session; when `false` (default), browser session storage is used.

**Example:**
```tsx
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, Print, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
	return (
		<div className='control-section'>
			<PdfViewerComponent
				id="container"
				documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
				resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
				style={{ height: '640px' }}
				enableLocalStorage={true}
			>
				<Inject services={[Toolbar, Magnification, Navigation, Print]} />
			</PdfViewerComponent>
		</div>
	);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
```

**Considerations:**
- Enabling in-memory storage can increase memory usage, especially for large documents or many interactive elements.
- Dispose the PDF Viewer instance when not needed to avoid memory leaks.
- The default value is `false` (browser session storage).

---

## Reference

- [React PDF Viewer API Reference](https://ej2.syncfusion.com/react/documentation/api/pdfviewer)
- [FAQ in Syncfusion React PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/how-to-overview)

---

## See Also

- [Load PDF (GitHub Sample)](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/Save%20and%20Load)
- [General PDF Viewer Documentation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started)
