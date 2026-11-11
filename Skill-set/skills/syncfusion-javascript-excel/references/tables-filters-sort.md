# Tables, AutoFilter, and sort

Excel Tables and filter/sort **metadata**. This library does not run filter or sort engines.

## Table of contents

- [Excel Tables](#excel-tables)
- [Table rules](#table-rules)
- [AutoFilter](#autofilter)
- [Sort (data sorter)](#sort-data-sorter)
- [Gotchas](#gotchas)

## Excel Tables

```ts
import { Workbook } from '@syncfusion/ej2-xlsx';

const wb = Workbook.create();
const sheet = wb.sheet(0);

sheet.cell('A1').text = 'Name';
sheet.cell('B1').text = 'Amount';
sheet.cell('A2').text = 'Ada';
sheet.cell('B2').value = 100;
sheet.cell('A3').text = 'Lin';
sheet.cell('B3').value = 200;

// tables.add(name, range, headerRowCount?)
const table = sheet.tables.add('Sales', 'A1:B3', 1);
```

| Argument | Meaning |
|----------|---------|
| `name` | Table name / display identity |
| `range` | A1 range including header row when present |
| `headerRowCount` | Optional header row count (commonly `1`) |

Collections:

```ts
for (const t of sheet.tables) {
  console.log(t);
}
// remove via sheet.tables APIs / table handle as exposed
```

Style via `Table` / `TableStyle` exports when customizing table style info.

## Table rules

- Table **id** values are stable — **never renumbered**.
- Body is **sparse**: empty cells are not fabricated for every grid slot.
- Empty header cells may receive default names like `Column1` … `ColumnN`.
- `displayName` must be unique per sheet (Excel table naming rules).
- Do not hand-edit table parts XML in agent samples.

## AutoFilter

```ts
// At most one auto filter region per sheet (Excel model)
sheet.addAutoFilter('A1:B3');
const filter = sheet.autoFilter; // AutoFilter handle | criteria metadata

// Configure column criteria through AutoFilter / FilterColumn APIs
// sheet.removeAutoFilter();
```

**Important:** AutoFilter APIs author **OOXML filter metadata** (what Excel shows as filter arrows/criteria). The library does **not**:

- Hide/show rows as a runtime filter engine
- Evaluate custom filter expressions against cell values

Pair with Excel or your own app logic if you need filtered row materialization.

## Sort (data sorter)

```ts
sheet.addDataSorter('A1:B3');
const sorter = sheet.dataSorter; // DataSorter metadata

// SortCondition / SortBy describe sort state written to the package
// sheet.removeDataSorter();
```

Same boundary as filters: **sort state is metadata** for Excel. The library does not reorder cell values in the grid when you configure sorter properties.

```ts
import type { SortBy, SortCondition } from '@syncfusion/ej2-xlsx';
// Use exported types when building sort conditions per TSDoc
```

## Gotchas

- Do not promise “filtered data” in memory after `addAutoFilter` alone.
- Tables and AutoFilter ranges should align with real header/data layout.
- Removing rows/columns under a table may require updating table range through public APIs.
- Filter/sort + sheet protection interact via protect allow-flags (`allowsAutoFilter`, `allowsSort`).
