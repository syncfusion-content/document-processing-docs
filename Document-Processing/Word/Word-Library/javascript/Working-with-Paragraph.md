---
title: Paragraphs in JavaScript Word | Syncfusion
description: Learn how to work with paragraphs, paragraph formatting, text runs, styles, and tab stops in a Word document using the Syncfusion JavaScript Word library.
platform: document-processing
control: Word Library
documentation: UG
---

# Paragraphs in JavaScript Word Library

Paragraph is the basic element in a Word document that contains textual and graphical content. Each paragraph has its own formatting such as line spacing, alignment, indentation, and more. It can also contain various child elements, including text, images, hyperlinks, breaks, shapes, fields, and more.

## Add a new paragraph

The following code example shows how to add a new paragraph.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

// Create a new document
let document = WordDocument.create();
let section = document.sections[0];
// Get paragraph and append text to it
let paragraph = section.body.paragraphs[0];
paragraph.appendText('Adding new paragraph to the document');

// Save the document
await document.save('Sample.docx');
{% endhighlight %}
{% endtabs %}

## Modify an existing paragraph

The following code example shows how to modify an existing paragraph.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, TextRange } from '@syncfusion/ej2-docx';

// Load an existing document
let document = WordDocument.open(data);

let section = document.sections[0];
let paragraph = section.body.paragraphs[0];

// Apply bold formatting to the first text range
for (let item of paragraph.items) {
    if (item instanceof TextRange) {
        item.characterFormat.bold = true;
        break;
    }
}

// Save the document
document.save('Sample.docx');
{% endhighlight %}
{% endtabs %}

## Applying paragraph formatting

As in Microsoft Word, the Word library provides support for paragraph formatting options such as line spacing, indentation, spacing before and after, keep with next, and more.

The following code example shows how to apply formatting to a paragraph.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, Color, Paragraph, ParagraphAlignment } from '@syncfusion/ej2-docx';

// Load the document
let document = WordDocument.open(data);
let bodyItems = document.sections[0].body.items;

// Apply spacing, indentation, shading, and alignment to paragraph 5 (index 4)
let paragraph5 = bodyItems[4];
if (paragraph5 instanceof Paragraph) {
    paragraph5.paragraphFormat.beforeSpacing = 18;
    paragraph5.paragraphFormat.afterSpacing = 18;
    paragraph5.paragraphFormat.lineSpacing = 10;
    paragraph5.paragraphFormat.firstLineIndent = 10;
    paragraph5.paragraphFormat.backColor = Color.LightGray;
    paragraph5.paragraphFormat.horizontalAlignment = ParagraphAlignment.Right;
}

// Keep paragraph 7 (index 6) with the next paragraph
let paragraph7 = bodyItems[6];
if (paragraph7 instanceof Paragraph) {
    paragraph7.paragraphFormat.keepFollow = true;
}

// Keep paragraph 8 (index 7) lines together
let paragraph8 = bodyItems[7];
if (paragraph8 instanceof Paragraph) {
    paragraph8.paragraphFormat.keepLines = true;
}

// Save the document
document.save('Sample.docx');
{% endhighlight %}
{% endtabs %}

### Tab stop

A tab stop is a horizontal position that is set for aligning the text of a paragraph. A tab character causes the carriage to move to the next tab stop.

Each paragraph has its own tab stop collection to which new tab stops can be added and existing tab stops can be removed.

The following code example shows how to add tab stops to a paragraph.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, TabJustification, TabLeader } from '@syncfusion/ej2-docx';

// Create a new document and access the paragraph
let document = WordDocument.create();
let paragraph = document.sections[0].body.paragraphs[0];

// Add tab stops to the paragraph
paragraph.paragraphFormat.tabs.addTab(11, TabJustification.Left, TabLeader.Dot);
paragraph.paragraphFormat.tabs.addTab(62, TabJustification.Left, TabLeader.Single);

// Add text that uses the tab stops
paragraph.appendText('This sample\t illustrates the use of tabs in the paragraph. Tabs\t can be inserted or removed from the paragraph.');

// Optionally remove a tab stop by position
paragraph.paragraphFormat.tabs.removeByPosition(11);

// Save the document
document.save('Sample.docx');
{% endhighlight %}
{% endtabs %}

### RTL paragraph

You can set the RTL (right-to-left) direction for a paragraph in a Word document.

The following code example shows how to set the RTL (right-to-left) direction for a paragraph in a Word document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, Paragraph } from '@syncfusion/ej2-docx';

// Load an existing document
let document = WordDocument.open(data);

// Access the second body item (index 1)
let paragraph = document.sections[0].body.items[1];
let isRTL = paragraph.paragraphFormat.bidi; 

if (!isRTL) { 
paragraph.paragraphFormat.bidi = true; 

} 

// Save the document
await document.save('Sample.docx');
{% endhighlight %}
{% endtabs %}

## Working with styles

Styles define reusable character and paragraph formatting. You can access built-in styles, create custom paragraph styles, apply styles to paragraphs, and remove styles from a document.

### Access styles

