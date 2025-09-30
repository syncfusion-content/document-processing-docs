---
Layout: post
title: Change the Font Family in Angular PDF Viewer component | Syncfusion
description: Learn how to change the font family in the type signature in the Syncfusion Angular PDF Viewer component of Essential JS 2.
platform: document-processing
control: Change the Font Family in the Type Signature
documentation: ug
domainurl: ##DomainURL##
---

# How to change the font family in the type signature

Change the font family in the type signature of the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer by adding a custom CSS stylesheet to the document, and then apply the desired font family to the type signature element. Include the Google Font link in the HTML head section to apply the Google Font.

Use the [handWrittenSignatureSettings](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/handWrittenSignatureSettings/) property of the PDF Viewer component and modify the `fontFamily` property.

```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Allura" >
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sacramento">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inspiration">
```

```ts

 changeFontFamily() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    pdfviewer.handWrittenSignatureSettings.typeSignatureFonts = [
      'Allura',
      'Tangerine',
      'Sacramento',
      'Inspiration',
    ];
  }

```

Find the sample [how to change the font family in the type signature](https://stackblitz.com/edit/angular-51hahr-5fnsc9?file=app.component.ts)
