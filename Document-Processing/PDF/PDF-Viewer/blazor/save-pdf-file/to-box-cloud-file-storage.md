---
layout: post
title: Save PDF files to Box storage in SfPdfViewer Component | Syncfusion
description: Learn how to save PDF files to Box cloud file storage using the Syncfusion Blazor SfPdfViewer component, including setup, and upload workflow.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Save PDF file to Box cloud file storage in Blazor SfPdfViewer

To save a PDF file to Box cloud file storage, follow the steps below.

**Step 1:** Set up a Box developer account and create a Box application

To access Box storage programmatically, a Box developer account is required. Open the [Box Developer](https://developer.box.com/) Console and create a Box application. The application provides the Client ID and Client Secret used to authenticate with Box APIs. Before accessing files, the application must be authorized using `OAuth 2.0 authentication`.

**Step 2:** Create a simple SfPdfViewer sample in Blazor

Create a basic Blazor Web App Server application that hosts the SfPdfViewer component by following [Getting started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/getting-started/web-app) with Blazor SfPdfViewer. This provides the baseline configuration required for the viewer.

**Step 3:** Include the following namespaces in the **Index.razor** file

1. Import the required namespaces at the top of the file:

```csharp
@using Box.V2;
@using Box.V2.Auth;
@using Box.V2.Config;
@using Box.V2.Models;
@using Syncfusion.Blazor.SfPdfViewer;
@using Syncfusion.Blazor.Buttons
```

**Step 4:** Add the following code example to save a PDF to `Box cloud storage`

```csharp

@page "/"
<SfButton @onclick="OnClick">Save file to Box storage</SfButton>
<SfPdfViewer2 DocumentPath="@DocumentPath"
              @ref="viewer"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    private SfPdfViewer2 viewer;
    private string DocumentPath { get; set; }
    private readonly string accessToken = "Your Box Storage Access Token";
    private readonly string folderID = "Your Folder ID";
    private readonly string clientID = "Your Box Storage ClientID";
    private readonly string clientSecret = "Your Box Storage ClientSecret";
    private readonly string fileName = "File Name to be loaded into Syncfusion SfPdfViewer";

    public async void OnClick(MouseEventArgs args)
    {
        byte[] data = await viewer.GetDocumentAsync();
        string result = Path.GetFileNameWithoutExtension(fileName);
        string FileName = result + "_downloaded.pdf";
        // Initialize the Box API client with your authentication credentials
        var auth = new OAuthSession(accessToken, "YOUR_REFRESH_TOKEN", 3600, "bearer");
        var config = new BoxConfigBuilder(clientID, clientSecret, new Uri("http://boxsdk")).Build();
        var client = new BoxClient(config, auth);

        var fileRequest = new BoxFileRequest
            {
                Name = FileName,
                Parent = new BoxFolderRequest { Id = folderID },
            };

        using (var stream = new MemoryStream(data))
        {
            var boxFile = await client.FilesManager.UploadAsync(fileRequest, stream);
        }

    }
}

```

N> replace **Your_Box_Storage_Access_Token** with your actual box access token, and **Your_Folder_ID** with the ID of the folder in your box storage where you want to perform specific operations. Remember to use your valid box API credentials, as **Your_Box_Storage_ClientID** and **Your_Box_Storage_ClientSecret"** are placeholders for your application's API key and secret.

N> Install the **Box.V2.Core** NuGet package in the application to use the Box SDK types referenced in the example.

N> If loading a document by name, replace `PDF_Succinctly.pdf` with the actual file name, and assign it to the DocumentPath property of the SfPdfViewer component. For details, see the [DocumentPath](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_DocumentPath) property of the SfPdfViewer component.

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Load%20and%20Save/Open%20and%20Save%20from%20box%20cloud%20storage)

## See also

* [Processing Large Files Without Increasing Maximum Message Size in SfPdfViewer Component](../faqs/how-to-processing-large-files-without-increasing-maximum-message-size)