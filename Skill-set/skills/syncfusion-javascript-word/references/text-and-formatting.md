# Text, Formatting and Lists

## Table of Contents
- [Paragraphs and text](#paragraphs-and-text)
- [Character formatting](#character-formatting)
- [Paragraph formatting](#paragraph-formatting)
- [Lists](#lists)
- [Reading content](#reading-content)

## Paragraphs and text

```ts
import { WordDocument } from '@syncfusion/ej2-docx';
const document = WordDocument.create();
const section = document.sections[0];

const p = section.body.appendParagraph({ style: 'Heading1', text: 'Title' });
const para = section.body.appendParagraph();
const range = para.appendText('Hello ', { bold: true, italic: false, fontSize: 14 });
para.appendText('world');       // '\t' inside text becomes a Tab item
para.text;                      // 'Hello world' (read-only plain text; skips field instructions)
```

- `appendText(text, { bold?, italic?, fontSize? })` returns the first `TextRange`.
- `appendTextRange()` adds an empty `TextRange` you fill via `range.text`.
- Add or remove paragraphs through the section body collections (`section.body.items`).

## Character formatting

Via `textRange.characterFormat` (all optional/undefined = inherit):

`bold, italic, strikethrough, doubleStrikethrough, allCaps, smallCaps, hidden, emboss, engrave, outline, shadow, noProof, fontName, fontSize, underlineStyle, underlineColor, textColor, highlightColor, textBackgroundColor, subSuperScript, characterSpacing, position, kerning, scaling, border, localeId, characterStyle`

```ts
import { Color, UnderlineStyle } from '@syncfusion/ej2-docx';
const r = para.appendText('Important');
r.characterFormat.fontName = 'Calibri';
r.characterFormat.fontSize = 12;
r.characterFormat.textColor = Color.Red;
r.characterFormat.underlineStyle = UnderlineStyle.Single;
```

`Color` is an enum of named colors; check `UnderlineStyle` members in the typings.

## Paragraph formatting

Via `paragraph.paragraphFormat`:

`horizontalAlignment, leftIndent, rightIndent, firstLineIndent, beforeSpacing, afterSpacing, lineSpacing, lineSpacingRule, keepFollow, keepLines, pageBreakBefore, pageBreakAfter, widowControl, bidi, outlineLevel, tabs, borders`

```ts
import { ParagraphAlignment } from '@syncfusion/ej2-docx';
const pf = para.paragraphFormat;
pf.horizontalAlignment = ParagraphAlignment.Center;  // Left | Center | Right | Justify
pf.firstLineIndent = 18;      // points
pf.beforeSpacing = 6;
pf.afterSpacing = 6;
```

Units are points unless stated; length helpers (`Twips`, `Cm`, etc.) are exported from the root.

## Lists

Use `paragraph.listFormat` (preferred over deprecated `paragraph.numbering`):

```ts
const li = section.body.appendParagraph({ text: 'First item' });
li.listFormat.applyDefBulletStyle();       // or applyDefNumberedStyle()
li.listFormat.increaseIndentLevel();       // nest
li.listFormat.decreaseIndentLevel();
li.listFormat.restartNumbering(1);
li.listFormat.continueListNumbering();
li.listFormat.removeList();
li.listString;                             // resolved label, e.g. '1.' (read-only)
```

`listFormat.applyStyle(name)` applies a named list style.

## Reading content

```ts
const section = doc.sections[0];
for (const p of section.body.paragraphs) console.log(p.text);
```