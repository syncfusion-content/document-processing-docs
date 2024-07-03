---
title: How to insert a picture into a cell in an Excel document | Syncfusion
description: This page shows how to insert a picture into a cell in an Excel document using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to insert a picture into a cell in an Excel document?

The following code example illustrates how to insert a picture into a cell in an Excel document.

{% tabs %}  
{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    //Create a workbook
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    //Path to the image file
    string image = "../../Data/Image.png";

    //Row and column index for image insertion
    int row = 5;
    int column = 3;

    //Insert a picture in specified cell
    InsertPictureInCell(row, column, image, worksheet);

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}

private static void InsertPictureInCell(int row, int column, string image, IWorksheet worksheet)
{
    //Add the picture in the worksheet
    IPictureShape picture = worksheet.Pictures.AddPicture(row, column, image);

    WorksheetImpl worksheetImpl = (worksheet as WorksheetImpl);

    //Get the height of the row in pixels
    int rowHeight = worksheetImpl.GetRowHeightInPixels(row);

    //Get the width of the column in pixels
    int colWidth = worksheetImpl.GetColumnWidthInPixels(column);

    //Set the height and width of the picture
    picture.Height = rowHeight;
    picture.Width = colWidth;

    //Indicates whether the picture is sized with cells.
    picture.IsSizeWithCell = true;
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    ' Initialize Excel engine and set default version
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    ' Create a workbook
    Dim workbook As IWorkbook = application.Workbooks.Create(1)
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    ' Path to the image file
    Dim image As String = "../../Data/Image.png"

    'Row and column index for image insertion
    Dim row As Integer = 5
    Dim column As Integer = 3

    'Insert a picture in specified cell
    InsertPictureInCell(row, column, image, worksheet)

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using

Private Sub InsertPictureInCell(row As Integer, column As Integer, image As String, worksheet As IWorksheet)
    'Add the picture in the worksheet
    Dim picture As IPictureShape = worksheet.Pictures.AddPicture(row, column, image)

    ' Access the underlying worksheet implementation for additional settings
    Dim worksheetImpl As WorksheetImpl = CType(worksheet, WorksheetImpl)

    'Get the height of the row in pixels
    Dim rowHeight As Integer = worksheetImpl.GetRowHeightInPixels(row)

    'Get the width of the column in pixels
    Dim colWidth As Integer = worksheetImpl.GetColumnWidthInPixels(column)

    'Set the height and width of the picture
    picture.Height = rowHeight
    picture.Width = colWidth

    'Indicates whether the picture is sized with cells.
    picture.IsSizeWithCell = True
End Sub
{% endhighlight %}
{% endtabs %}