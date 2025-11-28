---
layout: post
title: Open PDF from Google Drive in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to load PDFs from Google Drive in the Syncfusion ASP.NET MVC PDF Viewer component using a server-backed approach.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Open PDF from Google Drive in ASP.NET MVC

Follow these steps to load a PDF from Google Drive using the server-backed PDF Viewer.

**Step 1:** Set up Google Drive API

You must set up a project in the Google Developers Console and enable the Google Drive API. Obtain the necessary credentials to access the API. For more information, view the official [link](https://developers.google.com/drive/api/guides/enable-sdk).

**Step 2:** Create a PDF Viewer sample in ASP.NET MVC

Follow instructions provided in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer Getting Started [Guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started-with-server-backed) to create a simple PDF Viewer sample in ASP.NET MVC.

**Step 3:** Modify the `HomeController.cs` file in the project

1. Import the required namespaces at the top of the file.

```csharp
using System.IO;
using Google.Apis.Drive.v3;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Services;
using Google.Apis.Util.Store;
```

2. Modify the `Load()` method to load the PDF files from Google drive.

```csharp

// Specify the path to the credentials file
private string credentialsPath = "Your Path to the OAuth 2.0 Client IDs json file";
// Specify the folder ID where you want to upload the PDF on Google Drive
private readonly string folderId = "Your Google Drive Folder ID";
private readonly string ApplicationName = "Your Application Name";
private readonly string tokenjson = "Path to create token.json file";

 public async Task<ActionResult> Load(jsonObjects jsonObject)
 {
     PdfRenderer pdfviewer = new PdfRenderer();
     MemoryStream stream = new MemoryStream();
     var jsonData = JsonConverter(jsonObject);
     object jsonResult = new object();

     if (jsonObject != null && jsonData.ContainsKey("document"))
     {
         if (bool.Parse(jsonData["isFileName"]))
         {
             string objectName = jsonData["document"];

             // Google Drive API setup
             UserCredential credential;
             string[] Scopes = { DriveService.Scope.DriveReadonly };

             // Load the credentials file
             using (var streammen = new FileStream(credentialsPath, FileMode.Open, FileAccess.Read))
             {
                 // The file token.json stores the user's access and refresh tokens, and is created
                 // automatically when the authorization flow completes for the first time.
                 string tokenPath = tokenjson;
                 credential = GoogleWebAuthorizationBroker.AuthorizeAsync(
                     GoogleClientSecrets.Load(streammen).Secrets,
                     Scopes,
                     "user",
                     CancellationToken.None,
                     new FileDataStore(tokenPath, true)).Result;
             }

             // Create the Drive service
             var service = new DriveService(new BaseClientService.Initializer()
             {
                 HttpClientInitializer = credential,
                 ApplicationName = ApplicationName,
             });


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
             byte[] bytes = Convert.FromBase64String(jsonData["document"]);
             stream = new MemoryStream(bytes);
         }
     }

     jsonResult = pdfviewer.Load(stream, jsonData);
     return Content(JsonConvert.SerializeObject(jsonResult));
 }
```

N> Replace **Your Google Drive Folder ID**, **Your Application name**, and **Your Path to the OAuth 2.0 Client IDs json file** with your actual Google drive folder ID , Your name for your application and the path for the JSON file.

N> The **FolderId** part is the unique identifier for the folder. For example, if your folder URL is: `https://drive.google.com/drive/folders/abc123xyz456`, then the folder ID is `abc123xyz456`.

**Step 4:** Configure the PDF Viewer component

Set the [serviceUrl](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ServiceUrl) to your web service endpoint (replace the localhost URL with your server URL). Set `documentPath` to the PDF file name to load from Google Drive. Ensure the document name exists in your Drive folder.

```csharp

@{
    ViewBag.Title = "Home Page";
}

<div>
    <div style="height:500px;width:100%;">
        @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/Home/")).DocumentPath("PDF_Succinctly.pdf").Render()
    </div>
</div>

```

N> The **Google.Apis.Drive.v3** NuGet package must be installed in your application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-google-drive)