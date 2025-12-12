---
layout: post
title: Create or Generate PDF file in Angular | Syncfusion
description: Learn how to create a PDF file in Angular with easy steps using Syncfusion JavaScript PDF library without depending on Adobe
platform: document-processing
control: PDF
documentation: ug
keywords: angular create pdf, angular generate pdf, angular pdf library, ej2 pdf angular, JavaScript
---

# Create or Generate PDF file in Angular application

The Syncfusion<sup>&reg;</sup> JavaScript PDF library is used to create, read, and edit PDF documents. This library also offers functionality to merge, split, stamp, fill forms, and secure PDF files.

This guide explains how to integrate the JavaScript PDF library into an Angular application.

## Setup Angular Environment

You can use the [`Angular CLI`](https://github.com/angular/angular-cli) to setup your Angular applications.
To install the latest Angular CLI globally use the following command.

```bash
npm install -g @angular/cli
```

N> Use the command **npm install --save @angular/cli@12.0.2** to install the Angular CLI version 12.0.2

## Create an Angular Application

Start a new Angular application using the Angular CLI command as follows.

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion<sup>&reg;</sup> JavaScript PDF package

All the available JS 2 packages are published in `npmjs.com` registry.

* To install PDF component, use the following command.

```bash
npm install @syncfusion/ej2-pdf --save
```
N> For data extraction features, you need to install the `@syncfusion/ej2-pdf-data-extract` package as an add-on.

## Create a PDF document using TypeScript

* Add a simple button to `app.component.html` and attach a click handler that uses the TypeScript PDF API to create a new PDF document.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
<html>
  <head>
    <title>PDF creation example</title>
  </head>
  <body>
    <button id="normalButton">Create PDF document</button>
  </body>
</html>
{% endhighlight %}
{% endtabs %}

* Include the following namespaces in `app.component.ts` file.

{% tabs %}
{% highlight ts tabtitle="~/app.component.ts" %}
import { PdfDocument, PdfPage, PdfStandardFont, PdfPen, PdfBrush } from '@syncfusion/ej2-pdf';
{% endhighlight %}
{% endtabs %}

* Include the following code example in the click event of the button in `app.component.ts` to generate a PDF document. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
document.getElementById('normalButton').onclick = (): void => {
    // Create a new PDF document
    const document = new PdfDocument();
    // Add a new page
    const page: PdfPage = document.addPage();
    // Get graphics from the page
    const graphics: PdfGraphics = page.graphics;
    // Set font
    const font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 36, PdfFontStyle.regular);
    // Create a new black brush
    const brush = new PdfBrush({r: 0, g: 0, b: 0});
    // Draw text
    graphics.drawString('Hello World!!!', font, {x: 20, y: 20, width: graphics.clientSize.width - 20, height: 60}, brush);
    // Save and download PDF
    document.save('Output.pdf');
    // Destroy the PDF document instance
    document.destroy();
};
{% endhighlight %}
{% endtabs %}

## Run the application

Use the following command to run the application in browser.

```javascript
ng serve --open
```

By executing the program, you will get the PDF document as follows.

![Output PDF document](Getting_started_images/Output.png)