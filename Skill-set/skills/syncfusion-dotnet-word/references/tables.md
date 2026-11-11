# Tables

> All table operations — creating tables, adding rows and columns, cell formatting, and merging cells.

---
## Required common usings

```csharp
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.OfficeChart;
```

## Create Table
> **Required usings for Windows-Specific:**`System.IO`

### Minimal Code
```csharp
var table = section.AddTable();
table.ResetCells(3, 3); // 3 rows, 3 columns
```

### With Content
```csharp
var table = section.AddTable();
table.ResetCells(3, 3);

// Set header row
table.Rows[0].Cells[0].AddParagraph().AppendText("Column 1");
table.Rows[0].Cells[1].AddParagraph().AppendText("Column 2");
table.Rows[0].Cells[2].AddParagraph().AppendText("Column 3");

// Set data rows
table.Rows[1].Cells[0].AddParagraph().AppendText("Row 1, Cell 1");
table.Rows[1].Cells[1].AddParagraph().AppendText("Row 1, Cell 2");
table.Rows[1].Cells[2].AddParagraph().AppendText("Row 1, Cell 3");

table.Rows[2].Cells[0].AddParagraph().AppendText("Row 2, Cell 1");
table.Rows[2].Cells[1].AddParagraph().AppendText("Row 2, Cell 2");
table.Rows[2].Cells[2].AddParagraph().AppendText("Row 2, Cell 3");
```

### Dynamic Table from Data
```csharp
var headers = new[] { "Name", "Age", "City" };
var rows = new[]
{
    new[] { "Alice", "30", "New York" },
    new[] { "Bob", "25", "London" },
    new[] { "Charlie", "35", "Tokyo" }
};

var table = section.AddTable();
table.ResetCells(rows.Length + 1, headers.Length);

// Header row
for (int i = 0; i < headers.Length; i++)
{
    table.Rows[0].Cells[i].AddParagraph().AppendText(headers[i]);
}

// Data rows
for (int r = 0; r < rows.Length; r++)
{
    for (int c = 0; c < headers.Length; c++)
    {
        table.Rows[r + 1].Cells[c].AddParagraph().AppendText(rows[r][c]);
    }
}
```

### Placeholders
- `3, 3` → Replace with `{row-count}, {column-count}`

---

## Apply Table Style

### Built-in style

### Common code for Cross-Platform and Windows-Specific
```csharp
var table = section.AddTable();
table.ResetCells(3, 3);
// Apply built-in table style
table.ApplyStyle(BuiltinTableStyle.LightShading);
// Style options
table.ApplyStyleForHeaderRow = false;
table.ApplyStyleForFirstColumn = false;
table.ApplyStyleForLastColumn = true;
table.ApplyStyleForLastRow = true;
table.ApplyStyleForBandedRows = false;
table.ApplyStyleForBandedColumns = true;
```

### Custom style

### Common code for Cross-Platform and Windows-Specific
```csharp
var table = section.AddTable();
table.ResetCells(4, 4);
WTableStyle tableStyle = document.AddTableStyle("CustomStyle") as WTableStyle;
//Applies formatting for whole table
tableStyle.TableProperties.RowStripe = 1;
tableStyle.TableProperties.ColumnStripe = 1;
tableStyle.TableProperties.Paddings.Top = 0;
tableStyle.TableProperties.Paddings.Bottom = 0;
tableStyle.TableProperties.Paddings.Left = 5.4f;
tableStyle.TableProperties.Paddings.Right = 5.4f;
//Applies conditional formatting for first row
ConditionalFormattingStyle firstRowStyle = tableStyle.ConditionalFormattingStyles.Add(ConditionalFormattingType.FirstRow);
firstRowStyle.CharacterFormat.Bold = true;
```

#### Cross-Platform
```csharp
firstRowStyle.CharacterFormat.TextColor = Syncfusion.Drawing.Color.FromArgb(255, 255, 255, 255);
firstRowStyle.CellProperties.BackColor = Syncfusion.Drawing.Color.Blue;
```

#### Windows-Specific
```csharp
firstRowStyle.CharacterFormat.TextColor = System.Drawing.Color.FromArgb(255, 255, 255, 255);
firstRowStyle.CellProperties.BackColor = System.Drawing.Color.Blue;
```

### Common code for Cross-Platform and Windows-Specific
```csharp
//Applies conditional formatting for first column
ConditionalFormattingStyle firstColumnStyle = tableStyle.ConditionalFormattingStyles.Add(ConditionalFormattingType.FirstColumn);
firstColumnStyle.CharacterFormat.Bold = true;
//Applies the custom table style to the table
table.ApplyStyle("CustomStyle");
```

---

## Access Table, Row, Cell Properties

