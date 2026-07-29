---
title: Calculate row & column offset for conditional formatting | Syncfusion
description: This page explains how to calculate the row and column offset between a conditional formatting formula cell and its applied range cell using XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to calculate row and column offsets for conditional formatting?

When working with conditional formatting formulas in Excel, the formula references are relative to the first cell in the applied range. Understanding the offset between the formula cell reference and the applied cell is essential for debugging and verifying conditional formatting rules.

The following code example demonstrates how to calculate these offsets programmatically using XlsIO.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Initialize Excel
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet sheet = workbook.Worksheets[0];
    
    // Set headers
    sheet["L22"].Text = "Value L";
    sheet["M22"].Text = "Status M";
    sheet["P22"].Text = "Value P";
    sheet["Q22"].Text = "Status Q";
    sheet["AR22"].Text = "Value AR";
    sheet["L22:AR22"].CellStyle.Font.Bold = true;
    
    // Sample data values
    int[] valuesL = { 150, -50, 200, 0, -100, 75, -25, 300, 0, 125 };
    string[] statusM = { "ok", "n.m.", "n.m.", "pending", "n.m.", "ok", "n.m.", "complete", "n.m.", "ok" };
    int[] valuesP = { 80, 120, -40, 95, -60, 200, 0, -15, 170, 85 };
    string[] statusQ = { "n.m.", "ok", "n.m.", "n.m.", "ok", "n.m.", "pending", "n.m.", "ok", "n.m." };
    int[] valuesAR = { 45, -30, 90, 0, -75, 110, 25, -10, 50, 135 };
    
    // Populate data rows
    for (int i = 0; i < 10; i++)
    {
        sheet[23 + i, 12].Number = valuesL[i];    // Column L (12)
        sheet[23 + i, 13].Text = statusM[i];      // Column M (13)
        sheet[23 + i, 16].Number = valuesP[i];    // Column P (16)
        sheet[23 + i, 17].Text = statusQ[i];      // Column Q (17)
        sheet[23 + i, 44].Number = valuesAR[i];   // Column AR (44)
    }
    
    // Apply conditional formatting rules to columns L, P, AR
    string[] targetCols = { "L", "P", "AR" };
    string[] adjacentCols = { "M", "Q", "AS" };
    
    for (int c = 0; c < targetCols.Length; c++)
    {
        string range = $"{targetCols[c]}23:{targetCols[c]}32";
        IConditionalFormats formats = sheet[range].ConditionalFormats;
    
        // Rule 1: Value > 0 → GREEN (Offset: 0,0)
        IConditionalFormat rule1 = formats.AddCondition();
        rule1.FormatType = ExcelCFType.Formula;
        rule1.FirstFormula = $"={targetCols[c]}23>0";
        rule1.BackColor = ExcelKnownColors.Light_green;
    
        // Rule 2: Adjacent column = "n.m." → YELLOW (Offset: 0,1)
        IConditionalFormat rule2 = formats.AddCondition();
        rule2.FormatType = ExcelCFType.Formula;
        rule2.FirstFormula = $"={adjacentCols[c]}23=\"n.m.\"";
        rule2.BackColor = ExcelKnownColors.Light_yellow;
    
        // Rule 3: Value < 0 → ORANGE (Offset: 0,0)
        IConditionalFormat rule3 = formats.AddCondition();
        rule3.FormatType = ExcelCFType.Formula;
        rule3.FirstFormula = $"={targetCols[c]}23<0";
        rule3.BackColor = ExcelKnownColors.Light_orange;
        rule3.FontColor = ExcelKnownColors.Red;
    }
    
    // Calculate and display offsets for specific cells
    Console.WriteLine("\n=== OFFSET CALCULATIONS ===\n");
    PrintOffset("L23", "L23");    // Rule 1: Same cell
    PrintOffset("M23", "L23");    // Rule 2: One column right
    PrintOffset("P25", "P25");    // Rule 1: Same cell
    PrintOffset("Q26", "P26");    // Rule 2: One column right
    PrintOffset("AS28", "AR28"); // Rule 2: One column right
    PrintOffset("L30", "L25");   // Different row
    
    Console.WriteLine("\n=== OFFSET FORMULA ===");
    Console.WriteLine("Row Offset = Formula Row - Applied Row");
    Console.WriteLine("Col Offset = Formula Col - Applied Col");
    
    // Save workbook
    workbook.SaveAs("CF_FormulaOffset.xlsx");
}

