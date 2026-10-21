---
layout: post
title: JavaScript PowerPoint Library | Syncfusion
description: Create and edit slides, text, shapes, images, tables, and charts with the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint
---

# JavaScript PowerPoint Library

The Syncfusion JavaScript PowerPoint Library (ej2-pptx) lets you create a PowerPoint presentation from scratch and work with slides, paragraphs, text, shapes, images, tables, and charts.

## Getting started

Getting started covers creating a simple PowerPoint presentation with basic elements from scratch. The sections below show how to add those elements with the library APIs.

## Working with Slides in PowerPoint

A slide is the container for the content of a presentation. Use the slides collection to add, remove, and access slides and master slides.

### Adding a slide to a PowerPoint presentation

In a PowerPoint presentation, a slide is a container for elements such as shapes, images, charts, and text boxes. The slides may inherit the formatting and layout properties from their 'Master' and 'Layout' slides.

The following code example demonstrates how to add a blank slide to the Presentation. By default, the `slides.add()` overload adds a slide using the default layout of the master.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// Creates a Presentation instance.
const pptxDoc = Presentation.create();

// Adds a slide to the PowerPoint presentation.
const slide = pptxDoc.slides.add();

// Saves the Presentation to the file system.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

The call to `slides.add()` appends a blank slide, and `save('Output.pptx')` writes the presentation to the file system.

### Create a slide with predefined LayoutSlide

The ej2-pptx library supports the following predefined slide layout types to create a slide as equivalent to Microsoft PowerPoint:

* Blank
* Comparison
* Content with caption
* Picture with caption
* Section header
* Title
* Title and content
* Title and vertical text
* Title only
* Two content
* Vertical title and text

The following example demonstrates how to access a slide from the predefined blank slide layout type.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';

// Create a new instance of PowerPoint Presentation file.
const pptxDoc = Presentation.create();

// Add a slide of blank layout type.
const slide1 = pptxDoc.slides.add({ layout: SlideLayoutType.TitleSlide});

// Save the PowerPoint file.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

`SlideLayoutType.TitleSlide` selects the predefined layout when the slide is added.

### Removing a slide

The ej2-pptx library provides the ability to delete a slide by its instance or by its index position in the slide collection. The following code demonstrates how to delete a slide from a presentation.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// Create a new PowerPoint presentation
const pptxDoc = Presentation.create();

// Add a few slides.
pptxDoc.slides.add();
pptxDoc.slides.add();
pptxDoc.slides.add();

// Retrieve the slide instance to remove.
const slide = pptxDoc.slides[0];

// Remove the specified slide from the Presentation.
pptxDoc.slides.remove(slide);

// Remove the slide from the specified index.
pptxDoc.slides.removeAt(1);

// Save the Presentation to the file system.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

`slides.remove(slide)` deletes a slide by instance. `slides.removeAt(1)` deletes the slide at the specified index.

### Access the MasterSlide

In a PowerPoint presentation, the MasterSlide is the top slide that controls all information about the theme, layout, background, color, fonts, and positioning of all slides. Using this MasterSlide, you can easily adjust the look of an existing theme or make overall changes to all your slides.

The following code example demonstrates how to access the MasterSlide in a PowerPoint presentation. The `name` property returns the name of the shape as a string and is used here only for demonstration.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// Create a PowerPoint presentation
const pptxDoc = Presentation.create();

// Access the first master slide in the PowerPoint presentation
const masterSlide = pptxDoc.slideMasters[0];

// Get the first shape name from the master slide
const shapeName = masterSlide.shapes[0].name;

// Save the PowerPoint presentation to a file
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

`slideMasters[0]` returns the first master slide. `shapes[0].name` reads the name of the first shape on that master.

## Working with Paragraphs

All textual content in a presentation is represented by paragraphs inside a text body. You can add, format, and remove those paragraphs.

### Adding paragraph to slide

All the textual contents in a Presentation document is represented by Paragraphs. You can have any number of paragraphs within a TextBody of a textbox or shape in a PowerPoint presentation.

The following code example demonstrates how to add a paragraph in a slide.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// Creates a PowerPoint Presentation
const pptxDoc = Presentation.create();

// Adds a slide to the PowerPoint
const slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });

