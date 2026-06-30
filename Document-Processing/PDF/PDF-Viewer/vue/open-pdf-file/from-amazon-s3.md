---
layout: post
title: Open PDF from AWS S3 in Vue PDF Viewer | Syncfusion
description: Learn how to load PDFs from AWS S3 in the Syncfusion Vue PDF Viewer component using standalone and server-backed approaches.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF files from AWS S3

The Vue PDF Viewer component supports loading PDF files from AWS S3 using either the standalone or the server-backed PDF Viewer. The following sections demonstrate both approaches and include prerequisites and security guidance.

## Using the standalone PDF Viewer

Follow these steps to load a PDF from AWS S3 in the standalone PDF Viewer.

**Step 1:** Create a PDF Viewer sample in Vue

Follow the instructions in the [getting started guide (Vue)](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to create a basic PDF Viewer sample.

**Step 2:** Modify the `src/App.vue` file in the Vue project

1. Import the required namespaces at the top of the file:

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
  import AWS from 'aws-sdk';
</script>

{% endhighlight %}
{% endtabs %}

2. Configure the AWS SDK with the region, access key, and secret access key so the application can interact with S3.

N> Replace the placeholder values with valid values when testing. Do not embed production credentials in client-side code; use server-side authentication or pre-signed URLs for secure access.

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

3. Set parameters for fetching the PDF document from S3, including the bucket name and file key. Use S3.getObject to retrieve the document, convert it to a Base64 string, and pass it to viewer.load in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer.

N> Replace **Your Bucket Name** and **Your Key** with the target S3 bucket name and object key when testing.


{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
export default {
  methods: {
    loadPdfDocument: function () {
      const getObjectParams = {
        Bucket: '**Your Bucket Name**',
        Key: '**Your Key**',
      };
      var s3= new AWS.S3();
      s3.getObject(getObjectParams, (err, data) => {
        if (err) {
          console.error('Error fetching document:', err);
        } else {
          if (data && data.Body) {
            const bytes = new Uint8Array(data.Body);
            let binary = '';
            bytes.forEach((byte) => (binary += String.fromCharCode(byte)));
            const base64String = window.btoa(binary);
            setTimeout(() => {
              var viewer = document.getElementById('pdfViewer').ej2_instances[0];
              viewer.load("data:application/pdf;base64,"+base64String);
            }, 2000);
          }
        }
      });
    },
  }
}
</script>

{% endhighlight %}
{% endtabs %}

N> Install the AWS SDK package appropriate for the project. For v2 use `npm install aws-sdk`; for v3 prefer the modular packages such as `@aws-sdk/client-s3`.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-aws-s3/tree/master/Open%20and%20Save%20PDF%20in%20AWS%20S3%20using%20Standalone).