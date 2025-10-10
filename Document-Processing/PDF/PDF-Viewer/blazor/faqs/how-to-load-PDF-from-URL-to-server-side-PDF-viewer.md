---
layout: post
title: Load PDF from a URL in a server-side PDF Viewer | Syncfusion
description: Learn how to download a PDF from a server-side URL and load it into the Syncfusion Blazor SfPdfViewer component using a base64 data.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# How to load PDF from URL to server-side PDF viewer.

Syncfusion PDF Viewer supports loading PDF documents from remote URLs. For details, see Opening a PDF file. In scenarios where the document must be retrieved on the server (for example, to add authentication headers, avoid CORS issues, or protect the source URL), the following approach can be used to download the file server-side and load it into the viewer via a base64 data URI.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 DocumentPath="@DocumentPath"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    public string DocumentPath { get; set; }
    protected override void OnInitialized()
    {
        string Url = "https://s3.amazonaws.com/files2.syncfusion.com/dtsupport/directtrac/general/pd/HTTP_Succinctly-1719682472.pdf";
        System.Net.WebClient webClient = new System.Net.WebClient();
        byte[] byteArray = webClient.DownloadData(Url);
        DocumentPath = "data:application/pdf;base64," + Convert.ToBase64String(byteArray);
    }
}

```

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Load%20and%20Save/Load%20PDF%20file%20from%20URL)