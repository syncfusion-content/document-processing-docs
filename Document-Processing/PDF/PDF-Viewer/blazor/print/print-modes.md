---
layout: post
title: Print Modes in Blazor PDF Viewer | Syncfusion
description: Learn how to configure print modes for PDF Documents in the Syncfusion Blazor PDF Viewer component and more.
platform: document-processing
control: Print
documentation: ug
domainurl: ##DomainURL##
---

# Print Modes in Blazor PDF Viewer

The  [`PrintMode`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_PrintMode) property determines how the print dialog is opened in the PDF Viewer. By default, it is set to PrintMode.Default, which prints the document from the same browser window.

## Available print modes

- [PrintMode.Default](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PrintMode.html): Prints the document from the current browser window.
- [PrintMode.NewWindow](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PrintMode.html): Opens the print dialog in a new window or tab. This may be affected by browser pop-up blockers.

## Set print mode

You can configure the print mode during the initialization of the PDF Viewer component by setting the `PrintMode` property.

{% tabs %}
{% highlight razor %}

@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 Height="100%"
              Width="100%"
              DocumentPath="@DocumentPath"
              PrintMode="PrintMode.NewWindow" />

@code {
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}

{% endhighlight %}
{% endtabs %}

![Print in New Window](../images/print-newwindow.gif)

> **Note:** Ensure that browser pop-up blockers allow new windows or tabs when using `PrintMode.NewWindow`.

[View samples on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Print)

## See also

- [Overview](./overview)
- [Enable print rotation](./enable-print-rotation)
- [Print events](./events)
