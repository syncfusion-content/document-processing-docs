---
layout: post
title: Save PDF files to Dropbox in Vue PDF Viewer | Syncfusion
description: Learn how to save PDF files to Dropbox using the Syncfusion Vue PDF Viewer component in standalone and server-backed configurations.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Save PDF files to Dropbox cloud storage

PDF Viewer component supports saving PDF files to Dropbox using either the standalone or server-backed configuration. The following steps demonstrate both approaches.

## Using Standalone PDF Viewer

To save a PDF file to Dropbox, follow these steps:

**Step 1:** Create a Dropbox API app

To create a Dropbox API App, follow the official documentation provided by Dropbox [link](https://www.dropbox.com/developers/documentation/dotnet#tutorial). The process involves visiting the Dropbox Developer website and using their App Console to set up the API app. This app will allows to interact with Dropbox programmatically, enabling secure access to files and data.

**Step 2:** Create a Simple PDF Viewer Sample in Vue

Follow the instructions[link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to create a simple PDF viewer sample in Vue. This sets up the basic structure of the PDF Viewer application.

**Step 3:** Modify the `src/App.vue` file in the Vue project

1. Import the required namespaces at the top of the file:

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
  import { Dropbox } from 'dropbox';
</script>

{% endhighlight %}
{% endtabs %}

2. Configure a custom toolbar item for the download function to save a PDF file to Dropbox.

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

3. Retrieve the PDF viewer instance and save the current PDF as a Blob. Then read the Blob using a FileReader to convert it into an ArrayBuffer, and upload the ArrayBuffer to Dropbox using the `filesUpload` method of the Dropbox instance.

N> Replace **Your Access Token** with the actual access token for the Dropbox app.


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
            const dbx = new Dropbox({ accessToken: 'Your Access Token' });
            const uint8Array = new Uint8Array(reader.result);
            dbx.filesUpload({ path: '/' + viewer.fileName, contents: uint8Array })
              .then(response => {
                console.log(response);
              })
              .catch(error => {
                console.error(error);
              });
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

N> Install the `dropbox` package in the Vue project before running the sample: `npm install dropbox`.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-dropbox-cloud-file-storage/tree/master/Open%20and%20Save%20PDF%20in%20Drop%20Box%20using%20Standalone)