// Calculate and print offset between formula cell and applied cell
static void PrintOffset(string formulaCell, string appliedCell)
{
    int formRow = int.Parse(new string(formulaCell.Where(char.IsDigit).ToArray()));
    int applRow = int.Parse(new string(appliedCell.Where(char.IsDigit).ToArray()));
    
    string formCol = new string(formulaCell.Where(char.IsLetter).ToArray());
    string applCol = new string(appliedCell.Where(char.IsLetter).ToArray());
    
    int formColNum = ColToNum(formCol);
    int applColNum = ColToNum(applCol);
    
    int rowOffset = formRow - applRow;
    int colOffset = formColNum - applColNum;
    
    Console.WriteLine($"Formula={formulaCell}, Applied={appliedCell}, Offset({rowOffset},{colOffset})");
}

// Convert column letter to number (A=1, B=2, AR=44, AS=45, etc.)
static int ColToNum(string col)
{
    int result = 0;
    for (int i = 0; i < col.Length; i++)
        result = result * 26 + (col[i] - 'A' + 1);
    return result;
}
{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Initialize Excel
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet sheet = workbook.Worksheets[0];
    
    // Set headers
    sheet["L22"].Text = "Value L";
    sheet["M22"].Text = "Status M";
    sheet["P22"].Text = "Value P";
    sheet["Q22"].Text = "Status Q";
    sheet["AR22"].Text = "Value AR";
    sheet["L22:AR22"].CellStyle.Font.Bold = true;
    
    // Sample data values
    int[] valuesL = { 150, -50, 200, 0, -100, 75, -25, 300, 0, 125 };
    string[] statusM = { "ok", "n.m.", "n.m.", "pending", "n.m.", "ok", "n.m.", "complete", "n.m.", "ok" };
    int[] valuesP = { 80, 120, -40, 95, -60, 200, 0, -15, 170, 85 };
    string[] statusQ = { "n.m.", "ok", "n.m.", "n.m.", "ok", "n.m.", "pending", "n.m.", "ok", "n.m." };
    int[] valuesAR = { 45, -30, 90, 0, -75, 110, 25, -10, 50, 135 };
    
    // Populate data rows
    for (int i = 0; i < 10; i++)
    {
        sheet[23 + i, 12].Number = valuesL[i];    // Column L (12)
        sheet[23 + i, 13].Text = statusM[i];      // Column M (13)
        sheet[23 + i, 16].Number = valuesP[i];    // Column P (16)
        sheet[23 + i, 17].Text = statusQ[i];      // Column Q (17)
        sheet[23 + i, 44].Number = valuesAR[i];   // Column AR (44)
    }
    
    // Apply conditional formatting rules to columns L, P, AR
    string[] targetCols = { "L", "P", "AR" };
    string[] adjacentCols = { "M", "Q", "AS" };
    
    for (int c = 0; c < targetCols.Length; c++)
    {
        string range = $"{targetCols[c]}23:{targetCols[c]}32";
        IConditionalFormats formats = sheet[range].ConditionalFormats;
    
        // Rule 1: Value > 0 → GREEN (Offset: 0,0)
        IConditionalFormat rule1 = formats.AddCondition();
        rule1.FormatType = ExcelCFType.Formula;
        rule1.FirstFormula = $"={targetCols[c]}23>0";
        rule1.BackColor = ExcelKnownColors.Light_green;
    
        // Rule 2: Adjacent column = "n.m." → YELLOW (Offset: 0,1)
        IConditionalFormat rule2 = formats.AddCondition();
        rule2.FormatType = ExcelCFType.Formula;
        rule2.FirstFormula = $"={adjacentCols[c]}23=\"n.m.\"";
        rule2.BackColor = ExcelKnownColors.Light_yellow;
    
        // Rule 3: Value < 0 → ORANGE (Offset: 0,0)
        IConditionalFormat rule3 = formats.AddCondition();
        rule3.FormatType = ExcelCFType.Formula;
        rule3.FirstFormula = $"={targetCols[c]}23<0";
        rule3.BackColor = ExcelKnownColors.Light_orange;
        rule3.FontColor = ExcelKnownColors.Red;
    }
    
    // Calculate and display offsets for specific cells
    Console.WriteLine("\n=== OFFSET CALCULATIONS ===\n");
    PrintOffset("L23", "L23");    // Rule 1: Same cell
    PrintOffset("M23", "L23");    // Rule 2: One column right
    PrintOffset("P25", "P25");    // Rule 1: Same cell
    PrintOffset("Q26", "P26");    // Rule 2: One column right
    PrintOffset("AS28", "AR28"); // Rule 2: One column right
    PrintOffset("L30", "L25");   // Different row
    
    Console.WriteLine("\n=== OFFSET FORMULA ===");
    Console.WriteLine("Row Offset = Formula Row - Applied Row");
    Console.WriteLine("Col Offset = Formula Col - Applied Col");
    
    // Save workbook
    workbook.SaveAs("CF_FormulaOffset.xlsx");
}

