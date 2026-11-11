# Tables

> All table operations — creating tables, adding rows and columns, cell formatting, and merging cells.

---
## Required common usings

```java
import com.syncfusion.docio.*;
```

## Create Table

### Minimal Code
```java
WTable table = section.addTable();
table.resetCells(3, 3); // 3 rows, 3 columns
```

### With Content
```java
WTable table = section.addTable();
table.resetCells(3, 3);

// Set header row
table.getRows().get(0).getCells().get(0).addParagraph().appendText("Column 1");
table.getRows().get(0).getCells().get(1).addParagraph().appendText("Column 2");
table.getRows().get(0).getCells().get(2).addParagraph().appendText("Column 3");

// Set data rows
table.getRows().get(1).getCells().get(0).addParagraph().appendText("Row 1, Cell 1");
table.getRows().get(1).getCells().get(1).addParagraph().appendText("Row 1, Cell 2");
table.getRows().get(1).getCells().get(2).addParagraph().appendText("Row 1, Cell 3");

table.getRows().get(2).getCells().get(0).addParagraph().appendText("Row 2, Cell 1");
table.getRows().get(2).getCells().get(1).addParagraph().appendText("Row 2, Cell 2");
table.getRows().get(2).getCells().get(2).addParagraph().appendText("Row 2, Cell 3");
```

### Dynamic Table from Data
```java
String[] headers = new String[] { "Name", "Age", "City" };
String[][] rows = new String[][] {
    new String[] { "Alice", "30", "New York" },
    new String[] { "Bob", "25", "London" },
    new String[] { "Charlie", "35", "Tokyo" }
};

WTable table = section.addTable();
table.resetCells(rows.length + 1, headers.length);

// Header row
for (int i = 0; i < headers.length; i++) {
    table.getRows().get(0).getCells().get(i).addParagraph().appendText(headers[i]);
}

// Data rows
for (int r = 0; r < rows.length; r++) {
    for (int c = 0; c < headers.length; c++) {
        table.getRows().get(r + 1).getCells().get(c).addParagraph().appendText(rows[r][c]);
    }
}
```

### Placeholders
- `3, 3` → Replace with `{row-count}, {column-count}`

---

## Apply Table Style

### Built-in style
```java
WTable table = section.addTable();
table.resetCells(3, 3);
// Apply built-in table style
table.applyStyle(BuiltinTableStyle.LightShading);
// Style options
table.setApplyStyleForHeaderRow(false);
table.setApplyStyleForFirstColumn(false);
table.setApplyStyleForLastColumn(true);
table.setApplyStyleForLastRow(true);
table.setApplyStyleForBandedRows(false);
table.setApplyStyleForBandedColumns(true);
```

### Custom style

### Common code for Cross-Platform and Windows-Specific
```java
WTable table = section.addTable();
table.resetCells(4, 4);
// Create style
WTableStyle tableStyle = (WTableStyle) document.addTableStyle("CustomStyle");
// Whole table formatting
tableStyle.getTableProperties().setRowStripe(1);
tableStyle.getTableProperties().setColumnStripe(1);
tableStyle.getTableProperties().getPaddings().setTop(0);
tableStyle.getTableProperties().getPaddings().setBottom(0);
tableStyle.getTableProperties().getPaddings().setLeft(5.4f);
tableStyle.getTableProperties().getPaddings().setRight(5.4f);
// First row style
ConditionalFormattingStyle firstRowStyle =
    tableStyle.getConditionalFormattingStyles()
              .add(ConditionalFormattingType.FirstRow);
firstRowStyle.getCharacterFormat().setBold(true);

firstRowStyle.getCharacterFormat()
    .setTextColor(ColorSupport.fromArgb(255, 255, 255, 255));
firstRowStyle.getCellProperties()
    .setBackColor(ColorSupport.fromName("Blue"));

// First column style
ConditionalFormattingStyle firstColumnStyle =
    tableStyle.getConditionalFormattingStyles()
              .add(ConditionalFormattingType.FirstColumn);
firstColumnStyle.getCharacterFormat().setBold(true);
// Apply style
table.applyStyle("CustomStyle");
```

---

## Access Table, Row, Cell Properties

