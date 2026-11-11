# Inline Content: Images, Hyperlinks, Fields, Content Controls

## Table of Contents
- [Images](#images)
- [Hyperlinks](#hyperlinks)
- [Fields](#fields)
- [Content controls](#content-controls)
- [Shapes](#shapes)

All are `Paragraph` methods unless noted.

## Images

PNG and JPEG are sniffed from magic bytes.

```ts
import { readFileSync } from 'node:fs';
import {
  WordDocument, TextWrappingStyle, HorizontalOrigin, VerticalOrigin, HorizontalAlignment, VerticalAlignment,
} from '@syncfusion/ej2-docx';
const document = WordDocument.create();
const section = document.sections[0];
const p = section.body.appendParagraph();
const img = p.appendImage(new Uint8Array(readFileSync('logo.png')), {
  width: 120, height: 60,          // points; omitted -> derived from pixels @96 DPI
  name: 'Logo', description: 'Company logo',
  textWrappingStyle: TextWrappingStyle.Tight,   // Inline | Square | Tight | Through | TopAndBottom | None
  horizontalOrigin: HorizontalOrigin.Column,    // Margin | Page | Column | Character | ...
  verticalOrigin: VerticalOrigin.Paragraph,     // Margin | Page | Paragraph | Line | ...
  horizontalAlignment: HorizontalAlignment.Right, // or horizontalPosition (points); not both
  verticalAlignment: VerticalAlignment.Top,       // or verticalPosition (points); not both
});
img.rotation = 0;
img.lockAspectRatio = true;
```

Do not pass layout values as strings (`'Tight'`, `'Right'`, `'Paragraph'`). Use the exported consts above. Position and alignment are mutually exclusive on the same axis. Captions: `addCaptionToPicture(picture, name, numberingFormat, position)` from `@syncfusion/ej2-docx`.

## Hyperlinks

```ts
import { HyperlinkType } from '@syncfusion/ej2-docx';
p.appendHyperlink('https://www.syncfusion.com', 'Syncfusion', HyperlinkType.WebLink);
p.appendHyperlink('mailto:a@b.com', 'Email', HyperlinkType.EmailLink);
p.appendHyperlink('BookmarkName', 'Jump', HyperlinkType.Bookmark);
p.appendHyperlink('https://x.com', pictureObject, HyperlinkType.WebLink); // picture link
```

Types: `WebLink | EmailLink | FileLink | Bookmark`. Query/remove via `hyperlinksInParagraph`, `removeHyperlink` in `@syncfusion/ej2-docx`.

## Fields

```ts
import { FieldType } from '@syncfusion/ej2-docx';
p.appendField('', FieldType.Page);          // PAGE
p.appendField('', FieldType.NumPages);      // NUMPAGES
p.appendField('FirstName', FieldType.MergeField);
```

Supported types: `PAGE, NUMPAGES, IF, MERGEFIELD, HYPERLINK`. Field instruction text is excluded from `paragraph.text`; only the result is included.

## Content controls

```ts
import { ContentControlType } from '@syncfusion/ej2-docx';
const inline = p.appendInlineContentControl(ContentControlType.CheckBox);
inline.isChecked = true;
const block = section.body.addBlockContentControl(ContentControlType.Text);
block.tag = 'customer';
```

Query: `structuredDocumentTagsInBlocks`, `ContentControl` in `@syncfusion/ej2-docx`.

## Shapes

```ts
// AutoShapeType members: see typings in @syncfusion/ej2-docx/drawing
const shape = p.appendShape(AutoShapeType.Rectangle, 100, 50);
```
