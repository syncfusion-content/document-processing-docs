# Freeze and Unfreeze Panes in Excel Worksheet

> Worksheet freeze panes operations — freeze rows or columns to keep them visible while scrolling, or unfreeze and split panes to divide worksheets into independent sections using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** (No additional usings required)
> **Required usings for .NET Framework (Windows):** (No additional usings required)

---

## Freeze Top Rows

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.Range["A3"].FreezePanes();
worksheet.FirstVisibleRow = 3;
```

### Freeze First Two Rows
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.Range["A3"].FreezePanes();
worksheet.FirstVisibleRow = 2;
```

### Placeholders
- `"A3"` → Replace with `"{cell-address}"` (row below which to freeze)
- `3` → Replace with `"{row-index}"` (zero-based first visible row in pane)
- `workbook.Worksheets[0]` → Replace with `"{target-worksheet}"`

---

## Freeze Left Columns

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.Range["C1"].FreezePanes();
worksheet.FirstVisibleColumn = 2;
```

### Freeze First Two Columns
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.Range["C1"].FreezePanes();
worksheet.FirstVisibleColumn = 2;
```

### Placeholders
- `"C1"` → Replace with `"{cell-address}"` (column to the right of which to freeze)
- `2` → Replace with `"{column-index}"` (zero-based first visible column in pane)
- `workbook.Worksheets[0]` → Replace with `"{target-worksheet}"`

---

## Freeze Rows and Columns

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.Range["C3"].FreezePanes();
worksheet.FirstVisibleRow = 2;
worksheet.FirstVisibleColumn = 2;
```

### Freeze Headers and First Column
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.Range["B2"].FreezePanes();
worksheet.FirstVisibleRow = 1;
worksheet.FirstVisibleColumn = 1;
```

### Placeholders
- `"C3"` → Replace with `"{cell-address}"` (intersection point of freeze areas)
- `2` → Replace with `"{row-index}"` and `"{column-index}"` (first visible indexes)
- `workbook.Worksheets[0]` → Replace with `"{target-worksheet}"`

---

## Unfreeze Panes

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.RemovePanes();
```

### Remove All Freezes
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.RemovePanes();
worksheet.FirstVisibleRow = 0;
worksheet.FirstVisibleColumn = 0;
```

### Placeholders
- `workbook.Worksheets[0]` → Replace with `"{target-worksheet}"`

---

## Split Panes Horizontally

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet.HorizontalSplit = 5000;
sheet.FirstVisibleRow = 5;
```

### Split and Set Active Pane
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet.HorizontalSplit = 5000;
sheet.FirstVisibleRow = 5;
sheet.ActivePane = 1;
```

### Placeholders
- `5000` → Replace with `"{split-height}"` (vertical position in twips)
- `5` → Replace with `"{first-visible-row}"` (zero-based row index)
- `1` → Replace with `"{pane-index}"` (0 for top, 1 for bottom)

---

## Split Panes Vertically

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet.VerticalSplit = 5000;
sheet.FirstVisibleColumn = 2;
```

### Split and Set Active Pane
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet.VerticalSplit = 5000;
sheet.FirstVisibleColumn = 2;
sheet.ActivePane = 1;
```

### Placeholders
- `5000` → Replace with `"{split-width}"` (horizontal position in twips)
- `2` → Replace with `"{first-visible-column}"` (zero-based column index)
- `1` → Replace with `"{pane-index}"` (0 for left, 1 for right)

---

## Split Panes Both Directions

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet.HorizontalSplit = 5000;
sheet.VerticalSplit = 5000;
sheet.FirstVisibleRow = 5;
sheet.FirstVisibleColumn = 2;
sheet.ActivePane = 1;
```

### Split with Custom Positioning
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet.FirstVisibleColumn = 2;
sheet.FirstVisibleRow = 5;
sheet.VerticalSplit = 5000;
sheet.HorizontalSplit = 5000;
sheet.ActivePane = 3;
```

### Placeholders
- `5000` → Replace with `"{split-width}"` and `"{split-height}"` (twips)
- `5` and `2` → Replace with `"{first-visible-row}"` and `"{first-visible-column}"`
- `1` or `3` → Replace with `"{active-pane-index}"` (0=top-left, 1=bottom-left, 2=top-right, 3=bottom-right)

---

## Update First Visible Row

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.FirstVisibleRow = 10;
```

### Update First Visible Row in Pane
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.FirstVisibleRow = 3;
```

### Placeholders
- `10` → Replace with `"{row-index}"` (zero-based row number)
- `worksheet` → Replace with `"{target-worksheet}"`

---

## Update First Visible Column

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.FirstVisibleColumn = 5;
```

### Update First Visible Column in Pane
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.FirstVisibleColumn = 3;
```

### Placeholders
- `5` → Replace with `"{column-index}"` (zero-based column number)
- `worksheet` → Replace with `"{target-worksheet}"`
