---
title: How to delete blank rows and columns in an Excel | Syncfusion
description: Explains how to walk the used range of a worksheet and remove every row and column that has no data, with a C# and VB.NET example.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to delete blank rows and blank columns in an Excel worksheet?

You can remove every blank row and column from a worksheet by walking the used range, checking each row and column with the [`IRange.IsBlank`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html) property, and calling [`IWorksheet.DeleteRow(rowIndex)`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html) or [`IWorksheet.DeleteColumn(columnIndex)`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html) for the rows or columns that are blank. The example below does both passes.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`).
* Register a valid Syncfusion license at application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Provide an input `InputTemplate.xlsx` in the working directory. The file should contain at least one blank row and one blank column on the first sheet so the deletion has something to do.
* Ensure the working directory is writable; the example writes `Output.xlsx`.

The following code example illustrates how to delete blank rows and columns in a worksheet.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    //Get the used range of the worksheet
    IRange usedRange = worksheet.Range[1, 1, worksheet.UsedRange.LastRow, worksheet.UsedRange.LastColumn];

    //Deleting blank rows from worksheet used range
    for (int row = usedRange.LastRow - 1; row >= 0; row--)
    {
        if (usedRange.Rows[row].IsBlank)
        {
            worksheet.DeleteRow(row + 1);
        }
    }

    //Deleting blank columns from worksheet used range
    for (int column = usedRange.Columns.Length - 1; column >= 0; column--)
    {
        if (usedRange.Columns[column].IsBlank)
        {
            worksheet.DeleteColumn(column + 1);
        }
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
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    //Get the used range of the worksheet
    IRange usedRange = worksheet.Range[1, 1, worksheet.UsedRange.LastRow, worksheet.UsedRange.LastColumn];

    //Deleting blank rows from worksheet used range
    for (int row = usedRange.LastRow - 1; row >= 0; row--)
    {
        if (usedRange.Rows[row].IsBlank)
        {
            worksheet.DeleteRow(row + 1);
        }
    }

    //Deleting blank columns from worksheet used range
    for (int column = usedRange.Columns.Length - 1; column >= 0; column--)
    {
        if (usedRange.Columns[column].IsBlank)
        {
            worksheet.DeleteColumn(column + 1);
        }
    }

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Get the used range of the worksheet
    Dim usedRange As IRange = worksheet.Range(1, 1, worksheet.UsedRange.LastRow, worksheet.UsedRange.LastColumn)

    'Deleting blank rows from worksheet used range
    For row As Integer = usedRange.LastRow - 1 To 0 Step -1
        If usedRange.Rows(row).IsBlank Then
            worksheet.DeleteRow(row + 1)
        End If
    Next

    'Deleting blank columns from worksheet used range
    For column As Integer = usedRange.Columns.Length - 1 To 0 Step -1
        If usedRange.Columns(column).IsBlank Then
            worksheet.DeleteColumn(column + 1)
        End If
    Next

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## See Also

* [How to resolve a performance issue when deleting a large number of rows?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-resolve-performance-issue-when-deleting-a-large-number-of-rows)
* [How to delete rows and columns in XlsIO?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-delete-rows-and-columns)
* [How to insert rows and columns in XlsIO?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-insert-rows-and-columns)
* [IWorksheet API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html)
* [IRange API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html)
