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
import {
  BlockContentControl,
  Body,
  Paragraph,
  Table,
  WordDocument,
} from '@syncfusion/ej2-docx';

// Open an existing Word document
let response = await fetch('Template.docx');
let arrayBuffer = await response.arrayBuffer();
let document = await WordDocument.openAsync(arrayBuffer);

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
import {
  BlockContentControl,
  Body,
  Field,
  Hyperlink,
  HyperlinkType,
  InlineContentControl,
  Paragraph,
  ParagraphItemCollection,
  Shape,
  Table,
  TextRange,
  WordDocument,
} from '@syncfusion/ej2-docx';

// Open an existing Word document
let response = await fetch('Template.docx');
let arrayBuffer = await response.arrayBuffer();
let document = await WordDocument.openAsync(arrayBuffer);

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

function iterateTextBody(body: Body) {
  for (let i = body.items.count - 1; i >= 0; i--) {
    let item = body.items[i];

    if (item instanceof Paragraph) {
      if (item.styleId === 'Heading1') {
        body.items.removeAt(i);
        continue;
      }
      iterateParagraph(item.items);
      continue;
    }

    if (item instanceof Table) {
      iterateTable(item);
      continue;
    }

    if (item instanceof BlockContentControl) {
      iterateTextBody((item as BlockContentControl).body);
      continue;
    }
  }
}
{% endhighlight %}
{% highlight typescript tabtitle="iterateTable" %}
import { Body, Table } from '@syncfusion/ej2-docx';

function iterateTable(table: Table) {
  for (let row of table.rows) {
    for (let cell of row.cells) {
      iterateTextBody(cell);
    }
  }
}
{% endhighlight %}
{% highlight typescript tabtitle="iterateParagraph" %}
import {
  Field,
  Hyperlink,
  HyperlinkType,
  InlineContentControl,
  ParagraphItemCollection,
  Shape,
  TextRange,
} from '@syncfusion/ej2-docx';

function iterateParagraph(paraItems: ParagraphItemCollection) {
  for (let child of paraItems) {
    // Plain text run: modify or read the text
    if (child instanceof TextRange) {
      if (child.text === 'Andrew') {
        child.text = 'Fuller';
      }
      continue;
    }

    // Field: a HYPERLINK field is exposed through the Hyperlink facade
    if (child instanceof Field) {
      let link = new Hyperlink(child);
      if (
        link.type === HyperlinkType.WebLink &&
        link.textToDisplay === 'HTML'
      ) {
        link.uri = 'http://www.google.com';
      }
      continue;
    }

    // Shape / text box: the nested body is available through textBody
    if (child instanceof Shape) {
      try {
        // Promotes the shape to a text box if needed
        iterateTextBody(child.textBody);
      } catch {
        // A non-text-box shape may reject access to textBody
      }
      continue;
    }

    // Inline content control: recurse into its paragraph items
    if (child instanceof InlineContentControl) {
      iterateParagraph(child.paragraphItems);
    }
  }
}
{% endhighlight %}
{% endtabs %}


