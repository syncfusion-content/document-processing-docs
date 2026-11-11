# API conventions

Indexing, imports, async I/O, naming, and TypeScript patterns for `@syncfusion/ej2-xlsx`.

## Table of contents

- [Package imports](#package-imports)
- [Index bases](#index-bases)
- [Async I/O](#async-io)
- [Naming and one surface per concept](#naming-and-one-surface-per-concept)
- [Collections pattern](#collections-pattern)
- [Errors](#errors)
- [TypeScript tips](#typescript-tips)
- [What not to import](#what-not-to-import)

## Package imports

```ts
import {
  Workbook,
  ChartType,
  BorderStyle,
  type CellStyle,
  type Worksheet,
  type SheetProtectionOptions,
} from '@syncfusion/ej2-xlsx';
```

- Single public entry: `@syncfusion/ej2-xlsx`.
- Prefer type-only imports for interfaces when emitting `import type`.

## Index bases

| API | Basis |
|-----|--------|
| `wb.sheet(i)` | **0-based** sheet index |
| `wb.worksheets[i]` | **0-based** |
| `sheet.cell(row, col)` | **1-based** row and column |
| Drawing anchors (`addChart`, `addImage`, …) | **1-based** row/column |
| `setColumnWidth(col, …)` / `setRowHeight(row, …)` | **1-based** |
| Remove-by-index on drawings often | **0-based** among that collection |

A1 strings always allowed where documented (`cell('B2')`, ranges, freezeAt, …).

## Async I/O

```ts
const wb = Workbook.create();          // sync
const bytes = await wb.save();         // async
await wb.save('./out.xlsx');           // async, Node path
const opened = await Workbook.open(bytes); // async
const fromPath = await Workbook.open('./in.xlsx'); // async, Node
```

Never treat `save`/`open` as synchronous.

## Naming and one surface per concept

- Use **`cell`**, not deprecated `getCell`.
- Prefer **`sheet(0)` / `activeSheet` / `sheet(name)`** in samples.
- Hyperlinks: cell `hyperlink` property and `sheet.hyperlinks` collection — do not invent parallel APIs.
- Chart authoring: `Worksheet.addChart` — not internal chart helpers.
- Formula text on `cell.formula` — not by stuffing `=` into `value`.

## Collections pattern

Many features follow:

```ts
const item = sheet.X.add(…);
for (const x of sheet.X) { /* … */ }
sheet.removeX(item); // or collection remove
```

Examples: `tables`, `hyperlinks`, `conditionalFormats`, `dataValidations`, `comments`, charts via `addChart`/`removeChart`, images/shapes/text boxes.

## Errors

Public error types (subset) include:

- `InvalidArgumentError`
- `InvalidCommentError`
- `InvalidProtectionError`
- `InvalidThreadedCommentError`
- Plus cell/formula/value errors used by `Cell` setters

Catch these when validating user input; do not swallow package integrity errors silently.

## TypeScript tips

```ts
import {
  Workbook,
  isCellError,
  type CellValue,
  type CellStyle,
} from '@syncfusion/ej2-xlsx';

function readNumber(v: CellValue): number | null {
  if (typeof v === 'number') return v;
  if (isCellError(v)) return null;
  return null;
}

const style: CellStyle = { font: { bold: true } };
```

- `CellValue` narrow with `typeof` and `isCellError`.
- Const objects like `ChartType.ColumnClustered` are string values, not numeric enums.
- Enable normal strict TS; the library avoids `any` on its public surface.

## What not to import

| Avoid | Why |
|-------|-----|
| `@syncfusion/ej2-xlsx/internal/charts` | Host-only chart handoff |
| Deep `src/…` paths | Not a supported public surface |
| Private members (`@private`) | May change; stripped from teaching surface |
| Hand-built OOXML strings in feature tests/samples | Use public API |

## Quick checklist for agents

1. Import root only  
2. `await` open/save  
3. Sheet index 0-based; cell row/col 1-based  
4. `cell` + `formula`/`value` distinction  
5. No formula evaluation  
6. No style/SST/dxf renumbering  
