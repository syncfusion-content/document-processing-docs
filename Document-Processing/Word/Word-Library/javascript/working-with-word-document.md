---
title: Iterating Word Document Elements in JavaScript Word | Syncfusion
description: Learn how to iterate through sections, body items, paragraphs, tables, and paragraph items in a Word document using the Syncfusion JavaScript Word library.
platform: document-processing
control: Word Library
documentation: ug
keywords: javascript, word, iterate, sections, paragraphs, tables, content controls
---

# Word document in JavaScript Word Library

## Iterating Word document elements in JavaScript Word Library

Iterating Word document elements lets you walk every section, body item, table, and paragraph item in a document. The JavaScript Word library exposes a strongly-typed object model that you can traverse recursively to read, modify, or remove content based on its type, style, or value.

A Word document is a tree of text bodies. The following element types are encountered during traversal:

* **Section**: the top-level container; exposes its `body`, `headersFooters`, and child elements.
* **Body** (text body): the container for paragraphs, tables, and block content controls. A section body, header/footer, table cell, and block content control are all text bodies.
* **Paragraph**: the primary block-level element. A paragraph holds an ordered list of paragraph items.
* **Table**: a collection of rows and cells; each cell is itself a text body.
* **Block content control**: a structured document tag (SDT) that wraps a text body.
* **Paragraph items**: the in-line children of a paragraph: `TextRange`, `Field` (with the `Hyperlink` facade), `Shape`, and `InlineContentControl`.

The following examples use `@syncfusion/ej2-docx` to walk the document and apply changes at each level.

N> Refer to the appropriate tabs in the code snippets section: **TypeScript** for TypeScript applications and **JavaScript** for JavaScript applications.

## Remove paragraph with style

The following example shows how to iterate through the document and remove any paragraph that uses a particular style. The traversal walks every section, the section body, the odd header, and the odd footer, and forwards table cells and block content controls to the same traversal.

The following code example shows how to iterate through the Word document and remove the paragraph with a particular style.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, BlockContentControl, Body, Paragraph, Table } from '@syncfusion/ej2-docx';

// Open an existing Word document
let document = WordDocument.open(data);

// Process the body contents for each section in the Word document
for (let section of document.sections) {
  // Walks the main body of the section
  iterateTextBody(section.body);

  // Walks the text body of the odd header and odd footer when present
  let hf = section.headersFooters;
  if (hf.oddHeader) iterateTextBody(hf.oddHeader);
  if (hf.oddFooter) iterateTextBody(hf.oddFooter);
}

// Save the resulting document
document.save('Result.docx');
{% endhighlight %}

{% highlight javascript tabtitle="JavaScript" %}
// Open an existing Word document
let document = ej.docx.WordDocument.open(data);

// Process the body contents for each section in the Word document
for (let section of document.sections) {
  // Walks the main body of the section
  iterateTextBody(section.body);

  // Walks the text body of the odd header and odd footer when present
  let hf = section.headersFooters;
  if (hf.oddHeader) iterateTextBody(hf.oddHeader);
  if (hf.oddFooter) iterateTextBody(hf.oddFooter);
}

// Save the resulting document
document.save('Result.docx');
{% endhighlight %}

{% endtabs %}

The following code example provides supporting methods for the above code.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import { BlockContentControl, Body, Paragraph, Table } from '@syncfusion/ej2-docx';

// Walks a text body (section body, header, footer, table cell, or block content control)
// and dispatches each item to the appropriate handler.
function iterateTextBody(body: Body) {
  // Iterate in reverse so removing items while iterating stays safe
  for (let i = body.items.count - 1; i >= 0; i--) {
    let item = body.items[i];

    // A text body has three kinds of block-level children:
    // paragraph, table, and block content control.
    if (item instanceof Paragraph) {
      // Checks for a particular style id and removes the paragraph from the DOM
      if (item.styleId === 'Heading1') {
        body.items.removeAt(i);
        continue;
      }
      iterateParagraph(item.items);
      continue;
    }

    if (item instanceof Table) {
      // A table is a collection of rows and cells
      iterateTable(item);
      continue;
    }

    if (item instanceof BlockContentControl) {
      // Recurse into the body of the block content control
      iterateTextBody((item as BlockContentControl).body);
      continue;
    }
  }
}
{% endhighlight %}

