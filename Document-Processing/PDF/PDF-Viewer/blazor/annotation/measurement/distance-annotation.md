---
layout: post
title: Add Distance Annotations in Blazor PDF Viewer | Syncfusion
description: Learn how to enable, measure, customize, and manage Distance annotations in the Syncfusion Blazor SfPdfViewer.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Add Distance Annotations in Blazor SfPdfViewer

Distance is a measurement annotation used to measure the length between two points on a PDF page. Use it for precise reviews, markups, or engineering measurements.

![Distance overview](../../images/blazor-pdfviewer-distance-annotation.png)

## Enable Distance Annotation

The SfPdfViewer component supports distance measurement annotations by default. To enable the annotation toolbar and measurement functionality, simply add the SfPdfViewer component to your Blazor page:

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

## Add Distance Annotation

### Add Distance Using the Toolbar

1. Click the **Edit Annotation** button in the SfPdfViewer toolbar. A toolbar appears below it.
2. Click the **measurement Annotation** dropdown button. A dropdown appears with measurement annotation types.
3. Select **Distance** to enable distance measurement mode.
4. Click to set the start point, then click again to set the end point.

![Measurement Toolbar](../../images/blazor-pdfviewer-add-calibrate-in-toolbar.png)

> **Tip:** If Pan mode is active, choosing a measurement tool switches the viewer into the appropriate interaction mode for a smoother workflow.

### Enable Distance Mode

Programmatically switch the viewer into Distance mode using `SetAnnotationModeAsync()`.

```cshtml
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="OnClick">Distance Measurement</SfButton>
<SfPdfViewer2 DocumentPath="@DocumentPath"
              @ref="viewer"
              Width="100%"
              Height="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;

    public async void OnClick(MouseEventArgs args)
    {
        await viewer.SetAnnotationModeAsync(AnnotationType.Distance);
    }
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}
```

#### Exit Distance Mode

Switch back to normal mode using:

```cshtml
public async void ExitDistanceMode()
{
    await viewer.SetAnnotationModeAsync(AnnotationType.None);
}
```

### Add Distance Programmatically

Use [`AddAnnotationAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_AddAnnotationAsync_Syncfusion_Blazor_SfPdfViewer_PdfAnnotation_) to add a distance measurement by providing two **VertexPoints**.

```cshtml
@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.SfPdfViewer

<SfButton OnClick="@AddDistance">Add Distance Annotation</SfButton>
<SfPdfViewer2 Width="100%" Height="100%" DocumentPath="@DocumentPath" @ref="@Viewer" />

@code {
    SfPdfViewer2 Viewer;
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    public async void AddDistance(MouseEventArgs args)
    {
        PdfAnnotation annotation = new PdfAnnotation();
        annotation.Type = AnnotationType.Distance;
        annotation.PageNumber = 0;
        List<VertexPoint> vertexPoints = new List<VertexPoint>();
        vertexPoints.Add(new VertexPoint() { X = 200, Y = 230 });
        vertexPoints.Add(new VertexPoint() { X = 350, Y = 230 });
        annotation.VertexPoints = vertexPoints;
        await Viewer.AddAnnotationAsync(annotation);
    }
}
```

## Customize Distance Appearance

Configure default distance settings such as **fill color**, **stroke color**, **thickness**, and **opacity** using [`DistanceSettings`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_DistanceSettings).

```cshtml
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref="@viewer"
              DocumentPath="@DocumentPath"
              DistanceSettings="@DistanceSettings"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    PdfViewerDistanceSettings DistanceSettings = new PdfViewerDistanceSettings
    {
        FillColor = "blue",
        StrokeColor = "green",
        Opacity = 0.6
    };
}
```

## Manage Distance (Move, Resize, Edit, Delete)

- **Move**: Drag the measurement to reposition it.
- **Resize**: Drag the end handles to adjust the length.

### Edit Distance

#### Edit Distance (UI)

Use the annotation toolbar to modify:
- **Fill Color** - Edit the fill color using the Edit Color tool

![Editing Calibrate FillColor in Blazor SfPdfViewer](../../images/blazor-pdfviewer-calibrate-fillcolor.png)

- **Stroke Color** - Edit the stroke color using the Edit Stroke Color tool

![Editing Calibrate StrokeColor in Blazor SfPdfViewer](../../images/blazor-pdfviewer-calibrate-stroke-color.png)

- **Thickness** - Edit the border thickness using the Edit Thickness tool

![Editing Calibrate Thickness in Blazor SfPdfViewer](../../images/blazor-pdfviewer-calibrate-thickness.png)

- **Opacity** - Edit the opacity using the Edit Opacity tool

![Editing Calibrate Opacity in Blazor SfPdfViewer](../../images/blazor-pdfviewer-calibrate-opacity.png)

- **Line properties** - Edit the Line property of annotation

![Editing Calibrate Property in Blazor SfPdfViewer](../../images/blazor-pdfviewer-calibrate-property.png)

#### Edit Distance Programmatically

Modify an existing distance annotation programmatically using [`EditAnnotationAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EditAnnotationAsync_Syncfusion_Blazor_SfPdfViewer_PdfAnnotation_).

