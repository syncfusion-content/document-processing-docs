# Rich text and shared strings

Partial formatting inside a cell value, fonts from the workbook factory, and how strings are stored.

## Table of contents

- [Plain string vs rich text](#plain-string-vs-rich-text)
- [createFont](#createfont)
- [richText API](#richtext-api)
- [hasRichText](#hasrichtext)
- [Shared strings behavior](#shared-strings-behavior)
- [Gotchas](#gotchas)

## Plain string vs rich text

```ts
// Plain — entire cell one style via cell.style / default
sheet.cell('A1').text = 'Hello world';

// Rich — different formatting on character runs
sheet.cell('A2').text = 'Hello world'; // seed plain text first if needed
```

Rich text is for **in-value** formatting (bold first word, colored substring). Cell-level `style.font` still applies as the cell’s default formatting context; runs carry overrides.

## createFont

```ts
const wb = Workbook.create();
const sheet = wb.sheet(0);

const bold = wb.createFont();
bold.bold = true;
bold.size = 14;
bold.color = { rgb: 'FFFF0000' };

const italic = wb.createFont();
italic.italic = true;
italic.name = 'Georgia';
```

Use fonts from `workbook.createFont()` when assigning to rich-text character ranges.

## richText API

```ts
const cell = sheet.cell('A1');
cell.text = 'Hello world';

// Format characters [0, 5) → "Hello"
cell.richText.characters(0, 5).font = bold;

// Format "world"
cell.richText.characters(6, 5).font = italic;
```

Pattern:

1. Ensure the cell has the full plain text.
2. Call `cell.richText.characters(start, length)`.
3. Assign a `Font` from `createFont()` (or mutate the run font per API).

```ts
const rt = sheet.cell('A1').richText;
// rt exposes full text and run helpers per RichTextString
```

## hasRichText

```ts
if (sheet.cell('A1').hasRichText) {
  // cell stores multiple runs / rich formatting
}
```

## Shared strings behavior

- Plain string cell values are stored via the workbook **shared string table** (SST).
- Identical strings can share one SST entry; reference counts are maintained on edit.
- Rich strings also participate in shared-string / inline rich representations as implemented by the library.
- **Never renumber** existing shared string indices on save; append new entries only.
- Agents must not rewrite `sharedStrings.xml` manually.

```ts
sheet.cell('A1').text = 'Repeated';
sheet.cell('A2').text = 'Repeated'; // may share SST entry
sheet.cell('A1').text = 'Changed';  // refcounts adjusted internally
```

## Gotchas

- Assigning `.value` / `.text` replaces content and can drop previous rich runs — set rich formatting **after** final text, or reapply runs.
- Setting `.formula` is incompatible with treating the cell as a normal rich string value workflow.
- Do not invent run XML; stay on `richText` + `createFont`.
- SST integrity failures break Excel open — rely on public setters only.
