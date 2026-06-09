---
layout: post
title: Print PDF in Blazor PDF Viewer | Syncfusion
description: Enable and customize printing, configure print events, cancel print, and monitor printing in the Syncfusion Blazor PDF Viewer component.
platform: document-processing
control: Print
documentation: ug
domainurl: ##DomainURL##
---

# Print PDF in Blazor PDF Viewer

The Blazor PDF Viewer includes built-in printing via the toolbar and APIs so users can control how documents are printed and monitor the process.

Select **Print** in the built-in toolbar to open the browser print dialog.

![Browser print dialog from PDF Viewer](../images/print.gif)

## Enable or Disable Print in Blazor PDF Viewer

The Syncfusion Blazor PDF Viewer component lets users print a loaded PDF document through the built-in toolbar or programmatic calls. Control whether printing is available by setting the [EnablePrint](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnablePrint) property (`true` enables printing; `false` disables it).

The following Blazor example renders the PDF Viewer with printing disabled.

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 Height="100%"
              Width="100%"
              DocumentPath="@DocumentPath"
              EnablePrint="false" />

@code{
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}
{% endhighlight %}
{% endtabs %}

## Print programmatically in Blazor PDF Viewer

To start printing from code, call the [PrintAsync()](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SfPdfViewer.html#Syncfusion_Blazor_SfPdfViewer_SfPdfViewer_PrintAsync) method after the document is fully loaded. This approach is useful when wiring up custom UI or initiating printing automatically; calling print before the document finishes loading can result in no output or an empty print dialog.

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="OnClick">Print</SfButton>
<SfPdfViewer2 Width="100%"
              Height="100%"
              DocumentPath="@DocumentPath"
              @ref="@Viewer" />

@code{
    SfPdfViewer2 Viewer;
    public string DocumentPath { get; set; } = "wwwroot/data/PDF_Succinctly.pdf";

    public async void OnClick(MouseEventArgs args)
    {
        await Viewer.PrintAsync();
    }
}
{% endhighlight %}
{% endtabs %}

## Key capabilities

- Enable or disable printing with the [EnablePrint](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnablePrint) property
- Start printing from UI (toolbar Print) or programmatically using [PrintAsync()](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SfPdfViewer.html#Syncfusion_Blazor_SfPdfViewer_SfPdfViewer_PrintAsync).
- Control output quality with the [PrintScaleFactor](./print-quality) property (0.5–5)
- Auto‑rotate pages during print using [EnablePrintRotation](./enable-print-rotation)
- Choose where printing happens with [PrintMode](./print-modes) (Default or NewWindow)
- Track the life cycle with [PrintStart and PrintEnd events](./events)

## Troubleshooting

- Ensure the resource URL value matches the deployed `ej2-pdfviewer-lib` version.
- Calling [PrintAsync()](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SfPdfViewer.html#Syncfusion_Blazor_SfPdfViewer_SfPdfViewer_PrintAsync) launches the browser print dialog; behavior varies by browser and may be affected by popup blockers or browser settings.

[View Sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Print)

## See Also

- [Print quality](./print-quality)
- [Enable print rotation](./enable-print-rotation)
- [Print modes](./print-modes)
- [Print events](./events)
