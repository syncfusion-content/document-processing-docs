---
layout: post
title: Get Page Info in Typescript Pdfviewer control | Syncfusion
description: Learn here all about Get Page Info in Syncfusion Typescript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---

# Get Page Info Typescript Pdfviewer control

The PDF Viewer library allows you to retrieves the information of a specified page in the viewer using the **getPageInfo()** method.This provides essential information such as the height, width and rotation.

The following steps are used to getPageInfo.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** The following code snippet to implement the functionality for retrieving height, width and rotation of a specified page in the viewer.

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

By following these steps, you can successfully integrate and use the get page info API in the EJ2 PDF Viewer.

[View sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/How%20to)