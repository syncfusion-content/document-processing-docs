---
title: List in JavaScript Word | Syncfusion
description: Learn how to create and customize numbered and bulleted lists in Word documents using the Syncfusion JavaScript Word library.
platform: document-processing
control: DocIO
documentation: UG
---

# List in JavaScript Word Library

Lists help organize and format document content in a hierarchical structure. A list can contain up to nine levels, ranging from level 0 to level 8. The JavaScript Word library supports both numbered and bulleted lists.

The following list types are supported:

* Numbered list
* Bulleted list

## Create Bulleted List

The following example shows how to create a simple bulleted list.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { writeFileSync } from 'node:fs';
import { Buffer } from 'node:buffer';
import { Document } from 'docx-js';
import 'docx-js/numbering';

// Create a new Word document
const doc = Document.create();

// Add the first bulleted list item
let paragraph = doc.body.appendParagraph();
paragraph.listFormat = { listType: 'bullet' };
paragraph.appendText('List item 1');

// Get the list ID to continue the same list
const listId = paragraph.listFormat?.listId;

// Add the second bulleted list item
paragraph = doc.body.appendParagraph();
paragraph.listFormat = { listId };
paragraph.appendText('List item 2');

// Add the third bulleted list item
paragraph = doc.body.appendParagraph();
paragraph.listFormat = { listId };
paragraph.appendText('List item 3');

// Save the document
const saveBytes = doc.saveSync();
writeFileSync('Sample.docx', saveBytes);

{% endhighlight %}
{% endtabs %}

## Create Numbered List

The following example shows how to create a simple numbered list.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { writeFileSync } from 'node:fs';
import { Buffer } from 'node:buffer';
import { Document } from 'docx-js';
import 'docx-js/numbering';

// Create a new Word document
const doc = Document.create();

// Add the first numbered list item
let paragraph = doc.body.appendParagraph();
paragraph.listFormat = { listType: 'decimal' };
paragraph.appendText('List item 1');

// Get the list ID to continue the same list
const listId = paragraph.listFormat?.listId;

// Add the second numbered list item
paragraph = doc.body.appendParagraph();
paragraph.listFormat = { listId };
paragraph.appendText('List item 2');

// Add the third numbered list item
paragraph = doc.body.appendParagraph();
paragraph.listFormat = { listId };
paragraph.appendText('List item 3');

// Save the document
const saveBytes = doc.saveSync();
writeFileSync('Sample.docx', saveBytes);

{% endhighlight %}
{% endtabs %}

## Create Multilevel Bulleted List

The following example shows how to create a multilevel bulleted list.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { writeFileSync } from 'node:fs';
import { Document } from 'docx-js';
import 'docx-js/numbering';

// Create a new Word document
const doc = Document.create();

// Add a level 0 bulleted list item
let paragraph = doc.body.appendParagraph();
paragraph.listFormat = { listType: 'bullet', level: 0 };
paragraph.appendText('List item 1 - Level 0');

// Get the list ID to continue the same list
const listId = paragraph.listFormat?.listId;

// Add a level 1 bulleted list item
paragraph = doc.body.appendParagraph();
paragraph.listFormat = { listId, level: 1 };
paragraph.appendText('List item 2 - Level 1');

// Add a level 2 bulleted list item
paragraph = doc.body.appendParagraph();
paragraph.listFormat = { listId, level: 2 };
paragraph.appendText('List item 3 - Level 2');

// Save the document
const saveBytes = doc.saveSync();
writeFileSync('Sample.docx', saveBytes);

{% endhighlight %}
{% endtabs %}

## Create Multilevel Numbered List

The following example shows how to create a multilevel numbered list.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { writeFileSync } from 'node:fs';
import { Document } from 'docx-js';
import 'docx-js/numbering';

// Create a new Word document
const doc = Document.create();

// Add a level 0 numbered list item
let paragraph = doc.body.appendParagraph();
paragraph.listFormat = { listType: 'decimal', level: 0 };
paragraph.appendText('List item 1 - Level 0');

// Get the list ID to continue the same list
const listId = paragraph.listFormat?.listId;

// Add a level 1 numbered list item
paragraph = doc.body.appendParagraph();
paragraph.listFormat = { listId, level: 1 };
paragraph.appendText('List item 2 - Level 1');

// Add a level 2 numbered list item
paragraph = doc.body.appendParagraph();
paragraph.listFormat = { listId, level: 2 };
paragraph.appendText('List item 3 - Level 2');

// Save the document
const saveBytes = doc.saveSync();
writeFileSync('Sample.docx', saveBytes);

{% endhighlight %}
{% endtabs %}

## Change List Levels

You can create multilevel lists by assigning different values to the `level` property of the `listFormat` object. The following example demonstrates how to change list levels within the same numbered list.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { writeFileSync } from 'node:fs';
import { Document } from 'docx-js';
import 'docx-js/numbering';

// Create a new Word document
const doc = Document.create();

// Add a level 0 numbered list item
let paragraph = doc.body.appendParagraph();
paragraph.listFormat = { listType: 'decimal', level: 0 };
paragraph.appendText('Multilevel numbered list - Level 0');

// Get the list ID to continue the same list
const listId = paragraph.listFormat?.listId;

// Change to level 1
paragraph = doc.body.appendParagraph();
paragraph.listFormat = { listId, level: 1 };
paragraph.appendText('Multilevel numbered list - Level 1');

// Change back to level 0
paragraph = doc.body.appendParagraph();
paragraph.listFormat = { listId, level: 0 };
paragraph.appendText('Multilevel numbered list - Level 0');

// Change again to level 1
paragraph = doc.body.appendParagraph();
paragraph.listFormat = { listId, level: 1 };
paragraph.appendText('Multilevel numbered list - Level 1');

// Save the document
const saveBytes = doc.saveSync();
writeFileSync('Sample.docx', saveBytes);

{% endhighlight %}
{% endtabs %}