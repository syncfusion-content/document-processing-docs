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

This example demonstrates how to create and draw a basic table from an array of employee records with defined columns.

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

This example shows how to create a table by manually specifying column widths, headers, and row data without using a data source.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfGrid, PdfGridRow, PdfPage } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Define column widths: column 0 = 90, column 1 = 140, column 2 = 100
let widths: Map<number, number> = new Map<number, number>([[0, 90], [1, 140], [2, 100]]);
// Create header row with column titles
let headers: PdfGridRow[] = [{
    cells: [{ value: 'Employee ID' }, { value: 'Employee Name' }, { value: 'Salary' }]
}];
// Create data row with sample values
let rows: PdfGridRow[] = [{
    cells: [{ value: 'E01' }, { value: 'Clay' }, { value: '$10,000' }]
}];
// Create grid with 3 columns, column widths, rows, and headers
let grid: PdfGrid = new PdfGrid(3, widths, rows, headers);
// Draw the grid on the page at position (10, 10)
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Define column widths: column 0 = 90, column 1 = 140, column 2 = 100
var widths = new Map([[0, 90], [1, 140], [2, 100]]);
// Create header row with column titles
var headers = [{
    cells: [{ value: 'Employee ID' }, { value: 'Employee Name' }, { value: 'Salary' }]
}];
// Create data row with sample values
var rows = [{
    cells: [{ value: 'E01' }, { value: 'Clay' }, { value: '$10,000' }]
}];
// Create grid with 3 columns, column widths, rows, and headers
var grid = new ej.pdf.PdfGrid(3, widths, rows, headers);
// Draw the grid on the page at position (10, 10)
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## Add rows and headers

Use `addHeader` and `addRow` to append rows after constructing an explicit grid.

This example demonstrates how to dynamically add headers and rows to a grid after its initial creation.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfGrid, PdfPage } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Define column widths
let widths: Map<number, number> = new Map<number, number>([[0, 90], [1, 140]]);
// Create an empty grid with 2 columns
let grid: PdfGrid = new PdfGrid(2, widths, []);
// Add header row using addHeader method
grid.addHeader({ cells: [{ value: 'ID' }, { value: 'Name' }] });
// Add first data row using addRow method
grid.addRow({ cells: [{ value: 'E01' }, { value: 'Clay' }] });
// Add second data row using addRow method
grid.addRow({ cells: [{ value: 'E02' }, { value: 'Thomas' }] });
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Define column widths
var widths = new Map([[0, 90], [1, 140]]);
// Create an empty grid with 2 columns
var grid = new ej.pdf.PdfGrid(2, widths, []);
// Add header row using addHeader method
grid.addHeader({ cells: [{ value: 'ID' }, { value: 'Name' }] });
// Add first data row using addRow method
grid.addRow({ cells: [{ value: 'E01' }, { value: 'Clay' }] });
// Add second data row using addRow method
grid.addRow({ cells: [{ value: 'E02' }, { value: 'Thomas' }] });
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## Create a table in an existing PDF document

Load an existing document, access a page, and draw the grid on that page.

This example shows how to load an existing PDF, retrieve a specific page, and add a table to it.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfColumnInformation, PdfDocument, PdfGrid, PdfPage } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Get the first page (index 0) from the document
let page: PdfPage = document.getPage(0);
// Create the data source with employee records
let source: object[] = [{ id: '1', name: 'Clay' }, { id: '2', name: 'Thomas' }];
// Define column mappings with field names and widths
let columns: PdfColumnInformation[] = [
    { field: 'id', headerText: 'ID', width: 60 },
    { field: 'name', headerText: 'Name', width: 120 }
];
// Create grid from the data source and column mappings
let grid: PdfGrid = new PdfGrid(source, columns);
// Draw the grid on the existing page
grid.draw(page, { x: 10, y: 10 });
// Save the modified document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Get the first page (index 0) from the document
var page = document.getPage(0);
// Create the data source with employee records
var source = [{ id: '1', name: 'Clay' }, { id: '2', name: 'Thomas' }];
// Define column mappings with field names and widths
var columns = [
    { field: 'id', headerText: 'ID', width: 60 },
    { field: 'name', headerText: 'Name', width: 120 }
];
// Create grid from the data source and column mappings
var grid = new ej.pdf.PdfGrid(source, columns);
// Draw the grid on the existing page
grid.draw(page, { x: 10, y: 10 });
// Save the modified document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## Customize table cells

Apply a background, border, padding, and text color to an individual cell.

This example demonstrates how to style individual cells with custom backgrounds, borders, padding, and text colors.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfBrush, PdfDocument, PdfGrid, PdfGridRow, PdfPage, PdfPen } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Define column widths
let widths: Map<number, number> = new Map<number, number>([[0, 100], [1, 140]]);
// Create a row with custom cell styling
let rows: PdfGridRow[] = [{
    // Set row height
    height: 40,
    cells: [
        {
            value: 'E01',
            style: {
                // Set light yellow background color
                background: new PdfBrush({ r: 255, g: 255, b: 180 }),
                // Set red border with 1pt width
                border: new PdfPen({ r: 255, g: 0, b: 0 }, 1),
                // Set cell padding (left, right, top, bottom)
                padding: { left: 8, right: 8, top: 6, bottom: 6 },
                // Set text color to blue
                textProperties: { color: new PdfBrush({ r: 0, g: 0, b: 180 }) }
            }
        },
        { value: 'Clay' }
    ]
}];
// Create grid with 2 columns and styled rows
let grid: PdfGrid = new PdfGrid(2, widths, rows);
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Define column widths
var widths = new Map([[0, 100], [1, 140]]);
// Create a row with custom cell styling
var rows = [{
    // Set row height
    height: 40,
    cells: [
        {
            value: 'E01',
            style: {
                // Set light yellow background color
                background: new ej.pdf.PdfBrush({ r: 255, g: 255, b: 180 }),
                // Set red border with 1pt width
                border: new ej.pdf.PdfPen({ r: 255, g: 0, b: 0 }, 1),
                // Set cell padding (left, right, top, bottom)
                padding: { left: 8, right: 8, top: 6, bottom: 6 },
                // Set text color to blue
                textProperties: { color: new ej.pdf.PdfBrush({ r: 0, g: 0, b: 180 }) }
            }
        },
        { value: 'Clay' }
    ]
}];
// Create grid with 2 columns and styled rows
var grid = new ej.pdf.PdfGrid(2, widths, rows);
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## Customize rows and columns

Set a row height and style, and configure column widths and text alignment.

