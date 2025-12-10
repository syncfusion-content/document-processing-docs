---
layout: post
title: Getting started with Angular PDF library component | Syncfusion
description: Learn how to create a PDF file in Angular with easy steps using Syncfusion .NET Core PDF library without depending on Adobe.
platform: document-processing
control: PDF
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular PDF library

The Syncfusion<sup>&reg;</sup> Angular PDF library is used to create, read, and edit PDF documents. This library also offers functionality to merge, split, stamp, fill forms, and secure PDF files.

This guide explains how to integrate the EJ2 PDF library component into an Angular application.

N> For Angular 17+, see the following links:

* [Create a Standalone PDF Viewer in Angular 17 and above with-no-standalone-flag](./how-to/create-a-standalone-pdf-viewer-in-angular-17-and-above-with-no-standalone-flag).
* [Create a Standalone PDF Viewer in Angular 17 and above without --no-standalone flag](./how-to/create-a-standalone-pdf-viewer-in-angular-17-and-above-without-no-standalone-flag).

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
## Create a PDF document using TypeScript.

* Add a simple button to `main.ts` and attach a click handler that uses the EJ2 PDF API to create a new PDF document.

{% tabs %}
{% highlight ts tabtitle="main.ts" %}

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

* Include the following namespaces in `app.component.ts` file.

{% endhighlight %}
{% highlight html tabtitle="app.component.ts" %}
import { NgModule } from '@angular/core';
import { PdfDocument, PdfPage, PdfStandardFont, PdfPen, PdfBrush } from '@syncfusion/ej2-pdf';

{% endhighlight %}
{% endtabs %}

* Include the following code example in the click event of the button in `app.component.ts` to generate a PDF document. 

{% endhighlight %}
{% highlight html tabtitle="app.component.ts" %}

document.getElementById('normalButton').onclick = (): void => {
        // Create a new PDF document
        var pdf = new PdfDocument();
        // Add a new page
        var page = pdf.addPage();
        // Get graphics from the page
        let graphics = page.graphics;
        // Set font
        font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 10);
        // Draw text
        graphics.drawString('Hello World!!!', font, [70, 10, 200, 50], new PdfPen([255, 0, 0], 1), new PdfBrush([0, 0, 0]));
        // Save and download PDF
        pdf.save('Output.pdf');
        // Destroy the PDF document instance
        pdf.destroy();
        });   
};

{% endhighlight %}
{% endtabs %}

## Run the application

Use the following command to run the application in browser.

```javascript
ng serve --open
```

By executing the program, you will get the PDF document as follows.

![Output EJ2 PDF document](Getting_started_images/Output.png)


