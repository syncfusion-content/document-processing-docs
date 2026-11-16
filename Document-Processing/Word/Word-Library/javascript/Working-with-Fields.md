---
title: Working with Fields in JavaScript Word | Syncfusion
description: Learn how to add, format, update fields, get field codes, and work with IF, merge, and sequence fields in a Word document using the JavaScript Word library.
platform: document-processing
control: Word Library
documentation: UG
---

# Working with Fields in JavaScript Word Library

Fields are placeholders in a Word document that store dynamic values such as page numbers, conditional text, merge data, and hyperlinks. In `@syncfusion/ej2-docx`, a field is represented by a `Field` instance (or a specialized type such as `IfField` or `MergeField`) together with field marks that separate the field code from the field result.

N> For hyperlink authoring helpers (`appendHyperlink`, `HyperlinkType`), see [Working with Hyperlinks](./Working-with-Hyperlinks.md).

## Adding fields

You can add a field to a Word document by using the `appendField` method of the `Paragraph` class.

The following code example explains how to add a field to the Word document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, FieldType } from '@syncfusion/ej2-docx';

const document = WordDocument.create();

let section = document.sections[0];
let paragraph = section.body.appendParagraph();
paragraph.appendText("Today's Date: ");
let field = paragraph.appendField('Date', FieldType.FieldDate);
field.fieldCode = 'DATE \\@ "M/d/yyyy" ';
document.updateDocumentFields();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
const document = ej.docx.WordDocument.create();

let section = document.sections[0];
let paragraph = section.body.appendParagraph();
paragraph.appendText("Today's Date: ");
let field = paragraph.appendField('Date', ej.docx.FieldType.FieldDate);
field.fieldCode = 'DATE \\@ "M/d/yyyy" ';
document.updateDocumentFields();
{% endhighlight %}
{% endtabs %}

## Formatting fields

You can format the field instances added to the Word document by iterating through the paragraph items from the field start to the field end.

The following code example explains how to format a field in a Word document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, FieldMark, FieldMarkType, FieldType, TextRange } from '@syncfusion/ej2-docx';

// Loads an existing Word document
const document = WordDocument.create();
// Adds new paragraph to the section
let paragraph = document.lastParagraph;
// Add Page field
const field = paragraph.appendField("Page", FieldType.Page);
const fieldIndex = paragraph.items.indexOf(field);
for (let i = fieldIndex + 1; i < paragraph.items.count - 1; i++)
{
    const currentParaItem = paragraph.items[i];
    if (currentParaItem instanceof TextRange)
        // Sets character format for text ranges 
        currentParaItem.characterFormat.fontSize = 6;
    else if (currentParaItem instanceof FieldMark && currentParaItem.fieldMarkType == FieldMarkType.End)
        break;
}
document.save('FormattingField.docx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Loads an existing Word document
const document = ej.docx.WordDocument.create();
// Adds new paragraph to the section
let paragraph = document.lastParagraph;
// Add Page field
const field = paragraph.appendField("Page", ej.docx.FieldType.Page);
const fieldIndex = paragraph.items.indexOf(field);
for (let i = fieldIndex + 1; i < paragraph.items.count - 1; i++)
{
    const currentParaItem = paragraph.items[i];
    if (currentParaItem instanceof ej.docx.TextRange)
        // Sets character format for text ranges 
        currentParaItem.characterFormat.fontSize = 6;
    else if (currentParaItem instanceof ej.docx.FieldMark && currentParaItem.fieldMarkType == ej.docx.FieldMarkType.End)
        break;
}
document.save('FormattingField.docx');
{% endhighlight %}
{% endtabs %}

## Get Field Code

You can get the field code of a specific field using its `fieldCode` property.

The following code example explains how to get the field code of a specific field in a Word document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, Field } from '@syncfusion/ej2-docx';

