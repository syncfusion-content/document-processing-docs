---
layout: post
title: Auto Save Document in ASP.NET Core DOCX Editor Component | Syncfusion
description: Learn here all about auto save document in Syncfusion Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Auto Save Document In Document Editor
documentation: ug
---


# How to auto save the document of Document Editor component into AWS S3

This article explains how to auto save the document in AWS S3. You can automatically save the edited content in regular intervals of time. It helps to reduce the risk of data loss by saving an open document automatically at customized intervals.

* In the client-side, using the [`contentChanged`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_ContentChanged) event, the edited content can be automatically saved in regular intervals of time. When the event is triggered, the document is sent as DOCX format to server-side using the [`saveAsBlob`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditor.html#Syncfusion_EJ2_DocumentEditor_DocumentEditor_SaveAsBlob) method.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/auto-save/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/auto-save/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


* Configure the access key and secret key in `web.config` file and register the profile in `startup.cs`.

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

* In server-side, receives the stream content from client-side and processes it to save the document in AWS S3. Add Web API in controller file like below to save the document in AWS S3.

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
        request.BucketName = bucketName; //no subdirectory just bucket name
    }
    else
    {   // subdirectory and bucket name  
        request.BucketName = bucketName + @"/" + subDirectoryInBucket;
    }
    request.Key = fileNameInS3; //file name up in S3
    request.InputStream = localFilePath;
    utility.Upload(request); //commencing the transfer

    return true; //indicate that the file was sent  
}
```

Get the complete working sample in this [`link`](https://github.com/SyncfusionExamples/Auto-Save-documents-in-Word-Processor).
