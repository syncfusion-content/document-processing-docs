---
layout: post
title: Open document from Dropbox cloud file in JavaScript (ES6) | Syncfusion
description: Learn about how to Open document from Dropbox cloud file storage in JavaScript (ES6) Document editor control of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: Open document from Dropbox cloud file storage
documentation: ug
domainurl: ##DomainURL##
---

# Open document from Dropbox cloud file storage in JavaScript (ES6) Document editor

To load a document from Dropbox cloud file storage in a Document editor, you can follow the steps below

**Step 1:** Create a Dropbox API

To create a Dropbox API App, you should follow the official documentation provided by Dropbox [link](https://www.dropbox.com/developers/documentation/dotnet#tutorial). The process involves visiting the Dropbox Developer website and using their App Console to set up your API app. This app will allow you to interact with Dropbox programmatically, enabling secure access to files and data.

 

**Step 2:** Create a Simple Document Editor Sample in TypeScript

Start by following the steps provided in this [link](../getting-started) to create a simple Document Editor sample in Typescript. This will give you a basic setup of the Document Editor component. 

**Step 3:** Modify the `DocumentEditorController.cs` File in the Web Service Project

 

* Create a web service project in .NET Core 3.0 or above. You can refer to this [link](../web-services-overview) for instructions on how to create a web service project.

* Open the `DocumentEditorController.cs` file in your web service project.

* Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Dropbox.Api;
using Dropbox.Api.Files;
```

* Add the following private fields and constructor parameters to the `DocumentEditorController` class, In the constructor, assign the values from the configuration to the corresponding fields

```csharp
private IConfiguration _configuration;
public readonly string _accessToken;
public readonly string _folderName;

public DocumentEditorController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;
   _configuration = configuration;
  _accessToken = _configuration.GetValue<string>("AccessToken");
  _folderName = _configuration.GetValue<string>("FolderName");
}
```

* Create the `LoadFromDropBox()` method to load the document from Dropbox cloud file storage.

```csharp

[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("LoadFromBoxCloud")]
//Post action for Loading the documents

public async Task<string> LoadFromDropBox([FromBody] Dictionary<string, string> jsonObject)
{
    if (jsonObject == null && !jsonObject.ContainsKey("documentName"))
    {
      return null
    }
    MemoryStream stream = new MemoryStream();
        
    using (var dropBox = new DropboxClient(_accessToken))
    {
        using (var response = await dropBox.Files.DownloadAsync(_folderName + "/" + fileName))
        {
          var byteArray = await response.GetContentAsByteArrayAsync();
          stream = new MemoryStream(byteArray);
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
  "AccessToken": "Your_Dropbox_Access_Token",
  "FolderName": "Your_Folder_Name"
}
```

N> Replace **Your_Dropbox_Access_Token** with your actual Dropbox access token and **Your_Folder_Name** with your folder name.

**Step 4:**  Modify the index File in the Document Editor sample

In the client-side, the document is returned from the web service is opening using [`open`](https://ej2.syncfusion.com/documentation/api/document-editor#open) method.

 

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es6/open-dropbox-cloud-file-storage/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es6/open-dropbox-cloud-file-storage/index.html %}
{% endhighlight %}
{% endtabs %}

N> The **Dropbox.Api** NuGet package must be installed in your application to use the previous code example.
