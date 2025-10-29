---
layout: post
title: Save PDF files to Azure Blob Storage in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to save PDF files to Azure Blob Storage using the Syncfusion ASP.NET Core PDF Viewer component in standalone and server-backed configurations.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET Core
documentation: ug
---

# Save PDF files to Azure Blob Storage

The ASP.NET Core PDF Viewer component supports saving PDF files to Azure Blob Storage using either the standalone or server-backed configuration. The following steps demonstrate both approaches.

## Using Standalone PDF Viewer

To save a PDF file to Azure Blob Storage, follow these steps:

**Step 1:** Create the Azure Blob Storage account.

Log in to the Azure Portal. Create a new Storage Account with preferred settings. Note access keys during the setup. Within the Storage Account, create a Blob Container following the steps in this [link](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-create?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json&tabs=azure-portal).

**Step 2:** Create an ASP.NET Core PDF Viewer sample

Follow the instructions in this Getting Started [guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started-with-server-backed) to create a simple PDF Viewer sample in ASP.NET Core. This sets up the basic structure of the PDF Viewer application.

**Step 3:** Modify the `Index.cshtml.cs` file in the project

1. Import the required namespaces at the top of the file:

```csharp
using Azure.Storage.Blobs;
```

2. Add the following private fields to the `Index.cshtml.cs` class, and assign the values to the corresponding fields. Then, add the `UploadAsync()` handler to upload the saved PDF to an Azure Blob Storage container.

```csharp
private readonly string ConnectionString = "Your Connection string from Azure";
private readonly string blobContainerName = "Your container name in Azure";

public async Task<IActionResult> OnPostUploadAsync([FromBody] UploadFileRequest request)
{
  if (request == null || string.IsNullOrEmpty(request.FileName) || string.IsNullOrEmpty(request.FileContent))
  {
    return new JsonResult(new { error = "Invalid file or file name." }) { StatusCode = 400 };
  }
  try
  {
    byte[] fileBytes = Convert.FromBase64String(request.FileContent);
    BlobServiceClient blobServiceClient = new BlobServiceClient(ConnectionString);
    BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(blobContainerName);
    BlobClient blobClient = containerClient.GetBlobClient(request.FileName);

    using (var stream = new MemoryStream(fileBytes))
    {
      await blobClient.UploadAsync(stream, true);
    }

    var fileUrl =  blobClient.Uri.ToString();
    return new JsonResult(fileUrl);
  }
  catch (Exception ex)
  {
    return new JsonResult(new { error = ex.Message }) { StatusCode = 500 };
  }
}
```

N> Replace the placeholders with the actual Azure Storage connection string and container name.

3. Configure a custom toolbar item for the download function to save a PDF file in Azure Blob Storage.

```csharp
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" created="loadDocument" toolbarClick="toolbarClick">
    </ejs-pdfviewer>
</div>

<script type="text/javascript">
  window.onload = function () {
    var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
    var toolItem1 = {
      prefixIcon: 'e-icons e-pv-download-document-icon',
      id: 'download_pdf',
      tooltipText: 'Download file',
      align: 'right'
    };
    pdfViewer.toolbarSettings = {
      showTooltip: true,
      toolbarItems: ['OpenOption', 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', toolItem1, 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']
    };
  }
  function toolbarClick(args) {
    var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
    if (args.item && args.item.id === 'download_pdf') {
      saveDocument();
    }
  }
</script>
```

4. Retrieve the PDF Viewer instance and save the current PDF as a Blob. Then, read the Blob as an ArrayBuffer, convert it to a Base64 string using the `arrayBufferToBase64` method, and upload the Base64 string to Azure Blob Storage using the `Index.cshtml.cs` handler.

