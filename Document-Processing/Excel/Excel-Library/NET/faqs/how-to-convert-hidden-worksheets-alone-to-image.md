---
title: How to convert only hidden worksheets to images? | XlsIO | Syncfusion
description: Explains how to convert every hidden worksheet in an XlsIO workbook to an image, with separate samples for cross-platform and Windows-specific paths.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to convert hidden worksheets alone to image?

A worksheet can be hidden through the [`IWorksheet.Visibility`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ITabSheet.html#Syncfusion_XlsIO_ITabSheet_Visibility) property. Syncfusion<sup>&reg;</sup> XlsIO also supports the **strong hidden** state (`WorksheetVisibility.StrongHidden` in the API, also known as "very hidden" in Excel), which makes the worksheet invisible to the user and cannot be toggled from the Excel UI. For more about strong hidden, see the [documentation](https://www.syncfusion.com/kb/4878/how-to-set-worksheet-visibility-to-very-hidden).

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`) **and** the matching imaging renderer package. The cross-platform tab uses the built-in `XlsIORenderer`; the Windows-specific tab uses `System.Drawing.Common` (which is part of the .NET 6+ base class library or can be added via the `System.Drawing.Common` NuGet package on .NET Framework).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Have a workbook called `Sample.xlsx` in the application's working directory. The workbook should contain at least one worksheet whose `Visibility` is `Hidden` (or `StrongHidden`) for the sample to produce an image.
* Ensure the output directory is writable; the cross-platform sample writes images next to the input file, the Windows-specific sample writes `<sanitized worksheet name>.png` to the working directory.

## Convert every hidden worksheet to an image

The flow is: open the source workbook, iterate its worksheets, skip visible ones, and call `ConvertToImage` for each hidden one. The cross-platform sample writes the image into a `MemoryStream` (which the caller can dispose or copy to disk); the Windows-specific sample returns an `Image` that is saved directly to a `.png` file.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using System.IO;
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

      //Attach the cross-platform renderer
      application.XlsIORenderer = new XlsIORenderer();

      IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);

      foreach (IWorksheet worksheet in workbook.Worksheets)
      {
        //Skip visible and strong-hidden (very-hidden) worksheets if desired
        if (worksheet.Visibility != WorksheetVisibility.Hidden)
        {
          continue;
        }

        //Convert rows 1-5, columns A-E to a PNG image in memory
        //Wrap the stream in a using block so it is released even on exception
        using (MemoryStream stream = new MemoryStream())
        {
          worksheet.ConvertToImage(1, 1, 5, 5, stream);
          //Optionally copy the stream to a file:
          //File.WriteAllBytes($"{worksheet.Name}.png", stream.ToArray());
        }
      }

      workbook.Close();
    }
  }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
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

      foreach (IWorksheet worksheet in workbook.Worksheets)
      {
        if (worksheet.Visibility != WorksheetVisibility.Hidden)
        {
          continue;
        }

        //Convert the same 5x5 range to an Image
        using (Image image = worksheet.ConvertToImage(1, 1, 5, 5))
        {
          //Sanitize the worksheet name so illegal filename characters do not throw on Windows
          string safeName = SanitizeFileName(worksheet.Name);
          image.Save(safeName + ".png", ImageFormat.Png);
        }
      }

      workbook.Close();
    }
  }

  //Strip characters that are illegal in Windows filenames
  private static string SanitizeFileName(string name)
  {
    char[] invalid = Path.GetInvalidFileNameChars();
    foreach (char c in invalid)
    {
      name = name.Replace(c, '_');
    }
    return name;
  }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports System.Drawing
Imports System.Drawing.Imaging
Imports System.IO
Imports Syncfusion.XlsIO

Module Module1
  Sub Main()
    'ExcelEngine is IDisposable; the Using block guarantees the engine is disposed
    Using excelEngine As ExcelEngine = New ExcelEngine()
      Dim application As IApplication = excelEngine.Excel
      application.DefaultVersion = ExcelVersion.Excel2013

      Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic)

      For Each worksheet As IWorksheet In workbook.Worksheets
        If worksheet.Visibility <> WorksheetVisibility.Hidden Then
          Continue For
        End If

        Using image As Image = worksheet.ConvertToImage(1, 1, 5, 5)
          'Sanitize the worksheet name so illegal filename characters do not throw on Windows
          Dim safeName As String = SanitizeFileName(worksheet.Name)
          image.Save(safeName & ".png", ImageFormat.Png)
        End Using
      Next

      workbook.Close()
    End Using
  End Sub

  'Strip characters that are illegal in Windows filenames
  Private Function SanitizeFileName(name As String) As String
    For Each c As Char In Path.GetInvalidFileNameChars()
      name = name.Replace(c, "_"c)
    Next
    Return name
  End Function
End Module
{% endhighlight %}
{% endtabs %}

## Convert the entire used range of each hidden worksheet

If the worksheet may have more than 5 rows or 5 columns, derive the bounds from `worksheet.UsedRange` instead of hard-coding them.

```csharp
//Convert the entire used range of each hidden worksheet to an image
foreach (IWorksheet worksheet in workbook.Worksheets)
{
  if (worksheet.Visibility != WorksheetVisibility.Hidden) continue;

  IRange usedRange = worksheet.UsedRange;
  if (usedRange == null || usedRange.Row == 0 || usedRange.LastRow == 0) continue;

  using (MemoryStream stream = new MemoryStream())
  {
    worksheet.ConvertToImage(usedRange.Row, usedRange.Column, usedRange.LastRow, usedRange.LastColumn, stream);
    File.WriteAllBytes($"{worksheet.Name}.png", stream.ToArray());
  }
}
```

## See Also

* [How to convert a worksheet to an image?](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-image/net/worksheet-to-image-conversion)
* [`WorksheetVisibility` enum reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.WorksheetVisibility.html)
* [`IWorksheet.ConvertToImage` API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_ConvertToImage)
* [How to hide and show a worksheet in XlsIO?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-worksheet#hide-and-show-worksheet)  

