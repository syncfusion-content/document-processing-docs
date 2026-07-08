---
layout: post
title: Custom Data in Annotation Blazor SfPdfViewer Component | Syncfusion
description: Learn how to use custom data in annotations in the Syncfusion Blazor SfPdfViewer to attach metadata to annotations.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Custom Data in Blazor SfPdfViewer Annotations

Annotations can include custom structured data via the `CustomData` property (type `object`). This is supported at three levels:

- Default level via `PdfViewerAnnotationSettings`: applies to all annotations created through the UI.
- Per-annotation-type level: provide `CustomData` inside specific annotation-type settings components (for example, `PdfViewerHighlightSettings`, `PdfViewerRectangleSettings`).
- Per-annotation level: set `CustomData` when adding or editing an annotation programmatically (for example, via `AddAnnotationAsync` or `EditAnnotationAsync`).

The `CustomData` value must be a JSON-serializable type. Prefer `Dictionary<string, object>` or a strongly-typed POCO over anonymous types to guarantee round-trip serialization. `CustomData` is preserved during annotation export/import and is available at runtime via the `AnnotationSettings.CustomData` property on the annotation object.

When both default-level and per-annotation-type-level `CustomData` are set, the per-annotation-type value takes precedence for annotations of that type.

## Default custom data (PdfViewerAnnotationSettings)


Set custom data at the default level using `PdfViewerAnnotationSettings` to apply metadata to all newly created annotations.

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
    private Dictionary<string, object> CustomData = new()
    {
        ["appId"] = "pdf-review",
        ["tenant"] = "northwind",
        ["featureFlags"] = new Dictionary<string, object>
        {
            ["allowShare"] = true,
            ["qaStamp"] = false
        }
    };

    private async Task GetAnnotations()
    {
        if (Viewer != null)
        {
            List<PdfAnnotation> annotations = await Viewer.GetAnnotationsAsync();
            foreach (PdfAnnotation annotation in annotations)
            {
                var customData = annotation.AnnotationSettings?.CustomData;
                Console.WriteLine($"CustomData: {System.Text.Json.JsonSerializer.Serialize(customData)}");
            }
        }
    }
}
```

## Custom data for individual annotation types

Provide `CustomData` inside individual annotation-type settings components when you want specific metadata for different annotation tools. Per-type values override the default-level `CustomData` from `PdfViewerAnnotationSettings` for annotations of that type.

### Text markup settings

```cshtml
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
```

See the per-type pages for additional properties: [Highlight](text-markup/highlight-annotation), [Strikethrough](text-markup/strikethrough-annotation), [Underline](text-markup/underline-annotation), [Squiggly](text-markup/squiggly-annotation).

### Shape settings

```cshtml
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
```

See [Line](shape/line-annotation), [Arrow](shape/arrow-annotation), [Rectangle](shape/rectangle-annotation), [Circle](shape/circle-annotation), [Polygon](shape/polygon-annotation) for additional properties.

### Measurement settings

```cshtml
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
```

See [Distance](measurement/distance-annotation), [Perimeter](measurement/perimeter-annotation), [Area](measurement/area-annotation), [Radius](measurement/radius-annotation), [Volume](measurement/volume-annotation).

### Other annotation settings

```cshtml
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
```

### Complete example

The following example combines all per-type settings and includes a button to retrieve annotations.

```cshtml
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="GetAnnotations">Get Annotations</SfButton>