This example shows how to customize row heights, apply row styles, and set column-level text alignment.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfBrush, PdfColumnInformation, PdfDocument, PdfFontFamily, PdfGrid, PdfPage, PdfStandardFont, PdfTemplateHorizontalAlignment, PdfTemplateVerticalAlignment } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create the data source
let source: object[] = [{ id: 'E01', name: 'John' }, { id: 'E02', name: 'Thomas' }];
// Define columns with alignment and width settings
let columns: PdfColumnInformation[] = [
    {
        field: 'id', headerText: 'Employee ID', width: 80,
        style: { textProperties: {
            // Center horizontally and vertically
            horizontalAlignment: PdfTemplateHorizontalAlignment.center,
            verticalAlignment: PdfTemplateVerticalAlignment.middle
        } }
    },
    { field: 'name', headerText: 'Employee Name', width: 150 }
];
// Create grid from data source and columns
let grid: PdfGrid = new PdfGrid(source, columns);
// Customize the first row: set height to 50
grid.rows[0].height = 50;
// Apply style to the first row
grid.rows[0].style = {
    // Set light yellow background
    background: new PdfBrush({ r: 255, g: 255, b: 200 }),
    textProperties: {
        // Set courier font with size 10
        font: new PdfStandardFont(PdfFontFamily.courier, 10),
        // Set text color to blue
        color: new PdfBrush({ r: 0, g: 0, b: 255 })
    }
};
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Create the data source
var source = [{ id: 'E01', name: 'John' }, { id: 'E02', name: 'Thomas' }];
// Define columns with alignment and width settings
var columns = [
    {
        field: 'id', headerText: 'Employee ID', width: 80,
        style: { textProperties: {
            // Center horizontally and vertically
            horizontalAlignment: ej.pdf.PdfTemplateHorizontalAlignment.center,
            verticalAlignment: ej.pdf.PdfTemplateVerticalAlignment.middle
        } }
    },
    { field: 'name', headerText: 'Employee Name', width: 150 }
];
// Create grid from data source and columns
var grid = new ej.pdf.PdfGrid(source, columns);
// Customize the first row: set height to 50
grid.rows[0].height = 50;
// Apply style to the first row
grid.rows[0].style = {
    // Set light yellow background
    background: new ej.pdf.PdfBrush({ r: 255, g: 255, b: 200 }),
    textProperties: {
        // Set courier font with size 10
        font: new ej.pdf.PdfStandardFont(ej.pdf.PdfFontFamily.courier, 10),
        // Set text color to blue
        color: new ej.pdf.PdfBrush({ r: 0, g: 0, b: 255 })
    }
};
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## Customize the whole table

Use the grid-level `style` property to set padding, spacing, border, and text formatting.

This example demonstrates how to apply uniform styling to the entire table including padding, spacing, borders, and fonts.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfFontFamily, PdfGrid, PdfPage, PdfPen, PdfStandardFont } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create the data source
let source: object[] = [{ id: 'E01', name: 'Clay' }, { id: 'E02', name: 'Thomas' }];
// Define columns
let columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];
// Create grid from data source and columns
let grid: PdfGrid = new PdfGrid(source, columns);
// Apply grid-level style settings
grid.style = {
    // Set cell padding (inside space between content and border)
    padding: { left: 4, right: 4, top: 3, bottom: 3 },
    // Set spacing between cells
    space: { left: 1, right: 1, top: 1, bottom: 1 },
    // Set dark gray border with 0.5pt width
    border: new PdfPen({ r: 80, g: 80, b: 80 }, 0.5),
    // Set helvetica font with size 9
    textProperties: { font: new PdfStandardFont(PdfFontFamily.helvetica, 9) }
};
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Create the data source
var source = [{ id: 'E01', name: 'Clay' }, { id: 'E02', name: 'Thomas' }];
// Define columns
var columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];
// Create grid from data source and columns
var grid = new ej.pdf.PdfGrid(source, columns);
// Apply grid-level style settings
grid.style = {
    // Set cell padding (inside space between content and border)
    padding: { left: 4, right: 4, top: 3, bottom: 3 },
    // Set spacing between cells
    space: { left: 1, right: 1, top: 1, bottom: 1 },
    // Set dark gray border with 0.5pt width
    border: new ej.pdf.PdfPen({ r: 80, g: 80, b: 80 }, 0.5),
    // Set helvetica font with size 9
    textProperties: { font: new ej.pdf.PdfStandardFont(ej.pdf.PdfFontFamily.helvetica, 9) }
};
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## Apply a built-in table style

Pass a `PdfGridBuiltinStyle` value to the constructor.

This example shows how to apply a predefined built-in table style to quickly format the entire grid with professional styling.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfGrid, PdfGridBuiltinStyle, PdfPage } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create the data source
let source: object[] = [{ id: 'E01', name: 'Clay' }, { id: 'E02', name: 'Thomas' }];
// Define columns
let columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];
// Create grid with a built-in style applied
let grid: PdfGrid = new PdfGrid(source, columns, { builtInStyle: PdfGridBuiltinStyle.gridTable4Accent1 });
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Create the data source
var source = [{ id: 'E01', name: 'Clay' }, { id: 'E02', name: 'Thomas' }];
// Define columns
var columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];
// Create grid with a built-in style applied
var grid = new ej.pdf.PdfGrid(source, columns, { builtInStyle: ej.pdf.PdfGridBuiltinStyle.gridTable4Accent1 });
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## Paginate a table

Use `PdfLayoutFormat` to flow table rows across pages and repeat the header on continuation pages.

This example demonstrates how to paginate a large table across multiple PDF pages while repeating the header on each page.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfGrid, PdfGridLayoutResult, PdfLayoutBreakType, PdfLayoutFormat, PdfLayoutType, PdfPage } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add the first page
let page: PdfPage = document.addPage();
// Create a large data source with 100 employee records
let source: object[] = [];
for (let i: number = 1; i <= 100; i++) {
    source.push({ id: 'E' + i, name: 'Employee ' + i });
}
// Define columns with widths
let columns = [{ field: 'id', headerText: 'ID', width: 80 }, { field: 'name', headerText: 'Name', width: 160 }];
// Create grid from data source and columns
let grid: PdfGrid = new PdfGrid(source, columns);
// Enable header repetition on continuation pages
grid.repeatHeader = true;
// Create a layout format for pagination
let format: PdfLayoutFormat = new PdfLayoutFormat();
// Set layout type to paginate (flow across pages)
format.layout = PdfLayoutType.paginate;
// Set break type to fit entire page
format.break = PdfLayoutBreakType.fitPage;
// Draw grid with pagination across multiple pages
let result: PdfGridLayoutResult = grid.draw(page, { x: 10, y: 10, width: 300, height: 500 }, format);
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add the first page
var page = document.addPage();
// Create a large data source with 100 employee records
var source = [];
for (var i = 1; i <= 100; i++) {
    source.push({ id: 'E' + i, name: 'Employee ' + i });
}
// Define columns with widths
var columns = [{ field: 'id', headerText: 'ID', width: 80 }, { field: 'name', headerText: 'Name', width: 160 }];
// Create grid from data source and columns
var grid = new ej.pdf.PdfGrid(source, columns);
// Enable header repetition on continuation pages
grid.repeatHeader = true;
// Create a layout format for pagination
var format = new ej.pdf.PdfLayoutFormat();
// Set layout type to paginate (flow across pages)
format.layout = ej.pdf.PdfLayoutType.paginate;
// Set break type to fit entire page
format.break = ej.pdf.PdfLayoutBreakType.fitPage;
// Draw grid with pagination across multiple pages
var result = grid.draw(page, { x: 10, y: 10, width: 300, height: 500 }, format);
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## Prevent row breaks across pages

Use `PdfLayoutBreakType.fitElement` to keep each row together. If a row does not fit in the remaining space, the complete row moves to the next page.

