# Find and Replace Text in Excel Worksheets

> Find and replace text in Excel worksheets using Syncfusion XlsIO's `FindAll` and `Replace` methods with `ExcelFindType` and `ExcelFindOptions`.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** `Syncfusion.Drawing`
> **Required usings for .NET Framework (Windows):** `System.Drawing`

---

## Find Text in Worksheet

Use `worksheet.FindAll()` to locate all occurrences of text, numbers, formulas, or values.

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];

// Find text (case-insensitive by default)
IRange[] textCells = sheet.FindAll("searchText", ExcelFindType.Text);

// Find with case matching
IRange[] caseCells = sheet.FindAll("SearchText", ExcelFindType.Text, ExcelFindOptions.MatchCase);

// Find matching entire cell content
IRange[] entireCells = sheet.FindAll("ExactValue", ExcelFindType.Text, ExcelFindOptions.MatchEntireCellContent);
```

### Find Text Examples
```csharp
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("input.xlsx");
    IWorksheet sheet = workbook.Worksheets[0];

    // Find text (case-insensitive)
    IRange[] textCells = sheet.FindAll("Gill", ExcelFindType.Text);
    
    // Find text with case matching
    IRange[] caseCells = sheet.FindAll("Pen Set", ExcelFindType.Text, ExcelFindOptions.MatchCase);
    
    // Find text matching entire cell content
    IRange[] entireCells = sheet.FindAll("5", ExcelFindType.Text, ExcelFindOptions.MatchEntireCellContent);

    // Highlight found cells
    foreach (IRange cell in textCells)
    {
        cell.CellStyle.Color = Color.FromArgb(255, 255, 0, 0); // Red
    }

    workbook.SaveAs("output.xlsx");
    workbook.Close();
}
```

---

## Find Numbers, Formulas, and Values

### Find Numbers
```csharp
IWorksheet sheet = workbook.Worksheets[0];

// Find numeric values
IRange[] numberCells = sheet.FindAll(700, ExcelFindType.Number);

foreach (IRange cell in numberCells)
{
    cell.CellStyle.Color = Color.FromArgb(255, 0, 255, 0); // Green
}
```

### Find Formulas
```csharp
// Find cells containing specific formula
IRange[] formulaCells = sheet.FindAll("=SUM(F10:F11)", ExcelFindType.Formula);

foreach (IRange cell in formulaCells)
{
    cell.CellStyle.Color = Color.FromArgb(255, 0, 0, 255); // Blue
}
```

### Find Values (Calculated, Numbers, Text)
```csharp
// Search in calculated values, numbers, and text
IRange[] valueCells = sheet.FindAll("41", ExcelFindType.Values);

foreach (IRange cell in valueCells)
{
    cell.CellStyle.Color = Color.FromArgb(255, 255, 165, 0); // Orange
}
```

---

## Replace Text in Worksheet

Use `worksheet.Replace()` to replace text with strings, numbers, DateTime, or arrays.

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];

// Simple replace
sheet.Replace("oldText", "newText");

// Replace with case matching
sheet.Replace("OldText", "NewText", ExcelFindOptions.MatchCase);

// Replace matching entire cell content
sheet.Replace("ExactOld", "ExactNew", ExcelFindOptions.MatchEntireCellContent);
```

### Replace with String
```csharp
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("input.xlsx");
    IWorksheet sheet = workbook.Worksheets[0];

    // Replace text (case-insensitive)
    sheet.Replace("Wilson", "William");

    // Replace with case matching
    sheet.Replace("4.99", "4.90", ExcelFindOptions.MatchCase);

    // Replace matching entire cell content
    sheet.Replace("Pen Set", "Pen", ExcelFindOptions.MatchEntireCellContent);

    workbook.SaveAs("output.xlsx");
    workbook.Close();
}
```

---

## Replace with Different Data Types

### Replace with DateTime
```csharp
IWorksheet sheet = workbook.Worksheets[0];

// Replace text with DateTime value
sheet.Replace("DateValue", DateTime.Now);
```

### Replace with Array
```csharp
IWorksheet sheet = workbook.Worksheets[0];

// Replace with array (horizontal: isVertical = false, vertical: isVertical = true)
sheet.Replace("Central", new string[] { "Central", "East" }, true);
```

### Replace with Numbers
```csharp
IWorksheet sheet = workbook.Worksheets[0];

// Replace text with number
sheet.Replace("Price", 99.99);
```

---

## Replace in Entire Workbook

Iterate through all worksheets to replace across the entire workbook:

### Minimal Code
```csharp
IWorkbook workbook = application.Workbooks.Open("input.xlsx");

foreach (IWorksheet sheet in workbook.Worksheets)
{
    sheet.Replace("2023", "2024");
}

workbook.SaveAs("output.xlsx");
```

