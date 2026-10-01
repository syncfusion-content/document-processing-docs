---
title: Working with Tables in JavaScript Word | Syncfusion
description: Learn how to create, format, merge, style, and manage tables in a Word document using the Syncfusion JavaScript Word library.
platform: document-processing
control: Word Library
documentation: UG
---

# Working with Tables in JavaScript Word Library

A table in a Word document is used to arrange content in rows and columns. The Word library provides APIs to create tables, nest tables, format cells and rows, apply table styles, merge cells, and remove tables or rows.

## Create a table

The following code example shows how to create a simple table with a predefined number of rows and cells.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

// Create a new document
const document = WordDocument.create();
const section = document.lastSection;

// Add a table and create a 3 x 2 grid
const table = section.body.appendTable();
table.resetCells(3, 2);

// Header row
table.rows[0]!.cells[0]!.appendParagraph().appendText('Item');
table.rows[0]!.cells[1]!.appendParagraph().appendText('Price($)');

// Data rows
table.rows[1]!.cells[0]!.appendParagraph().appendText('Apple');
table.rows[1]!.cells[1]!.appendParagraph().appendText('50');
table.rows[2]!.cells[0]!.appendParagraph().appendText('Orange');
table.rows[2]!.cells[1]!.appendParagraph().appendText('30');

// Save the document
document.save('Sample.docx');
{% endhighlight %}
{% endtabs %}

## Create a table dynamically

The following code example shows how to create a table by adding rows dynamically.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

// Create a new document
const document = WordDocument.create();
const section = document.lastSection;

section.body.appendParagraph().appendText('Price Details');
section.body.appendParagraph();

// Create a table with one header row and two columns
const table = section.body.appendTable();
table.resetCells(1, 2);

table.rows[0]!.cells[0]!.width = 200;
table.rows[0]!.cells[0]!.appendParagraph().appendText('Item');
table.rows[0]!.cells[1]!.width = 200;
table.rows[0]!.cells[1]!.appendParagraph().appendText('Price($)');

// Add the remaining rows dynamically
const fruits: Array<[string, string]> = [
    ['Apple', '50'],
    ['Orange', '30'],
    ['Banana', '20'],
    ['Grapes', '70'],
];

for (const [name, price] of fruits) {
    const row = table.appendRow();
    row.cells[0]!.width = 200;
    row.cells[0]!.appendParagraph().appendText(name);
    row.cells[1]!.width = 200;
    row.cells[1]!.appendParagraph().appendText(price);
}

// Save the document
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

## Nested table

You can create a nested table by adding a table inside a cell.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

// Create a new document
const document = WordDocument.create();

// Get the last section
const section = document.lastSection;

document.lastParagraph.appendText('Price Details');

const table = section.body.appendTable();
table.resetCells(3, 2);

table.rows[0]!.cells[0]!.appendParagraph().appendText('Item');
table.rows[0]!.cells[1]!.appendParagraph().appendText('Price($)');
table.rows[1]!.cells[0]!.appendParagraph().appendText('Items with same price');

// Add a nested table into the cell (second row, first cell)
const nestTable = table.rows[1]!.cells[0]!.appendTable();

// Create the specified number of rows and columns for the nested table
nestTable.resetCells(3, 1);

// Nested table cell (first row, first cell)
let nestedCell = nestTable.rows[0]!.cells[0];
nestedCell!.width = 200;
nestedCell!.appendParagraph().appendText('Apple');

// Nested table cell (second row, first cell)
nestedCell = nestTable.rows[1]!.cells[0];
nestedCell!.width = 200;
nestedCell!.appendParagraph().appendText('Orange');

// Nested table cell (third row, first cell)
nestedCell = nestTable.rows[2]!.cells[0];
nestedCell!.width = 200;
nestedCell!.appendParagraph().appendText('Mango');

// Parent table cell (second row, second cell)
nestedCell = table.rows[1]!.cells[1];
nestedCell!.appendParagraph().appendText('85');

table.rows[2]!.cells[0]!.appendParagraph().appendText('Pomegranate');
table.rows[2]!.cells[1]!.appendParagraph().appendText('70');

// Save the document
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

## Insert an image into a table cell

The following code example shows how to insert an image into a table cell.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { readFileSync } from 'node:fs';
import { WordDocument } from '@syncfusion/ej2-docx';

// Create a new Word document
const document = WordDocument.create();

// Get the last section
const section = document.lastSection;

const table = section.body.appendTable();
table.resetCells(2, 2);

