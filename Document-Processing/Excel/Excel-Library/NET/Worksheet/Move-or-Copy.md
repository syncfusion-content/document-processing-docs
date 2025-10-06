---
title: Move or Copy Options | Syncfusion
description: In this section, you can learn how to use the copy and move operation in an Excel using Syncfusion Essential XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# Move and Copy in Excel Document

## Copy

The **copy** operation in the Syncfusion Essential&reg; XlsIO library allows users to duplicate various components of an Excel workbook, including entire worksheets, specific cell ranges, rows, columns, and even entire workbooks.

### Copy Workbook

The following code example illustrates how to copy an entire workbook to another workbook.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/Copy%20Workbook/.NET/Copy%20Workbook/Copy%20Workbook/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook sourceWorkbook = application.Workbooks.Open(Path.GetFullPath(@"Data/SourceWorkbookTemplate.xlsx"));
	IWorkbook destinationWorkbook = application.Workbooks.Open(Path.GetFullPath(@"Data/DestinationWorkbookTemplate.xlsx"));

	//Clone the workbook
	destinationWorkbook = sourceWorkbook.Clone();
   
	//Saving the workbook
	destinationWorkbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook sourceWorkbook = application.Workbooks.Open("SourceWorkbookTemplate.xlsx");
    IWorkbook destinationWorkbook = application.Workbooks.Open("DestinationWorkbookTemplate.xlsx");

    //Clone the workbook
    destinationWorkbook = sourceWorkbook.Clone();

    //Saving the workbook
    destinationWorkbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    Dim sourceWorkbook As IWorkbook = application.Workbooks.Open("SourceWorkbookTemplate.xlsx")
    Dim destinationWorkbook As IWorkbook = application.Workbooks.Open("DestinationWorkbookTemplate.xlsx")

    'Clone the workbook
    destinationWorkbook = sourceWorkbook.Clone()

    'Saving the workbook
    destinationWorkbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example of copying an Excel workbook in C# is present on [this GitHub page.](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/Copy%20Workbook/.NET/Copy%20Workbook)

### Copy Worksheet

The following code example illustrates how to copy a sheet, along with its entire contents, to another workbook.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/Copy%20Worksheet/.NET/Copy%20Worksheet/Copy%20Worksheet/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;

	IWorkbook sourceWorkbook = application.Workbooks.Open(Path.GetFullPath(@"Data/SourceTemplate.xlsx"));

	IWorkbook destinationWorkbook = application.Workbooks.Open(Path.GetFullPath(@"Data/DestinationTemplate.xlsx"));

	#region Copy Worksheet
	//Copy first worksheet from the source workbook to the destination workbook
	destinationWorkbook.Worksheets.AddCopy(sourceWorkbook.Worksheets[0]);
	destinationWorkbook.ActiveSheetIndex = 1;
	#endregion

	#region Save
	//Saving the workbook
	destinationWorkbook.SaveAs(Path.GetFullPath("Output/CopyWorksheet.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook sourceWorkbook = application.Workbooks.Open("SourceWorkbookTemplate.xlsx");
  IWorkbook destinationWorkbook = application.Workbooks.Open("DestinationWorkbookTemplate.xlsx");

  //Copy first worksheet from the source workbook to the destination workbook
  destinationWorkbook.Worksheets.AddCopy(sourceWorkbook.Worksheets[0]);

  destinationWorkbook.ActiveSheetIndex = 1;
  destinationWorkbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim sourceWorkbook As IWorkbook = application.Workbooks.Open("SourceWorkbookTemplate.xlsx")
  Dim destinationWorkbook As IWorkbook = application.Workbooks.Open("DestinationWorkbookTemplate.xlsx")

  'Copy first worksheet from the source workbook to the destination workbook
  destinationWorkbook.Worksheets.AddCopy(sourceWorkbook.Worksheets(0))

  destinationWorkbook.ActiveSheetIndex = 1
  destinationWorkbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example for copying Excel worksheets in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/Copy%20Worksheet/.NET/Copy%20Worksheet).

Specific copy options can be chosen while copying a worksheet, which helps to achieve customized copying by ignoring certain formatting. For more information about copy options, please refer [ExcelWorksheetCopyFlags](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ExcelWorksheetCopyFlags.html).

### Copy Row

The following code example illustrates how to copy a row from one worksheet to another.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/Copy%20Row/.NET/Copy%20Row/Copy%20Row/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;

	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));

	IWorksheet sourceWorksheet = workbook.Worksheets[0];
	IWorksheet destinationWorksheet = workbook.Worksheets[1];

	IRange sourceRow = sourceWorksheet.Range[1, 1];
	IRange destinationRow = destinationWorksheet.Range[1, 1];

	//Copy the entire row to the next sheet
	sourceRow.EntireRow.CopyTo(destinationRow);

	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
  
    IWorksheet sourceWorksheet = workbook.Worksheets[0];
    IWorksheet destinationWorksheet = workbook.Worksheets[1];

    IRange sourceRow = sourceWorksheet.Range[1, 1];
    IRange destinationRow = destinationWorksheet.Range[1, 1];

    // Copy the entire row to the next sheet
    sourceRow.EntireRow.CopyTo(destinationRow);

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")

    Dim sourceWorksheet As IWorksheet = workbook.Worksheets(0)
    Dim destinationWorksheet As IWorksheet = workbook.Worksheets(1)

    Dim sourceRow As IRange = sourceWorksheet.Range(1, 1)
    Dim destinationRow As IRange = destinationWorksheet.Range(1, 1)

    'Copy the entire row to the next sheet
    sourceRow.EntireRow.CopyTo(destinationRow)

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example of copying a row in C# is present on [this GitHub page.](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/Copy%20Row/.NET/Copy%20Row)

