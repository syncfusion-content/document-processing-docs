---
title: What are the deprecated APIs in XlsIO? | XlsIO | Syncfusion
description: Lists the deprecated fill-color APIs of the .NET Excel library and the replacement APIs to migrate to.
platform: document-processing
control: XlsIO
documentation: UG
---

# What are the deprecated APIs in XlsIO?

The fill-color APIs [`FillBackgroundRGB`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IExtendedFormat.html#Syncfusion_XlsIO_IExtendedFormat_FillBackgroundRGB), [`FillBackground`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IExtendedFormat.html#Syncfusion_XlsIO_IExtendedFormat_FillBackground), [`FillForegroundRGB`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IExtendedFormat.html#Syncfusion_XlsIO_IExtendedFormat_FillForegroundRGB), and [`FillForeground`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IExtendedFormat.html#Syncfusion_XlsIO_IExtendedFormat_FillForeground) on [`IRange.CellStyle`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_CellStyle) are deprecated. Syncfusion<sup>&reg;</sup> XlsIO replaces them with the following properties on the same `CellStyle` object: [`Color`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IExtendedFormat.html#Syncfusion_XlsIO_IExtendedFormat_Color), [`ColorIndex`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IExtendedFormat.html#Syncfusion_XlsIO_IExtendedFormat_ColorIndex), [`PatternColor`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IExtendedFormat.html#Syncfusion_XlsIO_IExtendedFormat_PatternColor), and [`PatternColorIndex`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IExtendedFormat.html#Syncfusion_XlsIO_IExtendedFormat_PatternColorIndex). The following table lists the migration mapping.

N> * The deprecated APIs continue to work in current releases but are marked `[Obsolete]` in the assembly; calling them emits a compiler warning. They will be removed in a future major version of Syncfusion<sup>&reg;</sup> XlsIO. Plan your migration now rather than later.

N> * `FillBackgroundRGB` and `FillForegroundRGB` are **integer** RGB values (for example, `0xFF0000` for red). `Color` and `PatternColor` are **object** values of type `Syncfusion.Drawing.Color`. `FillBackground` and `FillForeground` are **enum** values of type `ExcelKnownColors`. `ColorIndex` and `PatternColorIndex` are also `ExcelKnownColors` enum values. The migration therefore changes the assignment syntax, not just the property name.

## Prerequisites

Before applying this migration, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* After replacing the deprecated APIs, rebuild the project. The compiler will surface any remaining call sites as `[Obsolete]` warnings.

## Migration mapping

| Old API | New API | Property type |
|---|---|---|
| `worksheet.Range["A1"].CellStyle.FillBackgroundRGB` | `worksheet.Range["A1"].CellStyle.Color` | `Syncfusion.Drawing.Color` |
| `worksheet.Range["A1"].CellStyle.FillBackground` | `worksheet.Range["A1"].CellStyle.ColorIndex` | `ExcelKnownColors` |
| `worksheet.Range["A1"].CellStyle.FillForegroundRGB` | `worksheet.Range["A1"].CellStyle.PatternColor` | `Syncfusion.Drawing.Color` |
| `worksheet.Range["A1"].CellStyle.FillForeground` | `worksheet.Range["A1"].CellStyle.PatternColorIndex` | `ExcelKnownColors` |

## Migration example

The following C# example shows the same cell formatted with the deprecated and the new APIs. Replace the deprecated block with the new block; the visual result is identical.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.XlsIO;
using Syncfusion.Drawing;

class Program
{
  static void Main(string[] args)
  {
    using (ExcelEngine excelEngine = new ExcelEngine())
    {
      IApplication application = excelEngine.Excel;
      application.DefaultVersion = ExcelVersion.Excel2013;

      IWorkbook workbook = application.Workbooks.Create(1);
      IWorksheet worksheet = workbook.Worksheets[0];

      //Before (deprecated — emits an [Obsolete] warning):
      //worksheet.Range["A1"].CellStyle.FillBackgroundRGB = 0xFF0000;     // int RGB
      //worksheet.Range["A1"].CellStyle.FillForegroundRGB = 0x00FF00;     // int RGB
      //worksheet.Range["A1"].CellStyle.FillBackground    = ExcelKnownColors.Red;
      //worksheet.Range["A1"].CellStyle.FillForeground    = ExcelKnownColors.Green;

      //After (recommended):
      worksheet.Range["A1"].CellStyle.Color             = Color.FromArgb(0xFF, 0x00, 0x00); // red
      worksheet.Range["A1"].CellStyle.ColorIndex        = ExcelKnownColors.Red;            // legacy palette index
      worksheet.Range["A1"].CellStyle.PatternColor      = Color.FromArgb(0x00, 0xFF, 0x00); // green
      worksheet.Range["A1"].CellStyle.PatternColorIndex = ExcelKnownColors.Green;          // legacy palette index

      workbook.SaveAs("Output.xlsx");
      workbook.Close();
    }
  }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.XlsIO;
using Syncfusion.Drawing;

class Program
{
  static void Main(string[] args)
  {
    using (ExcelEngine excelEngine = new ExcelEngine())
    {
      IApplication application = excelEngine.Excel;
      application.DefaultVersion = ExcelVersion.Excel2013;

      IWorkbook workbook = application.Workbooks.Create(1);
      IWorksheet worksheet = workbook.Worksheets[0];

      //After (recommended):
      worksheet.Range["A1"].CellStyle.Color             = Color.FromArgb(0xFF, 0x00, 0x00);
      worksheet.Range["A1"].CellStyle.ColorIndex        = ExcelKnownColors.Red;
      worksheet.Range["A1"].CellStyle.PatternColor      = Color.FromArgb(0x00, 0xFF, 0x00);
      worksheet.Range["A1"].CellStyle.PatternColorIndex = ExcelKnownColors.Green;

      workbook.SaveAs("Output.xlsx");
      workbook.Close();
    }
  }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.XlsIO
Imports Syncfusion.Drawing

Module Module1
  Sub Main()
    Using excelEngine As ExcelEngine = New ExcelEngine()
      Dim application As IApplication = excelEngine.Excel
      application.DefaultVersion = ExcelVersion.Excel2013

      Dim workbook As IWorkbook = application.Workbooks.Create(1)
      Dim worksheet As IWorksheet = workbook.Worksheets(0)

      'After (recommended):
      worksheet.Range("A1").CellStyle.Color             = Color.FromArgb(&HFF, &H0, &H0)
      worksheet.Range("A1").CellStyle.ColorIndex        = ExcelKnownColors.Red
      worksheet.Range("A1").CellStyle.PatternColor      = Color.FromArgb(&H0, &HFF, &H0)
      worksheet.Range("A1").CellStyle.PatternColorIndex = ExcelKnownColors.Green

      workbook.SaveAs("Output.xlsx")
      workbook.Close()
    End Using
  End Sub
End Module
{% endhighlight %}
{% endtabs %}

## See Also

* [`ExcelKnownColors` enum](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ExcelKnownColors.html)
* [`IExtendedFormat` API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IExtendedFormat.html)
* [`IRange.CellStyle` API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_CellStyle)
