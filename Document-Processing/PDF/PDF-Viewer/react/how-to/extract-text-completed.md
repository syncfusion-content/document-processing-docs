---
layout: post
title: extractTextCompleted event in React PDF Viewer | Syncfusion
description: Learn how to use the extractTextCompleted event and isExtractText property in the Syncfusion React PDF Viewer to extract text and bounds.
control: PDF Viewer
platform: document-processing
documentation: ug
---

# Use extractTextCompleted to extract text in React PDF Viewer

Use the [isExtractText](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#isextracttext) property and the [extractTextCompleted](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#extracttextcompleted) event to extract page text along with bounds.

The following example shows how to enable text extraction and handle the completion event:

{% raw %}

```javascript
<PdfViewerComponent
    id="container"
    documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
    isExtractText={true}
    extractTextCompleted={extractTextCompleted}
    style={{ height: '640px' }}>
</PdfViewerComponent>

function extractTextCompleted(args){
    // Extract the Complete text of load document
    console.log(args);
    console.log(args.documentTextCollection[1]);
    // Extract the Text data.
    console.log(args.documentTextCollection[1][1].TextData);
    // Extract Text in the Page.
    console.log(args.documentTextCollection[1][1].PageText);
    // Extract Text along with Bounds
    console.log(args.documentTextCollection[1][1].TextData[0].Bounds);
};
```
{% endraw %}

Find the sample: [How to extract text](https://stackblitz.com/edit/react-ijmx6c?file=src%2Findex.js)