# Cells, values, and addresses

Read and write cell contents through the public `Cell` handle.

## Table of contents

- [Addressing](#addressing)
- [value](#value)
- [text and number](#text-and-number)
- [dateTime](#datetime)
- [Errors](#errors)
- [clear](#clear)
- [address property](#address-property)
- [Sparse grid](#sparse-grid)
- [Gotchas](#gotchas)

## Addressing

```ts
const sheet = wb.sheet(0);

const a1 = sheet.cell('A1');
const b2 = sheet.cell('B2');
const alsoB2 = sheet.cell(2, 2); // row, column — both 1-based
```

| Form | Rules |
|------|--------|
| `cell('A1')` | A1 notation (absolute `$A$1` accepted per parser rules) |
| `cell(row, col)` | **1-based** row and column (`1,1` → A1) |

Use **`cell`**, not deprecated `getCell`.

## value

`CellValue` is roughly: `number | string | boolean | CellError | null`.

```ts
sheet.cell('A1').value = 10;
sheet.cell('A2').value = 'hello';
sheet.cell('A3').value = true;
sheet.cell('A4').value = null; // clear contents (see clear)

const v = sheet.cell('A1').value;
```

Rules:

- Setting `value` **clears any formula** on that cell.
- **Strings are never formulas**, even if they start with `=`, `+`, `-`, or `@`.
- Numbers must be finite IEEE-754 values.
- Reading a formula cell returns the **cached result** if present; the engine does **not** recalculate.

```ts
sheet.cell('B1').value = '=1+1';
// stored as plain text "=", "1+1" — NOT a formula
console.log(typeof sheet.cell('B1').value); // string
```

## text and number

Convenience accessors over `value`:

```ts
sheet.cell('A1').text = 'Title';
const t = sheet.cell('A1').text; // string | null

sheet.cell('B1').number = 3.14;
const n = sheet.cell('B1').number; // number | null
```

- `.text` is `null` when empty or non-text.
- `.number` is `null` when empty or non-number.
- Assign `null` to clear via that accessor.

## dateTime

Dates are stored as Excel serial numbers plus a number format.

```ts
sheet.cell('C1').dateTime = new Date(2026, 0, 15);
const d = sheet.cell('C1').dateTime; // Date | null / per API
```

- Uses the workbook `date1904` setting for conversion.
- Applying a date typically assigns a default date number format when appropriate.
- Prefer `dateTime` over hand-rolled serials unless you are matching wire values exactly.

## Errors

```ts
import { isCellError, KNOWN_CELL_ERROR_CODES } from '@syncfusion/ej2-xlsx';

sheet.cell('D1').value = { code: '#N/A' };

const v = sheet.cell('D1').value;
if (isCellError(v)) {
  console.log(v.code);
}
```

Only known spreadsheet error codes are accepted; unknown codes throw.

## clear

```ts
sheet.cell('A1').clear();
```

Clears **value and formula**; **keeps** formatting (style / number format). Hyperlinks are **not** removed by `clear()` — clear `cell.hyperlink` separately.

Assigning `value = null` follows the clear-contents path.

## address property

```ts
const addr = sheet.cell(3, 4).address; // 'D3'
```

## Sparse grid

- Cells exist only when written (or loaded from package content).
- Do **not** pre-allocate a dense matrix from `dimension`, `spans`, or column ranges.
- Empty reads return empty/`null` style values without fabricating neighbors.

```ts
// Good: write only what you need
for (const [i, name] of ['A', 'B'].entries()) {
  sheet.cell(i + 1, 1).text = name;
}

// Bad: looping 1..1048576 “because Excel has that many rows”
```

## Gotchas

- **`value` vs `formula`:** never rely on leading `=` in `value`.
- **Formula results:** without Excel/another calc pass, cached results may be missing on new formulas.
- **Boolean and error** are first-class `value` types — do not stringify them unless intended.
- **Hyperlink display text** may set the cell value when configured via hyperlink APIs; clearing value alone may leave the link.
- Row/col in `cell(row, col)` are **not** 0-based.