This example shows how to prevent table rows from being split across page boundaries by moving incomplete rows to the next page.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfGrid, PdfLayoutBreakType, PdfLayoutFormat, PdfLayoutType, PdfPage } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create data source with 80 employee records
let source: object[] = [];
for (let i: number = 1; i <= 80; i++) {
    source.push({ id: 'E' + i, description: 'Complete row content for employee ' + i });
}
// Define columns
let columns = [
    { field: 'id', headerText: 'ID', width: 60 },
    { field: 'description', headerText: 'Description', width: 240 }
];
// Create grid from data source and columns
let grid: PdfGrid = new PdfGrid(source, columns);
// Create a layout format to prevent row breaks
let format: PdfLayoutFormat = new PdfLayoutFormat();
// Set layout type to paginate
format.layout = PdfLayoutType.paginate;
// Set break type to fitElement (keep rows together)
format.break = PdfLayoutBreakType.fitElement;
// Draw grid with no row breaks across pages
grid.draw(page, { x: 10, y: 10, width: 320, height: 500 }, format);
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Create data source with 80 employee records
var source = [];
for (var i = 1; i <= 80; i++) {
    source.push({ id: 'E' + i, description: 'Complete row content for employee ' + i });
}
// Define columns
var columns = [
    { field: 'id', headerText: 'ID', width: 60 },
    { field: 'description', headerText: 'Description', width: 240 }
];
// Create grid from data source and columns
var grid = new ej.pdf.PdfGrid(source, columns);
// Create a layout format to prevent row breaks
var format = new ej.pdf.PdfLayoutFormat();
// Set layout type to paginate
format.layout = ej.pdf.PdfLayoutType.paginate;
// Set break type to fitElement (keep rows together)
format.break = ej.pdf.PdfLayoutBreakType.fitElement;
// Draw grid with no row breaks across pages
grid.draw(page, { x: 10, y: 10, width: 320, height: 500 }, format);
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## Add multiple tables

Use the page and occupied bounds returned by the first grid to position the second grid without overlap.

This example demonstrates how to position multiple tables on the same page by using layout results to avoid overlapping content.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfGrid, PdfGridLayoutResult, PdfPage } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Define columns
let columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];
// Create and draw the first grid
let firstGrid: PdfGrid = new PdfGrid([{ id: 'E01', name: 'Clay' }], columns);
// Get the layout result which includes bounds information
let firstResult: PdfGridLayoutResult = firstGrid.draw(page, { x: 10, y: 10 });
// Create the second grid with different data
let secondGrid: PdfGrid = new PdfGrid([{ id: 'E02', name: 'Thomas' }], columns);
// Calculate Y position for second grid (below first grid with 20pt spacing)
let secondY: number = firstResult.bounds.y + firstResult.bounds.height + 20;
// Draw the second grid on the same page
secondGrid.draw(firstResult.page, { x: 10, y: secondY });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Define columns
var columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];
// Create and draw the first grid
var firstGrid = new ej.pdf.PdfGrid([{ id: 'E01', name: 'Clay' }], columns);
// Get the layout result which includes bounds information
var firstResult = firstGrid.draw(page, { x: 10, y: 10 });
// Create the second grid with different data
var secondGrid = new ej.pdf.PdfGrid([{ id: 'E02', name: 'Thomas' }], columns);
// Calculate Y position for second grid (below first grid with 20pt spacing)
var secondY = firstResult.bounds.y + firstResult.bounds.height + 20;
// Draw the second grid on the same page
secondGrid.draw(firstResult.page, { x: 10, y: secondY });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## Apply text formatting

Apply font, color, and alignment through `textProperties`.

This example shows how to apply comprehensive text formatting including font family, color, and alignment to table content.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfBrush, PdfDocument, PdfFontFamily, PdfGrid, PdfPage, PdfStandardFont, PdfTemplateHorizontalAlignment, PdfTemplateVerticalAlignment } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create the data source
let source: object[] = [{ id: 'E01', name: 'Clay' }, { id: 'E02', name: 'Thomas' }];
// Define columns
let columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];
// Create grid from data source and columns
let grid: PdfGrid = new PdfGrid(source, columns);
// Apply text formatting through textProperties
grid.style = { textProperties: {
    // Set helvetica font with size 10
    font: new PdfStandardFont(PdfFontFamily.helvetica, 10),
    // Set text color to dark blue
    color: new PdfBrush({ r: 0, g: 0, b: 120 }),
    // Center text horizontally
    horizontalAlignment: PdfTemplateHorizontalAlignment.center,
    // Center text vertically
    verticalAlignment: PdfTemplateVerticalAlignment.middle
} };
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10, width: 280, height: 200 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Create the data source
var source = [{ id: 'E01', name: 'Clay' }, { id: 'E02', name: 'Thomas' }];
// Define columns
var columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];
// Create grid from data source and columns
var grid = new ej.pdf.PdfGrid(source, columns);
// Apply text formatting through textProperties
grid.style = { textProperties: {
    // Set helvetica font with size 10
    font: new ej.pdf.PdfStandardFont(ej.pdf.PdfFontFamily.helvetica, 10),
    // Set text color to dark blue
    color: new ej.pdf.PdfBrush({ r: 0, g: 0, b: 120 }),
    // Center text horizontally
    horizontalAlignment: ej.pdf.PdfTemplateHorizontalAlignment.center,
    // Center text vertically
    verticalAlignment: ej.pdf.PdfTemplateVerticalAlignment.middle
} };
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10, width: 280, height: 200 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## Apply row and column spanning

Set `rowSpan` and `columnSpan` in a cell style. Span regions cannot overlap or extend beyond the grid.

This example demonstrates how to create merged cells using row and column spanning for complex table layouts.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfGrid, PdfGridRow, PdfPage, PdfTemplateHorizontalAlignment } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Define column widths
let widths: Map<number, number> = new Map<number, number>([[0, 100], [1, 140]]);
// Create rows with spanning
let rows: PdfGridRow[] = [
    { cells: [
        // First row: single cell spanning 2 columns
        { value: 'Employee Details', style: { columnSpan: 2, textProperties: { horizontalAlignment: PdfTemplateHorizontalAlignment.center } } }
    ] },
    { cells: [
        // Second row: first cell spans 2 rows
        { value: 'E01', style: { rowSpan: 2 } }, { value: 'Clay' }
    ] },
    { cells: [
        // Third row: second column (first column occupied by rowSpan from row 2)
        { value: 'Thomas' }
    ] }
];
// Create grid with spanning cells
let grid: PdfGrid = new PdfGrid(2, widths, rows);
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Define column widths
var widths = new Map([[0, 100], [1, 140]]);
// Create rows with spanning
var rows = [
    { cells: [
        // First row: single cell spanning 2 columns
        { value: 'Employee Details', style: { columnSpan: 2, textProperties: { horizontalAlignment: ej.pdf.PdfTemplateHorizontalAlignment.center } } }
    ] },
    { cells: [
        // Second row: first cell spans 2 rows
        { value: 'E01', style: { rowSpan: 2 } }, { value: 'Clay' }
    ] },
    { cells: [
        // Third row: second column (first column occupied by rowSpan from row 2)
        { value: 'Thomas' }
    ] }
];
// Create grid with spanning cells
var grid = new ej.pdf.PdfGrid(2, widths, rows);
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## Insert an image in a table cell

