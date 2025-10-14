---
layout: post
title: Auto save document in document editor in Vue Document editor component | Syncfusion
description: Learn here all about Auto save document in document editor in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Auto save document in document editor 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Auto save document in document editor in Vue Document editor component

In this article, we are going to see how to auto save the document in AWS S3. You can automatically save the edited content in regular intervals of time. It helps reduce the risk of data loss by saving an open document automatically at customized intervals.

The following example illustrates how to auto save the document in AWS S3.

* In the client-side, using content change event, we can automatically save the edited content in regular intervals of time. Based on `contentChanged` boolean, the document send as Docx format to server-side using [`saveAsBlob`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#saveasblob) method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' v-on:created="onCreated"
      v-on:contentChange="contentChangeEvent" height="590px" id='container'
      :enableToolbar='true'></ejs-documenteditorcontainer>
  </div>
</template>
<script setup>
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
import { provide, ref } from 'vue';

const container = ref(null);
const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
const contentChanged = ref(false);

//Inject require modules.
provide('DocumentEditorContainer', [Toolbar]);

const contentChangeEvent = function () {
  contentChanged.value = true;
}
const onCreated = function () {
  setInterval(() => {
    if (contentChanged.value) {
      //You can save the document as below
      container.value.ej2Instances.documentEditor
        .saveAsBlob('Docx')
        .then((blob) => {
          console.log('Saved sucessfully');
          let exportedDocument = blob;
          //Now, save the document where ever you want.
          let formData = new FormData();
          formData.append('fileName', 'sample.docx');
          formData.append('data', exportedDocument);
          /* tslint:disable */
          var req = new XMLHttpRequest();
          // Replace your running Url here
          req.open(
            'POST',
            'http://localhost:62869/api/documenteditor/SaveToS3',
            true
          );
          req.onreadystatechange = () => {
            if (req.readyState === 4) {
              if (req.status === 200 || req.status === 304) {
                console.log('Saved sucessfully');
              }
            }
          };
          req.send(formData);
        });
      contentChanged.value = false;
    }
  }, 1000);
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' v-on:created="onCreated"
      v-on:contentChange="contentChangeEvent" height="590px" id='container'
      :enableToolbar='true'></ejs-documenteditorcontainer>
  </div>
</template>
<script>
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditorcontainer': DocumentEditorContainerComponent
  },
  data() {
    return {
      serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/',
      contentChanged: false
    };
  },
  provide: {
    //Inject require modules.
    DocumentEditorContainer: [Toolbar]
  },
  methods: {
    contentChangeEvent: function () {
      this.contentChanged = true;
    },
    onCreated: function () {
      setInterval(() => {
        if (this.contentChanged) {
          //You can save the document as below
          this.$refs.container.ej2Instances.documentEditor
            .saveAsBlob('Docx')
            .then((blob) => {
              console.log('Saved sucessfully');
              let exportedDocument = blob;
              //Now, save the document where ever you want.
              let formData = new FormData();
              formData.append('fileName', 'sample.docx');
              formData.append('data', exportedDocument);
              /* tslint:disable */
              var req = new XMLHttpRequest();
              // Replace your running Url here
              req.open(
                'POST',
                'http://localhost:62869/api/documenteditor/SaveToS3',
                true
              );
              req.onreadystatechange = () => {
                if (req.readyState === 4) {
                  if (req.status === 200 || req.status === 304) {
                    console.log('Saved sucessfully');
                  }
                }
              };
              req.send(formData);
            });
          this.contentChanged = false;
        }
      }, 1000);
    },
  },
};
</script>

{% endhighlight %}
{% endtabs %}

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

* In server-side, configure the access key and secret key in `web.config` file and register profile in `startup.cs`.

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
          return "Sucess";
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
          utility.Upload(request); //commensing the transfer  

          return true; //indicate that the file was sent  
      }
      ```

Get the complete working sample in this [`link`](https://github.com/SyncfusionExamples/Auto-Save-documents-in-Word-Processor).