### Common code for Cross-Platform and Windows-Specific
```csharp
WTable table = section.Tables[0] as WTable;
table.IndentFromLeft = 36f; // in points
table.Title = "Sample Table Title";
table.Description = "This table contains sample data";
string styleName = table.StyleName;
float tableWidth = table.Width; // in points

var row = table.Rows[0];
row.Height = 20f; // Row height (points)
row.HeightType = TableRowHeightType.AtLeast; // Auto, AtLeast, Exactly
row.IsHeader = true; // Repeat row as header in each page

//Access RowFormat
var rowFormat = row.RowFormat;
//Bidirectional (RTL support)
rowFormat.Bidi = true;
//Borders
rowFormat.Borders.BorderType = BorderStyle.Single;
rowFormat.Borders.LineWidth = 1f;
//Cell spacing
rowFormat.CellSpacing = 2f;
//Horizontal alignment
rowFormat.HorizontalAlignment = RowAlignment.Center; // Left, Center, Right
//Auto resize
rowFormat.IsAutoResized = true;
//Left indent
rowFormat.LeftIndent = 36f;
//Padding
rowFormat.Paddings.All = 5f;
//Wrap text around table row
rowFormat.WrapTextAround = true;
```

#### Cross-Platform
```csharp
//Background color
rowFormat.BackColor = Syncfusion.Drawing.Color.LightGray;
```

#### Windows-Specific
```csharp
//Background color
rowFormat.BackColor = System.Drawing.Color.LightGray;
```

#### Common code for Cross-Platform and Windows-Specific
```csharp
var cell = row.Cells[0];
short gridSpan = cell.GridSpan; // Merge across columns

//Access CellFormat
var cellFormat = cell.CellFormat;
//Borders
cellFormat.Borders.BorderType = BorderStyle.Single;
cellFormat.Borders.LineWidth = 2f;
//Fit text inside cell
cellFormat.FitText = true;
//Horizontal merge
cellFormat.HorizontalMerge = CellMerge.Start;  // Start, Continue, None
//Vertical merge
cellFormat.VerticalMerge = CellMerge.Start;    // Start, Continue, None
//Padding
cellFormat.Paddings.All = 5f;
//Use table padding
cellFormat.SamePaddingsAsTable = false;
//Text direction
cellFormat.TextDirection = TextDirection.VerticalTopToBottom;
//Text wrapping
cellFormat.TextWrap = false;
```

---

## Resize table

### Common code for Cross-Platform and Windows-Specific
```csharp
WTable table = section.Tables[0] as WTable;
table.AutoFit(AutoFitType.FitToContent);
```

### Placeholders
- `AutoFitType.FitToContent` → Use `FitToContent`, `FitToWindow`, `FixedColumnWidth` 

---

### Find and Replace Content within Table

#### Find first occurrence using Regex
```csharp
WTable table = section.Tables[0] as WTable;
var sel = table.Find(new System.Text.RegularExpressions.Regex(@"{pattern}"));
```

#### Replace all occurrences (Regex → string)
```csharp
table.Replace(new System.Text.RegularExpressions.Regex(@"{pattern}"), "{replace-text}");
```

---

## Cell Formatting

### Borders

#### Common code for Cross-Platform and Windows-Specific
```csharp
table.TableFormat.Borders.BorderType = BorderStyle.Single;
table.TableFormat.Borders.LineWidth = 1f;
```

#### Cross-Platform
```csharp
table.TableFormat.Borders.Color = Syncfusion.Drawing.Color.Black;
```

#### Windows-Specific
```csharp
table.TableFormat.Borders.Color = System.Drawing.Color.Black;
```

### Cell Shading

#### Common code for Cross-Platform and Windows-Specific
```csharp
for (int i = 0; i < table.Rows[0].Cells.Count; i++)
{
```

#### Cross-Platform
```csharp
    table.Rows[0].Cells[i].CellFormat.BackColor = Syncfusion.Drawing.Color.LightGray;
```

#### Windows-Specific
```csharp
    table.Rows[0].Cells[i].CellFormat.BackColor = System.Drawing.Color.LightGray;
```

#### Common code for Cross-Platform and Windows-Specific
```csharp
}
```

### Cell Padding

#### Common for Cross-Platform and Windows-Specific
```csharp
table.TableFormat.Paddings.All = 5f;
```

### Cell Alignment

#### Common for Cross-Platform and Windows-Specific
```csharp
var para = table.Rows[0].Cells[0].AddParagraph();
para.AppendText("Centered text");
para.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;

table.Rows[0].Cells[0].CellFormat.VerticalAlignment = VerticalAlignment.Middle;
```

### Cell Width

#### Common for Cross-Platform and Windows-Specific
```csharp
table.Rows[0].Cells[0].Width = 150f;
```

---

## Merge Cells

### Horizontal Merge

#### Common for Cross-Platform and Windows-Specific
```csharp
table.ApplyHorizontalMerge(0, 0, 2);
```

### Vertical Merge

#### Common for Cross-Platform and Windows-Specific
```csharp
table.ApplyVerticalMerge(0, 0, 2);
```

---

## Add Rows & Columns

### Add Row

#### Common for Cross-Platform and Windows-Specific
```csharp
var row = table.AddRow();
row.Cells[0].AddParagraph().AppendText("New cell 1");
row.Cells[1].AddParagraph().AppendText("New cell 2");
```

### Add Row with Formatting Options

