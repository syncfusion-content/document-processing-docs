# Formulas, merged cells, and hyperlinks

Formula text storage, merges, and cell/sheet hyperlinks.

## Table of contents

- [Formulas (text only)](#formulas-text-only)
- [No implicit promotion](#no-implicit-promotion)
- [Merged cells](#merged-cells)
- [Hyperlinks](#hyperlinks)
- [Cell hyperlink property](#cell-hyperlink-property)
- [Gotchas](#gotchas)

## Formulas (text only)

```ts
const sheet = wb.sheet(0);
sheet.cell('A1').value = 1;
sheet.cell('A2').value = 2;
sheet.cell('A3').formula = 'SUM(A1:A2)';
// Leading '=' is normalized/stripped — store expression text only
sheet.cell('A4').formula = '=A1+A2';
```

Rules enforced by the library:

- Formulas are **opaque text** — **never evaluated** during parse, edit, or save.
- **External workbook links are never resolved.**
- Reading `.value` on a formula cell returns the **last cached result** if the file had one; new formulas may have no cached value until Excel calculates.
- Set `formula` to `undefined` (or clear-formula APIs) to remove `f` while leaving cached `v` when applicable.

```ts
const expr = sheet.cell('A3').formula; // string | undefined — expression text
sheet.cell('A3').formula = undefined;  // clear formula structure per API
```

Invalid empty expressions after normalize throw `InvalidFormulaError`.

## No implicit promotion

```ts
sheet.cell('B1').value = '=SUM(1,2)'; // STRING, not formula
sheet.cell('B2').text = '+123';       // STRING
sheet.cell('B3').formula = 'SUM(1,2)'; // formula
```

Strings beginning with `=`, `+`, `-`, or `@` stay strings unless assigned through **`formula`**.

## Merged cells

Use the worksheet merges collection:

```ts
// sheet.merges — MergedCells API
sheet.merges.add('A1:B2');
// enumerate / remove via merges collection methods
```

```ts
import { Workbook } from '@syncfusion/ej2-xlsx';

const wb = Workbook.create();
const sheet = wb.sheet(0);
sheet.cell('A1').text = 'Title';
sheet.merges.add('A1:D1');
```

Notes:

- Only the top-left cell typically holds the value in Excel semantics.
- Merges are structural OOXML; keep ranges valid (no contradictory overlap patterns your product forbids).

`Worksheet.range(ref)` may exist for range helpers; the `Range` type is not emphasized as a root export for teaching — prefer `merges` and cell APIs in samples.

## Hyperlinks

Sheet collection:

```ts
sheet.hyperlinks.add(
  'A1',                    // ref
  'https://example.com',   // target
  'Click here',            // displayText (optional)
  'Example site',          // tooltip (optional)
  'url',                   // type optional: url | file | unc | workbook
  // subAddress optional for workbook jumps
);
```

| Type | Typical target |
|------|----------------|
| `url` | `https://…` |
| `file` | File path |
| `unc` | UNC path |
| `workbook` | Internal location; use `subAddress` as needed |

**External targets are never fetched** by the library.

Remove/enumerate through `sheet.hyperlinks` collection APIs.

## Cell hyperlink property

```ts
sheet.cell('A1').hyperlink = {
  target: 'https://example.com',
  displayText: 'Docs',
  tooltip: 'Open docs',
  type: 'url',
};

const link = sheet.cell('A1').hyperlink;
sheet.cell('A1').hyperlink = undefined; // remove link; value may remain
```

Important:

- `displayText` maps to display text and may also set the cell value so Excel shows it.
- **`cell.clear()` does not remove the hyperlink.**
- Distinct from a `HYPERLINK(…)` **formula** string on `.formula`.

## Gotchas

- Never call out to the network to validate hyperlink targets during save.
- Do not implement a formula engine “to be helpful” in agent code using this library.
- Merged area edits should still go through public merges/cell APIs, not hand-written sheet XML.
- Workbook-type links must not be resolved to other files on disk automatically.
