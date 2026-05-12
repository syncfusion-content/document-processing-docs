---
layout: post
title: Add Area Measurement Annotations in Blazor PDF Viewer | Syncfusion
description: Learn how to enable, draw, customize, and manage Area measurement annotations in the Syncfusion Blazor SfPdfViewer.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Add Area Measurement Annotations in Blazor SfPdfViewer

Area is a measurement annotation used to calculate the surface of a closed region on a PDF page—ideal for engineering, construction, or design reviews.

![Area overview](../../images/blazor-pdfviewer-area-annotation.png)

## Enable Area Measurement

The SfPdfViewer component supports area measurement annotations by default. To enable the annotation toolbar and measurement functionality, simply add the SfPdfViewer component to your Blazor page:

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

## Add Area Annotation

### Add Area Using the Toolbar

1. Click the **Edit Annotation** button in the SfPdfViewer toolbar. A toolbar appears below it.
2. Click the **measurement Annotation** dropdown button. A dropdown appears with measurement annotation types.
3. Select **Area** to enable area measurement mode.
4. Click points on the page to define the polygon; double-click to close and finalize the area.

![Measurement Toolbar](../../images/blazor-pdfviewer-add-calibrate-in-toolbar.png)

> **Tip:** If Pan mode is active, choosing a measurement tool switches the viewer into the appropriate interaction mode for a smoother workflow.

### Enable Area Mode

Programmatically switch the viewer into Area mode using `SetAnnotationModeAsync()`.

```cshtml
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="OnClick">Area Measurement</SfButton>
<SfPdfViewer2 DocumentPath="@DocumentPath"
              @ref="viewer"
              Width="100%"
              Height="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;

    public async void OnClick(MouseEventArgs args)
    {
        await viewer.SetAnnotationModeAsync(AnnotationType.Area);
    }
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}
```

#### Exit Area Mode

Switch back to normal mode using:

```cshtml
public async void ExitAreaMode()
{
    await viewer.SetAnnotationModeAsync(AnnotationType.None);
}
```

### Add Area Programmatically

Use [`AddAnnotationAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_AddAnnotationAsync_Syncfusion_Blazor_SfPdfViewer_PdfAnnotation_) to add an area measurement by providing **VertexPoints** for a closed region.

```cshtml
@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.SfPdfViewer

<SfButton OnClick="@AddArea">Add Area Annotation</SfButton>
<SfPdfViewer2 Width="100%" Height="100%" DocumentPath="@DocumentPath" @ref="@Viewer" />

@code {
    SfPdfViewer2 Viewer;
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    public async void AddArea(MouseEventArgs args)
    {
        PdfAnnotation annotation = new PdfAnnotation();
        annotation.Type = AnnotationType.Area;
        annotation.PageNumber = 0;
        List<VertexPoint> vertexPoints = new List<VertexPoint>();
        vertexPoints.Add(new VertexPoint() { X = 200, Y = 500 });
        vertexPoints.Add(new VertexPoint() { X = 288, Y = 499 });
        vertexPoints.Add(new VertexPoint() { X = 289, Y = 553 });
        vertexPoints.Add(new VertexPoint() { X = 200, Y = 500 });
        annotation.VertexPoints = vertexPoints;
        await Viewer.AddAnnotationAsync(annotation);
    }
}
```

## Customize Area Appearance

Configure default area settings such as **fill color**, **stroke color**, **thickness**, and **opacity** using [`AreaSettings`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_AreaSettings).

```cshtml
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref="@viewer"
              DocumentPath="@DocumentPath"
              AreaSettings="@AreaSettings"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    PdfViewerAreaSettings AreaSettings = new PdfViewerAreaSettings
    {
        FillColor = "yellow",
        StrokeColor = "orange",
        Opacity = 0.6
    };
}
```

## Manage Area (Move, Reshape, Edit, Delete)

- **Move**: Drag inside the polygon to reposition it.
- **Reshape**: Drag any vertex handle to adjust points and shape.

### Edit Area

#### Edit Area Appearance (UI)

Use the annotation toolbar to modify:
- **Fill Color** - Edit the fill color using the Edit Color tool

![Editing Calibrate FillColor in Blazor SfPdfViewer](../../images/blazor-pdfviewer-calibrate-fillcolor.png)

- **Stroke Color** - Edit the stroke color using the Edit Stroke Color tool

![Editing Calibrate StrokeColor in Blazor SfPdfViewer](../../images/blazor-pdfviewer-calibrate-stroke-color.png)

- **Thickness** - Edit the border thickness using the Edit Thickness tool

![Editing Calibrate Thickness in Blazor SfPdfViewer](../../images/blazor-pdfviewer-calibrate-thickness.png)

- **Opacity** - Edit the opacity using the Edit Opacity tool

![Editing Calibrate Opacity in Blazor SfPdfViewer](../../images/blazor-pdfviewer-calibrate-opacity.png)

#### Edit Area Programmatically

Modify an existing area annotation programmatically using [`EditAnnotationAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EditAnnotationAsync_Syncfusion_Blazor_SfPdfViewer_PdfAnnotation_).

