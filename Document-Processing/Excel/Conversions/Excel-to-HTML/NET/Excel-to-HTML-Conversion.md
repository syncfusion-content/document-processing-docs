---
title: Syncfusion Excel to HTML Conversion
description: In this section, you can learn how to convert Excel docuemnt to HTML document using Syncfusion Essential XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# Excel to HTML Conversion

XlsIO provides support to convert a worksheet or entire workbook to HTML with basic formatting preserved. The supporting formats in this conversion are:

* Styles
* Hyperlinks
* Images
* 2D Charts

The following code example illustrates how to convert an Excel file to HTML.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  //Initialize excel engine and open workbook
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];
  worksheet.Range["A1:M20"].Text = "Html Document";

  //Create stream to store HTML file.
  Stream stream = new MemoryStream();

  //Save an Excel sheet as HTML file
  worksheet.SaveAsHtml(stream);
  
  //Save a workbook as HTML file
  workbook.SaveAsHtml("Sample.html", Syncfusion.XlsIO.Implementation.HtmlSaveOptions.Default);
  stream.Dispose();
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

  //Save an Excel sheet as HTML file
  sheet.SaveAsHtml("Sample.html");

  //Save the workbook as HTML file
  workbook.SaveAsHtml("Sample.html", Syncfusion.XlsIO.Implementation.HtmlSaveOptions.Default);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)
  sheet.Range("A1:M20").Text = "Html Document"

  'Save an Excel sheet as HTML file
  sheet.SaveAsHtml("Sample.html")

  'Save a workbook as HTML file
  workbook.SaveAsHtml("Sample.html", Syncfusion.XlsIO.Implementation.HtmlSaveOptions.Default)
End Using
{% endhighlight %}
{% endtabs %}

## Save Options

XlsIO also provides options to save a worksheet with the displayed text or value in the cell to HTML file. The following code example illustrates this.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Excel%20to%20HTML/Excel%20to%20HTML/.NET/Excel%20to%20HTML/Excel%20to%20HTML/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	//Initialize excel engine and open workbook
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet worksheet = workbook.Worksheets[0];
	worksheet.Range["A1:M20"].Text = "Html Document";

	//Create the instant for SaveOptions
	HtmlSaveOptions saveOptions = new HtmlSaveOptions();
	saveOptions.TextMode = HtmlSaveOptions.GetText.DisplayText;
	worksheet.UsedRange.AutofitColumns();

	#region Save as HTML
	//Saving the workbook
	workbook.SaveAsHtml(Path.GetFullPath("Output/Output.html"), saveOptions);
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet sheet = workbook.Worksheets[0];

  //Create the instant for SaveOptions
  HtmlSaveOptions options = new HtmlSaveOptions();
  options.TextMode = HtmlSaveOptions.GetText.DisplayText;
  options.ImagePath = "../../Images/";

  //Save the sheet as HTML
  sheet.SaveAsHtml("Sample.html", options);

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Create the instant for SaveOptions
  Dim options As New HtmlSaveOptions()
  options.TextMode = HtmlSaveOptions.GetText.DisplayText
  options.ImagePath = "../../Images/"

  'Save the sheet as HTML
  sheet.SaveAsHtml("Sample.html", options)

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  

A complete working example to save an Excel worksheet as HTML file using [HtmlSaveOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.Implementation.HtmlSaveOptions.html) in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Excel%20to%20HTML/Excel%20to%20HTML/.NET/Excel%20to%20HTML).

