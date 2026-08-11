---
title: Last row of a column in Excel file using XlsIO | Syncfusion
description: This FAQ explains how to find the last row with data in a specific column of an Excel worksheet using Syncfusion XlsIO and retrieve used range boundaries.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to get the last row of a column using XlsIO in Excel?

Finding the last row of a specific column helps you determine the exact extent of data in that column. XlsIO provides access to the worksheet's used range through the [IWorksheet.UsedRange](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html) property. By leveraging this property, it is possible to iterate backward through rows and identify cells with data in a particular column.

The following code example illustrates how to find the last row containing data in a specific column.

## Prerequisites

Before running the code example, make sure the following prerequisites are met:

- Install the **Syncfusion.XlsIO.WinForms** NuGet package (for Windows) or the **Syncfusion.XlsIO.Net.Core** package (for .NET Core / .NET 6+ cross-platform targets).
- Add the required `using` directives at the top of the file:
  - `using System;` - for `Console.WriteLine`.
  - `using System.IO;` - for `Path.GetFullPath` (cross-platform tab).
  - `using Syncfusion.XlsIO;` - for the XlsIO types and `IApplication`, `IWorkbook`, `IWorksheet`.
  - `using Syncfusion.XlsIO.Implementation;` - for the internal `WorksheetImpl` type. This namespace is part of the XlsIO assembly but is not part of the public API. Using internal types is a code-smell and may break in future releases.
- The VB.NET equivalents: `Imports System`, `Imports System.IO`, `Imports Syncfusion.XlsIO`, `Imports Syncfusion.XlsIO.Implementation`.
- **The example also uses additional internal types that are not declared in the samples**:
  - `RowStorage` and `RowStorageEnumerator` - internal types in the XlsIO implementation. The `using` directive for these is not declared. The samples will not compile until the directive is added.
  - `WorksheetHelper` - internal helper class in the XlsIO implementation. The `using` directive is not declared. The samples will not compile until the directive is added.
  - `WorksheetImpl.RecordExtractor` - internal property on `WorksheetImpl`. The property is accessed in the helper method. The samples will not compile until the property is accessible.
- The example creates a new workbook with `Workbooks.Create(1)`, so no input file is required.
- The output folder (`Output`) must exist or be created by the application before calling `SaveAs`. `SaveAs` does not create missing parent directories on its own.

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
{% endhighlight %}

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
{% endhighlight %}

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
{% endhighlight %}
{% endtabs %}

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/1005966-Last-Row/FAQ/Last%20Row/.NET/Last%20Row">this GitHub page</a>.

## See also

* [Last Row on GitHub](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/1005966-Last-Row/FAQ/Last%20Row/.NET/Last%20Row)
* [How to retrieve the first cell in the used range in Excel](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-retrieve-the-first-cell-in-the-used-range-in-Excel)
* [Working with Ranges](https://help.syncfusion.com/document-processing/excel/excel-library/net/cells-manipulation/list-of-apis-under-irange)