// Adds a textbox to the slide
// pt → EMU:  points * 12700
const PT = 12700;
const textboxShape = slide.shapes.addTextBox({
  bounds: { x: 0 * PT, y: 0 * PT, width: 500 * PT, height: 500 * PT },
});

// Adds a paragraph to the textbody of the textbox
const paragraph = textboxShape.textBody.addParagraph();

// Adds a TextPart to the paragraph
const textPart = paragraph.addTextPart('AdventureWorks Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company. The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets. While its base operation is located in Washington with 290 employees, several regional sales teams are located throughout their market base.');

// Gets text from the TextPart
const paraText = textPart.text;

// Saves the PowerPoint Presentation to a file
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

`textBody.addParagraph()` adds the paragraph, and `addTextPart` places the text in that paragraph. `textPart.text` reads the text back.

### Applying Paragraph Formatting

Each paragraph in a slide can have its own formatting types such as alignment, indent, and so on. The following code example demonstrates how to format a paragraph in a PowerPoint presentation.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { open, HorizontalAlignmentType } from '@syncfusion/ej2-pptx';
import { readFileSync } from 'node:fs';

const inputPath = resolve(__dirname, 'Input.pptx');
// Loads or opens a PowerPoint Presentation
const bytes = readFileSync(inputPath);
const pptxDoc = await open(bytes);

// Gets the slide from the Presentation
const slide = pptxDoc.slides[0];

// Gets the shape in the slide (narrow to a text-bearing shape)
const textboxShape = slide.shapes[0];

// Gets the instance of a paragraph in the textbox
const paragraph = textboxShape.textBody.paragraphs[0];

// Applies the first line indent of the paragraph (points → EMU at the boundary)
paragraph.firstLineIndent = 10;

// Applies the horizontal alignment of the paragraph
paragraph.horizontalAlignment = HorizontalAlignmentType.Left;

// Applies the left indent of the paragraph (points → EMU at the boundary)
paragraph.leftIndent = 8;

// Modifies the end paragraph font name (writes a:endParaRPr)
paragraph.endParagraphFont.fontName = 'Times New Roman';

// Saves the PowerPoint Presentation to a file
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

`firstLineIndent`, `horizontalAlignment`, `leftIndent`, and `endParagraphFont.fontName` apply paragraph formatting. The end-paragraph font name writes `a:endParaRPr`.

## Working with Text

With ej2-pptx library, you can add or modify text in a Presentation. Within the paragraph, textual contents are grouped into one or more child elements as TextParts. Each TextPart represents a region of text with a common set of formatted text.

### Adding text with formatting

The following code example demonstrates how to add text with different formatting into a single paragraph.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// Creates the PowerPoint Presentation instance
const pptxDoc = Presentation.create();

// Adds a new slide to the Presentation
const slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });

// Adds a textbox to the slide
// pt → EMU:  points * 12700
const PT = 12700;
const textboxShape2 = slide.shapes.addTextBox({
  bounds: { x: 500 * PT, y: 0 * PT, width: 400 * PT, height: 500 * PT },
});

// Adds a paragraph to the textbody of the textbox
const paragraph2 = textboxShape2.textBody.addParagraph();

// Adds a TextPart to the paragraph
const textPartFormatting = paragraph2.addTextPart('');

// Adds text to the TextPart
textPartFormatting.text = 'In 2000, AdventureWorks Cycles bought a small manufacturing plant, located in Mexico. The plant manufactures several critical subcomponents for the AdventureWorks Cycles product line. These subcomponents are shipped to the another location for final product assembly. In 2001, the plant, became the sole manufacturer and distributor of the touring bicycle product group.';

// Sets the underline color (canonical #RRGGBB; AliceBlue = #F0F8FF)
textPartFormatting.font.underlineColor = '#000000';

// Sets the underline type
textPartFormatting.font.underline = TextUnderlineType.Single;

// Sets the font weight
textPartFormatting.font.bold = true;

// Adds a second TextPart to the paragraph
const textPartFormatting2 = paragraph2.addTextPart('');

// Adds text to the TextPart
textPartFormatting2.text = 'In 2000, AdventureWorks Cycles bought a small manufacturing plant, located in Mexico.';

// Sets the font color (canonical #RRGGBB; BlanchedAlmond = #FFEBCD)
textPartFormatting2.font.color = '#0000FF';

