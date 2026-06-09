---
layout: post
title: Print Events in Blazor PDF Viewer | Syncfusion
description: Learn how to configure print events and track usage and implements workflows in the Syncfusion Blazor PDF Viewer component.
platform: document-processing
control: Print
documentation: ug
domainurl: ##DomainURL##
---

# Print events in Blazor PDF Viewer

This page lists each event emitted by the Blazor PDF Viewer's print feature, the argument schema, and the minimal behavior notes needed for implementation.

## Events

| Name         | Description |
|--------------|-------------|
| [PrintStart](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_PrintStart) | Raised when a print action begins. Use the event to log activity or cancel printing. |
| [PrintEnd](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_PrintEnd)   | Raised after a print action completes. Use the event to notify users or clean up resources. |

### PrintStart Event

The [PrintStart](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_PrintStart) event triggers when a print action begins.

#### Event arguments

See [PrintStartEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PrintStartEventArgs.html) for details such as `FileName` and the `Cancel` option.

- If the [Cancel](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PrintStartEventArgs.html#Syncfusion_Blazor_SfPdfViewer_PrintStartEventArgs_Cancel) property is set to `true` in the `PrintStart` event handler, the print operation is canceled and the print dialog does not open.
- By default, `Cancel` is `false`.

The following example illustrates how to handle the `PrintStart` event.

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.SfPdfViewer 
<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents PrintStart="@PrintStart"></PdfViewerEvents>
</SfPdfViewer2>
@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task PrintStart(PrintStartEventArgs args) 
    {
        Console.WriteLine($"Printed File Name: {args.FileName}");
    }	 
}
{% endhighlight %}
{% endtabs %}

### PrintEnd Event

The [PrintEnd](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_PrintEnd) event triggers when a print action completes.

#### Event arguments

See [PrintEndEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PrintEndEventArgs.html) for details such as `FileName`.

The following example illustrates how to handle the `PrintEnd` event.

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.SfPdfViewer 
<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents PrintEnd="@PrintEnd"></PdfViewerEvents>
</SfPdfViewer2>
@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task PrintEnd(PrintEndEventArgs args) 
    {
        Console.WriteLine($"Printed File Name: {args.FileName}");
    }	 
}
{% endhighlight %}
{% endtabs %}

[View Sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Print)

## See also

- [Overview](./overview)
- [Print quality](./print-quality)
- [Enable print rotation](./enable-print-rotation)
- [Print modes](./print-modes)
