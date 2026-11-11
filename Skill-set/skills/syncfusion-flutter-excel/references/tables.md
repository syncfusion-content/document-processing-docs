# Tables

<!-- [PLACEHOLDER: Create and manage Excel tables for data organization with built-in themes] -->

## Creating a Simple Table

Create a table from data range:

```dart
final Workbook workbook = Workbook(1);
final Worksheet sheet = workbook.worksheets[0];

// Add data
sheet.getRangeByName('A1').setText('Fruits');
sheet.getRangeByName('A2').setText('Banana');
sheet.getRangeByName('A3').setText('Cherry');
sheet.getRangeByName('A4').setText('Banana');

sheet.getRangeByName('B1').setText('CostA');
sheet.getRangeByName('B2').setNumber(744.6);
sheet.getRangeByName('B3').setNumber(5079.6);
sheet.getRangeByName('B4').setNumber(1267.5);

sheet.getRangeByName('C1').setText('CostB');
sheet.getRangeByName('C2').setNumber(162.56);
sheet.getRangeByName('C3').setNumber(1249.2);
sheet.getRangeByName('C4').setNumber(1062.5);

// Create table
sheet.tableCollection.create('Table1', sheet.getRangeByName('A1:C4'));

final List<int> bytes = workbook.saveSync();
File('Table.xlsx').writeAsBytes(bytes);
workbook.dispose();
```

### Placeholders
- `'Fruits'`, `'Banana'`, `'Cherry'`, `'CostA'`, `'CostB'` → Replace with `'{text-value}'` (content)
- `744.6`, `5079.6`, `1267.5`, `162.56`, `1249.2`, `1062.5` → Replace with `'{number-value}'` (numeric values)
- `'Table1'` → Replace with `'{table-name}'` (table name)
- `'A1:C4'` → Replace with `'{cell-range}'` (table data range)
- `'Table.xlsx'` → Replace with `'{output-file}'` (output file name)

## Applying Built-In Table Styles

Format table with predefined styles:

```dart
final ExcelTable table = sheet.tableCollection.create(
  'Table1',
  sheet.getRangeByName('A1:C4')
);

// Apply built-in style
table.builtInTableStyle = ExcelTableBuiltInStyle.tableStyleDark10;
```

### Placeholders
- `'Table1'` → Replace with `'{table-name}'` (table name)
- `'A1:C4'` → Replace with `'{cell-range}'` (table data range)
- `ExcelTableBuiltInStyle.tableStyleDark10` → Replace with `'{table-style}'` (built-in style constant)

## Show/Hide Header Row

Control header row visibility:

```dart
table.showHeaderRow = true;   // Show header row (default)
table.showHeaderRow = false;  // Hide header row
```

### Placeholders
- `true`, `false` → Replace with `'{boolean-value}'` (show/hide option)

## Show/Hide Total Row

Display summary row at table bottom:

```dart
table.showTotalRow = true;   // Show total row
table.showTotalRow = false;  // Hide total row (default)
```

### Placeholders
- `true`, `false` → Replace with `'{boolean-value}'` (show/hide option)

## Show/Hide First Column

Apply special formatting to first column:

```dart
table.showFirstColumn = true;   // Apply first column format
table.showFirstColumn = false;  // Normal first column (default)
```

### Placeholders
- `true`, `false` → Replace with `'{boolean-value}'` (show/hide option)

## Show/Hide Last Column

Apply special formatting to last column:

```dart
table.showLastColumn = true;   // Apply last column format
table.showLastColumn = false;  // Normal last column (default)
```

### Placeholders
- `true`, `false` → Replace with `'{boolean-value}'` (show/hide option)

## Show/Hide Banded Rows

Apply alternating row colors:

```dart
table.showBandedRows = true;   // Show row stripes (default)
table.showBandedRows = false;  // Remove row stripes
```

### Placeholders
- `true`, `false` → Replace with `'{boolean-value}'` (show/hide option)

## Show/Hide Banded Columns

Apply alternating column colors:

```dart
table.showBandedColumns = true;   // Show column stripes
table.showBandedColumns = false;  // Remove column stripes (default)
```

### Placeholders
- `true`, `false` → Replace with `'{boolean-value}'` (show/hide option)

## Complete Table Style Configuration

Configure multiple table style options:

```dart
final Workbook workbook = Workbook(1);
final Worksheet sheet = workbook.worksheets[0];

// Add data
sheet.getRangeByName('A1').setText('Product');
sheet.getRangeByName('A2').setText('Item1');
sheet.getRangeByName('A3').setText('Item2');

sheet.getRangeByName('B1').setText('Sales');
sheet.getRangeByName('B2').setNumber(100);
sheet.getRangeByName('B3').setNumber(200);

sheet.getRangeByName('C1').setText('Revenue');
sheet.getRangeByName('C2').setNumber(5000);
sheet.getRangeByName('C3').setNumber(8000);

// Create and configure table
final ExcelTable table = sheet.tableCollection.create(
  'SalesTable',
  sheet.getRangeByName('A1:C3')
);

// Apply style
table.builtInTableStyle = ExcelTableBuiltInStyle.tableStyleMedium5;

// Configure display options
table.showHeaderRow = true;
table.showTotalRow = true;
table.showFirstColumn = true;
table.showLastColumn = false;
table.showBandedRows = true;
table.showBandedColumns = true;

final List<int> bytes = workbook.saveSync();
File('ConfiguredTable.xlsx').writeAsBytes(bytes);
workbook.dispose();
```

