# Import DataTable Data into an Excel Worksheet

> Import DataTable, DataColumn headers, custom start positions, column mappings, preserve types, and style the imported range using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`, `System.Data`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** `Syncfusion.Drawing`
> **Required usings for .NET Framework (Windows):** `System.Drawing`

---

## Import DataTable (Basic)

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet.ImportDataTable(dataTable, true, 1, 1);
```

### Placeholders
- `dataTable` → Replace with `"{data-table}"`
- `true` → Replace with `"{show-headers}"`
- `1, 1` → Replace with `"{start-row}`, `"{start-column}"`

### Parameters
```csharp
// ImportDataTable(DataTable, showColumnHeaders, startRow, startColumn)
sheet.ImportDataTable(dataTable, true,  1, 1); // With headers, from A1
sheet.ImportDataTable(dataTable, false, 1, 1); // Without headers, from A1
sheet.ImportDataTable(dataTable, true,  2, 2); // With headers, from B2
```

---

## Import DataTable with Column Headers

### Minimal Code
```csharp
DataTable dt = new DataTable();
dt.Columns.Add("Name",   typeof(string));
dt.Columns.Add("Age",    typeof(int));
dt.Columns.Add("Salary", typeof(double));

dt.Rows.Add("Alice", 30, 75000.00);
dt.Rows.Add("Bob",   25, 52000.50);
dt.Rows.Add("Carol", 35, 98000.75);

IWorksheet sheet = workbook.Worksheets[0];
sheet.ImportDataTable(dt, true, 1, 1);
```

### With Custom Column Caption as Header
```csharp
DataTable dt = new DataTable();
DataColumn col = dt.Columns.Add("emp_name", typeof(string));
col.Caption = "Employee Name";  // Caption used as header

DataColumn col2 = dt.Columns.Add("emp_salary", typeof(double));
col2.Caption = "Annual Salary";

dt.Rows.Add("Alice", 75000.00);
dt.Rows.Add("Bob",   52000.50);

IWorksheet sheet = workbook.Worksheets[0];
sheet.ImportDataTable(dt, true, 1, 1);
```

---

## Import DataTable at a Specific Cell Position

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet.ImportDataTable(dataTable, true, 3, 2); // Start at row 3, column B
```

### Using Cell Name
```csharp
IRange startCell = sheet["C5"];
int startRow = startCell.Row;    // 5
int startCol = startCell.Column; // 3

sheet.ImportDataTable(dataTable, true, startRow, startCol);
```

### Leave Space for a Title Row
```csharp
// Row 1 = title, Row 2 onwards = data
sheet["A1"].Text = "Monthly Sales Report";
sheet["A1"].CellStyle.Font.Bold = true;
sheet["A1"].CellStyle.Font.Size = 14;

sheet.ImportDataTable(dataTable, true, 2, 1);
```

---

## Import DataTable  Preserve Data Types

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
// Assembly signature: ImportDataTable(DataTable, bool isFieldNameShown, int firstRow, int firstColumn)
// Preserve-types overload is not available in this assembly; import and then format or import a typed DataTable.
sheet.ImportDataTable(dataTable, true, 1, 1);
```

### With Typed Columns
```csharp
DataTable dt = new DataTable();
dt.Columns.Add("OrderID",   typeof(int));
dt.Columns.Add("OrderDate", typeof(DateTime));
dt.Columns.Add("Amount",    typeof(decimal));
dt.Columns.Add("IsPaid",    typeof(bool));
dt.Columns.Add("Notes",     typeof(string));

dt.Rows.Add(1001, new DateTime(2026, 1, 15), 1500.00m, true,  "Paid on time");
dt.Rows.Add(1002, new DateTime(2026, 2, 20), 2300.50m, false, "Pending");
dt.Rows.Add(1003, new DateTime(2026, 3,  5),  750.75m, true,  "Paid early");

IWorksheet sheet = workbook.Worksheets[0];
// Use the supported signature and apply formatting after import
sheet.ImportDataTable(dt, true, 1, 1);

// Apply date format to the date column after import
sheet["B2:B4"].NumberFormat = "dd/MM/yyyy";
```

---

## Import DataTable with Column Mapping

