---
title: Resolving Namespace Ambiguity Errors in .NET Applications| Syncfusion
description: This page explains how to fix namespace conflicts in .NET applications caused by using Syncfusion PDF packages like Syncfusion.Pdf.Net.Core and PdfViewer
platform: document-processing
documentation: UG
---

# How to Fix Namespace Ambiguity Errors in .NET Applications
### Q: What is the customer’s use case?
Background service without a UI.
Load a PDF, fill fields, and print.
Application uses the .NET 4.8 framework.
### Q: What issue did the customer face after adding the PdfViewer package?
The customer encountered namespace ambiguity errors such as:
* **PdfLoadedDocument** is ambiguous in the namespace **Syncfusion.Pdf.Parsing**.
* **PdfDocument** is ambiguous in the namespace **Syncfusion.Pdf**.
* **PdfField** is ambiguous in the namespace **Syncfusion.Pdf.Interactive**.
### Q: What is the root cause of the issue?
The namespace ambiguity occurs because both the **Syncfusion.Pdf.Net.Core** package and the **PdfViewer** package include overlapping namespaces and types, causing conflicts.

### Q: What is the solution to resolve the issue?
Remove the **Syncfusion.Pdf.Net.Core** package from the application to eliminate the namespace conflicts.

### Q: Why is removing the Syncfusion.Pdf.Net.Core package the solution?
The functionality required for PDF handling and printing is already available in the **PdfViewer** package, making the additional **Syncfusion.Pdf.Net.Core** package redundant.