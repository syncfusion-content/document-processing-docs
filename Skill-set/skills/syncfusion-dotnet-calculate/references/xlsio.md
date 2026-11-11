# Working with XlsIO — Syncfusion Windows Forms Calculation Engine

> Essential Calculate is fully integrated with Essential XlsIO, enabling you to load Excel workbooks, compute formulas, and save results without requiring Microsoft Excel.

---

## Assembly Reference

```csharp
// NuGet Package
Syncfusion.Calculate.Base
Syncfusion.XlsIO.Base

// Namespaces
using Syncfusion.Calculate;
using Syncfusion.XlsIO;
```

---

## Overview

The integration of Calculate with XlsIO provides:

- **Read Excel Files** - Open existing Excel workbooks
- **Compute Formulas** - Calculate all formulas in worksheets
- **Modify and Save** - Update values and save results
- **Cross-Sheet Calculations** - Multi-sheet formula support
- **No Excel Required** - Standalone calculation engine

---

## Open a Workbook Using XlsIO

### Create Excel Engine

```csharp
// Initialize ExcelEngine
ExcelEngine excelEngine = new ExcelEngine();

// Load existing workbook
IWorkbook workbook = excelEngine.Excel.Workbooks.Open(@"..\..\Data\Sample.xlsx");

// Access worksheets
IWorksheet sheet = workbook.Worksheets[0];
```

### Complete File Opening Example

```csharp
try
{
    ExcelEngine excelEngine = new ExcelEngine();
    
    // Open Excel file from stream or file path
    IWorkbook workbook = excelEngine.Excel.Workbooks.Open(@"C:\Sample.xlsx");
    
    Console.WriteLine($"Workbook opened successfully");
    Console.WriteLine($"Number of sheets: {workbook.Worksheets.Count}");
    
    // Access specific worksheet
    IWorksheet sheet = workbook.Worksheets[0];
    Console.WriteLine($"First sheet name: {sheet.Name}");
}
catch (Exception ex)
{
    Console.WriteLine($"Error opening workbook: {ex.Message}");
}
```

---

## Enable and Disable Sheet Calculations

### Enable Calculations

Before computing formulas, enable sheet calculations using `EnableSheetCalculations()`:

```csharp
ExcelEngine excelEngine = new ExcelEngine();
IWorkbook workbook = excelEngine.Excel.Workbooks.Open(@"Sample.xlsx");
IWorksheet sheet = workbook.Worksheets[0];

// Enable formula calculations
sheet.EnableSheetCalculations();

// Now you can access calculated values
var cellValue = sheet["C1"].CalculatedValue;
```

### Disable Calculations

After completing calculations, disable to free resources using `DisableSheetCalculations()`:

```csharp
ExcelEngine excelEngine = new ExcelEngine();
IWorkbook workbook = excelEngine.Excel.Workbooks.Open(@"Sample.xlsx");
IWorksheet sheet = workbook.Worksheets[0];

sheet.EnableSheetCalculations();

// Perform calculations...

// Disable when done
sheet.DisableSheetCalculations();
```

### Example with Enable/Disable

```csharp
ExcelEngine excelEngine = new ExcelEngine();
IWorkbook workbook = excelEngine.Excel.Workbooks.Open(@"Sample.xlsx");
IWorksheet sheet = workbook.Worksheets[0];

// Enable sheet calculations
sheet.EnableSheetCalculations();

// Assign values
sheet["C3"].Number = 45;
sheet["C4"].Number = 20;
sheet["C5"].Number = 38;

// Assign formula
sheet["C24"].Formula = "=SUM(C3:C4)-C5";

// Get calculated value
var value = sheet.Range["C24"].CalculatedValue;

Console.WriteLine($"Calculated Result: {value}");  // 27

// Disable calculations to free resources
sheet.DisableSheetCalculations();
```

---

## Set and Compute Values at Runtime

### Update Cell Values

```csharp
ExcelEngine excelEngine = new ExcelEngine();
IWorkbook workbook = excelEngine.Excel.Workbooks.Open(@"Sample.xlsx");
IWorksheet sheet = workbook.Worksheets["Inputs"];

sheet.EnableSheetCalculations();

// Set values using indexer
sheet[1, 2].Value = "100";    // Row 1, Column 2
sheet[2, 2].Value = "200";    // Row 2, Column 2
sheet[3, 2].Value = "150";    // Row 3, Column 2
```

