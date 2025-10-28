---
layout: post
title: extractTextCompleted event in JavaScript PDF Viewer | Syncfusion
description: Learn how to use the extractTextCompleted event and isExtractText property in the Syncfusion JavaScript PDF Viewer to extract text and bounds.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Use extractTextCompleted to extract text in JavaScript PDF Viewer

Use the [isExtractText](https://ej2.syncfusion.com/documentation/api/pdfviewer/#isextracttext) property and the [extractTextCompleted](https://ej2.syncfusion.com/documentation/api/pdfviewer/#extracttextcompleted) event to extract page text along with bounds.

The following example shows how to enable text extraction and handle the completion event:

```javascript

viewer.isExtractText = true;
viewer.extractTextCompleted = args => {
    //Extract the Complete text of load document
    console.log(args);
    console.log(args.documentTextCollection[1]);
    //Extract the Text data.
    console.log(args.documentTextCollection[1][1].TextData);
    //Extract Text in the Page.
    console.log(args.documentTextCollection[1][1].PageText);
    //Extracts the first text of the PDF document along with its bounds
    console.log(args.documentTextCollection[1][1].TextData[0].Bounds);
};

```

Find the sample: [How to extract text](https://stackblitz.com/edit/kzd4jd-dcser9?file=index.js)