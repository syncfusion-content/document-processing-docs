---
title: 	How to find and highlight data in Excel? | XlsIO | Syncfusion
description: Explains how to find every occurrence of a value in an XlsIO worksheet and change the matching cells' background color.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to find and highlight data in Excel?

Syncfusion<sup>&reg;</sup> XlsIO provides two enums to control find behavior:

| Enum | Purpose | Common values |
|---|---|---|
| [`ExcelFindType`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ExcelFindType.html) | What to match against | `Number`, `Text`, `Formula`, `Comments` |
| [`ExcelFindOptions`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ExcelFindOptions.html) | How to match | `MatchCase`, `MatchEntireCellContent` (combine with a bitwise OR) |

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Have a workbook called `Sample.xlsx` in the application's working directory. The first worksheet should contain at least one cell whose numeric value is `1500` for the sample to highlight it.
* Ensure the output directory is writable; `Workbook.SaveAs` creates or overwrites the destination file.

## Find every occurrence of a value and color the matching cells

The flow is: open the source workbook, call `worksheet.FindAll(1500, ExcelFindType.Number)`, iterate the returned ranges, set the background color of each cell, then save.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.XlsIO;

class Program
{
  static void Main(string[] args)
  {
    //ExcelEngine is IDisposable; the using block guarantees the engine is disposed
    using (ExcelEngine excelEngine = new ExcelEngine())
    {
      IApplication application = excelEngine.Excel;
      application.DefaultVersion = ExcelVersion.Excel2013;

      IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
      IWorksheet worksheet = workbook.Worksheets[0];

      //Find every cell whose numeric value equals 1500
      foreach (IRange range in worksheet.FindAll(1500, ExcelFindType.Number))
      {
        //Set the cell's pattern background color to green
        range.CellStyle.Color = ExcelKnownColors.Green;
      }

      //Save the workbook
      workbook.SaveAs("Output.xlsx");
      workbook.Close();
    }
  }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.XlsIO;

class Program
{
  static void Main(string[] args)
  {
    //ExcelEngine is IDisposable; the using block guarantees the engine is disposed
    using (ExcelEngine excelEngine = new ExcelEngine())
    {
      IApplication application = excelEngine.Excel;
      application.DefaultVersion = ExcelVersion.Excel2013;

      IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
      IWorksheet worksheet = workbook.Worksheets[0];

      foreach (IRange range in worksheet.FindAll(1500, ExcelFindType.Number))
      {
        range.CellStyle.Color = ExcelKnownColors.Green;
      }

      workbook.SaveAs("Output.xlsx");
      workbook.Close();
    }
  }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.XlsIO

Module Module1
  Sub Main()
    'ExcelEngine is IDisposable; the Using block guarantees the engine is disposed
    Using excelEngine As ExcelEngine = New ExcelEngine()
      Dim application As IApplication = excelEngine.Excel
      application.DefaultVersion = ExcelVersion.Excel2013

      Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic)
      Dim worksheet As IWorksheet = workbook.Worksheets(0)

      For Each range As IRange In worksheet.FindAll(1500, ExcelFindType.Number)
        range.CellStyle.Color = ExcelKnownColors.Green
      Next

      workbook.SaveAs("Output.xlsx")
      workbook.Close()
    End Using
  End Sub
End Module
{% endhighlight %}
{% endtabs %}

## Use ExcelFindOptions to refine the match

The default `FindAll` behavior matches substrings and is case-insensitive. To match the entire cell content exactly and preserve case, combine the two options with a bitwise OR.

```csharp
//Match the cell content exactly (no substrings) and preserve case
IRange[] exactMatches = worksheet.FindAll(
  "Closed",
  ExcelFindType.Text,
  ExcelFindOptions.MatchCase | ExcelFindOptions.MatchEntireCellContent);

foreach (IRange range in exactMatches)
{
  range.CellStyle.Color = ExcelKnownColors.Yellow;
}
```

## See Also

* [`IWorksheet.FindAll` API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_FindAll_System_String_Syncfusion_XlsIO_ExcelFindType_)
* [`IWorksheet.Find` API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_Find)
* [`ExcelFindType` enum reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ExcelFindType.html)
* [`ExcelFindOptions` enum reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ExcelFindOptions.html)
* [Working with conditional formatting in XlsIO](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-conditional-formatting) 
