---
layout: post
title: Strikethrough Text in Blazor PDF Viewer | Syncfusion
description: Learn how to enable, apply, customize, and manage Strikethrough annotations in the Syncfusion Blazor SfPdfViewer.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Strikethrough Annotation (Text Markup) in Blazor SfPdfViewer

This guide explains how to **enable**, **apply**, **customize**, and **manage** *Strikethrough* text markup annotations in the Syncfusion **Blazor SfPdfViewer**. You can apply strikethrough using the toolbar or context menu, programmatically invoke strikethrough mode, customize default settings, handle events, and export the PDF with annotations.

## Enable Strikethrough in the Viewer

The SfPdfViewer component supports strikethrough annotations in PDF documents by default. To enable the annotation toolbar and strikethrough functionality, simply add the SfPdfViewer component to your Blazor page:

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

## Add Strikethrough Annotation

### Add Strikethrough Using the Toolbar

1. Click the **Edit Annotation** button in the SfPdfViewer toolbar. A toolbar appears below it.
2. Select the **Strikethrough** button in the annotation toolbar to enable strikethrough mode.
3. Select the text to add the strikethrough annotation.
   - Alternatively, select the text first and then click **Strikethrough** to apply it.
   - If **Pan Mode** is active, the viewer automatically switches to **Text Selection** mode.

![Strikethrough tool](../../images/blazor-pdfviewer-strike-through-text.png)

### Add Strikethrough Using Context Menu

Right-click a selected text region → select **Strikethrough**.

![Strikethrough Context](../../images/blazor-pdfviewer-strike-through-in-contextmenu.png)

### Enable Strikethrough Mode

Switch the viewer into strikethrough mode using `SetAnnotationModeAsync()`.

```cshtml
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="OnClick">Strikethrough</SfButton>
<SfPdfViewer2 DocumentPath="@DocumentPath"
              @ref="viewer"
              Width="100%"
              Height="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;

    public async void OnClick(MouseEventArgs args)
    {
        await viewer.SetAnnotationModeAsync(AnnotationType.Strikethrough);
    }
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}
```

#### Exit Strikethrough Mode

Switch back to normal mode using:

```cshtml
public async void DisableStrikethroughMode()
{
    await viewer.SetAnnotationModeAsync(AnnotationType.None);
}
```

### Add Strikethrough Programmatically

Use [`AddAnnotationAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_AddAnnotationAsync_Syncfusion_Blazor_SfPdfViewer_PdfAnnotation_) to insert a strikethrough at a specific location.

```cshtml
@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.SfPdfViewer

<SfButton OnClick="@AddStrikethrough">Add Strikethrough</SfButton>
<SfPdfViewer2 Width="100%" Height="100%" DocumentPath="@DocumentPath" @ref="@Viewer" />

@code {
    SfPdfViewer2 Viewer;
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    public async void AddStrikethrough(MouseEventArgs args)
    {
        PdfAnnotation annotation = new PdfAnnotation();
        annotation.Type = AnnotationType.Strikethrough;
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

## Customize Strikethrough Appearance

Configure default strikethrough settings such as **color** and **opacity** using [`StrikethroughSettings`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_StrikethroughSettings).

```cshtml
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref="@viewer"
              DocumentPath="@DocumentPath"
              StrikethroughSettings="@StrikethroughSettings"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    PdfViewerStrikethroughSettings StrikethroughSettings = new PdfViewerStrikethroughSettings
    {
        Color = "#ff00ff",
        Opacity = 0.9
    };
}
```

N> After changing the default color and opacity using the **Edit Color** and **Edit Opacity** tools, those values become the new defaults for subsequent annotations.

## Manage Strikethrough (Edit, Delete)

### Edit Strikethrough

#### Edit Strikethrough Appearance (UI)

Use the annotation toolbar:
- **Edit Color** tool to change the Strikethrough color
![Editing text markup color in Blazor SfPdfViewer](../../images/blazor-pdfviewer-editing-text-color.png)

- **Edit Opacity** slider to adjust the transparency
![Editing text markup Opacity in Blazor SfPdfViewer](../../images/blazor-pdfviewer-edit-text-opacity.png)

#### Edit Strikethrough Programmatically

Modify an existing strikethrough programmatically using [`EditAnnotationAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EditAnnotationAsync_Syncfusion_Blazor_SfPdfViewer_PdfAnnotation_).

```cshtml
@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.SfPdfViewer

<SfButton OnClick="@EditStrikethrough">Edit Strikethrough</SfButton>
<SfPdfViewer2 Width="100%" Height="100%" DocumentPath="@DocumentPath" @ref="@Viewer" />

@code {
    SfPdfViewer2 Viewer;
    public string DocumentPath { get; set; } = "wwwroot/Data/Strikethrough.pdf";

    public async void EditStrikethrough(MouseEventArgs args)
    {
        // Get annotation collection
        List<PdfAnnotation> annotationCollection = await Viewer.GetAnnotationsAsync();
        // Select the annotation you want to edit
        PdfAnnotation annotation = annotationCollection[0];
        // Change the color of the strikethrough annotation to red
        annotation.Color = "#ff0000";
        // Change the opacity to 80% (0.8)
        annotation.Opacity = 0.8;
        await Viewer.EditAnnotationAsync(annotation);
    }
}
```

### Delete Strikethrough

The SfPdfViewer supports deleting existing annotations through both the UI and API.
Use [`DeleteAnnotationAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_DeleteAnnotationAsync_Syncfusion_Blazor_SfPdfViewer_PdfAnnotation_) to remove an annotation programmatically:

```cshtml
@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.SfPdfViewer

<SfButton OnClick="@DeleteStrikethrough">Delete Strikethrough</SfButton>
<SfPdfViewer2 Width="100%" Height="100%" DocumentPath="@DocumentPath" @ref="@Viewer" />

@code {
    SfPdfViewer2 Viewer;
    public string DocumentPath { get; set; } = "wwwroot/Data/Strikethrough.pdf";

    public async void DeleteStrikethrough(MouseEventArgs args)
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

## Add Multiple Strikethrough Annotations with Custom Properties

Set custom properties for individual strikethrough annotations when adding them programmatically:

```cshtml
@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.SfPdfViewer

<SfButton OnClick="@AddMultipleStrikethroughs">Add Multiple Strikethroughs</SfButton>
<SfPdfViewer2 Width="100%" Height="100%" DocumentPath="@DocumentPath" @ref="@Viewer" />

@code {
    SfPdfViewer2 Viewer;
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    public async void AddMultipleStrikethroughs(MouseEventArgs args)
    {
        // Strikethrough 1 - Yellow
        PdfAnnotation annotation1 = new PdfAnnotation();
        annotation1.Type = AnnotationType.Strikethrough;
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

        // Strikethrough 2 - Red
        PdfAnnotation annotation2 = new PdfAnnotation();
        annotation2.Type = AnnotationType.Strikethrough;
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

Disable text markup annotations (including strikethrough) using the `EnableTextMarkupAnnotation` property:

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

## Handle Strikethrough Events

The SfPdfViewer provides annotation life-cycle events that notify when strikethrough annotations are added, modified, selected, or removed. For the full list of available events and their descriptions, see [**Annotation Events**](../events).

## Export and Import

The SfPdfViewer supports exporting and importing annotations, allowing you to save annotations as a separate file or load existing annotations back into the viewer. For full details on supported formats and steps to export or import annotations, see [**Export and Import Annotations**](../import-export-annotation).

## See Also

- [Annotation Events](../events)
- [Export and Import Annotations](../import-export-annotation)
- [Delete Annotations](../delete-annotation)