### Copy Column

The following code example illustrates how to copy a column from one worksheet to another.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/Copy%20Column/.NET/Copy%20Column/Copy%20Column/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;

	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));

	IWorksheet sourceWorksheet = workbook.Worksheets[0];
	IWorksheet destinationWorksheet = workbook.Worksheets[1];

	IRange sourceColumn = sourceWorksheet.Range[1, 1];
	IRange destinationColumn = destinationWorksheet.Range[1, 1];

	//Copy the entire column to the next sheet
	sourceColumn.EntireColumn.CopyTo(destinationColumn);

	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
  
    IWorksheet sourceWorksheet = workbook.Worksheets[0];
    IWorksheet destinationWorksheet = workbook.Worksheets[1];

    IRange sourceColumn = sourceWorksheet.Range[1, 1];
    IRange destinationColumn = destinationWorksheet.Range[1, 1];

    //Copy the entire column to the next sheet
    sourceColumn.EntireColumn.CopyTo(destinationColumn);

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")

    Dim sourceWorksheet As IWorksheet = workbook.Worksheets(0)
    Dim destinationWorksheet As IWorksheet = workbook.Worksheets(1)

    Dim sourceColumn As IRange = sourceWorksheet.Range(1, 1)
    Dim destinationColumn As IRange = destinationWorksheet.Range(1, 1)

    'Copy the entire column to the next sheet
    sourceColumn.EntireColumn.CopyTo(destinationColumn)

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example of copying a column in C# is present on [this GitHub page.](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/Copy%20Column/.NET/Copy%20Column)

### Copy Cell Range

The following code example illustrates how to copy a cell range from one worksheet to another.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/Copy%20Cell%20Range/.NET/Copy%20Cell%20Range/Copy%20Cell%20Range/Program.cs,180" %}

