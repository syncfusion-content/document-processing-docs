---
title: Syncfusion CSV to Excel Conversion
description: In this section, you can learn how to convert CSV docuemnt to Excel document using Syncfusion Essential XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# CSV to Excel Conversion

XlsIO supports converting CSV data to Excel files by saving the workbook using the [SaveAs](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IWorkbook.html#Syncfusion_XlsIO_IWorkbook_SaveAs_System_IO_Stream_) method. When opening a CSV file, users can specify various delimiters to structure the data appropriately.

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

  //Open the Tab delimited CSV file
  IWorkbook workbook = application.Workbooks.Open(inputStream, "\t");

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

  //Open the Tab delimited CSV file
  IWorkbook workbook = application.Workbooks.Open("InputTemplate.csv", "\t");

  //Saving the workbook 
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx

  ' Open the Tab delimited CSV file
  Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.csv", vbTab)

  ' Saving the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  
 
A complete working example to convert an Csv file to an Excel file in C# is present on [this GitHub page]().