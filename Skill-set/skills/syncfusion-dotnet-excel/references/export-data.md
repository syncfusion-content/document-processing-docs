# Export Excel Worksheet Data to DataTable

> Export worksheet data into a DataTable  full sheet, specific range, with or without headers, preserving data types, and exporting multiple sheets to a DataSet using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`, `System.Data`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** (No additional usings required)
> **Required usings for .NET Framework (Windows):** (No additional usings required)

---

## Export Entire Worksheet to DataTable

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
DataTable dt = sheet.ExportDataTable(sheet.UsedRange, ExcelExportDataTableOptions.ColumnNames);
```

### Placeholders
- `ExcelExportDataTableOptions.ColumnNames` → Replace with `"{export-options}"`

### With Options
```csharp
// Export with column headers (first row as column names)
DataTable dt = sheet.ExportDataTable(sheet.UsedRange, ExcelExportDataTableOptions.ColumnNames);

// Export without column headers
DataTable dt = sheet.ExportDataTable(sheet.UsedRange, ExcelExportDataTableOptions.None);

// Export and detect column data types automatically
DataTable dt = sheet.ExportDataTable(sheet.UsedRange,
    ExcelExportDataTableOptions.ColumnNames | ExcelExportDataTableOptions.DetectColumnTypes);
```

---

## Export Specific Range to DataTable

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
IRange range = sheet["A1:D10"];
DataTable dt = sheet.ExportDataTable(range, ExcelExportDataTableOptions.ColumnNames);
```

### Using Row and Column Index
```csharp
// ExportDataTable(firstRow, firstColumn, lastRow, lastColumn, options)
DataTable dt = sheet.ExportDataTable(1, 1, 10, 4, ExcelExportDataTableOptions.ColumnNames);
```

### Export a Named Range
```csharp
IRange namedRange = sheet["SalesData"]; // Named range in the workbook
DataTable dt = sheet.ExportDataTable(namedRange, ExcelExportDataTableOptions.ColumnNames);
```

---

## Export with Column Headers

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
DataTable dt = sheet.ExportDataTable(sheet.UsedRange, ExcelExportDataTableOptions.ColumnNames);

// Column names are taken from the first row
foreach (DataColumn col in dt.Columns)
{
    Console.WriteLine(col.ColumnName);
}
```

### Rename Columns After Export
```csharp
DataTable dt = sheet.ExportDataTable(sheet.UsedRange, ExcelExportDataTableOptions.ColumnNames);

dt.Columns["Name"].ColumnName       = "EmployeeName";
dt.Columns["Dept"].ColumnName       = "Department";
dt.Columns["Sal"].ColumnName        = "Salary";
```

---

## Export and Detect Column Data Types

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
DataTable dt = sheet.ExportDataTable(sheet.UsedRange,
    ExcelExportDataTableOptions.ColumnNames | ExcelExportDataTableOptions.DetectColumnTypes);
```

### Check Detected Types
```csharp
DataTable dt = sheet.ExportDataTable(sheet.UsedRange,
    ExcelExportDataTableOptions.ColumnNames | ExcelExportDataTableOptions.DetectColumnTypes);

foreach (DataColumn col in dt.Columns)
{
    Console.WriteLine($"{col.ColumnName} => {col.DataType.Name}");
}
```

---

## Export DataTable and Read Row Values

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
DataTable dt = sheet.ExportDataTable(sheet.UsedRange, ExcelExportDataTableOptions.ColumnNames);

foreach (DataRow row in dt.Rows)
{
    Console.WriteLine($"{row["Name"]} - {row["Department"]} - {row["Salary"]}");
}
```

### Access by Column Index
```csharp
DataTable dt = sheet.ExportDataTable(sheet.UsedRange, ExcelExportDataTableOptions.ColumnNames);

foreach (DataRow row in dt.Rows)
{
    string name   = row[0].ToString();
    string dept   = row[1].ToString();
    double salary = Convert.ToDouble(row[2]);
}
```

---

## Export Specific Columns Only

### Minimal Code
```csharp
// Export a partial column range  columns A to C only
IWorksheet sheet = workbook.Worksheets[0];
int lastRow = sheet.UsedRange.LastRow;

DataTable dt = sheet.ExportDataTable(1, 1, lastRow, 3, ExcelExportDataTableOptions.ColumnNames); // columns A..C
```

### Skip First Few Rows (Offset Start)
```csharp
// Sheet has a title in row 1, headers in row 2, data from row 3
int lastRow = sheet.UsedRange.LastRow;
int lastCol = sheet.UsedRange.LastColumn;

DataTable dt = sheet.ExportDataTable(2, 1, lastRow, lastCol, ExcelExportDataTableOptions.ColumnNames); // start from row 2
```

---

## Export Multiple Sheets to DataSet

### Minimal Code
```csharp
DataSet ds = new DataSet();

foreach (IWorksheet sheet in workbook.Worksheets)
{
    DataTable dt = sheet.ExportDataTable(sheet.UsedRange, ExcelExportDataTableOptions.ColumnNames);
    dt.TableName = sheet.Name;
    ds.Tables.Add(dt);
}
```

### Full Example
```csharp
DataSet ds = new DataSet();
ds.DataSetName = "WorkbookData";

foreach (IWorksheet sheet in workbook.Worksheets)
{
    if (sheet.UsedRange.LastRow < 1) continue; // skip empty sheets

    DataTable dt = sheet.ExportDataTable(sheet.UsedRange,
        ExcelExportDataTableOptions.ColumnNames | ExcelExportDataTableOptions.DetectColumnTypes);

    dt.TableName = sheet.Name;
    ds.Tables.Add(dt);
}

// Access individual tables
DataTable salesTable = ds.Tables["Sales"];
DataTable hrTable    = ds.Tables["HR"];
```

---

## Export and Save as CSV

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
DataTable dt = sheet.ExportDataTable(sheet.UsedRange, ExcelExportDataTableOptions.ColumnNames);

var lines = new System.Collections.Generic.List<string>();

// Write header
lines.Add(string.Join(",", dt.Columns.Cast<DataColumn>().Select(c => c.ColumnName)));

// Write rows
foreach (DataRow row in dt.Rows)
{
    lines.Add(string.Join(",", row.ItemArray.Select(v => v?.ToString())));
}

File.WriteAllLines("output/export.csv", lines);
```

---

## Export from Filtered / Conditional Range

### Export Only Rows Meeting a Condition
```csharp
IWorksheet sheet = workbook.Worksheets[0];
DataTable fullTable = sheet.ExportDataTable(sheet.UsedRange,
    ExcelExportDataTableOptions.ColumnNames | ExcelExportDataTableOptions.DetectColumnTypes);

// Filter rows where Salary > 50000
DataTable filtered = fullTable.Clone(); // same schema, no rows

foreach (DataRow row in fullTable.Rows)
{
    if (Convert.ToDouble(row["Salary"]) > 50000)
    {
        filtered.ImportRow(row);
    }
}
```

### Using DataView for Filtering
```csharp
DataTable dt = sheet.ExportDataTable(sheet.UsedRange,
    ExcelExportDataTableOptions.ColumnNames | ExcelExportDataTableOptions.DetectColumnTypes);

DataView view      = dt.DefaultView;
view.RowFilter     = "Department = 'Engineering'";
view.Sort          = "Salary DESC";

DataTable filtered = view.ToTable();
```


