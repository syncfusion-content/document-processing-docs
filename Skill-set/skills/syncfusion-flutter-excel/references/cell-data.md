# Cell Data

Add text, numbers, dates, and other data types to cells, plus create hyperlinks.

---

> **Placeholders:**
> - `{workbook}` → Variable name for Workbook instance (e.g., `workbook`)
> - `{sheet}` → Variable name for Worksheet instance (e.g., `sheet`)
> - `{cell-range}` → Cell range reference (e.g., `'A1'`, `'A1:B5'`)
> - `{text-value}` → Text content to add
> - `{number-value}` → Numeric value to add
> - `{date-value}` → DateTime value to add

---

## Quick Reference

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

sheet.getRangeByName('A1').setText('Product');
sheet.getRangeByName('A2').setText('Laptop');

sheet.getRangeByName('B1').setText('Price');
sheet.getRangeByName('B2').setNumber(999.99);

sheet.getRangeByName('C1').setText('Date');
sheet.getRangeByName('C2').setDateTime(DateTime(2024, 3, 24));
```

### Placeholders
- `'Product'`, `'Laptop'`, `'Price'`, `'Date'` → Replace with `'{text-value}'` (content)
- `999.99` → Replace with `'{number-value}'` (numeric value)
- `DateTime(2024, 3, 24)` → Replace with `'{date-value}'` (date/time value)

---

## Add Text

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

sheet.getRangeByName('A1').setText('Hello World');
```

### Placeholders
- `'A1'` → Replace with `'{cell-range}'` (target cell)
- `'Hello World'` → Replace with `'{text-value}'` (content to add)

---

## Add Number

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

sheet.getRangeByName('A1').setNumber(4444);
```

### Placeholders
- `'A1'` → Replace with `'{cell-range}'` (target cell)
- `4444` → Replace with `'{number-value}'` (numeric value)

---

## Add DateTime

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

sheet.getRangeByName('A1').setDateTime(DateTime(2020, 7, 7, 1, 0, 0));
```

### Placeholders
- `'A1'` → Replace with `'{cell-range}'` (target cell)
- `DateTime(2020, 7, 7, 1, 0, 0)` → Replace with `'{date-value}'` (date/time)

---

## Add Value (Generic)

Use `setValue()` for any data type - it accepts text, number, or date:

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

// setValue() accepts text, number, or date
sheet.getRangeByName('A1').setValue(44);
sheet.getRangeByName('A2').setValue('Text');
sheet.getRangeByName('A3').setValue(DateTime(2024, 1, 1));
```

### Placeholders
- `'A1'`, `'A2'`, `'A3'` → Replace with `'{cell-range}'` (target cells)
- `44` → Replace with `'{number-value}'` (numeric value)
- `'Text'` → Replace with `'{text-value}'` (text content)
- `DateTime(2024, 1, 1)` → Replace with `'{date-value}'` (date/time value)

---

## Hyperlinks

Add hyperlinks to cells with different types: web URLs, email, files, or internal workbook references.

### Web URL

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

final Hyperlink link = sheet.hyperlinks.add(
  sheet.getRangeByName('A1'),
  HyperlinkType.url,
  'http://www.syncfusion.com',
);
link.textToDisplay = 'Syncfusion';
```

### Placeholders
- `'A1'` → Replace with `'{cell-range}'` (target cell)
- `'http://www.syncfusion.com'` → Replace with `'{url}'` (web URL)
- `'Syncfusion'` → Replace with `'{display-text}'` (visible text)

### Email Address

```dart
final Hyperlink emailLink = sheet.hyperlinks.add(
  sheet.getRangeByName('A3'),
  HyperlinkType.url,
  'mailto:support@syncfusion.com',
);
emailLink.textToDisplay = 'Email Support';
```

### Placeholders
- `'A3'` → Replace with `'{cell-range}'` (target cell)
- `'mailto:support@syncfusion.com'` → Replace with `'mailto:{email-address}'` (email)
- `'Email Support'` → Replace with `'{display-text}'` (visible text)

### File Path

```dart
final Hyperlink fileLink = sheet.hyperlinks.add(
  sheet.getRangeByName('A5'),
  HyperlinkType.file,
  'C:\\Program files',
);
fileLink.textToDisplay = 'Open Files';
```

### Placeholders
- `'A5'` → Replace with `'{cell-range}'` (target cell)
- `'C:\\Program files'` → Replace with `'{file-path}'` (local file path)
- `'Open Files'` → Replace with `'{display-text}'` (visible text)

### Internal Workbook Reference

Link to another cell or range within the workbook:

```dart
final Hyperlink workbookLink = sheet.hyperlinks.add(
  sheet.getRangeByName('A7'),
  HyperlinkType.workbook,
  'Sheet1!A15',
);
workbookLink.textToDisplay = 'Go to Sheet1';
```

### Placeholders
- `'A7'` → Replace with `'{cell-range}'` (target cell)
- `'Sheet1!A15'` → Replace with `'{sheet-name}!{target-cell}'` (workbook reference)
- `'Go to Sheet1'` → Replace with `'{display-text}'` (visible text)

---

## Complete Example

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

// Add headers
sheet.getRangeByName('A1').setText('Name');
sheet.getRangeByName('B1').setText('Price');
sheet.getRangeByName('C1').setText('Date');
sheet.getRangeByName('D1').setText('Website');

// Add data row 1
sheet.getRangeByName('A2').setText('Laptop');
sheet.getRangeByName('B2').setNumber(999.99);
sheet.getRangeByName('C2').setDateTime(DateTime(2024, 3, 24));

// Add hyperlink in D2
final Hyperlink link = sheet.hyperlinks.add(
  sheet.getRangeByName('D2'),
  HyperlinkType.url,
  'http://www.example.com',
);
link.textToDisplay = 'Product Link';

// Add data row 2
sheet.getRangeByName('A3').setText('Monitor');
sheet.getRangeByName('B3').setNumber(299.50);
sheet.getRangeByName('C3').setDateTime(DateTime(2024, 2, 15));

final List<int> bytes = workbook.saveSync();
workbook.dispose();
File('output.xlsx').writeAsBytes(bytes);
```

### Placeholders
- `'Name'`, `'Price'`, `'Date'`, `'Website'` → Replace with `'{header-name}'` (column header names)
- `'Laptop'`, `'Monitor'` → Replace with `'{text-value}'` (product name)
- `999.99`, `299.50` → Replace with `'{number-value}'` (product price)
- `DateTime(2024, 3, 24)`, `DateTime(2024, 2, 15)` → Replace with `'{date-value}'` (date values)
- `'D2'` → Replace with `'{cell-range}'` (cell reference)
- `'Product Link'` → Replace with `'{display-text}'` (link text)
- `'http://www.example.com'` → Replace with `'{url}'` (product URL)
- `'output.xlsx'` → Replace with `'{output-file}'` (output file name)

---

## Notes

- Use `getRangeByName()` to access cells by name (e.g., 'A1', 'B2:C5')
- `setText()` for text, `setNumber()` for numbers, `setDateTime()` for dates
- `setValue()` is generic but `setText()`, `setNumber()`, `setDateTime()` are more explicit
- Hyperlinks are interactive - users can click them in Excel
- Email hyperlinks use `mailto:` prefix with `HyperlinkType.url`
- Internal workbook links use sheet name and cell reference: `'SheetName!CellRange'`
- `textToDisplay` allows custom label for hyperlink (different from URL)
