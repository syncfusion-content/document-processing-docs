---
layout: post
title: Save PDF files to Dropbox in React PDF Viewer | Syncfusion
description: Learn how to save PDF files to Dropbox using the Syncfusion React PDF Viewer component in standalone and server-backed configurations.
control: PDF Viewer
platform: document-processing
documentation: ug
---

# Save PDF files to Dropbox cloud storage

The React PDF Viewer component supports saving PDF files to Dropbox using either the standalone or server-backed configuration. The following steps demonstrate both approaches.

## Using Standalone PDF Viewer

To save a PDF file to Dropbox, follow these steps:

**Step 1:** Create a Dropbox API app

To create a Dropbox API App, you should follow the official documentation provided by Dropbox [link](https://www.dropbox.com/developers/documentation/dotnet#tutorial). The process involves visiting the Dropbox Developer website and using their App Console to set up your API app. This app will allow you to interact with Dropbox programmatically, enabling secure access to files and data.

**Step 2:** Create a PDF Viewer sample in React

Follow the instructions provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) to create a simple PDF Viewer sample in React. This sets up the basic structure of the PDF Viewer application.

**Step 3:** Modify the `src/app/app.ts` file in the React project

1. Import the required namespaces at the top of the file:

```typescript
import { Dropbox } from 'dropbox';
```

2. Configure a custom toolbar item for the download function to save a PDF file to Dropbox.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
{% raw %}

var toolItem1 = {
  prefixIcon: 'e-icons e-pv-download-document-icon',
  id: 'download_pdf',
  tooltipText: 'Download file',
  align: 'right'
};

function toolbarClick(args){
  if (args.item && args.item.id === 'download_pdf') {
    saveDocument();
  }
};

return (<div>
  <div className='control-section'>
  {/* Render the PDF Viewer */}
    <PdfViewerComponent
      ref={(scope) => {
        viewer = scope;
      }}
      created={loadDocument}
      id="container"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      style={{ height: '640px' }}
      toolbarSettings={{ showTooltip : true, toolbarItems: [ 'OpenOption', 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', toolItem1, 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']}}
          toolbarClick={toolbarClick}
      >

      <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                          ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]}/>
    </PdfViewerComponent>
  </div>
</div>);

{% endraw %}
{% endhighlight %}
{% endtabs %}

3. Retrieve the PDF viewer instance and save the current PDF as a Blob. Then read the Blob using a FileReader to convert it into an ArrayBuffer, and upload the ArrayBuffer to Dropbox using the `filesUpload` method of the Dropbox instance.

N> Replace **Your Access Token** with the actual access token for the Dropbox app.

```typescript
 function saveDocument() {
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
  };
```

N> Install the `dropbox` package in the React project before running the sample: `npm install dropbox`.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-dropbox-cloud-file-storage/tree/master/Open%20and%20Save%20PDF%20in%20Drop%20Box%20using%20Standalone)