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
import { WordDocument, ContentControlType } from '@syncfusion/ej2-docx';
// Creates a new Word document.
let document = WordDocument.create();

// Gets the first section.
let section = document.sections[0];

// Adds a rich text block content control.
let blockContentControl = section.body.addBlockContentControl(
  ContentControlType.RichText
);

// Adds a paragraph to the content control.
let paragraph = blockContentControl.body.appendParagraph();
paragraph.appendText('Block content control');

// Adds a table to the content control.
let table = blockContentControl.body.appendTable();
table.resetCells(2, 3);

// Adds a paragraph for the image.
let imageParagraph = blockContentControl.body.appendParagraph();

// Loads the image from the specified path.
const response = await fetch('Image.png');
let imageBytes = new Uint8Array(await response.arrayBuffer());

// Appends the image to the paragraph.
imageParagraph.appendImage(imageBytes, { width: 200, height: 100 });

// Saves the Word document.
document.save('Result.docx');
{% endhighlight %}
{% endtabs %}

### Inline Content Control

The following code example shows how to append an inline rich text content control to a paragraph and add a `TextRange` with custom text to it.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, ContentControlType, TextRange } from '@syncfusion/ej2-docx';
// Creates a new Word document.
let document = WordDocument.create();

// Gets the first paragraph in the document.
let paragraph = document.sections[0].body.paragraphs[0];

// Appends text to the paragraph.
paragraph.appendText('A new text is added to the paragraph. ');

// Adds an inline rich text content control.
let inlineContentControl = paragraph.appendInlineContentControl(
  ContentControlType.RichText
);

// Creates a new text range.
let textRange = new TextRange(document);
textRange.text = 'Inline content control';

// Adds the text range to the inline content control.
inlineContentControl.paragraphItems.add(textRange);

// Saves the Word document.
document.save('Result.docx');
{% endhighlight %}
{% endtabs %}

## Common properties of Content Control

A content control exposes a common set of properties through its `contentControlProperties` object. The example below sets the appearance, tag, title, color, and lock state of an inline rich text content control, and reads the resolved type.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, Color, ContentControlAppearance, ContentControlType, TextRange } from '@syncfusion/ej2-docx';
// Creates a new Word document.
let document = WordDocument.create();

// Gets the first paragraph in the document.
let paragraph = document.sections[0].body.paragraphs[0];

// Appends text to the paragraph.
paragraph.appendText('A new text is added to the paragraph. ');

// Adds an inline rich text content control.
let contentControl = paragraph.appendInlineContentControl(
  ContentControlType.RichText
);

// Creates a new text range.
let textRange = new TextRange(document);
textRange.text = 'Rich text content control.';

// Adds the text range to the content control.
contentControl.paragraphItems.add(textRange);

// Sets the common content control properties.
contentControl.contentControlProperties.appearance = ContentControlAppearance.Tags;
contentControl.contentControlProperties.tag = 'Rich Text';
contentControl.contentControlProperties.title = 'Text';
contentControl.contentControlProperties.color = Color.Magenta;

// Reads the resolved content control type.
let controlType = contentControl.contentControlProperties.type;

// Locks the content control and its content.
contentControl.contentControlProperties.lockContentControl = true;
contentControl.contentControlProperties.lockContents = true;

// Saves the Word document.
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
import { WordDocument, ContentControlType, TextRange } from '@syncfusion/ej2-docx';
// Creates a new Word document.
let document = WordDocument.create();

// Gets the first paragraph in the document.
let paragraph = document.sections[0].body.paragraphs[0];

// Appends text to the paragraph.
paragraph.appendText('A new text is added to the paragraph. ');

// Adds an inline rich text content control.
let richTextControl = paragraph.appendInlineContentControl(
  ContentControlType.RichText
);

// Creates a new text range.
let textRange = new TextRange(document);
textRange.text = 'Rich text content control.';

// Adds the text range to the rich text content control.
richTextControl.paragraphItems.add(textRange);

// Saves the Word document.
document.save('Result.docx');
{% endhighlight %}
{% endtabs %}

### Plain Text

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, ContentControlType, TextRange } from '@syncfusion/ej2-docx';
// Creates a new Word document.
let document = WordDocument.create();

// Gets the first paragraph in the document.
let paragraph = document.sections[0].body.paragraphs[0];

