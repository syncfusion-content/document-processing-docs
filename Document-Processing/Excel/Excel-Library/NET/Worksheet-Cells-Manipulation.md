---
title: Worksheet Cells Manipulation in .NET XlsIO | Syncfusion
description: This section illustrates about cells manipulation in Excel worksheet using Syncfusion .NET Excel library.
platform: document-processing
control: XlsIO
documentation: UG
keywords: c#, vb.net, excel, read excel, edit excel, edit excel cell, write excel cell, fill excel, write excel, update excel, syncfusion, xlsio
---

# Worksheet Cells Manipulation

The [IRange](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html) interface represents a single cell or a group of cells in a worksheet. XlsIO has several useful methods for accessing, manipulating and formatting the content in the cells.

## Access

### Accessing a Cell or a Range

The following code example illustrates the different ways of accessing a single cell or group of cells

N> Here row and column indexes in the range are "one-based". 

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Editing%20Excel%20cells/Access%20Cell%20or%20Range/.NET/Access%20Cell%20or%20Range/Access%20Cell%20or%20Range/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet sheet = workbook.Worksheets[0];

	#region Access Access Cell or Range
	//Access a range by specifying cell address
	sheet.Range["A7"].Text = "Accessing a Range by specify cell address ";

	//Access a range by specifying cell row and column index
	sheet.Range[9, 1].Text = "Accessing a Range by specify cell row and column index ";

	//Access a Range by specifying using defined name
	IName name = workbook.Names.Add("Name");
	name.RefersToRange = sheet.Range["A11"];
	sheet.Range["Name"].Text = "Accessing a Range by specifying using defined name";

	//Accessing a Range of cells by specifying cells address
	sheet.Range["A13:C13"].Text = "Accessing a Range of Cells (Method 1)";

	//Accessing a Range of cells specifying cell row and column index
	sheet.Range[15, 1, 15, 3].Text = "Accessing a Range of Cells (Method 2)";
	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/AccessCellorRange.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet sheet = workbook.Worksheets[0];

  //Access a range by specifying cell address
  sheet.Range["A7"].Text = "Accessing a Range by specify cell address ";

  //Access a range by specifying cell row and column index
  sheet.Range[9, 1].Text = "Accessing a Range by specify cell row and column index ";

  //Access a Range by specifying using defined name
  IName name = workbook.Names.Add("Name");
  name.RefersToRange = sheet.Range["A11"];
  sheet.Range["Name"].Text = "Accessing a Range by specifying using defined name.";

  //Accessing a Range of cells by specifying cells address
  sheet.Range["A13:C13"].Text = "Accessing a Range of Cells (Method 1)";

  //Accessing a Range of cells specifying cell row and column index
  sheet.Range[15, 1, 15, 3].Text = "Accessing a Range of Cells (Method 2)";

  workbook.SaveAs("Range.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Access a range by specify cell address
  sheet.Range("A7").Text = "Accessing a Range by specify cell address "

  'Access a range by specify cell row and column index
  sheet.Range(9, 1).Text = "Accessing a Range by specify cell row and column index "

  'Access a Range by specifying using defined name
  Dim name As IName = workbook.Names.Add("Name")
  name.RefersToRange = sheet.Range("A11")
  sheet.Range("Name").Text = "Accessing a Range by specifying using defined name"

  'Accessing a Range of cells by specify cells address
  sheet.Range("A13:C13").Text = "Accessing a Range of Cells (Method 1)"

  'Accessing a Range of cells specify cell row and column index
  sheet.Range(15, 1, 15, 3).Text = "Accessing a Range of Cells (Method 2)"

  workbook.SaveAs("Range.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to access a cell or range in an Excel worksheet in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Editing%20Excel%20cells/Access%20Cell%20or%20Range/.NET/Access%20Cell%20or%20Range).

T> You can make use of [GetText](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.Implementation.WorksheetImpl.html#Syncfusion_XlsIO_Implementation_WorksheetImpl_GetText_System_Int32_System_Int32_), [SetText](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.Implementation.WorksheetImpl.html#Syncfusion_XlsIO_Implementation_WorksheetImpl_SetText_System_Int32_System_Int32_System_String_), [GetNumber](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.Implementation.WorksheetImpl.html#Syncfusion_XlsIO_Implementation_WorksheetImpl_GetNumber_System_Int32_System_Int32_) and [SetNumber](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.Implementation.WorksheetImpl.html#Syncfusion_XlsIO_Implementation_WorksheetImpl_SetNumber_System_Int32_System_Int32_System_Double_) methods from worksheet object that enable users to get/set values without range object.

### Accessing Relative Range

By default, accessing a range by index will return the cell or range from worksheet level. To get a relative range for the indexes provided, it is recommended to set the [ExcelRangeIndexerMode](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ExcelRangeIndexerMode.html) option. Here, the RowIndex and ColumnIndex arguments are relative offsets, where specifying a RowIndex of 1 returns cells in the first row of the range not the first  row of the worksheet.

For example, if a range is mentioned as "B3:D5", then accessing a range with the index [1,1] will return the cell "A1" from worksheet. If the **ExcelRangeIndexerMode** is set to **Relative** then it returns "B3".

The following code example illustrates how to access the range relatively to the existing range object in XlsIO.

N> Here row and column indexes in the range are "one-based".

N> When **ExcelRangeIndexerMode** is set to **Relative**, only numeric index access is relative to the specified range. In this mode, row and column indexes are one-based and reference cells within the range. Cell name bases references (example A1, B5) always points to the worksheet and returns results from the worksheet origin rather than from the specified range.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Editing%20Excel%20cells/Access%20Relative%20Range/.NET/Access%20Relative%20Range/Access%20Relative%20Range/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;

	//Setting range index mode to relative
	application.RangeIndexerMode = ExcelRangeIndexerMode.Relative;

	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet sheet = workbook.Worksheets[0];

	#region Access Reative Range
	//Creating a range by specifying cells address
	IRange range1 = sheet.Range["B3:D5"];

	//Accessing a range relatively to the existing range by specifying cell row and column index
	range1[2, 2].Text = "Returns C4 cell";
	range1[0, 0].Text = "Returns A2 cell";

	//Creating a range of cells specifying cell row and column index
	IRange range2 = sheet.Range[5, 1, 10, 3];

	//Accessing a range relatively to the existing range of cells by specifying cell row and column index
	range2[2, 2, 3, 3].Text = "Returns range of cells B6 to C7";
	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/AccessRelativeRange.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;

  //Setting range index mode to relative
  application.RangeIndexerMode = ExcelRangeIndexerMode.Relative;

  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet sheet = workbook.Worksheets[0];

  //Creating a range by specifying cells address
  IRange range1 = sheet.Range["B3:D5"];

  //Accessing a range relatively to the existing range by specifying cell row and column index
  range1[2, 2].Text = "Returns C4 cell";
  range1[0, 0].Text = "Returns A2 cell";

  //Creating a Range of cells specifying cell row and column index
  IRange range2 = sheet.Range[5, 1, 10, 3];

  //Accessing a range relatively to the existing range of cells by specifying cell row and column index
  range2[2, 2, 3, 3].Text = "Returns range of cells B6 to C7";

  workbook.SaveAs("Range.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx

  'Setting range index mode to relative
  application.RangeIndexerMode = ExcelRangeIndexerMode.Relative

  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Creating a range by specifying cells address
  Dim range1 As IRange = sheet.Range("B3:D5")

  'Accessing a range relatively to the existing range by specifying cell row and column index
  range1(2, 2).Text = "Returns B4 cell"
  range1(0, 0).Text = "Returns A2 cell"

  Dim range2 As IRange = sheet.Range(5, 1, 10, 3)
  'Accessing a range relatively to the existing range of cells by specifying cell row and column index
  range2(2, 2, 3, 3).Text = "Returns range of cells B6 to C7"

  workbook.SaveAs("Range.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to access relative range in an Excel worksheet in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Editing%20Excel%20cells/Access%20Relative%20Range/.NET/Access%20Relative%20Range).

### Accessing Discontinuous Ranges

It is possible to modify the contents or apply formatting to discontinuous range by accessing and adding them to the [RangesCollection](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.Implementation.Collections.RangesCollection.html).

The following code example illustrates how to access discontinuous range.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Editing%20Excel%20cells/Access%20Discontinuous%20Range/.NET/Access%20Discontinuous%20Range/Access%20Discontinuous%20Range/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet sheet = workbook.Worksheets[0];

	#region Discontinuous Range
	//range1 and range2 are discontinuous ranges
	IRange range1 = sheet.Range["A1:A2"];
	IRange range2 = sheet.Range["C1:C2"];
	IRanges ranges = sheet.CreateRangesCollection();

	//range1 and range2 are considered as a single range
	ranges.Add(range1);
	ranges.Add(range2);
	ranges.Text = "Test";
	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/DiscontinuousRange.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet sheet = workbook.Worksheets[0];

  //range1 and range2 are discontinuous ranges
  IRange range1 = sheet.Range["A1:A2"];
  IRange range2 = sheet.Range["C1:C2"];
  IRanges ranges = sheet.CreateRangesCollection();

  //range1 and range2 are considered as a single range
  ranges.Add(range1);
  ranges.Add(range2);
  ranges.Text = "Test";

  workbook.SaveAs("Range.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'range1 and range2 are discontinuous ranges
  Dim range1 As IRange = sheet.Range("A1:A2")
  Dim range2 As IRange = sheet.Range("C1:C2")
  Dim ranges As IRanges = sheet.CreateRangesCollection()

  'range1 and range2 are considered as a single range
  ranges.Add(range1)
  ranges.Add(range2)
  ranges.Text = "Test"

  workbook.SaveAs("Range.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to access discontinuous range in an Excel worksheet in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Editing%20Excel%20cells/Access%20Discontinuous%20Range/.NET/Access%20Discontinuous%20Range).

### Accessing a Cell or Range using IMigrantRange 

The [IMigrantRange](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IMigrantRange.html) interface can also be used to access a single cell or group of cells and manipulate it.  It is recommended to prefer **IMigrantRange** instead of [IRange](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html) for writing large amount of data in an optimal way. 

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Editing%20Excel%20cells/Access%20Migrant%20Range/.NET/Access%20Migrant%20Range/Access%20Migrant%20Range/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet worksheet = workbook.Worksheets[0];

	#region Access Migrant Range
	//Getting migrant range of worksheet
	IMigrantRange migrantRange = worksheet.MigrantRange;

	//Writing data into migrant range
	for (int row = 1; row <= 5; row++)
	{
		for (int column = 1; column <= 5; column++)
		{
			//Writing values
			migrantRange.ResetRowColumn(row, column);
			migrantRange.Text = "Test";
		}
	}
	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/MigrantRange.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet sheet = workbook.Worksheets[0];
  IMigrantRange migrantRange = sheet.MigrantRange;

  //Writing Data
  for (int row = 1; row <= migrantRange.LastRow; row++)
  {
    for (int column = 1; column <= migrantRange.LastColumn; column++)
    {
      //Writing values
      migrantRange.ResetRowColumn(row, column);
      migrantRange.Text = "Test";
    }
  }
  
  workbook.SaveAs("Range.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)
  Dim migrantRange As IMigrantRange = sheet.MigrantRange

  'Writing Data
  Dim row As Integer
  For row = 1 To migrantRange.LastRow Step row + 1
    Dim column As Integer
    For column = 1 To migrantRange.LastColumn Step column + 1
      'Writing values
      migrantRange.ResetRowColumn(row, column)
      migrantRange.Text = "Test"
    Next
  Next

  workbook.SaveAs("Range.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to access migrant range in an Excel worksheet in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Editing%20Excel%20cells/Access%20Migrant%20Range/.NET/Access%20Migrant%20Range).

### Accessing Precedent and Dependent Cells or Range

Precedent cells are cells that are referred to by a formula in another cell. Dependent cells contain formulas that refer to other cells. XlsIO allows to trace the relationship between cells and formulas in Excel workbooks and returns the list of cells or range that are precedent and dependent.

Accessing list of precedent and dependent cells can be obtained:

*	from a worksheet
*	from a workbook

The following code example illustrates how to access the precedent cells from a worksheet and entire workbook.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Editing%20Excel%20cells/Precedent%20and%20Dependent%20Cells/.NET/Precedent%20and%20Dependent%20Cells/Precedent%20and%20Dependent%20Cells/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	#region Precedents in Worksheet
	//Getting precedent cells from the worksheet
	IRange[] precedents_worksheet = worksheet["A1"].GetPrecedents();

	Console.WriteLine("Precedents of Sheet1!A1 in Worksheet are : " );
	foreach(IRange range in precedents_worksheet)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion

	#region Precedents in Workbook
	//Getting precedent cells from the workbook
	IRange[] precedents_workbook = worksheet["A1"].GetPrecedents(true);

	Console.WriteLine("Precedents of Sheet1!A1 in Workbook are : ");
	foreach (IRange range in precedents_workbook)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion

	#region Dependents in Worksheet
	//Getting dependent cells from the worksheet
	IRange[] dependents_worksheet = worksheet["C1"].GetDependents();

	Console.WriteLine("Dependents of Sheet1!C1 in Worksheet are : ");
	foreach (IRange range in dependents_worksheet)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion

	#region Dependents in Workbook
	//Getting dependent cells from the workbook
	IRange[] dependents_workbook = worksheet["C1"].GetDependents(true);

	Console.WriteLine("Dependents of Sheet1!C1 in Workbook are : ");
	foreach (IRange range in dependents_workbook)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion

	#region Direct Precedents in Worksheet
	//Getting precedent cells from the worksheet
	IRange[] direct_precedents_worksheet = worksheet["A1"].GetDirectPrecedents();

	Console.WriteLine("Direct Precedents of Sheet1!A1 in Worksheet are : ");
	foreach (IRange range in direct_precedents_worksheet)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion

	#region Direct Precedents in Workbook
	//Getting precedent cells from the workbook
	IRange[] direct_precedents_workbook = worksheet["A1"].GetDirectPrecedents(true);

	Console.WriteLine("Direct Precedents of Sheet1!A1 in Workbook are : ");
	foreach (IRange range in direct_precedents_workbook)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion

	#region Direct Dependents in Worksheet
	//Getting dependent cells from the worksheet
	IRange[] direct_dependents_worksheet = worksheet["C1"].GetDirectDependents();

	Console.WriteLine("Direct Dependents of Sheet1!C1 in Worksheet are : ");
	foreach (IRange range in direct_dependents_worksheet)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion

	#region Direct Dependents in Workbook
	//Getting dependent cells from the workbook
	IRange[] direct_dependents_workbook = worksheet["C1"].GetDirectDependents(true);

	Console.WriteLine("Direct Dependents of Sheet1!C1 in Workbook are : ");
	foreach (IRange range in direct_dependents_workbook)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("FormulaExcel.xlsx");
  IWorksheet sheet = workbook.Worksheets[0];

  //Getting precedent cells from the worksheet
  IRange[] results1 = sheet["A1"].GetPrecedents();

  //Getting precedent cells from the workbook
  IRange[] results2 = sheet["A1"].GetPrecedents(true);

  string fileName = "Precedents.xlsx";
  workbook.SaveAs(fileName);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("FormulaExcel.xlsx")
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Getting precedent cells from the worksheet
  Dim results1() As IRange = sheet("A1").GetPrecedents()

  'Getting precedent cells from the workbook
  Dim results2() As IRange = sheet("A1").GetPrecedents(True)

  Dim fileName As String = "Precedents.xlsx"
  workbook.SaveAs(fileName)
End Using
{% endhighlight %}
{% endtabs %}

The following code example illustrates how to access the dependent cells from a worksheet and entire workbook.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Editing%20Excel%20cells/Precedent%20and%20Dependent%20Cells/.NET/Precedent%20and%20Dependent%20Cells/Precedent%20and%20Dependent%20Cells/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	#region Precedents in Worksheet
	//Getting precedent cells from the worksheet
	IRange[] precedents_worksheet = worksheet["A1"].GetPrecedents();

	Console.WriteLine("Precedents of Sheet1!A1 in Worksheet are : " );
	foreach(IRange range in precedents_worksheet)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion

	#region Precedents in Workbook
	//Getting precedent cells from the workbook
	IRange[] precedents_workbook = worksheet["A1"].GetPrecedents(true);

	Console.WriteLine("Precedents of Sheet1!A1 in Workbook are : ");
	foreach (IRange range in precedents_workbook)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion

	#region Dependents in Worksheet
	//Getting dependent cells from the worksheet
	IRange[] dependents_worksheet = worksheet["C1"].GetDependents();

	Console.WriteLine("Dependents of Sheet1!C1 in Worksheet are : ");
	foreach (IRange range in dependents_worksheet)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion

	#region Dependents in Workbook
	//Getting dependent cells from the workbook
	IRange[] dependents_workbook = worksheet["C1"].GetDependents(true);

	Console.WriteLine("Dependents of Sheet1!C1 in Workbook are : ");
	foreach (IRange range in dependents_workbook)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion

	#region Direct Precedents in Worksheet
	//Getting precedent cells from the worksheet
	IRange[] direct_precedents_worksheet = worksheet["A1"].GetDirectPrecedents();

	Console.WriteLine("Direct Precedents of Sheet1!A1 in Worksheet are : ");
	foreach (IRange range in direct_precedents_worksheet)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion

	#region Direct Precedents in Workbook
	//Getting precedent cells from the workbook
	IRange[] direct_precedents_workbook = worksheet["A1"].GetDirectPrecedents(true);

	Console.WriteLine("Direct Precedents of Sheet1!A1 in Workbook are : ");
	foreach (IRange range in direct_precedents_workbook)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion

	#region Direct Dependents in Worksheet
	//Getting dependent cells from the worksheet
	IRange[] direct_dependents_worksheet = worksheet["C1"].GetDirectDependents();

	Console.WriteLine("Direct Dependents of Sheet1!C1 in Worksheet are : ");
	foreach (IRange range in direct_dependents_worksheet)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion

	#region Direct Dependents in Workbook
	//Getting dependent cells from the workbook
	IRange[] direct_dependents_workbook = worksheet["C1"].GetDirectDependents(true);

	Console.WriteLine("Direct Dependents of Sheet1!C1 in Workbook are : ");
	foreach (IRange range in direct_dependents_workbook)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("FormulaExcel.xlsx");
  IWorksheet sheet = workbook.Worksheets[0];

  //Getting dependent cells from the worksheet
  IRange[] results1 = sheet["A1"].GetDependents();

  //Getting dependent cells from the workbook
  IRange[] results2 = sheet["A1"].GetDependents(true);

  string fileName = "Dependents.xlsx";
  workbook.SaveAs(fileName);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("FormulaExcel.xlsx")
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Getting dependent cells from the worksheet
  Dim results1() As IRange = sheet("A1").GetDependents()

  'Getting dependent cells from the workbook
  Dim results2() As IRange = sheet("A1").GetDependents(True)

  Dim fileName As String = "Dependents.xlsx"
  workbook.SaveAs(fileName)
End Using
{% endhighlight %}
{% endtabs %}

### Accessing Direct Precedent and Dependent Cells

[GetDirectDependents](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_GetDirectDependents) and [GetDirectPrecedents](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_GetDirectPrecedents) methods are used to get direct dependent/precedent cells for source range, excluding inner dependent/precedent cells. 

The following code example illustrates how to access the direct precedent cells from a worksheet and entire workbook.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Editing%20Excel%20cells/Precedent%20and%20Dependent%20Cells/.NET/Precedent%20and%20Dependent%20Cells/Precedent%20and%20Dependent%20Cells/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	#region Precedents in Worksheet
	//Getting precedent cells from the worksheet
	IRange[] precedents_worksheet = worksheet["A1"].GetPrecedents();

	Console.WriteLine("Precedents of Sheet1!A1 in Worksheet are : " );
	foreach(IRange range in precedents_worksheet)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion

	#region Precedents in Workbook
	//Getting precedent cells from the workbook
	IRange[] precedents_workbook = worksheet["A1"].GetPrecedents(true);

	Console.WriteLine("Precedents of Sheet1!A1 in Workbook are : ");
	foreach (IRange range in precedents_workbook)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion

	#region Dependents in Worksheet
	//Getting dependent cells from the worksheet
	IRange[] dependents_worksheet = worksheet["C1"].GetDependents();

	Console.WriteLine("Dependents of Sheet1!C1 in Worksheet are : ");
	foreach (IRange range in dependents_worksheet)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion

	#region Dependents in Workbook
	//Getting dependent cells from the workbook
	IRange[] dependents_workbook = worksheet["C1"].GetDependents(true);

	Console.WriteLine("Dependents of Sheet1!C1 in Workbook are : ");
	foreach (IRange range in dependents_workbook)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion

	#region Direct Precedents in Worksheet
	//Getting precedent cells from the worksheet
	IRange[] direct_precedents_worksheet = worksheet["A1"].GetDirectPrecedents();

	Console.WriteLine("Direct Precedents of Sheet1!A1 in Worksheet are : ");
	foreach (IRange range in direct_precedents_worksheet)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion

	#region Direct Precedents in Workbook
	//Getting precedent cells from the workbook
	IRange[] direct_precedents_workbook = worksheet["A1"].GetDirectPrecedents(true);

	Console.WriteLine("Direct Precedents of Sheet1!A1 in Workbook are : ");
	foreach (IRange range in direct_precedents_workbook)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion

	#region Direct Dependents in Worksheet
	//Getting dependent cells from the worksheet
	IRange[] direct_dependents_worksheet = worksheet["C1"].GetDirectDependents();

	Console.WriteLine("Direct Dependents of Sheet1!C1 in Worksheet are : ");
	foreach (IRange range in direct_dependents_worksheet)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion

	#region Direct Dependents in Workbook
	//Getting dependent cells from the workbook
	IRange[] direct_dependents_workbook = worksheet["C1"].GetDirectDependents(true);

	Console.WriteLine("Direct Dependents of Sheet1!C1 in Workbook are : ");
	foreach (IRange range in direct_dependents_workbook)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("FormulaExcel.xlsx");
  IWorksheet sheet = workbook.Worksheets[0];

  //Getting precedent cells from the worksheet
  IRange[] results1 = sheet["A1"].GetDirectPrecedents();

  //Getting precedent cells from the workbook
  IRange[] results2 = sheet["A1"].GetDirectPrecedents(true);

  string fileName = "DirectPrecedents.xlsx";
  workbook.SaveAs(fileName);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("FormulaExcel.xlsx")
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Getting precedent cells from the worksheet
  Dim results1() As IRange = sheet("A1").GetDirectPrecedents()

  'Getting precedent cells from the workbook
  Dim results2() As IRange = sheet("A1").GetDirectPrecedents(True)

  Dim fileName As String = "DirectPrecedents.xlsx"
  workbook.SaveAs(fileName)
End Using
{% endhighlight %}
{% endtabs %}

The following code example illustrates how to access the direct dependent cells from a worksheet and entire workbook.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Editing%20Excel%20cells/Precedent%20and%20Dependent%20Cells/.NET/Precedent%20and%20Dependent%20Cells/Precedent%20and%20Dependent%20Cells/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	#region Precedents in Worksheet
	//Getting precedent cells from the worksheet
	IRange[] precedents_worksheet = worksheet["A1"].GetPrecedents();

	Console.WriteLine("Precedents of Sheet1!A1 in Worksheet are : " );
	foreach(IRange range in precedents_worksheet)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion

	#region Precedents in Workbook
	//Getting precedent cells from the workbook
	IRange[] precedents_workbook = worksheet["A1"].GetPrecedents(true);

	Console.WriteLine("Precedents of Sheet1!A1 in Workbook are : ");
	foreach (IRange range in precedents_workbook)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion

	#region Dependents in Worksheet
	//Getting dependent cells from the worksheet
	IRange[] dependents_worksheet = worksheet["C1"].GetDependents();

	Console.WriteLine("Dependents of Sheet1!C1 in Worksheet are : ");
	foreach (IRange range in dependents_worksheet)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion

	#region Dependents in Workbook
	//Getting dependent cells from the workbook
	IRange[] dependents_workbook = worksheet["C1"].GetDependents(true);

	Console.WriteLine("Dependents of Sheet1!C1 in Workbook are : ");
	foreach (IRange range in dependents_workbook)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion

	#region Direct Precedents in Worksheet
	//Getting precedent cells from the worksheet
	IRange[] direct_precedents_worksheet = worksheet["A1"].GetDirectPrecedents();

	Console.WriteLine("Direct Precedents of Sheet1!A1 in Worksheet are : ");
	foreach (IRange range in direct_precedents_worksheet)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion

	#region Direct Precedents in Workbook
	//Getting precedent cells from the workbook
	IRange[] direct_precedents_workbook = worksheet["A1"].GetDirectPrecedents(true);

	Console.WriteLine("Direct Precedents of Sheet1!A1 in Workbook are : ");
	foreach (IRange range in direct_precedents_workbook)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion

	#region Direct Dependents in Worksheet
	//Getting dependent cells from the worksheet
	IRange[] direct_dependents_worksheet = worksheet["C1"].GetDirectDependents();

	Console.WriteLine("Direct Dependents of Sheet1!C1 in Worksheet are : ");
	foreach (IRange range in direct_dependents_worksheet)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion

	#region Direct Dependents in Workbook
	//Getting dependent cells from the workbook
	IRange[] direct_dependents_workbook = worksheet["C1"].GetDirectDependents(true);

	Console.WriteLine("Direct Dependents of Sheet1!C1 in Workbook are : ");
	foreach (IRange range in direct_dependents_workbook)
	{
		Console.WriteLine(range.Address);
	}
	Console.WriteLine();
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("FormulaExcel.xlsx");
  IWorksheet sheet = workbook.Worksheets[0];

  //Getting dependent cells from the worksheet
  IRange[] results1 = sheet["A1"].GetDirectDependents();

  //Getting dependent cells from the workbook
  IRange[] results2 = sheet["A1"].GetDirectDependents(true);

  string fileName = "DirectDependents.xlsx";
  workbook.SaveAs(fileName);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("FormulaExcel.xlsx")
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Getting dependent cells from the worksheet
  Dim results1() As IRange = sheet("A1").GetDirectDependents()

  'Getting dependent cells from the workbook
  Dim results2() As IRange = sheet("A1").GetDirectDependents(True)

  Dim fileName As String = "DirectDependents.xlsx"
  workbook.SaveAs(fileName)
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to access the precedent and dependent cells in an Excel worksheet in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Editing%20Excel%20cells/Precedent%20and%20Dependent%20Cells/.NET/Precedent%20and%20Dependent%20Cells).

## Find and Replace

Find and replace operations across worksheet text, formulas, values, and comments allow users to seamlessly update and manage data within Excel workbooks.

With the Syncfusion<sup>&reg;</sup> Excel Library, you can perform find and replace operations in an Excel worksheets using C#. Click [here](https://help.syncfusion.com/document-processing/excel/excel-library/net/cells-manipulation/find-and-replace) for more details.

## Sorting

Sorting is the process of arranging data in a specific order, typically in ascending or descending sequence.

With the Syncfusion<sup>&reg;</sup> Excel Library, you can perform sorting operations in an Excel worksheets using C#. Click [here](https://help.syncfusion.com/document-processing/excel/excel-library/net/cells-manipulation/sorting) for more details.

## Filtering

Filtering is the process of selectively displaying data in a worksheet based on specified criteria.

With the Syncfusion<sup>&reg;</sup> Excel Library, you can perform filtering operations in an Excel worksheets using C#. Click [here](https://help.syncfusion.com/document-processing/excel/excel-library/net/cells-manipulation/filtering) for more details.

## Hyperlink

Hyperlink is a reference or navigation element in a document that allows users to access another location, such as specific cells within the same worksheet, other worksheets, external files, websites, or email addresses.

With the Syncfusion<sup>&reg;</sup> Excel Library, you can perform hyperlink operations in an Excel worksheets using C#. Click [here](https://help.syncfusion.com/document-processing/excel/excel-library/net/cells-manipulation/hyperlink) for more details.

## Clear

Either entire cell content, or just formatting, contents, or comments can be removed from Excel cell. The following code example illustrates how to clear a range along with its formatting.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Editing%20Excel%20cells/Clear%20Content/.NET/Clear%20Content/Clear%20Content/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;

	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	#region Clear Content
	//Clearing content and formatting in C3
	worksheet.Range["C3"].Clear(true);
	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/ClearContent.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
  IWorksheet sheet = workbook.Worksheets[0];

  //Clearing a Range “A4” and its formatting
  sheet.Range["A4"].Clear(true);

  workbook.Version = ExcelVersion.Xlsx;
  workbook.SaveAs("ClearRange.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Clearing a Range “A4” and its formatting
  sheet.Range("A4").Clear(True)

  workbook.Version = ExcelVersion.Xlsx
  workbook.SaveAs("ClearRange.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to clear cell content in an Excel worksheet in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Editing%20Excel%20cells/Clear%20Content/.NET/Clear%20Content).

## List of API under IRange

The [IRange](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html) interface offers a robust collection of properties for in-depth manipulation and management of Excel worksheet ranges.

With the Syncfusion<sup>&reg;</sup> Excel Library, you can perform various operations under IRange in an Excel worksheet using C#. Click [here](https://help.syncfusion.com/document-processing/excel/excel-library/net/cells-manipulation/list-of-apis-under-irange) for more details.
