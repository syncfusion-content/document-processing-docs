---
layout: post
title: Load the document in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to load a PDF document in the Syncfusion ASP.NET MVC PDF Viewer and understand the JSON payload (jsonObjects) used by controller actions.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Load the PDF document

The Syncfusion ASP.NET MVC PDF Viewer loads documents through server-side controller actions that receive a JSON payload. The payload is deserialized into a data transfer object (DTO) named `jsonObjects`, which supplies properties used across actions such as loading, rendering, and annotation processing.

Follow these steps to load a PDF document.

**Step 1:** Create a basic ASP.NET MVC PDF Viewer sample by following the getting started guide: [Getting started with ASP.NET MVC PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started/).

**Step 2:** Add the following `jsonObjects` class to the `PdfViewerController.cs` file (or a Models folder). The `document`, `isFileName`, and `password` properties are commonly used when loading a document.

```cs

public class jsonObjects
{
    public string document { get; set; }
    public string password { get; set; }
    public string zoomFactor { get; set; }
    public string isFileName { get; set; }
    public string xCoordinate { get; set; }
    public string yCoordinate { get; set; }
    public string pageNumber { get; set; }
    public string documentId { get; set; }
    public string hashId { get; set; }
    public string sizeX { get; set; }
    public string sizeY { get; set; }
    public string startPage { get; set; }
    public string endPage { get; set; }
    public string stampAnnotations { get; set; }
    public string textMarkupAnnotations { get; set; }
    public string stickyNotesAnnotation { get; set; }
    public string shapeAnnotations { get; set; }
    public string measureShapeAnnotations { get; set; }
    public string action { get; set; }
    public string pageStartIndex { get; set; }
    public string pageEndIndex { get; set; }
    public string fileName { get; set; }
    public string elementId { get; set; }
    public string pdfAnnotation { get; set; }
    public string importPageList { get; set; }
    public string uniqueId { get; set; }
    public string data { get; set; }
    public string viewPortWidth { get; set; }
    public string viewportHeight { get; set; }
    public string tilecount { get; set; }
    public string isCompletePageSizeNotReceived { get; set; }
    public string freeTextAnnotation { get; set; }
    public string signatureData { get; set; }
    public string fieldsData { get; set; }
}

```

Find the sample [how to load the PDF document in MVC PDF Viewer](https://www.syncfusion.com/downloads/support/directtrac/general/ze/PDFViewTest-1000651816)
