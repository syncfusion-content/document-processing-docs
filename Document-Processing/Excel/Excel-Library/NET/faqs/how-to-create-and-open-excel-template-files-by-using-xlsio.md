---
title: How to create and open Excel template files using XlsIO | Syncfusion
description: This page shows how to create and open Excel template files using the .NET Excel Library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to create and open an Excel template file using XlsIO?

## Prerequisites

Before running the code examples, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or the platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF` for Windows-specific scenarios).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Ensure the output directory is writable; template files are created or overwritten when the code runs.

## Creating Excel template files

Excel template files (`.xlt` for Excel 97-2003 and `.xltx` for Excel 2007+) can be created in XlsIO by saving a workbook as a template using the [ExcelSaveType](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ExcelSaveType.html) enumeration. The following code example demonstrates this.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.XlsIO;
using System.IO;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;

  //Workbooks.Create(int) creates a workbook with the given number of worksheets
  IWorkbook workbook = application.Workbooks.Create(1);

  //Save as XLT (Excel 97-2003 template)
  workbook.Version = ExcelVersion.Excel97to2003;
  using (FileStream xltStream = new FileStream("XLTFile.xlt", FileMode.Create, FileAccess.ReadWrite))
  {
    workbook.SaveAs(xltStream, ExcelSaveType.SaveAsTemplate);
  }

  //Save as XLTX (Excel 2007+ template)
  workbook.Version = ExcelVersion.Excel2007;
  using (FileStream xltxStream = new FileStream("XLTXFile.xltx", FileMode.Create, FileAccess.ReadWrite))
  {
    workbook.SaveAs(xltxStream, ExcelSaveType.SaveAsTemplate);
  }

  workbook.Close();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.XlsIO;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;

  //Workbooks.Create(int) creates a workbook with the given number of worksheets
  IWorkbook workbook = application.Workbooks.Create(1);

  //Save as XLT (Excel 97-2003 template)
  workbook.Version = ExcelVersion.Excel97to2003;
  workbook.SaveAs("XLTFile.xlt", ExcelSaveType.SaveAsTemplate);

  //Save as XLTX (Excel 2007+ template)
  workbook.Version = ExcelVersion.Excel2007;
  workbook.SaveAs("XLTXFile.xltx", ExcelSaveType.SaveAsTemplate);

  workbook.Close();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.XlsIO

Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013

  'Workbooks.Create(Integer) creates a workbook with the given number of worksheets
  Dim workbook As IWorkbook = application.Workbooks.Create(1)

  'Save as XLT (Excel 97-2003 template)
  workbook.Version = ExcelVersion.Excel97to2003
  workbook.SaveAs("XLTFile.xlt", ExcelSaveType.SaveAsTemplate)

  'Save as XLTX (Excel 2007+ template)
  workbook.Version = ExcelVersion.Excel2007
  workbook.SaveAs("XLTXFile.xltx", ExcelSaveType.SaveAsTemplate)

  workbook.Close()
End Using
{% endhighlight %}
{% endtabs %}

## Opening Excel template files

In XlsIO, an Excel template file (`.xlt` or `.xltx`) is opened in the same way as an Excel workbook (`.xls` or `.xlsx`). The following code example demonstrates this.

>**Note:** The output `Output.xlsx` is a regular workbook, not a template, because the save format is determined by the file extension and the workbook's `Version` property at the time of `SaveAs`.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.XlsIO;
using System.IO;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;

  //ExcelOpenType.Automatic detects the template format (XLT or XLTX) automatically
  using (FileStream inputStream = new FileStream("Sample.xltx", FileMode.Open, FileAccess.Read))
  {
    IWorkbook workbook = application.Workbooks.Open(inputStream, ExcelOpenType.Automatic);

    //FileMode.Create overwrites any existing file with the new content
    using (FileStream outputStream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.ReadWrite))
    {
      workbook.SaveAs(outputStream);
    }
    workbook.Close();
  }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.XlsIO;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;

  //Open the Excel template (.xltx or .xlt)
  IWorkbook workbook = application.Workbooks.Open("Sample.xltx", ExcelOpenType.Automatic);
  workbook.SaveAs("Output.xlsx");
  workbook.Close();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.XlsIO

Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013

  'Open the Excel template (.xltx or .xlt)
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xltx", ExcelOpenType.Automatic)
  workbook.SaveAs("Output.xlsx")
  workbook.Close()
End Using
{% endhighlight %}
{% endtabs %}

## See Also

* [How to create a chart with a discontinuous range?](how-to-create-a-chart-with-a-discontinuous-range)
* [How to create a sparkline from a named range?](how-to-create-a-sparkline-from-a-named-range)
* [How to open an Excel 2013 Macro Enabled Template?](how-to-open-an-excel-2013-macro-enabled-template)
* [How to open an Excel file from stream?](how-to-open-an-excel-file-from-stream)
* [How to open an existing XLSX workbook and save it as XLS?](how-to-open-an-existing-xlsx-workbook-and-save-it-as-xls)
* [Does XlsIO support Excel files with macros that are digitally signed?](does-xlsio-support-excel-files-with-macros-that-are-digitally-signed)
* [How to create a simple Excel file?](https://help.syncfusion.com/document-processing/excel/excel-library/net/overview#create-a-simple-excel-file)
* [How to fill template-based data using Template Markers?](https://help.syncfusion.com/document-processing/excel/excel-library/net/overview#template-based-data-filling-using-template-markers)
* [How to open an existing workbook?](https://help.syncfusion.com/document-processing/excel/excel-library/net/loading-and-saving-workbook#opening-an-existing-workbook)
* [How to open a CSV file?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-excel-worksheet#open-a-csv-file)
