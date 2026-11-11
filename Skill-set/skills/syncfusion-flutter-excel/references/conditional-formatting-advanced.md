# Conditional Formatting Advanced

Color scales, icon sets, and data bars for visual data analysis.

---

> **Placeholders:**
> - `{sheet}` → Worksheet instance variable name
> - `{cell-range}` → Range for formatting (e.g., `'A1:A10'`)
> - `{min-color}` → Hex color for minimum values (e.g., `'#0070C0'`)
> - `{max-color}` → Hex color for maximum values (e.g., `'#FFC000'`)
> - `{icon-type}` → Icon set type (e.g., `ExcelIconSetType.ThreeTrafficLights`)

---

## Color Scales

Apply gradient color based on cell values (2-3 color scale):

```dart
final ConditionalFormats conditionalFormats = sheet.getRangeByName('B1:B11').conditionalFormats;
final ConditionalFormat conditionalFormat = conditionalFormats.addCondition();

conditionalFormat.formatType = ExcelCFType.colorScale;
final ColorScale colorScale = conditionalFormat.colorScale!;

// 3-color scale
colorScale.setConditionCount(3);

// Lowest value - Blue
colorScale.criteria[0].formatColor = '#2C36F6';
colorScale.criteria[0].type = ConditionValueType.lowestValue;
colorScale.criteria[0].value = '0';

// Middle value - Red (50th percentile)
colorScale.criteria[1].formatColorRgb = Color.fromARGB(255, 200, 20, 100);
colorScale.criteria[1].type = ConditionValueType.percentile;
colorScale.criteria[1].value = '50';

// Highest value - Orange
colorScale.criteria[2].formatColor = '#F06506';
colorScale.criteria[2].type = ConditionValueType.highestValue;
colorScale.criteria[2].value = '0';
```

### Placeholders
- `'B1:B11'` → Replace with `'{cell-range}'` (target range)
- `'#2C36F6'`, `'#F06506'` → Replace with `'{color-value}'` (hex colors)

## Icon Sets

Apply icons based on cell values:

```dart
final ConditionalFormats conditionalFormats = sheet.getRangeByName('C1:C11').conditionalFormats;
final ConditionalFormat conditionalFormat = conditionalFormats.addCondition();

conditionalFormat.formatType = ExcelCFType.iconSet;
final IconSet iconSet = conditionalFormat.iconSet!;

// Three symbols icon
iconSet.iconSet = ExcelIconSetType.threeSymbols;
iconSet.iconCriteria[1].type = ConditionValueType.percent;
iconSet.iconCriteria[1].value = "40";
iconSet.iconCriteria[2].type = ConditionValueType.percent;
iconSet.iconCriteria[2].value = "80";

// Hide the data values
iconSet.showIconOnly = true;
```

### Placeholders
- `'C1:C11'` → Replace with `'{cell-range}'` (target range)
- `"40"`, `"80"` → Replace with `'{threshold-value}'` (percentage thresholds)

## Custom Icon Sets

Create icon sets with custom icons and thresholds:

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

sheet.getRangeByName('A1').setNumber(125);
sheet.getRangeByName('A2').setNumber(279);
sheet.getRangeByName('A3').setNumber(42);

final ConditionalFormats conditionalFormats = sheet.getRangeByName('A1:A10').conditionalFormats;
final ConditionalFormat conditionalFormat = conditionalFormats.addCondition();

conditionalFormat.formatType = ExcelCFType.iconSet;
final IconSet iconSet = conditionalFormat.iconSet!;

// Set base icon set
iconSet.iconSet = ExcelIconSetType.threeFlags;

// Customize each icon
final IconConditionValue iconValue1 = iconSet.iconCriteria[0] as IconConditionValue;
iconValue1.iconSet = ExcelIconSetType.fiveBoxes;
iconValue1.index = 3;
iconValue1.type = ConditionValueType.percent;
iconValue1.value = '25';
iconValue1.operator = ConditionalFormatOperator.greaterThan;

final IconConditionValue iconValue2 = iconSet.iconCriteria[1] as IconConditionValue;
iconValue2.iconSet = ExcelIconSetType.threeSigns;
iconValue2.index = 2;
iconValue2.type = ConditionValueType.percent;
iconValue2.value = '50';
iconValue2.operator = ConditionalFormatOperator.greaterThan;

final IconConditionValue iconValue3 = iconSet.iconCriteria[2] as IconConditionValue;
iconValue3.iconSet = ExcelIconSetType.fourRating;
iconValue3.index = 0;
iconValue3.type = ConditionValueType.percent;
iconValue3.value = '75';
iconValue3.operator = ConditionalFormatOperator.greaterThan;
```

### Placeholders
- `'A1:A10'` → Replace with `'{cell-range}'` (target range)
- `'25'`, `'50'`, `'75'` → Replace with `'{threshold-value}'` (percentage thresholds)

## Data Bars

Display bars in cells representing relative values:

```dart
final ConditionalFormats conditionalFormats = sheet.getRangeByName('D1:D11').conditionalFormats;
final ConditionalFormat conditionalFormat = conditionalFormats.addCondition();

conditionalFormat.formatType = ExcelCFType.dataBar;
final DataBar dataBar = conditionalFormat.dataBar!;

// Set constraints
dataBar.minPoint.type = ConditionValueType.lowestValue;
dataBar.maxPoint.type = ConditionValueType.highestValue;

// Bar color (hex)
dataBar.barColor = '#FF7C80';

// Bar color (RGB)
dataBar.barColorRgb = Color.fromARGB(255, 200, 13, 145);

// Hide values
dataBar.showValue = false;

