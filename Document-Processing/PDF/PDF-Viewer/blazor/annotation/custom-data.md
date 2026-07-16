---
layout: post
title: Custom Data in Annotation Blazor SfPdfViewer Component | Syncfusion
description: Learn how to use custom data in annotations in the Blazor SfPdfViewer to attach metadata to annotations.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Custom data in annotations in Blazor SfPdfViewer Component

Annotations can include custom key-value data via the [`CustomData`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerAnnotationSettings.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerAnnotationSettings_CustomData) property. This is supported at two levels:

- Default level via [`PdfViewerAnnotationSettings`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerAnnotationSettings.html): applies to all annotations created through the UI.
- Per-annotation-type level: provide [`CustomData`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerAnnotationSettings.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerAnnotationSettings_CustomData) inside specific annotation-type settings components (for example, `PdfViewerHighlightSettings`, `PdfViewerRectangleSettings`).

The [`CustomData`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerAnnotationSettings.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerAnnotationSettings_CustomData) value can be any JSON-serializable object. It is preserved during annotation export/import and is available at runtime via the [`AnnotationSettings.CustomData`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerAnnotationSettings.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerAnnotationSettings_CustomData) property on the annotation object.

## Default custom data (PdfViewerAnnotationSettings)

Set custom data at the global level using `PdfViewerAnnotationSettings` to apply metadata to all annotations created through the UI.

```cshtml
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="GetAnnotations">Get Annotations</SfButton>

<SfPdfViewer2 DocumentPath="@DocumentPath"
              Width="100%"
              Height="100%"
              @ref="Viewer">
    <!-- Custom data applied to all newly created annotations -->
    <PdfViewerAnnotationSettings Author="XYZ"
                                  CustomData="@CustomData">
    </PdfViewerAnnotationSettings>
</SfPdfViewer2>

@code {
    private SfPdfViewer2? Viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    
    // Custom data object applied to all annotations
    private object CustomData = new 
    { 
        appId = "pdf-review",
        tenant = "northwind",
        featureFlags = new { allowShare = true, qaStamp = false }
    };

    private async Task GetAnnotations()
    {
        if (Viewer != null)
        {
            List<PdfAnnotation> annotations = await Viewer.GetAnnotationsAsync();
            foreach (PdfAnnotation annotation in annotations)
            {
                Console.WriteLine($"CustomData: {annotation.AnnotationSettings?.CustomData}");
            }
        }
    }
}
```

## Custom data for individual annotation types

Provide [`CustomData`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerAnnotationSettings.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerAnnotationSettings_CustomData) inside individual annotation-type settings components when you want specific metadata for different annotation tools.

