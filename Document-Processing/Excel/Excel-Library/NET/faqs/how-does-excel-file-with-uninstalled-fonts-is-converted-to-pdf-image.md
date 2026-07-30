---
title: How does XlsIO handle Excel files with uninstalled fonts when converting to PDF or image? | XlsIO | Syncfusion
description: Explains how XlsIO substitutes missing fonts when converting an Excel file to PDF or image, with a code example.
platform: document-processing
control: XlsIO
documentation: UG
---

# How does XlsIO handle Excel files with uninstalled fonts when converting to PDF or image?

When a font used in an Excel document is not installed on the machine, the PDF or image output will be missing the glyphs that the original font would have rendered. Syncfusion<sup>&reg;</sup> XlsIO lets you provide an alternate font by subscribing to the [`SubstituteFont`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IApplication.html#Syncfusion_XlsIO_IApplication_SubstituteFont) event, which exposes the original font name on [`SubstituteFontEventArgs.OriginalFontName`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.Implementation.SubstituteFontEventArgs.html) and lets you set the substitute on [`SubstituteFontEventArgs.AlternateFontName`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.Implementation.SubstituteFontEventArgs.html#Syncfusion_XlsIO_Implementation_SubstituteFontEventArgs_AlternateFontName). If you do not provide a substitute, XlsIO falls back to **Microsoft Sans Serif** (a Windows-only system font) on Windows, or to a built-in replacement on non-Windows platforms.

> Due to font substitution, the rendered text in the generated PDF or image file may differ slightly in width, weight, or layout from the source Excel document.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`) **and** the matching PDF or imaging renderer package (`Syncfusion.Pdf.Net.Core` for cross-platform PDF, or `Syncfusion.Pdf.WinForms` for Windows-specific PDF). The renderer is required because Excel-to-PDF/Image conversion lives in a separate assembly from XlsIO.
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Have `Sample.xlsx` in the application's working directory. The file must contain at least one cell formatted with a font that is not installed on the machine, so that the substitution path is exercised.
* Ensure the output directory is writable; the converter creates or overwrites the destination PDF file.

## Font substitution in Excel-to-PDF conversion

The flow is: open the workbook, subscribe to the `SubstituteFont` event, run the converter, and save the result. The `sender` argument of the event handler is the `IApplication` that raised the event; the `args` argument carries the original font name and accepts the substitute.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.XlsIO;
using Syncfusion.Pdf;
using System.IO;

class Program
{
  static void Main(string[] args)
  {
    //ExcelEngine is IDisposable; the using block guarantees the engine is disposed
    using (ExcelEngine excelEngine = new ExcelEngine())
    {
      IApplication application = excelEngine.Excel;
      IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");

      //Subscribe to the SubstituteFont event before rendering
      application.SubstituteFont += new SubstituteFontEventHandler(SubstituteFont);

      //XlsIORenderer is the cross-platform renderer (replaces the legacy ExcelToPdfConverter)
      XlsIORenderer renderer = new XlsIORenderer();
      PdfDocument pdfDocument = renderer.ConvertToPDF(workbook);

      //Save the resulting PDF
      pdfDocument.Save("Output.pdf");
      workbook.Close();
    }
  }

private static void SubstituteFont(object sender, SubstituteFontEventArgs args)
{
  //Sets the alternate font when a specified font is not installed in the production environment
  if (args.OriginalFontName == "Wingdings Regular")
    args.AlternateFontName = "Bauhaus 93";
  else
    args.AlternateFontName = "Times New Roman";
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.XlsIO;
using Syncfusion.Pdf;
using System.IO;

class Program
{
  static void Main(string[] args)
  {
    //ExcelEngine is IDisposable; the using block guarantees the engine is disposed
    using (ExcelEngine excelEngine = new ExcelEngine())
    {
      IApplication application = excelEngine.Excel;
      IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");

      //Subscribe to the SubstituteFont event before rendering
      application.SubstituteFont += new SubstituteFontEventHandler(SubstituteFont);

      //ExcelToPdfConverter is the legacy Windows-specific API; XlsIORenderer is the modern equivalent
      ExcelToPdfConverter converter = new ExcelToPdfConverter(workbook);
      PdfDocument pdf = converter.Convert();

      //Wrap the output stream in a using block so it is flushed and closed
      using (Stream stream = File.Create("Output.pdf"))
      {
        pdf.Save(stream);
      }

      workbook.Close();
    }
  }

  //Static handler so it can be referenced from the event-registration line above
  private static void SubstituteFont(object sender, SubstituteFontEventArgs args)
  {
    //sender is the IApplication that raised the event
    if (args.OriginalFontName == "Wingdings Regular")
    {
      args.AlternateFontName = "Bauhaus 93";
    }
    else
    {
      args.AlternateFontName = "Times New Roman";
    }
  }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.XlsIO
Imports Syncfusion.Pdf
Imports System.IO

Module Module1
  Sub Main()
    'ExcelEngine is IDisposable; the Using block guarantees the engine is disposed
    Using excelEngine As ExcelEngine = New ExcelEngine()
      Dim application As IApplication = excelEngine.Excel
      Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")

      'Subscribe to the SubstituteFont event before rendering
      AddHandler application.SubstituteFont, AddressOf SubstituteFont

      'ExcelToPdfConverter is the legacy Windows-specific API
      Dim converter As ExcelToPdfConverter = New ExcelToPdfConverter(workbook)
      Dim pdf As PdfDocument = converter.Convert()

      'Wrap the output stream in a Using block so it is flushed and closed
      Using stream As Stream = File.Create("Output.pdf")
        pdf.Save(stream)
      End Using

      workbook.Close()
    End Using
  End Sub

  'Shared handler so it can be referenced from the AddHandler line above
  Private Shared Sub SubstituteFont(ByVal sender As Object, ByVal args As SubstituteFontEventArgs)
    'sender is the IApplication that raised the event
    If args.OriginalFontName = "Wingdings Regular" Then
      args.AlternateFontName = "Bauhaus 93"
    Else
      args.AlternateFontName = "Times New Roman"
    End If
  End Sub
End Module
{% endhighlight %}
{% endtabs %}

## See Also

* [How to use Substitute Font in Excel-to-PDF Conversion?](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/excel-to-pdf-conversion#substitute-font-in-excel-to-pdf-conversion)
* [How to Embed Fonts?](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/excel-to-pdf-converter-settings#embed-fonts)
* [How to Capture Warnings in Excel-to-PDF Conversion?](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/excel-to-pdf-converter-settings#capture-warnings-in-excel-to-pdf-conversion)
* [What is the image quality when using the ExportQualityImage property?](what-is-the-image-quality-when-using-the-exportqualityimage-property)
* [How to convert a Worksheet to Image?](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-image/net/worksheet-to-image-conversion)
* [How to convert a Chart to Image?](https://help.syncfusion.com/document-processing/excel/conversions/chart-to-image/net/chart-to-image-conversion)

