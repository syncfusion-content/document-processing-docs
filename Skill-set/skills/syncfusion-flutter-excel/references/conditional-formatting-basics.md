# Conditional Formatting Basics

Apply dynamic cell formatting based on criteria and values.

---

> **Placeholders:**
> - `{sheet}` → Worksheet instance variable name
> - `{cell-range}` → Range for formatting (e.g., `'A1:A10'`)
> - `{format-type}` → Format rule type (e.g., `ExcelCFType.CellValue`)
> - `{criteria}` → Criteria operator or value
> - `{color-value}` → Hex color for formatting (e.g., `'#FF0000'`)

---

## Creating Conditional Formats

Add conditional formatting rules to cell ranges:

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

// Add conditional formatting to range A1
final ConditionalFormats conditions = sheet.getRangeByName('A1').conditionalFormats;
final ConditionalFormat condition = conditions.addCondition();

// Set format type and operator
condition.formatType = ExcelCFType.cellValue;
condition.operator = ExcelComparisonOperator.between;
condition.firstFormula = '10';
condition.secondFormula = '20';

// Apply formatting when criteria is met
condition.backColor = '#66FF99';
condition.fontColor = '#448EBC';
condition.isBold = true;
condition.isItalic = true;
```

### Placeholders
- `'A1'` → Replace with `'{cell-range}'` (target range)
- `'10'`, `'20'` → Replace with `'{value}'` (comparison values)

## Cell Value Comparisons

Format cells based on comparison operators:

```dart
// Equal to
condition.operator = ExcelComparisonOperator.equal;
condition.firstFormula = '100';

// Greater than
condition.operator = ExcelComparisonOperator.greaterThan;
condition.firstFormula = '50';

// Greater than or equal
condition.operator = ExcelComparisonOperator.greaterOrEqual;
condition.firstFormula = '50';

// Between two values
condition.operator = ExcelComparisonOperator.between;
condition.firstFormula = '10';
condition.secondFormula = '20';
```

### Placeholders
- `'10'`, `'20'`, `'50'`, `'100'` → Replace with `'{value}'` (comparison values)

## Format Properties

Set formatting applied when condition is met:

```dart
final ConditionalFormat condition = conditions.addCondition();

// Colors
condition.backColor = '#66FF99';           // Hex color
condition.fontColor = '#FF1574';           // Hex color
condition.backColorRgb = Color.fromARGB(255, 150, 200, 50);
condition.fontColorRgb = Color.fromARGB(255, 200, 20, 100);

// Font styles
condition.isBold = true;
condition.isItalic = true;
condition.underline = true;

// Number format
condition.numberFormat = '0.0';

// Borders
condition.topBorderStyle = LineStyle.thick;
condition.topBorderColor = '#FFCC00';
condition.rightBorderStyle = LineStyle.double;
condition.bottomBorderStyle = LineStyle.thin;
condition.leftBorderStyle = LineStyle.medium;
```

### Placeholders
- `'#66FF99'`, `'#FF1574'`, `'#FFCC00'` → Replace with `'{color-value}'` (hex colors)
- `'0.0'` → Replace with `'{number-format}'` (number format code)

## Format Specific Text

Highlight cells containing specific text:

```dart
final ConditionalFormats conditions = sheet.getRangeByName('A1:A10').conditionalFormats;
final ConditionalFormat condition = conditions.addCondition();

condition.formatType = ExcelCFType.specificText;
condition.operator = ExcelComparisonOperator.containsText;
condition.text = 'm';  // Text to match

condition.backColor = '#00FF99';
condition.fontColor = '#CE2622';
condition.isBold = true;
condition.underline = true;
```

### Placeholders
- `'A1:A10'` → Replace with `'{cell-range}'` (target range)
- `'m'` → Replace with `'{text-value}'` (text to match)

## Format Date Occurring

Highlight cells with specific dates:

```dart
final ConditionalFormat condition = conditions.addCondition();

condition.formatType = ExcelCFType.timePeriod;
condition.timePeriodType = CFTimePeriods.yesterday;

condition.backColor = '#FFFF00';
condition.fontColor = '#FF33CC';
condition.isBold = true;
condition.numberFormat = 'd-mmm';

