---
layout: post
title: Resolve “unable to find an entry point” error | Syncfusion
description: Learn how to resolve the “unable to find an entry point” error after upgrading the Pdfium package in the Syncfusion Vue PDF Viewer.Essential JS 2 and more.
control: Unable to find an entry point
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Resolve "Unable to find an entry point named FPDFText_GetCharAngle" error

Starting with **21.1.0.35 (2023 Volume 1)**, the Pdfium package was upgraded to improve text search, selection, rendering, and performance. After upgrading, the PDF Viewer may display a **“Web-Service is not listening”** error. In most cases, the Network tab reveals that an outdated Pdfium assembly is referenced in the local web service project. Ensure the correct native assembly is deployed for the target OS:

- Windows: `pdfium.dll`
- Linux: `libpdfium.so`
- macOS: `libpdfium.dylib`

![Error information in the Network tab](../images/ErrorinformationuintheNetworkTab.png)

## To solve this issue, you should follow the below steps:

- An outdated or mismatched native Pdfium binary deployed with the web service (different version or built for a different architecture).
- A missing native library in the published output.
- Incorrect bitness (x86 vs x64) for the hosting environment.
- File permission, antivirus, or file-locking issues preventing the native DLL from loading.

N> When hosting in cloud environments (Azure, AWS, container platforms), always remove or overwrite older published files to avoid stale native binaries remaining on the host.