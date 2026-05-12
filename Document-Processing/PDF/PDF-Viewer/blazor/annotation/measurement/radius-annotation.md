---
layout: post
title: Add Radius Measurement Annotations in Blazor SfPdfViewer Component | Syncfusion
description: Learn how to enable, draw, customize, and manage Radius measurement annotations in the Syncfusion Blazor SfPdfViewer component.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Add Radius Measurement Annotations in Blazor SfPdfViewer Component
Radius measurement annotations allow users to draw circular regions and calculate the radius visually.

![Radius overview](../../images/blazor-pdfviewer-radius-annotation.png)

## Enable Radius Measurement

To enable Radius annotations in the Blazor SfPdfViewer, configure the component with annotation support.

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

## Add Radius Annotation

### Add Radius Using the Toolbar
1. Open the **Annotation Toolbar**.
2. Select **Measurement → Radius**.
3. Click and drag on the page to draw the radius.

![Measurement Toolbar](../../images/blazor-pdfviewer-add-calibrate-in-toolbar.png)

N> If Pan mode is active, selecting the Radius tool automatically switches interaction mode.

### Enable Radius Mode
Programmatically switch the viewer into Radius mode using `SetAnnotationModeAsync(AnnotationType.Radius)`.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="EnableRadiusMode">Enable Radius Mode</SfButton>
<SfPdfViewer2 DocumentPath="@DocumentPath" 
              @ref="viewer"
              Width="100%" 
              Height="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    public async void EnableRadiusMode(MouseEventArgs args)
    {
        await viewer.SetAnnotationModeAsync(AnnotationType.Radius);
    }
}

```

#### Exit Radius Mode
```cshtml

@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="ExitRadiusMode">Exit Radius Mode</SfButton>
<SfPdfViewer2 DocumentPath="@DocumentPath" 
              @ref="viewer"
              Width="100%" 
              Height="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    public async void ExitRadiusMode(MouseEventArgs args)
    {
        await viewer.SetAnnotationModeAsync(AnnotationType.None);
    }
}

```

### Add Radius Programmatically
Use the [`AddAnnotationAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_AddAnnotationAsync_Syncfusion_Blazor_SfPdfViewer_PdfAnnotation_) API to add a radius annotation.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="AddRadius">Add Radius</SfButton>
<SfPdfViewer2 DocumentPath="@DocumentPath" 
              @ref="viewer"
              Width="100%" 
              Height="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    public async void AddRadius(MouseEventArgs args)
    {
        PdfAnnotation annotation = new PdfAnnotation();
        annotation.Type = AnnotationType.Radius;
        annotation.PageNumber = 0;
        
        annotation.Bound = new Bound();
        annotation.Bound.X = 200;
        annotation.Bound.Y = 630;
        annotation.Bound.Width = 90;
        annotation.Bound.Height = 90;
        
        await viewer.AddAnnotationAsync(annotation);
    }
}

```

## Customize Radius Appearance
Configure default properties using the [`RadiusSettings`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_RadiusSettings) property (for example, default **fill color**, **stroke color**, **opacity**).

```cshtml

@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 DocumentPath="@DocumentPath"
              @ref="viewer"
              Width="100%"
              Height="100%"
              RadiusSettings="@RadiusSettings">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    PdfViewerRadiusSettings RadiusSettings = new PdfViewerRadiusSettings
    {
        FillColor = "yellow",
        StrokeColor = "orange",
        Opacity = 0.6
    };
}