Assign a `PdfBitmap` as the cell value and configure its size, fit mode, and alignment.

This example shows how to embed images in table cells with custom sizing and alignment properties.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfBitmap, PdfDocument, PdfGrid, PdfGridRow, PdfPage, PdfTemplateHorizontalAlignment, PdfTemplateVerticalAlignment } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create a bitmap image from image data
let image: PdfBitmap = new PdfBitmap(imageData);
// Define column widths
let widths: Map<number, number> = new Map<number, number>([[0, 60], [1, 120]]);
// Create a row with an image
let rows: PdfGridRow[] = [{
    // Set row height to 80
    height: 80,
    cells: [
        // Text cell
        { value: '1' },
        // Image cell with sizing and alignment
        { value: image, style: { imageProperties: {
            // Set image width to 60
            width: 60,
            // Set image height to 60
            height: 60,
            // Set fit type (2 = maintain aspect ratio)
            fitType: 2,
            // Center horizontally
            horizontalAlignment: PdfTemplateHorizontalAlignment.center,
            // Center vertically
            verticalAlignment: PdfTemplateVerticalAlignment.middle
        } } }
    ]
}];
// Create grid with 2 columns
let grid: PdfGrid = new PdfGrid(2, widths, rows);
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Create a bitmap image from image data
var image = new ej.pdf.PdfBitmap(imageData);
// Define column widths
var widths = new Map([[0, 60], [1, 120]]);
// Create a row with an image
var rows = [{
    // Set row height to 80
    height: 80,
    cells: [
        // Text cell
        { value: '1' },
        // Image cell with sizing and alignment
        { value: image, style: { imageProperties: {
            // Set image width to 60
            width: 60,
            // Set image height to 60
            height: 60,
            // Set fit type (2 = maintain aspect ratio)
            fitType: 2,
            // Center horizontally
            horizontalAlignment: ej.pdf.PdfTemplateHorizontalAlignment.center,
            // Center vertically
            verticalAlignment: ej.pdf.PdfTemplateVerticalAlignment.middle
        } } }
    ]
}];
// Create grid with 2 columns
var grid = new ej.pdf.PdfGrid(2, widths, rows);
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## Add a background image to a table cell

Set `backgroundImage` in the cell style. A `fitType` value of `3` stretches the background image to fill the content area.

This example demonstrates how to set background images in table cells with proper sizing and alignment.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfBitmap, PdfDocument, PdfGrid, PdfGridRow, PdfPage, PdfTemplateHorizontalAlignment, PdfTemplateVerticalAlignment } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create a bitmap image from image data
let image: PdfBitmap = new PdfBitmap(imageData);
// Define column widths
let widths: Map<number, number> = new Map<number, number>([[0, 140], [1, 100]]);
// Create a row with background image in first cell
let rows: PdfGridRow[] = [{
    // Set row height to 70
    height: 70,
    cells: [
        // Cell with background image
        { value: 'Employee ID', style: { backgroundImage: {
            // Specify the image to use as background
            image: image,
            imageProperties: {
                // Fit type 3 = stretch to fill
                fitType: 3,
                // Center horizontally
                horizontalAlignment: PdfTemplateHorizontalAlignment.center,
                // Center vertically
                verticalAlignment: PdfTemplateVerticalAlignment.middle
            }
        } } },
        // Regular text cell
        { value: 'E01' }
    ]
}];
// Create grid with 2 columns
let grid: PdfGrid = new PdfGrid(2, widths, rows);
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Create a bitmap image from image data
var image = new ej.pdf.PdfBitmap(imageData);
// Define column widths
var widths = new Map([[0, 140], [1, 100]]);
// Create a row with background image in first cell
var rows = [{
    // Set row height to 70
    height: 70,
    cells: [
        // Cell with background image
        { value: 'Employee ID', style: { backgroundImage: {
            // Specify the image to use as background
            image: image,
            imageProperties: {
                // Fit type 3 = stretch to fill
                fitType: 3,
                // Center horizontally
                horizontalAlignment: ej.pdf.PdfTemplateHorizontalAlignment.center,
                // Center vertically
                verticalAlignment: ej.pdf.PdfTemplateVerticalAlignment.middle
            }
        } } },
        // Regular text cell
        { value: 'E01' }
    ]
}];
// Create grid with 2 columns
var grid = new ej.pdf.PdfGrid(2, widths, rows);
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## Add hyperlinks

Add hyperlinks to table cells using the `link` property with `PdfLinkType` to create external links or file links. Specify the link type and URI to enable clickable navigation in PDF cells.

The `PdfLinkType` enum provides three types of links:
- `externalLink`: Specifies a link that opens an external URI.
- `internalLink`: Specifies a link that navigates to a destination within the document.
- `file`: Specifies a link that opens an external file.

This example shows how to add external links and file links to table cells for interactive PDF navigation.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfGrid, PdfGridRow, PdfLinkType, PdfPage } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Define column widths
let widths: Map<number, number> = new Map<number, number>([[0, 130], [1, 180]]);
// Create rows with hyperlinks
let rows: PdfGridRow[] = [
    { cells: [
        { value: 'Product page' },
        // Cell with external link
        { value: 'Syncfusion', link: { type: PdfLinkType.externalLink, uri: 'https://www.syncfusion.com' } }
    ] },
    { cells: [
        { value: 'Report' },
        // Cell with file link
        { value: 'Open file', link: { type: PdfLinkType.file, uri: 'Report.pdf' } }
    ] }
];
// Create grid with 2 columns
let grid: PdfGrid = new PdfGrid(2, widths, rows);
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Define column widths
var widths = new Map([[0, 130], [1, 180]]);
// Create rows with hyperlinks
var rows = [
    { cells: [
        { value: 'Product page' },
        // Cell with external link
        { value: 'Syncfusion', link: { type: ej.pdf.PdfLinkType.externalLink, uri: 'https://www.syncfusion.com' } }
    ] },
    { cells: [
        { value: 'Report' },
        // Cell with file link
        { value: 'Open file', link: { type: ej.pdf.PdfLinkType.file, uri: 'Report.pdf' } }
    ] }
];
// Create grid with 2 columns
var grid = new ej.pdf.PdfGrid(2, widths, rows);
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## Draw a border less table

Use a zero-width border at grid level.

This example demonstrates how to create a table without visible borders by setting a zero-width pen style.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfGrid, PdfGridStyle, PdfPage, PdfPen } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create the data source
let source: object[] = [{ id: 'E01', name: 'Clay' }, { id: 'E02', name: 'Thomas' }];
// Define columns
let columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];
// Create a style with zero-width border (invisible)
let style: PdfGridStyle = { border: new PdfPen({ r: 255, g: 255, b: 255 }, 0) };
// Create grid with no visible borders
let grid: PdfGrid = new PdfGrid(source, columns, style);
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Create the data source
var source = [{ id: 'E01', name: 'Clay' }, { id: 'E02', name: 'Thomas' }];
// Define columns
var columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];
// Create a style with zero-width border (invisible)
var style = { border: new ej.pdf.PdfPen({ r: 255, g: 255, b: 255 }, 0) };
// Create grid with no visible borders
var grid = new ej.pdf.PdfGrid(source, columns, style);
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## PDF Grid border customization

