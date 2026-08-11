---
title: Fix the "File Does Not Contain a Workbook Stream" Error | Syncfusion
description: Explains why XlsIO throws the "File does not contain a workbook stream" error and how to detect unsupported files up front.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to resolve the "File does not contain a workbook stream" error?

Syncfusion<sup>&reg;</sup> XlsIO does not support Excel files in formats older than Excel 97 (BIFF8). When you try to open such a file with `Workbooks.Open(...)`, XlsIO throws the exception **"File does not contain a workbook stream"** rather than reading the unsupported content. You can detect a supported file up front by calling [`IApplication.IsSupported`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IApplication.html#Syncfusion_XlsIO_IApplication_IsSupported_System_String_) before attempting to open it.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

## Detect a supported file before opening it

The following code example uses `IApplication.IsSupported` to check whether a file is in a supported Excel format. It is safe to call before `Workbooks.Open` as a pre-flight check.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.XlsIO;

//ExcelEngine is IDisposable; the using block guarantees the engine is disposed
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;

  //Returns true when the file is in a supported Excel format (BIFF8 / XLSX / XLSB / SpreadsheetML / CSV)
  bool isSupported = application.IsSupported("Sample.xls");

  if (isSupported)
  {
    //Proceed to open the workbook
    IWorkbook workbook = application.Workbooks.Open("Sample.xls");
    workbook.Close();
  }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.XlsIO;

//ExcelEngine is IDisposable; the using block guarantees the engine is disposed
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;

  //Returns true when the file is in a supported Excel format (BIFF8 / XLSX / XLSB / SpreadsheetML / CSV)
  bool isSupported = application.IsSupported("Sample.xls");

  if (isSupported)
  {
    //Proceed to open the workbook
    IWorkbook workbook = application.Workbooks.Open("Sample.xls");
    workbook.Close();
  }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.XlsIO

'ExcelEngine is IDisposable; the Using block guarantees the engine is disposed
Using excelEngine As New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013

  'Returns true when the file is in a supported Excel format (BIFF8 / XLSX / XLSB / SpreadsheetML / CSV)
  Dim isSupported As Boolean = application.IsSupported("Sample.xls")

  If isSupported Then
    'Proceed to open the workbook
    Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xls")
    workbook.Close()
  End If
End Using
{% endhighlight %}
{% endtabs %}

N> This method is available from 12.4 version onwards.
## See Also

* [How to resolve Excel cannot open the file filename.xlsx... error?](how-to-resolve-excel-cannot-open-the-file-because-the-file-format-for-the-file-extension-is-not-valid)
* [What are the known exceptions of XlsIO?](https://help.syncfusion.com/document-processing/excel/excel-library/net/known-exceptions)
* [How to open an Excel file from stream?](how-to-open-an-excel-file-from-stream)
* [How to save a file to stream?](how-to-save-a-file-to-stream)
