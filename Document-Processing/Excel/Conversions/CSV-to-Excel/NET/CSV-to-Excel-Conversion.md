---
title: Syncfusion CSV to Excel Conversion
description: In this section, you can learn how to convert CSV docuemnt to Excel document using Syncfusion Essential XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# CSV to Excel Conversion

XlsIO supports converting CSV data to Excel files by saving the workbook using the [SaveAs](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbook.html#Syncfusion_XlsIO_IWorkbook_SaveAs_System_IO_Stream_) method. When opening a CSV file, users can specify various delimiters to structure the data appropriately.

**Delimiters Used in CSV files**

* Comma (,)
* Tab (\t)
* Semicolon (;)
* Colon (:)
* Space ( )
* Equals Sign (=)

The following code example illustrates how to convert a CSV to an Excel file.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  FileStream inputStream = new FileStream("../../../Data/InputTemplate.csv", FileMode.Open, FileAccess.Read);

  //Open the CSV file
  IWorkbook workbook = application.Workbooks.Open(inputStream, ",");

  //Saving the workbook as stream
  FileStream outputStream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.Write);
  workbook.SaveAs(outputStream);

  //Dispose streams
  outputStream.Dispose();
  inputStream.Dispose();
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
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx

  ' Open the CSV file
  Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.csv", ",")

  ' Saving the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  
 
A complete working example to convert CSV to an Excel file in C# is present on [this GitHub page]().

## TSV to Excel Conversion

The following code example illustrates how to convert a TSV to an Excel file.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;

  //Open the TSV file
  FileStream inputStream = new FileStream("../../../Data/InputTemplate.tsv", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(inputStream, "\t");

  // Save the workbook as stream
  FileStream outputStream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(outputStream);

  //Dispose streams
  outputStream.Dispose();
  inputStream.Dispose();
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

  ' Save in workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  
 
A complete working example to convert TSV to an Excel file in C# is present on [this GitHub page]().