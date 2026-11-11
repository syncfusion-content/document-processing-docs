# Convert Excel to CSV and CSV to Excel Using XlsIO

> Covers saving an Excel workbook or worksheet as a CSV file, and opening a CSV file and saving it as an .xlsx workbook using Syncfusion XlsIO (.NET).
> Includes saving with delimiters, saving a specific worksheet, saving all sheets to separate CSVs,
> opening a CSV file, specifying separators, reading CSV data into a worksheet, and preserving data types.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`, `System.Text`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** `Syncfusion.Drawing`
> **Required usings for .NET Framework (Windows):** `System.Drawing`

---

## Save Excel Worksheet as CSV

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
workbook.SaveAs("output/data.csv", ",", Encoding.UTF8, worksheet);
```

### Placeholders
- `"output/data.csv"` → Replace with `"{csv-output-path}"`
- `","` → Replace with `"{delimiter}"`

### Save Active Worksheet to CSV
```csharp
using Syncfusion.XlsIO;

ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook = application.Workbooks.Open("input.xlsx");

// Save the first worksheet as CSV (comma-separated)
workbook.SaveAs("output/data.csv", ",");

workbook.Close();
excelEngine.Dispose();
```

### Save with a Different Delimiter (Tab, Semicolon, Pipe)
```csharp
using Syncfusion.XlsIO;

ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook = application.Workbooks.Open("input.xlsx");

// Tab-separated
workbook.SaveAs("output/data-tab.csv", "\t");

// Semicolon-separated
workbook.SaveAs("output/data-semicolon.csv", ";");

// Pipe-separated
workbook.SaveAs("output/data-pipe.csv", "|");

workbook.Close();
excelEngine.Dispose();
```

### Save to a Stream
```csharp
using Syncfusion.XlsIO;

ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook = application.Workbooks.Open("input.xlsx");

using (MemoryStream stream = new MemoryStream())
{
    workbook.SaveAs(stream, ",");

    // Write stream to file
    using FileStream fs = new FileStream("output/data.csv", FileMode.Create);
    stream.Position = 0;
    stream.CopyTo(fs);
}

workbook.Close();
excelEngine.Dispose();
```

---

## Save All Worksheets to Separate CSV Files

### Minimal Code
```csharp
foreach (IWorksheet ws in workbook.Worksheets)
    workbook.SaveAs($"output/{ws.Name}.csv", ",");
```

### Save Each Sheet to Its Own CSV File
```csharp
using Syncfusion.XlsIO;

ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook = application.Workbooks.Open("input.xlsx");

foreach (IWorksheet worksheet in workbook.Worksheets)
{
    string outputPath = $"output/{worksheet.Name}.csv";
    workbook.SaveAs(outputPath, ",");
    Console.WriteLine($"Saved: {outputPath}");
}

workbook.Close();
excelEngine.Dispose();
```

---

## Open a CSV File

### Minimal Code
```csharp
IWorkbook workbook = application.Workbooks.Open("input.csv");
IWorksheet worksheet = workbook.Worksheets[0];
```

### Open CSV and Access Data
```csharp
using Syncfusion.XlsIO;

ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

// XlsIO detects the CSV format automatically from the file extension
IWorkbook workbook = application.Workbooks.Open("input.csv");
IWorksheet worksheet = workbook.Worksheets[0];

Console.WriteLine($"Used Range: {worksheet.UsedRange.Address}");
Console.WriteLine($"Row count : {worksheet.UsedRange.LastRow}");
Console.WriteLine($"Col count : {worksheet.UsedRange.LastColumn}");

// Read cell values
for (int row = 1; row <= worksheet.UsedRange.LastRow; row++)
{
    for (int col = 1; col <= worksheet.UsedRange.LastColumn; col++)
        Console.Write($"{worksheet[row, col].Value}\t");
    Console.WriteLine();
}

workbook.Close();
excelEngine.Dispose();
```

### Open CSV with a Specific Separator
```csharp
using Syncfusion.XlsIO;

ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

// Use the overload that accepts a separator character
IWorkbook workbook = application.Workbooks.Open("input.csv", ";"); // semicolon-delimited

IWorksheet worksheet = workbook.Worksheets[0];
Console.WriteLine($"First cell value: {worksheet["A1"].Value}");

workbook.Close();
excelEngine.Dispose();
```

