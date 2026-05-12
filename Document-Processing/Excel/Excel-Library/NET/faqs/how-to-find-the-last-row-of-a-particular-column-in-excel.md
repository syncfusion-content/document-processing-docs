---
title: Last row of a particular column in an Excel file using XlsIO | Syncfusion
description: This FAQ explains how to find the last row with data in a specific column of an Excel worksheet using Syncfusion XlsIO and retrieve used range boundaries.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to find the last row of a particular column in an Excel file using XlsIO?

Finding the last row of a specific column helps you determine the exact extent of data in that column. XlsIO provides access to the worksheet's used range through the [IWorksheet.UsedRange](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html) property, which you can use to iterate backward through rows and identify cells with data in a particular column.

The following code example illustrates how to find the last row containing data in a specific column.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Create an instance of ExcelEngine
    IApplication application = excelEngine.Excel;
    IWorkbook workbook = application.Workbooks.Create(1);

    // Access the first worksheet in the workbook
    IWorksheet sheet = workbook.Worksheets[0];

    // Populate data in specific ranges to demonstrate last row detection
    sheet["A1:B10"].Text = "10";
    sheet["C1:C5"].Text = "20";

    // Find the last row in column C (column index 3)
    int lastRow = GetLastRow(3, sheet as WorksheetImpl);
    Console.WriteLine("Last Row in Column C: " + lastRow);

    // Save the workbook to the specified output path
    workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
}

// Helper method to find the last row containing data in a specified column
private static int GetLastRow(int column, WorksheetImpl worksheet)
{
    // Get the starting and ending row indices of the used range
    int firstRow = worksheet.UsedRange.Row;
    int lastRow = worksheet.UsedRange.LastRow;

    // Iterate backward through rows to find the last cell with data in the column
    for (int iRow = lastRow; iRow >= firstRow; iRow--)
    {
        // Get or create the row storage for the current row
        RowStorage rowStorage = WorksheetHelper.GetOrCreateRow(worksheet, iRow - 1, false);
        if (rowStorage != null)
        {
            // Enumerate through cells in the row to check for data in the target column
            RowStorageEnumerator enumerator = rowStorage.GetEnumerator(worksheet.RecordExtractor) as RowStorageEnumerator;
            while (enumerator.MoveNext())
            {
                // Return the row number when the column is found
                if (enumerator.ColumnIndex + 1 == column)
                    return iRow;
            }
        }
    }
    return -1;
}
{% highlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Create an instance of ExcelEngine
    IApplication application = excelEngine.Excel;
    IWorkbook workbook = application.Workbooks.Create(1);

    // Access the first worksheet in the workbook
    IWorksheet sheet = workbook.Worksheets[0];

    // Populate data in specific ranges to demonstrate last row detection
    sheet["A1:B10"].Text = "10";
    sheet["C1:C5"].Text = "20";

    // Find the last row in column C (column index 3)
    int lastRow = GetLastRow(3, sheet as WorksheetImpl);
    Console.WriteLine("Last Row in Column C: " + lastRow);

    // Save the workbook to the specified output path
    workbook.SaveAs("Output.xlsx");
}

// Helper method to find the last row containing data in a specified column
private static int GetLastRow(int column, WorksheetImpl worksheet)
{
    // Get the starting and ending row indices of the used range
    int firstRow = worksheet.UsedRange.Row;
    int lastRow = worksheet.UsedRange.LastRow;

    // Iterate backward through rows to find the last cell with data in the column
    for (int iRow = lastRow; iRow >= firstRow; iRow--)
    {
        // Get or create the row storage for the current row
        RowStorage rowStorage = WorksheetHelper.GetOrCreateRow(worksheet, iRow - 1, false);
        if (rowStorage != null)
        {
            // Enumerate through cells in the row to check for data in the target column
            RowStorageEnumerator enumerator = rowStorage.GetEnumerator(worksheet.RecordExtractor) as RowStorageEnumerator;
            while (enumerator.MoveNext())
            {
                // Return the row number when the column is found
                if (enumerator.ColumnIndex + 1 == column)
                    return iRow;
            }
        }
    }
    return -1;
}
{% highlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Sub Main(args As String())
    Using excelEngine As New ExcelEngine()
        ' Create an instance of ExcelEngine
        Dim application As IApplication = excelEngine.Excel
        Dim workbook As IWorkbook = application.Workbooks.Create(1)

        ' Access the first worksheet in the workbook
        Dim sheet As IWorksheet = workbook.Worksheets(0)

        ' Populate data in specific ranges to demonstrate last row detection
        sheet("A1:B10").Text = "10"
        sheet("C1:C5").Text = "20"

        ' Find the last row in column C (column index 3)
        Dim lastRow As Integer = GetLastRow(3, TryCast(sheet, WorksheetImpl))
        Console.WriteLine("Last Row in Column C: " & lastRow)

        ' Save the workbook to the specified output path
        workbook.SaveAs("Output.xlsx")
    End Using
End Sub
' Helper method to find the last row containing data in a specified column
Private Function GetLastRow(column As Integer, worksheet As WorksheetImpl) As Integer
    ' Get the starting and ending row indices of the used range
    Dim firstRow As Integer = worksheet.UsedRange.Row
    Dim lastRow As Integer = worksheet.UsedRange.LastRow

    ' Iterate backward through rows to find the last cell with data in the column
    For iRow As Integer = lastRow To firstRow Step -1
        ' Get or create the row storage for the current row
        Dim rowStorage As RowStorage = WorksheetHelper.GetOrCreateRow(worksheet, iRow - 1, False)
        If rowStorage IsNot Nothing Then
            ' Enumerate through cells in the row to check for data in the target column
            Dim enumerator As RowStorageEnumerator = TryCast(rowStorage.GetEnumerator(worksheet.RecordExtractor), RowStorageEnumerator)
            While enumerator.MoveNext()
                ' Return the row number when the column is found
                If enumerator.ColumnIndex + 1 = column Then
                    Return iRow
                End If
            End While
        End If
    Next
    Return -1
End Function
{% highlight %}
{% endtabs %}

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/1005966-Last-Row/FAQ/Last%20Row">this GitHub page</a>.