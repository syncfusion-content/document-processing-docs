---
title: How to format text within a cell | XlsIO | Syncfusion
description: Learn how to format text within an Excel cell using the .NET Excel Library with code examples and customization options
platform: document-processing
control: XlsIO
documentation: UG
---

# How to format text within a cell?

In Syncfusion<sup>&reg;</sup> XlsIO, you can use the rich-text formatting option to format the text within a cell. The following code example demonstrates this.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or the platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF` for Windows-specific scenarios).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Ensure the output directory is writable; the output file is created or overwritten when the code runs.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.XlsIO;
using System.Drawing;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;

  //Workbooks.Create(int) creates a workbook with the given number of worksheets
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Assign plain text and get the rich-text representation
  IRange range = worksheet.Range["A1"];
  range.Text = "RichText";
  IRichTextString richText = range.RichText;

  //Format the first 4 characters (indices 0..3) as bold, italic, red
  IFont redFont = workbook.CreateFont();
  redFont.Bold = true;
  redFont.Italic = true;
  redFont.RGBColor = Color.Red;
  richText.SetFont(0, 3, redFont);

  //Format the last 4 characters (indices 4..7) as bold, italic, blue
  IFont blueFont = workbook.CreateFont();
  blueFont.Bold = true;
  blueFont.Italic = true;
  blueFont.RGBColor = Color.Blue;
  richText.SetFont(4, 7, blueFont);
 
  workbook.SaveAs("FormattingText.xlsx");
  workbook.Close();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.XlsIO;
using System.Drawing;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Assign plain text and get the rich-text representation
  IRange range = worksheet.Range["A1"];
  range.Text = "RichText";
  IRichTextString richText = range.RichText;

  //Format the first 4 characters (indices 0..3) as bold, italic, red
  IFont redFont = workbook.CreateFont();
  redFont.Bold = true;
  redFont.Italic = true;
  redFont.RGBColor = Color.Red;
  richText.SetFont(0, 3, redFont);

  //Format the last 4 characters (indices 4..7) as bold, italic, blue
  IFont blueFont = workbook.CreateFont();
  blueFont.Bold = true;
  blueFont.Italic = true;
  blueFont.RGBColor = Color.Blue;
  richText.SetFont(4, 7, blueFont);

  workbook.SaveAs("FormattingText.xlsx");
  workbook.Close();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.XlsIO
Imports System.Drawing

Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Assign plain text and get the rich-text representation
  Dim range As IRange = worksheet.Range("A1")
  range.Text = "RichText"
  Dim richText As IRichTextString = range.RichText

  'Format the first 4 characters (indices 0..3) as bold, italic, red
  Dim redFont As IFont = workbook.CreateFont()
  redFont.Bold = True
  redFont.Italic = True
  redFont.RGBColor = Color.Red
  richText.SetFont(0, 3, redFont)

  'Format the last 4 characters (indices 4..7) as bold, italic, blue
  Dim blueFont As IFont = workbook.CreateFont()
  blueFont.Bold = True
  blueFont.Italic = True
  blueFont.RGBColor = Color.Blue
  richText.SetFont(4, 7, blueFont)

  workbook.SaveAs("FormattingText.xlsx")
  workbook.Close()
End Using
{% endhighlight %}
{% endtabs %}  

## See Also

* [How to set a line break inside a cell?](https://help.syncfusion.com/file-formats/xlsio/faqs/how-to-set-a-line-break-inside-a-cell)
* [How to protect certain cells in a worksheet?](https://help.syncfusion.com/file-formats/xlsio/faqs/how-to-protect-certain-cells-in-a-worksheet)
* [How to copy/paste the cell values that contain only formula?](https://help.syncfusion.com/file-formats/xlsio/faqs/how-to-copy-paste-the-cell-values-that-contain-only-formula)
* [How to rich-text formatting?](https://help.syncfusion.com/file-formats/xlsio/working-with-cell-or-range-formatting#rich-text-formatting)
* [How to apply number formats?](https://help.syncfusion.com/file-formats/xlsio/working-with-cell-or-range-formatting#apply-number-formats)
* [How to apply cell text alignment?](https://help.syncfusion.com/file-formats/xlsio/working-with-cell-or-range-formatting#apply-cell-text-alignment)