### Minimal Code
```csharp
// Import only specific columns in a defined order
string[] columnNames = { "Name", "Salary", "Department" };

IWorksheet sheet = workbook.Worksheets[0];
// This assembly does not support a columnNames overload. Create a temporary DataTable with only the
// selected columns and import that table instead:
DataTable selected = dataTable.DefaultView.ToTable(false, columnNames);
sheet.ImportDataTable(selected, true, 1, 1);
```

### Full Example
```csharp
DataTable dt = new DataTable();
dt.Columns.Add("EmployeeID",   typeof(int));
dt.Columns.Add("Name",         typeof(string));
dt.Columns.Add("Department",   typeof(string));
dt.Columns.Add("Salary",       typeof(double));
dt.Columns.Add("InternalCode", typeof(string)); // column to skip

dt.Rows.Add(1, "Alice", "Engineering", 75000.00, "INT-001");
dt.Rows.Add(2, "Bob",   "Marketing",   52000.50, "INT-002");

// Only import selected columns by creating a filtered DataTable first
string[] selectedColumns = { "Name", "Department", "Salary" };
DataTable selectedDt = dt.DefaultView.ToTable(false, selectedColumns);

IWorksheet sheet = workbook.Worksheets[0];
sheet.ImportDataTable(selectedDt, true, 1, 1);
```

---

## Import DataTable  Style the Imported Range

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
int rowCount = dataTable.Rows.Count;
int colCount = dataTable.Columns.Count;

sheet.ImportDataTable(dataTable, true, 1, 1);

// Style header row
IRange headerRange = sheet[1, 1, 1, colCount];
headerRange.CellStyle.Font.Bold           = true;
headerRange.CellStyle.Font.Color          = ExcelKnownColors.White;
headerRange.CellStyle.Color               = Color.FromArgb(255, 68, 114, 196);
headerRange.CellStyle.HorizontalAlignment = ExcelHAlign.HAlignCenter;

// Style data rows
IRange dataRange = sheet[2, 1, rowCount + 1, colCount];
dataRange.CellStyle.Color = Color.FromArgb(255, 242, 242, 242);

// Border the entire table
IRange tableRange = sheet[1, 1, rowCount + 1, colCount];
tableRange.BorderAround(ExcelLineStyle.Medium, ExcelKnownColors.Black);
tableRange.BorderInside(ExcelLineStyle.Thin,   ExcelKnownColors.Grey_25_percent);

// Auto-fit all columns
for (int col = 1; col <= colCount; col++)
{
    sheet.AutofitColumn(col);
}
```

### Alternating Row Colors
```csharp
int rowCount = dataTable.Rows.Count;
int colCount = dataTable.Columns.Count;

sheet.ImportDataTable(dataTable, true, 1, 1);

for (int row = 2; row <= rowCount + 1; row++)
{
    IRange rowRange = sheet[row, 1, row, colCount];
    rowRange.CellStyle.Color = (row % 2 == 0)
        ? Color.FromArgb(255, 217, 226, 243) // Even rows - light blue
        : Color.White;                        // Odd rows  - white
}
```

---

## Import DataTable  Number & Date Formatting After Import

### Minimal Code
```csharp
int rowCount = dataTable.Rows.Count;

sheet.ImportDataTable(dataTable, true, 1, 1);

// Format currency column (column 3)
sheet[2, 3, rowCount + 1, 3].NumberFormat = "$#,##0.00";

// Format date column (column 2)
sheet[2, 2, rowCount + 1, 2].NumberFormat = "dd/MM/yyyy";

// Format percentage column (column 4)
sheet[2, 4, rowCount + 1, 4].NumberFormat = "0.00%";
```

### Common Format Strings
```csharp
sheet[2, 3, rowCount + 1, 3].NumberFormat = "#,##0";          // Integer with thousand separator
sheet[2, 3, rowCount + 1, 3].NumberFormat = "#,##0.00";       // Two decimal places
sheet[2, 3, rowCount + 1, 3].NumberFormat = "$#,##0.00";      // Currency (dollar)
sheet[2, 3, rowCount + 1, 3].NumberFormat = "0.00%";          // Percentage
sheet[2, 2, rowCount + 1, 2].NumberFormat = "dd/MM/yyyy";     // Date
sheet[2, 2, rowCount + 1, 2].NumberFormat = "dd/MM/yyyy HH:mm:ss"; // DateTime
```


