---
title: Sorting and Filtering of Pivot Tables | Excel library | Syncfusion
description: In this section, you can learn how to sort and filter pivot table in Excel document using .NET Excel Library.
platform: document-processing
control: XlsIO
documentation: UG
---

# Sorting and Filtering

## Sorting

The [AutoSort](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPivotField.html#Syncfusion_XlsIO_IPivotField_AutoSort_Syncfusion_XlsIO_PivotFieldSortType_System_Int32_) method of a pivot field sorts the pivot row or column field values based on the values of a specified data field. You can sort the pivot table in the following directions:

* Top to Bottom
* Left to Right

### Sort a Pivot Table Field Top to Bottom

Top to Bottom sorting sorts the values of the pivot row field based on the sort type. To apply Top to Bottom sorting to a pivot table, call the [AutoSort](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPivotField.html#Syncfusion_XlsIO_IPivotField_AutoSort_Syncfusion_XlsIO_PivotFieldSortType_System_Int32_) method on the pivot row field. The second argument is the 1-based index of the data field whose values are used as the sort key.

The following code example illustrates how to apply Top to Bottom sorting to a pivot table.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Pivot%20Table/Sort%20Top%20to%20Bottom/.NET/Sort%20Top%20to%20Bottom/Sort%20Top%20to%20Bottom/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet sheet = workbook.Worksheets[1];
	IPivotTable pivotTable = sheet.PivotTables[0];

	// Pivot Top to Bottom sorting.
	IPivotField rowField = pivotTable.RowFields[0];
	rowField.AutoSort(PivotFieldSortType.Ascending, 1);

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/PivotSort.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
  IWorksheet sheet = workbook.Worksheets[1];
  IPivotTable pivotTable = sheet.PivotTables[0];

  // Pivot Top to Bottom sorting.
  IPivotField rowField = pivotTable.RowFields[0];
  rowField.AutoSort(PivotFieldSortType.Ascending, 1);

  workbook.SaveAs("PivotFieldAutoSort.xlsx");
  excelEngine.ThrowNotSavedOnDestroy = false;
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
  Dim sheet As IWorksheet = workbook.Worksheets(1)
  Dim pivotTable As IPivotTable = sheet.PivotTables(0)

  ' Pivot Top to Bottom sorting.
  Dim rowField As IPivotField = pivotTable.RowFields(0)
  rowField.AutoSort(PivotFieldSortType.Ascending, 1)

  workbook.SaveAs("PivotSortTopToBottom.xlsx")
  excelEngine.ThrowNotSavedOnDestroy = False
End Using
{% endhighlight %}
{% endtabs %}

A complete working example for top to bottom sort in pivot table in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Pivot%20Table/Sort%20Top%20to%20Bottom/.NET/Sort%20Top%20to%20Bottom).

### Sort a Pivot Table Field Left to Right

Left to Right sorting sorts the values of the pivot column field based on the sort type. To apply Left to Right sorting to a pivot table, call the [AutoSort](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPivotField.html#Syncfusion_XlsIO_IPivotField_AutoSort_Syncfusion_XlsIO_PivotFieldSortType_System_Int32_) method on the pivot column field. The second argument is the 1-based index of the data field whose values are used as the sort key.

The following code example illustrates how to apply Left to Right sorting to a pivot table.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Pivot%20Table/Sort%20Left%20to%20Right/.NET/Sort%20Left%20to%20Right/Sort%20Left%20to%20Right/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet sheet = workbook.Worksheets[1];
	IPivotTable pivotTable = sheet.PivotTables[0];

	// Pivot table Left to Right sorting.
	IPivotField columnField = pivotTable.ColumnFields[0];
	columnField.AutoSort(PivotFieldSortType.Descending, 1);

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/PivotSort.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
  IWorksheet sheet = workbook.Worksheets[1];
  IPivotTable pivotTable = sheet.PivotTables[0];

  // Pivot table Left to Right sorting.
  IPivotField columnField = pivotTable.ColumnFields[0];
  columnField.AutoSort(PivotFieldSortType.Ascending, 1);

  workbook.SaveAs("PivotFieldAutoSort.xlsx");
  excelEngine.ThrowNotSavedOnDestroy = false;
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
  Dim sheet As IWorksheet = workbook.Worksheets(1)
  Dim pivotTable As IPivotTable = sheet.PivotTables(0)

  ' Pivot table Left to Right sorting.
  Dim columnField As IPivotField = pivotTable.ColumnFields(0)
  columnField.AutoSort(PivotFieldSortType.Ascending, 1)

  workbook.SaveAs("PivotSortLeftToRight.xlsx")
  excelEngine.ThrowNotSavedOnDestroy = False
End Using
{% endhighlight %}
{% endtabs %}

A complete working example for left to right sort in pivot table in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Pivot%20Table/Sort%20Left%20to%20Right/.NET/Sort%20Left%20to%20Right). 

N> The [IsRefreshOnLoad](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.Implementation.PivotTables.PivotCacheImpl.html#Syncfusion_XlsIO_Implementation_PivotTables_PivotCacheImpl_IsRefreshOnLoad) property of the pivot cache is automatically set to `true` when [AutoSort](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPivotField.html#Syncfusion_XlsIO_IPivotField_AutoSort_Syncfusion_XlsIO_PivotFieldSortType_System_Int32_) is applied to pivot fields. The pivot table will refresh its layout when the file is next opened in Excel.

## Filtering

Filtering limits the pivot table to the subset of data that meets the specified criteria. In XlsIO, use the [IPivotFilters](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPivotFilters.html) interface and the `IPivotField.Items` collection to apply page, label, value, and item filters.

### Applying page filters

The page field filter or report filter can filter the pivot table based on the page field items. The following code snippet illustrates how to apply multiple filters to the page field items.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set field axis to page
pivotTable.Fields[4].Axis = PivotAxisTypes.Page;

//Apply page field filter
IPivotField pageField = pivotTable.Fields[4];

//Select multiple items in page field to filter
pageField.Items[1].Visible = false;
pageField.Items[2].Visible = false;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set field axis to page
pivotTable.Fields[4].Axis = PivotAxisTypes.Page;

//Apply page field filter
IPivotField pageField = pivotTable.Fields[4];

//Select multiple items in page field to filter
pageField.Items[1].Visible = false;
pageField.Items[2].Visible = false;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set field axis to page
pivotTable.Fields(4).Axis = PivotAxisTypes.Page

'Apply page field filter
Dim pageField As IPivotField = pivotTable.Fields(4)

'Select multiple items in page field to filter
pageField.Items(1).Visible = False
pageField.Items(2).Visible = False
{% endhighlight %}
{% endtabs %}  

![Applying page filters](../Working-with-Pivot-Tables_images/Working-with-Pivot-Tables_img1.jpeg)

### Applying row or column filters

The row and column field filters can filter the pivot table based on labels, values, and items of the fields. The following code example illustrates how to apply these filters to a pivot table.

**Label filter**

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Apply row field filter
IPivotField rowField = pivotTable.Fields[2];

//Applying Label based row field filter
rowField.PivotFilters.Add(PivotFilterType.CaptionEqual, null, "Central", null);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Apply row field filter
IPivotField rowField = pivotTable.Fields[2];

//Applying Label based row field filter
rowField.PivotFilters.Add(PivotFilterType.CaptionEqual, null, "Central", null);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Apply row field filter
Dim rowField As IPivotField = pivotTable.Fields(2)

'Applying Label based row field filter
rowField.PivotFilters.Add(PivotFilterType.CaptionEqual, Nothing, "Central", Nothing)
{% endhighlight %}
{% endtabs %}  

![Applying label filters](../Working-with-Pivot-Tables_images/Working-with-Pivot-Tables_img2.jpeg)

**Value filter**

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
IPivotField field = pivotTable.Fields[2];

//Apply value filter
field.PivotFilters.Add(PivotFilterType.ValueLessThan, field, "1341", null);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
IPivotField field = pivotTable.Fields[2];

//Apply value filter
field.PivotFilters.Add(PivotFilterType.ValueLessThan, field, "1341", null);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Apply value filter
Dim field As IPivotField = pivotTable.Fields(2)

'Applying value filter
field.PivotFilters.Add(PivotFilterType.ValueLessThan, field, "1341", Nothing)
{% endhighlight %}
{% endtabs %}

![Applying value filters](../Working-with-Pivot-Tables_images/Working-with-Pivot-Tables_img3.jpeg)

The following end-to-end example combines page, label, item, and value filters in a single pivot table.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Pivot%20Table/Pivot%20Filter/.NET/Pivot%20Filter/Pivot%20Filter/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"), ExcelOpenType.Automatic);
	IWorksheet worksheet = workbook.Worksheets[0];
	IWorksheet pivotSheet = workbook.Worksheets[1];

	IPivotCache cache = workbook.PivotCaches.Add(worksheet["A1:H50"]);

	IPivotTable pivotTable = pivotSheet.PivotTables.Add("PivotTable1", pivotSheet["A1"], cache);
	pivotTable.Fields[4].Axis = PivotAxisTypes.Page;
	pivotTable.Fields[2].Axis = PivotAxisTypes.Row;
	pivotTable.Fields[6].Axis = PivotAxisTypes.Row;
	pivotTable.Fields[3].Axis = PivotAxisTypes.Column;

	IPivotField dataField = pivotTable.Fields[5];
	pivotTable.DataFields.Add(dataField, "Sum of Units", PivotSubtotalTypes.Sum);

	//Apply page filter
	pivotTable.Fields[4].Axis = PivotAxisTypes.Page;

	IPivotField pageField = pivotTable.Fields[4];

	pageField.Items[1].Visible = false;
	pageField.Items[2].Visible = false;

	//Apply label filter
	IPivotField rowField = pivotTable.Fields[2];
	rowField.PivotFilters.Add(PivotFilterType.CaptionEqual, null, "East", null);

	//Apply item filter
	IPivotField colField = pivotTable.Fields[3];
	colField.Items[0].Visible = false;
	colField.Items[1].Visible = false;

	//Apply value filter
	IPivotField field = pivotTable.Fields[2];
	field.PivotFilters.Add(PivotFilterType.ValueLessThan, field, "1341", null);

	pivotTable.BuiltInStyle = PivotBuiltInStyles.PivotStyleMedium2;
	pivotSheet.Activate();

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/PivotFilter.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Open("PivotData.xlsx");
  IWorksheet worksheet = workbook.Worksheets[0];
  IWorksheet pivotSheet = workbook.Worksheets[1];

  IPivotCache cache = workbook.PivotCaches.Add(worksheet["A1:H50"]);
  IPivotTable pivotTable = pivotSheet.PivotTables.Add("PivotTable1", pivotSheet["A1"], cache);
  pivotTable.Fields[4].Axis = PivotAxisTypes.Page;
  pivotTable.Fields[2].Axis = PivotAxisTypes.Row;
  pivotTable.Fields[6].Axis = PivotAxisTypes.Row;
  pivotTable.Fields[3].Axis = PivotAxisTypes.Column;

  IPivotField dataField = pivotTable.Fields[5];
  pivotTable.DataFields.Add(dataField, "Sum of Units", PivotSubtotalTypes.Sum);

  //Apply page filter
  pivotTable.Fields[4].Axis = PivotAxisTypes.Page;

  IPivotField pageField = pivotTable.Fields[4];
  pageField.Items[1].Visible = false;
  pageField.Items[2].Visible = false;

  //Apply label filter
  IPivotField rowField = pivotTable.Fields[2];
  rowField.PivotFilters.Add(PivotFilterType.CaptionEqual, null, "East", null);

  //Apply item filter
  IPivotField colField = pivotTable.Fields[3];
  colField.Items[0].Visible = false;
  colField.Items[1].Visible = false;

  //Apply value filter
  IPivotField field = pivotTable.Fields[2];
  field.PivotFilters.Add(PivotFilterType.ValueLessThan, field, "1341", null);

  pivotTable.BuiltInStyle = PivotBuiltInStyles.PivotStyleMedium2;
  pivotSheet.Activate();

  workbook.SaveAs("PivotTable.xlsx");

  //No exception will be thrown if there are unsaved workbooks.
  excelEngine.ThrowNotSavedOnDestroy = false;
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Open("PivotData.xlsx")
  Dim worksheet As IWorksheet = workbook.Worksheets(0)
  Dim pivotSheet As IWorksheet = workbook.Worksheets(1)

  Dim cache As IPivotCache = workbook.PivotCaches.Add(worksheet("A1:H50"))
  Dim pivotTable As IPivotTable = pivotSheet.PivotTables.Add("PivotTable1", pivotSheet("A1"), cache)
  pivotTable.Fields(4).Axis = PivotAxisTypes.Page
  pivotTable.Fields(2).Axis = PivotAxisTypes.Row
  pivotTable.Fields(6).Axis = PivotAxisTypes.Row
  pivotTable.Fields(3).Axis = PivotAxisTypes.Column

  Dim dataField As IPivotField = pivotSheet.PivotTables(0).Fields(5)
  pivotTable.DataFields.Add(dataField, "Sum of Units", PivotSubtotalTypes.Sum)

  'Applying page filter
  pivotTable.Fields(4).Axis = PivotAxisTypes.Page

  Dim pageField As IPivotField = pivotTable.Fields(4)
  pageField.Items(1).Visible = False
  pageField.Items(2).Visible = False

  'Apply label filter
  Dim rowField As IPivotField = pivotTable.Fields(2)
  rowField.PivotFilters.Add(PivotFilterType.CaptionEqual, Nothing, "East", Nothing)

  'Apply item filter
  Dim colField As IPivotField = pivotTable.Fields(3)
  colField.Items(0).Visible = False
  colField.Items(1).Visible = False

  'Applying value filter
  Dim field As IPivotField = pivotTable.Fields(2)
  field.PivotFilters.Add(PivotFilterType.ValueLessThan, field, "1341", Nothing)

  pivotTable.BuiltInStyle = PivotBuiltInStyles.PivotStyleMedium2
  pivotSheet.Activate()

  workbook.SaveAs("PivotTable.xlsx")

  'No exception will be thrown if there are unsaved workbooks
  excelEngine.ThrowNotSavedOnDestroy = False
End Using
{% endhighlight %}
{% endtabs %} 

A complete working example to apply pivot filter in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Pivot%20Table/Pivot%20Filter/.NET/Pivot%20Filter). 