---
name: syncfusion-javascript-excel
description: >-
  Create, open, edit, and save Microsoft Excel (.xlsx) workbooks with Syncfusion
  Excel for JavaScript (`@syncfusion/ej2-xlsx`) in Node.js and browsers. Covers worksheets,
  cells, formulas (text only), styles, tables, charts, images, shapes, hyperlinks,
  comments, conditional formatting, data validation, form controls, protection,
  freeze panes, named ranges, and round-trip OOXML preservation. Use when building
  non-UI spreadsheet file processing in JavaScript or TypeScript—not for EJ2
  Spreadsheet or Grid UI components.
metadata:
  author: Syncfusion Inc
  version: "1.0.0"
---

# Syncfusion JavaScript Excel (`@syncfusion/ej2-xlsx`)

Programmatic Excel (`.xlsx`) create / open / edit / save for **Node.js and browsers**. This is a **file-processing library**, not a spreadsheet UI.

**Package:** `@syncfusion/ej2-xlsx`  
**Import surface:** `import { … } from '@syncfusion/ej2-xlsx'` only  
**Not this skill:** EJ2 Spreadsheet component, Grid UI, formula calculation engines, VBA execution

## Table of contents

- [When to use](#when-to-use)
- [Documentation and navigation guide](#documentation-and-navigation-guide)
- [Quick start](#quick-start)
- [Core rules (always apply)](#core-rules-always-apply)
- [Common patterns](#common-patterns)
- [Import checklist](#import-checklist)

## When to use

Use this skill when the user needs to:

- Build or transform `.xlsx` files in JS/TS (reports, exports, ETL, templates)
- Round-trip existing workbooks while preserving unknown OOXML
- Author cells, styles, tables, charts, validation, CF, comments, protection, etc.

Do **not** use for on-screen spreadsheet editing widgets or EJ2 Grid.

## Documentation and navigation guide

### Getting started
📄 **Read:** [references/getting-started.md](references/getting-started.md)
- Install and import
- `Workbook.create` / `open` / `save`
- Node path vs browser bytes
- Minimal create → write cells → save

### Workbook and sheets
📄 **Read:** [references/workbook-and-sheets.md](references/workbook-and-sheets.md)
- `sheet(name|index)`, `activeSheet`, add/remove/move sheets
- Visibility, grid lines, zoom, column width / row height
- Named ranges (`names`), document properties, `date1904`
- Workbook protect / unprotect

### Cells, values, and addresses
📄 **Read:** [references/cells-values-and-addresses.md](references/cells-values-and-addresses.md)
- `cell('A1')` and `cell(row, col)` (1-based)
- `value` / `text` / `number` / `dateTime`
- Sparse grid; clear vs empty
- Error values (`isCellError`)

### Formulas, merges, and hyperlinks
📄 **Read:** [references/formulas-and-merged-hyperlinks.md](references/formulas-and-merged-hyperlinks.md)
- Formula text only (never evaluated)
- No implicit `=+/−/@` promotion on values
- Merged cells
- Hyperlinks (`url` | `file` | `unc` | `workbook`)

### Styles and number formats
📄 **Read:** [references/styles-number-formats.md](references/styles-number-formats.md)
- `CellStyle`: font, fill, border, alignment, protection
- `numberFormat` and built-in vs custom codes
- Append-only style tables (never renumber)

### Rich text and shared strings
📄 **Read:** [references/rich-text-and-shared-strings.md](references/rich-text-and-shared-strings.md)
- `workbook.createFont()` + `cell.richText`
- Shared string storage behavior

### Tables, filters, and sort
📄 **Read:** [references/tables-filters-sort.md](references/tables-filters-sort.md)
- Excel Tables (`tables.add`)
- AutoFilter and sort **metadata only** (not runtime filter/sort engines)

### Charts
📄 **Read:** [references/charts.md](references/charts.md)
- `addChart` + `ChartType.*`
- Legend, title, series
- Do not use `@syncfusion/ej2-xlsx/internal/charts` in app samples

### Images, shapes, and text boxes
📄 **Read:** [references/images-shapes-textboxes.md](references/images-shapes-textboxes.md)
- `addImage` / `addShape` / `addTextBox`
- Anchors in points; preset shapes

### Data validation
📄 **Read:** [references/data-validation.md](references/data-validation.md)
- Whole, decimal, list, date, custom, etc.
- Operators, error UI, list dropdown polarity

### Conditional formatting
📄 **Read:** [references/conditional-formatting.md](references/conditional-formatting.md)
- `conditionalFormats.add(sqref)`
- cellIs, expression, colorScale, dataBar, iconSet, top10, …
- DXF append-only; no runtime paint

### Comments, form controls, and sheet protection
📄 **Read:** [references/comments-controls-protection.md](references/comments-controls-protection.md)
- Classic notes and threaded comments
- Check boxes, combo boxes, and other form controls
- Sheet protect allow-flags; freeze panes

### API conventions
📄 **Read:** [references/api-conventions.md](references/api-conventions.md)
- Index bases (sheet 0-based; cell row/col 1-based)
- Public surface vs internal
- Async save/open; TypeScript patterns

### Capability boundaries
📄 **Read:** [references/capability-boundaries.md](references/capability-boundaries.md)
- What the library does **not** do
- OOXML preservation and security limits
- Workbook protect ≠ file encryption

## Quick start

```ts
import { Workbook } from '@syncfusion/ej2-xlsx';

async function main(): Promise<void> {
  const wb = Workbook.create();
  const sheet = wb.sheet(0); // first sheet; index is 0-based

  sheet.cell('A1').value = 42;
  sheet.cell(1, 2).text = 'hello'; // row 1, column 2 → B1
  sheet.cell('A3').formula = 'SUM(A1:A1)'; // stored as text; leading = stripped
  sheet.cell('A4').numberFormat = '#,##0.00';
  sheet.cell('A4').value = 1234.5;

  // Browser / any host: bytes
  const bytes = await wb.save();

  // Round-trip
  const again = await Workbook.open(bytes);
  console.log(again.sheet(0).cell('A1').value); // 42

  // Node only: path overload
  // await wb.save('./out.xlsx');
  // const fromDisk = await Workbook.open('./out.xlsx');
}

void main();
```

## Core rules (always apply)

1. **Formulas are text.** Never evaluate; never resolve external workbook links.
2. **No implicit formula promotion.** `cell.value = '=1+1'` stays a **string**, not a formula. Use `cell.formula`.
3. **Sparse grid.** Do not allocate cells from dimension/spans/column ranges alone.
4. **Append-only shared tables.** Shared strings, styles, number formats, `dxf` — never renumber existing indices.
5. **Preserve unknown OOXML** on load/save when the library does not model a part.
6. **Public API only** in samples: import from `@syncfusion/ej2-xlsx`. Do not teach `./internal/charts` for application authors.
7. **Indexing:** `sheet(i)` is **0-based**; `cell(row, col)` is **1-based**; A1 strings always work.
8. Prefer `sheet(0)` or `wb.activeSheet` over non-public helpers in teaching samples.
9. `getCell` is deprecated — use **`cell`**.
10. Workbook/sheet **protect** is OOXML protection, **not** AES file encryption / password-to-open.

## Common patterns

### Write a column of values

```ts
const sheet = wb.sheet(0);
const rows = ['Name', 'Ada', 'Lin'];
for (let r = 0; r < rows.length; r++) {
  sheet.cell(r + 1, 1).text = rows[r];
}
```

### Style a header

```ts
sheet.cell('A1').text = 'Total';
sheet.cell('A1').style = {
  font: { bold: true, size: 12 },
  fill: { type: 'pattern', patternType: 'solid', fgColor: { rgb: 'FF4472C4' } },
  alignment: { horizontal: 'center' },
};
```

### Open → edit → save (Node)

```ts
const wb = await Workbook.open('./in.xlsx');
wb.sheet('Sheet1').cell('B2').value = 100;
await wb.save('./out.xlsx');
```

## Import checklist

Typical named imports from `@syncfusion/ej2-xlsx`:

| Need | Import |
|------|--------|
| Workbook I/O | `Workbook` |
| Sheet handle | `Worksheet` (type) |
| Cells | `Cell`, `CellValue`, `isCellError` |
| Styles | `CellStyle`, `BorderStyle`, `Font` |
| Charts | `ChartType`, `LegendPosition`, `Chart` |
| Tables | `Table`, `Tables` |
| CF / DV | `ConditionalFormats`, `DataValidations`, … |
| Protection | `SheetProtectionOptions`, `WorkbookProtectionOptions` |
| Drawing | `AutoShapeType`, `Image`, `TextBox`, `Shape` |

When unsure which reference to open: start at **getting-started**, then **api-conventions**, then the feature file that matches the user task.
