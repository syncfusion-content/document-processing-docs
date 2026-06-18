---
layout: post
title: Getting started with Standalone React PDF library component| Syncfusion
description: Learn here all about Getting started with React PDF librart component of Syncfusion Essential JS 2 and more details.
control: PDF
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React PDF library

The Syncfusion<sup>&reg;</sup> React PDF library is used to create, read, and edit PDF documents. This library also offers functionality to merge, split, stamp, fill forms, and secure PDF files.

This guide explains how to integrate the EJ2 PDF library component into an React application.

## Prerequisites

To get started with Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components, ensure the compatible version of React.
* React supported version >= `15.5.4+`.
* Required node version >= `14.0.0+`(NPM Package Manager).

## Setup for Local Development

To easily set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
To set-up a React application in TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```
To set-up a React application in JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

## Add script reference

* Add the required scripts using the CDN inside the `<head>` of `public/index.html` using the following code.

```
<head>
    ...
    <!-- Syncfusion EJ2 PDF Library (CDN) -->
    <script src="https://cdn.syncfusion.com/ej2/31.2.15/dist/ej2.min.js"></script>
</head>
```

**Create a PDF document** : Add the script in `App.jsx` by creating a button and attaching a click event that uses the EJ2 PDF API to generate a PDF document.

{% tabs %}
{% highlight c# tabtitle="~/App.jsx" %}

import React from 'react';

export default function App() {
  const createPdf = () => {
    // Create a new PDF document
    const pdf = new window.ej.pdf.PdfDocument();
    // Add a new page
    const page = pdf.addPage();
    // Get graphics
    const graphics = page.graphics;
    // Font, brush, pen (using global ej.pdf)
    const font = new window.ej.pdf.PdfStandardFont(window.ej.pdf.PdfFontFamily.helvetica, 10);
    const brush = new window.ej.pdf.PdfBrush([0, 0, 0]);
    const pen = new window.ej.pdf.PdfPen([255, 0, 0], 1);
    // Draw text
    graphics.drawString('Hello World!!!', font, [70, 10, 200, 50], null, brush, pen);
    // Save the pdf document
    pdf.save('Output.pdf');

    // Dispose
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

![Output EJ2 PDF document](Getting_started_images/Output.png)
