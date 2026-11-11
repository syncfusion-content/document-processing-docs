# Cell Formatting, Styles, and Layout in Excel

> Cell formatting and styling operations — applying number formats, borders, colors, fonts, alignments, row/column sizing, and built-in styles using Syncfusion XlsIO. For cell value operations (setting text, numbers, formulas, dates), refer to `cell-values.md`.

---

## Required Usings

**Required common usings:** `Syncfusion.XlsIO`, `System`

**Required usings for .NET Core / .NET 5+ / ASP.NET Core:** `Syncfusion.Drawing`

**Required usings for .NET Framework (Windows):** `System.Drawing`

> Note: On .NET Framework use `System.Drawing.Color` (e.g., `Color.Yellow`) for APIs that accept framework colors. When targeting portable/.NET Core with the Syncfusion XlsIO Core packages, use `Syncfusion.Drawing.Color`. You do not need to change `ExcelKnownColors` — those constants work across platforms.

---

## Number Format

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet["A1"].NumberFormat = "#,##0.00";
```

### Common Format Strings
```csharp
// Integer with thousand separator
sheet["A1"].NumberFormat = "#,##0";

// Two decimal places
sheet["A2"].NumberFormat = "#,##0.00";

// Currency (dollar)
sheet["A3"].NumberFormat = "$#,##0.00";

// Percentage
sheet["A4"].NumberFormat = "0.00%";

// Scientific notation
sheet["A5"].NumberFormat = "0.00E+00";

// Date formats
sheet["A6"].NumberFormat = "dd/MM/yyyy";
sheet["A7"].NumberFormat = "MM/dd/yyyy";
sheet["A8"].NumberFormat = "yyyy-MM-dd";

// Time formats
sheet["A9"].NumberFormat = "HH:mm:ss";
sheet["A10"].NumberFormat = "h:mm AM/PM";

// Text (force cell to display as text)
sheet["A11"].NumberFormat = "@";
```

### Apply to a Range
```csharp
IRange range = sheet["B1:B20"];
range.NumberFormat = "#,##0.00";
```

---

## Cell Borders

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet["A1"].BorderAround();
```

### All Border Options
```csharp
IRange range = sheet["A1:C3"];

// Border around the entire range
range.BorderAround(ExcelLineStyle.Thin, ExcelKnownColors.Black);

// All inner and outer borders
range.BorderInside(ExcelLineStyle.Thin, ExcelKnownColors.Grey_25_percent);
range.BorderAround(ExcelLineStyle.Medium, ExcelKnownColors.Black);

// Individual cell borders
IRange cell = sheet["B2"];
cell.CellStyle.Borders[ExcelBordersIndex.EdgeTop].LineStyle    = ExcelLineStyle.Thin;
cell.CellStyle.Borders[ExcelBordersIndex.EdgeBottom].LineStyle = ExcelLineStyle.Thin;
cell.CellStyle.Borders[ExcelBordersIndex.EdgeLeft].LineStyle   = ExcelLineStyle.Thin;
cell.CellStyle.Borders[ExcelBordersIndex.EdgeRight].LineStyle  = ExcelLineStyle.Thin;

// Set border color
cell.CellStyle.Borders[ExcelBordersIndex.EdgeTop].Color    = ExcelKnownColors.Dark_blue;
cell.CellStyle.Borders[ExcelBordersIndex.EdgeBottom].Color = ExcelKnownColors.Dark_blue;
```

### Line Style Options
```csharp
ExcelLineStyle.Thin
ExcelLineStyle.Medium
ExcelLineStyle.Thick
ExcelLineStyle.Dashed
ExcelLineStyle.Dotted
ExcelLineStyle.Double
ExcelLineStyle.DashDot
ExcelLineStyle.MediumDashDot
ExcelLineStyle.MediumDashed
```

---

## Font Color

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet["A1"].CellStyle.Font.Color = ExcelKnownColors.Red;
```

### Known Colors & Custom RGB
```csharp
// Known color
sheet["A1"].CellStyle.Font.Color = ExcelKnownColors.Blue;

// Custom RGB color
sheet["A2"].CellStyle.Font.RGBColor = Color.FromArgb(255, 0, 128, 0); // Dark green

