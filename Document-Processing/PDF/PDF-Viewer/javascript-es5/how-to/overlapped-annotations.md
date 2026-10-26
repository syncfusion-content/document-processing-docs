---
layout: post
title: How to Handle Overlapped Annotations in JavaScript (ES5) | Syncfusion
description: Handle overlapping annotations in the JavaScript (ES5) PDF Viewer so users can select, move, and edit the right annotation when several are stacked on a page.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# How to Handle Overlapped Annotations in JavaScript (ES5) PDF Viewer

Use the [annotationCollection](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#annotationcollection) property of the [annotationSelect](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#annotationselect) event to get overlapped annotations when the user clicks an annotation.

The following example shows how to access overlapped annotations on click:

```javascript

// Get overlapped annotation collections.
viewer.annotationSelect =(args) =>{
  console.log(args.annotationCollection);
}

```

Find the sample: [Get overlapped annotations on click](https://stackblitz.com/edit/a93cem-lprlap?devtoolsheight=33&file=index.js)