// Add border
dataBar.hasBorder = true;
dataBar.borderColor = '#12DD01';
dataBar.borderColorRgb = Color.fromARGB(245, 45, 244, 230);

// Gradient fill (solid if false)
dataBar.hasGradientFill = false;

// Axis position
dataBar.dataBarAxisPosition = DataBarAxisPosition.middle;

// Bar direction
dataBar.dataBarDirection = DataBarDirection.rightToLeft;

// Negative values styling
dataBar.negativeFillColor = '#013461';
dataBar.negativeFillColorRgb = Color.fromARGB(230, 201, 230, 100);
dataBar.negativeBorderColor = '#ED7D31';
dataBar.negativeBorderColorRgb = Color.fromARGB(255, 200, 130, 0);

// Axis color
dataBar.barAxisColor = '#FFDD12';
dataBar.barAxisColorRgb = Color.fromARGB(255, 134, 44, 224);
```

### Placeholders
- `'D1:D11'` → Replace with `'{cell-range}'` (target range)
- `'#FF7C80'`, `'#12DD01'`, `'#013461'`, `'#FFDD12'` → Replace with `'{color-value}'` (hex colors)

## Complete Advanced Example

Combine color scales, icon sets, and data bars:

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

// Add data
sheet.getRangeByName('A1').setText('Name');
sheet.getRangeByName('A2').setText('Andy');
sheet.getRangeByName('B1').setText('Mark-1');
sheet.getRangeByName('B2').setNumber(35);
sheet.getRangeByName('C1').setText('Mark-2');
sheet.getRangeByName('C2').setNumber(45);

// Color scale - B column
ConditionalFormats cf = sheet.getRangeByName('B1:B11').conditionalFormats;
ConditionalFormat cformat = cf.addCondition();
cformat.formatType = ExcelCFType.colorScale;
final ColorScale colorScale = cformat.colorScale!;
colorScale.setConditionCount(3);
colorScale.criteria[0].formatColor = '#2C36F6';
colorScale.criteria[0].type = ConditionValueType.lowestValue;
colorScale.criteria[1].formatColorRgb = Color.fromARGB(255, 200, 20, 100);
colorScale.criteria[1].type = ConditionValueType.percentile;
colorScale.criteria[1].value = '50';
colorScale.criteria[2].formatColor = '#F06506';
colorScale.criteria[2].type = ConditionValueType.highestValue;

// Icon set - C column
cf = sheet.getRangeByName('C1:C11').conditionalFormats;
cformat = cf.addCondition();
cformat.formatType = ExcelCFType.iconSet;
final IconSet iconSet = cformat.iconSet!;
iconSet.iconSet = ExcelIconSetType.threeSymbols;
iconSet.iconCriteria[1].type = ConditionValueType.percent;
iconSet.iconCriteria[1].value = "40";
iconSet.iconCriteria[2].type = ConditionValueType.percent;
iconSet.iconCriteria[2].value = "80";
iconSet.showIconOnly = true;

// Data bar - D column
cf = sheet.getRangeByName('D1:D11').conditionalFormats;
cformat = cf.addCondition();
cformat.formatType = ExcelCFType.dataBar;
final DataBar dataBar = cformat.dataBar!;
dataBar.minPoint.type = ConditionValueType.lowestValue;
dataBar.maxPoint.type = ConditionValueType.highestValue;
dataBar.barColorRgb = Color.fromARGB(255, 244, 180, 10);
dataBar.showValue = false;


### Placeholders
- `'B1:B11'`, `'C1:C11'`, `'D1:D11'` → Replace with `'{cell-range}'` (target ranges)
- `'AdvancedConditionalFormat.xlsx'` → Replace with `'{output-file}'` (output file name)
final List<int> bytes = workbook.saveSync();
File('AdvancedConditionalFormat.xlsx').writeAsBytes(bytes);
workbook.dispose();
```

## Color Scale Condition Types

**ConditionValueType Options:**
- `ConditionValueType.lowestValue`: Minimum value in range
- `ConditionValueType.highestValue`: Maximum value in range
- `ConditionValueType.percentile`: Percentile value (0-100)
- `ConditionValueType.percent`: Percentage value (0-100)
- `ConditionValueType.formula`: Custom formula
- `ConditionValueType.number`: Specific number value

## Icon Set Types

**ExcelIconSetType Options:**
- `threeSymbols`, `threeSymbols2`
- `threeTrafficLights`, `threeTrafficLights2`
- `threeSigns`
- `threeFlags`
- `threeBoxes`
- `fourArrows`, `fourArrowsGray`, `fourRating`, `fourBoxes`, `fourTrafficLights`
- `fiveArrows`, `fiveArrowsGray`, `fiveRating`, `fiveBoxes`, `fiveQuarters`

## Data Bar Positions and Directions

**DataBarAxisPosition:**
- `DataBarAxisPosition.automatic`: Automatic placement
- `DataBarAxisPosition.middle`: Center of cell
- `DataBarAxisPosition.cellEdge`: Start of cell

**DataBarDirection:**
- `DataBarDirection.leftToRight`: Left to right (default)
- `DataBarDirection.rightToLeft`: Right to left

### Placeholders
- `'automatic'`, `'middle'`, `'cellEdge'` → Replace with `'{axis-position}'` (data bar position)
- `'leftToRight'`, `'rightToLeft'` → Replace with `'{direction}'` (data bar direction)

## Notes

- Color scales use 2 or 3 colors to represent cell value ranges
- Icon sets display icons without cell values when `showIconOnly = true`
- Data bars are drawn inside cells, optionally with borders
- Negative values in data bars can have custom colors and borders
- All color values can use hex (#RRGGBB) or RGB Color.fromARGB()
- Multiple advanced formats can be applied to different columns in same worksheet