// Apply to a range
IRange range = sheet["A1:C5"];
range.CellStyle.Font.Color = ExcelKnownColors.Dark_red;
```

---

## Fill Color (Background)

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet["A1"].CellStyle.Color = Color.LightBlue;
```

### Solid Fill & Pattern Fill
```csharp
// Solid background color
sheet["A1"].CellStyle.Color = Color.LightYellow;

// Using ExcelKnownColors
sheet["A2"].CellStyle.ColorIndex = ExcelKnownColors.Light_blue;
sheet["A2"].CellStyle.FillPattern   = ExcelPattern.Solid;

// Custom RGB background
sheet["A3"].CellStyle.Color = Color.FromArgb(255, 198, 224, 180); // Light green

// Apply to a range
IRange range = sheet["A1:F1"];
range.CellStyle.Color = Color.FromArgb(255, 68, 114, 196); // Header blue
```

---

## Font Styles

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet["A1"].CellStyle.Font.Bold = true;
```

### All Font Style Properties
```csharp
IRange cell = sheet["A1"];

// Bold
cell.CellStyle.Font.Bold = true;

// Italic
cell.CellStyle.Font.Italic = true;

// Underline
cell.CellStyle.Font.Underline = ExcelUnderline.Single;
// ExcelUnderline.Double, ExcelUnderline.SingleAccounting, ExcelUnderline.DoubleAccounting, ExcelUnderline.None

// Strikethrough
cell.CellStyle.Font.Strikethrough = true;

// Font name
cell.CellStyle.Font.FontName = "Calibri";

// Font size
cell.CellStyle.Font.Size = 14;

// Subscript / Superscript
cell.CellStyle.Font.Subscript   = true;
cell.CellStyle.Font.Superscript = true;

// Combined styles
IRange header = sheet["A1:F1"];
header.CellStyle.Font.Bold     = true;
header.CellStyle.Font.FontName = "Calibri";
header.CellStyle.Font.Size     = 12;
header.CellStyle.Font.Color    = ExcelKnownColors.White;
```

---

## Alignments

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet["A1"].CellStyle.HorizontalAlignment = ExcelHAlign.HAlignCenter;
```

### Horizontal & Vertical Alignment
```csharp
IRange cell = sheet["B2"];

// Horizontal alignment
cell.CellStyle.HorizontalAlignment = ExcelHAlign.HAlignLeft;
cell.CellStyle.HorizontalAlignment = ExcelHAlign.HAlignCenter;
cell.CellStyle.HorizontalAlignment = ExcelHAlign.HAlignRight;
cell.CellStyle.HorizontalAlignment = ExcelHAlign.HAlignGeneral;
cell.CellStyle.HorizontalAlignment = ExcelHAlign.HAlignJustify;
cell.CellStyle.HorizontalAlignment = ExcelHAlign.HAlignFill;
cell.CellStyle.HorizontalAlignment = ExcelHAlign.HAlignCenterAcrossSelection;

// Vertical alignment
cell.CellStyle.VerticalAlignment = ExcelVAlign.VAlignTop;
cell.CellStyle.VerticalAlignment = ExcelVAlign.VAlignCenter;
cell.CellStyle.VerticalAlignment = ExcelVAlign.VAlignBottom;
cell.CellStyle.VerticalAlignment = ExcelVAlign.VAlignJustify;

// Wrap text
cell.CellStyle.WrapText = true;

// Indent level (horizontal)
cell.CellStyle.IndentLevel = 2;

// Text rotation (degrees, -90 to 90)
cell.CellStyle.Rotation = 45;
```

### Apply to Range
```csharp
IRange range = sheet["A1:F1"];
range.CellStyle.HorizontalAlignment = ExcelHAlign.HAlignCenter;
range.CellStyle.VerticalAlignment   = ExcelVAlign.VAlignCenter;
```

---

## Row Height

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet.SetRowHeight(1, 30);
```

### Single & Multiple Rows
```csharp
// Set specific row height (row index is 1-based, height in points)
sheet.SetRowHeight(1, 40);  // Row 1 – 40 pt
sheet.SetRowHeight(2, 20);  // Row 2 – 20 pt

