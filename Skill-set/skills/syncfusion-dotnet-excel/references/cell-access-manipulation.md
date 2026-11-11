# Cell Access and Manipulation - Relative, Discontinuous, Migrant Ranges, and Dependencies

> Advanced cell access and manipulation operations — access cells relatively, work with discontinuous ranges, use migrant range for optimal performance, trace precedent and dependent cells, and clear cell content using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** (No additional usings required)
> **Required usings for .NET Framework (Windows):** (No additional usings required)

> Note: On .NET Framework use `System.Drawing.Color` (e.g., `Color.Yellow`) for APIs that accept framework colors. When targeting portable/.NET Core with Syncfusion XlsIO Core packages, use `Syncfusion.Drawing.Color`. `ExcelKnownColors` constants work across platforms and need no modification.

---

## Access Relative Range by Index

### Minimal Code
```csharp
IApplication application = excelEngine.Excel;
application.RangeIndexerMode = ExcelRangeIndexerMode.Relative;
IRange range1 = worksheet.Range["B3:D5"];
range1[2, 2].Text = "Returns C4 cell";
```

### Access Cells Relative to Range
```csharp
application.RangeIndexerMode = ExcelRangeIndexerMode.Relative;
IRange range1 = worksheet.Range["B3:D5"];
range1[1, 1].Text = "Returns B3 cell";
range1[3, 3].Text = "Returns D5 cell";
```

### Placeholders
- `"B3:D5"` → Replace with `"{range-address}"` (reference range)
- `[2, 2]` → Replace with `"[{relative-row}, {relative-column}]"` (1-based within range)
- `application` → Replace with `"{excel-application}"`

---

## Access Relative Range by Address

### Minimal Code
```csharp
application.RangeIndexerMode = ExcelRangeIndexerMode.Relative;
IRange range2 = worksheet.Range[5, 1, 10, 3];
range2[2, 2, 3, 3].Text = "Returns B6 to C7";
```

### Access Named Range Relatively
```csharp
application.RangeIndexerMode = ExcelRangeIndexerMode.Relative;
IRange baseRange = worksheet.Range["C5:F10"];
baseRange[1, 1].Text = "Top-left of range";
```

### Placeholders
- `[5, 1, 10, 3]` → Replace with `"[{start-row}, {start-col}, {end-row}, {end-col}]"`
- `[2, 2, 3, 3]` → Replace with `"[{rel-row1}, {rel-col1}, {rel-row2}, {rel-col2}]"`

---

## Reset Range Indexer Mode

### Minimal Code
```csharp
IApplication application = excelEngine.Excel;
application.RangeIndexerMode = ExcelRangeIndexerMode.Relative;
application.RangeIndexerMode = ExcelRangeIndexerMode.Relative;
```

### Switch Back to Default Indexing
```csharp
// Default mode is Relative
application.RangeIndexerMode = ExcelRangeIndexerMode.Relative;
IRange cell = worksheet["A1"];
```

### Placeholders
- `ExcelRangeIndexerMode.Relative` → Keep as-is for default/worksheet-level indexing
- `application` → Replace with `"{excel-application}"`

---

## Access Discontinuous Range Collection

### Minimal Code
```csharp
IRange range1 = worksheet.Range["A1:A2"];
IRange range2 = worksheet.Range["C1:C2"];
IRanges ranges = worksheet.CreateRangesCollection();
ranges.Add(range1);
ranges.Add(range2);
ranges.Text = "Test";
```

### Add Multiple Ranges
```csharp
IRanges ranges = worksheet.CreateRangesCollection();
ranges.Add(worksheet.Range["A1:B5"]);
ranges.Add(worksheet.Range["D1:E5"]);
ranges.Add(worksheet.Range["G1:H5"]);
```

### Placeholders
- `"A1:A2"` → Replace with `"{range-address-1}"` (first range)
- `"C1:C2"` → Replace with `"{range-address-2}"` (second range)
- `ranges.Text` → Replace with `"{property-or-operation}"` (apply to collection)

---

## Apply Formatting to Discontinuous Ranges

### Minimal Code
```csharp
IRanges ranges = worksheet.CreateRangesCollection();
ranges.Add(worksheet.Range["A1:A5"]);
ranges.Add(worksheet.Range["C1:C5"]);
worksheet.Range["A1:A5"].CellStyle.Font.Bold = true;
worksheet.Range["C1:C5"].CellStyle.Font.Bold = true;
```

### Format Multiple Non-Adjacent Ranges
```csharp
IRanges ranges = worksheet.CreateRangesCollection();
ranges.Add(worksheet.Range["B2:D2"]);
ranges.Add(worksheet.Range["B5:D5"]);
worksheet.Range["B2:D2"].CellStyle.Color = Color.Yellow;
worksheet.Range["B5:D5"].CellStyle.Color = Color.Yellow;
```

### Placeholders
- `ranges.Add()` → Add multiple discontinuous ranges
- `worksheet.Range["{address}"].CellStyle.Font.{property}` → Format font via CellStyle.Font
- `worksheet.Range["{address}"].CellStyle.Color` → Set background color via CellStyle.Color
- `worksheet` → Replace with `"{target-worksheet}"`

---

## Use Migrant Range for Bulk Data

### Minimal Code
```csharp
IMigrantRange migrantRange = worksheet.MigrantRange;
for (int row = 1; row <= 5; row++)
{
    migrantRange.ResetRowColumn(row, 1);
    migrantRange.Text = $"Row {row}";
}
```

