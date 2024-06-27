---
title: Move or Copy Options | Syncfusion
description: In this section, you can learn how to use the copy and move operation in an Excel using Syncfusion Essential XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# Move and Copy in Excel Document

## Copy

The **copy** operation in the Syncfusion Essential XlsIO library allows users to duplicate various components of an Excel workbook, including entire worksheets, specific cell ranges, rows, columns, and even entire workbooks.

### Copy Workbook

The following code example illustrates how to copy an entire workbook to another workbook.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    FileStream sourceStream = new FileStream("../../../Data/SourceWorkbookTemplate.xlsx", FileMode.Open, FileAccess.Read);
    IWorkbook sourceWorkbook = application.Workbooks.Open(sourceStream);
    FileStream destinationStream = new FileStream("../../../Data/DestinationWorkbookTemplate.xlsx", FileMode.Open, FileAccess.Read);
    IWorkbook destinationWorkbook = application.Workbooks.Open(destinationStream);

    //Clone the workbook
    destinationWorkbook = sourceWorkbook.Clone();
   
    //Saving the workbook as stream
    FileStream outputStream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.Write);
    destinationWorkbook.SaveAs(outputStream);

    //Dispose streams
    outputStream.Dispose();
    destinationStream.Dispose();
    sourceStream.Dispose();
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

A complete working example of copying an Excel workbook in C# is present on [this GitHub page]().

### Copy Worksheet

The following code example illustrates how to copy a sheet, along with its entire contents, to another workbook.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  FileStream sourceStream = new FileStream("SourceWorkbookTemplate.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook sourceWorkbook = application.Workbooks.Open(sourceStream);
  FileStream destinationStream = new FileStream("DestinationWorkbookTemplate.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook destinationWorkbook = application.Workbooks.Open(destinationStream);

  //Copy first worksheet from the source workbook to the destination workbook
  destinationWorkbook.Worksheets.AddCopy(sourceWorkbook.Worksheets[0]);
  destinationWorkbook.ActiveSheetIndex = 1;

  //Saving the workbook as stream
  FileStream copiedStream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.ReadWrite);
  destinationWorkbook.SaveAs(copiedStream);
  copiedStream.Dispose();
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

A complete working example for copying Excel worksheets in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/Copy%20Worksheet).

Specific copy options can be chosen while copying a worksheet, which helps to achieve customized copying by ignoring certain formatting. For more information about copy options, please refer [ExcelWorksheetCopyFlags](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ExcelWorksheetCopyFlags.html).

### Copy Row

The following code example illustrates how to copy a row from one worksheet to another.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    FileStream inputStream = new FileStream("../../../Data/InputTemplate.xlsx", FileMode.Open, FileAccess.Read);
    IWorkbook workbook = application.Workbooks.Open(inputStream);

    IWorksheet sourceWorksheet = workbook.Worksheets[0];
    IWorksheet destinationWorksheet = workbook.Worksheets[1];

    IRange sourceRow = sourceWorksheet.Range[1, 1];
    IRange destinationRow = destinationWorksheet.Range[1, 1];

    //Copy the entire row to the next sheet
    sourceRow.EntireRow.CopyTo(destinationRow);

    //Saving the workbook as stream
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

A complete working example of copying a row in C# is present on [this GitHub page]().

### Copy Column

The following code example illustrates how to copy a column from one worksheet to another.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    FileStream inputStream= new FileStream("../../../Data/InputTemplate.xlsx", FileMode.Open, FileAccess.Read);
    IWorkbook workbook = application.Workbooks.Open(inputStream);

    IWorksheet sourceWorksheet = workbook.Worksheets[0];
    IWorksheet destinationWorksheet = workbook.Worksheets[1];

    IRange sourceColumn = sourceWorksheet.Range[1, 1];
    IRange destinationColumn = destinationWorksheet.Range[1, 1];

    //Copy the entire column to the next sheet
    sourceColumn.EntireColumn.CopyTo(destinationColumn);

    //Saving the workbook as stream
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

A complete working example of copying a column in C# is present on [this GitHub page]().

### Copy Cell Range

The following code example illustrates how to copy a cell range from one worksheet to another.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    FileStream inputStream = new FileStream("../../../Data/InputTemplate.xlsx", FileMode.Open, FileAccess.Read);
    IWorkbook workbook = application.Workbooks.Open(inputStream);

    IWorksheet sourceWorksheet = workbook.Worksheets[0];
    IWorksheet destinationWorksheet = workbook.Worksheets[1];

    IRange source = sourceWorksheet.Range[1, 1, 4, 3];
    IRange destination = destinationWorksheet.Range[1, 1, 4, 3];

    //Copy the cell range to the next sheet
    source.CopyTo(destination);
    
    //Saving the workbook as stream
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

