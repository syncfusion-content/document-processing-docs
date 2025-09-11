---
layout: post
title: extractTextCompleted Event in Javascript Pdfviewer control | Syncfusion
description: Learn here all about extractTextCompleted Event in Syncfusion Javascript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Extract text
publishingplatform: Javascript
documentation: ug
domainurl: ##DomainURL##
---

# Extract text in Javascript Pdfviewer control using extractTextCompleted event

To extract text in Syncfusion PDF viewer, you can use the [**isExtractText**](https://ej2.syncfusion.com/documentation/api/pdfviewer/#isextracttext) property and [**extractTextCompleted**](https://ej2.syncfusion.com/documentation/api/pdfviewer/#extracttextcompleted) event.This allows you to extract the text from a page along with the bounds.

Here is an example of how you can use the **isExtractText** property and **extractTextCompleted** event:

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

Find the sample [how to extract Text](https://stackblitz.com/edit/kzd4jd-dcser9?file=index.js)