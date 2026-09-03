---
title: PdfGrid Tables in JavaScript PDF | Syncfusion
canonical_url: https://www.syncfusion.com/document-sdk/javascript-pdf-library
description: Create and customize PDF tables programmatically using PdfGrid in the Syncfusion JavaScript PDF Library.
platform: document-processing
control: PDF
documentation: UG
---

# PdfGrid Tables in JavaScript PDF

The Syncfusion JavaScript PDF Library supports creating PDF tables from arrays of records or explicitly defined rows and columns. The `PdfGrid` class supports headers, custom column widths, row and column spanning, styles, images, hyperlinks, built-in styles, and pagination.

N> The TypeScript samples use the `@syncfusion/ej2-pdf` package. The JavaScript samples use the corresponding `ej.pdf` global namespace.

## Create a table from a data source

Create a `PdfGrid` from an array of records and an ordered collection of `PdfColumnInformation` mappings.


{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfColumnInformation, PdfDocument, PdfGrid, PdfGridLayoutResult, PdfPage } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Create the data source
let dataSource: object[] = [
    { id: 'E01', name: 'Clay' },
    { id: 'E02', name: 'Thomas' }
];
// Define the column mappings
let columns: PdfColumnInformation[] = [
    { field: 'id', headerText: 'Employee ID', width: 90 },
    { field: 'name', headerText: 'Employee Name', width: 140 }
];
// Create and draw the grid
let grid: PdfGrid = new PdfGrid(dataSource, columns);
let result: PdfGridLayoutResult = grid.draw(page, { x: 10, y: 10 });
// Save and close the document
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Create the data source
var dataSource = [
    { id: 'E01', name: 'Clay' },
    { id: 'E02', name: 'Thomas' }
];
// Define the column mappings
var columns = [
    { field: 'id', headerText: 'Employee ID', width: 90 },
    { field: 'name', headerText: 'Employee Name', width: 140 }
];
// Create and draw the grid
var grid = new ej.pdf.PdfGrid(dataSource, columns);
var result = grid.draw(page, { x: 10, y: 10 });
// Save and close the document
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% endtabs %}

## Create a table without a data source

Define the rows, optional headers, and a zero-based column-width map directly.


{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfGrid, PdfGridRow, PdfPage } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let widths: Map<number, number> = new Map<number, number>([[0, 90], [1, 140], [2, 100]]);
let headers: PdfGridRow[] = [{
    cells: [{ value: 'Employee ID' }, { value: 'Employee Name' }, { value: 'Salary' }]
}];
let rows: PdfGridRow[] = [{
    cells: [{ value: 'E01' }, { value: 'Clay' }, { value: '$10,000' }]
}];
let grid: PdfGrid = new PdfGrid(3, widths, rows, headers);
grid.draw(page, { x: 10, y: 10 });
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

var document = new ej.pdf.PdfDocument();
var page = document.addPage();
var widths = new Map([[0, 90], [1, 140], [2, 100]]);
var headers = [{
    cells: [{ value: 'Employee ID' }, { value: 'Employee Name' }, { value: 'Salary' }]
}];
var rows = [{
    cells: [{ value: 'E01' }, { value: 'Clay' }, { value: '$10,000' }]
}];
var grid = new ej.pdf.PdfGrid(3, widths, rows, headers);
grid.draw(page, { x: 10, y: 10 });
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% endtabs %}

## Add rows and headers

Use `addHeader` and `addRow` to append rows after constructing an explicit grid.


{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfGrid, PdfPage } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let widths: Map<number, number> = new Map<number, number>([[0, 90], [1, 140]]);
let grid: PdfGrid = new PdfGrid(2, widths, []);
grid.addHeader({ cells: [{ value: 'ID' }, { value: 'Name' }] });
grid.addRow({ cells: [{ value: 'E01' }, { value: 'Clay' }] });
grid.addRow({ cells: [{ value: 'E02' }, { value: 'Thomas' }] });
grid.draw(page, { x: 10, y: 10 });
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