table.rows[0]!.cells[0]!.appendParagraph().appendText('Product Name');
table.rows[0]!.cells[1]!.appendParagraph().appendText('Product Image');
table.rows[1]!.cells[0]!.appendParagraph().appendText('Apple Juice');

// Insert an image into the cell (second row, second cell)
const imageBytes = new Uint8Array(readFileSync('Image.png'));
const picture = table.rows[1]!.cells[1]!.appendParagraph().appendImage(imageBytes);
picture.height = 75;
picture.width = 60;

// Save the document
document.save('ImageInTable.docx');
{% endhighlight %}
{% endtabs %}

## Apply formatting to a table and row

The following code example shows how to apply formatting such as title, description, indent, background color, paddings, borders, row height, and cell vertical alignment.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { BorderStyle, Color, Table, TableCellVerticalAlignment, TableRow, TableRowHeightRule, WordDocument } from '@syncfusion/ej2-docx';

// Load an existing Word document
const document = WordDocument.openSync('Template.docx');

// Access the first section
const section = document.sections[0]!;
// Access the first table
const table = section.tables[0] as Table;
// Specify the title for the table
table.title = 'PriceDetails';
// Specify the description of the table
table.description = 'This table shows the price details of various fruits';
// Specify the left indent of the table
table.indentFromLeft = 50;
// Specify the background color of the table
table.tableFormat.backColor = Color.Red;
// Specify the left, right, top, and bottom padding of all cells
table.tableFormat.paddings.all = 10;
// Specify auto resize based on content
table.tableFormat.isAutoResized = true;
// Specify table border line widths
table.tableFormat.borders.lineWidth = 2;
table.tableFormat.borders.horizontal.lineWidth = 2;
table.tableFormat.borders.vertical.lineWidth = 2;
// Specify border colors
table.tableFormat.borders.color = '#FF0000';
table.tableFormat.borders.horizontal.color = '#FF0000';
table.tableFormat.borders.vertical.color = Color.Red;
// Specify border style
table.tableFormat.borders.borderType = BorderStyle.Double;
// Access the first row
const row = table.rows[0] as TableRow;
// Specify row height
row.height = 20;
// Specify row height type
row.heightType = TableRowHeightRule.AtLeast;
// Apply vertical alignment to cells in the first row
for (const cell of table.rows[0]!.cells) {
    cell.cellFormat.verticalAlignment = TableCellVerticalAlignment.Center;
}
// Save the document
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

### Resize a table

The following code example shows how to resize tables using auto fit options.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { AutoFitType, Table, TableRowHeightRule, WordDocument } from '@syncfusion/ej2-docx';

// Load an existing Word document
const document = WordDocument.openSync('Template.docx');
// Access the first section
const section = document.sections[0]!;
// Access the first table and resize it to fit its contents
let table = section.tables[0] as Table;
table.autoFit(AutoFitType.FitToContent);
// Access the second table and resize it to fit the window/page width
table = section.tables[1] as Table;
table.autoFit(AutoFitType.FitToWindow);
// Access the third table and resize it to fixed column width
table = section.tables[2] as Table;
table.autoFit(AutoFitType.FixedColumnWidth);
// Specify row height type
table.rows[0]!.heightType = TableRowHeightRule.AtLeast;
// Save the document
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

### Working with table style

The following code example shows how to apply a built-in table style.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { BuiltinTableStyle, Table, WordDocument } from '@syncfusion/ej2-docx';

// Load an existing Word document
const document = WordDocument.openSync('Template.docx');
// Access the first section
const section = document.sections[0]!;
// Access the first table
const table = section.tables[0] as Table;
// Apply the LightShading built-in style
table.applyStyle(BuiltinTableStyle.LightShading);
// Save the document
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

### Table style options

The following code example shows how to enable or disable special formatting options for a table style.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { BuiltinTableStyle, Table, WordDocument } from '@syncfusion/ej2-docx';

// Load an existing Word document
const document = WordDocument.openSync('Template.docx');
// Access the first section
const section = document.sections[0]!;
// Access the first table
const table = section.tables[0] as Table;
// Apply the LightShading built-in style to the table
table.applyStyle(BuiltinTableStyle.LightShading);
// Enable special formatting for banded columns of the table
table.applyStyleForBandedColumns = true;
// Enable special formatting for banded rows of the table
table.applyStyleForBandedRows = true;
// Disable special formatting for the first column of the table
table.applyStyleForFirstColumn = false;
// Enable special formatting for the header row of the table
table.applyStyleForFirstRow = true;
// Enable special formatting for the last column of the table
table.applyStyleForLastColumn = true;
// Disable special formatting for the last row of the table
table.applyStyleForLastRow = false;
// Save the document
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

