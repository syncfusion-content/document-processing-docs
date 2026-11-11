# PDF Tables

## Table of Contents

- [Overview](#overview)
- [Creating Tables](#creating-tables)
  - [Create Table from Data Source](#create-table-from-data-source)
  - [Create Table without Data Source](#create-table-without-data-source)
  - [Add Headers and Rows](#add-headers-and-rows)
  - [Draw in Existing PDF Documents](#draw-in-existing-pdf-documents)
- [Table Styling](#table-styling)
- [Cell Styling](#cell-styling)
- [Row and Column Customization](#row-and-column-customization)
- [Text Formatting](#text-formatting)
- [Built-in Styles](#built-in-styles)
- [Pagination](#pagination)
  - [Prevent Row Breaks](#prevent-row-breaks)
  - [Multiple Tables](#multiple-tables)
- [Row and Column Spanning](#row-and-column-spanning)
- [Images in Tables](#images-in-tables)
- [Background Images](#background-images)
- [Hyperlinks](#hyperlinks)
- [Borderless Tables](#borderless-tables)
- [Updating Data](#updating-data)
- [Nested Tables](#nested-tables)
- [Horizontal Overflow](#horizontal-overflow)
- [Templates](#templates)
- [Best Practices](#best-practices)
- [Common Gotchas](#common-gotchas)
- [Related References](#related-references)

## Overview

`PdfGrid` provides a high-level API for creating PDF tables from data sources or manually defined rows and columns. It supports styling, images, hyperlinks, merged cells, pagination, nested tables, and advanced layout management. Whether creating dynamic database reports, custom invoices, or structured data views, `PdfGrid` handles measurement, formatting, and cross-page layout flow.

## Creating Tables

### Create Table from Data Source

Create tables directly from collections of records using column mappings.

Key APIs:
- `PdfGrid`
- `PdfColumnInformation`

```typescript
import { PdfColumnInformation, PdfDocument, PdfGrid, PdfPage } from '@syncfusion/ej2-pdf';

const document: PdfDocument = new PdfDocument();
const page: PdfPage = document.addPage();

const dataSource: object[] = [
    { id: 'E01', name: 'Clay' },
    { id: 'E02', name: 'Thomas' }
];

const columns: PdfColumnInformation[] = [
    { field: 'id', headerText: 'Employee ID', width: 90 },
    { field: 'name', headerText: 'Employee Name', width: 140 }
];

const grid: PdfGrid = new PdfGrid(dataSource, columns);
grid.draw(page, { x: 10, y: 10 });

document.save('Output.pdf');
document.destroy();
```

### Create Table without Data Source

Construct tables manually by defining column count, zero-based column-width map, rows, and optional headers.

Key APIs:
- `PdfGrid`
- `PdfGridRow`

```typescript
import { PdfDocument, PdfGrid, PdfGridRow, PdfPage } from '@syncfusion/ej2-pdf';

const document: PdfDocument = new PdfDocument();
const page: PdfPage = document.addPage();

const widths: Map<number, number> = new Map([[0, 90], [1, 140], [2, 100]]);
const headers: PdfGridRow[] = [{
    cells: [{ value: 'Employee ID' }, { value: 'Employee Name' }, { value: 'Salary' }]
}];
const rows: PdfGridRow[] = [{
    cells: [{ value: 'E01' }, { value: 'Clay' }, { value: '$10,000' }]
}];

const grid: PdfGrid = new PdfGrid(3, widths, rows, headers);
grid.draw(page, { x: 10, y: 10 });

document.save('Output.pdf');
document.destroy();
```

### Add Headers and Rows

Dynamically append headers and data rows after constructing an explicit grid.

Key APIs:
- `grid.addHeader()`
- `grid.addRow()`

```typescript
import { PdfDocument, PdfGrid, PdfPage } from '@syncfusion/ej2-pdf';

const document: PdfDocument = new PdfDocument();
const page: PdfPage = document.addPage();

const widths: Map<number, number> = new Map([[0, 90], [1, 140]]);
const grid: PdfGrid = new PdfGrid(2, widths, []);

grid.addHeader({ cells: [{ value: 'ID' }, { value: 'Name' }] });
grid.addRow({ cells: [{ value: 'E01' }, { value: 'Clay' }] });
grid.addRow({ cells: [{ value: 'E02' }, { value: 'Thomas' }] });

grid.draw(page, { x: 10, y: 10 });

document.save('Output.pdf');
document.destroy();
```

### Draw in Existing PDF Documents

Load an existing PDF document, access a specific page, and draw a table onto it.

Key APIs:
- `PdfDocument`
- `PdfPage`
- `grid.draw()`

```typescript
import { PdfColumnInformation, PdfDocument, PdfGrid, PdfPage } from '@syncfusion/ej2-pdf';

const document: PdfDocument = new PdfDocument(existingData);
const page: PdfPage = document.getPage(0);

const source: object[] = [{ id: '1', name: 'Clay' }, { id: '2', name: 'Thomas' }];
const columns: PdfColumnInformation[] = [
    { field: 'id', headerText: 'ID', width: 60 },
    { field: 'name', headerText: 'Name', width: 120 }
];

const grid: PdfGrid = new PdfGrid(source, columns);
grid.draw(page, { x: 10, y: 10 });

document.save('Output.pdf');
document.destroy();
```

## Table Styling

Apply uniform styling to the entire table using the grid-level `style` property, configuring borders, cell padding, cell spacing, and text fonts.

Key APIs:
- `PdfGridStyle`
- `PdfPen`
- `PdfStandardFont`

```typescript
import { PdfDocument, PdfFontFamily, PdfGrid, PdfPage, PdfPen, PdfStandardFont } from '@syncfusion/ej2-pdf';

const document: PdfDocument = new PdfDocument();
const page: PdfPage = document.addPage();

const grid: PdfGrid = new PdfGrid(
    [{ id: 'E01', name: 'Clay' }],
    [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }]
);

grid.style = {
    padding: { left: 4, right: 4, top: 3, bottom: 3 },
    space: { left: 1, right: 1, top: 1, bottom: 1 },
    border: new PdfPen({ r: 80, g: 80, b: 80 }, 0.5),
    textProperties: { font: new PdfStandardFont(PdfFontFamily.helvetica, 9) }
};

grid.draw(page, { x: 10, y: 10 });

document.save('Output.pdf');
document.destroy();
```

## Cell Styling

Customize individual cells by applying background brushes, custom border pens, padding, and text colors.

Key APIs:
- `PdfBrush`
- `PdfPen`
- `PdfGridCellStyle`

```typescript
import { PdfBrush, PdfDocument, PdfGrid, PdfGridRow, PdfPage, PdfPen } from '@syncfusion/ej2-pdf';

const document: PdfDocument = new PdfDocument();
const page: PdfPage = document.addPage();

const widths: Map<number, number> = new Map([[0, 100], [1, 140]]);
const rows: PdfGridRow[] = [{
    height: 40,
    cells: [
        {
            value: 'E01',
            style: {
                background: new PdfBrush({ r: 255, g: 255, b: 180 }),
                border: new PdfPen({ r: 255, g: 0, b: 0 }, 1),
                padding: { left: 8, right: 8, top: 6, bottom: 6 },
                textProperties: { color: new PdfBrush({ r: 0, g: 0, b: 180 }) }
            }
        },
        { value: 'Clay' }
    ]
}];

const grid: PdfGrid = new PdfGrid(2, widths, rows);
grid.draw(page, { x: 10, y: 10 });

document.save('Output.pdf');
document.destroy();
```

## Row and Column Customization

Set row heights, apply row-level styles, and configure column-level alignments and widths via column definitions.

Key APIs:
- `grid.rows[index].height`
- `grid.rows[index].style`
- `PdfTemplateHorizontalAlignment`
- `PdfTemplateVerticalAlignment`

```typescript
import { PdfBrush, PdfColumnInformation, PdfDocument, PdfFontFamily, PdfGrid, PdfPage, PdfStandardFont, PdfTemplateHorizontalAlignment, PdfTemplateVerticalAlignment } from '@syncfusion/ej2-pdf';

const document: PdfDocument = new PdfDocument();
const page: PdfPage = document.addPage();

const columns: PdfColumnInformation[] = [
    {
        field: 'id', headerText: 'Employee ID', width: 80,
        style: { textProperties: {
            horizontalAlignment: PdfTemplateHorizontalAlignment.center,
            verticalAlignment: PdfTemplateVerticalAlignment.middle
        } }
    },
    { field: 'name', headerText: 'Employee Name', width: 150 }
];

const grid: PdfGrid = new PdfGrid([{ id: 'E01', name: 'John' }], columns);
grid.rows[0].height = 50;
grid.rows[0].style = {
    background: new PdfBrush({ r: 255, g: 255, b: 200 }),
    textProperties: {
        font: new PdfStandardFont(PdfFontFamily.courier, 10),
        color: new PdfBrush({ r: 0, g: 0, b: 255 })
    }
};

grid.draw(page, { x: 10, y: 10 });

document.save('Output.pdf');
document.destroy();
```

## Text Formatting

Configure fonts, text brushes, and horizontal/vertical text alignment via `textProperties`.

Key APIs:
- `PdfStandardFont`
- `PdfBrush`
- `PdfTemplateHorizontalAlignment`
- `PdfTemplateVerticalAlignment`

```typescript
import { PdfBrush, PdfDocument, PdfFontFamily, PdfGrid, PdfPage, PdfStandardFont, PdfTemplateHorizontalAlignment, PdfTemplateVerticalAlignment } from '@syncfusion/ej2-pdf';

const document: PdfDocument = new PdfDocument();
const page: PdfPage = document.addPage();

const grid: PdfGrid = new PdfGrid(
    [{ id: 'E01', name: 'Clay' }],
    [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }]
);

grid.style = {
    textProperties: {
        font: new PdfStandardFont(PdfFontFamily.helvetica, 10),
        color: new PdfBrush({ r: 0, g: 0, b: 120 }),
        horizontalAlignment: PdfTemplateHorizontalAlignment.center,
        verticalAlignment: PdfTemplateVerticalAlignment.middle
    }
};

grid.draw(page, { x: 10, y: 10, width: 280, height: 200 });

document.save('Output.pdf');
document.destroy();
```

## Built-in Styles

Quickly apply professional predefined themes to the entire grid using `PdfGridBuiltinStyle`. Built-in styles ensure cohesive palette, borders, and header styling across reports without manual color configuration.

Key APIs:
- `PdfGridBuiltinStyle`

```typescript
import { PdfDocument, PdfGrid, PdfGridBuiltinStyle, PdfPage } from '@syncfusion/ej2-pdf';

const document: PdfDocument = new PdfDocument();
const page: PdfPage = document.addPage();

const source: object[] = [{ id: 'E01', name: 'Clay' }, { id: 'E02', name: 'Thomas' }];
const columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];

const grid: PdfGrid = new PdfGrid(source, columns, { builtInStyle: PdfGridBuiltinStyle.gridTable4Accent1 });
grid.draw(page, { x: 10, y: 10 });

document.save('Output.pdf');
document.destroy();
```

## Pagination

Flow large tables across multiple PDF pages while automatically repeating header rows on continuation pages.

Key APIs:
- `grid.repeatHeader`
- `PdfLayoutFormat`
- `PdfLayoutType.paginate`
- `PdfLayoutBreakType.fitPage`

```typescript
import { PdfDocument, PdfGrid, PdfGridLayoutResult, PdfLayoutBreakType, PdfLayoutFormat, PdfLayoutType, PdfPage } from '@syncfusion/ej2-pdf';

const document: PdfDocument = new PdfDocument();
const page: PdfPage = document.addPage();

const source: object[] = Array.from({ length: 100 }, (_, i) => ({ id: `E${i + 1}`, name: `Employee ${i + 1}` }));
const columns = [{ field: 'id', headerText: 'ID', width: 80 }, { field: 'name', headerText: 'Name', width: 160 }];

const grid: PdfGrid = new PdfGrid(source, columns);
grid.repeatHeader = true;

const format: PdfLayoutFormat = new PdfLayoutFormat();
format.layout = PdfLayoutType.paginate;
format.break = PdfLayoutBreakType.fitPage;

const result: PdfGridLayoutResult = grid.draw(page, { x: 10, y: 10, width: 300, height: 500 }, format);

document.save('Output.pdf');
document.destroy();
```

### Prevent Row Breaks

Use `PdfLayoutBreakType.fitElement` to keep individual rows intact. If a row exceeds the remaining vertical space on the current page, the entire row shifts cleanly to the next page instead of splitting midway.

- **`fitPage`**: Splitting occurs when space runs out to maximize page utilization.
- **`fitElement`**: Moves the complete row to the next page if it cannot fit in remaining space.

Key APIs:
- `PdfLayoutBreakType.fitElement`

```typescript
import { PdfDocument, PdfGrid, PdfLayoutBreakType, PdfLayoutFormat, PdfLayoutType, PdfPage } from '@syncfusion/ej2-pdf';

const document: PdfDocument = new PdfDocument();
const page: PdfPage = document.addPage();

const source: object[] = Array.from({ length: 80 }, (_, i) => ({ id: `E${i + 1}`, desc: `Row content ${i + 1}` }));
const columns = [{ field: 'id', headerText: 'ID', width: 60 }, { field: 'desc', headerText: 'Description', width: 240 }];

const grid: PdfGrid = new PdfGrid(source, columns);

const format: PdfLayoutFormat = new PdfLayoutFormat();
format.layout = PdfLayoutType.paginate;
format.break = PdfLayoutBreakType.fitElement;

grid.draw(page, { x: 10, y: 10, width: 320, height: 500 }, format);

document.save('Output.pdf');
document.destroy();
```

### Multiple Tables

Position successive tables dynamically using the `PdfGridLayoutResult` of previous tables to prevent overlaps.

Key APIs:
- `PdfGridLayoutResult`
- `result.bounds`
- `result.page`

```typescript
import { PdfDocument, PdfGrid, PdfGridLayoutResult, PdfPage } from '@syncfusion/ej2-pdf';

const document: PdfDocument = new PdfDocument();
const page: PdfPage = document.addPage();
const columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];

const firstGrid: PdfGrid = new PdfGrid([{ id: 'E01', name: 'Clay' }], columns);
const firstResult: PdfGridLayoutResult = firstGrid.draw(page, { x: 10, y: 10 });

const secondGrid: PdfGrid = new PdfGrid([{ id: 'E02', name: 'Thomas' }], columns);
const secondY: number = firstResult.bounds.y + firstResult.bounds.height + 20;
secondGrid.draw(firstResult.page, { x: 10, y: secondY });

document.save('Output.pdf');
document.destroy();
```

## Row and Column Spanning

Merge cells horizontally across columns or vertically across rows using `columnSpan` and `rowSpan`.

> **Limitations**: Spanned cell regions must not overlap, and span counts cannot exceed the table's row or column boundaries.

Key APIs:
- `cell.style.columnSpan`
- `cell.style.rowSpan`

```typescript
import { PdfDocument, PdfGrid, PdfGridRow, PdfPage, PdfTemplateHorizontalAlignment } from '@syncfusion/ej2-pdf';

const document: PdfDocument = new PdfDocument();
const page: PdfPage = document.addPage();

const widths: Map<number, number> = new Map([[0, 100], [1, 140]]);
const rows: PdfGridRow[] = [
    { cells: [
        { value: 'Employee Details', style: { columnSpan: 2, textProperties: { horizontalAlignment: PdfTemplateHorizontalAlignment.center } } }
    ] },
    { cells: [
        { value: 'E01', style: { rowSpan: 2 } },
        { value: 'Clay' }
    ] },
    { cells: [
        { value: 'Thomas' } // First column occupied by rowSpan
    ] }
];

const grid: PdfGrid = new PdfGrid(2, widths, rows);
grid.draw(page, { x: 10, y: 10 });

document.save('Output.pdf');
document.destroy();
```

## Images in Tables

Embed bitmap images within table cells, specifying dimensions, fit modes, and alignment.

Key APIs:
- `PdfBitmap`
- `imageProperties`
- `fitType` (e.g., `2` = maintain aspect ratio)

```typescript
import { PdfBitmap, PdfDocument, PdfGrid, PdfGridRow, PdfPage, PdfTemplateHorizontalAlignment, PdfTemplateVerticalAlignment } from '@syncfusion/ej2-pdf';

const document: PdfDocument = new PdfDocument();
const page: PdfPage = document.addPage();

const image: PdfBitmap = new PdfBitmap(imageData);
const widths: Map<number, number> = new Map([[0, 60], [1, 120]]);

const rows: PdfGridRow[] = [{
    height: 80,
    cells: [
        { value: '1' },
        {
            value: image,
            style: {
                imageProperties: {
                    width: 60,
                    height: 60,
                    fitType: 2,
                    horizontalAlignment: PdfTemplateHorizontalAlignment.center,
                    verticalAlignment: PdfTemplateVerticalAlignment.middle
                }
            }
        }
    ]
}];

const grid: PdfGrid = new PdfGrid(2, widths, rows);
grid.draw(page, { x: 10, y: 10 });

document.save('Output.pdf');
document.destroy();
```

## Background Images

Set a background image behind cell text or content with custom stretch and alignment options.

Key APIs:
- `cell.style.backgroundImage`
- `fitType` (e.g., `3` = stretch to fill content area)

```typescript
import { PdfBitmap, PdfDocument, PdfGrid, PdfGridRow, PdfPage, PdfTemplateHorizontalAlignment, PdfTemplateVerticalAlignment } from '@syncfusion/ej2-pdf';

const document: PdfDocument = new PdfDocument();
const page: PdfPage = document.addPage();

const image: PdfBitmap = new PdfBitmap(imageData);
const widths: Map<number, number> = new Map([[0, 140], [1, 100]]);

const rows: PdfGridRow[] = [{
    height: 70,
    cells: [
        {
            value: 'Employee ID',
            style: {
                backgroundImage: {
                    image: image,
                    imageProperties: {
                        fitType: 3,
                        horizontalAlignment: PdfTemplateHorizontalAlignment.center,
                        verticalAlignment: PdfTemplateVerticalAlignment.middle
                    }
                }
            }
        },
        { value: 'E01' }
    ]
}];

const grid: PdfGrid = new PdfGrid(2, widths, rows);
grid.draw(page, { x: 10, y: 10 });

document.save('Output.pdf');
document.destroy();
```

## Hyperlinks

Add interactive links to table cells for navigating to external web addresses, internal document destinations, or external files.

Key APIs:
- `PdfLinkType.externalLink`
- `PdfLinkType.internalLink`
- `PdfLinkType.file`

```typescript
import { PdfDocument, PdfGrid, PdfGridRow, PdfLinkType, PdfPage } from '@syncfusion/ej2-pdf';

const document: PdfDocument = new PdfDocument();
const page: PdfPage = document.addPage();

const widths: Map<number, number> = new Map([[0, 130], [1, 180]]);
const rows: PdfGridRow[] = [
    { cells: [
        { value: 'Product page' },
        { value: 'Syncfusion', link: { type: PdfLinkType.externalLink, uri: 'https://www.syncfusion.com' } }
    ] },
    { cells: [
        { value: 'Report' },
        { value: 'Open file', link: { type: PdfLinkType.file, uri: 'Report.pdf' } }
    ] }
];

const grid: PdfGrid = new PdfGrid(2, widths, rows);
grid.draw(page, { x: 10, y: 10 });

document.save('Output.pdf');
document.destroy();
```

## Borderless Tables

Create tables without visible borders by setting a zero-width border pen at the grid level.

Key APIs:
- `PdfGridStyle`
- `new PdfPen({ r, g, b }, 0)`

```typescript
import { PdfDocument, PdfGrid, PdfGridStyle, PdfPage, PdfPen } from '@syncfusion/ej2-pdf';

const document: PdfDocument = new PdfDocument();
const page: PdfPage = document.addPage();

const source: object[] = [{ id: 'E01', name: 'Clay' }, { id: 'E02', name: 'Thomas' }];
const columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];

const style: PdfGridStyle = { border: new PdfPen({ r: 255, g: 255, b: 255 }, 0) };
const grid: PdfGrid = new PdfGrid(source, columns, style);

grid.draw(page, { x: 10, y: 10 });

document.save('Output.pdf');
document.destroy();
```

## Updating Data

Reassign `dataSource` on a data-source grid. All generated data rows are rebuilt automatically, while manually appended rows (added via `addRow`) remain preserved after the generated records.

Key APIs:
- `grid.dataSource`
- `grid.addRow()`

```typescript
import { PdfDocument, PdfGrid, PdfPage } from '@syncfusion/ej2-pdf';

const document: PdfDocument = new PdfDocument();
const page: PdfPage = document.addPage();
const columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];

const grid: PdfGrid = new PdfGrid([{ id: 'E01', name: 'Clay' }], columns);
grid.addRow({ cells: [{ value: 'Manual' }, { value: 'Record' }] });

// Reassign dataSource: generated rows are rebuilt; manual row is preserved at end
grid.dataSource = [{ id: 'E10', name: 'Andrew' }, { id: 'E11', name: 'Michael' }];

grid.draw(page, { x: 10, y: 10 });

document.save('Output.pdf');
document.destroy();
```

## Nested Tables

Embed an entire `PdfGrid` inside another table cell by assigning the child grid as a cell value.

Key APIs:
- `cell.value = nestedGrid`

```typescript
import { PdfDocument, PdfGrid, PdfGridRow, PdfPage } from '@syncfusion/ej2-pdf';

const document: PdfDocument = new PdfDocument();
const page: PdfPage = document.addPage();

// Inner table
const nestedWidths: Map<number, number> = new Map([[0, 80], [1, 100]]);
const nestedRows: PdfGridRow[] = [
    { cells: [{ value: 'Product' }, { value: 'Qty' }] },
    { cells: [{ value: 'Keyboard' }, { value: '2' }] }
];
const nestedGrid: PdfGrid = new PdfGrid(2, nestedWidths, nestedRows);

// Outer table
const parentWidths: Map<number, number> = new Map([[0, 100], [1, 200]]);
const parentRows: PdfGridRow[] = [{
    cells: [
        { value: 'Order Details' },
        { value: nestedGrid }
    ]
}];
const parentGrid: PdfGrid = new PdfGrid(2, parentWidths, parentRows);

parentGrid.draw(page, { x: 10, y: 10 });

document.save('Output.pdf');
document.destroy();
```

## Horizontal Overflow

Manage tables whose total width exceeds the available page width using `PdfGridHorizontalOverflowType`:

- **`onePage`** (default): Fits all columns onto a single page width by scaling down column widths.
- **`nextPage`**: Distributes overflow columns onto the next page while maintaining row alignment.
- **`lastPage`**: Groups all overflow columns together and draws them on a single continuation page.

Key APIs:
- `PdfGridHorizontalOverflowType`
- `grid.horizontalOverflow`

```typescript
import { PdfDocument, PdfGrid, PdfGridHorizontalOverflowType, PdfGridRow, PdfPage } from '@syncfusion/ej2-pdf';

const document: PdfDocument = new PdfDocument();
const page: PdfPage = document.addPage();

const widths: Map<number, number> = new Map([[0, 80], [1, 120], [2, 80], [3, 120]]);
const rows: PdfGridRow[] = [{ cells: [{ value: 'A' }, { value: 'B' }, { value: 'C' }, { value: 'D' }] }];

const grid: PdfGrid = new PdfGrid(4, widths, rows);
grid.horizontalOverflow = PdfGridHorizontalOverflowType.nextPage;

grid.draw(page, { x: 10, y: 10, width: 150, height: 400 });

document.save('Output.pdf');
document.destroy();
```

## Templates

Draw tables inside a `PdfTemplate` graphics context for reusable headers, footers, or stamped components.

> **Limitation**: The graphics drawing overload does not paginate across pages. The complete grid must fit within the specified template bounds.

Key APIs:
- `PdfTemplate`
- `grid.draw(template.graphics, bounds)`
- `page.graphics.drawTemplate()`

```typescript
import { PdfDocument, PdfGrid, PdfPage, PdfTemplate } from '@syncfusion/ej2-pdf';

const document: PdfDocument = new PdfDocument();
const page: PdfPage = document.addPage();

const template: PdfTemplate = new PdfTemplate(300, 200);
const grid: PdfGrid = new PdfGrid(
    [{ id: 'E01', name: 'Clay' }],
    [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }]
);

// Draw grid inside template graphics (no pagination support)
grid.draw(template.graphics, { x: 10, y: 10, width: 300, height: 200 });

// Render template onto page
page.graphics.drawTemplate(template, { x: 10, y: 10 });

document.save('Output.pdf');
document.destroy();
```

## Best Practices

1. **Prefer Data Source Grids**: Use data-source grids (`new PdfGrid(data, columns)`) for dynamic datasets and database-driven reports.
2. **Explicit Column Widths**: Define explicit column widths in `PdfColumnInformation` or the width map for predictable cross-platform table layouts.
3. **Grid-Level Styling**: Apply borders, cell padding, and fonts at the grid level (`grid.style`) to reduce memory overhead and ensure visual consistency.
4. **Enable Header Repetition**: Set `repeatHeader = true` for multipage reports so readers maintain column context across page breaks.
5. **Prevent Split Rows**: Use `PdfLayoutBreakType.fitElement` when individual rows contain multi-line text or images to avoid splitting rows across pages.
6. **Chain Layout Results**: Reuse `PdfGridLayoutResult` to compute vertical coordinates (`result.bounds.y + result.bounds.height`) when stacking multiple tables on a single page.
7. **Select Overflow Mode**: Choose `PdfGridHorizontalOverflowType.nextPage` for wide tabular sheets where preserving full text readability is critical.
8. **Bound Nested Grids**: Keep nested tables compact to prevent unexpected increases in parent row heights.
9. **Use Built-In Styles**: Standardize visual themes using `PdfGridBuiltinStyle` for clean, professional reports without manual color palettes.
10. **Paginate Large Reports**: Always provide `PdfLayoutFormat` with `PdfLayoutType.paginate` for collections exceeding single-page dimensions.

## Common Gotchas

1. **Non-Overlapping Spans**: Row spans and column spans must not overlap and cannot exceed grid boundary dimensions.
2. **Data Source Reassignment**: Reassigning `grid.dataSource` regenerates all data-source rows; manual rows added via `addRow` remain positioned after the new generated rows.
3. **Nested Grid Heights**: Nested tables expand the parent cell and row height to accommodate inner contents, which can push parent rows onto new pages.
4. **Image Dimensions**: Large bitmap images without explicit `imageProperties` width and height will expand the row height significantly.
5. **Horizontal Overflow Pages**: Setting `horizontalOverflow` to `nextPage` or `lastPage` dynamically creates additional pages in the document.
6. **No Pagination on Graphics Overload**: Drawing to a graphics context (`grid.draw(template.graphics, ...)`) does not support pagination. Grids exceeding template bounds will clip.
7. **`fitPage` vs `fitElement`**: `fitPage` prioritizes filling available vertical page space even if a row splits, whereas `fitElement` moves the entire row to the next page.
8. **Borderless Spacing**: Zero-width borders remove visible lines, but cell padding and spacing still consume layout area.

## Related References

- [Text Rendering](./text-rendering.md) - Embedding standard and TrueType fonts
- [Images](./images.md) - Loading bitmap images and vector formats
- [Templates](./templates.md) - Reusable headers, footers, and page stamps
- [Hyperlinks](./hyperlinks.md) - Document and URI link annotations
- [Annotations](./annotations.md) - Interactive PDF markup and annotations
- [Form Fields](./form-fields.md) - Interactive PDF form elements
