---
layout: post
title: Get page info in JavaScript PDF Viewer | Syncfusion
description: Learn how to retrieve page height, width, and rotation using getPageInfo in the Syncfusion JavaScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Get page info in JavaScript PDF Viewer


Use the **getPageInfo()** method to retrieve metadata for a specified page, including height, width, and rotation. The method returns an object with numeric `height` and `width` values (in CSS pixels) and a `rotation` value (degrees).

The following steps show how to use `getPageInfo`.

**Step 1:** Follow the steps in the [Get started with JavaScript ES5 PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started/) guide to create a sample.

**Step 2:** Use the following code to get the height, width, and rotation for a specified page.

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

By following these steps, the page info API can be integrated and used in the EJ2 PDF Viewer.

[View sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/How%20to)