// Calculate and print offset between formula cell and applied cell
static void PrintOffset(string formulaCell, string appliedCell)
{
    int formRow = int.Parse(new string(formulaCell.Where(char.IsDigit).ToArray()));
    int applRow = int.Parse(new string(appliedCell.Where(char.IsDigit).ToArray()));
    
    string formCol = new string(formulaCell.Where(char.IsLetter).ToArray());
    string applCol = new string(appliedCell.Where(char.IsLetter).ToArray());
    
    int formColNum = ColToNum(formCol);
    int applColNum = ColToNum(applCol);
    
    int rowOffset = formRow - applRow;
    int colOffset = formColNum - applColNum;
    
    Console.WriteLine($"Formula={formulaCell}, Applied={appliedCell}, Offset({rowOffset},{colOffset})");
}

// Convert column letter to number (A=1, B=2, AR=44, AS=45, etc.)
static int ColToNum(string col)
{
    int result = 0;
    for (int i = 0; i < col.Length; i++)
        result = result * 26 + (col[i] - 'A' + 1);
    return result;
}
{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    ' Initialize Excel
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Create(1)
    Dim sheet As IWorksheet = workbook.Worksheets(0)
    
    ' Set headers
    sheet("L22").Text = "Value L"
    sheet("M22").Text = "Status M"
    sheet("P22").Text = "Value P"
    sheet("Q22").Text = "Status Q"
    sheet("AR22").Text = "Value AR"
    sheet("L22:AR22").CellStyle.Font.Bold = True
    
    ' Sample data values
    Dim valuesL() As Integer = { 150, -50, 200, 0, -100, 75, -25, 300, 0, 125 }
    Dim statusM() As String = { "ok", "n.m.", "n.m.", "pending", "n.m.", "ok", "n.m.", "complete", "n.m.", "ok" }
    Dim valuesP() As Integer = { 80, 120, -40, 95, -60, 200, 0, -15, 170, 85 }
    Dim statusQ() As String = { "n.m.", "ok", "n.m.", "n.m.", "ok", "n.m.", "pending", "n.m.", "ok", "n.m." }
    Dim valuesAR() As Integer = { 45, -30, 90, 0, -75, 110, 25, -10, 50, 135 }
    
    ' Populate data rows
    For i As Integer = 0 To 9
        sheet(23 + i, 12).Number = valuesL(i)    ' Column L (12)
        sheet(23 + i, 13).Text = statusM(i)      ' Column M (13)
        sheet(23 + i, 16).Number = valuesP(i)    ' Column P (16)
        sheet(23 + i, 17).Text = statusQ(i)      ' Column Q (17)
        sheet(23 + i, 44).Number = valuesAR(i)   ' Column AR (44)
    Next
    
    ' Apply conditional formatting rules to columns L, P, AR
    Dim targetCols() As String = { "L", "P", "AR" }
    Dim adjacentCols() As String = { "M", "Q", "AS" }
    
    For c As Integer = 0 To targetCols.Length - 1
        Dim range As String = targetCols(c) & "23:" & targetCols(c) & "32"
        Dim formats As IConditionalFormats = sheet(range).ConditionalFormats
        
        ' Rule 1: Value > 0 → GREEN (Offset: 0,0)
        Dim rule1 As IConditionalFormat = formats.AddCondition()
        rule1.FormatType = ExcelCFType.Formula
        rule1.FirstFormula = "=" & targetCols(c) & "23>0"
        rule1.BackColor = ExcelKnownColors.Light_green
        
        ' Rule 2: Adjacent column = "n.m." → YELLOW (Offset: 0,1)
        Dim rule2 As IConditionalFormat = formats.AddCondition()
        rule2.FormatType = ExcelCFType.Formula
        rule2.FirstFormula = "=" & adjacentCols(c) & "23=""n.m."""
        rule2.BackColor = ExcelKnownColors.Light_yellow
        
        ' Rule 3: Value < 0 → ORANGE (Offset: 0,0)
        Dim rule3 As IConditionalFormat = formats.AddCondition()
        rule3.FormatType = ExcelCFType.Formula
        rule3.FirstFormula = "=" & targetCols(c) & "23<0"
        rule3.BackColor = ExcelKnownColors.Light_orange
        rule3.FontColor = ExcelKnownColors.Red
    Next
    
    ' Calculate and display offsets for specific cells
    Console.WriteLine(vbLf & "=== OFFSET CALCULATIONS ===" & vbLf)
    PrintOffset("L23", "L23")    ' Rule 1: Same cell
    PrintOffset("M23", "L23")    ' Rule 2: One column right
    PrintOffset("P25", "P25")    ' Rule 1: Same cell
    PrintOffset("Q26", "P26")    ' Rule 2: One column right
    PrintOffset("AS28", "AR28") ' Rule 2: One column right
    PrintOffset("L30", "L25")   ' Different row
    
    Console.WriteLine(vbLf & "=== OFFSET FORMULA ===")
    Console.WriteLine("Row Offset = Formula Row - Applied Row")
    Console.WriteLine("Col Offset = Formula Col - Applied Col")
    
    ' Save workbook
    workbook.SaveAs("CF_FormulaOffset.xlsx")
End Using

' Calculate and print offset between formula cell and applied cell
Shared Sub PrintOffset(formulaCell As String, appliedCell As String)
    Dim formRow As Integer = Integer.Parse(New String(formulaCell.Where(Function(c) Char.IsDigit(c)).ToArray()))
    Dim applRow As Integer = Integer.Parse(New String(appliedCell.Where(Function(c) Char.IsDigit(c)).ToArray()))
    
    Dim formCol As String = New String(formulaCell.Where(Function(c) Char.IsLetter(c)).ToArray())
    Dim applCol As String = New String(appliedCell.Where(Function(c) Char.IsLetter(c)).ToArray())
    
    Dim formColNum As Integer = ColToNum(formCol)
    Dim applColNum As Integer = ColToNum(applCol)
    
    Dim rowOffset As Integer = formRow - applRow
    Dim colOffset As Integer = formColNum - applColNum
    
    Console.WriteLine($"Formula={formulaCell}, Applied={appliedCell}, Offset({rowOffset},{colOffset})")
End Sub

' Convert column letter to number (A=1, B=2, AR=44, AS=45, etc.)
Shared Function ColToNum(col As String) As Integer
    Dim result As Integer = 0
    For i As Integer = 0 To col.Length - 1
        result = result * 26 + (Asc(col(i)) - Asc("A") + 1)
    Next
    Return result
End Function
{% endhighlight %}
{% endtabs %}

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/1025703-offset-CF/FAQ/CF_Offset/.NET/CF_Offset">this GitHub page</a>.
