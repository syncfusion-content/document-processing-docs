# Resize, AutoFit, Group, and Subtotal Rows and Columns

> Worksheet row and column sizing operations — adjust dimensions, auto-fit content, group rows/columns, and apply subtotals using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** (No additional usings required)
> **Required usings for .NET Framework (Windows):** (No additional usings required)

---

## Set Row Height

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.SetRowHeight(2, 100);
```

### Set Custom Row Height
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.SetRowHeight(5, 50);
```

### Placeholders
- `2` → Replace with `"{row-index}"` (1-based row number)
- `100` → Replace with `"{height}"` (in points)
- `worksheet` → Replace with `"{target-worksheet}"`

---

## Set Column Width

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.SetColumnWidth(2, 50);
```

### Set Custom Column Width
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.SetColumnWidth(4, 35);
```

### Placeholders
- `2` → Replace with `"{column-index}"` (1-based column number)
- `50` → Replace with `"{width}"` (character units)
- `worksheet` → Replace with `"{target-worksheet}"`

---

## Set Row Height for Range

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.Range["A5:A10"].RowHeight = 40;
```

### Set Height for Multiple Rows
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.Range["A3:A8"].RowHeight = 30;
```

### Placeholders
- `"A5:A10"` → Replace with `"{range-address}"` (row range)
- `40` → Replace with `"{height}"` (in points)
- `worksheet` → Replace with `"{target-worksheet}"`

---

## Set Column Width for Range

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.Range["D1:G1"].ColumnWidth = 5;
```

### Set Width for Multiple Columns
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.Range["B1:E1"].ColumnWidth = 20;
```

### Placeholders
- `"D1:G1"` → Replace with `"{range-address}"` (column range)
- `5` → Replace with `"{width}"` (character units)
- `worksheet` → Replace with `"{target-worksheet}"`

---

## Get Row Height

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
double height = worksheet.GetRowHeight(2);
```

### Retrieve Row Dimension
```csharp
double rowHeight = worksheet.GetRowHeight(5);
Console.WriteLine($"Row height: {rowHeight}");
```

### Placeholders
- `2` → Replace with `"{row-index}"` (1-based row number)
- `height` → Variable name for storing result

---

## Get Column Width

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
double width = worksheet.GetColumnWidth(2);
```

### Retrieve Column Dimension
```csharp
double colWidth = worksheet.GetColumnWidth(4);
Console.WriteLine($"Column width: {colWidth}");
```

### Placeholders
- `2` → Replace with `"{column-index}"` (1-based column number)
- `width` → Variable name for storing result

---

## AutoFit Single Row

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.AutofitRow(3);
```

### Auto-Size Row to Content
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.AutofitRow(5);
```

### Placeholders
- `3` → Replace with `"{row-index}"` (1-based row number)
- `worksheet` → Replace with `"{target-worksheet}"`

---

## AutoFit Single Column

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.AutofitColumn(2);
```

### Auto-Size Column to Content
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.AutofitColumn(4);
```

### Placeholders
- `2` → Replace with `"{column-index}"` (1-based column number)
- `worksheet` → Replace with `"{target-worksheet}"`

---

## AutoFit Multiple Rows

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.Range["6:10"].AutofitRows();
```

### Auto-Fit Row Range
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.Range["3:15"].AutofitRows();
```

### Placeholders
- `"6:10"` → Replace with `"{row-range}"` (e.g., "3:20")
- `worksheet` → Replace with `"{target-worksheet}"`

---

## AutoFit Multiple Columns

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.Range["E:G"].AutofitColumns();
```

### Auto-Fit Column Range
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.Range["B:F"].AutofitColumns();
```

### Placeholders
- `"E:G"` → Replace with `"{column-range}"` (e.g., "B:Z")
- `worksheet` → Replace with `"{target-worksheet}"`

---

## Group Rows

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.Range["A3:A7"].Group(ExcelGroupBy.ByRows, true);
```

### Group Row Range
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.Range["A11:A16"].Group(ExcelGroupBy.ByRows);
```

### Placeholders
- `"A3:A7"` → Replace with `"{row-range}"` (rows to group)
- `ByRows` → Keep as-is for row grouping
- `true` → Optional grouping parameter
- `worksheet` → Replace with `"{target-worksheet}"`

---

## Group Columns

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.Range["C1:D1"].Group(ExcelGroupBy.ByColumns, false);
```

### Group Column Range
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.Range["F1:G1"].Group(ExcelGroupBy.ByColumns);
```

### Placeholders
- `"C1:D1"` → Replace with `"{column-range}"` (columns to group)
- `ByColumns` → Keep as-is for column grouping
- `false` → Optional grouping parameter
- `worksheet` → Replace with `"{target-worksheet}"`

---

## Expand Groups

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.Range["A3:A7"].ExpandGroup(ExcelGroupBy.ByRows, ExpandCollapseFlags.ExpandParent);
```

### Expand Row Groups
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.Range["A11:A16"].ExpandGroup(ExcelGroupBy.ByRows);
```

### Placeholders
- `"A3:A7"` → Replace with `"{grouped-range}"` (range to expand)
- `ByRows` → Replace with `ByColumns` for columns
- `ExpandParent` → Optional expansion flag

---

## Collapse Groups

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.Range["A3:A7"].CollapseGroup(ExcelGroupBy.ByRows);
```

### Collapse Row Groups
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.Range["A11:A16"].CollapseGroup(ExcelGroupBy.ByRows);
```

### Placeholders
- `"A3:A7"` → Replace with `"{grouped-range}"` (range to collapse)
- `ByRows` → Replace with `ByColumns` for columns
- `worksheet` → Replace with `"{target-worksheet}"`

---

## Apply Subtotal

### Minimal Code
```csharp
IRange range = worksheet.Range["C3:G12"];
range.SubTotal(0, ConsolidationFunction.Sum, new int[] { 2, 3, 4 });
```

### Subtotal with Sum Function
```csharp
IRange range = worksheet.Range["A2:F100"];
range.SubTotal(0, ConsolidationFunction.Sum, new int[] { 3, 4, 5 });
```

### Placeholders
- `"C3:G12"` → Replace with `"{data-range}"` (range for subtotals)
- `0` → Replace with `"{column-index}"` (0-based column that defines groups)
- `Sum` → Replace with `Average`, `Count`, `Max`, `Min`, etc.
- `new int[] { 2, 3, 4 }` → Replace with `"{column-indexes}"` (columns to subtotal)
