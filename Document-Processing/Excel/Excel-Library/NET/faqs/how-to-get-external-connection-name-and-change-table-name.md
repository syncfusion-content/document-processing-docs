---
title: How to access external connection name and change table name | Syncfusion
description: This page shows how to access a QueryTable's external connection name and how to change a table name using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to get the external connection name from a QueryTable in an IListObject and how to change the table name using XlsIO?

The example below shows how to read the external connection name from a [QueryTable](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.Implementation.QueryTableImpl.html#Syncfusion_XlsIO_Implementation_QueryTableImpl_ExternalConnection) on a [ListObject](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IListObjects.html) (table) and how to rename the table using Syncfusion XlsIO. Ensure the worksheet contains a ListObject with an associated QueryTable.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];
    IListObject table = worksheet.ListObjects[0]; 
 
    // Get connection name 
    string connectionName = table.QueryTable.ExternalConnection.Name; 
    
    // Change table name 
    table.Name = "New table name"; 

    // Saving the workbook 
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
    IListObject table = worksheet.ListObjects[0]; 
 
    // Get connection name 
    string connectionName = table.QueryTable.ExternalConnection.Name; 
    
    // Change table name 
    table.Name = "New table name"; 

    // Saving the workbook  
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)
    Dim table As IListObject = worksheet.ListObjects(0)

    ' Get connection name 
    Dim connectionName As String = table.QueryTable.ExternalConnection.Name

    ' Change table name 
    table.Name = "New table name"

    ' Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}