```cshtml
@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.SfPdfViewer

<SfButton OnClick="@EditArea">Edit Area Annotation</SfButton>
<SfPdfViewer2 Width="100%" Height="100%" DocumentPath="@DocumentPath" @ref="@Viewer" />

@code {
    SfPdfViewer2 Viewer;
    public string DocumentPath { get; set; } = "wwwroot/Data/Area_Annotation.pdf";

    public async void EditArea(MouseEventArgs args)
    {
        // Get annotation collection
        List<PdfAnnotation> annotationCollection = await Viewer.GetAnnotationsAsync();
        // Select the annotation you want to edit
        PdfAnnotation annotation = annotationCollection[0];
        // Change the stroke color to blue
        annotation.StrokeColor = "#0000FF";
        // Change the thickness to 2
        annotation.Thickness = 2;
        // Change the fill color to yellow
        annotation.FillColor = "#FFFF00";
        // Edit the area annotation
        await Viewer.EditAnnotationAsync(annotation);
    }
}
```

### Delete Area Annotation

The SfPdfViewer supports deleting existing annotations through both the UI and API. Use [`DeleteAnnotationAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_DeleteAnnotationAsync_Syncfusion_Blazor_SfPdfViewer_PdfAnnotation_) to remove an annotation programmatically. For supported workflows and APIs, see [**Delete Annotation**](../remove-annotations).

## Set Default Properties During Initialization

Apply defaults for Area using the [`AreaSettings`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_AreaSettings) property.

```cshtml
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref="@viewer"
              DocumentPath="@DocumentPath"
              AreaSettings="@AreaSettings"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    PdfViewerAreaSettings AreaSettings = new PdfViewerAreaSettings
    {
        FillColor = "yellow",
        StrokeColor = "orange",
        Opacity = 0.6
    };
}
```

## Add Area Annotation with Custom Properties

Set custom properties for individual area annotations when adding them programmatically:

```cshtml
@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.SfPdfViewer

<SfButton OnClick="@AddStyledArea">Add Styled Area</SfButton>
<SfPdfViewer2 Width="100%" Height="100%" DocumentPath="@DocumentPath" @ref="@Viewer" />

@code {
    SfPdfViewer2 Viewer;
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    public async void AddStyledArea(MouseEventArgs args)
    {
        PdfAnnotation annotation = new PdfAnnotation();
        annotation.Type = AnnotationType.Area;
        annotation.PageNumber = 0;
        List<VertexPoint> vertexPoints = new List<VertexPoint>();
        vertexPoints.Add(new VertexPoint() { X = 210, Y = 510 });
        vertexPoints.Add(new VertexPoint() { X = 300, Y = 510 });
        vertexPoints.Add(new VertexPoint() { X = 305, Y = 560 });
        vertexPoints.Add(new VertexPoint() { X = 210, Y = 510 });
        annotation.VertexPoints = vertexPoints;
        annotation.StrokeColor = "#EA580C";
        annotation.FillColor = "#FEF3C7";
        annotation.Thickness = 2;
        annotation.Opacity = 0.85;
        await Viewer.AddAnnotationAsync(annotation);
    }
}
```

## Scale Ratio and Units

- Use **Scale Ratio** from the context menu to set the actual-to-page scale.
- Supported units include **Inch, Millimeter, Centimeter, Point, Pica, Feet**.

### Set Default Scale Ratio During Initialization

Configure scale defaults using [`MeasurementSettings`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerMeasurementSettings.html).

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

## Handle Area Events

Listen to annotation life-cycle events (add/modify/select/remove). For the full list and parameters, see [**Annotation Events**](../events).

## Export and Import

Area measurements can be exported or imported with other annotations. For workflows and supported formats, see [**Export and Import Annotations**](../import-export-annotation).

## See Also

- [Annotation Events](../events)
- [Export and Import Annotations](../import-export-annotation)
- [Delete Annotations](../delete-annotation)
