# Data Validation

Add data validation rules to restrict cell input.

---

> **Placeholders:**
> - `{sheet}` → Worksheet instance variable name
> - `{cell-range}` → Range for validation (e.g., `'A1:A10'`)
> - `{validation-type}` → Type of validation (e.g., `ExcelDataType.TextLength`)
> - `{criteria}` → Validation criteria operator
> - `{value}` → Validation value or list

---

## Text Length Validation

Restrict text length in cells:

```dart
final DataValidation validation = sheet.getRangeByName('A1').dataValidation;
validation.allowType = ExcelDataValidationType.textLength;
validation.comparisonOperator = ExcelDataValidationComparisonOperator.between;
validation.firstFormula = '0';
validation.secondFormula = '5';

validation.showErrorBox = true;
validation.errorBoxTitle = 'ERROR';
validation.errorBoxText = 'Text length should be less than 5 characters';
validation.showPromptBox = true;
validation.promptBoxText = 'Data validation for text length';
```

### Placeholders
- `'A1'` → Replace with `'{cell-range}'` (validation cell range)
- `'0'`, `'5'` → Replace with `'{value}'` (min and max length values)

## Time Validation

Restrict time input (24-hour format):

```dart
final DataValidation validation = sheet.getRangeByName('B1').dataValidation;
validation.allowType = ExcelDataValidationType.time;
validation.comparisonOperator = ExcelDataValidationComparisonOperator.between;
validation.firstFormula = '10:00';  // 24-hour format
validation.secondFormula = '12:00';

validation.showErrorBox = true;
validation.errorBoxTitle = 'ERROR';
validation.errorBoxText = 'Enter a time between 10:00 and 12:00';
validation.showPromptBox = true;
validation.promptBoxText = 'Data validation for time';
```

### Placeholders
- `'B1'` → Replace with `'{cell-range}'` (validation cell range)
- `'10:00'`, `'12:00'` → Replace with `'{value}'` (time values in 24-hour format)

## List Validation

Create dropdown list from manual values:

```dart
final DataValidation validation = sheet.getRangeByName('C1').dataValidation;
validation.listOfValues = <String>['Item1', 'Item2', 'Item3'];

validation.errorBoxTitle = 'ERROR';
validation.errorBoxText = 'Choose a value from the list';
validation.showPromptBox = true;
validation.promptBoxText = 'Data validation for list';
```

### Placeholders
- `'C1'` → Replace with `'{cell-range}'` (validation cell range)
- `'Item1'`, `'Item2'`, `'Item3'` → Replace with list values

## Whole Number Validation

Restrict to integers:

```dart
final DataValidation validation = sheet.getRangeByName('D1').dataValidation;
validation.allowType = ExcelDataValidationType.integer;
validation.comparisonOperator = ExcelDataValidationComparisonOperator.between;
validation.firstFormula = '0';
validation.secondFormula = '10';

validation.showErrorBox = true;
validation.errorBoxTitle = 'ERROR';
validation.errorBoxText = 'Enter a number between 0 and 10';
validation.showPromptBox = true;
validation.promptBoxText = 'Data validation for numbers';
```

### Placeholders
- `'D1'` → Replace with `'{cell-range}'` (validation cell range)
- `'0'`, `'10'` → Replace with `'{value}'` (min and max numeric values)

## Decimal Number Validation

Restrict to decimal numbers:

```dart
final DataValidation validation = sheet.getRangeByName('G1').dataValidation;
validation.allowType = ExcelDataValidationType.decimal;
validation.comparisonOperator = ExcelDataValidationComparisonOperator.between;
validation.firstFormula = '1.0';
validation.secondFormula = '10.0';

validation.showErrorBox = true;
validation.errorBoxTitle = 'ERROR';
validation.errorBoxText = 'Enter a decimal between 1.0 and 10.0';
validation.showPromptBox = true;
validation.promptBoxText = 'Data validation for decimal';
```

### Placeholders
- `'G1'` → Replace with `'{cell-range}'` (validation cell range)
- `'1.0'`, `'10.0'` → Replace with `'{value}'` (min and max decimal values)

## Date Validation

Restrict to date range:

```dart
final DataValidation validation = sheet.getRangeByName('E1').dataValidation;
validation.allowType = ExcelDataValidationType.date;
validation.comparisonOperator = ExcelDataValidationComparisonOperator.between;
validation.firstDateTime = DateTime(2003, 5, 10);
validation.secondDateTime = DateTime(2004, 5, 10);

validation.showErrorBox = true;
validation.errorBoxTitle = 'ERROR';
validation.errorBoxText = 'Enter a date between 05/10/2003 and 05/10/2004';
validation.showPromptBox = true;
validation.promptBoxText = 'Data validation for date';
```

### Placeholders
- `'E1'` → Replace with `'{cell-range}'` (validation cell range)
- `DateTime(2003, 5, 10)`, `DateTime(2004, 5, 10)` → Replace with date values

## Custom Formula Validation

Use custom formulas for validation:

