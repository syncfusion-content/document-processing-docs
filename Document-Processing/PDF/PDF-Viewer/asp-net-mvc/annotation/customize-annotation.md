---
layout: post
title: Customize Annotation in ASP.NET MVC PDF Viewer | Syncfusion
description: Customize the appearance and behavior of annotations in the ASP.NET MVC PDF Viewer through UI settings and programmatic configuration.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Customize Annotations in ASP.NET MVC PDF Viewer

Annotation appearance and behavior (for example color, stroke color, thickness, and opacity) can be customized using the built-in UI or programmatically. This page summarizes common customization patterns and shows how to set defaults per annotation type.

## Customize via UI

Use the annotation toolbar after selecting an annotation:
- **Edit color**: changes the annotation fill/text color  
![Edit color](../images/edit_color.png)
- **Edit stroke color**: changes border or line color for shapes and line types.  
![Edit stroke color](../images/shape_strokecolor.png)
- **Edit thickness**: adjusts border or line thickness  
![Edit thickness](../images/shape_thickness.png)
- **Edit opacity**: adjusts transparency  
![Edit opacity](../images/shape_opacity.png)

Type-specific options (for example, Line properties) are available from the context menu (**right-click > Properties**) where supported.

## Set default properties during initialization

Set defaults for specific annotation types when creating the **PdfViewer** instance. Configure properties such as author, subject, color, and opacity using annotation settings. The examples below reference settings used on the annotation type pages.