### Suspend Calculations During Updates

For bulk updates, suspend calculations and update in batch:

```csharp
ExcelEngine excelEngine = new ExcelEngine();
IWorkbook workbook = excelEngine.Excel.Workbooks.Open(@"Sample.xlsx");
IWorksheet sheet = workbook.Worksheets["Inputs"];

sheet.CalcEngine.CalculatingSuspended = true;

// Make multiple updates without recalculation
Random r = new Random();
for (int row = 1; row <= 100; row++)
{
    for (int col = 1; col <= 10; col++)
    {
        sheet[row, col].Value = r.Next(1000).ToString();
    }
}

// Resume calculations
sheet.CalcEngine.CalculatingSuspended = false;

// Update calculation state
sheet.CalcEngine.UpdateCalcID();

// Pull updated values
sheet.CalcEngine.PullUpdatedValue(
    sheet.CalcEngine.GetSheetID(sheet), 
    1, 1);
```

---

## Complete Runtime Calculation Example

```csharp
ExcelEngine excelEngine = new ExcelEngine();
IWorkbook workbook = excelEngine.Excel.Workbooks.Open(@"Sample.xlsx");

// Get input and output sheets
IWorksheet inputSheet = workbook.Worksheets["Inputs"];
IWorksheet outputSheet = workbook.Worksheets["Outputs"];

// Enable calculations
inputSheet.EnableSheetCalculations();
outputSheet.EnableSheetCalculations();

// Suspend during updates
inputSheet.CalcEngine.CalculatingSuspended = true;

Random r = new Random();

// Set random input values
inputSheet[1, 2].Value = (r.Next(74) + 15).ToString();    // Age
inputSheet[2, 2].Value = (r.Next(50) + 20).ToString();    // Income
inputSheet[3, 2].Value = (r.Next(100) + 1).ToString();    // Transactions

// Update calculation state
inputSheet.CalcEngine.CalculatingSuspended = false;
inputSheet.CalcEngine.UpdateCalcID();

// Pull updated values from output sheet
int outputSheetId = inputSheet.CalcEngine.GetSheetID(outputSheet);
inputSheet.CalcEngine.PullUpdatedValue(outputSheetId, 1, 1);

// Get calculated result
string calculatedValue = outputSheet[1, 1].CalculatedValue;
Console.WriteLine($"Result: {calculatedValue}");

// Disable when done
inputSheet.DisableSheetCalculations();
outputSheet.DisableSheetCalculations();
```

---

## Compute Particular Cell

Use `ParseAndComputeFormula` to compute a specific cell:

```csharp
ExcelEngine excelEngine = new ExcelEngine();
IWorkbook workbook = excelEngine.Excel.Workbooks.Open(@"Sample.xlsx");
IWorksheet sheet = workbook.Worksheets["Sheet1"];

sheet.EnableSheetCalculations();

// Compute specific cell
string cellFormula = sheet["C5"].Formula;
string result = sheet.CalcEngine.ParseAndComputeFormula(cellFormula);

Console.WriteLine($"Cell C5 Formula: {cellFormula}");
Console.WriteLine($"Computed Result: {result}");

sheet.DisableSheetCalculations();
```

---

## Ambiguity Issue Resolution

### Problem

If both `Calculate.Base` and `XlsIO.Base` references are added explicitly, it may cause namespace conflicts.

### Solution

Since Calculate is already integrated with XlsIO, if you include `XlsIO.Base`, you don't need to explicitly add `Calculate.Base`.

However, if you need both, use `extern alias`:

```csharp
extern alias CalculateLib;
extern alias XlsIOLib;

using CalculateLib::Syncfusion.Calculate;
using XlsIOLib::Syncfusion.XlsIO;
```

### Project File Example

```xml
<ItemGroup>
    <Reference Include="Syncfusion.Calculate.Base">
        <Aliases>CalculateLib</Aliases>
    </Reference>
    <Reference Include="Syncfusion.XlsIO.Base">
        <Aliases>XlsIOLib</Aliases>
    </Reference>
</ItemGroup>
```

---

## Table Formulas

Essential Calculate supports Excel table syntax for structured data.

### Table Syntax

