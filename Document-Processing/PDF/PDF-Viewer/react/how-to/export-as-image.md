---
layout: post
title: Export pages as images in React PDF Viewer | Syncfusion
description: Learn how to export pages as Base64-encoded images in the React PDF Viewer using exportAsImage and exportAsImages.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Export pages as images in PDF Viewer

Export a single page as a Base64-encoded image using `exportAsImage()` or export a range of pages using `exportAsImages()`.

Steps to export pages as images

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Use the following code to export a specified page as a Base64-encoded image or a range of pages as Base64-encoded images.

```
<button (click)="exportAsImage()">ExportAsImage</button>
```

```ts
exportAsImage() {
  let imageDetail;
  let pageIndex: number = 1;
  var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
  viewer.exportAsImage(pageIndex).then(function (value) {
      imageDetail = value;
      console.log(imageDetail);
  });
}
```
Export a specified page as a Base64-encoded image with a custom size:

```
<button (click)="exportAsImageWithSize()">exportAsImageWithSize</button>
```

```ts
exportAsImageWithSize() {
  let imageDetail;
  let pageIndex: number = 1;
  let size: Size = new Size(200,500);
  var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
  viewer.exportAsImage(pageIndex,size).then(function (value) {
      imageDetail = value;
      console.log(imageDetail);
  });
}
```
Export a range of pages as Base64-encoded image strings:

```
<button (click)="exportAsImages()">exportAsImages</button>
```

```ts
exportAsImages() {
  let startPageIndex: number = 1;
  let endPageIndex: number = 5;
  var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
  viewer.exportAsImages(startPageIndex, endPageIndex).then(function (value) {
      imageDetails = value;
      console.log(imageDetails);
  });
}
```
Export a range of pages as Base64-encoded images with a custom size:

```
<button (click)="exportAsImageWithSize()">exportAsImageWithSize</button>
```

```ts
exportAsImageWithSize() {
  let startPageIndex: number = 1;
  let endPageIndex: number = 5;
  let size: Size = new Size(200,500);
  var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
  viewer.exportAsImages(startPageIndex, endPageIndex, size).then(function (value) {
      imageDetails = value;
      console.log(imageDetails);
  });
}
```

These APIs enable exporting viewer pages as images for further processing or download.