```java
// Access table
WTable table = (WTable) section.getTables().get(0);
// Table properties
table.setIndentFromLeft(36f);
table.setTitle("Sample Table Title");
table.setDescription("This table contains sample data");
String styleName = table.getStyleName();
float tableWidth = table.getWidth(); // in points

WTableRow row = table.getRows().get(0);
row.setHeight(20f); // Row height (points)
row.setHeightType(TableRowHeightType.AtLeast); // Auto, AtLeast, Exactly
row.setHeader(true); // Repeat row as header in each page

//Access RowFormat
RowFormat rowFormat = row.getRowFormat();
//Bidirectional (RTL support)
rowFormat.setBidi(true);
//Borders
rowFormat.getBorders().setBorderType(BorderStyle.Single);
rowFormat.getBorders().setLineWidth(1f);
//Cell spacing
rowFormat.setCellSpacing(2f);
//Horizontal alignment
rowFormat.setHorizontalAlignment(RowAlignment.Center); // Left, Center, Right
//Auto resize
rowFormat.setAutoResized(true);
//Left indent
rowFormat.setLeftIndent(36f);
//Padding
rowFormat.getPaddings().setAll(5f);
//Wrap text around table row
rowFormat.setWrapTextAround(true);
// Background color
rowFormat.setBackColor(ColorSupport.fromName("LightGray"));

WTableCell cell = row.getCells().get(0);
int gridSpan = cell.getGridSpan(); // Merge across columns

//Access CellFormat
CellFormat cellFormat = cell.getCellFormat();
//Borders
cellFormat.getBorders().setBorderType(BorderStyle.Single);
cellFormat.getBorders().setLineWidth(2f);

//Fit text inside cell
cellFormat.setFitText(true);
//Horizontal merge
cellFormat.setHorizontalMerge(CellMerge.Start)  // Start, Continue, None
//Vertical merge
cellFormat.setVerticalMerge(CellMerge.Start);  // Start, Continue, None
//Padding
cellFormat.getPaddings().setAll(5f);
//Use table padding
cellFormat.setSamePaddingsAsTable(false);
//Text direction
cellFormat.setTextDirection(TextDirection.VerticalTopToBottom);
//Text wrapping
cellFormat.setTextWrap(false);
```

---

## Resize table

```java
WTable table = (WTable) section.getTables().get(0);
table.autoFit(AutoFitType.FitToContent);

```

### Placeholders
- `AutoFitType.FitToContent` → Use `FitToContent`, `FitToWindow`, `FixedColumnWidth` 

---

### Find and Replace Content within Table

#### Find first occurrence using Regex
```java
import java.util.regex.Pattern;

WTable table = (WTable) section.getTables().get(0);
TextSelection sel = table.find(Pattern.compile("{pattern}"));

```

#### Replace all occurrences (Regex → string)
```java
table.replace(Pattern.compile("{pattern}"), "{replace-text}");
```

---

## Cell Formatting

### Borders

```java
table.getTableFormat().getBorders().setBorderType(BorderStyle.Single);
table.getTableFormat().getBorders().setLineWidth(1f);
table.getTableFormat().getBorders().setColor(ColorSupport.fromName("Blue"));
```
### Cell Shading

```java
for (int i = 0; i < table.getRows().get(0).getCells().getCount(); i++) {
    table.getRows().get(0).getCells().get(i).getCellFormat().setBackColor(ColorSupport.fromName("Blue"));
}	
```

### Cell Padding

```java
table.getTableFormat().getPaddings().setAll(5f);
```

### Cell Alignment

```java
WParagraph para = (WParagraph) table.getRows().get(0).getCells().get(0).addParagraph();
para.appendText("Centered text");
para.getParagraphFormat().setHorizontalAlignment(HorizontalAlignment.Center);
table.getRows().get(0).getCells().get(0).getCellFormat().setVerticalAlignment(VerticalAlignment.Middle);
```

### Cell Width

```java
table.getRows().get(0).getCells().get(0).setWidth(150f);
```

---

## Merge Cells

### Horizontal Merge

```java
table.applyHorizontalMerge(0, 0, 2);
```

### Vertical Merge

```java
table.applyVerticalMerge(0,0,2);
```

---

## Add Rows & Columns

### Add Row

```java
WTableRow row = table.addRow();
row.getCells().get(0).addParagraph().appendText("New cell 1");
row.getCells().get(1).addParagraph().appendText("New cell 2");
```

### Add Row with Formatting Options

```java
WTable row = table.addRow(true, false);
```

