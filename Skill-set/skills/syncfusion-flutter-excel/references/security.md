# Security

<!-- [PLACEHOLDER: Protect workbooks and worksheets with passwords, control cell editing, encryption] -->

## Protecting Workbooks

Protect workbook structure to prevent moving, deleting, or adding sheets:

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

sheet.getRangeByName('A1').setText('WorkBook Protected');

// Protect workbook with password
final bool isProtectWindow = true;
final bool isProtectContent = true;
workbook.protect(isProtectWindow, isProtectContent, 'password');

final List<int> bytes = workbook.saveSync();
workbook.dispose();
File('WorkbookProtect.xlsx').writeAsBytes(bytes);
```

### Placeholders
- `'A1'` → Replace with `'{cell-range}'` (cell reference)
- `'WorkBook Protected'` → Replace with `'{text-value}'` (content)
- `'password'` → Replace with `'{password}'` (protection password)
- `'WorkbookProtect.xlsx'` → Replace with `'{output-file}'` (output file name)

## Protecting Worksheets

Protect worksheet elements using `ExcelSheetProtectionOption`:

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

sheet.getRangeByName('A1').setText('Worksheet Protected');

// Create protection options
final ExcelSheetProtectionOption options = ExcelSheetProtectionOption();
options.all = true; // Protect all elements

// Protect worksheet with password
sheet.protect('Password', options);

final List<int> bytes = workbook.saveSync();
workbook.dispose();
File('WorksheetProtect.xlsx').writeAsBytes(bytes);
```

### Placeholders
- `'A1'` → Replace with `'{cell-range}'` (cell reference)
- `'Worksheet Protected'` → Replace with `'{text-value}'` (content)
- `'Password'` → Replace with `'{password}'` (protection password)
- `'WorksheetProtect.xlsx'` → Replace with `'{output-file}'` (output file name)

## Unlocking Cells for Editing

Allow specific cells to be edited in a protected worksheet by unlocking them:

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

final Range range = sheet.getRangeByName('A1');
range.setText('Worksheet Protected');

// Protect worksheet
sheet.protect('Password');

// Unlock specific cell for editing
range.cellStyle.locked = false;

final List<int> bytes = workbook.saveSync();
workbook.dispose();
File('ProtectCell.xlsx').writeAsBytes(bytes);
```

### Placeholders
- `'A1'` → Replace with `'{cell-range}'` (cell reference)
- `'Worksheet Protected'` → Replace with `'{text-value}'` (content)
- `'Password'` → Replace with `'{password}'` (protection password)
- `'ProtectCell.xlsx'` → Replace with `'{output-file}'` (output file name)

## Unlocking Multiple Cells

Unlock a range of cells while protecting the worksheet:

```dart
// Protect worksheet
sheet.protect('Password');

// Unlock range A1:B5
final Range editableRange = sheet.getRangeByName('A1:B5');
editableRange.cellStyle.locked = false;

// Unlock individual cells
sheet.getRangeByName('C1').cellStyle.locked = false;
sheet.getRangeByName('C2').cellStyle.locked = false;
```

### Placeholders
- `'Password'` → Replace with `'{password}'` (protection password)
- `'A1:B5'` → Replace with `'{cell-range}'` (range to unlock)
- `'C1'`, `'C2'` → Replace with `'{cell-range}'` (individual cells to unlock)

## ExcelSheetProtectionOption Properties

Configure which worksheet elements to protect:

```dart
final ExcelSheetProtectionOption options = ExcelSheetProtectionOption();

// Protect all elements
options.all = true;

// Or configure individual options
options.sheet = true;              // Protect sheet
options.content = true;            // Protect content
options.insertRows = true;         // Prevent row insertion
options.deleteRows = true;         // Prevent row deletion
options.insertColumns = true;      // Prevent column insertion
options.deleteColumns = true;      // Prevent column deletion
options.formatCells = true;        // Prevent cell formatting
options.formatColumns = true;      // Prevent column formatting
options.formatRows = true;         // Prevent row formatting
options.sort = true;               // Prevent sorting
options.autoFilter = true;         // Prevent filter changes
options.pivotTable = true;         // Prevent pivot table changes
```

### Placeholders
- `ExcelSheetProtectionOption()` → Protection options object
- `true/false` → Enable (true) or disable (false) each protection option

## Notes

- Use passwords to prevent unauthorized access and modifications
- In a protected worksheet, locked cells cannot be edited; unlocked cells can be
- Use `options.all = true` to protect all worksheet elements at once
- Combine workbook and worksheet protection for comprehensive security
- Set `isProtectWindow = true` to prevent window changes in the workbook
- Set `isProtectContent = true` to protect actual workbook content
- Always call `workbook.dispose()` after saving to release memory
