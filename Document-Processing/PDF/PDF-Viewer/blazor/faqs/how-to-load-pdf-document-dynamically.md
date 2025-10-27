---
layout: post
title: Load PDF File dynamically in Blazor SfPdfViewer component| Syncfusion
description: Learn here all about how to load PDF documents dynamically in Syncfusion Blazor SfPdfViewer component and more.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Load PDF documents dynamically in Blazor SfPdfViewer Component

In many scenarios, a PDF document must be switched or reloaded after the initial load. Use the [LoadAsync()](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_LoadAsync_System_Byte___System_String_) method of the SfPdfViewer component to load a PDF from a base64 data URL or from a file/URL path at runtime.

The following code example shows how to load a base64 string dynamically.

```cshtml
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton @onclick="clicked">Load Document</SfButton>
<SfPdfViewer2 DocumentPath="@DocumentPath"
              Height="100%"
              Width="100%"
              @ref="Viewer">
</SfPdfViewer2>

@code{
    SfPdfViewer2 Viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    public async void clicked()
    {
        byte[] byteArray = System.IO.File.ReadAllBytes("wwwroot/Data/Python_Succinctly.pdf");
        string base64String = Convert.ToBase64String(byteArray);
        await Viewer.LoadAsync("data:application/pdf;base64," + base64String, null);
    }
}
```
[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Load%20and%20Save/LoadAsync).

N>
* In Blazor Server, files can be read from the server file system. Ensure the path points to an existing file and that casing matches the actual folder and file names.
* In Blazor WebAssembly, direct access to the server file system is not available. To generate a base64 string, fetch the file using HttpClient or call a web API, then convert the received bytes to a base64 string before calling LoadAsync.

The following code example shows how to load the PDF dynamically by specifying file path.

```cshtml
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton @onclick="clicked">Load Document</SfButton>
<SfPdfViewer2 DocumentPath="@DocumentPath"
              Height="100%"
              Width="100%"
              @ref="Viewer">
</SfPdfViewer2>

@code{
    SfPdfViewer2 Viewer;
    private string DocumentPath { get; set; } = "wwwroot/data/PDF_Succinctly.pdf";

    public async void clicked()
    {
        await Viewer.LoadAsync("wwwroot/data/Python_Succinctly.pdf", null);
    }
}
```

N>
* LoadAsync accepts an accessible URL or a path that resolves to a publicly served file. Ensure the target file is available under the app’s static file directory (commonly wwwroot) and that the request path correctly maps to that file.
* If the specified path or URL is not reachable, the request may result in a 404 response and the document will not load. Verify the file location, URL accessibility, and case sensitivity.

N> You can refer to our [Blazor SfPdfViewer](https://www.syncfusion.com/pdf-viewer-sdk/blazor-pdf-viewer) feature tour page for detailed feature overviews. You can also explore the [Blazor SfPdfViewer example](https://document.syncfusion.com/demos/pdf-viewer/blazor-server/pdf-viewer/default-functionalities?theme=bootstrap4) to understand the core features of SfPdfViewer.

## See also

* [How to load Microsoft Office files in Blazor SfPdfViewer Component](./how-to-load-office-files)

* [How to unload the PDF document from Viewer](./how-to-unload-the-pdf-document-from-viewer)

* [How to show or hide the Component dynamically](./how-to-show-or-hide-sfpdfviewer-dynamically)