# Workbook and worksheets

Workbook lifecycle, sheet collection, view settings, names, properties, and workbook-level protection.

## Table of contents

- [Obtain sheets](#obtain-sheets)
- [Sheet collection mutations](#sheet-collection-mutations)
- [Worksheet display settings](#worksheet-display-settings)
- [Column width and row height](#column-width-and-row-height)
- [Defined names](#defined-names)
- [Document properties and author](#document-properties-and-author)
- [Date system (date1904)](#date-system-date1904)
- [Workbook protection](#workbook-protection)
- [Fonts factory](#fonts-factory)
- [Gotchas](#gotchas)

## Obtain sheets

```ts
import { Workbook } from '@syncfusion/ej2-xlsx';

const wb = Workbook.create();

const byIndex = wb.sheet(0);          // 0-based
const byName = wb.sheet('Sheet1');    // case-sensitive name match per API
const active = wb.activeSheet;        // session + saved active tab
const all = wb.worksheets;            // readonly list
```

| API | Notes |
|-----|--------|
| `wb.sheet(index)` | **0-based** index |
| `wb.sheet(name)` | Sheet name string |
| `wb.activeSheet` | Active worksheet handle |
| `wb.worksheets` | All sheets |

Teaching samples should use `sheet(0)`, `sheet(name)`, or `activeSheet`.

## Sheet collection mutations

```ts
const s2 = wb.addSheet('Data');       // append (name optional per overload usage)
wb.addSheet('Pivot');                 // another sheet
wb.moveSheet(/* args per API */);     // reorder
wb.removeSheet('Pivot');              // by name or index overload
```

Typical patterns:

```ts
const wb = Workbook.create();
wb.sheet(0).name = 'Summary';
const data = wb.addSheet('Data');
data.cell('A1').text = 'Id';
```

Sheet identity on the wire uses stable sheet ids; do not assume renumbering after delete.

## Worksheet display settings

```ts
const sheet = wb.sheet(0);

sheet.name = 'Report';
sheet.visibility = 'visible'; // see SheetVisibility exports
sheet.isGridLinesVisible = true;
sheet.isRowColumnHeadersVisible = true;
sheet.isDisplayZeros = true;
sheet.isRightToLeft = false;
sheet.zoom = 100;
```

Use `SheetVisibility` / `SheetKind` from the package when you need typed constants.

## Column width and row height

Indices are **1-based** (column 1 = A, row 1 = first row).

```ts
sheet.setColumnWidth(1, 20);          // width in character units
const w = sheet.getColumnWidth(1);

sheet.setRowHeight(1, 30);            // height in points
const h = sheet.getRowHeight(1);
```

The grid is **sparse**: setting width/height does not create cell values.

## Defined names

`wb.names` is the workbook `DefinedNames` collection. Content is opaque refers-to text (not evaluated). A single leading `=` on content is stripped.

```ts
import { Workbook } from '@syncfusion/ej2-xlsx';

const wb = Workbook.create();
const sheet = wb.sheet(0);
sheet.name = 'Data';

// Workbook-global name
wb.names.add('TaxRate', 'Data!$B$1');

// Sheet-local name (0-based sheetIndex)
wb.names.add('LocalTotal', 'Data!$A$1:$A$10', 0);

const dn = wb.names.get('TaxRate'); // DefinedName | undefined
console.log(wb.names.count, wb.names.list());

wb.names.remove('LocalTotal', 0);
```

## Document properties and author

```ts
wb.author = 'Report Service';

const props = wb.builtInDocumentProperties;
// title, subject, creator, and other built-ins via BuiltInDocumentProperties
```

## Date system (date1904)

```ts
wb.date1904 = false; // default Windows 1900 date system
// true → 1904 date system (Mac-style workbooks)
```

Cell `dateTime` converts using the workbook date system. Prefer setting `date1904` before writing dates when matching a target file’s convention.

## Workbook protection

Locks structure/windows/revision at the **workbook** level (not sheet cell locks, not file encryption).

```ts
import {
  Workbook,
  type WorkbookProtectionOptions,
} from '@syncfusion/ej2-xlsx';

const wb = Workbook.create();

const options: WorkbookProtectionOptions = {
  lockStructure: true,  // default true on protect — no add/remove/rename sheets
  lockWindows: false,
  lockRevision: false,
};

wb.protect('secret', options);
console.log(wb.isProtected); // true

wb.unprotect('secret');
```

| Flag | Meaning when `true` |
|------|---------------------|
| `lockStructure` | Cannot add/delete/rename/reorder sheets |
| `lockWindows` | Cannot move/resize workbook windows |
| `lockRevision` | Shared-workbook revision lock (mostly preserve) |

**Not** the same as password-to-open / encrypted package.

## Fonts factory

```ts
const font = wb.createFont();
font.bold = true;
font.size = 14;
font.name = 'Calibri';
// use with cell.richText or style.font patterns
```

## Gotchas

- Sheet **index 0-based**; cell row/col **1-based** — easy to mix up.
- `removeSheet` does not renumber historical relationship identities unexpectedly for remaining content; still re-query sheets after mutation.
- Workbook `protect` ≠ worksheet `protect` ≠ file encryption.
- `date1904` changes how serial dates map to `Date` — keep consistent on round-trip.
