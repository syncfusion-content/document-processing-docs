---
layout: post
title: Open Documents from Azure Blob in ASP.NET MVC DOCX Editor | Syncfusion
description: Open documents from Azure Blob Storage in ASP.NET MVC DOCX Editor, enabling scalable cloud storage integration and document access.
platform: document-processing
control: Open document from Azure Blob Storage
documentation: ug
domainurl: ##DomainURL##
---

# Open Documents from Azure Blob Storage in ASP.NET MVC DOCX Editor

To load a document from Azure Blob Storage in an [ASP.NET MVC Document Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-mvc-docx-editor) (Document Editor), you can follow the steps below.


**Step 1:** Create a Simple Document Editor Sample in ASP.NET MVC

Start by following the steps provided in this [link](../getting-started) to create a simple Document Editor sample in ASP.NET MVC. This will give you a basic setup of the Document Editor component. 



**Step 2:** Modify the `DocumentEditorController.cs` file in the web service project

* Open the `DocumentEditorController.cs` file in your web service project.

* Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Specialized;
```

* Add the following private fields and constructor parameters to the `DocumentEditorController` class. In the constructor, assign the values from the configuration to the corresponding fields.


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

* Modify the `LoadFromAzure()` method to load the document from Azure Blob Storage.

```csharp

[HttpPost("LoadFromAzure")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/LoadFromAzure")]
//Post action for loading Word documents 
  
public IActionResult LoadFromAzure([FromBody] Dictionary<string, string> jsonObject)
{
  MemoryStream stream = new MemoryStream();

  if (jsonObject == null || !jsonObject.ContainsKey("documentName"))
  {
    return null;
  }
  BlobServiceClient blobServiceClient = new BlobServiceClient(_storageConnectionString);
  string fileName = jsonObject["documentName"];
  BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(_storageContainerName);
  BlockBlobClient blockBlobClient = containerClient.GetBlockBlobClient(fileName);
  blockBlobClient.DownloadTo(stream);
  WordDocument document = WordDocument.Load(stream, FormatType.Docx);
  string json = Newtonsoft.Json.JsonConvert.SerializeObject(document);
  document.Dispose();
  stream.Close();
  return json;
}
```

* Open the `appsettings.json` file in your web service project. Add the following lines below the existing `"AllowedHosts"` configuration.

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

N> Replace **Your Connection string from Azure** with the actual connection string for your Azure Blob Storage account and **Your container name in Azure** with the actual container name 

**Step 3:** Modify the Index.cshtml file in the Document Editor sample

On the client side, the document returned from the web service is opened using `open` method.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/open-azure-blob/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/open-azure-blob/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

N> The **Azure.Storage.Blobs** NuGet package must be installed in your application to use the previous code example.