```cshtml
@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.SfPdfViewer

<SfButton OnClick="@EditDistance">Edit Distance Annotation</SfButton>
<SfPdfViewer2 Width="100%" Height="100%" DocumentPath="@DocumentPath" @ref="@Viewer" />

@code {
    SfPdfViewer2 Viewer;
    public string DocumentPath { get; set; } = "wwwroot/Data/Distance_Annotation.pdf";

    public async void EditDistance(MouseEventArgs args)
    {
        // Get annotation collection
        List<PdfAnnotation> annotationCollection = await Viewer.GetAnnotationsAsync();
        // Select the annotation you want to edit
        PdfAnnotation annotation = annotationCollection[0];
        // Change the stroke color to blue
        annotation.StrokeColor = "#0000FF";
        // Change the thickness to 2
        annotation.Thickness = 2;
        // Change the opacity to 0.8
        annotation.Opacity = 0.8;
        // Edit the distance annotation
        await Viewer.EditAnnotationAsync(annotation);
    }
}
```

### Delete Distance Annotation

The SfPdfViewer supports deleting existing annotations through both the UI and API. Use [`DeleteAnnotationAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_DeleteAnnotationAsync_Syncfusion_Blazor_SfPdfViewer_PdfAnnotation_) to remove an annotation programmatically. For supported workflows and APIs, see [**Delete Annotation**](../remove-annotations).

## Set Default Properties During Initialization

Apply defaults for Distance using the [`DistanceSettings`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_DistanceSettings) property.

```cshtml
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref="@viewer"
              DocumentPath="@DocumentPath"
              DistanceSettings="@DistanceSettings"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    PdfViewerDistanceSettings DistanceSettings = new PdfViewerDistanceSettings
    {
        FillColor = "blue",
        StrokeColor = "green",
        Opacity = 0.6
    };
}
```

## Add Distance Annotation with Custom Properties

Set custom properties for individual distance annotations when adding them programmatically:

```cshtml
@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.SfPdfViewer

<SfButton OnClick="@AddStyledDistance">Add Styled Distance</SfButton>
<SfPdfViewer2 Width="100%" Height="100%" DocumentPath="@DocumentPath" @ref="@Viewer" />

@code {
    SfPdfViewer2 Viewer;
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    public async void AddStyledDistance(MouseEventArgs args)
    {
        PdfAnnotation annotation = new PdfAnnotation();
        annotation.Type = AnnotationType.Distance;
        annotation.PageNumber = 0;
        List<VertexPoint> vertexPoints = new List<VertexPoint>();
        vertexPoints.Add(new VertexPoint() { X = 220, Y = 260 });
        vertexPoints.Add(new VertexPoint() { X = 360, Y = 260 });
        annotation.VertexPoints = vertexPoints;
        annotation.StrokeColor = "#059669";
        annotation.Opacity = 0.9;
        annotation.FillColor = "#D1FAE5";
        annotation.Thickness = 2;
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

## Handle Distance Events

Listen to annotation life-cycle events (add/modify/select/remove). For the full list and parameters, see [**Annotation Events**](../events).

## Export and Import

Distance measurements can be exported or imported with other annotations. For workflows and supported formats, see [**Export and Import Annotations**](../import-export-annotation).

## See Also

- [Annotation Events](../events)
- [Export and Import Annotations](../import-export-annotation)
- [Delete Annotations](../delete-annotation)
