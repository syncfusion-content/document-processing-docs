---
title: List of APIs under IRange | Excel library | Syncfusion
description: In this section, you can learn about the list of APIs under IRange for Excel document using Syncfusion .NET Excel library.
platform: document-processing
control: XlsIO
documentation: UG
---

# List of APIs under IRange 

## Cell Address

The following code example illustrates the usage of [Address](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_Address), [AddressGlobal](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_AddressGlobal), [AddressLocal](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_AddressLocal), [AddressR1C1](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_AddressR1C1), [AddressR1C1Local](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_AddressR1C1Local) properties.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Address
  string address = worksheet.Range[3, 4].Address;

  //Global Address
  string address_Global = worksheet.Range[3, 4].AddressGlobal;

  //Local Address
  string address_Local = worksheet.Range[3, 4].AddressLocal;

  //R1C1 Address
  string address_R1C1 = worksheet.Range[3, 4].AddressR1C1;

  //Local R1C1 Address
  string address_R1C1_Local = worksheet.Range[3, 4].AddressR1C1Local;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Address
  string address = worksheet.Range[3, 4].Address;

  //Global Address
  string address_Global = worksheet.Range[3, 4].AddressGlobal;

  //Local Address
  string address_Local = worksheet.Range[3, 4].AddressLocal;

  //R1C1 Address
  string address_R1C1 = worksheet.Range[3, 4].AddressR1C1;

  //Local R1C1 Address
  string address_R1C1_Local = worksheet.Range[3, 4].AddressR1C1Local;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Address
  Dim address As String = worksheet.Range(3, 4).Address

  'Global Address
  Dim address_Global As String = worksheet.Range(3, 4).AddressGlobal

  'Local Address
  Dim address_Local As String = worksheet.Range(3, 4).AddressLocal

  'R1C1 Address
  Dim address_R1C1 As String = worksheet.Range(3, 4).AddressR1C1

  'Local R1C1 Address
  Dim address_R1C1_Local As String = worksheet.Range(3, 4).AddressR1C1Local

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## Boolean

As the name says, [Boolean](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_Boolean) property gets or sets the boolean value in a worksheet range. The following code example illustrates this.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Boolean - True
  worksheet.Range["B3"].Boolean = true;
  bool b3 = worksheet.Range["B3"].Boolean;

  //Boolean - False
  worksheet.Range["B4"].Boolean = false;
  bool b4 = worksheet.Range["B4"].Boolean;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Boolean - True
  worksheet.Range["B3"].Boolean = true;
  bool b3 = worksheet.Range["B3"].Boolean;

  //Boolean - False
  worksheet.Range["B4"].Boolean = false;
  bool b4 = worksheet.Range["B4"].Boolean;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Boolean - True
  worksheet.Range("B3").Boolean = True
  Dim b3 As Boolean = worksheet.Range("B3").Boolean

  'Boolean - False
  worksheet.Range("B4").Boolean = False
  Dim b4 As Boolean = worksheet.Range("B4").Boolean

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## Borders

The following code example illustrates how to set border styles for a worksheet range using [Borders](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_Borders) property.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Set text
  worksheet.Range["C2"].Text = "Sample";

  //Set borders
  IBorders borders = worksheet.Range["C2"].Borders;

  //Set border color
  borders[ExcelBordersIndex.EdgeTop].Color = ExcelKnownColors.Red;
  borders[ExcelBordersIndex.EdgeBottom].Color = ExcelKnownColors.Blue;

  //Set line style
  borders[ExcelBordersIndex.EdgeTop].LineStyle = ExcelLineStyle.Thick;
  borders[ExcelBordersIndex.EdgeBottom].LineStyle = ExcelLineStyle.Thick;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Set text
  worksheet.Range["C2"].Text = "Sample";

  //Set borders
  IBorders borders = worksheet.Range["C2"].Borders;

  //Set border color
  borders[ExcelBordersIndex.EdgeTop].Color = ExcelKnownColors.Red;
  borders[ExcelBordersIndex.EdgeBottom].Color = ExcelKnownColors.Blue;

  //Set line style
  borders[ExcelBordersIndex.EdgeTop].LineStyle = ExcelLineStyle.Thick;
  borders[ExcelBordersIndex.EdgeBottom].LineStyle = ExcelLineStyle.Thick;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Set text
  worksheet.Range("C2").Text = "Sample"

  'Set borders
  Dim borders As IBorders = worksheet.Range("C2").Borders

  'Set border color
  borders(ExcelBordersIndex.EdgeTop).Color = ExcelKnownColors.Red
  borders(ExcelBordersIndex.EdgeBottom).Color = ExcelKnownColors.Blue

  'Set line style
  borders(ExcelBordersIndex.EdgeTop).LineStyle = ExcelLineStyle.Thick
  borders(ExcelBordersIndex.EdgeBottom).LineStyle = ExcelLineStyle.Thick

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## Built-In-Style

