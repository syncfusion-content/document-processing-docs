---
title: How to check whether a given range is valid? | XlsIO | Syncfusion
description: Explains how to validate a worksheet range string in XlsIO using a try/catch workaround around IRange indexing.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to check whether a given range is valid?

A worksheet range is **valid** when the first row index is less than or equal to the last row index, **and** the first column index is less than or equal to the last column index. For example, `A1:B2` is valid; `B2:A1` is also valid (XlsIO normalizes reversed ranges to `A1:B2`); `XYZ123` is not valid. Syncfusion<sup>&reg;</sup> XlsIO does not expose a public `IsValid` method, so the recommended workaround is to call the [`IRange`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html) indexer inside a `try`/`catch` block and treat any thrown exception as "invalid".

## What counts as valid and invalid

The table below shows the typical outcome for a range string passed to `worksheet.Range[...]`. The exact list of accepted and rejected strings depends on the XlsIO build, but the examples below are representative.

| Input | Outcome | Reason |
|---|---|---|
| `"A1"` | Valid | Single cell. |
| `"A1:B2"` | Valid | Two-cell range; normalized to `A1:B2`. |
| `"B2:A1"` | Valid | Reversed range; normalized to `A1:B2`. |
| `"A1:A1"` | Valid | Single-cell range. |
| `"A1:foo"` | Invalid | Second reference is not a cell address. |
| `"1A"` | Invalid | Digits must come **after** letters. |
| `""` | Invalid | Empty string. |
| `"$$"` | Invalid | Not a cell address. |

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

## Validate a range string with try/catch

The flow is: create a temporary workbook, iterate the candidate range strings, attempt to allocate an `IRange` for each, and report the outcome. The sample includes both valid and intentionally invalid strings so the "invalid" branch is exercised.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  string[] ranges = { "D1:A14", "A14:D1", "E1:F3", "G5", "AA10", "A1:A1" };
  foreach (string range in ranges)
  {
    try
    {
      IRange temp_range = worksheet.Range[range];
      Debug.WriteLine(range + " - is valid worksheet range");
    }
    catch (Exception ex)
    {
      Debug.WriteLine(range + " - is invalid worksheet range");
    }
  }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  string[] ranges = { "D1:A14", "A14:D1", "E1:F3", "G5", "AA10", "A1:A1" };
  foreach(string range in ranges)
  {
    try
    {
      IRange temp_range = worksheet.Range[range];
      Console.WriteLine(range + " - is valid worksheet range");
    }
    catch(Exception ex)
    {
      Console.WriteLine(range + " - is invalid worksheet range");
    }
  }
  Console.ReadLine();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  Dim ranges() As String = {"D1:A14", "A14:D1", "E1:F3", "G5", "AA10", "A1:A1"}
  For Each range As String In ranges
    Try
      Dim temp_range As IRange = worksheet.Range(range)
      Console.WriteLine((range + " - is valid worksheet range"))
    Catch ex As Exception
      Console.WriteLine((range + " - is invalid worksheet range"))
    End Try
  Next
  Console.ReadLine()
End Using
{% endhighlight %}
{% endtabs %}