{% highlight javascript tabtitle="JavaScript" %}
// Walks a text body (section body, header, footer, table cell, or block content control)
// and dispatches each item to the appropriate handler.
function iterateTextBody(body) {
  // Iterate in reverse so removing items while iterating stays safe
  for (let i = body.items.count - 1; i >= 0; i--) {
    let item = body.items[i];

    // A text body has three kinds of block-level children:
    // paragraph, table, and block content control.
    if (item instanceof ej.docx.Paragraph) {
      // Checks for a particular style id and removes the paragraph from the DOM
      if (item.styleId === 'Heading1') {
        body.items.removeAt(i);
        continue;
      }
      iterateParagraph(item.items);
      continue;
    }

    if (item instanceof ej.docx.Table) {
      // A table is a collection of rows and cells
      iterateTable(item);
      continue;
    }

    if (item instanceof ej.docx.BlockContentControl) {
      // Recurse into the body of the block content control
      iterateTextBody(item.body);
      continue;
    }
  }
}
{% endhighlight %}

{% endtabs %}

The following code example provides supporting methods for the above code.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import { Body, Table } from '@syncfusion/ej2-docx';

// Iterates the row and cell collection of a table
function iterateTable(table: Table) {
  for (let row of table.rows) {
    for (let cell of row.cells) {
      // A table cell is also a text body; reuse the body iteration
      iterateTextBody(cell);
    }
  }
}
{% endhighlight %}

{% highlight javascript tabtitle="JavaScript" %}
// Iterates the row and cell collection of a table
function iterateTable(table) {
  for (let row of table.rows) {
    for (let cell of row.cells) {
      // A table cell is also a text body; reuse the body iteration
      iterateTextBody(cell);
    }
  }
}
{% endhighlight %}

{% endtabs %}

The following code example provides supporting methods for the above code.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import { ParagraphItemCollection, TextRange } from '@syncfusion/ej2-docx';

// Iterates the paragraph items
function iterateParagraph(paraItems: ParagraphItemCollection) {
  for (let child of paraItems) {
    if (child instanceof TextRange) {
      // Modify or read text in a text range
      if (child.text === 'Andrew') {
        child.text = 'Fuller';
      }
      continue;
    }
  }
}
{% endhighlight %}

{% highlight javascript tabtitle="JavaScript" %}
// Iterates the paragraph items
function iterateParagraph(paraItems) {
  for (let child of paraItems) {
    if (child instanceof ej.docx.TextRange) {
      // Modify or read text in a text range
      if (child.text === 'Andrew') {
        child.text = 'Fuller';
      }
      continue;
    }
  }
}
{% endhighlight %}

{% endtabs %}


## Modify Hyperlink Uri

The following example extends the previous traversal to also iterate through paragraph items and modify the `Hyperlink` URI as well as the displayed text of a `TextRange`. The same `iterateTextBody` and `iterateTable` helpers are reused; only `iterateParagraph` is expanded to handle `Field`, `Shape`, and `InlineContentControl`.

The following code example shows how to iterate throughout the paragraph and modify the hyperlink (`Hyperlink`) URI and specific text (`TextRange`) with another.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, BlockContentControl, Body, Field, Hyperlink, HyperlinkType, InlineContentControl, Paragraph, ParagraphItemCollection, Shape, Table, TextRange } from '@syncfusion/ej2-docx';

// Open an existing Word document
let document = WordDocument.open(data);

for (let section of document.sections) {
  iterateTextBody(section.body);

  let hf = section.headersFooters;
  if (hf.oddHeader) iterateTextBody(hf.oddHeader);
  if (hf.oddFooter) iterateTextBody(hf.oddFooter);
}

// Save the resulting document
document.save('Result.docx');
{% endhighlight %}

{% highlight javascript tabtitle="JavaScript" %}
// Open an existing Word document
let document = ej.docx.WordDocument.open(data);

