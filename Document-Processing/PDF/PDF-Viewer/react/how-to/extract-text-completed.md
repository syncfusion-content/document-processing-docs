---
layout: post
title: extractTextCompleted Event in React Pdfviewer component | Syncfusion
description: Learn here all about extractTextCompleted Event in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: extractTextCompleted
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Extract text using extractTextCompleted Event in React Pdfviewer component

The PDF Viewer library allows you to extract the text from a page along with the bounds. Text extraction can be done using the [**isExtractText**](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#isextracttext) property and [**extractTextCompleted**](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#extracttextcompleted) event.

Here is an example of how you can use the isExtractText property and extractTextCompleted event:

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

Find the sample [how to Extract Text](https://stackblitz.com/edit/react-ijmx6c?file=src%2Findex.js)