```csharp
function saveDocument() {
  var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
  var fileName = pdfViewer.fileName;
  pdfViewer.saveAsBlob().then(function (value) {
    var reader = new FileReader();
    reader.onload = async () => {
      if (reader.result) {
        const arrayBuffer = reader.result;
        var base64String = arrayBufferToBase64(arrayBuffer);
        var data = {
          fileName: fileName,
          fileContent: base64String
        };

        fetch('/Index?handler=Upload', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(response => response.json())
          .then(data => {
              if (data.uri) {
                  alert('File uploaded successfully! Blob URI: ' + data.uri);
              } else {
                  alert('Error occurred..' + data.error);
              }
          }).catch(error => {
              alert('Error occurred..' + data.error);
          });
      }
    };
    reader.readAsArrayBuffer(value);
  });
}
```

N> Install the **Azure.Storage.Blobs** NuGet package in the application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-azure-blob-storage/tree/master/Open%20and%20Save%20PDF%20in%20Azure%20Blob%20Storage%20using%20Standalone).

## Using server-backed PDF Viewer

To save a PDF file to Azure Blob Storage, follow these steps:

**Step 1:** Create the Azure Blob Storage account

Log in to the Azure Portal. Create a new Storage Account with preferred settings. Note access keys during the setup. Within the Storage Account, create a Blob Container following the steps in this [link](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-create?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json&tabs=azure-portal).

**Step 2:** Create an ASP.NET Core PDF Viewer sample

Follow the instructions in this Getting Started [guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started-with-server-backed) to create a simple PDF Viewer sample in ASP.NET Core.

**Step 3:** Modify the `Index.cshtml.cs` file in the project

1. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Specialized;
```

2. Add the following private fields and constructor parameters to the `Index.cshtml.cs` class. In the constructor, assign the values from the configuration to the corresponding fields.

```csharp
private readonly string _storageConnectionString;
private readonly string _storageContainerName;
private readonly ILogger<IndexModel> _logger;

public IndexModel(Microsoft.AspNetCore.Hosting.IHostingEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration, ILogger<IndexModel> logger)
{
    _hostingEnvironment = hostingEnvironment;
    _cache = cache;
    _storageConnectionString = configuration.GetValue<string>("connectionString");
    _storageContainerName = configuration.GetValue<string>("containerName");
    _logger = logger;
}
```

3. Modify the `OnPostDownload()` method to save the downloaded PDF files to the Azure Blob Storage container.

```csharp
public IActionResult OnPostDownload([FromBody] jsonObjects responseData)
{
    PdfRenderer pdfviewer = new PdfRenderer(_cache);
    var jsonObject = JsonConverterstring(responseData);
    string documentBase = pdfviewer.GetDocumentAsBase64(jsonObject);
    string document = jsonObject["documentId"];

    // Create a BlobServiceClient object
    BlobServiceClient blobServiceClient = new BlobServiceClient(_storageConnectionString);

    // Get a reference to the blob container
    BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(_storageContainerName);

    string result = Path.GetFileNameWithoutExtension(document);
    // Get a reference to the blob
    BlobClient blobClient = containerClient.GetBlobClient(result + "_download.pdf");

    // Convert the document base64 string to bytes
    byte[] bytes = Convert.FromBase64String(documentBase.Split(",")[1]);

    // Upload the document to Azure Blob Storage
    using (MemoryStream stream = new MemoryStream(bytes))
    {
        blobClient.Upload(stream, true);
    }
    return Content(documentBase);
}
```

4. Open the `appsettings.json` file in the project and add the following lines below the existing `"AllowedHosts"` configuration.

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "connectionString": "*Your Connection string from Azure*",
  "containerName": "*Your container name in Azure*"
}
```

N> Replace the placeholders with the actual Azure Storage connection string and container name.

**Step 3:** Set the PDF Viewer properties in the ASP.NET Core PDF Viewer component

Set the `documentPath` property of the PDF Viewer component to the desired PDF file name that you wish to load from Azure Blob Storage. Ensure that the document exists in the target container.

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

N> Install the **Azure.Storage.Blobs** NuGet package in the application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-azure-blob-storage/tree/master/Open%20and%20Save%20PDF%20in%20Azure%20Blob%20Storage%20using%20Server-Backend).
