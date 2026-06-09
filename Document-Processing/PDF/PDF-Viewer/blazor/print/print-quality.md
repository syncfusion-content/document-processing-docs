---
layout: post
title: Customize Print Quality in Blazor PDF Viewer | Syncfusion
description: Learn how to customize print quality for PDF Documents in the Syncfusion Blazor PDF Viewer component.
platform: document-processing
control: Print
documentation: ug
domainurl: ##DomainURL##
---

# Customize Print Quality in Blazor PDF Viewer

This article shows a concise, task-oriented workflow to set and verify print quality for documents rendered by the Blazor PDF Viewer by using the [PrintScaleFactor](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_PrintScaleFactor) property.

**Goal:** Set a suitable [PrintScaleFactor](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_PrintScaleFactor) to improve printed output sharpness while balancing performance and memory use.

## Steps

### 1. Choose a target print quality.

- Valid [PrintScaleFactor](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_PrintScaleFactor) values: **0.5 – 5**. Higher values increase image sharpness and resource use.
- Default value: **1**.

### 2. Set `PrintScaleFactor` during initialization

It is recommended that you set the [PrintScaleFactor](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_PrintScaleFactor) in the viewer options during initialization.

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 Height="100%"
              Width="100%"
              DocumentPath="@DocumentPath"
              PrintScaleFactor="2" />

@code{
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}
{% endhighlight %}
{% endtabs %}

### 3. Set `PrintScaleFactor` after instantiation

As an alternative option, the [PrintScaleFactor](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_PrintScaleFactor) can be dynamically changed during runtime

{% tabs %}
{% highlight razor %}
// Update PrintScaleFactor at runtime
pdfViewerRef.PrintScaleFactor = 2; // increase print resolution for upcoming prints
{% endhighlight %}
{% endtabs %}

### 4. Verify output

Use browser Print Preview or produce a printed/PDF copy to confirm sharpness and acceptable render time.

## Notes

- Values outside the supported range **0.5 – 5** will be ignored and fall back to the default (`1`).
- Increasing [PrintScaleFactor](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_PrintScaleFactor) raises CPU, memory, and rendering time requirements. Test on target machines and documents before setting a higher factor.

[View samples on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Print)

## See Also

- [Overview](./overview)
- [Enable print rotation](./enable-print-rotation)
- [Print modes](./print-modes)
- [Print events](./events)
