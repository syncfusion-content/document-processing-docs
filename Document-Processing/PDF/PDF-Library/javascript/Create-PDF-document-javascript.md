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

Syncfusion<sup>&reg;</sup> JS 2 (global script) is an ES5-formatted JavaScript library that works directly in modern web browsers.

## Component initialization with CDN links

Step 1: Create a folder named `my-app` for your project.

Step 2: The JS 2 global scripts and styles are hosted on the CDN in the following formats.

**Syntax:**
> Script: `https://cdn.syncfusion.com/ej2/{Version}/dist/{PACKAGE_NAME}.min.js`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/31.2.15/dist/ej2.min.js`](https://cdn.syncfusion.com/ej2/31.2.15/dist/ej2.min.js)

Step 3: Create a HTML page (index.html) in `my-app` location and add the CDN link references.

{% tabs %}
{% highlight javascript tabtitle="index.html" %}
<head>
    <!-- Syncfusion JavaScript PDF Library (CDN) -->
    <script src="https://cdn.syncfusion.com/ej2/31.2.15/dist/ej2.min.js"></script>
</head>
{% endhighlight %}
{% endtabs %}

N> For image/data extraction features, install and deploy the openjpeg runtime. Place an openjpeg folder alongside your index.html (or any publicly accessible static path) containing:
*   `openjpeg.js`
*   `openjpeg.wasm`
Ensure your server serves .wasm files with the Content-Type: application/wasm MIME type. This is not required for basic PDF creation.

Step 4: **Create a PDF document**: Add the script in `index.html` by creating a button and attaching a click event that uses the JavaScript PDF API to generate a PDF document.

{% tabs %}
{% highlight javascript tabtitle="index.html" %}
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
        var page = pdf.addPage();
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