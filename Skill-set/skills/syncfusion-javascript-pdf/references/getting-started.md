# Getting Started with Syncfusion JavaScript PDF Library

## Table of Contents

- [Installation](#installation)
- [Additional Package for Extraction Features](#additional-package-for-extraction-features)
- [Dependencies](#dependencies)
- [Platform-Specific Setup](#platform-specific-setup)
  - [TypeScript](#typescript)
  - [JavaScript](#javascript)
  - [Angular](#angular)
  - [React](#react)
  - [Vue](#vue)
  - [ASP.NET Core](#aspnet-core)
  - [ASP.NET MVC](#aspnet-mvc)
- [Basic Document Creation Workflow](#basic-document-creation-workflow)
- [Loading Existing PDF Documents](#loading-existing-pdf-documents)
- [Common Gotchas](#common-gotchas)
- [Next Steps](#next-steps)

This guide covers installation, setup, and basic usage of the Syncfusion JavaScript PDF library across different platforms.

## Installation

The Syncfusion JavaScript PDF library is published on npmjs.com. Install it using npm:

```bash
npm install @syncfusion/ej2-pdf --save
```

### Additional Package for Extraction Features

For image and text extraction features, install the add-on package:

```bash
npm install @syncfusion/ej2-pdf-data-extract --save
```

**Important:** Ensure your application includes an `ej2-pdf-lib` folder within a publicly accessible static directory (such as `wwwroot`, `public`, or `dist`). This folder must contain the required `.js` and `.wasm` files needed for image and data extraction. This setup is **not required** for basic PDF creation.

## Dependencies

The PDF library requires these Syncfusion packages:

```bash
@syncfusion/ej2-compression
@syncfusion/ej2-base
```

These are typically installed automatically as peer dependencies.

## Platform-Specific Setup

### TypeScript

**1. Create HTML file (index.html):**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>PDF Generation Example</title>
  </head>
  <body>
    <button id="createPdfButton">Create PDF Document</button>
  </body>
</html>
```

**2. Import namespaces (index.ts):**

```typescript
import { 
  PdfDocument, 
  PdfPage, 
  PdfGraphics, 
  PdfFont, 
  PdfFontFamily, 
  PdfFontStyle, 
  PdfBrush 
} from '@syncfusion/ej2-pdf';
```

**3. Implement PDF creation:**

```typescript
document.getElementById('createPdfButton').onclick = (): void => {
  // Create a new PDF document
  let document: PdfDocument = new PdfDocument();
  
  // Add a page
  let page: PdfPage = document.addPage();
  
  // Get graphics from the page
  let graphics: PdfGraphics = page.graphics;
  
  // Set font
  let font: PdfFont = document.embedFont(PdfFontFamily.helvetica, 36, PdfFontStyle.regular);
  
  // Create a brush
  let brush = new PdfBrush({r: 0, g: 0, b: 0});
  
  // Draw text
  graphics.drawString('Hello World!!!', font, {x: 20, y: 20, width: graphics.clientSize.width - 20, height: 60}, brush);
  
  // Save and download PDF
  document.save('output.pdf');
  
  // Clean up
  document.destroy();
};
```

**4. Run the application:**

```bash
npm start
```

### JavaScript

**1. Import namespaces:**

```javascript
// Using ES modules
const { PdfDocument, PdfFontFamily, PdfFontStyle, PdfBrush } = require('@syncfusion/ej2-pdf');
```

**2. Create PDF document:**

```javascript
document.getElementById('createPdfButton').onclick = function() {
  // Create document using ej.pdf namespace (if using CDN)
  var document = new ej.pdf.PdfDocument();
  
  // Or without namespace (if using ES modules)
  // var document = new PdfDocument();
  
  var page = document.addPage();
  var graphics = page.graphics;
  var font = document.embedFont(ej.pdf.PdfFontFamily.helvetica, 36, ej.pdf.PdfFontStyle.regular);
  var brush = new ej.pdf.PdfBrush({r: 0, g: 0, b: 0});
  
  graphics.drawString('Hello World!!!', font, {x: 20, y: 20, width: graphics.clientSize.width - 20, height: 60}, brush);
  
  document.save('output.pdf');
  document.destroy();
};
```

Before using the browser global objects in the example above, include the minified runtime scripts (CDN) in your HTML:

**Syntax:**
> Script: `https://cdn.syncfusion.com/ej2/{Version}/dist/{PACKAGE_NAME}.min.js`

**Placeholder:**
- Use required package `ej2-pdf` or `ej2-pdf-data-extract` as {PACKAGE_NAME} for the related PDF and data extract features.
- Use latest CDN package version of the package. For example, `33.1.44`.

### Angular

**1. Install package:**

```bash
npm install @syncfusion/ej2-pdf --save
```

**2. Create a component (app.component.ts):**

```typescript
import { Component } from '@angular/core';
import { PdfDocument, PdfPage, PdfGraphics, PdfFont, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

@Component({
  selector: 'app-root',
  template: `<button (click)="createPdf()">Create PDF</button>`
})
export class AppComponent {
  createPdf(): void {
    let document: PdfDocument = new PdfDocument();
    let page: PdfPage = document.addPage();
    let graphics: PdfGraphics = page.graphics;
    let font: PdfFont = document.embedFont(PdfFontFamily.helvetica, 36, PdfFontStyle.regular);
    let brush = new PdfBrush({r: 0, g: 0, b: 0});
    
    graphics.drawString('Hello World from Angular!', font, {x: 20, y: 20, width: 500, height: 60}, brush);
    
    document.save('angular-output.pdf');
    document.destroy();
  }
}
```

### React

**1. Install package:**

```bash
npm install @syncfusion/ej2-pdf --save
```

**2. Create component:**

```jsx
import React from 'react';
import { PdfDocument, PdfPage, PdfGraphics, PdfFont, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

function App() {
  const createPdf = () => {
    const document = new PdfDocument();
    const page = document.addPage();
    const graphics = page.graphics;
    const font = document.embedFont(PdfFontFamily.helvetica, 36, PdfFontStyle.regular);
    const brush = new PdfBrush({r: 0, g: 0, b: 0});
    
    graphics.drawString('Hello World from React!', font, {x: 20, y: 20, width: 500, height: 60}, brush);
    
    document.save('react-output.pdf');
    document.destroy();
  };

  return (
    <div>
      <button onClick={createPdf}>Create PDF</button>
    </div>
  );
}

export default App;
```

### Vue

**1. Install package:**

```bash
npm install @syncfusion/ej2-pdf --save
```

**2. Create component:**

```vue
<template>
  <div>
    <button @click="createPdf">Create PDF</button>
  </div>
</template>

<script>
import { PdfDocument, PdfPage, PdfGraphics, PdfFont, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

export default {
  methods: {
    createPdf() {
      const document = new PdfDocument();
      const page = document.addPage();
      const graphics = page.graphics;
      const font = document.embedFont(PdfFontFamily.helvetica, 36, PdfFontStyle.regular);
      const brush = new PdfBrush({r: 0, g: 0, b: 0});
      
      graphics.drawString('Hello World from Vue!', font, {x: 20, y: 20, width: 500, height: 60}, brush);
      
      document.save('vue-output.pdf');
      document.destroy();
    }
  }
}
</script>
```

### ASP.NET Core

**1. Create `Views/Home/Index.cshtml` with:**

```html
@{
    Layout = null;
}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>PDF Generation (JS) - ASP.NET Core</title>
  </head>
  <body>
    <button id="createPdfButton">Create PDF (Client-side)</button>
    <script>
    document.getElementById('createPdfButton').onclick = function() {
      var document = new ej.pdf.PdfDocument();
      var page = document.addPage();
      var graphics = page.graphics;
      var font = document.embedFont(ej.pdf.PdfFontFamily.helvetica, 36, ej.pdf.PdfFontStyle.regular);
      var brush = new ej.pdf.PdfBrush({r: 0, g: 0, b: 0});
      graphics.drawString('Hello World from ASP.NET Core (JS)!', font, {x:20,y:20,width:graphics.clientSize.width-20,height:60}, brush);
      document.save('aspnetcore-js-output.pdf');
      document.destroy();
    };
    </script>
  </body>
</html>
```

Before using the browser global objects in the example above, include the minified runtime scripts (CDN) in your HTML:

**Syntax:**
> Script: `https://cdn.syncfusion.com/ej2/{Version}/dist/{PACKAGE_NAME}.min.js`

**Placeholder:**
- Use required package `ej2-pdf` or `ej2-pdf-data-extract` as {PACKAGE_NAME} for the related PDF and data extract features.
- Use latest CDN package version of the package. For example, `33.1.44`.

### ASP.NET MVC

**1. Create `Views/Home/Index.cshtml` with:**

```html
@{
    Layout = null;
}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>PDF Generation (JS) - ASP.NET MVC</title>
  </head>
  <body>
    <button id="createPdfBtn">Create PDF (Client-side)</button>
    <script>
    document.getElementById('createPdfBtn').addEventListener('click', function() {
      var document = new ej.pdf.PdfDocument();
      var page = document.addPage();
      var graphics = page.graphics;
      var font = document.embedFont(ej.pdf.PdfFontFamily.helvetica, 28, ej.pdf.PdfFontStyle.regular);
      var brush = new ej.pdf.PdfBrush({r: 0, g: 0, b: 0});
      graphics.drawString('Hello World from ASP.NET MVC (JS)!', font, {x:10,y:10,width:graphics.clientSize.width-20,height:40}, brush);
      document.save('mvc-js-output.pdf');
      document.destroy();
    });
    </script>
  </body>
</html>
```

Before using the browser global objects in the example above, include the minified runtime scripts (CDN) in your HTML:

**Syntax:**
> Script: `https://cdn.syncfusion.com/ej2/{Version}/dist/{PACKAGE_NAME}.min.js`

**Placeholder:**
- Use required package `ej2-pdf` or `ej2-pdf-data-extract` as {PACKAGE_NAME} for the related PDF and data extract features.
- Use latest CDN package version of the package. For example, `33.1.44`.

## Basic Document Creation Workflow

### 1. Create Document

```typescript
let document: PdfDocument = new PdfDocument();
```

### 2. Add Pages

```typescript
// Add page with default settings (A4, Portrait)
let page: PdfPage = document.addPage();

// Or add with custom settings
let pageSettings: PdfPageSettings = new PdfPageSettings({
  orientation: PdfPageOrientation.landscape,
  size: { width: 842, height: 595 }
});
let customPage: PdfPage = document.addPage(pageSettings);
```

### 3. Get Graphics Surface

```typescript
let graphics: PdfGraphics = page.graphics;
```

### 4. Add Content

```typescript
// Embed font
let font: PdfFont = document.embedFont(PdfFontFamily.helvetica, 14, PdfFontStyle.regular);

// Create brush for color
let brush = new PdfBrush({r: 0, g: 0, b: 0});

// Draw text
graphics.drawString('Your text here', font, {x: 10, y: 10, width: 200, height: 30}, brush);
```

### 5. Save Document

```typescript
// Save and trigger browser download
document.save('output.pdf');
```

### 6. Clean Up

```typescript
// Free resources
document.destroy();
```

## Loading Existing PDF Documents

To modify or extract data from existing PDFs:

```typescript
// Assuming 'pdfData' is Uint8Array or base64 string
let existingDocument: PdfDocument = new PdfDocument(pdfData);

// Access pages
let firstPage: PdfPage = existingDocument.getPage(0);

// Modify or extract content
// ... operations ...

// Save modified document
existingDocument.save('modified.pdf');

// Clean up
existingDocument.destroy();
```

## Common Gotchas

1. **Always call `document.destroy()`** after saving to free memory
2. **Embed fonts before use** with `document.embedFont()`
3. **Default page settings** are A4 size, portrait orientation, 40-point margins
4. **Coordinates** start from top-left (0, 0)
5. **Browser downloads** are triggered automatically by `save()` method in client-side frameworks

## Next Steps

- **Document settings:** See [document-settings.md](document-settings.md) for page settings, document properties, and configuration
- **Adding text:** See [text-rendering.md](text-rendering.md) for font options and text formatting
- **Adding images:** See [images.md](images.md) for working with JPEG and PNG images
- **Interactive forms:** See [form-fields.md](form-fields.md) for creating fillable forms
- **Merging PDFs:** See [merge-documents.md](merge-documents.md) for combining documents