// Appends text to the paragraph.
paragraph.appendText('A new text is added to the paragraph. ');

// Adds an inline plain text content control.
let plainTextControl = paragraph.appendInlineContentControl(
  ContentControlType.Text
);

// Creates a new text range.
let textRange = new TextRange(document);
textRange.text = 'Plain text content control.';

// Adds the text range to the plain text content control.
plainTextControl.paragraphItems.add(textRange);

// Saves the Word document.
document.save('Result.docx');
{% endhighlight %}
{% endtabs %}

### Check Box

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, ContentControlType } from '@syncfusion/ej2-docx';
// Creates a new Word document.
let document = WordDocument.create();

// Gets the first paragraph in the document.
let paragraph = document.sections[0].body.paragraphs[0];

// Appends text to the paragraph.
paragraph.appendText('A new text is added to the paragraph. ');

// Adds an inline check box content control.
let checkBox = paragraph.appendInlineContentControl(
  ContentControlType.CheckBox
);

// Sets the check box as checked.
checkBox.contentControlProperties.isChecked = true;

// Saves the Word document.
document.save('Result.docx');
{% endhighlight %}
{% endtabs %}

### Date Picker

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, CalendarType, ContentControlType, LocaleIDs, TextRange } from '@syncfusion/ej2-docx';
// Creates a new Word document.
let document = WordDocument.create();

// Gets the first paragraph in the document.
let paragraph = document.sections[0].body.paragraphs[0];

// Appends text to the paragraph.
paragraph.appendText('Select Date: ');

// Adds a date picker content control.
let datePicker = paragraph.appendInlineContentControl(ContentControlType.Date);

// Creates a new text range.
let textRange = new TextRange(document);
textRange.text = new Date().toLocaleDateString('en-US');

// Adds the text range to the date picker content control.
datePicker.paragraphItems.add(textRange);

// Sets the calendar type.
datePicker.contentControlProperties.dateCalendarType = CalendarType.Gregorian;

// Sets the date display format.
datePicker.contentControlProperties.dateDisplayFormat = 'M/d/yyyy';

// Sets the date display locale.
datePicker.contentControlProperties.dateDisplayLocale = LocaleIDs.en_US;

// Saves the Word document.
document.save('Result.docx');
{% endhighlight %}
{% endtabs %}

### Drop-down List and Combo Box

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, ContentControlListItem, ContentControlType, TextRange } from '@syncfusion/ej2-docx';
// Creates a new Word document.
let document = WordDocument.create();

// Gets the first paragraph in the document.
let paragraph = document.sections[0].body.paragraphs[0];

// Appends text to the paragraph.
paragraph.appendText('Choose your platform: ');

// Adds a drop-down list content control.
let dropdown = paragraph.appendInlineContentControl(
  ContentControlType.DropDownList
);

// Creates a placeholder text range.
let dropdownText = new TextRange(document);
dropdownText.text = 'Choose an item';

// Adds the placeholder text to the drop-down list.
dropdown.paragraphItems.add(dropdownText);

// Creates the first drop-down list item.
let item1 = new ContentControlListItem();
item1.displayText = 'ASP.NET MVC';
item1.value = '1';

// Adds the first item to the drop-down list.
dropdown.contentControlProperties.contentControlListItems.add(item1);

// Creates the second drop-down list item.
let item2 = new ContentControlListItem();
item2.displayText = 'Windows Forms';
item2.value = '2';

// Adds the second item to the drop-down list.
dropdown.contentControlProperties.contentControlListItems.add(item2);

// Creates the third drop-down list item.
let item3 = new ContentControlListItem();
item3.displayText = 'WPF';
item3.value = '3';

// Adds the third item to the drop-down list.
dropdown.contentControlProperties.contentControlListItems.add(item3);

// Adds a new paragraph.
let paragraph2 = document.sections[0].body.appendParagraph();

// Appends text to the paragraph.
paragraph2.appendText('Choose the conversion: ');

// Adds a combo box content control.
let comboBox = paragraph2.appendInlineContentControl(ContentControlType.ComboBox);

// Creates a placeholder text range.
let comboText = new TextRange(document);
comboText.text = 'Choose an item';

// Adds the placeholder text to the combo box.
comboBox.paragraphItems.add(comboText);

