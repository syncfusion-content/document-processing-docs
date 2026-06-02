---
layout: post
title: Highlight Text in Blazor PDF Viewer | Syncfusion
description: Learn how to enable, apply, customize, and manage Highlight annotations in the Syncfusion Blazor SfPdfViewer.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Highlight Annotation in Blazor SfPdfViewer

This guide explains how to **enable**, **apply**, **customize**, and **manage** *Highlight* text markup annotations in the Syncfusion **Blazor SfPdfViewer**.
You can highlight text using the toolbar or context menu, programmatically invoke highlight mode, customize default settings, handle events, and export the PDF with annotations.

## Enable Highlight in the Viewer

The SfPdfViewer component supports highlighting text in PDF documents by default. To enable the annotation toolbar and highlighting functionality, simply add the SfPdfViewer component to your Blazor page:

```cshtml
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 DocumentPath="@DocumentPath"
              Width="100%"
              Height="100%">
</SfPdfViewer2>

@code {
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}
```

## Add Highlight Annotation

### Add Highlight Using the Toolbar

1. Click the **Edit Annotation** button in the SfPdfViewer toolbar. A toolbar appears below it.
2. Select the **Highlight** button in the annotation toolbar to enable highlight mode.
3. Select the text to add the highlight annotation.
   - Alternatively, select the text first and then click **Highlight** to apply it.
   - If **Pan Mode** is active, the viewer automatically switches to **Text Selection** mode.

![Highlight tool](../../images/blazor-pdfviewer-highlight-text.png)

### Apply Highlight Using Context Menu

Right-click a selected text region → select **Highlight**.

![Highlight Context](../../images/blazor-pdfviewer-highlight-context.png)

### Enable Highlight Mode

Switch the viewer into highlight mode using `SetAnnotationModeAsync()`.

```cshtml
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="OnClick">Highlight</SfButton>
<SfPdfViewer2 DocumentPath="@DocumentPath"
              @ref="viewer"
              Width="100%"
              Height="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;

    public async void OnClick(MouseEventArgs args)
    {
        await viewer.SetAnnotationModeAsync(AnnotationType.Highlight);
    }
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}
```

#### Exit Highlight Mode

Switch back to normal mode using:

```cshtml
public async void DisableHighlightMode()
{
    await viewer.SetAnnotationModeAsync(AnnotationType.None);
}
```

### Add Highlight Programmatically

Use [`AddAnnotationAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_AddAnnotationAsync_Syncfusion_Blazor_SfPdfViewer_PdfAnnotation_) to insert highlight at a specific location.

```cshtml
@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.SfPdfViewer

<SfButton OnClick="@AddHighlight">Add Highlight</SfButton>
<SfPdfViewer2 Width="100%" Height="100%" DocumentPath="@DocumentPath" @ref="@Viewer" />

@code {
    SfPdfViewer2 Viewer;
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    public async void AddHighlight(MouseEventArgs args)
    {
        PdfAnnotation annotation = new PdfAnnotation();
        annotation.Type = AnnotationType.Highlight;
        annotation.PageNumber = 0;
        List<Bound> bounds = new List<Bound>();
        Bound bound = new Bound();
        bound.X = 97;
        bound.Y = 110;
        bound.Width = 350;
        bound.Height = 14;
        bounds.Add(bound);
        annotation.Bounds = bounds;
        await Viewer.AddAnnotationAsync(annotation);
    }
}
```

## Customize Highlight Appearance

Configure default highlight settings such as **color** and **opacity** using [`HighlightSettings`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_HighlightSettings).

```cshtml
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref="@viewer"
              DocumentPath="@DocumentPath"
              HighlightSettings="@HighlightSettings"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    PdfViewerHighlightSettings HighlightSettings = new PdfViewerHighlightSettings
    {
        Color = "#ffff00",
        Opacity = 0.9
    };
}
```

N> After changing the default color and opacity using the **Edit Color** and **Edit Opacity** tools, those values become the new defaults for subsequent annotations.

## Manage Highlight (Edit, Delete)

### Edit Highlight

#### Edit Highlight Appearance (UI)

Use the annotation toolbar:
- **Edit Color** tool to change the highlight color
![Editing text markup color in Blazor SfPdfViewer](../../images/blazor-pdfviewer-editing-text-color.png)

- **Edit Opacity** slider to adjust the transparency
![Editing text markup Opacity in Blazor SfPdfViewer](../../images/blazor-pdfviewer-edit-text-opacity.png)

#### Edit Highlight Programmatically

Modify an existing highlight programmatically using [`EditAnnotationAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EditAnnotationAsync_Syncfusion_Blazor_SfPdfViewer_PdfAnnotation_).

