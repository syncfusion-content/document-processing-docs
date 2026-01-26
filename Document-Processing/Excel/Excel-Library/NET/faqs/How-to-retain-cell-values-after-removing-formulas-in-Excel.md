---
title: How to retain cell values after removing formula in Excel | Syncfusion
description: This page shows how to retain cell values after removing formulas in Excel using the Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to retain cell values after removing formulas in Excel?

You can remove a formula from a cell while retaining its calculated value by first retrieving the calculated value, clearing the cell's content, and then assigning the value back to the cell.

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
