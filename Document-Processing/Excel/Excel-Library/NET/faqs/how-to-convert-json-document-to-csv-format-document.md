---
title: How to convert JSON document to CSV format document |Syncfusion.
description: This page explains how to convert JSON document to CSV format document using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to convert JSON document to CSV format document?

The following code illustrates how to convert JSON document to CSV format document.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Conversions/.NET/JSON%20to%20CSV/JSON%20to%20CSV/Program.cs,180" %}
//Load JSON file
string jsonPath = Path.GetFullPath("Data/Input.json");
string jsonData = File.ReadAllText(jsonPath);

//Deserialize to DataTable
DataTable dataTable = JsonConvert.DeserializeObject<DataTable>(jsonData);

//Initialize ExcelEngine
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet sheet = workbook.Worksheets[0];

    //Import DataTable to worksheet
    sheet.ImportDataTable(dataTable, true, 1, 1);

    //Saving the workbook as CSV
    workbook.SaveAs(Path.GetFullPath("Output/Sample.csv"), ",");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Load JSON file
string jsonPath = Path.GetFullPath("Input.json");
string jsonData = File.ReadAllText(jsonPath);

//Deserialize to DataTable
DataTable dataTable = JsonConvert.DeserializeObject<DataTable>(jsonData);
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet sheet = workbook.Worksheets[0];

    //Import DataTable to worksheet
    sheet.ImportDataTable(dataTable, true, 1, 1);

    //Saving the workbook as CSV
    workbook.SaveAs("Output.csv",",");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Load JSON file
Dim jsonPath As String = Path.GetFullPath("Data/Input.json")
Dim jsonData As String = File.ReadAllText(jsonPath)

'Deserialize to DataTable
Dim dataTable As DataTable = JsonConvert.DeserializeObject(Of DataTable)(jsonData)

'Initialize ExcelEngine
Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Create(1)
    Dim sheet As IWorksheet = workbook.Worksheets(0)

    'Import DataTable to worksheet
    sheet.ImportDataTable(dataTable, True, 1, 1)

    'Saving the workbook as CSV
    workbook.SaveAs("Output.csv", ",")
End Using
{% endhighlight %}
{% endtabs %}  

A complete working example to convert JSON document to CSV format document using C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Conversions/.NET/JSON%20to%20CSV).