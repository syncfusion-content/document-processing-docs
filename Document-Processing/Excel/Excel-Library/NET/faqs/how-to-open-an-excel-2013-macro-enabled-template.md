---
title: How to open an Excel 2013 Macro-Enabled Template | XlsIO | Syncfusion
description: Code example to open an Excel 2013 Macro-Enabled Template using the .NET Excel Library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to open an Excel 2013 Macro-Enabled Template?

You can open an Excel 2013 Macro-Enabled Template (`.xltm`) and save it as an XLSM (Excel 2013 Macro-Enabled Document). The following code example demonstrates this.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or the platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF` for Windows-specific scenarios).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Add a sample `Sample.xltm` file in the application's working directory, or update the file path passed to `Workbooks.Open` accordingly. Note that file paths are case-sensitive on Linux.
* Ensure the output directory is writable; the output file is created or overwritten when the code runs.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.XlsIO;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;

  //ExcelOpenType.Automatic detects the template format (XLTM) automatically
  IWorkbook workbook = application.Workbooks.Open("Sample.xltm", ExcelOpenType.Automatic);

  //Preserve macros by saving in the Excel 2013 macro-enabled format
  workbook.Version = ExcelVersion.Excel2013;
  workbook.SaveAs("Output.xlsm");
  workbook.Close();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.XlsIO;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;

  //Open an existing XLTM file
  IWorkbook workbook = application.Workbooks.Open("Sample.xltm", ExcelOpenType.Automatic);

  //Preserve macros by saving in the Excel 2013 macro-enabled format
  workbook.Version = ExcelVersion.Excel2013;
  workbook.SaveAs("Output.xlsm");
  workbook.Close();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.XlsIO

Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013

  'Open an existing XLTM file
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xltm", ExcelOpenType.Automatic)

  'Preserve macros by saving in the Excel 2013 macro-enabled format
  workbook.Version = ExcelVersion.Excel2013
  workbook.SaveAs("Output.xlsm")
  workbook.Close()
End Using
{% endhighlight %}
{% endtabs %}

## See Also

* [How to check whether an Excel document contains macro?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-check-whether-an-excel-document-contains-macro)
* [Does XlsIO support Excel files with macros that are digitally signed?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/does-xlsio-support-excel-files-with-macros-that-are-digitally-signed)
* [Does XlsIO support password protected macro in the Excel documents?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/does-xlsio-support-password-protected-macro-in-the-excel-documents)
* [How to create a macro?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-macros#creating-a-macroo)
* [How to edit a macro?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-macros#editing-a-macro)
* [How to remove a macro?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-macros#removing-macros)
