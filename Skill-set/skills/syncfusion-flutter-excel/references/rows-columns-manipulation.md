# Rows and Columns Manipulation

<!-- [PLACEHOLDER: Insert, delete, auto-fit, show/hide rows and columns, plus sizing (columnWidth, rowHeight)] -->

---

## Insert Rows and Columns

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

sheet.getRangeByName('A1').setText('Hello');
sheet.getRangeByName('B1').setText('World');

// Insert a row at index 1
sheet.insertRow(1, 1, ExcelInsertOptions.formatAsAfter);

// Insert a column at index 2
sheet.insertColumn(2, 1, ExcelInsertOptions.formatAsBefore);
```

### Placeholders
- `'A1'`, `'B1'` → Replace with `'{cell-range}'` (cell reference)
- `'Hello'`, `'World'` → Replace with `'{text-value}'` (text content)
- `1` → Replace with `'{row-index}'` or `'{column-index}'` (index position)
- `ExcelInsertOptions.formatAsAfter`, `ExcelInsertOptions.formatAsBefore` → Replace with format option

## Delete Rows and Columns

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

sheet.getRangeByName('A2').setText('Hello');
sheet.getRangeByName('C2').setText('World');

// Delete row at index 1
sheet.deleteRow(1, 1);

// Delete column at index 2
sheet.deleteColumn(2, 1);
```

### Placeholders
- `'A2'`, `'C2'` → Replace with `'{cell-range}'` (cell reference)
- `'Hello'`, `'World'` → Replace with `'{text-value}'` (text content)
- `1`, `2` → Replace with `'{row-index}'` or `'{column-index}'` (index position)

## Auto-Fit Single Row or Column

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

final Range range1 = sheet.getRangeByName('A1');
range1.setText('WrapTextWrapTextWrapTextWrapText');
range1.cellStyle.wrapText = true;

// Auto-fit single row
sheet.autoFitRow(1);

// Auto-fit single column
sheet.autoFitColumn(1);
```

### Placeholders
- `'A1'` → Replace with `'{cell-range}'` (cell reference)
- `'WrapTextWrapTextWrapTextWrapText'` → Replace with `'{text-value}'` (text content)
- `1` → Replace with `'{row-index}'` or `'{column-index}'` (index position)

## Auto-Fit Multiple Rows or Columns

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

final Range range = sheet.getRangeByName('A1:A4');
range.setText('This is Long Text');
range.cellStyle.wrapText = true;

// Auto-fit multiple rows
range.autoFitRows();

// Auto-fit multiple columns
final Range rangeCol = sheet.getRangeByName('A1:D1');
rangeCol.setText('This is Long Text');
rangeCol.autoFitColumns();
```

### Placeholders
- `'A1:A4'`, `'A1:D1'` → Replace with `'{cell-range}'` (cell range)
- `'This is Long Text'` → Replace with `'{text-value}'` (text content)

## Show or Hide Rows and Columns

```dart
final Workbook workbook = Workbook(1);
final Worksheet sheet = workbook.worksheets[0];

// Hide rows
sheet.getRangeByName('A1').showRows(false);
sheet.getRangeByName('A2:A5').showRows(false);

// Hide columns
sheet.getRangeByName('C10').showColumns(false);
sheet.getRangeByName('D10:E10').showColumns(false);
```

### Placeholders
- `'{cell-range}'` - Cell or range reference
- `true/false` - Show (true) or hide (false)

## Show or Hide Specific Range

```dart
final Workbook workbook = Workbook(1);
final Worksheet sheet = workbook.worksheets[0];

// Hide range
sheet.getRangeByName('G15').showRange(false);
sheet.getRangeByName('J22:J25').showRange(false);

// Show range (default is true)
sheet.getRangeByName('A1').showRange(true);
```

### Placeholders
- `'{cell-range}'` - Cell or range reference
- `true/false` - Show (true) or hide (false)

## Set Column Width and Row Height

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

// Adjust column width
sheet.getRangeByName('A1:A5').columnWidth = 20;

// Adjust row height
sheet.getRangeByName('A1').rowHeight = 30;
```

### Placeholders
- `'{cell-range}'` - Cell or range reference
- `{width-value}`, `{height-value}` - Width/height dimensions

## Apply Number Format

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

// Set number value
sheet.getRangeByName('B2').setNumber(1234.56);

// Apply currency format
sheet.getRangeByName('B2').numberFormat = r"'$'#,##0.00";
```

### Placeholders
- `'B2'` → Replace with `'{cell-range}'` (cell reference)
- `1234.56` → Replace with `'{number-value}'` (number to format)
- `r"'$'#,##0.00"` → Replace with `'{number-format}'` (format code string)

---

Use `insertRow/insertColumn` with `ExcelInsertOptions` enum. Use `autoFitRow/autoFitColumn` for single items, `autoFitRows/autoFitColumns` for ranges.
Control visibility with `showRows()`, `showColumns()`, and `showRange()` methods (true = show, false = hide).
Set sizing with `columnWidth` and `rowHeight` properties. Apply number formats via `numberFormat` property — see `number-formats.md` for format codes.

