---
title: Content Controls in JavaScript Word | Syncfusion
description: Create and edit rich text, plain text, check box, date picker, drop-down, combo box, block, and inline content controls in Word documents.
platform: document-processing
control: Word Library
documentation: ug
keywords: javascript, word, content control, block, inline, rich text, plain text, check box, date picker, drop-down list, combo box
---

# Content Controls in JavaScript Word Library

Content controls are predefined regions of a Word document that act as containers for specific kinds of content. They help authors add structured, predictable content (such as a date, a drop-down selection, a picture, or a rich text block) and let you lock or tag the content so it can be identified, restricted, or filled in by other users or systems.

The JavaScript Word library supports the following content control types:

* **Block content control**: a block-level region (paragraphs, tables, pictures) that lives in a text body.
* **Inline content control**: an inline region that lives inside a paragraph alongside text runs, fields, and shapes.
* **Rich text**: an inline control that can contain formatted text, images, and other inline content.
* **Plain text**: an inline control that contains unformatted text.
* **Check box**: an inline control that renders as a check box.
* **Date picker**: an inline control that opens a calendar when clicked.
* **Drop-down list**: an inline control that lets the user pick from a fixed list.
* **Combo box**: an inline control that combines a drop-down list with a free-text input.

The following topics use `@syncfusion/ej2-docx` to add and edit each kind of content control.

## What is Content Control?

A content control is a structured document tag (SDT) that wraps a region of content. Block content controls sit in a text body, while inline content controls sit inside a paragraph.

### Block Content Control

The following code example shows how to add a rich text block content control to a section, append a paragraph and a table inside it, and add an image.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { readFileSync } from 'node:fs';
import { ContentControlType, WordDocument } from '@syncfusion/ej2-docx';

let document = WordDocument.create();

let section = document.sections[0];
let blockContentControl = section.body.addBlockContentControl(
  ContentControlType.RichText
);

let paragraph = blockContentControl.body.appendParagraph();
paragraph.appendText('Block content control');

let table = blockContentControl.body.appendTable();
table.resetCells(2, 3);

let imageParagraph = blockContentControl.body.appendParagraph();
const response = await fetch('Image.png');
let imageBytes = new Uint8Array(await response.arrayBuffer());

imageParagraph.appendImage(imageBytes, { width: 200, height: 100 });

// Saves the Word document
document.save('Result.docx');
{% endhighlight %}
{% endtabs %}

### Inline Content Control

The following code example shows how to append an inline rich text content control to a paragraph and add a `TextRange` with custom text to it.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {
  ContentControlType,
  TextRange,
  WordDocument,
} from '@syncfusion/ej2-docx';

let document = WordDocument.create();
let paragraph = document.lastParagraph;
paragraph.appendText('A new text is added to the paragraph. ');

let inlineContentControl = paragraph.appendInlineContentControl(
  ContentControlType.RichText
);

let textRange = new TextRange(document);
textRange.text = 'Inline content control';
inlineContentControl.paragraphItems.add(textRange);

document.save('Result.docx');
{% endhighlight %}
{% endtabs %}

## Common properties of Content Control

A content control exposes a common set of properties through its `contentControlProperties` object. The example below sets the appearance, tag, title, color, and lock state of an inline rich text content control, and reads the resolved type.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {
  Color,
  ContentControlAppearance,
  ContentControlType,
  TextRange,
  WordDocument,
} from '@syncfusion/ej2-docx';

let document = WordDocument.create();
let paragraph = document.lastParagraph;
paragraph.appendText('A new text is added to the paragraph. ');

let contentControl = paragraph.appendInlineContentControl(
  ContentControlType.RichText
);

let textRange = new TextRange(document);
textRange.text = 'Rich text content control.';
contentControl.paragraphItems.add(textRange);

// Sets the common properties
contentControl.contentControlProperties.appearance = ContentControlAppearance.Tags;
contentControl.contentControlProperties.tag = 'Rich Text';
contentControl.contentControlProperties.title = 'Text';
contentControl.contentControlProperties.color = Color.Magenta;

// Reads the resolved control type
let controlType = contentControl.contentControlProperties.type;

// Locks the content control and its content
contentControl.contentControlProperties.lockContentControl = true;
contentControl.contentControlProperties.lockContents = true;

