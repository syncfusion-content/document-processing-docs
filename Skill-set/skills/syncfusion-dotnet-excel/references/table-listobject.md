# Create and Format Excel Tables (ListObject)

> Create and manage Excel tables (ListObjects)  create from range, apply built-in styles, add/remove rows and columns, access table data, set total rows, filter, and convert to range using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** (No additional usings required)
> **Required usings for .NET Framework (Windows):** (No additional usings required)

---

## Create a Table from a Range

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
IListObject table = sheet.ListObjects.Create("SalesTable", sheet["A1:D5"]);
```

### Placeholders
- `"SalesTable"` → Replace with `"{table-name}"`
- `sheet["A1:D5"]` → Replace with `"{table-range}"`

### With Data and Headers
```csharp
IWorksheet sheet = workbook.Worksheets[0];

// Write headers
sheet["A1"].Text = "Product";
sheet["B1"].Text = "Category";
sheet["C1"].Text = "Price";
sheet["D1"].Text = "Stock";

// Write data rows
sheet["A2"].Text = "Laptop";   sheet["B2"].Text = "Electronics"; sheet["C2"].Number = 999.99;  sheet["D2"].Number = 50;
sheet["A3"].Text = "Monitor";  sheet["B3"].Text = "Electronics"; sheet["C3"].Number = 299.99;  sheet["D3"].Number = 120;
sheet["A4"].Text = "Desk";     sheet["B4"].Text = "Furniture";   sheet["C4"].Number = 149.50;  sheet["D4"].Number = 30;
sheet["A5"].Text = "Chair";    sheet["B5"].Text = "Furniture";   sheet["C5"].Number = 89.00;   sheet["D5"].Number = 75;

// Create table from the populated range
IListObject table = sheet.ListObjects.Create("ProductTable", sheet["A1:D5"]);
```

---

## Apply Built-in Table Style

### Minimal Code
```csharp
IListObject table = sheet.ListObjects.Create("SalesTable", sheet["A1:D5"]);
table.BuiltInTableStyle = TableBuiltInStyles.TableStyleMedium9;
```

### Placeholders
- `TableBuiltInStyles.TableStyleMedium9` → Replace with `"{table-style}"`

### Available Style Categories
```csharp
// Light styles
table.BuiltInTableStyle = TableBuiltInStyles.TableStyleLight1;
table.BuiltInTableStyle = TableBuiltInStyles.TableStyleLight2;
// ... Light1 through Light21

// Medium styles
table.BuiltInTableStyle = TableBuiltInStyles.TableStyleMedium1;
table.BuiltInTableStyle = TableBuiltInStyles.TableStyleMedium9;
table.BuiltInTableStyle = TableBuiltInStyles.TableStyleMedium15;
// ... Medium1 through Medium28

// Dark styles
table.BuiltInTableStyle = TableBuiltInStyles.TableStyleDark1;
table.BuiltInTableStyle = TableBuiltInStyles.TableStyleDark8;
// ... Dark1 through Dark11
```

### With Banded Rows and Columns
```csharp
IListObject table = sheet.ListObjects.Create("SalesTable", sheet["A1:D5"]);
table.BuiltInTableStyle   = TableBuiltInStyles.TableStyleMedium9;
table.ShowTableStyleRowStripes    = true;   // Alternating row shading
table.ShowTableStyleColumnStripes = false;  // No column banding
table.ShowHeaderRow                = true;   // Show header row
table.ShowTotals                    = false;  // Hide totals row
table.ShowFirstColumn              = false;
table.ShowLastColumn               = false;
```

---

## Access Table Columns

### Minimal Code
```csharp
IListObject table = sheet.ListObjects[0];

foreach (IListObjectColumn col in table.Columns)
{
    Console.WriteLine(col.Name);
}
```

### Get Column by Name or Index
```csharp
IListObject table = sheet.ListObjects[0];

// By index (0-based)
IListObjectColumn col1 = table.Columns[0];
Console.WriteLine(col1.Name);

// By name (IListObject exposes columns collection indexed by name in examples)
IListObjectColumn priceCol = table.Columns[1];
Console.WriteLine(priceCol.Index);
```

---

## Add Total Row

### Minimal Code
```csharp
IListObject table = sheet.ListObjects[0];
table.ShowTotals = true;
```

### Set Total Function per Column
```csharp
IListObject table = sheet.ListObjects["SalesTable"];
table.ShowTotals = true;

// Set aggregate function for specific columns
// Use TotalsRowLabel / TotalsCalculation (per Syncfusion IListObjectColumn API)
table.Columns[0].TotalsRowLabel = "Total"; // first column label
table.Columns[1].TotalsCalculation = ExcelTotalsCalculation.Sum;
table.Columns[2].TotalsCalculation = ExcelTotalsCalculation.Sum;
```

### Total Function Options
```csharp
ExcelTotalsRowFunction.None
ExcelTotalsRowFunction.Sum
ExcelTotalsRowFunction.Count
ExcelTotalsRowFunction.Average
ExcelTotalsRowFunction.Max
ExcelTotalsRowFunction.Min
ExcelTotalsRowFunction.StdDev
ExcelTotalsRowFunction.Var
ExcelTotalsRowFunction.CountNums
ExcelTotalsRowFunction.Custom   // Use a custom formula
```

### Adding total row
```csharp
table.ShowTotals = true;
table.Columns[0].TotalsRowLabel = "Total";
table.Columns[1].TotalsCalculation = ExcelTotalsCalculation.Sum;
table.Columns[2].TotalsCalculation = ExcelTotalsCalculation.Sum;
```

---

## Add a Column to the Table

### Minimal Code
```csharp
IListObject table = sheet.ListObjects[0];