// Loads an existing Word document
const document = WordDocument.open("Template (7).docx");
// Access the field in the first paragraph of the first section.
const field = document.sections[0]!.paragraphs[0]!.items[2] as Field;
// Get and print the field code.
const fieldCode = field.fieldCode;
console.log(fieldCode);
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Loads an existing Word document
const document = ej.docx.WordDocument.open("Template (7).docx");
// Access the field in the first paragraph of the first section.
const field = document.sections[0].paragraphs[0].items[2];
// Get and print the field code.
const fieldCode = field.fieldCode;
console.log(fieldCode);
{% endhighlight %}
{% endtabs %}

## If Field

An IF field evaluates a comparison and shows one of two results based on the evaluation.

The following code example explains how to add IF fields that use string and numeric expressions to a Word document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, FieldType } from '@syncfusion/ej2-docx';

// Loads an existing Word document
const document = WordDocument.create();
const section = document.lastSection;
let paragraph = document.lastParagraph;
paragraph.appendText("If field which uses string of characters in expression");
paragraph = section.body.appendParagraph();
// Creates the new instance of IF field
let field = paragraph.appendField("If", FieldType.If);
// Specifies the expression, true and false statement in field code
field.fieldCode = "IF \"True\" = \"True\" \"The given statement is Correct\" \"The given statement is Wrong\"";
paragraph = section.body.appendParagraph();
paragraph.appendText("If field which uses numbers in expression");
paragraph = section.body.appendParagraph();
// Creates the new instance of IF field
field = paragraph.appendField("If", FieldType.If);
// Specifies the expression, true and false statement in field code
field.fieldCode = "IF 100 >= 1000 \"The given statement is Correct\" \"The given statement is Wrong\"";
document.save('IfField.docx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Loads an existing Word document
const document = ej.docx.WordDocument.create();
const section = document.lastSection;
let paragraph = document.lastParagraph;
paragraph.appendText("If field which uses string of characters in expression");
paragraph = section.body.appendParagraph();
// Creates the new instance of IF field
let field = paragraph.appendField("If", ej.docx.FieldType.If);
// Specifies the expression, true and false statement in field code
field.fieldCode = "IF \"True\" = \"True\" \"The given statement is Correct\" \"The given statement is Wrong\"";
paragraph = section.body.appendParagraph();
paragraph.appendText("If field which uses numbers in expression");
paragraph = section.body.appendParagraph();
// Creates the new instance of IF field
field = paragraph.appendField("If", ej.docx.FieldType.If);
// Specifies the expression, true and false statement in field code
field.fieldCode = "IF 100 >= 1000 \"The given statement is Correct\" \"The given statement is Wrong\"";
document.save('IfField.docx');
{% endhighlight %}
{% endtabs %}

## Merge Field

Merge fields are placeholders that are replaced with data source values during mail merge.

The following code example explains how to add merge fields to a Word document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, FieldType } from '@syncfusion/ej2-docx';

// Loads an existing Word document
const document = WordDocument.create();
const section = document.lastSection;
let paragraph = document.lastParagraph;
paragraph.appendText("Merge fields:");
paragraph = section.body.appendParagraph();
let field = paragraph.appendField("Name", FieldType.MergeField);
paragraph = section.body.appendParagraph();
field = paragraph.appendField("Address", FieldType.MergeField);
document.save('MergeField.docx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Loads an existing Word document
const document = ej.docx.WordDocument.create();
const section = document.lastSection;
let paragraph = document.lastParagraph;
paragraph.appendText("Merge fields:");
paragraph = section.body.appendParagraph();
let field = paragraph.appendField("Name", ej.docx.FieldType.MergeField);
paragraph = section.body.appendParagraph();
field = paragraph.appendField("Address", ej.docx.FieldType.MergeField);
document.save('MergeField.docx');
{% endhighlight %}
{% endtabs %}

## Updating fields

Field updating engine calculates the resultant value based on the field code information and updates the field result with a new value.

The following code example explains how to update the fields present in a Word document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';
import { readFileSync } from 'fs';

const fileBytes = readFileSync('Date.docx');
const document = WordDocument.load(fileBytes);
document.updateDocumentFields();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
const { readFileSync } = require('fs');

const fileBytes = readFileSync('Date.docx');
const document = ej.docx.WordDocument.load(fileBytes);
document.updateDocumentFields();
{% endhighlight %}
{% endtabs %}

## Sequence field

You can use the Sequence (SEQ) field to automatically number chapters, tables, figures, and other items in a Word document. When you add, delete, or move an item in a Word document (along with SEQ fields), you can update the remaining SEQ fields with a new sequence.

### Apply number formatting

You can apply the number format for a sequence field using the `numberFormat` property.

The following code example shows how to apply Roman numeral formatting to sequence fields.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, FieldType, SeqField, CaptionNumberingFormat, Paragraph } from '@syncfusion/ej2-docx';

