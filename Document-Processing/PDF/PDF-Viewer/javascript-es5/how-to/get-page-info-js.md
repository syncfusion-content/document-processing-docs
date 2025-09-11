---
layout: post
title: Get Page Info in Javascript Pdfviewer control | Syncfusion
description: Learn here all about Get Page Info in Syncfusion Javascript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
publishingplatform: Javascript
documentation: ug
domainurl: ##DomainURL##
---

# Get Page Info Javascript Pdfviewer control

The PDF Viewer library allows you to retrieves the information of a specified page in the viewer using the **getPageInfo()** method.This provides essential information such as the height, width and rotation.

The following steps are used to getPageInfo.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** The following code snippet to implement the functionality for retrieving height, width and rotation of a specified page in the viewer.

```html

 <button id="getPageInfo">getPageInfo</button>

```

```javascript

document.getElementById('getPageInfo').addEventListener('click', function() {
  // Set the page index for which info is required
  let pageIndex=0;
  // To Retrieve and log the page information
  console.log(pdfviewer.getPageInfo(pageIndex));
  // To Log the specific page information details to the console
  const pageInfo = pdfviewer.getPageInfo(pageIndex);
  console.log(`Page Info for Page Index ${pageIndex}:`);
  console.log(`Height: ${pageInfo.height}`);
  console.log(`Width: ${pageInfo.width}`);
  console.log(`Rotation: ${pageInfo.rotation}`);
});

```

By following these steps, you can successfully integrate and use the get page info API in the EJ2 PDF Viewer.

[View Sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/How%20to)