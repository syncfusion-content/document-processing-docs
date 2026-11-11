# Getting Started

## Table of Contents
- [Create a document](#create-a-document)
- [Open a document](#open-a-document)
- [Save a document](#save-a-document)
- [Load options and limits](#load-options-and-limits)
- [Errors](#errors)
- [Node.js end-to-end sample](#nodejs-end-to-end-sample)

## Create a document

```ts
import { WordDocument } from '@syncfusion/ej2-docx';
const document = WordDocument.create();
const section = document.sections[0];
const paragraph = section.body.paragraphs[0]; // default empty paragraph
paragraph.appendText('Hello');
```

## Open a document

| Input | Call |
|-------|------|
| `Uint8Array` / `ArrayBuffer` | `WordDocument.open(bytes)` / `WordDocument.openSync(bytes)` |
| base64 string | `WordDocument.open(b64, { format: 'base64' })` (`data:...;base64,` prefix is stripped) |
| Browser `File`/`Blob` | `await WordDocument.openAsync(file)` |
| Promise form of bytes | `await WordDocument.openAsync(bytes)` |

`WordDocument.load(...)` is an alias of `open`. Opening a file system path string is **not supported** – read the file yourself.

```ts
// Browser file input
const doc = await WordDocument.openAsync(inputEl.files![0]);
```

## Save a document

```ts
const bytes  = doc.saveSync();                           // Uint8Array
const b64    = doc.saveSync({ format: 'base64' });       // string
const bytes2 = await doc.save();                         // Promise<Uint8Array>
const b64b   = await doc.save({ format: 'base64' });     // Promise<string>
await doc.save('Output.docx');                           // browser download only
```

- Directory segments in the download name are stripped.
- In Node.js use `saveSync()`/`save()` and write bytes with `fs`.

## Load options and limits

`open(data, { limits })` accepts `LoadOptions.limits` (resource limit overrides) to cap decompressed size, part count, etc. Exceeding a limit throws `SecurityError`. Keep defaults for untrusted input; raise only for trusted large files.

## Errors

| Error | When |
|-------|------|
| `PackageError` | invalid ZIP / OPC package |
| `SecurityError` | a resource limit exceeded (zip bomb protection) |
| `XmlError` | malformed main document XML |
| `InvalidArgumentError` | bad arguments, e.g. invalid base64, empty download name |
| `DetachedObjectError` | mutating an object no longer attached to a document |
| `IoError` | no browser `document` available for download |

```ts
try {
  const doc = WordDocument.open(bytes);
} catch (e) {
  // handle PackageError / SecurityError / XmlError
}
```

## Node.js end-to-end sample

```ts
import { readFileSync, writeFileSync } from 'node:fs';
import { WordDocument } from '@syncfusion/ej2-docx';

const document = WordDocument.create();
const section = document.sections[0];
section.body.appendParagraph({ text: 'Generated with ej2-docx' });
writeFileSync('demo.docx', document.saveSync());

const reopened = WordDocument.open(new Uint8Array(readFileSync('demo.docx')));
console.log(reopened.sections[0].body.paragraphs[0]?.text);
```
section.body.appendParagraph({ style?, text? })` creates a paragraph (optionally styled, e.g. `style: 'Heading1'`) and returns it. Do not call `appendParagraph` / `appendTable` on `WordDocument`
`doc.appendParagraph({ style?, text? })` creates a paragraph (optionally styled, e.g. `style: 'Heading1'`) and returns it.