Borders in a `PdfGrid` can be customized at the grid, column, row, and cell levels. Each level accepts either a `PdfPen`, which applies the same pen to all four sides, or a side-aware `PdfGridBorderPen`, which allows the width, color, and dash style of each side to be controlled independently. At grid level, the `PdfGridBorder` type additionally allows choosing which border groups are drawn through the `PdfGridBorderType` enumeration.

The following table lists the border properties available in the border settings.

| Type | Property | Description |
|---|---|---|
| `PdfGridBorder` | `type` | Selects the border groups to draw, using `PdfGridBorderType` values. Available at grid level only. |
| `PdfGridBorder` | `pen` | Side-aware border settings (`PdfGridBorderPen`) used to draw the grid borders. |
| `PdfGridBorderPen` | `width` | Border line width, applied to all sides unless a side is customized individually. |
| `PdfGridBorderPen` | `left`, `right`, `top`, `bottom` | Pen settings (`PdfGridPen`) for the individual border sides. |
| `PdfGridPen` | `color` | Border line color. |
| `PdfGridPen` | `style` | Border dash style (`PdfDashStyle`). |
| `PdfGridPen` | `dashOffset`, `dashPattern` | Dash offset and dash pattern for the border line. |

N> The `border` property is available on `PdfGridStyle` (grid), `PdfGridColumnStyle` (column), `PdfGridRowStyle` (row), and `PdfGridCellStyle` (cell).

### Customize PDF Grid borders

Border color, width, and dash style can be customized by assigning a `PdfPen` or a `PdfGridBorderPen` to the `border` property of a style. The same settings can be applied at grid, column, row, or cell level.

#### Customize borders at the grid level

Set the `border` property of the grid style to apply the border settings to every cell in the table.

This example demonstrates how to set the border color, width, and dash style for the entire table.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfColumnInformation, PdfDashStyle, PdfDocument, PdfGrid, PdfPage } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create the data source
let source: object[] = [
    { id: 'E01', name: 'Clay', salary: '$10,000' },
    { id: 'E02', name: 'Thomas', salary: '$12,000' },
    { id: 'E03', name: 'Anna', salary: '$11,500' }
];
// Define columns
let columns: PdfColumnInformation[] = [
    { field: 'id', headerText: 'Employee ID', width: 90 },
    { field: 'name', headerText: 'Employee Name', width: 140 },
    { field: 'salary', headerText: 'Salary', width: 100 }
];
// Create the grid
let grid: PdfGrid = new PdfGrid(source, columns);
// Apply a blue, dashed border with width 1.5 to the whole grid
grid.style = {
    border: {
        pen: {
            width: 1.5,
            left: { color: { r: 0, g: 0, b: 255 }, style: PdfDashStyle.dash },
            right: { color: { r: 0, g: 0, b: 255 }, style: PdfDashStyle.dash },
            top: { color: { r: 0, g: 0, b: 255 }, style: PdfDashStyle.dash },
            bottom: { color: { r: 0, g: 0, b: 255 }, style: PdfDashStyle.dash }
        }
    }
};
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Create the data source
var source = [
    { id: 'E01', name: 'Clay', salary: '$10,000' },
    { id: 'E02', name: 'Thomas', salary: '$12,000' },
    { id: 'E03', name: 'Anna', salary: '$11,500' }
];
// Define columns
var columns = [
    { field: 'id', headerText: 'Employee ID', width: 90 },
    { field: 'name', headerText: 'Employee Name', width: 140 },
    { field: 'salary', headerText: 'Salary', width: 100 }
];
// Create the grid
var grid = new ej.pdf.PdfGrid(source, columns);
// Apply a blue, dashed border with width 1.5 to the whole grid
grid.style = {
    border: {
        pen: {
            width: 1.5,
            left: { color: { r: 0, g: 0, b: 255 }, style: ej.pdf.PdfDashStyle.dash },
            right: { color: { r: 0, g: 0, b: 255 }, style: ej.pdf.PdfDashStyle.dash },
            top: { color: { r: 0, g: 0, b: 255 }, style: ej.pdf.PdfDashStyle.dash },
            bottom: { color: { r: 0, g: 0, b: 255 }, style: ej.pdf.PdfDashStyle.dash }
        }
    }
};
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

A `PdfPen` can also be assigned directly when all sides use the same appearance.

#### Customize borders at the column level

Set the `border` property in the column `style` to apply the border settings to all cells in that column.

This example demonstrates how to apply a red border to the **Salary** column.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfColumnInformation, PdfDocument, PdfGrid, PdfPage, PdfPen } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create the data source
let source: object[] = [
    { id: 'E01', name: 'Clay', salary: '$10,000' },
    { id: 'E02', name: 'Thomas', salary: '$12,000' },
    { id: 'E03', name: 'Anna', salary: '$11,500' }
];
// Define columns
let columns: PdfColumnInformation[] = [
    { field: 'id', headerText: 'Employee ID', width: 90 },
    { field: 'name', headerText: 'Employee Name', width: 140 },
    {
        field: 'salary', headerText: 'Salary', width: 100,
        // Apply a red border with width 2 to every cell in this column
        style: { border: new PdfPen({ r: 255, g: 0, b: 0 }, 2) }
    }
];
// Create the grid
let grid: PdfGrid = new PdfGrid(source, columns);
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Create the data source
var source = [
    { id: 'E01', name: 'Clay', salary: '$10,000' },
    { id: 'E02', name: 'Thomas', salary: '$12,000' },
    { id: 'E03', name: 'Anna', salary: '$11,500' }
];
// Define columns
var columns = [
    { field: 'id', headerText: 'Employee ID', width: 90 },
    { field: 'name', headerText: 'Employee Name', width: 140 },
    {
        field: 'salary', headerText: 'Salary', width: 100,
        // Apply a red border with width 2 to every cell in this column
        style: { border: new ej.pdf.PdfPen({ r: 255, g: 0, b: 0 }, 2) }
    }
];
// Create the grid
var grid = new ej.pdf.PdfGrid(source, columns);
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

#### Customize borders at the row level

Set the `border` property in the row `style` to apply the border settings to all cells in that row.

This example demonstrates how to apply a green border to the first record row.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfColumnInformation, PdfDocument, PdfGrid, PdfPage, PdfPen } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create the data source
let source: object[] = [
    { id: 'E01', name: 'Clay', salary: '$10,000' },
    { id: 'E02', name: 'Thomas', salary: '$12,000' },
    { id: 'E03', name: 'Anna', salary: '$11,500' }
];
// Define columns
let columns: PdfColumnInformation[] = [
    { field: 'id', headerText: 'Employee ID', width: 90 },
    { field: 'name', headerText: 'Employee Name', width: 140 },
    { field: 'salary', headerText: 'Salary', width: 100 }
];
// Create the grid
let grid: PdfGrid = new PdfGrid(source, columns);
// Apply a green border with width 2 to every cell in the first row
grid.rows[0].style = { border: new PdfPen({ r: 0, g: 128, b: 0 }, 2) };
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Create the data source
var source = [
    { id: 'E01', name: 'Clay', salary: '$10,000' },
    { id: 'E02', name: 'Thomas', salary: '$12,000' },
    { id: 'E03', name: 'Anna', salary: '$11,500' }
];
// Define columns
var columns = [
    { field: 'id', headerText: 'Employee ID', width: 90 },
    { field: 'name', headerText: 'Employee Name', width: 140 },
    { field: 'salary', headerText: 'Salary', width: 100 }
];
// Create the grid
var grid = new ej.pdf.PdfGrid(source, columns);
// Apply a green border with width 2 to every cell in the first row
grid.rows[0].style = { border: new ej.pdf.PdfPen({ r: 0, g: 128, b: 0 }, 2) };
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

