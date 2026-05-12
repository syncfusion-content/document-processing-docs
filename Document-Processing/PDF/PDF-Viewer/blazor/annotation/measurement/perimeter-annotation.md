---
layout: post
title: Add Perimeter Measurement Annotations in Blazor SfPdfViewer Component | Syncfusion
description: Learn how to enable, draw, customize, and manage Perimeter measurement annotations in the Syncfusion Blazor SfPdfViewer component.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Add Perimeter Measurement Annotations in Blazor SfPdfViewer Component
Perimeter is a measurement annotation used to calculate the length around a closed polyline on a PDF page—useful for technical markups and reviews. 

![Perimeter overview](../../images/blazor-pdfviewer-perimeter-annotation.png)

## Enable Perimeter Measurement

To enable Perimeter annotations in the Blazor SfPdfViewer, configure the component with annotation support.

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

## Add Perimeter Annotation

### Add Perimeter Annotation Using the Toolbar

1. Open the **Annotation Toolbar**.
2. Select **Measurement** → **Perimeter**.
3. Click multiple points to define the polyline; double‑click to close and finalize the perimeter.

![Measurement Toolbar](../../images/blazor-pdfviewer-add-calibrate-in-toolbar.png)

N> If Pan mode is active, choosing a measurement tool switches the viewer into the appropriate interaction mode for a smoother workflow.

### Enable Perimeter Mode
Programmatically switch the viewer into Perimeter mode using `SetAnnotationModeAsync(AnnotationType.Perimeter)`.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="EnablePerimeterMode">Enable Perimeter Mode</SfButton>
<SfPdfViewer2 DocumentPath="@DocumentPath" 
              @ref="viewer"
              Width="100%" 
              Height="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    public async void EnablePerimeterMode(MouseEventArgs args)
    {
        await viewer.SetAnnotationModeAsync(AnnotationType.Perimeter);
    }
}

```

#### Exit Perimeter Mode
```cshtml

@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="ExitPerimeterMode">Exit Perimeter Mode</SfButton>
<SfPdfViewer2 DocumentPath="@DocumentPath" 
              @ref="viewer"
              Width="100%" 
              Height="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    public async void ExitPerimeterMode(MouseEventArgs args)
    {
        await viewer.SetAnnotationModeAsync(AnnotationType.None);
    }
}

```

### Add Perimeter Programmatically
Use the [`AddAnnotationAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_AddAnnotationAsync_Syncfusion_Blazor_SfPdfViewer_PdfAnnotation_) API to draw a perimeter by providing multiple **VertexPoints**.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="AddPerimeter">Add Perimeter</SfButton>
<SfPdfViewer2 DocumentPath="@DocumentPath" 
              @ref="viewer"
              Width="100%" 
              Height="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    public async void AddPerimeter(MouseEventArgs args)
    {
        PdfAnnotation annotation = new PdfAnnotation();
        annotation.Type = AnnotationType.Perimeter;
        annotation.PageNumber = 0;
        
        List<VertexPoint> vertexPoints = new List<VertexPoint>();
        vertexPoints.Add(new VertexPoint() { X = 200, Y = 350 });
        vertexPoints.Add(new VertexPoint() { X = 285, Y = 350 });
        vertexPoints.Add(new VertexPoint() { X = 286, Y = 412 });
        annotation.VertexPoints = vertexPoints;
        
        await viewer.AddAnnotationAsync(annotation);
    }
}

```

## Customize Perimeter Appearance
Configure default properties using the [`PerimeterSettings`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_PerimeterSettings) property (for example, default **fill color**, **stroke color**, **opacity**).

```cshtml

@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 DocumentPath="@DocumentPath"
              @ref="viewer"
              Width="100%"
              Height="100%"
              PerimeterSettings="@PerimeterSettings">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    PdfViewerPerimeterSettings PerimeterSettings = new PdfViewerPerimeterSettings
    {
        FillColor = "blue",
        StrokeColor = "green",
        Opacity = 0.6
    };
}