for (let section of document.sections) {
  iterateTextBody(section.body);

  let hf = section.headersFooters;
  if (hf.oddHeader) iterateTextBody(hf.oddHeader);
  if (hf.oddFooter) iterateTextBody(hf.oddFooter);
}

// Save the resulting document
document.save('Result.docx');
{% endhighlight %}

{% endtabs %}

The following code example provides supporting methods for the above code.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import { BlockContentControl, Body, Paragraph, Table } from '@syncfusion/ej2-docx';

// Iterates through the body items in the specified body.
function iterateTextBody(body: Body) {
  // Iterates through the body items in reverse order.
  for (let i = body.items.count - 1; i >= 0; i--) {
    let item = body.items[i];

    // Processes paragraph items.
    if (item instanceof Paragraph) {
      // Removes paragraphs with the Heading1 style.
      if (item.styleId === 'Heading1') {
        body.items.removeAt(i);
        continue;
      }

      // Iterates through the paragraph items.
      iterateParagraph(item.items);
      continue;
    }

    // Processes table items.
    if (item instanceof Table) {
      iterateTable(item);
      continue;
    }

    // Processes block content controls recursively.
    if (item instanceof BlockContentControl) {
      iterateTextBody((item as BlockContentControl).body);
      continue;
    }
  }
}
{% endhighlight %}

{% highlight javascript tabtitle="JavaScript" %}
// Iterates through the body items in the specified body.
function iterateTextBody(body) {
  // Iterates through the body items in reverse order.
  for (let i = body.items.count - 1; i >= 0; i--) {
    let item = body.items[i];

    // Processes paragraph items.
    if (item instanceof ej.docx.Paragraph) {
      // Removes paragraphs with the Heading1 style.
      if (item.styleId === 'Heading1') {
        body.items.removeAt(i);
        continue;
      }

      // Iterates through the paragraph items.
      iterateParagraph(item.items);
      continue;
    }

    // Processes table items.
    if (item instanceof ej.docx.Table) {
      iterateTable(item);
      continue;
    }

    // Processes block content controls recursively.
    if (item instanceof ej.docx.BlockContentControl) {
      iterateTextBody(item.body);
      continue;
    }
  }
}
{% endhighlight %}

{% endtabs %}

The following code example provides supporting methods for the above code.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import { Body, Table } from '@syncfusion/ej2-docx';

// Iterates through all rows in the table.
function iterateTable(table: Table) {
  // Iterates through each row.
  for (let row of table.rows) {
    // Iterates through each cell in the row.
    for (let cell of row.cells) {
      // Iterates through the body items in the table cell.
      iterateTextBody(cell);
    }
  }
}
{% endhighlight %}

{% highlight javascript tabtitle="JavaScript" %}
// Iterates through all rows in the table.
function iterateTable(table) {
  // Iterates through each row.
  for (let row of table.rows) {
    // Iterates through each cell in the row.
    for (let cell of row.cells) {
      // Iterates through the body items in the table cell.
      iterateTextBody(cell);
    }
  }
}
{% endhighlight %}

{% endtabs %}

The following code example provides supporting methods for the above code.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import {Field, Hyperlink, HyperlinkType, InlineContentControl, ParagraphItemCollection, Shape, TextRange } from '@syncfusion/ej2-docx';

// Iterates through the paragraph items collection.
function iterateParagraph(paraItems: ParagraphItemCollection) {
  // Iterates through each paragraph item.
  for (let child of paraItems) {
    // Processes text ranges.
    if (child instanceof TextRange) {
      // Replaces the specified text.
      if (child.text === 'Andrew') {
        child.text = 'Fuller';
      }
      continue;
    }

    // Processes fields as hyperlinks.
    if (child instanceof Field) {
      // Creates a hyperlink facade from the field.
      let link = new Hyperlink(child);

      // Updates the hyperlink URL when the display text matches.
      if (
        link.type === HyperlinkType.WebLink &&
        link.textToDisplay === 'HTML'
      ) {
        link.uri = 'http://www.google.com';
      }
      continue;
    }

    // Processes shapes and text boxes.
    if (child instanceof Shape) {
      try {
        // Iterates through the text body of the shape.
        iterateTextBody(child.textBody);
      } catch {
        // Ignores shapes that do not expose a text body.
      }
      continue;
    }

    // Processes inline content controls recursively.
    if (child instanceof InlineContentControl) {
      iterateParagraph(child.paragraphItems);
    }
  }
}
{% endhighlight %}

