---
Layout: post
title: Change the Font Family in Angular PDF Viewer component | Syncfusion
description: Learn how to change the font family in the type signature in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Change the Font Family in the Type Signature
documentation: ug
domainurl: ##DomainURL##
---

# How to Change the Font Family in the Type Signature

Use the PDF Viewer's [handWrittenSignatureSettings.typeSignatureFonts](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/handwrittensignaturesettings#typesignaturefonts) property to supply an array of font-family names that the Type Signature control can use. Ensure fonts are loaded before applying them to the viewer (for example, call `changeFontFamily()` after the viewer instance is available, such as in `ngAfterViewInit` or after the component finishes initializing).
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

Find the sample [how to Change the Font Family in the Type Signature](https://stackblitz.com/edit/angular-51hahr-5fnsc9?file=app.component.ts)