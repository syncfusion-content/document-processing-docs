---
title: How to retain cell values after removing formula in Excel | Syncfusion
description: Explains how to replace every formula in a workbook with its calculated value, with a C# and VB.NET example.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to retain cell values after removing formulas in Excel?

You can remove a formula from a cell while retaining its calculated value by first retrieving the calculated value, clearing the cell's content, and then assigning the value back to the cell.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`).
* Register a valid Syncfusion license at application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Provide an input `InputTemplate.xlsx` in the working directory. The file should contain at least one formula on at least one sheet.
* Ensure the working directory is writable; the example writes `Output.xlsx`.

The following code example demonstrates how to remove a formula while retaining its calculated value.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;    
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    //Enable sheet calculation
    worksheet.EnableSheetCalculations();

    //Loop through worksheets
    foreach (IWorksheet sheet in workbook.Worksheets)
    {
        //Loop through cells
        foreach (IRange cell in sheet.Range)
        {
            //If the cell contain formula, get the formula value, clear cell content, and then fill the formula value into the cell
            if (cell.HasFormula)
            {
                string value = cell.CalculatedValue;
                cell.Clear(ExcelClearOptions.ClearContent);
                cell.Value = value;
            }
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

    //Enable sheet calculation
    worksheet.EnableSheetCalculations();

    //Loop through worksheets
    foreach (IWorksheet sheet in workbook.Worksheets)
    {
        //Loop through cells
        foreach (IRange cell in sheet.Range)
        {
            //If the cell contain formula, get the formula value, clear cell content, and then fill the formula value into the cell
            if (cell.HasFormula)
            {
                string value = cell.CalculatedValue;
                cell.Clear(ExcelClearOptions.ClearContent);
                cell.Value = value;
            }
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

    'Enable sheet calculation
    worksheet.EnableSheetCalculations()

    'Loop through worksheets
    For Each sheet As IWorksheet In workbook.Worksheets
        'Loop through cells
        For Each cell As IRange In sheet.Range
            'If the cell contains a formula, get the formula value, clear cell content, and then fill the formula value into the cell
            If cell.HasFormula Then
                Dim value As String = cell.CalculatedValue
                cell.Clear(ExcelClearOptions.ClearContent)
                cell.Value = value
            End If
        Next
    Next

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## See Also

* [How to calculate formulas in XlsIO?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-calculate-formulas)
* [How to write a formula in a cell with XlsIO?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-write-a-formula-in-a-cell)
* [How to find and remove duplicate rows in XlsIO?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-find-and-remove-duplicate-rows)
* [IWorksheet.EnableSheetCalculations API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html)
* [IRange.CalculatedValue API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html)
* [ExcelClearOptions enum reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ExcelClearOptions.html)
