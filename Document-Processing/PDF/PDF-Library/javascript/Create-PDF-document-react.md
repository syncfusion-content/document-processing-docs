---
layout: post
title: Create or Generate PDF file in React | Syncfusion
description: Learn how to create a PDF file in React with easy steps using Syncfusion JavaScript PDF library without depending on Adobe
control: PDF
platform: document-processing
documentation: ug
keywords: javascript, pdf, script, react
---

# Create or Generate PDF file in React

The Syncfusion<sup>&reg;</sup> JavaScript PDF library is used to create, read, and edit PDF documents. This library also offers functionality to merge, split, stamp, fill forms, and secure PDF files.

This guide explains how to integrate the JavaScript PDF library into an React application.

## Installing Syncfusion<sup>&reg;</sup> JavaScript PDF package

All the available JS 2 packages are published in `npmjs.com` registry.

* To install PDF component, use the following command.

```bash
npm install @syncfusion/ej2-pdf --save
```
N> For data extraction features, you need to install the `@syncfusion/ej2-pdf-data-extract` package as an add-on.
* Copy the contents of the openjpeg folder from ./node_modules/@syncfusion/ej2-pdf-data-extract/dist to the public directory using the command:
```bash
cp -R ./node_modules/@syncfusion/ej2-pdf-data-extract/dist/openjpeg public/openjpeg
```
* Confirm that there is an 'openjpeg' directory within your public directory, if you extracting images from PDF.
* Validate that your server has been configured to utilize the Content-Type: application/wasm MIME type.

**Create a PDF document** : Add the script in `App.jsx` by creating a button and attaching a click event that uses the JavaScript PDF API to generate a PDF document.

{% tabs %}
{% highlight jsx tabtitle="~/App.jsx" %}
import React from 'react';

export default function App() {
  const createPdf = () => {
    // Create a new PDF document
    let pdf = new ej.pdf.PdfDocument();
    // Add a new page (fixed: use pdf.addPage instead of document.addPage)
    let page: ej.pdf.PdfPage = pdf.addPage();
    // Get graphics from the page
    let graphics: ej.pdf.PdfGraphics = page.graphics;
    // Set font
    let font: ej.pdf.PdfStandardFont = pdf.embedFont(ej.pdf.PdfFontFamily.helvetica, 36, ej.pdf.PdfFontStyle.regular);
    // Create a new black brush
    let brush = new ej.pdf.PdfBrush({ r: 0, g: 0, b: 0 });
    // Draw text
    graphics.drawString('Hello World!!!', font, { x: 20, y: 20, width: graphics.clientSize.width - 20, height: 60 }, brush);
    // Save and download PDF
    pdf.save('Output.pdf');
    // Destroy the PDF document instance
    pdf.destroy();
  };

  return (
    <div style={{ padding: '1.5rem' }}>
      <button id="normalButton" onClick={createPdf}>
        Create PDF document
      </button>
    </div>
  );
}
{% endhighlight %}
{% endtabs %}

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```
By executing the program, you will get the PDF document as follows.

![Output PDF document](Getting_started_images/Output.png)