var document = new ej.pdf.PdfDocument();
var page = document.addPage();
var widths = new Map([[0, 90], [1, 140]]);
var grid = new ej.pdf.PdfGrid(2, widths, []);
grid.addHeader({ cells: [{ value: 'ID' }, { value: 'Name' }] });
grid.addRow({ cells: [{ value: 'E01' }, { value: 'Clay' }] });
grid.addRow({ cells: [{ value: 'E02' }, { value: 'Thomas' }] });
grid.draw(page, { x: 10, y: 10 });
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% endtabs %}

## Create a table in an existing PDF document

Load an existing document, access a page, and draw the grid on that page.


{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfColumnInformation, PdfDocument, PdfGrid, PdfPage } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
let page: PdfPage = document.getPage(0);
let source: object[] = [{ id: '1', name: 'Clay' }, { id: '2', name: 'Thomas' }];
let columns: PdfColumnInformation[] = [
    { field: 'id', headerText: 'ID', width: 60 },
    { field: 'name', headerText: 'Name', width: 120 }
];
let grid: PdfGrid = new PdfGrid(source, columns);
grid.draw(page, { x: 10, y: 10 });
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
var page = document.getPage(0);
var source = [{ id: '1', name: 'Clay' }, { id: '2', name: 'Thomas' }];
var columns = [
    { field: 'id', headerText: 'ID', width: 60 },
    { field: 'name', headerText: 'Name', width: 120 }
];
var grid = new ej.pdf.PdfGrid(source, columns);
grid.draw(page, { x: 10, y: 10 });
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% endtabs %}

## Customize table cells

Apply a background, border, padding, and text color to an individual cell.


{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfBrush, PdfDocument, PdfGrid, PdfGridRow, PdfPage, PdfPen } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let widths: Map<number, number> = new Map<number, number>([[0, 100], [1, 140]]);
let rows: PdfGridRow[] = [{
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
let grid: PdfGrid = new PdfGrid(2, widths, rows);
grid.draw(page, { x: 10, y: 10 });
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

var document = new ej.pdf.PdfDocument();
var page = document.addPage();
var widths = new Map([[0, 100], [1, 140]]);
var rows = [{
    height: 40,
    cells: [
        {
            value: 'E01',
            style: {
                background: new ej.pdf.PdfBrush({ r: 255, g: 255, b: 180 }),
                border: new ej.pdf.PdfPen({ r: 255, g: 0, b: 0 }, 1),
                padding: { left: 8, right: 8, top: 6, bottom: 6 },
                textProperties: { color: new ej.pdf.PdfBrush({ r: 0, g: 0, b: 180 }) }
            }
        },
        { value: 'Clay' }
    ]
}];
var grid = new ej.pdf.PdfGrid(2, widths, rows);
grid.draw(page, { x: 10, y: 10 });
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% endtabs %}

## Customize rows and columns

Set a row height and style, and configure column widths and text alignment.


{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfBrush, PdfColumnInformation, PdfDocument, PdfFontFamily, PdfGrid, PdfPage, PdfStandardFont, PdfTemplateHorizontalAlignment, PdfTemplateVerticalAlignment } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let source: object[] = [{ id: 'E01', name: 'John' }, { id: 'E02', name: 'Thomas' }];
let columns: PdfColumnInformation[] = [
    {
        field: 'id', headerText: 'Employee ID', width: 80,
        style: { textProperties: {
            horizontalAlignment: PdfTemplateHorizontalAlignment.center,
            verticalAlignment: PdfTemplateVerticalAlignment.middle
        } }
    },
    { field: 'name', headerText: 'Employee Name', width: 150 }
];
let grid: PdfGrid = new PdfGrid(source, columns);
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

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

var document = new ej.pdf.PdfDocument();
var page = document.addPage();
var source = [{ id: 'E01', name: 'John' }, { id: 'E02', name: 'Thomas' }];
var columns = [
    {
        field: 'id', headerText: 'Employee ID', width: 80,
        style: { textProperties: {
            horizontalAlignment: ej.pdf.PdfTemplateHorizontalAlignment.center,
            verticalAlignment: ej.pdf.PdfTemplateVerticalAlignment.middle
        } }
    },
    { field: 'name', headerText: 'Employee Name', width: 150 }
];
var grid = new ej.pdf.PdfGrid(source, columns);
grid.rows[0].height = 50;
grid.rows[0].style = {
    background: new ej.pdf.PdfBrush({ r: 255, g: 255, b: 200 }),
    textProperties: {
        font: new ej.pdf.PdfStandardFont(ej.pdf.PdfFontFamily.courier, 10),
        color: new ej.pdf.PdfBrush({ r: 0, g: 0, b: 255 })
    }
};
grid.draw(page, { x: 10, y: 10 });
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% endtabs %}

