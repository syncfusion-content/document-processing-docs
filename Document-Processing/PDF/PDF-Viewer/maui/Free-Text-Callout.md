---
layout: post
title: Free Text Callout Annotations in .NET MAUI PDF Viewer | Syncfusion
description: Learn how to add and customize free text callout annotations in the Syncfusion<sup>®</sup> .NET MAUI PDF Viewer (SfPdfViewer) control.
platform: document-processing
control: SfPdfViewer
documentation: ug
keywords: .net maui pdf viewer, .net maui view pdf, pdf viewer in .net maui, .net maui open pdf, maui pdf viewer, maui pdf view
---

# Free Text Callout Annotations in .NET MAUI PDF Viewer

The [SfPdfViewer](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) allows you to add free text callout annotations in a PDF document. A free text callout is a text box with a leader line that points to a specific location on the page. Use it when a note must stay attached to the content it describes, such as a figure, a value in a table, or a region that needs review. This section explains how to add free text callout annotations and customize their default appearance.

## Add free text callout annotations

This section explains how to add free text callout annotations using the built-in annotation mode and programmatically.

### Add free text callout annotations using the annotation mode

Set the [AnnotationMode](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.AnnotationMode.html) property of the PDF Viewer to [FreeTextCallout](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.AnnotationMode.html#Syncfusion_Maui_PdfViewer_AnnotationMode_FreeTextCallout) to let users place a callout by tapping the target location on a page. After the required callouts are added, set [AnnotationMode](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.AnnotationMode.html) to [None](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.AnnotationMode.html#Syncfusion_Maui_PdfViewer_AnnotationMode_None) to leave the annotation mode.

{% tabs %}
{% highlight C# hl_lines="4" %}
// Enable the free text callout annotation mode.
void EnableFreeTextCalloutMode()
{
    PdfViewer.AnnotationMode = AnnotationMode.FreeTextCallout;
}
{% endhighlight %}
{% endtabs %}

Similarly, refer to the following code to disable the free text callout annotation mode.

{% tabs %}
{% highlight C# hl_lines="4" %}
// Disable the free text callout annotation mode.
void DisableFreeTextCalloutMode()
{
    PdfViewer.AnnotationMode = AnnotationMode.None;
}
{% endhighlight %}
{% endtabs %}

### Add a free text callout annotation programmatically

Create a [FreeTextCalloutAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.FreeTextCalloutAnnotation.html) when the text, the text box location, and the leader line are already known, and add it with the [AddAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_AddAnnotation_Syncfusion_Maui_PdfViewer_Annotation_) method.

The constructor takes the text, the page number, the text box bounds, and the callout points. Provide three points, in this order:

1. The target point, where the leader line points.
2. The knee point, where the leader line bends.
3. The attachment point on the text box. The PDF Viewer snaps this point to the center of the nearest text box side so the leader line meets the box.

The following example adds a callout to the first page.

{% tabs %}
{% highlight C# hl_lines="9 16" %}
FreeTextCalloutAnnotation CreateFreeTextCalloutAnnotation()
{
    int pageNumber = 1;
    string text = "Review this total";
    // Bounds of the text box, separate from the leader line.
    RectF textBoxBounds = new RectF(220, 80, 140, 40);
    // Target, knee, and text box attachment points.
    PointF[] calloutPoints = new PointF[]
    {
        new PointF(120, 160),
        new PointF(180, 100),
        new PointF(220, 100)
    };
    return new FreeTextCalloutAnnotation(text, pageNumber, textBoxBounds, calloutPoints);
}

void AddFreeTextCalloutAnnotation()
{
    PdfViewer.AddAnnotation(CreateFreeTextCalloutAnnotation());
}
{% endhighlight %}
{% endtabs %}

N> The page number is 1-based. The text box bounds and callout points are in PDF page coordinates.

## Callout points

The [CalloutPoints](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.FreeTextCalloutAnnotation.html#Syncfusion_Maui_PdfViewer_FreeTextCalloutAnnotation_CalloutPoints) property gets or sets the points that define the leader line from the text box to the target location. Change it when the note must point to a different place, or when you need to reshape the leader line after the annotation is created.

{% tabs %}
{% highlight C# hl_lines="5" %}
void UpdateCalloutPoints(FreeTextCalloutAnnotation annotation)
{
    annotation.CalloutPoints = new PointF[]
    {
        new PointF(100, 100),
        new PointF(150, 150),
        new PointF(200, 200)
    };
}
{% endhighlight %}
{% endtabs %}

## Free text callout annotation settings

Callouts added from the annotation mode use a default appearance. To define that appearance before the user adds a callout, obtain the [FreeTextCallout](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.AnnotationSettings.html#Syncfusion_Maui_PdfViewer_AnnotationSettings_FreeTextCallout) settings from [AnnotationSettings](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.AnnotationSettings.html) and modify the [FreeTextCalloutAnnotationSettings](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.FreeTextCalloutAnnotationSettings.html). These settings do not change callouts that are already in the document.

{% tabs %}
{% highlight C# hl_lines="3" %}
void CustomizeDefaultFreeTextCalloutSettings()
{
    FreeTextCalloutAnnotationSettings calloutSettings = PdfViewer.AnnotationSettings.FreeTextCallout;
    calloutSettings.Color = Colors.Black;
    calloutSettings.FillColor = Colors.LightYellow;
    calloutSettings.BorderColor = Colors.DarkRed;
    calloutSettings.BorderWidth = 1;
    calloutSettings.FontSize = 12;
    calloutSettings.Opacity = 1;
}
{% endhighlight %}
{% endtabs %}

## Edit a free text callout annotation

A free text callout is a free text annotation with a leader line, so its text and text-box appearance are edited the same way as a free text annotation. For text editing, modal view behavior, and appearance properties such as text color, border, fill color, and font size, see [Free Text Annotations](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/free-text).

To change where an existing callout points, update [CalloutPoints](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.FreeTextCalloutAnnotation.html#Syncfusion_Maui_PdfViewer_FreeTextCalloutAnnotation_CalloutPoints) on the selected annotation. The selected annotation can be obtained from the [AnnotationSelected](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_AnnotationSelected) event.

{% tabs %}
{% highlight C# hl_lines="6" %}
void EditSelectedFreeTextCallout(Annotation selectedAnnotation)
{
    if (selectedAnnotation is FreeTextCalloutAnnotation callout)
    {
        callout.Text = "Updated review note";
        callout.CalloutPoints = new PointF[]
        {
            new PointF(90, 140),
            new PointF(160, 90),
            new PointF(220, 90)
        };
    }
}
{% endhighlight %}
{% endtabs %}

N> Because a free text callout derives from the free text annotation, check for `FreeTextCalloutAnnotation` before `FreeTextAnnotation` when you handle a selected annotation. Otherwise the callout is treated as a plain free text annotation.

## See Also

- [Free Text Annotations](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/free-text)
- [Annotations Overview](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/annotations-overview)
- [Add, Remove, and Edit Annotations](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/add-remove-modify-annotations)
- [Sticky Notes](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/sticky-notes)
- [Toolbar](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/toolbar)
