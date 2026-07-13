---
layout: post
title: Determine undo and redo availability in PDF Viewer | Syncfusion
description: Learn how to determine whether undo and redo actions are available in the Blazor SfPdfViewer by binding CanUndo and CanRedo, with a working example.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Determine if SfPdfViewer has values in the undo and redo collections

The Blazor SfPdfViewer exposes the [CanUndo](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_CanUndo) and [CanRedo](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_CanRedo) properties to indicate whether undo and redo history is available. In `SfPdfViewer`, bind these properties to boolean fields to reflect availability in the UI.

The following example binds these properties and enables or disables the buttons as the undo and redo history changes.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

@if (canUndo)
{
    <button @onclick="undo">Undo</button>
}

else
{
    <button @onclick="undo" disabled>Undo</button>
}

@if (canRedo)
{
    <button @onclick="redo">Redo</button>
}

else
{
    <button @onclick="redo" disabled>Redo</button>
}

<SfPdfViewer2 @ref="@viewer"
              @bind-CanUndo="@canUndo"
              @bind-CanRedo="@canRedo"
              DocumentPath="@DocumentPath"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code
{
    private SfPdfViewer2 viewer;
    private bool canUndo = true;
    private bool canRedo = true;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    // Triggered when the Undo button is clicked.
    private async Task undo()
    {
        // Performs the Undo action.
        await viewer.UndoAsync();
    }

    // Triggered when the Redo button is clicked.
    private async Task redo()
    {
        // Performs the Redo action.
        await viewer.RedoAsync();
    }
}

```

[View the sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Common/Identify%20the%20PdfViewer%20has%20Undo%2C%20Redo)

## See also

* [Annotations Undo and Redo](../annotation/annotations-undo-redo)
* [Events in SfPdfViewer Component](../events)