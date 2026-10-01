---
title: Loading and Saving Word document in JavaScript Word | Syncfusion
description: Learn how to create, load, edit, and save Word documents using the Syncfusion JavaScript Word library.
platform: document-processing
control: Word Library
documentation: UG
---
# Loading and Saving Word document in JavaScript Word

## Creating a document

You can create a new Word document by using the `WordDocument.create()` method.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

const document = WordDocument.create();

// Access first section
const section = document.sections[0]!;

// Add new paragraph to section
const firstParagraph = section.body.appendParagraph();

// Add text ranges to the paragraph
const firstText = firstParagraph.appendText('Hello World');
{% endhighlight %}

{% endtabs %}

The created document contains a single empty paragraph in the main document body. Use `section.body.appendParagraph()` to add paragraphs, then `paragraph.appendText(...)` to add text ranges.

## Loading an existing document

You can load an existing Word document from a `Uint8Array`, `ArrayBuffer`, filesystem path (Node.js), or base64 string by using either `WordDocument.openSync()` or `WordDocument.open()`.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

const response = await fetch('/input.docx');
const bytes = new Uint8Array(await response.arrayBuffer());

const document = WordDocument.openSync(bytes);
{% endhighlight %}

{% endtabs %}

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

const response = await fetch('/input.docx');
const bytes = new Uint8Array(await response.arrayBuffer());

const document = WordDocument.load(bytes);
{% endhighlight %}

{% endtabs %}

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

// Node.js — open from a file path
const document = WordDocument.openSync('./input.docx');
{% endhighlight %}

{% endtabs %}

Both methods accept an optional `LoadOptions` object.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, type LoadOptions } from '@syncfusion/ej2-docx';

const options: LoadOptions = {
  limits: {
    totalUncompressedSize: 50 * 1024 * 1024,
    singlePartUncompressedSize: 25 * 1024 * 1024,
  },
};

const document = WordDocument.openSync(bytes, options);
{% endhighlight %}

{% endtabs %}

## Editing a loaded document

After loading, you can use the document body to add or remove content.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

const document = WordDocument.openSync(bytes);

// Access first section
const section = document.sections[0]!;

// Add new paragraph to section
const firstParagraph = section.body.appendParagraph();

// Add text ranges to the paragraph
const firstText = firstParagraph.appendText('Appended after load. ');
const secondText = firstParagraph.appendText('Second text range');
{% endhighlight %}

{% endtabs %}

## Saving a document to bytes

You can serialize the document to `.docx` bytes by using `saveSync()`.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

const document = WordDocument.create();

// Access first section
const section = document.sections[0]!;

// Add new paragraph to section
const firstParagraph = section.body.appendParagraph();

// Add text ranges to the paragraph
const firstText = firstParagraph.appendText('Generated in memory');

const bytes = document.saveSync();
{% endhighlight %}

{% endtabs %}

The returned value is a `Uint8Array` containing the Word package bytes.

## Saving a document asynchronously

You can also use `save()` when you want a promise-based API.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

const document = WordDocument.create();

// Access first section
const section = document.sections[0];

// Add new paragraph to section
const firstParagraph = section.body.appendParagraph();

// Add text ranges to the paragraph
const firstText = firstParagraph.appendText('Generated in memory');

const bytes = await document.save();
{% endhighlight %}

{% endtabs %}

The promise resolves with the same bytes returned by `saveSync()`.

## Saving a document to a file

In Node.js, you can pass a file path to `save()` to write the document directly to disk.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

const document = WordDocument.create();

// Access first section
const section = document.sections[0]!;

// Add new paragraph to section
const firstParagraph = section.body.appendParagraph();

// Add text ranges to the paragraph
const firstText = firstParagraph.appendText('Saved to disk');

await document.save('./output.docx');
{% endhighlight %}

{% endtabs %}

The parent directory must already exist.

## Writing bytes yourself

In browser-based or custom runtime scenarios, use `saveSync()` and write the bytes with your own file or download logic.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

const document = WordDocument.create();

// Access first section
const section = document.sections[0]!;

// Add new paragraph to section
const firstParagraph = section.body.appendParagraph();

// Add text ranges to the paragraph
const firstText = firstParagraph.appendText('Download me');

const bytes = document.saveSync();
{% endhighlight %}

{% endtabs %}

## Supported loading and saving workflow

The JavaScript Word library supports this workflow:

1. Create a document with `WordDocument.create()`.
2. Load an existing document with `WordDocument.loadSync()` / `WordDocument.openSync()` or `WordDocument.load()` / `WordDocument.open()`.
3. Access a section with `document.sections[0]`, add a paragraph with `section.body.appendParagraph()`, and add text ranges with `paragraph.appendText(...)`.
4. Save the result with `saveSync()` or `save()`.

The library works with Word `.docx` package bytes.

## See also

- API inventory: [docs/api/docx-js.api.md](../api/docx-js.api.md)
- Requirement: [docs/requirements/document-paragraph-run.md](../requirements/document-paragraph-run.md)
- Spec: [docs/specs/document-paragraph-run.md](../specs/document-paragraph-run.md)

## Validation

Validate generated `.docx` output with the available test and validation workflow before shipping changes. Record unsupported or unverified behavior as not documented.
