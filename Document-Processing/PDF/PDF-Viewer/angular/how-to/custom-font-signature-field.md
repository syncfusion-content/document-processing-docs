---
layout: post
title: How to Change the Font for Type Signatures in Angular | Syncfusion
description: Change the font family for type signatures and initials in the Angular PDF Viewer using typeSignatureFonts and typeInitialFonts properties.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---


# How to Change the Font for Type Signatures in Angular PDF Viewer
Change the font family in the type signature of the PDF Viewer by adding a custom CSS stylesheet to the document and applying the desired font family to the type signature element. Include the Google Fonts link in the HTML head section to apply the font.

### Signature Field

The following steps are used to include custom fonts for signature and initial field using `typeSignatureFonts` property.

**Step 1:** Follow the steps in the [Getting Started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) guide to create a simple PDF Viewer sample.

**Step 2:** Insert the following code snippet to implement the functionality for using custom fonts in the signature field.

```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Allura" >
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sacramento">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inspiration">
```

```ts
changeFontFamily(){
	var pdfviewer=(<any>document.getElementById('pdfviewer')).ej2_instances[0];
	pdfviewer.signatureFieldSettings.typeSignatureFonts = [
      'Allura',
      'Tangerine',
      'Sacramento',
      'Inspiration',
    ];
   }

```
### Initial Field

Insert the following code snippet to implement the functionality for using custom fonts in the initial field.

```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Allura" >
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sacramento">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inspiration">
```

```ts
changeFontFamily(){
	var pdfviewer=(<any>document.getElementById('pdfviewer')).ej2_instances[0];
	pdfviewer.initialFieldSettings.typeInitialFonts = [
      'Allura',
      'Tangerine',
      'Sacramento',
      'Inspiration',
    ];
   }
```

Implementing this enables the use of custom fonts in form-field signature and initial fields.