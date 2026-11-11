# Move and Copy Worksheet, Rows, Columns, and Cell Ranges in Excel

> Worksheet operations for moving and copying — duplicate entire worksheets, rows, columns, and cell ranges from one location to another within or across workbooks using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`, `System.IO`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** (No additional usings required)
> **Required usings for .NET Framework (Windows):** (No additional usings required)

---

## Copy Workbook

### Minimal Code
```csharp
IWorkbook sourceWorkbook = application.Workbooks.Open("input.xlsx");
IWorkbook destinationWorkbook = sourceWorkbook.Clone();
```

### Clone to File
```csharp
IWorkbook sourceWorkbook = application.Workbooks.Open("input.xlsx");
IWorkbook destinationWorkbook = sourceWorkbook.Clone();
using (FileStream stream = new FileStream("output.xlsx", FileMode.Create))
    destinationWorkbook.SaveAs(stream);
```

### Placeholders
- `"input.xlsx"` → Replace with `"{source-file}"`
- `"output.xlsx"` → Replace with `"{destination-file}"`

---

## Copy Worksheet

### Minimal Code
```csharp
IWorkbook sourceWorkbook = application.Workbooks.Open("source.xlsx");
IWorkbook destinationWorkbook = application.Workbooks.Open("destination.xlsx");
destinationWorkbook.Worksheets.AddCopy(sourceWorkbook.Worksheets[0]);
```

### Copy and Set Active Sheet
```csharp
destinationWorkbook.Worksheets.AddCopy(sourceWorkbook.Worksheets[0]);
destinationWorkbook.ActiveSheetIndex = 1;
```

### Placeholders
- `sourceWorkbook.Worksheets[0]` → Replace with `"{source-worksheet-index}"`
- `"source.xlsx"` → Replace with `"{source-file}"`

---

## Copy Row

### Minimal Code
```csharp
IWorksheet sourceSheet = workbook.Worksheets[0];
IWorksheet destSheet = workbook.Worksheets[1];
sourceSheet.Range[1, 1].EntireRow.CopyTo(destSheet.Range[1, 1]);
```

### Copy Specific Row
```csharp
IRange sourceRow = sourceWorksheet.Range[2, 1];
IRange destinationRow = destinationWorksheet.Range[2, 1];
sourceRow.EntireRow.CopyTo(destinationRow);
```

### Placeholders
- `Range[1, 1]` → Replace with `"{row-number}, 1"`
- `sourceSheet` → Replace with `"{source-worksheet}"`
- `destSheet` → Replace with `"{destination-worksheet}"`

---

## Copy Column

### Minimal Code
```csharp
IWorksheet sourceSheet = workbook.Worksheets[0];
IWorksheet destSheet = workbook.Worksheets[1];
sourceSheet.Range[1, 1].EntireColumn.CopyTo(destSheet.Range[1, 1]);
```

### Copy Specific Column
```csharp
IRange sourceColumn = sourceWorksheet.Range[1, 2];
IRange destinationColumn = destinationWorksheet.Range[1, 2];
sourceColumn.EntireColumn.CopyTo(destinationColumn);
```

### Placeholders
- `Range[1, 1]` → Replace with `"{1, column-number}"`
- `sourceSheet` → Replace with `"{source-worksheet}"`
- `destSheet` → Replace with `"{destination-worksheet}"`

---

## Copy Cell Range

### Minimal Code
```csharp
IWorksheet sourceSheet = workbook.Worksheets[0];
IWorksheet destSheet = workbook.Worksheets[1];
sourceSheet.Range[1, 1, 4, 3].CopyTo(destSheet.Range[1, 1, 4, 3]);
```

### Copy Named Range
```csharp
IRange source = sourceWorksheet.Range[1, 1, 4, 3];
IRange destination = destinationWorksheet.Range[1, 1, 4, 3];
source.CopyTo(destination);
```

### Placeholders
- `Range[1, 1, 4, 3]` → Replace with `"{startRow, startCol, endRow, endCol}"`
- `sourceWorksheet` → Replace with `"{source-worksheet}"`
- `destinationWorksheet` → Replace with `"{destination-worksheet}"`

---

## Copy Cell Range with Options

### Minimal Code
```csharp
IRange source = sourceSheet.Range[1, 1, 4, 3];
IRange destination = destSheet.Range[1, 1, 4, 3];
source.CopyTo(destination, ExcelCopyRangeOptions.CopyStyles);
```

### Copy with Different Options
```csharp
// CopyStyles - Copy formatting only
source.CopyTo(destination, ExcelCopyRangeOptions.CopyStyles);
```

### Placeholders
- `ExcelCopyRangeOptions.CopyStyles` → Replace with `"{copy-option}"`
- `source` → Replace with `"{source-range}"`
- `destination` → Replace with `"{destination-range}"`

---

## Move Worksheet

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet.Move(1);
```

### Move to Index Position
```csharp
// Move sheet to position 1 (0-based index)
workbook.Worksheets[0].Move(1);
```

### Placeholders
- `sheet.Move(1)` → Replace with `"{target-index}"`
- `workbook.Worksheets[0]` → Replace with `"{source-worksheet}"`

---

## Move Row

### Minimal Code
```csharp
IWorksheet sourceSheet = workbook.Worksheets[0];
IWorksheet destSheet = workbook.Worksheets[1];
sourceSheet.Range[2, 1].EntireRow.MoveTo(destSheet.Range[2, 1]);
```

### Move Specific Row
```csharp
IRange sourceRow = sourceWorksheet.Range[2, 1];
IRange destinationRow = destinationWorksheet.Range[2, 1];
sourceRow.EntireRow.MoveTo(destinationRow);
```

### Placeholders
- `Range[2, 1]` → Replace with `"{row-number}, 1"`
- `sourceSheet` → Replace with `"{source-worksheet}"`
- `destSheet` → Replace with `"{destination-worksheet}"`

---

## Move Column

### Minimal Code
```csharp
IWorksheet sourceSheet = workbook.Worksheets[0];
IWorksheet destSheet = workbook.Worksheets[1];
sourceSheet.Range[1, 2].EntireColumn.MoveTo(destSheet.Range[1, 2]);
```

### Move Specific Column
```csharp
IRange source = sourceWorksheet.Range[1, 2];
IRange destination = destinationWorksheet.Range[1, 2];
source.EntireColumn.MoveTo(destination);
```

### Placeholders
- `Range[1, 2]` → Replace with `"{1, column-number}"`
- `sourceSheet` → Replace with `"{source-worksheet}"`
- `destSheet` → Replace with `"{destination-worksheet}"`

---

## Move Cell Range

### Minimal Code
```csharp
IWorksheet sourceSheet = workbook.Worksheets[0];
IWorksheet destSheet = workbook.Worksheets[1];
sourceSheet.Range[1, 1, 4, 3].MoveTo(destSheet.Range[1, 1, 4, 3]);
```

### Move Named Range
```csharp
IRange source = sourceWorksheet.Range[1, 1, 4, 3];
IRange destination = destinationWorksheet.Range[1, 1, 4, 3];
source.MoveTo(destination);
```

### Placeholders
- `Range[1, 1, 4, 3]` → Replace with `"{startRow, startCol, endRow, endCol}"`
- `sourceWorksheet` → Replace with `"{source-worksheet}"`
- `destinationWorksheet` → Replace with `"{destination-worksheet}"`
