---
layout: post
title: Working with Paragraphs in JavaScript PowerPoint | Syncfusion
description: Learn how to add, format, modify, and remove paragraphs and text in a PowerPoint presentation using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint
---

# Working with Paragraphs in JavaScript PowerPoint

## Adding paragraph to slide

All the textual contents in a Presentation document is represented by Paragraphs. You can have any number of paragraphs within a TextBody of a textbox or shape in a PowerPoint presentation.

The following code example demonstrates how to add a paragraph in a slide.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';
// Creates a PowerPoint Presentation.
let pptxDoc = Presentation.create();
// Adds a slide to the PowerPoint.
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// Adds a textbox to the slide.
let textboxShape = slide.shapes.addTextBox({
    bounds: { x: 0, y: 0, width: 500, height: 500 }
});
// Adds a paragraph to the textbody of the textbox.
let paragraph = textboxShape.textBody.addParagraph();
// Adds a TextPart to the paragraph.
let textPart = paragraph.addTextPart('AdventureWorks Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company. The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets. While its base operation is located in Washington with 290 employees, several regional sales teams are located throughout their market base.');
// Gets text from the TextPart.
let paraText = textPart.text;
// Saves the Presentation to the file system.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

## Applying Paragraph Formatting

Each paragraph in a slide can have its own formatting types such as alignment, indent, and so on. The following code example demonstrates how to format a paragraph in a PowerPoint presentation.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, HorizontalAlignmentType } from '@syncfusion/ej2-pptx';

// Loads or opens a PowerPoint Presentation.
let pptxDoc = await Presentation.open(data);
// Gets the slide from the Presentation.
let slide = pptxDoc.slides.add();
let textboxShape = slide.shapes.addTextBox();
// Gets the instance of a paragraph in the textbox.
let paragraph = textboxShape.textBody.paragraphs[0];
// Font and indent only style existing text. A new text box has none, so the slide looks blank until a run is added.
paragraph.addTextPart('Paragraph formatting sample');
// Applies the first line indent of the paragraph (points).
paragraph.firstLineIndent = 10;
// Applies the horizontal alignment of the paragraph.
paragraph.horizontalAlignment = HorizontalAlignmentType.Left;
// Applies the left indent of the paragraph (points).
paragraph.leftIndent = 8;
// Modifies the paragraph default font name.
paragraph.font.fontName = 'Times New Roman';
// Saves the Presentation to the file system.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

## Working with Text

With the [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library), you can add or modify text in a Presentation. Within the paragraph, textual contents are grouped into one or more child elements as TextParts. Each TextPart represents a region of text with a common set of formatted text.

The following code example demonstrates how to add text with different formatting into a single paragraph.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType, TextUnderlineType } from '@syncfusion/ej2-pptx';

// Creates the PowerPoint Presentation instance.
let pptxDoc = Presentation.create();
// Adds a new slide to the Presentation.
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// Adds a textbox to the slide.
let textboxShape2 = slide.shapes.addTextBox({
    bounds: { x: 500, y: 0, width: 400, height: 500 }
});
// Adds a paragraph to the textbody of the textbox.
let paragraph2 = textboxShape2.textBody.addParagraph();
// Adds a TextPart to the paragraph.
let textPartFormatting = paragraph2.addTextPart('');
// Adds text to the TextPart.
textPartFormatting.text = 'In 2000, AdventureWorks Cycles bought a small manufacturing plant, located in Mexico. The plant manufactures several critical subcomponents for the AdventureWorks Cycles product line. These subcomponents are shipped to the another location for final product assembly. In 2001, the plant, became the sole manufacturer and distributor of the touring bicycle product group.';
// Sets the underline color (canonical #RRGGBB).
textPartFormatting.font.underlineColor = '#000000';
// Sets the underline type.
textPartFormatting.font.underline = TextUnderlineType.Single;
// Sets the font weight.
textPartFormatting.font.bold = true;
// Adds a second TextPart to the paragraph.
let textPartFormatting2 = paragraph2.addTextPart('');
// Adds text to the TextPart.
textPartFormatting2.text = 'In 2000, AdventureWorks Cycles bought a small manufacturing plant, located in Mexico.';
// Sets the font color (canonical #RRGGBB).
textPartFormatting2.font.color = '#0000FF';
// Sets the underline type.
textPartFormatting2.font.underline = TextUnderlineType.WavyDouble;
// Saves the Presentation to the file system.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

## Modifying Text

You can modify text by accessing the existing paragraphs in a Presentation. The following code example demonstrates how to modify the content in a paragraph.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// data is a Uint8Array or ArrayBuffer of a PowerPoint Presentation that contains a shape with a text body.
// Loads or opens a PowerPoint Presentation.
let pptxDoc = await Presentation.open(data);
// Retrieves the first slide from the Presentation.
let slide = pptxDoc.slides[0];
// Retrieves the first shape.
let shape = slide.shapes[0];
// Retrieves the first paragraph of the shape (narrow to a text-bearing shape).
let textBody = shape.textBody;
let paragraph = textBody.paragraphs[0];
// Retrieves the first TextPart of the shape.
let textPart = paragraph.textParts[0];
// Modifies the text content of the TextPart.
textPart.text = 'Hello Presentation';
// Saves the Presentation to the file system.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

## Removing a Paragraph

The following code example demonstrates how to remove a paragraph from a slide.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// data is a Uint8Array or ArrayBuffer of a PowerPoint Presentation that contains a shape with at least one paragraph.
// Loads or opens a PowerPoint Presentation.
let pptxDoc = await Presentation.open(data);
// Retrieves the first slide from the Presentation.
let slide = pptxDoc.slides[0];
// Retrieves the first shape.
let shape = slide.shapes[0];
// Retrieves the first paragraph of the shape (narrow to a text-bearing shape).
let textBody = shape.textBody;
// Removing the paragraph.
let paragraph = textBody.paragraphs[0];
textBody.paragraphs.remove(paragraph);
// Saves the Presentation to the file system.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}