### Write Large Dataset
```csharp
IMigrantRange migrantRange = worksheet.MigrantRange;
for (int row = 1; row <= 1000; row++)
{
    for (int col = 1; col <= 10; col++)
    {
        migrantRange.ResetRowColumn(row, col);
        migrantRange.Number = row * col;
    }
}
```

### Placeholders
- `worksheet.MigrantRange` → Keep as-is to get migrant range
- `ResetRowColumn(row, col)` → Replace with actual `{row}` and `{column}` values
- `migrantRange.Text` → Replace with `"{value}"` or other properties

---

## Get Precedent Cells in Worksheet

### Minimal Code
```csharp
IRange[] precedents = worksheet["A1"].GetPrecedents();
foreach (IRange range in precedents)
{
    Console.WriteLine(range.Address);
}
```

### Get All Precedent Cells
```csharp
IRange[] precedents = worksheet["C1"].GetPrecedents();
if (precedents.Length > 0)
{
    Console.WriteLine("Precedent cells found");
}
```

### Placeholders
- `"A1"` → Replace with `"{cell-address}"` (cell to check)
- `GetPrecedents()` → Keep as-is for worksheet-level precedents
- `range.Address` → Returns address of precedent cell

---

## Get Precedent Cells in Workbook

### Minimal Code
```csharp
IRange[] precedents = worksheet["A1"].GetPrecedents(true);
foreach (IRange range in precedents)
{
    Console.WriteLine(range.Address);
}
```

### Get Precedents Across All Sheets
```csharp
IRange[] precedents = worksheet["B5"].GetPrecedents(true);
Console.WriteLine($"Found {precedents.Length} precedent cells");
```

### Placeholders
- `"A1"` → Replace with `"{cell-address}"`
- `GetPrecedents(true)` → Keep `true` to search entire workbook
- `range.Address` → Returns full address including sheet name

---

## Get Direct Precedent Cells

### Minimal Code
```csharp
IRange[] directPrecedents = worksheet["A1"].GetDirectPrecedents();
foreach (IRange range in directPrecedents)
{
    Console.WriteLine(range.Address);
}
```

### Get Direct Precedents Only
```csharp
IRange[] directPrecedents = worksheet["C1"].GetDirectPrecedents(true);
Console.WriteLine($"Direct precedents: {directPrecedents.Length}");
```

### Placeholders
- `"A1"` → Replace with `"{cell-address}"` (cell to check)
- `GetDirectPrecedents()` → Keep for worksheet-level only
- `GetDirectPrecedents(true)` → Add `true` to search entire workbook

---

## Get Dependent Cells in Worksheet

### Minimal Code
```csharp
IRange[] dependents = worksheet["C1"].GetDependents();
foreach (IRange range in dependents)
{
    Console.WriteLine(range.Address);
}
```

### Get All Dependent Cells
```csharp
IRange[] dependents = worksheet["B2"].GetDependents();
if (dependents.Length > 0)
{
    Console.WriteLine("Dependent cells found");
}
```

### Placeholders
- `"C1"` → Replace with `"{cell-address}"` (cell to check)
- `GetDependents()` → Keep as-is for worksheet-level dependents
- `range.Address` → Returns address of dependent cell

---

## Get Dependent Cells in Workbook

### Minimal Code
```csharp
IRange[] dependents = worksheet["C1"].GetDependents(true);
foreach (IRange range in dependents)
{
    Console.WriteLine(range.Address);
}
```

### Get Dependents Across All Sheets
```csharp
IRange[] dependents = worksheet["D5"].GetDependents(true);
Console.WriteLine($"Found {dependents.Length} dependent cells");
```

### Placeholders
- `"C1"` → Replace with `"{cell-address}"`
- `GetDependents(true)` → Keep `true` to search entire workbook
- `range.Address` → Returns full address including sheet name

---

## Get Direct Dependent Cells

### Minimal Code
```csharp
IRange[] directDependents = worksheet["C1"].GetDirectDependents();
foreach (IRange range in directDependents)
{
    Console.WriteLine(range.Address);
}
```

### Get Direct Dependents Only
```csharp
IRange[] directDependents = worksheet["B1"].GetDirectDependents(true);
Console.WriteLine($"Direct dependents: {directDependents.Length}");
```

### Placeholders
- `"C1"` → Replace with `"{cell-address}"` (cell to check)
- `GetDirectDependents()` → Keep for worksheet-level only
- `GetDirectDependents(true)` → Add `true` to search entire workbook

---

## Clear Cell Content and Formatting

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.Range["C3"].Clear(true);
```

### Clear Content Only
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.Range["A1:B10"].Clear(false);
```

### Placeholders
- `"C3"` → Replace with `"{cell-address}"` (cell to clear)
- `Clear(true)` → `true` clears content and formatting
- `Clear(false)` → `false` clears content only
- `worksheet` → Replace with `"{target-worksheet}"`

---

## Clear Specific Range

### Minimal Code
```csharp
worksheet.Range["A1:D10"].Clear(true);
```

### Clear Multiple Ranges
```csharp
worksheet.Range["A1:C5"].Clear(true);
worksheet.Range["E1:G5"].Clear(false);
```

### Placeholders
- `"A1:D10"` → Replace with `"{range-address}"` (range to clear)
- `true/false` → Replace with `"{include-formatting}"` parameter
