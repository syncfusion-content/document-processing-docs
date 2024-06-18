---
title: Syncfusion Excel to CSV Conversion
description: In this section, you can learn how to convert Excel docuemnt to CSV document using Syncfusion Essential XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# Excel to CSV Conversion

XlsIO supports converting Excel file to CSV file by saving the workbook using the [SaveAs](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_SaveAs_System_IO_Stream_System_String_) method. When saving as CSV, users can specify various delimiters to structure the data appropriately. By default, Syncfusion XlsIO uses a comma (,) as the delimiter.

**Delimiters Used in CSV files**

* Comma (,)
* Tab (\t)
* Semicolon (;)
* Colon (:)
* Space ( )
* Equals Sign (=)

The following code example illustrates how to convert an Excel file to CSV.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet sheet = workbook.Worksheets[0];
  sheet.Range["A1:M20"].Text = "document";

  //Saving the sheet and workbook as streams
  FileStream sheetStream = new FileStream("Sample.csv", FileMode.Create, FileAccess.ReadWrite);
  sheet.SaveAs(sheetStream,",");
  
  FileStream stream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(stream);

  //Dispose stream
  sheetStream.Dispose();
  stream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet sheet = workbook.Worksheets[0];
  sheet.Range["A1:M20"].Text = "document";

  //Save the sheet as CSV
  sheet.SaveAs("Sample.csv", ",");

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)
  sheet.Range("A1:M20").Text = "document"
  
  'Save the sheet as CSV 
  sheet.SaveAs("Sample.csv", ",")

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  
 
A complete working example to convert an Excel file to CSV in C# is present on [this GitHub page]().

## Maximum Rows and Columns for CSV

By default, XlsIO allows only 1048576 rows and 16256 columns while loading or saving a CSV document. This limit can be increased by modifying the [MaximumRowsForCsv](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IApplication.html#Syncfusion_XlsIO_IApplication_MaximumRowsForCsv) and [MaximumColumnsForCsv](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IApplication.html#Syncfusion_XlsIO_IApplication_MaximumColumnsForCsv) properties. 

The following code example illustrates how to set the maximum rows and columns for saving as CSV files.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  
  application.MaximumRowsForCsv = 3000000;
  application.MaximumColumnsForCsv = 20000;
  
  FileStream inputStream = new FileStream("Sample.csv", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(inputStream);
  IWorksheet sheet = workbook.Worksheets[0];
  
  sheet.Range[2000000, 1].Text = "Syncfusion";
  sheet.Range[20, 18000].Text = "Syncfusion";
  
  //Saving the workbook as stream
  FileStream outputStream = new FileStream("Output.csv", FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(outputStream,",");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  
  application.MaximumRowsForCsv = 3000000;
  application.MaximumColumnsForCsv = 20000;
  
  IWorkbook workbook = application.Workbooks.Open("Sample.csv");
  IWorksheet sheet = workbook.Worksheets[0];
  
  sheet.Range[2000000, 1].Text = "Syncfusion";
  sheet.Range[20, 18000].Text = "Syncfusion";
  
  //Saving the workbook
  workbook.SaveAs("Output.csv", ",");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  
  application.MaximumRowsForCsv = 3000000
  application.MaximumColumnsForCsv = 20000
  
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.csv")
  Dim sheet As IWorksheet = workbook.Worksheets(0)
  
  sheet.Range(2000000, 1).Text = "Syncfusion"
  sheet.Range(20, 18000).Text = "Syncfusion"
  
  //Saving the workbook
  workbook.SaveAs("Output.csv", ",")
End Using
{% endhighlight %}
{% endtabs %}