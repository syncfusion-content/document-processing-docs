---
layout: post
title: Undo and Redo Annotation in Blazor SfPdfViewer Component | Syncfusion
description: Learn how to undo and redo annotation changes in the Syncfusion Blazor SfPdfViewer with UI and programmatic examples.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Undo and redo annotations in Blazor SfPdfViewer

The Blazor SfPdfViewer supports undo and redo for annotations.

![Undo-redo](../images/annotation-undo-redo.png)

Undo and redo actions can be performed by using either of the following methods:

1. Using keyboard shortcuts (desktop):
    After performing an annotation action, press `Ctrl+Z` to undo and `Ctrl+Y` to redo on Windows and Linux. On macOS, use `Command+Z` to undo and `Command+Shift+Z` to redo.
2. Using the toolbar:
    Use the **Undo** and **Redo** tools in the toolbar.
3. Programmatically:
    Call the [UndoAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_UndoAsync) and [RedoAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_RedoAsync) methods from the client side.

## Programmatic Undo and Redo

Refer to the following code snippet to call undo and redo actions programmatically.

```cshtml
@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.SfPdfViewer

<div style="margin-bottom: 8px;">
    <SfButton OnClick="UndoAnnotation">Undo</SfButton>
    <SfButton OnClick="RedoAnnotation">Redo</SfButton>
</div>

<SfPdfViewer2 @ref="viewer"
              DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="650px"
              Width="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;

    public async void UndoAnnotation(MouseEventArgs args)
    {
        await viewer.UndoAsync();
    }

    public async void RedoAnnotation(MouseEventArgs args)
    {
        await viewer.RedoAsync();
    }
}
```

## See also

- [Annotation Overview](./overview)
- [Text Markup Annotation](./text-markup/highlight-annotation)
- [Shape Annotation](./shape/line-annotation)
- [Measurement Annotation](./measurement/distance-annotation)
- [Free Text Annotation](./free-text-annotation)
- [Ink Annotation](./ink-annotation)
- [Stamp Annotation](./stamp-annotation)
- [Comments](./comments)
- [Delete Annotation](./delete-annotation)
- [Export and Import Annotation](./export-annotation)