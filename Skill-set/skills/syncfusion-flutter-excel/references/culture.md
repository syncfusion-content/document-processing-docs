# Culture

<!-- [PLACEHOLDER: Set locale and currency for date, time, and number formatting with 20+ culture codes] -->

## Creating Workbook with Culture

Create workbook with specific culture/locale:

```dart
final Workbook workbook = Workbook.withCulture('en-IN');
final Worksheet sheet = workbook.worksheets[0];

final Range range = sheet.getRangeByIndex(2, 2);
range.numberFormat = r'm/d/yyyy';
range.dateTime = DateTime(2021, 12, 22);
print(range.displayText);

final List<int> bytes = workbook.saveAsStream();
workbook.dispose();
```

### Placeholders
- `'en-IN'` → Replace with `'{culture-code}'` (culture/locale code)
- `2, 2` → Replace with `'{row-index}'` and `'{column-index}'` (cell position)
- `DateTime(2021, 12, 22)` → Replace with `'{date-value}'` (date value)

## Creating Workbook with Culture and Currency

Specify both culture and currency code:

```dart
final Workbook workbook = Workbook.withCulture('nl-NL', 'ANG');
final Worksheet sheet = workbook.worksheets[0];

final Range range = sheet.getRangeByIndex(1, 1);
range.numberFormat = r'$#,##0.00';
range.setNumber(1231);
print(range.displayText);
```

### Placeholders
- `'nl-NL'` → Replace with `'{culture-code}'` (culture/locale code)
- `'ANG'` → Replace with `'{currency-code}'` (currency code)
- `1231` → Replace with `'{number-value}'` (numeric value)

## Date Formatting with Culture

Apply date formats with different locales:

```dart
final Workbook workbook = Workbook.withCulture('sq-AL');
final Worksheet sheet = workbook.worksheets[0];

// Date format 1
final Range range1 = sheet.getRangeByIndex(3, 3);
range1.numberFormat = r'm/d/yyyy';
range1.dateTime = DateTime(2022, 11, 21);

// Date format 2
final Range range2 = sheet.getRangeByIndex(6, 6);
range2.numberFormat = 'dd MMMM yyyy';
range2.dateTime = DateTime(2022, 11, 21);
```

### Placeholders
- `'sq-AL'` → Replace with `'{culture-code}'` (culture/locale code)
- `3, 3` and `6, 6` → Replace with `'{row-index}'` and `'{column-index}'` (cell positions)
- `DateTime(2022, 11, 21)` → Replace with `'{date-value}'` (date value)
- `'m/d/yyyy'`, `'dd MMMM yyyy'` → Replace with `'{number-format}'` (date format code)

## Time Formatting with Culture

Apply time formats with locales:

```dart
final Workbook workbook = Workbook.withCulture('zu-ZA');
final Worksheet sheet = workbook.worksheets[0];

// Time format 1
final Range range1 = sheet.getRangeByIndex(2, 2);
range1.numberFormat = 'h:mm';
range1.dateTime = DateTime(2012, 2, 3, 4, 7, 50);

// Time format 2
final Range range2 = sheet.getRangeByIndex(4, 4);
range2.numberFormat = 'h:mm:ss';
range2.dateTime = DateTime(2021, 12, 8, 21, 38, 45);

// AM/PM format
final Range range3 = sheet.getRangeByIndex(6, 6);
range3.numberFormat = r'h:mm\\ AM/PM';
range3.dateTime = DateTime(2012, 2, 3, 4, 7, 50);
```

### Placeholders
- `'zu-ZA'` → Replace with `'{culture-code}'` (culture/locale code)
- `2, 2`, `4, 4`, `6, 6` → Replace with `'{row-index}'` and `'{column-index}'` (cell positions)
- `'h:mm'`, `'h:mm:ss'`, `'h:mm\\ AM/PM'` → Replace with `'{number-format}'` (time format code)
- `DateTime(...)` → Replace with `'{date-time-value}'` (date/time value)

## DateTime Formatting with Culture

Combine date and time with locale settings:

