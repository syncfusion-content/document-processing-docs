---
layout: post
title: Enable Print Rotation in Blazor PDF Viewer | Syncfusion
description: Learn how to enable print rotation for landscape documents in the Syncfusion Blazor PDF Viewer component.
platform: document-processing
control: Print
documentation: ug
domainurl: ##DomainURL##
---

# Enable print rotation in Blazor PDF Viewer

This guide shows how to enable automatic rotation of landscape pages during printing so they match the paper orientation and reduce clipping. Use [EnablePrintRotation](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnablePrintRotation) when printing documents that include landscape pages and you want them rotated to match the printer paper orientation.

## Prerequisites

- A Blazor app with the Syncfusion PDF Viewer component integrated.

## Steps to enable print rotation

1. Configure the [SfPdfViewer](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SfPdfViewer.html) component in your Blazor application.
2. Set [EnablePrintRotation](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnablePrintRotation)="true" in the PDF Viewer during initialization.

## Example

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 Height="100%"
              Width="100%"
              DocumentPath="@DocumentPath"
              EnablePrintRotation="true" />

@code{
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}
{% endhighlight %}
{% endtabs %}

![Print rotation demo showing landscape pages rotated for printing](../images/print-rotate.gif)

[View Sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Print)

## Troubleshooting

- If you need to preserve original page orientation for archival printing, set [EnablePrintRotation](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnablePrintRotation)="false".
- Confirm that the PDF Viewer component is properly configured with the correct resource URL.

## See also

- [Overview](./overview)
- [Print quality](./print-quality)
- [Print modes](./print-modes)
- [Print events](./events)
