---
layout: post
title: Getting started with TypeScript PDF library | Syncfusion
description: Learn how to set up and use the Syncfusion TypeScript PDF library using the EJ2 quickstart, including local resource configuration and module injection.
platform: document-processing
control: PDF
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with TypeScript PDF library

This guide explains how to create the PDF library component and configure its features in TypeScript using the Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with a webpack configuration (`webpack.config.js`) and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires Node.js `v14.15.0` or higher. For more information, refer to the [webpack getting started guide](https://webpack.js.org/guides/getting-started/).

## Set up the development environment

Open a command prompt in the target directory and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart

{% endhighlight %}
{% endtabs %}

After cloning, run the following command to navigate to the `ej2-quickstart` folder.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart

{% endhighlight %}
{% endtabs %}

## Dependencies

The following list of dependencies are required to use the `EJ2 PDF library` component in your application.

```javascript
|-- @syncfusion/ej2-compression
|-- @syncfusion/ej2-base
```

## Add Syncfusion JavaScript packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. Install all EJ2 controls with the [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) meta package or install individual control packages.

The quickstart application is preconfigured with [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) in `~/package.json`. Use the following command to install dependencies:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Create a PDF document using TypeScript.

* Add a simple button to `index.html` and attach a click handler that uses the EJ2 PDF API to create a new PDF document.

{% tabs %}
{% highlight ts tabtitle="index.html" %}

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

* Include the following namespaces in `index.ts` file.

{% endhighlight %}
{% highlight html tabtitle="index.ts" %}

import { PdfDocument, PdfPage, PdfStandardFont, PdfPen, PdfBrush } from '@syncfusion/ej2-pdf';

{% endhighlight %}
{% endtabs %}

* Include the following code example in the click event of the button in `index.ts` to generate a PDF document 


{% endhighlight %}
{% highlight html tabtitle="index.ts" %}

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

* Run the application

The quickstart project is configured to compile and run in the browser. Use the following command to start the application:

```javascript
npm start
```

By executing the program, you will get the PDF document as follows.

![Output EJ2 PDF document](Getting_started_images/Output.png)

