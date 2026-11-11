# Data Filtering

Examples showing how to apply text, custom, date, dynamic, and color filters.

---

> **Placeholders:**
> - `{sheet}` → Worksheet instance variable name
> - `{data-range}` → Range to apply filter (e.g., `'A1:D10'`)
> - `{filter-column}` → Column index for filter (0-based)
> - `{filter-criteria}` → Filter criteria value (e.g., `'2024'`, `100`)

---

## Text Filter

Filter rows containing specific text (case-sensitive).

```dart
final Workbook workbook = Workbook();
final Worksheet worksheet = workbook.worksheets[0];

worksheet.getRangeByName('A1').setText('Title');
worksheet.getRangeByName('A2').setText('Sales Representative');
worksheet.getRangeByName('A3').setText('Owner');

// Set filter range
worksheet.autoFilters.filterRange = worksheet.getRangeByName('A1:A3');

// Apply text filter
final AutoFilter autofilter = worksheet.autoFilters[0];
autofilter.addTextFilter(<String>{'Owner'});
```

### Placeholders
- `'A1:A3'` → Replace with `'{data-range}'` (filter range)
- `'Owner'` → Replace with `'{filter-criteria}'` (text to filter)

## Custom Filter

Apply custom conditions (e.g., range of values).

```dart
final Workbook workbook = Workbook();
final Worksheet worksheet = workbook.worksheets[0];

worksheet.autoFilters.filterRange = worksheet.getRangeByName('A1:C10');
final AutoFilter autofilter = worksheet.autoFilters[0];

// First condition: >= 10
final AutoFilterCondition firstCondition = autofilter.firstCondition;
firstCondition.conditionOperator = ExcelFilterCondition.greaterOrEqual;
firstCondition.numberValue = 10;

// Second condition: < 15
final AutoFilterCondition secondCondition = autofilter.secondCondition;
secondCondition.conditionOperator = ExcelFilterCondition.less;
secondCondition.numberValue = 15;
```

### Placeholders
- `'A1:C10'` → Replace with `'{data-range}'` (filter range)
- `10`, `15` → Replace with `'{filter-criteria}'` (numeric values)

## Date Filter

Filter by year or month.

```dart
final Workbook workbook = Workbook();
final Worksheet worksheet = workbook.worksheets[0];

worksheet.autoFilters.filterRange = worksheet.getRangeByName('A1:C10');
final AutoFilter autofilter = worksheet.autoFilters[1];

autofilter.addDateFilter(DateTime(2002), DateTimeFilterType.year);
autofilter.addDateFilter(DateTime(2009, 5), DateTimeFilterType.year);
```

### Placeholders
- `'A1:C10'` → Replace with `'{data-range}'` (filter range)
- `DateTime(2002)`, `DateTime(2009, 5)` → Replace with `'{filter-criteria}'` (date values)

## Dynamic Filter

Filter using calendar-based conditions.

```dart
final Workbook workbook = Workbook();
final Worksheet worksheet = workbook.worksheets[0];

worksheet.autoFilters.filterRange = worksheet.getRangeByName('A1:C10');
final AutoFilter autofilter = worksheet.autoFilters[1];

autofilter.addDynamicFilter(DynamicFilterType.quarter2);
```

### Placeholders
- `'A1:C10'` → Replace with `'{data-range}'` (filter range)
- `DynamicFilterType.quarter2` → Replace with filter type constant

## Font Color Filter

Filter by text/font color.

```dart
final Workbook workbook = Workbook();
final Worksheet worksheet = workbook.worksheets[0];

worksheet.getRangeByName('C2').cellStyle.fontColor = '#FF0000';
worksheet.autoFilters.filterRange = worksheet.getRangeByName('A1:C10');

final AutoFilter autofilter = worksheet.autoFilters[2];
autofilter.addColorFilter('#FF0000', ExcelColorFilterType.fontColor);
```

### Placeholders
- `'#FF0000'` → Replace with `'{color-value}'` (hex color code)
- `'A1:C10'` → Replace with `'{data-range}'` (filter range)

## Cell Color Filter

Filter by cell background color.

```dart
final Workbook workbook = Workbook();
final Worksheet worksheet = workbook.worksheets[0];

worksheet.getRangeByName('A2').cellStyle.backColor = '#008000';
worksheet.getRangeByName('A3').cellStyle.backColor = '#0000FF';

worksheet.autoFilters.filterRange = worksheet.getRangeByName('A1:C10');
final AutoFilter autofilter = worksheet.autoFilters[0];

autofilter.addColorFilter('#008000', ExcelColorFilterType.cellColor);
```

### Placeholders
- `'#008000'` → Replace with `'{color-value}'` (hex color code)
- `'A1:C10'` → Replace with `'{data-range}'` (filter range)

---

Set `worksheet.autoFilters.filterRange`, then apply filter via `addTextFilter()`, `addDateFilter()`, `addDynamicFilter()`, or `addColorFilter()`.

