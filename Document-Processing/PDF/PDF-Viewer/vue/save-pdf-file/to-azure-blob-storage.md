---
layout: post
title: Save PDF files to Azure Blob Storage in Vue PDF Viewer | Syncfusion
description: Learn how to save PDF files to Azure Blob Storage using the Syncfusion Vue PDF Viewer component in standalone and server-backed configurations.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Save PDF files to Azure Blob Storage in Vue

The Vue PDF Viewer component supports saving PDF files to Azure Blob Storage using either a standalone (browser) configuration or a server-backed configuration. The following steps demonstrate both approaches and include prerequisites and security guidance for production deployments.

## Using Standalone PDF Viewer

Follow the steps below to save a PDF file to Azure Blob Storage from an Vue PDF Viewer.

**Step 1:** Create a PDF Viewer sample in Vue

Follow the instructions provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to create a simple PDF Viewer sample in Vue. This sets up the basic structure of the PDF Viewer application.

**Step 2:** Modify the `src/App.vue` file in the Vue project

1. Import the required namespaces at the top of the file:

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
  import { BlockBlobClient } from "@azure/storage-blob";
</script>

{% endhighlight %}
{% endtabs %}

2. Add the following private property to `App.vue`, and assign the value from the configuration to the corresponding property.

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

4. Retrieve the PDF Viewer instance and save the current PDF as a Blob. Then, read the Blob as an ArrayBuffer and upload the ArrayBuffer to Azure Blob Storage using `BlockBlobClient`.

N> Replace **Your SAS Url in Azure** with the SAS URL generated for the target blob. For production, generate short-lived SAS tokens on the server rather than embedding SAS URLs in client code.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
export default {
  methods: {
    savePdfDocument: function () {
      var viewer = document.getElementById('pdfViewer').ej2_instances[0];
      viewer.saveAsBlob().then(function (value) {
        var reader = new FileReader();
        reader.onload = async () => {
          if (reader.result) {
            var SASUrl = "*Your SAS Url in Azure*";
            const arrayBuffer = reader.result;
            const blobClient = new BlockBlobClient(SASUrl);
            // Upload data to the blob
            const uploadBlobResponse = await blobClient.upload(arrayBuffer, arrayBuffer.byteLength);
            console.log(`Upload blob successfully`, uploadBlobResponse.requestId);
          }
        };
        reader.readAsArrayBuffer(value);
      });
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

N> Install the Azure Storage Blob client package for browser use: `npm install @azure/storage-blob`. For server-side operations use `dotnet add package Azure.Storage.Blobs`.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-azure-blob-storage/tree/master/Open%20and%20Save%20PDF%20in%20Azure%20Blob%20Storage%20using%20Standalone).