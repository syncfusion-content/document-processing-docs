---
layout: post
title: Save Documents to Azure Blob in ASP.NET Core DOCX Editor | Syncfusion
description: Save documents to Azure Blob Storage from ASP.NET Core DOCX Editor, enabling scalable cloud storage and streamlined document management.
platform: document-processing
control: Save document to Azure Blob Storage
documentation: ug
domainurl: ##DomainURL##
---

# Save Documents to Azure Blob Storage in ASP.NET Core DOCX Editor

To save a document to Azure Blob Storage, follow these steps:


**Step 1:** Create a Simple [ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) Sample in ASP.NET Core

Follow the steps in this [link](../../document-editor/getting-started-core) to create a simple DOCX Editor sample in ASP.NET Core. This will give you a basic setup of the DOCX Editor component.


**Step 2:** Modify the `DocumentEditorController.cs` File in the Web Service Project

* Create a web service project in .NET Core 3.0 or above. You can refer to this [link](../../document-editor/web-services-overview) for instructions on how to create a web service project.

* Open the `DocumentEditorController.cs` file in your web service project.

* Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Specialized;
```

* Add the following private fields and a constructor to the `DocumentEditorController` class. In the constructor, assign the configuration values to the corresponding fields.

```csharp
private readonly string _storageConnectionString;
private readonly string _storageContainerName;
private readonly ILogger<DocumentEditorController> _logger;

public DocumentEditorController(IConfiguration configuration, ILogger<DocumentEditorController> logger)
{
  _storageConnectionString = configuration.GetValue<string>("connectionString");
  _storageContainerName = configuration.GetValue<string>("containerName");
  _logger = logger;
}
```

* Create the `SaveToAzure()` method to save the document to the Azure Blob Storage container

```csharp

[HttpPost("SaveToAzure")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/SaveToAzure")]
//Post action for downloading the documents

public void SaveToAzure(IFormCollection data)
{
  if (data.Files.Count == 0)
    return;

  BlobServiceClient blobServiceClient = new BlobServiceClient(_storageConnectionString);
  BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(_storageContainerName);

  IFormFile file = data.Files[0];
  string documentName = this.GetValue(data, "documentName");
  // Derive the blob name from the original document name (without extension)
  string documentNameWithoutExt = Path.GetFileNameWithoutExtension(documentName);

  // Get a reference to the blob
  BlobClient blobClient = containerClient.GetBlobClient(documentNameWithoutExt + "_downloaded.docx");

  Stream stream = new MemoryStream();
  file.CopyTo(stream);

  // Upload the document to Azure Blob Storage
  blobClient.Upload(stream, true);
}
```

* Open the `appsettings.json` file in your web service project. Add the following lines below the existing `"AllowedHosts"` configuration

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

N> Replace **Your Connection string from Azure** with the actual connection string for your Azure Blob Storage account, and **Your container name in Azure** with the actual container name.

**Step 3:**  Modify the Index.cshtml File in the DOCX Editor sample

On the client side, export the document to a blob using `saveAsBlob` and send it to the server for saving in the Azure Blob Storage container.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/save-azure-blob/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/save-azure-blob/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


N> The **Azure.Storage.Blobs** NuGet package must be installed in your application to use the code above.
