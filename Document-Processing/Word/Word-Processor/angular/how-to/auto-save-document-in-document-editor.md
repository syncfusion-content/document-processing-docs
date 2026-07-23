---
layout: post
title: Auto Save to AWS S3 in Angular DOCX Editor | Syncfusion
description: Learn how to auto-save documents to AWS S3 from the Syncfusion Angular Document Editor component.
platform: document-processing
control: Auto save document in document editor 
documentation: ug
domainurl: ##DomainURL##
---

# Auto Save Document to AWS S3 in Angular Document Editor component

This article explains how to auto-save the document in AWS S3. You can save the edited content automatically at regular intervals, which reduces the risk of data loss by saving the open document at customized intervals.

The following example illustrates how to auto-save the document in AWS S3.

* On the client side, use the `contentChange` event to detect edits and save the document at regular intervals. When the `contentChanged` flag is `true`, the document is sent to the server in Document format using the [`saveAsBlob()`](https://ej2.syncfusion.com/angular/documentation/api/document-editor#saveasblob) method.

```typescript
/**
 * Add below codes in app.component.html file
 */
 <ejs-documenteditorcontainer #documenteditor_default [enableToolbar]="true" (created)="onCreate()"
                (contentChange)="onContentChange()" height="600px" style="display:block;"></ejs-documenteditorcontainer>

/**
 * Add below codes in app.component.ts file
 */
@Component({
      selector: 'app-root',
      templateUrl: 'app.component.html',
      encapsulation: ViewEncapsulation.None,
      providers: [ToolbarService]
})
export class AppComponent {

    @ViewChild('documenteditor_default')
    public container: DocumentEditorContainerComponent;
    contentChanged: boolean;

      onCreate(): void {
          this.container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

          setInterval(() => {
              if (this.contentChanged) {
                  //You can save the document as below
                  this. container.documentEditor.saveAsBlob('Docx').then((blob: Blob) => {
                      console.log('Saved sucessfully');
                      let exportedDocument: Blob = blob;
                      //Now, save the document where ever you want.
                      let formData: FormData = new FormData();
                      formData.append('fileName', 'sample.docx');
                      formData.append('data', exportedDocument);
                      /* tslint:disable */
                      var req = new XMLHttpRequest();
                      // Replace with your running URL here.
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
                    this.contentChanged = false;
                  }
                }, 1000);
      }

      onContentChange(): void {
          this.contentChanged = true;
      }
}
```

N> 1. The Web Service link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` used in the `serviceUrl` property of the Document Editor is intended solely for demonstration and evaluation purposes.
N> 2. For production deployment, please host your own Web Service with your required server configurations.
N> 3. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own Web Service and use it for the `serviceUrl` property.

* On the server side, configure the access key and secret key in the `web.config` file and register the profile in `startup.cs`.

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

* On the server side, receive the stream from the client and process it to save the document in AWS S3. Add a Web API method in a controller file to save the document in AWS S3, as shown below.

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
        request.BucketName = bucketName; // No subdirectory; just the bucket name.
    }
    else
    {   // Subdirectory and bucket name.
        request.BucketName = bucketName + @"/" + subDirectoryInBucket;
    }
    request.Key = fileNameInS3; // File name in S3.
    request.InputStream = localFilePath;
    utility.Upload(request); // Commence the transfer.

    return true; //indicate that the file was sent  
}
```

Get the complete working sample in this [`link`](https://github.com/SyncfusionExamples/Auto-Save-documents-in-Word-Processor).