// Add date values
final now = DateTime.now();
sheet.getRangeByIndex(1, 1).setDateTime(DateTime(now.year, now.month, now.day));
sheet.getRangeByIndex(2, 1).setDateTime(DateTime(now.year, now.month, now.day - 1));
```

### Placeholders
- `'d-mmm'` → Replace with `'{number-format}'` (date format code)

## Format Unique and Duplicate Values

Highlight duplicate or unique entries:

```dart
final ConditionalFormats conditions = sheet.getRangeByName('B1:B11').conditionalFormats;
final ConditionalFormat condition = conditions.addCondition();

// Duplicate values
condition.formatType = ExcelCFType.duplicate;
condition.backColor = '#FF8C53';
condition.isItalic = true;

// Unique values
condition.formatType = ExcelCFType.unique;
condition.backColor = '#CCFFCC';
```

### Placeholders
- `'B1:B11'` → Replace with `'{cell-range}'` (target range)

## Format Top/Bottom Values

Highlight top or bottom ranked cells:

```dart
final ConditionalFormat condition = conditions.addCondition();

condition.formatType = ExcelCFType.topBottom;
final TopBottom topBottom = condition.topBottom!;

// Top 8 values
topBottom.type = ExcelCFTopBottomType.top;
topBottom.rank = 8;

// Bottom 50%
topBottom.type = ExcelCFTopBottomType.bottom;
topBottom.percent = true;
topBottom.rank = 50;

condition.backColor = '#934ADD';
condition.isBold = true;
```

### Placeholders
- `8`, `50` → Replace with `'{rank-value}'` (rank or percentage value)

## Format Above/Below Average Values
Highlight cells above or below the average:

```dart
final ConditionalFormat condition = conditions.addCondition();

condition.formatType = ExcelCFType.aboveBelowAverage;
final AboveBelowAverage aboveBelowAverage = condition.aboveBelowAverage!;

// Below average
aboveBelowAverage.averageType = ExcelCFAverageType.below;

// Above average
aboveBelowAverage.averageType = ExcelCFAverageType.above;

// Above standard deviation
aboveBelowAverage.averageType = ExcelCFAverageType.aboveStdDev;
aboveBelowAverage.stdDevValue = 1;  // 1-3 range

condition.backColor = '#FF0D0D';
condition.fontColor = '#FFFFFF';
```

### Placeholders
- `1` → Replace with `'{std-dev-value}'` (standard deviation multiplier)

## Using R1C1 Formulas

Apply formulas in R1C1-style notation:

```dart
final ConditionalFormat condition = conditions.addCondition();

condition.formatType = ExcelCFType.cellValue;
condition.operator = ExcelComparisonOperator.between;
condition.firstFormulaR1C1 = '=R[1]C[0]';     // Row offset, Column offset
condition.secondFormulaR1C1 = '=R[8]C[0]';
```

### Placeholders
- `'=R[1]C[0]'`, `'=R[8]C[0]'` → Replace with R1C1 formula references

## Multiple Conditions on Range

Add multiple conditions (applied in order of priority):

```dart
final ConditionalFormats conditions = sheet.getRangeByName('A1:A10').conditionalFormats;

// Condition 1
final ConditionalFormat cond1 = conditions.addCondition();
cond1.formatType = ExcelCFType.cellValue;
cond1.operator = ExcelComparisonOperator.greaterThan;
cond1.firstFormula = '50';
cond1.backColor = '#FF0000';

// Condition 2
final ConditionalFormat cond2 = conditions.addCondition();
cond2.formatType = ExcelCFType.cellValue;
cond2.operator = ExcelComparisonOperator.lessThan;
cond2.firstFormula = '20';
cond2.backColor = '#0000FF';
```

### Placeholders
- `'A1:A10'` → Replace with `'{cell-range}'` (target range)
- `'50'`, `'20'` → Replace with `'{value}'` (comparison values)

## Notes

- Conditional formats for a single range should be added in descending order
- Multiple conditions on same range are applied in order of priority
- Format is applied when criteria is met
- Use hex colors (#RRGGBB) or RGB Color.fromARGB() for colors
- All cells are locked by default; use format properties only
