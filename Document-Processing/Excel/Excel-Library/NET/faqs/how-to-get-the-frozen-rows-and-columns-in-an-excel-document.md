---
title: How to Retrieve Frozen Rows and Columns in Excel? | Syncfusion
description: Learn how to read the frozen pane state of an Excel worksheet using the FreezeRow and FreezeColumn APIs in XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to Retrieve Frozen Rows and Columns in Excel?

In Syncfusion<sup>&reg;</sup> XlsIO, a worksheet's frozen-pane state is exposed on the **internal** [`WorksheetImpl.Pane`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.Implementation.WorksheetImpl.html) property, which returns a [`PaneRecord`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.Implementation.PaneRecord.html) with four useful properties: `FirstRow`, `FirstColumn`, `HorizontalSplit`, and `VerticalSplit`. For a more public-API approach, the worksheet's `FreezeRow` and `FreezeColumn` properties expose the same information (1-based row/column index of the split, or `0` if no freeze).

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`).
* Register a valid Syncfusion license at application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* The example creates a sample workbook with three frozen rows and two frozen columns, then reads the state back through the internal `PaneRecord`. No input file is required.
* Ensure the working directory is writable; the example writes `Sample.xlsx`.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
    IWorksheet worksheet = workbook.Worksheets[0];

    //Get the pane record
    PaneRecord paneRecord = (worksheet as WorksheetImpl).Pane;

    //Get the first visible row
    int rowValue = paneRecord.FirstRow;

    //Get the first visible column
    int columnValue = paneRecord.FirstColumn;

    //Get the no of frozen rows
    int frozenrows = paneRecord.HorizontalSplit;

    //Get the no of frozen columns
    int frozencolumns = paneRecord.VerticalSplit;
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("../../Data/InuputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    //Get the pane record
    PaneRecord paneRecord = (worksheet as WorksheetImpl).Pane;

    //Get the first visible row
    int rowValue = paneRecord.FirstRow;

    //Get the first visible column
    int columnValue = paneRecord.FirstColumn;

    //Get the no of frozen rows
    int frozenrows = paneRecord.HorizontalSplit;

    //Get the no of frozen columns
    int frozencolumns = paneRecord.VerticalSplit;
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("../../Data/InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Get the pane record
    Dim paneRecord As PaneRecord = CType(worksheet, WorksheetImpl).Pane

    'Get the first visible row
    Dim rowValue As Integer = paneRecord.FirstRow

    'Get the first visible column
    Dim columnValue As Integer = paneRecord.FirstColumn

    'Get the number of frozen rows
    Dim frozenRows As Integer = paneRecord.HorizontalSplit

    'Get the number of frozen columns
    Dim frozenColumns As Integer = paneRecord.VerticalSplit
End Using
{% endhighlight %}
{% endtabs %}

## See Also

* [WorksheetImpl API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.Implementation.WorksheetImpl.html)
* [PaneRecord API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.Implementation.PaneRecord.html)
