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

- Windows: pdfium.dll
- Linux: libpdfium.so
- macOS: libpdfium.dylib

![Error information in the Network tab](../images/ErrorinformationuintheNetworkTab.png)

## To solve this issue, you should follow the below steps:

1. Delete the bin and obj folders in the web service project.
2. Rebuild and republish the web service.

N> If hosting in Azure, AWS, or Linux environments, remove old published files on the server before republishing.