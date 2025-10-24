---
layout: post
title: Get page info in TypeScript PDF Viewer | Syncfusion
description: Learn how to retrieve page height, width, and rotation using getPageInfo in the Syncfusion TypeScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Get page info in TypeScript PDF Viewer

Use the **getPageInfo()** method to retrieve information for a specified page, including height, width, and rotation.

The following steps show how to use `getPageInfo`.

**Step 1:** Follow the steps in the [Get started with JavaScript ES6 PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started/) guide to create a sample.

**Step 2:** Use the following code to get the height, width, and rotation for a specified page.

```html

 <button id="getPageInfo">getPageInfo</button>

```

```ts

// Event listener for getting page information
document.getElementById('getPageInfo')?.addEventListener('click', function() {
    // Set the page index for which info is required
    let pageIndex: number = 0;

    // To Retrieve and log the page information
    console.log(pdfviewer.getPageInfo(pageIndex));

     // Log the specific page information details to the console
    const pageInfo:PageInfoModel = pdfviewer.getPageInfo(pageIndex);
    console.log(`Page Info for Page Index ${pageIndex}:`);
    console.log(`Height: ${pageInfo.height}`);
    console.log(`Width: ${pageInfo.width}`);
    console.log(`Rotation: ${pageInfo.rotation}`);
  });

```

By following these steps, the page info API can be integrated and used in the EJ2 PDF Viewer.

[View sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/How%20to)