# Protect and Secure Excel Files

> Secure Excel workbooks and worksheets  protect worksheets, protect workbooks, lock/unlock specific cell ranges, encrypt with a password to open, and protect workbook structure using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** `Syncfusion.Drawing`
> **Required usings for .NET Framework (Windows):** `System.Drawing`

---

## Protect a Worksheet

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet.Protect("password123", ExcelSheetProtection.All);
```

### Placeholders
- `"password123"` → Replace with `"{protection-password}"`

### With Specific Allow Options
```csharp
// Protect sheet but allow specific actions
sheet.Protect("password123", ExcelSheetProtection.All);

// Allow users to select locked cells only
sheet.Protect("password123", ExcelSheetProtection.LockedCells);

// Allow users to select locked and unlocked cells
sheet.Protect("password123",
    ExcelSheetProtection.LockedCells |
    ExcelSheetProtection.UnLockedCells);

// Allow specific operations
sheet.Protect("password123",
    ExcelSheetProtection.LockedCells   |
    ExcelSheetProtection.UnLockedCells |
    ExcelSheetProtection.FormattingCells |
    ExcelSheetProtection.InsertingRows |
    ExcelSheetProtection.DeletingRows  |
    ExcelSheetProtection.Sorting       |
    ExcelSheetProtection.Filtering);
```

### ExcelSheetProtection Options
```csharp
ExcelSheetProtection.None               // No protection
ExcelSheetProtection.All                // Full protection (default)
ExcelSheetProtection.LockedCells        // Allow selecting locked cells
ExcelSheetProtection.UnLockedCells      // Allow selecting unlocked cells
ExcelSheetProtection.FormattingCells    // Allow formatting cells
ExcelSheetProtection.FormattingRows     // Allow formatting rows
ExcelSheetProtection.FormattingColumns  // Allow formatting columns
ExcelSheetProtection.InsertingRows      // Allow inserting rows
ExcelSheetProtection.InsertingColumns   // Allow inserting columns
ExcelSheetProtection.InsertingHyperlinks// Allow inserting hyperlinks
ExcelSheetProtection.DeletingRows       // Allow deleting rows
ExcelSheetProtection.DeletingColumns    // Allow deleting columns
ExcelSheetProtection.Sorting            // Allow sorting
ExcelSheetProtection.Filtering          // Allow auto-filter
ExcelSheetProtection.UsingPivotTables   // Allow pivot table operations
```

---

## Unprotect a Worksheet

### Minimal Code
```csharp
sheet.Unprotect("password123");
```

---

## Lock and Unlock Specific Cells

### Minimal Code  Unlock a Range
```csharp
// By default all cells are locked when sheet is protected
// Unlock specific cells to allow editing
IWorksheet sheet = workbook.Worksheets[0];
sheet["B2:D20"].CellStyle.Locked = false;

// Now protect the sheet  only B2:D20 will be editable
sheet.Protect("password123", ExcelSheetProtection.All);
```

### Lock Specific Cells Only
```csharp
// Step 1  Unlock all cells first
sheet.UsedRange.CellStyle.Locked = false;

// Step 2  Lock only specific cells/ranges
sheet["A1:F1"].CellStyle.Locked = true;  // Lock header row
sheet["A2:A20"].CellStyle.Locked = true; // Lock ID column

// Step 3  Protect the sheet
sheet.Protect("password123", ExcelSheetProtection.All);
```

### Hide Formula in Locked Cells
```csharp
// Hide formula so it is not visible in the formula bar
sheet["E2:E20"].CellStyle.FormulaHidden = true;
sheet["E2:E20"].CellStyle.Locked        = true;
sheet.Protect("password123", ExcelSheetProtection.All);
```

---

## Protect the Workbook Structure

### Minimal Code
```csharp
// Prevent users from adding, deleting, moving, or renaming sheets
workbook.Protect(true, true, "password123");
```

### Parameters
```csharp
// Protect(isProtectWindow, isProtectContent, password)
workbook.Protect(false, true,  "password123"); // Protect structure only
workbook.Protect(true,  false, "password123"); // Protect windows only
workbook.Protect(true,  true,  "password123"); // Protect both
```

---

## Unprotect the Workbook Structure

### Minimal Code
```csharp
workbook.Unprotect("password123");
```

---

## Open a Password-Protected Workbook

### Minimal Code
```csharp
// Open a workbook that requires a password
IWorkbook workbook = application.Workbooks.Open("output/secure.xlsx", ExcelParseOptions.Default, false, "password");
```

---

## Protect a Specific Named Range

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];

// Unlock all cells first
sheet.UsedRange.CellStyle.Locked = false;

// Lock only the named/specific range
sheet["A1:F1"].CellStyle.Locked  = true;  // Header
sheet["G2:G100"].CellStyle.Locked = true; // Totals column

// Protect the sheet with password
sheet.Protect("password123", ExcelSheetProtection.All);
```

---

## Full End-to-End Example

```csharp
using Syncfusion.XlsIO;
// For .NET Core / .NET 5+: use `using Syncfusion.Drawing;`
// For .NET Framework (Windows): use `using System.Drawing;`

ExcelEngine excelEngine    = new ExcelEngine();
IApplication application   = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook  = application.Workbooks.Create(1);
IWorksheet sheet    = workbook.Worksheets[0];
sheet.Name          = "Employee Data";

// Write headers
sheet["A1"].Text = "Employee ID";
sheet["B1"].Text = "Name";
sheet["C1"].Text = "Department";
sheet["D1"].Text = "Salary";
sheet["E1"].Text = "Total";

// Style headers
IRange header = sheet["A1:E1"];
header.CellStyle.Font.Bold  = true;
header.CellStyle.Color      = Color.FromArgb(255, 68, 114, 196);
header.CellStyle.Font.Color = ExcelKnownColors.White;

// Write data
sheet["A2"].Number = 1001; sheet["B2"].Text = "Alice"; sheet["C2"].Text = "Engineering"; sheet["D2"].Number = 75000; sheet["E2"].Formula = "=D2*1.1";
sheet["A3"].Number = 1002; sheet["B3"].Text = "Bob";   sheet["C3"].Text = "Marketing";   sheet["D3"].Number = 52000; sheet["E3"].Formula = "=D3*1.1";
sheet["A4"].Number = 1003; sheet["B4"].Text = "Carol"; sheet["C4"].Text = "HR";           sheet["D4"].Number = 48000; sheet["E4"].Formula = "=D4*1.1";

// Step 1  Unlock all cells
sheet.UsedRange.CellStyle.Locked = false;

// Step 2  Lock header row and formula column (E), hide formulas
sheet["A1:E1"].CellStyle.Locked         = true;
sheet["E2:E4"].CellStyle.Locked         = true;
sheet["E2:E4"].CellStyle.FormulaHidden  = true; // Hide formula in formula bar

// Step 3  Lock the ID column (A)  read-only identifiers
sheet["A2:A4"].CellStyle.Locked = true;

// Step 4  Protect the worksheet
sheet.Protect("sheetPass123",
    ExcelSheetProtection.LockedCells   |
    ExcelSheetProtection.UnLockedCells |
    ExcelSheetProtection.Sorting       |
    ExcelSheetProtection.Filtering);

// Step 5  Protect the workbook structure (prevent sheet rename/delete)
workbook.Protect(false, true, "workbookPass123");

// Auto-fit columns
for (int col = 1; col <= 5; col++)
    sheet.AutofitColumn(col);

// Step 6  Save with open password (encrypt the file)
workbook.SaveAs("output/employee-data-secure.xlsx", "openPass123");
workbook.Close();
excelEngine.Dispose();
```

