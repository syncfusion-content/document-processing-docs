---
layout: post
title: Get overlapped annotations on click in TypeScript PDF Viewer | Syncfusion
description: Learn how to get overlapped annotations on click using the annotationSelect event in the Syncfusion TypeScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Get overlapped annotations on click in TypeScript PDF Viewer

Use the [annotationCollection](https://ej2.syncfusion.com/documentation/api/pdfviewer/#annotationcollection) property of the [annotationSelect](https://ej2.syncfusion.com/documentation/api/pdfviewer/#annotationselect) event to get overlapped annotations when the user clicks an annotation.

The following example shows how to access overlapped annotations on click:

```ts

// Get overlapped annotation collections.
viewer.annotationSelect =(args) =>{
  console.log(args.annotationCollection);
}

```

Find the sample: [Get overlapped annotations on click](https://stackblitz.com/edit/9jn6bk-kmzqr5?devtoolsheight=33&file=index.ts)
