---
name: syncfusion-javascript-docx
description: Create, open, edit, and save Word (.docx) documents programmatically with the Syncfusion JavaScript Word Library (@syncfusion/ej2-docx) in Node.js and browsers. Covers WordDocument load/save, paragraphs, text and character formatting, tables and merging, images, hyperlinks, fields, lists, headers/footers, sections and page setup, content controls, and error handling. Use whenever the user mentions ej2-docx, DOCX generation or editing in JavaScript/TypeScript, WordDocument, Word document processing without Microsoft Word, or round-tripping docx files.
metadata:
  author: "Syncfusion Inc"
  version: "1.0.0"
---

# Syncfusion JavaScript Word Library (`@syncfusion/ej2-docx`)

Non-UI library for creating, reading, editing and saving `.docx` files in Node.js and browsers. No Microsoft Word needed. Unsupported content (unknown XML, parts, relationships) is preserved on open → save round-trips.

## Install

```bash
npm install @syncfusion/ej2-docx
```

Import from the package root: `import { WordDocument } from '@syncfusion/ej2-docx';`.

## Navigation guide

Read only the reference needed for the task:

| Task | Read |
|------|------|
| Create / open / save, base64, browser vs Node I/O, errors | [references/getting-started.md](references/getting-started.md) |
| Paragraphs, text, character & paragraph formatting, lists | [references/text-and-formatting.md](references/text-and-formatting.md) |
| Tables, cells, merge, table formatting | [references/tables.md](references/tables.md) |
| Images, hyperlinks, fields, content controls | [references/inline-content.md](references/inline-content.md) |
| Sections, page setup, headers/footers, page numbers | [references/sections-headers-footers.md](references/sections-headers-footers.md) |
| Limits, gotchas, internal/unsupported APIs | [references/troubleshooting.md](references/troubleshooting.md) |

## Quick start

```ts
import { WordDocument } from '@syncfusion/ej2-docx';

const document = WordDocument.create();                 // new blank document
const section = document.sections[0];                   // add content on the section body

const paragraph = section.body.paragraphs[0];           // default empty paragraph
paragraph.appendText('Bold intro. ', { bold: true });
paragraph.appendText('Normal text.');

const title = section.body.appendParagraph({ text: 'Quarterly Report' });
title.items; // paragraph items (text ranges, tabs, ...)

const table = section.body.appendTable();               // 1x1 table
table.resetCells(2, 2);                                 // resize to 2 rows x 2 cols
table.rows[0].cells[0].text = 'Name';
table.rows[0].cells[1].text = 'Qty';

const bytes: Uint8Array = doc.saveSync();               // OPC zip bytes
// Node:   fs.writeFileSync('out.docx', bytes)
// Browser: await doc.save('out.docx')  -> triggers a download
```

Open an existing file:

```ts
import { readFileSync } from 'node:fs';
const doc = WordDocument.open(new Uint8Array(readFileSync('in.docx')));
console.log([...doc.sections[0].body.paragraphs].map(p => p.text));
```

## Core object model

- `WordDocument` → `sections[]` → `Section` → `body` (`Body`), `pageSetup`, `headersFooters`.
- `Body` / table cells / headers / footers hold ordered blocks (`items`): `Paragraph`, `Table`, block content controls. `body.paragraphs` is a typed view.
- `Paragraph` → `items` (`TextRange`, `Tab`, fields, hyperlinks, pictures, ...), `paragraphFormat`, `listFormat`, `text` (read-only plain text).
- `TextRange.characterFormat` holds run formatting (`bold`, `italic`, `fontName`, `fontSize`, `textColor`, ...).

## Rules of thumb

1. File paths are not read by `open`; pass bytes (`Uint8Array`/`ArrayBuffer`), a `File`/`Blob` via `openAsync`, or base64 with `{ format: 'base64' }`.
2. Node file writing is done by you (`fs.writeFileSync`) using `saveSync()` or `await save()`. `save('name.docx')` is a browser download only.
3. Add paragraphs and tables on the section body (`document.sections[0].body.appendParagraph` / `appendTable`), not on `WordDocument`. Objects must be attached to a document to be mutated (detached ones throw `DetachedObjectError`).
4. Verify any API against the `.d.ts` of the installed version before using symbols not shown in these references; some members are `@internal` and are trimmed from published typings.
5. Do not execute or rely on VBA/OLE/ActiveX content; the library only preserves it.