### Custom table style

The following code example shows how to create a custom table style with conditional formatting.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Color, ConditionalFormattingType, Table, WordDocument } from '@syncfusion/ej2-docx';

// Load an existing Word document
const document = WordDocument.openSync('Template.docx');
// Access the first section
const section = document.sections[0]!;
// Access the first table
const table = section.tables[0] as Table;
// Add a new custom table style
const tableStyle = document.addTableStyle('CustomStyle');
// Apply formatting for the whole table
tableStyle.tableProperties.rowStripe = 1;
tableStyle.tableProperties.columnStripe = 1;
tableStyle.tableProperties.paddings.top = 0;
tableStyle.tableProperties.paddings.bottom = 0;
tableStyle.tableProperties.paddings.left = 5.4;
tableStyle.tableProperties.paddings.right = 5.4;
// Apply conditional formatting for the first row
const firstRowStyle = tableStyle.conditionalFormattingStyles.add(ConditionalFormattingType.FirstRow);
firstRowStyle.characterFormat.bold = true;
firstRowStyle.characterFormat.textColor = Color.White;
firstRowStyle.cellProperties.backgroundColor = Color.Blue;
// Apply conditional formatting for the first column
const firstColumnStyle = tableStyle.conditionalFormattingStyles.add(ConditionalFormattingType.FirstColumn);
firstColumnStyle.characterFormat.bold = true;
// Apply conditional formatting for odd row bands
const oddRowBandingStyle = tableStyle.conditionalFormattingStyles.add(ConditionalFormattingType.OddRowBand);
oddRowBandingStyle.cellProperties.backgroundColor = Color.WhiteSmoke;
// Apply the custom style to the table
table.applyStyle('CustomStyle');
// Save the document
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

### Apply base style

The following code example shows how to apply a built-in or custom style as the base style of another custom table style.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { BuiltinTableStyle, Color, ConditionalFormattingType, ParagraphAlignment, WordDocument } from '@syncfusion/ej2-docx';

// Create a new document
const document = WordDocument.create();
const section = document.lastSection;
// Add the first table
let table = section.body.appendTable();
table.resetCells(3, 2);
table.rows[0]!.cells[0]!.appendParagraph().appendText('Row 1 Cell 1');
table.rows[0]!.cells[1]!.appendParagraph().appendText('Row 1 Cell 2');
table.rows[1]!.cells[0]!.appendParagraph().appendText('Row 2 Cell 1');
table.rows[1]!.cells[1]!.appendParagraph().appendText('Row 2 Cell 2');
table.rows[2]!.cells[0]!.appendParagraph().appendText('Row 3 Cell 1');
table.rows[2]!.cells[1]!.appendParagraph().appendText('Row 3 Cell 2');
// Create a custom table style
let tableStyle = document.addTableStyle('CustomStyle1');
// First row formatting
const firstRowStyle = tableStyle.conditionalFormattingStyles.add(ConditionalFormattingType.FirstRow);
firstRowStyle.characterFormat.bold = true;
// Odd row formatting
const oddRowBandingStyle = tableStyle.conditionalFormattingStyles.add(ConditionalFormattingType.OddRowBand);
oddRowBandingStyle.characterFormat.italic = true;
// Apply a built-in table style as the base style
tableStyle.applyBaseStyle(BuiltinTableStyle.TableGrid);
// Apply the style to the table
table.applyStyle('CustomStyle1');
// Add a paragraph between tables
section.body.appendParagraph();
// Create the second table
table = section.body.appendTable();
table.resetCells(3, 2);
table.rows[0]!.cells[0]!.appendParagraph().appendText('Row 1 Cell 1');
table.rows[0]!.cells[1]!.appendParagraph().appendText('Row 1 Cell 2');
table.rows[1]!.cells[0]!.appendParagraph().appendText('Row 2 Cell 1');
table.rows[1]!.cells[1]!.appendParagraph().appendText('Row 2 Cell 2');
table.rows[2]!.cells[0]!.appendParagraph().appendText('Row 3 Cell 1');
table.rows[2]!.cells[1]!.appendParagraph().appendText('Row 3 Cell 2');
// Create another custom style
tableStyle = document.addTableStyle('CustomStyle2');
tableStyle.tableProperties.rowStripe = 1;
// First row formatting
const firstRowStyle1 = tableStyle.conditionalFormattingStyles.add(ConditionalFormattingType.FirstRow);
firstRowStyle1.paragraphFormat.horizontalAlignment = ParagraphAlignment.Center;
// Odd row formatting
const oddRowBandingStyle1 = tableStyle.conditionalFormattingStyles.add(ConditionalFormattingType.OddRowBand);
oddRowBandingStyle1.characterFormat.textColor = Color.Red;
// Create a third custom style
const tableStyle2 = document.addTableStyle('CustomStyle3');
tableStyle2.tableProperties.rowStripe = 1;
// First row formatting
const firstRowStyle2 = tableStyle2.conditionalFormattingStyles.add(ConditionalFormattingType.FirstRow);
firstRowStyle2.cellProperties.backgroundColor = Color.Blue;
// Odd row formatting
const oddRowStyle2 = tableStyle2.conditionalFormattingStyles.add(ConditionalFormattingType.OddRowBand);
oddRowStyle2.cellProperties.backgroundColor = Color.Yellow;
// Apply a custom style as the base style
tableStyle2.applyBaseStyle('CustomStyle2');
// Apply the style to the table
table.applyStyle('CustomStyle3');
// Save the document
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

