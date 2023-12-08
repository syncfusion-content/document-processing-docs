---
title: How to search a value in only specific columns of Excel | Syncfusion
description: This page shows how to search for a value in different columns in an Excel worksheet using the Syncfusion .NET Excel library (XlsIO).
platform: file-formats
control: XlsIO
documentation: UG
---

# How to search a value in only specific columns of an Excel worksheet?
XlsIO allows searching for a value in different columns in an Excel worksheet through the [FindAll](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_FindAll_System_String_Syncfusion_XlsIO_ExcelFindType_) method. The following code illustrates this.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  FileStream fileStream = new FileStream("Sample.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(fileStream, ExcelOpenType.Automatic);
  IWorksheet worksheet = workbook.Worksheets[0];

  IRanges ranges = worksheet.CreateRangesCollection();

  //Add different ranges to the Range collection.
  ranges.Add(worksheet.Range["C1"].EntireColumn);
  ranges.Add(worksheet.Range["Q1"].EntireColumn);
  ranges.Add(worksheet.Range["AA1"].EntireColumn);

  IRange[] result = ranges.FindAll(90, ExcelFindType.Number);
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
  IWorksheet worksheet = workbook.Worksheets[0];

  IRanges ranges = worksheet.CreateRangesCollection();

  //Add different ranges to the Range collection.
  ranges.Add(worksheet.Range["C1"].EntireColumn);
  ranges.Add(worksheet.Range["Q1"].EntireColumn);
  ranges.Add(worksheet.Range["AA1"].EntireColumn);

  IRange[] result = ranges.FindAll(90, ExcelFindType.Number);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
  'Access first worksheet from the workbook instance
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  Dim ranges As IRanges = worksheet.CreateRangesCollection()

  'Add different ranges to the Range collection.
  ranges.Add(worksheet.Range("C1").EntireColumn)
  ranges.Add(worksheet.Range("Q1").EntireColumn)
  ranges.Add(worksheet.Range("AA1").EntireColumn)

  Dim result() As IRange = ranges.FindAll(90, ExcelFindType.Number)
End Using
{% endhighlight %}
{% endtabs %}  

## See Also

* [How to perform Find and Replace?](https://help.syncfusion.com/file-formats/xlsio/worksheet-cells-manipulation#find-and-replace)
* [How to get entire column of the particular range?](https://help.syncfusion.com/file-formats/xlsio/worksheet-cells-manipulation#entire-column)
* [How to define discontinuous ranges?](https://help.syncfusion.com/file-formats/xlsio/faqs/how-to-define-discontinuous-ranges)
* [How to create and open Excel Template files by using XlsIO?](how-to-create-and-open-excel-template-files-by-using-xlsio)
* [How to copy a range from one workbook to another?](how-to-copy-a-range-from-one-workbook-to-another)
* [Does XlsIO support Excel files with macros that are digitally signed?](does-xlsio-support-excel-files-with-macros-that-are-digitally-signed)
* [How to move or copy a worksheet?](https://help.syncfusion.com/file-formats/xlsio/working-with-excel-worksheet#move-or-copy-a-worksheet)
