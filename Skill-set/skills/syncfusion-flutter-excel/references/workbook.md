# Workbook

Create, save, and configure Excel workbooks with advanced features.

---

> **Placeholders:**
> - `{workbook}` → Variable name for Workbook instance (e.g., `workbook`)
> - `{sheet}` → Variable name for Worksheet instance (e.g., `sheet`)
> - `{output-file}` → Output file path and name (e.g., `'Output.xlsx'`)
> - `{worksheet-count}` → Number of worksheets to create (e.g., `3`, `5`)
> - `{sheet-name}` → Name of worksheet (e.g., `'Sales'`, `'Data'`)

---

## Creating a Workbook

```dart
// Create a new workbook with default single worksheet
final Workbook workbook = Workbook();

// Create workbook with multiple worksheets
final Workbook workbookWithThree = Workbook(3);

// Access first sheet
final Worksheet sheet = workbook.worksheets[0];
```

### Placeholders
- `3` → Replace with `'{worksheet-count}'` (number of worksheets to create)

---

## Saving a Workbook

### Synchronous Save

```dart
// Creates a new instance for workbook.
final Workbook workbook = Workbook();

// Add data...
sheet.getRangeByName('A1').setText('Hello');

// Save the workbook in file system as XLSX format (synchronous).
final List<int> bytes = workbook.saveSync();
workbook.dispose();
File('Output.xlsx').writeAsBytes(bytes);
```

### Placeholders
- `'A1'` → Replace with `'{cell-range}'` (target cell)
- `'Hello'` → Replace with `'{content}'` (data to add)
- `'Output.xlsx'` → Replace with `'{output-file}'` (file path and name)

### Asynchronous Save

```dart
// Creates a new instance for workbook.
final Workbook workbook = Workbook();

// Add data...
sheet.getRangeByName('A1').setText('Hello');

// Save the workbook asynchronously.
final List<int> bytes = await workbook.save();
workbook.dispose();
File('Output.xlsx').writeAsBytes(bytes);
```

### Placeholders
- `'A1'` → Replace with `'{cell-range}'` (target cell)
- `'Hello'` → Replace with `'{content}'` (data to add)
- `'Output.xlsx'` → Replace with `'{output-file}'` (file path and name)

---

## Disposing a Workbook

Always call `dispose()` after saving to release XlsIO DOM memory:

```dart
final Workbook workbook = Workbook();
final List<int> bytes = workbook.saveSync();
workbook.dispose();  // Release native resources
File('Output.xlsx').writeAsBytes(bytes);
```

### Placeholders
- `'Output.xlsx'` → Replace with `'{output-file}'` (file path and name)

**Important:** Not calling `dispose()` can cause memory leaks in long-running applications.

---

## Right to Left Direction

Set worksheet or entire workbook to right-to-left direction for RTL languages.

### Single Worksheet RTL

```dart
final Workbook workbook = Workbook(1);
final Worksheet sheet = workbook.worksheets[0];

// Display worksheet in right-to-left direction
sheet.isRightToLeft = true;
sheet.getRangeByName('A1').setText('Hello World');
```

### Placeholders
- `'A1'` → Replace with `'{cell-range}'` (target cell)
- `'Hello World'` → Replace with `'{text-value}'` (text content)

### Entire Workbook RTL

```dart
final Workbook workbook = Workbook(2);

// Display entire workbook in right-to-left direction
workbook.isRightToLeft = true;
```

### Placeholders
- `2` → Replace with `'{worksheet-count}'` (number of worksheets)

---

## Save as CSV

Export worksheet data to CSV format with custom separator.

```dart
final Workbook workbook = Workbook();
final Worksheet worksheet = workbook.worksheets[0];

worksheet.getRangeByName('A1').setText('Date');
worksheet.getRangeByName('B1').setText('Amount');
worksheet.getRangeByName('A2').setDateTime(DateTime(2024, 3, 24));
worksheet.getRangeByName('B2').setNumber(1000);

// Save as CSV with comma separator
final List<int> bytes = workbook.saveAsCSV(',');
File('Output.csv').writeAsBytes(bytes);
```

### Placeholders
- `','` → Replace with `'{separator}'` (CSV separator character)
- `'Output.csv'` → Replace with `'{output-file}'` (output file name)

**Common separators:**
- `,` (comma) - CSV format
- `;` (semicolon) - European CSV
- `\t` (tab) - TSV format

---

## Notes

- Always call `workbook.dispose()` after `save()` or `saveSync()` to free memory
- Use `saveSync()` for simple scripts, `await save()` for Flutter UI threads
- CSV export saves the first worksheet only
- RTL layout affects cell alignment, text direction, and sheet tab appearance
- Multiple workbooks can be created and managed independently