<SfPdfViewer2 DocumentPath="@DocumentPath"
              Width="100%"
              Height="100%"
              @ref="Viewer">

    <PdfViewerAnnotationSettings Author="XYZ" CustomData="@CustomData"></PdfViewerAnnotationSettings>

    <!-- Text markup settings -->
    <PdfViewerHighlightSettings Author="QA" Subject="Review" Color="#ffff00" Opacity="0.6" CustomData="@HighlightData"></PdfViewerHighlightSettings>
    <PdfViewerStrikethroughSettings Author="QA" Subject="Remove" Color="#ff0000" Opacity="0.6" CustomData="@StrikethroughData"></PdfViewerStrikethroughSettings>
    <PdfViewerUnderlineSettings Author="Guest User" Subject="Notes" Color="#00ffff" Opacity="0.9" CustomData="@UnderlineData"></PdfViewerUnderlineSettings>
    <PdfViewerSquigglySettings Author="Guest User" Subject="Corrections" Color="#00ff00" Opacity="0.9" CustomData="@SquigglyData"></PdfViewerSquigglySettings>

    <!-- Shape settings -->
    <PdfViewerLineSettings StrokeColor="#0066ff" Thickness="2" Opacity="0.8" CustomData="@LineData"></PdfViewerLineSettings>
    <PdfViewerArrowSettings StrokeColor="#0066ff" Thickness="2" Opacity="0.8" CustomData="@ArrowData"></PdfViewerArrowSettings>
    <PdfViewerRectangleSettings FillColor="transparent" StrokeColor="#222222" Thickness="1" Opacity="1" CustomData="@RectangleData"></PdfViewerRectangleSettings>
    <PdfViewerCircleSettings FillColor="transparent" StrokeColor="#222222" Thickness="1" Opacity="1" CustomData="@CircleData"></PdfViewerCircleSettings>
    <PdfViewerPolygonSettings FillColor="transparent" StrokeColor="#222222" Thickness="1" Opacity="1" CustomData="@PolygonData"></PdfViewerPolygonSettings>

    <!-- Measurement settings -->
    <PdfViewerDistanceSettings StrokeColor="#0066ff" Thickness="2" Opacity="0.8" CustomData="@DistanceData"></PdfViewerDistanceSettings>
    <PdfViewerPerimeterSettings StrokeColor="#0066ff" Thickness="2" Opacity="0.8" CustomData="@PerimeterData"></PdfViewerPerimeterSettings>
    <PdfViewerAreaSettings StrokeColor="#0066ff" Thickness="2" Opacity="0.8" FillColor="transparent" CustomData="@AreaData"></PdfViewerAreaSettings>
    <PdfViewerRadiusSettings StrokeColor="#0066ff" Thickness="2" Opacity="0.8" FillColor="transparent" CustomData="@RadiusData"></PdfViewerRadiusSettings>
    <PdfViewerVolumeSettings StrokeColor="#0066ff" Thickness="2" Opacity="0.8" FillColor="transparent" CustomData="@VolumeData"></PdfViewerVolumeSettings>

    <!-- Other annotation settings -->
    <PdfViewerFreeTextSettings BorderColor="#222222" Opacity="1" CustomData="@FreeTextData"></PdfViewerFreeTextSettings>
    <PdfViewerInkAnnotationSettings StrokeColor="#0000ff" Thickness="3" Opacity="0.8" CustomData="@InkAnnotationData"></PdfViewerInkAnnotationSettings>
    <PdfViewerStampSettings Opacity="0.9" CustomData="@StampData"></PdfViewerStampSettings>

</SfPdfViewer2>

