---
title: How to avoid an exception when adding worksheets with the same name | XlsIO | Syncfusion
description: Explains how to suppress the duplicate-sheet-name exception in XlsIO by enabling IgnoreSheetNameException on IApplication.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to avoid an exception when adding worksheets with the same name?

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Ensure the output directory is writable; `Workbook.SaveAs` creates or overwrites the destination file. The path is resolved relative to `Environment.CurrentDirectory`; file paths are case-sensitive on Linux.

## Allow duplicate sheet names

The following code example sets `IgnoreSheetNameException` to `true` and then attempts to create two worksheets with the same name. The first `Create` adds a sheet; the second returns the existing sheet without throwing.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.XlsIO;

class Program
{
  static void Main(string[] args)
  {
    //ExcelEngine is IDisposable; the using block guarantees the engine is disposed
    using (ExcelEngine excelEngine = new ExcelEngine())
    {
      IApplication application = excelEngine.Excel;
      application.DefaultVersion = ExcelVersion.Excel2013;

      //Set the flag BEFORE any Worksheets.Create call so it takes effect for subsequent calls
      application.IgnoreSheetNameException = true;

      IWorkbook workbook = application.Workbooks.Create(1);

      //First call: creates a new worksheet named "Sheet"
      IWorksheet sheet1 = workbook.Worksheets.Create("Sheet");

      //Second call: returns the existing "Sheet" reference rather than throwing
      IWorksheet sheet2 = workbook.Worksheets.Create("Sheet");

      //Confirm the behavior: sheet1 and sheet2 are the same instance
      //(this writes the same value through both references)
      sheet1["A1"].Text = "Hello from both references";
      sheet2["A1"].Text = "Updated through sheet2";

      //Save the workbook
      workbook.SaveAs("Output.xlsx");
      workbook.Close();
    }
  }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.XlsIO;

class Program
{
  static void Main(string[] args)
  {
    //ExcelEngine is IDisposable; the using block guarantees the engine is disposed
    using (ExcelEngine excelEngine = new ExcelEngine())
    {
      IApplication application = excelEngine.Excel;
      application.DefaultVersion = ExcelVersion.Excel2013;

      //Set the flag BEFORE any Worksheets.Create call so it takes effect for subsequent calls
      application.IgnoreSheetNameException = true;

      IWorkbook workbook = application.Workbooks.Create(1);

      //First call: creates a new worksheet named "Sheet"
      IWorksheet sheet1 = workbook.Worksheets.Create("Sheet");

      //Second call: returns the existing "Sheet" reference rather than throwing
      IWorksheet sheet2 = workbook.Worksheets.Create("Sheet");

      //Confirm the behavior: sheet1 and sheet2 are the same instance
      sheet1["A1"].Text = "Hello from both references";
      sheet2["A1"].Text = "Updated through sheet2";

      //Save the workbook to the path of your choice
      string fileName = "Output.xlsx";
      workbook.SaveAs(fileName);
      workbook.Close();
    }
  }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.XlsIO

Module Module1
  Sub Main()
    'ExcelEngine is IDisposable; the Using block guarantees the engine is disposed
    Using excelEngine As ExcelEngine = New ExcelEngine()
      Dim application As IApplication = excelEngine.Excel
      application.DefaultVersion = ExcelVersion.Excel2013

      'Set the flag BEFORE any Worksheets.Create call so it takes effect for subsequent calls
      application.IgnoreSheetNameException = True

      Dim workbook As IWorkbook = application.Workbooks.Create(1)

      'First call: creates a new worksheet named "Sheet"
      Dim sheet1 As IWorksheet = workbook.Worksheets.Create("Sheet")

      'Second call: returns the existing "Sheet" reference rather than throwing
      Dim sheet2 As IWorksheet = workbook.Worksheets.Create("Sheet")

      'Confirm the behavior: sheet1 and sheet2 are the same instance
      sheet1("A1").Text = "Hello from both references"
      sheet2("A1").Text = "Updated through sheet2"

      'Save the workbook to the path of your choice
      Dim fileName As String = "Output.xlsx"
      workbook.SaveAs(fileName)
      workbook.Close()
    End Using
  End Sub
End Module
{% endhighlight %}
{% endtabs %}

## See Also

* [How to overcome UnauthorizedAccessException?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-overcome-unauthorizedaccessexception)
* [How to overcome StackOverflow exception with IWorksheet Calculate()?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-overcome-stackoverflow-exception-with-iworksheet-calculate)
* [What are the known exceptions of XlsIO?](https://help.syncfusion.com/document-processing/excel/excel-library/net/known-exceptions)
* [How to create a named range in Excel?](https://help.syncfusion.com/document-processing/excel/excel-library/net/migrate-from-office-automation-to-syncfusion-xlsio/create-named-range-in-excel)
* [How to use Named Ranges with XlsIO?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-use-named-ranges-with-xlsio)

