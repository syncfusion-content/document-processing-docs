---
layout: post
title: Save to Dropbox cloud storage in JavaScript (ES5) DOCX Editor | Syncfusion
description: Learn how to save a document to Dropbox cloud file storage in the Syncfusion JavaScript (ES5) Document Editor of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: Save document to Dropbox cloud file storage
documentation: ug
domainurl: ##DomainURL##
---

# Save document to Dropbox cloud file storage in JavaScript (ES5)

To save a document to Dropbox cloud file storage, you can follow the steps below.

**Step 1:** Create a Dropbox API app

To create a Dropbox API App, you should follow the official [Dropbox .NET tutorial](https://www.dropbox.com/developers/documentation/dotnet#tutorial) provided by Dropbox. The process involves visiting the Dropbox Developer website and using their App Console to set up your API app. This app will allow you to interact with Dropbox programmatically, enabling secure access to files and data.

**Step 2:** Create a Simple [JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) sample in JavaScript (ES5)

Follow the instructions provided in this [link](../getting-started) to create a simple Document Editor sample in JavaScript. This will give you a basic setup of the Document Editor component.

**Step 3:** Modify the `DocumentEditorController.cs` File in the Web Service Project

* Create a web service project in .NET Core 3.0 or above. You can refer to this [link](../web-services-overview) for instructions on how to create a web service project.

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

* Create the `SaveToDropBox()` method to save the downloaded document to Dropbox cloud file storage bucket

```csharp

[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("SaveToDropBox")]
//Post action for uploading the document to Dropbox

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
  "AccessToken": "Your_Dropbox_Access_Token",
  "FolderName": "Your_Folder_Name"
}
```

N> Replace **Your_Dropbox_Access_Token** with your actual Dropbox access token and **Your_Folder_Name** with your folder name.

**Step 4:**  Modify the index file in the Document Editor sample

On the client side, export the document to a blob using [`saveAsBlob`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#saveAsBlob) and send it to the server side for saving in Dropbox cloud file storage.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/save-dropbox-cloud-file-storage/index.html %}
{% endhighlight %}
{% endtabs %}

N> The **Dropbox.Api** NuGet package must be installed in your application to use the previous code example.