```cshtml
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="GetAnnotations">Get Annotations</SfButton>

<SfPdfViewer2 DocumentPath="@DocumentPath"
              Width="100%"
              Height="100%"
              @ref="Viewer">
    
    <!-- Text Markup Settings with custom data -->
    <PdfViewerHighlightSettings Author="QA" 
                                 Subject="Review" 
                                 Color="#ffff00" 
                                 Opacity="0.6"
                                 CustomData="@HighlightData">
    </PdfViewerHighlightSettings>

    <PdfViewerStrikethroughSettings Author="QA"
                                     Subject="Remove"
                                     Color="#ff0000"
                                     Opacity="0.6"
                                     CustomData="@StrikethroughData">
    </PdfViewerStrikethroughSettings>

    <PdfViewerUnderlineSettings Author="Guest User"
                                Subject="Notes"
                                Color="#00ffff"
                                Opacity="0.9"
                                CustomData="@UnderlineData">
    </PdfViewerUnderlineSettings>

    <PdfViewerSquigglySettings Author="Guest User"
                               Subject="Corrections"
                               Color="#00ff00"
                               Opacity="0.9"
                               CustomData="@SquigglyData">
    </PdfViewerSquigglySettings>

    <!-- Shape Settings with custom data -->
    <PdfViewerLineSettings StrokeColor="#0066ff"
                           Thickness="2"
                           Opacity="0.8"
                           CustomData="@LineData">
    </PdfViewerLineSettings>

    <PdfViewerArrowSettings StrokeColor="#0066ff"
                            Thickness="2"
                            Opacity="0.8"
                            CustomData="@ArrowData">
    </PdfViewerArrowSettings>

    <PdfViewerRectangleSettings FillColor="transparent"
                                StrokeColor="#222222"
                                Thickness="1"
                                Opacity="1"
                                CustomData="@RectangleData">
    </PdfViewerRectangleSettings>

    <PdfViewerCircleSettings FillColor="transparent"
                             StrokeColor="#222222"
                             Thickness="1"
                             Opacity="1"
                             CustomData="@CircleData">
    </PdfViewerCircleSettings>

    <PdfViewerPolygonSettings FillColor="transparent"
                              StrokeColor="#222222"
                              Thickness="1"
                              Opacity="1"
                              CustomData="@PolygonData">
    </PdfViewerPolygonSettings>

    <!-- Measurement Settings with custom data -->
    <PdfViewerDistanceSettings StrokeColor="#0066ff"
                               Thickness="2"
                               Opacity="0.8"
                               CustomData="@DistanceData">
    </PdfViewerDistanceSettings>

    <PdfViewerPerimeterSettings StrokeColor="#0066ff"
                                Thickness="2"
                                Opacity="0.8"
                                CustomData="@PerimeterData">
    </PdfViewerPerimeterSettings>

    <PdfViewerAreaSettings StrokeColor="#0066ff"
                           Thickness="2"
                           Opacity="0.8"
                           FillColor="transparent"
                           CustomData="@AreaData">
    </PdfViewerAreaSettings>

    <PdfViewerRadiusSettings StrokeColor="#0066ff"
                             Thickness="2"
                             Opacity="0.8"
                             FillColor="transparent"
                             CustomData="@RadiusData">
    </PdfViewerRadiusSettings>

    <PdfViewerVolumeSettings StrokeColor="#0066ff"
                             Thickness="2"
                             Opacity="0.8"
                             FillColor="transparent"
                             CustomData="@VolumeData">
    </PdfViewerVolumeSettings>

    <!-- Other Annotation Settings with custom data -->
    <PdfViewerFreeTextSettings BorderColor="#222222"
                               Opacity="1"
                               CustomData="@FreeTextData">
    </PdfViewerFreeTextSettings>

    <PdfViewerInkAnnotationSettings StrokeColor="#0000ff"
                                    Thickness="3"
                                    Opacity="0.8"
                                    CustomData="@InkAnnotationData">
    </PdfViewerInkAnnotationSettings>

    <PdfViewerStampSettings Opacity="0.9"
                            CustomData="@StampData">
    </PdfViewerStampSettings>

</SfPdfViewer2>

@code {
    private SfPdfViewer2? Viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    // Custom data for different annotation types
    private object HighlightData = new { tag = "needs-review", priority = "high" };
    private object StrikethroughData = new { tag = "remove", priority = "medium" };
    private object UnderlineData = new { tag = "note", owner = "guest" };
    private object SquigglyData = new { tag = "typo" };
    
    private object LineData = new { id = "ln-1", category = "connector" };
    private object ArrowData = new { id = "ar-1", category = "direction" };
    private object RectangleData = new { id = "rect-1", zone = "content" };
    private object CircleData = new { id = "circ-1", zone = "highlight" };
    private object PolygonData = new { id = "poly-1", group = "area" };
    
    private object DistanceData = new { units = "cm", scale = 1 };
    private object PerimeterData = new { units = "cm", calc = "perimeter" };
    private object AreaData = new { units = "cm²", calc = "area" };
    private object RadiusData = new { units = "cm", calc = "radius" };
    private object VolumeData = new { units = "cm³", calc = "volume" };
    
    private object FreeTextData = new { template = "comment", mentions = new[] { "qa" } };
    private object InkAnnotationData = new { tool = "pen", userId = 12345 };
    private object StampData = new { stampType = "Approved", by = "Manager" };

    private async Task GetAnnotations()
    {
        if (Viewer != null)
        {
            List<PdfAnnotation> annotations = await Viewer.GetAnnotationsAsync();
            foreach (PdfAnnotation annotation in annotations)
            {
                Console.WriteLine($"CustomData: {annotation.AnnotationSettings?.CustomData}");
            }
        }
    }
}
```

## Retrieve custom data at runtime

Access the [`CustomData`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerAnnotationSettings.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerAnnotationSettings_CustomData) for any annotation through the viewer using [`GetAnnotationsAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_GetAnnotationsAsync). Get all annotations and read their custom payloads from [`AnnotationSettings.CustomData`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerAnnotationSettings.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerAnnotationSettings_CustomData).

```cshtml
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="ShowCustomData">Show Custom Data</SfButton>

<SfPdfViewer2 DocumentPath="@DocumentPath"
              Width="100%"
              Height="100%"
              @ref="Viewer">
    <PdfViewerAnnotationSettings CustomData="@CustomData"></PdfViewerAnnotationSettings>
</SfPdfViewer2>

@code {
    private SfPdfViewer2? Viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    
    private object CustomData = new { appId = "pdf-review", tenant = "northwind" };

    private async Task ShowCustomData()
    {
        if (Viewer != null)
        {
            List<PdfAnnotation> annotations = await Viewer.GetAnnotationsAsync();
            foreach (PdfAnnotation annotation in annotations)
            {
                var customData = annotation.AnnotationSettings?.CustomData;
                Console.WriteLine($"CustomData: {customData}");
            }
        }
    }
}
```

## Notes

- [`CustomData`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerAnnotationSettings.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerAnnotationSettings_CustomData) can be any JSON-serializable object and is stored with the annotation.
- Use [`PdfViewerAnnotationSettings.CustomData`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerAnnotationSettings.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerAnnotationSettings_CustomData) for global defaults and override with per-annotation-type settings as needed.
- Custom data is preserved during annotation export/import operations.
- Access custom data via [`annotation.AnnotationSettings.CustomData`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerAnnotationSettings.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerAnnotationSettings_CustomData) after retrieving annotations with [`GetAnnotationsAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_GetAnnotationsAsync).

## See also

* [Annotation Overview](overview)
* [Create and Modify Annotations](create-modify-annotation)
* [Annotation Permissions](annotation-permission)
* [Text Markup Annotations](text-markup/highlight-annotation)
* [Shape Annotations](shape/line-annotation)
* [Measurement Annotations](measurement/distance-annotation)
* [Annotation Undo/Redo](annotations-undo-redo)
