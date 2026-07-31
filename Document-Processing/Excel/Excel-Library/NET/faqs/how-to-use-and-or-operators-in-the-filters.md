---
title: How to use AND and OR operators in the filter | Syncfusion
description: Code example to use AND and OR operators in an AutoFilter using the Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to use AND and OR operators in the filter?

You can combine multiple AutoFilter conditions in XlsIO using either the **AND** operator (all conditions must be met) or the **OR** operator (any condition can be met). The combination is controlled by the [IsAnd](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IAutoFilter.html#Syncfusion_XlsIO_IAutoFilter_IsAnd) property on the [IAutoFilter](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IAutoFilter.html) interface. By default, `IsAnd` is `true` (AND); set it to `false` to switch to OR.

The following code example applies an OR-combined AutoFilter and then narrows the results to the top 5 entries using the [Top10](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IAutoFilter.html) filter (`IsTop` and `IsTop10` must both be enabled before setting `Top10Number`).

## Prerequisites

Before running the code example, make sure the following prerequisites are met:

- Install the **Syncfusion.XlsIO.WinForms** NuGet package (for Windows) or the **Syncfusion.XlsIO.Net.Core** package (for .NET Core / .NET 6+ cross-platform targets).
- Add the required `using` directives: `using Syncfusion.XlsIO;` and (for the cross-platform sample) `using System.IO;`.
- The cross-platform sample expects the input file at `Data/InputTemplate.xlsx` relative to the application's working directory and writes the output to `Output/Filter.xlsx`.
- The Windows-specific and VB.NET samples use `Sample.xlsx` and write `Filter.xlsx` to the current working directory.

## Code example

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	#region Filter
	//Creating an AutoFilter in the first worksheet. Specifying the AutoFilter range
	worksheet.AutoFilters.FilterRange = worksheet.Range["A1:A10"];

	//Column index to which AutoFilter must be applied
	IAutoFilter filter = worksheet.AutoFilters[0];
  // This property determines how multiple filter conditions are combined.
  // If set to false, the filter will use the OR operator, meaning any condition can be met.
  // If set to true, the filter will use the AND operator, meaning all conditions must be met.
  // By default, this property is set to true (AND operator).
  filter.IsAnd = false;
	//To apply Top10Number filter, IsTop and IsTop10 must be enabled
	filter.IsTop = true;
	filter.IsTop10 = true;

	//Setting Top10 filter with number of cell to be filtered from top
	filter.Top10Number = 5;
	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/Filter.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
  IWorksheet sheet = workbook.Worksheets[0];

  //Creating an AutoFilter in the first worksheet. Specifying the AutoFilter range. 
  sheet.AutoFilters.FilterRange = sheet.Range["A1:K180"];

  //Column index to which AutoFilter must be applied
  IAutoFilter filter = sheet.AutoFilters[0];
  // This property determines how multiple filter conditions are combined.
  // If set to false, the filter will use the OR operator, meaning any condition can be met.
  // If set to true, the filter will use the AND operator, meaning all conditions must be met.
  // By default, this property is set to true (AND operator).
  filter.IsAnd = false;
  //To apply Top10Number filter, IsTop and IsTop10 must be enabled
  filter.IsTop = true;
  filter.IsTop10 = true;

  //Setting Top10 filter with number of cell to be filtered from top
  filter.Top10Number = 5;

  workbook.Version = ExcelVersion.Xlsx;
  workbook.SaveAs("Filter.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
    Dim sheet As IWorksheet = workbook.Worksheets(0)

    ' Creating an AutoFilter in the first worksheet. Specifying the AutoFilter range.
    sheet.AutoFilters.FilterRange = sheet.Range("A1:K180")

    ' Column index to which AutoFilter must be applied
    Dim filter As IAutoFilter = sheet.AutoFilters(0)

    ' This property determines how multiple filter conditions are combined.
    ' If set to false, the filter will use the OR operator, meaning any condition can be met.
    ' If set to true, the filter will use the AND operator, meaning all conditions must be met.
    ' By default, this property is set to true (AND operator).
    filter.IsAnd = False

    ' To apply Top10Number filter, IsTop and IsTop10 must be enabled
    filter.IsTop = True
    filter.IsTop10 = True

    ' Setting Top10 filter with number of cell to be filtered from top
    filter.Top10Number = 5

    workbook.Version = ExcelVersion.Xlsx
    workbook.SaveAs("Filter.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## See also

- [How to apply custom filtering to string data types using XlsIO](how-to-apply-custom-filtering-to-string-data-types-using-XlsIO.md)
- [How to remove AutoFilter from an Excel worksheet](how-to-remove-autofilter-in-an-Excel.md)
- [How to read filtered rows in Excel](how-to-read-filtered-rows-in-excel.md)
