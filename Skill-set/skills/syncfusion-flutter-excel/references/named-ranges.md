# Named Ranges

<!-- [PLACEHOLDER: Define and use named ranges at workbook and worksheet levels for formula references] -->

---

## Create Named Range (Workbook Level)

```dart
final Workbook workbook = Workbook(1);
final Worksheet worksheet = workbook.worksheets[0];

final Range range = worksheet.getRangeByName('A1:C1');
workbook.names.add('BookName', range);
```

### Placeholders
- `Workbook(1)` → Replace with workbook instance creation
- `'A1:C1'` → Replace with `'{cell-range}'` (cell range)
- `'BookName'` → Replace with `'{range-name}'` (name identifier)

## Create Named Range (Worksheet Level)

```dart
final Workbook workbook = Workbook(1);
final Worksheet worksheet = workbook.worksheets[0];

final Range range = worksheet.getRangeByName('A1:C1');
worksheet.names.add('SheetName', range);
```

### Placeholders
- `'A1:C1'` → Replace with `'{cell-range}'` (cell range)
- `'SheetName'` → Replace with `'{range-name}'` (name identifier)

## Use Named Ranges in Formulas

```dart
final Worksheet worksheet = workbook.worksheets[0];

worksheet.getRangeByName('A1').setNumber(10);
worksheet.getRangeByName('A2').setNumber(20);

final Range range1 = worksheet.getRangeByName('A1');
worksheet.names.add('FirstRange', range1);

final Range range2 = worksheet.getRangeByName('A2');
worksheet.names.add('SecondRange', range2);

// Use named ranges in formula
worksheet.getRangeByName('A3').formula = '=IF(FirstRange<SecondRange, "Yes", "No")';
```

### Placeholders
- `'A1'`, `'A2'`, `'A3'` → Replace with `'{cell-range}'` (cell reference)
- `10`, `20` → Replace with `'{number-value}'` (numeric values)
- `'FirstRange'`, `'SecondRange'` → Replace with `'{range-name}'` (name identifiers)
- `'=IF(FirstRange<SecondRange, "Yes", "No")'` → Replace with `'{formula}'` (formula expression)

## Delete Named Range

```dart
final Range range = worksheet.getRangeByName('A1:C1');
final Name name = worksheet.names.add('NamedRange', range);

// Delete the named range
name.delete();
```

### Placeholders
- `'A1:C1'` → Replace with `'{cell-range}'` (cell range)
- `'NamedRange'` → Replace with `'{range-name}'` (name to delete)

---

Use `workbook.names.add()` or `worksheet.names.add()` to create. Use `name.delete()` to remove.

