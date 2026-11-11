# Tables

> Arrange content in rows and columns — create, modify, format, merge, and remove tables in a PowerPoint presentation.

---
### Cross-Platform (Required Usings)

```csharp
using Syncfusion.PresentationRenderer;
using Syncfusion.Presentation;
```
### Windows-specific (Required usings)
```csharp
using Syncfusion.Presentation;
```
---
## Create a Table by Adding Rows

### Minimal Code
```csharp

ITable table = slide.Shapes.AddTable(2, 2, 100, 120, 300, 200);
int rowIndex = 0, colIndex;
foreach (IRow row in table.Rows)
{
    colIndex = 0;
    foreach (ICell cell in row.Cells)
    {
        cell.TextBody.AddParagraph("(" + rowIndex + " , " + colIndex + ")");
        colIndex++;
    }
    rowIndex++;
}

```

### Placeholders
- `AddTable(2, 2, 100, 120, 300, 200)` → Replace with `AddTable({rows}, {cols}, {x}, {y}, {width}, {height})`
- `"Sample.pptx"` → Replace with `"{output-file-path}"`

---

## Create a Table by Adding Columns

### Minimal Code
```csharp

ITable table = slide.Shapes.AddTable(2, 2, 100, 120, 300, 200);

int row = 0, col;
foreach (IColumn column in table.Columns)
{
    col = 0;
    foreach (ICell cell in column.Cells)
    {
        cell.TextBody.AddParagraph("(" + row + " , " + col + ")");
        col++;
    }
    row++;
}
// Save

```

### Placeholders
- `AddTable(2, 2, 100, 120, 300, 200)` → Replace with `AddTable({rows}, {cols}, {x}, {y}, {width}, {height})`

---

## Append a New Row at the End of a Table

### Minimal Code
```csharp
// Get the table from the first slide
ITable table = pptxDoc.Slides[0].Shapes[0] as ITable;
// Append a new row
IRow row = table.Rows.Add();
foreach (ICell cell in row.Cells)
{
    cell.TextBody.AddParagraph(table.Rows.IndexOf(row).ToString());
}

```

### Placeholders
- `pptxDoc.Slides[0].Shapes[0]` → Replace indices with the target slide and shape index

---

## Copy an Existing Row to the End of a Table

### Minimal Code
```csharp

ITable table = pptxDoc.Slides[0].Shapes[0] as ITable;
// Clone the first row and append it
table.Rows.Add(table.Rows[0].Clone());
```

### Placeholders
- `table.Rows[0]` → Replace `0` with the index of the row to copy

---

## Insert a Row at a Specific Index

### Minimal Code
```csharp

ITable table = pptxDoc.Slides[0].Shapes[0] as ITable;
// Clone row at index 0 and insert it at index 1
table.Rows.Insert(1, table.Rows[0].Clone());
```

### Placeholders
- `Rows.Insert(1, table.Rows[0].Clone())` → Replace `1` with the target index; replace `[0]` with the source row index

---

## Append a New Column at the End of a Table

### Minimal Code
```csharp

ITable table = pptxDoc.Slides[0].Shapes[0] as ITable;
// Append a new column
IColumn column = table.Columns.Add();
foreach (ICell cell in column.Cells)
{
    cell.TextBody.AddParagraph(table.Columns.IndexOf(column).ToString());
}

```

---

## Copy an Existing Column to the End of a Table

### Minimal Code
```csharp
ITable table = pptxDoc.Slides[0].Shapes[0] as ITable;
// Clone the first column and append it
table.Columns.Add(table.Columns[0].Clone());
```

### Placeholders
- `table.Columns[0]` → Replace `0` with the index of the column to copy

---

## Insert a Column at a Specific Index

### Minimal Code
```csharp
ITable table = pptxDoc.Slides[0].Shapes[0] as ITable;
// Clone column at index 0 and insert it at index 1
table.Columns.Insert(1, table.Columns[0].Clone());
```

### Placeholders
- `Columns.Insert(1, table.Columns[0].Clone())` → Replace `1` with the target index; replace `[0]` with the source column index

---

## Get the Actual (Rendered) Height of a Table

### Cross-platform (Minimal Code)
```csharp
pptxDoc.PresentationRenderer = new PresentationRenderer();
ITable table = pptxDoc.Slides[0].Shapes[0] as ITable;
table.Rows[0].Cells[0].TextBody.AddParagraph("Hello World");
float height = table.GetActualHeight();
```
### Windows-specific (Minimal Code)
```csharp
ITable table = slide.Shapes[0] as ITable;
table.Rows[0].Cells[0].TextBody.AddParagraph("Hello World");
float height=table.GetActualHeight();
```

### Placeholders
- `table.Rows[0].Cells[0]` → Replace indices to target the desired cell

---

## Apply Custom Table Formatting

