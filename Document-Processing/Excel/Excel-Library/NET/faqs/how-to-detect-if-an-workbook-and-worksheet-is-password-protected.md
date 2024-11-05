---
title: To detect if an workbook and worksheet is protected | Syncfusion
description: This page shows how to detect if an Excel workbook and worksheet is password protected using the Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to detect if an workbook and worksheet is password protected?

When a protected workbook is opened using XlsIO, the [IsCellProtection](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbook.html#Syncfusion_XlsIO_IWorkbook_IsCellProtection) property of the [IWorkbook](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbook.html) interface is enabled, allowing for the detection of workbook protection. To determine if a worksheet is protected, you can use the [IsPasswordProtected](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ITabSheet.html#Syncfusion_XlsIO_ITabSheet_IsPasswordProtected) property of the [IWorkbook](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbook.html) interface.

The following code example illustrates how to detect the protection status of an Excel workbook and worksheet.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    FileStream inputStream = new FileStream("InputTemplate.xlsx", FileMode.Open, FileAccess.Read);
    IWorkbook workbook = application.Workbooks.Open(inputStream);

    //Creating new worksheet
    IWorksheet worksheet = workbook.Worksheets.Create("IsProtected");

    //Checking for workbook protection
    if (workbook.IsCellProtection)
    {
        worksheet.Range["A1"].Text = "The Workbook is Protected";
        worksheet.Range["A1"].CellStyle.Color = Color.LightGreen;
    }
    else
    {
        worksheet.Range["A1"].Text = "The Workbook is Not Protected";
        worksheet.Range["A1"].CellStyle.Color = Color.Orange;
    }

    //Checking worksheet protection for all worksheets in the workbook
    int rowIndex = 1;
    for (int sheetIndex = 1; sheetIndex < workbook.Worksheets.Count; sheetIndex++)
    {   
        if (workbook.Worksheets[sheetIndex - 1].IsPasswordProtected)
        {
            worksheet.Range["B" + rowIndex].Text = workbook.Worksheets[sheetIndex - 1].Name + " is Protected";
            worksheet.Range["B" + rowIndex].CellStyle.Color = Color.LightGreen;
        }
        else
        {
            worksheet.Range["B" + rowIndex].Text = workbook.Worksheets[sheetIndex - 1].Name + " is Not Protected";
            worksheet.Range["B" + rowIndex].CellStyle.Color = Color.Orange;
        }
        rowIndex++;
    }

    //Autofit column
    worksheet.UsedRange.AutofitColumns();

    //Saving the workbook as stream
    FileStream outputStream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.ReadWrite);
    workbook.SaveAs(outputStream);
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");

    //Creating new worksheet
    IWorksheet worksheet = workbook.Worksheets.Create("IsProtected");

    //Checking for workbook protection
    if (workbook.IsCellProtection)
    {
        worksheet.Range["A1"].Text = "The Workbook is Protected";
        worksheet.Range["A1"].CellStyle.Color = Color.LightGreen;
    }
    else
    {
        worksheet.Range["A1"].Text = "The Workbook is Not Protected";
        worksheet.Range["A1"].CellStyle.Color = Color.Orange;
    }

    //Checking worksheet protection for all worksheets in the workbook
    int rowIndex = 1;
    for (int sheetIndex = 1; sheetIndex < workbook.Worksheets.Count; sheetIndex++)
    {
        if (workbook.Worksheets[sheetIndex - 1].IsPasswordProtected)
        {
            worksheet.Range["B" + rowIndex].Text = workbook.Worksheets[sheetIndex - 1].Name + " is Protected";
            worksheet.Range["B" + rowIndex].CellStyle.Color = Color.LightGreen;
        }
        else
        {
            worksheet.Range["B" + rowIndex].Text = workbook.Worksheets[sheetIndex - 1].Name + " is Not Protected";
            worksheet.Range["B" + rowIndex].CellStyle.Color = Color.Orange;
        }
        rowIndex++;
    }

    //Autofit column
    worksheet.UsedRange.AutofitColumns();

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")

    'Creating new worksheet
    Dim worksheet As IWorksheet = workbook.Worksheets.Create("IsProtected")

    'Checking for workbook protection
    If workbook.IsCellProtection Then
        worksheet.Range("A1").Text = "The Workbook is Protected"
        worksheet.Range("A1").CellStyle.Color = Color.LightGreen
    Else
        worksheet.Range("A1").Text = "The Workbook is Not Protected"
        worksheet.Range("A1").CellStyle.Color = Color.Orange
    End If

    'Checking worksheet protection for all worksheets in the workbook
    Dim rowIndex As Integer = 1
    For sheetIndex As Integer = 1 To workbook.Worksheets.Count - 1
        If workbook.Worksheets(sheetIndex - 1).IsPasswordProtected Then
            worksheet.Range("B" & rowIndex.ToString()).Text = workbook.Worksheets(sheetIndex - 1).Name & " is Protected"
            worksheet.Range("B" & rowIndex.ToString()).CellStyle.Color = Color.LightGreen
        Else
            worksheet.Range("B" & rowIndex.ToString()).Text = workbook.Worksheets(sheetIndex - 1).Name & " is Not Protected"
            worksheet.Range("B" & rowIndex.ToString()).CellStyle.Color = Color.Orange
        End If
        rowIndex += 1
    Next

    'Autofit column
    worksheet.UsedRange.AutofitColumns()

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}