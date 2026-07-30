---
title: How to remove all the ListObjects from the sheet | Syncfusion
description: Shows how to remove all ListObjects (Excel tables) from a worksheet using Syncfusion XlsIO, iterating in reverse to safely remove tables in C# and VB.NET.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to remove all the ListObjects from the sheet?

ListObjects represent Excel tables in a worksheet. You can use the [ListObjects](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_ListObjects) collection to access and manipulate tables in your worksheet. To remove all ListObjects, you need to iterate through the collection in reverse order and remove each one.

The following code example illustrates how to remove all ListObjects from a worksheet.

## Prerequisites

Before running the code example, make sure the following prerequisites are met:

- Install the **Syncfusion.XlsIO.WinForms** NuGet package (for Windows) or the **Syncfusion.XlsIO.Net.Core** package (for .NET Core / .NET 6+ cross-platform targets).
- Add the required `using` directives at the top of the file:
  - `using System.IO;` - for `Path.GetFullPath` (cross-platform tab).
  - `using Syncfusion.XlsIO;` - for the XlsIO types and `ListObjects`, `IListObject`.
- The VB.NET equivalents: `Imports System.IO`, `Imports Syncfusion.XlsIO`.
- The example expects an input file at `Data/InputTemplate.xlsx` (cross-platform tab) or `InputTemplate.xlsx` (Windows-specific and VB.NET tabs). The input workbook must contain at least one worksheet with at least one ListObject (Excel table).
- The output folder (`Output`) must exist or be created by the application before calling `SaveAs`. `SaveAs` does not create missing parent directories on its own.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
    IWorksheet worksheet = workbook.Worksheets[0];

    // Remove all ListObjects from the sheet
    // Iterate in reverse order to avoid index shifting issues
    for(int i = worksheet.ListObjects.Count - 1; i >= 0; i--)
    {
        IListObject listObject = worksheet.ListObjects[i];
        worksheet.ListObjects.Remove(listObject);
    }

    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    // Remove all ListObjects from the sheet
    // Iterate in reverse order to avoid index shifting issues
    for(int i = worksheet.ListObjects.Count - 1; i >= 0; i--)
    {
        IListObject listObject = worksheet.ListObjects[i];
        worksheet.ListObjects.Remove(listObject);
    }

    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    ' Remove all ListObjects from the sheet
    ' Iterate in reverse order to avoid index shifting issues
    For i = worksheet.ListObjects.Count - 1 To 0 Step -1
        Dim listObject As IListObject = worksheet.ListObjects(i)
        worksheet.ListObjects.Remove(listObject)
    Next

    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/999438-Remove-ListObjects/FAQ/Remove%20ListObjects/.NET/Remove%20ListObjects">this GitHub page</a>.

## See also

* [RemoveListObjects on GitHub](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/999438-Remove-ListObjects/FAQ/Remove%20ListObjects/.NET/Remove%20ListObjects)
