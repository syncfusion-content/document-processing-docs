# PDF Tables (PdfGrid)

Create and render PDF tables using PdfGrid in the Syncfusion .NET PDF Library.

*Note: For document creation, loading, and save/close patterns, see [document-structure.md](document-structure.md).*

---

**Common namespaces:**

```csharp
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Grid;
```

---

## Create a table from a data source

PdfGrid supports binding from `DataTable`, `IEnumerable`, arrays, and more.

```csharp
PdfGrid grid = new PdfGrid();

// Bind data (e.g., IEnumerable)
IEnumerable<object> data = new List<object>
{
    new { ID = "E01", Name = "Clay" },
    new { ID = "E02", Name = "Thomas" }
};

grid.DataSource = data;

// Draw on page (page available elsewhere)
grid.Draw(page, new PointF(10, 10));

```

## Create a table without a data source (manual rows & columns)

```csharp
PdfGrid grid = new PdfGrid();

// Define columns
grid.Columns.Add(3);

// Header row
PdfGridRow header = grid.Headers.Add(1)[0];
header.Cells[0].Value = "Employee ID";
header.Cells[1].Value = "Name";
header.Cells[2].Value = "Salary";

// Data row
PdfGridRow row = grid.Rows.Add();
row.Cells[0].Value = "E01";
row.Cells[1].Value = "Clay";
row.Cells[2].Value = "$10,000";

// Render
grid.Draw(page, PointF.Empty);
```

## Apply built‑in table styles

```csharp
PdfGrid grid = new PdfGrid();
// ... set DataSource or rows

grid.ApplyBuiltinStyle(PdfGridBuiltinStyle.GridTable4Accent1);
```
## Customize Cells Style

```csharp

PdfGridCellStyle pdfGridCellStyle = new PdfGridCellStyle();
pdfGridCellStyle.TextPen = PdfPens.Red;
pdfGridCellStyle.Borders.All = PdfPens.Red;

PdfGridCell pdfGridCell = parentPdfGrid.Rows[0].Cells[0];
pdfGridCell.Style = pdfGridCellStyle;
```
## Customize Row Style

```csharp

PdfGridRowStyle pdfGridRowStyle = new PdfGridRowStyle();
pdfGridRowStyle.BackgroundBrush = PdfBrushes.LightYellow;
pdfGridRowStyle.Font = new PdfStandardFont(PdfFontFamily.Courier, 10);
pdfGridRowStyle.TextBrush = PdfBrushes.Blue;
pdfGridRowStyle.TextPen = PdfPens.Pink;

pdfGrid.Rows[0].Style = pdfGridRowStyle;
```
## Customize columns (widths)

```csharp
PdfGrid grid = new PdfGrid();

PdfGridColumn c1 = grid.Columns.Add();
c1.Width = 100;
PdfGridColumn c2 = grid.Columns.Add();
c2.Width = 200;
PdfGridColumn c3 = grid.Columns.Add();
c3.Width = 100;   
```
## Customize Row (height)

```csharp
PdfGrid pdfGrid = new PdfGrid();
List<object> data = new List<object>();
Object row1 = new { ID = "E01", Name = "John" };
Object row2 = new { ID = "E02", Name = "Thomas" };
Object row3 = new { ID = "E03", Name = "Peter" };
data.Add(row1);
data.Add(row2);
data.Add(row3);

pdfGrid.Rows[2].Height = 50;
```

## Customize grid appearance (style)

```csharp
PdfGridStyle style = new PdfGridStyle
{
    BackgroundBrush = PdfBrushes.LightGray,
    CellSpacing = 0.5f,
	CellPadding = new PdfPaddings(2, 2, 2, 2),
    TextBrush = PdfBrushes.Black,
    AllowHorizontalOverflow = true
};

grid.Style = style;
```
## Apply Header styles
 
```csharp
PdfGridCellStyle headerStyle = new PdfGridCellStyle
{
     BackgroundBrush = PdfBrushes.Red,
     TextBrush = PdfBrushes.Black
};
grid.Headers.ApplyStyle(headerStyle);
```
## Apply style to PDF grid cells

```csharp
PdfGridCellStyle rowStyle = new PdfGridCellStyle();
rowStyle.TextBrush = PdfBrushes.Cyan;
rowStyle.BackgroundBrush = new PdfSolidBrush(Syncfusion.Drawing.Color.YellowGreen); 

pdfGrid.Rows[0].ApplyStyle(rowStyle);
```

## Adjust table width automatically
```csharp
PdfGridStyle style = new PdfGridStyle
{
    AllowHorizontalOverflow = true
};

grid.Style = style;
```

## Apply row and column span

```csharp
// Assume grid has been created and rows added
PdfGridRow row = grid.Rows.Add();
row.Cells[0].Value = "Spanned Cell";
// Column span: merge current cell across the next two columns (total 3 columns width) 
row.Cells[0].ColumnSpan = 3;
// Optionally, center text in spanned cell 
row.Cells[0].StringFormat = new PdfStringFormat { Alignment = PdfTextAlignment.Center, LineAlignment = PdfVerticalAlignment.Middle };
// Row span:
PdfGridRow row1 = grid.Rows[0]; 
header.Cells[0].RowSpan = 2; // spans cell into the next row
```

