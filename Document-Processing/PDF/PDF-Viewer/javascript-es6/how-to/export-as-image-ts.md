---
layout: post
title: Export As Image in Typescript Pdfviewer control | Syncfusion
description: Learn here all about Export As Image in Syncfusion Typescript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---

# Export As Image Typescript Pdfviewer control

The PDF Viewer library allows you to export specified pages as a Base64-encoded image string using the **exportAsImage()** method and exporting a range of pages as Base64-encoded image strings using the **exportAsImages()** method.

The following steps are used to exportAsImage.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** The following code snippet to implement the functionality for exporting a specified page as a Base64-encoded image string or exporting a range of pages as Base64-encoded image strings.

```

 <button id="exportAsImage">ExportAsImage</button>

```

```ts

document.getElementById('exportAsImage').addEventListener('click', () => {
  let imageDetail: any;
  let pageIndex: number = 1;
  viewer.exportAsImage(pageIndex).then(function (value) {
      imageDetail = value;
      console.log(imageDetail);
  });
});

```

Similarly, to code snippet for exports the specified page as a Base64-encoded image string, allowing for custom image size:


```

 <button id="exportAsImageWithSize">ExportAsImageWithSize</button>

```

```ts

document.getElementById('exportAsImageWithSize').addEventListener('click', () => {
  let imageDetail: any;
  let pageIndex: number = 1;
  let size: any = {width:200, height:500};
  viewer.exportAsImage(pageIndex,size).then(function (value) {
      imageDetail = value;
      console.log(imageDetail);
  });
});

```
Similarly, to code snippet for exports the range of pages as Base64-encoded image strings:


```

 <button id="exportAsImages">ExportAsImages</button>

```

```ts

document.getElementById('exportAsImages').addEventListener('click', () => {
  let imageDetail: any;
  let startPageIndex: number = 1;
  let endPageIndex: number = 5;
  viewer.exportAsImages(startPageIndex, endPageIndex).then(function (value) {
      imageDetails = value;
      console.log(imageDetails);
  });
});

```

Similarly, to code snippet for exports the range of pages as Base64-encoded image strings, allowing for custom image size:


```

 <button id="exportAsImagesWithSize">ExportAsImagesWithSize</button>

```

```ts

document.getElementById('exportAsImagesWithSize').addEventListener('click', () => {
  let imageDetail: any;
  let startPageIndex: number = 1;
  let endPageIndex: number = 5;
  let size: any = {width:200, height:500};
  viewer.exportAsImages(startPageIndex, endPageIndex, size).then(function (value) {
      imageDetails = value;
      console.log(imageDetails);
  });
});

```

By following these steps, you can successfully integrate and use the export as image API in the EJ2 PDF Viewer.