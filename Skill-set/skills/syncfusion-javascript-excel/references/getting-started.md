# Getting started with `@syncfusion/ej2-xlsx`

Create, open, and save Excel `.xlsx` workbooks in Node.js and browsers.

## Table of contents

- [Install](#install)
- [Import](#import)
- [Create a workbook](#create-a-workbook)
- [Write cells](#write-cells)
- [Save](#save)
- [Open](#open)
- [Node vs browser](#node-vs-browser)
- [TypeScript](#typescript)
- [Next topics](#next-topics)
- [Gotchas](#gotchas)

## Install

```bash
npm install @syncfusion/ej2-xlsx
```

Peer/related: the package depends on `@syncfusion/ej2-base` (installed transitively).

## Import

Always import from the package root:

```ts
import { Workbook } from '@syncfusion/ej2-xlsx';
```

Do not import application code from deep paths or from `@syncfusion/ej2-xlsx/internal/charts` unless you are a host integrating chart handoff (out of scope for normal app authoring).

## Create a workbook

```ts
const wb = Workbook.create();
// One visible sheet named Sheet1
const sheet = wb.sheet(0);
```

- `Workbook.create()` is **synchronous**.
- Default sheet name: `Sheet1`.
- Sheet index is **0-based**.

## Write cells

```ts
sheet.cell('A1').value = 42;
sheet.cell('B1').text = 'Report';
sheet.cell('C1').formula = 'A1*2'; // text only — not calculated here
sheet.cell('D1').value = 1234.5;
sheet.cell('D1').numberFormat = '#,##0.00';
```

Cell access:

| Call | Meaning |
|------|---------|
| `sheet.cell('B2')` | A1 address |
| `sheet.cell(2, 2)` | Row **2**, column **2** (1-based) → `B2` |

Setting `value` clears any formula on that cell. Strings are never turned into formulas automatically.

## Save

### Bytes (Node and browser)

```ts
const bytes: Uint8Array = await wb.save();
// upload, download, or write with your own I/O
```

### Path (Node.js only)

```ts
await wb.save('./output.xlsx');
```

Path save returns `Promise<void>`. Path I/O needs Node `fs` and is not available in browsers.

## Open

### From bytes

```ts
const wb = await Workbook.open(bytes); // Uint8Array | ArrayBuffer
const sheet = wb.sheet(0);
const v = sheet.cell('A1').value;
```

### From path (Node.js only)

```ts
const wb = await Workbook.open('./input.xlsx');
```

In the browser, read the file (for example via `<input type="file">` / `fetch`) into `Uint8Array` or `ArrayBuffer`, then call `Workbook.open(data)`.

Formulas in opened files are kept as written and **never evaluated**. External links are **not** resolved.

## Node vs browser

| Operation | Node | Browser |
|-----------|------|---------|
| `Workbook.create()` | Yes | Yes |
| `save()` → `Uint8Array` | Yes | Yes |
| `save(path)` | Yes | No |
| `open(Uint8Array \| ArrayBuffer)` | Yes | Yes |
| `open(path)` | Yes | No |

## TypeScript

```ts
import {
  Workbook,
  type Worksheet,
  type CellValue,
} from '@syncfusion/ej2-xlsx';

async function build(): Promise<Uint8Array> {
  const wb: Workbook = Workbook.create();
  const sheet: Worksheet = wb.sheet(0);
  const value: CellValue = sheet.cell('A1').value;
  sheet.cell('A1').value = 1;
  return wb.save();
}
```

## Next topics

After a minimal pipeline works:

1. Multiple sheets, names, properties — workbook and sheets reference  
2. Dates, errors, clear — cells reference  
3. Styles — styles and number formats reference  
4. Tables, charts, validation — feature references  

## Gotchas

- **`sheet(0)` not `sheet(1)`** for the first sheet.
- **`cell(1, 1)` is A1** (1-based). `cell(0, 0)` is invalid.
- **`await` save/open** — both are async.
- **Formula vs value:** use `.formula` for formulas; `.value = '=SUM(1)'` stores a string.
- **Not a UI:** this library does not render a grid; pair with your own UI or use EJ2 Spreadsheet separately if you need one.
- Prefer **`cell`**, not deprecated `getCell`.
