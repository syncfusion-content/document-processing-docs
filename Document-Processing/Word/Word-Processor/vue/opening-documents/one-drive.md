---
layout: post
title: Open document from One Drive in Vue Document editor control | Syncfusion
description: Learn about how to Open document from One Drive in Vue Document editor control of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: Open document from One Drive
documentation: ug
domainurl: ##DomainURL##
---

# Open document from One Drive in Vue Document editor

To load a document from One Drive in a Document editor, you can follow the steps below

**Step 1** Create the Microsoft graph API.

Need to create a Microsoft Graph API application and obtain the necessary credentials, namely the application ID and tenant ID. Follow the steps provided in the [link](https://learn.microsoft.com/en-us/training/modules/msgraph-access-file-data/3-exercise-access-files-onedrive) to create the application and obtain the required IDs. 

**Step 2:** Create a Simple Document Editor Sample in Vue

Start by following the steps provided in this [link](../getting-started) to create a simple Document Editor sample in vue. This will give you a basic setup of the Document Editor component.

**Step 3:** Modify the `DocumentEditorController.cs` File in the Web Service Project

* Create a web service project in .NET Core 3.0 or above. You can refer to this [link](../web-services-overview)for instructions on how to create a web service project.

* Open the `DocumentEditorController.cs` file in your web service project.

* Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Microsoft.Graph;
using Microsoft.Identity.Client;
using Helpers;
```

* Add the following private fields and constructor parameters to the `DocumentEditorController` class, In the constructor, assign the values from the configuration to the corresponding fields

```csharp
private IConfiguration _configuration;
public readonly string folderName;
public readonly string applicationId;
public readonly string tenantId;

public DocumentEditorController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;
  _configuration = configuration;
  folderName = _configuration.GetValue<string>("FolderName");
  tenantId = _configuration.GetValue<string>("TenantId");
  applicationId = _configuration.GetValue<string>("ApplicationId");
}
```

* Create the `LoadFromOneDrive()` method to load the document from One Drive.

```csharp
[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("LoadFromBoxCloud")]
//Post action for Loading the documents

public async Task<string> LoadFromOneDrive([FromBody] Dictionary<string, string> jsonObject)
{
  MemoryStream stream = new MemoryStream();

  var config = LoadAppSettings();
  var client = GetAuthenticatedGraphClient(config);

  var request = client.Me.Drive.Root.Children.Request();
  string folderIdToSearch = string.Empty;
  var results = await request.GetAsync();

  var folder = results.FirstOrDefault(f => f.Name == folderName && f.Folder != null);
  if (folder != null)
  {
    // Save the matching folderId
    folderIdToSearch = folder.Id;
  }

  var folderRequest = client.Me.Drive.Items[folderIdToSearch].Children.Request();
  var folderContents = await folderRequest.GetAsync();

  string fileIdToDownload = string.Empty;
  var file = folderContents.FirstOrDefault(f => f.File != null && f.Name == objectName);
  if (file != null)
  {
    // Save the matching fileId
    fileIdToDownload = file.Id;
  }

  string fileIds = fileIdToDownload;
  var fileRequest = client.Me.Drive.Items[fileIdToDownload].Content.Request();

  using (var streamResponse = await fileRequest.GetAsync())
  {
    if (streamResponse != null)
    {
      streamResponse.Seek(0, SeekOrigin.Begin);
      await streamResponse.CopyToAsync(stream);
    }
  }
  WordDocument document = WordDocument.Load(stream, FormatType.Docx);
  string json = Newtonsoft.Json.JsonConvert.SerializeObject(document);
  document.Dispose();
  stream.Close();
  return json;
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
  "TenantId": "Your_Tenant_ID",
  "applApplicationIdicationId": "Your_Application_ID",
  "FolderName": "Your_Folder_Name_To_Access_The_Files_In_Onedrive"
}

```

N> Replace **Your_Tenant_ID**, **Your_Application_ID**, and **Your_Folder_Name_To_Access_The_Files_In_Onedrive** with your actual tenant ID, application ID, and folder name.

**Step 4:**  Modify the index File in the Document Editor sample

In the client-side, the document is returned from the web service is opening using [`open`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#open) method.

```typescript
<template>
    <button v-on:click='load' >Open Document From One Drive</button>
    <ejs-documenteditorcontainer ref="container" :serviceUrl='serviceUrl' :height='height' :enableToolbar='true'> </ejs-documenteditorcontainer>
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
            load: function() {
                  fetch(
  'http://localhost:62870/api/documenteditor/LoadFromOneDrive',
  {
      method: 'Post',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      body: JSON.stringify({ documentName: 'Getting Started.docx' })
  }
)
  .then(response => {
      if (response.status === 200 || response.status === 304) {
          return response.json(); // Return the Promise
      } else {
          throw new Error('Error loading data');
      }
  })
  .then(json => {
    this.$refs.container.ej2Instances.documentEditor.open(JSON.stringify(json));
  })
  .catch(error => {
      console.error(error);
  });
            }
      }
    }
</script>

```

N> The following NuGet packages are required to use the previous code example
* **Microsoft.Identity.Client**
* **Microsoft.Graph**
* **Microsoft.Extensions.Configuration**
* **Microsoft.Extensions.Configuration.FileExtensions**
* **Microsoft.Extensions.Configuration.Json**

You can install these packages using the NuGet Package Manager in Visual Studio or Visual Studio Code.