## Merging cells vertically and horizontally

You can merge contiguous cells in a row or column using horizontal and vertical merge APIs.

### Merge cells horizontally

The following code example shows how to merge contiguous cells in a row.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

// Create a new document
const document = WordDocument.create();
const section = document.lastSection;
// Add a table
const table = section.body.appendTable();
table.resetCells(5, 5);
// Merge cells in row index 2 from cell index 1 through 4
table.applyHorizontalMerge(2, 1, 4);
// Save the document
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

### Merge cells vertically

The following code example shows how to merge contiguous cells in a column.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

// Create a new document
const document = WordDocument.create();
document.lastParagraph.appendText('Vertical merging of Table cells');
const section = document.lastSection;
// Add a table
const table = section.body.appendTable();
table.resetCells(5, 5);
// Merge cells in column index 2 from row index 1 through 4
table.applyVerticalMerge(2, 1, 4);
// Save the document
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

## Specifying a table header row to repeat on each page

The following code example shows how to mark the first row as a header row so it repeats on each page.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { TableRowHeightRule, WordDocument } from '@syncfusion/ej2-docx';

// Create a new document
const document = WordDocument.create();
const section = document.lastSection;
// Add a table
const table = section.body.appendTable();
table.resetCells(50, 1);
const headerRow = table.rows[0]!;
// Specify the first row as a header row of the table
headerRow.isHeader = true;
headerRow.height = 20;
headerRow.heightType = TableRowHeightRule.AtLeast;
headerRow.cells[0]!.appendParagraph().appendText('Header Row');

for (let i = 1; i < 50; i++) {
    const row = table.rows[i]!;
    row.height = 20;
    row.heightType = TableRowHeightRule.AtLeast;
    const paragraph = row.cells[0]!.appendParagraph();
    paragraph.appendText(`Text in Row${i}`);
}

// Save the document
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

## Keeping rows from breaking across pages

The following code example shows how to prevent table rows from breaking across pages.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

// Load an existing Word document
const document = WordDocument.openSync('Template.docx');
const section = document.sections[0]!;
const table = section.tables[0]!;

// Disable breaking across pages for all rows in the table
for (const row of table.rows) {
    row.rowFormat.isBreakAcrossPages = false;
}

// Save the document
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

## Iterating through table elements

The following code example shows how to iterate through rows, cells, and paragraphs in a table and update cell formatting based on content.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

// Load an existing Word document
const document = WordDocument.openSync('Template.docx');
const section = document.sections[0]!;
const table = section.tables[0]!;

// Iterate through the rows of the table
for (const row of table.rows) {
    // Iterate through the cells of the row
    for (const cell of row.cells) {
        // Iterate through the paragraphs of the cell
        for (const paragraph of cell.paragraphs) {
            // When the paragraph contains the text 'panda', apply green background color to the cell
            if (paragraph.text.includes('panda')) {
                cell.cellFormat.backColor = '#008000';
            }
        }
    }
}

// Save the document
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

## Remove the table

The following code example shows how to remove a table from a section body.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

// Load an existing Word document
const document = WordDocument.openSync('Template.docx');
const section = document.sections[0]!;
const table = section.tables[0]!;

// Remove the table from the body
section.body.items.remove(table);

// Save the document
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

## Remove the table rows

The following code example shows how to remove a table row by index.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

// Load an existing Word document
const document = WordDocument.openSync('Template.docx');
const section = document.sections[0]!;
const table = section.tables[0]!;
// Remove the row at index 3
table.rows.removeAt(3);
// Save the document
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}