---
layout: post
title: Save document to Google Cloud Storage in JavaScript (ES5) Document editor control | Syncfusion
description:  Learn about how to Save document to Google Cloud Storage in JavaScript (ES5) Document editor control of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: Save document to Google Cloud Storage
documentation: ug
domainurl: ##DomainURL##
---

# Save document to Google Cloud Storage

To save a document to Google Cloud Storage, you can follow the steps below

**Step 1:** Create a Simple Document Editor sample in JavaScript

Follow the instructions provided in this [link](../getting-started) to create a simple Document Editor sample in Javascript. This will give you a basic setup of the Document Editor component.

**Step 2:** Create the `DocumentEditorController.cs` File in the Web Service Project

* Create a web service project in .NET Core 3.0 or above. You can refer to this [link](../web-services-overview) for instructions on how to create a web service project.


* Open the `DocumentEditorController.cs` file in your web service project.

* Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Google.Cloud.Storage.V1;
using Google.Apis.Auth.OAuth2;
```

* Add the following private fields and constructor parameters to the `DocumentEditorController` class, In the constructor, assign the values from the configuration to the corresponding fields

```csharp
// Private readonly object _storageClient
private readonly StorageClient _storageClient;

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

* Create the `SaveToGoogleCloud()` method to save the downloaded document to Google Cloud Storage bucket

```csharp
[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("SaveToGoogleCloud")]
//Post action for downloading the document
public void SaveToGoogleCloud(IFormCollection data)
{
   if (data.Files.Count == 0)
    return;

  IFormFile file = data.Files[0];
  string documentName = this.GetValue(data, "documentName");
  string result = Path.GetFileNameWithoutExtension(documentName);

  string bucketName = _bucketName;

  Stream stream = new MemoryStream();
  file.CopyTo(stream);

  // Upload the document to Google Cloud Storage
  _storageClient.UploadObject(bucketName, result + "_downloaded.docx", null, stream);

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
  "BucketName": "Your Bucket name from Google Cloud Storage"
}
```

N> Replace **Your Bucket name from Google Cloud Storage** with the actual name of your Google Cloud Storage bucket

N> Replace **path/to/service-account-key.json** with the actual file path to your service account key JSON file. Make sure to provide the correct path and filename.

**Step 4:**  Modify the index File in the Document Editor sample

In the client-side, to export the document into blob the document using [`saveAsBlob`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#saveAsBlob) and sent to server-side for saving in Google Cloud Storage.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/document-editor/save-google-cloud-storage/index.html %}
{% endhighlight %}
{% endtabs %}


N> The **Google.Cloud.Storage.V1** NuGet package must be installed in your application to use the previous code example.
