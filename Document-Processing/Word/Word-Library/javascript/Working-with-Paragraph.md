---
title: Paragraphs in JavaScript Word | Syncfusion
description: Learn how to work with paragraphs, lists, and child elements of paragraphs in a Word document using the JavaScript Word library.
platform: document-processing
control: DocIO
documentation: UG
---

# Paragraphs in JavaScript Word

Paragraph is the basic element in a Word document that contains textual and graphical content. Each paragraph has its own formatting such as line spacing, alignment, indentation, and more. Within a paragraph, the contents are represented by one or more child elements.

The following elements can be the child elements of a paragraph:

* Text
* Image
* Comments
* Hyperlink
* Symbols
* Breaks
* OLE Object
* Shapes
* TextBox
* Chart
* Fields
* Form Fields
* Bookmarks

The following code example shows how to add a new paragraph.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { writeFileSync } from 'node:fs';
import { Buffer } from 'node:buffer';
import { Document } from 'docx-js';

// Create a new document
const doc = Document.create();
// Add a paragraph and append text to it
doc.body.appendParagraph().appendText('Adding new paragraph to the document');

// Save the document
const saveBytes = doc.saveSync();
writeFileSync('Sample.docx', Buffer.from(saveBytes));
{% endhighlight %}
{% endtabs %}

The following code example shows how to modify an existing paragraph.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { readFileSync, writeFileSync } from 'node:fs';
import { Buffer } from 'node:buffer';
import { Document } from 'docx-js';

// Load an existing document
const bytes = readFileSync('Input.docx');
const doc = Document.loadSync(new Uint8Array(bytes));

// Get the document body items
const items = doc.body.items;
// Modify the first paragraph
if (items[0].type === 'paragraph') {
    for (const childItem of items[0].paragraph.items) {
        if (childItem.type === 'run') {
            // Apply bold formatting to the text run
            childItem.run.bold = true;
            break;
        }
    }
}

// Save the document
const saveBytes = doc.saveSync();
writeFileSync('Sample.docx', Buffer.from(saveBytes));
{% endhighlight %}
{% endtabs %}

## Applying paragraph formatting

As in Microsoft Word, the Word library provides support for all paragraph formatting options such as line spacing, indentation, spacing before and after, keep with next, and more.

The following code example shows how to apply formatting to a paragraph.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { readFileSync, writeFileSync } from 'node:fs';
import { Buffer } from 'node:buffer';
import {
    Document,
    ParagraphAlignment,
    Pt
} from 'docx-js';

// Load the document
const bytes = readFileSync('Input.docx');
const doc = Document.loadSync(new Uint8Array(bytes));
const items = doc.body.items;

// Apply spacing, indentation, shading, and alignment to paragraph 5 (index 4)
if (items[4]?.type === 'paragraph') {
    const paragraph = items[4].paragraph;
    paragraph.spacing = { before: Pt(18), after: Pt(18), lineSpacing: Pt(10) };
    paragraph.indentation = { firstLine: Pt(10) };
    paragraph.paragraphShading = { backgroundColor: 'D3D3D3' };
    paragraph.alignment = ParagraphAlignment.End;
}

// Keep paragraph 8 (index 7) lines together
if (items[7]?.type === 'paragraph') {
    items[7].paragraph.keepLines = true;
}

// Keep paragraph 7 (index 6) with the next paragraph
if (items[6]?.type === 'paragraph') {
    items[6].paragraph.keepNext = true;
}

// Save the document
const saveBytes = doc.saveSync();
writeFileSync('Sample.docx', Buffer.from(saveBytes));
{% endhighlight %}
{% endtabs %}

### Tab stop

A tab stop is a horizontal position that is set for aligning the text of a paragraph. A tab character causes the carriage to move to the next tab stop.

Each paragraph has its own tab stop collection to which new tab stops can be added and existing tab stops can be removed.

The following code example shows how to add tab stops to a paragraph.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { writeFileSync } from 'node:fs';
import { Buffer } from 'node:buffer';
import { Document, Pt } from 'docx-js';

// Create a new document and add a paragraph
const doc = Document.create();
const paragraph = doc.body.appendParagraph();

// Add tab stops to the paragraph
paragraph.tabStops = [
    { position: Pt(11), alignment: 'left', leader: 'dot' },
    { position: Pt(62), alignment: 'left', leader: 'hyphen' }
];

// Add text that uses the tab stops
paragraph.appendText('This sample illustrates the use of tabs in the paragraph. Tabs can be inserted or removed from the paragraph.');

