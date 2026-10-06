---
title: Loading and Saving Word document in JavaScript Word | Syncfusion
description: Learn how to create, load, edit, and save Word documents using the Syncfusion JavaScript Word library.
platform: document-processing
control: Word Library
documentation: UG
---

## Open and Save Word documents in JavaScript Word

The JavaScript Word Library enables you to open existing Word documents, modify their content, and save the updated documents. This guide demonstrates how to open a Word document from supported input types and save it as a browser download, a `Uint8Array`, or a Base64 string.

> The Word Library works with Office Open XML `.docx` packages. The `open` and `load` methods do not read a filesystem path directly. In Node.js, read the file by using the host filesystem API and pass the resulting bytes to the library.

### Opening an existing Word document

Open an existing Word document by passing its data to `WordDocument.open`. The method accepts a `Uint8Array`, an `ArrayBuffer`, or a Base64-encoded string. To open a browser `File` or `Blob`, use the asynchronous `WordDocument.openAsync` method.

#### Using Uint8Array

Open an existing Word document by passing the document data as a `Uint8Array`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

const response: Response = await fetch('/input.docx');
if (!response.ok) {
    throw new Error(`Unable to load input.docx (${response.status})`);
}

const data: Uint8Array = new Uint8Array(await response.arrayBuffer());
const document: WordDocument = WordDocument.open(data);
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
const response = await fetch('/input.docx');
if (!response.ok) {
    throw new Error(`Unable to load input.docx (${response.status})`);
}

const data = new Uint8Array(await response.arrayBuffer());
const document = ej.docx.WordDocument.open(data);
{% endhighlight %}
{% endtabs %}

#### Using ArrayBuffer

Open an existing Word document by passing the document data as an `ArrayBuffer`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

const response: Response = await fetch('/input.docx');
if (!response.ok) {
    throw new Error(`Unable to load input.docx (${response.status})`);
}

const data: ArrayBuffer = await response.arrayBuffer();
const document: WordDocument = WordDocument.open(data);
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
const response = await fetch('/input.docx');
if (!response.ok) {
    throw new Error(`Unable to load input.docx (${response.status})`);
}

const data = await response.arrayBuffer();
const document = ej.docx.WordDocument.open(data);
{% endhighlight %}
{% endtabs %}

#### Using a Base64 string

Open an existing Word document from a Base64-encoded string by passing `{ format: 'base64' }` to `WordDocument.open`. A Base64 data URL prefix is optional.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

// Sample Base64-encoded DOCX data.
const data: string = 'UEsDBBQAAAAI...';
const document: WordDocument = WordDocument.open(data, { format: 'base64' });
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Sample Base64-encoded DOCX data.
const data = 'UEsDBBQAAAAI...';
const document = ej.docx.WordDocument.open(data, { format: 'base64' });
{% endhighlight %}
{% endtabs %}

> A string passed without `{ format: 'base64' }` is not treated as a file path. Direct filesystem-path loading is not supported.

#### Using a browser File or Blob

Use `WordDocument.openAsync` to open a browser `File` or `Blob`. The following example opens a `File` selected through an HTML file input. The method reads the object by using its `arrayBuffer()` method.

{% tabs %}
{% highlight html tabtitle="HTML" %}
<input type="file" id="file-input" accept=".docx" />
{% endhighlight %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

const input: HTMLInputElement = document.getElementById('file-input') as HTMLInputElement;

input.addEventListener('change', async (): Promise<void> => {
    const file: File | undefined = input.files?.[0];
    if (!file) {
        return;
    }

    const wordDocument: WordDocument = await WordDocument.openAsync(file);
});
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
const input = document.getElementById('file-input');

input.addEventListener('change', async () => {
    const file = input.files?.[0];
    if (!file) {
        return;
    }

    const wordDocument = await ej.docx.WordDocument.openAsync(file);
});
{% endhighlight %}
{% endtabs %}

### Opening a document asynchronously

Use `WordDocument.openAsync` when a Promise-based API is required. It accepts a `Uint8Array`, an `ArrayBuffer`, a Base64 string with `{ format: 'base64' }`, or a browser `File` or `Blob`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

const response: Response = await fetch('/input.docx');
if (!response.ok) {
    throw new Error(`Unable to load input.docx (${response.status})`);
}

const data: ArrayBuffer = await response.arrayBuffer();
const document: WordDocument = await WordDocument.openAsync(data);
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
const response = await fetch('/input.docx');
if (!response.ok) {
    throw new Error(`Unable to load input.docx (${response.status})`);
}

const data = await response.arrayBuffer();
const document = await ej.docx.WordDocument.openAsync(data);
{% endhighlight %}
{% endtabs %}

### Opening a document with resource limits

Use `LoadOptions` to override resource limits while opening a document. Resource limits help restrict the total uncompressed package size and the uncompressed size of an individual package part.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, type LoadOptions } from '@syncfusion/ej2-docx';

const response: Response = await fetch('/input.docx');
if (!response.ok) {
    throw new Error(`Unable to load input.docx (${response.status})`);
}

const data: Uint8Array = new Uint8Array(await response.arrayBuffer());
const options: LoadOptions = {
    limits: {
        totalUncompressedSize: 50 * 1024 * 1024,
        singlePartUncompressedSize: 25 * 1024 * 1024
    }
};

