---
title: How to open an existing XLSX workbook and save it as XLS | Syncfusion
description: This page illustrates how to open an existing XLSX workbook and save it as XLS using .NET Excel Library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to open an existing XLSX workbook and save it as XLS?

You can open an existing .xlsx file and save it as an .xls file using XlsIO. The following code example demonstrates this.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or the platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF` for Windows-specific scenarios).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Add a sample `Sample.xlsx` file in the application's working directory, or update the file path passed to `Workbooks.Open` accordingly. Note that file paths are case-sensitive on Linux.
* The output XLS format is BIFF8 (Excel 97-2003) and supports a maximum of 65,536 rows and 256 columns per worksheet.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.XlsIO;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;

  //Open an existing XLSX file
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);

  //Save it as Excel 97-2003 (XLS) format
  workbook.Version = ExcelVersion.Excel97to2003;
  workbook.SaveAs("Output.xls");
  workbook.Close();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.XlsIO;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;

  //Open an existing XLSX file
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);

  //Save it as Excel 97-2003 (XLS) format
  workbook.Version = ExcelVersion.Excel97to2003;
  workbook.SaveAs("Output.xls");
  workbook.Close();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.XlsIO

Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013

  'Open an existing XLSX file
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic)

  'Save it as Excel 97-2003 (XLS) format
  workbook.Version = ExcelVersion.Excel97to2003
  workbook.SaveAs("Output.xls")
  workbook.Close()
End Using
{% endhighlight %}
{% endtabs %}

N> Workbook must be saved in appropriate version, failing in this leads to file corruption.

## See Also

* [How to open an Excel file from stream?](how-to-open-an-excel-file-from-stream)
* [How to open an Excel 2013 Macro Enabled Template?](how-to-open-an-excel-2013-macro-enabled-template)
* [How to create and open Excel Template files by using XlsIO?](how-to-create-and-open-excel-template-files-by-using-xlsio)
* [How to save a file to stream?](how-to-save-a-file-to-stream)
* [How to merge excel files from more than one workbook to a single file?](how-to-merge-excel-files-from-more-than-one-workbook-to-a-single-file)
* [How to open an existing workbook?](https://help.syncfusion.com/document-processing/excel/excel-library/net/loading-and-saving-workbook#opening-an-existing-workbook)
* [How to save an Excel workbook to the file system?](https://help.syncfusion.com/document-processing/excel/excel-library/net/loading-and-saving-workbook#saving-an-excel-workbook-to-file-system)
