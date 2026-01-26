---
title: Syncfusion Excel to CSV Conversion
description: In this section, you can learn how to convert Excel docuemnt to CSV document using Syncfusion Essential XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# Excel to CSV Conversion

XlsIO supports converting Excel file to CSV file by saving the workbook using the [SaveAs](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_SaveAs_System_IO_Stream_System_String_) method. When saving as CSV, users can specify various delimiters to structure the data appropriately. By default, Syncfusion<sup>&reg;</sup> XlsIO uses a comma (,) as the delimiter.

**Delimiters Used in CSV files**

* Comma (,)
* Tab (\t)
* Semicolon (;)
* Colon (:)
* Space ( )
* Equals Sign (=)

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
  worksheet.SaveAs("Output.csv", ",")
End Using

{% endhighlight %}
{% endtabs %}  
 
A complete working example to convert an Excel file to CSV in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Excel%20to%20CSV/Excel%20to%20CSV/.NET/Excel%20to%20CSV).

**Maximum Rows and Columns for CSV**

By default, XlsIO allows only 1048576 rows and 16256 columns while loading or saving a CSV document. This limit can be increased by modifying the [MaximumRowsForCsv](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IApplication.html#Syncfusion_XlsIO_IApplication_MaximumRowsForCsv) and [MaximumColumnsForCsv](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IApplication.html#Syncfusion_XlsIO_IApplication_MaximumColumnsForCsv) properties. 

The following code example illustrates how to set the maximum rows and columns for saving as CSV files.

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
  
  //Saving the workbook 
  workbook.SaveAs("Output.csv",",");
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

## Excel to TSV Conversion

TSV (Tab-Separated Values) files can be created by saving a workbook with the tab separator (\t).

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
