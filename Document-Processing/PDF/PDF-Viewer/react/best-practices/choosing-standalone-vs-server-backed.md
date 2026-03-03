---
layout: post
title: Choosing Standalone vs Server‑Backed Viewer
description: Learn when to choose Standalone (WASM) mode or Server‑Backed mode in the Syncfusion React PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Choosing Standalone vs Server‑Backed Viewer

## Overview
The React PDF Viewer supports two rendering modes: [**Standalone (WASM)**](../getting-started-overview) and [**Server‑Backed (Web API)**](../getting-started-with-server-backed). Choosing the right mode depends on **performance needs**, **PDF size**, **security requirements**, and **deployment constraints**.

Both modes fully support viewing, annotation, form fields, and text search. The difference lies in **where the rendering and processing happen**.

## Standalone (WASM) Viewer — When to Choose?
The Standalone Viewer renders PDFs **directly inside the browser** using the WASM engine (`ej2-pdfviewer-lib`) referenced by `resourceUrl`. citeturn15search45

**Choose Standalone when:**
- No backend should be required
- Deployment must be simple (static hosting)
- PDFs are small to medium (< 20–40 MB)
- You want fast client‑side rendering
- You can host WASM files with correct MIME types

**Strengths:**
- No server dependency
- Very responsive for normal‑sized PDFs
- Works offline once loaded

**Limitations:**
- Not ideal for very large PDFs (100MB+)
- Browser memory/CPU limits apply
- Requires hosting WASM assets

## Server‑Backed Viewer — When to Choose?
The Server‑Backed Viewer performs rendering and processing on a **backend API** using `serviceUrl`. PDFs are processed on the server instead of the browser. citeturn15search41

**Choose Server‑Backed when:**
- PDFs are large (100–500MB)
- CPU‑intensive rendering is required
- Documents must stay on the server (security/compliance)
- You want server‑side caching and logging
- Browser performance needs to be preserved

**Strengths:**
- Efficient for huge PDFs
- Lower browser CPU usage
- Enterprise‑grade security

**Limitations:**
- Requires backend infrastructure
- More complex deployment

## Decision Guide
### Choose **Standalone** if:
- You need a fully client‑side viewer
- Deployment must be simple
- PDFs are < 20–40MB
- No backend infrastructure is desired
- Offline usage is required

### Choose **Server‑Backed** if:
- Users handle large PDFs
- CPU‑heavy operations are required
- PDFs must not leave server boundaries
- Advanced logging/security is needed
- Enterprise environments require controlled processing

## Summary
| Mode | Rendering Location | Best For | Requirements |
|------|-------------------|----------|--------------|
| **Standalone (WASM)** | Browser | Small/Medium PDFs | Host `ej2-pdfviewer-lib` WASM files correctly |
| **Server‑Backed (Web API)** | Server | Large PDFs, Secure environments | Must configure `serviceUrl` API endpoint |

## See Also
- [Getting started with Standalone Viewer](../getting-started-overview)
- [Getting started with Server‑Backed Viewer](../getting-started-with-server-backed)
- [Document Handling](../document-handling/load-large-pdf)
