---
layout: post
title: Determine undo and redo availability in PDF Viewer | Syncfusion
description: Learn how to determine whether undo and redo actions are available in the Blazor SfPdfViewer by binding CanUndo and CanRedo, with a working example.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Determine if SfPdfViewer has values in the undo, redo collections

The Blazor SfPdfViewer makes it possible to determine whether undo and redo history is available by using the [CanUndo](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_CanUndo) and [CanRedo](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_CanRedo). In SfPdfViewer2, bind these properties to boolean fields to reflect availability in the UI.

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
    SfPdfViewer2 viewer;
    bool canUndo = true;
    bool canRedo = true;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    // Event triggers on Undo button click.
    private async Task undo()
    {
        // API to perform Undo action.
        await viewer.UndoAsync();
    }

    // Event triggers on Redo button click.
    private async Task redo()
    {
        // API to perform Redo action.
        await viewer.RedoAsync();
    }
}

```

[View the sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Common/Identify%20the%20PdfViewer%20has%20Undo%2C%20Redo)