```dart
final Workbook workbook = Workbook.withCulture('nl-NL');
final Worksheet sheet = workbook.worksheets[0];

final Range range1 = sheet.getRangeByIndex(2, 2);
range1.numberFormat = r'm/d/yyyy\\ h:mm';
range1.dateTime = DateTime(2021, 12, 22, 22, 22, 22);

final Range range2 = sheet.getRangeByIndex(4, 4);
range2.numberFormat = r'm/d/yyyy\\ h:mm';
range2.dateTime = DateTime(2001, 2, 2, 2, 2, 2);
```

### Placeholders
- `'nl-NL'` → Replace with `'{culture-code}'` (culture/locale code)
- `2, 2` and `4, 4` → Replace with `'{row-index}'` and `'{column-index}'` (cell positions)
- `DateTime(...)` → Replace with `'{date-time-value}'` (date/time value)
- `'m/d/yyyy\\ h:mm'` → Replace with `'{number-format}'` (datetime format code)

## Number Formatting with Culture

Apply number formats with locale-specific separators:

```dart
final Workbook workbook = Workbook.withCulture('fi-FI');
final Worksheet sheet = workbook.worksheets[0];

// Decimal format
final Range range1 = sheet.getRangeByIndex(1, 1);
range1.numberFormat = '0.00';
range1.setNumber(279613);

// Number with thousands separator
final Range range2 = sheet.getRangeByIndex(2, 2);
range2.numberFormat = '#,##0.00';
range2.setNumber(-22114);

// Colored negative numbers
final Range range3 = sheet.getRangeByIndex(3, 3);
range3.numberFormat = '[Blue](#,##0)';
range3.setNumber(9032223);
```

### Placeholders
- `'fi-FI'` → Replace with `'{culture-code}'` (culture/locale code)
- `1, 1`, `2, 2`, `3, 3` → Replace with `'{row-index}'` and `'{column-index}'` (cell positions)
- `'0.00'`, `'#,##0.00'`, `'[Blue](#,##0)'` → Replace with `'{number-format}'` (number format code)
- `279613`, `-22114`, `9032223` → Replace with `'{number-value}'` (numeric value)

## Currency Formatting with Culture

Apply currency formats with culture-specific symbols:

```dart
final Workbook workbook = Workbook.withCulture('de-DE');
final Worksheet sheet = workbook.worksheets[0];

// Currency format 1
final Range range1 = sheet.getRangeByIndex(2, 2);
range1.numberFormat = r'$#,##0.00';
range1.setNumber(1231);

// Currency format 2
final Range range2 = sheet.getRangeByIndex(4, 4);
range2.numberFormat = r'$#,##0';
range2.number = 3212;

// Parentheses for negative
final Range range3 = sheet.getRangeByIndex(6, 6);
range3.numberFormat = r'_($* #,##0.00_)';
range3.number = 4055;

// Colored currency
final Range range4 = sheet.getRangeByIndex(8, 8);
range4.numberFormat = r'[RED]$#,##0.00';
range4.number = 37101;
```

### Placeholders
- `'de-DE'` → Replace with `'{culture-code}'` (culture/locale code)
- `2, 2`, `4, 4`, `6, 6`, `8, 8` → Replace with `'{row-index}'` and `'{column-index}'` (cell positions)
- `1231`, `3212`, `4055`, `37101` → Replace with `'{number-value}'` (currency value)
- `'$#,##0.00'`, `'$#,##0'`, `'_($* #,##0.00_)'`, `'[RED]$#,##0.00'` → Replace with `'{number-format}'` (currency format code)

## Percentage Formatting with Culture

Apply percentage formats:

```dart
final Workbook workbook = Workbook.withCulture('es-US');
final Worksheet sheet = workbook.worksheets[0];

final Range range1 = sheet.getRangeByIndex(1, 1);
range1.numberFormat = '0%';
range1.setNumber(131);

final Range range2 = sheet.getRangeByIndex(2, 2);
range2.numberFormat = '0.00%';
range2.setNumber(142);
```

### Placeholders
- `'es-US'` → Replace with `'{culture-code}'` (culture/locale code)
- `1, 1` and `2, 2` → Replace with `'{row-index}'` and `'{column-index}'` (cell positions)
- `'0%'`, `'0.00%'` → Replace with `'{number-format}'` (percentage format code)
- `131`, `142` → Replace with `'{number-value}'` (numeric value)