```cshtml
@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.SfPdfViewer

<SfButton OnClick="@EditHighlight">Edit Highlight</SfButton>
<SfPdfViewer2 Width="100%" Height="100%" DocumentPath="@DocumentPath" @ref="@Viewer" />

@code {
    SfPdfViewer2 Viewer;
    public string DocumentPath { get; set; } = "wwwroot/Data/Highlight.pdf";

    public async void EditHighlight(MouseEventArgs args)
    {
        // Get annotation collection
        List<PdfAnnotation> annotationCollection = await Viewer.GetAnnotationsAsync();
        // Select the annotation you want to edit
        PdfAnnotation annotation = annotationCollection[0];
        // Change the color of the highlight annotation to blue
        annotation.Color = "#0000ff";
        // Change the opacity to 80% (0.8)
        annotation.Opacity = 0.8;
        await Viewer.EditAnnotationAsync(annotation);
    }
}
```

### Delete Highlight

The SfPdfViewer supports deleting existing annotations through both the UI and API.
Use [`DeleteAnnotationAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_DeleteAnnotationAsync_Syncfusion_Blazor_SfPdfViewer_PdfAnnotation_) to remove an annotation programmatically:

```cshtml
@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.SfPdfViewer

<SfButton OnClick="@DeleteHighlight">Delete Highlight</SfButton>
<SfPdfViewer2 Width="100%" Height="100%" DocumentPath="@DocumentPath" @ref="@Viewer" />

@code {
    SfPdfViewer2 Viewer;
    public string DocumentPath { get; set; } = "wwwroot/Data/Highlight.pdf";

    public async void DeleteHighlight(MouseEventArgs args)
    {
        // Get the annotation collection
        List<PdfAnnotation> annotationCollection = await Viewer.GetAnnotationsAsync();
        // Select the annotation you want to delete
        PdfAnnotation annotation = annotationCollection[0];
        // Delete the specified annotation
        await Viewer.DeleteAnnotationAsync(annotation);
    }
}
```

## Add Multiple Highlights with Custom Properties

Set custom properties for individual highlights when adding them programmatically:

```cshtml
@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.SfPdfViewer

<SfButton OnClick="@AddMultipleHighlights">Add Multiple Highlights</SfButton>
<SfPdfViewer2 Width="100%" Height="100%" DocumentPath="@DocumentPath" @ref="@Viewer" />

@code {
    SfPdfViewer2 Viewer;
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    public async void AddMultipleHighlights(MouseEventArgs args)
    {
        // Highlight 1 - Yellow
        PdfAnnotation annotation1 = new PdfAnnotation();
        annotation1.Type = AnnotationType.Highlight;
        annotation1.PageNumber = 0;
        List<Bound> bounds1 = new List<Bound>();
        Bound bound1 = new Bound();
        bound1.X = 100;
        bound1.Y = 150;
        bound1.Width = 320;
        bound1.Height = 14;
        bounds1.Add(bound1);
        annotation1.Bounds = bounds1;
        annotation1.Color = "#ffff00";
        annotation1.Opacity = 0.9;
        await Viewer.AddAnnotationAsync(annotation1);

        // Highlight 2 - Red
        PdfAnnotation annotation2 = new PdfAnnotation();
        annotation2.Type = AnnotationType.Highlight;
        annotation2.PageNumber = 0;
        List<Bound> bounds2 = new List<Bound>();
        Bound bound2 = new Bound();
        bound2.X = 110;
        bound2.Y = 220;
        bound2.Width = 300;
        bound2.Height = 14;
        bounds2.Add(bound2);
        annotation2.Bounds = bounds2;
        annotation2.Color = "#ff1010";
        annotation2.Opacity = 0.9;
        await Viewer.AddAnnotationAsync(annotation2);
    }
}
```

## Disable TextMarkup Annotation

Disable text markup annotations (including highlight) using the `EnableTextMarkupAnnotation` property:

```cshtml
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 DocumentPath="@DocumentPath"
              EnableTextMarkupAnnotation="false"
              Width="100%"
              Height="100%">
</SfPdfViewer2>

@code {
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}
```

## Handle Highlight Events

The SfPdfViewer provides annotation life-cycle events that notify when highlight annotations are added, modified, selected, or removed.
For the full list of available events and their descriptions, see [**Annotation Events**](../events)

## Export and Import

The SfPdfViewer supports exporting and importing annotations, allowing you to save annotations as a separate file or load existing annotations back into the viewer.
For full details on supported formats and steps to export or import annotations, see [Export and Import Annotation](../import-export-annotation)

## See Also

- [Annotation Events](../events)
- [Export and Import Annotations](../import-export-annotation)
- [Delete Annotations](../delete-annotation)
