---
layout: post
title: Save document to Azure Blob Storage in Vue Document editor control | Syncfusion
description:  Learn about how to Save document to Azure Blob Storage in Vue Document editor control of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: Save document to Azure Blob Storage
documentation: ug
domainurl: ##DomainURL##
---

# Save document to Azure Blob Storage

To save a document to Azure Blob Storage, you can follow the steps below

**Step 1:** Create a Simple Document Editor sample in Vue

Follow the instructions provided in this [link](../getting-started) to create a simple Document Editor sample in vue. This will give you a basic setup of the Document Editor component.

**Step 2:** Modify the `DocumentEditorController.cs` File in the Web Service Project

* Create a web service project in .NET Core 3.0 or above. You can refer to this [link](../web-services-overview) for instructions on how to create a web service project.

* Open the `DocumentEditorController.cs` file in your web service project.

* Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Specialized;
```

* Add the following private fields and constructor parameters to the `DocumentEditorController` class, In the constructor, assign the values from the configuration to the corresponding fields

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

* Create then 'SaveToAzure' method to save the downloaded documents to Azure Blob Storage container

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
  string result = Path.GetFileNameWithoutExtension(documentName);

  // Get a reference to the blob
  BlobClient blobClient = containerClient.GetBlobClient(result + "_downloaded.docx");

  Stream stream = new MemoryStream();
  file.CopyTo(stream);

  // Upload the document to Azure Blob Storage
  blobClient.Upload(stream, true);
}

private string GetValue(IFormCollection data, string key)
{
    if (data.ContainsKey(key))
    {
        string[] values = data[key];
        if (values.Length > 0)
        {
            return values[0];
        }
    }
    return "";
}

```

* Open the `appsettings.json` file in your web service project, Add the following lines below the existing `"AllowedHosts"` configuration

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

**Step 3:**  Modify the index File in the Document Editor sample

In the client-side, to export the document into blob the document using [`saveAsBlob`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#saveasblob) and sent to server-side for saving in Azure Blob Storage container.

```typescript
<template>
    <button v-on:click='save' >Save to Azure Blob Storage</button>
    <ejs-documenteditorcontainer ref="container" :serviceUrl='serviceUrl' :height='height' :enableToolbar='true' :created= "onCreate()"> </ejs-documenteditorcontainer>
</template>

<script>
    import Vue from 'vue';
    import { DocumentEditorContainerPlugin, DocumentEditorContainerComponent,Toolbar } from '@syncfusion/ej2-vue-documenteditor';

    Vue.use(DocumentEditorContainerPlugin);
    export default {
      data(){
        return {
            serviceUrl:'http://localhost:62870/api/documenteditor/',
            height: '590px'
        }
      },
      provide: {
        DocumentEditorContainer: [Toolbar]
      },
      methods: {
            save: function() {
              this.$refs.container.ej2Instances.documentEditor.saveAsBlob('Docx').then((blob: Blob) => {
              let exportedDocument = blob;
              //Now, save the document where ever you want.
              let formData: FormData = new FormData();
              formData.append('documentName', this.$refs.container.ej2Instances.documentEditor.documentName);
              formData.append('data', exportedDocument);
              /* tslint:disable */
              let req = new XMLHttpRequest();
              // Replace your running Url here
              req.open(
                  'POST',
                  'http://localhost:62870/api/documenteditor/SaveToAzure',
                  true
              );
              req.onreadystatechange = () => {
                  if (req.readyState === 4) {
                      if (req.status === 200 || req.status === 304) {
                          console.log('Saved sucessfully');
                      }
                  }
              };
              req.send(formData);
            });
      }
    }
  }
</script>

```

N> The **Azure.Storage.Blobs** NuGet package must be installed in your application to use the previous code example.