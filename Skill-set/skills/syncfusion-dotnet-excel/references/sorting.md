# Sort Data in Excel Worksheets

> Sort Excel worksheet data — sort by single or multiple columns, specify sort order (ascending/descending), sort with headers, custom sort keys, and sort specific ranges using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** (No additional usings required)
> **Required usings for .NET Framework (Windows):** (No additional usings required)

---

## Sort Single Column (Ascending)

Sort data in a worksheet by a single column in ascending order.

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];

// Create a data sorter from the workbook
IDataSort sorter = workbook.CreateDataSorter();

// Range to sort (include header row if present)
sorter.SortRange = sheet.Range["A1:D100"];

// Sort by first column in the range (column A) ascending
sorter.SortFields.Add(0, SortOn.Values, OrderBy.Ascending);
sorter.Sort();
```

### Sort Descending
```csharp
IDataSort sorter = workbook.CreateDataSorter();
sorter.SortRange = sheet.Range["A1:D100"];
sorter.SortFields.Add(0, SortOn.Values, OrderBy.Descending);
sorter.Sort();
```

### Sort by Different Column
```csharp
// Sort by column B (index 1 within the range)
IDataSort sorter = workbook.CreateDataSorter();
sorter.SortRange = sheet.Range["A1:D100"];
sorter.SortFields.Add(1, SortOn.Values, OrderBy.Ascending);
sorter.Sort();

// Sort by column C (index 2 within the range) descending
sorter = workbook.CreateDataSorter();
sorter.SortRange = sheet.Range["A1:D100"];
sorter.SortFields.Add(2, SortOn.Values, OrderBy.Descending);
sorter.Sort();
```

---

## Sort Multiple Columns

Sort data by multiple columns with different sort orders.

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];

IDataSort sorter = workbook.CreateDataSorter();

sorter.SortRange = worksheet.Range["A1:B11"];

sorter.SortFields.Add(0, SortOn.Values, OrderBy.Ascending);

sorter.SortFields.Add(1, SortOn.Values, OrderBy.Descending);

sorter.Sort();

sorter = workbook.CreateDataSorter();

sorter.SortRange = worksheet.Range["C1:C11"];

sorter.SortFields.Add(2, SortOn.Values, OrderBy.Descending);

sorter.Sort();
```

### Three-Level Sort
```csharp
IDataSort sorter = workbook.CreateDataSorter();
sorter.SortRange = sheet["A1:E100"];
sorter.SortFields.Add(1, SortOn.Values, OrderBy.Ascending);   // Department (index 1)
sorter.SortFields.Add(2, SortOn.Values, OrderBy.Ascending);   // Job Title (index 2)
sorter.SortFields.Add(3, SortOn.Values, OrderBy.Descending);  // Salary (index 3)
sorter.Sort();
```

---

## Sort with Header Row

Sort worksheet data while preserving the header row at the top.

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];

IDataSort sorter = workbook.CreateDataSorter();
sorter.SortRange = sheet.Range["A1:D100"]; // include header if present
// Example: sort by first column within the range (index 0)
sorter.SortFields.Add(0, SortOn.Values, OrderBy.Ascending);
sorter.Sort();
```

### Multiple Columns with Header
```csharp
IDataSort sorter = workbook.CreateDataSorter();
sorter.SortRange = sheet["A1:E100"];
sorter.SortFields.Add(1, SortOn.Values, OrderBy.Ascending);   // Department (index 1)
sorter.SortFields.Add(3, SortOn.Values, OrderBy.Descending);  // Salary (index 3)
sorter.Sort();
```

---

## Sort Specific Range (Without Header)

Sort a defined range without affecting rows outside the range.

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];

IDataSort sorter = workbook.CreateDataSorter();
sorter.SortRange = sheet.Range["A2:D100"]; // data-only range
sorter.SortFields.Add(0, SortOn.Values, OrderBy.Ascending);
sorter.Sort();
```

### Sort Data Only
```csharp
// Data in A2:D100, header in A1:D1
IDataSort sorter = workbook.CreateDataSorter();
sorter.SortRange = sheet["A2:D100"];
sorter.SortFields.Add(0, SortOn.Values, OrderBy.Ascending);
sorter.Sort();  // Sort by first column
```

---

## Sort by Date Column

Sort worksheet data by date values.

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];

IDataSort sorter = workbook.CreateDataSorter();
sorter.SortRange = sheet.Range["A1:E50"];
sorter.SortFields.Add(4, SortOn.Values, OrderBy.Ascending);  // Column E (index 4): oldest first
sorter.Sort();
```

### Sort by Date (Newest First)
```csharp
IDataSort sorter = workbook.CreateDataSorter();
sorter.SortRange = sheet["A1:E100"];
sorter.SortFields.Add(3, SortOn.Values, OrderBy.Descending);  // Most recent first (index 3)
sorter.Sort();
```

---

## Sort with Custom Sort Order

Sort data using multiple sort keys with different criteria.

### Minimal Code
```csharp
IDataSort sorter = workbook.CreateDataSorter();
sorter.SortRange = sheet["A1:F100"];
sorter.SortFields.Add(1, SortOn.Values, OrderBy.Descending);  // Priority (index 1)
sorter.SortFields.Add(4, SortOn.Values, OrderBy.Ascending);   // Date (index 4)
sorter.Sort();
```

### Priority + Date + Status
```csharp
IDataSort sorter = workbook.CreateDataSorter();
sorter.SortRange = sheet["A1:F100"];
sorter.SortFields.Add(1, SortOn.Values, OrderBy.Descending);  // Priority (index 1)
sorter.SortFields.Add(4, SortOn.Values, OrderBy.Ascending);   // Date (index 4)
sorter.SortFields.Add(5, SortOn.Values, OrderBy.Ascending);   // Status (index 5)
sorter.Sort();
```

---

## Sort Order Reference

| Parameter | Value | Behavior |
|---|---|---|
| Column Index | 1, 2, 3... | 1-based column number (A=1, B=2, C=3) |
| Ascending | `OrderBy.Ascending` | Sort from lowest to highest (A-Z, 0-9) |
| Descending | `OrderBy.Descending` | Sort from highest to lowest (Z-A, 9-0) |
| HasHeader | `true` | First row preserved (not sorted) |
| HasHeader | `false` | All rows sorted including first row |

---

## Common Scenarios

### Sort by Text (Alphabetically)
```csharp
IRange sortRange = sheet["A1:D50"];
sortRange.Sort(1, true);  // A-Z order
```
---

## Sort Limitations and Tips

1. **Sort Range Must Be Contiguous** — Cannot have empty rows within data
2. **Headers Affect Sorting** — Set `HasHeader = true` to preserve header row
3. **Multiple Sort Keys** — Secondary sorts apply when primary values are identical
4. **Date Format** — Ensure dates are properly formatted (not text) for accurate sorting
5. **Performance** — Large datasets (10,000+ rows) may take longer to sort
6. **Data Types** — Mixed data types in a column may produce unexpected results

---

## Reference Links

- [Syncfusion XlsIO Documentation](https://help.syncfusion.com/document-processing/excel/overview)
- [Sort API Reference](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_Sort_Syncfusion_XlsIO_IDataSortOptions_)
- [IDataSort (CreateDataSorter)](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IDataSort.html)
- [OrderBy Enum](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.OrderBy.html)
- [Syncfusion XlsIO Examples Repository](https://github.com/SyncfusionExamples/XlsIO-Examples)
