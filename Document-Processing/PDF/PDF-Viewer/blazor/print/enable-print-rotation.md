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

The [EnablePrintRotation](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnablePrintRotation) property in the Blazor PDF Viewer controls how landscape pages are handled during printing. When enabled, the viewer automatically rotates landscape-oriented pages to match the printer’s paper orientation. This ensures that content fits properly on the page and avoids clipping.

By default, this property is set to **true**, meaning landscape pages are automatically adjusted for optimal printing. If set to **false**, pages retain their original orientation and are printed without any automatic rotation.

## When to use print rotation

Enable this feature when printing documents that include landscape pages and you want them to align with the printer’s paper orientation. This helps improve readability and ensures that content is not cut off during printing.

## Enabling print rotation

You can enable print rotation during the initialization of the PDF Viewer component by setting the `EnablePrintRotation` property to **true**.


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

## See also

- [Overview](./overview)
- [Print modes](./print-modes)
- [Print events](./events)
