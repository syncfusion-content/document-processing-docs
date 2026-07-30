---
title: How to convert an image from a URL in Excel to PDF? | XlsIO | Syncfusion
description: Explains how to download an image from a URL, embed it in an XlsIO workbook, and convert the workbook to PDF.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to convert an image from a URL in Excel to PDF?

When you add an image to a worksheet from a URL or external link, Microsoft Excel downloads the image every time the spreadsheet is opened. The image is not physically embedded in the file; it only stores the URL. Because Syncfusion<sup>&reg;</sup> XlsIO does not fetch external resources during PDF conversion, the image will not appear in the output PDF. To work around this, download the image first, embed it as a picture, and then convert the workbook to PDF.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`).
* Install the renderer package:
  * **Cross-platform:** [Syncfusion.XlsIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIORenderer.Net.Core)
  * **Windows-specific:** Syncfusion.ExcelToPdfConverter.WinForms (or .WPF)
* Register a valid Syncfusion license at application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* The example downloads an image from `https://cdn.syncfusion.com/...`; an active internet connection is required.
* Ensure the working directory is writable; the example writes `ExcelToPDF.pdf` next to the input file.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  WebClient client = new WebClient();
  byte[] imageData = client.DownloadData("https://cdn.syncfusion.com/content/images/company-logos/Syncfusion_Logo_Image.png");

  worksheet.Pictures.AddPicture(1, 1, 5, 7, Image.FromStream(new MemoryStream(imageData)));

  //Initialize XlsIO renderer.
  XlsIORenderer renderer = new XlsIORenderer();

  //Convert Excel document into PDF document 
  PdfDocument pdfDocument = renderer.ConvertToPDF(workbook);

  pdfDocument.Save("ExcelToPDF.pdf");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  WebClient client = new WebClient();
  byte[] imageData = client.DownloadData("https://cdn.syncfusion.com/content/images/company-logos/Syncfusion_Logo_Image.png");

  worksheet.Pictures.AddPicture(1, 1, 5, 7, Image.FromStream(new MemoryStream(imageData)));

  //Initialize XlsIO renderer.
  ExcelToPdfConverter converter = new ExcelToPdfConverter(workbook);

  //Convert Excel document into PDF document 
  PdfDocument pdfDocument = converter.Convert();

  FileStream stream = new FileStream("ExcelToPDF.pdf", FileMode.Create, FileAccess.ReadWrite);
  pdfDocument.Save(stream);
  stream.Dispose();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)
  Dim client As WebClient = New WebClient
  Dim imageData() As Byte = client.DownloadData("https://cdn.syncfusion.com/content/images/company-logos/Syncfusion_Logo_Image.png")
  worksheet.Pictures.AddPicture(1, 1, 5, 7, Image.FromStream(New MemoryStream(imageData)))
  Dim converter As ExcelToPdfConverter = New ExcelToPdfConverter(workbook)
  Dim pdfDocument As PdfDocument = converter.Convert
  Dim stream As FileStream = New FileStream("ExcelToPDF.pdf", FileMode.Create, FileAccess.ReadWrite)
  pdfDocument.Save(stream)
  stream.Dispose
End Using
{% endhighlight %}
{% endtabs %}  

