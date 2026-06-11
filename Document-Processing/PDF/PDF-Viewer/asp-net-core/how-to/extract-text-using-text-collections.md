---
layout: post
title: Extract Text Using TextLineCollection in ASP.NET Core | Syncfusion
description: Learn how to extract text with bounds from PDF pages by using the TextLineCollection API in the Syncfusion ASP.NET Core PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Extract text using TextLineCollection in ASP.NET Core

The Syncfusion PDF Viewer server Library extracts text and its precise bounding coordinates from a PDF page using the **ExtractText** method. The output **TextLineCollection** contains detailed layout information for each line of text.

## Prerequisites

Ensure the following NuGet package is installed in the project:

* **Syncfusion.EJ2.PdfViewer.AspNet.Core**

N> The **Syncfusion.Pdf.Net.Core** and **Syncfusion.Compression.Net.Core** packages are required dependencies and are typically installed automatically with the PDF Viewer package.

## Implementation steps

Follow these steps to extract text and layout coordinates from a PDF:

1. Load the PDF document into a `PdfLoadedDocument` instance.
2. Access the desired page as a `PdfLoadedPage` object.
3. Call the `ExtractText` method, passing the `TextLineCollection` as an output parameter.

```cs

var path = @"currentDirectory\..\..\..\..\Data\Simple.pdf";
var fileInfo = new FileInfo(path);
var docStream = new FileStream(fileInfo.FullName, FileMode.Open, FileAccess.Read);
// Load the PDF document.
PdfLoadedDocument document = new PdfLoadedDocument(docStream);
// Loading page collections
PdfPageBase page = document.Pages[0] as PdfLoadedPage;
//Extract text from the page.
var text = page.ExtractText(out TextLineCollection textLineCollection);

```

Find the sample [How to extract text using TextLineCollection](https://www.syncfusion.com/downloads/support/directtrac/general/ze/EXTRAC~21056703041).

N> Ensure the document path and any output locations are valid for the hosting environment, and dispose of the `PdfLoadedDocument` after extraction to release file handles.
