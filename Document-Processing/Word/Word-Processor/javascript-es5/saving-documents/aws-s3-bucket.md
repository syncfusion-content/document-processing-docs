---
layout: post
title: Save document to AWS S3 in JavaScript (ES5) Document editor control | Syncfusion
description:  Learn about how to Save document to AWS S3 in JavaScript (ES5) Document editor of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: Save document to AWS S3
documentation: ug
domainurl: ##DomainURL##
---

# Save document to AWS S3

To save a document to AWS S3, you can follow the steps below

**Step 1:** Create a Simple Document Editor sample in JavaScript

Follow the instructions provided in this [link](../getting-started) to create a simple Document Editor sample in Javascript. This will give you a basic setup of the Document Editor component.

**Step 2:** Modify the `DocumentEditorController.cs` File in the Web Service Project

* Create a web service project in .NET Core 3.0 or above. You can refer to this [link](../web-services-overview) for instructions on how to create a web service project.

* Open the `DocumentEditorController.cs` file in your web service project.

* Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Amazon;
using Amazon.S3;
using Amazon.S3.Model;
```

* Add the following private fields and constructor parameters to the `DocumentEditorController` class, In the constructor, assign the values from the configuration to the corresponding fields

```csharp
private IConfiguration _configuration;
public readonly string _accessKey;
public readonly string _secretKey;
public readonly string _bucketName;

public DocumentEditorController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;
  _configuration = configuration;
  _accessKey = _configuration.GetValue<string>("AccessKey");
  _secretKey = _configuration.GetValue<string>("SecretKey");
  _bucketName = _configuration.GetValue<string>("BucketName");
}
```

* Create the `SaveToS3()` method to save the document to AWS S3 bucket

```csharp

[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("SaveToS3")]
//Post action for save the document to AWS S3

public void SaveToS3(IFormCollection data)
{
  if (data.Files.Count == 0)
    return;
  RegionEndpoint bucketRegion = RegionEndpoint.USEast1;
  // Configure the AWS SDK with your access credentials and other settings
  var s3Client = new AmazonS3Client(_accessKey, _secretKey, bucketRegion);
  string bucketName = _bucketName;
  IFormFile file = data.Files[0];
  string documentName = this.GetValue(data, "documentName");
  string result = Path.GetFileNameWithoutExtension(documentName);
  Stream stream = new MemoryStream();
  file.CopyTo(stream);
  var request = new PutObjectRequest
  {
    BucketName = bucketName,
    Key = result + "_downloaded.docx",
    InputStream = stream,
  };
  // Upload the document to AWS S3
  var response = s3Client.PutObjectAsync(request).Result;
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
  "AccessKey": "Your Access Key from AWS S3",
  "SecretKey": "Your Secret Key from AWS S3",
  "BucketName": "Your Bucket name from AWS S3"
}
```

N> Replace **Your Access Key from AWS S3**, **Your Secret Key from AWS S3**, and **Your Bucket name from AWS S3** with your actual AWS access key, secret key and bucket name

**Step 3:**  Modify the index File in the Document Editor sample

In the client-side, to export the document into blob the document using [`saveAsBlob`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#saveAsBlob) and sent to server-side for saving in AWS S3 Bucket.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/save-aws-s3/index.html %}
{% endhighlight %}
{% endtabs %}


N> The **AWSSDK.S3** NuGet package must be installed in your application to use the previous code example.
