---
title: Working with Fields in JavaScript Word | Syncfusion
description: Learn how to format fields, get field codes, and add IF and merge fields in a Word document using the Syncfusion JavaScript Word library.
platform: document-processing
control: Word Library
documentation: UG
---

# Working with Fields in JavaScript Word Library

Fields are placeholders in a Word document that store dynamic values such as page numbers, conditional text, merge data, and hyperlinks. In `@syncfusion/ej2-docx`, a field is represented by a `Field` instance (or a specialized type such as `IfField` or `MergeField`) together with field marks that separate the field code from the field result.

N> For hyperlink authoring helpers (`appendHyperlink`, `HyperlinkType`), see [Working with Hyperlinks](./Working-with-Hyperlinks.md).

## Formatting fields

After you insert a field, the paragraph items between the field begin mark and the field end mark include the field result text ranges. You can format those result runs—for example, set a smaller font size on the page-number result.

The following code example illustrates how to format the result of a `PAGE` field.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {
  FieldMark,
  FieldMarkType,
  FieldType,
  TextRange,
  WordDocument
} from '@syncfusion/ej2-docx';

// Creates a new Word document
let document = WordDocument.create();

// Gets the last section of the document
let section = document.lastSection;

// Gets the last paragraph of the section (or append one if needed)
let paragraph = document.lastParagraph;
if (paragraph == null) {
  paragraph = section.body.appendParagraph();
}

// Appends text before the field
paragraph.appendText('Page number: ');

// Inserts a PAGE field and keeps the insertion index
let fieldIndex = paragraph.items.count;
paragraph.appendField('Page', FieldType.Page);

// Formats text ranges in the field result (between the field and its end mark)
for (let i = fieldIndex + 1; i < paragraph.items.count; i++) {
  let item = paragraph.items[i];
  if (item instanceof TextRange) {
    item.characterFormat.fontSize = 6;
  } else if (item instanceof FieldMark && item.fieldMarkType === FieldMarkType.End) {
    break;
  }
}

// Saves the Word document to disk
document.save('FormattingField.docx');
{% endhighlight %}
{% endtabs %}

## IF field

An IF field evaluates a comparison and shows one of two results. Insert the field with `FieldType.If`, then assign the full IF expression to `fieldCode`.

The following code example illustrates how to add IF fields that compare text or numeric values.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { FieldType, WordDocument } from '@syncfusion/ej2-docx';

// Creates a new Word document
let document = WordDocument.create();

// Gets the last paragraph (creates the default body paragraph when present)
let paragraph = document.lastParagraph;
if (paragraph == null) {
  paragraph = document.lastSection.body.appendParagraph();
}

// Appends a description and an IF field that compares text
paragraph.appendText(
  'If field that compares a string value and displays the result.'
);
paragraph = document.lastSection.body.appendParagraph();
let ifField = paragraph.appendField('If', FieldType.If);
// Expression: IF "100" = "100" "correct" "not correct"
ifField.fieldCode = 'IF "100" = "100" "correct" "not correct"';

// Appends another IF field that compares numbers
paragraph = document.lastSection.body.appendParagraph();
paragraph.appendText(
  'If field that compares a number value and displays the result.'
);
paragraph = document.lastSection.body.appendParagraph();
let ifField2 = paragraph.appendField('If', FieldType.If);
// Expression: IF 100 >= 50 "correct" "not correct"
ifField2.fieldCode = 'IF 100 >= 50 "correct" "not correct"';

// Saves the Word document to disk
document.save('IfField.docx');
{% endhighlight %}
{% endtabs %}

## Merge field

Merge fields are placeholders replaced with data source values during mail merge. Insert them with `FieldType.MergeField`. The field name you pass to `appendField` becomes the merge field name in the document.

The following code example illustrates how to add merge fields.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { FieldType, WordDocument } from '@syncfusion/ej2-docx';

// Creates a new Word document
let document = WordDocument.create();

// Gets the last paragraph
let paragraph = document.lastParagraph;
if (paragraph == null) {
  paragraph = document.lastSection.body.appendParagraph();
}

// Inserts merge fields for Name and Address
paragraph.appendField('Name', FieldType.MergeField);
paragraph = document.lastSection.body.appendParagraph();
paragraph.appendField('Address', FieldType.MergeField);

// Saves the Word document to disk
document.save('MergeField.docx');
{% endhighlight %}
{% endtabs %}