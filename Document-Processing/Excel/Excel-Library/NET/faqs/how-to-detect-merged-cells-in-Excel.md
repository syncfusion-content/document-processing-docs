---
title: How to detect merged cells in Excel? | XlsIO | Syncfusion
description: Explains how to detect merged cell ranges in an XlsIO worksheet and dump their addresses to a new worksheet.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to detect merged cells in Excel?

The merged cell ranges in an Excel worksheet are exposed as an array of [`IRange`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html) on the [`MergedCells`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_MergedCells) property of [`IWorksheet`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html). Each entry's `.Address` is the address of one merged region (for example, `A1:C1`). The collection is **zero-based** and contains one entry per merge; if the worksheet has no merged cells, the array is empty. The following code example reads `worksheet.MergedCells` and dumps the addresses to a new "MergedCellsReport" worksheet so the result is visible in the saved workbook.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Have a workbook called `Sample.xlsx` in the application's working directory. The workbook should contain at least one merged cell range for the report to have visible content.
* Ensure the output directory is writable; `Workbook.SaveAs` creates or overwrites the destination file.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
  IWorksheet worksheet = workbook.Worksheets[0];

  //Create a new worksheet
  IWorksheet mergedCells = workbook.Worksheets.Create("MergedCells");

  //Get the list of merged cells
  for (int pos = 0; pos < worksheet.MergedCells.Length; pos++)
  {
    mergedCells.Range["A" + (pos + 1).ToString()].Text = (pos + 1).ToString() + "th Merged region = " + worksheet.MergedCells[pos].Address;
  }

  //Autofit the used range
  mergedCells.UsedRange.AutofitColumns();

  //Saving the workbook 
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
  IWorksheet worksheet = workbook.Worksheets[0];

  //Create a new worksheet
  IWorksheet mergedCells = workbook.Worksheets.Create("MergedCells");

  //Get the list of merged cells
  for (int pos = 0; pos < worksheet.MergedCells.Length; pos++)
  {
    mergedCells.Range["A" + (pos+1).ToString()].Text = (pos+1).ToString()+"th Merged region = "+ worksheet.MergedCells[pos].Address;
  }

  //Autofit the used range
  mergedCells.UsedRange.AutofitColumns();

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = ExcelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Create a new worksheet
  Dim mergedCells As IWorksheet = workbook.Worksheets.Create("MergedCells")

  'Get the list of merged cells
  For pos As Integer = 0 To worksheet.MergedCells.Length - 1 Step 1
    mergedCells.Range("A" + (pos + 1).ToString()).Text = (pos + 1).ToString() + "th Merged region = " + worksheet.MergedCells(pos).Address
  Next

  'Autofit the used range
  mergedCells.UsedRange.AutofitColumns()

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}