### Full Example
```csharp
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("input.xlsx");

    // Replace across all worksheets
    foreach (IWorksheet sheet in workbook.Worksheets)
    {
        sheet.Replace("oldValue", "newValue");
        sheet.Replace("ERROR", "RESOLVED", ExcelFindOptions.MatchCase);
    }

    workbook.SaveAs("output.xlsx");
    workbook.Close();
}
```

---

## ExcelFindType Options

`ExcelFindType` specifies what to search for:

| ExcelFindType | Description |
|---------------|-------------|
| `ExcelFindType.Text` | Search for text in cells |
| `ExcelFindType.Number` | Search for numeric values |
| `ExcelFindType.Formula` | Search for formulas |
| `ExcelFindType.Values` | Search in calculated values, numbers, and text |

```csharp
// Examples of different find types
IRange[] texts = sheet.FindAll("Sample", ExcelFindType.Text);
IRange[] numbers = sheet.FindAll(100, ExcelFindType.Number);
IRange[] formulas = sheet.FindAll("=SUM", ExcelFindType.Formula);
IRange[] values = sheet.FindAll("42", ExcelFindType.Values);
```

---

## ExcelFindOptions

Use `ExcelFindOptions` for case-sensitive or full-cell matching:

| ExcelFindOptions | Description |
|------------------|-------------|
| `ExcelFindOptions.MatchCase` | Case-sensitive search |
| `ExcelFindOptions.MatchEntireCellContent` | Match entire cell content |

### Examples
```csharp
IWorksheet sheet = workbook.Worksheets[0];

// Case-sensitive find
IRange[] caseSensitive = sheet.FindAll("Error", ExcelFindType.Text, ExcelFindOptions.MatchCase);

// Match entire cell
IRange[] exactMatch = sheet.FindAll("Done", ExcelFindType.Text, ExcelFindOptions.MatchEntireCellContent);

// Case-sensitive replace
sheet.Replace("ERROR", "Warning", ExcelFindOptions.MatchCase);

// Replace entire cell
sheet.Replace("N/A", "Not Available", ExcelFindOptions.MatchEntireCellContent);
```

---

## Full End-to-End Example

```csharp
using System;
using Syncfusion.XlsIO;
using Syncfusion.Drawing;

using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("input.xlsx");
    IWorksheet sheet = workbook.Worksheets[0];

    // Scenario 1: Find text and highlight
    IRange[] errorCells = sheet.FindAll("ERROR", ExcelFindType.Text);
    foreach (IRange cell in errorCells)
    {
        cell.CellStyle.Color = Color.FromArgb(255, 255, 0, 0);
        Console.WriteLine($"Found ERROR at {cell.AddressLocal}");
    }

    // Scenario 2: Replace text (case-insensitive)
    sheet.Replace("Wilson", "William");
    Console.WriteLine("Replaced 'Wilson' with 'William'");

    // Scenario 3: Replace with case matching
    sheet.Replace("Draft", "Final", ExcelFindOptions.MatchCase);
    Console.WriteLine("Replaced 'Draft' with 'Final' (case-sensitive)");

    // Scenario 4: Replace entire cell content
    sheet.Replace("N/A", "Not Available", ExcelFindOptions.MatchEntireCellContent);
    Console.WriteLine("Replaced 'N/A' with 'Not Available' (entire cell)");

    // Scenario 5: Replace with DateTime
    sheet.Replace("DatePlaceholder", DateTime.Now);
    Console.WriteLine("Replaced date placeholder");

    // Scenario 6: Replace across all sheets
    foreach (IWorksheet ws in workbook.Worksheets)
    {
        ws.Replace("2023", "2024");
    }
    Console.WriteLine("Replaced '2023' with '2024' in all sheets");

    // Scenario 7: Find numbers
    IRange[] numberCells = sheet.FindAll(500, ExcelFindType.Number);
    Console.WriteLine($"Found {numberCells.Length} cells with value 500");

    // Save and cleanup
    workbook.SaveAs("output.xlsx");
    workbook.Close();

    Console.WriteLine("\nAll find and replace operations completed!");
}
```

---

## Reference Links

- [Syncfusion XlsIO Documentation](https://help.syncfusion.com/document-processing/excel/overview)
- [Syncfusion Find and Replace Documentation](https://help.syncfusion.com/document-processing/excel/excel-library/net/cells-manipulation/find-and-replace)
- [ExcelFindType API](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ExcelFindType.html)
- [ExcelFindOptions API](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ExcelFindOptions.html)
- [Syncfusion XlsIO Examples Repository](https://github.com/SyncfusionExamples/XlsIO-Examples)
