---
title: How to delete blank rows and columns in a worksheet | Syncfusion
description: This page explains how to delete blank rows and columns in a worksheet using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to delete blank rows and columns in a worksheet?

You can delete blank rows and columns in a worksheet by iterating through the used range and checking each row and column using the [IsBlank](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_IsBlank) property. If a row or column is blank, you can remove it using the [DeleteRow](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_DeleteRow_System_Int32_) or [DeleteColumn](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_DeleteColumn_System_Int32_) methods of the [IWorksheet](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html) interface, respectively.

The following code example illustrates how to delete blank rows and columns in a worksheet.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    FileStream inputStream = new FileStream("InputTemplate.xlsx", FileMode.Open, FileAccess.Read);
    IWorkbook workbook = application.Workbooks.Open(inputStream);
    IWorksheet worksheet = workbook.Worksheets[0];

    //Get the used range of the worksheet
    IRange usedRange = worksheet.Range[1, 1, worksheet.UsedRange.LastRow, worksheet.UsedRange.LastColumn];

    //Deleting blank rows from worksheet used range
    for (int i = usedRange.LastRow - 1; i >= 0; i--)
    {
        if (usedRange.Rows[i].IsBlank)
        {
            worksheet.DeleteRow(i + 1);
        }
    }

    //Deleting blank columns from worksheet used range
    for (int j = usedRange.Columns.Length - 1; j >= 0; j--)
    {
        if (usedRange.Columns[j].IsBlank)
        {
            worksheet.DeleteColumn(j + 1);
        }
    }

    //Saving the workbook as stream
    FileStream outputStream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.ReadWrite);
    workbook.SaveAs(outputStream);

    //Dispose streams
    inputStream.Dispose();
    outputStream.Dispose();
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
    for (int i = usedRange.LastRow - 1; i >= 0; i--)
    {
        if (usedRange.Rows[i].IsBlank)
        {
            worksheet.DeleteRow(i + 1);
        }
    }

    //Deleting blank columns from worksheet used range
    for (int j = usedRange.Columns.Length - 1; j >= 0; j--)
    {
        if (usedRange.Columns[j].IsBlank)
        {
            worksheet.DeleteColumn(j + 1);
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
    For i As Integer = usedRange.LastRow - 1 To 0 Step -1
        If usedRange.Rows(i).IsBlank Then
            worksheet.DeleteRow(i + 1)
        End If
    Next

    'Deleting blank columns from worksheet used range
    For j As Integer = usedRange.Columns.Length - 1 To 0 Step -1
        If usedRange.Columns(j).IsBlank Then
            worksheet.DeleteColumn(j + 1)
        End If
    Next

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}