The following code example illustrates how to add [BuiltInStyle](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_BuiltInStyle) for a worksheet range.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Set text
  worksheet.Range["C2"].Text = "Sample";

  //Set built in style
  worksheet.Range["C2"].BuiltInStyle = BuiltInStyles.Accent3;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Set text
  worksheet.Range["C2"].Text = "Sample";

  //Set built in style
  worksheet.Range["C2"].BuiltInStyle = BuiltInStyles.Accent3;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Set text
  worksheet.Range("C2").Text = "Sample"

  'Set built in style
  worksheet.Range("C2").BuiltInStyle = BuiltInStyles.Accent3

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## Calculated Value

[CalculatedValue](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_CalculatedValue) is the evaluated value of the formula. The following code example illustrates how to get the **CalculatedValue** of the formula.

N> It is mandatory to enable sheet calculations i.e., **worksheet.EnableSheetCalculations();** before accessing the **CalculatedValue**. Else, **CalculatedValue** will be returned as null.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Set values
  worksheet.Range["A1"].Number = 10;
  worksheet.Range["A2"].Number = 20;

  //Set formula
  worksheet.Range["A3"].Formula = "=SUM(A1:A2)";

  //Enable sheet calculations
  worksheet.EnableSheetCalculations();

  //Get the calculated value
  string value = worksheet.Range["A3"].CalculatedValue;

  //Disable sheet calculations
  worksheet.DisableSheetCalculations();

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Set values
  worksheet.Range["A1"].Number = 10;
  worksheet.Range["A2"].Number = 20;

  //Set formula
  worksheet.Range["A3"].Formula = "=SUM(A1:A2)";

  //Enable sheet calculations
  worksheet.EnableSheetCalculations();

  //Get the calculated value
  string value = worksheet.Range["A3"].CalculatedValue;

  //Disable sheet calculations
  worksheet.DisableSheetCalculations();

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Set values
  worksheet.Range("A1").Number = 10
  worksheet.Range("A2").Number = 20

  'Set formula
  worksheet.Range("A3").Formula = "=SUM(A1:A2)"

  'Enable sheet calculations
  worksheet.EnableSheetCalculations()

  'Get the calculated value
  Dim value As String = worksheet.Range("A3").CalculatedValue

  'Disable sheet calculations
  worksheet.DisableSheetCalculations()

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## Cells

[Cells](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_Cells) property maintains the collection of cells in a worksheet range. The following code example illustrates how to access this property.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Range of cells
  IRange[] cells = worksheet.Range["A1:E5"].Cells;

  foreach (IRange cell in cells)
  {
    //Assign value
    cell.Text = cell.AddressLocal;
  }

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Range of cells
  IRange[] cells = worksheet.Range["A1:E5"].Cells;

  foreach (IRange cell in cells)
  {
    //Assign value
    cell.Text = cell.AddressLocal;
  }

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Range of cells
  Dim cells() As IRange = worksheet.Range("A1:E5").Cells

  For Each cell As IRange In cells
    'Assign value
    cell.Text = cell.AddressLocal
  Next

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## Cell Style Name

[CellStyleName](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_CellStyleName) represents the name of the style of worksheet range/cell. The default value is **Normal**.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Add style
  IStyle style = workbook.Styles.Add("CustomStyle");

  //Set color
  style.ColorIndex = ExcelKnownColors.Red;

  //Set style
  worksheet.Range["C2"].CellStyle = style;

  //Get the cell style name
  string cellStyleName = worksheet.Range["C2"].CellStyleName;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Add style
  IStyle style = workbook.Styles.Add("CustomStyle");

  //Set color
  style.ColorIndex = ExcelKnownColors.Red;

  //Set style
  worksheet.Range["C2"].CellStyle = style;

  //Get the cell style name
  string cellStyleName = worksheet.Range["C2"].CellStyleName;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Add style
  Dim style As IStyle = workbook.Styles.Add("CustomStyle")

  'Set color
  style.ColorIndex = ExcelKnownColors.Red

  'Set style
  worksheet.Range("C2").CellStyle = style

  'Get the cell style name
  Dim cellStyleName As String = worksheet.Range("C2").CellStyleName

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## Column