## Customize the whole table

Use the grid-level `style` property to set padding, spacing, border, and text formatting.


{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfFontFamily, PdfGrid, PdfPage, PdfPen, PdfStandardFont } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let source: object[] = [{ id: 'E01', name: 'Clay' }, { id: 'E02', name: 'Thomas' }];
let columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];
let grid: PdfGrid = new PdfGrid(source, columns);
grid.style = {
    padding: { left: 4, right: 4, top: 3, bottom: 3 },
    space: { left: 1, right: 1, top: 1, bottom: 1 },
    border: new PdfPen({ r: 80, g: 80, b: 80 }, 0.5),
    textProperties: { font: new PdfStandardFont(PdfFontFamily.helvetica, 9) }
};
grid.draw(page, { x: 10, y: 10 });
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

var document = new ej.pdf.PdfDocument();
var page = document.addPage();
var source = [{ id: 'E01', name: 'Clay' }, { id: 'E02', name: 'Thomas' }];
var columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];
var grid = new ej.pdf.PdfGrid(source, columns);
grid.style = {
    padding: { left: 4, right: 4, top: 3, bottom: 3 },
    space: { left: 1, right: 1, top: 1, bottom: 1 },
    border: new ej.pdf.PdfPen({ r: 80, g: 80, b: 80 }, 0.5),
    textProperties: { font: new ej.pdf.PdfStandardFont(ej.pdf.PdfFontFamily.helvetica, 9) }
};
grid.draw(page, { x: 10, y: 10 });
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% endtabs %}

## Apply a built-in table style

Pass a `PdfGridBuiltinStyle` value to the constructor.


{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfGrid, PdfGridBuiltinStyle, PdfPage } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let source: object[] = [{ id: 'E01', name: 'Clay' }, { id: 'E02', name: 'Thomas' }];
let columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];
let grid: PdfGrid = new PdfGrid(source, columns, undefined, PdfGridBuiltinStyle.gridTable4Accent1);
grid.draw(page, { x: 10, y: 10 });
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

var document = new ej.pdf.PdfDocument();
var page = document.addPage();
var source = [{ id: 'E01', name: 'Clay' }, { id: 'E02', name: 'Thomas' }];
var columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];
var grid = new ej.pdf.PdfGrid(source, columns, undefined, ej.pdf.PdfGridBuiltinStyle.gridTable4Accent1);
grid.draw(page, { x: 10, y: 10 });
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% endtabs %}

## Paginate a table

Use `PdfLayoutFormat` to flow table rows across pages and repeat the header on continuation pages.


