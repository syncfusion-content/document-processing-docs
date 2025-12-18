---
title: Preserve leading zeros when importing data to Excel | Syncfusion
description: Discover how to keep leading zeros in text when importing a DataTable to Excel using Syncfusion .NET Excel library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to preserve leading zeros when importing DataTable to Excel?

Excel often treats numeric-looking text as numbers, removing leading zeros. The same behavior is followed when importing DataTable to Excel by the Syncfusion .NET Excel (XlsIO) library. The leading zeros can be preserved by providing the parameter "PreserveDataTypes" in the ImportDataTable method as "True" when importing the data. 

The following code snippet shows how to use the PreserveDataTypes option in XlsIO.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}

using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    #region Import from Data Table
    //Initialize the DataTable
    DataTable table = SampleDataTable();
    //Set the final parameter (preserveTypes) to true to preserve the data types.
    worksheet.ImportDataTable(table, true, 1, 1, true);
    #endregion

    #region Save
    //Saving the workbook
    workbook.SaveAs(Path.GetFullPath("Output/ImportDataTable.xlsx"));                
    #endregion                
}
static DataTable SampleDataTable()
{
    //Create a DataTable with four columns
    DataTable table = new DataTable();
    table.Columns.Add("Dosage", typeof(int));
    table.Columns.Add("Drug", typeof(string));
    table.Columns.Add("Patient", typeof(string));
    table.Columns.Add("Date", typeof(DateTime));

    //Add five DataRows
    table.Rows.Add(25, "032132", "David", DateTime.Now);
    table.Rows.Add(50, "Enebrel", "Sam", DateTime.Now);
    table.Rows.Add(10, "Hydralazine", "Christoff", DateTime.Now);
    table.Rows.Add(21, "Combivent", "Janet", DateTime.Now);
    table.Rows.Add(100, "Dilantin", "Melanie", DateTime.Now);

    return table;
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Excel2016;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    //Initialize the DataTable
    DataTable table = SampleDataTable();
	
    //Set the final parameter (preserveTypes) to true to preserve the data types.
    worksheet.ImportDataTable(table, true, 1, 1, true);

    workbook.SaveAs("ImportFromDT.xlsx");
}
private static DataTable SampleDataTable()
{
    //Create a DataTable with four columns
    DataTable table = new DataTable();
    table.Columns.Add("Dosage", typeof(int));
    table.Columns.Add("Drug", typeof(string));
    table.Columns.Add("Patient", typeof(string));
    table.Columns.Add("Date", typeof(DateTime));

    //Add five DataRows
    table.Rows.Add(25, "032132", "David", DateTime.Now);
    table.Rows.Add(50, "Enebrel", "Sam", DateTime.Now);
    table.Rows.Add(10, "Hydralazine", "Christoff", DateTime.Now);
    table.Rows.Add(21, "Combivent", "Janet", DateTime.Now);
    table.Rows.Add(100, "Dilantin", "Melanie", DateTime.Now);

    return table;
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Excel2016
    Dim workbook As IWorkbook = application.Workbooks.Create(1)
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Initialize the DataTable
    Dim table As DataTable = sampleDataTable()
    'Set the final parameter (preserveTypes) to true to preserve the data types.
    worksheet.ImportDataTable(table, True, 1, 1, True)

    workbook.SaveAs("ImportFromDT.xlsx")
End Using
Private Function SampleDataTable() As DataTable
    ' Create a DataTable with four columns
    Dim table As New DataTable()
    table.Columns.Add("Dosage", GetType(Integer))
    table.Columns.Add("Drug", GetType(String))
    table.Columns.Add("Patient", GetType(String))
    table.Columns.Add("Date", GetType(Date))

    ' Add five DataRows
    table.Rows.Add(25, "032132", "David", DateTime.Now)
    table.Rows.Add(50, "Enebrel", "Sam", DateTime.Now)
    table.Rows.Add(10, "Hydralazine", "Christoff", DateTime.Now)
    table.Rows.Add(21, "Combivent", "Janet", DateTime.Now)
    table.Rows.Add(100, "Dilantin", "Melanie", DateTime.Now)
    Return table
End Function

{% endhighlight %}
{% endtabs %}

## See Also

* [How to import data table with its data type using template markers?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-import-data-table-with-its-data-type-using-template-markers)
* [Import to Excel Document](https://help.syncfusion.com/document-processing/excel/excel-library/net/import-export/import-to-excel)