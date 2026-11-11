# Number Formats

<!-- [PLACEHOLDER: 9 format categories - general, currency, percentage, date, time, accounting, scientific, fraction, text] -->

---

## General Number Formats

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

final Range range1 = sheet.getRangeByIndex(1, 1);
range1.setNumber(279);
range1.numberFormat = '0.0';

final Range range2 = sheet.getRangeByIndex(2, 1);
range2.setNumber(-2211);
range2.numberFormat = '#,##0.00';

final Range range3 = sheet.getRangeByIndex(3, 1);
range3.setNumber(9032);
range3.numberFormat = '[Blue](#,##0.000)';
```

### Placeholders
- `{workbook}` - Workbook instance
- `{sheet}` - Worksheet reference
- `{number-value}` - Numeric value to format

## Currency

```dart
final Range range = sheet.getRangeByIndex(1, 1);
range.setNumber(2955);
range.numberFormat = '\$#,##0.0';

final Range range1 = sheet.getRangeByName('A2');
range1.setNumber(22.11);
range1.numberFormat = '([Red]\$0.00)';
```

### Placeholders
- `{cell-range}` - Cell reference (e.g., 'A2')
- `{number-value}` - Numeric currency value

## Percentage

```dart
final Range range = sheet.getRangeByIndex(1, 1);
range.setNumber(29);
range.numberFormat = '0%';

final Range range1 = sheet.getRangeByName('A2');
range1.setNumber(22.11);
range1.numberFormat = '0.00%';
```

### Placeholders
- `{cell-range}` - Cell reference
- `{number-value}` - Decimal value for percentage conversion

## Date

```dart
final Range range = sheet.getRangeByIndex(1, 1);
range.setDateTime(DateTime(2020, 8, 23));
range.numberFormat = 'm/d/yyyy';

final Range range1 = sheet.getRangeByName('A2');
range1.setDateTime(DateTime(2002, 12, 3));
range1.numberFormat = 'dddd, mmmm dd, yyyy';

final Range range2 = sheet.getRangeByIndex(3, 1);
range2.setDateTime(DateTime(2012, 11, 22));
range2.numberFormat = 'yyyy-mm-dd';
```

### Placeholders
- `{cell-range}` - Cell reference
- `{date-value}` - DateTime object with date

## Time

```dart
final Range range = sheet.getRangeByIndex(1, 1);
range.setDateTime(DateTime(2020, 8, 23, 8, 15, 20));
range.numberFormat = 'h:mm:ss AM/PM';

final Range range1 = sheet.getRangeByName('A2');
range1.setDateTime(DateTime(2002, 12, 3, 23, 45, 45));
range1.numberFormat = 'h:mm';
```

### Placeholders
- `{cell-range}` - Cell reference
- `{date-value}` - DateTime object with time

## Accounting

```dart
final Range range = sheet.getRangeByIndex(1, 1);
range.setNumber(79);
range.numberFormat = '_(\$* #,##0_)';

final Range range1 = sheet.getRangeByIndex(2, 1);
range1.setNumber(2211);
range1.numberFormat = '_(\$* (#,##0.00)';
```

### Placeholders
- `{number-value}` - Numeric value for accounting format

## Scientific

```dart
final Range range = sheet.getRangeByIndex(1, 1);
range.setNumber(791);
range.numberFormat = '0.E+00';

final Range range1 = sheet.getRangeByIndex(2, 1);
range1.setNumber(22.11);
range1.numberFormat = '0.00E+00';
```

### Placeholders
- `{number-value}` - Numeric value for scientific notation

## Fraction

```dart
final Range range = sheet.getRangeByIndex(1, 1);
range.setNumber(29.4);
range.numberFormat = '# ?/?';

final Range range1 = sheet.getRangeByName('A2');
range1.setNumber(22.11);
range1.numberFormat = '# ??/??';
```

### Placeholders
- `{cell-range}` - Cell reference
- `{number-value}` - Decimal value to display as fraction

## Text

```dart
final Range range = sheet.getRangeByIndex(1, 1);
range.setNumber(-12.89);
range.numberFormat = '@';

final Range range1 = sheet.getRangeByName('A2');
range1.setNumber(2311);
range1.numberFormat = '_(@_)';
```

### Placeholders
- `{cell-range}` - Cell reference
- `{value}` - Value to format as text

---

Use `range.numberFormat` property with format codes. Codes can have up to 4 parts:
positive; negative; zero; text. Supports custom colors like `[Red]`, `[Blue]` and conditions like `[>=100]`.