A complete working example for copying a cell range from one worksheet to another in C# is present on [this GitHub page]().

#### Copy Cell Range Options

[ExcelCopyRangeOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ExcelCopyRangeOptions.html) allows you to copy a cell range with specific options.

The following code example illustrates how to copy a cell range with copy range options from one worksheet to another.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    FileStream inputStream = new FileStream("../../../Data/InputTemplate.xlsx", FileMode.Open, FileAccess.Read);
    IWorkbook workbook = application.Workbooks.Open(inputStream);

    IWorksheet sourceWorksheet = workbook.Worksheets[0];
    IWorksheet destinationWorksheet = workbook.Worksheets[1];

    IRange source = sourceWorksheet.Range[1, 1, 4, 3];
    IRange destination = destinationWorksheet.Range[1, 1, 4, 3];

    //Copy the cell range with options
    source.CopyTo(destination, ExcelCopyRangeOptions.CopyStyles);
    
    //Saving the workbook as stream
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

A complete working example of copying a cell range with copy range options from one worksheet to another in C# is present on [this GitHub page]().

## Move

The **move** operation in the Syncfusion Essential XlsIO library allows users to transfer various components of an Excel workbook, including entire worksheets, specific cell ranges, rows, columns, and even entire workbooks, from one location to another within the workbook or across different workbooks.

### Move Worksheet

The following code example illustrates how to move a sheet, along with its entire contents.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(3);
  IWorksheet sheet = workbook.Worksheets[0];

  //Move the Sheet
  sheet.Move(1);

  //Saving the workbook as stream
  FileStream stream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(stream);
  stream.Dispose();
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

A complete working example for moving Excel worksheets in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/Copy%20Worksheet).

### Move Row

The following code example illustrates how to move a row from one worksheet to another.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    FileStream sourceStream = new FileStream("../../../Data/InputTemplate.xlsx", FileMode.Open, FileAccess.Read);
    IWorkbook workbook = application.Workbooks.Open(sourceStream);

    IWorksheet sourceWorksheet = workbook.Worksheets[0];
    IWorksheet destinationWorksheet = workbook.Worksheets[1];

    IRange sourceRow = sourceWorksheet.Range[2, 1];
    IRange destinationRow = destinationWorksheet.Range[2, 1];

    //Move the entire row to the next sheet
    sourceRow.EntireRow.MoveTo(destinationRow);

    //Saving the workbook as stream
    FileStream outputStream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.Write);
    workbook.SaveAs(outputStream);

    //Dispose streams
    outputStream.Dispose();
    sourceStream.Dispose();
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

A complete working example of moving a row in C# is available on [this GitHub page]().

### Move Column

The following code example illustrates how to move a column from one worksheet to another.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    FileStream inputStream = new FileStream("../../../Data/InputTemplate.xlsx", FileMode.Open, FileAccess.Read);
    IWorkbook workbook = application.Workbooks.Open(inputStream );

    IWorksheet sourceWorksheet = workbook.Worksheets[0];
    IWorksheet destinationWorksheet = workbook.Worksheets[1];

    IRange source= sourceWorksheet.Range[1, 2];
    IRange destination = destinationWorksheet.Range[1, 2];

    //Move the entire column to the next sheet
    source.EntireColumn.MoveTo(destination);

    //Saving the workbook as stream
    FileStream outputStream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.Write);
    workbook.SaveAs(outputStream);

    //Dispose streams
    outputStream.Dispose();
    inputStream .Dispose();
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

A complete working example of moving a column in C# is present on [this GitHub page]().

### Move Cell Range

The following code example illustrates how to move a cell range from one worksheet to another.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    FileStream inputStream = new FileStream("../../../Data/InputTemplate.xlsx", FileMode.Open, FileAccess.Read);
    IWorkbook workbook = application.Workbooks.Open(inputStream);

    IWorksheet sourceWorksheet = workbook.Worksheets[0];
    IWorksheet destinationWorksheet = workbook.Worksheets[1];

    IRange source = sourceWorksheet.Range[1, 1, 4, 3];
    IRange destination = destinationWorksheet.Range[1, 1, 4, 3];

    //Move the cell range to the next sheet
    source.MoveTo(destination);

    //Saving the workbook as stream
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

A complete working example for moving a cell range from one worksheet to another in C# is present on [this GitHub page]().