# Data Import

Import data from lists and objects into worksheets.

---

> **Placeholders:**
> - `{sheet}` → Worksheet instance variable name
> - `{cell-range}` → Starting cell for import (e.g., `'A1'`)
> - `{data-list}` → Data list or collection variable
> - `{image-path}` → Path to image file (e.g., `'image.png'`)

---

## Importing List of Objects Vertically

Import a list vertically using `importList()`:

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

final List<Object> list = [
  'Total Income',
  20000,
  'On Date',
  DateTime(2021, 11, 11)
];

// Import vertically starting at row 1, column 1
sheet.importList(list, 1, 1, true);

sheet.autoFitColumn(1);

final List<int> bytes = workbook.saveSync();
File('ImportListVertical.xlsx').writeAsBytes(bytes);
workbook.dispose();
```

### Placeholders
- `list` → Replace with `'{data-list}'` (data list to import)
- `1, 1` → Replace with `'{start-row}'` and `'{start-column}'` (starting position)
- `'ImportListVertical.xlsx'` → Replace with `'{output-file}'` (output file name)

## Importing List of Objects Horizontally

Import a list horizontally:

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

final List<Object> list = [
  'Total Income',
  20000,
  'On Date',
  DateTime(2021, 11, 11)
];

// Import horizontally (isVertical = false)
sheet.importList(list, 1, 1, false);

sheet.getRangeByIndex(1, 1, 1, 4).autoFitColumns();

final List<int> bytes = workbook.saveSync();
File('ImportListHorizontal.xlsx').writeAsBytes(bytes);
workbook.dispose();
```

### Placeholders
- `list` → Replace with `'{data-list}'` (data list to import)
- `'ImportListHorizontal.xlsx'` → Replace with `'{output-file}'` (output file name)

## Importing Data from List<T>

Import typed data using `ExcelDataRow` and `ExcelDataCell`:

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

// Create data rows
final List<ExcelDataRow> dataRows = _buildDataRows();

// Import starting at row 1, column 1
sheet.importData(dataRows, 1, 1);

final List<int> bytes = workbook.saveSync();
File('ImportTypedData.xlsx').writeAsBytes(bytes);
workbook.dispose();
```

### Placeholders
- `dataRows` → Replace with `'{data-list}'` (list of ExcelDataRow objects)
- `'ImportTypedData.xlsx'` → Replace with `'{output-file}'` (output file name)

## Building Data Rows Example

```dart
List<ExcelDataRow> _buildDataRows() {
  final List<ExcelDataRow> excelDataRows = <ExcelDataRow>[];
  final List<_Report> reports = _getSalesReports();

  excelDataRows = reports.map<ExcelDataRow>((_Report dataRow) {
    return ExcelDataRow(cells: <ExcelDataCell>[
      ExcelDataCell(columnHeader: 'Sales Person', value: dataRow.salesPerson),
      ExcelDataCell(columnHeader: 'Sales Jan-June', value: dataRow.salesJanJune),
      ExcelDataCell(columnHeader: 'Sales Jul-Dec', value: dataRow.salesJulyDec),
    ]);
  }).toList();

  return excelDataRows;
}

List<_Report> _getSalesReports() {
  final List<_Report> reports = <_Report>[];
  reports.add(_Report('Andy Bernard', 45000, 58000));
  reports.add(_Report('Jim Halpert', 34000, 65000));
  reports.add(_Report('Karen Fillippelli', 75000, 64000));
  return reports;
}

class _Report {
  _Report(this.salesPerson, this.salesJanJune, this.salesJulyDec);
  late String salesPerson;
  late int salesJanJune;
  late int salesJulyDec;
}
```

### Placeholders
- `'Sales Person'`, `'Sales Jan-June'`, `'Sales Jul-Dec'` → Replace with column header names
- `'Andy Bernard'`, `45000`, `58000` → Replace with actual data values

## Importing Data with Hyperlinks

Include hyperlinks in imported data:

```dart
final List<ExcelDataRow> excelDataRows = <ExcelDataRow>[];
final List<_Customers> customers = _getCustomersWithHyperlinks();

