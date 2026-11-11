# Conditional formatting

Author CF rules on worksheet ranges. Rules are stored for Excel; this library does **not** paint cells at runtime.

## Table of contents

- [Add a rule](#add-a-rule)
- [Rule types](#rule-types)
- [cellIs example](#cellis-example)
- [Expression, top10, unique/duplicate](#expression-top10-uniqueduplicate)
- [Color scale, data bar, icon set](#color-scale-data-bar-icon-set)
- [Differential format](#differential-format)
- [Overlaps and priority](#overlaps-and-priority)
- [Gotchas](#gotchas)

## Add a rule

```ts
import { Workbook } from '@syncfusion/ej2-xlsx';

const wb = Workbook.create();
const sheet = wb.sheet(0);

// Default type is typically cellIs
const cf = sheet.conditionalFormats.add('A1:A20');
```

`conditionalFormats.add(sqref)` takes a space-separated sqref list / A1 range string per API and returns `ConditionalFormat`.

## Rule types

`ConditionalFormatType` is a **string-literal union**. Assign camelCase strings:

| Type | Role |
|------|------|
| `'cellIs'` | Compare cell to formula/value + operator (default on `add`) |
| `'expression'` | Formula returns true/false |
| `'colorScale'` | 2- or 3-color scale |
| `'dataBar'` | Data bars |
| `'iconSet'` | Icon sets |
| `'top10'` | Top/bottom N (or %) |
| `'uniqueValues'` / `'duplicateValues'` | Unique/duplicate highlight |
| Text/time types | `'containsText'`, `'timePeriod'`, … |

Also exported as types/handles: `ConditionalFormatOperator`, `ConditionalFormatTimePeriod`, `ColorScale`, `DataBar`, `IconSet`, `CfThresholdType`, etc.

## cellIs example

```ts
import type {
  ConditionalFormatType,
  ConditionalFormatOperator,
} from '@syncfusion/ej2-xlsx';

const cf = sheet.conditionalFormats.add('B2:B100');
const type: ConditionalFormatType = 'cellIs';
const operator: ConditionalFormatOperator = 'greaterThan';
cf.type = type;
cf.operator = operator;
cf.firstFormula = '100'; // opaque comparison text (also via formulas / secondFormula)

cf.format = {
  font: { bold: true, color: { rgb: 'FFFF0000' } },
  fill: { type: 'pattern', patternType: 'solid', fgColor: { rgb: 'FFFFFF66' } },
};
```

## Expression, top10, unique/duplicate

```ts
const expr = sheet.conditionalFormats.add('C2:C50');
expr.type = 'expression';
expr.firstFormula = 'C2>AVERAGE($C$2:$C$50)'; // opaque — not evaluated here

const top = sheet.conditionalFormats.add('D2:D50');
top.type = 'top10';
top.rank = 10;
top.percent = false;
top.bottom = false;

const dup = sheet.conditionalFormats.add('E2:E50');
dup.type = 'duplicateValues';
```

## Color scale, data bar, icon set

```ts
const scale = sheet.conditionalFormats.add('F2:F50');
scale.type = 'colorScale';
// configure scale.colorScale / CfValuePoint stops after enabling the type

const bars = sheet.conditionalFormats.add('G2:G50');
bars.type = 'dataBar';
// DataBarDirection, DataBarAxisPosition on bars.dataBar

const icons = sheet.conditionalFormats.add('H2:H50');
icons.type = 'iconSet';
// IconSetType + CfIconCriterion on icons.iconSet
```

## Differential format

Highlight formatting uses differential formats (`dxf`):

```ts
cf.format = {
  font: { bold: true },
  fill: { type: 'pattern', patternType: 'solid', fgColor: { rgb: 'FFC6EFCE' } },
  border: {
    bottom: { style: 'thin', color: { rgb: 'FF000000' } },
  },
  // numFmt: { formatCode: '0.0%' } when supported on input shape
};
```

- DXF entries are **append-only**; never renumber existing `dxf` ids.
- `DifferentialFormat*` interfaces may be structural (not all re-exported as constructors) — assign plain objects matching the input shape.

## Overlaps and priority

- Overlapping `sqref` regions are allowed; Excel applies rule priority/stop-if-true semantics.
- Set priority/stop-if-true properties when exposed on `ConditionalFormat`.
- The library does **not** compute which cells “currently” match.

## Gotchas

- No runtime conditional paint in Node/browser via this package alone.
- CF formulas are text; do not execute them in the agent.
- Prefer public `conditionalFormats` collection over editing `cfRule` XML.
- Keep style tables append-only when many rules share similar formats.