### Open CSV from a Stream
```csharp
using Syncfusion.XlsIO;

ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

using FileStream csvStream = new FileStream("input.csv", FileMode.Open, FileAccess.Read);
IWorkbook workbook = application.Workbooks.Open(csvStream, ExcelOpenType.CSV);

IWorksheet worksheet = workbook.Worksheets[0];
Console.WriteLine($"A1: {worksheet["A1"].Value}");

workbook.Close();
excelEngine.Dispose();
```

---

## CSV to Excel — Open CSV and Save as XLSX

### Minimal Code
```csharp
IWorkbook workbook = application.Workbooks.Open("input.csv");
workbook.Version = ExcelVersion.Xlsx;
workbook.SaveAs("output/converted.xlsx");
```

### Open CSV and Save as XLSX
```csharp
using Syncfusion.XlsIO;

ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

// Open the CSV file
IWorkbook workbook = application.Workbooks.Open("input.csv");

// Set version and save as .xlsx
workbook.Version = ExcelVersion.Xlsx;
workbook.SaveAs("output/converted.xlsx");

workbook.Close();
excelEngine.Dispose();
```

### Open CSV with Separator and Save as XLSX
```csharp
using Syncfusion.XlsIO;

ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

// Open a semicolon-delimited CSV
IWorkbook workbook = application.Workbooks.Open("input.csv", ";");

workbook.Version = ExcelVersion.Xlsx;
workbook.SaveAs("output/converted.xlsx");

workbook.Close();
excelEngine.Dispose();
```

### Open CSV from Stream and Save XLSX to Stream
```csharp
using Syncfusion.XlsIO;

ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

using FileStream csvStream = new FileStream("input.csv", FileMode.Open, FileAccess.Read);
IWorkbook workbook = application.Workbooks.Open(csvStream, ExcelOpenType.CSV);

workbook.Version = ExcelVersion.Xlsx;

using MemoryStream xlsxStream = new MemoryStream();
workbook.SaveAs(xlsxStream);
xlsxStream.Position = 0;

using FileStream outputFs = new FileStream("output/converted.xlsx", FileMode.Create);
xlsxStream.CopyTo(outputFs);

workbook.Close();
excelEngine.Dispose();
```

---

## Apply Formatting After Opening CSV

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet["A1"].CellStyle.Font.Bold = true;
workbook.Version = ExcelVersion.Xlsx;
workbook.SaveAs("output/formatted.xlsx");
```

### Style Header Row and Number Format After CSV Import
```csharp
using Syncfusion.XlsIO;
using Syncfusion.Drawing;

ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook = application.Workbooks.Open("input.csv");
IWorksheet worksheet = workbook.Worksheets[0];

int lastCol = worksheet.UsedRange.LastColumn;
int lastRow = worksheet.UsedRange.LastRow;

// Style the header row (row 1)
IRange headerRange = worksheet[1, 1, 1, lastCol];
headerRange.CellStyle.Font.Bold  = true;
headerRange.CellStyle.Font.Color = ExcelKnownColors.White;
headerRange.CellStyle.Color      = Syncfusion.Drawing.Color.FromArgb(255, 31, 73, 125);

// Apply number format to a numeric column (e.g., column 3 = prices)
worksheet[2, 3, lastRow, 3].NumberFormat = "$#,##0.00";

// Auto-fit all used columns
for (int col = 1; col <= lastCol; col++)
    worksheet.AutofitColumn(col);

// Save as XLSX
workbook.Version = ExcelVersion.Xlsx;
workbook.SaveAs("output/formatted.xlsx");

workbook.Close();
excelEngine.Dispose();
```

---

## Full End-to-End Example

```csharp
using System;
using System.IO;
using Syncfusion.XlsIO;
using Syncfusion.Drawing;

ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

Directory.CreateDirectory("output");

// ---------------------------------------------------------
// Part 1 — Build a workbook and save each sheet as CSV
// ---------------------------------------------------------
IWorkbook sourceWorkbook = application.Workbooks.Create(2);

// Sheet 1: Sales Data
IWorksheet salesSheet = sourceWorkbook.Worksheets[0];
salesSheet.Name = "SalesData";

