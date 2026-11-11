# Browser and Node.js I/O

`@syncfusion/ej2-pdf` runs in both hosts. Only the file I/O differs, so keep document-building code free of `fs`.

## Table of contents

- [Choosing the host](#choosing-the-host)
- [Browser: save and download](#browser-save-and-download)
- [Browser: user-supplied input PDF](#browser-user-supplied-input-pdf)
- [Node.js: read and write files](#nodejs-read-and-write-files)
- [Input PDF rules](#input-pdf-rules)

## Choosing the host

| Host | Output | Input |
|---|---|---|
| Browser / DOM | `document.save('output.pdf')` triggers a download | `<input type="file">` or `fetch` bytes |
| Node.js | `fs.writeFileSync(path, document.save())` (Mode 2 does this) | `fs.readFileSync(path)` |

Never import `node:fs` or `node:path` in browser code. `scripts/template.ts` is Node-only; Mode 2 cannot run in a browser, so in a browser answer with Mode 1 code.

## Browser: save and download

```ts
import { PdfDocument, PdfStandardFont, PdfFontFamily, PdfBrush } from '@syncfusion/ej2-pdf';

const document = new PdfDocument();
const page = document.addPage();
page.graphics.drawString('Hello', new PdfStandardFont(PdfFontFamily.helvetica, 12),
  { x: 40, y: 40, width: 300, height: 20 }, new PdfBrush({ r: 0, g: 0, b: 0 }));
document.save('output.pdf'); // downloads in the browser
document.destroy();
```

## Browser: user-supplied input PDF

```ts
const file = (document.getElementById('pdf') as HTMLInputElement).files![0];
const data = new Uint8Array(await file.arrayBuffer());
const pdf = new PdfDocument(data);
// ... edit or read ...
pdf.save('modified.pdf');
pdf.destroy();
```

## Node.js: read and write files

```ts
import * as fs from 'node:fs';
const pdf = new PdfDocument(new Uint8Array(fs.readFileSync('in.pdf')));
fs.writeFileSync('out.pdf', pdf.save());
pdf.destroy();
```

## Input PDF rules

- A new document ("create a PDF with ...") needs **no** input.
- Parsing, extraction, redaction, form filling, merging and similar tasks need the **user's** PDF (uploaded file, path, or bytes). If none was given, ask for it. Do not substitute a bundled sample.
