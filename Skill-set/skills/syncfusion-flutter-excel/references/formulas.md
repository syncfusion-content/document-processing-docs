# Formulas

Examples showing how to enable calculations, apply formulas, access calculated values, use nested functions, and leverage 25+ formula functions.

---

> **Placeholders:**
> - `{workbook}` → Workbook instance variable name
> - `{sheet}` → Worksheet instance variable name
> - `{cell-range}` → Cell range reference (e.g., `'A1'`, `'A1:B5'`)
> - `{formula-expression}` → Excel formula (e.g., `'=A1+A2'`, `'=SUM(A1:A5)'`)
> - `{value}` → Numeric or text value to set
> - `{function-type}` → Function category (e.g., `SUM`, `AVERAGE`, `MAX`)

---

## Enable Sheet Calculations

Enable the calculation engine before using formulas.

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

// Enable formula calculation
sheet.enableSheetCalculations();
```

### Placeholders
- Enable calculations before using formulas (no parameters required)

---

## Apply Formula

Use `setFormula()` to set formulas in cells.

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

sheet.getRangeByName('A1').setNumber(10);
sheet.getRangeByName('A2').setNumber(20);

// Set formula
sheet.getRangeByName('A3').setFormula('=A1+A2');

sheet.enableSheetCalculations();
```

### Placeholders
- `'A3'` → Replace with `'{cell-range}'` (target cell for formula)
- `'=A1+A2'` → Replace with `'{formula-expression}'` (Excel formula)

---

## Access Calculated Value

Get the calculated result of a formula using `calculatedValue`.

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

sheet.enableSheetCalculations();

sheet.getRangeByName('A1').setNumber(10);
sheet.getRangeByName('A2').setNumber(20);
sheet.getRangeByName('A3').setFormula('=A1+A2');

// Get calculated value (returns string)
String result = sheet.getRangeByName('A3').calculatedValue;
```

### Placeholders
- `'=A1+A2'` → Replace with `'{formula-expression}'` (Excel formula)

---

## Nested Functions

Use functions as arguments in other functions.

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

sheet.getRangeByName('B4').setNumber(47);
sheet.getRangeByName('B5').setNumber(43);
sheet.getRangeByName('B6').setNumber(40);
sheet.getRangeByName('D4').setNumber(72);
sheet.getRangeByName('D5').setNumber(43);

sheet.enableSheetCalculations();

// Nested formula: IF(SUM(AVERAGE(...), MAX(...)) > 50, "PASS", "FAIL")
final Range range = sheet.getRangeByName('B11');
range.setFormula(
  '=IF(SUM(AVERAGE(B4:B6), MAX(D4:D5)) > 50, "PASS", "FAIL")');
```

### Placeholders
- `'=IF(SUM(AVERAGE(B4:B6), MAX(D4:D5)) > 50, "PASS", "FAIL")'` → Replace with `'{formula-expression}'` (nested formula)

---

## General Functions: SUM, AVERAGE, MAX, MIN, COUNT

```dart
final Worksheet sheet = workbook.worksheets[0];
sheet.enableSheetCalculations();

sheet.getRangeByName('A1').setNumber(10);
sheet.getRangeByName('A2').setNumber(20);
sheet.getRangeByName('A3').setNumber(4);
sheet.getRangeByName('A4').setNumber(12);

sheet.getRangeByName('A6').setFormula('=SUM(A1:A4)');
sheet.getRangeByName('B6').setFormula('=AVERAGE(A1:A4)');
sheet.getRangeByName('C6').setFormula('=MAX(A1:A4)');
sheet.getRangeByName('D6').setFormula('=MIN(A1:A4)');
sheet.getRangeByName('E6').setFormula('=COUNT(A1:A4)');
```

### Placeholders
- `'A1:A4'` → Replace with `'{cell-range}'` (data range for functions)

---

## Logical Functions: IF, AND, OR, NOT

```dart
final Worksheet sheet = workbook.worksheets[0];
sheet.enableSheetCalculations();

sheet.getRangeByName('A1').setNumber(10);
sheet.getRangeByName('B1').setNumber(2);

// IF: logical test
sheet.getRangeByName('A6').setFormula('=IF(A1 > B1, "Yes", "No")');

// AND: all conditions TRUE
sheet.getRangeByName('B6').setFormula('=AND(A1>5, A1<20)');

// OR: any condition TRUE
sheet.getRangeByName('C6').setFormula('=OR(A1="Green", A1="Red")');

// NOT: reverse logic
sheet.getRangeByName('D6').setFormula('=NOT(A1="Green")');
```

### Placeholders
- `'=IF(A1 > B1, "Yes", "No")'` → Replace with `'{formula-expression}'` (logical formula)

---

## Text Functions: CONCATENATE, TRIM, LOWER, UPPER

```dart
final Worksheet sheet = workbook.worksheets[0];
sheet.enableSheetCalculations();

sheet.getRangeByName('A1').setText('Syncfusion ');
sheet.getRangeByName('A2').setText('Software');

// CONCATENATE: join strings
sheet.getRangeByName('A4').setFormula('=CONCATENATE(A1,A2)');

// TRIM: remove spaces
sheet.getRangeByName('B1').setText('   Hello  World  ');
sheet.getRangeByName('B4').setFormula('=TRIM(B1)');

// LOWER: to lowercase
sheet.getRangeByName('C1').setText('HELLO');
sheet.getRangeByName('C4').setFormula('=LOWER(C1)');

// UPPER: to uppercase
sheet.getRangeByName('D1').setText('hello');
sheet.getRangeByName('D4').setFormula('=UPPER(D1)');
```