// Sets the underline type
textPartFormatting2.font.underline = TextUnderlineType.WavyDouble;

// Saves the PowerPoint Presentation to a file
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

Each `addTextPart` call adds a region of text. `font.underlineColor`, `font.underline`, `font.bold`, and `font.color` format that region. Underline and font colors use canonical `#RRGGBB` values (AliceBlue = `#F0F8FF`, BlanchedAlmond = `#FFEBCD`).

### Modifying Text

You can modify text by accessing the existing paragraphs in a Presentation. The following code example demonstrates how to modify the content in a paragraph.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { open } from '@syncfusion/ej2-pptx';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputPath = resolve(__dirname, 'tempresult.pptx');

// Loads or opens a PowerPoint Presentation that contains a shape with a text body
const bytes = readFileSync(inputPath);
const pptxDoc = await open(bytes);

// Retrieves the first slide from the Presentation
const slide = pptxDoc.slides[0];

// Retrieves the first shape
const shape = slide.shapes[0];

// Retrieves the first paragraph of the shape (narrow to a text-bearing shape)
const textBody = shape.textBody;
const paragraph = textBody.paragraphs[0];

// Retrieves the first TextPart of the shape
const textPart = paragraph.textParts[0];

// Modifies the text content of the TextPart
textPart.text = 'Hello Presentation';

// Saves the PowerPoint Presentation to a file
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

Assigning `textPart.text` replaces the text of the first TextPart. The same example is included again below, as provided.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { open } from '@syncfusion/ej2-pptx';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputPath = resolve(__dirname, 'tempresult.pptx');

// Loads or opens a PowerPoint Presentation that contains a shape with a text body
const bytes = readFileSync(inputPath);
const pptxDoc = await open(bytes);

// Retrieves the first slide from the Presentation
const slide = pptxDoc.slides[0];

// Retrieves the first shape
const shape = slide.shapes[0];

// Retrieves the first paragraph of the shape (narrow to a text-bearing shape)
const textBody = shape.textBody;
const paragraph = textBody.paragraphs[0];

// Retrieves the first TextPart of the shape
const textPart = paragraph.textParts[0];

// Modifies the text content of the TextPart
textPart.text = 'Hello Presentation';

// Saves the PowerPoint Presentation to a file
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

### Removing a Paragraph

The following code example demonstrates how to remove a paragraph from a slide.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { open } from '@syncfusion/ej2-pptx';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputPath = resolve(__dirname, 'testppt.pptx');

// Loads or opens a PowerPoint Presentation that contains a shape with at least one paragraph
const bytes = readFileSync(inputPath);
const pptxDoc = await open(bytes);

// Retrieves the first slide from the Presentation
const slide = pptxDoc.slides[0];

// Retrieves the first shape
const shape = slide.shapes[0];

// Retrieves the first paragraph of the shape (narrow to a text-bearing shape)
const textBody = shape.textBody;

// Removing the paragraph.
const paragraph = textBody.paragraphs[0];
textBody.paragraphs.remove(paragraph);

// Saves the PowerPoint Presentation to a file
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

`paragraphs.remove(paragraph)` removes the paragraph from the text body.

## Working with Shapes

In every slide, there is a shape collection that can contain any form of graphical objects such as AutoShape, chart, text, or picture. You can add, iterate, and remove shapes in that collection.

### Adding shapes to a slide

In every slide, there is a shape collection that can contain any form of graphical objects such as AutoShape, chart, text, or picture. You can add any shape element to this collection.

The following code example demonstrates how to add an AutoShape to the shape collection of a slide.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { readFileSync } from 'node:fs';
import { Presentation, SlideLayoutType, AutoShapeType } from '@syncfusion/ej2-pptx';

const PT = 12700; // EMU per point

//Creates an instance for PowerPoint
const pptxDoc = Presentation.create();

//Adds a blank slide to the Presentation
const slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });

//Adds a normal shape to the slide
slide.shapes.addShape(AutoShapeType.Rectangle, {
  x: 50 * PT, y: 200 * PT, width: 300 * PT, height: 300 * PT
});

//Reads the image bytes
const imageBytes = readFileSync('temp/Data/Image.jpg');

