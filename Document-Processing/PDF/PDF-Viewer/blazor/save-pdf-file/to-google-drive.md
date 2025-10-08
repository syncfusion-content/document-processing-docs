---
layout: post
title: Save PDF files to Google Drive in Blazor SfPdfViewer | Syncfusion
description: Learn how to save PDF files to Google Drive using the Syncfusion Blazor SfPdfViewer, including required setup, and a working example.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Save PDF files to Google Drive in Blazor SfPdfViewer

Use the following steps to download the currently loaded PDF from the viewer and upload it to a specified Google Drive folder.

**Step 1:** Set up the Google Drive API

Create a project in Google Cloud Console and enable the Google Drive API. Obtain the necessary credentials to access the API. For detailed instructions, see Enable the [Google Drive API](https://developers.google.com/drive/api/guides/enable-sdk).

**Step 2:** Create a simple SfPdfViewer sample in Blazor

Follow the [Getting Started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/getting-started/web-app) guide to create a basic Blazor application with the SfPdfViewer component.

**Step 3:** Include the following namespaces in the **Index.razor** file.

1. Import the required namespaces at the top of the file:

```csharp
@using Google.Apis.Drive.v3;
@using Google.Apis.Auth.OAuth2;
@using Google.Apis.Services;
@using Google.Apis.Util.Store;
@using System.Threading.Tasks;
@using Syncfusion.Blazor.SfPdfViewer;
@using Syncfusion.Blazor.Buttons
```

**Step 4:** Add the following example to save the downloaded PDF file to `Google Drive`.

```csharp

@page "/"
<SfButton @onclick="OnClick">Save file to google drive</SfButton>

<SfPdfViewer2 DocumentPath="@DocumentPath"
              @ref="@viewer"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    private string DocumentPath { get; set; }
    private SfPdfViewer2 viewer;
    private readonly string FolderId = "Your Google Drive Folder ID";
    private readonly string CredentialPath = "Your Path to the OAuth 2.0 Client IDs json file";
    private readonly string ApplicationName = "Your Application name";
    private readonly string FileName = "File Name to be loaded into Syncfusion SfPdfViewer";
    private static readonly string[] Scopes = { DriveService.Scope.DriveFile, DriveService.Scope.DriveReadonly };

    public async void OnClick(MouseEventArgs args)
    {
        byte[] data = await viewer.GetDocumentAsync();
        string result = Path.GetFileNameWithoutExtension(FileName);
        string fileName = result + "_downloaded.pdf";
        UserCredential credential;

        using (var memStream = new FileStream(CredentialPath, FileMode.Open, FileAccess.Read))
        {
            string credPath = "token.json";
            credential = await GoogleWebAuthorizationBroker.AuthorizeAsync(
            GoogleClientSecrets.Load(memStream).Secrets,
            Scopes,
            "user",
             CancellationToken.None,
            new FileDataStore(credPath, true));
        }

        // Create the Drive API service.
        var service = new DriveService(new BaseClientService.Initializer()
            {
                HttpClientInitializer = credential,
                ApplicationName = ApplicationName,
            });

        var fileMetadata = new Google.Apis.Drive.v3.Data.File()
            {
                Name = fileName,
                Parents = new List<string> { FolderId }
            };

        FilesResource.CreateMediaUpload request;

        using (var stream = new MemoryStream(data))
        {
            request = service.Files.Create(fileMetadata, stream, "application/pdf");
            request.Fields = "id";
            object value = await request.UploadAsync();
        }
    }
}

```

N> Replace **Your Google Drive Folder ID** your actual Google Drive folder ID, **Your Application name** with the actual application name, **File Name to be loaded into Syncfusion<sup style="font-size:70%">&reg;</sup> SfPdfViewer** with the file to load into the viewer, and **Your Path to the OAuth 2.0 Client IDs JSON file** with the path to the downloaded OAuth client credentials JSON file.

N> The **FolderId** is the unique identifier found in the folder URL. For example, for `https://drive.google.com/drive/folders/abc123xyz456`, the folder ID is `abc123xyz456`.

N> Install the **Google.Apis.Drive.v3** NuGet package in the application to use the Google Drive client.

[View the sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Load%20and%20Save/Open%20and%20Save%20from%20Google%20Drive)

## See also

* [Processing Large Files Without Increasing Maximum Message Size in SfPdfViewer Component](../faqs/how-to-processing-large-files-without-increasing-maximum-message-size)