// Via Rows collection
sheet.Rows[0].RowHeight = 30; // Rows collection is 0-based

// Auto-fit row height to content
sheet.AutofitRow(1);

// Auto-fit a range of rows
for (int row = 1; row <= 10; row++)
{
    sheet.AutofitRow(row);
}

// Hide a row
sheet.ShowRow(3, false);

// Unhide a row
sheet.ShowRow(3, true);
```

---

## Column Width

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet.SetColumnWidth(1, 20);
```

### Single & Multiple Columns
```csharp
// Set specific column width (column index is 1-based, width in characters)
sheet.SetColumnWidth(1, 25);  // Column A – 25
sheet.SetColumnWidth(2, 15);  // Column B – 15

// Via Columns collection
sheet.Columns[0].ColumnWidth = 20; // Columns collection is 0-based

// Auto-fit column width to content
sheet.AutofitColumn(1);

// Auto-fit a range of columns
for (int col = 1; col <= 10; col++)
{
    sheet.AutofitColumn(col);
}

// Hide a column
sheet.ShowColumn(2, false);

// Unhide a column
sheet.ShowColumn(2, true);

// Set width using column letter range
sheet["A:A"].ColumnWidth = 20;
sheet["B:D"].ColumnWidth = 15;
```

---

## Built-in Cell Styles

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet["A1"].BuiltInStyle = BuiltInStyles.Accent3;
```

### Common Built-in Styles
```csharp
sheet["A1"].BuiltInStyle = BuiltInStyles.Normal;
sheet["A2"].BuiltInStyle = BuiltInStyles.Heading1;
sheet["A3"].BuiltInStyle = BuiltInStyles.Heading2;
sheet["A4"].BuiltInStyle = BuiltInStyles.Title;
sheet["A5"].BuiltInStyle = BuiltInStyles.Total;
sheet["A6"].BuiltInStyle = BuiltInStyles.Accent1;
sheet["A7"].BuiltInStyle = BuiltInStyles.Accent2;
sheet["A8"].BuiltInStyle = BuiltInStyles.Accent3;
```

### Placeholders
- `{style-name}` → Replace with desired BuiltInStyles value (Normal, Heading1, Title, etc.)
- `{row-number}` → Replace with actual row index

---

## Entire Row and Column

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];

// Format entire row
IRange entireRow = sheet["A5"].EntireRow;
entireRow.CellStyle.Font.Bold = true;

// Format entire column
IRange entireColumn = sheet["C1"].EntireColumn;
entireColumn.CellStyle.Color = Color.LightYellow;
```

### Navigation with End Property
```csharp
IRange cell = sheet["A1"];

// Get last cell in entire row
IRange lastCellInRow = cell.EntireRow.End;

// Get last cell in entire column
IRange lastCellInColumn = cell.EntireColumn.End;

// Find used range boundaries
IRange firstCell = sheet["A1"];
IRange usedRange = sheet[firstCell.Row, firstCell.Column, firstCell.EntireColumn.End.Row, firstCell.EntireRow.End.Column];
```

### Placeholders
- `{row-cell}` → Replace with cell in target row (e.g., "A5")
- `{column-cell}` → Replace with cell in target column (e.g., "C1")
- `{formatting}` → Replace with style or formatting properties

---

## Cell Style Name

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];

// Get applied style name
string styleName = sheet["A1"].CellStyleName;  // "Normal" by default
```

### Apply and Verify Custom Styles
```csharp
// Create custom style
IStyle customStyle = workbook.Styles.Add("MyCustomStyle");
customStyle.ColorIndex = ExcelKnownColors.Light_blue;

// Apply by name
sheet["A1"].CellStyleName = "MyCustomStyle";

// Retrieve applied style
string appliedStyle = sheet["A1"].CellStyleName;

// Check multiple cells
if (sheet["A1"].CellStyleName == sheet["A2"].CellStyleName)
{
    // Both cells have same style
}
```

### Placeholders
- `{style-name}` → Replace with custom style name
- `{cell-range}` → Replace with target cells
- `{condition}` → Replace with style comparison logic