{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfGrid, PdfGridLayoutResult, PdfLayoutBreakType, PdfLayoutFormat, PdfLayoutType, PdfPage } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let source: object[] = [];
for (let i: number = 1; i <= 100; i++) {
    source.push({ id: 'E' + i, name: 'Employee ' + i });
}
let columns = [{ field: 'id', headerText: 'ID', width: 80 }, { field: 'name', headerText: 'Name', width: 160 }];
let grid: PdfGrid = new PdfGrid(source, columns);
grid.repeatHeader = true;
let format: PdfLayoutFormat = new PdfLayoutFormat();
format.layout = PdfLayoutType.paginate;
format.break = PdfLayoutBreakType.fitPage;
let result: PdfGridLayoutResult = grid.draw(page, { x: 10, y: 10, width: 300, height: 500 }, format);
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

var document = new ej.pdf.PdfDocument();
var page = document.addPage();
var source = [];
for (var i = 1; i <= 100; i++) {
    source.push({ id: 'E' + i, name: 'Employee ' + i });
}
var columns = [{ field: 'id', headerText: 'ID', width: 80 }, { field: 'name', headerText: 'Name', width: 160 }];
var grid = new ej.pdf.PdfGrid(source, columns);
grid.repeatHeader = true;
var format = new ej.pdf.PdfLayoutFormat();
format.layout = ej.pdf.PdfLayoutType.paginate;
format.break = ej.pdf.PdfLayoutBreakType.fitPage;
var result = grid.draw(page, { x: 10, y: 10, width: 300, height: 500 }, format);
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% endtabs %}

## Prevent row breaks across pages

Use `PdfLayoutBreakType.fitElement` to keep each row together. If a row does not fit in the remaining space, the complete row moves to the next page.


{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfGrid, PdfLayoutBreakType, PdfLayoutFormat, PdfLayoutType, PdfPage } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let source: object[] = [];
for (let i: number = 1; i <= 80; i++) {
    source.push({ id: 'E' + i, description: 'Complete row content for employee ' + i });
}
let columns = [
    { field: 'id', headerText: 'ID', width: 60 },
    { field: 'description', headerText: 'Description', width: 240 }
];
let grid: PdfGrid = new PdfGrid(source, columns);
let format: PdfLayoutFormat = new PdfLayoutFormat();
format.layout = PdfLayoutType.paginate;
format.break = PdfLayoutBreakType.fitElement;
grid.draw(page, { x: 10, y: 10, width: 320, height: 500 }, format);
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

var document = new ej.pdf.PdfDocument();
var page = document.addPage();
var source = [];
for (var i = 1; i <= 80; i++) {
    source.push({ id: 'E' + i, description: 'Complete row content for employee ' + i });
}
var columns = [
    { field: 'id', headerText: 'ID', width: 60 },
    { field: 'description', headerText: 'Description', width: 240 }
];
var grid = new ej.pdf.PdfGrid(source, columns);
var format = new ej.pdf.PdfLayoutFormat();
format.layout = ej.pdf.PdfLayoutType.paginate;
format.break = ej.pdf.PdfLayoutBreakType.fitElement;
grid.draw(page, { x: 10, y: 10, width: 320, height: 500 }, format);
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% endtabs %}

N> The .NET `PaginateBounds` API used to change continuation-page margins is not available in the current JavaScript `PdfGrid` implementation. Therefore, a JavaScript sample for changing margins from the second page onwards is not included.
## Add multiple tables

Use the page and occupied bounds returned by the first grid to position the second grid without overlap.


{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfGrid, PdfGridLayoutResult, PdfPage } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];
let firstGrid: PdfGrid = new PdfGrid([{ id: 'E01', name: 'Clay' }], columns);
let firstResult: PdfGridLayoutResult = firstGrid.draw(page, { x: 10, y: 10 });
let secondGrid: PdfGrid = new PdfGrid([{ id: 'E02', name: 'Thomas' }], columns);
let secondY: number = firstResult.bounds.y + firstResult.bounds.height + 20;
secondGrid.draw(firstResult.page, { x: 10, y: secondY });
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