#### Placeholders
- `true` (isCopyFormat) → `true` to copy formatting from the previous row; otherwise `false`
- `false` (autoPopulateCells) → `true` to automatically populate cells based on previous row; otherwise `false`

### Add Cell
```java
WTableCell cell = row.addCell();
```

### Add Cell by Copying Previous Cell Format
```java
WTableCell cell = row.addCell(true);
```

---

## Nested Tables

### Minimal Code

```java
WTable nestedTable = table.getRows().get(1).getCells().get(0).addTable();
nestedTable.resetCells(2, 2);
nestedTable.getRows().get(0).getCells().get(0).addParagraph().appendText("Nested 1");
nestedTable.getRows().get(0).getCells().get(1).addParagraph().appendText("Nested 2");
nestedTable.getRows().get(1).getCells().get(0).addParagraph().appendText("Nested 3");
nestedTable.getRows().get(1).getCells().get(1).addParagraph().appendText("Nested 4");
```

---

## Collection Operations (Add, Insert, Remove)

### Table Collection

#### Remove Table

```java
WTable table = (WTable) section.getTables().get(0);
// Remove by instance
section.getTables().remove(table);
// Remove by index
section.getTables().removeAt(0);
```

### Row Collection

#### Add Row

```java
WTable table = (WTable) section.getTables().get(0);
WTableRow newRow = new WTableRow(doc, table);
table.getRows().add(newRow);
```

#### Insert Row

```java
WTable table = (WTable) section.getTables().get(0);
WTableRow newRow = new WTableRow(doc, table);
// Insert at index
table.getRows().insert(1, newRow);
```

#### Remove Row

```java
WTable table = (WTable) section.getTables().get(0);
WTableRow row = table.getRows().get(0);
// Remove by instance
table.getRows().remove(row);
// Remove by index
table.getRows().removeAt(0);
```

### Cell Collection

#### Add Cell

```java
WTable table = (WTable) section.getTables().get(0);
WTableRow row = table.getRows().get(0);
WTableCell newCell = new WTableCell(doc);
row.getCells().add(newCell);
```

#### Insert Cell

```java
WTable table = (WTable) section.getTables().get(0);
WTableRow row = table.getRows().get(0);
WTableCell newCell = new WTableCell(doc);
// Insert at index
row.getCells().insert(1, newCell);
```

#### Remove Cell

```java
WTable table = (WTable) section.getTables().get(0);
WTableRow row = table.getRows().get(0);
WTableCell cell = row.getCells().get(0);
// Remove by instance
row.getCells().remove(cell);
// Remove by index
row.getCells().removeAt(0);
```

---

## Styled Table (Complete Example)

### Full Example

#### Common Setup
```java
WTable table = (WTable) section.addTable();
table.resetCells(4, 3);

table.getTableFormat().getBorders().setBorderType(BorderStyle.Single);
table.getTableFormat().getBorders().setLineWidth(0.5f);
table.getTableFormat().getPaddings().setAll(5f);

String[] headerTexts = new String[] { "Product", "Quantity", "Price" };
for (int i = 0; i < headerTexts.length; i++) {
    table.getRows().get(0).getCells().get(i).getCellFormat().setBackColor(ColorSupport.fromName("Blue"));

    WParagraph headerPara = (WParagraph) table.getRows().get(0).getCells().get(i).addParagraph();
    WTextRange headerText = (WTextRange) headerPara.appendText(headerTexts[i]);
    headerText.getCharacterFormat().setBold(true);
    headerText.getCharacterFormat().setTextColor(ColorSupport.fromName("White"));
}

String[][] data = new String[][] {
    new String[] { "Widget A", "100", "$5.00" },
    new String[] { "Widget B", "250", "$3.50" },
    new String[] { "Widget C", "75", "$12.00" }
};

for (int r = 0; r < data.length; r++) {
    // alternate row shading (applies to the row added at index r+1)
    if (r % 2 == 1) {
        for (int c = 0; c < data[r].length; c++) {
            table.getRows().get(r + 1).getCells().get(c).getCellFormat()
                    .setBackColor(ColorSupport.fromName("Yellow"));
        }
    }

    for (int c = 0; c < data[r].length; c++) {
        table.getRows().get(r + 1).getCells().get(c).addParagraph().appendText(data[r][c]);
    }
}
```