const document = WordDocument.create();
let section = document.sections[0];
// Item 1
let paragraph = section.body.appendParagraph();
let field = paragraph.appendField('List', FieldType.FieldSequence);
field.fieldCode = "SEQ items";
paragraph.appendText('.Item1');

// Item 2
paragraph = section.body.appendParagraph();
field = paragraph.appendField('List', FieldType.FieldSequence);
field.fieldCode = "SEQ items";
paragraph.appendText('.Item2');

// Item 3
paragraph = section.body.appendParagraph();
field = paragraph.appendField('List', FieldType.FieldSequence);
field.fieldCode = "SEQ items";
paragraph.appendText('.Item3');

// Access SEQ fields and apply Roman format
let seqField = (document.sections[0].body.items[1] as Paragraph).items[0] as SeqField;
seqField.numberFormat = CaptionNumberingFormat.UpperCaseRoman;

seqField = (document.sections[0].body.items[2] as Paragraph).items[0] as SeqField;
seqField.numberFormat = CaptionNumberingFormat.UpperCaseRoman;

seqField = (document.sections[0].body.items[3] as Paragraph).items[0] as SeqField;
seqField.numberFormat = CaptionNumberingFormat.UpperCaseRoman;
// Update all fields
document.updateDocumentFields();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
const document = ej.docx.WordDocument.create();
let section = document.sections[0];
// Item 1
let paragraph = section.body.appendParagraph();
let field = paragraph.appendField('List', ej.docx.FieldType.FieldSequence);
field.fieldCode = "SEQ items";
paragraph.appendText('.Item1');

// Item 2
paragraph = section.body.appendParagraph();
field = paragraph.appendField('List', ej.docx.FieldType.FieldSequence);
field.fieldCode = "SEQ items";
paragraph.appendText('.Item2');

// Item 3
paragraph = section.body.appendParagraph();
field = paragraph.appendField('List', ej.docx.FieldType.FieldSequence);
field.fieldCode = "SEQ items";
paragraph.appendText('.Item3');

// Access SEQ fields and apply Roman format
let seqField = document.sections[0].body.items[1].items[0];
seqField.numberFormat = ej.docx.CaptionNumberingFormat.UpperCaseRoman;

seqField = document.sections[0].body.items[2].items[0];
seqField.numberFormat = ej.docx.CaptionNumberingFormat.UpperCaseRoman;

seqField = document.sections[0].body.items[3].items[0];
seqField.numberFormat = ej.docx.CaptionNumberingFormat.UpperCaseRoman;
// Update all fields
document.updateDocumentFields();
{% endhighlight %}
{% endtabs %}

### Repeat nearest number

You can insert the closest preceding sequence number using the `repeatNearestNumber` property.

For example, if you need to display the total number of products in a page, you can repeat the closest preceding sequence number which was used for products.

The following code example shows how to repeat the closest preceding sequence number in a Word document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, FieldType, SeqField, Paragraph, ParagraphAlignment } from '@syncfusion/ej2-docx';
import { readFileSync } from 'fs';

// Creates a Word document
const document = WordDocument.create();

// Adds a new section
const section = document.sections[0];

// Header
let paragraph = section.headersFooters.oddHeader.appendParagraph();
paragraph.paragraphFormat.horizontalAlignment = ParagraphAlignment.Right;

