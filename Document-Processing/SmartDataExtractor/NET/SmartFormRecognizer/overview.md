---
title:Smart Form Recognizer| Syncfusion&reg;
description: Learn how to detects form data from PDFs and scanned images using Syncfusion&reg; Essential Studio&reg; SmartFormRecognizer.
platform: document-processing
control: SmartFormRecognizer
documentation: UG
keywords: Assemblies
---

# Smart Form Recognizer

Smart Form Recognizer is a deterministic, on‑premise C# library for .NET designed to reliably detect and extract form data from PDFs and scanned images. Unlike AI/ML‑based approaches, this library uses visual layout heuristics—including lines, boxes, and circular markers—to identify form structures with high consistency and predictability. It supports extraction of common form controls such as text fields, checkboxes, radio buttons, and signature regions, producing clean, structured JSON that can be fed directly into review and workflow systems.

In addition to extraction, the library can also generate fillable PDFs, automatically placing form fields where they were detected, enabling instant integration into digital form processing pipelines.

Core Capabilities

*Form layout detection: Locate form regions using graphical heuristics (lines, boxes, circles) for consistent field discovery. 

*Fillable PDF export: Create a PDF with detected form fields added so documents are immediately usable in form workflows. 

*Page-level control: Process specific pages or page ranges for targeted extraction. 

*Multi-format support: Works with PDF, JPEG, PNG and other common image formats. 

*Confidence filtering: Per-field confidence scores with configurable thresholds to control output quality and drive review logic. 

*Ready for .NET integration: Deterministic, onpremise library that outputs JSON and integrates into existing .NET pipelines and review UIs. 


<b>NuGet</b>

<table>
<tr>
<thead>
<th><b>Platform(s)</b></th>
<th><b>NuGet Package</b></th>
</thead>
</tr>
<tr>
<td>
Windows Forms
</td>
<td>
{{'[Syncfusion.SmartFormRecognizer.WinForms.nupkg](https://www.nuget.org/packages/Syncfusion.SmartFormRecognizer.WinForms/)'| markdownify }}
</td>
</tr>
<tr>
<td>
WPF
</td>
<td>
{{'[Syncfusion.SmartFormRecognizer.WPF.nupkg](https://www.nuget.org/packages/Syncfusion.SmartFormRecognizer.WPF/)'| markdownify }}
</td>
</tr>
<tr>
<td rowspan="2">Blazor, .NET Core and .NET Platforms</td>
<td>
{{'[Syncfusion.SmartFormRecognizer.NET.nupkg](https://www.nuget.org/packages/Syncfusion.SmartFormRecognizer.Net/)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[Syncfusion.SmartFormRecognizer.Net.Core.nupkg](https://www.nuget.org/packages/Syncfusion.SmartFormRecognizer.Net.Core/)'| markdownify }}
</td>
</tr>
<tr>
<td>
ASP.NET MVC5
</td>
<td>
{{'[Syncfusion.SmartFormRecognizer.AspNet.MVC5.nupkg](https://www.nuget.org/packages/Syncfusion.SmartFormRecognizer.AspNet.Mvc5/)'| markdownify }}
</td>
</tr>
</table>

N> The above mentioned NuGet packages are available in [nuget.org](https://www.nuget.org/).

The following code snippet illustrates how to detects form data from PDFs using FormRecognizer method in SmartFormRecognizer.

{% tabs %}
{% highlight c# tabtitle="C#" %}

 //Initialize the Form Recognizer
 FormRecognizer smartFormRecognizer = new FormRecognizer();
 //Read the input PDF file as stream
 FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.ReadWrite);
 //Recognize the form and get the output as PDF stream
 Stream outputStream = smartFormRecognizer.RecognizeFormAsPdfStream(inputStream);
 //Save the output PDF stream to file
 using (FileStream fileStream = File.Create("Output.pdf"))
 {
     outputStream.Seek(0, SeekOrigin.Begin);
     outputStream.CopyTo(fileStream);
 }

{% endhighlight %}
{% endtabs %}
