---
layout: post
title: Resolve “Unable to find an entry point named FPDFText_GetCharAngle” error in ASP.NET MVC PDF Viewer | Syncfusion
description: Resolve the “Unable to find an entry point named FPDFText_GetCharAngle” error in the Syncfusion ASP.NET MVC PDF Viewer by updating the PDFium assemblies and republishing the service.
control: PDF Viewer
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Resolve "Unable to find an entry point named FPDFText_GetCharAngle" error

Starting with Essential Studio<sup style="font-size:70%">&reg;</sup> 21.1.0.35 (2023 Volume 1), the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer ships an updated PDFium package to improve text search, text selection, and rendering performance. If an application still references the older native PDFium binaries after upgrading the NuGet packages, the viewer may throw the exception **"Unable to find an entry point named FPDFText_GetCharAngle"** and the client can display the **"Web-Service is not listening"** status. Inspect the Network tab to confirm that the service response fails due to missing or outdated Pdfium assemblies.

Ensure that the deployed application references the correct native library for the host operating system:

* Windows – pdfium.dll
* Linux – libpdfium.so
* OSX – libpdfium.dylib

![Error information in the Network tab](../images/ErrorinformationuintheNetworkTab.png)

## Follow these steps to resolve the issue:

1. Clear the `bin`, `obj`, and published output folders of the web service so that stale Pdfium binaries are removed, then rebuild the project to restore the assemblies that match the upgraded Syncfusion packages.
2. Republish the web service and verify that the deployment contains the latest Pdfium binaries alongside the updated Syncfusion.EJ2.PdfViewer assemblies.

N> **Note:** If the application is hosted in Azure, AWS, Linux, or another remote environment, delete the previous deployment before publishing again and confirm that the new PDFium binaries are copied to the server.