#### Customize borders at the cell level

Set the `border` property in the cell `style` to apply the border settings to a single cell.

This example demonstrates how to apply a dash-dot orange border to a single cell.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfColumnInformation, PdfDashStyle, PdfDocument, PdfGrid, PdfPage } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create the data source
let source: object[] = [
    { id: 'E01', name: 'Clay', salary: '$10,000' },
    { id: 'E02', name: 'Thomas', salary: '$12,000' },
    { id: 'E03', name: 'Anna', salary: '$11,500' }
];
// Define columns
let columns: PdfColumnInformation[] = [
    { field: 'id', headerText: 'Employee ID', width: 90 },
    { field: 'name', headerText: 'Employee Name', width: 140 },
    { field: 'salary', headerText: 'Salary', width: 100 }
];
// Create the grid
let grid: PdfGrid = new PdfGrid(source, columns);
// Apply an orange dash-dot border to the second cell of the first row
grid.rows[0].cells[1].style = {
    border: {
        pen: {
            width: 2,
            left: { color: { r: 255, g: 140, b: 0 }, style: PdfDashStyle.dashDot },
            right: { color: { r: 255, g: 140, b: 0 }, style: PdfDashStyle.dashDot },
            top: { color: { r: 255, g: 140, b: 0 }, style: PdfDashStyle.dashDot },
            bottom: { color: { r: 255, g: 140, b: 0 }, style: PdfDashStyle.dashDot }
        }
    }
};
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Create the data source
var source = [
    { id: 'E01', name: 'Clay', salary: '$10,000' },
    { id: 'E02', name: 'Thomas', salary: '$12,000' },
    { id: 'E03', name: 'Anna', salary: '$11,500' }
];
// Define columns
var columns = [
    { field: 'id', headerText: 'Employee ID', width: 90 },
    { field: 'name', headerText: 'Employee Name', width: 140 },
    { field: 'salary', headerText: 'Salary', width: 100 }
];
// Create the grid
var grid = new ej.pdf.PdfGrid(source, columns);
// Apply an orange dash-dot border to the second cell of the first row
grid.rows[0].cells[1].style = {
    border: {
        pen: {
            width: 2,
            left: { color: { r: 255, g: 140, b: 0 }, style: ej.pdf.PdfDashStyle.dashDot },
            right: { color: { r: 255, g: 140, b: 0 }, style: ej.pdf.PdfDashStyle.dashDot },
            top: { color: { r: 255, g: 140, b: 0 }, style: ej.pdf.PdfDashStyle.dashDot },
            bottom: { color: { r: 255, g: 140, b: 0 }, style: ej.pdf.PdfDashStyle.dashDot }
        }
    }
};
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

### Customize border groups

Use the `type` property of the grid-level `PdfGridBorder` together with the `PdfGridBorderType` enumeration to choose which groups of borders are drawn. Values can be combined with the bitwise OR (`|`) operator.

| PdfGridBorderType | Description |
|---|---|
| `None` | No borders are selected. |
| `All` | All outer and inner borders. This is the default. When combined with other values, the combined groups are excluded from drawing. |
| `Outside` | The four outer borders (left, right, top, and bottom). |
| `Inside` | All inner borders (vertical and horizontal separators between cells). |
| `InsideHorizontal` | Horizontal separators between rows. |
| `InsideVertical` | Vertical separators between columns. |
| `Left`, `Right`, `Top`, `Bottom` | The individual outer borders. |

The `pen` property of the same `PdfGridBorder` defines how the selected borders look.

#### Draw outer borders only

This example demonstrates how to draw only the outer border of the table.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfColumnInformation, PdfDocument, PdfGrid, PdfGridBorderType, PdfPage } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create the data source
let source: object[] = [
    { id: 'E01', name: 'Clay', salary: '$10,000' },
    { id: 'E02', name: 'Thomas', salary: '$12,000' },
    { id: 'E03', name: 'Anna', salary: '$11,500' }
];
// Define columns
let columns: PdfColumnInformation[] = [
    { field: 'id', headerText: 'Employee ID', width: 90 },
    { field: 'name', headerText: 'Employee Name', width: 140 },
    { field: 'salary', headerText: 'Salary', width: 100 }
];
// Create the grid
let grid: PdfGrid = new PdfGrid(source, columns);
// Draw only the outer borders
grid.style = {
    border: {
        type: PdfGridBorderType.Outside,
        pen: { width: 2 }
    }
};
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Create the data source
var source = [
    { id: 'E01', name: 'Clay', salary: '$10,000' },
    { id: 'E02', name: 'Thomas', salary: '$12,000' },
    { id: 'E03', name: 'Anna', salary: '$11,500' }
];
// Define columns
var columns = [
    { field: 'id', headerText: 'Employee ID', width: 90 },
    { field: 'name', headerText: 'Employee Name', width: 140 },
    { field: 'salary', headerText: 'Salary', width: 100 }
];
// Create the grid
var grid = new ej.pdf.PdfGrid(source, columns);
// Draw only the outer borders
grid.style = {
    border: {
        type: ej.pdf.PdfGridBorderType.Outside,
        pen: { width: 2 }
    }
};
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

#### Draw inner borders only

This example demonstrates how to draw only the inner horizontal and vertical borders.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfColumnInformation, PdfDocument, PdfGrid, PdfGridBorderType, PdfPage } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create the data source
let source: object[] = [
    { id: 'E01', name: 'Clay', salary: '$10,000' },
    { id: 'E02', name: 'Thomas', salary: '$12,000' },
    { id: 'E03', name: 'Anna', salary: '$11,500' }
];
// Define columns
let columns: PdfColumnInformation[] = [
    { field: 'id', headerText: 'Employee ID', width: 90 },
    { field: 'name', headerText: 'Employee Name', width: 140 },
    { field: 'salary', headerText: 'Salary', width: 100 }
];
// Create the grid
let grid: PdfGrid = new PdfGrid(source, columns);
// Draw only the inner borders
grid.style = {
    border: {
        type: PdfGridBorderType.Inside,
        pen: { width: 1 }
    }
};
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Create the data source
var source = [
    { id: 'E01', name: 'Clay', salary: '$10,000' },
    { id: 'E02', name: 'Thomas', salary: '$12,000' },
    { id: 'E03', name: 'Anna', salary: '$11,500' }
];
// Define columns
var columns = [
    { field: 'id', headerText: 'Employee ID', width: 90 },
    { field: 'name', headerText: 'Employee Name', width: 140 },
    { field: 'salary', headerText: 'Salary', width: 100 }
];
// Create the grid
var grid = new ej.pdf.PdfGrid(source, columns);
// Draw only the inner borders
grid.style = {
    border: {
        type: ej.pdf.PdfGridBorderType.Inside,
        pen: { width: 1 }
    }
};
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

