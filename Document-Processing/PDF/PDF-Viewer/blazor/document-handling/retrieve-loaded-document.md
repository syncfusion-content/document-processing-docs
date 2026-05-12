---
layout: post
title: Retrieve the Loaded Document in Blazor PDF Viewer | syncfusion
description: Learn how to access the loaded PDF document instance in the Blazor PDF Viewer using component references and the DocumentLoad event.
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Retrieve the Blazor PDF Viewer Instance

This page explains how to access the Blazor PDF Viewer instance using Blazor component references, listen for the `Created` event, and retrieve document information, page details, and metadata—so you can safely invoke viewer APIs after the PDF is loaded.

## Explanation: Why access the loaded document instance?

- The viewer instance (via **Blazor component reference**) gives you a stable handle to call APIs such as [`Zoom`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/magnification), [`Print`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/print), [`Download`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/saving-pdf-file#download), and [`Navigation`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/navigation).
- The **Created event** (fires after the PDF is parsed and pages are ready) is the correct moment to read **document information** (title, author, page count, etc.) and **page metrics**, and to trigger post‑load UI logic.
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

> Always invoke these after the `Created` event fires, or from user actions that occur after load. Guard calls with null checks or readiness flags.

## How‑to: Get the instance with a ref and read details on load

Below is a focused snippet showing:
1) Creating a **component reference** for the viewer,
2) Wiring the **`Created`** event, and
3) Reading basic **document info** and **page count**, then calling **viewer APIs** safely.

```cs
@page "/"

@using Syncfusion.Blazor
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Pdf
@using Syncfusion.Pdf.Parsing

<div style="margin-bottom:10px;">
    <strong>Document Info</strong><br />
    Name: @Info.Name <br />
    Pages: @Info.PageCount <br />
    Title: @Info.Title <br />
    Author: @Info.Author
</div>

<div style="height:80vh;">
    <SfPdfViewer2 @ref="Viewer" Height="100%" Width="100%">
        <PdfViewerEvents Created="OnCreated"></PdfViewerEvents>
    </SfPdfViewer2>
</div>

@code {

    private SfPdfViewer2? Viewer;

    private DocumentInfo Info = new();

    private async Task OnCreated()
    {
        string filePath = "wwwroot/pdf-succinctly.pdf";

        //Load using Syncfusion.Pdf
        PdfLoadedDocument doc = new PdfLoadedDocument(filePath);

        //Read document info
        Info = new DocumentInfo
        {
            Name = Path.GetFileName(filePath),
            PageCount = doc.Pages.Count,
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

    class DocumentInfo
    {
        public string Name { get; set; } = "";
        public int PageCount { get; set; }
        public string Title { get; set; } = "";
        public string Author { get; set; } = "";
    }
}
```

**Notes**
- Use `SfPdfViewer2` component with `@ref` to get direct access to the viewer instance.
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