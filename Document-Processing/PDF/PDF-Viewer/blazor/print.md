---
layout: post
title: Print in Blazor SfPdfViewer Component | Syncfusion
description: Learn how to print PDF files in the Syncfusion Blazor SfPdfViewer component using the toolbar or programmatically.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Print in Blazor SfPdfViewer Component

The SfPdfViewer supports printing the loaded PDF by default. Enable or disable the toolbar Print option by setting the [EnablePrint](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnablePrint) property.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 Height="100%"
              Width="100%"
              DocumentPath="@DocumentPath"
              EnablePrint="true" />

@code{
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}

```

![Print a PDF using the SfPdfViewer](../blazor-classic/images/blazor-pdfviewer-print.png)


```cshtml

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

```

## See also

* [Download in Blazor SfPdfViewer component](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/saving-pdf-file#download-in-blazor-sfpdfviewer-component)

* [How to print in the same window](./faqs/how-to-perform-print-in-same-window)

* [How to print the SfPdfViewer inside the Dialog](./faqs/how-to-print-the-sfpdfiewer-inside-the-dialog-component)
