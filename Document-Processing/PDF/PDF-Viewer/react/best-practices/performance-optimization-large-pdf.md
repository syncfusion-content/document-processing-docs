---
layout: post
title: Performance Optimization for Large PDFs
description: Learn best practices to optimize performance when working with large PDF documents in the Syncfusion React PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Performance Optimization for Large PDFs

Large PDF files (100MB–2GB) often contain images, compressed streams, and heavy page structures that require additional processing time and memory. The Syncfusion React PDF Viewer includes optimizations for such workloads, but applying the correct configuration significantly improves performance. 

## Use Server‑Backed Rendering for Large PDFs
Server‑backed rendering processes PDFs on a backend Web API using `serviceUrl`, reducing the load on the browser. This is recommended for PDFs above **100–500MB**. 

**Benefits:**
- Offloads CPU‑intensive rendering to server
- Improves performance for 100MB+ files
- Reduces browser memory usage
- Enhances stability in enterprise security environments

## Enable Page‑by‑Page Rendering
The viewer supports **incremental page loading**, meaning only the visible pages are rendered first. This ensures faster time‑to‑first‑view and reduces unnecessary memory usage. 

**Advantages:**
- Faster initial load
- Less RAM usage for very long documents
- Improves UX for engineering drawings, scanned books, and multi‑page documents

To take full advantage of incremental rendering:
- Avoid loading PDFs as full base64 strings
- Prefer Blob streaming (see below)

## Optimize Text Search on Large PDFs
The Text Search module requires continuous background text extraction and indexing, which increases CPU for large documents. 

Disable TextSearch/TextSelection if not required:
```jsx
<Inject services={[Toolbar, Magnification, Navigation, Print]} />
```

**Why disable it?**
- Reduces indexing overhead
- Lowers CPU usage
- Faster rendering

## Recommended Additional Optimizations

### Load PDFs Using Blob (Recommended)
Blob streaming significantly improves render time for PDFs above **200MB** by allowing optimized download flow instead of blocking rendering until full file download. 

```js
fetch('https://your-api/large.pdf')
  .then(r => r.blob())
  .then(blob => viewer.load(URL.createObjectURL(blob)));
```

### Disable Unnecessary Modules
Modules like **ThumbnailView** and **OrganizePages** generate background thumbnails, which are expensive for large PDFs. 

```jsx
<Inject services={[Toolbar, Magnification, Navigation, Print]} />
```

### Enable Local Storage for Annotation‑Heavy PDFs
Large PDFs with many form fields or annotations benefit from localStorage caching to avoid sessionStorage overflow. 

```jsx
<PdfViewerComponent enableLocalStorage={true} />
```

**Benefits:**
- Improves navigation stability
- Reduces repeated re‑processing
- Better performance for legal/tax forms and heavily marked PDFs

## Summary
| Optimization | Benefit |
|--------------|---------|
| Server‑backed rendering | Handles 100MB–500MB+ PDFs efficiently  |
| Page‑by‑page rendering | Faster first view, reduced memory usage  |
| Disable heavy modules | Lower CPU load, smoother viewer  |
| Blob loading | Faster load for 200MB–1GB PDFs  |
| Enable local storage | Best for annotation‑heavy PDFs  |

## See Also
- [Loading large PDFs](../document-handling/load-large-pdf)
- [Server‑Backed Viewer Setup](../getting-started-with-server-backed) 
- [Standalone Viewer Setup](../getting-started-overview)
