# Syncfusion JavaScript Word Library skill

Agent skill for creating, opening, editing, and saving Word (`.docx`) files with `@syncfusion/ej2-docx` in Node.js and browsers.

## Install the library

```bash
npm install @syncfusion/ej2-docx
```

Import from the package root:

```ts
import { WordDocument } from '@syncfusion/ej2-docx';
```

## Add content on the section body

Do not call `appendParagraph` or `appendTable` on `WordDocument`. Access a section and add blocks on its body.

```ts
import { WordDocument } from '@syncfusion/ej2-docx';

let document = WordDocument.create();
let section = document.sections[0];

let paragraph = section.body.paragraphs[0];
paragraph.listFormat.applyDefBulletStyle();
paragraph = section.body.appendParagraph();

let table = section.body.appendTable();
```

## Files

| File | Contents |
|------|----------|
| [SKILL.md](SKILL.md) | Skill entry: install, quick start, object model |
| [references/getting-started.md](references/getting-started.md) | Create, open, save, errors |
| [references/text-and-formatting.md](references/text-and-formatting.md) | Paragraphs, formatting, lists |
| [references/tables.md](references/tables.md) | Tables, merge |
| [references/inline-content.md](references/inline-content.md) | Images, hyperlinks, fields, content controls |
| [references/sections-headers-footers.md](references/sections-headers-footers.md) | Sections, page setup, headers and footers |
| [references/troubleshooting.md](references/troubleshooting.md) | Gotchas and unsupported APIs |
