---
title: Syncfusion Excel to CSV Conversion
description: Lists how to convert an Excel workbook to a CSV (or TSV) document using the Syncfusion .NET Excel (XlsIO) library.
platform: document-processing
control: XlsIO
documentation: UG
---

# Excel to CSV Conversion

XlsIO can convert an Excel workbook to a CSV file by saving the workbook with the [`SaveAs`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbook.html#Syncfusion_XlsIO_IWorkbook_SaveAs_System_String_System_String_) overload that accepts a delimiter string. The default delimiter is a comma (`,`).

N> IMPORTANT: Before running the samples on this page, install the required NuGet package for your target platform and register your Syncfusion license key. For more information, see the [Licensing overview](https://help.syncfusion.com/document-processing/licensing/overview).

The supported delimiters are:

* **Comma** (`,`) — the default.
* **Tab** (`\t`) — produces a TSV file.
* **Semicolon** (`;`)
* **Colon** (`:`)
* **Space** (` `)
* **Equals** (`=`) — prefixes cells that begin with `=`, `+`, `-`, or `@` with a single quote so they are not interpreted as formulas when opened in a spreadsheet program. This is the recommended setting when exporting to a CSV that may be re-imported.

The following code example illustrates how to convert an Excel file to CSV.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Excel%20to%20CSV/Excel%20to%20CSV/.NET/Excel%20to%20CSV/Excel%20to%20CSV/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));

	//Saving the workbook 
	workbook.SaveAs(Path.GetFullPath("Output/Sample.csv"), ",");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");

  //Saving the workbook
  workbook.SaveAs("Output.csv", ",");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")

  ' Saving the workbook
  workbook.SaveAs("Output.csv", ",")
End Using

{% endhighlight %}
{% endtabs %}
 
A complete working example to convert an Excel file to CSV in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Excel%20to%20CSV/Excel%20to%20CSV/.NET/Excel%20to%20CSV).

## Maximum Rows and Columns for CSV

By default, XlsIO allows up to **1,048,576 rows and 16,256 columns** when loading or saving a CSV document. Exceeding these limits throws `ArgumentOutOfRangeException`. Increase them by setting [`MaximumRowsForCsv`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IApplication.html#Syncfusion_XlsIO_IApplication_MaximumRowsForCsv) and [`MaximumColumnsForCsv`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IApplication.html#Syncfusion_XlsIO_IApplication_MaximumColumnsForCsv) on `IApplication`. The properties affect loading as well as saving, so they apply whether the input is an `.xlsx` file or another `.csv`.

The following code example illustrates how to override the load/ save limits and convert a workbook to CSV.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
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
  
  // Saving the workbook
  workbook.SaveAs("Output.csv", ",");
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
  
  // Saving the workbook
  workbook.SaveAs("Output.csv", ",");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  
  application.MaximumRowsForCsv = 3000000
  application.MaximumColumnsForCsv = 20000
  
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.csv")
  Dim sheet As IWorksheet = workbook.Worksheets(0)
  
  sheet.Range(2000000, 1).Text = "Syncfusion"
  sheet.Range(20, 18000).Text = "Syncfusion"
  
  ' Saving the workbook
  workbook.SaveAs("Output.csv", ",")
End Using
{% endhighlight %}
{% endtabs %}

## Excel to TSV Conversion

**TSV (Tab-Separated Values)** files can be created by saving a workbook with the tab character (`\t` in C#, `vbTab` in VB.NET) as the delimiter.

The following code example illustrates how to convert an Excel file to TSV.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Excel%20to%20TSV/Excel%20to%20TSV/.NET/Excel%20to%20TSV/Excel%20to%20TSV/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;

	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));

	//Save the workbook in CSV format with tab(\t) as delimiter
	workbook.SaveAs(Path.GetFullPath("Output/Output.tsv"), "\t");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");

  //Saving the workbook in CSV format with tab(\t) as delimiter
  workbook.SaveAs("Output.tsv", "\t");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")

  ' Saving the workbook in CSV format with tab(\t) as delimiter
  workbook.SaveAs("Output.tsv", vbTab)
End Using
{% endhighlight %}
{% endtabs %}  
 
A complete working example to convert an Excel file to TSV in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Excel%20to%20TSV/Excel%20to%20TSV/.NET/Excel%20to%20TSV).

## See also

* [Save a workbook in CSV, TSV, or other delimited formats](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-csv/overview)
* [Convert Excel to PDF](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/overview)
* [Convert Excel to image](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-image/overview)
* [Syncfusion .NET Excel (XlsIO) — Licensing overview](https://help.syncfusion.com/document-processing/licensing/overview)
