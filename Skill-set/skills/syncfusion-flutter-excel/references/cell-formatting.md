# Cell Formatting

Examples showing how to create and apply cell styles, styles globally, merge/unmerge cells, and apply built-in styles.

---

> **Placeholders:**
> - `{workbook}` → Workbook instance variable name
> - `{sheet}` → Worksheet instance variable name
> - `{cell-range}` → Cell range reference (e.g., `'A1'`, `'A1:B5'`)
> - `{style-name}` → Name for custom style (e.g., `'HeaderStyle'`)
> - `{color-value}` → Hex color value (e.g., `'#FF0000'`)
> - `{number-format}` → Number format pattern (e.g., `'0.00'`)

---

## Create and Apply Style

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

final Style style = workbook.styles.add('Style1');
style.backColor = '#FF5050';
style.fontName = 'Aldhabi';
style.fontColor = '#138939';
style.fontSize = 16;
style.bold = true;
style.italic = true;
style.underline = true;
style.rotation = 120;
style.hAlign = HAlignType.center;
style.vAlign = VAlignType.bottom;
style.indent = 1;
style.borders.top.lineStyle = LineStyle.double;
style.borders.top.color = '#FFFF66';
style.wrapText = true;
style.numberFormat = '_(\$* #,##0_)';

workbook.styles.addStyle(style);
sheet.getRangeByName('A1').cellStyle = style;
```

### Placeholders
- `'Style1'` → Replace with `'{style-name}'` (style name)
- `'#FF5050'` → Replace with `'{color-value}'` (hex background color)
- `'Aldhabi'` → Replace with `'{font-name}'` (font family)
- `16` → Replace with `'{font-size}'` (font size)
- `'A1'` → Replace with `'{cell-range}'` (target cell)

## Apply Global Style

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

sheet.getRangeByName('A1').setText('Header');
sheet.getRangeByName('A2').setText('Data');

final Style globalStyle = workbook.styles.add('globalStyle');
globalStyle.backColor = '#37D8E9';
globalStyle.fontName = 'Times New Roman';
globalStyle.fontSize = 12;
globalStyle.fontColor = '#C67878';
globalStyle.bold = true;
globalStyle.italic = true;
globalStyle.hAlign = HAlignType.center;
globalStyle.vAlign = VAlignType.center;
globalStyle.borders.all.lineStyle = LineStyle.thick;
globalStyle.borders.all.color = '#9954CC';

// Apply to range
sheet.getRangeByName('A1:A2').cellStyle = globalStyle;
```

### Placeholders
- `'globalStyle'` → Replace with `'{style-name}'` (style name)
- `'A1:A2'` → Replace with `'{cell-range}'` (cell range)

## Merge and Unmerge Cells

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

// Merge cells
sheet.getRangeByName('A1:C1').merge();

// Unmerge cells
sheet.getRangeByName('A1:C1').unmerge();
```

### Placeholders
- `'A1:C1'` → Replace with `'{cell-range}'` (range to merge/unmerge)

## Apply Built-in Style

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

sheet.getRangeByName('A1').setText('Sample');
sheet.getRangeByName('A1').builtInStyle = BuiltInStyles.checkCell;
```

### Placeholders
- `'A1'` → Replace with `'{cell-range}'` (target cell)
- `BuiltInStyles.checkCell` → Replace with built-in style constant

## Display Text with Format

```dart
final Range range = sheet.getRangeByIndex(1, 1);
range.numberFormat = '0%';
range.setNumber(10);

// Get display text (shows formatted value)
final String displayText = range.displayText;
```

### Placeholders
- `'0%'` → Replace with `'{number-format}'` (number format code)
- `10` → Replace with `'{number-value}'` (numeric value)

---

Use `workbook.styles.add()` to create styles, apply to ranges via `cellStyle` property.
Merge with `merge()`, apply built-ins with `builtInStyle`, and access formatted display with `displayText`.