## Scientific Notation with Culture

Apply scientific notation formats:

```dart
final Workbook workbook = Workbook.withCulture('de-AT');
final Worksheet sheet = workbook.worksheets[0];

final Range range1 = sheet.getRangeByIndex(1, 1);
range1.numberFormat = '0.00E+00';
range1.setNumber(34225);

final Range range2 = sheet.getRangeByIndex(2, 2);
range2.numberFormat = '##0.0E+0';
range2.setNumber(1245);
```

### Placeholders
- `'de-AT'` → Replace with `'{culture-code}'` (culture/locale code)
- `1, 1` and `2, 2` → Replace with `'{row-index}'` and `'{column-index}'` (cell positions)
- `'0.00E+00'`, `'##0.0E+0'` → Replace with `'{number-format}'` (scientific notation format code)
- `34225`, `1245` → Replace with `'{number-value}'` (numeric value)

## Text Format with Culture

Apply text format:

```dart
final Range range = sheet.getRangeByName('E5');
range.numberFormat = '@';
range.number = 23781;
```

### Placeholders
- `'E5'` → Replace with `'{cell-range}'` (target cell)
- `'@'` → Replace with `'{number-format}'` (text format code)
- `23781` → Replace with `'{number-value}'` (numeric value)

## Getting Display Text

Access formatted display text:

```dart
final Workbook workbook = Workbook.withCulture('en-IN');
final Worksheet sheet = workbook.worksheets[0];

final Range range = sheet.getRangeByIndex(2, 2);
range.numberFormat = r'm/d/yyyy';
range.dateTime = DateTime(2021, 12, 22);

// Get display text with culture applied
final String displayText = range.displayText;
print(displayText);
```

### Placeholders
- `'en-IN'` → Replace with `'{culture-code}'` (culture/locale code)
- `2, 2` → Replace with `'{row-index}'` and `'{column-index}'` (cell position)
- `'m/d/yyyy'` → Replace with `'{number-format}'` (date format code)
- `DateTime(2021, 12, 22)` → Replace with `'{date-value}'` (date value)

## Supported Cultures

Selected supported culture codes:
- **English**: en-IN, en-US, en-GB, en-PH
- **German**: de-DE, de-AT, de-CH
- **French**: fr-CA, fr-FR
- **Spanish**: es-US, es-ES
- **Italian**: it-IT, it-CH
- **Dutch**: nl-NL, nl-BE
- **Finnish**: fi-FI
- **Thai**: th-TH
- **Albanian**: sq-AL
- **Urdu**: ur-IN
- **Zulu**: zu-ZA
- **Māori**: mi-NZ
- **Hausa**: ha-Latn-NG
- **Serbian**: sr-Cyrl-ME

## Currency Codes

Common currency codes:
- ANG (Netherlands Antillean Guilder)
- USD (US Dollar)
- EUR (Euro)
- GBP (British Pound)
- JPY (Japanese Yen)
- And 100+ others

## Format Codes

**Date Formats:**
- `m/d/yyyy`: Month/Day/Year
- `dd MMMM yyyy`: Day Month Year

**Time Formats:**
- `h:mm`: Hour:Minute
- `h:mm:ss`: Hour:Minute:Second
- `h:mm\\ AM/PM`: Hour:Minute AM/PM

**Number Formats:**
- `0.00`: Decimal (2 places)
- `#,##0.00`: Thousands separator with decimals
- `[Blue](#,##0)`: Colored format (positive/negative)
- `@`: Text format

**Currency Formats:**
- `$#,##0.00`: Currency with decimals
- `_($* #,##0.00_)`: Parentheses for negative

**Percentage:**
- `0%`: Percentage (no decimals)
- `0.00%`: Percentage (2 decimals)

**Scientific:**
- `0.00E+00`: Scientific notation

## Notes

- Culture affects separator characters (. vs , for decimals)
- Currency code is optional, uses culture default if not specified
- DisplayText reflects locale settings for numbers, dates, times
- Number format codes are Excel-compatible
- Different regions use different date/time/number separators
- Format strings support colors: [Red], [Blue], [Green], [Yellow]
