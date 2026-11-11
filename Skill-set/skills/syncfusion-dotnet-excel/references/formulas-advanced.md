# Advanced Formula Operations in Excel

> Advanced formula operations — cross-sheet references, array formulas, external references, named ranges, calculated columns, formula auditing, and calculation engine options using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** (No additional usings required)
> **Required usings for .NET Framework (Windows):** (No additional usings required)

---

## Enable Sheet Calculations

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet.EnableSheetCalculations();
```

### With Calculated Value Retrieval
```csharp
sheet.EnableSheetCalculations();
string calcValue = sheet["C1"].CalculatedValue;
```

---

## Disable Sheet Calculations

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet.DisableSheetCalculations();
```

---

## Cross-Sheet Formula References

### Minimal Code
```csharp
sheet1.Range["C2"].Formula = "=SUM(Sheet2!B2,Sheet1!A2)";
```

### Sheet Reference Formats
```csharp
// Cross-sheet reference
sheet["A1"].Formula = "=Sheet2!B1+Sheet2!C1";

// Multiple sheets
sheet["A2"].Formula = "=Sheet2!A1+Sheet3!A1";

// Range reference
sheet["A3"].Formula = "=SUM(Sheet2!A1:A10)";
```

### Placeholders
- `"=Sheet2!B2"` → Replace with `"{cross-sheet-formula}"`

---

## Read Formula String

### Minimal Code
```csharp
string formula = sheet["C1"].Formula;
```

### Check Formula Type
```csharp
if (sheet["A1"].HasFormula)
{
    string formula = sheet["A1"].Formula;
}
```

---

## Array Formula

### Minimal Code
```csharp
sheet.Range["A1:D1"].FormulaArray = "{1,2,3,4}";
```

### With Named Range
```csharp
sheet.Range["A1:D1"].FormulaArray = "{1,2,3,4}";
sheet.Names.Add("ArrayRange", sheet.Range["A1:D1"]);
sheet.Range["A2:D2"].FormulaArray = "ArrayRange+100";
```

### Placeholders
- `"{1,2,3,4}"` → Replace with `"{array-values}"`
- `"ArrayRange+100"` → Replace with `"{array-formula}"`

---

## Incremental Formula

### Minimal Code
```csharp
application.EnableIncrementalFormula = true;
sheet["A1:A5"].Formula = "=B1+C1";
```

### Auto-Increment Across Range
```csharp
// Enables automatic cell reference incrementing
application.EnableIncrementalFormula = true;

// Cell references automatically increment: A1→=B1+C1, A2→=B2+C2, etc.
sheet["A1:A5"].Formula = "=B1+C1";
```

---

## External Formula (Cross-Workbook)

### Minimal Code
```csharp
sheet.Range["C1"].Formula = "[C:/Syncfusion/One.xlsx]Sheet1!$A$1*5";
```

### External Reference Formats
```csharp
// File-based external reference
sheet["A1"].Formula = "[C:/Path/File.xlsx]Sheet1!A1";

// With range
sheet["A2"].Formula = "[D:/Data/workbook.xlsx]Data!$A$1:$A$10";

// Complex formula
sheet["A3"].Formula = "[C:/External.xlsx]Sheet1!B2*3+[C:/External.xlsx]Sheet1!C2";
```

### Placeholders
- `"[C:/Syncfusion/One.xlsx]"` → Replace with `"{file-path}"`

---

## Set Argument Separators

### Minimal Code
```csharp
workbook.SetSeparators(';', ',');
```

### Culture-Specific Separators
```csharp
// For European locales (semicolon separator, comma decimal)
workbook.SetSeparators(';', ',');

// For US locales (comma separator, period decimal)
workbook.SetSeparators(',', '.');
```

### Placeholders
- `';'` → Replace with `"{argument-separator}"`
- `','` → Replace with `"{decimal-separator}"`

---

## Defined Name (Workbook Level)

### Minimal Code
```csharp
IName name = workbook.Names.Add("BookLevelName");
name.RefersToRange = worksheet.Range["A1"];
```