```

## Manage Perimeter (Move, Reshape, Edit, Delete)
- **Move**: Drag inside the shape to reposition it.
- **Reshape**: Drag any vertex handle to adjust points and shape.

### Edit Perimeter

#### Edit Perimeter (UI)

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

#### Edit Perimeter Programmatically
Update properties and call `EditAnnotationAsync()`.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="EditPerimeterProgrammatically">Edit Perimeter</SfButton>
<SfPdfViewer2 DocumentPath="@DocumentPath" 
              @ref="viewer"
              Width="100%" 
              Height="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    public async void EditPerimeterProgrammatically(MouseEventArgs args)
    {
        List<PdfAnnotation> annotationCollection = await viewer.GetAnnotationsAsync();
        foreach (var ann in annotationCollection)
        {
            if (ann.Type == AnnotationType.Perimeter)
            {
                ann.StrokeColor = "#0000FF";
                ann.Thickness = 2;
                ann.FillColor = "#FFFF00";
                await viewer.EditAnnotationAsync(ann);
                break;
            }
        }
    }
}

```

### Delete Perimeter Annotation

Delete Perimeter Annotation via UI (toolbar/context menu) or programmatically. For supported workflows and APIs, see [**Delete Annotation**](../remove-annotations).

## Set Default Properties During Initialization
Apply defaults for Perimeter using the [`PerimeterSettings`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_PerimeterSettings) property.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref="@viewer"
              DocumentPath="@DocumentPath"
              Height="100%" Width="100%"
              PerimeterSettings="@PerimeterSettings">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    
    PdfViewerPerimeterSettings PerimeterSettings = new PdfViewerPerimeterSettings
    {
        FillColor = "green",
        Opacity = 0.6,
        StrokeColor = "blue"
    };
}

```

## Set Properties While Adding Individual Annotation
Pass per‑annotation values directly when calling [`AddAnnotationAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_AddAnnotationAsync_Syncfusion_Blazor_SfPdfViewer_PdfAnnotation_).

```cshtml

@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="AddStyledPerimeter">Add Styled Perimeter</SfButton>
<SfPdfViewer2 DocumentPath="@DocumentPath" 
              @ref="viewer"
              Width="100%" 
              Height="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    public async void AddStyledPerimeter(MouseEventArgs args)
    {
        PdfAnnotation annotation = new PdfAnnotation();
        annotation.Type = AnnotationType.Perimeter;
        annotation.PageNumber = 0;
        
        List<VertexPoint> vertexPoints = new List<VertexPoint>();
        vertexPoints.Add(new VertexPoint() { X = 240, Y = 360 });
        vertexPoints.Add(new VertexPoint() { X = 320, Y = 360 });
        vertexPoints.Add(new VertexPoint() { X = 330, Y = 410 });
        annotation.VertexPoints = vertexPoints;
        annotation.StrokeColor = "#1D4ED8";
        annotation.FillColor = "#DBEAFE";
        annotation.Thickness = 2;
        annotation.Opacity = 0.85;
        
        await viewer.AddAnnotationAsync(annotation);
    }
}

```

## Scale Ratio and Units

- Use **Scale Ratio** from the context menu to set the actual‑to‑page scale.  
  ![Scale ratio](../images/blazor-pdfviewer-calibrate-scaleratio.png)
- Supported units include **Inch, Millimeter, Centimeter, Point, Pica, Feet**.  
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

## Handle Perimeter Events

Listen to annotation life-cycle events (add/modify/select/remove). For the full list and parameters, see [**Annotation Events**](../events).

## Export and Import
Perimeter measurements can be exported or imported with other annotations. For workflows and supported formats, see [**Export and Import annotations**](../import-export-annotation).

## See Also

- [Annotation Events](../events)
- [Export and Import Annotations](../import-export-annotation)
- [Delete Annotations](../delete-annotation)