salesSheet["A1"].Text = "Region";
salesSheet["B1"].Text = "Product";
salesSheet["C1"].Text = "Q1 Sales";
salesSheet["D1"].Text = "Q2 Sales";
salesSheet["E1"].Text = "Total";

string[] regions  = { "North", "South", "East", "West", "Central" };
string[] products = { "Widget A", "Widget B", "Widget C", "Widget D", "Widget E" };
int[]    q1Sales  = { 18500, 12300, 22100, 9800, 15600 };
int[]    q2Sales  = { 21000, 14700, 19500, 11200, 17300 };

for (int i = 0; i < 5; i++)
{
    int row = i + 2;
    salesSheet[$"A{row}"].Text    = regions[i];
    salesSheet[$"B{row}"].Text    = products[i];
    salesSheet[$"C{row}"].Number  = q1Sales[i];
    salesSheet[$"D{row}"].Number  = q2Sales[i];
    salesSheet[$"E{row}"].Formula = $"=C{row}+D{row}";
}

// Sheet 2: Product List
IWorksheet productSheet = sourceWorkbook.Worksheets[1];
productSheet.Name = "Products";

productSheet["A1"].Text = "SKU";
productSheet["B1"].Text = "Name";
productSheet["C1"].Text = "Price";

string[] skus   = { "P001", "P002", "P003" };
string[] names  = { "Widget A", "Widget B", "Widget C" };
double[] prices = { 29.99, 49.99, 19.99 };

for (int i = 0; i < 3; i++)
{
    int row = i + 2;
    productSheet[$"A{row}"].Text   = skus[i];
    productSheet[$"B{row}"].Text   = names[i];
    productSheet[$"C{row}"].Number = prices[i];
}

// Save each sheet as a separate CSV
foreach (IWorksheet ws in sourceWorkbook.Worksheets)
{
    string csvPath = $"output/{ws.Name}.csv";
    sourceWorkbook.SaveAs(csvPath, ",");
    Console.WriteLine($"Saved CSV: {csvPath}");
}

sourceWorkbook.Close();

// ---------------------------------------------------------
// Part 2 — Open SalesData.csv and save as XLSX
// ---------------------------------------------------------
IWorkbook csvWorkbook = application.Workbooks.Open("output/SalesData.csv");
IWorksheet csvSheet   = csvWorkbook.Worksheets[0];

int lastCol = csvSheet.UsedRange.LastColumn;
int lastRow = csvSheet.UsedRange.LastRow;

// Style the header row
IRange header = csvSheet[1, 1, 1, lastCol];
header.CellStyle.Font.Bold  = true;
header.CellStyle.Font.Color = ExcelKnownColors.White;
header.CellStyle.Color      = Syncfusion.Drawing.Color.FromArgb(255, 31, 73, 125);

// Number format for Q1, Q2, Total columns
csvSheet[2, 3, lastRow, 5].NumberFormat = "$#,##0";

// Auto-fit all columns
for (int col = 1; col <= lastCol; col++)
    csvSheet.AutofitColumn(col);

// Set worksheet name
csvSheet.Name = "SalesData";

// Save as XLSX
csvWorkbook.Version = ExcelVersion.Xlsx;
csvWorkbook.SaveAs("output/SalesData-converted.xlsx");

Console.WriteLine("Saved XLSX: output/SalesData-converted.xlsx");

csvWorkbook.Close();

// ---------------------------------------------------------
// Part 3 — Open Products.csv with comma separator and save as XLSX
// ---------------------------------------------------------
IWorkbook productsWorkbook = application.Workbooks.Open("output/Products.csv", ",");
IWorksheet productsSheet   = productsWorkbook.Worksheets[0];

// Format price column
productsSheet[2, 3, productsSheet.UsedRange.LastRow, 3].NumberFormat = "$#,##0.00";

for (int col = 1; col <= productsSheet.UsedRange.LastColumn; col++)
    productsSheet.AutofitColumn(col);

productsSheet.Name = "Products";

productsWorkbook.Version = ExcelVersion.Xlsx;
productsWorkbook.SaveAs("output/Products-converted.xlsx");

Console.WriteLine("Saved XLSX: output/Products-converted.xlsx");

productsWorkbook.Close();
excelEngine.Dispose();

Console.WriteLine("\nAll CSV / Excel conversions complete.");
```
