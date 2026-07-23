---
layout: post
title: Print Events in Blazor PDF Viewer | Syncfusion
description: Learn how to configure print events and track usage and implements workflows in the Blazor PDF Viewer component.
platform: document-processing
control: SfPdfViewer
documentation: ug
domainurl: ##DomainURL##
---

# Print events in Blazor PDF Viewer

This page lists each event emitted by the Blazor PDF Viewer's print feature, the argument schema, and the minimal usage notes.

## Events

| Name         | Description |
|--------------|-------------|
| [PrintStart](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_PrintStart) | Raised when a print operation begins. Use the event to log activity or cancel printing. |
| [PrintEnd](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_PrintEnd) | Raised after a print operation completes. Use the event to notify users or clean up resources. |

### PrintStart

The [PrintStart](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_PrintStart) event triggers when a print operation begins.

#### Event arguments

The [PrintStartEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PrintStartEventArgs.html) exposes the following members:

| Property | Type | Description |
|----------|------|-------------|
| `FileName` | `string` | The name of the PDF file being printed. |
| `Cancel` | `bool` | Set to `true` to cancel the print operation and prevent the print dialog from opening. |

- If the `Cancel` property is set to `true` in the `PrintStart` event handler, the print operation is canceled and the print dialog does not open.
- By default, `Cancel` is `false`.

The following example illustrates how to handle the `PrintStart` event.

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.SfPdfViewer
<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%">
    <PdfViewerEvents PrintStart="@PrintStart"></PdfViewerEvents>
</SfPdfViewer2>
@code{
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    private async Task PrintStart(PrintStartEventArgs args)
    {
        Console.WriteLine($"Printed File Name: {args.FileName}");
    }
}
{% endhighlight %}
{% endtabs %}

The following example shows how to cancel the print operation from the `PrintStart` handler.

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.SfPdfViewer
<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%">
    <PdfViewerEvents PrintStart="@PrintStart"></PdfViewerEvents>
</SfPdfViewer2>
@code{
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    private async Task PrintStart(PrintStartEventArgs args)
    {
        args.Cancel = true;
        Console.WriteLine($"Print canceled for file: {args.FileName}");
    }
}
{% endhighlight %}
{% endtabs %}

### PrintEnd

The [PrintEnd](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_PrintEnd) event triggers when a print operation completes.

#### Event arguments

The [PrintEndEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PrintEndEventArgs.html) exposes the following member:

| Property | Type | Description |
|----------|------|-------------|
| `FileName` | `string` | The name of the PDF file that was printed. |

The following example illustrates how to handle the `PrintEnd` event.

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.SfPdfViewer
<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%">
    <PdfViewerEvents PrintEnd="@PrintEnd"></PdfViewerEvents>
</SfPdfViewer2>
@code{
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    private async Task PrintEnd(PrintEndEventArgs args)
    {
        Console.WriteLine($"Printed File Name: {args.FileName}");
    }
}
{% endhighlight %}
{% endtabs %}

The following example shows how to handle both `PrintStart` and `PrintEnd` together.

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.SfPdfViewer
<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%">
    <PdfViewerEvents PrintStart="@OnPrintStart" PrintEnd="@OnPrintEnd"></PdfViewerEvents>
</SfPdfViewer2>
@code{
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    private async Task OnPrintStart(PrintStartEventArgs args)
    {
        Console.WriteLine($"Print started: {args.FileName}");
    }
    private async Task OnPrintEnd(PrintEndEventArgs args)
    {
        Console.WriteLine($"Print completed: {args.FileName}");
    }
}
{% endhighlight %}
{% endtabs %}

[View the print sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Print)

## See also

- [Print overview](./overview)
- [Enable print rotation](./enable-print-rotation)
- [Print modes](./print-modes)