Text markup annotations:
- Highlight: Set default properties before creating the control using [highlightSettings](./annotation-types/highlight-annotation#set-properties-while-adding-individual-annotation)
- Strikethrough: Use [strikethroughSettings](./annotation-types/strikethrough-annotation#set-properties-while-adding-individual-annotation)
- Underline: Use [underlineSettings](./annotation-types/underline-annotation#set-properties-while-adding-individual-annotation)
- Squiggly: Use [squigglySettings](./annotation-types/squiggly-annotation#set-properties-while-adding-individual-annotation)

Shape annotations:
- Line: Use [lineSettings](./annotation-types/line-annotation#set-properties-while-adding-individual-annotation)
- Arrow: Use [arrowSettings](./annotation-types/arrow-annotation#set-properties-while-adding-individual-annotation)
- Rectangle: Use [rectangleSettings](./annotation-types/rectangle-annotation#set-properties-while-adding-individual-annotation)
- Circle: Use [circleSettings](./annotation-types/circle-annotation#set-properties-while-adding-individual-annotation)
- Polygon: Use [polygonSettings](./annotation-types/polygon-annotation#set-properties-while-adding-individual-annotation)

Measurement annotations:
- Distance: Use [distanceSettings](./annotation-types/distance-annotation#set-default-properties-during-initialization)
- Perimeter: Use [perimeterSettings](./annotation-types/perimeter-annotation#set-default-properties-during-initialization)
- Area: Use [areaSettings](./annotation-types/area-annotation#set-default-properties-during-initialization)
- Radius: Use [radiusSettings](./annotation-types/radius-annotation#set-default-properties-during-initialization)
- Volume: Use [volumeSettings](./annotation-types/volume-annotation#set-default-properties-during-initialization)

Other Annotations:
- Redaction: Use [redactionSettings](./annotation-types/redaction-annotation#default-redaction-settings-during-initialization)
- Free text: Use [freeTextSettings](./annotation-types/free-text-annotation#set-default-properties-during-initialization)
- Ink (freehand): Use [inkAnnotationSettings](./annotation-types/ink-annotation#customize-ink-appearance)
- Stamp: Use [stampSettings](./annotation-types/stamp-annotation#set-properties-while-adding-individual-annotation)
- Sticky notes: Use [stickyNotesSettings](./annotation-types/sticky-notes#set-default-properties-during-initialization)

Set defaults for specific annotation types when creating the PdfViewer. Below are examples using settings already used in the annotation type pages.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer")
        .DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf")
        // Text markup defaults
        .HighlightSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerHighlightSettings { Author = "QA", Subject = "Review", Color = "#ffff00", Opacity = 0.6 })
        .StrikethroughSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerStrikethroughSettings { Author = "QA", Subject = "Remove", Color = "#ff0000", Opacity = 0.6 })
        .UnderlineSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerUnderlineSettings { Author = "Guest User", Subject = "Points to be remembered", Color = "#00ffff", Opacity = 0.9 })
        .SquigglySettings(new Syncfusion.EJ2.PdfViewer.PdfViewerSquigglySettings { Author = "Guest User", Subject = "Corrections", Color = "#00ff00", Opacity = 0.9 })
        // Shapes
        .LineSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerLineSettings { StrokeColor = "#0066ff", Thickness = 2, Opacity = 0.8 })
        .ArrowSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerArrowSettings { StrokeColor = "#0066ff", Thickness = 2, Opacity = 0.8 })
        .RectangleSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerRectangleSettings { FillColor = "#ffffff00", StrokeColor = "#222222", Thickness = 1, Opacity = 1 })
        .CircleSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerCircleSettings { FillColor = "#ffffff00", StrokeColor = "#222222", Thickness = 1, Opacity = 1 })
        .PolygonSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerPolygonSettings { FillColor = "#ffffff00", StrokeColor = "#222222", Thickness = 1, Opacity = 1 })
        // Measurements
        .DistanceSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerDistanceSettings { StrokeColor = "#0066ff", Thickness = 2, Opacity = 0.8 })
        .PerimeterSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerPerimeterSettings { StrokeColor = "#0066ff", Thickness = 2, Opacity = 0.8 })
        .AreaSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerAreaSettings { StrokeColor = "#0066ff", Thickness = 2, Opacity = 0.8, FillColor = "#ffffff00" })
        .RadiusSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerRadiusSettings { StrokeColor = "#0066ff", Thickness = 2, Opacity = 0.8, FillColor = "#ffffff00" })
        .VolumeSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerVolumeSettings { StrokeColor = "#0066ff", Thickness = 2, Opacity = 0.8, FillColor = "#ffffff00" })
        // Others
        .FreeTextSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerFreeTextSettings { BorderColor = "#222222", Thickness = 1, Opacity = 1 })
        .InkAnnotationSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerInkAnnotationSettings { StrokeColor = "#0000ff", Thickness = 3, Opacity = 0.8 })
        .StampSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerStampSettings { Opacity = 0.9 })
        .StickyNotesSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerStickyNotesSettings { Author = "QA", Subject = "Review", Opacity = 1 })
        .Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer")
        .ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/"))
        .DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf")
        .HighlightSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerHighlightSettings { Author = "QA", Subject = "Review", Color = "#ffff00", Opacity = 0.6 })
        .StrikethroughSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerStrikethroughSettings { Author = "QA", Subject = "Remove", Color = "#ff0000", Opacity = 0.6 })
        .UnderlineSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerUnderlineSettings { Author = "Guest User", Subject = "Points to be remembered", Color = "#00ffff", Opacity = 0.9 })
        .SquigglySettings(new Syncfusion.EJ2.PdfViewer.PdfViewerSquigglySettings { Author = "Guest User", Subject = "Corrections", Color = "#00ff00", Opacity = 0.9 })
        .LineSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerLineSettings { StrokeColor = "#0066ff", Thickness = 2, Opacity = 0.8 })
        .ArrowSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerArrowSettings { StrokeColor = "#0066ff", Thickness = 2, Opacity = 0.8 })
        .RectangleSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerRectangleSettings { FillColor = "#ffffff00", StrokeColor = "#222222", Thickness = 1, Opacity = 1 })
        .CircleSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerCircleSettings { FillColor = "#ffffff00", StrokeColor = "#222222", Thickness = 1, Opacity = 1 })
        .PolygonSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerPolygonSettings { FillColor = "#ffffff00", StrokeColor = "#222222", Thickness = 1, Opacity = 1 })
        .DistanceSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerDistanceSettings { StrokeColor = "#0066ff", Thickness = 2, Opacity = 0.8 })
        .PerimeterSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerPerimeterSettings { StrokeColor = "#0066ff", Thickness = 2, Opacity = 0.8 })
        .AreaSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerAreaSettings { StrokeColor = "#0066ff", Thickness = 2, Opacity = 0.8, FillColor = "#ffffff00" })
        .RadiusSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerRadiusSettings { StrokeColor = "#0066ff", Thickness = 2, Opacity = 0.8, FillColor = "#ffffff00" })
        .VolumeSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerVolumeSettings { StrokeColor = "#0066ff", Thickness = 2, Opacity = 0.8, FillColor = "#ffffff00" })
        .FreeTextSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerFreeTextSettings { BorderColor = "#222222", Thickness = 1, Opacity = 1 })
        .InkAnnotationSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerInkAnnotationSettings { StrokeColor = "#0000ff", Thickness = 3, Opacity = 0.8 })
        .StampSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerStampSettings { Opacity = 0.9 })
        .StickyNotesSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerStickyNotesSettings { Author = "QA", Subject = "Review", Opacity = 1 })
        .Render()
