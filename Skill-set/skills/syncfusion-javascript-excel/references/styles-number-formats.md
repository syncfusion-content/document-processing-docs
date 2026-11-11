# Styles and number formats

Cell appearance via `CellStyle`, borders, fills, alignment, and number format codes.

## Table of contents

- [numberFormat](#numberformat)
- [style object](#style-object)
- [Font](#font)
- [Fill](#fill)
- [Border](#border)
- [Alignment](#alignment)
- [Protection flags on cells](#protection-flags-on-cells)
- [Append-only style tables](#append-only-style-tables)
- [Gotchas](#gotchas)

## numberFormat

```ts
sheet.cell('A1').value = 1234.5;
sheet.cell('A1').numberFormat = '#,##0.00';

sheet.cell('B1').dateTime = new Date(2026, 0, 15);
sheet.cell('B1').numberFormat = 'yyyy-mm-dd';

sheet.cell('C1').value = 0.25;
sheet.cell('C1').numberFormat = '0%';
```

- Format codes follow Excel/OOXML conventions (`#,##0.00`, `0.00%`, date codes, etc.).
- Prefer the public `numberFormat` string API for authoring.
- Custom formats are appended to the workbook number-format table — **existing ids stay stable**.

## style object

```ts
import type { CellStyle } from '@syncfusion/ej2-xlsx';

const header: CellStyle = {
  font: { bold: true, name: 'Calibri', size: 12, color: { rgb: 'FFFFFFFF' } },
  fill: { type: 'pattern', patternType: 'solid', fgColor: { rgb: 'FF4472C4' } },
  alignment: { horizontal: 'center', vertical: 'center', wrapText: true },
  border: {
    bottom: { style: 'thin', color: { rgb: 'FF000000' } },
  },
  protection: { locked: true },
};

sheet.cell('A1').text = 'Header';
sheet.cell('A1').style = header;

// Clear formatting only (value remains)
sheet.cell('A1').style = undefined;
```

`CellStyle` fields:

| Field | Role |
|-------|------|
| `font` | Typeface, size, bold/italic/underline/strike, color |
| `fill` | Pattern or gradient background |
| `border` | Edge styles and colors |
| `alignment` | Horizontal/vertical, wrap, indent, rotation |
| `protection` | `locked` / `hidden` (effective when sheet protected) |
| `numFmtId` | Advanced: existing format id (prefer `numberFormat` string) |

Reading `cell.style` returns the resolved format view for the cell’s style index.

## Font

```ts
sheet.cell('A1').style = {
  font: {
    name: 'Arial',
    size: 11,
    bold: true,
    italic: false,
    underline: 'single',
    strike: false,
    color: { rgb: 'FF000000' },
  },
};
```

Colors commonly use `{ rgb: 'AARRGGBB' }` theme/indexed variants when present on `Color`.

## Fill

Pattern fill (typical solid background):

```ts
sheet.cell('A1').style = {
  fill: {
    type: 'pattern',
    patternType: 'solid',
    fgColor: { rgb: 'FFFFFF00' },
  },
};
```

Gradient fills may appear as gradient payloads on `Fill` when authoring/preserving gradient XML; prefer pattern solids unless you are round-tripping gradient content.

## Border

```ts
import type { Border } from '@syncfusion/ej2-xlsx';

const box: Border = {
  left: { style: 'thin', color: { rgb: 'FF000000' } },
  right: { style: 'thin', color: { rgb: 'FF000000' } },
  top: { style: 'thin', color: { rgb: 'FF000000' } },
  bottom: { style: 'medium', color: { rgb: 'FF000000' } },
};

sheet.cell('B2').style = { border: box };
```

Use `BorderStyle` / edge style names exported by the package (`thin`, `medium`, `dashed`, …).

## Alignment

```ts
sheet.cell('A1').style = {
  alignment: {
    horizontal: 'center', // general|left|center|right|fill|justify|centerContinuous|distributed
    vertical: 'center',   // top|center|bottom|justify|distributed
    wrapText: true,
    indent: 1,
    textRotation: 0,      // 0–180; 255 = stacked
    shrinkToFit: false,
  },
};
```

## Protection flags on cells

```ts
sheet.cell('A1').style = {
  protection: {
    locked: true,   // cannot edit when sheet protected (default Excel behavior often locked)
    hidden: false,  // hide formula text in formula bar when sheet protected
  },
};
```

These flags matter only after `worksheet.protect(…)`.

## Append-only style tables

Critical integrity rule:

- Style xf rows, fonts, fills, borders, and number formats are **append-only**.
- **Never renumber** existing indices; every existing cell style index must keep pointing at the same semantic row.
- Agents must not “compact” style tables when saving.

The public style setters already ensure cells through workbook style services — do not hand-edit `styles.xml`.

## Gotchas

- Setting `style` replaces the cell’s style index via ensure-xf — merge carefully if you need partial updates (read-modify-write the style object).
- `numberFormat` and `style.numFmtId` interact; prefer one clear authoring path.
- RGB often includes alpha (`FF` prefix).
- Clearing style does not clear value/formula; clearing value does not clear style.