var document = new ej.pdf.PdfDocument();
var page = document.addPage();
var columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];
var firstGrid = new ej.pdf.PdfGrid([{ id: 'E01', name: 'Clay' }], columns);
var firstResult = firstGrid.draw(page, { x: 10, y: 10 });
var secondGrid = new ej.pdf.PdfGrid([{ id: 'E02', name: 'Thomas' }], columns);
var secondY = firstResult.bounds.y + firstResult.bounds.height + 20;
secondGrid.draw(firstResult.page, { x: 10, y: secondY });
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% endtabs %}

## Apply text formatting

Apply font, color, and alignment through `textProperties`.


{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfBrush, PdfDocument, PdfFontFamily, PdfGrid, PdfPage, PdfStandardFont, PdfTemplateHorizontalAlignment, PdfTemplateVerticalAlignment } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let source: object[] = [{ id: 'E01', name: 'Clay' }, { id: 'E02', name: 'Thomas' }];
let columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];
let grid: PdfGrid = new PdfGrid(source, columns);
grid.style = { textProperties: {
    font: new PdfStandardFont(PdfFontFamily.helvetica, 10),
    color: new PdfBrush({ r: 0, g: 0, b: 120 }),
    horizontalAlignment: PdfTemplateHorizontalAlignment.center,
    verticalAlignment: PdfTemplateVerticalAlignment.middle
} };
grid.draw(page, { x: 10, y: 10, width: 280, height: 200 });
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

var document = new ej.pdf.PdfDocument();
var page = document.addPage();
var source = [{ id: 'E01', name: 'Clay' }, { id: 'E02', name: 'Thomas' }];
var columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];
var grid = new ej.pdf.PdfGrid(source, columns);
grid.style = { textProperties: {
    font: new ej.pdf.PdfStandardFont(ej.pdf.PdfFontFamily.helvetica, 10),
    color: new ej.pdf.PdfBrush({ r: 0, g: 0, b: 120 }),
    horizontalAlignment: ej.pdf.PdfTemplateHorizontalAlignment.center,
    verticalAlignment: ej.pdf.PdfTemplateVerticalAlignment.middle
} };
grid.draw(page, { x: 10, y: 10, width: 280, height: 200 });
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% endtabs %}

## Apply row and column spanning

Set `rowSpan` and `columnSpan` in a cell style. Span regions cannot overlap or extend beyond the grid.


{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfGrid, PdfGridRow, PdfPage, PdfTemplateHorizontalAlignment } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let widths: Map<number, number> = new Map<number, number>([[0, 100], [1, 140]]);
let rows: PdfGridRow[] = [
    { cells: [
        { value: 'Employee Details', style: { columnSpan: 2, textProperties: { horizontalAlignment: PdfTemplateHorizontalAlignment.center } } }
    ] },
    { cells: [
        { value: 'E01', style: { rowSpan: 2 } }, { value: 'Clay' }
    ] },
    { cells: [{ value: 'Thomas' }] }
];
let grid: PdfGrid = new PdfGrid(2, widths, rows);
grid.draw(page, { x: 10, y: 10 });
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

var document = new ej.pdf.PdfDocument();
var page = document.addPage();
var widths = new Map([[0, 100], [1, 140]]);
var rows = [
    { cells: [
        { value: 'Employee Details', style: { columnSpan: 2, textProperties: { horizontalAlignment: ej.pdf.PdfTemplateHorizontalAlignment.center } } }
    ] },
    { cells: [
        { value: 'E01', style: { rowSpan: 2 } }, { value: 'Clay' }
    ] },
    { cells: [{ value: 'Thomas' }] }
];
var grid = new ej.pdf.PdfGrid(2, widths, rows);
grid.draw(page, { x: 10, y: 10 });
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% endtabs %}

## Insert an image in a table cell

Assign a `PdfBitmap` as the cell value and configure its size, fit mode, and alignment.