{% highlight javascript tabtitle="JavaScript" %}
// Iterates through the paragraph items collection.
function iterateParagraph(paraItems) {
  // Iterates through each paragraph item.
  for (let child of paraItems) {
    // Processes text ranges.
    if (child instanceof ej.docx.TextRange) {
      // Replaces the specified text.
      if (child.text === 'Andrew') {
        child.text = 'Fuller';
      }
      continue;
    }

    // Processes fields as hyperlinks.
    if (child instanceof ej.docx.Field) {
      // Creates a hyperlink facade from the field.
      let link = new ej.docx.Hyperlink(child);

      // Updates the hyperlink URL when the display text matches.
      if (
        link.type === ej.docx.HyperlinkType.WebLink &&
        link.textToDisplay === 'HTML'
      ) {
        link.uri = 'http://www.google.com';
      }
      continue;
    }

    // Processes shapes and text boxes.
    if (child instanceof ej.docx.Shape) {
      try {
        // Iterates through the text body of the shape.
        iterateTextBody(child.textBody);
      } catch {
        // Ignores shapes that do not expose a text body.
      }
      continue;
    }

    // Processes inline content controls recursively.
    if (child instanceof ej.docx.InlineContentControl) {
      iterateParagraph(child.paragraphItems);
    }
  }
}
{% endhighlight %}

{% endtabs %}

## Working with Word document properties

Document properties, also known as metadata, are details about a file that describe or identify it. You can also define additional custom document properties by using document properties, which are classified into two categories:

* Built-in document properties - includes details such as title, author name, subject, and keywords that identify the document's topic or contents.
* Custom document properties - defines the user-defined document properties.

### Built-in document properties

The built-in document properties of a Word document are represented by the `builtinDocumentProperties` property of the `WordDocument` class. The following code example illustrates how to access and modify the built-in document properties of the document.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

// Opens an existing Word document.
let document = WordDocument.open(data);

// Accesses the built-in document properties.
console.log(document.builtinDocumentProperties.title);
console.log(document.builtinDocumentProperties.author);

// Modifies or sets the built-in document properties.
document.builtinDocumentProperties.author = "Andrew";
document.builtinDocumentProperties.lastAuthor = "Steven";
document.builtinDocumentProperties.createDate = new Date(1900, 12, 31, 12, 0, 0);
document.builtinDocumentProperties.lastSaveDate = new Date(1900, 12, 31, 12, 0, 0);
document.builtinDocumentProperties.lastPrinted = new Date(1900, 12, 31, 12, 0, 0);
document.builtinDocumentProperties.title = "Sample Document";
document.builtinDocumentProperties.subject = "Adventure Works Cycle";
document.builtinDocumentProperties.category = "Technical documentation";
document.builtinDocumentProperties.comments = "This is sample document.";
document.builtinDocumentProperties.revisionNumber = "2";
document.builtinDocumentProperties.company = "Adventure Works Cycle";

// Saves the Word document.
document.save('Result.docx');
{% endhighlight %}

{% highlight javascript tabtitle="JavaScript" %}
// Opens an existing Word document.
let document = ej.docx.WordDocument.open(data);

// Accesses the built-in document properties.
console.log(document.builtinDocumentProperties.title);
console.log(document.builtinDocumentProperties.author);

// Modifies or sets the built-in document properties.
document.builtinDocumentProperties.author = "Andrew";
document.builtinDocumentProperties.lastAuthor = "Steven";
document.builtinDocumentProperties.createDate = new Date(1900, 12, 31, 12, 0, 0);
document.builtinDocumentProperties.lastSaveDate = new Date(1900, 12, 31, 12, 0, 0);
document.builtinDocumentProperties.lastPrinted = new Date(1900, 12, 31, 12, 0, 0);
document.builtinDocumentProperties.title = "Sample Document";
document.builtinDocumentProperties.subject = "Adventure Works Cycle";
document.builtinDocumentProperties.category = "Technical documentation";
document.builtinDocumentProperties.comments = "This is sample document.";
document.builtinDocumentProperties.revisionNumber = "2";
document.builtinDocumentProperties.company = "Adventure Works Cycle";

