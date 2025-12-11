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

## Add script reference

* Add the required scripts using the CDN inside the `<head>` of `public/index.html` using the following code.

```
<head>
    ...
    <!-- Syncfusion JavaScript PDF Library (CDN) -->
    <script src="https://cdn.syncfusion.com/ej2/31.2.15/dist/ej2.min.js"></script>
</head>
```

**Create a PDF document** : Add the script in `App.jsx` by creating a button and attaching a click event that uses the JavaScript PDF API to generate a PDF document.

{% tabs %}
{% highlight c# tabtitle="~/App.jsx" %}

import React from 'react';

export default function App() {
  const createPdf = () => {
        // Create a new PDF document
        let pdf = new ej.pdf.PdfDocument();
        // Add a new page
        let page: ej.pdf.PdfPage = document.addPage();
        // Get graphics from the page
        let graphics: ej.pdf.PdfGraphics = page.graphics;
        // Set font
        let font: ej.pdf.PdfStandardFont = pdf.embedFont(ej.pdf.PdfFontFamily.helvetica, 36, ej.pdf.PdfFontStyle.regular);
        // Create a new black brush
        let brush = new ej.pdf.PdfBrush({r: 0, g: 0, b: 0});
        // Draw text
        graphics.drawString('Hello World!!!', font, {x: 20, y: 20, width: graphics.clientSize.width - 20, height: 60}, brush);
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