using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;

	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));

	IWorksheet sourceWorksheet = workbook.Worksheets[0];
	IWorksheet destinationWorksheet = workbook.Worksheets[1];

	IRange source = sourceWorksheet.Range[1, 1, 4, 3];
	IRange destination = destinationWorksheet.Range[1, 1, 4, 3];

	//Copy the cell range to the next sheet
	source.CopyTo(destination);
	
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
  
    IWorksheet sourceWorksheet = workbook.Worksheets[0];
    IWorksheet destinationWorksheet = workbook.Worksheets[1];

    IRange source = sourceWorksheet.Range[1, 1, 4, 3];
    IRange destination = destinationWorksheet.Range[1, 1, 4, 3];

    //Copy the cell range to the next sheet
    source.CopyTo(destination);

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")

    Dim sourceWorksheet As IWorksheet = workbook.Worksheets(0)
    Dim destinationWorksheet As IWorksheet = workbook.Worksheets(1)

    Dim source As IRange = sourceWorksheet.Range(1, 1, 4, 3)
    Dim destination As IRange = destinationWorksheet.Range(1, 1, 4, 3)

    'Copy the cell range to the next sheet
    source.CopyTo(destination)

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example for copying a cell range from one worksheet to another in C# is present on [this GitHub page.](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/Copy%20Cell%20Range/.NET/Copy%20Cell%20Range)

#### Copy Cell Range Options

[ExcelCopyRangeOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ExcelCopyRangeOptions.html) allows you to copy a cell range with specific options.

The following code example illustrates how to copy a cell range with copy range options from one worksheet to another.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));

    IWorksheet sourceWorksheet = workbook.Worksheets[0];
    IWorksheet destinationWorksheet = workbook.Worksheets[1];

    IRange source = sourceWorksheet.Range[1, 1, 4, 3];
    IRange destination = destinationWorksheet.Range[1, 1, 4, 3];

    //Copy the cell range with options
    source.CopyTo(destination, ExcelCopyRangeOptions.CopyStyles);
    
    //Saving the workbook
    workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
  
    IWorksheet sourceWorksheet = workbook.Worksheets[0];
    IWorksheet destinationWorksheet = workbook.Worksheets[1];

    IRange source = sourceWorksheet.Range[1, 1, 4, 3];
    IRange destination = destinationWorksheet.Range[1, 1, 4, 3];

    //Copy the cell range with options
    source.CopyTo(destination, ExcelCopyRangeOptions.CopyStyles);

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")

    Dim sourceWorksheet As IWorksheet = workbook.Worksheets(0)
    Dim destinationWorksheet As IWorksheet = workbook.Worksheets(1)

    Dim source As IRange = sourceWorksheet.Range(1, 1, 4, 3)
    Dim destination As IRange = destinationWorksheet.Range(1, 1, 4, 3)

    'Copy the cell range with options
    source.CopyTo(destination, ExcelCopyRangeOptions.CopyStyles)

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## Move

The **move** operation in the Syncfusion Essential&reg; XlsIO library allows users to transfer various components of an Excel workbook, including entire worksheets, specific cell ranges, rows, columns, and even entire workbooks, from one location to another within the workbook or across different workbooks.

### Move Worksheet

The following code example illustrates how to move a sheet, along with its entire contents.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/Move%20Worksheet/.NET/Move%20Worksheet/Move%20Worksheet/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(3);
  IWorksheet sheet = workbook.Worksheets[0];

  //Move the Sheet
  sheet.Move(1);

  //Saving the workbook
  workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(3);
  IWorksheet sheet = workbook.Worksheets[0];

  //Move the Sheet
  sheet.Move(1);

  //Saving the workbook
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(3)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Move the sheet
  sheet.Move(1)

  'Saving the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example for moving Excel worksheets in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/Move%20Worksheet/.NET/Move%20Worksheet).

### Move Row

