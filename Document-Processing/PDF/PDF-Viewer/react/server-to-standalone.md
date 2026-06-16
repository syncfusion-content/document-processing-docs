---
layout: post
title: Migrate from Server-backed to Standalone React PDF Viewer | Syncfusion
description: Learn how to migrate your React PDF Viewer from server-backed to standalone mode. This guide shows step-by-step instructions and code examples.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Migrate from Server-backed to Standalone React PDF Viewer

This guide shows you how to migrate your React PDF Viewer from server-backed mode to standalone mode.

## Prerequisites

[System requirements for Syncfusion® React components](https://ej2.syncfusion.com/react/documentation/system-requirement)

## Key Differences: Server-backed vs. Standalone

Understanding the architectural difference will help you plan your migration:

| Aspect | Server-backed | Standalone |
|--------|---------------|-----------|
| **PDF Rendering** | Processed on the backend server using PDFium rendering engine | Processed entirely within the browser using PDFium rendering engine |
| **Required Services** | Requires a running web service in .NET application (`serviceUrl`) | Not required |
| **Resource Files** | handled by server using PDFium | Need to refer PDFium resources; loaded from `resourceUrl` (CDN or local) |
| **Deployment** | Backend server configuration + frontend sample level deployment | No configuation required, simple sample level deployment |
| **Performance** | Network latency for operations | Instant client-side rendering |
| **Scalability** | Limited by server capacity | Scales with client hardware |
| **New Features** | No new features after Vol 2 2026 | Receives ongoing updates |

## Migration Guide

### Replace the `serviceUrl` with `resourceUrl`

In your React component, remove or delete the [serviceUrl](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#serviceurl) property that points to your backend service.

**Before:**
```js
<PdfViewerComponent
  id="container"
  //Remove the serviceUrl
  serviceUrl="https://your-backend-server.com/api/pdfviewer"
  documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
  style={{ 'height': '640px' }}
>
```

Add the [resourceUrl](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#resouceurl) property to point to the PDFium resource files. You can use the Syncfusion CDN or host the files locally.

**After:**
**Using CDN (Recommended for Quick Migration):**
```js
<PdfViewerComponent
  id="container"
  //Add resourceUrl for Standalone mode.
  resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
  documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
  style={{ 'height': '640px' }}
>
```

No other sample level changes required for basic use cases.

**Using Local Resources:**

If you prefer to host resources locally, copy the PDFium files to your `public` folder and reference them:

```js
<PdfViewerComponent
  id="container"
  resourceUrl="/ej2-pdfviewer-lib"
  documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
  style={{ 'height': '640px' }}
>
```

Refer to [Load PDF Viewer with Local Resources](./how-to/load-pdf-viewer-with-local-resources) for complete setup instructions.

## Open PDF Document from Server

In standalone mode, you can load PDF documents from your backend server using several methods. This approach works seamlessly without needing a dedicated PDF Viewer web service. The following subsections show how to load PDFs from different server-side sources using the viewer's [`load()`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#load) API.

### Open PDF from Server URL

Load a PDF directly from a public server URL using the [`documentPath`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#documentpath) property:

```js
<PdfViewerComponent
  id="container"
  resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
  documentPath="https://your-backend-server.com/api/pdf/get-document"
  style={{ 'height': '640px' }}
>
```

N> The remote server must permit cross-origin requests (CORS); ensure CORS is properly configured if the server is on a different domain.

### Open PDF from Server as Blob

Fetch the PDF as a Blob from your backend server and load it into the viewer:

```js
const viewerRef = useRef(null);

const loadPdfAsBlob = async () => {
  try {
    const response = await fetch('https://your-backend-server.com/api/pdf/get-document');
    if (!response.ok) throw new Error('Failed to fetch PDF');
    
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    viewerRef.current?.load(objectUrl, null);
  } catch (error) {
    console.error('Error loading PDF:', error);
  }
};
```

This is the recommended approach for most server scenarios, as it handles streaming efficiently.

### Open PDF from Server as Base64 String

If your backend server returns the PDF as a Base64-encoded string, you can load it as follows:

```js
const viewerRef = useRef(null);

const loadPdfAsBase64 = async () => {
  try {
    const response = await fetch('https://your-backend-server.com/api/pdf/get-document-base64');
    if (!response.ok) throw new Error('Failed to fetch PDF');
    
    const base64String = await response.text();
    viewerRef.current?.load('data:application/pdf;base64,' + base64String, null);
  } catch (error) {
    console.error('Error loading PDF:', error);
  }
};
```

### Open PDF from Server with Authentication

If your backend server requires authentication (e.g., API key or Bearer token), include the necessary headers when fetching the PDF:

```js
const viewerRef = useRef(null);

const loadPdfWithAuth = async (token) => {
  try {
    const response = await fetch('https://your-backend-server.com/api/pdf/get-document', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/pdf'
      }
    });
    
    if (!response.ok) throw new Error('Authentication failed');
    
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    viewerRef.current?.load(objectUrl, null);
  } catch (error) {
    console.error('Error loading PDF:', error);
  }
};
```

This approach is useful when your PDF documents are protected by authentication mechanisms.

Refer to [Open PDF Files](./open-pdf-files) to learn more about loading PDFs from various sources.

### Open PDF from Cloud Storage Services

In standalone mode, you can also load PDFs directly from various cloud storage providers without requiring a dedicated PDF Viewer web service. The following links provide detailed step-by-step instructions and sample code for each cloud service:

- [AWS S3](./open-pdf-file/from-amazon-s3)
- [Azure Blob Storage](./open-pdf-file/from-azure-blob-storage)
- [Google Cloud Storage](./open-pdf-file/from-google-cloud-storage)
- [Google Drive](./open-pdf-file/from-google-drive)
- [OneDrive](./open-pdf-file/from-one-drive)
- [Dropbox](./open-pdf-file/from-dropbox-cloud-file-storage)
- [Box](./open-pdf-file/from-box-cloud-file-storage)

Each cloud storage guide includes authentication setup, API integration examples, and complete code snippets for seamless PDF loading.

N> Standalone mode simplifies your architecture — you only need a standard file-serving endpoint (no PDF Viewer-specific web service required). The PDF rendering happens entirely in the browser.

## Modules Comparison and Working

The following table describes how key modules operate in server-backed versus standalone mode:

| Aspect | Server-backed | Standalone |
|--------|---------------|------------|
| **Annotation** | Uses Syncfusion .NET PDF Library for add, edit, delete, import, and export | Uses Syncfusion EJ2 PDF Library for add, edit, delete, import, and export |
| **Form Fields** | Uses Syncfusion .NET PDF Library for form field operations | Uses Syncfusion EJ2 PDF Library for form field operations |
| **Text Selection** | Uses PDFium in server backend to extract text and create text selection elements | Uses PDFium in resource URL for text extraction |
| **Magnification** | Page images converted from PDFium on the server | Uses PDFium in resource URL for page rendering |
| **Navigation** | Bookmarks, links, and thumbnails processed on server | Handled client-side using PDFium resources |
| **Text Search** | Search performed on server and results sent to client | Search performed client-side using PDFium resources |
| **Printing** | Print requests processed on server | Print handled client-side |
| **Toolbar** | Toolbar commands sent to server for processing | Toolbar commands executed client-side |

N> **Advantage of Standalone:** All modules process PDFs directly in the browser, eliminating network latency and reducing server load. Your backend only needs to serve the PDF file as a static resource or via a simple API endpoint.

## Performance Considerations

### Advantages of Standalone Mode

- **Scalability:** All PDF rendering and processing occurs within the browser itself, so there's no server bottleneck
- **Offline Support:** Users can view PDFs without a network connection
- **Reduced Latency:** No round-trip to server for rendering; PDFs process immediately in the browser
- **Lower Server Load:** Eliminates server-side PDF processing, reducing infrastructure costs
- **Decommission your PDF Viewer web service** — saving hosting costs
- **Simplify your deployment pipeline** — no server-side PDF processing needed
- **Benefit from upcoming features** — standalone mode receives ongoing updates

**Related resources:**

- [Getting started with Standalone React PDF Viewer](./getting-started)
- [Load PDF Viewer with Local Resources](./how-to/load-pdf-viewer-with-local-resources)
- [Annotations](./annotation/text-markup-annotation)
- [Form Designer](./forms/form-designer)

## See also

- [Open PDF Files](./open-pdf-files)
- [Save PDF Files](./save-pdf-files)
- [PDF Viewer API Methods](./api-methods)