// Save the document
const saveBytes = doc.saveSync();
writeFileSync('Sample.docx', Buffer.from(saveBytes));
{% endhighlight %}
{% endtabs %}

### RTL paragraph

You can set the RTL (right-to-left) direction for a paragraph in a Word document.

The following code example shows how to set the RTL (right-to-left) direction for a paragraph in a Word document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { readFileSync, writeFileSync } from 'node:fs';
import { Buffer } from 'node:buffer';
import { Document } from 'docx-js';

// Load an existing document
const bytes = readFileSync('Template.docx');
const doc = Document.loadSync(new Uint8Array(bytes));

// Get the document body items
const items = doc.body.items;
// Access the second paragraph (index 1)
if (items[1]?.type === 'paragraph') {
    const paragraph = items[1].paragraph;
    // Check whether the paragraph direction is already RTL
    const isRTL = paragraph.bidi;
    // Set RTL if it is not already enabled
    if (!isRTL) {
        paragraph.bidi = true;
    }
}

// Save the document
const saveBytes = doc.saveSync();
writeFileSync('Sample.docx', Buffer.from(saveBytes));
{% endhighlight %}
{% endtabs %}

## Working with text

Text within a paragraph is represented by one or more text runs. Each text run can have its own font and text formatting.

The following code example shows how to append text to a paragraph.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { writeFileSync } from 'node:fs';
import { Buffer } from 'node:buffer';
import { Document, Pt } from 'docx-js';

// Create a new document and add a paragraph
const doc = Document.create();
const paragraph = doc.body.appendParagraph();

// Add text and get the created text run
const text = paragraph.appendText('A new text is added to the paragraph.');

// Apply character formatting to the text run
text.fontSize = Pt(14);
text.bold = true;
text.color = { value: '008000' };

// Save the document
const saveBytes = doc.saveSync();
writeFileSync('Sample.docx', Buffer.from(saveBytes));
{% endhighlight %}
{% endtabs %}

Text in a paragraph can be modified or replaced with new text by iterating through the paragraph items.

The following code example shows how to replace the text of a text run.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { readFileSync, writeFileSync } from 'node:fs';
import { Buffer } from 'node:buffer';
import { Document, Pt } from 'docx-js';

// Load an existing document
const bytes = readFileSync('Template.docx');
const doc = Document.loadSync(new Uint8Array(bytes));

// Modify the first text run of the paragraph
if (doc.body.items[3].type === 'paragraph') {
    const paragraph = doc.body.items[3].paragraph;
    for (const item of paragraph.items) {
        if (item.type === 'run') {
            item.run.text = 'First text range of the last paragraph is replaced';
            item.run.fontSize = Pt(14);
            break;
        }
    }
}

// Save the document
const saveBytes = doc.saveSync();
writeFileSync('Sample.docx', Buffer.from(saveBytes));
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
import { writeFileSync } from 'node:fs';
import { Buffer } from 'node:buffer';
import {
    Document,
    Pt,
    BreakType
} from 'docx-js';

// Create a new document and add the first paragraph
const doc = Document.create();
const firstParagraph = doc.body.appendParagraph();

// Add the first text range and apply formatting
const firstText = firstParagraph.appendText('This is the first text range. ');
firstText.bold = true;
firstText.fontSize = Pt(14);
firstText.shadow = true;
firstText.smallCaps = true;

// Add the second text range and apply formatting
const secondText = firstParagraph.appendText('This is the second text range');
secondText.highlight = 'green';
secondText.underline = { style: 'dotDash' };
secondText.italic = true;
secondText.fonts = { ascii: 'Times New Roman', hAnsi: 'Times New Roman' };
secondText.color = { value: '008000' };

// Add the second paragraph with RTL text formatting
const secondParagraph = doc.body.appendParagraph();
const thirdText = secondParagraph.appendText('שלום עולם');
thirdText.language = { bidi: 'he-IL' };

// Add the third paragraph and apply superscript formatting
const thirdParagraph = doc.body.appendParagraph();
thirdParagraph.appendText('X');
const fifthText = thirdParagraph.appendText('2');
fifthText.verticalAlignment = 'superscript';

// Add the fourth paragraph and apply subscript formatting
const fourthParagraph = doc.body.appendParagraph();
fourthParagraph.appendText('m');
const seventhText = fourthParagraph.appendText('3');
seventhText.verticalAlignment = 'subscript';

// Save the document
const saveBytes = doc.saveSync();
writeFileSync('Sample.docx', Buffer.from(saveBytes));
{% endhighlight %}
{% endtabs %}
