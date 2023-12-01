---
title: How to sort two or more columns in a pivot table | Syncfusion
description: Code example to sort two or more columns in a pivot table using Syncfusion .NET Excel library (XlsIO).
platform: file-formats
control: XlsIO
documentation: UG
---

# How to sort two or more columns in a pivot table?

You can sort two or more columns in a pivot table by using the [AutoSort()](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IPivotField.html#Syncfusion_XlsIO_IPivotField_AutoSort_Syncfusion_XlsIO_PivotFieldSortType_System_Int32_) method each time with the respective column index. The following code snippet illustrates this.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  FileStream inputStream = new FileStream("PivotTable.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(inputStream, ExcelOpenType.Automatic);
  IWorksheet worksheet = workbook.Worksheets[1];
  IPivotTable pivotTable = worksheet.PivotTables[0];

  IPivotField rowField = pivotTable.RowFields[1];
  //Pivot Top to Bottom sorting of values in 4th column (D) of the pivot table, (i.e.) 3rd data column 
  //assuming that the pivot table starts from 1st column (A) and data columns start from 2nd column (B) 
  rowField.AutoSort(PivotFieldSortType.Ascending, 3);
  //Pivot Top to Bottom sorting of values in 5th column (E) of the pivot table, (i.e.) 4th data column 
  rowField.AutoSort(PivotFieldSortType.Ascending, 4);

  FileStream stream = new FileStream("TopToBottomSort.xlsx", FileMode.OpenOrCreate, FileAccess.ReadWrite);
  workbook.SaveAs(stream);
  workbook.Close();
  excelEngine.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2016;
  IWorkbook workbook = application.Workbooks.Open("PivotTable.xlsx");
  IWorksheet worksheet = workbook.Worksheets[1];
  IPivotTable pivotTable = worksheet.PivotTables[0];

  IPivotField rowField = pivotTable.RowFields[1];
  //Pivot Top to Bottom sorting of values in 4th column (D) of the pivot table, (i.e.) 3rd data column 
  //assuming that the pivot table starts from 1st column (A) and data columns start from 2nd column (B) 
  rowField.AutoSort(PivotFieldSortType.Ascending, 3);
  //Pivot Top to Bottom sorting of values in 5th column (E) of the pivot table, (i.e.) 4th data column 
  rowField.AutoSort(PivotFieldSortType.Ascending, 4);

  string fileName = "TopToBottomSort.xlsx";
  workbook.SaveAs(fileName);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2016
  Dim workbook As IWorkbook = application.Workbooks.Open("PivotTable.xlsx")
  Dim worksheet As IWorksheet = workbook.Worksheets(1)
  Dim pivotTable As IPivotTable = worksheet.PivotTables(0)

  Dim rowField As IPivotField = pivotTable.RowFields(1)
  'Pivot Top to Bottom sorting of values in 4th column (D) of the pivot table, (i.e.) 3rd data column
  'assuming that the pivot table starts from 1st column (A) and data columns start from 2nd column (B)
  rowField.AutoSort(PivotFieldSortType.Ascending, 3)
  'Pivot Top to Bottom sorting of values in 5th column (E) of the pivot table, (i.e.) 4th data column
  rowField.AutoSort(PivotFieldSortType.Ascending, 4)

  Dim fileName As String = "TopToBottomSort.xlsx"
  workbook.SaveAs(fileName)
End Using
{% endhighlight %}
{% endtabs %}
  
## See Also

* [What is the maximum range of Rows and Columns?](what-is-the-maximum-range-of-rows-and-columns)
* [How to unfreeze the rows and columns in XlsIO?](how-to-unfreeze-the-rows-and-columns-in-xlsio)
* [How to hide the summary rows and columns using XlsIO?](how-to-hide-the-summary-rows-and-columns-using-xlsio)
* [How to merge excel files from more than one workbook to a single file?](how-to-merge-excel-files-from-more-than-one-workbook-to-a-single-file)
* [What is data sorting?](https://help.syncfusion.com/file-formats/xlsio/worksheet-cells-manipulation#data-sorting)
* [How to sort by value in Pivot Table?](https://help.syncfusion.com/file-formats/xlsio/working-with-pivot-tables#sort-by-value-in-pivot-table)
* [How to filter Excel data?](https://help.syncfusion.com/file-formats/xlsio/migrate-from-office-automation-to-syncfusion-xlsio/filter-excel-data)