document.save('Result.docx');
{% endhighlight %}
{% endtabs %}

The available common properties are:

* **Title**: the human-readable title of the control.
* **Tag**: a programmatic identifier used to look up the control from external data.
* **Appearance**: how the control is rendered in the document (`BoundingBox`, `Tags`, or `Hidden`).
* **Color**: the accent color of the bounding box or tag.
* **Temporary**: when `true`, the control is removed from the document as soon as its content is edited.
* **Lock Contents**: when `true`, the content inside the control cannot be edited.
* **Lock Content Control**: when `true`, the control itself cannot be deleted.

### Example – Content Control Common properties

The snippet in the previous section is the consolidated example for the common properties: it sets every property listed above on a single inline content control.

## Types of Content Controls

The JavaScript Word library supports five inline content control types in addition to the block content control. The following examples show how to add each one.

### Rich Text

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {
  ContentControlType,
  TextRange,
  WordDocument,
} from '@syncfusion/ej2-docx';

let document = WordDocument.create();
let paragraph = document.lastParagraph;
paragraph.appendText('A new text is added to the paragraph. ');

let richTextControl = paragraph.appendInlineContentControl(
  ContentControlType.RichText
);

let textRange = new TextRange(document);
textRange.text = 'Rich text content control.';
richTextControl.paragraphItems.add(textRange);

document.save('Result.docx');
{% endhighlight %}
{% endtabs %}

### Plain Text

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {
  ContentControlType,
  TextRange,
  WordDocument,
} from '@syncfusion/ej2-docx';

let document = WordDocument.create();
let paragraph = document.lastParagraph;
paragraph.appendText('A new text is added to the paragraph. ');

let plainTextControl = paragraph.appendInlineContentControl(
  ContentControlType.Text
);

let textRange = new TextRange(document);
textRange.text = 'Plain text content control.';
plainTextControl.paragraphItems.add(textRange);

document.save('Result.docx');
{% endhighlight %}
{% endtabs %}

### Check Box

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { ContentControlType, WordDocument } from '@syncfusion/ej2-docx';

let document = WordDocument.create();
let paragraph = document.lastParagraph;
paragraph.appendText('A new text is added to the paragraph. ');

let checkBox = paragraph.appendInlineContentControl(
  ContentControlType.CheckBox
);
checkBox.contentControlProperties.isChecked = true;

document.save('Result.docx');
{% endhighlight %}
{% endtabs %}

### Date Picker

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {
  CalendarType,
  ContentControlType,
  LocaleIDs,
  TextRange,
  WordDocument,
} from '@syncfusion/ej2-docx';

let document = WordDocument.create();
let paragraph = document.lastParagraph;
paragraph.appendText('Select Date: ');

let datePicker = paragraph.appendInlineContentControl(ContentControlType.Date);

let textRange = new TextRange(document);
textRange.text = new Date().toLocaleDateString('en-US');
datePicker.paragraphItems.add(textRange);

datePicker.contentControlProperties.dateCalendarType = CalendarType.Gregorian;
datePicker.contentControlProperties.dateDisplayFormat = 'M/d/yyyy';
datePicker.contentControlProperties.dateDisplayLocale = LocaleIDs.en_US;

document.save('Result.docx');
{% endhighlight %}
{% endtabs %}

### Drop-down List and Combo Box

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {
  ContentControlListItem,
  ContentControlType,
  TextRange,
  WordDocument,
} from '@syncfusion/ej2-docx';

let document = WordDocument.create();
let paragraph = document.lastParagraph;
paragraph.appendText('Choose your platform: ');

let dropdown = paragraph.appendInlineContentControl(
  ContentControlType.DropDownList
);

let dropdownText = new TextRange(document);
dropdownText.text = 'Choose an item';
dropdown.paragraphItems.add(dropdownText);

let item1 = new ContentControlListItem();
item1.displayText = 'ASP.NET MVC';
item1.value = '1';
dropdown.contentControlProperties.contentControlListItems.add(item1);

let item2 = new ContentControlListItem();
item2.displayText = 'Windows Forms';
item2.value = '2';
dropdown.contentControlProperties.contentControlListItems.add(item2);

