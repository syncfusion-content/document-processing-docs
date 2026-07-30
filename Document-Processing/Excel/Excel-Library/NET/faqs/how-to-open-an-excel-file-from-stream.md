---
title: How to open an Excel file from stream | XlsIO | Syncfusion
description: This page demonstrates with an example to open an Excel file from stream using .NET Excel Library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to open an Excel file from stream?

XlsIO can open an Excel file that is supplied as a stream. The following code example demonstrates this.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or the platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF` for Windows-specific scenarios).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Add a sample `Sample.xlsx` file in the application's working directory, or update the file path passed to `FileStream` accordingly. Note that file paths are case-sensitive on Linux.
* On Windows, if the input file is open in Microsoft Excel, use `FileShare.ReadWrite` so XlsIO can read it without a sharing violation.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.XlsIO;
using System.IO;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;

  //Open the file as a stream
  using (FileStream inputStream = new FileStream("Sample.xlsx", FileMode.Open, FileAccess.Read))
  {
    //ExcelOpenType.Automatic detects the file format automatically
    IWorkbook workbook = application.Workbooks.Open(inputStream, ExcelOpenType.Automatic);
    workbook.SaveAs("Output.xlsx");
    workbook.Close();
  }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.XlsIO;
using System.IO;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;

  //FileShare.ReadWrite allows Microsoft Excel to keep the file open
  using (FileStream fileStream = new FileStream("Sample.xlsx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
  {
    IWorkbook workbook = application.Workbooks.Open(fileStream);
    workbook.SaveAs("Output.xlsx");
    workbook.Close();
  }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.XlsIO
Imports System.IO

Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013

  'FileShare.ReadWrite allows Microsoft Excel to keep the file open
  Using fileStream As New FileStream("Sample.xlsx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite)
    Dim workbook As IWorkbook = application.Workbooks.Open(fileStream)
    workbook.SaveAs("Output.xlsx")
    workbook.Close()
  End Using
End Using
{% endhighlight %}
{% endtabs %}

## See Also

* [How to open an Excel 2013 Macro Enabled Template?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-open-an-excel-2013-macro-enabled-template)
* [How to create and open Excel Template files by using XlsIO?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-create-and-open-excel-template-files-by-using-xlsio)
* [How to open an existing workbook from stream?](https://help.syncfusion.com/document-processing/excel/excel-library/net/loading-and-saving-workbook#opening-an-existing-workbook-from-stream)
* [How to open a CSV file?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-excel-worksheet#open-a-csv-file)
* [How to open an existing XLSX workbook and save it as XLS?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-open-an-existing-xlsx-workbook-and-save-it-as-xls)
* [How to resolve the File does not contain workbook stream error in Syncfusion.XlsIO.Base.dll?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-resolve-the-file-does-not-contain-workbook-stream-error)
* [How to resolve Excel cannot open the file filename.xlsx... error?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-resolve-excel-cannot-open-the-file-because-the-file-format-for-the-file-extension-is-not-valid)
* [How to save a file to stream?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-save-a-file-to-stream)
* [How to merge excel files from more than one workbook to a single file?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-merge-excel-files-from-more-than-one-workbook-to-a-single-file)
* [Does XlsIO support Excel files with macros that are digitally signed?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/does-xlsio-support-excel-files-with-macros-that-are-digitally-signed)
* [How does Excel file with uninstalled fonts is converted to PDF/Image?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-does-excel-file-with-uninstalled-fonts-is-converted-to-pdf-image)

