---
title: Sorting | Excel library | Syncfusion
description: In this section, you can learn about how to sort data in an Excel document using Syncfusion .NET Excel library.
platform: document-processing
control: XlsIO
documentation: UG
---

# Sorting Data in Excel Document

A range of cells in Excel worksheet can be sorted based on data in one or more columns. Following types of sorting is supported in XlsIO:

* Cell Values
* Font Color
* Cell Color

N> Currently XlsIO don’t support sorting based on cell icon, parsing and serialization of its sorting details.

## Cell Values

The following code example illustrates how to sort a range of cells by values.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Editing%20Excel%20cells/Sort%20On%20Cell%20Values/.NET/Sort%20On%20Cell%20Values/Sort%20On%20Cell%20Values/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  FileStream fileStream = new FileStream("SortingData.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(fileStream);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Creates the data sorter
  IDataSort sorter = workbook.CreateDataSorter();

  //Range to sort
  sorter.SortRange = worksheet.Range["D3:D16"];

  //Adds the sort field with the column index, sort based on and order by attribute
  ISortField sortField = sorter.SortFields.Add(0, SortOn.Values, OrderBy.Ascending);

  //Adds another sort field
  ISortField sortField2 = sorter.SortFields.Add(1, SortOn.Values, OrderBy.Ascending);

  //Sort based on the sort Field attribute
  sorter.Sort();

  //Saving the workbook as stream
  FileStream stream = new FileStream("Sort.xlsx", FileMode.Create, FileAccess.ReadWrite);
  workbook.Version = ExcelVersion.Xlsx;
  workbook.SaveAs(stream);
  stream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
  IWorksheet sheet = workbook.Worksheets[0];

  //Creates the data sorter
  IDataSort sorter = workbook.CreateDataSorter();

  //Range to sort
  sorter.SortRange = sheet.Range["D3:D16"];

  //Adds the sort field with the column index, sort based on and order by attribute
  ISortField sortField = sorter.SortFields.Add(0, SortOn.Values, OrderBy.Ascending);

  //Adds another sort field
  ISortField sortField2 = sorter.SortFields.Add(1, SortOn.Values, OrderBy.Ascending);

  //Sort based on the sort Field attribute
  sorter.Sort();

  workbook.Version = ExcelVersion.Xlsx;
  workbook.SaveAs("Sort.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Creates the Data sorter
  Dim sorter As IDataSort = workbook.CreateDataSorter()

  'Specifies the sort range
  sorter.SortRange = sheet.Range("D3:D16")

  'Adds the sort field with column index, sort based on and order by attribute
  Dim sortField As ISortField = sorter.SortFields.Add(0, SortOn.Values, OrderBy.Ascending)

  'Adds the second sort field
  Dim sortField2 As ISortField = sorter.SortFields.Add(1, SortOn.Values, OrderBy.Ascending)

  'Sorts the data with the sort field attribute
  sorter.Sort()

  workbook.Version = ExcelVersion.Xlsx
  workbook.SaveAs("Sort.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to sort Excel data based on cell values in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Editing%20Excel%20cells/Sort%20On%20Cell%20Values/.NET/Sort%20On%20Cell%20Values).

## Font Color

The following code example illustrates how to move a range of cells with the specified font color to either top or bottom of the sorting range.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Editing%20Excel%20cells/Sort%20on%20Font%20Color/.NET/Sort%20on%20Font%20Color/Sort%20on%20Font%20Color/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  FileStream fileStream = new FileStream("Sample.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(fileStream);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Creates the data sorter
  IDataSort sorter = workbook.CreateDataSorter();

  //Range to sort
  sorter.SortRange = worksheet.Range["A2:D16"];

  //Creates the sort field with the column index, sort based on and order by attribute
  ISortField sortField1 = sorter.SortFields.Add(2, SortOn.FontColor, OrderBy.OnTop);

  //Specifies the color to sort the data
  sortField1.Color = Color.Red;

  //Creates another sort field with the column index, sort based on and order by attribute
  ISortField sortField2 = sorter.SortFields.Add(2, SortOn.FontColor, OrderBy.OnTop);

  //Specifies the color to sort the data
  sortField2.Color = Color.Green;

  //Sort based on the sort Field attribute
  sorter.Sort();

  //Saving the workbook as stream
  FileStream stream = new FileStream("Sort.xlsx", FileMode.Create, FileAccess.ReadWrite);
  workbook.Version = ExcelVersion.Xlsx;
  workbook.SaveAs(stream);
  stream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
  IWorksheet sheet = workbook.Worksheets[0];

  //Creates the data sorter
  IDataSort sorter = workbook.CreateDataSorter();

  //Range to sort
  sorter.SortRange = sheet.Range["A2:D16"];

  //Creates the sort field with the column index, sort based on and order by attribute
  ISortField sortField1 = sorter.SortFields.Add(2, SortOn.FontColor, OrderBy.OnTop);

  //Specifies the color to sort the data
  sortField1.Color = Color.Red;

  //Creates another sort field with the column index, sort based on and order by attribute
  ISortField sortField2 = sorter.SortFields.Add(2, SortOn.FontColor, OrderBy.OnTop);

  //Specifies the color to sort the data
  sortField2.Color = Color.Green;

  //Sort based on the sort Field attribute
  sorter.Sort();

  workbook.Version = ExcelVersion.Xlsx;
  workbook.SaveAs("Sort.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Creates the Data sorter
  Dim sorter As IDataSort = workbook.CreateDataSorter()

  'Specifies the sort range
  sorter.SortRange = sheet.Range("A2:D16")

  'Adds the sort field with column index, sort based on and order by attribute
  Dim field1 As ISortField = sorter.SortFields.Add(2, SortOn.FontColor, OrderBy.OnTop)

  'Sorts the data based on this color
  field1.Color = Color.Red

  'Adds another sort field with column index, sort based on and order by attribute
  Dim field2 As ISortField = sorter.SortFields.Add(2, SortOn.FontColor, OrderBy.OnTop)

  'Sorts the data based on this color
  field2.Color = Color.Green

  'Sorts the data with the sort field attribute
  sorter.Sort()

  workbook.Version = ExcelVersion.Xlsx
  workbook.SaveAs("Sort.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to sort Excel data based on font color in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Editing%20Excel%20cells/Sort%20on%20Font%20Color/.NET/Sort%20on%20Font%20Color).

## Cell Color

The following code example illustrates how to move a range of cells with the specified cell background color to either top or bottom of the sorting range.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Editing%20Excel%20cells/Sort%20On%20Cell%20Color/.NET/Sort%20On%20Cell%20Color/Sort%20On%20Cell%20Color/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  FileStream fileStream = new FileStream("Sample.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(fileStream);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Creates the data sorter
  IDataSort sorter = workbook.CreateDataSorter();

  //Range to sort
  sorter.SortRange = worksheet.Range["A2:D16"];

  //Creates the sort field with the column index, sort based on and order by attribute
  ISortField sortField1 = sorter.SortFields.Add(2, SortOn.CellColor, OrderBy.OnTop);

  //Specifies the color to sort the data
  sortField1.Color = Color.Red;

  //Creates another sort field with the column index, sort based on and order by attribute
  ISortField sortField2 = sorter.SortFields.Add(2, SortOn.CellColor, OrderBy.OnTop);

  //Specifies the color to sort the data
  sortField2.Color = Color.Green;

  //Sort based on the sort Field attribute
  sorter.Sort();

  //Saving the workbook as stream
  FileStream stream = new FileStream("Sort.xlsx", FileMode.Create, FileAccess.ReadWrite);
  workbook.Version = ExcelVersion.Xlsx;
  workbook.SaveAs(stream);
  stream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
  IWorksheet sheet = workbook.Worksheets[0];

  //Creates the data sorter
  IDataSort sorter = workbook.CreateDataSorter();

  //Range to sort
  sorter.SortRange = sheet.Range["A2:D16"];

  //Creates the sort field with the column index, sort based on and order by attribute
  ISortField sortField1 = sorter.SortFields.Add(2, SortOn.CellColor, OrderBy.OnTop);

  //Specifies the color to sort the data
  sortField1.Color = Color.Red;

  //Creates the sort field with the column index, sort based on and order by attribute
  ISortField sortField2 = sorter.SortFields.Add(2, SortOn.CellColor, OrderBy.OnTop);

  //Specifies the color to sort the data
  sortField2.Color = Color.Green;

  //Sort based on the sort field attribute
  sorter.Sort();

  workbook.Version = ExcelVersion.Xlsx;
  workbook.SaveAs("Sort.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
  Dim sheet As IWorksheet = workbook.Worksheets(0)
  Dim sorter As IDataSort = workbook.CreateDataSorter()

  'Specifies the sort range.
  sorter.SortRange = sheet.Range("A2:D16")

  'Adds the sort field with column index, sort based on and order by attribute
  Dim field1 As ISortField = sorter.SortFields.Add(2, SortOn.CellColor, OrderBy.OnTop)

  'Sorts the data based on this color
  field1.Color = Color.Red

  'Adds the sort field with column index, sort based on and order by attribute
  Dim field2 As ISortField = sorter.SortFields.Add(2, SortOn.CellColor, OrderBy.OnTop)

  'Sorts the data based on this color
  field2.Color = Color.Green

  'Sorts the data with the sort field attribute
  sorter.Sort()

  workbook.Version = ExcelVersion.Xlsx
  workbook.SaveAs("Sort.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to sort Excel data based on cell color in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Editing%20Excel%20cells/Sort%20On%20Cell%20Color/.NET/Sort%20On%20Cell%20Color).