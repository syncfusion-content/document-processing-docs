---
layout: post
title: Export As Image in Angular PDF Viewer component | Syncfusion
description: Learn here all about Export As Image in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

## Export as image in Angular PDF Viewer component

The PDF Viewer component can export pages as Base64-encoded image strings using the `exportAsImage()` method (single page) and `exportAsImages()` method (page range). The examples below demonstrate single-page export, range export, and how to specify a custom image size.

The PDF Viewer library allows you to export specified pages as a Base64-encoded image string using the **exportAsImage()** method and exporting a range of pages as Base64-encoded image strings using the **exportAsImages()** method.

The following steps are used to exportAsImage.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) to create a simple PDF Viewer sample.

**Step 2:** The following code snippet to implement the functionality for exporting a specified page as a Base64-encoded image string or exporting a range of pages as Base64-encoded image strings.

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

### Export a single page with a custom size

Use the same API and pass a `Size` object to request a custom image size.

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

### Export a range of pages

Export a page range; the method returns an array of Base64-encoded image strings for the requested pages.

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

### Export a range of pages with a custom size

Pass a `Size` object when exporting a page range to control the output image dimensions.

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

Notes:

- Examples use `pageIndex` values starting at `1` as shown; confirm indexing for the viewer version in use.
- Keep code-blocks unchanged when copying samples; adjust variable names and method names to match application conventions (for example, use `exportAsImagesWithSize` for a range export if that naming improves clarity).
- For complete API details, consult the PDF Viewer documentation and API reference.