{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfBitmap, PdfDocument, PdfGrid, PdfGridRow, PdfPage, PdfTemplateHorizontalAlignment, PdfTemplateVerticalAlignment } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let image: PdfBitmap = new PdfBitmap(imageData);
let widths: Map<number, number> = new Map<number, number>([[0, 60], [1, 120]]);
let rows: PdfGridRow[] = [{
    height: 80,
    cells: [
        { value: '1' },
        { value: image, style: { imageProperties: {
            width: 60, height: 60, fitType: 2,
            horizontalAlignment: PdfTemplateHorizontalAlignment.center,
            verticalAlignment: PdfTemplateVerticalAlignment.middle
        } } }
    ]
}];
let grid: PdfGrid = new PdfGrid(2, widths, rows);
grid.draw(page, { x: 10, y: 10 });
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

var document = new ej.pdf.PdfDocument();
var page = document.addPage();
var image = new ej.pdf.PdfBitmap(imageData);
var widths = new Map([[0, 60], [1, 120]]);
var rows = [{
    height: 80,
    cells: [
        { value: '1' },
        { value: image, style: { imageProperties: {
            width: 60, height: 60, fitType: 2,
            horizontalAlignment: ej.pdf.PdfTemplateHorizontalAlignment.center,
            verticalAlignment: ej.pdf.PdfTemplateVerticalAlignment.middle
        } } }
    ]
}];
var grid = new ej.pdf.PdfGrid(2, widths, rows);
grid.draw(page, { x: 10, y: 10 });
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% endtabs %}

## Add a background image to a table cell

Set `backgroundImage` in the cell style. A `fitType` value of `3` stretches the background image to fill the content area.


{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfBitmap, PdfDocument, PdfGrid, PdfGridRow, PdfPage, PdfTemplateHorizontalAlignment, PdfTemplateVerticalAlignment } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let image: PdfBitmap = new PdfBitmap(imageData);
let widths: Map<number, number> = new Map<number, number>([[0, 140], [1, 100]]);
let rows: PdfGridRow[] = [{
    height: 70,
    cells: [
        { value: 'Employee ID', style: { backgroundImage: {
            image: image,
            imageProperties: {
                fitType: 3,
                horizontalAlignment: PdfTemplateHorizontalAlignment.center,
                verticalAlignment: PdfTemplateVerticalAlignment.middle
            }
        } } },
        { value: 'E01' }
    ]
}];
let grid: PdfGrid = new PdfGrid(2, widths, rows);
grid.draw(page, { x: 10, y: 10 });
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

var document = new ej.pdf.PdfDocument();
var page = document.addPage();
var image = new ej.pdf.PdfBitmap(imageData);
var widths = new Map([[0, 140], [1, 100]]);
var rows = [{
    height: 70,
    cells: [
        { value: 'Employee ID', style: { backgroundImage: {
            image: image,
            imageProperties: {
                fitType: 3,
                horizontalAlignment: ej.pdf.PdfTemplateHorizontalAlignment.center,
                verticalAlignment: ej.pdf.PdfTemplateVerticalAlignment.middle
            }
        } } },
        { value: 'E01' }
    ]
}];
var grid = new ej.pdf.PdfGrid(2, widths, rows);
grid.draw(page, { x: 10, y: 10 });
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% endtabs %}

## Add hyperlinks

A string beginning with `http://` or `https://` creates a URI annotation during page-based drawing. An explicit `PdfLink` can also be assigned.


{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfGrid, PdfGridRow, PdfLinkType, PdfPage } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let widths: Map<number, number> = new Map<number, number>([[0, 130], [1, 180]]);
let rows: PdfGridRow[] = [
    { cells: [{ value: 'Product page' }, { value: 'https://www.syncfusion.com' }] },
    { cells: [{ value: 'Report' }, { value: 'Open file', link: { type: PdfLinkType.file, uri: 'Report.pdf' } }] }
];
let grid: PdfGrid = new PdfGrid(2, widths, rows);
grid.draw(page, { x: 10, y: 10 });
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

