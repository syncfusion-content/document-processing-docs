---
layout: post
title: Resolve unable to find an entry point error in Typescript Pdfviewer control | Syncfusion
description: Learn here all about Resolve unable to find an entry point error in Syncfusion Typescript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Resolve unable to find an entry point error
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---

# Resolve unable to find an entry point error in Typescript Pdfviewer control

From the release of version **21.1.0.35 (2023 Volume 1)** of Essential Studio, the Pdfium package has been upgraded to improve various functionalities like text search, text selection, rendering, and even performance. If you are updating your project to this version of the Syncfusion PDF Viewer, you may encounter the **"Web-Service is not listening"** error. The Network tab can help you identify the root cause of the issue, which is typically caused by an old version of pdfium assembly being referenced in the local web service project. Below are the assemblies to be referred to in the respective operating systems.

* Windows – pdfium.dll
* Linux – libpdfium.so
* OSX – libpdfium.dylib

![Error information in the Network tab](../how-to/images/ErrorinformationuintheNetworkTab.png)

## To solve this issue, you should follow the below steps

1. Clear the bin and object files of the web-service project.
2. Re-publish the web-service project.

N>Note: If you are hosting your application in Azure, AWS, or in Linux environments, delete the older published files and republish the application.