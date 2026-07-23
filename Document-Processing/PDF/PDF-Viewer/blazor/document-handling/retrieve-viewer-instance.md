---
layout: post
title: Retrieve PDF Viewer Instance Blazor PDF Viewer | syncfusion
description: Learn how to access the PDF Viewer instance in the Blazor PDF Viewer using component references and the DocumentLoad event.
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Retrieve the Blazor PDF Viewer Instance

This page explains how to access the PDF Viewer instance in the Blazor PDF Viewer using Blazor component references, listen for the [DocumentLoaded](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_DocumentLoaded) event, and retrieve document information, page details, and metadata—so you can safely invoke viewer APIs after the PDF document is loaded.

## Why Access the PDF Viewer Instance

- The viewer instance (via **Blazor component reference**) gives you a stable handle to call APIs such as [`ZoomAsync`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/magnification), [`PrintAsync`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/print), [`DownloadAsync`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/saving-pdf-file#download), and [`GoToPageAsync`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/navigation).
- The **Created event** fires when the PDF Viewer component is rendered and initialized in the DOM.
- The **DocumentLoaded event** (fires after the PDF document is fully loaded and parsed) is the correct moment to read **document information** (Document Name, page count) and **page metrics**, and to trigger post-load UI logic. Use the [DocumentLoaded](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_DocumentLoaded) event to access document details after a successful load, and the [DocumentLoadFailed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_DocumentLoadFailed) event to handle load failures.
- Accessing the instance too early (before load completes) may cause null-reference errors or incomplete information.

## What You Can Access and Call After Load

After the PDF is loaded, you can:

- **Read document information**: title, author, subject, keywords, and page count.
- **Read page details**: total pages, current page, and page size.
- **Call Viewer APIs**, for example:
  - **[Zoom](../magnification)**: `ZoomAsync(zoomPercentage)`. Valid range: 50–400.
  - **[Navigation](../interactive-pdf-navigation-overview)**: `GoToPageAsync(pageIndex)` where `pageIndex` is 1-based.
  - **[Interactions](../interaction)**: enable selection mode, panning, and other interaction modes.
  - **Export**: [DownloadAsync()](../saving-pdf-file#download) and [PrintAsync()](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/print). Both methods take no parameters and return `Task`.

N> The [Created](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_Created) event triggers when the PDF Viewer component is rendered in the DOM. The [DocumentLoaded](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_DocumentLoaded) event triggers when the document is successfully loaded and parsed.

## Get the Instance with a Ref and Read Details on Load

The following example shows:
1. Creating a **component reference** for the viewer,
2. Wiring the [Created](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_Created) event for viewer initialization and the [DocumentLoaded](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_DocumentLoaded) event for document details, and
3. Reading basic **document info** (name and page count) from the `DocumentLoaded` event, then calling viewer APIs safely.

```csharp
@page "/"

@using Syncfusion.Blazor
@using Syncfusion.Blazor.SfPdfViewer

<div style="margin-bottom:10px;">
    <strong>Document Info</strong><br />
    Name: @Info.Name <br />
    Pages: @Info.PageCount
</div>

<div style="height:80vh;">
    <SfPdfViewer2 @ref="Viewer" Height="100%" Width="100%">
        <PdfViewerEvents Created="OnCreated"
                         DocumentLoaded="OnDocumentLoaded"
                         DocumentLoadFailed="OnDocumentLoadFailed"></PdfViewerEvents>
    </SfPdfViewer2>
</div>

@code {

    private SfPdfViewer2? Viewer;

    // DocumentInfo is a sample placeholder model. In a real project,
    // place this class in a separate Models folder.
    private DocumentInfo Info = new();

    private async Task OnCreated()
    {
        // Created event: Fires when the PDF Viewer component is rendered
        if (Viewer is null) return;
        await Viewer.LoadAsync("wwwroot/pdf-succinctly.pdf");
    }

    private void OnDocumentLoaded(LoadEventArgs args)
    {
        // DocumentLoaded event: Fires when the document is successfully loaded
        Info = new DocumentInfo
        {
            Name = args.DocumentName,
            PageCount = args.PageCount,
        };
    }

    private void OnDocumentLoadFailed(FailureEventArgs args)
    {
        // DocumentLoadFailed event: Fires when document loading fails
        Console.Error.WriteLine($"Failed to load document: {args.ErrorMessage}");
        // Handle the failure (for example, show a user-facing message)
    }

    class DocumentInfo
    {
        public string Name { get; set; } = "";
        public int PageCount { get; set; }
    }
}
```

N>
* Use `SfPdfViewer2` component with `@ref` to get direct access to the viewer instance.
* `Created` event triggers when the PDF Viewer component is rendered.
* `DocumentLoaded` event triggers when the document is successfully loaded. Use this event to access document name, page count, and other document-specific details.
* Always null-check the `Viewer` reference before calling any viewer API. Methods such as `Viewer.ZoomAsync()`, `Viewer.GoToPageAsync()`, `Viewer.PrintAsync()`, and `Viewer.DownloadAsync()` are safe to invoke only after the `DocumentLoaded` event has fired or from a user action that occurs after load.

## End-to-End Example: Call Viewer APIs with TextBox Input

This example shows how to use text inputs with buttons to interact with the loaded PDF viewer, including reading document info, zooming, navigating, printing, and downloading.

```csharp
@page "/"
@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.Inputs
@using Syncfusion.Blazor.SfPdfViewer

<div style="margin-bottom:10px;">
    <strong>Document Info</strong><br />
    Name: @Info.Name <br />
    Pages: @Info.PageCount
</div>

<div style="margin-bottom:10px;">
    <div style="display:inline-block;">
        <SfTextBox @ref="@TextBox1" Placeholder="Enter zoom percentage (50-400)"></SfTextBox>
    </div>
    <SfButton OnClick="OnZoomClick">Zoom</SfButton>

    <div style="display:inline-block;">
        <SfTextBox @ref="@TextBox2" Placeholder="Enter page number"></SfTextBox>
    </div>
    <SfButton OnClick="OnPageClick">Go To Page</SfButton>
    <SfButton OnClick="OnPrintClick">Print</SfButton>
    <SfButton OnClick="OnClickDownload">Download</SfButton>
</div>

<SfPdfViewer2 Height="100%"
              Width="100%"
              DocumentPath="@DocumentPath"
              @ref="@Viewer">
    <PdfViewerEvents DocumentLoaded="OnDocumentLoaded"
                     DocumentLoadFailed="OnDocumentLoadFailed"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    private SfPdfViewer2? Viewer;
    private SfTextBox? TextBox1;
    private SfTextBox? TextBox2;
    private string DocumentPath { get; set; } = "wwwroot/pdf-succinctly.pdf";

    private DocumentInfo Info = new();

    // Read document information on load
    private void OnDocumentLoaded(LoadEventArgs args)
    {
        Info = new DocumentInfo
        {
            Name = args.DocumentName,
            PageCount = args.PageCount,
        };
    }

    // Handle document load failures
    private void OnDocumentLoadFailed(FailureEventArgs args)
    {
        Console.Error.WriteLine($"Failed to load document: {args.ErrorMessage}");
    }

    // Zoom functionality (valid range: 50-400)
    private async Task OnZoomClick(MouseEventArgs args)
    {
        try
        {
            await Viewer.ZoomAsync(zoomValue);
        }
        catch (Exception ex)
        {
            Console.Error.WriteLine($"Zoom failed: {ex.Message}");
        }
    }

    // Navigate to a specific 1-based page
    private async Task OnPageClick(MouseEventArgs args)
    {
        try
        {
            await Viewer.GoToPageAsync(pageIndex);
        }
        catch (Exception ex)
        {
            Console.Error.WriteLine($"Navigation failed: {ex.Message}");
        }
    }

    // Print the PDF document
    private async Task OnPrintClick(MouseEventArgs args)
    {
        if (Viewer is null) return;
        await Viewer.PrintAsync();
    }

    // Download the PDF document
    private async Task OnClickDownload(MouseEventArgs args)
    {
        if (Viewer is null) return;
        await Viewer.DownloadAsync();
    }
}
```

## See also

- [Blazor PDF Viewer – API Reference](https://help.syncfusion.com/cr/blazor/syncfusion.blazor.sfpdfviewer.sfpdfviewer2.html)
- [Magnification (Zoom) in Blazor PDF Viewer](../magnification)
- [Navigation in Blazor PDF Viewer](../interactive-pdf-navigation-overview)
- [Print PDF in Blazor PDF Viewer](../print/overview)
- [Download PDF in Blazor PDF Viewer](../saving-pdf-file#download)
- [Blazor PDF Viewer FAQ](../faq)