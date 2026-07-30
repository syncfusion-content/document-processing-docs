---
title: How to apply a font to shape text? | XlsIO | Syncfusion
description: Explains how to apply a font to the text in a worksheet shape with XlsIO using a C# and VB.NET example.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to apply a font to shape text?

Syncfusion<sup>&reg;</sup> XlsIO lets you change the font of the text inside a worksheet shape (autoshape, text box, callout, and similar) by creating a new [`IFont`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IFont.html) with `workbook.CreateFont()` and assigning it to a range of characters through `shape.TextFrame.TextRange.RichText.SetFont(startIndex, endIndex, font)`. The example below loads a workbook, ensures a shape exists on the first sheet, builds an `IFont`, and applies it to a slice of the shape's text.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`).
* Register a valid Syncfusion license at application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* If you load an existing `Sample.xlsx`, the file must contain at least one text-bearing shape on the first sheet. Otherwise, the example creates the shape for you with `Shapes.AddTextBox(...)` and assigns some text.
* Ensure the output directory is writable; `Workbook.SaveAs` creates or overwrites `Output.xlsx`.

## Apply a font to a range of characters in a shape

The flow is: open the workbook, find or create a shape on the first sheet, build an `IFont`, call `RichText.SetFont` on a slice of the shape's text, and save the workbook.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.XlsIO;

class Program
{
  static void Main()
  {
    //ExcelEngine is IDisposable; the using block guarantees the engine is disposed
    using (ExcelEngine excelEngine = new ExcelEngine())
    {
      IApplication application = excelEngine.Excel;
      application.DefaultVersion = ExcelVersion.Excel2013;

      IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
      IWorksheet worksheet = workbook.Worksheets[0];

      //Get the first shape, or create a text box so the example always has
      //a shape to work with. shapes[0] throws if there are no shapes.
      IShape shape = worksheet.Shapes.Count > 0
        ? worksheet.Shapes[0]
        : worksheet.Shapes.AddTextBox(row: 1, column: 1, height: 100, width: 200);
      shape.TextFrame.TextRange.Text = "Hello, XlsIO!";

      //Build the font you want to apply
      IFont font = workbook.CreateFont();
      font.FontName = "Arial";
      font.Size = 9;

      //Apply the font to characters at positions 0..4 inclusive
      shape.TextFrame.TextRange.RichText.SetFont(
        startIndex: 0,
        endIndex: 4,
        font: font);

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
    Using excelEngine As New ExcelEngine()
      Dim application As IApplication = excelEngine.Excel
      application.DefaultVersion = ExcelVersion.Excel2013

      Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic)
      Dim worksheet As IWorksheet = workbook.Worksheets(0)

      'Get the first shape, or create a text box so the example always has
      'a shape to work with. Shapes(0) throws if there are no shapes.
      Dim shape As IShape = If(worksheet.Shapes.Count > 0,
                               worksheet.Shapes(0),
                               worksheet.Shapes.AddTextBox(1, 1, 100, 200))
      shape.TextFrame.TextRange.Text = "Hello, XlsIO!"

      'Build the font you want to apply
      Dim font As IFont = workbook.CreateFont()
      font.FontName = "Arial"
      font.Size = 9

      'Apply the font to characters at positions 0..4 inclusive
      shape.TextFrame.TextRange.RichText.SetFont(
        startIndex:=0,
        endIndex:=4,
        font:=font)

      workbook.SaveAs("Output.xlsx")
      workbook.Close()
    End Using
  End Sub
End Module
{% endhighlight %}
{% endtabs %}

## See Also

* [IFont API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IFont.html)
* [IRichTextString API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRichTextString.html)