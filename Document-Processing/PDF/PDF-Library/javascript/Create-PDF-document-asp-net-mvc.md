---
layout: post
title: Create or Generate PDF file in ASP.NET Core MVC | Syncfusion
description: Learn how to create a PDF file in ASP.NET Core MVC with easy steps using Syncfusion JavaScript PDF library without depending on Adobe
platform: document-processing
control: PDF
documentation: ug
keywords: MVC, javascript, pdf
---

# Create or Generate PDF file in ASP.NET Core MVC

The Syncfusion<sup>&reg;</sup> JavaScript PDF library is used to create, read, and edit PDF documents. This library also offers functionality to merge, split, stamp, fill forms, and secure PDF files.

This guide explains how to integrate the JavaScript PDF library into an ASP.NET Core MVC application.

## Integrate PDF library into an ASP.NET MVC Core application

Step 1: Start Visual Studio and select **Create a new project**.
Step 2: Create a new ASP.NET MVC Web Application project.
![ASP.NET Core MVC PDF creation1](Getting_started_images/Asp-net-mvc-creation1.png)
Step 3: Choose the target framework.
![ASP.NET Core MVC PDF creation2](Getting_started_images/Asp-net-mvc-creation2.png)
Step 4: Select Web Application pattern (MVC) for the project and then select **Create** button.
![ASP.NET Core MVC PDF creation3](Getting_started_images/Asp-net-mvc-creation3.png)

Step 5: **Add script reference**: Add the required scripts using the CDN inside the `<head>` of `~/Views/Shared/_Layout.cshtml` as follows:

{% tabs %}
{% highlight cshtml tabtitle="~/_Layout.cshtml" %}
<head>
    ...
    <!-- Syncfusion JavaScript PDF Library (CDN) -->
    <script src="https://cdn.syncfusion.com/ej2/31.2.15/dist/ej2.min.js"></script>
</head>
{% endhighlight %}
{% endtabs %}

N> Check out the following topics for including script references in an ASP.NET MVC application to enable PDF creation using the Syncfusion<sup>&reg;</sup> JavaScript PDF library:
*   [CDN](https://ej2.syncfusion.com/aspnetmvc/documentation/common/adding-script-references)
*   [NPM Package](https://ej2.syncfusion.com/aspnetmvc/documentation/common/adding-script-references#node-package-manager-npm)
*   [CRG](https://ej2.syncfusion.com/aspnetmvc/documentation/common/custom-resource-generator)
And ensure the application includes an `openjpeg` folder under `Scripts` (or a publicly accessible static path). This folder must contain the `openjpeg.js` and `openjpeg.wasm` files, along with the PDF file to extract images. Keep these in the same static content area as `ej2.min.js`.

Step 6: **Create a PDF document**: Add the script in `~/Views/Home/Index.cshtml` by creating a button and attaching a click event that uses the JavaScript PDF API to generate a PDF document.

{% tabs %}
{% highlight cshtml tabtitle="~/Index.cshtml" %}
<div class="container py-4">
    <h1 class="h4 mb-3">Create PDF document</h1>
    <p class="text-muted">Click the button to generate and download a PDF.</p>
    <button id="btnCreatePdf" class="btn btn-primary">Generate PDF document</button>
</div>
@section Scripts {
    <script>
         document.getElementById('btnCreatePdf').addEventListener('click', function () {
        // Create a new PDF document
        let pdf = new ej.pdf.PdfDocument();
        // Add a new page
        let page: ej.pdf.PdfPage = pdf.addPage();
        // Get graphics from the page
        let graphics: ej.pdf.PdfGraphics = page.graphics;
        // Set font
        let font: ej.pdf.PdfStandardFont = pdf.embedFont(ej.pdf.PdfFontFamily.helvetica, 36, ej.pdf.PdfFontStyle.regular);
        // Create a new black brush
        let brush = new ej.pdf.PdfBrush({r: 0, g: 0, b: 0});
        // Draw text
        graphics.drawString('Hello World!!!', font, {x: 20, y: 20, width: graphics.clientSize.width - 20, height: 60}, brush);
        // Save and download PDF
        pdf.save('output.pdf');
        // Destroy the PDF document instance
        pdf.destroy();
        });   
    </script>
}
{% endhighlight %}
{% endtabs %}

Step 7: **Build the project**: Click on Build > Build Solution or press Ctrl + Shift + B to build the project.

Step 8: **Run the project**: Click the Start button (green arrow) or press F5 to run the app.

When you run the application and click the button, it generates the following PDF document.

![ASP.NET Core MVC PDF output](Getting_started_images/Output.png)
