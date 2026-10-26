---
title: About Syncfusion .NET Excel to HTML Conversion | Syncfusion
description: Learn about introduction of converting Excel workbooks or worksheets to HTML using the Syncfusion .NET Excel Library and more details.
platform: document-processing
control: XlsIO
documentation: UG
---

# About Syncfusion .NET Excel to HTML Conversion

XlsIO converts a worksheet or an entire workbook to HTML while preserving basic formatting. The features preserved during conversion are:

* Styles
* Hyperlinks
* Images
* 2D Charts

The following code example illustrates how to convert an Excel file to HTML.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  // Initialize Excel engine and create a new workbook
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];
  worksheet.Range["A1:M20"].Text = "Html Document";

  // Save a workbook as HTML file
  workbook.SaveAsHtml("Sample.html", Syncfusion.XlsIO.Implementation.HtmlSaveOptions.Default);

  workbook.Close();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet sheet = workbook.Worksheets[0];
  sheet.Range["A1:M20"].Text = "Html Document";

  // Save a workbook as HTML file
  workbook.SaveAsHtml("Sample.html", Syncfusion.XlsIO.Implementation.HtmlSaveOptions.Default);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)
  sheet.Range("A1:M20").Text = "Html Document"

  ' Save a workbook as HTML file
  workbook.SaveAsHtml("Sample.html", Syncfusion.XlsIO.Implementation.HtmlSaveOptions.Default)
End Using
{% endhighlight %}
{% endtabs %}

## HtmlSaveOptions

XlsIO also provides options to save a worksheet with the displayed text or value in the cell to HTML file. The following code example illustrates this.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Excel%20to%20HTML/Excel%20to%20HTML/.NET/Excel%20to%20HTML/Excel%20to%20HTML/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	// Initialize Excel engine and create a new workbook
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet worksheet = workbook.Worksheets[0];
	worksheet.Range["A1:M20"].Text = "Html Document";
	worksheet.UsedRange.AutofitColumns();

	// Create the instance of SaveOptions
	HtmlSaveOptions saveOptions = new HtmlSaveOptions();
	saveOptions.TextMode = HtmlSaveOptions.GetText.DisplayText;

	// Save the workbook as HTML
	workbook.SaveAsHtml(Path.GetFullPath("Output/Output.html"), saveOptions);
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet sheet = workbook.Worksheets[0];

  // Create the instance of SaveOptions
  HtmlSaveOptions options = new HtmlSaveOptions();
  options.TextMode = HtmlSaveOptions.GetText.DisplayText;
  options.ImagePath = "../../Images/";

  // Save the sheet as HTML
  sheet.SaveAsHtml("Sample.html", options);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  ' Create the instance of SaveOptions
  Dim options As New HtmlSaveOptions()
  options.TextMode = HtmlSaveOptions.GetText.DisplayText
  options.ImagePath = "../../Images/"

  ' Save the sheet as HTML
  sheet.SaveAsHtml("Sample.html", options)
End Using
{% endhighlight %}
{% endtabs %}  

A complete working example to save an Excel worksheet as HTML file using [HtmlSaveOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.Implementation.HtmlSaveOptions.html) in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Excel%20to%20HTML/Excel%20to%20HTML/.NET/Excel%20to%20HTML).

## See also

* [Convert Excel to PDF](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/overview)
* [Convert Excel to image](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-image/overview)
* [Convert Excel to CSV (or TSV)](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-csv/overview)
* [Convert a chart to an image](https://help.syncfusion.com/document-processing/excel/conversions/chart-to-image/overview)
* [Syncfusion .NET Excel (XlsIO) — Licensing overview](https://help.syncfusion.com/document-processing/licensing/overview)