```dart
final DataValidation validation = sheet.getRangeByName('F1').dataValidation;
validation.allowType = ExcelDataValidationType.formula;
validation.firstFormula = '=F1>10';

validation.showErrorBox = true;
validation.errorBoxTitle = 'ERROR';
validation.errorBoxText = 'Enter a value in F1 greater than 10';
validation.showPromptBox = true;
validation.promptBoxText = 'Custom Data Validation';
```

### Placeholders
- `'F1'` → Replace with `'{cell-range}'` (validation cell range)
- `'=F1>10'` → Replace with `'{formula-expression}'` (custom validation formula)

## List Validation from Cell Range

Create list from cells in worksheet:

```dart
// Add list values
sheet.getRangeByName('H4').setText('Item1');
sheet.getRangeByName('H5').setText('Item2');

// Apply validation
final DataValidation validation = sheet.getRangeByName('H3').dataValidation;
validation.dataRange = sheet.getRangeByName('H4:H5');
```

### Placeholders
- `'H3'` → Replace with `'{cell-range}'` (validation cell range)
- `'H4:H5'` → Replace with `'{list-range}'` (range containing list values)

## Comparison Operators

**ExcelDataValidationComparisonOperator Options:**
- `between`: Value is between two values
- `notBetween`: Value is not between two values
- `equal`: Value equals a specified value
- `notEqual`: Value does not equal a specified value
- `greaterThan`: Value is greater than specified value
- `lessThan`: Value is less than specified value
- `greaterOrEqual`: Value is greater than or equal
- `lessOrEqual`: Value is less than or equal

## Validation Types

**ExcelDataValidationType Options:**
- `textLength`: Text length restriction
- `time`: Time value restriction (24-hour format)
- `integer`: Whole number restriction
- `decimal`: Decimal number restriction
- `date`: Date value restriction
- `formula`: Custom formula-based validation

## Error and Prompt Messages

Display validation messages to users:

```dart
validation.showErrorBox = true;
validation.errorBoxTitle = 'Validation Error';
validation.errorBoxText = 'Invalid entry. Please enter valid data.';

validation.showPromptBox = true;
validation.promptBoxTitle = 'Data Input';
validation.promptBoxText = 'Please enter the required data.';
```

### Placeholders
- `'Validation Error'`, `'Data Input'` → Replace with custom message titles
- `'Invalid entry. Please enter valid data.'`, `'Please enter the required data.'` → Replace with custom messages

## Multiple Validations Example

Apply various validations to different cells:

```dart
final Workbook workbook = Workbook(1);
final Worksheet sheet = workbook.worksheets[0];

// Text length
final DataValidation textVal = sheet.getRangeByName('A3').dataValidation;
textVal.allowType = ExcelDataValidationType.textLength;
textVal.comparisonOperator = ExcelDataValidationComparisonOperator.between;
textVal.firstFormula = '0';
textVal.secondFormula = '5';
sheet.getRangeByName('A1').text = 'Enter text (max 5 chars)';

// Time
final DataValidation timeVal = sheet.getRangeByName('B3').dataValidation;
timeVal.allowType = ExcelDataValidationType.time;
timeVal.comparisonOperator = ExcelDataValidationComparisonOperator.between;
timeVal.firstFormula = '10:00';
timeVal.secondFormula = '12:00';
sheet.getRangeByName('B1').text = 'Enter time (10:00-12:00)';

// List
final DataValidation listVal = sheet.getRangeByName('C3').dataValidation;
listVal.listOfValues = <String>['Red', 'Green', 'Blue'];
sheet.getRangeByName('C1').text = 'Choose a color';

// Number
final DataValidation numVal = sheet.getRangeByName('D3').dataValidation;
numVal.allowType = ExcelDataValidationType.integer;
numVal.comparisonOperator = ExcelDataValidationComparisonOperator.between;
numVal.firstFormula = '0';
numVal.secondFormula = '100';
sheet.getRangeByName('D1').text = 'Enter number (0-100)';

// Date
final DataValidation dateVal = sheet.getRangeByName('E3').dataValidation;
dateVal.allowType = ExcelDataValidationType.date;
dateVal.comparisonOperator = ExcelDataValidationComparisonOperator.between;
dateVal.firstDateTime = DateTime(2023, 1, 1);
dateVal.secondDateTime = DateTime(2024, 12, 31);
sheet.getRangeByName('E1').text = 'Enter date (2023-2024)';

sheet.getRangeByName('A1:E5').autoFit();

final List<int> bytes = workbook.saveSync();
File('DataValidation.xlsx').writeAsBytes(bytes);
workbook.dispose();
```

### Placeholders
- `'A3'`, `'B3'`, `'C3'`, `'D3'`, `'E3'` → Replace with `'{cell-range}'` (validation ranges)
- `'DataValidation.xlsx'` → Replace with `'{output-file}'` (output file name)

## Notes

- Time must be in 24-hour format (HH:MM, no AM/PM)
- List validation has 255 character limit with `listOfValues`
- Use `dataRange` for lists longer than 255 characters
- Error and prompt boxes are optional but recommended
- Validation prevents invalid data entry at cell level
- Multiple validations can be applied to different cells
- Use formulas with cell references for dynamic validation
