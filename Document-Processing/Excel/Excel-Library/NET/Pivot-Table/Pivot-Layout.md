---
title: Pivot Table Layout | Excel library | Syncfusion
description: In this section, you can learn how to apply a layout to the pivot table in Excel document using XlsIO
platform: document-processing
control: XlsIO
documentation: UG
---

# Pivot Table Layout

The [PivotTableRowLayout](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.PivotTableRowLayout.html) enumeration can be used to set the pivot table row layout to Compact, Tabular, or Outline.

## Compact Layout

The following code example illustrates how to apply a compact layout to a pivot table.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Pivot%20Table/Compact%20Layout/.NET/Compact%20Layout/Compact%20Layout/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    FileStream inputStream = new FileStream("../../../Data/InputTemplate.xlsx", FileMode.Open, FileAccess.Read);
    IWorkbook workbook = application.Workbooks.Open(inputStream);
    IWorksheet worksheet = workbook.Worksheets[1];
    IPivotTable pivotTable = worksheet.PivotTables[0];

    //Set PivotTableRowLayout
    pivotTable.Options.RowLayout = PivotTableRowLayout.Compact;

    //Set BuiltInStyle
    pivotTable.BuiltInStyle = PivotBuiltInStyles.PivotStyleMedium9;

    //Saving the workbook
    FileStream outputStream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.Write);
    workbook.SaveAs(outputStream);

    //Dispose streams
    outputStream.Dispose();
    inputStream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[1];
    IPivotTable pivotTable = worksheet.PivotTables[0];

    //Set PivotTableRowLayout
    pivotTable.Options.RowLayout = PivotTableRowLayout.Compact;

    //Set BuiltInStyle
    pivotTable.BuiltInStyle = PivotBuiltInStyles.PivotStyleMedium9;

    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(1)
    Dim pivotTable As IPivotTable = worksheet.PivotTables(0)

    'Set PivotTableRowLayout
    pivotTable.Options.RowLayout = PivotTableRowLayout.Compact

    'Set BuiltInStyle
    pivotTable.BuiltInStyle = PivotBuiltInStyles.PivotStyleMedium9

    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  

A complete working example to apply a compact layout to a pivot table in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Pivot%20Table/Compact%20Layout/.NET/Compact%20Layout).

By executing the program, you will get the Excel file as below

![Compact Layout](../Working-with-Pivot-Tables_images/Working-with-Pivot-Tables_img6.png)

## Tabular Layout

The following code example illustrates how to apply a tabular layout to a pivot table.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Pivot%20Table/Tabular%20Layout/.NET/Tabular%20Layout/Tabular%20Layout/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    FileStream inputStream = new FileStream("../../../Data/InputTemplate.xlsx", FileMode.Open, FileAccess.Read);
    IWorkbook workbook = application.Workbooks.Open(inputStream);
    IWorksheet worksheet = workbook.Worksheets[1];
    IPivotTable pivotTable = worksheet.PivotTables[0];

    //Set PivotTableRowLayout
    pivotTable.Options.RowLayout = PivotTableRowLayout.Tabular;

    //Set BuiltInStyle
    pivotTable.BuiltInStyle = PivotBuiltInStyles.PivotStyleMedium9;

    //Saving the workbook
    FileStream outputStream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.Write);
    workbook.SaveAs(outputStream);

    //Dispose streams
    outputStream.Dispose();
    inputStream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[1];
    IPivotTable pivotTable = worksheet.PivotTables[0];

    //Set PivotTableRowLayout
    pivotTable.Options.RowLayout = PivotTableRowLayout.Tabular;

    //Set BuiltInStyle
    pivotTable.BuiltInStyle = PivotBuiltInStyles.PivotStyleMedium9;

    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(1)
    Dim pivotTable As IPivotTable = worksheet.PivotTables(0)

    'Set PivotTableRowLayout
    pivotTable.Options.RowLayout = PivotTableRowLayout.Tabular

    'Set BuiltInStyle
    pivotTable.BuiltInStyle = PivotBuiltInStyles.PivotStyleMedium9

    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  

