---
layout: post
title: Customize the arrow annotation head in Blazor SfPdfViewer | Syncfusion
description: Learn how to customize or remove the start and end arrow heads in the Blazor SfPdfViewer using ArrowSettings and LineHeadStyle.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Customize the arrow annotation head in Blazor SfPdfViewer Component

Use the [ArrowSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerArrowSettings.html) API to customize arrow annotations, including the start and end arrow head styles.

The following example shows how to remove arrow heads from arrow annotations.

```cshtml
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref="@Viewer"
              DocumentPath="@DocumentPath"
              ArrowSettings="@ArrowSettings"
              Height="100%"
              Width="100%">
    <PdfViewerEvents DocumentLoaded="DocumentLoad"></PdfViewerEvents>
</SfPdfViewer2>

@code
{
    private SfPdfViewer2 Viewer { get; set; }

    private string DocumentPath { get; set; } = "wwwroot/data/PDF_Succinctly.pdf";

    PdfViewerArrowSettings ArrowSettings = new PdfViewerArrowSettings 
    { 
        //Removes the start arrow head.
        LineHeadStartStyle=LineHeadStyle.None,
        //Removes the end arrow head.
        LineHeadEndStyle=LineHeadStyle.None
    };

    //Invoked when the document is loaded in the PDF Viewer.
    private void DocumentLoad(LoadEventArgs args)
    {
        //Shows the AnnotationToolbar on initial loading.
        Viewer.ShowAnnotationToolbar(true);        
    }
}
```

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Annotations/Shapes/Remove%20arrow%20annotation%20heads).

N> ArrowSettings controls the default arrow head styles for annotations created using the toolbar or programmatically. Set `LineHeadStartStyle` and `LineHeadEndStyle` to `LineHeadStyle.None` to remove heads. Other common values include `LineHeadStyle.Closed`, `LineHeadStyle.Round`, `LineHeadStyle.Square`, `LineHeadStyle.ClosedArrow`, `LineHeadStyle.Diamond`, and `LineHeadStyle.Open`.

## See also

* [Arrow Annotation](../annotation/shape/arrow-annotation)
* [Events in Blazor SfPdfViewer](../events)
* [Shape annotations in Blazor SfPdfViewer Component](../annotation/shape-annotation)
* [Measurement annotations in Blazor SfPdfViewer Component](../annotation/measurement-annotation)