//Add picture to the shape collection
const picture = slide.shapes.addPicture({
  data: imageBytes,
  contentType: 'image/jpeg',
  bounds: {
    x: 373 * PT, y: 83 * PT, width: 526 * PT, height: 382 * PT
  }
});

//Saves the Presentation to the file system
await pptxDoc.save('temp/Data/ShapeSample.pptx');

{% endhighlight %}
{% endtabs %}

`addShape` adds a rectangle AutoShape. `addPicture` adds the image bytes to the shape collection. Bounds are converted from points to EMU (`points * 12700`).

### Iterating through shapes

You can iterate through the shapes in a PowerPoint slide. The following code example demonstrates how to iterate through the shapes present in a slide and set the Title property of each shape based on its type. The Title is shown in PowerPoint's selection pane and helps identify the shape.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { readFileSync, writeFileSync } from 'node:fs';
import { open } from '@syncfusion/ej2-pptx';

//Loads or opens a PowerPoint Presentation
const bytes = readFileSync('temp/Data/Sample.pptx');
const pptxDoc = await open(bytes);

//Iterates through the shapes in a slide and detects their type
const slide = pptxDoc.slides[0];
for (const shape of slide.shapes) {
  if (shape.kind === 'picture') {
    // Picture shape detected
  } else if (shape.kind === 'shape') {
    // AutoShape detected
  }
}

//Saves the Presentation to the file system
await pptxDoc.save('ShapeOutput1.pptx');

{% endhighlight %}
{% endtabs %}

`shape.kind` identifies a picture (`'picture'`) or an AutoShape (`'shape'`) while iterating the shape collection.

### Removing the shapes

The shapes can be removed from a slide by its instance or by its index position in the shape collection. The following code example demonstrates how to remove the shapes from a slide.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { readFileSync } from 'node:fs';
import { open } from '@syncfusion/ej2-pptx';

//Loads or opens a PowerPoint Presentation
const bytes = readFileSync('temp/Data/Sample.pptx');
const pptxDoc = await open(bytes);

const slide = pptxDoc.slides[0];
for (const shape of slide.shapes) {
  if (shape.kind === 'shape' && !shape.isPlaceholder) {
    slide.shapes.remove(shape);
    break;
  }
}

//Saves the Presentation to the file system
await pptxDoc.save('ShapeOutput2.pptx');

{% endhighlight %}
{% endtabs %}

`shapes.remove(shape)` removes the first non-placeholder AutoShape from the slide.

## Working with Images

Our ej2-pptx library facilitates adding or modifying the images in a PowerPoint Presentation.

### Adding Images

Our ej2-pptx library facilitates adding or modifying the images in a PowerPoint Presentation. The following code example demonstrates how to add a new image to the presentation.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PT = 12_700; // EMU per point

// Creates an instance of Presentation
const pptxDoc = Presentation.create();

// Adds a blank slide.
const slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });

// Reads the picture bytes.
const pictureBytes = readFileSync(resolve(__dirname, 'Data/Image.jpg'));

// Adds the picture to the slide by specifying its size and position.
const picture = slide.shapes.addPicture({
  data: pictureBytes,
  contentType: 'image/jpeg',
  bounds: { x: 0, y: 0, width: 250 * PT, height: 250 * PT },
});

// Saves the PowerPoint Presentation to a file.
const outputPath = resolve(__dirname, 'Data/PictureSample.pptx');
await pptxDoc.save(outputPath);

console.log('Saved:', outputPath);

{% endhighlight %}
{% endtabs %}

`addPicture` places the image using the specified bounds. Width and height are converted from points to EMU.

### Replacing Images

The following code example demonstrates how to replace an existing image in a slide. The Picture.ImageData property accepts a byte array that represents the new image data. In this library, pass that byte array to `retargetEmbedded`.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { open } from '@syncfusion/ej2-pptx';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Opens an existing PowerPoint Presentation.
const bytes = readFileSync(resolve(__dirname, 'Data/ReplacePicInput.pptx'));
const pptxDoc = await open(bytes);

// Retrieves the first slide from the Presentation.
const slide = pptxDoc.slides[0];

// Retrieves the first picture from the slide.
const picture = slide.shapes[4]?.asPicture();
if (!picture) throw new Error('No picture on the slide.');

// Reads the new picture bytes.
const newBytes = readFileSync(resolve(__dirname, 'Data/Image.jpg'));