## Apply word wrap to PDF table cell

```csharp
PdfStringFormat format = new PdfStringFormat();
format.WordWrap = PdfWordWrapType.Word;

foreach (PdfGridRow row in grid.Headers)
{
    foreach (PdfGridCell cell in row.Cells)
    {
        cell.Style.StringFormat = format;
    }
}
```

## Automatic pagination across pages

```csharp
PdfGridLayoutFormat layout = new PdfGridLayoutFormat
{
    Layout = PdfLayoutType.Paginate
};

grid.Draw(page, new RectangleF(0, 0, page.GetClientSize().Width, page.GetClientSize().Height), layout);
```
## String formatting for the whole table

```csharp
PdfStringFormat stringFormat = new PdfStringFormat();
stringFormat.Alignment = PdfTextAlignment.Center;
stringFormat.LineAlignment = PdfVerticalAlignment.Middle;
stringFormat.CharacterSpacing = 2f;

// Apply to all columns
for (int i = 0; i < grid.Columns.Count; i++)
{
    grid.Columns[i].Format = stringFormat;
}
```

## String formatting to a column

```csharp
PdfStringFormat stringFormat = new PdfStringFormat();
stringFormat.Alignment = PdfTextAlignment.Center;
stringFormat.LineAlignment = PdfVerticalAlignment.Middle;
stringFormat.CharacterSpacing = 2f;

// Apply to specific column
grid.Columns[1].Format = stringFormat;
```

## String formatting for a cell

```csharp
PdfStringFormat stringFormat = new PdfStringFormat();
stringFormat.Alignment = PdfTextAlignment.Center;
stringFormat.LineAlignment = PdfVerticalAlignment.Middle;
stringFormat.CharacterSpacing = 2f;

// Apply to specific cell
grid.Rows[2].Cells[1].StringFormat = stringFormat;
```

## String formatting for a row

```csharp
PdfStringFormat stringFormat = new PdfStringFormat();
stringFormat.Alignment = PdfTextAlignment.Center;
stringFormat.LineAlignment = PdfVerticalAlignment.Middle;
stringFormat.CharacterSpacing = 2f;

// Apply to all cells in a row
for (int i = 0; i < grid.Columns.Count; i++)
{
    grid.Rows[2].Cells[i].StringFormat = stringFormat;
}
```

## Repeat header row on each page

```csharp
grid.RepeatHeader = true;
```

## Prevent row breaks across pages
```csharp
 pdfGrid.AllowRowBreakAcrossPages = false;
```

## Nested tables

```csharp
// Create parent grid
PdfGrid parentGrid = new PdfGrid();
parentGrid.Columns.Add(1);
PdfGridRow parentRow = parentGrid.Rows.Add();
// Create nested grid 
PdfGrid nestedGrid = new PdfGrid(); 
nestedGrid.Columns.Add(2); 
PdfGridRow nRow = nestedGrid.Rows.Add(); 
nRow.Cells[0].Value = "Inner 1"; 
nRow.Cells[1].Value = "Inner 2";
// Assign nested grid to a cell 
parentRow.Cells[0].Value = nestedGrid;
```

## Add background image to a cell

```csharp
PdfGridRow row = grid.Rows.Add();
row.Cells[0].Value = "Text over image";
// Set background image 
PdfBitmap image = new PdfBitmap(imageStream); 
row.Cells[0].Style.BackgroundImage = image; 
row.Cells[0].Style.BackgroundImageLayout = PdfGridBackgroundImageLayout.Stretch;
```

## Draw borderless (no‑line) table

```csharp
// Remove all borders
foreach (PdfGridRow row in grid.Rows) 
{ 
    foreach (PdfGridCell cell in row.Cells) 
    { 
        cell.Style.Borders.All = PdfPens.Transparent; 
    }
}
```

## Add hyperlinks inside table cells

```csharp
PdfGridRow row = grid.Rows.Add();
// Create a URL link 
PdfUriAnnotation link = new PdfUriAnnotation( new RectangleF(0, 0, 100, 20), "https://www.syncfusion.com");
row.Cells[0].Value = link;
```

## Table events

Use events to customize layout during rendering.

### BeginCellLayout event

The event raised on starting cell lay outing.

```csharp
grid.BeginCellLayout += new PdfGridBeginCellLayoutEventHandler(grid_BeginCellLayout);

//Cell layout event handler
void table_BeginCellLayout(object sender,PdfGridBeginCellLayoutEventArgs args)
{
    if (args.RowIndex == 1)
    {
        args.Graphics.DrawRectangle(new PdfPen(PdfBrushes.Red, 2), PdfBrushes.White,args.Bounds);
    }
}
```

### EndCellLayout event

The event raised on finished cell layout.

```csharp
// Subscribe the cell layout event 
grid.EndCellLayout += new PdfGridEndCellLayoutEventHandler(table_EndCellLayout);

// Cell layout event handler
oid table_EndCellLayout(object sender, PdfGridEndCellLayoutEventArgs args)
{
    if (args.RowIndex == 1)
    {
        args.Graphics.DrawRectangle(new PdfPen(PdfBrushes.Red, 2), PdfBrushes.White, args.Bounds);
    }
}
```