[Column](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_Column) property gets the column index of first column in worksheet range, which is one-index based. 

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Get first column in the range
  int firstColumn = worksheet.Range["E1:R3"].Column;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Get first column in the range
  int firstColumn = worksheet.Range["E1:R3"].Column;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Get first column in the range
  Dim firstColumn As Integer = worksheet.Range("E1:R3").Column

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## Columns

[Columns](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_Columns) property maintains the collection of columns in a worksheet range. 

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Columns
  IRange[] columns = worksheet.Range["A1:E5"].Columns;

  foreach (IRange column in columns)
  {
    //Assign value
    column.Text = column.AddressLocal;
  }

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Columns
  IRange[] columns = worksheet.Range["A1:E5"].Columns;

  foreach (IRange column in columns)
  {
    //Assign value
    column.Text = column.AddressLocal;
  }

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Columns
  Dim columns() As IRange = worksheet.Range("A1:E5").Columns

  For Each column As IRange In columns
    'Assign value
    column.Text = column.AddressLocal
  Next

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## Comment

For more details about Comment, [click here.](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-drawing-objects#comments)

## Conditional Formats

For more details about Conditional Formats, [click here.](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-conditional-formatting)

## Count

[Count](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_Count) property returns the number of cells in that particular worksheet range.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Number of cells
  int count = worksheet.Range["A1:E5"].Count;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Number of cells
  int count = worksheet.Range["A1:E5"].Count;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Number of cells
  Dim count As Integer = worksheet.Range("A1:E5").Count

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## Data Validation

For more details about Data Validation, [click here.](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-data-validation)

## End

[End](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_End) property returns the last cell in the particular worksheet range.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Last cell in the range
  IRange lastCell = worksheet.Range["A1:E5"].End;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Last cell in the range
  IRange lastCell = worksheet.Range["A1:E5"].End;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Last cell in the range
  Dim lastCell As IRange = worksheet.Range("A1:E5").End

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## Entire Column

[EntireColumn](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_EntireColumn), as the name says gets the entire column of the particular range.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Last cell in the entire column
  IRange lastCell = worksheet.Range["A1"].EntireColumn.End;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Last cell in the entire column
  IRange lastCell = worksheet.Range["A1"].EntireColumn.End;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Last cell in the entire column
  Dim lastCell As IRange = worksheet.Range("A1").EntireColumn.End

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

N> Using EntireColumn property excessively leads to time consumption and affects the performance.

## Entire Row

[EntireRow](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_EntireRow), as the name says gets the entire row of the particular range.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Last cell in the entire row
  IRange lastCell = worksheet.Range["A1"].EntireRow.End;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Last cell in the entire row
  IRange lastCell = worksheet.Range["A1"].EntireRow.End;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Last cell in the entire row
  Dim lastCell As IRange = worksheet.Range("A1").EntireRow.End

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## Formula

[Formula](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_Formula) property gets or sets the formula in specified range.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Set values
  worksheet.Range["A1"].Number = 10;
  worksheet.Range["B1"].Number = 20;

  //Set formula
  worksheet.Range["C1"].Formula = "=SUM(A1:B1)";

  //Enable sheet calculations
  worksheet.EnableSheetCalculations();

  //Get the claculated value of formula
  string value = worksheet.Range["C1"].CalculatedValue;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Set values
  worksheet.Range["A1"].Number = 10;
  worksheet.Range["B1"].Number = 20;

  //Set formula
  worksheet.Range["C1"].Formula = "=SUM(A1:B1)";

  //Enable sheet calculations
  worksheet.EnableSheetCalculations();

  //Get the claculated value of formula
  string value = worksheet.Range["C1"].CalculatedValue;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Set values
  worksheet.Range("A1").Number = 10
  worksheet.Range("B1").Number = 20

  'Set formula
  worksheet.Range("C1").Formula = "=SUM(A1:B1)"

  'Enable sheet calculations
  worksheet.EnableSheetCalculations()

  'Get the claculated value of formula
  Dim value As String = worksheet.Range("C1").CalculatedValue

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## Formula Array

For more details about FormulaArray, [click here.](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-formulas#array-of-formula)

## Formula Bool Value

[FormulaBoolValue](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_FormulaBoolValue) gets the [CalculatedValue](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_CalculatedValue) of formula as boolean.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Set values
  worksheet.Range["A1"].Number = 10;
  worksheet.Range["B1"].Number = 20;

  //Set formula
  worksheet.Range["C1"].Formula = "=SUM(A1:B1)";

  //Set boolean
  worksheet.Range["D1"].Boolean = true;

  //Set formula
  worksheet.Range["E1"].Formula = "=D1";

  //Enable sheet calculations
  worksheet.EnableSheetCalculations();

  //Get the formula boolean value
  bool value_C1 = worksheet.Range["C1"].FormulaBoolValue;
  bool value_E1 = worksheet.Range["E1"].FormulaBoolValue;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Set values
  worksheet.Range["A1"].Number = 10;
  worksheet.Range["B1"].Number = 20;

  //Set formula
  worksheet.Range["C1"].Formula = "=SUM(A1:B1)";

  //Set boolean
  worksheet.Range["D1"].Boolean = true;

  //Set formula
  worksheet.Range["E1"].Formula = "=D1";                

  //Enable sheet calculations
  worksheet.EnableSheetCalculations();

  //Get the formula boolean value
  bool value_C1 = worksheet.Range["C1"].FormulaBoolValue;
  bool value_E1 = worksheet.Range["E1"].FormulaBoolValue;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Set values
  worksheet.Range("A1").Number = 10
  worksheet.Range("B1").Number = 20

  'Set formula
  worksheet.Range("C1").Formula = "=SUM(A1:B1)"

  'Set boolean
  worksheet.Range("D1").Boolean = True

  'Set formula
  worksheet.Range("E1").Formula = "=D1"

  'Enable sheet calculations
  worksheet.EnableSheetCalculations()

  'Get the formula boolean value
  Dim value_C1 As Boolean = worksheet.Range("C1").FormulaBoolValue
  Dim value_E1 As Boolean = worksheet.Range("E1").FormulaBoolValue

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## Has Boolean

[HasBoolean](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_HasBoolean) returns whether the range has boolean value.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Set values
  worksheet.Range["A1"].Boolean = true;
  worksheet.Range["A2"].Number = 10;
  worksheet.Range["A3"].Value2 = true;

  //Get if the cell has boolean value
  bool hasBoolean_A1 = worksheet.Range["A1"].HasBoolean;
  bool hasBoolean_A2 = worksheet.Range["A2"].HasBoolean;
  bool hasBoolean_A3 = worksheet.Range["A3"].HasBoolean;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Set values
  worksheet.Range["A1"].Boolean = true;
  worksheet.Range["A2"].Number = 10;
  worksheet.Range["A3"].Value2 = true;

  //Get if the cell has boolean value
  bool hasBoolean_A1 = worksheet.Range["A1"].HasBoolean;
  bool hasBoolean_A2 = worksheet.Range["A2"].HasBoolean;
  bool hasBoolean_A3 = worksheet.Range["A3"].HasBoolean;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Set values
  worksheet.Range("A1").Boolean = True
  worksheet.Range("A2").Number = 10
  worksheet.Range("A3").Value2 = True

  'Get if the cell has boolean value
  Dim hasBoolean_A1 As Boolean = worksheet.Range("A1").HasBoolean
  Dim hasBoolean_A2 As Boolean = worksheet.Range("A2").HasBoolean
  Dim hasBoolean_A3 As Boolean = worksheet.Range("A3").HasBoolean

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## Has DataValidation

The following code snippet explains the behavior of [HasDataValidation](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_HasDataValidation) property.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Data Validation for Text Length
  IDataValidation txtLengthValidation = worksheet.Range["A3"].DataValidation;
  worksheet.Range["A1"].Text = "Enter the Text in A3";
  worksheet.Range["A1"].AutofitColumns();
  txtLengthValidation.AllowType = ExcelDataType.TextLength;
  txtLengthValidation.CompareOperator = ExcelDataValidationComparisonOperator.Between;
  txtLengthValidation.FirstFormula = "0";
  txtLengthValidation.SecondFormula = "5";

  bool validation_A1 = worksheet.Range["A1"].HasDataValidation;
  bool validation_A3 = worksheet.Range["A3"].HasDataValidation;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Data Validation for Text Length
  IDataValidation txtLengthValidation = worksheet.Range["A3"].DataValidation;
  worksheet.Range["A1"].Text = "Enter the Text in A3";
  worksheet.Range["A1"].AutofitColumns();
  txtLengthValidation.AllowType = ExcelDataType.TextLength;
  txtLengthValidation.CompareOperator = ExcelDataValidationComparisonOperator.Between;
  txtLengthValidation.FirstFormula = "0";
  txtLengthValidation.SecondFormula = "5";

  bool validation_A1 = worksheet.Range["A1"].HasDataValidation;
  bool validation_A3 = worksheet.Range["A3"].HasDataValidation;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Data Validation for Text Length
  Dim txtLengthValidation As IDataValidation = worksheet.Range("A3").DataValidation
  worksheet.Range("A1").Text = "Enter the Text in A3"
  worksheet.Range("A1").AutofitColumns()
  txtLengthValidation.AllowType = ExcelDataType.TextLength
  txtLengthValidation.CompareOperator = ExcelDataValidationComparisonOperator.Between
  txtLengthValidation.FirstFormula = "0"
  txtLengthValidation.SecondFormula = "5"

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## Has DateTime

The following code example illustrates the behavior of [HasDateTime](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_HasDateTime) property.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Set value through Value property
  worksheet.Range["B1"].Value = "Hello World";

  //Set date time through DatTime property
  worksheet.Range["B2"].DateTime = DateTime.Now;

  //Set value through Value2 property
  worksheet.Range["B3"].Value2 = "Hello World";

  //Set date time through Value2 property
  worksheet.Range["B4"].Value2 = DateTime.Now;

  bool dateTime_B1 = worksheet.Range["B1"].HasDateTime;
  bool dateTime_B2 = worksheet.Range["B2"].HasDateTime;
  bool dateTime_B3 = worksheet.Range["B3"].HasDateTime;
  bool dateTime_B4 = worksheet.Range["B4"].HasDateTime;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Set value through Value property
  worksheet.Range["B1"].Value = "Hello World";

  //Set date time through DatTime property
  worksheet.Range["B2"].DateTime = DateTime.Now;

  //Set value through Value2 property
  worksheet.Range["B3"].Value2 = "Hello World";

  //Set date time through Value2 property
  worksheet.Range["B4"].Value2 = DateTime.Now;

  bool dateTime_B1 = worksheet.Range["B1"].HasDateTime;
  bool dateTime_B2 = worksheet.Range["B2"].HasDateTime;
  bool dateTime_B3 = worksheet.Range["B3"].HasDateTime;
  bool dateTime_B4 = worksheet.Range["B4"].HasDateTime;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Set value through Value property
  worksheet.Range("B1").Value = "Hello World"

  'Set date time through DatTime property
  worksheet.Range("B2").DateTime = DateTime.Now

  'Set value through Value2 property
  worksheet.Range("B3").Value2 = "Hello World"

  'Set date time through Value2 property
  worksheet.Range("B4").Value2 = DateTime.Now

  Dim dateTime_B1 As Boolean = worksheet.Range("B1").HasDateTime
  Dim dateTime_B2 As Boolean = worksheet.Range("B2").HasDateTime
  Dim dateTime_B3 As Boolean = worksheet.Range("B3").HasDateTime
  Dim dateTime_B4 As Boolean = worksheet.Range("B4").HasDateTime

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## Has External Formula

The following code example illustrates the behavior of [HasExternalFormula](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_HasExternalFormula) property. 

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Set normal external formula
  worksheet.Range["C1"].Formula = "[One.xlsx]Sheet1!$A$1*5";

  //Set normal formula
  worksheet.Range["A2"].Number = 10;
  worksheet.Range["B2"].Number = 20;
  worksheet.Range["C2"].Formula = "=SUM(A2:B2)";

  bool extFormula_C1 = worksheet.Range["C1"].HasExternalFormula;
  bool extFormula_C2 = worksheet.Range["C2"].HasExternalFormula;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Set normal external formula
  worksheet.Range["C1"].Formula = "[One.xlsx]Sheet1!$A$1*5";

  //Set normal formula
  worksheet.Range["A2"].Number = 10;
  worksheet.Range["B2"].Number = 20;
  worksheet.Range["C2"].Formula = "=SUM(A2:B2)";

  bool extFormula_C1 = worksheet.Range["C1"].HasExternalFormula;
  bool extFormula_C2 = worksheet.Range["C2"].HasExternalFormula;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Set normal external formula
  worksheet.Range("C1").Formula = "[One.xlsx]Sheet1!$A$1*5"

  'Set normal formula
  worksheet.Range("A2").Number = 10
  worksheet.Range("B2").Number = 20
  worksheet.Range("C2").Formula = "=SUM(A2:B2)"

  Dim extFormula_C1 As Boolean = worksheet.Range("C1").HasExternalFormula
  Dim extFormula_C2 As Boolean = worksheet.Range("C2").HasExternalFormula

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## Has Formula

The following code example illustrates the behavior of [HasFormula](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_HasFormula) property. 

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Set values
  worksheet.Range["A2"].Number = 10;
  worksheet.Range["B2"].Number = 20;

  //Set formula
  worksheet.Range["C2"].Formula = "=SUM(A2:B2)";

  bool formula_A2 = worksheet.Range["A2"].HasFormula;
  bool formula_C2 = worksheet.Range["C2"].HasFormula;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Set values
  worksheet.Range["A2"].Number = 10;
  worksheet.Range["B2"].Number = 20;

  //Set formula
  worksheet.Range["C2"].Formula = "=SUM(A2:B2)";

  bool formula_A2 = worksheet.Range["A2"].HasFormula;
  bool formula_C2 = worksheet.Range["C2"].HasFormula;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Set values
  worksheet.Range("A2").Number = 10
  worksheet.Range("B2").Number = 20

  'Set formula
  worksheet.Range("C2").Formula = "=SUM(A2:B2)"

  Dim formula_A2 As Boolean = worksheet.Range("A2").HasFormula
  Dim formula_C2 As Boolean = worksheet.Range("C2").HasFormula

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## Has Formula Array

The following code example illustrates the behavior of [HasFormulaArray](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_HasFormulaArray) property. 

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Assign array formula
  worksheet.Range["A1:D1"].FormulaArray = "{1,2,3,4}";

  //Adding a named range for the range A1 to D1
  worksheet.Names.Add("ArrayRange", worksheet.Range["A1:D1"]);

  //Assign formula array with named range
  worksheet.Range["A2:D2"].FormulaArray = "ArrayRange+100";

  bool formulaArray = worksheet.Range["A1"].HasFormulaArray;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Assign array formula
  worksheet.Range["A1:D1"].FormulaArray = "{1,2,3,4}";

  //Adding a named range for the range A1 to D1
  worksheet.Names.Add("ArrayRange", worksheet.Range["A1:D1"]);

  //Assign formula array with named range
  worksheet.Range["A2:D2"].FormulaArray = "ArrayRange+100";

  bool formulaArray = worksheet.Range["A1"].HasFormulaArray;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Assign array formula
  worksheet.Range("A1:D1").FormulaArray = "{1,2,3,4}"

  'Adding a named range for the range A1 to D1
  worksheet.Names.Add("ArrayRange", worksheet.Range("A1:D1"))

  'Assign formula array with named range
  worksheet.Range("A2:D2").FormulaArray = "ArrayRange+100"

  Dim formulaArray As Boolean = worksheet.Range("A1").HasFormulaArray

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## Has Formula Bool Value

The following code example illustrates the behavior of [HasFormulaBoolValue](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_HasFormulaBoolValue) property. 

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Set boolean
  worksheet.Range["D1"].Boolean = true;

  //Set formula
  worksheet.Range["E1"].Formula = "=D1";

  //Enable sheet calculations
  worksheet.EnableSheetCalculations();

  //Get the formula boolean value
  bool value_E1 = worksheet.Range["E1"].FormulaBoolValue;

  //Has formula boolean value
  bool hasValue_E1 = worksheet.Range["E1"].HasFormulaBoolValue;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Set boolean
  worksheet.Range["D1"].Boolean = true;

  //Set formula
  worksheet.Range["E1"].Formula = "=D1";

  //Enable sheet calculations
  worksheet.EnableSheetCalculations();

  //Get the formula boolean value
  bool value_E1 = worksheet.Range["E1"].FormulaBoolValue;

  //Has formula boolean value
  bool hasValue_E1 = worksheet.Range["E1"].HasFormulaBoolValue;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Set boolean
  worksheet.Range("D1").Boolean = True

  'Set formula
  worksheet.Range("E1").Formula = "=D1"

  'Enable sheet calculations
  worksheet.EnableSheetCalculations()

  'Get the formula boolean value
  Dim value_E1 As Boolean = worksheet.Range("E1").FormulaBoolValue

  'Has formula boolean value
  Dim hasValue_E1 As Boolean = worksheet.Range("E1").HasFormulaBoolValue

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## Has Number

[HasNumber](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_HasNumber) property determines whether the cell has number in it.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Set values
  worksheet.Range["A1"].Number = 10;
  worksheet.Range["A2"].Text = "Sample";

  //Has number
  bool hasNumber_A1 = worksheet.Range["A1"].HasNumber;
  bool hasNumber_A2 = worksheet.Range["A2"].HasNumber;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Set values
  worksheet.Range["A1"].Number = 10;
  worksheet.Range["A2"].Text = "Sample";

  //Has number
  bool hasNumber_A1 = worksheet.Range["A1"].HasNumber;
  bool hasNumber_A2 = worksheet.Range["A2"].HasNumber;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Set values
  worksheet.Range("A1").Number = 10
  worksheet.Range("A2").Text = "Sample"

  'Has number
  Dim hasNumber_A1 As Boolean = worksheet.Range("A1").HasNumber
  Dim hasNumber_A2 As Boolean = worksheet.Range("A2").HasNumber

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## Has RichText

[HasRichText](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_HasRichText) property determines whether the cell has rich-text in it.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Add Text
  IRange range = worksheet.Range["A1"];
  range.Text = "RichText";
  IRichTextString richText = range.RichText;

  //Formatting first 4 characters
  IFont redFont = workbook.CreateFont();
  redFont.Bold = true;
  redFont.Italic = true;
  redFont.RGBColor = Color.Red;
  richText.SetFont(0, 3, redFont);

  //Formatting last 4 characters
  IFont blueFont = workbook.CreateFont();
  blueFont.Bold = true;
  blueFont.Italic = true;
  blueFont.RGBColor = Color.Blue;
  richText.SetFont(4, 7, blueFont);

  //Has RichText
  bool hasRichText = worksheet.Range["A1"].HasRichText;
  bool hasNumber_A2 = worksheet.Range["A2"].HasNumber;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Add Text
  IRange range = worksheet.Range["A1"];
  range.Text = "RichText";
  IRichTextString richText = range.RichText;

  //Formatting first 4 characters
  IFont redFont = workbook.CreateFont();
  redFont.Bold = true;
  redFont.Italic = true;
  redFont.RGBColor = Color.Red;
  richText.SetFont(0, 3, redFont);

  //Formatting last 4 characters
  IFont blueFont = workbook.CreateFont();
  blueFont.Bold = true;
  blueFont.Italic = true;
  blueFont.RGBColor = Color.Blue;
  richText.SetFont(4, 7, blueFont);

  //Has RichText
  bool hasRichText = worksheet.Range["A1"].HasRichText;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Add Text
  Dim range As IRange = worksheet.Range("A1")
  range.Text = "RichText"
  Dim richText As IRichTextString = range.RichText

  'Formatting first 4 characters
  Dim redFont As IFont = workbook.CreateFont()
  redFont.Bold = True
  redFont.Italic = True
  redFont.RGBColor = Color.Red
  richText.SetFont(0, 3, redFont)

  'Formatting last 4 characters
  Dim blueFont As IFont = workbook.CreateFont()
  blueFont.Bold = True
  blueFont.Italic = True
  blueFont.RGBColor = Color.Blue
  richText.SetFont(4, 7, blueFont)

  'Has RichText
  Dim hasRichText As Boolean = worksheet.Range("A1").HasRichText

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

For more details about RichText, [click here.](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-cell-or-range-formatting#rich-text-formatting)