// Replaces the existing embedded image with the new image.
picture.retargetEmbedded({ data: newBytes, contentType: 'image/jpeg' });

// Saves the PowerPoint Presentation to a file.
const outputPath = resolve(__dirname, 'Data/PictureReplaced.pptx');
await pptxDoc.save(outputPath);

console.log('Saved:', outputPath);

{% endhighlight %}
{% endtabs %}

`asPicture()` narrows the shape to a picture. `retargetEmbedded` replaces the embedded image with the new byte array and content type.

### Removing Images

The following code example demonstrates how to remove an existing image in a PowerPoint slide.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { open } from '@syncfusion/ej2-pptx';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Opens an existing PowerPoint Presentation.
const bytes = readFileSync(resolve(__dirname, 'Data/Sample.pptx'));
const pptxDoc = await open(bytes);

// Retrieves the first slide from the Presentation.
const slide = pptxDoc.slides[0];

// Iterates through a copy of the shape collection and removes each picture.
for (const shape of slide.shapes) {
  const picture = shape.asPicture();
  if (picture) {
    // Removes the picture from the slide.
    slide.shapes.removePicture(picture);
  }
}

// Saves the PowerPoint Presentation to a file.
const outputPath = resolve(__dirname, 'Data/PictureRemoved.pptx');
await pptxDoc.save(outputPath);

console.log('Saved:', outputPath);

{% endhighlight %}
{% endtabs %}

`shapes.removePicture(picture)` removes each picture found while iterating the shape collection.

## Working with Tables

A table in PowerPoint presentation is used to arrange document content in rows and columns. Table instance represents a table in PowerPoint presentation. A table must contain at least one row.

### Create a table by adding rows

Our ej2-pptx supports creating and editing tables in PowerPoint slides by adding rows. Refer to the following code example.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';
import { addTable } from '@syncfusion/ej2-pptx/tables';

const PT = 12700; // EMU per point

//Create a PowerPoint presentation
const pptxDoc = Presentation.create();

//Add slide to the presentation
const slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });

//Add a table to the slide (2 rows × 2 columns).
const table = addTable(slide, {
  rows: 2, columns: 2,
  xfrm: { x: 100 * PT, y: 120 * PT, width: 300 * PT, height: 200 * PT },
});

//Iterate row-wise cells and add text to each
for (let rowIndex = 0; rowIndex < table.rowCount; rowIndex++) {
  for (let colIndex = 0; colIndex < table.columnCount; colIndex++) {
    const cell = table.cell(rowIndex, colIndex);
    const textBody = cell.textBody;
    if (textBody) {
      const paragraph = textBody.addParagraph();
      paragraph.addTextPart(`(${rowIndex} , ${colIndex})`);
    }
  }
}

//Save the PowerPoint Presentation
await pptxDoc.save('temp/TableModified1.pptx');

console.log('Saved: temp/TableModified1.pptx');

{% endhighlight %}
{% endtabs %}

`addTable` creates a 2 by 2 table. `table.cell(rowIndex, colIndex)` returns each cell so text can be added row by row. `rowCount` and `columnCount` report the table size.

### Create a table by adding columns

The following code example demonstrates how to create a simple table in a PowerPoint slide by adding columns.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';
import { addTable } from '@syncfusion/ej2-pptx/tables';

const PT = 12700; // EMU per point

//Create a PowerPoint presentation
const pptxDoc = Presentation.create();

//Add slide to the presentation
const slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });

//Add a table to the slide (2 rows × 2 columns).
const table = addTable(slide, {
  rows: 2, columns: 2,
  xfrm: { x: 100 * PT, y: 120 * PT, width: 300 * PT, height: 200 * PT },
});

//Iterate column-wise cells and add text to each
for (let colIndex = 0; colIndex < table.columnCount; colIndex++) {
  for (let rowIndex = 0; rowIndex < table.rowCount; rowIndex++) {
    const cell = table.cell(rowIndex, colIndex);
    const textBody = cell.textBody;
    if (textBody) {
      const paragraph = textBody.addParagraph();
      paragraph.addTextPart(`(${rowIndex} , ${colIndex})`);
    }
  }
}

//Save the PowerPoint Presentation
await pptxDoc.save('temp/TableModified2.pptx');

