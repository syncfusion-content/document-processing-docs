---
layout: post
title: Getting started with JavaScript PDF library control | Syncfusion
description: Learn how to create a PDF file in JavaScript with easy steps using Syncfusion .NET Core PDF library without depending on Adobe.
platform: document-processing
control: PDF
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in JavaScript PDF Library

The Essential JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Component Initialization with CDN link for script and style reference

**Step 1:** Create an app folder `my-app` for the Essential JS 2 JavaScript components.

**Step 2:** The Essential JS 2 component's global scripts and styles are already hosted in the below CDN link formats.

**Syntax:**
> Script: `https://cdn.syncfusion.com/ej2/{Version}/dist/{PACKAGE_NAME}.min.js`
>
> Styles: `https://cdn.syncfusion.com/ej2/{Version}/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/31.2.15/dist/ej2.min.js`](https://cdn.syncfusion.com/ej2/31.2.15/dist/ej2.min.js)
>
> Styles: [`https://cdn.syncfusion.com/ej2/31.2.15/ej2-base/styles/material.css`](https://cdn.syncfusion.com/ej2/31.2.15/ej2-base/styles/material.css)

**Step 3:** Create a HTML page (index.html) in `my-app` location and add the CDN link references.

{% tabs %}
{% highlight ts tabtitle="index.html" %}

<head>
    ...
    <!-- Syncfusion EJ2 PDF Library (CDN) -->
    <script src="https://cdn.syncfusion.com/ej2/31.2.15/dist/ej2.min.js"></script>
</head>

{% endhighlight %}
{% endtabs %}

**Step 4:** **Create a PDF document** : Add the script in `index.html` by creating a button and attaching a click event that uses the EJ2 PDF API to generate a PDF document.

{% tabs %}
{% highlight c# tabtitle="~/Index.html" %}

<div class="container py-4">
    <h1 class="h4 mb-3">Create PDF document</h1>
    <p class="text-muted">Click the button to generate and download a PDF.</p>
    <button id="btnCreatePdf" class="btn btn-primary">Generate PDF</button>
</div>

@section Scripts {
    <script>
        document.getElementById('btnCreatePdf').addEventListener('click', function () {
        // Create a new PDF document
        var pdf = new ej.pdf.PdfDocument();
        // Add a new page
        var page = pdf.addPage();
        // Get graphics from the page
        let graphics = page.graphics;
        // Set font
        font: PdfStandardFont = new ej.pdf.PdfStandardFont(PdfFontFamily.helvetica, 10);
        // Draw text
        graphics.drawString('Hello World!!!', font, [70, 10, 200, 50], new ej.pdf.PdfPen([255, 0, 0], 1), new ej.pdf.PdfBrush([0, 0, 0]));
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

![Output EJ2 PDF document](Getting_started_images/Output.png)

