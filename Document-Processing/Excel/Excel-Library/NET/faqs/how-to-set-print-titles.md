---
title: How to set print titles | XlsIO | Syncfusion
description: This page demonstrates with an example how to set print titles using the .NET Excel library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to set print titles?

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or the platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF` for Windows-specific scenarios).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Add a `Sample.xlsx` file in the application's working directory, or update the file path passed to `Workbooks.Open` accordingly. Note that file paths are case-sensitive on Linux.
* Ensure the output directory is writable; the output file is created or overwritten when the code runs.
* The worksheet must span more than one printed page for the titles to be visible when printing or in Print Preview.

### Printing title rows

XlsIO allows you to designate row headers to repeat on all pages of a printed workbook using the [PrintTitleRows](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPageSetup.html#Syncfusion_XlsIO_IPageSetup_PrintTitleRows) property. The following code example demonstrates this.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.XlsIO;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;

  //ExcelOpenType.Automatic detects the file format automatically
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Print Rows 1 to 3 on every printed page
  worksheet.PageSetup.PrintTitleRows = "$A$1:$IV$3";
 
  workbook.SaveAs("TitleRows.xlsx");
  workbook.Close();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.XlsIO;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Repeat rows 1 to 3 on every printed page
  worksheet.PageSetup.PrintTitleRows = "$A$1:$IV$3";

  workbook.SaveAs("TitleRows.xlsx");
  workbook.Close();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.XlsIO

Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Repeat rows 1 to 3 on every printed page
  worksheet.PageSetup.PrintTitleRows = "$A$1:$IV$3"

  workbook.SaveAs("TitleRows.xlsx")
  workbook.Close()
End Using
{% endhighlight %}
{% endtabs %}

### Printing title columns

XlsIO allows you to designate column headers to repeat on all pages of a printed workbook using the **PrintTitleColumns** property. The following code example demonstrates how to set print title columns.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.XlsIO;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Print Columns 1 to 3 on every printed page
  worksheet.PageSetup.PrintTitleColumns = "$A$1:$C$65536";

  workbook.SaveAs("TitleColumns.xlsx");
  workbook.Close();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.XlsIO;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Repeat columns A to C on every printed page
  worksheet.PageSetup.PrintTitleColumns = "$A$1:$C$65536";

  workbook.SaveAs("TitleColumns.xlsx");
  workbook.Close();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.XlsIO

Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Repeat columns A to C on every printed page
  worksheet.PageSetup.PrintTitleColumns = "$A$1:$C$65536"

  workbook.SaveAs("TitleColumns.xlsx")
  workbook.Close()
End Using
{% endhighlight %}
{% endtabs %}

For information on Print settings, refer to section [Page Setup Settings](/document-processing/excel/excel-library/net/working-with-excel-worksheet#page-setup-settings).

## See Also

* [How to ignore print areas set in a worksheet?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-ignore-print-areas-set-in-a-worksheet)
* [How to set a line break inside a cell?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-set-a-line-break-inside-a-cell)
* [How to set or format a Header/Footer?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-set-or-format-a-header-footer)
* [How to print Excel document?](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/excel-to-pdf-conversion#print-excel-document)
* [What are page setup settings?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-excel-worksheet#page-setup-settings)