var document = new ej.pdf.PdfDocument();
var page = document.addPage();
var widths = new Map([[0, 130], [1, 180]]);
var rows = [
    { cells: [{ value: 'Product page' }, { value: 'https://www.syncfusion.com' }] },
    { cells: [{ value: 'Report' }, { value: 'Open file', link: { type: ej.pdf.PdfLinkType.file, uri: 'Report.pdf' } }] }
];
var grid = new ej.pdf.PdfGrid(2, widths, rows);
grid.draw(page, { x: 10, y: 10 });
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% endtabs %}

## Draw a border less table

Use a zero-width border at grid level.


{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfGrid, PdfGridStyle, PdfPage, PdfPen } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let source: object[] = [{ id: 'E01', name: 'Clay' }, { id: 'E02', name: 'Thomas' }];
let columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];
let style: PdfGridStyle = { border: new PdfPen({ r: 255, g: 255, b: 255 }, 0) };
let grid: PdfGrid = new PdfGrid(source, columns, style);
grid.draw(page, { x: 10, y: 10 });
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

var document = new ej.pdf.PdfDocument();
var page = document.addPage();
var source = [{ id: 'E01', name: 'Clay' }, { id: 'E02', name: 'Thomas' }];
var columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];
var style = { border: new ej.pdf.PdfPen({ r: 255, g: 255, b: 255 }, 0) };
var grid = new ej.pdf.PdfGrid(source, columns, style);
grid.draw(page, { x: 10, y: 10 });
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% endtabs %}

## Update the grid data source

Reassign `dataSource` on a data-source grid. Generated rows are rebuilt, while manually added rows remain after them.


{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfGrid, PdfPage } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];
let grid: PdfGrid = new PdfGrid([{ id: 'E01', name: 'Clay' }], columns);
grid.addRow({ cells: [{ value: 'Manual' }, { value: 'Record' }] });
grid.dataSource = [{ id: 'E10', name: 'Andrew' }, { id: 'E11', name: 'Michael' }];
grid.draw(page, { x: 10, y: 10 });
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

var document = new ej.pdf.PdfDocument();
var page = document.addPage();
var columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];
var grid = new ej.pdf.PdfGrid([{ id: 'E01', name: 'Clay' }], columns);
grid.addRow({ cells: [{ value: 'Manual' }, { value: 'Record' }] });
grid.dataSource = [{ id: 'E10', name: 'Andrew' }, { id: 'E11', name: 'Michael' }];
grid.draw(page, { x: 10, y: 10 });
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% endtabs %}

## Draw by using a graphics context

The graphics overload does not paginate. The complete grid must fit within the supplied bounds.


{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfGrid, PdfPage } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let source: object[] = [{ id: 'E01', name: 'Clay' }, { id: 'E02', name: 'Thomas' }];
let columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];
let grid: PdfGrid = new PdfGrid(source, columns);
grid.draw(page.graphics, { x: 10, y: 10, width: 300, height: 200 });
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

var document = new ej.pdf.PdfDocument();
var page = document.addPage();
var source = [{ id: 'E01', name: 'Clay' }, { id: 'E02', name: 'Thomas' }];
var columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];
var grid = new ej.pdf.PdfGrid(source, columns);
grid.draw(page.graphics, { x: 10, y: 10, width: 300, height: 200 });
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% endtabs %}


## JavaScript and .NET feature differences

The following .NET PdfGrid APIs are not present in the supplied JavaScript implementation:

- Nested `PdfGrid` objects as cell values
- `BeginCellLayout` and `BeginPageLayout` events
- Event-based table rotation
- `PdfGridBuiltinStyleSettings`
- `AllowHorizontalOverflow`
- `PaginateBounds`
- Per-side border collections such as `Borders.All`
- Direct annotation objects as cell values
- `PdfWordWrapType` and character-spacing formatting

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/tailwind3/pdf/default.html)
- [JavaScript PDF examples on GitHub](https://github.com/SyncfusionExamples/javascript-pdf-examples)
