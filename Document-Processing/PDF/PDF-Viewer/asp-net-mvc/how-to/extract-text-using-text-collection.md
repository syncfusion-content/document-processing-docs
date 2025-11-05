---
layout: post
title: Extract text using TextLineCollection in Syncfusion ASP.NET MVC PDF Viewer
description: Learn how to extract text with bounds from PDF pages by using the TextLineCollection API in the Syncfusion ASP.NET MVC PDF Viewer.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---


# Extract text using TextLineCollection

The PDF Viewer server library can extract text and its bounding information from a PDF page by using the **ExtractText()** method. The `TextLineCollection` output contains each line of text along with coordinates that help map the content back to the page.

## Prerequisites

Add the following dependency to your application by using the NuGet Package Manager:

* Syncfusion.EJ2.PdfViewer.AspNet.Core

N> From the Volume 2 2019 release, the Syncfusion.Pdf.Net.Core and Syncfusion.Compression.Net.Core packages are added as dependencies for the PDF Viewer control. Ensure these packages are referenced correctly in your project.

## Steps to extract text from a PDF page

1. Load the PDF document into a `PdfLoadedDocument` instance.
2. Retrieve the target page as a `PdfLoadedPage` object.
3. Call `ExtractText` to obtain the text and the corresponding `TextLineCollection`.

The following code snippet demonstrates the extraction workflow:

```cs

var path = @"currentDirectory/../../../../Data/Simple.pdf";
var fileInfo = new FileInfo(path);
var docStream = new FileStream(fileInfo.FullName, FileMode.Open, FileAccess.Read);
// Load the PDF document.
PdfLoadedDocument document = new PdfLoadedDocument(docStream);
// Loading page collections
PdfPageBase page = document.Pages[0] as PdfLoadedPage;
//Extract text from the page.
var text = page.ExtractText(out TextLineCollection textLineCollection);

```

[View sample in GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/How%20to/Load%20N%20no%20of%20pages)

N> Ensure the document path and any output locations are valid for the hosting environment, and dispose of the `PdfLoadedDocument` after extraction to release file handles.
