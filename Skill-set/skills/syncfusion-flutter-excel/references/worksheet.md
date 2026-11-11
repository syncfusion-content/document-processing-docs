# Worksheet

Access, create, and configure Excel worksheets with formatting and layout options.

---

> **Placeholders:**
> - `{workbook}` → Workbook instance variable name
> - `{sheet}` → Worksheet instance variable name
> - `{sheet-index}` → Worksheet index (0-based, e.g., `0`, `1`, `2`)
> - `{sheet-name}` → Name of worksheet (e.g., `'Sales'`)
> - `{color-value}` → Color value in hex format (e.g., `'#FF0000'`)
> - `{cell-range}` → Cell range reference (e.g., `'A1:B5'`)

---

## Accessing Worksheets

```dart
final Workbook workbook = Workbook(3); // workbook with 3 sheets

// Access sheets by index
final Worksheet sheet1 = workbook.worksheets[0];
final Worksheet sheet2 = workbook.worksheets[1];

// Set a cell on the second sheet
sheet2.getRangeByName('A1').setText('Sheet 2 Data');
```

### Placeholders
- `3` → Replace with `'{worksheet-count}'` (number of worksheets)
- `'A1'` → Replace with `'{cell-range}'` (target cell)
- `'Sheet 2 Data'` → Replace with `'{text-value}'` (content)

---

## Accessing Worksheet Details

Retrieve and modify worksheet properties:

```dart
final Workbook workbook = Workbook(2);
final Worksheet sheet = workbook.worksheets[0];

// Get worksheet name
String sheetName = sheet.name;

// Get row and column count
int rowCount = sheet.rows.length;
int columnCount = sheet.columns.length;

// Check visibility
WorksheetVisibility visibility = sheet.visibility;
```

### Placeholders
- `2` → Replace with `'{worksheet-count}'` (number of worksheets)
- `0` → Replace with `'{sheet-index}'` (worksheet index, 0-based)

## Creating and Accessing Worksheets

### Create Named Worksheet

```dart
// Create workbook with 4 worksheets
final Workbook workbook = Workbook(4);

// Create worksheet with name
final Worksheet sheet1 = workbook.worksheets.addWithName('Sample');

// Add unnamed worksheet
final Worksheet sheet2 = workbook.worksheets.add();

// Access by index
final Worksheet sheet = workbook.worksheets[0];

// Access by name
final Worksheet namedSheet = workbook.worksheets['Sample'];
```

### Placeholders
- `4` → Replace with `'{worksheet-count}'` (number of worksheets)
- `'Sample'` → Replace with `'{sheet-name}'` (worksheet name)

---

## Tab Color

Set the color of the worksheet tab at the bottom:

```dart
final Worksheet sheet = workbook.worksheets[0];
sheet.tabColor = '#0000FF';  // Blue tab
```

### Placeholders
- `'#0000FF'` → Replace with `'{color-value}'` (hex color code)

**Common colors:**
- `#FF0000` - Red
- `#00FF00` - Green
- `#0000FF` - Blue
- `#FFFF00` - Yellow
- `#FF00FF` - Magenta

---

## Tab Color Examples

Apply different colors to multiple worksheet tabs:

```dart
final Workbook workbook = Workbook(3);

final Worksheet sheet1 = workbook.worksheets[0];
sheet1.tabColor = '#FF0000';  // Red tab

final Worksheet sheet2 = workbook.worksheets[1];
sheet2.tabColor = '#00FF00';  // Green tab

final Worksheet sheet3 = workbook.worksheets[2];
sheet3.tabColor = '#0000FF';  // Blue tab
```

### Placeholders
- `3` → Replace with `'{worksheet-count}'` (number of worksheets)
- `'#FF0000'`, `'#00FF00'`, `'#0000FF'` → Replace with `'{color-value}'` (hex color codes)

## View Settings

Control gridlines and worksheet visibility.

### Hide Grid Lines

```dart
final Worksheet sheet = workbook.worksheets[0];

// Hide grid lines
sheet.showGridlines = false;
```

### Placeholders
- `0` → Replace with `'{sheet-index}'` (worksheet index)

### Set Worksheet Visibility

```dart
final Worksheet sheet = workbook.worksheets[0];

// Set visibility
sheet.visibility = WorksheetVisibility.hidden;
sheet.visibility = WorksheetVisibility.visible;
sheet.visibility = WorksheetVisibility.veryHidden;
```

**Visibility options:**
- `WorksheetVisibility.visible` - Normal view
### Placeholders
- `0` → Replace with `'{sheet-index}'` (worksheet index)
- `WorksheetVisibility.hidden`, `WorksheetVisibility.visible`, `WorksheetVisibility.veryHidden` → Replace with visibility constant

---

## Visibility Configuration

Configure visibility for multiple worksheets:

```dart
final Workbook workbook = Workbook(4);

final Worksheet sheet1 = workbook.worksheets[0];
sheet1.visibility = WorksheetVisibility.visible;

final Worksheet sheet2 = workbook.worksheets[1];
sheet2.visibility = WorksheetVisibility.hidden;

final Worksheet sheet3 = workbook.worksheets[2];
sheet3.visibility = WorksheetVisibility.veryHidden;

final Worksheet sheet4 = workbook.worksheets[3];
sheet4.visibility = WorksheetVisibility.visible;
```

### Placeholders
- `4Sizing Methods

Apply sizing using dedicated worksheet methods:

```dart
final Worksheet sheet = workbook.worksheets[0];

