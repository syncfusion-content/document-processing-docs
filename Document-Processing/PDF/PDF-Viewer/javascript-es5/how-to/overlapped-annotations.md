---
layout: post
title: Overlapped annotations in Javascript Pdfviewer control | Syncfusion
description: Learn here all about Overlapped annotations in Syncfusion Javascript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Overlapped annotations
publishingplatform: Javascript
documentation: ug
domainurl: ##DomainURL##
---

# Overlapped annotations in Javascript Pdfviewer control

To get the overlapped annotations on a mouse click in a Syncfusion PDF Viewer, you can use the [**annotationCollection**](https://ej2.syncfusion.com/documentation/api/pdfviewer/#annotationcollection) property of [**annotationSelect**](https://ej2.syncfusion.com/documentation/api/pdfviewer/#annotationselect) event.This event is triggered when the user clicks on an annotation in the PDF document.

Here is an example of how you can use the [**annotationSelect**](https://ej2.syncfusion.com/documentation/api/pdfviewer/#annotationselect) event to get the overlapped annotations on a mouse click in a Syncfusion PDF Viewer:

```javascript

// Get overlapped annotation collections.
viewer.annotationSelect =(args) =>{
  console.log(args.annotationCollection);
}

```

Find the sample [how to get the overlapped annotations on mouse click](https://stackblitz.com/edit/a93cem-lprlap?devtoolsheight=33&file=index.js)