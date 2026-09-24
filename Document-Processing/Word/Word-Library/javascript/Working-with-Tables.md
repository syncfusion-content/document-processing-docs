---
title: Working with Tables in JavaScript Word | Syncfusion
description: Learn how to create, format, merge, and manage tables in the Syncfusion JavaScript Word library.
platform: document-processing
control: Word Library
documentation: UG
---
# Working with Tables in JavaScript Word

A table in a Word document is used to arrange content in rows and columns.

## Create Table

The following code example shows how to create a simple table with a predefined number of rows and cells.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { writeFileSync } from 'node:fs';
import { Document } from './src/index.js';

// Create a Word document
const doc = Document.create();

// Create a 3 x 2 table
const table = doc.appendTable({ rows: 3, columns: 2 });

// Fill the table cells
table.rows[0]!.cells[0]!.text = 'Item';
table.rows[0]!.cells[1]!.text = 'Price($)';

table.rows[1]!.cells[0]!.text = 'Apple';
table.rows[1]!.cells[1]!.text = '50';

table.rows[2]!.cells[0]!.text = 'Orange';
table.rows[2]!.cells[1]!.text = '30';

// Save the document
const saveBytes = doc.saveSync();
writeFileSync('Sample.docx', saveBytes);
{% endhighlight %}
{% endtabs %}

## Create Table Dynamically

The following code example shows how to create a table by adding rows dynamically.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { writeFileSync } from 'node:fs';
import { Document } from 'docx-js';
import 'docx-js/tables';

// Create a Word document
const doc = Document.create();

doc.body.appendParagraph().appendText('Price Details');
doc.body.appendParagraph();

// Create a table with one header row and two columns
const table = doc.appendTable({ rows: 1, columns: 2 });

// Header row
table.rows[0]!.cells[0]!.width = 200;
table.rows[0]!.cells[0]!.text = 'Item';

table.rows[0]!.cells[1]!.width = 200;
table.rows[0]!.cells[1]!.text = 'Price($)';

// Add the remaining rows
let row = table.appendRow();
row.cells[0]!.width = 200;
row.cells[0]!.text = 'Apple';
row.cells[1]!.width = 200;
row.cells[1]!.text = '50';

row = table.appendRow();
row.cells[0]!.width = 200;
row.cells[0]!.text = 'Orange';
row.cells[1]!.width = 200;
row.cells[1]!.text = '30';

row = table.appendRow();
row.cells[0]!.width = 200;
row.cells[0]!.text = 'Banana';
row.cells[1]!.width = 200;
row.cells[1]!.text = '20';

row = table.appendRow();
row.cells[0]!.width = 200;
row.cells[0]!.text = 'Grapes';
row.cells[1]!.width = 200;
row.cells[1]!.text = '70';

// Save the document
const saveBytes = doc.saveSync();
writeFileSync('Table.docx', saveBytes);
{% endhighlight %}
{% endtabs %}

## Nested Table

You can create a nested table by adding a table inside a cell.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { writeFileSync } from 'node:fs';
import { Document } from 'docx-js';
import { appendNestedTable } from 'docx-js/tables';

// Create a Word document
const doc = Document.create();

doc.body.appendParagraph().appendText('Price Details');

// Create the parent table
const table = doc.appendTable({ rows: 3, columns: 2 });

// Header row
table.rows[0]!.cells[0]!.text = 'Item';
table.rows[0]!.cells[1]!.text = 'Price($)';

// Add text before the nested table
table.rows[1]!.cells[0]!.text = 'Items with same price';

// Create a nested table inside the first cell of the second row
const nestedTable = appendNestedTable(table.rows[1]!.cells[0]!, 3, 1);

// Fill the nested table
nestedTable.rows[0]!.cells[0]!.width = 200;
nestedTable.rows[0]!.cells[0]!.text = 'Apple';

nestedTable.rows[1]!.cells[0]!.width = 200;
nestedTable.rows[1]!.cells[0]!.text = 'Orange';

nestedTable.rows[2]!.cells[0]!.width = 200;
nestedTable.rows[2]!.cells[0]!.text = 'Mango';

// Second row value
table.rows[1]!.cells[1]!.text = '85';

// Third row
table.rows[2]!.cells[0]!.text = 'Pomegranate';
table.rows[2]!.cells[1]!.text = '70';

// Save the document
const saveBytes = doc.saveSync();
writeFileSync('NestedTable.docx', saveBytes);
{% endhighlight %}
{% endtabs %}

## Align text within a table

You can iterate through the cells in a table and align the text in each cell.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { readFileSync, writeFileSync } from 'node:fs';
import { Document, type BodyItem } from 'docx-js';
import { isTableBlock, type Table } from 'docx-js/tables';
import { isBlockContentControl } from 'docx-js/content-controls';

