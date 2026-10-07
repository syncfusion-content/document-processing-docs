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
* **Paragraph items**: the in-line children of a paragraph: `TextRange`, `Field` (with the `Hyperlink` facade), `Shape` (including text boxes), and `InlineContentControl`.

The following examples use `@syncfusion/ej2-docx` to walk the document and apply changes at each level. Each helper is shown in its own tab so it can be copied independently.

### Remove paragraph with style

The following example shows how to iterate through the document and remove any paragraph that uses a particular style. The traversal walks every section, the section body, the odd header, and the odd footer, and forwards table cells and block content controls to the same traversal.

The following code example shows how to iterate through the Word document and remove the paragraph with a particular style.

{% tabs %}
{% highlight typescript tabtitle="Driver" %}
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
{% highlight typescript tabtitle="iterateTextBody" %}
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
{% highlight typescript tabtitle="iterateTable" %}
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
{% highlight typescript tabtitle="iterateParagraph" %}
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
{% endtabs %}

### Modify hyperlink URI

The following example extends the previous traversal to also iterate through paragraph items and modify the `Hyperlink` URI as well as the displayed text of a `TextRange`. The same `iterateTextBody` and `iterateTable` helpers are reused; only `iterateParagraph` is expanded to handle `Field`, `Shape`, and `InlineContentControl`.

The following code example shows how to iterate throughout the paragraph and modify the hyperlink (`Hyperlink`) URI and specific text (`TextRange`) with another.

{% tabs %}
{% highlight typescript tabtitle="Driver" %}
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
{% highlight typescript tabtitle="iterateTextBody" %}
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
{% highlight typescript tabtitle="iterateTable" %}
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
{% highlight typescript tabtitle="iterateParagraph" %}
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
{% endtabs %}