#### Draw horizontal or vertical borders

This example demonstrates how to draw only the horizontal separators between rows. Use `PdfGridBorderType.InsideVertical` instead to draw only the vertical separators between columns.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfColumnInformation, PdfDocument, PdfGrid, PdfGridBorderType, PdfPage } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create the data source
let source: object[] = [
    { id: 'E01', name: 'Clay', salary: '$10,000' },
    { id: 'E02', name: 'Thomas', salary: '$12,000' },
    { id: 'E03', name: 'Anna', salary: '$11,500' }
];
// Define columns
let columns: PdfColumnInformation[] = [
    { field: 'id', headerText: 'Employee ID', width: 90 },
    { field: 'name', headerText: 'Employee Name', width: 140 },
    { field: 'salary', headerText: 'Salary', width: 100 }
];
// Create the grid
let grid: PdfGrid = new PdfGrid(source, columns);
// Draw only the horizontal separators between rows
grid.style = {
    border: {
        type: PdfGridBorderType.InsideHorizontal,
        pen: { width: 1 }
    }
};
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Create the data source
var source = [
    { id: 'E01', name: 'Clay', salary: '$10,000' },
    { id: 'E02', name: 'Thomas', salary: '$12,000' },
    { id: 'E03', name: 'Anna', salary: '$11,500' }
];
// Define columns
var columns = [
    { field: 'id', headerText: 'Employee ID', width: 90 },
    { field: 'name', headerText: 'Employee Name', width: 140 },
    { field: 'salary', headerText: 'Salary', width: 100 }
];
// Create the grid
var grid = new ej.pdf.PdfGrid(source, columns);
// Draw only the horizontal separators between rows
grid.style = {
    border: {
        type: ej.pdf.PdfGridBorderType.InsideHorizontal,
        pen: { width: 1 }
    }
};
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

#### Combine multiple border groups

This example demonstrates how to combine the outer borders with the inner horizontal borders.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfColumnInformation, PdfDocument, PdfGrid, PdfGridBorderType, PdfPage } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create the data source
let source: object[] = [
    { id: 'E01', name: 'Clay', salary: '$10,000' },
    { id: 'E02', name: 'Thomas', salary: '$12,000' },
    { id: 'E03', name: 'Anna', salary: '$11,500' }
];
// Define columns
let columns: PdfColumnInformation[] = [
    { field: 'id', headerText: 'Employee ID', width: 90 },
    { field: 'name', headerText: 'Employee Name', width: 140 },
    { field: 'salary', headerText: 'Salary', width: 100 }
];
// Create the grid
let grid: PdfGrid = new PdfGrid(source, columns);
// Draw the outer borders and the horizontal separators
grid.style = {
    border: {
        type: PdfGridBorderType.Outside | PdfGridBorderType.InsideHorizontal,
        pen: { width: 1.5 }
    }
};
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Create the data source
var source = [
    { id: 'E01', name: 'Clay', salary: '$10,000' },
    { id: 'E02', name: 'Thomas', salary: '$12,000' },
    { id: 'E03', name: 'Anna', salary: '$11,500' }
];
// Define columns
var columns = [
    { field: 'id', headerText: 'Employee ID', width: 90 },
    { field: 'name', headerText: 'Employee Name', width: 140 },
    { field: 'salary', headerText: 'Salary', width: 100 }
];
// Create the grid
var grid = new ej.pdf.PdfGrid(source, columns);
// Draw the outer borders and the horizontal separators
grid.style = {
    border: {
        type: ej.pdf.PdfGridBorderType.Outside | ej.pdf.PdfGridBorderType.InsideHorizontal,
        pen: { width: 1.5 }
    }
};
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

N> When `PdfGridBorderType.All` is combined with other values, those groups are excluded. For example, `PdfGridBorderType.All | PdfGridBorderType.InsideVertical` draws every border except the vertical separators. An invalid value results in an error.

### Customize individual border sides

Use the `left`, `right`, `top`, and `bottom` properties of `PdfGridBorderPen` to customize each side independently. Sides that are not specified keep the settings inherited from the lower-precedence levels.

This example demonstrates how to draw a thick blue bottom border, a red dashed top border, and keep the left and right sides at their default appearance.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfColumnInformation, PdfDashStyle, PdfDocument, PdfGrid, PdfPage } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create the data source
let source: object[] = [
    { id: 'E01', name: 'Clay', salary: '$10,000' },
    { id: 'E02', name: 'Thomas', salary: '$12,000' },
    { id: 'E03', name: 'Anna', salary: '$11,500' }
];
// Define columns
let columns: PdfColumnInformation[] = [
    { field: 'id', headerText: 'Employee ID', width: 90 },
    { field: 'name', headerText: 'Employee Name', width: 140 },
    { field: 'salary', headerText: 'Salary', width: 100 }
];
// Create the grid
let grid: PdfGrid = new PdfGrid(source, columns);
// Customize the top and bottom border sides only
grid.style = {
    border: {
        pen: {
            top: { color: { r: 255, g: 0, b: 0 }, style: PdfDashStyle.dash },
            bottom: { color: { r: 0, g: 0, b: 255 } }
        }
    }
};
// Set a wider bottom border on the last row only
grid.rows[2].style = {
    border: { width: 3, bottom: { color: { r: 0, g: 0, b: 255 } } }
};
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Create the data source
var source = [
    { id: 'E01', name: 'Clay', salary: '$10,000' },
    { id: 'E02', name: 'Thomas', salary: '$12,000' },
    { id: 'E03', name: 'Anna', salary: '$11,500' }
];
// Define columns
var columns = [
    { field: 'id', headerText: 'Employee ID', width: 90 },
    { field: 'name', headerText: 'Employee Name', width: 140 },
    { field: 'salary', headerText: 'Salary', width: 100 }
];
// Create the grid
var grid = new ej.pdf.PdfGrid(source, columns);
// Customize the top and bottom border sides only
grid.style = {
    border: {
        pen: {
            top: { color: { r: 255, g: 0, b: 0 }, style: ej.pdf.PdfDashStyle.dash },
            bottom: { color: { r: 0, g: 0, b: 255 } }
        }
    }
};
// Set a wider bottom border on the last row only
grid.rows[2].style = {
    border: { width: 3, bottom: { color: { r: 0, g: 0, b: 255 } } }
};
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

N> The `width` property applies to every side of the level it is set on. If a side is defined, the side inherits the unspecified color, dash style, and dash settings from the lower-precedence levels.

N> **Border precedence and inheritance:** Border settings are resolved separately for each cell in the following precedence order: cell, row, column, grid, and default style. Properties that are not defined at a higher-precedence level are inherited from the lower-precedence level. A border side defined at a higher level overrides the corresponding inherited side, while assigning a `PdfPen` replaces all four sides. The `type` property is available only at the grid level and determines which border groups are drawn.

## Update the grid data source

Reassign `dataSource` on a data-source grid. Generated rows are rebuilt, while manually added rows remain after them.

