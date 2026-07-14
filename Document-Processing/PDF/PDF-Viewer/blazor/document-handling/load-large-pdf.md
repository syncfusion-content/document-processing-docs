---
layout: post
title: Document Handling in Blazor PDF Viewer Component | Syncfusion
description: Learn how to load and render large PDF files  in the Blazor PDF Viewer using chunk-based processing
control: SfPdfViewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Load Large PDF Files in Blazor PDF Viewer

This section explains how to load and render **large PDF files (up to approximately 1 GB)** efficiently using the Blazor PDF Viewer. It also covers the recommended configurations required to achieve stable and responsive performance while working with large documents.

## Why Large PDFs Require Special Handling

Large PDF files may contain:

- High‑resolution images
- Compressed streams
- Digital signatures
- Form fields and annotations
- Vector graphics and complex page layouts

Loading and processing such files in a single request can cause high memory usage and browser limitations. Chunk-based processing ensures the document is streamed and rendered progressively, improving reliability and performance.

## Viewer Capability Overview

With proper configuration, the Blazor PDF Viewer can:

- Render large PDF files up to **~1 GB**
- Load and process documents incrementally using chunks
- Improve page navigation and scrolling responsiveness
- Reduce memory pressure on the browser

N> Large PDF support depends on enabling chunk-based processing (refer [EnableChunkMessages](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnableChunkMessages)) and proper server configuration. The actual supported size may vary based on browser memory limits, server settings, and system resources.

## Best Practices for Loading Large PDFs

### 1. Enable Chunk‑Based Processing

Chunk-based processing is **mandatory** for loading large PDF files in the Blazor PDF Viewer. It allows the document to be processed in smaller byte ranges instead of transferring the entire file at once.

Refer to the following FAQ to configure chunk-based processing:

- [How to process Large files using EnableChunkMessages](../faqs/how-to-processing-large-files-without-increasing-maximum-message-size)

Ensure that:

- The server supports **HTTP range requests**
- Chunk processing is enabled as documented
- Connection buffer limits are configured correctly

### 2. Load Large PDFs Using DocumentPath

For large documents, it is recommended to load the PDF using the [DocumentPath](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_DocumentPath) property.

Using `DocumentPath` helps:

- Initiate chunk-based requests immediately
- Avoid buffering the entire file in client memory
- Improve stability and loading behavior for large files

This approach is suitable for PDFs hosted on servers, secured APIs, or cloud storage endpoints.

Example usage:

```cshtml
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 DocumentPath="https://your-server/large-file.pdf"
              EnableChunkMessages="true"
              Height="100%"
              Width="100%" />
```

### 3. Optimize Network and Performance Configuration

Proper network configuration plays a critical role in rendering large PDFs.

#### Increase Connection Buffer Size

Configuring a sufficient connection buffer size helps prevent interruptions while loading large documents:

- [How to increase connection buffer size](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/faqs/how-to-increase-connection-buffer-size)

#### Use CDN for Improved Performance

Using CDN resources reduces script download time and improves viewer initialization performance:

- [How to improve performance using CDN](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/faqs/how-to-improve-performance-using-cdn)

### 4. Reduce System Resource Load

Rendering large PDF files also depends on available system resources.

For the best experience, follow these steps:

1. Close unused applications.
2. Minimize open browser tabs.
3. Avoid running multiple heavy tasks in parallel.
4. Avoid opening multiple large PDFs at the same time.
5. Verify that adequate system memory and CPU are available before loading the file.


## See also

- [Load a Password-Protected PDF](./load-password-pdf)
- [Getting started with SfPdfViewer in a Blazor Web App](../getting-started/web-app)
- [Load and Save Sample](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Load%20and%20Save)
