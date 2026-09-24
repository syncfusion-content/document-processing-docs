---
title: Loading and Saving Word document in JavaScript Word | Syncfusion
description: Learn how to create, load, edit, and save Word documents using the Syncfusion JavaScript Word library.
platform: document-processing
control: Word Library
documentation: UG
---
# Loading and Saving Word document in JavaScript Word

## Creating a document

You can create a new Word document by using the `Document.create()` method.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import { Document } from 'docx-js';

const document = Document.create();
document.appendParagraph({ text: 'Hello World' });
{% endhighlight %}

{% endtabs %}

The created document contains a single empty paragraph in the main document body.

## Loading an existing document

You can load an existing Word document from a `Uint8Array` by using either `Document.loadSync()` or `Document.load()`.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import { Document } from 'docx-js';

const response = await fetch('/input.docx');
const bytes = new Uint8Array(await response.arrayBuffer());

const document = Document.loadSync(bytes);
{% endhighlight %}

{% endtabs %}

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import { Document } from 'docx-js';

const response = await fetch('/input.docx');
const bytes = new Uint8Array(await response.arrayBuffer());

const document = await Document.load(bytes);
{% endhighlight %}

{% endtabs %}

Both methods accept an optional `LoadOptions` object.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import { Document, type LoadOptions } from 'docx-js';

const options: LoadOptions = {
  limits: {
    totalUncompressedBytes: 50 * 1024 * 1024,
  },
};

const document = Document.loadSync(bytes, options);
{% endhighlight %}

{% endtabs %}

## Editing a loaded document

After loading, you can use the document body to add or remove content.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import { Document } from 'docx-js';

const document = Document.loadSync(bytes);

document.body.appendParagraph({ text: 'Appended after load' });
{% endhighlight %}

{% endtabs %}

## Saving a document to bytes

You can serialize the document to `.docx` bytes by using `saveSync()`.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import { Document } from 'docx-js';

const document = Document.create();
document.appendParagraph({ text: 'Generated in memory' });

const bytes = document.saveSync();
{% endhighlight %}

{% endtabs %}

The returned value is a `Uint8Array` containing the Word package bytes.

## Saving a document asynchronously

You can also use `save()` when you want a promise-based API.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import { Document } from 'docx-js';

const document = Document.create();
document.appendParagraph({ text: 'Generated in memory' });

const bytes = await document.save();
{% endhighlight %}

{% endtabs %}

The promise resolves with the same bytes returned by `saveSync()`.

## Saving a document to a file

In Node.js, you can pass a file path to `save()` to write the document directly to disk.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import { Document } from 'docx-js';

const document = Document.create();
document.appendParagraph({ text: 'Saved to disk' });

await document.save('./output.docx');
{% endhighlight %}

{% endtabs %}

The parent directory must already exist.

## Writing bytes yourself

In browser-based or custom runtime scenarios, use `saveSync()` and write the bytes with your own file or download logic.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}
import { Document } from 'docx-js';

const document = Document.create();
document.appendParagraph({ text: 'Download me' });

const bytes = document.saveSync();
{% endhighlight %}

{% endtabs %}

## Supported loading and saving workflow

The JavaScript Word library supports this workflow:

1. Create a document with `Document.create()`.
2. Load an existing document with `Document.loadSync()` or `Document.load()`.
3. Modify the main document body through `document.body` and other public document APIs.
4. Save the result with `saveSync()` or `save()`.

The library works with Word `.docx` package bytes.

## Notes

- `Document.loadSync()` and `Document.load()` accept `Uint8Array` input.
- `saveSync()` returns `Uint8Array` output.
- `save(filePath)` is available in Node.js environments.
- The library does not expose a public streaming API.
- Use `LoadOptions.limits` to override ZIP and XML resource limits when needed.

## See also

- API inventory: [docs/api/docx-js.api.md](../api/docx-js.api.md)
- Requirement: [docs/requirements/document-paragraph-run.md](../requirements/document-paragraph-run.md)
- Spec: [docs/specs/document-paragraph-run.md](../specs/document-paragraph-run.md)

## Validation

Validate generated `.docx` output with the available test and validation workflow before shipping changes. Record unsupported or unverified behavior as not documented.