// Set row height in pixels by index
sheet.setRowHeightInPixels(1, 25);

// Set column width in pixels by index
sheet.setColumnWidthInPixels(1, 20);

// Get row height
double rowHeight = sheet.getRowHeight(1);

// Get column width
double colWidth = sheet.getColumnWidth(1);
```

### Placeholders
- `1` → Replace with `'{index-value}'` (row or column index, 1-based)
- `25`, `20` → Replace with `'{size-value}'` (height or width in pixels)

### ` → Replace with `'{worksheet-count}'` (number of worksheets)
- `0`, `1`, `2`, `3` → Replace with `'{sheet-index}'` (worksheet indices)
- `WorksheetVisibility.visible`, `WorksheetVisibility.hidden`, `WorksheetVisibility.veryHidden` → Replace with visibility constants

- `WorksheetVisibility.hidden` - User can unhide
- `WorksheetVisibility.veryHidden` - Cannot be unhidden from UI

---

## Row and Column Sizing

Set custom heights and widths for rows and columns.

### Via Range

```dart
final Worksheet sheet = workbook.worksheets[0];

// Set row height
sheet.getRangeByName('A1').rowHeight = 10;

// Set column width
sheet.getRangeByName('A2:A5').columnWidth = 30;
```

### Placeholders
- `'A1'` → Replace with `'{cell-range}'` (target cell)
- `10` → Replace with `'{height-value}'` (row height in pixels)
- `'A2:A5'` → Replace with `'{cell-range}'` (range of cells)
- `30` → Replace with `'{width-value}'` (column width in pixels)

### Via Worksheet Methods

```dart
final Worksheet sheet = workbook.worksheets[0];

// Set row height in pixels
sheet.setRowHeightInPixels(2, 30);

// Set column width in pixels
sheet.setColumnWidthInPixels(2, 20);
```

### Placeholders
- `2` → Replace with `'{row-index}'` (row index, 1-based)
- `30` → Replace with `'{height-value}'` (row height in pixels)
- `2` → Replace with `'{column-index}'` (column index, 1-based)
- `20` → Replace with `'{width-value}'` (column width in pixels)

---

## Freeze and Unfreeze Panes

Keep rows or columns visible when scrolling.

---

## Freeze Options

Multiple freeze scenarios for different layouts:

```dart
final Worksheet worksheet = workbook.worksheets[0];

// Freeze only header row (common for data tables)
worksheet.getRangeByName('A2').freezePanes();

// Freeze header row and first column (common for matrix data)
worksheet.getRangeByName('B2').freezePanes();

// Freeze multiple rows
worksheet.getRangeByName('A4').freezePanes();

// Unfreeze when no longer needed
worksheet.unfreezePanes();
```

### Placeholders
- `'A2'`, `'B2'`, `'A4'` → Replace with `'{freeze-cell}'` (freeze position)

### Freeze at Specific Cell

```dart
final Worksheet worksheet = workbook.worksheets[0];

// Freeze panes at A2 (freezes row 1 and column A)
worksheet.getRangeByName('A2').freezePanes();
```

### Placeholders
- `'A2'` → Replace with `'{freeze-cell}'` (freeze position)

### Unfreeze Panes

```dart
final Worksheet worksheet = workbook.worksheets[0];

// Unfreeze panes
worksheet.unfreezePanes();
```

### Placeholders
- No replacements needed (uses worksheet instance)

**How it works:**
- Freezing at A2 locks all rows above and columns to the left
- Freezing at B5 would lock rows 1-4 and column A
- Common use: Freeze header row (A2) or header row + column (B2)

---

## Page Setup

Configure print settings for the worksheet.

### Basic Setup

```dart
final Worksheet sheet = workbook.worksheets[0];

// Centering
sheet.pageSetup.isCenterHorizontally = true;
sheet.pageSetup.isCenterVertically = true;

// Orientation
sheet.pageSetup.orientation = ExcelPageOrientation.landscape;

// Margins
sheet.pageSetup.topMargin = 1;
sheet.pageSetup.leftMargin = 2;
sheet.pageSetup.rightMargin = 1.25;
sheet.pageSetup.bottomMargin = 1;
```

### Placeholders
- `ExcelPageOrientation.landscape` → Replace with orientation constant
- `1`, `2`, `1.25` → Replace with `'{margin-value}'` (margin in inches)

### Paper Size

```dart
final Worksheet sheet = workbook.worksheets[0];

// Paper size
sheet.pageSetup.paperSize = ExcelPaperSize.a2Paper;

// Other sizes: a1Paper, a3Paper, a4Paper, a5Paper, paperLetter, paperLegal, etc.
```

### Placeholders
- `ExcelPaperSize.a2Paper` → Replace with `'{paper-size}'` (paper size constant)

### Print Area and Titles

```dart
final Worksheet sheet = workbook.worksheets[0];

// Print area
sheet.pageSetup.printArea = 'A1:D20';

// Print settings
sheet.pageSetup.showGridlines = true;
sheet.pageSetup.showHeadings = true;
```

### Placeholders
- `'A1:D20'` → Replace with `'{cell-range}'` (print area range)

---

## Notes

- Each worksheet can have independent tab colors, sizing, and print settings
- Freezing is useful for keeping headers visible when scrolling
- Tab color affects only the sheet tab appearance, not the data
- Very hidden worksheets cannot be unhidden from Excel UI (require VBA or code)
- Margins are in inches (convert from cm if needed)
- Multiple worksheets are independent; changes to one don't affect others
