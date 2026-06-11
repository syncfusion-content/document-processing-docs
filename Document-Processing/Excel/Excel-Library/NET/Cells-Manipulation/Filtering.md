---
title: Filtering | Excel library | Syncfusion
description: In this section, you can learn about how to filter data in an Excel document using Syncfusion .NET Excel library.
platform: document-processing
control: XlsIO
documentation: UG
---

# Filtering Data in Excel Document

Using [AutoFilters](https://support.office.com/en-US/article/Filter-data-in-a-range-or-table-01832226-31b5-4568-8806-38c37dcc180e), data can be filtered to enable quick and easy way to find and work with a subset of data in a range of cells. When the data is filtered, entire rows are hidden if values in one or more columns does not meet the filtering criteria. The following are the types of filters that can be used in XlsIO.

* Custom Filter (Conditional)
* Combination Filter (Text and DateTime filter)
* Dynamic Filter
* Color Filter
* Icon Filter
* Advanced Filter

## Applying Filter

The following code example illustrates how to apply simple auto filters.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Editing%20Excel%20cells/Filter/.NET/Filter/Filter/Program.cs,180" %}
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
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Creating an AutoFilter in the first worksheet. Specifying the AutoFilter range. 
  sheet.AutoFilters.FilterRange = sheet.Range("A1:K180")

  'Column index to which AutoFilter must be applied.
  Dim filter As IAutoFilter = sheet.AutoFilters(0)

  'To apply Top10Number filter, IsTop and IsTop10 must be enabled.
  filter.IsTop = True
  filter.IsTop10 = True

  'Setting Top10 filter with number of cell to be filtered from top
  filter.Top10Number = 5

  workbook.Version = ExcelVersion.Xlsx
  workbook.SaveAs("Filter.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to apply filter on Excel data in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Editing%20Excel%20cells/Filter/.NET/Filter).

## Custom Filter

The following code example illustrates how to apply custom filter, based on first and second condition.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Editing%20Excel%20cells/Custom%20Filter/.NET/Custom%20Filter/Custom%20Filter/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	#region Custom Filter
	//Creating an AutoFilter in the first worksheet. Specifying the AutoFilter range
	worksheet.AutoFilters.FilterRange = worksheet.Range["A1:A11"];
	IAutoFilter filter = worksheet.AutoFilters[0];

	//Specifying first condition
	IAutoFilterCondition firstCondition = filter.FirstCondition;
	firstCondition.ConditionOperator = ExcelFilterCondition.Greater;
	firstCondition.Double = 100;

	//Specifying second condition
	IAutoFilterCondition secondCondition = filter.SecondCondition;
	secondCondition.ConditionOperator = ExcelFilterCondition.Less;
	secondCondition.Double = 200;
	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/CustomFilter.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
  IWorksheet sheet = workbook.Worksheets[0];

  //Creating an AutoFilter in the first worksheet. Specifying the AutoFilter range
  sheet.AutoFilters.FilterRange = sheet.Range["A1:B323"];
  IAutoFilter filter = sheet.AutoFilters[1];

  //Specifying first condition
  IAutoFilterCondition firstCondition = filter.FirstCondition;
  firstCondition.ConditionOperator = ExcelFilterCondition.Greater;
  firstCondition.Double = 100;

  //Specifying second condition
  IAutoFilterCondition secondCondition = filter.SecondCondition;
  secondCondition.ConditionOperator = ExcelFilterCondition.Less;
  secondCondition.Double = 200;

  workbook.Version = ExcelVersion.Xlsx;
  workbook.SaveAs("Filter.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Creating an AutoFilter in the first worksheet. Specifying the AutoFilter range.
  sheet.AutoFilters.FilterRange = sheet.Range("A1:B323")
  Dim filter As IAutoFilter = sheet.AutoFilters(1)

  'Specifying first condition.
  Dim firstCondition As IAutoFilterCondition = filter.FirstCondition
  firstCondition.ConditionOperator = ExcelFilterCondition.Greater
  firstCondition.Double = 100

  'Specifying second condition.
  Dim secondCondition As IAutoFilterCondition = filter.SecondCondition
  secondCondition.ConditionOperator = ExcelFilterCondition.Less
  secondCondition.Double = 200

  workbook.Version = ExcelVersion.Xlsx
  workbook.SaveAs("Filter.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to apply custom filter on Excel data in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Editing%20Excel%20cells/Custom%20Filter/.NET/Custom%20Filter).

## Combination Filter

This filter contains both Text filter and DateTime filter. It filters the data based on multiple criteria. 

The following code example illustrates how to apply combination filter with multiple of Text filter and DateTime filter.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Editing%20Excel%20cells/Combination%20Filter/.NET/Combination%20Filter/Combination%20Filter/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	#region Combination Filter
	//Creating an AutoFilter in the first worksheet. Specifying the AutoFilter range. 
	worksheet.AutoFilters.FilterRange = worksheet.Range["A1:B22"];

	//Column index to which AutoFilter must be applied.
	IAutoFilter filter = worksheet.AutoFilters[0];

	//Applying Text filter to filter multiple text to get filter.
	filter.AddTextFilter(new string[] { "London", "Ireland", "Canada" });

	//Column index to which AutoFilter must be applied.
	filter = worksheet.AutoFilters[1];

	//Applying DateTime filter to filter the date based on DateTimeGroupingType.
	filter.AddDateFilter(2020, 11, 27, 0, 0, 0, DateTimeGroupingType.minute);
	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/CombinationFilter.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
  IWorksheet sheet = workbook.Worksheets[0];

  //Creating an AutoFilter in the first worksheet. Specifying the AutoFilter range
  sheet.AutoFilters.FilterRange = sheet.Range["A1:K180"];

  //Column index to which AutoFilter must be applied
  IAutoFilter filter = sheet.AutoFilters[2];

  //Applying Text filter to filter multiple text to get filter
  filter.AddTextFilter(new string[] { "London", "Paris", "New York City" });

  //Applying DateTime filter to filter the date based on DateTimeGroupingType
  filter.AddDateFilter(new DateTime(2013, 1, 29, 0, 0, 0), DateTimeGroupingType.day);
  filter.AddDateFilter(2014, 12, 2, 10, 30, 0, DateTimeGroupingType.minute);

  workbook.Version = ExcelVersion.Xlsx;
  workbook.SaveAs("Filter.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Creating an AutoFilter in the first worksheet. Specifying the AutoFilter range
  sheet.AutoFilters.FilterRange = sheet.Range("A1:K180")

  'Column index to which AutoFilter must be applied
  Dim filter As IAutoFilter = sheet.AutoFilters(2)

  'Applying Text filter to filter multiple text to get filter
  filter.AddTextFilter(New String() {"London", "Paris", "New York City"})

  'Applying DateTime filter to filter the date based on DateTimeGroupingType
  filter.AddDateFilter(New DateTime(2013, 1, 29, 0, 0, 0), DateTimeGroupingType.day)
  filter.AddDateFilter(2014, 12, 2, 10, 30, 0, DateTimeGroupingType.minute)

  workbook.Version = ExcelVersion.Xlsx
  workbook.SaveAs("Filter.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to apply combination filter on Excel data in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Editing%20Excel%20cells/Combination%20Filter/.NET/Combination%20Filter).

## Dynamic Filter

Dynamic filter is a relative date filter, which filters data based on [DynamicFilterType](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.DynamicFilterType.html) enumeration. 

The following code example illustrates how to apply Dynamic filter.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Editing%20Excel%20cells/Dynamic%20Filter/.NET/Dynamic%20Filter/Dynamic%20Filter/Program.cs,180" %}
 using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	#region Dynamic Filter
	//Creating an AutoFilter in the first worksheet. Specifying the AutoFilter range.
	worksheet.AutoFilters.FilterRange = worksheet.Range["A1:A13"];

	//Column index to which AutoFilter must be applied.
	IAutoFilter filter = worksheet.AutoFilters[0];

	//Applying dynamic filter to filter the date based on DynamicFilterType.
	filter.AddDynamicFilter(DynamicFilterType.NextQuarter);
	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/DynamicFilter.xlsx"));
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

  //Column index to which AutoFilter must be applied.
  IAutoFilter filter = sheet.AutoFilters[3];

  //Applying dynamic filter to filter the date based on DynamicFilterType.
  filter.AddDynamicFilter(DynamicFilterType.NextQuarter);

  workbook.Version = ExcelVersion.Xlsx;
  workbook.SaveAs("Filter.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Creating an AutoFilter in the first worksheet. Specifying the AutoFilter range.
  sheet.AutoFilters.FilterRange = sheet.Range("A1:K180")

  'Column index to which AutoFilter must be applied.
  Dim filter As IAutoFilter = sheet.AutoFilters(3)

  'Applying dynamic filter to filter the date based on DynamicFilterType.
  filter.AddDynamicFilter(DynamicFilterType.NextQuarter)

  workbook.Version = ExcelVersion.Xlsx
  workbook.SaveAs("Filter.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to apply dynamic filter on Excel data in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Editing%20Excel%20cells/Dynamic%20Filter/.NET/Dynamic%20Filter).

## Color Filter

Color Filter can be used to filter data based on the color applied to the cell or the color applied to the text in the cell. 

The following code example illustrates how to apply color filter based on cell color (fill color applied to the cell).

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Editing%20Excel%20cells/Cell%20Color%20Filter/.NET/Cell%20Color%20Filter/Cell%20Color%20Filter/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	#region Cell Color Filter
	//Creating an AutoFilter in the first worksheet. Specifying the AutoFilter range.
	worksheet.AutoFilters.FilterRange = worksheet.Range["A1:A11"];

	//Column index to which AutoFilter must be applied.
	IAutoFilter filter = worksheet.AutoFilters[0];

	//Applying color filter to filter based on Cell Color.
	filter.AddColorFilter(Syncfusion.Drawing.Color.Red, ExcelColorFilterType.CellColor);
	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/CellColorFilter.xlsx"));
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

  //Column index to which AutoFilter must be applied.
  IAutoFilter filter = sheet.AutoFilters[3];

  //Applying color filter to filter based on Cell Color.
  filter.AddColorFilter(Color.Red, ExcelColorFilterType.CellColor);

  workbook.Version = ExcelVersion.Xlsx;
  workbook.SaveAs("Filter.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Creating an AutoFilter in the first worksheet. Specifying the AutoFilter range.
  sheet.AutoFilters.FilterRange = sheet.Range("A1:K180")

  'Column index to which AutoFilter must be applied.
  Dim filter As IAutoFilter = sheet.AutoFilters(3)

  'Applying color filter to filter based on Cell Color.
  filter.AddColorFilter(Color.Red, ExcelColorFilterType.CellColor)

  workbook.Version = ExcelVersion.Xlsx
  workbook.SaveAs("Filter.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to apply color filter on Excel data based on cell color in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Editing%20Excel%20cells/Cell%20Color%20Filter/.NET/Cell%20Color%20Filter).

To filter cells based on font color of the text inside cells just change the [ExcelColorFilterType](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ExcelColorFilterType.html) to Font Color. 

The following code example illustrates how to filter the cells based on font color.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Editing%20Excel%20cells/Font%20Color%20Filter/.NET/Font%20Color%20Filter/Font%20Color%20Filter/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	#region Font Color Filter
	//Creating an AutoFilter in the first worksheet. Specifying the AutoFilter range.
	worksheet.AutoFilters.FilterRange = worksheet.Range["A1:A11"];

	//Column index to which AutoFilter must be applied.
	IAutoFilter filter = worksheet.AutoFilters[0];

	//Applying color filter to filter based on Cell Color.
	filter.AddColorFilter(Syncfusion.Drawing.Color.Red, ExcelColorFilterType.FontColor);
	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/FontColorFilter.xlsx"));
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

  //Column index to which AutoFilter must be applied.
  IAutoFilter filter = sheet.AutoFilters[3];

  //Applying color filter to filter based on Cell Color.
  filter.AddColorFilter(Color.Red, ExcelColorFilterType.FontColor);

  workbook.Version = ExcelVersion.Xlsx;
  workbook.SaveAs("Filter.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Creating an AutoFilter in the first worksheet. Specifying the AutoFilter range.
  sheet.AutoFilters.FilterRange = sheet.Range("A1:K180")

  'Column index to which AutoFilter must be applied.
  Dim filter As IAutoFilter = sheet.AutoFilters(3)

  'Applying color filter to filter based on Cell Color.
  filter.AddColorFilter(Color.Red, ExcelColorFilterType.FontColor)

  workbook.Version = ExcelVersion.Xlsx
  workbook.SaveAs("Filter.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to apply color filter on Excel data based on font color in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Editing%20Excel%20cells/Font%20Color%20Filter/.NET/Font%20Color%20Filter).

## Icon Filter

Icon filter can be used to filter data that has conditional formatting with Icon Sets applied. Applying Icon Sets for numeric data adds icons to each cell based on the value present in that cell. Using Icon Filter, the data that has only a specific Icon in it can be filtered easily.

The following code example illustrates how to apply icon filter.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Editing%20Excel%20cells/Icon%20Filter/.NET/Icon%20Filter/Icon%20Filter/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	#region Icon Filter
	//Creating an AutoFilter in the first worksheet. Specifying the AutoFilter range.
	worksheet.AutoFilters.FilterRange = worksheet.Range["A1:A8"];

	//Column index to which AutoFilter must be applied.
	IAutoFilter filter = worksheet.AutoFilters[0];

	//Applying Icon filter to filter based on applied icon set.
	filter.AddIconFilter(ExcelIconSetType.ThreeFlags, 2);
	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/IconFilter.xlsx"));
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

  //Column index to which AutoFilter must be applied.
  IAutoFilter filter = sheet.AutoFilters[3];

  //Applying Icon filter to filter based on applied icon set.
  filter.AddIconFilter(ExcelIconSetType.ThreeFlags, 2);

  workbook.Version = ExcelVersion.Xlsx;
  workbook.SaveAs("Filter.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Creating an AutoFilter in the first worksheet. Specifying the AutoFilter range.
  sheet.AutoFilters.FilterRange = sheet.Range("A1:K180")

  'Column index to which AutoFilter must be applied.
  Dim filter As IAutoFilter = sheet.AutoFilters(3)

  'Applying Icon filter to filter based on applied icon set.
  filter.AddIconFilter(ExcelIconSetType.ThreeFlags, 2)

  workbook.Version = ExcelVersion.Xlsx
  workbook.SaveAs("Filter.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to apply icon filter on Excel data in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Editing%20Excel%20cells/Icon%20Filter/.NET/Icon%20Filter).

## Advanced Filter

Advanced Filter can be used to perform more complex filtering other than basic filters. Data can be filtered with custom defined criteria range.

Advanced Filter support two types of filter action.

1. Filter in Place
2. Filter Copy

**Filter in Place**: Filter data in same location.
**Filter Copy**: Filter and copy data into new location within a worksheet.

Advanced Filter also provides an option to filter the unique records. This will remove the duplicate record from filtered data.

The following code example illustrates how to apply Advanced Filter in worksheet.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Editing%20Excel%20cells/Advanced%20Filter/.NET/Advanced%20Filter/Advanced%20Filter/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	#region Advanced Filter
	IRange filterRange = worksheet.Range["A8:G51"];
	IRange criteriaRange = worksheet.Range["A2:B5"];
	IRange copyToRange = worksheet.Range["I8"];

	//Apply the Advanced Filter with enable of unique value and copy to another place.
	worksheet.AdvancedFilter(ExcelFilterAction.FilterCopy, filterRange, criteriaRange, copyToRange, true);
	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/AdvancedFilter.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  IWorkbook workbook = application.Workbooks.Open("InputData.xlsx");
  IWorksheet sheet = workbook.Worksheets[0];

  IRange filterRange = sheet.Range["A1:C6"];
  IRange criteriaRange = sheet.Range["A10:C12"];
  IRange copyToRange = sheet.Range["K5:N5"];

  //Apply the Advanced Filter with enable of unique value and copy to another place.
  sheet.AdvancedFilter(ExcelFilterAction.FilterCopy, filterRange, criteriaRange, copyToRange, true);

  workbook.Version = ExcelVersion.Xlsx;
  workbook.SaveAs("AdvancedFilter.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  Dim workbook As IWorkbook = application.Workbooks.Open("InputData.xlsx")
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  Dim filterRange As IRange = sheet.Range("A1:C6")
  Dim criteriaRange As IRange = sheet.Range("A10:C12")
  Dim copyToRange As IRange = sheet.Range("K5:N5")

  'Apply the Advanced filter with enable of unique value and copy to another place.
  sheet.AdvancedFilter(ExcelFilterAction.FilterCopy, filterRange, criteriaRange, copyToRange, True)

  workbook.Version = ExcelVersion.Xlsx
  workbook.SaveAs("AdvancedFilter.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to apply advanced filter on Excel data in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Editing%20Excel%20cells/Advanced%20Filter/.NET/Advanced%20Filter).

## Accessing Filter

A filter and its criteria can be accessed based on its column index. 

The following code example illustrates how to access different types of filters.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Editing%20Excel%20cells/Accessing%20Filter/.NET/Accessing%20Filter/Accessing%20Filter/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	#region Accessing Filter
	//selecting the filter by column index
	IAutoFilter filter = worksheet.AutoFilters[0];

	switch (filter.FilterType)
	{
		case ExcelFilterType.CombinationFilter:
			CombinationFilter filterItems = (filter.FilteredItems as CombinationFilter);
			for (int index = 0; index < filterItems.Count; index++)
			{
				if (filterItems[index].CombinationFilterType == ExcelCombinationFilterType.TextFilter)
				{
					string textValue = (filterItems[index] as TextFilter).Text;
				}
				else
				{
					DateTimeGroupingType groupType = (filterItems[index] as DateTimeFilter).GroupingType;
				}
			}
			break;

		case ExcelFilterType.DynamicFilter:
			DynamicFilter dateFilter = (filter.FilteredItems as DynamicFilter);
			DynamicFilterType dynamicFilterType = dateFilter.DateFilterType;
			break;

		case ExcelFilterType.CustomFilter:
			IAutoFilterCondition firstCondition = filter.FirstCondition;
			ExcelFilterDataType types = firstCondition.DataType;
			break;

		case ExcelFilterType.ColorFilter:
			ColorFilter colorFilter = (filter.FilteredItems as ColorFilter);
			Syncfusion.Drawing.Color color = colorFilter.Color;
			ExcelColorFilterType filterType = colorFilter.ColorFilterType;
			break;

		case ExcelFilterType.IconFilter:
			IconFilter iconFilter = (filter.FilteredItems as IconFilter);
			int iconId = iconFilter.IconId;
			ExcelIconSetType iconSetType = iconFilter.IconSetType;
			break;
	}
	#endregion

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
  IWorksheet worksheet = workbook.Worksheets[0];

  //selecting the filter by column index
  IAutoFilter filter = worksheet.AutoFilters[0];

  switch (filter.FilterType)
  {
    case ExcelFilterType.CombinationFilter:
      CombinationFilter filterItems = (filter.FilteredItems as CombinationFilter);
      for (int index = 0; index < filterItems.Count; index++)
      {
        if (filterItems[index].CombinationFilterType == ExcelCombinationFilterType.TextFilter)
        {
          string textValue = (filterItems[index] as TextFilter).Text;
        }
        else
        {
          DateTimeGroupingType groupType = (filterItems[index] as DateTimeFilter).GroupingType;
        }
      }
      break;

    case ExcelFilterType.DynamicFilter:
      DynamicFilter dateFilter = (filter.FilteredItems as DynamicFilter);
      DynamicFilterType dynamicFilterType = dateFilter.DateFilterType;
      break;

    case ExcelFilterType.CustomFilter:
      IAutoFilterCondition firstCondition = filter.FirstCondition;
      ExcelFilterDataType types = firstCondition.DataType;
      break;

    case ExcelFilterType.ColorFilter:
      ColorFilter colorFilter = (filter.FilteredItems as ColorFilter);
      Color color = colorFilter.Color;
      ExcelColorFilterType filterType = colorFilter.ColorFilterType;
      break;

    case ExcelFilterType.IconFilter:
      IconFilter iconFilter = (filter.FilteredItems as IconFilter);
      int iconId = iconFilter.IconId;
      ExcelIconSetType iconSetType = iconFilter.IconSetType;
      break;
  }

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'selecting the filter by column index
  Dim filter As IAutoFilter = worksheet.AutoFilters(0)

  Select Case filter.FilterType
    Case ExcelFilterType.CombinationFilter
      Dim filterItems As CombinationFilter = TryCast(filter.FilteredItems, CombinationFilter)
      For index As Integer = 0 To filterItems.Count - 1
        If filterItems(index).CombinationFilterType = ExcelCombinationFilterType.TextFilter Then
          Dim textValue As String = TryCast(filterItems(index), TextFilter).Text
        Else
          Dim groupType As DateTimeGroupingType = TryCast(filterItems(index), DateTimeFilter).GroupingType
        End If
      Next
      Exit Select

    Case ExcelFilterType.DynamicFilter
      Dim dateFilter As DynamicFilter = TryCast(filter.FilteredItems, DynamicFilter)
      Dim dynamicFilterType As DynamicFilterType = dateFilter.DateFilterType
      Exit Select

    Case ExcelFilterType.CustomFilter
      Dim firstCondition As IAutoFilterCondition = filter.FirstCondition
      Dim types As ExcelFilterDataType = firstCondition.DataType
      Exit Select

    Case ExcelFilterType.ColorFilter
      Dim colorFilter As ColorFilter = TryCast(filter.FilteredItems, ColorFilter)
      Dim color As Color = colorFilter.Color
      Dim filterType As ExcelColorFilterType = colorFilter.ColorFilterType
      Exit Select

    Case ExcelFilterType.IconFilter
      Dim iconFilter As IconFilter = TryCast(filter.FilteredItems, IconFilter)
      Dim iconId As Int32 = iconFilter.IconId
      Dim iconSetType As ExcelIconSetType = iconFilter.IconSetType
      Exit Select
  End Select

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to access filters from Excel worksheet in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Editing%20Excel%20cells/Accessing%20Filter/.NET/Accessing%20Filter).

## Sorting Data with Filters

The following code example illustrates, if AutoFilters are applied, the DataSorter should be accessed through the AutoFilters of the worksheet, rather than directly through the worksheet.  

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Editing%20Excel%20cells/Sorting%20Data%20with%20Filters/.NET/Sorting%20Worksheet/Sorting%20Worksheet/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/Input.xlsx"));
  IWorksheet worksheet = workbook.Worksheets[0];

  //Access sort fields from AutoFilters
  ISortFields sortFieldsCollection = worksheet.AutoFilters.DataSorter.SortFields;

  //Copy sort fields to a list
  List<ISortField> sortFields = new List<ISortField>();

  for (int i = 0; i < sortFieldsCollection.Count; i++)
  {
      sortFields.Add(sortFieldsCollection[i]);
  }

  //Remove each sort field
  foreach (ISortField sortField in sortFields)
  {
      worksheet.AutoFilters.DataSorter.SortFields.Remove(sortField);
  }

  //Now re-use the AutoFilters DataSorter
  IDataSort sorter = worksheet.AutoFilters.DataSorter;
  sorter.SortRange = worksheet.UsedRange;
  sorter.SortFields.Add(0, SortOn.Values, OrderBy.Ascending);
  sorter.Sort();

  #region Save
  workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
  #endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("Input.xlsx");
  IWorksheet worksheet = workbook.Worksheets[0];

  //Access sort fields from AutoFilters
  ISortFields sortFieldsCollection = worksheet.AutoFilters.DataSorter.SortFields;

  //Copy sort fields to a list
  List<ISortField> sortFields = new List<ISortField>();

  for (int i = 0; i < sortFieldsCollection.Count; i++)
  {
      sortFields.Add(sortFieldsCollection[i]);
  }

  //Remove each sort field
  foreach (ISortField sortField in sortFields)
  {
      worksheet.AutoFilters.DataSorter.SortFields.Remove(sortField);
  }

  //Now re-use the AutoFilters DataSorter
  IDataSort sorter = worksheet.AutoFilters.DataSorter;
  sorter.SortRange = worksheet.UsedRange;
  sorter.SortFields.Add(0, SortOn.Values, OrderBy.Ascending);
  sorter.Sort();

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  Dim workbook As IWorkbook = application.Workbooks.Open("Input.xlsx")
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Access sort fields from AutoFilters
  If worksheet.AutoFilters IsNot Nothing AndAlso worksheet.AutoFilters.DataSorter IsNot Nothing Then
      'Copy sort fields to a list
      Dim sortFieldsList As New List(Of ISortField)()

      For i As Integer = 0 To worksheet.AutoFilters.DataSorter.SortFields.Count - 1
          sortFieldsList.Add(worksheet.AutoFilters.DataSorter.SortFields(i))
      Next

      'Remove each sort field
      For Each sortField In sortFieldsList
          worksheet.AutoFilters.DataSorter.SortFields.Remove(sortField)
      Next

      'Now re-use the AutoFilters DataSorter
      Dim sorter As IDataSort = worksheet.AutoFilters.DataSorter
      sorter.SortRange = worksheet.Range("A1:A6")
      sorter.SortFields.Add(0, SortOn.Values, OrderBy.Ascending)
      sorter.Sort()     
  End If

  workbook.SaveAs("Output.xlsx")  
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to sort data with filters in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Editing%20Excel%20cells/Sorting%20Data%20with%20Filters/.NET/Sorting%20Worksheet).