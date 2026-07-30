---
title: Excel cannot open the file in Document Processing XlsIO | Syncfusion
description: This page shows how to resolve "Excel cannot open the file because the Document Processing is not valid..." using XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to resolve "Excel cannot open the file 'filename.xlsx'..." error?

Microsoft Excel reports the error **"Excel cannot open the file 'filename.xlsx' because the file format for the file extension is not valid. Verify that the file has not been corrupted and that the file extension matches the format of the file"** when there is a mismatch between the file's binary format (for example, an Office Open XML OOXML zip container) and the file extension (for example, `.xls`). The placeholder `'filename.xlsx'` is replaced by Excel with the actual file name; the wording is otherwise identical.

In Syncfusion<sup>&reg;</sup> XlsIO, the default workbook version is **Excel 97-2003** (`.xls`). If you save a workbook with `Workbooks.Create()` and call `SaveAs("Sample.xlsx")` without setting the version, the resulting file is `.xls` content inside a `.xlsx` wrapper, which Excel refuses to open. There are two ways to fix this: set `IApplication.DefaultVersion` once for the application, or set `IWorkbook.Version` per-workbook before saving.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Make sure the output directory is writable; `Workbook.SaveAs` creates or overwrites the destination file.

## Set the application version before saving

The simplest fix is to set `IApplication.DefaultVersion` once before creating any workbook. The setting applies to every workbook subsequently created or opened by the same `IApplication` instance.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.XlsIO;

//ExcelEngine is IDisposable; the using block guarantees the engine is disposed
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;

  //Set the default workbook version for every workbook created by this IApplication
  application.DefaultVersion = ExcelVersion.Excel2013;

  //Create a new workbook (uses DefaultVersion = Excel2013, so saving as .xlsx is correct)
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet sheet = workbook.Worksheets[0];
  sheet["A1"].Text = "Hello from XlsIO";

  //Save the workbook in Excel 2013 format with the matching .xlsx extension
  workbook.SaveAs("Sample.xlsx");
  workbook.Close();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.XlsIO;

//ExcelEngine is IDisposable; the using block guarantees the engine is disposed
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;

  //Create a new workbook (uses DefaultVersion = Excel2013, so saving as .xlsx is correct)
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet sheet = workbook.Worksheets[0];
  sheet["A1"].Text = "Hello from XlsIO";

  //Save the workbook in Excel 2013 format with the matching .xlsx extension
  workbook.SaveAs("Sample.xlsx");
  workbook.Close();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.XlsIO

'ExcelEngine is IDisposable; the Using block guarantees the engine is disposed
Using excelEngine As New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013

  'Create a new workbook (uses DefaultVersion = Excel2013, so saving as .xlsx is correct)
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)
  sheet("A1").Text = "Hello from XlsIO"

  'Save the workbook in Excel 2013 format with the matching .xlsx extension
  workbook.SaveAs("Sample.xlsx")
  workbook.Close()
End Using
{% endhighlight %}
{% endtabs %}

## Set the workbook version directly

If you need to save the same workbook in multiple formats (for example, a `.xls` and a `.xlsx` output), set `workbook.Version` per-workbook rather than relying on `application.DefaultVersion`.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.XlsIO;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  IWorkbook workbook = application.Workbooks.Create(1);

  //Save in Excel 97-2003 binary format with the matching .xls extension
  workbook.Version = ExcelVersion.Excel97to2003;
  workbook.SaveAs("Sample.xls");

  //Save the same workbook in Excel 2013 OOXML format with the matching .xlsx extension
  workbook.Version = ExcelVersion.Excel2013;
  workbook.SaveAs("Sample.xlsx");

  workbook.Close();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.XlsIO;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Create(1);

  //Save in Excel 97-2003 binary format with the matching .xls extension
  workbook.Version = ExcelVersion.Excel97to2003;
  workbook.SaveAs("Sample.xls");

  //Save the same workbook in Excel 2013 OOXML format with the matching .xlsx extension
  workbook.Version = ExcelVersion.Excel2013;
  workbook.SaveAs("Sample.xlsx");

  workbook.Close();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.XlsIO

Using excelEngine As New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Create(1)

  'Save in Excel 97-2003 binary format with the matching .xls extension
  workbook.Version = ExcelVersion.Excel97to2003
  workbook.SaveAs("Sample.xls")

  'Save the same workbook in Excel 2013 OOXML format with the matching .xlsx extension
  workbook.Version = ExcelVersion.Excel2013
  workbook.SaveAs("Sample.xlsx")

  workbook.Close()
End Using
{% endhighlight %}
{% endtabs %}

## See Also

* [How to resolve the File does not contain workbook stream error](how-to-resolve-the-file-does-not-contain-workbook-stream-error)
* [What are the known exceptions of XlsIO?](https://help.syncfusion.com/document-processing/excel/excel-library/net/known-exceptions)
* [What are the supported features by file formats?](https://help.syncfusion.com/document-processing/excel/excel-library/net/supported-features-by-file-formats)
