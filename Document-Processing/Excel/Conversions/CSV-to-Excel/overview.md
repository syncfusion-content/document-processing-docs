---
title: About Syncfusion .NET CSV to Excel Conversion | Syncfusion
description: Learn about introduction of converting CSV or TSV documents to Excel workbooks using the Syncfusion .NET Excel Library and more details.
platform: document-processing
control: XlsIO
documentation: UG
---

# About Syncfusion .NET CSV to Excel Conversion

XlsIO can read a CSV file with [`IWorkbooks.Open`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbooks.html#Syncfusion_XlsIO_IWorkbooks_Open_System_String_System_String_) and write the result to an Excel workbook with [`IWorkbook.SaveAs`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbook.html#Syncfusion_XlsIO_IWorkbook_SaveAs_System_String_). The default delimiter when opening a CSV is a comma (`,`). To read other delimited formats, pass the matching character to the `Open` overload.

N> IMPORTANT: Before running the samples on this page, install the required NuGet package for your target platform and register your Syncfusion license key. For more information, see the [Licensing overview](https://help.syncfusion.com/document-processing/licensing/overview).

The supported delimiters are:

* **Comma** (`,`) — the default.
* **Tab** (`\t`) — used to open a TSV file.
* **Semicolon** (`;`)
* **Colon** (`:`)
* **Space** (` `)
* **Equals** (`=`)

The following code example illustrates how to convert a CSV to an Excel file.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/CSV%20to%20Excel/CSV%20to%20Excel/.NET/CSV%20to%20Excel/CSV%20to%20Excel/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;

	//Open the CSV file
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.csv"), ",");
	IWorksheet worksheet = workbook.Worksheets[0];

	//Saving the workbook 
	workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;

  //Open the CSV file
  IWorkbook workbook = application.Workbooks.Open("InputTemplate.csv", ",");

  //Saving the workbook 
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx

  ' Open the CSV file
  Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.csv", ",")

  ' Saving the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}
 
A complete working example to convert CSV to an Excel file in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/CSV%20to%20Excel/CSV%20to%20Excel/.NET/CSV%20to%20Excel).

## TSV to Excel Conversion

**TSV (Tab-Separated Values)** files are loaded by passing the tab character (`\t` in C#, `vbTab` in VB.NET) as the delimiter to `Workbooks.Open`. The workbook is then written to `.xlsx` with `SaveAs`.

The following code example illustrates how to convert a TSV to an Excel file.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/TSV%20to%20Excel/TSV%20to%20Excel/.NET/TSV%20to%20Excel/TSV%20to%20Excel/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;

	//Open the TSV file
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.tsv"), "\t");

	//Save the workbook
	workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;

  //Open the TSV file
  IWorkbook workbook = application.Workbooks.Open("InputTemplate.tsv", "\t");

  //Saving the workbook 
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx

  ' Open the TSV file
  Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.tsv", vbTab)

  ' Saving the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}
 
A complete working example to convert TSV to an Excel file in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/TSV%20to%20Excel/TSV%20to%20Excel/.NET/TSV%20to%20Excel).

## See also

* [Convert Excel to CSV (or TSV)](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-csv/overview)
* [Convert Excel to PDF](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/overview)
* [Convert Excel to image](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-image/overview)
* [Syncfusion .NET Excel (XlsIO) — Licensing overview](https://help.syncfusion.com/document-processing/licensing/overview)