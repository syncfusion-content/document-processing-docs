---
layout: post
title: Save to Google Cloud Storage in ASP.NET MVC DOCX Editor | Syncfusion
description: Learn how to save a document to Google Cloud Storage in the Syncfusion ASP.NET MVC DOCX Editor of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: Save document to Google Cloud Storage
documentation: ug
domainurl: ##DomainURL##
---

# Save Documents to Google Cloud Storage in ASP.NET MVC DOCX Editor

To save a document to Google Cloud Storage, follow these steps:


**Step 1:** Create a Simple DOCX Editor Sample in ASP.NET MVC

Follow the steps in this [link](../getting-started) to create a simple DOCX Editor sample in ASP.NET MVC. This gives you a basic setup of the DOCX Editor component.


**Step 2:** Create the `DocumentEditorController.cs` File in the Web Service Project

* Open the `DocumentEditorController.cs` file in your web service project.

* Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Google.Cloud.Storage.V1;
using Google.Apis.Auth.OAuth2;
```

* Add the following private fields and constructor parameters to the `DocumentEditorController` class. In the constructor, assign the values from the configuration to the corresponding fields.

```csharp
// Storage client used to interact with Google Cloud Storage.
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

  // Create a storage client using the service account credentials
  _storageClient = StorageClient.Create(credentials);

   _configuration = configuration;

   _bucketName = _configuration.GetValue<string>("BucketName");
}
```

* Create the `SaveToGoogleCloud()` method to save the uploaded document to a Google Cloud Storage bucket.

```csharp
[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("SaveToGoogleCloud")]
// Post action for uploading the document to Google Cloud Storage
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
  "BucketName": "Your Bucket name from Google Cloud Storage"
}
```

N> Replace **Your Bucket name from Google Cloud Storage** with the actual name of your Google Cloud Storage bucket

N> Replace **path/to/service-account-key.json** with the actual file path to your service account key JSON file. Make sure to provide the correct path and filename.

**Step 3:** Modify the Index.cshtml File in the DOCX Editor Sample

On the client side, export the document to a blob using `saveAsBlob`, and send it to the server to save it in Google Cloud Storage.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/save-google-cloud-storage/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/save-google-cloud-storage/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

N> The **Google.Cloud.Storage.V1** NuGet package must be installed in your application to use the previous code example.
