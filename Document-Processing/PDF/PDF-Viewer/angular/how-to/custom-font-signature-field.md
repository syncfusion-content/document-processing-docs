---
Layout: post
title: Change Font Family in Angular PDF Viewer component | Syncfusion
description: Learn how to change the font family in form field type signatures in the Syncfusion Angular PDF Viewer component of Essential JS 2.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---


# Change the font family

Change the font family in a type signature of the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer by adding a custom CSS stylesheet to the document. Then, apply the desired font family to the type signature element. Include the Google font link in the HTML head section to apply the Google Font.

### Signature field

Use the following steps to include custom fonts for the signature and initial fields using the `typeSignatureFonts` property.

**Step 1:** Create a simple PDF Viewer sample by following the steps in this [guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started).

**Step 2:** Insert the following code snippet to implement the functionality for using custom fonts in the signature field:

```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Allura" >
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sacramento">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inspiration">
```

```ts
changeFontFamily(){
	var pdfviewer=(<any>document.getElementById('pdfviewer')).ej2_instances[0];
	pdfviewer.SignatureFieldSettings.typeSignatureFonts = [
      'Allura',
      'Tangerine',
      'Sacramento',
      'Inspiration',
    ];
   }

```
### Initial field
Insert the following code snippet to implement the functionality for using custom fonts in the initial field:

```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Allura" >
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sacramento">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inspiration">
```

```ts
changeFontFamily(){
	var pdfviewer=(<any>document.getElementById('pdfviewer')).ej2_instances[0];
	pdfviewer.InitialFieldSettings.typeInitialFonts = [
      'Allura',
      'Tangerine',
      'Sacramento',
      'Inspiration',
    ];
   }
```

By implementing this, custom fonts can be used in a form field's signature in both the `signature` and `initial` fields.
