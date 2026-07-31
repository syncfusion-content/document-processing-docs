---
title: How to protect certain cells in a worksheet | XlsIO | Syncfusion
description: This page demonstrates with an example to protect certain cells in a worksheet using .NET Excel Library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to protect certain cells in a worksheet?

All cells in an Excel worksheet have a **Locked** property, which determines whether the cell is editable. When a worksheet is protected, all cells in the worksheet are locked by default.

However, you often need to protect only certain cells in a worksheet while leaving others editable. In this scenario, protect the worksheet and set the [Locked](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IExtendedFormat.html#Syncfusion_XlsIO_IExtendedFormat_Locked) property to `false` for the cells that should remain editable. The following code example demonstrates this.

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

  //Populate the entire range with "Locked" text
  worksheet.Range["A1:K20"].Text = "Locked";

  //Mark A1:A10 as editable (CellStyle.Locked defaults to true for every cell)
  worksheet.Range["A1:A10"].CellStyle.Locked = false;
  worksheet.Range["A1:A10"].Text = "UnLocked";
  worksheet.Protect("syncfusion", ExcelSheetProtection.All);

  //To remove protection: worksheet.Unprotect("syncfusion");

  workbook.SaveAs("ProtectCells.xlsx");
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

  //Populate the entire range with "Locked" text
  worksheet.Range["A1:K20"].Text = "Locked";

  //Mark A1:A10 as editable
  worksheet.Range["A1:A10"].CellStyle.Locked = false;
  worksheet.Range["A1:A10"].Text = "Unlocked";

  //Protect the worksheet; call after setting Locked properties
  worksheet.Protect("syncfusion", ExcelSheetProtection.All);

  workbook.SaveAs("ProtectCells.xlsx");
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

  'Populate the entire range with "Locked" text
  worksheet.Range("A1:K20").Text = "Locked"

  'Mark A1:A10 as editable
  worksheet.Range("A1:A10").CellStyle.Locked = False
  worksheet.Range("A1:A10").Text = "Unlocked"

  'Protect the worksheet; call after setting Locked properties
  worksheet.Protect("syncfusion", ExcelSheetProtection.All)

  workbook.SaveAs("ProtectCells.xlsx")
  workbook.Close()
End Using
{% endhighlight %}
{% endtabs %}

N> Locking/Unlocking cells in an unprotected worksheet has no effect.

## See Also

* [How to protect Excel workbook?](https://help.syncfusion.com/document-processing/excel/excel-library/net/migrate-from-office-automation-to-syncfusion-xlsio/protect-excel-workbook)
* [How to protect worksheet?](https://help.syncfusion.com/document-processing/excel/excel-library/net/security#protect-worksheet)
* [How to protect the zip files using Syncfusion.Compression.Base?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-protect-the-zip-files-using-syncfusion-compression-base)
* [How to un-protect the zip files using Syncfusion.Compression.Base?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-un-protect-the-zip-files-using-syncfusion-compression-base)
