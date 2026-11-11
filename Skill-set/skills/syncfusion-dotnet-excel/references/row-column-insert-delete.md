# Insert, Delete, and Move Rows and Columns in Excel Worksheet

> Worksheet row and column manipulation — insert, delete, and move rows or columns with formatting options using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** (No additional usings required)
> **Required usings for .NET Framework (Windows):** (No additional usings required)

---

## Insert Single Row

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.InsertRow(3, 1, ExcelInsertOptions.FormatAsBefore);
```

### Insert Row with Formatting
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.InsertRow(5, 1, ExcelInsertOptions.FormatAsAfter);
```

### Placeholders
- `3` → Replace with `"{row-index}"` (1-based row number)
- `1` → Keep as-is (number of rows to insert)
- `FormatAsBefore` → Replace with `FormatAsAfter` or `FormatOnly`
- `worksheet` → Replace with `"{target-worksheet}"`

---

## Insert Multiple Rows

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.InsertRow(10, 3, ExcelInsertOptions.FormatAsAfter);
```

### Insert Multiple Rows with Format
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.InsertRow(7, 5, ExcelInsertOptions.FormatAsBefore);
```

### Placeholders
- `10` → Replace with `"{row-index}"` (1-based row number)
- `3` → Replace with `"{count}"` (number of rows to insert)
- `FormatAsAfter` → Replace with `FormatAsBefore` or `FormatOnly`

---

## Insert Single Column

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.InsertColumn(2, 1, ExcelInsertOptions.FormatAsAfter);
```

### Insert Column with Formatting
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.InsertColumn(4, 1, ExcelInsertOptions.FormatAsBefore);
```

### Placeholders
- `2` → Replace with `"{column-index}"` (1-based column number)
- `1` → Keep as-is (number of columns to insert)
- `FormatAsAfter` → Replace with `FormatAsBefore` or `FormatOnly`

---

## Insert Multiple Columns

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.InsertColumn(9, 2, ExcelInsertOptions.FormatAsBefore);
```

### Insert Multiple Columns with Format
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.InsertColumn(6, 4, ExcelInsertOptions.FormatAsAfter);
```

### Placeholders
- `9` → Replace with `"{column-index}"` (1-based column number)
- `2` → Replace with `"{count}"` (number of columns to insert)
- `FormatAsBefore` → Replace with `FormatAsAfter` or `FormatOnly`

---

## Delete Single Row

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.DeleteRow(3);
```

### Delete Specific Row
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.DeleteRow(5);
```

### Placeholders
- `3` → Replace with `"{row-index}"` (1-based row number)
- `worksheet` → Replace with `"{target-worksheet}"`

---

## Delete Multiple Rows

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.DeleteRow(10, 3);
```

### Delete Range of Rows
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.DeleteRow(7, 5);
```

### Placeholders
- `10` → Replace with `"{row-index}"` (1-based starting row)
- `3` → Replace with `"{count}"` (number of rows to delete)

---

## Delete Single Column

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.DeleteColumn(2);
```

### Delete Specific Column
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.DeleteColumn(4);
```

### Placeholders
- `2` → Replace with `"{column-index}"` (1-based column number)
- `worksheet` → Replace with `"{target-worksheet}"`

---

## Delete Multiple Columns

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.DeleteColumn(3, 2);
```

### Delete Range of Columns
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.DeleteColumn(5, 4);
```

### Placeholders
- `3` → Replace with `"{column-index}"` (1-based starting column)
- `2` → Replace with `"{count}"` (number of columns to delete)

---

## Move Row with Shift Up

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.Range["A4:A8"].Clear(ExcelMoveDirection.MoveUp);
```

### Shift Cells Up After Deletion
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.Range["A5:A12"].Clear(ExcelMoveDirection.MoveUp);
```

### Placeholders
- `"A4:A8"` → Replace with `"{range-address}"` (cells to clear and shift)
- `MoveUp` → Keep as-is for upward shift
- `worksheet` → Replace with `"{target-worksheet}"`

---

## Move Column with Shift Left

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.Range["B1:E1"].Clear(ExcelMoveDirection.MoveLeft);
```

### Shift Cells Left After Deletion
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.Range["C1:G1"].Clear(ExcelMoveDirection.MoveLeft);
```

### Placeholders
- `"B1:E1"` → Replace with `"{range-address}"` (cells to clear and shift)
- `MoveLeft` → Keep as-is for leftward shift
- `worksheet` → Replace with `"{target-worksheet}"`