// Load the document
const bytes = readFileSync('Template.docx');
const doc = Document.loadSync(new Uint8Array(bytes));

// Align all document content
alignBodyItems(doc.body.items, 'center', 'center');

// Save the document
const saveBytes = doc.saveSync();
writeFileSync('Sample.docx', saveBytes);

function alignBodyItems(
    items: readonly BodyItem[],
    horizontalAlignment: 'left' | 'center' | 'right' | 'start' | 'end' | 'both',
    verticalAlignment: 'top' | 'center' | 'bottom'
): void {
    for (const item of items) {
        // Paragraph
        if (item.type === 'paragraph') {
            item.paragraph.alignment = horizontalAlignment as any;
        }
        // Table
        else if (item.type === 'feature' && isTableBlock(item)) {
            alignTable(item.value, horizontalAlignment, verticalAlignment);
        }
        // Block content control
        else if (item.type === 'feature' && isBlockContentControl(item)) {
            const blocks = item.value.blockContentControl;
            if (blocks) {
                alignBodyItems(blocks, horizontalAlignment, verticalAlignment);
            }
        }
    }
}

function alignTable(
    table: Table,
    horizontalAlignment: 'left' | 'center' | 'right' | 'start' | 'end' | 'both',
    verticalAlignment: 'top' | 'center' | 'bottom'
): void {
    for (const row of table.rows) {
        for (const cell of row.cells) {
            // Apply vertical alignment to the cell
            cell.verticalAlignment = verticalAlignment;

            // Apply horizontal alignment to the paragraphs inside the cell
            for (const paragraph of cell.paragraphs) {
                paragraph.alignment = horizontalAlignment as any;
            }

            // Process the remaining body items inside the cell
            alignBodyItems(cell.items, horizontalAlignment, verticalAlignment);

            // Process nested tables
            for (const nestedTable of cell.nestedTables) {
                alignTable(nestedTable, horizontalAlignment, verticalAlignment);
            }
        }
    }
}
{% endhighlight %}
{% endtabs %}

## Insert Image to Table Cell

You can insert an image into a table cell by accessing the paragraph in that cell.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { readFileSync, writeFileSync } from 'node:fs';
import { Document, Pt } from 'docx-js';
import 'docx-js/tables';

// Create a Word document
const doc = Document.create();

// Create a table
const table = doc.appendTable({ rows: 2, columns: 2 });

// Header row
table.rows[0]!.cells[0]!.text = 'Product Name';
table.rows[0]!.cells[1]!.text = 'Product Image';

// Product name
table.rows[1]!.cells[0]!.text = 'Apple Juice';

// Product image
const imageBytes = readFileSync('Image.png');
const paragraph = table.rows[1]!.cells[1]!.paragraphs[0]!;
paragraph.appendImage(new Uint8Array(imageBytes), {
    width: Pt(60),
    height: Pt(75),
    imageType: 'image/png'
});

// Save the document
const saveBytes = doc.saveSync();
writeFileSync('TableWithImage.docx', saveBytes);
{% endhighlight %}
{% endtabs %}

## Apply formatting to Table and Row

The following code example shows how to load an existing document and apply table formatting options.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { readFileSync, writeFileSync } from 'node:fs';
import { Document, Pt } from 'docx-js';
import 'docx-js/tables';

// Load an existing Word document
const bytes = readFileSync('Template.docx');
const doc = Document.loadSync(new Uint8Array(bytes));

// Get the first table in the document
const tableBlock = doc.body.items.find(item => item.type === 'feature' && 'rows' in item.value);

if (tableBlock && tableBlock.type === 'feature' && 'rows' in tableBlock.value) {
    const table = tableBlock.value;

    // Set the table title
    table.caption = 'PriceDetails';

    // Set the table description
    table.description = 'This table shows the price details of various fruits';

    // Set the table indent
    table.indent = Pt(50);

    // Set the shading for all table cells
    for (const row of table.rows) {
        for (const cell of row.cells) {
            cell.shading = { fill: 'C0C0C0' };
        }
    }

    // Set the table alignment
    table.alignment = 'left';

    // Set the cell margins
    table.cellMargins = {
        top: Pt(10),
        right: Pt(10),
        bottom: Pt(10),
        left: Pt(10)
    };

    // Fit the table to the window width
    table.autoFit('fitToWindow');

    // Set the table borders
    table.borders = {
        top: { style: 'double', color: 'FF0000', size: 16 },
        left: { style: 'double', color: 'FF0000', size: 16 },
        bottom: { style: 'double', color: 'FF0000', size: 16 },
        right: { style: 'double', color: 'FF0000', size: 16 },
        insideH: { style: 'double', color: 'FF0000', size: 16 },
        insideV: { style: 'double', color: 'FF0000', size: 16 }
    };

    // Get the first row in the table
    const row = table.rows[0];

    if (row) {
        // Set the row height
        row.height = { value: Pt(20), rule: 'atLeast' };

        // Mark the row as a header row
        row.isHeaderRow = true;
    }
}

