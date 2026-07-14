---
layout: post
title: Squiggly Annotation (Text Markup) in Blazor PDF Viewer | Syncfusion
description: Learn how to enable, apply, customize, and manage Squiggly annotations in the Blazor SfPdfViewer Component.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Squiggly Annotation in Blazor SfPdfViewer Component

This guide explains how to **enable**, **apply**, **customize**, and **manage** *Squiggly* text markup annotations in the Syncfusion **Blazor SfPdfViewer** component.

## Enable Squiggly Annotation in the Viewer

Squiggly is enabled by default. To use the annotation toolbar, add the `SfPdfViewer` component to your Blazor page:

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

## Disable TextMarkup Annotation

To disable all text markup annotations (including squiggly) so they do not appear in the toolbar or context menu, set `EnableTextMarkupAnnotation="false"`:

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

## Add Squiggly Annotation

### Add Squiggly Annotation Using the Toolbar

1. Click the **Edit Annotation** button in the SfPdfViewer toolbar. An annotation toolbar appears below the main toolbar.
2. Select the **Squiggly** button in the annotation toolbar to enable squiggly mode.
3. Select the text in the document to add the squiggly annotation.
   - Alternatively, select the text first and then click **Squiggly** to apply it.
   - If **Pan Mode** is active, the viewer automatically switches to **Text Selection** mode.

![Squiggly tool](../../images/blazor-pdfviewer-squiggly-text.png)

### Apply Squiggly Annotation Using the Context Menu

1. Select text in the document.
2. Right-click the selected text region.
3. Choose **Squiggly** from the context menu.

![Squiggly context](../../images/blazor-pdfviewer-squiggly-in-contextmenu.png)

### Enable Squiggly Annotation Mode Programmatically

Switch the viewer into squiggly mode using [`SetAnnotationModeAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_SetAnnotationModeAsync_Syncfusion_Blazor_SfPdfViewer_AnnotationType_).

```cshtml
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="EnableSquigglyMode">Squiggly</SfButton>
<SfPdfViewer2 DocumentPath="@DocumentPath"
              @ref="Viewer"
              Width="100%"
              Height="100%">
</SfPdfViewer2>

@code {
    private SfPdfViewer2 Viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    private async Task EnableSquigglyMode(MouseEventArgs args)
    {
        await Viewer.SetAnnotationModeAsync(AnnotationType.Squiggly);
    }
}
```

#### Exit Squiggly Annotation Mode

Switch back to normal mode using:

```csharp
private async Task DisableSquigglyMode()
{
    await Viewer.SetAnnotationModeAsync(AnnotationType.None);
}
```

### Add Squiggly Annotation Programmatically

Use [`AddAnnotationAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_AddAnnotationAsync_Syncfusion_Blazor_SfPdfViewer_PdfAnnotation_) to insert a squiggly at a specific location.

```cshtml
@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.SfPdfViewer

<SfButton OnClick="@AddSquiggly">Add Squiggly</SfButton>
<SfPdfViewer2 Width="100%" Height="100%" DocumentPath="@DocumentPath" @ref="@Viewer" />

@code {
    private SfPdfViewer2 Viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    private async Task AddSquiggly(MouseEventArgs args)
    {
        PdfAnnotation annotation = new PdfAnnotation
        {
            Type = AnnotationType.Squiggly,
            // PageNumber is 0-based in the SfPdfViewer API
            PageNumber = 0,
            Color = "#00ff00",
            Opacity = 0.9,
            Bounds = new List<Bound>
            {
                new Bound { X = 97, Y = 110, Width = 350, Height = 14 }
            }
        };
        await Viewer.AddAnnotationAsync(annotation);
    }
}
```

## Customize Squiggly Annotation Appearance

Configure default squiggly settings such as **color** and **opacity** using [`SquigglySettings`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_SquigglySettings).

```cshtml
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref="@Viewer"
              DocumentPath="@DocumentPath"
              SquigglySettings="@SquigglySettingsModel"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    private SfPdfViewer2 Viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    private PdfViewerSquigglySettings SquigglySettingsModel = new PdfViewerSquigglySettings
    {
        Color = "#00ff00",
        Opacity = 0.9
    };
}
```

N> After changing the default color and opacity using the **Edit Color** and **Edit Opacity** tools, those values become the new defaults for subsequent annotations.

## Manage Squiggly Annotation (Edit, Delete)

### Edit Squiggly Annotation

#### Edit Squiggly Annotation Appearance Using the UI

Use the annotation toolbar:

- **Edit Color** tool to change the squiggly color.

![Editing text markup color in Blazor SfPdfViewer](../../images/blazor-pdfviewer-editing-text-color.png)

- **Edit Opacity** slider to adjust the transparency.

![Editing text markup Opacity in Blazor SfPdfViewer](../../images/blazor-pdfviewer-edit-text-opacity.png)

#### Edit Squiggly Annotation Programmatically

