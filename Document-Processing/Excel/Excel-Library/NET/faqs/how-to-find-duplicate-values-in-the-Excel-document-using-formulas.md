---
title: How to find duplicate values in an Excel document using formulas? | XlsIO | Syncfusion
description: Explains how to write a per-row formula that marks the first occurrence of each value in a column, with a C# and VB.NET example.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to find duplicate values in the Excel document using formulas in C#?

The following code illustrates how to find the duplicate values in the Excel document using formulas.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`).
* Register a valid Syncfusion license at application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Provide an input `InputTemplate.xlsx` whose first sheet has data in **column C starting at row 2**. The first row is treated as a header; the formula is not written to row 1.
* Ensure the working directory is writable; the example writes `Output.xlsx`.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    //Loads an existing file.
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    //Find duplicate values in the column
    for(int i = 2; i <= worksheet.UsedRange.LastRow; i++)
    {
        worksheet.Range["D" + i].Formula = $"=IF(MATCH(C{i},C$2:C{i},0)=ROW(C{i})-1,1,0)";
    }

    //Saving the workbook 
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    //Loads an existing file.
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    //Find duplicate values in the column
    for(int i = 2; i <= worksheet.UsedRange.LastRow; i++)
    {
        worksheet.Range["D" + i].Formula = $"=IF(MATCH(C{i},C$2:C{i},0)=ROW(C{i})-1,1,0)";
    }

    // Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    'Loads an existing file.
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Find duplicate values in the column
    For i As Integer = 2 To worksheet.UsedRange.LastRow
        worksheet.Range("D" & i).Formula = $"=IF(MATCH(C{i},C$2:C{i},0)=ROW(C{i})-1,1,0)"
    Next i

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## See Also

* [How to find and remove duplicate rows in XlsIO?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-find-and-remove-duplicate-rows)
* [How to write a formula in a cell with XlsIO?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-write-a-formula-in-a-cell)
* [How to calculate formulas in XlsIO?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-calculate-formulas)
* [IRange.Formula API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html)
