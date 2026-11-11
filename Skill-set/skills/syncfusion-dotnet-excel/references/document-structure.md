# Create and Manage Excel Workbooks and Worksheets Using XlsIO

> Covers creating and managing Excel document structure using Syncfusion XlsIO (.NET).
> Includes initializing ExcelEngine, creating workbooks, opening existing workbooks,
> adding, renaming, copying, moving, and deleting worksheets,
> accessing worksheets, saving workbooks, and properly closing and disposing resources.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`, `System.IO`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** `Syncfusion.Drawing`
> **Required usings for .NET Framework (Windows):** `System.Drawing`

---

## Initialize ExcelEngine and IApplication

### Minimal Code
```csharp
ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;
```

### Placeholders
- `ExcelVersion.Xlsx` → Replace with `"{excel-version}"`

### Using ExcelEngine in a Using Block (Recommended)
```csharp
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    // work with workbooks here
}
// ExcelEngine is automatically disposed when the using block exits
```

---

## Create a New Workbook

### Minimal Code
```csharp
IWorkbook workbook = application.Workbooks.Create(1); // create with 1 worksheet
```

### Placeholders
- `1` → Replace with `"{sheet-count}"`

### Create with a Specific Number of Worksheets
```csharp
IWorkbook workbook = application.Workbooks.Create(3); // creates 3 blank worksheets
```

### Create and Set Version
```csharp
ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook = application.Workbooks.Create(1);
workbook.Version   = ExcelVersion.Xlsx;
```

---

## Open an Existing Workbook

### Minimal Code
```csharp
IWorkbook workbook = application.Workbooks.Open("input.xlsx");
```

### Open from File Path
```csharp
ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook = application.Workbooks.Open("input.xlsx");
```

### Open from FileStream
```csharp
ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

using FileStream fs = new FileStream("input.xlsx", FileMode.Open, FileAccess.Read);
IWorkbook workbook  = application.Workbooks.Open(fs);
```

### Open a Password-Protected Workbook
```csharp
ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook = application.Workbooks.Open("input.xlsx", "openPassword123");
```

---

## Access Worksheets

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0]; // by index
```

### Access by Index and by Name
```csharp
IWorksheet sheet1 = workbook.Worksheets[0];          // first sheet (zero-based)
IWorksheet sheet2 = workbook.Worksheets[1];          // second sheet
IWorksheet named  = workbook.Worksheets["SalesData"];// by sheet name
```

### Iterate All Worksheets
```csharp
foreach (IWorksheet worksheet in workbook.Worksheets)
{
    Console.WriteLine($"Sheet: {worksheet.Name}, Index: {worksheet.Index}");
}
```

### Get Total Worksheet Count
```csharp
int count = workbook.Worksheets.Count;
Console.WriteLine($"Total worksheets: {count}");
```

---

## Add a Worksheet

### Minimal Code
```csharp
IWorksheet newSheet = workbook.Worksheets.Create();
```

### Add with a Name
```csharp
IWorksheet newSheet = workbook.Worksheets.Create("Summary");
```

### Add Multiple Worksheets
```csharp
workbook.Worksheets.Create("Sheet1");
workbook.Worksheets.Create("Sheet2");
workbook.Worksheets.Create("Sheet3");
```

---

## Rename a Worksheet

### Minimal Code
```csharp
workbook.Worksheets[0].Name = "SalesData";
```

### Rename by Index and by Reference
```csharp
// Rename the first sheet
workbook.Worksheets[0].Name = "SalesData";

// Rename using a worksheet reference
IWorksheet worksheet = workbook.Worksheets["Sheet1"];
worksheet.Name = "Summary";
```

---

## Copy a Worksheet

### Copy Within the Same Workbook
```csharp
// Copy sheet at index 0 and insert the copy at position 1
sourceWorkbook.Worksheets.AddCopy(sourceWorkbook.Worksheets[0]);
```

### Copy to Another Workbook
```csharp
ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook sourceWorkbook = application.Workbooks.Open("source.xlsx");
IWorkbook targetWorkbook = application.Workbooks.Create(1);

// Copy the first sheet from source into target workbook
targetWorkbook.Worksheets.AddCopy(sourceWorkbook.Worksheets[0]);

targetWorkbook.SaveAs("output/target.xlsx");

sourceWorkbook.Close();
targetWorkbook.Close();
excelEngine.Dispose();
```

---

## Move a Worksheet

### Minimal Code
```csharp
workbook.Worksheets[2].Move(0); // move third sheet to first position
```

### Move Within the Same Workbook
```csharp
// Move sheet at index 0 to position 1
workbook.Worksheets[0].Move(1);
```

### Move to a Specific Position
```csharp
ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook = application.Workbooks.Create(3);

// Move the first sheet to position 2
workbook.Worksheets[0].Move(2);

workbook.SaveAs("output/result.xlsx");

workbook.Close();
excelEngine.Dispose();
```

---

## Delete a Worksheet

### Minimal Code
```csharp
workbook.Worksheets[0].Remove();
```

### Remove by Index and by Name
```csharp
// Remove the first sheet
workbook.Worksheets[0].Remove();

// Remove a sheet by name
workbook.Worksheets["TempSheet"].Remove();
```

---

## Show and Hide a Worksheet

### Minimal Code
```csharp
workbook.Worksheets[0].Visibility = WorksheetVisibility.Hidden;
```

### Hide and Unhide Worksheets
```csharp
// Hide a worksheet (visible in Excel, user can unhide)
workbook.Worksheets["Temp"].Visibility = WorksheetVisibility.Hidden;

// Very hidden (cannot be unhidden via Excel UI — requires code)
workbook.Worksheets["Internal"].Visibility = WorksheetVisibility.StrongHidden;

// Make a sheet visible again
workbook.Worksheets["Temp"].Visibility = WorksheetVisibility.Visible;
```