paragraph.appendText('Total No. of Products: ');
const headerSeqField = paragraph.appendField(
    '"Product count"',
    FieldType.FieldSequence
);

// Title
paragraph = section.body.appendParagraph();
paragraph.appendText('Adventure Works Cycles');

// Product Overview
paragraph = section.body.appendParagraph();
paragraph.appendText('Product Overview');

// Table
const table = section.body.appendTable();
table.resetCells(3, 2);

let imageBytes = new Uint8Array(readFileSync('Mountain-200.png'));

// First row
table.rows[0].cells[0].appendParagraph().appendImage(imageBytes);

table.rows[0].cells[1].appendParagraph().appendText('Mountain-200');

paragraph = table.rows[0].cells[1].appendParagraph();
paragraph.appendText('Product No: ');
paragraph.appendField('"Product count"', FieldType.FieldSequence);

table.rows[0].cells[1].appendParagraph().appendText('Size: 38');
table.rows[0].cells[1].appendParagraph().appendText('Weight: 25');
table.rows[0].cells[1].appendParagraph().appendText('Price: $2,294.99');

// Second row
table.rows[1].cells[0].appendParagraph().appendText('Mountain-300');

paragraph = table.rows[1].cells[0].appendParagraph();
paragraph.appendText('Product No: ');
paragraph.appendField('"Product count"', FieldType.FieldSequence);

imageBytes = new Uint8Array(readFileSync('Mountain-300.png'));
table.rows[1].cells[1].appendParagraph().appendImage(imageBytes);

// Third row
imageBytes = new Uint8Array(readFileSync('Road-550.png'));
table.rows[2].cells[0].appendParagraph().appendImage(imageBytes);

table.rows[2].cells[1].appendParagraph().appendText('Road-150');

paragraph = table.rows[2].cells[1].appendParagraph();
paragraph.appendText('Product No: ');
paragraph.appendField('"Product count"', FieldType.FieldSequence);

// Access header SEQ field
const field = ((section.headersFooters.oddHeader
    .items[0] as Paragraph).items[1]) as SeqField;     // SEQ field

field.repeatNearestNumber = true;

// Update fields
document.updateDocumentFields();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
const { readFileSync } = require('fs');

// Creates a Word document
const document = ej.docx.WordDocument.create();

// Adds a new section
const section = document.sections[0];

// Header
let paragraph = section.headersFooters.oddHeader.appendParagraph();
paragraph.paragraphFormat.horizontalAlignment = ej.docx.ParagraphAlignment.Right;

paragraph.appendText('Total No. of Products: ');
const headerSeqField = paragraph.appendField(
    '"Product count"',
    ej.docx.FieldType.FieldSequence
);

// Title
paragraph = section.body.appendParagraph();
paragraph.appendText('Adventure Works Cycles');

// Product Overview
paragraph = section.body.appendParagraph();
paragraph.appendText('Product Overview');

// Table
const table = section.body.appendTable();
table.resetCells(3, 2);

let imageBytes = new Uint8Array(readFileSync('Mountain-200.png'));

// First row
table.rows[0].cells[0].appendParagraph().appendImage(imageBytes);

table.rows[0].cells[1].appendParagraph().appendText('Mountain-200');

paragraph = table.rows[0].cells[1].appendParagraph();
paragraph.appendText('Product No: ');
paragraph.appendField('"Product count"', ej.docx.FieldType.FieldSequence);

table.rows[0].cells[1].appendParagraph().appendText('Size: 38');
table.rows[0].cells[1].appendParagraph().appendText('Weight: 25');
table.rows[0].cells[1].appendParagraph().appendText('Price: $2,294.99');

// Second row
table.rows[1].cells[0].appendParagraph().appendText('Mountain-300');

paragraph = table.rows[1].cells[0].appendParagraph();
paragraph.appendText('Product No: ');
paragraph.appendField('"Product count"', ej.docx.FieldType.FieldSequence);

imageBytes = new Uint8Array(readFileSync('Mountain-300.png'));
table.rows[1].cells[1].appendParagraph().appendImage(imageBytes);

