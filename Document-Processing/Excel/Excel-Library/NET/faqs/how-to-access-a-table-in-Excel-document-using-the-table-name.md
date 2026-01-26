---
title: How to access a table in Excel document using its name | Syncfusion
description: This page shows how to access a table in Excel document using the table name using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to access a table in Excel document using the table name?

The following code example illustrates how to access a table in Excel document using the table name.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    //Initialize the table
    IListObject table = null;

    //Get the table by its name
    for (int i = 0; i < worksheet.ListObjects.Count; i++)
    {
        IListObject currentTable = worksheet.ListObjects[i];
        if (currentTable.DisplayName == "TableName")
        {
            //Assign currentTable to table if the display name matches
            table = currentTable;

            //Delete Row from the table
            table.Worksheet.DeleteRow(4);
            break;
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

    //Initialize the table
    IListObject table = null;

    //Get the table by its name
    for (int i = 0; i < worksheet.ListObjects.Count; i++)
    {
        IListObject currentTable = worksheet.ListObjects[i];
        if (currentTable.DisplayName == "SampleTable")
        {
            //Assign currentTable to table if the display name matches
            table = currentTable;

            //Delete Row from the table
            table.Worksheet.DeleteRow(4);
            break;
        }
    }

    //Saving the workbook  
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Initialize the table
    Dim table As IListObject = Nothing

    'Get the table by its name
    For i As Integer = 0 To worksheet.ListObjects.Count - 1
        Dim currentTable As IListObject = worksheet.ListObjects(i)
        If currentTable.DisplayName = "SampleTable" Then
            'Assign currentTable to table if the display name matches
            table = currentTable

            'Delete Row from the table
            table.Worksheet.DeleteRow(4)
            Exit For
        End If
    Next

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}