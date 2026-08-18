---
layout: post
title: How to Resolve the Unable to Find an Entry Point Error | Syncfusion
description: Resolve the Unable to find an entry point error after upgrading the Pdfium package in the Angular PDF Viewer with a clear set of steps.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# How to Resolve the Unable to Find an Entry Point Error in Angular PDF

From the release of version **21.1.0.35 (2023 Volume 1)** of Essential Studio<sup style="font-size:70%">&reg;</sup>, the Pdfium package has been upgraded to improve various functionalities like text search, text selection, rendering, and even performance. If you are updating your project to this version of the PDF Viewer, you may encounter the **"Web-Service is not listening"** error. The Network tab can help you identify the root cause of the issue, which is typically caused by an old version of pdfium assembly being referenced in the local web service project. Below are the assemblies to be referred to in the respective operating systems.

- Windows: `pdfium.dll`
- Linux: `libpdfium.so`
- macOS: `libpdfium.dylib`

## Potential causes

- An outdated or mismatched native Pdfium binary deployed with the web service (different version or built for a different architecture).
- A missing native library in the published output.
- Incorrect bitness (x86 vs x64) for the hosting environment.
- File permission, anti-virus, or file-locking issues preventing the native DLL from loading.

N> When hosting in cloud environments (Azure, AWS, container platforms), always remove or overwrite older published files to avoid stale native binaries remaining on the host.