### Placeholders
- `'Product'`, `'Item1'`, `'Item2'`, `'Sales'`, `'Revenue'` → Replace with `'{text-value}'` (content)
- `100`, `200`, `5000`, `8000` → Replace with `'{number-value}'` (numeric values)
- `'SalesTable'` → Replace with `'{table-name}'` (table name)
- `'A1:C3'` → Replace with `'{cell-range}'` (table data range)
- `ExcelTableBuiltInStyle.tableStyleMedium5` → Replace with `'{table-style}'` (style constant)
- `true`, `false` → Replace with `'{boolean-value}'` (display options)
- `'ConfiguredTable.xlsx'` → Replace with `'{output-file}'` (output file name)

## Removing a Table by Reference

Remove table using table object:

```dart
final ExcelTable table1 = sheet.tableCollection.create('Table1', sheet.getRangeByName('A1:C4'));
final ExcelTable table2 = sheet.tableCollection.create('Table2', sheet.getRangeByName('F1:H4'));

// Remove specific table
sheet.tableCollection.remove(table1);

final List<int> bytes = workbook.saveSync();
File('RemovedTable.xlsx').writeAsBytes(bytes);
workbook.dispose();
```

### Placeholders
- `'Table1'`, `'Table2'` → Replace with `'{table-name}'` (table names)
- `'A1:C4'`, `'F1:H4'` → Replace with `'{cell-range}'` (table data ranges)
- `'RemovedTable.xlsx'` → Replace with `'{output-file}'` (output file name)

## Removing a Table by Index

Remove table using index:

```dart
final ExcelTable table1 = sheet.tableCollection.create('Table1', sheet.getRangeByName('A1:C4'));
final ExcelTable table2 = sheet.tableCollection.create('Table2', sheet.getRangeByName('F1:H4'));
final ExcelTable table3 = sheet.tableCollection.create('Table3', sheet.getRangeByName('D6:F9'));

// Remove table at index 1 (second table)
sheet.tableCollection.removeAt(1);

final List<int> bytes = workbook.saveSync();
File('RemovedTableByIndex.xlsx').writeAsBytes(bytes);
workbook.dispose();
```

### Placeholders
- `'Table1'`, `'Table2'`, `'Table3'` → Replace with `'{table-name}'` (table names)
- `'A1:C4'`, `'F1:H4'`, `'D6:F9'` → Replace with `'{cell-range}'` (table data ranges)
- `1` → Replace with `'{table-index}'` (zero-based table index)
- `'RemovedTableByIndex.xlsx'` → Replace with `'{output-file}'` (output file name)

## Multiple Tables on Single Worksheet

Create multiple tables in one worksheet:

```dart
final Workbook workbook = Workbook(1);
final Worksheet sheet = workbook.worksheets[0];

// Table 1 data
sheet.getRangeByName('A1').setText('Product');
sheet.getRangeByName('A2').setText('Laptop');
sheet.getRangeByName('B1').setText('Price');
sheet.getRangeByName('B2').setNumber(1000);

// Table 2 data
sheet.getRangeByName('D1').setText('Name');
sheet.getRangeByName('D2').setText('John');
sheet.getRangeByName('E1').setText('Age');
sheet.getRangeByName('E2').setNumber(25);

// Create both tables
final ExcelTable table1 = sheet.tableCollection.create(
  'ProductTable',
  sheet.getRangeByName('A1:B2')
);

final ExcelTable table2 = sheet.tableCollection.create(
  'PeopleTable',
  sheet.getRangeByName('D1:E2')
);

// Style each table
table1.builtInTableStyle = ExcelTableBuiltInStyle.tableStyleDark1;
table2.builtInTableStyle = ExcelTableBuiltInStyle.tableStyleDark3;

final List<int> bytes = workbook.saveSync();
File('MultipleTables.xlsx').writeAsBytes(bytes);
workbook.dispose();
```

### Placeholders
- `'Product'`, `'Laptop'`, `'Price'`, `'Name'`, `'John'`, `'Age'` → Replace with `'{text-value}'` (content)
- `1000`, `25` → Replace with `'{number-value}'` (numeric values)
- `'ProductTable'`, `'PeopleTable'` → Replace with `'{table-name}'` (table names)
- `'A1:B2'`, `'D1:E2'` → Replace with `'{cell-range}'` (table data ranges)
- `ExcelTableBuiltInStyle.tableStyleDark1`, `ExcelTableBuiltInStyle.tableStyleDark3` → Replace with `'{table-style}'` (style constants)
- `'MultipleTables.xlsx'` → Replace with `'{output-file}'` (output file name)

## Built-In Table Styles

Available table styles (selected examples):
- `tableStyleLight1` through `tableStyleLight21`
- `tableStyleMedium1` through `tableStyleMedium28`
- `tableStyleDark1` through `tableStyleDark11`

## Notes

- Table name must be unique within worksheet
- Table data range must include headers in first row
- Tables support filtering and sorting in Excel
- Multiple tables can exist on same worksheet
- Remove table by reference or by zero-based index
- Style options can be combined for custom appearance
- Total row calculations available in Excel (manual setup)
