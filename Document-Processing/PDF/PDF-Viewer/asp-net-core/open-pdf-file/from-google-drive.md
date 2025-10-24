---
layout: post
title: Open PDF from Google Drive in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to load PDFs from Google Drive in the Syncfusion ASP.NET Core PDF Viewer component using a server-backed approach.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET Core
documentation: ug
---

# Open PDF from Google Drive

Follow these steps to load a PDF from Google Drive using the server-backed PDF Viewer.

**Step 1:** Set up Google Drive API

You must set up a project in the Google Developers Console and enable the Google Drive API. Obtain the necessary credentials to access the API. For more information, view the official [link](https://developers.google.com/drive/api/guides/enable-sdk).

**Step 2:** Create a PDF Viewer sample in ASP.NET Core

Follow instructions provided in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer Getting Started [Guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started-with-server-backed) to create a simple PDF Viewer sample in ASP.NET Core.

**Step 3:** Modify the `Index.cshtml.cs` file in the project

1. Import the required namespaces at the top of the file.

```csharp
using System.IO;
using Google.Apis.Drive.v3;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Services;
using Google.Apis.Util.Store;
```

2. Add the following private fields and constructor parameters to the `Index.cshtml.cs` class, In the constructor, assign the values from the configuration to the corresponding fields

```csharp

string[] Scopes = { DriveService.Scope.Drive };
private IConfiguration _configuration;
public readonly string folderId;
private readonly string applicationName;
public readonly string credentialPath;

public IndexModel(Microsoft.AspNetCore.Hosting.IHostingEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
    _hostingEnvironment = hostingEnvironment;
    _cache = cache;
    _configuration = configuration;
    folderId = _configuration.GetValue<string>("FolderId");
    credentialPath = _configuration.GetValue<string>("CredentialPath");
    applicationName = _configuration.GetValue<string>("ApplicationName");
}

```
3. Modify the `OnPostLoad()` method to load the PDF files from Google drive.

```csharp
public async Task<IActionResult> OnPostLoadAsync([FromBody] jsonObjects responseData)
{
    PdfRenderer pdfviewer = new PdfRenderer(_cache);
    MemoryStream stream = new MemoryStream();
    var jsonObject = JsonConverterstring(responseData);
    object jsonResult = new object();
    if (jsonObject != null && jsonObject.ContainsKey("document"))
    {
        if (bool.Parse(jsonObject["isFileName"]))
        {
            string objectName = jsonObject["document"];

            UserCredential credential;

            using (var memStream = new FileStream(credentialPath, FileMode.Open, FileAccess.Read))
            {
                string credPath = "token.json";
                credential = await GoogleWebAuthorizationBroker.AuthorizeAsync(
                    GoogleClientSecrets.Load(memStream).Secrets,
                    Scopes,
                    "user",
                    CancellationToken.None,
                    new FileDataStore(credPath, true));
            }

            // Create Google Drive API service.
            var service = new DriveService(new BaseClientService.Initializer()
            {
                HttpClientInitializer = credential,
                ApplicationName = applicationName,
            });

            //This object is used to construct a request to list files from Google Drive.
            FilesResource.ListRequest listRequest = service.Files.List();
            listRequest.Q = "mimeType='application/pdf' and '" + folderId + "' in parents and trashed=false";
            listRequest.Fields = "files(id, name)";
            var files = await listRequest.ExecuteAsync();

            // Process the list of files (you can use 'files' to retrieve the list of files)
            string fileIdToDownload = null;
            foreach (var file in files.Files)
            {
                string fileId = file.Id;
                string fileName = file.Name;
                if (fileName == objectName)
                {
                    // Save the matching fileId
                    fileIdToDownload = fileId;
                    break;
                }
            }
            string fileIds = fileIdToDownload;
            var request = service.Files.Get(fileIds);
            await request.DownloadAsync(stream);
            stream.Position = 0;
        }
        else
        {
            byte[] bytes = Convert.FromBase64String(jsonObject["document"]);
            stream = new MemoryStream(bytes);
        }
    }
    jsonResult = pdfviewer.Load(stream, jsonObject);
    return Content(JsonConvert.SerializeObject(jsonResult));
}

```

4. Open the `appsettings.json` file in your web service project, Add the following lines below the existing `"AllowedHosts"` configuration

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "FolderId": "Your Google Drive Folder ID",
  "CredentialPath": "Your Path to the OAuth 2.0 Client IDs json file",
  "ApplicationName": "Your Application name"
}
```

N> Replace **Your Google Drive Folder ID**, **Your Application name**, and **Your Path to the OAuth 2.0 Client IDs json file** with your actual Google drive folder ID , Your name for your application and the path for the JSON file.

N> The **FolderId** part is the unique identifier for the folder. For example, if your folder URL is: `https://drive.google.com/drive/folders/abc123xyz456`, then the folder ID is `abc123xyz456`.

**Step 4:** Configure the PDF Viewer component

Set the [serviceUrl](https://ej2.syncfusion.com/documentation/api/pdfviewer/#serviceurl) to your web service endpoint (replace the localhost URL with your server URL). Set `documentPath` to the PDF file name to load from Google Drive. Ensure the document name exists in your Drive folder.

```csharp

@page "{handler?}"
@model IndexModel
@{
    ViewData["Title"] = "Home page";
}

<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" serviceUrl="/Index" documentPath="PDF_Succinctly.pdf">
    </ejs-pdfviewer>
</div>

```

N> The **Google.Apis.Drive.v3** NuGet package must be installed in your application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-google-drive)