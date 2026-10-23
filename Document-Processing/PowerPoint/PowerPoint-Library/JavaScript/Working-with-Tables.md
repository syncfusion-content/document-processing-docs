---
layout: post
title: Working with Tables in JavaScript PowerPoint | Syncfusion
description: Learn how to create, edit, and remove tables in a PowerPoint slide using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint
---

# Working with Tables in JavaScript PowerPoint

A table in PowerPoint presentation is used to arrange document content in rows and columns. Table instance represents a table in PowerPoint presentation. A table must contain at least one row.

## Create a table by adding rows

The JavaScript PowerPoint Library supports creating and editing tables in PowerPoint slides by adding rows. Refer to the following code example.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';
import { addTable } from '@syncfusion/ej2-pptx/tables';
(async () => {
// Create a PowerPoint presentation.
const pptxDoc = Presentation.create();
// Add slide to the presentation.
const slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// Add a table to the slide (2 rows × 2 columns). Bounds are in points.
const table = slide.addTable({
  rows: 3,
  columns: 4,
  xfrm: { x: 0, y: 0, width: 400, height: 200 },
  name: 'Metrics'
});
// Iterate row-wise cells and add text to each.
for (let rowIndex = 0; rowIndex < table.rowCount; rowIndex++) {
    for (let colIndex = 0; colIndex < table.columnCount; colIndex++) {
        const cell = table.getCell(rowIndex, colIndex);
        const textBody = cell.textBody;
        if (textBody) {
            const paragraph = textBody.addParagraph();
            paragraph.addTextPart(`(${rowIndex} , ${colIndex})`);
        }
    }
}
// Saves the Presentation to the file system.
await pptxDoc.save('Output.pptx');
})();

{% endhighlight %}
{% endtabs %}

## Create a table by adding columns

The following code example demonstrates how to create a simple table in a PowerPoint slide by adding columns.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';
import { addTable } from '@syncfusion/ej2-pptx/tables';
(async () => {
// Create a PowerPoint presentation.
const pptxDoc = Presentation.create();
// Add slide to the presentation.
const slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// Add a table to the slide (2 rows × 2 columns). Bounds are in points.
const table = addTable(slide, {
    rows: 2, columns: 2,
    xfrm: { x: 100, y: 120, width: 300, height: 200 }
});
// Iterate column-wise cells and add text to each.
for (let colIndex = 0; colIndex < table.columnCount; colIndex++) {
    for (let rowIndex = 0; rowIndex < table.rowCount; rowIndex++) {
        const cell = table.getCell(rowIndex, colIndex);
        const textBody = cell.textBody;
        if (textBody) {
            const paragraph = textBody.addParagraph();
            paragraph.addTextPart(`(${rowIndex} , ${colIndex})`);
        }
    }
}
// Saves the Presentation to the file system.
})();
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

## Append a new row at the end of table

You can append new rows at the end of an existing PowerPoint table. Refer to the following code sample.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// data is a Uint8Array or ArrayBuffer of an existing .pptx file that contains a table.
(async () => {
// Loads or opens a PowerPoint presentation.
const pptxDoc = await Presentation.open(data);
// Get the first shape on the first slide and bind it as a table.
const slide = pptxDoc.slides[0];
const table = asTable(slide.shapes[0]);
if (table) {
    // Add or append a new row at the end of the table.
    const newRowIndex = table.rowCount;
    table.addRow();
    // Iterate the new row's cells and add text to each.
    for (let colIndex = 0; colIndex < table.columnCount; colIndex++) {
        const cell = table.getCell(newRowIndex, colIndex);
        const textBody = cell.textBody;
        if (textBody) {
            const paragraph = textBody.addParagraph();
            paragraph.addTextPart(String(newRowIndex));
        }
    }
}
// Saves the Presentation to the file system.
await pptxDoc.save('Output.pptx');
})();

{% endhighlight %}
{% endtabs %}

## Insert a row in table

You can insert a row at the specified index position of a table. Refer to the following code example.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// data is a Uint8Array or ArrayBuffer of an existing .pptx file that contains a table.
(async () => {
// Loads or opens a PowerPoint presentation.
const pptxDoc = await Presentation.open(data);
// Get the table in the slide.
const slide = pptxDoc.slides[0];
const table = asTable(slide.shapes[0]);
if (table) {
    // Insert an empty row at index 1 (existing rows shift down).
    table.insertRowAt(1);
}
// Saves the Presentation to the file system.
await pptxDoc.save('Output.pptx');
})();

{% endhighlight %}
{% endtabs %}

## Insert a column in table

You can insert a column at the specified index position of a table. Refer to the following code example.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// data is a Uint8Array or ArrayBuffer of an existing .pptx file that contains a table.
(async () => {
// Loads or opens a PowerPoint presentation.
const pptxDoc = await Presentation.open(data);
// Get the table in the slide.
const slide = pptxDoc.slides[0];
const table = asTable(slide.shapes[0]);
if (table) {
    // Insert an empty column at index 1.
    table.insertColumnAt(1);
}
// Saves the Presentation to the file system.
await pptxDoc.save('Output.pptx');
})();

{% endhighlight %}
{% endtabs %}

## Removing the table

You can remove a table from a slide by passing its instance to `removeTable`. The following code example demonstrates how to remove a table from a slide.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// data is a Uint8Array or ArrayBuffer of an existing .pptx file that contains a table.
(async () => {
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
// Saves the Presentation to the file system.
await pptxDoc.save('Output.pptx');
})();

{% endhighlight %}
{% endtabs %}