let item3 = new ContentControlListItem();
item3.displayText = 'WPF';
item3.value = '3';
dropdown.contentControlProperties.contentControlListItems.add(item3);

let paragraph2 = document.sections[0].body.appendParagraph();
paragraph2.appendText('Choose the conversion: ');

let comboBox = paragraph2.appendInlineContentControl(ContentControlType.ComboBox);

let comboText = new TextRange(document);
comboText.text = 'Choose an item';
comboBox.paragraphItems.add(comboText);

let item4 = new ContentControlListItem();
item4.displayText = 'Word to HTML';
item4.value = '1';
comboBox.contentControlProperties.contentControlListItems.add(item4);

let item5 = new ContentControlListItem();
item5.displayText = 'Word to Image';
item5.value = '2';
comboBox.contentControlProperties.contentControlListItems.add(item5);

let item6 = new ContentControlListItem();
item6.displayText = 'Word to PDF';
item6.value = '3';
comboBox.contentControlProperties.contentControlListItems.add(item6);

document.save('Result.docx');
{% endhighlight %}
{% endtabs %}

## Edit Content Control

You can edit the contents of an inline content control by iterating the document and replacing the text inside the matching control. The following example walks every section, paragraph, table, and block content control in the document, looks for an inline content control with the title `ReplaceText`, and replaces its text with `Hello World` while preserving the original character format.

{% tabs %}
{% highlight typescript tabtitle="Driver" %}
import {
  BlockContentControl,
  BodyItemCollection,
  InlineContentControl,
  Paragraph,
  ParagraphItemCollection,
  Table,
  WordDocument,
} from '@syncfusion/ej2-docx';

// Open an existing Word document
let document = WordDocument.open('Input.docx');

for (let section of document.sections) {
  iterateBodyItems(section.body.items);
}

document.save('Result.docx');
{% endhighlight %}
{% highlight typescript tabtitle="iterateBodyItems" %}
import {
  BlockContentControl,
  BodyItemCollection,
  Paragraph,
  Table,
} from '@syncfusion/ej2-docx';

function iterateBodyItems(items: BodyItemCollection): void {
  for (let item of items) {
    if (item instanceof Paragraph) {
      iterateParagraph(item);
    } else if (item instanceof Table) {
      iterateTable(item);
    } else if (item instanceof BlockContentControl) {
      iterateBodyItems(item.body.items);
    }
  }
}
{% endhighlight %}
{% highlight typescript tabtitle="iterateTable" %}
import { BodyItemCollection, Table } from '@syncfusion/ej2-docx';

function iterateTable(table: Table): void {
  for (let row of table.rows) {
    for (let cell of row.cells) {
      iterateBodyItems(cell.items);
    }
  }
}
{% endhighlight %}
{% highlight typescript tabtitle="iterateParagraph" %}
import {
  InlineContentControl,
  Paragraph,
  ParagraphItemCollection,
} from '@syncfusion/ej2-docx';

function iterateParagraph(paragraph: Paragraph): void {
  iterateParagraphItems(paragraph.items);
}

function iterateParagraphItems(items: ParagraphItemCollection): void {
  for (let item of items) {
    if (item instanceof InlineContentControl) {
      if (item.contentControlProperties.title === 'ReplaceText') {
        replaceTextWithInlineContentControl('Hello World', item);
      }
    }
  }
}
{% endhighlight %}
{% highlight typescript tabtitle="replaceTextWithInlineContentControl" %}
import {
  CharacterFormat,
  InlineContentControl,
  TextRange,
  WordDocument,
} from '@syncfusion/ej2-docx';

function replaceTextWithInlineContentControl(
  text: string,
  inlineContentControl: InlineContentControl
): void {
  let characterFormat: CharacterFormat | undefined;

  // Capture the first text range's character format so the replacement matches
  for (let item of inlineContentControl.paragraphItems) {
    if (item instanceof TextRange) {
      characterFormat = item.characterFormat;
      break;
    }
  }

  // Replace the existing content with the new text
  inlineContentControl.paragraphItems.clear();

  let textRange = new TextRange(inlineContentControl.document);
  textRange.text = text;

  if (characterFormat) {
    textRange.applyCharacterFormat(characterFormat);
  }

  inlineContentControl.paragraphItems.add(textRange);
}
{% endhighlight %}
{% endtabs %}
