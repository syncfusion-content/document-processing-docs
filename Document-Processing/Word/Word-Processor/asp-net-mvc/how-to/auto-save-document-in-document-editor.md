---
layout: post
title: How to Auto Save to AWS S3 in ASP.NET MVC DOCX Editor | Syncfusion
description: Automatically save edited documents to AWS S3 at regular intervals in Syncfusion® ASP.NET MVC DOCX Editor for reliable cloud-based storage.
platform: document-processing
control: Auto Save Document In Document Editor
documentation: ug
---


# How to Auto Save Document in ASP.NET MVC DOCX Editor

This article explains how to auto save the document in AWS S3. You can automatically save the edited content in regular intervals of time. It helps to reduce the risk of data loss by saving an open document automatically at customized intervals.

* In the client-side, using content change event, the edited content can be automatically saved in regular intervals of time. Based on `contentChanged` boolean, the document is sent as DOCX format to server-side using `saveAsBlob` method at a customized polling interval.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/auto-save/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Auto-save.cs" %}
{% endhighlight %}
{% endtabs %}



* Configure the access key and secret key in `web.config` file.
* Register the profile in `startup.cs`.

In `web.config`, add key like below format:

```c#
<appSettings>
    <add key="AWSProfileName" value="sync_development" />
    <add key="AWSAccessKey" value="" />
    <add key="AWSSecretKey" value="" />
</appSettings>
```

In `startup.cs`, register profile in below format:

```c#
Amazon.Util.ProfileManager.RegisterProfile("sync_development","", "");
```

* In server-side, Receives the stream content from client-side and process it to save the document in aws s3. Add Web API in controller file like below to save the document in aws s3.

```c#
[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("SaveToS3")]
public string SaveToS3()
{
    IFormFile file = HttpContext.Request.Form.Files[0];
    Stream stream = new MemoryStream();
    file.CopyTo(stream);
    UploadFileStreamToS3(stream, "documenteditor", "", "GettingStarted.docx");
    stream.Close();
    return "Success";
}

public bool UploadFileStreamToS3(System.IO.Stream localFilePath, string bucketName, string subDirectoryInBucket, string fileNameInS3)
{
    AWSCredentials credentials = new StoredProfileAWSCredentials("sync_development");
    IAmazonS3 client = new AmazonS3Client(credentials, Amazon.RegionEndpoint.USEast1);
    TransferUtility utility = new TransferUtility(client);
    TransferUtilityUploadRequest request = new TransferUtilityUploadRequest();

    if (subDirectoryInBucket == "" || subDirectoryInBucket == null)
    {
        request.BucketName = bucketName; //no subdirectory just bucket name.
    }
    else
    {   // subdirectory and bucket name.  
        request.BucketName = bucketName + @"/" + subDirectoryInBucket;
    }
    request.Key = fileNameInS3; //file name up in S3.
    request.InputStream = localFilePath;
    utility.Upload(request); //commencing the transfer  

    return true; //indicate that the file was sent.
}
```

Get the complete working sample in [`Auto-Save-documents-in-Word-Processor`](https://github.com/SyncfusionExamples/Auto-Save-documents-in-Word-Processor).
