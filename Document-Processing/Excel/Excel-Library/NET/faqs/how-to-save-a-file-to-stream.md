---
title: How to save a file to stream | XlsIO | Syncfusion
description: Learn how to save an Excel file to a stream programmatically using the .NET Excel Library with code examples.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to save a file to stream?

XlsIO can save a workbook to a .NET stream. The following code example demonstrates this.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or the platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF` for Windows-specific scenarios).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Add a sample `Sample.xlsx` file in the application's working directory, or update the file path passed to `Workbooks.Open` accordingly. Note that file paths are case-sensitive on Linux.
* Ensure the output directory is writable; the output file will be created or overwritten.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.XlsIO;
using System.IO;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;

  //ExcelOpenType.Automatic detects the input file format automatically
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);

  //FileMode.Create overwrites any existing file with the new content
  using (FileStream fileStream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.ReadWrite))
  {
    //Save the workbook to a stream
    workbook.SaveAs(fileStream);
  }
  workbook.Close();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.XlsIO;
using System.IO;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);

  //FileShare.ReadWrite allows other processes to read the output while it is being written
  using (FileStream fileStream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.ReadWrite, FileShare.ReadWrite))
  {
    //Save the workbook to a stream
    workbook.SaveAs(fileStream);
  }
  workbook.Close();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.XlsIO
Imports System.IO

Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic)

  'FileShare.ReadWrite allows other processes to read the output while it is being written
  Using fileStream As New FileStream("Output.xlsx", FileMode.Create, FileAccess.ReadWrite, FileShare.ReadWrite)
    'Save the workbook to a stream
    workbook.SaveAs(fileStream)
  End Using
  workbook.Close()
End Using
{% endhighlight %}
{% endtabs %}

## See Also

* [How to open an Excel file from stream?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-open-an-excel-file-from-stream)
* [How to save an Excel workbook to stream?](https://help.syncfusion.com/document-processing/excel/excel-library/net/loading-and-saving-workbook#saving-a-excel-workbook-to-stream)
* [How to resolve the File does not contain workbook stream error in Syncfusion.XlsIO.Base.dll?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-resolve-the-file-does-not-contain-workbook-stream-error)
* [How to resolve Excel cannot open the file filename.xlsx... error?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-resolve-excel-cannot-open-the-file-because-the-file-format-for-the-file-extension-is-not-valid)
* [How to open an existing XLSX workbook and save it as XLS?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-open-an-existing-xlsx-workbook-and-save-it-as-xls)
* [How to merge excel files from more than one workbook to a single file?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-merge-excel-files-from-more-than-one-workbook-to-a-single-file)
* [Does XlsIO support Excel files with macros that are digitally signed?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/does-xlsio-support-excel-files-with-macros-that-are-digitally-signed)
* [How does Excel file with uninstalled fonts is converted to PDF/Image?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-does-excel-file-with-uninstalled-fonts-is-converted-to-pdf-image)