```

## Manage Radius (Move, Reshape, Edit, Delete)
- **Move**: Drag inside the circle to reposition it.
- **Reshape**: Drag the edge handle to adjust the radius size.

### Edit Radius Annotation

#### Edit Radius (UI)

Use the annotation toolbar to modify:
- **Fill Color** - Edit the fill color using the Edit Color tool

![Editing Calibrate FillColor in Blazor SfPdfViewer](../../images/blazor-pdfviewer-calibrate-fillcolor.png)

- **Stroke Color** - Edit the stroke color using the Edit Stroke Color tool

![Editing Calibrate StrokeColor in Blazor SfPdfViewer](../../images/blazor-pdfviewer-calibrate-stroke-color.png)

- **Thickness** - Edit the border thickness using the Edit Thickness tool

![Editing Calibrate Thickness in Blazor SfPdfViewer](../../images/blazor-pdfviewer-calibrate-thickness.png)

- **Opacity** - Edit the opacity using the Edit Opacity tool

![Editing Calibrate Opacity in Blazor SfPdfViewer](../../images/blazor-pdfviewer-calibrate-opacity.png)

#### Edit Radius Programmatically

Update properties and call `EditAnnotationAsync()`.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="EditRadiusProgrammatically">Edit Radius</SfButton>
<SfPdfViewer2 DocumentPath="@DocumentPath" 
              @ref="viewer"
              Width="100%" 
              Height="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    public async void EditRadiusProgrammatically(MouseEventArgs args)
    {
        List<PdfAnnotation> annotationCollection = await viewer.GetAnnotationsAsync();
        foreach (var ann in annotationCollection)
        {
            if (ann.Type == AnnotationType.Radius)
            {
                ann.StrokeColor = "#0000FF";
                ann.Thickness = 2;
                ann.Opacity = 0.8;
                await viewer.EditAnnotationAsync(ann);
                break;
            }
        }
    }
}

```

### Delete Radius Annotation

Delete Radius Annotation via UI (toolbar/context menu) or programmatically. For supported workflows and APIs, see [**Delete Annotation**](../remove-annotations).

## Set Default Properties During Initialization
Apply defaults for Radius using the [`RadiusSettings`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_RadiusSettings) property.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref="@viewer"
              DocumentPath="@DocumentPath"
              Height="100%" Width="100%"
              RadiusSettings="@RadiusSettings">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    
    PdfViewerRadiusSettings RadiusSettings = new PdfViewerRadiusSettings
    {
        FillColor = "orange",
        Opacity = 0.6,
        StrokeColor = "pink"
    };
}

```

## Set Properties While Adding Individual Annotation
Pass per‑annotation values directly when calling [`AddAnnotationAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_AddAnnotationAsync_Syncfusion_Blazor_SfPdfViewer_PdfAnnotation_).

```cshtml

@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="AddStyledRadius">Add Styled Radius</SfButton>
<SfPdfViewer2 DocumentPath="@DocumentPath" 
              @ref="viewer"
              Width="100%" 
              Height="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    public async void AddStyledRadius(MouseEventArgs args)
    {
        PdfAnnotation annotation = new PdfAnnotation();
        annotation.Type = AnnotationType.Radius;
        annotation.PageNumber = 0;
        
        annotation.Bound = new Bound();
        annotation.Bound.X = 200;
        annotation.Bound.Y = 630;
        annotation.Bound.Width = 90;
        annotation.Bound.Height = 90;
        annotation.FillColor = "orange";
        annotation.Opacity = 0.6;
        annotation.StrokeColor = "pink";
        
        await viewer.AddAnnotationAsync(annotation);
    }
}

```

## Scale Ratio & Units
- Use **Scale Ratio** from the context menu.  
  ![Scale ratio](../images/blazor-pdfviewer-calibrate-scaleratio.png)
- Supported units: Inch, Millimeter, Centimeter, Point, Pica, Feet.  
  ![Scale dialog](../images/blazor-pdfviewer-calibrate-scaledialog.png)

### Set Default Scale Ratio During Initialization
Configure scale defaults using [`MeasurementSettings`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerMeasurementSettings.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerMeasurementSettings_ScaleRatio).

```cshtml

@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref="@viewer"
              DocumentPath="@DocumentPath"
              MeasurementSettings="@MeasurementSettings"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    PdfViewerMeasurementSettings MeasurementSettings = new PdfViewerMeasurementSettings 
    { 
        ScaleRatio = 2, 
        ConversionUnit = CalibrationUnit.Cm 
    };
}

```

## Handle Radius Events
Listen to annotation life-cycle events (add/modify/select/remove). For the full list and parameters, see [**Annotation Events**](../events).

## Export and Import
Radius measurements can be exported or imported with other annotations. For workflows and supported formats, see [**Export and Import annotations**](../import-export-annotation).

## See Also

- [Annotation Events](../events)
- [Export and Import Annotations](../import-export-annotation)
- [Delete Annotations](../delete-annotation)