@code {
    private SfPdfViewer2? Viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    // Custom data for different annotation types
    private Dictionary<string, object> HighlightData = new() { ["tag"] = "needs-review", ["priority"] = "high" };
    private Dictionary<string, object> StrikethroughData = new() { ["tag"] = "remove", ["priority"] = "medium" };
    private Dictionary<string, object> UnderlineData = new() { ["tag"] = "note", ["owner"] = "guest" };
    private Dictionary<string, object> SquigglyData = new() { ["tag"] = "typo" };

    private Dictionary<string, object> LineData = new() { ["id"] = "ln-1", ["category"] = "connector" };
    private Dictionary<string, object> ArrowData = new() { ["id"] = "ar-1", ["category"] = "direction" };
    private Dictionary<string, object> RectangleData = new() { ["id"] = "rect-1", ["zone"] = "content" };
    private Dictionary<string, object> CircleData = new() { ["id"] = "circ-1", ["zone"] = "highlight" };
    private Dictionary<string, object> PolygonData = new() { ["id"] = "poly-1", ["group"] = "area" };

    private Dictionary<string, object> DistanceData = new() { ["units"] = "cm", ["scale"] = 1 };
    private Dictionary<string, object> PerimeterData = new() { ["units"] = "cm", ["calc"] = "perimeter" };
    private Dictionary<string, object> AreaData = new() { ["units"] = "cm²", ["calc"] = "area" };
    private Dictionary<string, object> RadiusData = new() { ["units"] = "cm", ["calc"] = "radius" };
    private Dictionary<string, object> VolumeData = new() { ["units"] = "cm³", ["calc"] = "volume" };

    private Dictionary<string, object> FreeTextData = new() { ["template"] = "comment", ["mentions"] = new[] { "qa" } };
    private Dictionary<string, object> InkAnnotationData = new() { ["tool"] = "pen", ["userId"] = 12345 };
    private Dictionary<string, object> StampData = new() { ["stampType"] = "Approved", ["by"] = "Manager" };

    private async Task GetAnnotations()
    {
        if (Viewer != null)
        {
            List<PdfAnnotation> annotations = await Viewer.GetAnnotationsAsync();
            foreach (PdfAnnotation annotation in annotations)
            {
                var customData = annotation.AnnotationSettings?.CustomData;
                Console.WriteLine($"CustomData: {System.Text.Json.JsonSerializer.Serialize(customData)}");
            }
        }
    }
}
```

## Retrieve custom data at runtime

Retrieve all annotations via `GetAnnotationsAsync()` and read each annotation's `CustomData` from `AnnotationSettings.CustomData`. The pattern is the same regardless of whether the data was supplied through default-level, per-annotation-type, or per-annotation settings.

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

    private Dictionary<string, object> CustomData = new() { ["appId"] = "pdf-review", ["tenant"] = "northwind" };

    private async Task ShowCustomData()
    {
        if (Viewer != null)
        {
            List<PdfAnnotation> annotations = await Viewer.GetAnnotationsAsync();
            foreach (PdfAnnotation annotation in annotations)
            {
                var customData = annotation.AnnotationSettings?.CustomData;
                Console.WriteLine($"CustomData: {System.Text.Json.JsonSerializer.Serialize(customData)}");
            }
        }
    }
}
```

N> `CustomData` is available on annotations returned by `GetAnnotationsAsync()`. If you also need to update the `CustomData` of an existing annotation at runtime, select the annotation with `SelectAnnotationAsync`, modify its settings, and call `EditAnnotationAsync`. See [Create and Modify Annotations](create-modify-annotation) for details.

## Set custom data programmatically

Set `CustomData` directly on the settings object passed to `AddAnnotationAsync` or `EditAnnotationAsync` when creating or modifying annotations in code.

```csharp
private async Task AddAnnotationWithCustomData()
{
    if (Viewer == null) return;

    var settings = new TextMarkupAnnotationSettings
    {
        Author = "QA",
        Color = "#ffff00",
        Opacity = 0.6,
        CustomData = new Dictionary<string, object>
        {
            ["tag"] = "needs-review",
            ["priority"] = "high"
        }
    };

    // Build the annotation shape and add it with the settings object.
    // See the create-modify-annotation page for the full add pattern.
    await Viewer.AddAnnotationAsync(/* shape */, settings);
}
```

For the full add/edit API patterns (including how to construct the annotation shape and pass it to the viewer), see [Create and Modify Annotations](create-modify-annotation).

## Notes

- `CustomData` must be a JSON-serializable type. Use `Dictionary<string, object>` or a strongly-typed POCO to guarantee round-trip serialization; avoid anonymous types, which can lose property names during export.
- Use `PdfViewerAnnotationSettings.CustomData` for default-level metadata and override per annotation type via the type-specific settings components.
- Per-annotation-type and per-annotation `CustomData` values take precedence over the default-level value.
- `CustomData` is preserved during annotation [export/import](import-export-annotation) operations.
- Access `CustomData` via `annotation.AnnotationSettings.CustomData` after retrieving annotations with `GetAnnotationsAsync()`.
- The `CustomData` feature is available in **Syncfusion.Blazor.SfPdfViewer 21.1.0** and later.
- Avoid storing very large payloads in `CustomData`; it is serialized into the exported annotation stream and may affect export size and performance.

## See also

* [Annotation Overview](overview)
* [Create and Modify Annotations](create-modify-annotation)
* [Import and Export Annotations](import-export-annotation)
* [Annotation Events](events)
* [Text Markup Annotations](text-markup/highlight-annotation)
* [Shape Annotations](shape/line-annotation)
* [Measurement Annotations](measurement/distance-annotation)
