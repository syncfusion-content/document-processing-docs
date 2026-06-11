---
title: How to use AND and OR operators in the filter | Syncfusion
description: Code example to use AND and OR operators in the filter using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to use AND and OR operators in the filter?

You can use AND and OR operators in the filter by using XlsIO. The following code snippet illustrates this.

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