// Creates the first combo box item.
let item4 = new ContentControlListItem();
item4.displayText = 'Word to HTML';
item4.value = '1';

// Adds the first item to the combo box.
comboBox.contentControlProperties.contentControlListItems.add(item4);

// Creates the second combo box item.
let item5 = new ContentControlListItem();
item5.displayText = 'Word to Image';
item5.value = '2';

// Adds the second item to the combo box.
comboBox.contentControlProperties.contentControlListItems.add(item5);

// Creates the third combo box item.
let item6 = new ContentControlListItem();
item6.displayText = 'Word to PDF';
item6.value = '3';

// Adds the third item to the combo box.
comboBox.contentControlProperties.contentControlListItems.add(item6);

// Saves the Word document.
document.save('Result.docx');
{% endhighlight %}
{% endtabs %}

## Edit Content Control

You can edit the contents of an inline content control by iterating the document and replacing the text inside the matching control. The following example walks every section, paragraph, table, and block content control in the document, looks for an inline content control with the title `ReplaceText`, and replaces its text with `Hello World` while preserving the original character format.

{% tabs %}
{% highlight typescript tabtitle="Driver" %}
import { WordDocument, BlockContentControl, BodyItemCollection, InlineContentControl, Paragraph, ParagraphItemCollection, Table } from '@syncfusion/ej2-docx';

// Opens an existing Word document.
let document = WordDocument.open(data);

// Iterates through all sections in the document.
for (let section of document.sections) {
  // Iterates through the body items in the current section.
  iterateBodyItems(section.body.items);
}

// Saves the Word document.
document.save('Result.docx');
{% endhighlight %}
{% highlight typescript tabtitle="iterateBodyItems" %}
import {
  BlockContentControl,
  BodyItemCollection,
  Paragraph,
  Table,
} from '@syncfusion/ej2-docx';

// Iterates through the body items collection.
function iterateBodyItems(items: BodyItemCollection): void {
  // Iterates through each body item.
  for (let item of items) {
    // Processes paragraph items.
    if (item instanceof Paragraph) {
      iterateParagraph(item);
    }
    // Processes table items.
    else if (item instanceof Table) {
      iterateTable(item);
    }
    // Processes block content controls recursively.
    else if (item instanceof BlockContentControl) {
      iterateBodyItems(item.body.items);
    }
  }
}
{% endhighlight %}
{% highlight typescript tabtitle="iterateTable" %}
import { BodyItemCollection, Table } from '@syncfusion/ej2-docx';

// Iterates through all rows in the table.
function iterateTable(table: Table): void {
  // Iterates through each row.
  for (let row of table.rows) {
    // Iterates through each cell in the row.
    for (let cell of row.cells) {
      // Iterates through the body items in the cell.
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

// Iterates through the paragraph items in the specified paragraph.
function iterateParagraph(paragraph: Paragraph): void {
  iterateParagraphItems(paragraph.items);
}

// Iterates through the paragraph item collection.
function iterateParagraphItems(items: ParagraphItemCollection): void {
  // Iterates through each paragraph item.
  for (let item of items) {
    // Processes inline content controls.
    if (item instanceof InlineContentControl) {
      // Checks whether the content control title matches the specified value.
      if (item.contentControlProperties.title === 'ReplaceText') {
        // Replaces the content of the inline content control.
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

// Replaces the content of the specified inline content control with new text.
function replaceTextWithInlineContentControl(
  text: string,
  inlineContentControl: InlineContentControl
): void {
  let characterFormat: CharacterFormat | undefined;

  // Captures the character format from the first text range.
  for (let item of inlineContentControl.paragraphItems) {
    if (item instanceof TextRange) {
      characterFormat = item.characterFormat;
      break;
    }
  }

  // Clears the existing content from the inline content control.
  inlineContentControl.paragraphItems.clear();

  // Creates a new text range with the replacement text.
  let textRange = new TextRange(inlineContentControl.document);
  textRange.text = text;

  // Applies the original character format to the new text range.
  if (characterFormat) {
    textRange.applyCharacterFormat(characterFormat);
  }

  // Adds the new text range to the inline content control.
  inlineContentControl.paragraphItems.add(textRange);
}
{% endhighlight %}
{% endtabs %}