#### Common for Cross-Platform and Windows-Specific
```csharp
var row = table.AddRow(true, false);
```
#### Placeholders
- `true` (isCopyFormat) → `true` to copy formatting from the previous row; otherwise `false`
- `false` (autoPopulateCells) → `true` to automatically populate cells based on previous row; otherwise `false`

### Add Cell

#### Common for Cross-Platform and Windows-Specific
```csharp
var cell = row.AddCell();
```

### Add Cell by Copying Previous Cell Format

#### Common for Cross-Platform and Windows-Specific
```csharp
var cell = row.AddCell(true);
```

---

## Nested Tables

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var nestedTable = table.Rows[1].Cells[0].AddTable();
nestedTable.ResetCells(2, 2);
nestedTable.Rows[0].Cells[0].AddParagraph().AppendText("Nested 1");
nestedTable.Rows[0].Cells[1].AddParagraph().AppendText("Nested 2");
nestedTable.Rows[1].Cells[0].AddParagraph().AppendText("Nested 3");
nestedTable.Rows[1].Cells[1].AddParagraph().AppendText("Nested 4");
```

---

## Collection Operations (Add, Insert, Remove)

### Table Collection

#### Remove Table

##### Common for Cross-Platform and Windows-Specific
```csharp
var table = section.Tables[0];
// Remove specific table by instance
section.Tables.Remove(table);

// Remove table at index
section.Tables.RemoveAt(0);
```

### Row Collection

#### Add Row

##### Common for Cross-Platform and Windows-Specific
```csharp
var table = section.Tables[0];
var newRow = new WTableRow(doc, table);
table.Rows.Add(newRow);
```

#### Insert Row

##### Common for Cross-Platform and Windows-Specific
```csharp
var table = section.Tables[0];
var newRow = new WTableRow(doc, table);
// Insert at index
table.Rows.Insert(1, newRow);
```

#### Remove Row

##### Common for Cross-Platform and Windows-Specific
```csharp
var table = section.Tables[0];
var row = table.Rows[0];
// Remove specific row by instance
table.Rows.Remove(row);

// Remove row at index
table.Rows.RemoveAt(0);
```

### Cell Collection

#### Add Cell

##### Common for Cross-Platform and Windows-Specific
```csharp
var table = section.Tables[0];
var row = table.Rows[0];
var newCell = new WTableCell(doc);
row.Cells.Add(newCell);

```

#### Insert Cell

##### Common for Cross-Platform and Windows-Specific
```csharp
var table = section.Tables[0];
var row = table.Rows[0];
var newCell = new WTableCell(doc);
// Insert at index
row.Cells.Insert(1, newCell);

```

#### Remove Cell

##### Common for Cross-Platform and Windows-Specific
```csharp
var table = section.Tables[0];
var row = table.Rows[0];
var cell = row.Cells[0];
// Remove specific cell by instance
row.Cells.Remove(cell);

// Remove cell at index
row.Cells.RemoveAt(0);
```

---

## Styled Table (Complete Example)

### Full Example

#### Common Setup
```csharp
var table = section.AddTable();
table.ResetCells(4, 3);
table.TableFormat.Borders.BorderType = BorderStyle.Single;
table.TableFormat.Borders.LineWidth = 0.5f;
table.TableFormat.Paddings.All = 5f;

var headerTexts = new[] { "Product", "Quantity", "Price" };
for (int i = 0; i < headerTexts.Length; i++)
{
```

#### Cross-Platform
```csharp
    table.Rows[0].Cells[i].CellFormat.BackColor = Syncfusion.Drawing.Color.FromArgb(68, 114, 196);
```

#### Windows-Specific
```csharp
    table.Rows[0].Cells[i].CellFormat.BackColor = System.Drawing.Color.FromArgb(68, 114, 196);
```

#### Common Setup
```csharp
    var text = table.Rows[0].Cells[i].AddParagraph().AppendText(headerTexts[i]);
    text.CharacterFormat.Bold = true;
```

#### Cross-Platform
```csharp
    text.CharacterFormat.TextColor = Syncfusion.Drawing.Color.White;
```

#### Windows-Specific
```csharp
    text.CharacterFormat.TextColor = System.Drawing.Color.White;
```

#### Common Setup
```csharp
}

var data = new[]
{
    new[] { "Widget A", "100", "$5.00" },
    new[] { "Widget B", "250", "$3.50" },
    new[] { "Widget C", "75", "$12.00" }
};

for (int r = 0; r < data.Length; r++)
{
    if (r % 2 == 1)
    {
        for (int c = 0; c < data[r].Length; c++)
        {
```

#### Cross-Platform
```csharp
            table.Rows[r + 1].Cells[c].CellFormat.BackColor = Syncfusion.Drawing.Color.FromArgb(217, 226, 243);
```

#### Windows-Specific
```csharp
            table.Rows[r + 1].Cells[c].CellFormat.BackColor = System.Drawing.Color.FromArgb(217, 226, 243);
```

#### Common Setup
```csharp
        }
    }

    for (int c = 0; c < data[r].Length; c++)
    {
        table.Rows[r + 1].Cells[c].AddParagraph().AppendText(data[r][c]);
    }
}
```
