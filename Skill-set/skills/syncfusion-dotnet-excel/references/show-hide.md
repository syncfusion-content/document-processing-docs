# Show and Hide Rows, Columns, Sheets, and UI Elements in Excel

> Worksheet visibility operations — show or hide rows, columns, sheets, grid lines, headers, tabs, and adjust zoom level using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** (No additional usings required)
> **Required usings for .NET Framework (Windows):** (No additional usings required)

---

## Show Row

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.ShowRow(2, true);
```

### Show Multiple Rows
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.ShowRow(2, true);
worksheet.ShowRow(3, true);
```

### Placeholders
- `2` → Replace with `"{row-index}"` (1-based row number)
- `true` → Keep as-is for show operation
- `worksheet` → Replace with `"{target-worksheet}"`

---

## Hide Row

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.HideRow(2);
```

### Hide Multiple Rows
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.HideRow(2);
worksheet.HideRow(3);
```

### Placeholders
- `2` → Replace with `"{row-index}"` (1-based row number)
- `worksheet` → Replace with `"{target-worksheet}"`

---

## Show Column

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.ShowColumn(2, true);
```

### Show Multiple Columns
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.ShowColumn(1, true);
worksheet.ShowColumn(3, true);
```

### Placeholders
- `2` → Replace with `"{column-index}"` (1-based column number)
- `true` → Keep as-is for show operation
- `worksheet` → Replace with `"{target-worksheet}"`

---

## Hide Column

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.HideColumn(2);
```

### Hide Multiple Columns
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.HideColumn(1);
worksheet.HideColumn(3);
```

### Placeholders
- `2` → Replace with `"{column-index}"` (1-based column number)
- `worksheet` → Replace with `"{target-worksheet}"`

---

## Show Worksheet

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet.Visibility = WorksheetVisibility.Visible;
```

### Show Hidden Sheet
```csharp
IWorksheet sheet = workbook.Worksheets[1];
sheet.Visibility = WorksheetVisibility.Visible;
```

### Placeholders
- `0` → Replace with `"{sheet-index}"` (0-based worksheet index)
- `WorksheetVisibility.Visible` → Keep as-is to make sheet visible
- `workbook.Worksheets` → Replace with `"{target-workbook}"`

---

## Hide Worksheet

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet.Visibility = WorksheetVisibility.Hidden;
```

### Hide Specific Sheet
```csharp
IWorksheet sheet = workbook.Worksheets[1];
sheet.Visibility = WorksheetVisibility.Hidden;
```

### Placeholders
- `0` → Replace with `"{sheet-index}"` (0-based worksheet index)
- `WorksheetVisibility.Hidden` → Keep as-is to hide sheet
- `workbook.Worksheets` → Replace with `"{target-workbook}"`

---

## Show Grid Lines

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet.IsGridLinesVisible = true;
```

### Enable Grid Lines
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet.IsGridLinesVisible = true;
```

### Placeholders
- `true` → Keep as-is to show grid lines
- `sheet` → Replace with `"{target-worksheet}"`

---

## Hide Grid Lines

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet.IsGridLinesVisible = false;
```

### Disable Grid Lines
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet.IsGridLinesVisible = false;
```

### Placeholders
- `false` → Keep as-is to hide grid lines
- `sheet` → Replace with `"{target-worksheet}"`

---

## Show Row and Column Headers

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet.IsRowColumnHeadersVisible = true;
```

### Enable Headers Display
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet.IsRowColumnHeadersVisible = true;
```

### Placeholders
- `true` → Keep as-is to show row and column headers
- `sheet` → Replace with `"{target-worksheet}"`

---

## Hide Row and Column Headers

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet.IsRowColumnHeadersVisible = false;
```

### Disable Headers Display
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet.IsRowColumnHeadersVisible = false;
```

### Placeholders
- `false` → Keep as-is to hide row and column headers
- `sheet` → Replace with `"{target-worksheet}"`

---

## Show Worksheet Tabs

### Minimal Code
```csharp
IWorkbook workbook = application.Workbooks.Open("input.xlsx");
workbook.DisplayWorkbookTabs = true;
```

### Enable Tab Display
```csharp
workbook.DisplayWorkbookTabs = true;
workbook.DisplayedTab = 0;
```

### Placeholders
- `true` → Keep as-is to show tabs
- `0` → Replace with `"{default-tab-index}"` (0-based sheet index to display first)
- `workbook` → Replace with `"{target-workbook}"`

---

## Hide Worksheet Tabs

### Minimal Code
```csharp
IWorkbook workbook = application.Workbooks.Open("input.xlsx");
workbook.DisplayWorkbookTabs = false;
```

### Hide Tabs and Set Display
```csharp
workbook.DisplayWorkbookTabs = false;
workbook.DisplayedTab = 2;
```

### Placeholders
- `false` → Keep as-is to hide tabs
- `2` → Replace with `"{active-tab-index}"` (0-based sheet index)
- `workbook` → Replace with `"{target-workbook}"`

---

## Set Zoom Level

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet.Zoom = 70;
```

### Set Custom Zoom Percentage
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet.Zoom = 150;
```

### Placeholders
- `70` → Replace with `"{zoom-percentage}"` (valid range: 10-400)
- `sheet` → Replace with `"{target-worksheet}"`

---

## Set Zoom to 100%

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet.Zoom = 100;
```

### Reset to Default Zoom
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet.Zoom = 100;
```

### Placeholders
- `100` → Keep as-is for normal zoom level
- `sheet` → Replace with `"{target-worksheet}"`
