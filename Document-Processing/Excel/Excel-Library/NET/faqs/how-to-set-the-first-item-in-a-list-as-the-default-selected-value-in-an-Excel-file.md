---
title: Set Default List Item in Excel Data Validation | Syncfusion
description: Learn to programmatically select the first item in an Excel data-validation list with Syncfusion’s .NET Excel library (XlsIO) using C# and VB.NET. 
platform: document-processing
control: XlsIO
documentation: UG
---

# How to set the first item in a list as the default value in an Excel?

You can programmatically make the first item in a data-validation list the default selection in an Excel file by using Syncfusion XlsIO. The following examples in C# (cross-platform and Windows-specific) and VB.NET demonstrate the process.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/List%20Validation/.NET/List%20Validation/List%20Validation/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    worksheet["A1"].Value = "ListItem1";
    worksheet["A2"].Value = "ListItem2";
    worksheet["A3"].Value = "ListItem3";
    worksheet["A4"].Value = "ListItem4";
    
    worksheet.Range["C1"].Text = "Data Validation List in C3";
    worksheet.Range["C1"].AutofitColumns();

    //Data validation for the list
    IDataValidation listValidation = worksheet.Range["C3"].DataValidation;        
    listValidation.DataRange = worksheet.Range["A1:A4"];

    //Set the first item in the list as default value
    worksheet.Range["C3"].Value = worksheet.Range["C3"].DataValidation.DataRange.Cells[0].Value;
   

    #region Save
    //Saving the workbook
    workbook.SaveAs("../../../Output/ListValidation.xlsx");
    #endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    worksheet["A1"].Value = "ListItem1";
    worksheet["A2"].Value = "ListItem2";
    worksheet["A3"].Value = "ListItem3";
    worksheet["A4"].Value = "ListItem4";

    worksheet.Range["C1"].Text = "Data Validation List in C3";
    worksheet.Range["C1"].AutofitColumns();

    //Data validation for the list
    IDataValidation listValidation = worksheet.Range["C3"].DataValidation;
    listValidation.DataRange = worksheet.Range["A1:A4"];

    //Set the first item in the list as default value
    worksheet.Range["C3"].Value = worksheet.Range["C3"].DataValidation.DataRange.Cells[0].Value;


    #region Save
    //Saving the workbook
    workbook.SaveAs("../../Output/ListValidation.xlsx");
    #endregion
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    'Create a workbook and access the first worksheet
    Dim workbook As IWorkbook = application.Workbooks.Create(1)
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Populate list items
    worksheet("A1").Value = "ListItem1"
    worksheet("A2").Value = "ListItem2"
    worksheet("A3").Value = "ListItem3"
    worksheet("A4").Value = "ListItem4"

    'Header for the validation cell
    worksheet.Range("C1").Text = "Data Validation List in C3"
    worksheet.Range("C1").AutofitColumns()

    'Create list‐type data validation for cell C3
    Dim listValidation As IDataValidation = worksheet.Range("C3").DataValidation
    listValidation.DataRange = worksheet.Range("A1:A4")

    'Set the first list item as the default value
    worksheet.Range("C3").Value = listValidation.DataRange.Cells(0).Value

    'Save the workbook
    workbook.SaveAs("../../Output/ListValidation.xlsx")
End Using
{% endhighlight %}
{% endtabs %}
A complete working example to set the first item in a list as the default selected value in an Excel File is available on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/List%20Validation/.NET/List%20Validation">this GitHub page</a>.