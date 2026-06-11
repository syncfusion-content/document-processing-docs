---
Layout: post
title: To change the font family in Syncfusion Angular PDF Viewer component
description: Learn how to change the font family in Form Field's Type Signature in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---


# To Change the Font Family
Change the font family in the type signature of the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer by adding a custom CSS stylesheet to the document and applying the desired font family to the type signature element. Include the Google Fonts link in the HTML head section to apply the font.

### Signature Field

The following steps are used to include custom fonts for signature and initial field using `typeSignatureFonts` property.

**Step 1:** Follow the steps in the [Getting Started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) guide to create a simple PDF Viewer sample.

**Step 2:** Insert the following code snippet to implement the functionality for using custom fonts in Signature field.

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
### Initial Field
Insert the following code snippet to implement the functionality for using custom fonts in Initial field.

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

Implementing this enables use of custom fonts in form-field signature and initial fields.