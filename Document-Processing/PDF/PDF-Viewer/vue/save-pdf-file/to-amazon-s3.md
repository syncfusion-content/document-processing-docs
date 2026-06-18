---
layout: post
title: Save PDF files to AWS S3 in Vue PDF Viewer | Syncfusion
description: Learn how to save PDF files to AWS S3 using the Syncfusion Vue PDF Viewer component in standalone and server-backed configurations.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Save PDF files to AWS S3 in Vue

The Vue PDF Viewer component supports saving PDF files to AWS S3 using either a standalone (browser) configuration or a server-backed configuration. The following steps demonstrate both approaches and include notes on prerequisites and security considerations for production use.

## Using Standalone PDF Viewer

Follow the steps below to save a PDF file to AWS S3 from a browser-based Vue PDF Viewer.

**Step 1:** Create a PDF Viewer sample in Vue

Follow the instructions provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to create a simple PDF Viewer sample in Vue. This will set up the basic structure of the PDF Viewer application.

**Step 2:** Modify the `src/App.vue` file in the Vue project

1. Import the required namespaces at the top of the file:

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
  import AWS from 'aws-sdk';
</script>

{% endhighlight %}
{% endtabs %}

3. Configure a custom toolbar item for the download function to save a PDF file to AWS S3.

N> Replace the placeholder values with the AWS region and credentials. For production, avoid embedding long-lived AWS credentials in client-side code; use temporary credentials (Cognito, STS) or perform uploads via a trusted server.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
  AWS.config.update({
    region: '**Your Region**', // Update this with the region
    accessKeyId: '*Your Access Key*', // Update this with the access key id
    secretAccessKey: '*Your Security Access Key*', // Update this with the secret access key
  });
</script>

{% endhighlight %}
{% endtabs %}

3. Configure a custom toolbar item for the download function to save a PDF file in Azure Blob Storage.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <ejs-pdfviewer
    id="pdfViewer"
    :resourceUrl="resourceUrl"
    :toolbarClick="toolbarClick"
    :created="loadPdfDocument"
    :toolbarSettings="toolbarSettings">
  </ejs-pdfviewer>
</template>

<script>
  export default {
    data() {
      let toolItem1 = {
        prefixIcon: 'e-icons e-pv-download-document-icon',
        id: 'download_pdf',
        tooltipText: 'Download file',
        align: 'right'
      };

      return {
        resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
        toolbarSettings: {
          toolbarItems: [ 'OpenOption', 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', toolItem1, 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']
        },
      };
    },

    methods: {
      toolbarClick: function (args) {
          if (args.item && args.item.id === 'download_pdf') {
            this.savePdfDocument();
          }
      },
    }
  }
</script>

{% endhighlight %}
{% endtabs %}

4. Retrieve the PDF Viewer instance, save the current PDF as a Blob, read it using FileReader to get an ArrayBuffer, and upload the ArrayBuffer to AWS S3 using the `putObject` method.

N> Replace **Your Bucket Name** and **Your Key** with the target S3 bucket and object key. Ensure the S3 bucket is configured with appropriate permissions and CORS rules to allow browser uploads.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
export default {
  methods: {
    savePdfDocument: function () {
      var viewer = document.getElementById('pdfViewer').ej2_instances[0];
      viewer.saveAsBlob().then(function (value) {
        var reader = new FileReader();
        reader.onload = () => {
          const uint8Array = new Uint8Array(reader.result);
          const putObjectParams = {
            Bucket: '**Your Bucket Name**',
            Key: '**Your Key**',
            Body: uint8Array,
            ContentType: 'application/pdf',
          };
          var s3= new AWS.S3();
          s3.putObject(putObjectParams, (err, data) => {
            if (err) {
              console.error('Error uploading document:', err);
            } else {
              console.log('Document uploaded successfully:', data);
            }
          });
        };
        reader.readAsArrayBuffer(value);
      });
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

N> Install the AWS SDK package to use the browser example. Run `npm install aws-sdk` for the v2 bundle, or prefer the AWS SDK v3 modular packages for smaller client bundles and better tree-shaking.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-aws-s3/tree/master/Open%20and%20Save%20PDF%20in%20AWS%20S3%20using%20Standalone).