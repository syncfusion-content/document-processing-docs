---
layout: post
title: Export As Image in Angular PDF Viewer | Syncfusion
description: Learn about exporting as an image in the Syncfusion Angular PDF Viewer component of Essential JS 2.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Export as image in Angular PDF Viewer component

The PDF Viewer library allows exporting specified pages as a Base64-encoded image string using the `exportAsImage()` method, and exporting a range of pages as Base64-encoded image strings using the `exportAsImages()` method.

Follow these steps to export as an image:

**Step 1:** Create a simple PDF Viewer sample by following the steps in this [guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started).

**Step 2:** The following code snippet implements the functionality for exporting a specified page as a Base64-encoded image string or exporting a range of pages as Base64-encoded image strings:

```html
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
Similarly, the code snippet exports the specified page as a Base64-encoded image string, allowing for a custom image size:

```html
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
Similarly, the code snippet exports the range of pages as Base64-encoded image strings:

```html
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
Similarly, the code snippet exports the range of pages as Base64-encoded image strings, allowing for a custom image size:

```html
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

By following these steps, the export as image API can be successfully integrated and used in the EJ2 PDF Viewer.