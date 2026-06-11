---
layout: post
title: Open PDF from Azure Blob Storage in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to load PDFs from Azure Blob Storage in the Syncfusion ASP.NET MVC PDF Viewer component using standalone and server-backed approaches.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Open PDF from Azure Blob Storage

The ASP.NET MVC PDF Viewer component supports loading PDF files from Azure Blob Storage using either the standalone or the server-backed PDF Viewer. The following steps demonstrate both approaches.

## Using the standalone PDF Viewer

Follow these steps to load a PDF from Azure Blob Storage in the standalone PDF Viewer.

**Step 1:** Create the Azure Blob Storage account

Log in to the Azure Portal. Create a new Storage Account with preferred settings. Note access keys during the setup. Within the Storage Account, create a Blob Container following the steps in this [link](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-create?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json&tabs=azure-portal).

**Step 2:** Create PDF Viewer Sample in ASP.NET MVC

Follow instructions provided in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer Getting Started [Guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started-with-server-backed) to create a simple PDF Viewer sample in ASP.NET MVC.

**Step 3:** Modify the `Views/Home/index.cshtml` File in the Project

1. Add the following properties to the `Views/Home/index.cshtml`, and assign the values from the configuration to the corresponding properties

N> Replace **Your account name in Azure** with the actual account name for your Azure Blob Storage account and **Your container name in Azure** with the actual container name and **Your Blob name in Azure** with the actual container name.

```csharp
var accountName = "*Your account name in Azure*";
var containerName = "*Your container name in Azure*";
var blobName = "*Your Blob name in Azure*";
```

2. Constructs the URL to the PDF in Azure Blob Storage. Calls fetchAndConvertToBase64 to fetch the PDF and convert it to a base64 string. Then Loads the base64 string into the PDF Viewer.

```csharp
function loadDocument() {
  var url = 'https://' + accountName + '.blob.core.windows.net/' + containerName + '/' + blobName;
  fetchAndConvertToBase64(url).then(function(base64String) {
    if (base64String) {
      setTimeout(function() {
        viewer.load("data:application/pdf;base64," + base64String);
      }, 2000);
    } else {
      console.error('Failed to fetch and convert file to base64.');
    }
  }).catch(function(error) {
    console.error('Error:', error);
  });
}
```

3. Then it retrieves the PDF file from the given URL and converts the fetched Blob to a base64 string using blobToBase64.

```csharp
function fetchAndConvertToBase64(url) {
  return new Promise(function(resolve, reject) {
    fetch(url).then(function(response) {
      if (!response.ok) {
        throw new Error('HTTP error! Status: ' + response.status);
      }
      return response.blob();
    }).then(function(blob) {
      blobToBase64(blob).then(function(base64String) {
        resolve(base64String);
      });
    }).catch(function(error) {
      console.error('Error fetching file:', error);
      reject(null);
    });
  });
}
```

4. Uses FileReader to convert a Blob to a base64 string. Resolves the promise with the base64 string or rejects it in case of an error.

```csharp
function blobToBase64(blob) {
  return new Promise(function(resolve, reject) {
    var reader = new FileReader();
    reader.onload = function() {
      var base64String = reader.result ? reader.result.toString().split(',')[1] : '';
      resolve(base64String);
    };
    reader.onerror = function(error) {
      reject(error);
    };
    reader.readAsDataURL(blob);
  });
}
```

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-azure-blob-storage/tree/master/Open%20and%20Save%20PDF%20in%20Azure%20Blob%20Storage%20using%20Standalone).

## Using the server-backed PDF Viewer

Follow these steps to load a PDF from Azure Blob Storage using the server-backed PDF Viewer.

**Step 1:** Create the Azure Blob Storage account

Log in to the Azure Portal. Create a new Storage Account with preferred settings. Note access keys during the setup. Within the Storage Account, create a Blob Container following the steps in this [link](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-create?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json&tabs=azure-portal).

**Step 2:** Create PDF Viewer Sample in ASP.NET MVC

Follow instructions provided in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer Getting Started [Guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started-with-server-backed) to create a simple PDF Viewer sample in ASP.NET MVC.

**Step 3:** Modify the `HomeController.cs` File in the Project

1. Import the required namespaces at the top of the file.

```csharp
using System.IO;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Specialized;
```

2. Modify the `Load()` method to load the PDF files from Azure Blob Storage.

```csharp

private readonly string _connectionString = "Your Connection string from Azure";
private readonly string _containerName = "Your container name in Azure";

public ActionResult Load(jsonObjects jsonObject)
{
    PdfRenderer pdfviewer = new PdfRenderer();
    MemoryStream stream = new MemoryStream();
    var jsonData = JsonConverter(jsonObject);
    object jsonResult = new object();
    if (jsonObject != null && jsonData.ContainsKey("document"))
    {
        if (bool.Parse(jsonData["isFileName"]))
        {

            // Create a BlobServiceClient object by passing the connection string.
            BlobServiceClient blobServiceClient = new BlobServiceClient(_connectionString);

            // Get a reference to the container
            BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(_containerName);

            string fileName = jsonData["document"];
            // Get a reference to the block blob
            BlockBlobClient blockBlobClient = containerClient.GetBlockBlobClient(fileName);

            blockBlobClient.DownloadTo(stream);
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

N> Replace **Your Connection string from Azure** with the actual connection string for your Azure Blob Storage account and **Your container name in Azure** with the actual container name

**Step 4:** Configure the PDF Viewer component

Set the `documentPath` property of the PDF Viewer to the PDF file name to load from Azure Blob Storage. Ensure the document name exists in your Azure container.

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

N> The **Azure.Storage.Blobs** NuGet package must be installed in your application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-azure-blob-storage/tree/master/Open%20and%20Save%20PDF%20in%20Azure%20Blob%20Storage%20using%20Server-Backend).