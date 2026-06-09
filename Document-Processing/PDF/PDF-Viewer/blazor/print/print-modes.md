---
layout: post
title: Print Modes in Blazor PDF Viewer | Syncfusion
description: Learn how to configure print modes for PDF Documents in the Syncfusion Blazor PDF Viewer component and more.
platform: document-processing
control: Print
documentation: ug
domainurl: ##DomainURL##
---

# Print Modes in the Blazor PDF Viewer

This guide shows how to set the PDF Viewer [`PrintMode`](https://ej2.syncfusion.com/blazor/documentation/api/pdfviewer/pdfviewer#printmode) so PDFs print from the current window or from a new window/tab.

## Prerequisites

- A Blazor app with the Syncfusion PDF Viewer component integrated.

## Steps to set print mode

**Step 1:** Decide which [PrintMode](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_PrintMode) you need:
   - `PrintMode.Default` — print from the same browser window.
   - `PrintMode.NewWindow` — print from a new window or tab (may be blocked by pop-up blockers).

**Step 2:** Set [PrintMode](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_PrintMode) during viewer initialization (recommended):

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 Height="100%"
              Width="100%"
              DocumentPath="@DocumentPath"
              PrintMode="PrintMode.NewWindow" />

@code{
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}
{% endhighlight %}
{% endtabs %}

![Print in New Window](../images/print-newwindow.gif)

**Step 3:** Print mode can also be changed at runtime after the viewer is created:

{% tabs %}
{% highlight razor %}
// switch to NewWindow at runtime
pdfViewerRef.PrintMode = "NewWindow";
{% endhighlight %}
{% endtabs %}

## Quick reference

- `PrintMode.Default`: Print from the same window (default).
- `PrintMode.NewWindow`: Print from a new window or tab.

N> Browser pop-up blockers must allow new windows or tabs when using `PrintMode = PrintMode.NewWindow`.

[View samples on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Print)

## See also

- [Overview](./overview)
- [Print quality](./print-quality)
- [Enable print rotation](./enable-print-rotation)
- [Print events](./events)
