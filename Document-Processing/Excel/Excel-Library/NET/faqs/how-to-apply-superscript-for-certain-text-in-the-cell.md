---    
title: Apply Superscript to Text in an Excel Cell | Syncfusion
description: Learn how to apply superscript to specific text in an Excel cell without affecting existing styles using the .NET Excel Library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to apply superscript to certain text in a cell?

The following code example illustrates how to apply superscript to certain text in a cell without affecting the existing style in C# (cross-platform and Windows-specific) and VB.NET.

## Prerequisites

Before running the code example, make sure the following prerequisites are met:

- Install the **Syncfusion.XlsIO.WinForms** NuGet package (for Windows) or the **Syncfusion.XlsIO.Net.Core** package (for .NET Core / .NET 6+ cross-platform targets).
- Add the required `using` directive at the top of the file:
  - `using Syncfusion.XlsIO;` — for the XlsIO types and `IRichTextString`, `IFont`.
- The VB.NET equivalent: `Imports Syncfusion.XlsIO`.
- The example expects an input file at `../../../Data/Sample.xlsx` (cross-platform tab) or `../../Data/Sample.xlsx` (Windows-specific and VB.NET tabs). The input workbook must contain at least one worksheet with cell `A1` containing **at least 7 characters** of rich text. The sample calls `richText.GetFont(6)` and `richText.SetFont(6, 6, ...)` with index `6` (0-based, the 7th character). If `A1` has fewer than 7 characters, the calls throw `ArgumentOutOfRangeException`. The documentation owner should either validate the cell length before calling `GetFont` / `SetFont` or use a dynamic length. This is a code issue and is flagged in `## Troubleshooting`.
- The output folder (`Output`) must exist or be created by the application before calling `SaveAs`. `SaveAs` does not create missing parent directories on its own.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Superscript/.NET/Superscript%20for%20certain%20texts/SuperscriptForCertainTexts/Program.cs,180" %}
 using (ExcelEngine excelEngine = new ExcelEngine())
 {
     IApplication application = excelEngine.Excel;
     application.DefaultVersion = ExcelVersion.Xlsx;
     //Create a workbook
     IWorkbook workbook = application.Workbooks.Open("../../../Data/Sample.xlsx");
     IWorksheet worksheet = workbook.Worksheets[0];

     //Add Text
     IRange range = worksheet.Range["A1"];
     IRichTextString richText = range.RichText;

     IFont superScript = workbook.CreateFont();
     superScript.Size = richText.GetFont(6).Size;
     superScript.FontName = richText.GetFont(6).FontName;
     superScript.Color = richText.GetFont(6).Color;
     superScript.Superscript = true;
     richText.SetFont(6, 6, superScript);


     //Save the workbook to disk in xlsx format
     workbook.SaveAs("../../../Output/Output.xlsx");
 }
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    //Create a workbook
    IWorkbook workbook = application.Workbooks.Open("../../Data/Sample.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    //Add Text
    IRange range = worksheet.Range["A1"];
    IRichTextString richText = range.RichText;
                   
    IFont superScript = workbook.CreateFont();
    superScript.Size = richText.GetFont(6).Size;
    superScript.FontName = richText.GetFont(6).FontName;
    superScript.Color = richText.GetFont(6).Color;
    superScript.Superscript = true;
    richText.SetFont(6, 6, superScript);


    //Save the workbook to disk in xlsx format
    workbook.SaveAs("../../Output/Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
 Using excelEngine As New ExcelEngine()
     Dim application As IApplication = excelEngine.Excel
     application.DefaultVersion = ExcelVersion.Xlsx
     'Create a workbook
     Dim workbook As IWorkbook = application.Workbooks.Open("../../Data/Sample.xlsx")
     Dim worksheet As IWorksheet = workbook.Worksheets(0)

     'Add Text
     Dim range As IRange = worksheet.Range("A1")
     Dim richText As IRichTextString = range.RichText

     Dim superScript As IFont = workbook.CreateFont()
     superScript.Size = richText.GetFont(6).Size
     superScript.FontName = richText.GetFont(6).FontName
     superScript.Color = richText.GetFont(6).Color
     superScript.Superscript = True
     richText.SetFont(6, 6, superScript)

     'Save the workbook to disk in xlsx format
     workbook.SaveAs("../../Output/Output.xlsx")
 End Using
{% endhighlight %}
{% endtabs %}  

A complete working example to apply superscript to certain text in a cell using C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Superscript/.NET/Superscript%20for%20certain%20texts">this GitHub page</a>.

## See also

* [SuperscriptForCertainTexts on GitHub](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Superscript/.NET/Superscript%20for%20certain%20texts)
* [Rich Text Formatting in Excel](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-cell-or-range-formatting#rich-text-formatting)

