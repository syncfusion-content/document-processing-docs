---
layout: post
title: Getting started with JavaScript PDF Viewer control | Syncfusion
description:  Checkout and learn about Getting started with JavaScript PDF Viewer control of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Standalone JavaScript PDF Viewer

This guide explains how to create and run a **JavaScript (ES5) PDF Viewer** application using Syncfusion Essential JS 2 in **standalone mode**.

> **Note:** Standalone mode renders PDF files directly in the browser without requiring a server-side web service. Essential JS 2 for JavaScript provides an ES5-compatible global script build that works in modern browsers without a build step.

## Setup the development environment

This example uses a simple HTML-based setup with CDN links for Syncfusion components.

### Create application folder

Create an app folder `my-app` for the Essential JS 2 JavaScript components.

### Add style and script references

The Essential JS 2 component's global scripts and styles are hosted at the following CDN link formats.

**Syntax:**
> Script: `https://cdn.syncfusion.com/ej2/{Version}/dist/{PACKAGE_NAME}.min.js`
>
> Styles: `https://cdn.syncfusion.com/ej2/{Version}/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/dist/ej2.min.js`](https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/dist/ej2.min.js)
>
> Styles: [`https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-base/styles/material.css`](https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-base/styles/material.css)

Create an HTML page (index.html) in `my-app` location and add the CDN link references.

{% tabs %}
{% highlight html tabtitle="index.html" hl_lines="8 9 10 11 12 13 14 15 16 17 19" %}

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Typescript PDF Viewer Control">
    <meta name="author" content="Syncfusion">
    <link href="index.css" rel="stylesheet">
    <link href="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-base/styles/material.css" rel="stylesheet">    
    <link href="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-buttons/styles/material.css" rel="stylesheet">
    <link href="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-popups/styles/material.css" rel="stylesheet">
    <link href="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-navigations/styles/material.css" rel="stylesheet">
    <link href="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-dropdowns/styles/material.css" rel="stylesheet">
    <link href="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-lists/styles/material.css" rel="stylesheet">
    <link href="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-inputs/styles/material.css" rel="stylesheet">    
    <link href="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-splitbuttons/styles/material.css" rel="stylesheet">
    <link href="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-notifications/styles/material.css" rel="stylesheet">
    <link href="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-pdfviewer/styles/material.css" rel="stylesheet">
    <!-- Essential JS 2 PDF Viewer's script --> 
    <script src="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/dist/ej2.min.js" type="text/javascript"></script>
</head>

{% endhighlight %}
{% endtabs %}

## Adding the PDF Viewer component

Add the `Div` element and initiate the **PDF Viewer** component in the index.html by using the following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<body>
    
    <div id="container">
        <div id="PdfViewer" style="height:500px;width:100%;"></div>        
    </div>

    <script>
        // Initialize PDF Viewer component
        var pdfviewer = new ej.pdfviewer.PdfViewer({
            documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
            resourceUrl:'https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/dist/ej2-pdfviewer-lib'
        });
        // PDF Viewer control rendering starts
        pdfviewer.appendTo('#PdfViewer');
    </script>
</body>

{% endhighlight %}
{% endtabs %}

To configure PDF Viewer with local resources for script and style referernces, and the `documentPath` and `resourceUrl` properties, refer to the [instructions](./how-to/use-local-script-and-style-references) here.

## Run the application

Run the `index.html` in a web browser using a local web server. The PDF document will be rendered in the browser.

```bash
npx serve .
```

{% previewsample "/document-processing/code-snippet/pdfviewer/javascript-es5/es5-getting-started-cs2" %}

## See also

- [Getting started with Server-Backed JavaScript PDF Viewer](./getting-started)
- [Feature modules](./feature-module)