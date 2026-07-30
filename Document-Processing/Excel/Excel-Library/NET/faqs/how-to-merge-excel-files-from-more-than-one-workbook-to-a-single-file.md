---
title: How to Merge Multiple Excel Workbooks into One | Syncfusion
description: Code example to merge several Excel files from multiple workbooks into a single file using Syncfusion XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to merge Excel files from multiple workbooks into a single file?

You can merge several Excel files from multiple workbooks into a single file. The following code example demonstrates this.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or the platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF` for Windows-specific scenarios).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Create a `Data` folder in the application's working directory and place at least one Excel file in it. The cross-platform sample expects the folder at `Data/`; the Windows-specific sample expects it at `../../Data/` relative to the output directory. Adjust the path as needed. Note that file paths are case-sensitive on Linux.
* Ensure the output directory is writable; the output file is created or overwritten when the code runs.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.XlsIO;
using System.IO;

//Load all files from the Data folder (relative to the working directory)
string[] files = Directory.GetFiles("Data/");

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;

  //Create a new empty workbook with one empty worksheet as the merge target
  IWorkbook workbook = application.Workbooks.Create(1);

  //Enumerate each workbook file and clone its worksheets into the new workbook
  foreach (string file in files)
  {
    //ExcelOpenType.Automatic detects the source file format automatically
    IWorkbook tempWorkbook = application.Workbooks.Open(file, ExcelOpenType.Automatic);

    //Clone all worksheets from the temp workbook into the merge target
    workbook.Worksheets.AddCopy(tempWorkbook.Worksheets);

    tempWorkbook.Close();
  }

  //Remove the original empty worksheet (index 0) created by Workbooks.Create(1)
  workbook.Worksheets.Remove(0);

  workbook.SaveAs("MergingFiles.xlsx");
  workbook.Close();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.XlsIO;
using System.IO;

//Load all files from the Data folder (relative to the project output directory)
string[] files = Directory.GetFiles("../../Data/");

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;

  //Create a new empty workbook with one empty worksheet as the merge target
  IWorkbook workbook = application.Workbooks.Create(1);

  //Enumerate each workbook file and clone its worksheets into the new workbook
  foreach (string file in files)
  {
    //ExcelOpenType.Automatic detects the source file format automatically
    IWorkbook tempWorkbook = application.Workbooks.Open(file, ExcelOpenType.Automatic);

    //Clone all worksheets from the temp workbook into the merge target
    workbook.Worksheets.AddCopy(tempWorkbook.Worksheets);

    tempWorkbook.Close();
  }

  //Remove the original empty worksheet (index 0) created by Workbooks.Create(1)
  workbook.Worksheets.Remove(0);

  workbook.SaveAs("MergingFiles.xlsx");
  workbook.Close();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.XlsIO
Imports System.IO

'Load all files from the Data folder (relative to the project output directory)
Dim files As String() = Directory.GetFiles("../../Data/")

Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013

  'Create a new empty workbook with one empty worksheet as the merge target
  Dim workbook As IWorkbook = application.Workbooks.Create(1)

  'Enumerate each workbook file and clone its worksheets into the new workbook
  For Each file As String In files
    'Open each file as a stream and pass it to Workbooks.Open
    Using inputStream As New FileStream(file, FileMode.Open, FileAccess.Read)
      'ExcelOpenType.Automatic detects the source file format automatically
      Dim tempWorkbook As IWorkbook = application.Workbooks.Open(inputStream, ExcelOpenType.Automatic)

      'Clone all worksheets from the temp workbook into the merge target
      workbook.Worksheets.AddCopy(tempWorkbook.Worksheets)

      tempWorkbook.Close()
    End Using
  Next

  'Remove the original empty worksheet (index 0) created by Workbooks.Create(1)
  workbook.Worksheets.Remove(0)

  workbook.SaveAs("MergingFiles.xlsx")
  workbook.Close()
End Using
{% endhighlight %}
{% endtabs %}

## See Also

* [How to open an existing XLSX workbook and save it as XLS?](how-to-open-an-existing-xlsx-workbook-and-save-it-as-xls)
* [How to create and open Excel Template files by using XlsIO?](how-to-create-and-open-excel-template-files-by-using-xlsio)
* [How to copy a range from one workbook to another?](how-to-copy-a-range-from-one-workbook-to-another)
* [Does XlsIO support Excel files with macros that are digitally signed?](does-xlsio-support-excel-files-with-macros-that-are-digitally-signed)
* [How does Excel file with uninstalled fonts is converted to PDF/Image?](how-does-excel-file-with-uninstalled-fonts-is-converted-to-pdf-image)
* [How to sort two or more columns in a pivot table?](how-to-sort-two-or-more-columns-in-a-pivot-table)
* [How to move or copy a worksheet?](https://help.syncfusion.com/file-formats/xlsio/working-with-excel-worksheet#move-or-copy-a-worksheet)

