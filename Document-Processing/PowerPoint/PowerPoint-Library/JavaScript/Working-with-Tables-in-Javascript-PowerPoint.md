---
title: Working with Tables in JavaScript PowerPoint | Syncfusion
description: Learn how to create, edit, and remove tables in a PowerPoint presentation using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Working with Tables in JavaScript PowerPoint

The `JavaScript PowerPoint Library` provides comprehensive support to create, edit, and remove tables in a PowerPoint slide, enabling complete control over tabular content within presentations. A table in a PowerPoint presentation is used to arrange document content in rows and columns. A table instance represents a table in a PowerPoint presentation. A table must contain at least one row.

## Create a table by adding rows

The `JavaScript PowerPoint Library` supports creating and editing tables in PowerPoint slides by adding rows. 

The following code example demonstrates how to create a table by adding rows.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

// Side-effect import: registers the tables feature (`slide.addTable` / `slide.removeTable`)
import '@syncfusion/ej2-pptx/src/features/tables';
 
import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';
 
// Creates a PowerPoint presentation.
const pptxDoc = Presentation.create();
// Adds a blank slide to the presentation.
const slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// Adds a 2x2 table to the slide.
const table = slide.addTable({
    rows: 2,
    columns: 2,
    xfrm: { x: 100, y: 120, width: 300, height: 200 },
});
// Iterates row-wise cells and adds text to each.
for (let rowIndex = 0; rowIndex < table.rowCount; rowIndex++) {
    for (let colIndex = 0; colIndex < table.columnCount; colIndex++) {
        const cell = table.getCell(rowIndex, colIndex);
        const textBody = cell.textBody;
        if (textBody) {
            const paragraph = textBody.paragraphs[0];
            paragraph.addTextPart(`(${rowIndex} , ${colIndex})`);
        }
    }
}
// Saves the PowerPoint presentation.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

## Create a table by adding columns

The following code example demonstrates how to create a simple table in a PowerPoint slide by adding columns.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

// Side-effect import: registers the tables feature (`slide.addTable` / `slide.removeTable`)
import '@syncfusion/ej2-pptx/src/features/tables';
 
import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';

// Creates a PowerPoint presentation.
const pptxDoc = Presentation.create();
// Adds a blank slide to the presentation.
const slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// Adds a 2x2 table to the slide.
const table = slide.addTable({
    rows: 2, columns: 2,
    xfrm: { x: 100, y: 120, width: 300, height: 200 },
});
// Iterates column-wise cells and adds text to each.
for (let colIndex = 0; colIndex < table.columnCount; colIndex++) {
    for (let rowIndex = 0; rowIndex < table.rowCount; rowIndex++) {
        const cell = table.getCell(rowIndex, colIndex);
        const textBody = cell.textBody;
        if (textBody) {
            const paragraph = textBody.paragraphs[0];
            paragraph.addTextPart(`(${rowIndex} , ${colIndex})`);
        }
    }
}
// Saves the PowerPoint presentation.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

## Append a new row at the end of table

A new row can be appended at the end of an existing PowerPoint table using the `addRow()` method. The following code example demonstrates how to append a new row at the end of a table.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';
 
// Importing the tables feature module both registers `slide.addTable` / `slide.removeTable`
// on the Slide prototype (side effect) and exports the `asTable` detector.
import { asTable } from '@syncfusion/ej2-pptx/src/features/tables';
 
// data is a Uint8Array or ArrayBuffer of an .pptx file
// Loads or opens a PowerPoint presentation.
const pptxDoc = await Presentation.open(data);
// Gets the first shape on the first slide and binds it as a table.
const slide = pptxDoc.slides[0];
const table = asTable(slide.shapes[0]);
if (table) {
    // Appends a new row at the end of the table.
    const newRowIndex = table.rowCount;
    table.addRow();
    // Iterates the new row's cells and adds text to each.
    for (let colIndex = 0; colIndex < table.columnCount; colIndex++) {
        const cell = table.getCell(newRowIndex, colIndex);
        const textBody = cell.textBody;
        if (textBody) {
            const paragraph = textBody.paragraphs[0];
            paragraph.addTextPart(String(newRowIndex));
        }
    }
}
// Saves the PowerPoint presentation.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

## Insert a row in table

A row can be inserted at a specified index position of an existing PowerPoint table using the `insertRowAt()` method. Existing rows shift down to accommodate the inserted row. The following code example demonstrates how to insert a row in a table.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';
 
// Importing the tables feature module (since the package
// has no `exports` map) both registers `slide.addTable` / `slide.removeTable`
// on the Slide prototype (side effect) and exports the `asTable` detector.
import { asTable } from '@syncfusion/ej2-pptx/src/features/tables';
 
// data is a Uint8Array or ArrayBuffer of an .pptx file
// Loads or opens a PowerPoint presentation.
const pptxDoc = await Presentation.open(data);
// Gets the table in the slide.
const slide = pptxDoc.slides[0];
const table = asTable(slide.shapes[0]);
if (table) {
    // Inserts an empty row at index 1 (existing rows shift down).
    table.insertRowAt(1);
}
// Saves the PowerPoint presentation.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

## Insert a column in table

A column can be inserted at a specified index position of an existing PowerPoint table using the `insertColumnAt()` method. Existing columns shift right to accommodate the inserted column. The following code example demonstrates how to insert a column in a table.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

// Side-effect import: registers the tables feature module (`@syncfusion/ej2-pptx/tables`).
// The package has no `exports` map, so import the feature module by its
// source path (esbuild resolves the full module graph at bundle time).
import '@syncfusion/ej2-pptx/src/features/tables';
 
import { Presentation } from '@syncfusion/ej2-pptx';
import { asTable } from '@syncfusion/ej2-pptx/src/features/tables';
 
// data is a Uint8Array or ArrayBuffer of an .pptx file
// Loads or opens a PowerPoint presentation.
const pptxDoc = await Presentation.open(data);
// Gets the table in the slide.
const slide = pptxDoc.slides[0];
const table = asTable(slide.shapes[0]);
if (table) {
    // Inserts an empty column at index 1 (existing columns shift right).
    table.insertColumnAt(1);
}
// Saves the PowerPoint presentation.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

## Removing the table

A table can be removed from a slide by passing its instance to the `removeTable()` function. The following code example demonstrates how to remove a table from a slide.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

// Side-effect import: registers the tables feature module (`@syncfusion/ej2-pptx/tables`).
// The package has no `exports` map, so import the feature module by its
// source path (esbuild resolves the full module graph at bundle time).
import '@syncfusion/ej2-pptx/src/features/tables';
 
import { Presentation } from '@syncfusion/ej2-pptx';
import { asTable, removeTable } from '@syncfusion/ej2-pptx/src/features/tables';
 
// data is a Uint8Array or ArrayBuffer of an .pptx file
// Loads or opens a PowerPoint presentation.
const pptxDoc = await Presentation.open(data);
// Gets the slide from the presentation.
const slide = pptxDoc.slides[0];
// Gets the table from the slide (first shape, bound as a table).
const table = asTable(slide.shapes[0]);
if (table) {
    // Removes the table from the slide.
    removeTable(slide, table);
}
// Saves the PowerPoint presentation.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}