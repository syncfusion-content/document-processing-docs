---
title: Pivot Table Options | Excel library | Syncfusion
description: In this section, you can learn about various pivot table options in Excel document using Syncfusion .NET Excel library
platform: document-processing
control: XlsIO
documentation: UG
---

# Pivot Table Options in Excel

## Show or hide the field list

To show or hide the pivot table field list pane, use the [ShowFieldList](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IPivotTableOptions.html#Syncfusion_XlsIO_IPivotTableOptions_ShowFieldList) property.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Enable ShowFieldList
options.ShowFieldList = false;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Enable ShowFieldList
options.ShowFieldList = false;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Enable ShowFieldList
options.ShowFieldList = False
{% endhighlight %}
{% endtabs %} 

## Header caption

The [RowHeaderCaption](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IPivotTableOptions.html#Syncfusion_XlsIO_IPivotTableOptions_RowHeaderCaption) and [ColumnHeaderCaption](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IPivotTableOptions.html#Syncfusion_XlsIO_IPivotTableOptions_ColumnHeaderCaption) properties allows to edit the respective pivot table headers. The header caption can be enabled or disabled using the [DisplayFieldCaptions](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IPivotTableOptions.html#Syncfusion_XlsIO_IPivotTableOptions_DisplayFieldCaptions) property.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Enable header captions
options.RowHeaderCaption = "Payment Dates";
options.ColumnHeaderCaption = "Payments"; 
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Enable header captions
options.RowHeaderCaption = "Payment Dates";
options.ColumnHeaderCaption = "Payments";
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Enable header captions
options.RowHeaderCaption = "Payment Dates"
options.ColumnHeaderCaption = "Payments"
{% endhighlight %}
{% endtabs %}

## Grand total

XlsIO provides an equivalent API to perform grand totals with the properties as follows.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Enable GrandTotals
pivotTable.ColumnGrand = false;
pivotTable.RowGrand = true;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Enable GrandTotals
pivotTable.ColumnGrand = false;
pivotTable.RowGrand = true;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Enable GrandTotals
pivotTable.ColumnGrand = False
pivotTable.RowGrand = False
{% endhighlight %}
{% endtabs %}  

## Show or hide collapse button

You can also show or hide the **Collapse** button that appears in the fields of the pivot table, when more than one item exists in a field. The following code example illustrates how to do this.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Enable ShowDrillIndicators
pivotTable.ShowDrillIndicators = true;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Enable ShowDrillIndicators
pivotTable.ShowDrillIndicators = true;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Enable ShowDrillIndicators
pivotTable.ShowDrillIndicators = True
{% endhighlight %}
{% endtabs %}  

## Display field caption and filter option

The filter buttons and field names in the pivot table can be shown or hidden, as in the following code.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Enable DisplayFieldCaption
pivotTable.DisplayFieldCaptions = true;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Enable DisplayFieldCaption
pivotTable.DisplayFieldCaptions = true;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Enable DisplayFieldCaption
pivotTable.DisplayFieldCaptions = True
{% endhighlight %}
{% endtabs %}  

## Repeating row label on each page

You can set the row label on each page while printing, and the header can be viewed on each page.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Enable RepeatItemsOnEachPrintedPage
pivotTable.RepeatItemsOnEachPrintedPage = true;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Enable RepeatItemsOnEachPrintedPage
pivotTable.RepeatItemsOnEachPrintedPage = true;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Enable RepeatItemsOnEachPrintedPage
pivotTable.RepeatItemsOnEachPrintedPage = True
{% endhighlight %}
{% endtabs %} 

## Repeat Labels

You can repeat labels for row or column fields when the [pivot table layout](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.PivotTableRowLayout.html) is set to tabular or outline layout forms.

**Specific Pivot Field**

The following code illustrates how to set the repeat labels option to a specific pivot field.
{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set repeat labels option to a specific pivot field
pivotTable.Fields[0].RepeatLabels = true;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set repeat labels option to a specific pivot field
pivotTable.Fields[0].RepeatLabels = true;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
‘Set repeat labels option to a specific pivot field
pivotTable.Fields(0).RepeatLabels = True
{% endhighlight %}
{% endtabs %}  

**All Pivot Fields**

The following code illustrates how to set the repeat labels option to all the pivot fields.
{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set repeat labels option to all the pivot fields
pivotTable.Options.RepeatAllLabels(true);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set repeat labels option to all the pivot fields
pivotTable.Options.RepeatAllLabels(true);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
‘Set repeat labels option to all the pivot fields
pivotTable.Options.RepeatAllLabels(True)
{% endhighlight %}
{% endtabs %}

## Show Values Row

To show values in rows in a pivot table, use the **ShowValuesRow** property. The following code illustrates how to show values row option in the pivot table.
{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set the show values row option in pivot table.
pivotTable.Options.ShowValuesRow = true;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set the show values row option in pivot table.
pivotTable.Options.ShowValuesRow = true;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set the show values row option in pivot table.
pivotTable.Options.ShowValuesRow = true
{% endhighlight %}
{% endtabs %}

## Other pivot table operations

### Adding calculated field in the existing pivot table

Calculated field is a special type of database field that perform calculations by using the contents of other fields in the pivot table with the given formula. The formula can contain operators and expressions as in other worksheet formulas. You can use constants and refer to the data from the PivotTable.

You can read and create the calculated fields in the existing pivot table. The following are the Excel restrictions when using the formula:

* Formula cannot contain cell references or defined names.
* Formula cannot contain Worksheet functions that require cell references. 
* Formula cannot use array functions.

The calculated field in XlsIO can be achieved using the following code sample.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("PivotTable.xlsx");
  IWorksheet sheet = workbook.Worksheets[1];
  IPivotTable pivotTable = sheet.PivotTables[0];

  //Add calculated field to the first pivot table
  IPivotField field = pivotTable.CalculatedFields.Add("Percent", "Sales/Total*100");

  //Saving the workbook
  workbook.SaveAs("PivotTableCalculate.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("PivotTable.xlsx");
  IWorksheet sheet = workbook.Worksheets[1];
  IPivotTable pivotTable = sheet.PivotTables[0];

  //Add calculated field to the first pivot table
  IPivotField field = pivotTable.CalculatedFields.Add("Percent", "Sales/Total*100");

  workbook.SaveAs("PivotTableCalculate.xlsx");
  excelEngine.ThrowNotSavedOnDestroy = false;
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("PivotTable.xlsx")
  Dim sheet As IWorksheet = workbook.Worksheets(1)
  Dim pivotTable As IPivotTable = sheet.PivotTables(0)

  ' Add calculated field to the first pivot table
  Dim field As IPivotField = pivotTable.CalculatedFields.Add("Percent", "Sales/Total*100")

  workbook.SaveAs("PivotTableCalculate.xlsx")
  excelEngine.ThrowNotSavedOnDestroy = False
End Using
{% endhighlight %}
{% endtabs %}  

The formula can also be set to the IPivotField property as follows.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Pivot%20Table/Calculated%20Field/.NET/Calculated%20Field/Calculated%20Field/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet sheet = workbook.Worksheets[1];
	IPivotTable pivotTable = sheet.PivotTables[0];

	//Add calculated field to the first pivot table
	IPivotField field = pivotTable.CalculatedFields.Add("Percent", "Units/3000*100");

	//Set Field Formula
	field.Formula = "Units/3000*200";

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/CalculatedField.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("PivotTable.xlsx");
  IWorksheet sheet = workbook.Worksheets[0];
  IPivotTable pivotTable = sheet.PivotTables[0];

  //Add calculated field to the first pivot table
  IPivotField field = pivotTable.CalculatedFields.Add("Percent", "Sales/Total*100");

  //Set Field Formula
  field.Formula = "Sales/Total*200";

  workbook.SaveAs("PivotTable.xlsx");
  excelEngine.ThrowNotSavedOnDestroy = false;
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("PivotTable.xlsx")
  Dim sheet As IWorksheet = workbook.Worksheets(0)
  Dim pivotTable As IPivotTable = sheet.PivotTables(0)

  Dim field As IPivotField = pivotTable.CalculatedFields.Add("Percent", "Sales/Total*100")

  'Set Field Formula
  field.Formula = "Sales/Total*200"

  workbook.SaveAs("PivotTable.xlsx")
  excelEngine.ThrowNotSavedOnDestroy = False
End Using
{% endhighlight %}
{% endtabs %}  

A complete working example to add calculated field in pivot table in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Pivot%20Table/Calculated%20Field/.NET/Calculated%20Field).