// Third row
imageBytes = new Uint8Array(readFileSync('Road-550.png'));
table.rows[2].cells[0].appendParagraph().appendImage(imageBytes);

table.rows[2].cells[1].appendParagraph().appendText('Road-150');

paragraph = table.rows[2].cells[1].appendParagraph();
paragraph.appendText('Product No: ');
paragraph.appendField('"Product count"', ej.docx.FieldType.FieldSequence);

// Access header SEQ field
const field = section.headersFooters.oddHeader.items[0].items[1];     // SEQ field

field.repeatNearestNumber = true;

// Update fields
document.updateDocumentFields();
{% endhighlight %}
{% endtabs %}

### Hide

You can hide the field result of the sequence field using the `hideResult` property.

For example, if you need to consider sequence numbering for a list of items but do not want to print the numbering for specific items, you can hide those sequence fields.

The following code example shows how to hide the field result of a sequence field.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, FieldType, SeqField, Paragraph } from '@syncfusion/ej2-docx';

// Creates a new Word document
const document = WordDocument.create();

// Adds a new section to the document
const section = document.sections[0];

// Adds a paragraph to the section
let paragraph = section.body.appendParagraph();
paragraph.appendText('Syncfusion Product Details');

// Adds a new table
const table = section.body.appendTable();

// Specifies the total number of rows & columns
table.resetCells(6, 4);

// First row
table.rows[0].cells[0].appendParagraph().appendText('S.No');
table.rows[0].cells[1].appendParagraph().appendText('Platform Id');
table.rows[0].cells[2].appendParagraph().appendText('Platform');
table.rows[0].cells[3].appendParagraph().appendText('Status');

// Second row
table.rows[1].cells[0].appendParagraph().appendText('1.');
table.rows[1].cells[1].appendParagraph().appendField(
    '"PlatformCount"',
    FieldType.FieldSequence
);
table.rows[1].cells[2].appendParagraph().appendText('ASP.NET Core');
table.rows[1].cells[3].appendParagraph().appendText('Live');

// Third row
table.rows[2].cells[0].appendParagraph().appendText('2.');
table.rows[2].cells[1].appendParagraph().appendField(
    '"PlatformCount"',
    FieldType.FieldSequence
);
table.rows[2].cells[2].appendParagraph().appendText('LightSwitch');
table.rows[2].cells[3].appendParagraph().appendText('Retired');

// Fourth row
table.rows[3].cells[0].appendParagraph().appendText('3.');
table.rows[3].cells[1].appendParagraph().appendField(
    '"PlatformCount"',
    FieldType.FieldSequence
);
table.rows[3].cells[2].appendParagraph().appendText('ASP.NET MVC');
table.rows[3].cells[3].appendParagraph().appendText('Live');

// Fifth row
table.rows[4].cells[0].appendParagraph().appendText('4.');
table.rows[4].cells[1].appendParagraph().appendField(
    '"PlatformCount"',
    FieldType.FieldSequence
);
table.rows[4].cells[2].appendParagraph().appendText('Silverlight');
table.rows[4].cells[3].appendParagraph().appendText('Retired');

// Sixth row
table.rows[5].cells[0].appendParagraph().appendText('5.');
table.rows[5].cells[1].appendParagraph().appendField(
    '"PlatformCount"',
    FieldType.FieldSequence
);
table.rows[5].cells[2].appendParagraph().appendText('Blazor');
table.rows[5].cells[3].appendParagraph().appendText('Live');

section.body
    .appendParagraph()
    .appendText('Total No. of Platforms : 5');

// Access sequence field in third row
let field = (table.rows[2].cells[1]
    .items[0] as Paragraph).items[0] as SeqField;

// Equivalent to:
// field.HideResult = true;
field.hideResult = true;

// Access sequence field in fifth row
field = (table.rows[4].cells[1]
    .items[0] as Paragraph).items[0] as SeqField;

field.hideResult = true;

