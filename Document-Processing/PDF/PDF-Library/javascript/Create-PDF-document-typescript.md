---
layout: post
title: Create or Generate PDF file in TypeScript | Syncfusion
description: Learn how to create a PDF file in TypeScript with easy steps using Syncfusion TypeScript PDF library without depending on Adobe
platform: document-processing
control: PDF
documentation: ug
keywords: pdf, script, typescript
---

# Create or Generate PDF file in TypeScript

The Syncfusion<sup>&reg;</sup> TypeScript PDF library is used to create, read, and edit PDF documents. This library also offers functionality to merge, split, stamp, fill forms, and secure PDF files.

This guide explains how to integrate the TypeScript PDF library into an TypeScript application.

## Dependencies

The following list of dependencies are required to use the `TypeScript PDF library` component in your application.

```typescript
|-- @syncfusion/ej2-compression
|-- @syncfusion/ej2-base
```

## Create a PDF document using TypeScript.

* Add a simple button to `index.html` and attach a click handler that uses the TypeScript PDF API to create a new PDF document.

{% tabs %}
{% highlight html tabtitle="index.html" %}
<html>
  <head>
    <title>Button onclick Example</title>
  </head>
  <body>
    <button id="normalButton">Create PDF document</button>
  </body>
</html>
{% endhighlight %}
{% endtabs %}

N> For the TypeScript platform, place the **openjpeg** folder in the same location as your `index.html` file. Ensure that your application includes an `openjpeg` folder under `Scripts` (or any publicly accessible static path). This folder must contain the following:
*   `openjpeg.js`
*   `openjpeg.wasm`

Along with the PDF file from which you want to extract images. Keep these files in the same static content area as `ej2.min.js` to ensure proper loading.

* Include the following namespaces in `index.ts` file.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfDocument, PdfPage, PdfStandardFont, PdfFontFamily,  PdfPen, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';
{% endhighlight %}
{% endtabs %}

* Include the following code example in the click event of the button in `index.ts` to generate a PDF document 

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
document.getElementById('normalButton').onclick = (): void => {
// Create a new PDF document
        let pdf = new PdfDocument();
        // Add a new page
        let page: PdfPage = pdf.addPage();
        // Get graphics from the page
        let graphics: PdfGraphics = page.graphics;
        // Set font
        let font: PdfStandardFont = pdf.embedFont(PdfFontFamily.helvetica, 36, PdfFontStyle.regular);
        // Create a new black brush
        let brush = new PdfBrush({r: 0, g: 0, b: 0});
        // Draw text
        graphics.drawString('Hello World!!!', font, {x: 20, y: 20, width: graphics.clientSize.width - 20, height: 60}, brush);
        // Save and download PDF
        pdf.save('Output.pdf');
        // Destroy the PDF document instance
        pdf.destroy();
};
{% endhighlight %}
{% endtabs %}

* **Run the application**

The quickstart project is configured to compile and run in the browser. Use the following command to start the application:

```javascript
npm start
```

By executing the program, you will get the PDF document as follows.

![Output PDF document](Getting_started_images/Output.png)