sheet.InsertColumn(2, 2);
```

---

## Apply Number Format to a Table Column

### Minimal Code
```csharp
// Apply number format to a table column using the worksheet range for the column.
// (Resolve the column address from your table range and apply formatting via worksheet.Range.)
IListObject table = sheet.ListObjects[0];
// Example: format the third column of the table (Price) using an address
sheet.Range["C2:C5"].NumberFormat = "$#,##0.00"; // adjust address to match your table rows
```

---

## Filter Table Data (AutoFilter)

### Minimal Code
```csharp
IListObject table = sheet.ListObjects["ProductTable"];

// Apply a text filter on the Category column
IAutoFilter filter = table.AutoFilters[0]; // 0-based column index within the table
filter.AddTextFilter("Electronics");
```

### Show All (Clear Filter)
```csharp
// Clear filters applied to the table
table.ShowAutoFilter = false; // setting to false clears the applied filter for the table
```

---

## Convert Table to Normal Range

### Minimal Code
```csharp
IListObject table = sheet.ListObjects[0];
// Syncfusion XlsIO does not expose a ConvertToRange method; to clear filters use `table.ShowAutoFilter = false`.
// To remove the table object entirely you can export the range and delete the list object from the worksheet
// (use documented IListObjects methods in your XlsIO version).
```

---

## Access and Iterate All Tables

### Minimal Code
```csharp
foreach (IListObject table in sheet.ListObjects)
{
    Console.WriteLine($"Table: {table.Name}, Range: {table.Location.AddressLocal}");
}
```

### Get Table by Name
```csharp
IListObject table = sheet.ListObjects[0];
Console.WriteLine($"Range: {table.Location.AddressLocal}");
Console.WriteLine($"Cols: {table.Columns.Count}");
```

---

## Create Table from DataTable (Import + Create)

### Minimal Code
```csharp
DataTable dt = new DataTable();
dt.Columns.Add("Name",       typeof(string));
dt.Columns.Add("Department", typeof(string));
dt.Columns.Add("Salary",     typeof(double));

dt.Rows.Add("Alice", "Engineering", 75000.00);
dt.Rows.Add("Bob",   "Marketing",   52000.50);
dt.Rows.Add("Carol", "HR",          48000.00);

IWorksheet sheet = workbook.Worksheets[0];

// Import DataTable first
sheet.ImportDataTable(dt, true, 1, 1);

// Wrap the imported range as a ListObject table
int lastRow = dt.Rows.Count + 1; // +1 for header row
int lastCol = dt.Columns.Count;

IListObject table = sheet.ListObjects.Create("EmployeeTable",
    sheet.Range[1, 1, lastRow, lastCol]);

table.BuiltInTableStyle = TableBuiltInStyles.TableStyleMedium9;
table.ShowTotals = true;
// Locate the Salary column by name and set totals
IListObjectColumn salaryCol = null;
foreach (IListObjectColumn c in table.Columns)
{
    if (string.Equals(c.Name, "Salary", StringComparison.OrdinalIgnoreCase)) { salaryCol = c; break; }
}
if (salaryCol != null) salaryCol.TotalsCalculation = ExcelTotalsCalculation.Sum;

// Auto-fit columns
for (int col = 1; col <= lastCol; col++)
    sheet.AutofitColumn(col);
```

---

## Full End-to-End Example

```csharp
using Syncfusion.XlsIO;

ExcelEngine excelEngine    = new ExcelEngine();
IApplication application   = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook   = application.Workbooks.Create(1);
IWorksheet sheet     = workbook.Worksheets[0];
sheet.Name           = "Sales";

// Write headers
sheet["A1"].Text = "Order ID";
sheet["B1"].Text = "Customer";
sheet["C1"].Text = "Product";
sheet["D1"].Text = "Quantity";
sheet["E1"].Text = "Unit Price";
sheet["F1"].Text = "Total";

// Write data rows
sheet["A2"].Number = 1001; sheet["B2"].Text = "Alice"; sheet["C2"].Text = "Laptop";  sheet["D2"].Number = 2;  sheet["E2"].Number = 999.99; sheet["F2"].Formula = "=D2*E2";
sheet["A3"].Number = 1002; sheet["B3"].Text = "Bob";   sheet["C3"].Text = "Monitor"; sheet["D3"].Number = 5;  sheet["E3"].Number = 299.99; sheet["F3"].Formula = "=D3*E3";
sheet["A4"].Number = 1003; sheet["B4"].Text = "Carol"; sheet["C4"].Text = "Desk";    sheet["D4"].Number = 3;  sheet["E4"].Number = 149.50; sheet["F4"].Formula = "=D4*E4";
sheet["A5"].Number = 1004; sheet["B5"].Text = "David"; sheet["C5"].Text = "Chair";   sheet["D5"].Number = 10; sheet["E5"].Number = 89.00;  sheet["F5"].Formula = "=D5*E5";

// Create ListObject (Table)
IListObject table = sheet.ListObjects.Create("OrdersTable", sheet["A1:F5"]);
table.BuiltInTableStyle = TableBuiltInStyles.TableStyleMedium9;
table.ShowTotals    = true;

// Total row aggregates
table.Columns[1].TotalsCalculation = ExcelTotalsCalculation.Sum;
table.Columns[2].TotalsCalculation = ExcelTotalsCalculation.Sum;

// Number formats
sheet["E2:E5"].NumberFormat = "$#,##0.00";
sheet["F2:F6"].NumberFormat = "$#,##0.00";

// Auto-fit all columns
for (int col = 1; col <= 6; col++)
    sheet.AutofitColumn(col);

workbook.SaveAs("output/orders-table.xlsx");
workbook.Close();
excelEngine.Dispose();
```


