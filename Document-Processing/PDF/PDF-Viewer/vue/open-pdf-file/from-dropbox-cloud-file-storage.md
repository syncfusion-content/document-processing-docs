---
layout: post
ttitle: Open PDF from Dropbox cloud storage in Vue PDF Viewer | Syncfusion
description: Learn how to load PDFs from Dropbox cloud storage in the Syncfusion Vue PDF Viewer component using standalone and server-backed approaches.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF from Dropbox cloud storage

The Vue PDF Viewer component supports loading PDF files from Dropbox using either the standalone or the server-backed PDF Viewer. The following sections walk through both approaches.

## Using the standalone PDF Viewer

To load a PDF file from Dropbox cloud storage in the standalone PDF Viewer, follow these steps:

**Step 1:** Create a Dropbox API app

Follow the Dropbox documentation to create an API app: https://www.dropbox.com/developers/documentation/dotnet#tutorial. This enables programmatic access with secure credentials.

**Step 2:** Create a PDF Viewer sample in Vue

Start by following the PDF Viewer [getting started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) guide for Vue to create a simple PDF Viewer sample. This provides the basic setup for the PDF Viewer component.

**Step 3:** Modify the `src/App.vue` file in the Vue project

1. Import the required module at the top of the file:

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
<script>
import { Dropbox } from 'dropbox';
</script>
{% endhighlight %}
{% endtabs %}

2. Create an instance of the Dropbox class using an access token for authentication. Call the `filesDownload` method to download the desired file (for example, `/PDF_Succinctly.pdf`). Extract the file blob from the response, convert it to a Base64 string using the `blobToBase64` helper, and load the Base64 string into the PDF Viewer control.

N> Replace the placeholder with the actual Dropbox access token. For production, store secrets securely (for example, environment variables, user secrets, or a secret store such as Azure Key Vault) and do not commit credentials to source control.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
<script>
  export default {
    methods: {
      async loadPdfDocument() {
        const dbx = new Dropbox({ accessToken: 'Your Access Token' });
        dbx.filesDownload({ path: '/PDF_Succinctly.pdf' }).then(async (response) => {
          const blob = await response.result.fileBlob;
          const base64String = await this.blobToBase64(blob);
          const viewer = document.getElementById('pdfViewer').ej2_instances[0];
          setTimeout(() => {
            viewer.load(base64String, "");
          }, 2000);
        });
      },

      blobToBase64(blob) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
      },
    },
  };
</script>
{% endhighlight %}
{% endtabs %}

N> The **npm install dropbox** package must be installed in the Vue application to use the Dropbox SDK.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-dropbox-cloud-file-storage/tree/master/Open%20and%20Save%20PDF%20in%20Drop%20Box%20using%20Standalone)