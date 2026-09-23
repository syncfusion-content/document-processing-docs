---
title: Working with Paragraphs in JavaScript PowerPoint | Syncfusion
description: Learn how to add and format paragraphs in a PowerPoint presentation using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Working with Paragraphs in JavaScript PowerPoint

The `JavaScript PowerPoint Library` provides comprehensive support to add and format paragraphs in a PowerPoint presentation, enabling complete control over textual content within slides.

## Adding paragraph to slide

All the textual contents in a Presentation document are represented by Paragraphs. A TextBody of a textbox or shape can contain any number of paragraphs in a PowerPoint presentation.

The following code example demonstrates how to add a paragraph in a slide.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';

// Creates a PowerPoint Presentation.
const pptxDoc = Presentation.create();
// Adds a slide to the PowerPoint.
const slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// Adds a textbox to the slide.
// pt → EMU: points * 12700
const PT = 12700;
const textboxShape = slide.shapes.addTextBox({
    bounds: { x: 0 * PT, y: 0 * PT, width: 500 * PT, height: 500 * PT },
});
// Adds a paragraph to the textbody of the textbox.
const paragraph = textboxShape.textBody.addParagraph();
// Adds a TextPart to the paragraph.
const textPart = paragraph.addTextPart('');
// Adds text to the TextPart.
textPart.text = 'AdventureWorks Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company. The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets. While its base operation is located in Washington with 290 employees, several regional sales teams are located throughout their market base.';
// Saves the PowerPoint Presentation to a file.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

## Applying Paragraph Formatting

Each paragraph in a slide can have its own formatting types such as alignment, indent, and so on. 

The following code example demonstrates how to format a paragraph in a PowerPoint presentation.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { open, HorizontalAlignmentType } from '@syncfusion/ej2-pptx';
import { readFileSync } from 'node:fs';

const inputPath = resolve(__dirname, 'Input.pptx');
// Loads or opens a PowerPoint Presentation.
const bytes = readFileSync(inputPath);
const pptxDoc = await open(bytes);
// Gets the slide from the Presentation.
const slide = pptxDoc.slides[0];
// Gets the shape in the slide (narrow to a text-bearing shape).
const textboxShape = slide.shapes[0];
// Gets the instance of a paragraph in the textbox.
const paragraph = textboxShape.textBody.paragraphs[0];
// Applies the first line indent of the paragraph (points → EMU at the boundary).
paragraph.firstLineIndent = 10;
// Applies the horizontal alignment of the paragraph.
paragraph.horizontalAlignment = HorizontalAlignmentType.Left;
// Applies the left indent of the paragraph (points → EMU at the boundary).
paragraph.leftIndent = 8;
// Modifies the end paragraph font name (writes a:endParaRPr).
paragraph.endParagraphFont.fontName = 'Times New Roman';
// Saves the PowerPoint Presentation to a file.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

## Adding text with different formatting into a single paragraph

With the `JavaScript PowerPoint Library`, text can be added or modified in a Presentation. Within a paragraph, textual contents are grouped into one or more child elements as TextParts. Each TextPart represents a region of text with a common set of formatted text.

The following code example demonstrates how to add text with different formatting into a single paragraph.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';

// Creates the PowerPoint Presentation instance.
const pptxDoc = Presentation.create();
// Adds a new slide to the Presentation.
const slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// Adds a textbox to the slide.
// pt → EMU: points * 12700
const PT = 12700;
const textboxShape2 = slide.shapes.addTextBox({
    bounds: { x: 500 * PT, y: 0 * PT, width: 400 * PT, height: 500 * PT },
});
// Adds a paragraph to the textbody of the textbox.
const paragraph2 = textboxShape2.textBody.addParagraph();
// Adds a TextPart to the paragraph.
const textPartFormatting = paragraph2.addTextPart('');
// Adds text to the TextPart.
textPartFormatting.text = 'In 2000, AdventureWorks Cycles bought a small manufacturing plant, located in Mexico. The plant manufactures several critical subcomponents for the AdventureWorks Cycles product line. These subcomponents are shipped to the another location for final product assembly. In 2001, the plant, became the sole manufacturer and distributor of the touring bicycle product group.';
// Sets the underline color (canonical #RRGGBB; AliceBlue = #F0F8FF).
textPartFormatting.font.underlineColor = '#000000';
// Sets the underline type.
textPartFormatting.font.underline = TextUnderlineType.Single;
// Sets the font weight.
textPartFormatting.font.bold = true;
// Adds a second TextPart to the paragraph.
const textPartFormatting2 = paragraph2.addTextPart('');
// Adds text to the TextPart.
textPartFormatting2.text = 'In 2000, AdventureWorks Cycles bought a small manufacturing plant, located in Mexico.';
// Sets the font color (canonical #RRGGBB; BlanchedAlmond = #FFEBCD).
textPartFormatting2.font.color = '#0000FF';
// Sets the underline type.
textPartFormatting2.font.underline = TextUnderlineType.WavyDouble;
// Saves the PowerPoint Presentation to a file.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

## Modifying Text

Text content can be modified by accessing the existing paragraphs in a Presentation.

 The following code example demonstrates how to modify the content in a paragraph.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { open } from '@syncfusion/ej2-pptx';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputPath = resolve(__dirname, 'tempresult.pptx');

// Loads or opens a PowerPoint Presentation that contains a shape with a text body.
const bytes = readFileSync(inputPath);
const pptxDoc = await open(bytes);
// Retrieves the first slide from the Presentation.
const slide = pptxDoc.slides[0];
// Retrieves the first shape.
const shape = slide.shapes[0];
// Retrieves the first paragraph of the shape (narrow to a text-bearing shape).
const textBody = shape.textBody;
const paragraph = textBody.paragraphs[0];
// Retrieves the first TextPart of the shape.
const textPart = paragraph.textParts[0];
// Modifies the text content of the TextPart.
textPart.text = 'Hello Presentation';
// Saves the PowerPoint Presentation to a file.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

## Removing a Paragraph

A TextBody of a textbox or shape can have any of its paragraphs removed individually. 

The following code example demonstrates how to remove a paragraph from a slide.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { open } from '@syncfusion/ej2-pptx';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputPath = resolve(__dirname, 'testppt.pptx');

// Loads or opens a PowerPoint Presentation that contains a shape with at least one paragraph.
const bytes = readFileSync(inputPath);
const pptxDoc = await open(bytes);
// Retrieves the first slide from the Presentation.
const slide = pptxDoc.slides[0];
// Retrieves the first shape.
const shape = slide.shapes[0];
// Retrieves the first paragraph of the shape (narrow to a text-bearing shape).
const textBody = shape.textBody;
// Removes the paragraph.
const paragraph = textBody.paragraphs[0];
textBody.paragraphs.remove(paragraph);
// Saves the PowerPoint Presentation to a file.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}