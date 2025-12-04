---
layout: post
title: Getting started with ASP.NET MVC PDF library | Syncfusion
description: Learn how to create a PDF file in ASP.NET Core MVC with easy steps using Syncfusion .NET Core PDF library without depending on Adobe.
platform: document-processing
control: PDF
documentation: ug
---

# Getting Started with ASP.NET MVC PDF library

The Syncfusion<sup>&reg;</sup> .NET Core PDF library is used to create, read, and edit PDF documents. This library also offers functionality to merge, split, stamp, fill forms, and secure PDF files.

This guide explains how to integrate the EJ2 PDF library control into an ASP.NET Core MVC application using Visual Studio.

## Prerequisites

[System requirements for ASP.NET MVC controls](https://help.syncfusion.com/document-processing/system-requirements)

## Integrate PDF Viewer into an ASP.NET MVC application

1. Start Visual Studio and select **Create a new project**.
2. Create a new ASP.NET MVC Web Application project.
![ASP.NET Core MVC PDF creation1](Getting_started_images/Asp-net-mvc-creation1.png)
3. Choose the target framework.
![ASP.NET Core MVC PDF creation2](Getting_started_images/Asp-net-mvc-creation2.png)
4. Select Web Application pattern (MVC) for the project and then select **Create** button.
![ASP.NET Core MVC PDF creation3](Getting_started_images/Asp-net-mvc-creation3.png)

5. **Add script reference** : Add the required scripts using the CDN inside the `<head>` of `~/Views/Shared/_Layout.cshtml` as follows:

{% tabs %}
{% highlight c# tabtitle="~/_Layout.cshtml" %}

<head>
    ...
    <!-- Syncfusion EJ2 PDF Library (CDN) -->
    <script src="https://cdn.syncfusion.com/ej2/31.2.15/dist/ej2.min.js"></script>
</head>

{% endhighlight %}
{% endtabs %}
 
6. **Create a PDF document** : Add the script in `~/Views/Home/Index.cshtml` by creating a button and attaching a click event that uses the EJ2 PDF API to generate a PDF document.

{% tabs %}
{% highlight c# tabtitle="~/Index.cshtml" %}

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

7. **Build the project** : Click on Build > Build Solution or press Ctrl + Shift + B to build the project.

8. **Run the project** : Click the Start button (green arrow) or press F5 to run the app.

By executing the program, you will generate the following PDF document.

![ASP.NET Core MVC PDF output](Getting_started_images/Output.png)