### Placeholders
- `'A1'`, `'A2'` → Replace with `'{cell-range}'` (cells containing text)

---

## Time Functions: NOW, TODAY

```dart
final Worksheet sheet = workbook.worksheets[0];
sheet.enableSheetCalculations();

// NOW: current date and time
final Range now = sheet.getRangeByName('A1');
now.setFormula('=NOW()');
now.numberFormat = 'm/d/yyyy h:mm';

// TODAY: current date
final Range today = sheet.getRangeByName('A2');
today.setFormula('=TODAY()');
today.numberFormat = 'mm/dd/yyyy';
```

### Placeholders
- `'A1'`, `'A2'` → Replace with `'{cell-range}'` (target cells)
- `'m/d/yyyy h:mm'`, `'mm/dd/yyyy'` → Replace with `'{number-format}'` (format code)

---

## Lookup Functions: INDEX, MATCH, VLOOKUP

```dart
final Worksheet sheet = workbook.worksheets[0];
sheet.enableSheetCalculations();

sheet.getRangeByName('A1').setNumber(10);
sheet.getRangeByName('A2').setNumber(5);
sheet.getRangeByName('B1').setNumber(4);
sheet.getRangeByName('B2').setNumber(8);

// INDEX: return value at index
sheet.getRangeByName('A4').setFormula('=INDEX(A1:A2, 2, 1)');

// MATCH: find position
sheet.getRangeByName('A1').setNumber(10);
sheet.getRangeByName('A2').setNumber(8);
sheet.getRangeByName('A3').setNumber(6);
sheet.getRangeByName('A6').setFormula('=MATCH(8, A1:A3, 0)');

// VLOOKUP: lookup and return
sheet.getRangeByName('C1').setText('John');
sheet.getRangeByName('C2').setText('Mark');
sheet.getRangeByName('D1').setNumber(10);
sheet.getRangeByName('D2').setNumber(8);
sheet.getRangeByName('C6').setFormula('=VLOOKUP("John", C1:D2, 2, FALSE)');
```

### Placeholders
- `'A1:A2'`, `'A1:A3'`, `'C1:D2'` → Replace with `'{cell-range}'` (data ranges)

---

## Statistical Functions: AVERAGEIFS, MINIFS, MAXIFS, COUNTIFS

```dart
final Worksheet sheet = workbook.worksheets[0];
sheet.enableSheetCalculations();

sheet.getRangeByName('A1').setText('Apple');
sheet.getRangeByName('A2').setText('Grapes');
sheet.getRangeByName('B1').setNumber(58);
sheet.getRangeByName('B2').setNumber(1200);
sheet.getRangeByName('C1').setNumber(2);
sheet.getRangeByName('C2').setNumber(3);

// AVERAGEIFS: average with criteria
sheet.getRangeByName('D1').setFormula('=AVERAGEIFS(B:B, C:C, ">2")');

// MINIFS: minimum with criteria
sheet.getRangeByName('D2').setFormula('=MINIFS(B:B, A:A, "Apple")');

// MAXIFS: maximum with criteria
sheet.getRangeByName('D3').setFormula('=MAXIFS(B:B, C:C, ">2")');

// COUNTIFS: count with multiple criteria
sheet.getRangeByName('D4').setFormula('=COUNTIFS(A:A, "Apple", C:C, ">2")');
```

### Placeholders
- `'B:B'`, `'C:C'`, `'A:A'` → Replace with `'{cell-range}'` (column ranges)

---

## Math Functions: SUMIF, SUMIFS, SUMPRODUCT, PRODUCT

```dart
final Worksheet sheet = workbook.worksheets[0];
sheet.enableSheetCalculations();

sheet.getRangeByName('A1').setText('Apple');
sheet.getRangeByName('A2').setText('Grapes');
sheet.getRangeByName('B1').setNumber(58);
sheet.getRangeByName('B2').setNumber(1200);
sheet.getRangeByName('C1').setNumber(2);
sheet.getRangeByName('C2').setNumber(3);

// SUMIF: sum with criteria
sheet.getRangeByName('D1').setFormula('=SUMIF(A1:A2, "Apple", B1:B2)');

// SUMIFS: sum with multiple criteria
sheet.getRangeByName('D2').setFormula('=SUMIFS(B1:B2, C1:C2, ">=2")');

// SUMPRODUCT: sum of products
sheet.getRangeByName('D3').setFormula('=SUMPRODUCT(B1:B2, C1:C2)');

// PRODUCT: multiply values
sheet.getRangeByName('A10').setNumber(2);
sheet.getRangeByName('A11').setNumber(3);
sheet.getRangeByName('D4').setFormula('=PRODUCT(A10:A11)');
```

### Placeholders
- `'A1:A2'`, `'B1:B2'`, `'C1:C2'` → Replace with `'{cell-range}'` (data ranges)

---

## Supported Functions

**General:** SUM, AVERAGE, MAX, MIN, COUNT

**Logical:** IF, AND, OR, NOT

**Text:** CONCATENATE, TRIM, LOWER, UPPER

**Time:** NOW, TODAY

**Lookup:** INDEX, MATCH, VLOOKUP

**Statistical:** AVERAGEIFS, MINIFS, MAXIFS, COUNTIFS

**Math:** SUMIF, SUMIFS, SUMPRODUCT, PRODUCT

---

## Notes

- Always call `sheet.enableSheetCalculations()` before using formulas
- Use `setFormula()` to set formulas; `calculatedValue` to retrieve results
- Nested functions combine multiple functions as arguments
- Format dates with `numberFormat` property after setting NOW() or TODAY() formulas
