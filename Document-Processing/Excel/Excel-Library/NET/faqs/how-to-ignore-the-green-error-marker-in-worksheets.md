---
title: How to ignore the green error marker in a worksheet | Syncfusion
description: This page demonstrates how to ignore the green error marker in a worksheet using the .NET Excel Library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to ignore the green error marker in a worksheet?

When cells contain data in a different format than expected (for example, numbers stored as text), Excel displays a green error marker in the upper-left corner of the cell. In Syncfusion<sup>&reg;</sup> XlsIO, you can suppress this marker by setting the [IgnoreErrorOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_IgnoreErrorOptions) property on a range or worksheet. The following code example demonstrates this.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or the platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF` for Windows-specific scenarios).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Add a `Sample.xlsx` file in the application's working directory, or update the file path passed to `Workbooks.Open` accordingly. Note that file paths are case-sensitive on Linux.
* Ensure the output directory is writable; the output file is created or overwritten when the code runs.

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

  //Ignore Error Options
  worksheet.Range["B3"].IgnoreErrorOptions = ExcelIgnoreError.All;

  workbook.SaveAs("IgnoreGreenError.xlsx");
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

  //Set the IgnoreErrorOptions flag to suppress the green error marker
  worksheet.Range["B3"].IgnoreErrorOptions = ExcelIgnoreError.All;

  workbook.SaveAs("IgnoreGreenError.xlsx");
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

  'Set the IgnoreErrorOptions flag to suppress the green error marker
  worksheet.Range("B3").IgnoreErrorOptions = ExcelIgnoreError.All

  workbook.SaveAs("IgnoreGreenError.xlsx")
  workbook.Close()
End Using
{% endhighlight %}
{% endtabs %}

## See Also

* [How to ignore print areas set in a worksheet?](how-to-ignore-print-areas-set-in-a-worksheet)
* [How to resolve Excel cannot open the file filename.xlsx... error?](how-to-resolve-excel-cannot-open-the-file-because-the-file-format-for-the-file-extension-is-not-valid)
* [How to resolve the File does not contain workbook stream error in Syncfusion.XlsIO.Base.dll?](how-to-resolve-the-file-does-not-contain-workbook-stream-error)
