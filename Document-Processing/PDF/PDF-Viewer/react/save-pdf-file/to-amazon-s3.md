---
layout: post
title: Save PDF files to AWS S3 in React PDF Viewer | Syncfusion
description: Learn how to save PDF files to AWS S3 using the Syncfusion React PDF Viewer component in standalone and server-backed configurations.
control: PDF Viewer
documentation: ug
---

# Save PDF files to AWS S3 in React

The React PDF Viewer component supports saving PDF files to AWS S3 using either a standalone (browser) configuration or a server-backed configuration. The following steps demonstrate both approaches and include notes on prerequisites and security considerations for production use.

## Using Standalone PDF Viewer

Follow the steps below to save a PDF file to AWS S3 from a browser-based React PDF Viewer.

**Step 1:** Create a PDF Viewer sample in React

Follow the instructions provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) to create a simple PDF Viewer sample in React. This will set up the basic structure of your PDF Viewer application.

**Step 2:** Modify the `src/app/app.ts` file in the React project

1. Import the required namespaces at the top of the file:

```typescript
import * as AWS from 'aws-sdk';
```

2. Configure the AWS SDK with the region, access key, and secret access key. This enables the application to interact with AWS services such as S3.

N> Replace **Your Region** with the actual Region of your AWS S3 account and **Your Access Key** with the actual Access Key of your AWS S3 account and **Your Security Access Key** with the actual Security Access Key of your AWS S3 account.

```typescript
AWS.config.update({
  region: '**Your Region**', // Update this your region
  accessKeyId: '*Your Access Key*', // Update this with your access key id
  secretAccessKey: '*Your Security Access Key*', // Update this with your secret access key
});
```

3. Configure a custom toolbar item for the download function to save a PDF file to AWS S3.

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

4. Retrieve the PDF Viewer instance, save the current PDF as a Blob, read it using FileReader to get an ArrayBuffer, and upload the ArrayBuffer to AWS S3 using the `putObject` method.

N> Replace **Your Bucket Name** and **Your Key** with the target S3 bucket and object key. Ensure the S3 bucket is configured with appropriate permissions and CORS rules to allow browser uploads.

```typescript
private s3 = new AWS.S3();

function saveDocument() {
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
};
```

N> Install the AWS SDK package to use the browser example. Run `npm install aws-sdk` for the v2 bundle, or prefer the AWS SDK v3 modular packages for smaller client bundles and better tree-shaking.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-aws-s3/tree/master/Open%20and%20Save%20PDF%20in%20AWS%20S3%20using%20Standalone).