// Save the document
const saveBytes = doc.saveSync();
writeFileSync('Sample.docx', saveBytes);
{% endhighlight %}
{% endtabs %}

### Applying cell formatting

Use the JavaScript Word library to format table cells by setting text wrapping, text direction, borders, vertical alignment, and background color.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { readFileSync, writeFileSync } from 'node:fs';
import { Document, Pt } from 'docx-js';
import { isTableBlock } from 'docx-js/tables';

// Load an existing Word document
const bytes = readFileSync('Template.docx');
const doc = Document.loadSync(new Uint8Array(bytes));

// Get the first table in the document
const tableBlock = doc.body.items.find(isTableBlock);

if (tableBlock) {
    const table = tableBlock.value;

    // Get the first row in the table
    const row = table.rows[0];

    if (row) {
        // Set the row height
        row.height = { value: Pt(30), rule: 'atLeast' };

        // Get the first cell in the row
        let cell = row.cells[0];

        if (cell) {
            // Set the cell background color
            cell.shading = { fill: 'C0C0C0' };

            // Use different padding from the table
            cell.isSamePaddingsAsTable = false;

            // Set the cell padding
            cell.margins = {
                left: Pt(5),
                right: Pt(5),
                top: Pt(5),
                bottom: Pt(5)
            };

            // Set the vertical alignment
            cell.verticalAlignment = 'center';

            // Disable text wrapping
            cell.noWrap = true;

            // Set the text direction
            cell.textDirection = 'tb';
        }

        // Get the second cell in the row
        cell = row.cells[1];

        if (cell) {
            // Set the cell background color
            cell.shading = { fill: 'C0C0C0' };

            // Use different padding from the table
            cell.isSamePaddingsAsTable = false;

            // Set the cell padding
            cell.margins = {
                left: Pt(5),
                right: Pt(5),
                top: Pt(5),
                bottom: Pt(5)
            };

            // Set the vertical alignment
            cell.verticalAlignment = 'center';

            // Disable text wrapping
            cell.noWrap = true;

            // Set the text direction
            cell.textDirection = 'btLr';
        }

        // Get the third cell in the row
        cell = row.cells[2];

        if (cell) {
            // Set the cell borders
            cell.borders = {
                top: { style: 'thick', color: 'FF0000', size: 16 },
                bottom: { style: 'thick', color: 'FF0000', size: 16 },
                left: { style: 'thick', color: 'FF0000', size: 16 },
                right: { style: 'thick', color: 'FF0000', size: 16 }
            };
        }

        // Set text directions for the remaining cells
        if (row.cells[3]) {
            row.cells[3].textDirection = 'lrV';
        }

        if (row.cells[4]) {
            row.cells[4].textDirection = 'rlV';
        }

        if (row.cells[5]) {
            row.cells[5].textDirection = 'lr';
        }
    }
}

// Save the document
const saveBytes = doc.saveSync();
writeFileSync('Output.docx', saveBytes);
{% endhighlight %}
{% endtabs %}

### Resize table

You can automatically resize table cells by using AutoFit options.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { readFileSync, writeFileSync } from 'node:fs';
import { Document } from 'docx-js';
import { AutoFitType, isTableBlock } from 'docx-js/tables';

// Load an existing Word document
const bytes = readFileSync('Template.docx');
const doc = Document.loadSync(new Uint8Array(bytes));

// Get all tables in the document
const tables = doc.body.items.filter(isTableBlock).map(item => item.value);

// Resize the first table to fit its contents
if (tables[0]) {
    tables[0].autoFit(AutoFitType.FitToContent);
}

// Resize the second table to fit the window width
if (tables[1]) {
    tables[1].autoFit(AutoFitType.FitToWindow);
}

// Resize the third table to use fixed column widths
if (tables[2]) {
    tables[2].autoFit(AutoFitType.FixedColumnWidth);
}

// Save the document
const saveBytes = doc.saveSync();
writeFileSync('Sample.docx', saveBytes);
{% endhighlight %}
{% endtabs %}

## Merging cells

You can combine two or more table cells in the same row or column into a single cell.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { writeFileSync } from 'node:fs';
import { Document } from 'docx-js';
import 'docx-js/tables';

// Create a Word document
const doc = Document.create();

doc.body.appendParagraph().appendText('Horizontal merging of table cells');

// Create a 5 x 5 table
const table = doc.appendTable({ rows: 5, columns: 5 });

// Merge cells from column 1 to column 4 in row 2
table.mergeCells({ fromRow: 2, fromColumn: 1, toRow: 2, toColumn: 4 });

