---
title: How to delete hyperlinks without removing styles in Excel | Syncfusion
description: Code example to remove hyperlinks from an Excel worksheet without removing cell formatting using the Syncfusion .NET Excel Library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to delete worksheet hyperlinks without affecting cell styles?

You can remove hyperlinks from an Excel worksheet without altering the cell formatting by using the [HyperLinks](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_HyperLinks) property of the [IWorksheet](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html) interface and casting it to the implementation type, [HyperLinksCollection](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.HyperLinksCollection.html), which exposes a `Remove(IHyperLink)` overload. This approach removes only the hyperlink relationship; the cell's display text, font, fill, and other formatting are preserved. By contrast, setting `cell.Value = cell.Value` clears the hyperlink but also removes the hyperlink style and the cell's display text in some cases.

The following code example removes the first hyperlink from the first worksheet of a workbook and saves the result. Three variants are shown: a C# cross-platform sample, a C# Windows-specific sample, and a VB.NET Windows-specific sample.

## Prerequisites

Before running the code example, make sure the following prerequisites are met:

- Install the **Syncfusion.XlsIO.WinForms** NuGet package (for Windows) or the **Syncfusion.XlsIO.Net.Core** package (for .NET Core / .NET 6+ cross-platform targets).
- Add the required `using` directives: `using Syncfusion.XlsIO;` and (for the cross-platform and VB.NET samples) `using System.IO;` (or `Imports Syncfusion.XlsIO` and `Imports System.IO` in VB.NET).
- The cross-platform C# sample expects the input file at `Data/InputTemplate.xlsx` relative to the working directory and writes the output to `Output/Output.xlsx`.
- The Windows-specific C# and VB.NET samples read `InputTemplate.xlsx` from and write `Output.xlsx` to the working directory.
- The input workbook must contain at least one hyperlink on the first worksheet; otherwise `hyperlink[0]` throws an `ArgumentOutOfRangeException`.

## Code example

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Hyperlinks/.NET/Delete%20Hyperlinks/Delete%20Hyperlinks/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
    IWorksheet worksheet = workbook.Worksheets[0];
    // Remove first hyperlink without affecting cell styles
    HyperLinksCollection hyperlink = worksheet.HyperLinks as HyperLinksCollection;
    hyperlink.Remove(hyperlink[0] as HyperLinkImpl);
    FileStream outputStream = new FileStream(, FileMode.Create, FileAccess.Write);
    workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
    workbook.Close();
    excelEngine.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine engine = new ExcelEngine())
{
    IApplication application = engine.Excel;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];
    // Remove first hyperlink without affecting cell styles
    HyperLinksCollection hyperlink = worksheet.HyperLinks as HyperLinksCollection;
    hyperlink.Remove(hyperlink[0] as HyperLinkImpl);
    workbook.SaveAs("Output.xlsx");    
   workbook.Close();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using engine As New ExcelEngine()
    Dim application As IApplication = engine.Excel
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)
    ' Remove first hyperlink without affecting cell style
    Dim hyperlink As HyperLinksCollection = TryCast(worksheet.HyperLinks, HyperLinksCollection)
    hyperlink.Remove(TryCast(hyperlink(0), HyperLinkImpl))
    Using outputStream As New FileStream("Output.xlsx", FileMode.Create, FileAccess.Write)
        workbook.SaveAs(outputStream)
    End Using
    workbook.Close()
End Using
{% endhighlight %}
{% endtabs %}

## See also

- [How to find and replace text in hyperlinks](how-to-find-and-replace-text-in-hyperlinks.md)
- [How many hyperlinks can a single cell contain in Excel](how-many-hyperlinks-can-a-single-cell-contain-in-Excel.md)
- [What is the maximum number of hyperlinks in an Excel worksheet](what-is-the-maximum-number-of-hyperlinks-in-an-Excel-worksheet.md)