Tables must follow these rules:

- **Bracket Notation** - All table, column, and special item specifiers in brackets `[ ]`
- **No Expressions** - Cannot contain expressions within brackets
- **Text Headers** - Column headers must be text strings
- **Special Characters** - Supports: `,` `:` `.` `[` `]` `#` `'` `"` `{` `}` `$` `^` `&` `*` `+` `=` `-` `>` `<` `/`

### Table Formula Examples

```csharp
// Formula referencing entire table
string formula1 = "=SUM(Table1[[#All],[Column1]:[Column2]])";

// Formula referencing specific column
string formula2 = "=SUM(Table1[Column1])";

// Formula with row specifier
string formula3 = "=MIN(Table1[#All])";
```

### Complete Table Example

```csharp
ExcelEngine excelEngine = new ExcelEngine();
IWorkbook workbook = excelEngine.Excel.Workbooks.Open(@"Sample.xlsx");
IWorksheet sheet = workbook.Worksheets[0];

sheet.EnableSheetCalculations();

// Create table structure
IListObject table1 = sheet.ListObjects.Create("Table1", sheet["A1:F6"]);

// Fill table headers
sheet[1, 1].Text = "Column1";
sheet[1, 2].Text = "Column2";
sheet[1, 3].Text = "Column3";

// Fill table data
sheet[2, 1].Number = 3;
sheet[2, 2].Number = 2;
sheet[2, 3].Number = 16.80;

sheet[3, 1].Number = 5;
sheet[3, 2].Number = 3;
sheet[3, 3].Number = 15.60;

sheet[4, 1].Number = 8;
sheet[4, 2].Number = 2;
sheet[4, 3].Number = 20.10;

// Compute table formulas
string result1 = sheet.CalcEngine.ParseAndComputeFormula("=SUM(Table1[Column1])");
string result2 = sheet.CalcEngine.ParseAndComputeFormula("=MIN(Table1[#All])");

Console.WriteLine($"Sum of Column1: {result1}");  // "16"
Console.WriteLine($"Min of Table: {result2}");    // "2"

sheet.DisableSheetCalculations();
```

---

## Workflow: Complete Excel Processing

```csharp
public class ExcelCalculationWorkflow
{
    public static void Main()
    {
        ExcelEngine excelEngine = new ExcelEngine();
        
        try
        {
            // Step 1: Load workbook
            IWorkbook workbook = excelEngine.Excel.Workbooks.Open(@"Sample.xlsx");
            IWorksheet sheet = workbook.Worksheets[0];
            
            // Step 2: Enable calculations
            sheet.EnableSheetCalculations();
            
            // Step 3: Set input values
            sheet["A1"].Number = 100;
            sheet["A2"].Number = 50;
            sheet["A3"].Number = 25;
            
            // Step 4: Set formula
            sheet["A4"].Formula = "=SUM(A1:A3)";
            
            // Step 5: Get calculated value
            var result = sheet["A4"].CalculatedValue;
            Console.WriteLine($"Result: {result}");  // "175"
            
            // Step 6: Save workbook
            workbook.SaveAs(@"Output.xlsx");
            
            // Step 7: Cleanup
            sheet.DisableSheetCalculations();
            excelEngine.Dispose();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
        }
    }
}
```

---

## Advanced XlsIO Integration Methods

### RecalculateRange

Recalculates a specific range of cells in the worksheet after updates have been made.

```csharp
ExcelEngine excelEngine = new ExcelEngine();
IWorkbook workbook = excelEngine.Excel.Workbooks.Open(@"Sample.xlsx");
IWorksheet sheet = workbook.Worksheets["Inputs"];

sheet.EnableSheetCalculations();

// Suspend calculations for bulk updates
sheet.CalcEngine.CalculatingSuspended = true;

// Make multiple updates
sheet[1, 1].Value = "100";
sheet[2, 1].Value = "200";
sheet[3, 1].Value = "150";

// Resume calculations
sheet.CalcEngine.CalculatingSuspended = false;

// Recalculate only the affected range
sheet.CalcEngine.RecalculateRange(RangeInfo.Cells(1, 1, 3, 5), sheet);

// Get updated values
string result = sheet["A5"].CalculatedValue;
```

