---
layout: post
title: Find an entry point in Angular PDF Viewer component | Syncfusion
description: Learn here how to resolve unable to find an entry point named error in Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
control: Resolve unable to find an entry point error
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Resolve "Unable to find an entry point named FPDFText_GetCharAngle" error

From the release of version **21.1.0.35 (2023 Volume 1)** of Essential Studio<sup style="font-size:70%">&reg;</sup>, the Pdfium package has been upgraded to improve various functionalities like text search, text selection, rendering, and even performance. If you are updating your project to this version of the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer, you may encounter the **"Web-Service is not listening"** error. The Network tab can help you identify the root cause of the issue, which is typically caused by an old version of pdfium assembly being referenced in the local web service project. Below are the assemblies to be referred to in the respective operating systems.

- Windows: `pdfium.dll`
- Linux: `libpdfium.so`
- macOS: `libpdfium.dylib`

## To solve this issue, you should follow the below steps

- An outdated or mismatched native Pdfium binary deployed with the web service (different version or built for a different architecture).
- A missing native library in the published output.
- Incorrect bitness (x86 vs x64) for the hosting environment.
- File permission, antivirus, or file-locking issues preventing the native DLL from loading.

N> When hosting in cloud environments (Azure, AWS, container platforms), always remove or overwrite older published files to avoid stale native binaries remaining on the host.