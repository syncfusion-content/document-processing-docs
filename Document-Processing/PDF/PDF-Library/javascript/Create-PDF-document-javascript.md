---
layout: post
title: Create or Generate PDF file in JavaScript | Syncfusion
description: Learn how to create a PDF file in JavaScript with easy steps using Syncfusion JavaScript PDF library without depending on Adobe
platform: document-processing
control: PDF
documentation: ug
keywords: javascript, pdf, script
---

# Create or Generate PDF file in JavaScript

The Syncfusion<sup>&reg;</sup> JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Component Initialization with CDN link for script and style reference

Step 1: Create an app folder `my-app` for the JS 2 JavaScript components.

Step 2: The JS 2 component's global scripts and styles are already hosted in the below CDN link formats.

**Syntax:**
> Script: `https://cdn.syncfusion.com/ej2/{Version}/dist/{PACKAGE_NAME}.min.js`
>
> Styles: `https://cdn.syncfusion.com/ej2/{Version}/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/31.2.15/dist/ej2.min.js`](https://cdn.syncfusion.com/ej2/31.2.15/dist/ej2.min.js)
>
> Styles: [`https://cdn.syncfusion.com/ej2/31.2.15/ej2-base/styles/material.css`](https://cdn.syncfusion.com/ej2/31.2.15/ej2-base/styles/material.css)

Step 3: Create a HTML page (index.html) in `my-app` location and add the CDN link references.

{% tabs %}
{% highlight html tabtitle="index.html" %}
<head>
    <!-- Syncfusion JavaScript PDF Library (CDN) -->
    <script src="https://cdn.syncfusion.com/ej2/31.2.15/dist/ej2.min.js"></script>
</head>
{% endhighlight %}
{% endtabs %}

Step 4: **Create a PDF document** : Add the script in `index.html` by creating a button and attaching a click event that uses the JavaScript PDF API to generate a PDF document.

{% tabs %}
{% highlight html tabtitle="~/Index.html" %}
<div class="container py-4">
    <h1 class="h4 mb-3">Create PDF document</h1>
    <p class="text-muted">Click the button to generate and download a PDF.</p>
    <button id="btnCreatePdf" class="btn btn-primary">Generate PDF document</button>
</div>
@section Scripts {
     <script>
         document.getElementById('btnCreatePdf').addEventListener('click', function () {
        // Create a new PDF document
        var pdf = new ej.pdf.PdfDocument();
        // Add a new page
        var page = document.addPage();
        // Get graphics from the page
        var graphics = page.graphics;
        // Set font
        var font = pdf.embedFont(ej.pdf.PdfFontFamily.helvetica, 36, ej.pdf.PdfFontStyle.regular);
        // Create a new black brush
        var brush = new ej.pdf.PdfBrush({r: 0, g: 0, b: 0});
        // Draw text
        graphics.drawString('Hello World!!!', font, {x: 20, y: 20, width: graphics.clientSize.width - 20, height: 60}, brush);
        // Save and download PDF
        pdf.save('Output.pdf');
        // Destroy the PDF document instance
        pdf.destroy();
        });   
    </script>
}

{% endhighlight %}
{% endtabs %}

By executing the program, you will get the PDF document as follows.

![Output PDF document](Getting_started_images/Output.png)