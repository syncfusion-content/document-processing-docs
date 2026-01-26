---
title: Working with Pivot Tables | Excel library | Syncfusion
description: In this section, you can learn how to create and use pivot tables operations in Excel document using XlsIO
platform: document-processing
control: XlsIO
documentation: UG
---
# Working with Pivot Tables

You can easily arrange and summarize complex data in a [Pivot Table](https://support.microsoft.com/en-gb/office/create-a-pivottable-in-excel-74ce8afc-2446-4816-80ee-20ca7fb71793?redirectSourcePath=%252fen-us%252farticle%252fPivotTable-I-Get-started-with-PivotTable-reports-in-Excel-2007-bfe774d3-3e20-46f7-b6a3-f7984855d665). 

Creation and manipulation of pivot tables is supported in Excel 2007 and later formats (i.e., *.xlsx), along with preserving existing pivot tables.

N> Creation and manipulation of pivot tables is not supported in Excel 2003 format (i.e., *.xls). It is only possible to preserve the existing pivot table in this format.

## Create, Edit and Remove

### Create

Steps to create a simple pivot table: 

* Add pivot cache
* Add pivot table
* Add row and column fields
* Add data fields

Pivot tables do not take data directly from the source data, but take from the pivot cache that memorizes a snapshot of the data. The [IPivotCache](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPivotCache.html) interface caches the data that needs to be summarized. 

The data in worksheet is added to the pivot cache as follows.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Create Pivot cache with the given data range
IPivotCache cache = workbook.PivotCaches.Add(worksheet["A1:H50"]);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Create Pivot cache with the given data range
IPivotCache cache = workbook.PivotCaches.Add(worksheet["A1:H50"]);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Create Pivot cache with the given data range
Dim cache As IPivotCache = workbook.PivotCaches.Add(worksheet("A1:H50"))
{% endhighlight %}
{% endtabs %}  

[IPivotTable](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPivotTable.html) represents a single pivot table object created from the cache. It has properties that customizes the pivot table. The following code creates a blank pivot table. 

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Create "PivotTable1" with the cache at the specified range
IPivotTable pivotTable = worksheet.PivotTables.Add("PivotTable1", worksheet["A1"], cache);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Create "PivotTable1" with the cache at the specified range
IPivotTable pivotTable = worksheet.PivotTables.Add("PivotTable1", worksheet["A1"], cache);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Create "PivotTable1" with the cache at the specified range
Dim pivotTable As IPivotTable = worksheet.PivotTables.Add("PivotTable1", worksheet("A1"), cache)
{% endhighlight %}
{% endtabs %}  

The pivot table should be populated with required fields. The [IPivotField](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPivotField.html) represents a single field in the pivot table, which includes row, column, and data field axes. 

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Add Pivot table fields (row and column fields)
pivotTable.Fields[2].Axis = PivotAxisTypes.Row;
pivotTable.Fields[6].Axis = PivotAxisTypes.Row;
pivotTable.Fields[3].Axis = PivotAxisTypes.Column;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Add Pivot table fields (row and column fields)
pivotTable.Fields[2].Axis = PivotAxisTypes.Row;
pivotTable.Fields[6].Axis = PivotAxisTypes.Row;
pivotTable.Fields[3].Axis = PivotAxisTypes.Column;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Add Pivot table fields (row and column fields)
pivotTable.Fields(2).Axis = PivotAxisTypes.Row
pivotTable.Fields(6).Axis = PivotAxisTypes.Row
pivotTable.Fields(3).Axis = PivotAxisTypes.Column
{% endhighlight %}
{% endtabs %}  

The [IPivotDataFields](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPivotDataFields.html) represents a collection of data fields in the pivot table. The data field is added with the required subtotal function using the [PivotSubtotalTypes](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.PivotSubtotalTypes.html) enumeration. The following code explains how to configure a pivot field as a data field.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Add data field
IPivotField field = pivotTable.Fields[5];
pivotTable.DataFields.Add(field, "Sum", PivotSubtotalTypes.Sum);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Add data field
IPivotField field = pivotTable.Fields[5];
pivotTable.DataFields.Add(field, "Sum", PivotSubtotalTypes.Sum);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Add data field
Dim field As IPivotField = pivotTable.Fields(5)
pivotTable.DataFields.Add(field, "Sum", PivotSubtotalTypes.Sum)
{% endhighlight %}
{% endtabs %}  

The following code example illustrates how to create a pivot table with existing data in the worksheet.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Pivot%20Table/Create%20Pivot%20Table/.NET/Create%20Pivot%20Table/Create%20Pivot%20Table/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/PivotData.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];
	IWorksheet pivotSheet = workbook.Worksheets[1];

	//Create Pivot cache with the given data range
	IPivotCache cache = workbook.PivotCaches.Add(worksheet["A1:H50"]);

	//Create "PivotTable1" with the cache at the specified range
	IPivotTable pivotTable = pivotSheet.PivotTables.Add("PivotTable1", pivotSheet["A1"], cache);

	//Add Pivot table fields (Row and Column fields)
	pivotTable.Fields[2].Axis = PivotAxisTypes.Row;
	pivotTable.Fields[6].Axis = PivotAxisTypes.Row;
	pivotTable.Fields[3].Axis = PivotAxisTypes.Column;

	//Add data field
	IPivotField field = pivotTable.Fields[5];
	pivotTable.DataFields.Add(field, "Sum", PivotSubtotalTypes.Sum);

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/PivotTable.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("PivotData.xlsx");
  IWorksheet worksheet = workbook.Worksheets[0];
  IWorksheet pivotSheet = workbook.Worksheets[1];

  //Create Pivot cache with the given data range
  IPivotCache cache = workbook.PivotCaches.Add(worksheet["A1:H50"]);

  //Create "PivotTable1" with the cache at the specified range
  IPivotTable pivotTable = pivotSheet.PivotTables.Add("PivotTable1", pivotSheet["A1"], cache);

  //Add Pivot table fields (Row and Column fields)
  pivotTable.Fields[2].Axis = PivotAxisTypes.Row;
  pivotTable.Fields[6].Axis = PivotAxisTypes.Row;
  pivotTable.Fields[3].Axis = PivotAxisTypes.Column;

  //Add data field
  IPivotField field = pivotTable.Fields[5];
  pivotTable.DataFields.Add(field, "Sum", PivotSubtotalTypes.Sum);
  
  workbook.SaveAs("PivotTable.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx

  Dim workbook As IWorkbook = application.Workbooks.Open("PivotData.xlsx")
  Dim worksheet As IWorksheet = workbook.Worksheets(0)
  Dim pivotSheet As IWorksheet = workbook.Worksheets(1)

  'Create Pivot cache with the given data range
  Dim cache As IPivotCache = workbook.PivotCaches.Add(worksheet("A1:H50"))

  'Create "PivotTable1" with the cache at the specified range
  Dim pivotTable As IPivotTable = pivotSheet.PivotTables.Add("PivotTable1", pivotSheet("A1"), cache)

  'Add Pivot table fields (Row and Column fields)
  pivotTable.Fields(2).Axis = PivotAxisTypes.Row
  pivotTable.Fields(6).Axis = PivotAxisTypes.Row
  pivotTable.Fields(3).Axis = PivotAxisTypes.Column

  'Add data field
  Dim field As IPivotField = pivotTable.Fields(5)
  pivotTable.DataFields.Add(field, "Sum", PivotSubtotalTypes.Sum)

  workbook.SaveAs("PivotTable.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  

A complete working example to create a pivot table in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Pivot%20Table/Create%20Pivot%20Table/.NET/Create%20Pivot%20Table).

### Edit

To edit a pivot table, use the [Layout](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPivotTable.html#Syncfusion_XlsIO_IPivotTable_Layout) function to set the pivot data on the worksheet. With this, you can easily edit the pivot table, access its values, and make other modifications.

The following code example illustrates how to edit the pivot table.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Pivot%20Table/Edit%20Pivot%20Table/.NET/Edit%20Pivot%20Table/Edit%20Pivot%20Table/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[1];

	//Accessing the pivot table in the worksheet
	IPivotTable pivotTable = worksheet.PivotTables[0];

	//Layout the pivot table to set the values to the worksheet
	pivotTable.Layout();

	//Set Text in cell B2
	worksheet.Range["B2"].Text = "William";

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
  IWorksheet worksheet = workbook.Worksheets[1];

  //Accessing the pivot table in the worksheet
  IPivotTable pivotTable = worksheet.PivotTables[0];

  //Layout the pivot table to set the values to the worksheet
  pivotTable.Layout();

  //Set Text in cell B2
  worksheet.Range["B2"].Text = "William";

  //Saving the workbook
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
  Dim worksheet As IWorksheet = workbook.Worksheets(1)

  ' Accessing the pivot table in the worksheet
  Dim pivotTable As IPivotTable = worksheet.PivotTables(0)

  ' Layout the pivot table to set the values to the worksheet
  pivotTable.Layout()

  ' Set text in cell B2
  worksheet.Range("B2").Text = "William"

  ' Saving the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to edit a pivot table in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Pivot%20Table/Edit%20Pivot%20Table/.NET/Edit%20Pivot%20Table).

### Remove

The Remove method can be used to remove a pivot table from the worksheet. You can either remove it by specifying the index or the pivot table name from the collection.

The following code snippet illustrates how to remove a pivot table at a specified index value using the [RemoveAt](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPivotTables.html#Syncfusion_XlsIO_IPivotTables_RemoveAt_System_Int32_) method.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Removes a pivot table with the specified index from this collection
worksheet.PivotTables.RemoveAt(0);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Removes a pivot table with the specified index from this collection
worksheet.PivotTables.RemoveAt(0);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Removes a pivot table with the specified index from this collection
worksheet.PivotTables.RemoveAt(0)
{% endhighlight %}
{% endtabs %}


The following code example illustrates how to remove the pivot table using Remove method.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Pivot%20Table/Remove%20Pivot%20Table/.NET/Remove%20Pivot%20Table/Remove%20Pivot%20Table/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];
	IWorksheet pivotSheet = workbook.Worksheets[1];

	//Remove the pivot table
	pivotSheet.PivotTables.Remove("PivotTable1");

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open(@"InputTemplate.xlsx");
  IWorksheet worksheet = workbook.Worksheets[1];
  IWorksheet pivotSheet = workbook.Worksheets[1];

  //Remove the pivot table
  pivotSheet.PivotTables.Remove("PivotTable1");

  //Saving the workbook
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
  Dim worksheet As IWorksheet = workbook.Worksheets(1)
  Dim pivotSheet As IWorksheet = workbook.Worksheets(1)

  'Remove the pivot table
  pivotSheet.PivotTables.Remove("PivotTable1")

  'Saving the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to remove a pivot table in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Pivot%20Table/Remove%20Pivot%20Table/.NET/Remove%20Pivot%20Table).

## Styles and Formatting

A pivot table can be accessed from the [IPivotTables](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPivotTables.html) interface, which contains the collection of pivot tables in the worksheet. You can apply styles and formatting to the pivot table using  [IPivotTable](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPivotTable.html) properties and methods.

To learn more about styling and formatting the pivot table with the Syncfusion<sup>&reg;</sup> Excel library, [click here.](https://help.syncfusion.com/document-processing/excel/excel-library/net/pivot-table/styles-and-formatting)

## Layout

When you create pivot table in XlsIO, the pivot values are not set in the worksheet cells. Pivot table layout option set the pivot values to worksheet cells. XlsIO supports the layout option for all three pivot table types.

The following code example illustrates how to layout the pivot table.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/refs/heads/master/Pivot%20Table/Layout/.NET/Layout/Layout/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  IWorkbook workbook = application.Workbooks.Open("PivotTable.xlsx");
  IWorksheet worksheet = workbook.Worksheets[0];

  IPivotTable pivotTable = worksheet.PivotTables[0];
  //Layout the pivot table.
  pivotTable.Layout();

  //Saving the workbook 
  workbook.SaveAs("PivotTable_Layout.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  IWorkbook workbook = application.Workbooks.Open("PivotTable.xlsx");
  IWorksheet worksheet = workbook.Worksheets[1];

  IPivotTable pivotTable = worksheet.PivotTables[0];
  //Layout the pivot table.
  pivotTable.Layout();

  workbook.SaveAs("PivotTable_Layout.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  Dim workbook As IWorkbook = application.Workbooks.Open("PivotTable.xlsx")
  Dim pivotSheet As IWorksheet = workbook.Worksheets(0)

  Dim pivotTable As IPivotTable = worksheet.PivotTables(0)
  'Layout the pivot table.
  pivotTable.Layout()

  workbook.SaveAs("PivotTable_Layout.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to layout a pivot table in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Pivot%20Table/Layout/.NET/Layout). 

To learn more about pivot table layout with the Syncfusion<sup>&reg;</sup> Excel library, [click here.](https://help.syncfusion.com/document-processing/excel/excel-library/net/pivot-table/pivot-layout)

N> Based on Excel behavior, when the **Layout** method is invoked, it automatically sets the IsRefreshOnLoad property to false. To ensure data refresh on load, it's recommended to set **IsRefreshOnLoad** to true after calling Layout.

## Refresh

When you update the pivot table data source, you should refresh the pivot table manually to load the new data source into it. Essential<sup>&reg;</sup> XlsIO supports this refreshing of pivot table data source through [IsRefreshOnLoad](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.Implementation.PivotTables.PivotCacheImpl.html#Syncfusion_XlsIO_Implementation_PivotTables_PivotCacheImpl_IsRefreshOnLoad) property of [PivotCacheImpl](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.Implementation.PivotTables.PivotCacheImpl.html).

The following code example illustrates how to dynamically refresh the data in a pivot table. In prior:

* Create the pivot table using Excel GUI.
* Specify the named range to be the data source of the pivot table.
* Make sure that the **Refresh on Open** option of the pivot table is selected.
* Dynamically refresh the data in the named range.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Pivot%20Table/Dynamic%20Refresh/.NET/Dynamic%20Refresh/Dynamic%20Refresh/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet pivotSheet = workbook.Worksheets[0];

	//Change the range values that the Pivot Tables range refers to
	workbook.Names["PivotRange"].RefersToRange = pivotSheet.Range["A1:H25"];

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/PivotTable.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("PivotTable.xlsx");
  IWorksheet pivotSheet = workbook.Worksheets[0];

  //Change the range values that the Pivot Tables range refers to
  workbook.Names["PivotRange"].RefersToRange = pivotSheet.Range["A1:D27"];

  workbook.SaveAs("PivotTable_DynamicRange.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("PivotTable.xlsx")
  Dim pivotSheet As IWorksheet = workbook.Worksheets(0)

  'Change the range values that the Pivot Tables range refers to
  workbook.Names("PivotRange").RefersToRange = pivotSheet.Range("A1:D27")

  workbook.SaveAs("PivotTable_DynamicRange.xlsx")
End Using
{% endhighlight %}
{% endtabs %} 

A complete working example to refresh a pivot table dynamically in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Pivot%20Table/Dynamic%20Refresh/.NET/Dynamic%20Refresh).  

The following code example illustrates how to refresh the pivot table after update the cell value in pivot data source.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Pivot%20Table/Refresh%20Pivot%20Table/.NET/Refresh%20Pivot%20Table/Refresh%20Pivot%20Table/Program.cs,180" %}
 using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	//Updating a new value in the pivot data
    worksheet.SetValue(2, 3, "250");

	//Accessing the pivot table 
	IPivotTable pivotTable = workbook.Worksheets[1].PivotTables[0];
	PivotTableImpl pivotTableImpl = pivotTable as PivotTableImpl;

	//Refreshing pivot cache to update the pivot table
	pivotTableImpl.Cache.IsRefreshOnLoad = true;

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/RefreshPivotTable.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
  IWorksheet worksheet = workbook.Worksheets[0];

  //Updating a new value in the pivot data
  worksheet.SetValue(2, 3, "250");

  //Accessing the pivot table 
  IPivotTable pivotTable = worksheet.PivotTables[0];
  PivotTableImpl pivotTableImpl = pivotTable as PivotTableImpl;

  //Refreshing pivot cache to update the pivot table
  pivotTableImpl.Cache.IsRefreshOnLoad = true;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Updating a new value in the pivot data
  worksheet.SetValue(2, 3, "250")

  'Accessing the pivot table
  Dim pivotTable As IPivotTable = worksheet.PivotTables(0)
  Dim pivotTableImpl As PivotTableImpl = CType(pivotTable, PivotTableImpl)

  'Refreshing pivot cache to update the pivot table
  pivotTableImpl.Cache.IsRefreshOnLoad = True

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to refresh a pivot table in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Pivot%20Table/Refresh%20Pivot%20Table/.NET/Refresh%20Pivot%20Table).

## Sorting and Filtering

Sorting and filtering in pivot tables refer to the functionalities that allow users to organize and manipulate the data displayed within the pivot table dynamically.

**Sorting**

Sorting enables users to rearrange the data in the pivot table based on specified criteria, such as sorting data alphabetically, numerically, or by date. Users can sort data in ascending or descending order to analyze trends or identify patterns more easily.

**Filtering**

Filtering allows users to display only the specific data they want to see within the pivot table. Users can apply filters to individual fields in the pivot table to include or exclude certain values, categories, or ranges of data.

To learn more about sorting and filtering of pivot table with the Syncfusion<sup>&reg;</sup> Excel library, [click here.](https://help.syncfusion.com/document-processing/excel/excel-library/net/pivot-table/sorting-and-filtering)

## Grouping

Grouping is the process of categorizing data based on common characteristics or values to facilitate analysis and visualization. It allows users to summarize and organize large datasets more effectively.

To learn more about grouping of pivot table with the Syncfusion<sup>&reg;</sup> Excel library, [click here.](https://help.syncfusion.com/document-processing/excel/excel-library/net/pivot-table/grouping)

## See Also

* [How to create Pivot Table in Excel document using C#, VB.NET?](https://support.syncfusion.com/kb/article/2619/how-to-create-pivot-table-in-excel-document-using-c-vbnet)
* [Sort Excel pivot table data by row and column fields in C# using XlsIO](https://support.syncfusion.com/kb/article/10009/sort-excel-pivot-table-data-by-row-and-column-fields-in-c-using-xlsio)
* [How to set custom format on data fields of a Pivot Table?](https://support.syncfusion.com/kb/article/11017/how-to-set-custom-format-on-data-fields-of-a-pivot-table)
* [Create a pivot table in Excel workbook with data exported using template markers](https://support.syncfusion.com/kb/article/10041/create-a-pivot-table-in-excel-workbook-with-data-exported-using-template-markers)
* [How to sort pivot fields in Excel using XlsIO?](https://support.syncfusion.com/kb/article/7247/how-to-sort-pivot-fields-in-excel-using-xlsio)
* [Blog: Excel pivot table in C# and VB.NET](https://www.syncfusion.com/document-processing/excel-framework/net/excel-library/pivot-table)