excelDataRows = customers.map<ExcelDataRow>((_Customers dataRow) {
  return ExcelDataRow(cells: <ExcelDataCell>[
    ExcelDataCell(columnHeader: 'Name', value: dataRow.name),
    ExcelDataCell(columnHeader: 'Sales', value: dataRow.sales),
    ExcelDataCell(columnHeader: 'Website', value: dataRow.hyperlink),
  ]);
}).toList();

sheet.importData(excelDataRows, 1, 1);
```

### Placeholders
- `excelDataRows` → Replace with `'{data-list}'` (list of data rows with hyperlinks)
- `'Name'`, `'Sales'`, `'Website'` → Replace with column header names

## Importing Data with Images

Include images in imported data:

```dart
final List<ExcelDataRow> excelDataRows = <ExcelDataRow>[];
final List<_Customers> customers = _getCustomersWithImages();

excelDataRows = customers.map<ExcelDataRow>((_Customers dataRow) {
  return ExcelDataRow(cells: <ExcelDataCell>[
    ExcelDataCell(columnHeader: 'Name', value: dataRow.name),
    ExcelDataCell(columnHeader: 'Sales', value: dataRow.sales),
    ExcelDataCell(columnHeader: 'Photo', value: dataRow.image),
  ]);
}).toList();

sheet.importData(excelDataRows, 1, 1);
```

### Placeholders
- `excelDataRows` → Replace with `'{data-list}'` (list of data rows with images)
- `'Name'`, `'Sales'`, `'Photo'` → Replace with column header names

## Importing Data with Image Hyperlinks

Attach hyperlinks to images:

```dart
Picture pic = Picture(imageBytes);
pic.width = 200;
pic.height = 200;

// Attach hyperlink to image
final Hyperlink link = Hyperlink.add(
  'https://example.com',
  'Click Here',
  'Website',
  HyperlinkType.url
);
pic.hyperlink = link;

// Include in data row
ExcelDataCell(columnHeader: 'Images', value: pic)
```

### Placeholders
- `'https://example.com'` → Replace with `'{url-value}'` (hyperlink URL)
- `'Click Here'` → Replace with `'{display-text}'` (visible link text)
- `200` → Replace with `'{size-value}'` (image width/height in pixels)

## Data Type Support

Supported data types for `importList()`:
- String
- int, double
- DateTime
- bool
- Any object (converted to string)

## importList Parameters

```dart
sheet.importList(
  list,              // List<Object>: Data to import
  firstRow,          // int: Starting row (1-indexed)
  firstColumn,       // int: Starting column (1-indexed)
  isVertical         // bool: true = vertical, false = horizontal
);
```

### Placeholders
- `list` → Replace with `'{data-list}'` (data list to import)
- `firstRow`, `firstColumn` → Replace with `'{start-row}'`, `'{start-column}'` (starting position)

## importData Parameters

```dart
sheet.importData(
  dataRows,          // List<ExcelDataRow>: Typed data rows
  firstRow,          // int: Starting row (1-indexed)
  firstColumn        // int: Starting column (1-indexed)
);
```

### Placeholders
- `dataRows` → Replace with `'{data-list}'` (list of ExcelDataRow objects)
- `firstRow`, `firstColumn` → Replace with `'{start-row}'`, `'{start-column}'` (starting position)

## ExcelDataRow and ExcelDataCell

```dart
final ExcelDataRow row = ExcelDataRow(cells: <ExcelDataCell>[
  ExcelDataCell(columnHeader: 'Header1', value: 'Value1'),
  ExcelDataCell(columnHeader: 'Header2', value: 123),
  ExcelDataCell(columnHeader: 'Header3', value: DateTime.now()),
]);
```

### Placeholders
- `'Header1'`, `'Header2'`, `'Header3'` → Replace with column header names
- `'Value1'`, `123`, `DateTime.now()` → Replace with actual data values

## Notes

- Use `importList()` for simple untyped data (mixed types in list)
- Use `importData()` for strongly typed data with column headers
- Row and column indices are 1-based (not 0-based)
- Auto-fit columns after import to display all content: `sheet.autoFitColumn(columnIndex)`
- Images and hyperlinks can be embedded directly in data rows
- Column headers in ExcelDataCell become the first row in the worksheet
