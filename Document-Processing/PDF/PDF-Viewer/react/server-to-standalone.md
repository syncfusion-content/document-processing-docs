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

Migrating from server-backed to standalone mode transforms your PDF Viewer architecture by moving PDF rendering from the server to the client browser. This migration eliminates server dependencies, reduces infrastructure costs, and improves performance through instant client-side rendering.

## Prerequisites

Before starting the migration process, ensure you have:

- [System requirements for Syncfusion® React components](https://ej2.syncfusion.com/react/documentation/system-requirement)

## Architectural Overview: Server-backed vs Standalone

Server-backed and standalone modes represent fundamentally different architectural approaches to PDF rendering. Understanding these differences will guide your migration strategy and help you plan for deployment changes.

| Aspect | Server-backed | Standalone |
|--------|---------------|-----------|
| **PDF Rendering** | Processed on the server using the PDFium rendering engine | Processed entirely within the browser using the PDFium rendering engine |
| **Back-end Service** | Requires a running web service configured in the .NET application (via `serviceUrl`) | Not required; no server service dependencies |
| **Resource Management** | PDFium resources are handled and managed by the server | PDFium resources must be referenced through `resourceUrl` (from CDN or local hosting) |
| **Deployment Complexity** | Requires server configuration plus frontend-level deployment | Minimal deployment requirements; front-end only |
| **Runtime Performance** | Operations involve network latency due to server round-trips | Rendering occurs instantly on the client with no network overhead |
| **Scalability Model** | Limited by server capacity and concurrent connection limits | Scales horizontally based on client device hardware resources |

## How Modules Differ Between Architectures

When you migrate to standalone mode, the processing location for various features changes from the server to the client browser. This table summarizes how each module operates in both architectures:

| Feature | Server-backed Processing | Standalone Processing |
|---------|--------------------------|----------------------|
| **Annotation** | Annotation operations such as add, edit, delete, import, and export are handled on the server using the Syncfusion .NET PDF Library. | All annotation functionalities are executed directly in the browser using the Syncfusion EJ2 PDF Library. |
| **Form Designer** | The server manages form design operations such as add, edit, and delete, while UI interactions occur on the client and PDF changes are processed using the Syncfusion .NET PDF Library. | All form designer operations are performed entirely within the browser using the Syncfusion EJ2 PDF Library. |
| **Form Fields** | Form filling is processed on the server using the Syncfusion .NET PDF Library. | Form filling is handled locally within the browser using the Syncfusion EJ2 PDF Library. |
| **Text Selection** | Text is extracted on the server using PDFium or the Syncfusion .NET PDF Library, and selection data is sent to the client. | Text extraction is performed directly in the browser using PDFium resources or the EJ2 PDF Viewer library. |
| **Magnification** | The server generates page images at various zoom levels using the PDFium engine and delivers appropriately scaled images to the client. | Zooming is handled dynamically in real time within the browser using PDFium resources. |
| **Navigation** | Page navigation is processed on the server, and results are sent to the client. This approach may introduce latency due to lazy loading. | Navigation is handled locally in the browser, providing smooth and responsive performance. |
| **Link Annotation** | Hyperlinks and document links are processed on the server and then rendered on the client. | All link annotation features are handled locally using the Syncfusion EJ2 PDF Viewer. |
| **Thumbnail View** | Thumbnail images are generated on the server and transmitted to the client. | Thumbnails are rendered directly in the browser without server involvement. |
| **Bookmark View** | Bookmark data is processed on the server and sent to the client for rendering. | Bookmark navigation is managed locally using the Syncfusion EJ2 PDF Viewer. |
| **Text Search** | Text search operations are performed on the server, and results are returned to the client. | Text search is executed entirely within the browser. |
| **Print** | The server handles print preparation and formatting, then sends the processed output back to the client for printing. | Print preparation and formatting are handled locally within the browser, providing quick and responsive print output. |
| **Toolbar** | Toolbar actions such as zoom, navigation, and export are processed on the server, and results are returned to the client. | Toolbar operations are executed instantly on the client without requiring server communication. |

**Key Insight:** In standalone mode, all PDF processing occurs in the browser, eliminating the need for server coordination. Your server only serves the PDF file as a static resource or through a simple API endpoint.

## Why Migrate to Standalone Mode

Migrating to standalone mode provides several architectural and operational benefits:

**API Compatibility:**
- **No API Breaks:** There are no breaking API changes when migrating from the server-backed PDF Viewer to the standalone PDF Viewer. However, APIs that are specific to server interaction, such as [serviceUrl](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#serviceurl), [serverActionSettings](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#serveractionsettings), [ajaxRequestSettings](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#ajaxrequestsettings), [retryCount](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#retrycount), [retryTimeout](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#retrytimeout), and [retryStatusCodes](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#retrystatuscodes), are not applicable in standalone mode. Apart from these server-dependent APIs, all other APIs remain consistent and are supported in the standalone PDF Viewer.

**Performance and User Experience:**
- **Instant Rendering:** PDF operations execute immediately in the browser without server round-trips
- **Offline Capability:** Users can view PDFs without network connectivity
- **Reduced Latency:** Eliminates network delays inherent in server-backed communication

**Operational Efficiency:**
- **Lower Server Load:** Server no longer processes PDF operations, freeing resources for other tasks
- **Reduced Infrastructure Costs:** Decommission your PDF Viewer web service and eliminate associated hosting expenses
- **Simplified Deployment:** Remove server-backed PDF Viewer service from your deployment pipeline

**Future-Proofing:**
- **Continuous Updates:** Standalone mode receives ongoing feature enhancements and improvements
- **Modern Architecture:** Aligns with contemporary client-side processing patterns

## Step-by-Step Migration Guide

### Step 1: Identify Your Current Configuration

In your existing server-backed React component, locate the `serviceUrl` property. This property points to your server PDF Viewer web service.

### Step 2: Remove the `serviceUrl` Property

Remove or delete the [serviceUrl](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#serviceurl) property that references your server service.

**Current server-backed configuration:**
```js
<PdfViewerComponent
  id="container"
  serviceUrl="https://your-server.com/api/pdfviewer"
  documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
  style={{ 'height': '640px' }}
/>
```

### Step 3: Add the `resourceUrl` Property

Add the [resourceUrl](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#resouceurl) property to point to the PDFium resource files. You can choose between two approaches: CDN hosting (recommended for quick migration) or local hosting.

#### Option A: Using CDN (Recommended for Quick Migration)

Using the Syncfusion CDN provides the fastest path to migration with no local file management:

```js
<PdfViewerComponent
  id="container"
  resourceUrl="https://cdn.syncfusion.com/ej2/33.2.13/dist/ej2-pdfviewer-lib"
  documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
  style={{ 'height': '640px' }}
/>
```

This is all the configuration you need for basic use cases. The viewer will immediately function in standalone mode.

#### Option B: Using Local Resources

If you prefer to host resources locally for better control or offline scenarios, follow these steps:

1. Copy the PDFium resource files to your `public` folder (create the directory structure if it doesn't exist)
2. Reference the local resources in your component:

```js
<PdfViewerComponent
  id="container"
  // Path to the PDFium library files in the assets folder
  resourceUrl={window.location.origin + "/assets/ej2-pdfviewer-lib"}
  // Path to your PDF document in the assets folder
  documentPath={window.location.origin + "/assets/pdfsuccinctly.pdf"}
  style={{ 'height': '640px' }}
/>
```

For detailed local resource setup instructions, refer to [Load PDF Viewer with Local Resources](./how-to/load-pdf-viewer-with-local-resources).

### Step 4: Verify Your Migration

After updating the configuration, test the following functionality:
- PDF renders correctly in the viewer
- All toolbar actions (zoom, navigation, search) work as expected
- No console errors appear related to resource loading or PDF rendering

## Load PDFs from Your Server

After migrating to standalone mode, you can still load PDF documents from your server. Unlike server-backed mode, standalone mode does not require a dedicated PDF Viewer web service. Instead, you can use standard HTTP endpoints to serve PDFs to your client application.

### Load PDFs Using Direct Server URLs

To load a PDF directly from your server using a public URL, specify the URL in the `documentPath` property:

```js
<PdfViewerComponent
  id="container"
  resourceUrl="https://cdn.syncfusion.com/ej2/33.2.13/dist/ej2-pdfviewer-lib"
  documentPath="https://your-server.com/api/pdf/input.pdf"
  style={{ 'height': '640px' }}
/>
```

**Important:** Ensure that your server permits cross-origin requests (CORS). If the PDF server is on a different domain, configure CORS headers on your server to allow requests from your client application domain.

### Load PDFs Using Blob Objects

For improved efficiency with large files or streaming scenarios, fetch the PDF as a Blob object from your server and load it into the viewer:

```js
const viewerRef = useRef(null);

const loadPdfAsBlob = async () => {
  try {
    const response = await fetch('https://your-server.com/api/pdf/get-document');
    if (!response.ok) throw new Error('Failed to fetch PDF');
    
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    viewerRef.current?.load(objectUrl, null);
  } catch (error) {
    console.error('Error loading PDF:', error);
  }
};

return (
  <>
    <button onClick={loadPdfAsBlob}>Load PDF</button>
    <PdfViewerComponent
      id="container"
      ref={viewerRef}
      resourceUrl="https://cdn.syncfusion.com/ej2/33.2.13/dist/ej2-pdfviewer-lib"
      style={{ 'height': '640px' }}
    />
  </>
);
```

This approach is recommended for most server scenarios because it handles file streaming efficiently and provides better control over the loading process.

### Load PDFs from Base64-Encoded Strings

When your server returns a PDF as a Base64-encoded string, it can be loaded directly into the viewer:

```js
const viewerRef = useRef(null);

const loadPdfAsBase64 = async () => {
  try {
    const response = await fetch('https://your-server.com/api/pdf/get-document-base64');
    if (!response.ok) throw new Error('Failed to fetch PDF');
    
    const base64String = await response.text();
    viewerRef.current?.load('data:application/pdf;base64,' + base64String, null);
  } catch (error) {
    console.error('Error loading PDF:', error);
  }
};

return (
  <>
    <button onClick={loadPdfAsBase64}>Load PDF</button>
    <PdfViewerComponent
      id="container"
      ref={viewerRef}
      resourceUrl="https://cdn.syncfusion.com/ej2/33.2.13/dist/ej2-pdfviewer-lib"
      style={{ 'height': '640px' }}
    />
  </>
);
```

### Load PDFs from Authenticated Endpoints

When your server requires authentication (such as Bearer tokens or API keys), include the necessary authorization headers in your fetch request:

```js
const viewerRef = useRef(null);

const loadPdfWithAuth = async (authToken) => {
  try {
    const response = await fetch('https://your-server.com/api/pdf/get-document', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${authToken}`,
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

return (
  <>
    <button onClick={() => loadPdfWithAuth('your-auth-token')}>Load Secure PDF</button>
    <PdfViewerComponent
      id="container"
      ref={viewerRef}
      resourceUrl="https://cdn.syncfusion.com/ej2/33.2.13/dist/ej2-pdfviewer-lib"
      style={{ 'height': '640px' }}
    />
  </>
);
```

This pattern is essential for protecting PDFs and ensuring only authorized users can access them.

### Load PDFs from Cloud Storage Providers

Standalone mode enables you to load PDFs directly from various cloud storage services without requiring a server-based PDF Viewer service. The following resources provide detailed instructions for each cloud provider:

- [AWS S3](./open-pdf-file/from-amazon-s3)
- [Azure Blob Storage](./open-pdf-file/from-azure-blob-storage)
- [Google Cloud Storage](./open-pdf-file/from-google-cloud-storage)
- [Google Drive](./open-pdf-file/from-google-drive)
- [OneDrive](./open-pdf-file/from-one-drive)
- [Dropbox](./open-pdf-file/from-dropbox-cloud-file-storage)
- [Box](./open-pdf-file/from-box-cloud-file-storage)

Each guide includes authentication setup, complete code examples, and API integration patterns for seamless PDF loading from your chosen cloud provider.

For additional loading methods and scenarios, refer to [Open PDF Files](./open-pdf-files).

## Next Steps

Once you have completed the migration to standalone mode, explore these resources to extend functionality:

**Getting Started:**
- [Getting Started with Standalone React PDF Viewer](./getting-started) — Learn the fundamentals of standalone mode setup and configuration

**Advanced Configuration:**
- [Load PDF Viewer with Local Resources](./how-to/load-pdf-viewer-with-local-resources) — Host PDFium resources locally for better control and offline scenarios
- [Open PDF Files](./open-pdf-files) — Explore multiple methods to load PDF documents
- [Save PDF Files](./save-pdf-files) — Learn how to save and export modified PDFs

**Feature Implementation:**
- [Text Markup Annotations](./annotation/text-markup-annotation) — Add highlighting, comments, and markup to PDFs
- [Form Designer](./forms/form-designer) — Work with interactive form fields in your PDFs
- [PDF Viewer API Methods](https://ej2.syncfusion.com/react/documentation/api/pdfviewer) — Reference all available API methods and properties

**Related Topics:**
- [System Requirements](https://ej2.syncfusion.com/react/documentation/system-requirement)
- [Getting Started with Standalone React PDF Viewer](./getting-started)