console.log('Saved: temp/TableModified2.pptx');

{% endhighlight %}
{% endtabs %}

The nested loops visit cells column by column and write the row and column indexes into each cell.

### Append a new row at the end of table

You can append new rows at the end of an existing PowerPoint table. Refer to the following code sample.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { readFileSync } from 'node:fs';
import { open } from '@syncfusion/ej2-pptx';
import { asTable } from '@syncfusion/ej2-pptx/tables';

//Loads or opens a PowerPoint presentation
const bytes = readFileSync('temp/Data/Table.pptx');
const pptxDoc = await open(bytes);

//Get the first shape on the first slide and bind it as a table
const slide = pptxDoc.slides[0];
const table = asTable(slide.shapes[0]);
if (table) {
  //Add or append a new row at the end of the table
  const newRowIndex = table.rowCount;
  table.addRow();

  //Iterate the new row's cells and add text to each
  for (let colIndex = 0; colIndex < table.columnCount; colIndex++) {
    const cell = table.cell(newRowIndex, colIndex);
    const textBody = cell.textBody;
    if (textBody) {
      const paragraph = textBody.addParagraph();
      paragraph.addTextPart(String(newRowIndex));
    }
  }
}

//Save the PowerPoint Presentation
await pptxDoc.save('temp/TableModified3.pptx');

console.log('Saved: temp/TableModified3.pptx');

{% endhighlight %}
{% endtabs %}

`asTable` binds the first shape as a table. `addRow()` appends a row, and the new row index is the previous `rowCount`.

### Insert a row in table

You can insert a row at the specified index position of a table. Refer to the following code example.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { readFileSync } from 'node:fs';
import { open } from '@syncfusion/ej2-pptx';
import { asTable } from '@syncfusion/ej2-pptx/tables';

//Loads or opens a PowerPoint presentation
const bytes = readFileSync('temp/Data/Table.pptx');
const pptxDoc = await open(bytes);

//Get the table in the slide
const slide = pptxDoc.slides[0];
const table = asTable(slide.shapes[0]);

if (table) {
  //Insert an empty row at index 1 (existing rows shift down)
  table.insertRowAt(1);
}

//Save the PowerPoint Presentation
await pptxDoc.save('temp/TableModified4.pptx');

console.log('Saved: temp/TableModified4.pptx');

{% endhighlight %}
{% endtabs %}

`insertRowAt(1)` inserts an empty row at index 1. Existing rows shift down.

### Insert a column in table

You can insert a column at the specified index position of a table. Refer to the following code example.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { readFileSync } from 'node:fs';
import { open } from '@syncfusion/ej2-pptx';
import { asTable } from '@syncfusion/ej2-pptx/tables';

//Loads or opens a PowerPoint presentation
const bytes = readFileSync('temp/Data/Table.pptx');
const pptxDoc = await open(bytes);

//Get the table in the slide
const slide = pptxDoc.slides[0];
const table = asTable(slide.shapes[0]);

if (table) {
  //Insert an empty column at index 1.
  table.insertColumnAt(1);
}

//Save the PowerPoint Presentation
await pptxDoc.save('temp/TableModified5.pptx');

console.log('Saved: temp/TableModified5.pptx');

{% endhighlight %}
{% endtabs %}

`insertColumnAt(1)` inserts an empty column at index 1.

### Removing the table

You can remove a table from a slide by passing its instance to the remove method. The following code example demonstrates how to remove a table from a slide.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { readFileSync } from 'node:fs';
import { open } from '@syncfusion/ej2-pptx';
import { asTable, removeTable } from '@syncfusion/ej2-pptx/tables';

//Loads or opens a PowerPoint presentation
const bytes = readFileSync('temp/Data/Table.pptx');
const pptxDoc = await open(bytes);

//Gets the slide from the presentation
const slide = pptxDoc.slides[0];

//Gets the table from the slide (first shape, bound as a table)
const table = asTable(slide.shapes[0]);

if (table) {
  //Removes the table from the slide
  removeTable(slide, table);
}

//Save the PowerPoint Presentation
await pptxDoc.save('temp/TableModified6.pptx');

console.log('Saved: temp/TableModified6.pptx');

{% endhighlight %}
{% endtabs %}

`removeTable(slide, table)` removes the table instance from the slide.
