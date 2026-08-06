---
layout: post
title: Auto Save Document in the Document Editor in JavaScript (ES6) DOCX Editor control | Syncfusion
description: Learn here all about Auto Save Document in the Document Editor in Syncfusion JavaScript (ES6) Document Editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Auto Save Document in Document Editor
documentation: ug
domainurl: ##DomainURL##
---

# Auto Save Document in the Document Editor in JavaScript (ES6) Document Editor control

In this article, we are going to see how to auto save the document in AWS S3. You can automatically save the edited content in regular intervals of time. It helps reduce the risk of data loss by saving an open document automatically at customizable intervals.

The following example illustrates how to auto save the document in AWS S3.

* On the client side, using the content change event, we can automatically save the edited content in regular intervals of time. Based on the `contentChanged` boolean value, the document is sent as Docx format to the server side using the [`saveAsBlob`](https://ej2.syncfusion.com/documentation/api/document-editor#saveasblob) method.

```ts
import {
    DocumentEditorContainer,
    Toolbar,
} from '@syncfusion/ej2-documenteditor';
let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });
let contentChanged: boolean = false;
DocumentEditorContainer.Inject(Toolbar);
container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
container.created = function () {
    setInterval(() => {
        if (contentChanged) {
            //You can save the document as below
            container.documentEditor.saveAsBlob('Docx').then((blob: Blob) => {
                console.log('Saved successfully');
                let exportedDocument: Blob = blob;
                //Now, save the document wherever you want.
                let formData: FormData = new FormData();
                formData.append('fileName', 'sample.docx');
                formData.append('data', exportedDocument);
                /* tslint:disable */
                let req = new XMLHttpRequest();
                // Replace your running URL here
                req.open(
                    'POST',
                    'http://localhost:62869/api/documenteditor/SaveToS3',
                    true
                );
                req.onreadystatechange = () => {
                    if (req.readyState === 4) {
                        if (req.status === 200 || req.status === 304) {
                            console.log('Saved successfully');
                        }
                    }
                };
                req.send(formData);
            });
            contentChanged = false;
        }
    }, 1000);
};
container.appendTo('#container');

container.contentChange = (): void => {
    contentChanged = true;
};
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

* On the server side, configure the access key and secret key in the `web.config` file and register the profile in `startup.cs`.

In `web.config`, add the keys in the format below:

```xml
 <appSettings>
    <add key="AWSProfileName" value="sync_development" />
    <add key="AWSAccessKey" value="" />
    <add key="AWSSecretKey" value="" />
  </appSettings>
```

In `startup.cs`, register the profile in the format below:

```c#
Amazon.Util.ProfileManager.RegisterProfile("sync_development","", "");
```

* On the server side, receive the stream content from the client side and process it to save the document in AWS S3. Add a Web API in the controller file as below to save the document in AWS S3.

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

Get the complete working sample [`here`](https://github.com/SyncfusionExamples/Auto-Save-documents-in-Word-Processor).
