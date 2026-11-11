# Tables

## Table of Contents
- [Create a table](#create-a-table)
- [Rows and cells](#rows-and-cells)
- [Table properties](#table-properties)
- [Merging](#merging)
- [Find tables](#find-tables)

## Create a table

```ts
import { WordDocument } from '@syncfusion/ej2-docx';
const document = WordDocument.create();
const section = document.sections[0];
const table = section.body.appendTable();   // starts as 1x1
table.resetCells(3, 4);            // rows, columns
table.rows[0].cells[0].text = 'Header';
```

A standalone `createTable(rowCount, columnCount)` also exists in `@syncfusion/ej2-docx`.

## Rows and cells

```ts
const row = table.appendRow();            // also insertRow(i), removeRow(row)
row.isHeader = true;                      // repeat as header row
row.height = 24;
const cell = row.cells[0];
cell.text = 'Value';                      // sets first paragraph text
cell.width = 100;
cell.appendParagraph({ text: 'More' });   // cells are bodies: paragraphs, nested tables
cell.cellFormat;                          // borders, shading, vertical alignment, margins
row.rowFormat;                            // row-level format
```

## Table properties

`table.title`, `description`, `indentFromLeft`, `width`, `preferredWidth`, `layout` (`'autoFit' | 'fixed'`), `look`, `styleId`, `styleName`, `tableFormat`.

```ts
import { AutoFitType } from '@syncfusion/ej2-docx/tables';
table.autoFit(AutoFitType.FitToWindow);   // check AutoFitType members in typings
table.applyStyle('TableGrid');            // style id/name, TableStyle, or built-in style
table.applyStyleForFirstRow = true;       // banding/conditional flags
table.applyStyleForBandedRows = true;
```

## Merging

```ts
table.applyHorizontalMerge(rowIndex, startCellIndex, endCellIndex);
table.applyVerticalMerge(columnIndex, startRowIndex, endRowIndex);
```

Invalid ranges throw; validate indices first. `w:hMerge` continuation cells are preserved on round-trip.