</div>

{% endhighlight %}
{% endtabs %}

N> After changing defaults using UI tools (for example, Edit color or Edit opacity), the updated values apply to subsequent annotations within the same session.

## Customize programmatically at runtime

To update an existing annotation from code, modify its properties and call **editAnnotation**.

Example: bulk-update matching annotations.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="bulkUpdateAnnotations" onclick="bulkUpdateAnnotations()">Bulk Update Annotations</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function bulkUpdateAnnotations() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            // Example criteria; customize as needed
            if (viewer.annotationCollection[i].author === 'Guest' || viewer.annotationCollection[i].subject === 'Rectangle') {
                viewer.annotationCollection[i].color = '#ff0000';
                viewer.annotationCollection[i].opacity = 0.8;
                // For shapes/lines you can also change strokeColor/thickness when applicable
                // viewer.annotationCollection[i].strokeColor = '#222222';
                // viewer.annotationCollection[i].thickness = 2;
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
            }
        }
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="bulkUpdateAnnotations" onclick="bulkUpdateAnnotations()">Bulk Update Annotations</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function bulkUpdateAnnotations() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].author === 'Guest' || viewer.annotationCollection[i].subject === 'Rectangle') {
                viewer.annotationCollection[i].color = '#ff0000';
                viewer.annotationCollection[i].opacity = 0.8;
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
            }
        }
    }
</script>

{% endhighlight %}
{% endtabs %}

## Customize Annotation Settings

Defines the settings of the annotations. You can change annotation settings like author name, height, and width using the **annotationSettings** property.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer")
        .DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf")
        .AnnotationSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerAnnotationSettings { Author = "XYZ", MinHeight = 10, MinWidth = 10, MaxWidth = 100, MaxHeight = 100 })
        .Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer")
        .ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/"))
        .DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf")
        .AnnotationSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerAnnotationSettings { Author = "XYZ", MinHeight = 10, MinWidth = 10, MaxWidth = 100, MaxHeight = 100 })
        .Render()
</div>

{% endhighlight %}
{% endtabs %}

## See also

- [Annotation Overview](./overview)
- [Annotation Types](./annotation-types/area-annotation)
- [Annotation Toolbar](../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](./create-modify-annotation)
- [Remove Annotation](./delete-annotation)
- [Handwritten Signature](./signature-annotation)
- [Export and Import Annotation](./export-import/export-annotation)
- [Annotation Permission](./annotation-permission)
- [Annotation in Mobile View](./annotations-in-mobile-view)
- [Annotation Events](./annotation-event)
- [Annotation API](./annotations-api)
