---
title: Resolving Namespace Ambiguity Errors| Syncfusion
description: This page explains how to fix namespace conflicts in .NET applications caused by using Syncfusion PDF packages like Syncfusion.Pdf.Net.Core and PdfViewer
platform: document-processing
documentation: UG
---

# How to Fix Namespace Ambiguity Errors When Using Multiple Syncfusion PDF Packages in a .NET Framework Application

Namespace ambiguity errors often occur when multiple Syncfusion PDF-related packages, such as Syncfusion.Pdf.Net.Core and Syncfusion.PdfViewer, are included in the same project. These packages may have overlapping namespaces and types, causing conflicts during compilation.

### To resolve this issue:

Evaluate your application’s requirements to include only the necessary Syncfusion packages:
* use **Syncfusion.Pdf.Net.Core** for basic PDF functionalities, and **Syncfusion.PdfViewer** for printing. 
* Avoid using both **Syncfusion.Pdf.Net.Core** and **Syncfusion.PdfViewer** in the same project—remove **Syncfusion.Pdf.Net.Core** if **Syncfusion.PdfViewer** is used. 
* Finally, clean and rebuild the solution to update references and resolve conflicts.
