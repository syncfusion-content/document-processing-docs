---
layout: post
title: Open PDF files from Google Drive in Blazor SfPdfViewer | Syncfusion
description: Learn how to open PDF files from Google Drive in the Syncfusion Blazor SfPdfViewer component, including setup, and a working example.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Open PDF from Google Drive in SfPdfViewer

This article shows how to load a PDF stored in Google Drive into the Syncfusion Blazor `SfPdfViewer` component.

## Step 1 — Enable the Google Drive API

Create a project in Google Developers Console and enable the Google Drive API. Obtain the necessary credentials to access the API. For detailed guidance, see the [Google Drive documentation](https://developers.google.com/drive/api/guides/enable-sdk).

## Step 2 — Create a minimal SfPdfViewer sample

Follow the [getting started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/getting-started/web-app) guide to create a basic Blazor application with the SfPdfViewer component.

## Step 3 — Add required namespaces

1. Import the required namespaces at the top of the file:

```csharp
@using Google.Apis.Drive.v3;
@using Google.Apis.Auth.OAuth2;
@using Google.Apis.Services;
@using Google.Apis.Util.Store;
@using System.Threading.Tasks;
@using Syncfusion.Blazor.SfPdfViewer;
```

## Step 4 — Example: authorize, download, and load

The example below authenticates with OAuth 2.0, lists PDF files in a folder, downloads the selected file into memory, converts it to a Base64 data URI, and assigns it to `DocumentPath`.

```csharp
@page "/"

<SfPdfViewer2 DocumentPath="@DocumentPath"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    private string DocumentPath { get; set; }

    private readonly string FolderId = "Your Google Drive Folder ID";
    private readonly string CredentialPath = "Your Path to the OAuth 2.0 Client IDs json file";
    private readonly string ApplicationName = "Your Application name";
    private readonly string FileName = "File Name to be loaded into Syncfusion SfPdfViewer";

    private static readonly string[] Scopes = { DriveService.Scope.DriveFile, DriveService.Scope.DriveReadonly };

    protected override async Task OnInitializedAsync()
    {
        UserCredential credential;
        using (var stream1 = new FileStream(CredentialPath, FileMode.Open, FileAccess.Read))
        {
            string credPath = "token.json";
            credential = await GoogleWebAuthorizationBroker.AuthorizeAsync(
                GoogleClientSecrets.Load(stream1).Secrets,
                Scopes,
                "user",
                CancellationToken.None,
                new FileDataStore(credPath, true));
        }

        var service = new DriveService(new BaseClientService.Initializer()
        {
            HttpClientInitializer = credential,
            ApplicationName = ApplicationName,
        });

        var listRequest = service.Files.List();
        listRequest.Q = $"mimeType='application/pdf' and '{FolderId}' in parents and trashed=false";
        listRequest.Fields = "files(id, name)";
        var files = await listRequest.ExecuteAsync();

        string fileIdToDownload = files.Files
            .FirstOrDefault(file => file.Name == FileName)?.Id;

        if (!string.IsNullOrEmpty(fileIdToDownload))
        {
            var request = service.Files.Get(fileIdToDownload);
            using (var stream = new MemoryStream())
            {
                await request.DownloadAsync(stream);
                stream.Position = 0;
                DocumentPath = "data:application/pdf;base64," + Convert.ToBase64String(stream.ToArray());
            }
        }
        else
        {
            Console.WriteLine("File not found in Google Drive.");
        }
    }
}

```

N> Replace the placeholders with real values: use the actual Google Drive folder ID for **Your Google Drive Folder ID**, the application display name for **Your Application name**, the exact PDF file name for **File Name to be loaded into Syncfusion SfPdfViewer**, and the full path to the OAuth 2.0 Client IDs JSON for **Your Path to the OAuth 2.0 Client IDs JSON file**.

N> The **FolderId** is the unique identifier of the Drive folder. For example, for `https://drive.google.com/drive/folders/abc123xyz456`, the folder ID is `abc123xyz456`.

N> Install the **Google.Apis.Drive.v3** NuGet package in the application to use the shown code.

[View the sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Load%20and%20Save/Open%20and%20Save%20from%20Google%20Drive)

## See also

* [Processing Large Files Without Increasing Maximum Message Size in SfPdfViewer Component](../faqs/how-to-processing-large-files-without-increasing-maximum-message-size)