This example shows how to dynamically update a table's data source and how manual rows are preserved after the update.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfGrid, PdfPage } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Define columns
let columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];
// Create grid with initial data source
let grid: PdfGrid = new PdfGrid([{ id: 'E01', name: 'Clay' }], columns);
// Add a manual row (this will be preserved after update)
grid.addRow({ cells: [{ value: 'Manual' }, { value: 'Record' }] });
// Update the data source (data-source rows are rebuilt)
grid.dataSource = [{ id: 'E10', name: 'Andrew' }, { id: 'E11', name: 'Michael' }];
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Define columns
var columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];
// Create grid with initial data source
var grid = new ej.pdf.PdfGrid([{ id: 'E01', name: 'Clay' }], columns);
// Add a manual row (this will be preserved after update)
grid.addRow({ cells: [{ value: 'Manual' }, { value: 'Record' }] });
// Update the data source (data-source rows are rebuilt)
grid.dataSource = [{ id: 'E10', name: 'Andrew' }, { id: 'E11', name: 'Michael' }];
// Draw the grid on the page
grid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## Add a nested table

Assign a `PdfGrid` as the value of a cell to create a nested table. The nested grid is measured and drawn within the available content area of the parent cell.

This example demonstrates how to create nested tables by embedding a PdfGrid within a parent table cell.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfGrid, PdfGridRow, PdfPage } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create the nested grid (inner table)
let nestedWidths: Map<number, number> = new Map<number, number>([[0, 80], [1, 100]]);
let nestedRows: PdfGridRow[] = [
    { cells: [{ value: 'Product' }, { value: 'Quantity' }] },
    { cells: [{ value: 'Keyboard' }, { value: '2' }] },
    { cells: [{ value: 'Mouse' }, { value: '1' }] }
];
// Create the nested grid instance
let nestedGrid: PdfGrid = new PdfGrid(2, nestedWidths, nestedRows);
// Create the parent grid (outer table)
let parentWidths: Map<number, number> = new Map<number, number>([[0, 100], [1, 200]]);
let parentRows: PdfGridRow[] = [{
    cells: [
        { value: 'Order details' },
        // Embed the nested grid as a cell value
        { value: nestedGrid }
    ]
}];
// Create the parent grid instance
let parentGrid: PdfGrid = new PdfGrid(2, parentWidths, parentRows);
// Draw the parent grid (which includes the nested grid)
parentGrid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Create the nested grid (inner table)
var nestedWidths = new Map([[0, 80], [1, 100]]);
var nestedRows = [
    { cells: [{ value: 'Product' }, { value: 'Quantity' }] },
    { cells: [{ value: 'Keyboard' }, { value: '2' }] },
    { cells: [{ value: 'Mouse' }, { value: '1' }] }
];
// Create the nested grid instance
var nestedGrid = new ej.pdf.PdfGrid(2, nestedWidths, nestedRows);
// Create the parent grid (outer table)
var parentWidths = new Map([[0, 100], [1, 200]]);
var parentRows = [{
    cells: [
        { value: 'Order details' },
        // Embed the nested grid as a cell value
        { value: nestedGrid }
    ]
}];
// Create the parent grid instance
var parentGrid = new ej.pdf.PdfGrid(2, parentWidths, parentRows);
// Draw the parent grid (which includes the nested grid)
parentGrid.draw(page, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

N> Ensure that the nested grid fits within the parent cell. A deeply nested or over-sized grid may increase the parent row height or require additional layout space.

## Horizontal overflow

Set `horizontalOverflow` to control how the grid handles columns wider than the available page width. The `PdfGridHorizontalOverflowType` enum provides three options:

- **`onePage`** (default): Fits all grid columns within the available page width. If columns are wider than the page, they are scaled down to fit on a single page without spanning multiple pages.

- **`nextPage`**: Draws overflowing columns on the next page. When columns exceed the available width on the current page, the additional columns are drawn on subsequent pages while maintaining row correspondence across pages.

- **`lastPage`**: Draws all overflowing columns on the last page. When columns exceed the available width, all overflow columns are grouped together and drawn on a single continuation page, with row heights adjusted to accommodate the overflow.

This example shows how to handle wide tables that exceed the page width by distributing overflow columns across multiple pages.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfGrid, PdfGridHorizontalOverflowType, PdfGridLayoutResult, PdfGridRow, PdfPage } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Define column widths (total width exceeds page width)
let widths: Map<number, number> = new Map<number, number>([[0, 80], [1, 120], [2, 80], [3, 120]]);
// Create a row with 4 cells
let rows: PdfGridRow[] = [{ cells: [{ value: 'A' }, { value: 'B' }, { value: 'C' }, { value: 'D' }] }];
// Create grid with 4 columns
let grid: PdfGrid = new PdfGrid(4, widths, rows);
// Set horizontal overflow to nextPage (overflow columns go to next page)
grid.horizontalOverflow = PdfGridHorizontalOverflowType.nextPage;
// Draw grid with limited width to trigger overflow
let result: PdfGridLayoutResult = grid.draw(page, { x: 10, y: 10, width: 150, height: 400 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Define column widths (total width exceeds page width)
var widths = new Map([[0, 80], [1, 120], [2, 80], [3, 120]]);
// Create a row with 4 cells
var rows = [{ cells: [{ value: 'A' }, { value: 'B' }, { value: 'C' }, { value: 'D' }] }];
// Create grid with 4 columns
var grid = new ej.pdf.PdfGrid(4, widths, rows);
// Set horizontal overflow to nextPage (overflow columns go to next page)
grid.horizontalOverflow = ej.pdf.PdfGridHorizontalOverflowType.nextPage;
// Draw grid with limited width to trigger overflow
var result = grid.draw(page, { x: 10, y: 10, width: 150, height: 400 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## Draw table within PDF templates

The graphics overload does not paginate. The complete grid must fit within the supplied bounds.

This example demonstrates how to draw a table within a PDF template where the table must fit completely within the defined template bounds.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfGrid, PdfPage } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create a PDF template with width 300 and height 200
let template: PdfTemplate = new PdfTemplate(300, 200);
// Create the data source
let source: object[] = [{ id: 'E01', name: 'Clay' }, { id: 'E02', name: 'Thomas' }];
// Define columns
let columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];
// Create grid from data source and columns
let grid: PdfGrid = new PdfGrid(source, columns);
// Draw the grid on the template's graphics (no pagination)
grid.draw(template.graphics, { x: 10, y: 10, width: 300, height: 200 });
// Draw the template on the page
page.graphics.drawTemplate(template, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Create a PDF template with width 300 and height 200
var template = new ej.pdf.PdfTemplate(300, 200);
// Create the data source
var source = [{ id: 'E01', name: 'Clay' }, { id: 'E02', name: 'Thomas' }];
// Define columns
var columns = [{ field: 'id', headerText: 'ID' }, { field: 'name', headerText: 'Name' }];
// Create grid from data source and columns
var grid = new ej.pdf.PdfGrid(source, columns);
// Draw the grid on the template's graphics (no pagination)
grid.draw(template.graphics, { x: 10, y: 10, width: 300, height: 200 });
// Draw the template on the page
page.graphics.drawTemplate(template, { x: 10, y: 10 });
// Save the document as Output.pdf
document.save('Output.pdf');
// Dispose of the document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/document-library/javascript/#/tailwind3/pdf/default)
- [JavaScript PDF examples on GitHub](https://github.com/SyncfusionExamples/javascript-pdf-examples)
