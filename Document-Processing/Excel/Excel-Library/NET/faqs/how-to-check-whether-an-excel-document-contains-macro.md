---
title: How to check whether an Excel document contains a macro | XlsIO | Syncfusion
description: Code example that checks whether an Excel workbook contains a VBA macro using the .NET Excel library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to check whether an Excel document contains a macro?

You can check whether an Excel workbook contains a VBA macro by reading the [`IWorkbook.HasMacros`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbook.html#Syncfusion_XlsIO_IWorkbook_HasMacros) property on the [`IWorkbook`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbook.html) instance returned by `Application.Workbooks.Open(...)`. The property returns `true` when the workbook contains an embedded VBA project (the file is then typically saved as `.xls`, `.xlsm`, or `.xlsb`) and `false` otherwise.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Have a workbook called `Test.xls` (or `Test.xlsm` / `Test.xlsb`) in the application's working directory. The workbook may or may not contain macros; the sample reads `HasMacros` either way.
* Ensure the output directory is writable; `Workbook.SaveAs` creates or overwrites the destination file. The path is resolved relative to `Environment.CurrentDirectory`; file paths are case-sensitive on Linux.

## Check whether the workbook contains macros

The flow is: open the workbook, read `IWorkbook.HasMacros`, write the result somewhere visible, then save the workbook. The sample writes the result to cell `A1` of the first worksheet so the user can confirm the detection in Excel.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.XlsIO;
using System;

class Program
{
  static void Main(string[] args)
  {
    //ExcelEngine is IDisposable; the using block guarantees the engine is disposed
    using (ExcelEngine excelEngine = new ExcelEngine())
    {
      IApplication application = excelEngine.Excel;

      //ExcelOpenType.Automatic detects the source file format from the file's bytes
      IWorkbook workbook = application.Workbooks.Open("Test.xls", ExcelOpenType.Automatic);
      IWorksheet sheet = workbook.Worksheets[0];

      //Read the flag; rename to camelCase to follow C# conventions
      bool hasMacros = workbook.HasMacros;

      //Surface the result so it is visible in the saved workbook and in the console
      sheet["A1"].Text = "Has macros: " + hasMacros;
      Console.WriteLine($"Workbook '{workbook.FileName}' HasMacros = {hasMacros}");

      //Save the workbook (preserves the .xls format and any embedded VBA project)
      workbook.SaveAs("Output.xls");
      workbook.Close();
    }
  }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.XlsIO;
using System;

class Program
{
  static void Main(string[] args)
  {
    //ExcelEngine is IDisposable; the using block guarantees the engine is disposed
    using (ExcelEngine excelEngine = new ExcelEngine())
    {
      IApplication application = excelEngine.Excel;

      IWorkbook workbook = application.Workbooks.Open("Test.xls", ExcelOpenType.Automatic);
      IWorksheet sheet = workbook.Worksheets[0];

      //Read the flag; rename to camelCase to follow C# conventions
      bool hasMacros = workbook.HasMacros;

      //Surface the result so it is visible in the saved workbook and in the console
      sheet["A1"].Text = "Has macros: " + hasMacros;
      Console.WriteLine($"Workbook '{workbook.FileName}' HasMacros = {hasMacros}");

      //Save the workbook (preserves the .xls format and any embedded VBA project)
      workbook.SaveAs("Output.xls");
      workbook.Close();
    }
  }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.XlsIO
Imports System

Module Module1
  Sub Main()
    'ExcelEngine is IDisposable; the Using block guarantees the engine is disposed
    Using excelEngine As ExcelEngine = New ExcelEngine()
      Dim application As IApplication = excelEngine.Excel

      Dim workbook As IWorkbook = application.Workbooks.Open("Test.xls", ExcelOpenType.Automatic)
      Dim sheet As IWorksheet = workbook.Worksheets(0)

      'Read the flag
      Dim hasMacros As Boolean = workbook.HasMacros

      'Surface the result so it is visible in the saved workbook and in the console
      sheet("A1").Text = "Has macros: " & hasMacros
      Console.WriteLine($"Workbook '{workbook.FileName}' HasMacros = {hasMacros}")

      'Save the workbook (preserves the .xls format and any embedded VBA project)
      workbook.SaveAs("Output.xls")
      workbook.Close()
    End Using
  End Sub
End Module
{% endhighlight %}
{% endtabs %}

## See Also

* [How to open an Excel 2013 Macro Enabled Template?](how-to-open-an-excel-2013-macro-enabled-template)
* [Does XlsIO support Excel files with macros that are digitally signed?](does-xlsio-support-excel-files-with-macros-that-are-digitally-signed)
* [Does XlsIO support password protected macro in the Excel documents?](does-xlsio-support-password-protected-macro-in-the-excel-documents)
* [How to create a macro?](https://help.syncfusion.com/file-formats/xlsio/working-with-macros#creating-a-macro)
* [How to edit a macro?](https://help.syncfusion.com/file-formats/xlsio/working-with-macros#editing-a-macro)
* [How to remove macros?](https://help.syncfusion.com/file-formats/xlsio/working-with-macros#removing-macros)
