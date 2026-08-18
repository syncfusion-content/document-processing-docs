---
layout: post
title: Save to Dropbox Cloud Storage in ASP.NET MVC DOCX Editor | Syncfusion
description: Save documents to Dropbox cloud storage from ASP.NET MVC DOCX Editor, enabling cloud-based file storage and document management.
platform: document-processing
control: Save document to Dropbox cloud file storage
documentation: ug
domainurl: ##DomainURL##
---

# Save Documents to Dropbox Cloud Storage in ASP.NET MVC DOCX Editor

To save a document to Dropbox cloud file storage, follow these steps:

**Step 1:** Create a Dropbox API

Follow the official Dropbox documentation to create a Dropbox API app: [link](https://www.dropbox.com/developers/documentation/dotnet#tutorial). The process involves visiting the Dropbox Developer website and using the App Console to set up your API app. This app allows you to interact with Dropbox programmatically and access files securely.


**Step 2:** Create a Simple Document Editor Sample in ASP.NET MVC

Follow the steps in this [link](../getting-started) to create a simple Document Editor sample in ASP.NET MVC. This gives you a basic setup of the Document Editor component.


**Step 3:** Modify the `DocumentEditorController.cs` File in the Web Service Project

* Open the `DocumentEditorController.cs` file in your web service project.

* Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Dropbox.Api;
using Dropbox.Api.Files;
```

* Add the following private fields and constructor parameters to the `DocumentEditorController` class. In the constructor, assign the values from the configuration to the corresponding fields.

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

* Create the `SaveToDropBox()` method to save the uploaded document to Dropbox cloud file storage.

```csharp

[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("SaveToDropBox")]
// Post action for uploading the document to Dropbox

public void SaveToDropBox(IFormCollection data)
{
  if (data.Files.Count == 0)
    return;

  IFormFile file = data.Files[0];
  string documentName = this.GetValue(data, "documentName");
  string result = Path.GetFileNameWithoutExtension(documentName);
  string fileName = result + "_downloaded.docx";

  using (var dropBox = new DropboxClient(_accessToken))
  {
      Stream stream = new MemoryStream();
      file.CopyTo(stream);

      // Upload the document to Dropbox
      var uploadedFile = await dropBox.Files.UploadAsync(
        _folderName + "/" + fileName,
        WriteMode.Overwrite.Instance,
        body: stream
      );
  }
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

* Open the `appsettings.json` file in your web service project, and add the following lines below the existing `"AllowedHosts"` configuration.

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

**Step 4:** Modify the Index.cshtml File in the Document Editor Sample

On the client side, export the document to a blob using `saveAsBlob`, and send it to the server to save it in Dropbox cloud file storage.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/save-dropbox-cloud-file-storage/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/save-dropbox-cloud-file-storage/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

N> The **Dropbox.Api** NuGet package must be installed in your application to use the previous code example.