The following code example shows how to access a style and modify its formatting.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, Color, ParagraphStyle } from '@syncfusion/ej2-docx';

// Load an existing Word document
let document = WordDocument.open(data);

let styles = document.styles;
let style = styles.findByName('Heading1');
if (style instanceof ParagraphStyle) {
    style.characterFormat.textColor = Color.DarkBlue;
    style.paragraphFormat.firstLineIndent = 36;
}

// Save the document
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

### Creating a new paragraph style

The following code example shows how to create a custom paragraph style and apply it.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, Color, ParagraphAlignment } from '@syncfusion/ej2-docx';

// Load an existing Word document
let document = WordDocument.open(data);

// Create a custom paragraph style
let myStyle = document.styles.addParagraphStyle('MyStyle');
myStyle.characterFormat.fontSize = 16;
myStyle.characterFormat.textColor = Color.DarkBlue;
myStyle.paragraphFormat.horizontalAlignment = ParagraphAlignment.Right;

// Append content to the last paragraph
document.lastParagraph.appendText(
    'AdventureWorks Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company.'
);

// Apply the style to the paragraph
document.lastParagraph.applyStyle('MyStyle');

// Save the document
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

### Applying built-in styles

The following code example shows how to apply a built-in style to a paragraph.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

// Load an existing Word document
let document = WordDocument.open(data);

// Apply the built-in Emphasis style
document.lastParagraph.applyStyle('Emphasis');

// Save the document
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

### Remove styles

The following code example shows how to remove a style from a document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, ParagraphStyle } from '@syncfusion/ej2-docx';

// Load an existing Word document
let document = WordDocument.open(data);

let styles = document.styles;
let style = styles.findByName('Style1');
if (style instanceof ParagraphStyle) {
    style.remove();
}

// Save the document
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

## Working with text

Text within a paragraph is represented by one or more text ranges. Each text range can have its own font and text formatting.

The following code example shows how to append text to a paragraph.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, Color } from '@syncfusion/ej2-docx';

// Create a new document and access the paragraph
let document = WordDocument.create();
let paragraph = document.sections[0].body.paragraphs[0];

// Add text and get the created text range
let text = paragraph.appendText('A new text is added to the paragraph.');

// Apply character formatting to the text range
text.characterFormat.fontSize = 14;
text.characterFormat.bold = true;
text.characterFormat.textColor = Color.Green;

// Save the document
document.save('Sample.docx');
{% endhighlight %}
{% endtabs %}

Text in a paragraph can be modified or replaced with new text by iterating through the paragraph items.

The following code example shows how to replace the text of a text range.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, Paragraph, TextRange } from '@syncfusion/ej2-docx';

// Load an existing document
let document = WordDocument.open(data));

// Modify the first text range of the paragraph at body index 3
let block = document.sections[0].body.items[3];
if (block instanceof Paragraph) {
    for (let item of block.items) {
        if (item instanceof TextRange) {
            item.text = 'First text range of the last paragraph is replaced';
            item.characterFormat.fontSize = 14;
            break;
        }
    }
}

// Save the document
document.save('Sample.docx');
{% endhighlight %}
{% endtabs %}

Text formatting enhances the appearance of text in the document.

Text formatting includes:

* Font size
* Font color
* Font name
* Bold
* Italic
* Underline
* Highlighting
* Superscript
* Subscript

The following code example shows how to apply formatting to text.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, Color, SubSuperScript, UnderlineStyle } from '@syncfusion/ej2-docx';

// Create a new document and get the first paragraph
let document = WordDocument.create();
let firstParagraph = document.sections[0].body.paragraphs[0];

// Add the first text range and apply formatting
let firstText = firstParagraph.appendText('This is the first text range. ');
firstText.characterFormat.bold = true;
firstText.characterFormat.fontSize = 14;
firstText.characterFormat.shadow = true;
firstText.characterFormat.smallCaps = true;

// Add the second text range and apply formatting
let secondText = firstParagraph.appendText('This is the second text range');
secondText.characterFormat.highlightColor = Color.Green;
secondText.characterFormat.underlineStyle = UnderlineStyle.DotDash;
secondText.characterFormat.italic = true;
secondText.characterFormat.fontName = 'Times New Roman';
secondText.characterFormat.textColor = Color.Green;

// Add the second paragraph with RTL text formatting
let secondParagraph = document.sections[0].body.appendParagraph();
let thirdText = secondParagraph.appendText('שלום עולם');
thirdText.characterFormat.bidi = true;

// Add the third paragraph and apply superscript formatting
let thirdParagraph = document.sections[0].body.appendParagraph();
thirdParagraph.appendText('X');
let fifthText = thirdParagraph.appendText('2');
fifthText.characterFormat.subSuperScript = SubSuperScript.SuperScript;

// Add the fourth paragraph and apply subscript formatting
let fourthParagraph = document.sections[0].body.appendParagraph();
fourthParagraph.appendText('m');
let seventhText = fourthParagraph.appendText('3');
seventhText.characterFormat.subSuperScript = SubSuperScript.SubScript;

// Save the document
document.save('Sample.docx');
{% endhighlight %}
{% endtabs %}