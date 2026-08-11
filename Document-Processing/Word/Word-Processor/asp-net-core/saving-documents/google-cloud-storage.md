---
layout: post
title: Save document to Google Cloud Storage in DOCX Editor | Syncfusion
description:  Learn about how to Save document to Google Cloud Storage in ASP.NET Core Document Editor component of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: Save document to Google Cloud Storage
documentation: ug
domainurl: ##DomainURL##
---

# Save document to Google Cloud Storage in Document Editor Component

To save a document to Google Cloud Storage, follow these steps:

**Step 1:** Create a Simple [ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) Sample in ASP.NET Core

Follow the steps in this [link](../../document-editor/getting-started-core) to create a simple Document Editor sample in ASP.NET Core. This will give you a basic setup of the Document Editor component.


**Step 2:** Modify the `DocumentEditorController.cs` File in the Web Service Project

* Open the `DocumentEditorController.cs` file in your web service project.

* Import the required namespaces at the top of the file:

```csharp
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using System.IO;
using Google.Cloud.Storage.V1;
using Google.Apis.Auth.OAuth2;
```

* Add the following private fields and a constructor to the `DocumentEditorController` class. In the constructor, assign the configuration values to the corresponding fields.

```csharp
// Private readonly object _storageClient
private readonly StorageClient _storageClient;

private IWebHostEnvironment _hostingEnvironment;
private IMemoryCache _cache;
private IConfiguration _configuration;

public readonly string _bucketName;

public DocumentEditorController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;

  // The key file is used to authenticate with Google Cloud Storage.
  string keyFilePath = "path/to/service-account-key.json";

  // Load the service account credentials from the key file.
  var credentials = GoogleCredential.FromFile(keyFilePath);

  // Create a storage client with Application Default Credentials
  _storageClient = StorageClient.Create(credentials);

   _configuration = configuration;

   _bucketName = _configuration.GetValue<string>("BucketName");
}
```

* Create the `SaveToGoogleCloud()` method to save the document to the Google Cloud Storage bucket

```csharp

[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("SaveToGoogleCloud")]
//Post action for saving the document to Google Cloud Storage

public void SaveToGoogleCloud(IFormCollection data)
{
   if (data.Files.Count == 0)
    return;

  IFormFile file = data.Files[0];
  string documentName = this.GetValue(data, "documentName");
  // Derive the object name from the original document name (without extension)
  string documentNameWithoutExt = Path.GetFileNameWithoutExtension(documentName);

  string bucketName = _bucketName;

  Stream stream = new MemoryStream();
  file.CopyTo(stream);
  stream.Position = 0;

  // Upload the document to Google Cloud Storage
  _storageClient.UploadObject(bucketName, documentNameWithoutExt + "_downloaded.docx", null, stream);

}
```

* Add the following helper method `GetValue` to the `DocumentEditorController` class to read form values from the posted data

```csharp
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
  "BucketName": "Your Bucket name from Google Cloud Storage"
}
```

N>
1. Replace **Your Bucket name from Google Cloud Storage** with the actual name of your Google Cloud Storage bucket.
2. Replace **path/to/service-account-key.json** with the actual file path to your service account key JSON file. Make sure to provide the correct path and filename.

**Step 3:**  Modify the Index.cshtml File in the Document Editor sample

On the client side, export the document to a blob using `saveAsBlob` and send it to the server for saving in Google Cloud Storage.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/save-google-cloud-storage/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/save-google-cloud-storage/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


N> The **Google.Cloud.Storage.V1** NuGet package must be installed in your web service project to use the code above.
