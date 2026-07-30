---
title: How to import a data table with its data type using template markers | XlsIO | Syncfusion
description: Code example that imports a data table with its data type using template markers with the .NET Excel library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to import a data table with its data type using template markers?

You can import a data table with its data type using template markers by setting the [VariableTypeAction](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.VariableTypeAction.html) property to `None` in Syncfusion<sup>&reg;</sup> XlsIO. The following code example demonstrates this.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or the platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF` for Windows-specific scenarios).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Add a `TemplateMarker_Formulas.xlsx` file in the application's working directory that contains template markers in the format `%NumbersTable.Column0%`, `%NumbersTable.Column1%`, and so on. Note that file paths are case-sensitive on Linux.
* Ensure the output directory is writable; the output file is created or overwritten when the code runs.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.XlsIO;
using System.Data;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;

  //ExcelOpenType.Automatic detects the source file format automatically
  IWorkbook workbook = application.Workbooks.Open("TemplateMarker_Formulas.xlsx", ExcelOpenType.Automatic);

  //Create a template-marker processor
  ITemplateMarkersProcessor marker = workbook.CreateTemplateMarkersProcessor();

  //Add a marker variable; VariableTypeAction.None writes values as-is from the DataTable
  marker.AddVariable("NumbersTable", GetTable(), VariableTypeAction.None);

  //Process the markers in the template and fill the values as it is in the DataTable
  marker.ApplyMarkers();

  workbook.SaveAs("TemplateMarkerFormulas.xlsx");
  workbook.Close();
}

//Helper method that builds the sample DataTable
private static DataTable GetTable()
{
  Random r = new Random();
  DataTable dt = new DataTable("NumbersTable");

  int nCols = 4;
  int nRows = 10;

  for (int i = 0; i < nCols; i++)
    dt.Columns.Add(new DataColumn("Column" + i.ToString()));

  for (int i = 0; i < nRows; ++i)
  {
    DataRow dr = dt.NewRow();
    for (int j = 0; j < nCols; j++)
      dr[j] = r.Next(0, 10);
    dt.Rows.Add(dr);
  }

  for (int rowIndex = 0; rowIndex < nRows; rowIndex++)
  {
    dt.Rows[rowIndex]["Column3"] = "2888-" + dt.Rows[rowIndex]["Column3"].ToString();
  }

  return dt;
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.XlsIO;
using System.Data;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;

  IWorkbook workbook = application.Workbooks.Open("TemplateMarker_Formulas.xlsx", ExcelOpenType.Automatic);

  //Create a template-marker processor
  ITemplateMarkersProcessor marker = workbook.CreateTemplateMarkersProcessor();

  //Add a marker variable; VariableTypeAction.None writes values as-is from the DataTable
  marker.AddVariable("NumbersTable", GetTable(), VariableTypeAction.None);

  //Process the markers in the template and write the data into the worksheet
  marker.ApplyMarkers();

  workbook.SaveAs("TemplateMarkerFormulas.xlsx");
  workbook.Close();
}

//Helper method that builds the sample DataTable
private static DataTable GetTable()
{
  Random r = new Random();
  DataTable dt = new DataTable("NumbersTable");

  int nCols = 4;
  int nRows = 10;

  for (int i = 0; i < nCols; i++)
    dt.Columns.Add(new DataColumn("Column" + i.ToString()));

  for (int i = 0; i < nRows; ++i)
  {
    DataRow dr = dt.NewRow();
    for (int j = 0; j < nCols; j++)
      dr[j] = r.Next(0, 10);
    dt.Rows.Add(dr);
  }

  //Column3 is treated as a string ID, not a number
  for (int rowIndex = 0; rowIndex < nRows; rowIndex++)
  {
    dt.Rows[rowIndex]["Column3"] = "2888-" + dt.Rows[rowIndex]["Column3"].ToString();
  }

  return dt;
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.XlsIO
Imports System.Data

Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Open("TemplateMarker_Formulas.xlsx", ExcelOpenType.Automatic)

  'Create a template-marker processor
  Dim marker As ITemplateMarkersProcessor = workbook.CreateTemplateMarkersProcessor()

  'Add a marker variable; VariableTypeAction.None writes values as-is from the DataTable
  marker.AddVariable("NumbersTable", GetTable(), VariableTypeAction.None)

  'Process the markers in the template and write the data into the worksheet
  marker.ApplyMarkers()

  workbook.SaveAs("TemplateMarkerFormulas.xlsx")
  workbook.Close()
End Using

'Helper method that builds the sample DataTable
Private Function GetTable() As DataTable
  Dim r As Random = New Random()
  Dim dt As DataTable = New DataTable("NumbersTable")
  Dim nCols As Integer = 4
  Dim nRows As Integer = 10

  For i As Integer = 0 To nCols - 1
    dt.Columns.Add(New DataColumn("Column" & i.ToString()))
  Next

  For i As Integer = 0 To nRows - 1
    Dim dr As DataRow = dt.NewRow()

    For j As Integer = 0 To nCols - 1
      dr(j) = r.[Next](0, 10)
    Next

    dt.Rows.Add(dr)
  Next

  'Column3 is treated as a string ID, not a number
  For rowIndex As Integer = 0 To nRows - 1
    dt.Rows(rowIndex)("Column3") = "2888-" & dt.Rows(rowIndex)("Column3").ToString()
  Next

  Return dt
End Function
{% endhighlight %}
{% endtabs %}

## See Also

* [How to import data from DataTable?](https://help.syncfusion.com/file-formats/xlsio/working-with-data#import-data-from-datatable)
* [How to import data from DataColumn?](https://help.syncfusion.com/file-formats/xlsio/working-with-data#import-data-from-datacolumn)
* [How to import data from DataView?](https://help.syncfusion.com/file-formats/xlsio/working-with-data#import-data-from-dataview)
* [How to export data from worksheet to DataTable?](https://help.syncfusion.com/file-formats/xlsio/working-with-data#import-data-from-datatable)
* [What are Import Data Options?](https://help.syncfusion.com/file-formats/xlsio/working-with-data#import-data-options)
* [How to bind from DataTable?](https://help.syncfusion.com/file-formats/xlsio/working-with-template-markers#bind-from-datatable)
* [How to bind from Nested Collection Objects with import data and group options?](https://help.syncfusion.com/file-formats/xlsio/working-with-template-markers#bind-from-nested-collection-objects-with-import-data-and-group-options)
* [How to use Template marker with conditional formatting?](https://help.syncfusion.com/file-formats/xlsio/working-with-template-markers#template-marker-with-conditional-formatting)
