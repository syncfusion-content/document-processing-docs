---
layout: post
title: Open PDF from Azure Blob Storage using Vue PDF Viewer | Syncfusion
description: Learn about how to load PDF file from Azure Blob Storage in Syncfusion Vue PDF Viewer component of Syncfusion Essential JS 2 and more.
control: Open PDF files from Azure Blob Storage
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF file from Azure Blob Storage

The Vue PDF Viewer supports loading PDF files from Azure Blob Storage using either the standalone or server-backed viewer. The following steps demonstrate both approaches.

## Using the standalone PDF Viewer

Follow these steps to load a PDF from Azure Blob Storage in the standalone PDF Viewer.

**Step 1:** Create a Simple PDF Viewer Sample in Vue

Follow the getting-started guide in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to create a basic PDF Viewer sample in Vue.

**Step 2:** Modify the `src/App.vue` file in the Vue project

1. Import the required modules at the top of the file:

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
  import { BlockBlobClient } from "@azure/storage-blob";
</script>

{% endhighlight %}
{% endtabs %}

2. Use the `SASUrl` to fetch the PDF file, convert the response to an `ArrayBuffer`, and then transform it into a `Uint8Array`. Convert the `Uint8Array` into a Base64 string and load it into the PDF Viewer.

N> Replace **Your SAS Url in Azure** with the actual SAS URL for the Azure Blob Storage account.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
  export default {
    methods: {
      loadPdfDocument: async function () {
        var SASUrl = "*Your SAS Url in Azure*";
        const response = await fetch(SASUrl);
        const arrayBuffer = await response.arrayBuffer();
        const uint8Array = new Uint8Array(arrayBuffer);
        const base64String = btoa(
          String.fromCharCode(...uint8Array)
        );
        var viewer = document.getElementById('pdfViewer').ej2_instances[0];
        setTimeout(function() {
          viewer.load("data:application/pdf;base64," + base64String);
        }, 2000);
      },
    }
  }
</script>

{% endhighlight %}
{% endtabs %}

N> The **npm install @azure/storage-blob** package must be installed in the application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-azure-blob-storage/tree/master/Open%20and%20Save%20PDF%20in%20Azure%20Blob%20Storage%20using%20Standalone).