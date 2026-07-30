---
title: How to use named ranges with XlsIO | Syncfusion
description: This page demonstrates with an example how to use named ranges in the .NET Excel library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to use named ranges with XlsIO?

A named range can be added to a worksheet or to the entire workbook, depending on the required scope. The following code example demonstrates this. For more information, see [Define and use names in formulas](https://support.microsoft.com/en-us/office/define-and-use-names-in-formulas-4d0f13ac-53b7-422e-afd2-abd7ff379c64).

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or the platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF` for Windows-specific scenarios).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Ensure the output directory is writable; the output file is created or overwritten when the code runs.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.XlsIO;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;

  //Workbooks.Create(int) creates a workbook with the given number of worksheets
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Add a named range to the workbook (workbook-scoped)
  IName workbookName = workbook.Names.Add("WorkBookName");
  workbookName.RefersToRange = worksheet.Range["I8"];

  //Loop through the named ranges in the workbook
  foreach (IName name in workbook.Names)
  {
    Console.WriteLine(name.Name);
  }

  //Add a named range to the worksheet (worksheet-scoped)
  IName localName = worksheet.Names.Add("WorkSheetName");
  localName.RefersToRange = worksheet.Range["J8"];

  //Loop through the named ranges in the worksheet
  foreach (IName name in worksheet.Names)
  {
    Console.WriteLine(name.Name);
  }

  workbook.SaveAs("NamedRange.xlsx");
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
  IWorksheet worksheet = workbook.Worksheets[0];

  //Add a named range to the workbook (workbook-scoped)
  IName workbookName = workbook.Names.Add("WorkBookName");
  workbookName.RefersToRange = worksheet.Range["I8"];

  //Loop through the named ranges in the workbook
  foreach (IName name in workbook.Names)
  {
    Console.WriteLine(name.Name);
  }

  //Add a named range to the worksheet (worksheet-scoped)
  IName localName = worksheet.Names.Add("WorkSheetName");
  localName.RefersToRange = worksheet.Range["J8"];

  //Loop through the named ranges in the worksheet
  foreach (IName name in worksheet.Names)
  {
    Console.WriteLine(name.Name);
  }

  workbook.SaveAs("NamedRange.xlsx");
  workbook.Close();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.XlsIO

Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Add a named range to the workbook (workbook-scoped)
  Dim workbookName As IName = workbook.Names.Add("WorkBookName")
  workbookName.RefersToRange = worksheet.Range("I8")

  'Loop through the named ranges in the workbook
  For Each name As IName In workbook.Names
    Console.WriteLine(name.Name)
  Next

  'Add a named range to the worksheet (worksheet-scoped)
  Dim localName As IName = worksheet.Names.Add("WorkSheetName")
  localName.RefersToRange = worksheet.Range("J8")

  'Loop through the named ranges in the worksheet
  For Each name As IName In worksheet.Names
    Console.WriteLine(name.Name)
  Next

  workbook.SaveAs("NamedRange.xlsx")
  workbook.Close()
End Using
{% endhighlight %}
{% endtabs %}

## See Also

* [How to avoid exception when adding worksheets with same name?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-avoid-exception-when-adding-worksheets-with-same-name)
* [How to create named range in Excel?](https://help.syncfusion.com/document-processing/excel/excel-library/net/migrate-from-office-automation-to-syncfusion-xlsio/create-named-range-in-excel)
* [How to create a sparkline from a named range?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-create-a-sparkline-from-a-named-range)
* [How to define names?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-formulas#defined-names)
* [How to use named ranges in formulas?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-formulas#named-ranges-in-formulas)
* [In which situation we use AutoDetectComplexScript converter property?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/in-which-situation-we-use-autodetectcomplexscript-converter-property)
