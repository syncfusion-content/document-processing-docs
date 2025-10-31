---
layout: post
title: Open PDF from Box cloud storage in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to load PDFs from Box cloud storage in the Syncfusion ASP.NET MVC PDF Viewer component using a server-backed approach.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Open PDF from Box cloud storage

Follow these steps to load a PDF from Box cloud storage using the server-backed PDF Viewer.

**Step 1:** Set up a Box developer account and create a Box application

To access Box storage programmatically, you'll need a developer account with Box. Go to the [Box Developer Console](https://developer.box.com/), sign in or create a new account, and then create a new Box application. This application will provide you with the necessary credentials Client ID and Client Secret to authenticate and access Box APIs. Before accessing files, you need to authenticate your application to access your Box account. Box API supports `OAuth 2.0 authentication` for this purpose.

**Step 2:** Create a PDF Viewer sample in ASP.NET MVC

Follow instructions provided in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer Getting Started [Guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started-with-server-backed) to create a simple PDF Viewer sample in ASP.NET MVC.

**Step 3:** Modify the `HomeController.cs` file in the project

1. Import the required namespaces at the top of the file:

```csharp
using Box.V2;
using Box.V2.Auth;
using Box.V2.Config;
using Box.V2.Models;
```

2. Modify the `Load()` method to load the PDF files from Box cloud file storage.

```csharp

 private readonly string _clientId = "Your_Box_Storage_ClientID";
 private readonly string _clientSecret = "Your_Box_Storage_ClientSecret";
 private readonly string _accessToken = "Your_Box_Storage_Access_Token";
 private readonly string _folderId = "Your_Folder_ID";

 [System.Web.Mvc.HttpPost]

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
             // Initialize the Box API client with your authentication credentials
             var auth = new OAuthSession(_accessToken, "YOUR_REFRESH_TOKEN", 3600, "bearer");
             var config = new BoxConfigBuilder(_clientId, _clientSecret, new Uri("http://boxsdk")).Build();
             var client = new BoxClient(config, auth);

             // Download the file from Box storage
             var items = await client.FoldersManager.GetFolderItemsAsync(_folderId, 1000, autoPaginate: true);
             var files = items.Entries.Where(i => i.Type == "file");

             // Filter the files based on the objectName
             var matchingFile = files.FirstOrDefault(file => file.Name == objectName);

             // Fetch the file from Box storage by its name
             var fileStream = await client.FilesManager.DownloadAsync(matchingFile.Id);
             stream = new MemoryStream();
             await fileStream.CopyToAsync(stream);

             // Reset the position to the beginning of the stream
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

N> replace **Your_Box_Storage_Access_Token** with your actual box access token, and **Your_Folder_ID** with the ID of the folder in your box storage where you want to perform specific operations. Remember to use your valid box API credentials, as **Your_Box_Storage_ClientID** and **Your_Box_Storage_ClientSecret"** are placeholders for your application's API key and secret.

**Step 4:** Configure the PDF Viewer component

Set the [serviceUrl](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ServiceUrl) to your web service endpoint (replace the localhost URL with your server URL). Set `documentPath` to the PDF file name to load from Box cloud storage. Ensure the document name exists in your Box folder.

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
N> The **Box.V2.Core** NuGet package must be installed in your application to use the previous code example.

N> Replace `PDF_Succinctly.pdf` with the actual document name that you want to load from Box cloud file storage. Make sure to pass the document name from the box folder to the `documentPath` property of the PDF viewer component

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-box-cloud-file-storage)