The following code example illustrates how to move a row from one worksheet to another.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/Move%20Row/.NET/Move%20Row/Move%20Row/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));

    IWorksheet sourceWorksheet = workbook.Worksheets[0];
    IWorksheet destinationWorksheet = workbook.Worksheets[1];

    IRange sourceRow = sourceWorksheet.Range[2, 1];
    IRange destinationRow = destinationWorksheet.Range[2, 1];

    //Move the entire row to the next sheet
    sourceRow.EntireRow.MoveTo(destinationRow);

    //Saving the workbook
    workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
  
    IWorksheet sourceWorksheet = workbook.Worksheets[0];
    IWorksheet destinationWorksheet = workbook.Worksheets[1];

    IRange sourceRow = sourceWorksheet.Range[2, 1];
    IRange destinationRow = destinationWorksheet.Range[2, 1];

    //Move the entire row to the next sheet
    sourceRow.EntireRow.MoveTo(destinationRow);

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")

    Dim sourceWorksheet As IWorksheet = workbook.Worksheets(0)
    Dim destinationWorksheet As IWorksheet = workbook.Worksheets(1)

    Dim sourceRow As IRange = sourceWorksheet.Range(2, 1)
    Dim destinationRow As IRange = destinationWorksheet.Range(2, 1)

    'Move the entire row to the next sheet
    sourceRow.EntireRow.MoveTo(destinationRow)

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example of moving a row in C# is available on [this GitHub page.](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/Move%20Row/.NET/Move%20Row)

### Move Column

The following code example illustrates how to move a column from one worksheet to another.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/Move%20Column/.NET/Move%20Column/Move%20Column/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));

    IWorksheet sourceWorksheet = workbook.Worksheets[0];
    IWorksheet destinationWorksheet = workbook.Worksheets[1];

    IRange source= sourceWorksheet.Range[1, 2];
    IRange destination = destinationWorksheet.Range[1, 2];

    //Move the entire column to the next sheet
    source.EntireColumn.MoveTo(destination);

    //Saving the workbook
    workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
  
    IWorksheet sourceWorksheet = workbook.Worksheets[0];
    IWorksheet destinationWorksheet = workbook.Worksheets[1];

    IRange source= sourceWorksheet.Range[1, 2];
    IRange destination = destinationWorksheet.Range[1, 2];

    //Move the entire column to the next sheet
    source.EntireColumn.MoveTo(destination);

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")

    Dim sourceWorksheet As IWorksheet = workbook.Worksheets(0)
    Dim destinationWorksheet As IWorksheet = workbook.Worksheets(1)

    Dim source As IRange = sourceWorksheet.Range(1, 2)
    Dim destination As IRange = destinationWorksheet.Range(1, 2)

    ' Move the entire column to the next sheet
    source.EntireColumn.MoveTo(destination)

    ' Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example of moving a column in C# is present on [this GitHub page.](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/Move%20Column/.NET/Move%20Column)

### Move Cell Range

The following code example illustrates how to move a cell range from one worksheet to another.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/Move%20Cell%20Range/.NET/Move%20Cell%20Range/Move%20Cell%20Range/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));

    IWorksheet sourceWorksheet = workbook.Worksheets[0];
    IWorksheet destinationWorksheet = workbook.Worksheets[1];

    IRange source = sourceWorksheet.Range[1, 1, 4, 3];
    IRange destination = destinationWorksheet.Range[1, 1, 4, 3];

    //Move the cell range to the next sheet
    source.MoveTo(destination);

    //Saving the workbook
    workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
  
    IWorksheet sourceWorksheet = workbook.Worksheets[0];
    IWorksheet destinationWorksheet = workbook.Worksheets[1];

    IRange source = sourceWorksheet.Range[1, 1, 4, 3];
    IRange destination = destinationWorksheet.Range[1, 1, 4, 3];

    //Move the cell range to the next sheet
    source.MoveTo(destination);

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")

    Dim sourceWorksheet As IWorksheet = workbook.Worksheets(0)
    Dim destinationWorksheet As IWorksheet = workbook.Worksheets(1)

    Dim source As IRange = sourceWorksheet.Range(1, 1, 4, 3)
    Dim destination As IRange = destinationWorksheet.Range(1, 1, 4, 3)

    'Move the cell range to the next sheet
    source.MoveTo(destination)

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example for moving a cell range from one worksheet to another in C# is present on [this GitHub page.](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/Move%20Cell%20Range/.NET/Move%20Cell%20Range)