// Saves the Word document.
document.save('Result.docx');
{% endhighlight %}

{% endtabs %}

### Updating words count

You can get the count of paragraphs, words, and characters in an existing Word document.

The following code example shows how to get the word count in an existing Word document.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

// Opens an existing Word document.
let document = WordDocument.open(data);

// Gets the word count in the document.
let wordCount = document.builtinDocumentProperties.wordCount;
// Gets the character count in the document.
let charCount = document.builtinDocumentProperties.charCount;
// Gets the paragraph count in the document.
let paragraphCount = document.builtinDocumentProperties.paragraphCount;

// Saves the Word document.
document.save('Result.docx');
{% endhighlight %}

{% highlight javascript tabtitle="JavaScript" %}
// Opens an existing Word document.
let document = ej.docx.WordDocument.open(data);

// Gets the word count in the document.
let wordCount = document.builtinDocumentProperties.wordCount;
// Gets the character count in the document.
let charCount = document.builtinDocumentProperties.charCount;
// Gets the paragraph count in the document.
let paragraphCount = document.builtinDocumentProperties.paragraphCount;

// Saves the Word document.
document.save('Result.docx');
{% endhighlight %}

{% endtabs %}

### Updating pages count

The following code example shows how to get the page count in an existing Word document.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

// Opens an existing Word document.
let document = WordDocument.open(data);

// Gets the page count in the document.
let pageCount = document.builtinDocumentProperties.pageCount;

// Saves the Word document.
document.save('Result.docx');
{% endhighlight %}

{% highlight javascript tabtitle="JavaScript" %}
// Opens an existing Word document.
let document = ej.docx.WordDocument.open(data);

// Gets the page count in the document.
let pageCount = document.builtinDocumentProperties.pageCount;

// Saves the Word document.
document.save('Result.docx');
{% endhighlight %}

{% endtabs %}

### Adding custom document properties

You can add new custom document properties through the `add` method of the `customDocumentProperties` collection. The following code example illustrates how to add new custom document properties of various data types.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

// Opens an existing Word document.
let document = WordDocument.open(data);

// Adds the custom document properties of various data types.
document.customDocumentProperties.add("PropertyA", "Value of A");
document.customDocumentProperties.add("PropertyB", 12.5);
document.customDocumentProperties.add("PropertyC", true);
document.customDocumentProperties.add("PropertyD", new Date(2015, 7, 20));

// Saves the Word document.
document.save('Result.docx');
{% endhighlight %}

{% highlight javascript tabtitle="JavaScript" %}
// Opens an existing Word document.
let document = ej.docx.WordDocument.open(data);

// Adds the custom document properties of various data types.
document.customDocumentProperties.add("PropertyA", "Value of A");
document.customDocumentProperties.add("PropertyB", 12.5);
document.customDocumentProperties.add("PropertyC", true);
document.customDocumentProperties.add("PropertyD", new Date(2015, 7, 20));

// Saves the Word document.
document.save('Result.docx');
{% endhighlight %}

{% endtabs %}

### Accessing and modifying custom document properties

You can access and modify an existing custom document property as shown in the following code example.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

// Opens an existing Word document.
let document = WordDocument.open(data);

// Accesses an existing custom document property.
let property = document.customDocumentProperties.get("PropertyA");

if (property) {
    // Modifies the value of DocumentProperty instance.
    property.value = 'Hello world';
}

// Saves the Word document.
document.save('Result.docx');
{% endhighlight %}

{% highlight javascript tabtitle="JavaScript" %}
// Opens an existing Word document.
let document = ej.docx.WordDocument.open(data);

// Accesses an existing custom document property.
let property = document.customDocumentProperties.get("PropertyA");

if (property) {
    // Modifies the value of DocumentProperty instance.
    property.value = 'Hello world';
}

// Saves the Word document.
document.save('Result.docx');
{% endhighlight %}

{% endtabs %}