**Method Signature:** `void RecalculateRange(RangeInfo range, ICalcData data)`  
**Parameters:**
- `range` - The range of cells to recalculate (RangeInfo object)
- `data` - The ICalcData source (typically the worksheet)

**Use Case:** Efficiently update only affected cells after bulk modifications

---

### GetSheetID

Gets the unique sheet ID for a worksheet, used in advanced XlsIO integration scenarios.

```csharp
ExcelEngine excelEngine = new ExcelEngine();
IWorkbook workbook = excelEngine.Excel.Workbooks.Open(@"Sample.xlsx");

IWorksheet inputSheet = workbook.Worksheets["Inputs"];
IWorksheet outputSheet = workbook.Worksheets["Outputs"];

inputSheet.EnableSheetCalculations();
outputSheet.EnableSheetCalculations();

// Get sheet IDs for cross-sheet operations
int inputSheetId = inputSheet.CalcEngine.GetSheetID(inputSheet);
int outputSheetId = inputSheet.CalcEngine.GetSheetID(outputSheet);

Console.WriteLine($"Input Sheet ID: {inputSheetId}");
Console.WriteLine($"Output Sheet ID: {outputSheetId}");
```

**Method Signature:** `int GetSheetID(ICalcData data)`  
**Parameters:**
- `data` - The ICalcData object (worksheet) to get ID for

**Return:** Unique sheet ID (int)

**Use Case:** Cross-sheet calculation management and reference tracking

---

### UpdateCalcID

Updates the calculation state ID after making modifications. Used with `CalculatingSuspended` to ensure proper calculation tracking.

```csharp
ExcelEngine excelEngine = new ExcelEngine();
IWorkbook workbook = excelEngine.Excel.Workbooks.Open(@"Sample.xlsx");
IWorksheet sheet = workbook.Worksheets[0];

sheet.EnableSheetCalculations();

// Suspend calculations during bulk updates
sheet.CalcEngine.CalculatingSuspended = true;

Random r = new Random();
for (int row = 1; row <= 100; row++)
{
    for (int col = 1; col <= 10; col++)
    {
        sheet[row, col].Value = r.Next(1000).ToString();
    }
}

// Update calculation state
sheet.CalcEngine.CalculatingSuspended = false;
sheet.CalcEngine.UpdateCalcID();

// Now calculations reflect the updated values
string result = sheet["A10"].CalculatedValue;
```

**Method Signature:** `void UpdateCalcID()`  
**Parameters:** None

**Use Case:** Sync calculation state after suspended calculation mode

---

### PullUpdatedValue

Pulls updated calculated values from a specific cell after calculations have been updated.

```csharp
ExcelEngine excelEngine = new ExcelEngine();
IWorkbook workbook = excelEngine.Excel.Workbooks.Open(@"Sample.xlsx");

IWorksheet inputSheet = workbook.Worksheets["Inputs"];
IWorksheet outputSheet = workbook.Worksheets["Outputs"];

inputSheet.EnableSheetCalculations();
outputSheet.EnableSheetCalculations();

// Suspend during updates
inputSheet.CalcEngine.CalculatingSuspended = true;

Random r = new Random();

// Update input values
inputSheet[1, 2].Value = (r.Next(74) + 15).ToString();    // Age
inputSheet[2, 2].Value = (r.Next(50) + 20).ToString();    // Income
inputSheet[3, 2].Value = (r.Next(100) + 1).ToString();    // Transactions
outputSheet[1,1].Value = (r.Next(100) + 1).ToString();

// Update calculation state
inputSheet.CalcEngine.CalculatingSuspended = false;
inputSheet.CalcEngine.UpdateCalcID();

// Pull updated value from output sheet
int outputSheetId = inputSheet.CalcEngine.GetSheetID(outputSheet);
inputSheet.CalcEngine.PullUpdatedValue(outputSheetId, 1, 1);

// Get calculated result
string calculatedValue = outputSheet[1, 1].CalculatedValue;
Console.WriteLine($"Updated Result: {calculatedValue}");
```

**Method Signature:** `void PullUpdatedValue(int sheetId, int row, int col)`  
**Parameters:**
- `sheetId` - The sheet ID obtained from `GetSheetID()`
- `row` - The row index of the cell (1-based)
- `col` - The column index of the cell (1-based)

**Use Case:** Retrieve updated values after resuming suspended calculations

