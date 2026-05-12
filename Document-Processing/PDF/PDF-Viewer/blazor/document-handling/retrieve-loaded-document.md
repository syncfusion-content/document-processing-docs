---
layout: post
title: Retrieve Loaded Document Instance Blazor PDF Viewer | syncfusion
description: Learn how to access the loaded PDF document instance in the Blazor PDF Viewer using component references and the DocumentLoad event.
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Retrieve the Loaded Document Instance

This page explains how to access the loaded document instance in the Blazor PDF Viewer using Blazor component references, listen for the [DocumentLoaded](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_DocumentLoaded) event, and retrieve document information, page details, and metadata—so you can safely invoke viewer APIs after the PDF document is loaded.

## Explanation: Why access the loaded document instance?

- The viewer instance (via **Blazor component reference**) gives you a stable handle to call APIs such as [`Zoom`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/magnification), [`Print`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/print), [`Download`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/saving-pdf-file#download), and [`Navigation`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/navigation).
- The **Created event** fires when the PDF Viewer component is rendered and initialized in the DOM.
- The **DocumentLoaded event** (fires after the PDF document is fully loaded and parsed) is the correct moment to read **document information** (Document Name, page count) and **page metrics**, and to trigger post‑load UI logic. Use [DocumentLoaded](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_DocumentLoaded) event to access document details after successful load, and [DocumentLoadFailed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_DocumentLoadFailed) to handle load failures.
- Accessing the instance too early (before load completes) may cause null/undefined errors or incomplete information.

## Reference: What you can access/call after load

After the PDF is loaded you can:

- **Read document information**: title, author, subject, keywords (metadata), page count.
- **Read page details**: total pages, current page, page size(s).
- **Call Viewer APIs** (typical examples):
  - **Zoom / Fit**: `ZoomTo(125)`; fit to page/width
  - **Navigation**: go to a specific page
  - **Interactions**: enable/disable features
  - **Export**: `Download()`, `Print()`

N> The **Created event** triggers when the PDF Viewer component is rendered in the DOM. The **DocumentLoaded event** triggers when the document is successfully loaded and parsed. Always invoke viewer APIs after the `DocumentLoaded` event fires to ensure document information is available, or from user actions that occur after load. Guard calls with null checks or readiness flags.

## How‑to: Get the instance with a ref and read details on load

Below is a focused snippet showing:
1) Creating a **component reference** for the viewer,
2) Wiring the **`Created`** event for viewer initialization and the **`DocumentLoaded`** event for document details, and
3) Reading basic **document info** (name and page count) from the **DocumentLoaded** event, then calling **viewer APIs** safely.

```cs
@page "/"

@using Syncfusion.Blazor
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Pdf
@using Syncfusion.Pdf.Parsing

<div style="margin-bottom:10px;">
    <strong>Document Info</strong><br />
    Name: @Info2.Name <br />
    Pages: @Info2.PageCount <br />
    Title: @Info1.Title <br />
    Author: @Info1.Author
</div>

<div style="height:80vh;">
    <SfPdfViewer2 @ref="Viewer" Height="100%" Width="100%">
        <PdfViewerEvents Created="OnCreated" DocumentLoaded="OnDocumentLoaded"></PdfViewerEvents>
    </SfPdfViewer2>
</div>

@code {

    private SfPdfViewer2? Viewer;

    private DocumentInfo1 Info1 = new();
    private DocumentInfo2 Info2 = new();

    private async Task OnCreated()
    {
        // Created event: Fires when the PDF Viewer component is rendered
        string filePath = "wwwroot/pdf-succinctly.pdf";

        //Load using Syncfusion.Pdf
        PdfLoadedDocument doc = new PdfLoadedDocument(filePath);

        //Read document info
        Info1 = new DocumentInfo1
        {
            Title = doc.DocumentInformation.Title,
            Author = doc.DocumentInformation.Author
        };

        //Load into the viewer
        using MemoryStream ms = new();
        doc.Save(ms);
        byte[] bytes = ms.ToArray();

        doc.Close(true);

        await Viewer!.LoadAsync(bytes);
    }

    private async Task OnDocumentLoaded(LoadEventArgs args)
    {
        // DocumentLoaded event: Fires when the document is successfully loaded
        Info2 = new DocumentInfo2
        {
            Name = args.DocumentName,
            PageCount = args.PageData.PageCount,
        };
    }

    class DocumentInfo1
    {
        public string Title { get; set; } = "";
        public string Author { get; set; } = "";
    }

    class DocumentInfo2
    {
        public string Name { get; set; } = "";
        public int PageCount { get; set; }
    }
}
```

**Notes**
- Use `SfPdfViewer2` component with `@ref` to get direct access to the viewer instance.
- **Created event** triggers when the PDF Viewer component is rendered.
- **DocumentLoaded event** triggers when the document is successfully loaded. Use this event to access document name, page count, and other document-specific details.
- Call methods directly on the viewer reference like `Viewer.ZoomAsync()`, `Viewer.GoToPageAsync()`, etc.

## Tutorial: End‑to‑End — Call Viewer APIs with TextBox Input

This example demonstrates how to use text input with buttons to interact with the loaded PDF viewer:

```cs
@page "/"
@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.Inputs
@using Syncfusion.Blazor.SfPdfViewer

<div style="display:inline-block;">
    <SfTextBox @ref="@TextBox1" Placeholder="Enter zoom percentage"></SfTextBox>
</div>
<SfButton OnClick="OnZoomClick">Zoom</SfButton>

<div style="display:inline-block;">
    <SfTextBox @ref="@TextBox2" Placeholder="Enter page number"></SfTextBox>
</div>
<SfButton OnClick="OnPageClick">Go To Page</SfButton>
<SfButton OnClick="OnClickDownload">Download</SfButton>
<SfButton OnClick="OnClick">Print</SfButton>

<SfPdfViewer2 Height="100%"
              Width="100%"
              DocumentPath="@DocumentPath"
              @ref="@Viewer" />

@code {
    SfPdfViewer2 Viewer;
    SfTextBox TextBox1;
    SfTextBox TextBox2;
    public string DocumentPath { get; set; } = "wwwroot/pdf-succinctly.pdf";

    // Access the loaded PDF Viewer instance - Zoom functionality
    public async void OnZoomClick(MouseEventArgs args)
    {
      int zoomValue = int.Parse(TextBox1.Value.ToString());
      await Viewer.ZoomAsync(zoomValue);
    }
    // Navigate to a specific page
    public async void OnPageClick(MouseEventArgs args)
    {
      int pageIndex = int.Parse(TextBox2.Value.ToString());
      await Viewer.GoToPageAsync(pageIndex);
    }
    
    // Print the PDF document
    public async void OnClick(MouseEventArgs args)
    {
      await Viewer.PrintAsync();
    }
    
    // Download the PDF document
    public async void OnClickDownload(MouseEventArgs args)
    {
      await Viewer.DownloadAsync();
    }
}
```

## See also
- [Blazor PDF Viewer –API Reference](https://help.syncfusion.com/cr/blazor/syncfusion.blazor.sfpdfviewer.sfpdfviewer2.html)
- [Blazor FAQ](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/faq) (e.g., Magnification, Navigation, Print) — ensure the features you need are available