### Using in Formula
```csharp
workbook.Names.Add("One").RefersToRange = sheet.Range["A1"];
workbook.Names.Add("Two").RefersToRange = sheet.Range["B1"];
sheet.Range["C1"].Formula = "=SUM(One,Two)";
```

---

## Defined Name (Worksheet Level)

### Minimal Code
```csharp
IName name = worksheet.Names.Add("SheetLevelName");
name.RefersToRange = worksheet.Range["B1"];
```

### Worksheet-Specific Name
```csharp
// Name only valid in this worksheet
sheet.Names.Add("LocalName").RefersToRange = sheet.Range["D1:D10"];
sheet.Range["E1"].Formula = "=SUM(LocalName)";
```

---

## Delete Named Range

### Minimal Code
```csharp
workbook.Names["BookLevelName"].Delete();
```

### Delete by Reference
```csharp
IName name = workbook.Names[0];
name.Delete();

// Delete from worksheet
sheet.Names["SheetLevelName"].Delete();
```

---

## Calculated Column in Table

### Minimal Code
```csharp
IListObject table = worksheet.ListObjects.Create("Table1", worksheet["A1:D3"]);
table.Columns[3].CalculatedFormula = "SUM(20,[Rate]*[Quantity])";
```

### Structured References
```csharp
// Create table
IListObject table = worksheet.ListObjects.Create("Table1", worksheet["A1:D5"]);

// Define calculated column using structured references
newCol.CalculatedFormula = "=[Price]*[Stock]";
```

### Placeholders
- `"SUM(20,[Rate]*[Quantity])"` → Replace with `"{calculated-formula}"`

---

## Calculation Mode

### Minimal Code
```csharp
workbook.CalculationOptions.CalculationMode = ExcelCalculationMode.Manual;
```

### Mode Options
```csharp
// Automatic (default)
workbook.CalculationOptions.CalculationMode = ExcelCalculationMode.Automatic;

// Manual
workbook.CalculationOptions.CalculationMode = ExcelCalculationMode.Manual;

// Automatic except data tables
workbook.CalculationOptions.CalculationMode = ExcelCalculationMode.AutomaticExceptDataTables;
```

---

## Recalculate Before Save

### Minimal Code
```csharp
workbook.CalculationOptions.RecalcOnSave = false;
```

### In Manual Mode
```csharp
// Disable recalculation during save (faster save in manual mode)
workbook.CalculationOptions.CalculationMode = ExcelCalculationMode.Manual;
workbook.CalculationOptions.RecalcOnSave = false;
```

---

## Enable Iteration (Circular References)

### Minimal Code
```csharp
workbook.CalculationOptions.IsIterationEnabled = true;
workbook.CalculationOptions.MaximumIteration = 99;
```

### Iteration Settings
```csharp
// Enable iteration for circular references
workbook.CalculationOptions.IsIterationEnabled = true;

// Maximum recalculation iterations
workbook.CalculationOptions.MaximumIteration = 99;

// Maximum acceptable change between iterations
workbook.CalculationOptions.MaximumChange = 40;
```

---

## Formula Auditing - Ignore Error

### Minimal Code
```csharp
sheet.Range["A2:D2"].IgnoreErrorOptions = ExcelIgnoreError.NumberAsText;
```

### Error Types
```csharp
// Number stored as text
sheet["A1"].IgnoreErrorOptions = ExcelIgnoreError.NumberAsText;

// Inconsistent formula
sheet["B1"].IgnoreErrorOptions = ExcelIgnoreError.InconsistentFormula;

// Validation errors
sheet["C1"].IgnoreErrorOptions = ExcelIgnoreError.ValidationError;
```

---

## Add-In Functions

### Minimal Code
```csharp
IAddInFunctions addInFunctions = workbook.AddInFunctions;
addInFunctions.Add("AddInFunction");
sheet.Range["A3"].Formula = "AddInFunction(10,20)";
```

### Register and Use Add-In
```csharp
// Add reference to XLAM file
IAddInFunctions unknownFunctions = workbook.AddInFunctions;
unknownFunctions.Add("CustomFunction");

// Use in formula
sheet["A1"].Formula = "=CustomFunction(A1,B1)";
```

### Placeholders
- `"AddInFunction"` → Replace with `"{add-in-name}"`

