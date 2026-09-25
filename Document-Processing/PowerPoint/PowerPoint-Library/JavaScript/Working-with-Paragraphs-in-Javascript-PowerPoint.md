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
const textboxShape = slide.shapes.addTextBox({
    bounds: { x: 0, y: 0, width: 300, height: 300 },
});
// Adds a paragraph to the textbody of the textbox.
const paragraph = textboxShape.textBody.addParagraph();
// Adds a TextPart to the paragraph.
const textPart = paragraph.addTextPart('AdventureWorks Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company. The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets. While its base operation is located in Washington with 290 employees, several regional sales teams are located throughout their market base.');
// Saves the PowerPoint Presentation to a file.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

## Applying Paragraph Formatting

Each paragraph in a slide can have its own formatting types such as alignment, indent, and so on. 

The following code example demonstrates how to format a paragraph in a PowerPoint presentation.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation, HorizontalAlignmentType } from '@syncfusion/ej2-pptx';
 
// data is a Uint8Array or ArrayBuffer of an .pptx file
// Loads or opens a PowerPoint Presentation.
const pptxDoc = await Presentation.open(data);
// Gets the first slide from the Presentation.
const slide = pptxDoc.slides[0];
// Gets the first shape on the slide (narrow to a text-bearing shape).
const textboxShape = slide.shapes[0];
// Gets the instance of a paragraph in the textbox.
const paragraph = textboxShape.textBody.paragraphs[0];
// Sets the first-line indent of the paragraph.
paragraph.firstLineIndent = 10;
// Sets the horizontal alignment of the paragraph.
paragraph.horizontalAlignment = HorizontalAlignmentType.Left;
// Sets the left indent of the paragraph.
paragraph.leftIndent = 8;
// Sets the end-of-paragraph marker font.
paragraph.endParagraphFont.fontName = 'Times New Roman';
// Saves the PowerPoint presentation to a file.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

## Adding text with different formatting into a single paragraph

With the `JavaScript PowerPoint Library`, text can be added or modified in a Presentation. Within a paragraph, textual contents are grouped into one or more child elements as TextParts. Each TextPart represents a region of text with a common set of formatted text.

The following code example demonstrates how to add text with different formatting into a single paragraph.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType, TextUnderlineType } from '@syncfusion/ej2-pptx';

// Creates the PowerPoint Presentation instance.
const pptxDoc = Presentation.create();
// Adds a new blank slide to the Presentation.
const slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// Adds a text box to the slide.
const textboxShape2 = slide.shapes.addTextBox({
    bounds: { x: 100, y: 0, width: 400, height: 300 },
});
// Adds a paragraph to the text body of the text box.
const paragraph2 = textboxShape2.textBody.addParagraph();
// Adds a TextPart to the paragraph and sets its text.
const textPart = paragraph2.addTextPart('');
textPart.text = 'In 2000, AdventureWorks Cycles bought a small manufacturing plant, located in Mexico. The plant manufactures several critical subcomponents for the AdventureWorks Cycles product line. These subcomponents are shipped to the another location for final product assembly. In 2001, the plant, became the sole manufacturer and distributor of the touring bicycle product group.';
// Sets the underline color.
textPart.font.underlineColor = '#000000';
// Sets the underline type (TextUnderlineType token).
textPart.font.underline = TextUnderlineType.Single;
// Sets the font weight.
textPart.font.bold = true;
// Adds a second TextPart to the paragraph and sets its text.
const textPart2 = paragraph2.addTextPart('');
textPart2.text = 'In 2000, AdventureWorks Cycles bought a small manufacturing plant, located in Mexico.';
// Sets the font color.
textPart2.font.color = '#0000FF';
// Sets the underline type.
textPart2.font.underline = TextUnderlineType.WavyDouble;
// Saves the PowerPoint Presentation to a file.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

## Modifying Text

Text content can be modified by accessing the existing paragraphs in a Presentation.

 The following code example demonstrates how to modify the content in a paragraph.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';
 
// data is a Uint8Array or ArrayBuffer of an .pptxfile
// Loads or opens a PowerPoint Presentation that contains a shape with a text body.
const pptxDoc = await Presentation.open(data);
// Retrieves the first slide from the Presentation
const slide = pptxDoc.slides[0];
// Retrieves the first shape on the slide.
const shape = slide.shapes[0];
// Retrieves the first paragraph of the shape's text body (narrow to a text-bearing shape).
const paragraph = shape.textBody.paragraphs[0];
// Retrieves the first TextPart of the paragraph.
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

import { Presentation } from '@syncfusion/ej2-pptx';
 
// data is a Uint8Array or ArrayBuffer of an .pptx file
// Opens the presentation.
const pptxDoc = await Presentation.open(data);
// Retrieves the first slide from the Presentation.
const slide = pptxDoc.slides[0];
// Retrieves the first shape on the slide (narrow to a text-bearing shape).
const shape = slide.shapes[0];
// Retrieves the text body.
const textBody = shape.textBody;
// Removes the first paragraph.
const paragraph = textBody.paragraphs[0];
textBody.paragraphs.remove(paragraph);
// Saves the PowerPoint Presentation to a file.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}