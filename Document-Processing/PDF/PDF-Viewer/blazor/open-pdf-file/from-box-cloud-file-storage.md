---
layout: post
title: Open PDF files from cloud storage in Blazor SfPdfViewer | Syncfusion
description: Learn how to open PDF files from Box cloud storage in the Syncfusion Blazor SfPdfViewer component and the Box .NET SDK.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Open PDF file from Box cloud file storage in Blazor SfPdfViewer

To load a PDF file from Box cloud file storage in the Blazor SfPdfViewer, follow the steps below.

## Prerequisites

**1. Box Developer Setup:**
* Create or sign in to a Box developer account at the [Box Developer Console](https://developer.box.com/).
* Create a new Box application and obtain the Client ID and Client Secret for `OAuth 2.0 authentication`.
* Ensure the application has the necessary scopes and permissions to access the target Box folder.

**2. Blazor SfPdfViewer Initialization:**
* Follow the [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/getting-started/web-app) to set up a basic Blazor Server-Side SfPdfViewer component.

**3. NuGet Package Installation:**
* Install the **Box.V2** and **Box.V2.Core** NuGet packages in your Blazor application to use the Box SDK.

### Step 1: Include Namespaces

Import the required namespaces at the top of your `Index.razor` file:

```csharp
@using Box.V2;
@using Box.V2.Auth;
@using Box.V2.Config;
@using Box.V2.Models;
@using Syncfusion.Blazor.SfPdfViewer;
```

### Step 2: Add Code to Load a PDF from Box Storage

```csharp

@page "/"

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

    protected override async Task OnInitializedAsync()
    {
        // Initialize the Box API client with your authentication credentials
        var auth = new OAuthSession(accessToken, "YOUR_REFRESH_TOKEN", 3600, "bearer");
        var config = new BoxConfigBuilder(clientID, clientSecret, new Uri("http://boxsdk")).Build();
        var client = new BoxClient(config, auth);

        // Download the file from Box storage
        var items = await client.FoldersManager.GetFolderItemsAsync(folderID, 1000, autoPaginate: true);
        var files = items.Entries.Where(i => i.Type == "file");

        // Filter the files based on the objectName
        var matchingFile = files.FirstOrDefault(file => file.Name == fileName);

        if (matchingFile != null)
        {
            // Fetch the file from Box storage by its ID
            using (var fileStream = await client.FilesManager.DownloadAsync(matchingFile.Id).ConfigureAwait(false))
            {
                using (MemoryStream stream = new MemoryStream())
                {
                    await fileStream.CopyToAsync(stream).ConfigureAwait(false);

                    // Reset the position to the beginning of the stream
                    stream.Position = 0;
                    DocumentPath = "data:application/pdf;base64," + Convert.ToBase64String(stream.ToArray());
                }
            }
        }
        else
        {
            // Handle case where the file is not found
            Console.WriteLine("File not found in the specified folder.");
        }
    }
}
```

N> replace **Your_Box_Storage_Access_Token** with your actual box access token, and **Your_Folder_ID** with the ID of the folder in your box storage where you want to perform specific operations. Remember to use your valid box API credentials, as **Your_Box_Storage_ClientID** and **Your_Box_Storage_ClientSecret"** are placeholders for your application's API key and secret.

N> Ensure that the specified document name exists in the Box folder. Pass the resulting data URI to the [DocumentPath](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_DocumentPath) of the SfPdfViewer component.

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Load%20and%20Save/Open%20and%20Save%20from%20box%20cloud%20storage)

## See also

* [Processing Large Files Without Increasing Maximum Message Size in SfPdfViewer Component](../faqs/how-to-processing-large-files-without-increasing-maximum-message-size)