### Minimal Code
```csharp
ITable table = slide.Shapes.AddTable(2, 2, 100, 120, 300, 200);

ICell cell = table[0, 0];
cell.ColumnWidth = 400;
cell.TextBody.MarginBottom = 0;
cell.TextBody.MarginLeft = 58;
cell.TextBody.MarginRight = 29;
cell.TextBody.MarginTop = 65;
cell.Fill.SolidFill.Color = ColorObject.Orange;
cell.TextBody.AddParagraph("First Row and First Column");

cell = table[0, 1];
cell.TextBody.MarginLeft = 58;
cell.TextBody.MarginRight = 29;
cell.TextBody.MarginTop = 65;
cell.Fill.SolidFill.Color = ColorObject.BlueViolet;
cell.TextBody.AddParagraph("First Row and Second Column");

cell = table[1, 0];
cell.TextBody.MarginLeft = 58;
cell.TextBody.MarginRight = 29;
cell.TextBody.MarginTop = 65;
cell.Fill.SolidFill.Color = ColorObject.SandyBrown;
cell.TextBody.AddParagraph("Second Row and First Column");

cell = table[1, 1];
cell.TextBody.MarginLeft = 58;
cell.TextBody.MarginRight = 29;
cell.TextBody.MarginTop = 65;
cell.Fill.SolidFill.Color = ColorObject.Silver;
cell.TextBody.AddParagraph("Second Row and Second Column");

```

### Placeholders
- `ColorObject.Orange` → Replace with any `ColorObject` color or `ColorObject.FromArgb(r, g, b)`
- Margin values → Replace with desired margin in EMUs

---

## Apply a Built-In Table Style

### Minimal Code
```csharp
// Create or open the presentation and its slide.
ITable table = slide.Shapes.AddTable(3, 3, 100, 120, 300, 200);

// Apply a built-in style
table.BuiltInStyle = BuiltInTableStyle.ThemedStyle2Accent4;
table.HasBandedRows = false;
table.HasHeaderRow = false;
table.HasBandedColumns = true;
table.HasFirstColumn = true;
table.HasLastColumn = true;
table.HasTotalRow = true;

table[0, 0].TextBody.AddParagraph("Row 1, Col 1");
table[0, 1].TextBody.AddParagraph("Row 1, Col 2");
table[0, 2].TextBody.AddParagraph("Row 1, Col 3");
// ... add remaining cells ...

table.Description = "Table arrangement";
```

### Placeholders
- `BuiltInTableStyle.ThemedStyle2Accent4` → Replace with any `BuiltInTableStyle` enum value
- `HasBandedRows`, `HasHeaderRow`, etc. → Set `true`/`false` to toggle style options

---

## Modify an Existing Table

### Minimal Code
```csharp
ITable table = slide.Shapes[0] as ITable;
// Modify table width
table.Width = 450;
// Change built-in style
table.BuiltInStyle = BuiltInTableStyle.DarkStyle1Accent2;
// Update cell text
table.Rows[0].Cells[0].TextBody.AddParagraph("Row1 Cell1");
```

### Placeholders
- `table.Width = 450` → Replace with the desired width in points
- `BuiltInTableStyle.DarkStyle1Accent2` → Replace with any `BuiltInTableStyle` enum value

---

## Merge Cells (Column Span)

### Minimal Code
```csharp
ITable table = slide.Shapes.AddTable(2, 2, 100, 120, 300, 200);

table[0, 0].TextBody.AddParagraph("First Row and First Column");
table[0, 1].TextBody.AddParagraph("First Row and Second Column");
table[1, 0].TextBody.AddParagraph("Second Row and First Column");
table[1, 1].TextBody.AddParagraph("Second Row and Second Column");

// Merge the first row across 2 columns
table[0, 0].ColumnSpan = 2;

table.Description = "Table arrangement";
```

### Placeholders
- `table[0, 0].ColumnSpan = 2` → Replace `[0, 0]` with the target cell and `2` with the number of columns to span

---

## Remove a Table

### Minimal Code
```csharp
ITable table = slide.Shapes[0] as ITable;
// Remove the table from the shapes collection
slide.Shapes.Remove(table);
```

### Placeholders
- `pptxDoc.Slides[0].Shapes[0]` → Replace indices with the target slide and shape

---

## Edit Table Cell Content

### Minimal Code
```csharp
ITable table = pptxDoc.Slides[0].Shapes[0] as ITable;

foreach (IRow row in table.Rows)
{
    foreach (ICell cell in row.Cells)
    {
        foreach (IParagraph paragraph in cell.TextBody.Paragraphs)
        {
            foreach (ITextPart textPart in paragraph.TextParts)
            {
                // Replace matching text
                if (textPart.Text.Contains("Panda"))
                    textPart.Text = "Hello Presentation";
            }
        }
    }
}
```

### Placeholders
- `"Panda"` → Replace with the text to search for
- `"Hello Presentation"` → Replace with the replacement text