A complete working example to apply a tabular layout to a pivot table in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Pivot%20Table/Tabular%20Layout/.NET/Tabular%20Layout).

By executing the program, you will get the Excel file as below

![Tabular Layout](../Working-with-Pivot-Tables_images/Working-with-Pivot-Tables_img7.png)

## Outline Layout

The following code example illustrates how to apply a outline layout to a pivot table.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Pivot%20Table/Outline%20Layout/.NET/Outline%20Layout/Outline%20Layout/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    FileStream inputStream = new FileStream("../../../Data/InputTemplate.xlsx", FileMode.Open, FileAccess.Read);
    IWorkbook workbook = application.Workbooks.Open(inputStream);
    IWorksheet worksheet = workbook.Worksheets[1];
    IPivotTable pivotTable = worksheet.PivotTables[0];

    //Set PivotTableRowLayout
    pivotTable.Options.RowLayout = PivotTableRowLayout.Outline;

    //Set BuiltInStyle
    pivotTable.BuiltInStyle = PivotBuiltInStyles.PivotStyleMedium9;

    //Saving the workbook
    FileStream outputStream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.Write);
    workbook.SaveAs(outputStream);

    //Dispose streams
    outputStream.Dispose();
    inputStream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[1];
    IPivotTable pivotTable = worksheet.PivotTables[0];

    //Set PivotTableRowLayout
    pivotTable.Options.RowLayout = PivotTableRowLayout.Outline;

    //Set BuiltInStyle
    pivotTable.BuiltInStyle = PivotBuiltInStyles.PivotStyleMedium9;

    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(1)
    Dim pivotTable As IPivotTable = worksheet.PivotTables(0)

    'Set PivotTableRowLayout
    pivotTable.Options.RowLayout = PivotTableRowLayout.Outline

    'Set BuiltInStyle
    pivotTable.BuiltInStyle = PivotBuiltInStyles.PivotStyleMedium9

    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  

A complete working example to apply a outline layout to a pivot table in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Pivot%20Table/Outline%20Layout/.NET/Outline%20Layout).

By executing the program, you will get the Excel file as below

![Outline Layout](../Working-with-Pivot-Tables_images/Working-with-Pivot-Tables_img8.png)

## Classic Layout

For classic layout, you can set the [ShowGridDropZone](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.Implementation.PivotTables.PivotTableOptions.html#Syncfusion_XlsIO_Implementation_PivotTables_PivotTableOptions_ShowGridDropZone) property to true as below.

The following code example illustrates how to apply a classic layout to a pivot table.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Pivot%20Table/Classic%20Layout/.NET/Classic%20Layout/Classic%20Layout/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  FileStream fileStream = new FileStream("InputTemplate.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(fileStream);
  IWorksheet worksheet = workbook.Worksheets[1];
  IPivotTable pivotTable = worksheet.PivotTables[0];

  //Set PivotTableRowLayout
  pivotTable.Options.RowLayout = PivotTableRowLayout.Tabular;

  //Set classic layout
  (pivotTable.Options as PivotTableOptions).ShowGridDropZone = true; 

  string fileName = "PivotTable_ClassicLayout.xlsx";

  //Saving the workbook as stream
  FileStream stream = new FileStream(fileName, FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(stream);
  stream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;

  IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
  IWorksheet worksheet = workbook.Worksheets[1];
  IPivotTable pivotTable = worksheet.PivotTables[0];

  //Set PivotTableRowLayout
  pivotTable.Options.RowLayout = PivotTableRowLayout.Tabular;

  //Set classic layout
  (pivotTable.Options as PivotTableOptions).ShowGridDropZone = true; 

  workbook.SaveAs("PivotTable_ClassicLayout.xlsx");

  //No exception will be thrown if there are unsaved workbooks
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

  'Set PivotTableRowLayout
  pivotTable.Options.RowLayout = PivotTableRowLayout.Tabular

  'Set classic layout
  (TryCast(pivotTable.Options, PivotTableOptions)).ShowGridDropZone = True

  workbook.SaveAs("PivotTable_ClassicLayout.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to layout a pivot table classically in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Pivot%20Table/Classic%20Layout/.NET/Classic%20Layout).