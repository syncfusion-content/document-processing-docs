---
title: How to access a table in Excel document using its name | Syncfusion
description: Explains how to access an Excel table (ListObject) by name in XlsIO using the IListObjects indexer, with a C# and VB.NET example.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to access a table in Excel document using the table name?

An Excel *table* (also called a **ListObject**) is a structured range with a name shown in the **Table Design** tab. Syncfusion<sup>&reg;</sup> XlsIO exposes the tables on a worksheet through the [`IListObjects`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IListObjects.html) collection, which supports a **name indexer**: `worksheet.ListObjects["TableName"]` returns the [`IListObject`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IListObject.html) directly, with no need to walk the collection manually. If the name is not present, the indexer throws `KeyNotFoundException`; wrap the call in a `try/catch` (or check `ContainsKey`) to handle that case.

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

## See Also

* [How to create an Excel table in XlsIO?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-create-a-table)
* [How to format an Excel table in XlsIO?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-format-a-table)
* [IListObject API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IListObject.html)
* [IListObjects API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IListObjects.html)