// Update document fields
document.updateDocumentFields();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Creates a new Word document
const document = ej.docx.WordDocument.create();

// Adds a new section to the document
const section = document.sections[0];

// Adds a paragraph to the section
let paragraph = section.body.appendParagraph();
paragraph.appendText('Syncfusion Product Details');

// Adds a new table
const table = section.body.appendTable();

// Specifies the total number of rows & columns
table.resetCells(6, 4);

// First row
table.rows[0].cells[0].appendParagraph().appendText('S.No');
table.rows[0].cells[1].appendParagraph().appendText('Platform Id');
table.rows[0].cells[2].appendParagraph().appendText('Platform');
table.rows[0].cells[3].appendParagraph().appendText('Status');

// Second row
table.rows[1].cells[0].appendParagraph().appendText('1.');
table.rows[1].cells[1].appendParagraph().appendField(
    '"PlatformCount"',
    ej.docx.FieldType.FieldSequence
);
table.rows[1].cells[2].appendParagraph().appendText('ASP.NET Core');
table.rows[1].cells[3].appendParagraph().appendText('Live');

// Third row
table.rows[2].cells[0].appendParagraph().appendText('2.');
table.rows[2].cells[1].appendParagraph().appendField(
    '"PlatformCount"',
    ej.docx.FieldType.FieldSequence
);
table.rows[2].cells[2].appendParagraph().appendText('LightSwitch');
table.rows[2].cells[3].appendParagraph().appendText('Retired');

// Fourth row
table.rows[3].cells[0].appendParagraph().appendText('3.');
table.rows[3].cells[1].appendParagraph().appendField(
    '"PlatformCount"',
    ej.docx.FieldType.FieldSequence
);
table.rows[3].cells[2].appendParagraph().appendText('ASP.NET MVC');
table.rows[3].cells[3].appendParagraph().appendText('Live');

// Fifth row
table.rows[4].cells[0].appendParagraph().appendText('4.');
table.rows[4].cells[1].appendParagraph().appendField(
    '"PlatformCount"',
    ej.docx.FieldType.FieldSequence
);
table.rows[4].cells[2].appendParagraph().appendText('Silverlight');
table.rows[4].cells[3].appendParagraph().appendText('Retired');

// Sixth row
table.rows[5].cells[0].appendParagraph().appendText('5.');
table.rows[5].cells[1].appendParagraph().appendField(
    '"PlatformCount"',
    ej.docx.FieldType.FieldSequence
);
table.rows[5].cells[2].appendParagraph().appendText('Blazor');
table.rows[5].cells[3].appendParagraph().appendText('Live');

section.body
    .appendParagraph()
    .appendText('Total No. of Platforms : 5');

// Access sequence field in third row
let field = table.rows[2].cells[1].items[0].items[0];

field.hideResult = true;

// Access sequence field in fifth row
field = table.rows[4].cells[1].items[0].items[0];

field.hideResult = true;

// Update document fields
document.updateDocumentFields();
{% endhighlight %}
{% endtabs %}

### Next sequence number

You can insert the next sequence number for the specified items using the `insertNextNumber` property.

The following code example shows how to insert the next sequence number for the specified item.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, SeqField, Paragraph } from '@syncfusion/ej2-docx';
import { readFileSync } from 'fs';

const fileStream = new Uint8Array(readFileSync('Template.docx'));
const document = WordDocument.load(fileStream);

// Access paragraph
const paragraph = document.sections[0]
    .body.items[4] as Paragraph;

// Access SEQ field
const field = paragraph.items[1] as SeqField;

field.insertNextNumber = true;

// Update document fields
document.updateDocumentFields();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
const { readFileSync } = require('fs');

const fileStream = new Uint8Array(readFileSync('Template.docx'));
const document = ej.docx.WordDocument.load(fileStream);

// Access paragraph
const paragraph = document.sections[0].body.items[4];

// Access SEQ field
const field = paragraph.items[1];

field.insertNextNumber = true;

// Update document fields
document.updateDocumentFields();
{% endhighlight %}
{% endtabs %}