const document: WordDocument = WordDocument.open(data, options);
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
const response = await fetch('/input.docx');
if (!response.ok) {
    throw new Error(`Unable to load input.docx (${response.status})`);
}

const data = new Uint8Array(await response.arrayBuffer());
const options = {
    limits: {
        totalUncompressedSize: 50 * 1024 * 1024,
        singlePartUncompressedSize: 25 * 1024 * 1024
    }
};

const document = ej.docx.WordDocument.open(data, options);
{% endhighlight %}
{% endtabs %}

### Editing an opened Word document

After opening a document, access its sections and body to add or modify content.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

const response: Response = await fetch('/input.docx');
if (!response.ok) {
    throw new Error(`Unable to load input.docx (${response.status})`);
}

const data: Uint8Array = new Uint8Array(await response.arrayBuffer());
const document: WordDocument = WordDocument.open(data);

// Access the first section and append a paragraph.
const paragraph = document.sections[0].body.appendParagraph();
paragraph.appendText('Appended after opening the document.');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
const response = await fetch('/input.docx');
if (!response.ok) {
    throw new Error(`Unable to load input.docx (${response.status})`);
}

const data = new Uint8Array(await response.arrayBuffer());
const document = ej.docx.WordDocument.open(data);

// Access the first section and append a paragraph.
const paragraph = document.sections[0].body.appendParagraph();
paragraph.appendText('Appended after opening the document.');
{% endhighlight %}
{% endtabs %}

### Saving and downloading a Word document in the browser

Save and download a Word document in the browser by passing a file name to the asynchronous `save` method.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

const response: Response = await fetch('/input.docx');
if (!response.ok) {
    throw new Error(`Unable to load input.docx (${response.status})`);
}

const data: Uint8Array = new Uint8Array(await response.arrayBuffer());
const document: WordDocument = WordDocument.open(data);

// To-Do: Modify the document.

// Save and download the document in the browser.
await document.save('output.docx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
const response = await fetch('/input.docx');
if (!response.ok) {
    throw new Error(`Unable to load input.docx (${response.status})`);
}

const data = new Uint8Array(await response.arrayBuffer());
const document = ej.docx.WordDocument.open(data);

// To-Do: Modify the document.

// Save and download the document in the browser.
await document.save('output.docx');
{% endhighlight %}
{% endtabs %}

> Passing a file name to `save` starts a browser download. It does not write to a Node.js filesystem path.

### Saving a Word document as a Uint8Array

Save the document to memory as a `Uint8Array` by using `saveSync` or the parameterless `save` method. Use the returned bytes to upload the document, store it, process it further, or write it by using the host application's file APIs.

#### Saving synchronously

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

const document: WordDocument = WordDocument.create();
document.lastParagraph.appendText('Generated in memory.');

const data: Uint8Array = document.saveSync();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
const document = ej.docx.WordDocument.create();
document.lastParagraph.appendText('Generated in memory.');

const data = document.saveSync();
{% endhighlight %}
{% endtabs %}

#### Saving asynchronously

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

const document: WordDocument = WordDocument.create();
document.lastParagraph.appendText('Generated in memory.');

const data: Uint8Array = await document.save();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
const document = ej.docx.WordDocument.create();
document.lastParagraph.appendText('Generated in memory.');

const data = await document.save();
{% endhighlight %}
{% endtabs %}

### Saving a Word document as a Base64 string

Pass `{ format: 'base64' }` to `saveSync` or `save` to serialize the document as a Base64-encoded string. Both synchronous and asynchronous save methods support this format.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

const document: WordDocument = WordDocument.create();
document.lastParagraph.appendText('Generated as Base64.');

// Save synchronously as Base64.
const syncBase64: string = document.saveSync({ format: 'base64' });

// Save asynchronously as Base64.
const asyncBase64: string = await document.save({ format: 'base64' });
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
const document = ej.docx.WordDocument.create();
document.lastParagraph.appendText('Generated as Base64.');

// Save synchronously as Base64.
const syncBase64 = document.saveSync({ format: 'base64' });

// Save asynchronously as Base64.
const asyncBase64 = await document.save({ format: 'base64' });
{% endhighlight %}
{% endtabs %}

### Reading and writing Word documents in Node.js

The Word Library does not open or save filesystem paths directly. In Node.js, use the host filesystem APIs to read a `.docx` file, pass its bytes to `WordDocument.open`, and write the bytes returned by `save` or `saveSync`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { readFile, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { WordDocument } = require('@syncfusion/ej2-docx');

// Read the DOCX package using the Node.js filesystem API.
const input: Uint8Array = await readFile('./input.docx');
const document = WordDocument.open(input);

// To-Do: Modify the document.

// Serialize and write the DOCX package using the Node.js filesystem API.
const output: Uint8Array = await document.save();
await writeFile('./output.docx', output);
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { readFile, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { WordDocument } = require('@syncfusion/ej2-docx');

// Read the DOCX package using the Node.js filesystem API.
const input = await readFile('./input.docx');
const document = WordDocument.open(input);

// To-Do: Modify the document.

// Serialize and write the DOCX package using the Node.js filesystem API.
const output = await document.save();
await writeFile('./output.docx', output);
{% endhighlight %}
{% endtabs %}

### Alternative load methods

The library also provides `load`, `loadSync`, and `loadAsync` as aliases for `open`, `openSync`, and `openAsync`, respectively. The alias methods support the same corresponding input types. Use either the `open` naming style or the `load` naming style consistently within an application.
