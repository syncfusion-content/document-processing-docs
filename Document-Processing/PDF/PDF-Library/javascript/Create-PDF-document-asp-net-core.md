---
layout: post
title: Create or Generate PDF in ASP.NET Core | Syncfusion
description: Learn how to create or generate a PDF file in ASP.NET Core applications with easy steps using Syncfusion JavaScript PDF library without depending on Adobe.
platform: document-processing
control: PDF
documentation: ug
keywords: .net core create pdf, edit pdf, merge, pdf form, fill form, digital sign, table, javascript, dotnet core pdf, asp generate pdf, aspx generate pdf
---

# Create or Generate PDF in ASP.NET Core

The Syncfusion<sup>&reg;</sup> JavaScript PDF library is used to create, read, and edit PDF documents. This library also offers functionality to merge, split, stamp, forms, and secure PDF files.

This guide explains how to integrate the JavaScript PDF library into an ASP.NET Core application.

## Integrate PDF library into an ASP.NET Core application

Step 1: Start Visual Studio and select **Create a new project**.
Step 2: In the **Create a new project** dialog, select **ASP.NET Core Web App**.
![ASP.NET Core PDF creation1](Getting_started_images/Asp-net-core-creation1.png)
Step 3: In the **Configure your new project** dialog, enter the project name and select **Next**.
![ASP.NET Core PDF creation2](Getting_started_images/Asp-net-core-creation2.png)
Step 4: In the **Additional information** dialog, select a .NET LTS version (for example, **.NET 8.0 (Long-term Support)**) and then select **Create**.
![ASP.NET Core PDF creation3](Getting_started_images/Asp-net-core-creation3.png)

Step 5: **Add script reference** : Add the required scripts using the CDN inside the `<head>` of `~/Views/Shared/_Layout.cshtml` as follows:

{% tabs %}
{% highlight cshtml tabtitle="~/_Layout.cshtml" %}
<head>
    <!-- Syncfusion JavaScript PDF Library (CDN) -->
    <script src="https://cdn.syncfusion.com/ej2/31.2.15/dist/ej2.min.js"></script>
</head>
{% endhighlight %}
{% endtabs %}
 
Step 6: **Create a PDF document** : Add the script in `~/Views/Home/Index.cshtml` by creating a button and attaching a click event that uses the JavaScript PDF API to generate a PDF document.

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
        });   
    </script>
}
{% endhighlight %}
{% endtabs %}

step 7: **Build the project** : Click on Build > Build Solution or press Ctrl + Shift + B to build the project.

Step 8: **Run the project** : Click the Start button (green arrow) or press F5 to run the app.

By executing the program, you will generate the following PDF document.

![ASP.NET Core PDF output](Getting_started_images/Output.png)