Modify an existing squiggly programmatically using [`EditAnnotationAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EditAnnotationAsync_Syncfusion_Blazor_SfPdfViewer_PdfAnnotation_).

```cshtml
@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.SfPdfViewer

<SfButton OnClick="@EditSquiggly">Edit Squiggly</SfButton>
<SfPdfViewer2 Width="100%" Height="100%" DocumentPath="@DocumentPath" @ref="@Viewer" />

@code {
    private SfPdfViewer2 Viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    private async Task EditSquiggly(MouseEventArgs args)
    {
        // Get the annotation collection
        List<PdfAnnotation> annotationCollection = await Viewer.GetAnnotationsAsync();
        if (annotationCollection is null || annotationCollection.Count == 0)
        {
            return;
        }
        // Select the first squiggly annotation on the first page
        PdfAnnotation annotation = annotationCollection
            .FirstOrDefault(a => a.Type == AnnotationType.Squiggly && a.PageNumber == 0)
            ?? annotationCollection[0];
        // Change the color of the squiggly annotation to red
        annotation.Color = "#ff0000";
        // Change the opacity to 80% (0.8)
        annotation.Opacity = 0.8;
        await Viewer.EditAnnotationAsync(annotation);
    }
}
```

### Delete Squiggly Annotation

The SfPdfViewer supports deleting existing annotations through both the UI and the API. To delete from the UI, select the squiggly and press **Delete** or use the **Delete** tool on the annotation toolbar.

To delete programmatically, use [`DeleteAnnotationAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_DeleteAnnotationAsync_Syncfusion_Blazor_SfPdfViewer_PdfAnnotation_):

```cshtml
@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.SfPdfViewer

<SfButton OnClick="@DeleteSquiggly">Delete Squiggly</SfButton>
<SfPdfViewer2 Width="100%" Height="100%" DocumentPath="@DocumentPath" @ref="@Viewer" />

@code {
    private SfPdfViewer2 Viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    private async Task DeleteSquiggly(MouseEventArgs args)
    {
        // Get the annotation collection
        List<PdfAnnotation> annotationCollection = await Viewer.GetAnnotationsAsync();
        if (annotationCollection is null || annotationCollection.Count == 0)
        {
            return;
        }
        // Select the first squiggly annotation on the first page
        PdfAnnotation annotation = annotationCollection
            .FirstOrDefault(a => a.Type == AnnotationType.Squiggly && a.PageNumber == 0)
            ?? annotationCollection[0];
        // Delete the specified annotation
        await Viewer.DeleteAnnotationAsync(annotation);
    }
}
```

## Add Multiple Squiggly Annotations with Custom Properties

To add several squiggly annotations with different colors and positions in one operation, call [`AddAnnotationAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_AddAnnotationAsync_Syncfusion_Blazor_SfPdfViewer_PdfAnnotation_) for each [`PdfAnnotation`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfAnnotation.html). This is an extension of the [Add Squiggly Programmatically](#add-squiggly-programmatically) example.

```cshtml
@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.SfPdfViewer
<SfButton OnClick="@AddMultipleSquigglies">Add Multiple Squigglies</SfButton>
<SfPdfViewer2 Width="100%" Height="100%" DocumentPath="@DocumentPath" @ref="@Viewer" />

@code {
    private SfPdfViewer2 Viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    private async Task AddMultipleSquigglies(MouseEventArgs args)
    {
        // Squiggly 1 - Yellow on the first page (index 0)
        await Viewer.AddAnnotationAsync(new PdfAnnotation
        {
            Type = AnnotationType.Squiggly,
            PageNumber = 0,
            Color = "#ffff00",
            Opacity = 0.9,
            Bounds = new List<Bound>
            {
                new Bound { X = 100, Y = 150, Width = 320, Height = 14 }
            }
        });

        // Squiggly 2 - Red on the first page (index 0)
        await Viewer.AddAnnotationAsync(new PdfAnnotation
        {
            Type = AnnotationType.Squiggly,
            PageNumber = 0,
            Color = "#ff1010",
            Opacity = 0.9,
            Bounds = new List<Bound>
            {
                new Bound { X = 110, Y = 220, Width = 300, Height = 14 }
            }
        });
    }
}
```

## Handle Squiggly Annotation Events

The SfPdfViewer provides annotation life-cycle events that fire when squiggly annotations are added, modified, selected, or removed. Subscribe to events through the `PdfViewerEvents` tag.

```cshtml
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 DocumentPath="@DocumentPath"
              Height="100%"
              Width="100%">
    <PdfViewerEvents AnnotationAdded="@OnAnnotationAdded"
                     AnnotationRemoved="@OnAnnotationRemoved"
                     AnnotationPropertiesChanged="@OnAnnotationPropertiesChanged" />
</SfPdfViewer2>

@code {
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    private async Task OnAnnotationAdded(AnnotationAddEventArgs args)
    {
        if (args.AnnotationType == AnnotationType.Squiggly)
        {
            // Squiggly was added
        }
    }

    private async Task OnAnnotationRemoved(AnnotationRemoveEventArgs args)
    {
        if (args.AnnotationType == AnnotationType.Squiggly)
        {
            // Squiggly was removed
        }
    }

    private async Task OnAnnotationPropertiesChanged(AnnotationPropertiesChangeEventArgs args)
    {
        if (args.AnnotationType == AnnotationType.Squiggly)
        {
            // Squiggly color or opacity changed
        }
    }
}
```

For the full list of available events and their descriptions, see [Annotation Events](../events).

## Export and Import

The SfPdfViewer supports exporting and importing annotations as **JSON** or **XFDF**, allowing you to save annotations as a separate file or load existing annotations back into the viewer. For full details on supported formats and steps to export or import annotations, see [Export and Import Annotations](../import-export-annotation).

## See also

- [Annotation Events](../events)
- [Export and Import Annotations](../import-export-annotation)
- [Delete Annotations](../delete-annotation)
