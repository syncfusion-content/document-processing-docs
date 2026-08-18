---
layout: post
title: How to Handle Overlapped Annotations in JavaScript (ES6) | Syncfusion
description: Handle overlapping annotations in the JavaScript (ES6) PDF Viewer so users can select, move, and edit the right annotation when several are stacked on a page.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# How to Handle Overlapped Annotations in JavaScript (ES6) PDF Viewer

Use the [annotationCollection] (https://ej2.syncfusion.com/documentation/api/pdfviewer/#annotationcollection) property of the [annotationSelect] (https://ej2.syncfusion.com/documentation/api/pdfviewer/#annotationselect) event to get overlapped annotations when the user clicks an annotation.

The following example shows how to access overlapped annotations on click:

```ts

// Get overlapped annotation collections.
viewer.annotationSelect = (args: any) => {
  console.log(args.annotationCollection);
}

```

Find the sample: [Get overlapped annotations on click](https://stackblitz.com/edit/9jn6bk-kmzqr5?devtoolsheight=33&file=index.ts)
