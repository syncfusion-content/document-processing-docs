---
title: Performance Optimization in .NET Excel Library | Syncfusion
description: The performance section describes best practices for reading, writing, styling, autofit, data import, and validation.
platform: document-processing
control: XlsIO
documentation: UG
---
# Performance Optimization in .NET Excel Library

This section describes patterns that improve XlsIO performance when you read, write, format, or validate large workbooks. Measure a baseline first, then apply the patterns that target your bottleneck.

## Prerequisites

To use the examples in this section, ensure the following are in place:

- Reference the **Syncfusion.XlsIO** assembly (or install the **Syncfusion.ExcelIO.Net.Core** NuGet package).
- Include the required namespaces in your code file:

  ```csharp
  using Syncfusion.XlsIO;
  using System.Drawing;
  ```

- Register the Syncfusion license in your application.
- Always measure a baseline before applying a pattern, and again after, to confirm the improvement is meaningful for your data.

## See also

- [Working with cell or range formatting](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-cell-or-range-formatting)
- [Working with data validation](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-data-validation)
- [Working with data](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-data)
- [Syncfusion XlsIO overview](https://help.syncfusion.com/document-processing/excel/excel-library/net/overview)

## UsedRange

Cache the [UsedRange](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_UsedRange) outside any loop that reads row or column bounds. `UsedRange` is a computed property; calling it on every iteration of a hot loop adds avoidable overhead.

{% tabs %} 
{% highlight c# tabtitle="C# [Cross-platform]" %}
int lastRow = sheet.UsedRange.LastRow;
for(int i=0;i<lastRow;i++)
{
  //codes
}

//Do not use like below.
for(int i = 0;i<sheet.UsedRange.LastRow;i++)
{
  //codes
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
int lastRow = sheet.UsedRange.LastRow;
for(int i=0;i<lastRow;i++)
{
  //codes
}

//Do not use like below.
for(int i = 0;i<sheet.UsedRange.LastRow;i++)
{
  //codes
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim lastRow As Integer = sheet.UsedRange.LastRow
For i As Integer = 0 To lastRow - 1
  'codes
Next

'Do not use like below.
For i As Integer = 0 To sheet.UsedRange.LastRow - 1
  'codes
Next
{% endhighlight %}
{% endtabs %}  

## Read

The following code example demonstrates how to efficiently read cell values from the Excel document with high performance using GetCellValue method.

{% tabs %} 
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine engine = new ExcelEngine())
{
    IApplication application = engine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("Input.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];
    IRange range = worksheet.UsedRange;
    int startRow = range.Row;
    int endRow = range.LastRow;
    int startColumn = range.Column;
    int endColumn = range.LastColumn;
    
    for (int rowIndex = startRow; rowIndex <= endRow; rowIndex++)
    {
        for (int columnIndex = startColumn; columnIndex <= endColumn; columnIndex++)
        {
            string value = worksheet.GetCellValue(rowIndex, columnIndex, false);
        }
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine engine = new ExcelEngine())
{
    IApplication application = engine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("Input.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];
    IRange range = worksheet.UsedRange;
    int startRow = range.Row;
    int endRow = range.LastRow;
    int startColumn = range.Column;
    int endColumn = range.LastColumn;
    
    for (int rowIndex = startRow; rowIndex <= endRow; rowIndex++)
    {
        for (int columnIndex = startColumn; columnIndex <= endColumn; columnIndex++)
        {
            string value = worksheet.GetCellValue(rowIndex, columnIndex, false);
        }
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using engine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = engine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("Input.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)
    Dim range As IRange = worksheet.UsedRange
    Dim startRow As Integer = range.Row
    Dim endRow As Integer = range.LastRow
    Dim startColumn As Integer = range.Column
    Dim endColumn As Integer = range.LastColumn
    
    For rowIndex As Integer = startRow To endRow
        For columnIndex As Integer = startColumn To endColumn
            Dim value As String = worksheet.GetCellValue(rowIndex, columnIndex, False)
        Next
    Next
End Using
{% endhighlight %}
{% endtabs %}  

## Write

Use [IMigrantRange](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IMigrantRange.html) instead of [IRange](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html) to optimize performance while dealing with large data.

The **IMigrantRange** interface can be used to access and manipulate worksheet range. This is an optimal method of writing values with better memory performance. 

The following code example illustrates how the **IMigrantRange** is accessed.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
IMigrantRange migrantRange = workbook.Worksheets[0].MigrantRange; 

int rowCount = 10;
int colCount = 10; 

// Writing Data.
for (int row = 1; row <= rowCount; row++)
{
  for (int column = 1; column <= colCount; column++)
  {
    // Writing values.
    migrantRange.ResetRowColumn(row, column);

    // Setting value of this migrant range which is similar to IRange object.
    migrantRange.Value = "Syncfusion";       
  }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
IMigrantRange migrantRange = workbook.Worksheets[0].MigrantRange; 

int rowCount = 10;
int colCount = 10; 

// Writing Data.
for (int row = 1; row <= rowCount; row++)
{
  for (int column = 1; column <= colCount; column++)
  {
    // Writing values.
    migrantRange.ResetRowColumn(row, column);

    // Setting value of this migrant range which is similar to IRange object.
    migrantRange.Value = "Syncfusion";       
  }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim rowCount As Integer = 10
Dim colCount As Integer = 10

'Writing Data.
Dim row As Integer
Dim migrantRange As IMigrantRange = workbook.Worksheets(0).MigrantRange
For row = 1 To rowCount Step row + 1
  Dim column As Integer
  For column = 1 To colCount Step column + 1
    'Writing values.
    migrantRange.ResetRowColumn(row, column)

    ' Setting value of this migrant range which is similar to IRange object.
    migrantRange.Value = "Syncfusion"
  Next
Next
{% endhighlight %}
{% endtabs %}  

**IMigrantRange** provides us a [SetValue](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IMigrantRange.html#Syncfusion_XlsIO_IMigrantRange_SetValue_System_Int32_) method in which different value for the range can be assigned. Following code snippet illustrates regarding this.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  excelEngine.Excel.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = excelEngine.Excel.Workbooks.Create();
  IMigrantRange migrantRange = workbook.Worksheets[0].MigrantRange;

  // Writing values.
  migrantRange.ResetRowColumn(1, 1);

  //Setting boolean value
  migrantRange.SetValue(true);
  migrantRange.ResetRowColumn(1, 2);

  //Setting DateTime value
  migrantRange.SetValue(DateTime.Now);
  migrantRange.ResetRowColumn(1, 3);

  //Setting double value
  migrantRange.SetValue(5.5);
  migrantRange.ResetRowColumn(1, 4);

  //Setting int value
  migrantRange.SetValue(5);
  migrantRange.ResetRowColumn(1, 5);

  //Setting string value
  migrantRange.SetValue("Syncfusion");

  workbook.SaveAs("MigrantRange.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  excelEngine.Excel.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = excelEngine.Excel.Workbooks.Create();
  IMigrantRange migrantRange = workbook.Worksheets[0].MigrantRange;

  // Writing values.
  migrantRange.ResetRowColumn(1, 1);

  //Setting boolean value
  migrantRange.SetValue(true);
  migrantRange.ResetRowColumn(1, 2);

  //Setting DateTime value
  migrantRange.SetValue(DateTime.Now);
  migrantRange.ResetRowColumn(1, 3);

  //Setting double value
  migrantRange.SetValue(5.5);
  migrantRange.ResetRowColumn(1, 4);

  //Setting int value
  migrantRange.SetValue(5);
  migrantRange.ResetRowColumn(1, 5);

  //Setting string value
  migrantRange.SetValue("Syncfusion");

  workbook.SaveAs("MigrantRange.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim excelEngine As New ExcelEngine()
excelEngine.Excel.DefaultVersion = ExcelVersion.Excel2013
Dim workbook As IWorkbook = excelEngine.Excel.Workbooks.Create()
Dim sheet As IWorksheet = workbook.Worksheets(0)
Dim migrantRange As IMigrantRange = workbook.Worksheets(0).MigrantRange

' Writing values.
migrantRange.ResetRowColumn(1, 1)

'Setting boolean value
migrantRange.SetValue(True)
migrantRange.ResetRowColumn(1, 2)

'Setting DateTime value
migrantRange.SetValue(DateTime.Now)
migrantRange.ResetRowColumn(1, 3)

'Setting double value
migrantRange.SetValue(5.5)
migrantRange.ResetRowColumn(1, 4)

'Setting int value
migrantRange.SetValue(5)
migrantRange.ResetRowColumn(1, 5)

'Setting string value
migrantRange.SetValue("Syncfusion")
workbook.Version = ExcelVersion.Excel2013
workbook.SaveAs("MigrantRange.xlsx")
workbook.Close()
excelEngine.Dispose()
{% endhighlight %}
{% endtabs %} 

## Styles

Use global styles, rather than using different cell styles for each cell/range. See [Applying global styles](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-cell-or-range-formatting#apply-global-style).

Use [BeginUpdate](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.Interfaces.IOptimizedUpdate.html#Syncfusion_XlsIO_Interfaces_IOptimizedUpdate_BeginUpdate) and [EndUpdate](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.Interfaces.IOptimizedUpdate.html#Syncfusion_XlsIO_Interfaces_IOptimizedUpdate_EndUpdate) call while using more than one global style for a worksheet.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Defining body style
IStyle bodyStyle = workbook.Styles.Add("BodyStyle");
bodyStyle.BeginUpdate();
bodyStyle.Color = Color.FromArgb(239, 243, 247);
bodyStyle.Borders[ExcelBordersIndex.EdgeLeft].LineStyle = ExcelLineStyle.Thin;
bodyStyle.Borders[ExcelBordersIndex.EdgeRight].LineStyle = ExcelLineStyle.Thin;
bodyStyle.EndUpdate();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Defining body style
IStyle bodyStyle = workbook.Styles.Add("BodyStyle");
bodyStyle.BeginUpdate();
bodyStyle.Color = Color.FromArgb(239, 243, 247);
bodyStyle.Borders[ExcelBordersIndex.EdgeLeft].LineStyle = ExcelLineStyle.Thin;
bodyStyle.Borders[ExcelBordersIndex.EdgeRight].LineStyle = ExcelLineStyle.Thin;
bodyStyle.EndUpdate();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Defining body style
Dim bodyStyle As IStyle = workbook.Styles.Add("BodyStyle")
bodyStyle.BeginUpdate()
bodyStyle.Color = Color.FromArgb(239, 243, 247)
bodyStyle.Borders(ExcelBordersIndex.EdgeLeft).LineStyle = ExcelLineStyle.Thin
bodyStyle.Borders(ExcelBordersIndex.EdgeRight).LineStyle = ExcelLineStyle.Thin
bodyStyle.EndUpdate()
{% endhighlight %}

{% endtabs %}  
  
### Set default row style and default column style

Performance can be improved to a greater extent by setting default styles for rows and columns instead of setting cell styles for each cells in one or more rows and columns.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set default styles for rows and columns
IStyle style = workbook.Styles.Add("Style"); 
style.Font.FontName = "Arial"; 
style.Font.Size = 10; 

//Set default style for the entire row (3rd row)
worksheet.SetDefaultRowStyle(3, style);

//Set default style for entire rows from 4 to 8 (4th row to 8th row)
worksheet.SetDefaultRowStyle(4, 8, style);

//Set default style for the entire column A (1st column)
worksheet.SetDefaultColumnStyle(1, style);

//Set default style for entire columns from B to L (2nd column to 12th column)
worksheet.SetDefaultColumnStyle(2, 12, style);

//Do not use like below when an entire row/column or a number of rows/columns need to be formatted with common styles, as it will affect performance
//worksheet.Range["4:8"].CellStyle.Font.FontName = "Arial"; 
//worksheet.Range["4:8"].CellStyle.Font.Size = 10;
//worksheet.Range["A:L"].CellStyle.Font.FontName = "Arial"; 
//worksheet.Range["A:L"].CellStyle.Font.Size = 10;

//CellStyle property can be used only when one cell or a range of cells has to be formatted like below
//worksheet.Range["D2"].CellStyle.Font.FontName = "Arial"; 
//worksheet.Range["A1:L2"].CellStyle.Font.Size = 10;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set default styles for rows and columns
IStyle style = workbook.Styles.Add("Style"); 
style.Font.FontName = "Arial"; 
style.Font.Size = 10; 

//Set default style for the entire row (3rd row)
worksheet.SetDefaultRowStyle(3, style);

//Set default style for entire rows from 4 to 8 (4th row to 8th row)
worksheet.SetDefaultRowStyle(4, 8, style);

//Set default style for the entire column A (1st column)
worksheet.SetDefaultColumnStyle(1, style);

//Set default style for entire columns from B to L (2nd column to 12th column)
worksheet.SetDefaultColumnStyle(2, 12, style);

//Do not use like below when an entire row/column or a number of rows/columns need to be formatted with common styles, as it will affect performance
//worksheet.Range["4:8"].CellStyle.Font.FontName = "Arial"; 
//worksheet.Range["4:8"].CellStyle.Font.Size = 10;
//worksheet.Range["A:L"].CellStyle.Font.FontName = "Arial"; 
//worksheet.Range["A:L"].CellStyle.Font.Size = 10;

//CellStyle property can be used only when one cell or a range of cells has to be formatted like below
//worksheet.Range["D2"].CellStyle.Font.FontName = "Arial"; 
//worksheet.Range["A1:L2"].CellStyle.Font.Size = 10;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set default styles for rows and columns
Dim style As IStyle = workbook.Styles.Add("Style")
style.Font.FontName = "Arial"
style.Font.Size = 10

'Set default style for the entire row (3rd row)
worksheet.SetDefaultRowStyle(3, style)

'Set default style for entire rows from 4 to 8 (4th row to 8th row)
worksheet.SetDefaultRowStyle(4, 8, style)

'Set default style for the entire column A (1st column)
worksheet.SetDefaultColumnStyle(1, style)

'Set default style for entire columns from B to L (2nd column to 12th column)
worksheet.SetDefaultColumnStyle(2, 12, style)

'Do not use like below when an entire row/column or a number of rows/columns need to be formatted with common styles as it will affect performance
'worksheet.Range("4:8").CellStyle.Font.FontName = "Arial"
'worksheet.Range("4:8").CellStyle.Font.Size = 10
'worksheet.Range("A:L").CellStyle.Font.FontName = "Arial"
'worksheet.Range("A:L").CellStyle.Font.Size = 10

'CellStyle property can be used only when one cell or a range of cells has to be formatted like below
'worksheet.Range("D2").CellStyle.Font.FontName = "Arial"
'worksheet.Range("A1:L2").CellStyle.Font.Size = 10
{% endhighlight %}
{% endtabs %}  

## AutoFit 

Minimize AutoFit manipulations which reduces the time consumption.

For improved performance in Excel to PDF conversion, it is recommended to set the [SkipAutoFitRow](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IApplication.html#Syncfusion_XlsIO_IApplication_SkipAutoFitRow) property of [IApplication](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IApplication.html) as TRUE.

{% tabs %} 
{% highlight c# tabtitle="C# [Cross-platform]" %}
ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;

//Skips AutoFitting of rows during conversion
application.SkipAutoFitRow = true;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;

//Skips AutoFitting of rows during conversion
application.SkipAutoFitRow = true;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim excelEngine As ExcelEngine = New ExcelEngine()
Dim application As IApplication = excelEngine.Excel

'Skips AutoFitting of rows during conversion
application.SkipAutoFitRow = True
{% endhighlight %}
{% endtabs %} 

## Importing DataTable

The [ImportDataTable](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_ImportDataTable_System_Data_DataTable_System_Int32_System_Int32_System_Boolean_) overload that takes an `ImportOnSave` boolean argument lets you import a `DataTable` with lower memory usage by serializing the data directly during the `SaveAs` call. Prefer this overload when you are importing large data sets and do not need to modify the imported data afterward.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
DataTable table = Worksheet.ExportDataTable(1, 1, Worksheet.UsedRange.LastRow, Worksheet.UsedRange.LastColumn, ExcelExportDataTableOptions.DetectColumnTypes); 

//Enable ImportOnSave option along with column header.
workbook.Worksheets[0].ImportDataTable(table, 1, 1, true, true);
workbook.Version = ExcelVersion.Excel2013; 
workbook.SaveAs("Output.xlsx");
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
DataTable table = Worksheet.ExportDataTable(1, 1, Worksheet.UsedRange.LastRow, Worksheet.UsedRange.LastColumn, ExcelExportDataTableOptions.DetectColumnTypes); 

//Enable ImportOnSave option along with column header.
workbook.Worksheets[0].ImportDataTable(table, 1, 1, true, true);
workbook.Version = ExcelVersion.Excel2013; 
workbook.SaveAs("Output.xlsx");
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim table As DataTable = Worksheet.ExportDataTable(1, 1, Worksheet.UsedRange.LastRow, Worksheet.UsedRange.LastColumn, ExcelExportDataTableOptions.DetectColumnTypes)

'Enable ImportOnSave option along with column header.
workbook.Worksheets(0).ImportDataTable(table, 1, 1, True, True)
workbook.Version = ExcelVersion.Excel2013
workbook.SaveAs("Output.xlsx")
{% endhighlight %}
{% endtabs %}  

**Limitations** 

* Cannot modify data dynamically
* Styles cannot be applied
* Table style cannot be applied
* Existing sheet data will be lost

## Data Validation

Use of [BeginUpdate](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.Interfaces.IOptimizedUpdate.html#Syncfusion_XlsIO_Interfaces_IOptimizedUpdate_BeginUpdate) and [EndUpdate](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.Interfaces.IOptimizedUpdate.html#Syncfusion_XlsIO_Interfaces_IOptimizedUpdate_EndUpdate) methods for large blocks of Data Validation greatly improves the performance.

{% tabs %} 
{% highlight c# tabtitle="C# [Cross-platform]" %}
// List data validation for entire column
IDataValidation validation = sheet.Range["A3"].EntireColumn.DataValidation;
validation.BeginUpdate();
validation.DataRange = sheet.Range["D1:D56"];
validation.IsEmptyCellAllowed = true;
validation.IsListInFormula = false;
validation.EndUpdate();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
// List data validation for entire column
IDataValidation validation = sheet.Range["A3"].EntireColumn.DataValidation;
validation.BeginUpdate();
validation.DataRange = sheet.Range["D1:D56"];
validation.IsEmptyCellAllowed = true;
validation.IsListInFormula = false;
validation.EndUpdate();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
' List data validation for entire column
Dim validation As IDataValidation = sheet.Range("A3").EntireColumn.DataValidation
validation.BeginUpdate()
validation.DataRange = sheet.Range("D1:D56")
validation.IsEmptyCellAllowed = True
validation.IsListInFormula = False
validation.EndUpdate()
{% endhighlight %}
{% endtabs %}  

### Create data validation efficiently

The .NET Excel library allows data validation to be created directly for a cell or range using the `CreateDataValidation` API. This API improves performance, particularly when applying the same validation rule to multiple cells in a range.

The `CreateDataValidation` API supports all validation types, including text length, time, list, number, date, and custom formula validation.

The following code example shows how to create text length validation for a range of cells.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    // Create text length validation for the specified range
    IDataValidation validation = worksheet.CreateDataValidation(worksheet.Range["A1:A10"]);

    validation.AllowType = ExcelDataType.TextLength;
    validation.CompareOperator = ExcelDataValidationComparisonOperator.Between;
    validation.FirstFormula = "3";
    validation.SecondFormula = "15";

    // Configure the validation error message
    validation.ShowErrorBox = true;
    validation.ErrorBoxTitle = "Invalid Input";
    validation.ErrorBoxText = "Text length must be between 3 and 15 characters.";
    validation.PromptBoxText = "Data validation for text length";
    validation.ShowPromptBox = true;

    workbook.SaveAs(Path.GetFullPath("Output/TextLengthValidation.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    // Create text length validation for the specified range
    IDataValidation validation = worksheet.CreateDataValidation(worksheet.Range["A1:A10"]);

    validation.AllowType = ExcelDataType.TextLength;
    validation.CompareOperator = ExcelDataValidationComparisonOperator.Between;
    validation.FirstFormula = "3";
    validation.SecondFormula = "15";

    // Configure the validation error message
    validation.ShowErrorBox = true;
    validation.ErrorBoxTitle = "Invalid Input";
    validation.ErrorBoxText = "Text length must be between 3 and 15 characters.";
    validation.PromptBoxText = "Data validation for text length";
    validation.ShowPromptBox = true;

    workbook.SaveAs("TextLengthValidation.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()

    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    Dim workbook As IWorkbook = application.Workbooks.Create(1)
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    ' Create text length validation for the specified range
    Dim validation As IDataValidation = worksheet.CreateDataValidation(worksheet.Range("A1:A10"))

    validation.AllowType = ExcelDataType.TextLength
    validation.CompareOperator = ExcelDataValidationComparisonOperator.Between
    validation.FirstFormula = "3"
    validation.SecondFormula = "15"

    ' Configure the validation error message
    validation.ShowErrorBox = True
    validation.ErrorBoxTitle = "Invalid Input"
    validation.ErrorBoxText = "Text length must be between 3 and 15 characters."
    validation.PromptBoxText = "Data validation for text length"
    validation.ShowPromptBox = True

    workbook.SaveAs("TextLengthValidation.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

#### Performance metrics for data validation

The following benchmark measures the time required by the Syncfusion Excel (XlsIO) library to create and save an Excel workbook containing data validation rules. Each validation type is applied to 1,000,000 cells using the `CreateDataValidation` API. The measured validation types include text length, time, list, number, date, and custom formula.

<table>
<tr>
<th>
Validation type
</th>
<th>
Time taken (seconds)
</th>
<th>
Sample link
</th>
</tr>
<tr>
<td>
Text length
</td>
<td>
1.407
</td>
<td>
<a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Data%20Validation/Text%20Length%20Validation/.NET/Text%20Length%20Validation" aria-label="GitHub demo link">GitHub link</a>.
</td>
</tr>
<tr>
<td>
Time
</td>
<td>
1.426
</td>
<td>
<a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Data%20Validation/Time%20Validation/.NET/Time%20Validation" aria-label="GitHub demo link">GitHub link</a>.
</td>
</tr>
<tr>
<td>
List 
</td>
<td>
1.424
</td>
<td>
<a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Data%20Validation/List%20Validation/.NET/List%20Validation" aria-label="GitHub demo link">GitHub link</a>.
</td>
</tr>
<tr>
<td>
Number
</td>
<td>
1.372
</td>
<td>
<a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Data%20Validation/Number%20Validation/.NET/Number%20Validation" aria-label="GitHub demo link">GitHub link</a>.
</td>
</tr>
<tr>
<td>
Date
</td>
<td>
1.428
</td>
<td>
<a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Data%20Validation/Date%20Validation/.NET/Date%20Validation" aria-label="GitHub demo link">GitHub link</a>.
</td>
</tr>
<tr>
<td>
Custom formula
</td>
<td>
1.402
</td>
<td>
<a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Data%20Validation/Formula%20Validation/.NET/Formula%20Validation" aria-label="GitHub demo link">GitHub link</a>.
</td>
</tr>
</table>

**Test environment**

The benchmark was run on the following configuration:

* **Operating system:** Windows 10 64-bit
* **CPU:** AMD Ryzen 5 7520U with Radeon Graphics
* **Memory:** 16 GB RAM

> NOTE: Numbers are based on a single run, not a statistically averaged benchmark. Use them as a rough reference, not as a service-level agreement.