---

## Workbook Properties

### Minimal Code
```csharp
workbook.Author = "John Smith";
```

### Set Built-in Document Properties
```csharp
// Set the Author property
workbook.Author = "John Smith";
```

---

## Save a Workbook

### Minimal Code
```csharp
workbook.SaveAs("output/result.xlsx");
```

### Save to File Path
```csharp
workbook.Version = ExcelVersion.Xlsx;
workbook.SaveAs("output/result.xlsx");
```

### Save to FileStream
```csharp
workbook.Version = ExcelVersion.Xlsx;
using FileStream fs = new FileStream("output/result.xlsx", FileMode.Create);
workbook.SaveAs(fs);
```

### Save to MemoryStream
```csharp
workbook.Version = ExcelVersion.Xlsx;
MemoryStream stream = new MemoryStream();
workbook.SaveAs(stream);
stream.Position = 0;
// stream is ready to use (e.g., return as file download)
```

### Save as Excel 97-2003 (.xls)
```csharp
workbook.Version = ExcelVersion.Excel97to2003;
workbook.SaveAs("output/result.xls");
```

---

## Close and Dispose

### Minimal Code
```csharp
workbook.Close();
excelEngine.Dispose();
```

### Close Workbook and Dispose ExcelEngine
```csharp
// Always close the workbook before disposing the engine
workbook.Close();
excelEngine.Dispose();
```

### Using Blocks for Automatic Disposal (Recommended)
```csharp
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    IWorkbook workbook = application.Workbooks.Create(1);

    // ... do work ...

    workbook.SaveAs("output/result.xlsx");
    workbook.Close();
} // excelEngine.Dispose() is called automatically here
```

---

## Full End-to-End Example

```csharp
using System;
using System.IO;
using Syncfusion.XlsIO;
using Syncfusion.Drawing;

Directory.CreateDirectory("output");

ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

// -----------------------------------------------------------
// Create a new workbook with 1 worksheet
// -----------------------------------------------------------
IWorkbook workbook = application.Workbooks.Create(1);
workbook.Version  = ExcelVersion.Xlsx;

// Set document properties
workbook.Author  = "Jane Smith";

// -----------------------------------------------------------
// Rename and write to the first worksheet
// -----------------------------------------------------------
IWorksheet salesSheet = workbook.Worksheets[0];
salesSheet.Name = "SalesData";

salesSheet["A1"].Text = "Region";
salesSheet["B1"].Text = "Product";
salesSheet["C1"].Text = "Q1 Sales";
salesSheet["D1"].Text = "Q2 Sales";
salesSheet["E1"].Text = "Total";

IRange header = salesSheet["A1:E1"];
header.CellStyle.Font.Bold  = true;
header.CellStyle.Font.Color = ExcelKnownColors.White;
header.CellStyle.Color      = Syncfusion.Drawing.Color.FromArgb(255, 31, 73, 125);

string[] regions  = { "North", "South", "East", "West" };
string[] products = { "Widget A", "Widget B", "Widget C", "Widget D" };
int[]    q1       = { 18500, 12300, 22100, 9800 };
int[]    q2       = { 21000, 14700, 19500, 11200 };

for (int i = 0; i < 4; i++)
{
    int row = i + 2;
    salesSheet[$"A{row}"].Text    = regions[i];
    salesSheet[$"B{row}"].Text    = products[i];
    salesSheet[$"C{row}"].Number  = q1[i];
    salesSheet[$"D{row}"].Number  = q2[i];
    salesSheet[$"E{row}"].Formula = $"=C{row}+D{row}";
}

salesSheet["C2:E5"].NumberFormat = "$#,##0";
for (int col = 1; col <= 5; col++)
    salesSheet.AutofitColumn(col);

// -----------------------------------------------------------
// Add a Summary worksheet at position 1
// -----------------------------------------------------------
IWorksheet summarySheet = workbook.Worksheets.Create("Summary");
summarySheet.Move(1); // ensure it is the second sheet

summarySheet["A1"].Text = "Summary";
summarySheet["A1"].CellStyle.Font.Bold  = true;
summarySheet["A1"].CellStyle.Font.Size  = 14;
summarySheet["A1"].CellStyle.Font.Color = ExcelKnownColors.Dark_blue;
summarySheet["A2"].Text = $"Generated: {DateTime.Now:MMMM d, yyyy}";
summarySheet["A3"].Text = "See SalesData sheet for full details.";

// -----------------------------------------------------------
// Add a Temp sheet, then delete it
// -----------------------------------------------------------
IWorksheet tempSheet = workbook.Worksheets.Create("Temp");
tempSheet["A1"].Text = "This sheet will be removed.";
tempSheet.Remove(); // delete the Temp sheet

// -----------------------------------------------------------
// Hide the Summary sheet
// -----------------------------------------------------------
summarySheet.Visibility = WorksheetVisibility.Hidden;

Console.WriteLine($"Total sheets: {workbook.Worksheets.Count}");
foreach (IWorksheet ws in workbook.Worksheets)
    Console.WriteLine($"  - {ws.Name} (Visibility: {ws.Visibility})");

// -----------------------------------------------------------
// Save, close, and dispose
// -----------------------------------------------------------
workbook.SaveAs("output/document-structure.xlsx");
Console.WriteLine("Saved: output/document-structure.xlsx");

workbook.Close();
excelEngine.Dispose();
```
