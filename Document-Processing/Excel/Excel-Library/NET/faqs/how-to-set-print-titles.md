---
title: How to set print titles | XlsIO | Syncfusion
description: This page demonstrates with an example to set print titles using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to set print titles?

**Printing** **Title** **Rows**

XlsIO allows to designate row header to repeat on all pages of a printed workbook using [PrintTitleRows](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPageSetup.html#Syncfusion_XlsIO_IPageSetup_PrintTitleRows) property. The following code snippet illustrates this.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Print Rows 1 to 3 on every printed page
  worksheet.PageSetup.PrintTitleRows = "$A$1:$IV$3";
 
  workbook.SaveAs("TitleRows.xlsx");
  workbook.Close();
  excelEngine.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Print Rows 1 to 3 on every printed page
  worksheet.PageSetup.PrintTitleRows = "$A$1:$IV$3";
  workbook.SaveAs("TitleRows.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Print Rows 1 to 3 on every printed page
  worksheet.PageSetup.PrintTitleRows = "$A$1:$IV$3"
  workbook.SaveAs("TitleRows.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  

**Printing** **Title** **Columns**

XlsIO allows to designate column header to repeat on all pages of a printed workbook using **PrintTitleColumns** property. The following code illustrates printing Title Columns.

{% tabs %} 
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Print Columns 1 to 3 on every printed page
  worksheet.PageSetup.PrintTitleColumns = "$A$1:$C$65536";

  workbook.SaveAs("TitleColumns.xlsx");
  workbook.Close();
  excelEngine.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
ExcelEngine excelEngine = new ExcelEngine();            
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Excel2013;
IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
IWorksheet worksheet = workbook.Worksheets[0];

//Print Columns 1 to 3 on every printed page
worksheet.PageSetup.PrintTitleColumns = "$A$1:$C$65536";
workbook.SaveAs("TitleColumns.xlsx");
workbook.Close();
excelEngine.Dispose();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim excelEngine As New ExcelEngine()
Dim application As IApplication = excelEngine.Excel
application.DefaultVersion = ExcelVersion.Excel2013
Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic)
Dim worksheet As IWorksheet = workbook.Worksheets(0)

'Print Columns 1 to 3 on every printed page
worksheet.PageSetup.PrintTitleColumns = "$A$1:$C$65536"
workbook.SaveAs("TitleColumns.xlsx")
workbook.Close()
excelEngine.Dispose()
{% endhighlight %}
{% endtabs %}  

For information on Print settings, refer to section [Page Setup Settings](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-excel-worksheet#page-setup-settings).

## See Also

* [How to ignore print areas set in a worksheet?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-ignore-print-areas-set-in-a-worksheet)
* [How to set a line break inside a cell?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-set-a-line-break-inside-a-cell)
* [How to set or format a Header/Footer?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-set-or-format-a-header-footer)
* [How to print Excel document?](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/excel-to-pdf-conversion#print-excel-document)
* [What are page setup settings?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-excel-worksheet#page-setup-settings)
