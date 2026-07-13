---
title: Convert PDF to Image| Syncfusion&reg;
description: Learn how to convert a PDF to Image with easy steps using Syncfusion&reg; Essential Studio&reg; PDFToImageConverter library.
platform: document-processing
control: PDF to image
documentation: UG
keywords: Assemblies
---

# Convert PDF to Image

This PDF to image converter library allows converting PDF documents to images without opening the document in the PDF Viewer control. It allows you to selectively export pages as a stream by utilizing the 'Convert' method, facilitating the transformation of PDF files into images.

Watch the following video to quickly get started with converting PDF to image in .NET using a PDF to Image Converter Library.
{% youtube "https://www.youtube.com/watch?v=Grjtyh5gBr8" %}

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
{{'[Syncfusion.PdfToImageConverter.WinForms](https://www.nuget.org/packages/Syncfusion.PdfToImageConverter.WinForms/)'|markdownify }}
</td>
</tr>
<tr>
<td>
WPF
</td>
<td>
{{'[Syncfusion.PdfToImageConverter.WPF](https://www.nuget.org/packages/Syncfusion.PdfToImageConverter.WPF/)'|markdownify }}
</td>
</tr>
<tr>
<td>
ASP.NET Core Windows
</td>
<td>
{{'[Syncfusion.PdfToImageConverter.Net](https://www.nuget.org/packages/Syncfusion.PdfToImageConverter.Net/)'|markdownify }}
</td>
</tr>
<tr>
<td>
ASP.NET MVC Windows
</td>
<td>
{{'[Syncfusion.PdfToImageConverter.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.PdfToImageConverter.AspNet.Mvc5/)'|markdownify }}
</td>
</tr>
</table>

N> The above mentioned NuGet packages are available in [nuget.org](https://www.nuget.org/).

The following code snippet illustrates how to convert a PDF page into an image using the `Convert` method in `PdfToImageConverter`. The `Convert` method accepts the page index, a flag to keep the original aspect ratio, and a flag to include annotations in the output image.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.IO;
using Syncfusion.PdfToImageConverter;

//Initialize PDF to Image converter.
PdfToImageConverter imageConverter = new PdfToImageConverter();
//Load the PDF document as a stream
FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.ReadWrite);
imageConverter.Load(inputStream);
//Convert PDF to Image. Parameters: pageIndex, keepAspectRatio, showAnnotations
Stream outputStream = imageConverter.Convert(0, false, false);
MemoryStream stream = outputStream as MemoryStream;
return File(stream.ToArray(), System.Net.Mime.MediaTypeNames.Image.Jpeg, "sample.jpeg");

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.IO;
using System.Drawing;
using System.Drawing.Imaging;
using Syncfusion.PdfToImageConverter;

//Initialize PDF to Image converter.
PdfToImageConverter imageConverter = new PdfToImageConverter();
//Load the PDF document as a stream
FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.ReadWrite);
imageConverter.Load(inputStream);
//Convert PDF to Image. Parameters: pageIndex, keepAspectRatio, showAnnotations
Stream outputStream = imageConverter.Convert(0, false, false);
Bitmap image = new Bitmap(outputStream);
image.Save("sample.png");

{% endhighlight %}
{% highlight vb tabtitle="VB.NET [Windows-specific]" %}

Imports System.IO
Imports System.Drawing
Imports System.Drawing.Imaging
Imports Syncfusion.PdfToImageConverter

'Initialize PDF to Image converter.
Dim imageConverter As PdfToImageConverter = New PdfToImageConverter()
'Load the PDF document as a stream
Dim inputStream As FileStream = New FileStream("Input.pdf", FileMode.Open, FileAccess.ReadWrite)
imageConverter.Load(inputStream)
'Convert PDF to Image. Parameters: pageIndex, keepAspectRatio, showAnnotations
Dim outputStream As Stream = imageConverter.Convert(0, False, False)
Dim image As Bitmap = New Bitmap(outputStream)
image.Save("sample.png")

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/WPF-PDFViewer-Examples/tree/master/PDF-to-image).