---
layout: post
title: Export pages as images in JavaScript PDF Viewer | Syncfusion
description: Learn how to export pages as Base64-encoded images in the JavaScript PDF Viewer using exportAsImage and exportAsImages.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Export pages as images in JavaScript PDF Viewer

Export pages as Base64-encoded images using `exportAsImage()` for a single page or `exportAsImages()` for a range. These APIs return Base64-encoded image strings suitable for further processing or download.

### Steps to export pages as images

**Step 1:** Create a simple PDF Viewer sample by following the getting-started guide: https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started/

**Step 2:** Use the following code to export a specified page as a Base64-encoded image or a range of pages as Base64-encoded images. Place the button elements in the HTML and attach event handlers after the viewer is initialized.
```

 <button id="exportAsImage">ExportAsImage</button>

```

```javascript

document.getElementById('exportAsImage').addEventListener('click', () => {
  var imageDetail;
  var pageIndex = 1;
  viewer.exportAsImage(pageIndex).then(function (value) {
      imageDetail = value;
      console.log(imageDetail);
  });
});

```

Export a specified page as a Base64-encoded image with a custom size:

```

 <button id="exportAsImageWithSize">ExportAsImageWithSize</button>

```

```javascript

document.getElementById('exportAsImageWithSize').addEventListener('click', () => {
  var imageDetail;
  var pageIndex = 1;
  var size = {width:200, height:500};
  viewer.exportAsImage(pageIndex,size).then(function (value) {
      imageDetail = value;
      console.log(imageDetail);
  });
});

```
Export a range of pages as Base64-encoded image strings:

```

 <button id="exportAsImages">ExportAsImages</button>

```

```javascript

document.getElementById('exportAsImages').addEventListener('click', () => {
  var startPageIndex = 1;
  var endPageIndex = 5;
  viewer.exportAsImages(startPageIndex, endPageIndex).then(function (value) {
      imageDetails = value;
      console.log(imageDetails);
  });
});

```

Export a range of pages as Base64-encoded images with a custom size:

```

 <button id="exportAsImagesWithSize">ExportAsImagesWithSize</button>

```

```javascript

document.getElementById('exportAsImagesWithSize').addEventListener('click', () => {
  var startPageIndex = 1;
  var endPageIndex = 5;
  var size = {width:200, height:500};
  viewer.exportAsImages(startPageIndex, endPageIndex, size).then(function (value) {
      imageDetails = value;
      console.log(imageDetails);
  });
});

```

These APIs enable exporting viewer pages as images for further processing or download.