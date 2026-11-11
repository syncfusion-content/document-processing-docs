# Sections, Page Setup, Headers and Footers

## Table of Contents
- [Sections](#sections)
- [Page setup](#page-setup)
- [Headers and footers](#headers-and-footers)
- [Page numbers](#page-numbers)

## Sections

```ts
const document = WordDocument.create();
const first = document.sections[0];
const second = document.addSection();  // appends a section
// doc.sections.insert(i) / remove(section) / removeAt(i) / count
second.body.paragraphs[0]?.appendText('New section content');
```

Each `Section` exposes `body`, `paragraphs`, `tables`, `blockContentControls`, `pageSetup`, `headersFooters`.

## Page setup

```ts
const ps = document.sections[0].pageSetup;
ps.orientation = PageOrientation.Landscape;   // enum from root export
ps.margins.left = 72;                         // points; margins.all sets all four
ps.margins.top = 72;
ps.headerDistance = 36;
ps.footerDistance = 36;
ps.differentFirstPage = true;
ps.differentOddAndEvenPages = false;
ps.pageStartingNumber = 1;
ps.restartPageNumbering = false;
ps.pageNumberStyle = PageNumberStyle.Arabic;  // check enum members in typings
ps.pageSize;                                  // SizeF { width, height } in points
```

Other members: `gutter, verticalAlignment, bidi, borders, lineNumbering*`.

## Headers and footers

`section.headersFooters` has `oddHeader`, `firstPageHeader`, `evenHeader`, `oddFooter`, `firstPageFooter`, `evenFooter`. Each is a body-like container (`HeaderFooter extends Body`):

```ts
const hf = document.sections[0].headersFooters;
hf.oddHeader.appendParagraph({ text: 'Company Confidential' });

document.sections[0].pageSetup.differentFirstPage = true;
hf.firstPageHeader.appendParagraph({ text: 'Cover page header' });

const footerPara = hf.oddFooter.appendParagraph();
footerPara.appendText('Page ');
```

Header/footer containers accept paragraphs, tables, and images like any body.

## Page numbers

```ts
import { FieldType } from '@syncfusion/ej2-docx';
footerPara.appendText('Page ');
footerPara.appendField('', FieldType.Page);
footerPara.appendText(' of ');
footerPara.appendField('', FieldType.NumPages);
```