---

## Performance Tips

### 1. Batch Updates

```csharp
// Good - Suspend during bulk updates
sheet.CalcEngine.CalculatingSuspended = true;
// ... make many updates ...
sheet.CalcEngine.CalculatingSuspended = false;
sheet.CalcEngine.RecalculateRange(/* range */, sheet);
```

### 2. Parse Once, Compute Multiple Times

```csharp
string parsedFormula = sheet.CalcEngine.ParseFormula("A1 + B1");

// Reuse parsed formula
string result1 = sheet.CalcEngine.ComputeFormula(parsedFormula);
sheet["A1"].Number = 200;
string result2 = sheet.CalcEngine.ComputeFormula(parsedFormula);
```

### 3. Dispose Resources

```csharp
sheet.DisableSheetCalculations();  // Free CalcEngine resources
workbook.Close();
excelEngine.Dispose();
```

---

## Key Methods and Properties

| Member | Type | Description |
|--------|------|-------------|
| `EnableSheetCalculations()` | Method | Initialize calculation engine for worksheet |
| `DisableSheetCalculations()` | Method | Dispose calculation engine resources |
| `CalcEngine` | Property | Access underlying CalcEngine instance |
| `CalculatedValue` | Property | Get computed value of formula cell |
| `Formula` | Property | Get or set cell formula |
| `RecalculateRange(RangeInfo, ICalcData)` | Method | Recalculate a specific range of cells |
| `GetSheetID(ICalcData)` | Method | Get unique ID for a worksheet |
| `UpdateCalcID()` | Method | Update calculation state after resuming suspended mode |
| `PullUpdatedValue(int, int, int)` | Method | Pull updated calculated value from a specific cell |

---

## Error Handling

```csharp
try
{
    ExcelEngine excelEngine = new ExcelEngine();
    IWorkbook workbook = excelEngine.Excel.Workbooks.Open(@"Sample.xlsx");
    IWorksheet sheet = workbook.Worksheets[0];
    
    sheet.EnableSheetCalculations();
    
    // Perform calculations
    var value = sheet["C1"].CalculatedValue;
    
    if (value == "#DIV/0!")
    {
        Console.WriteLine("Division by zero error");
    }
    else if (value == "#REF!")
    {
        Console.WriteLine("Invalid reference error");
    }
    
    sheet.DisableSheetCalculations();
}
catch (FileNotFoundException)
{
    Console.WriteLine("Excel file not found");
}
catch (Exception ex)
{
    Console.WriteLine($"Unexpected error: {ex.Message}");
}
```

---

## Integration Scenarios

### Scenario 1: Financial Report Generation

```csharp
// Load financial template
ExcelEngine engine = new ExcelEngine();
IWorkbook workbook = engine.Excel.Workbooks.Open(@"FinancialTemplate.xlsx");
IWorksheet sheet = workbook.Worksheets["Report"];

sheet.EnableSheetCalculations();

// Update with actual data
sheet["B2"].Value = "2024-Q1";
sheet["B3"].Number = 500000;  // Revenue
sheet["B4"].Number = 300000;  // Expenses

// Formulas automatically calculate
sheet.DisableSheetCalculations();

// Save report
workbook.SaveAs(@"FinancialReport_Q1_2024.xlsx");
```

### Scenario 2: Payroll Processing

```csharp
// Load payroll template
IWorksheet payroll = workbook.Worksheets["Payroll"];
payroll.EnableSheetCalculations();

// Bulk update employee data
payroll.CalcEngine.CalculatingSuspended = true;

for (int i = 1; i <= 100; i++)
{
    payroll[i, 1].Value = $"EMP{i:000}";          // Employee ID
    payroll[i, 2].Number = 5000 + (i * 100);     // Base Salary
    payroll[i, 3].Number = i * 50;               // Overtime Hours
}

payroll.CalcEngine.CalculatingSuspended = false;
payroll.CalcEngine.UpdateCalcID();

// Get final payroll totals
string total = payroll["C102"].CalculatedValue;
```

---

## See Also

- [CalcEngine](calcengine.md) - Advanced engine features
- [Parse and Compute](parse-compute.md) - Formula operations
- [Getting Started](getting-started.md) - Setup guide
- [Performance](performance.md) - Optimization techniques