// Save the document
const saveBytes = doc.saveSync();
writeFileSync('Sample.docx', saveBytes);
{% endhighlight %}
{% endtabs %}

## Specifying table header row to repeat on each page

Specify one or more rows in a table to repeat as header rows when the table spans multiple pages.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { writeFileSync } from 'node:fs';
import { Document, Pt } from 'docx-js';
import 'docx-js/tables';

// Create a Word document
const doc = Document.create();

// Create a table with 50 rows and 1 column
const table = doc.appendTable({ rows: 50, columns: 1 });

// Set up the first row
let row = table.rows[0];

if (row) {
    // Mark the first row as a header row
    row.isHeaderRow = true;

    // Set the row height
    row.height = { value: Pt(20), rule: 'atLeast' };

    // Add text to the first cell
    row.cells[0]!.text = 'Header Row';
}

// Fill the remaining rows
for (let i = 1; i < 50; i++) {
    row = table.rows[i];

    if (!row) {
        continue;
    }

    // Set the row height
    row.height = { value: Pt(20), rule: 'atLeast' };

    // Add text to the first cell
    row.cells[0]!.text = `Text in Row ${i}`;
}

// Save the document
const saveBytes = doc.saveSync();
writeFileSync('Sample.docx', saveBytes);
{% endhighlight %}
{% endtabs %}

## Keeping rows from breaking across pages

Enable or disable row contents from splitting across multiple pages.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { readFileSync, writeFileSync } from 'node:fs';
import { Document } from 'docx-js';
import { isTableBlock } from 'docx-js/tables';

// Load an existing Word document
const bytes = readFileSync('Template.docx');
const doc = Document.loadSync(new Uint8Array(bytes));

// Get the first table in the document
const tableBlock = doc.body.items.find(isTableBlock);

if (tableBlock) {
    const table = tableBlock.value;

    // Disable page breaks within table rows
    for (const row of table.rows) {
        row.cantSplit = true;
    }
}

// Save the document
const saveBytes = doc.saveSync();
writeFileSync('Sample.docx', saveBytes);
{% endhighlight %}
{% endtabs %}

## Iterating through table elements

Iterate through the rows, cells, and paragraphs in a table.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { readFileSync, writeFileSync } from 'node:fs';
import { Document } from 'docx-js';
import { isTableBlock } from 'docx-js/tables';

// Load an existing Word document
const bytes = readFileSync('Template.docx');
const doc = Document.loadSync(new Uint8Array(bytes));

// Get the first table in the document
const tableBlock = doc.body.items.find(isTableBlock);

if (tableBlock) {
    const table = tableBlock.value;

    // Iterate through rows
    for (const row of table.rows) {
        // Iterate through cells
        for (const cell of row.cells) {
            // Iterate through cell paragraphs
            for (const paragraph of cell.paragraphs) {
                // Check the paragraph text
                if (paragraph.text.includes('panda')) {
                    // Apply green background shading
                    cell.shading = { fill: '00FF00' };
                    break;
                }
            }
        }
    }
}

// Save the document
const saveBytes = doc.saveSync();
writeFileSync('Sample.docx', saveBytes);
{% endhighlight %}
{% endtabs %}

## Removing the table

Remove a table from a document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { readFileSync, writeFileSync } from 'node:fs';
import { Document } from 'docx-js';
import { isTableBlock } from 'docx-js/tables';

// Load an existing Word document
const bytes = readFileSync('Template.docx');
const doc = Document.loadSync(new Uint8Array(bytes));

// Get the first table in the document
const tableBlock = doc.body.items.find(isTableBlock);

if (tableBlock) {
    // Get the table index in the document body
    const index = doc.body.items.indexOf(tableBlock);

    // Remove the table from the document body
    if (index !== -1) {
        doc.body.removeBlockAt(index);
    }
}

// Save the document
const saveBytes = doc.saveSync();
writeFileSync('Sample.docx', saveBytes);
{% endhighlight %}
{% endtabs %}

## Removing the table rows

Remove a specific row from a table.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { readFileSync, writeFileSync } from 'node:fs';
import { Document } from 'docx-js';
import { isTableBlock } from 'docx-js/tables';

// Load an existing Word document
const bytes = readFileSync('Template.docx');
const doc = Document.loadSync(new Uint8Array(bytes));

// Get the first table in the document
const tableBlock = doc.body.items.find(isTableBlock);

if (tableBlock) {
    const table = tableBlock.value;

    // Get the row at index 6
    const row = table.rows[6];

    // Remove the row from the table
    if (row) {
        table.removeRow(row);
    }
}

// Save the document
const saveBytes = doc.saveSync();
writeFileSync('Sample.docx', saveBytes);
{% endhighlight %}
{% endtabs %}
