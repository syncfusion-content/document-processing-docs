# PDF Headers and Footers

Header and footer support in the Syncfusion JavaScript PDF Library lets you add reusable content across all pages, distinct odd and even pages, or specific sections in a PDF document. The library reserves page margin layout space automatically so that header and footer templates do not overlap page body content.

## Table of Contents

- [Overview](#overview)
- [Document-Wide Headers and Footers](#document-wide-headers-and-footers)
- [Odd and Even Page Templates](#odd-and-even-page-templates)
- [Section-Level Headers and Footers](#section-level-headers-and-footers)
- [Automatic Fields](#automatic-fields)
  - [Supported Field Types](#supported-field-types)
  - [Page Number Field](#page-number-field)
  - [Page Count Field](#page-count-field)
  - [Section Page Number Field](#section-page-number-field)
  - [Section Page Count Field](#section-page-count-field)
  - [Section Number Field](#section-number-field)
  - [Date and Time Field](#date-and-time-field)
  - [Creation Date Field](#creation-date-field)
  - [Document Author Field](#document-author-field)
  - [Destination Page Number Field](#destination-page-number-field)
  - [Composite Field](#composite-field)
- [Best Practices](#best-practices)
- [Common Gotchas](#common-gotchas)
- [Related References](#related-references)

---

## Overview

In the Syncfusion JavaScript PDF Library:
- Headers and footers are created using `PdfPageTemplateElement` instances.
- They are attached to the document via `document.template` (`top`, `bottom`, `oddTop`, `oddBottom`, `evenTop`, `evenBottom`) or to a section via `section.template`.
- The library allocates dedicated margins for the templates so subsequent `page.graphics` drawing operations do not collide with headers or footers.
- Both static elements (text, images, shapes, lines) and dynamic elements (automatic fields like page numbers, dates, and author metadata) can be rendered onto header/footer graphics.

---

## Document-Wide Headers and Footers

Create header and footer `PdfPageTemplateElement` instances and assign them to `document.template.top` and `document.template.bottom`:

```typescript
import {
  PdfDocument,
  PdfPage,
  PdfPageTemplateElement,
  PdfStandardFont,
  PdfFontFamily,
  PdfFontStyle,
  PdfBrush,
  PdfPen,
  PdfBitmap,
  PdfPageNumberField,
  PdfPageCountField,
  PdfCompositeField,
  PdfVerticalAlignment,
  PdfStringFormat,
  PdfTextAlignment
} from '@syncfusion/ej2-pdf';

// Create a new PDF document
const document: PdfDocument = new PdfDocument();
const page: PdfPage = document.addPage();

// 1. Create Header Template (width: 515 pt, height: 50 pt)
const header: PdfPageTemplateElement = new PdfPageTemplateElement({ width: 515, height: 50 });
const titleFont: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 16, PdfFontStyle.bold);

const center: PdfStringFormat = new PdfStringFormat();
center.alignment = PdfTextAlignment.center;
center.lineAlignment = PdfVerticalAlignment.middle;

// Draw title and border lines in header
header.graphics.drawString(
  'Syncfusion Essential PDF',
  titleFont,
  { x: 0, y: 0, width: 515, height: 50 },
  new PdfBrush({ r: 44, g: 71, b: 120 }),
  center
);
header.graphics.drawLine(new PdfPen({ r: 0, g: 0, b: 139 }, 1), { x: 0, y: 0 }, { x: 515, y: 0 });
header.graphics.drawLine(new PdfPen({ r: 0, g: 0, b: 139 }, 1), { x: 0, y: 50 }, { x: 515, y: 50 });

// Assign header template to top of document
document.template.top = { template: header };

// 2. Create Footer Template
const footerFont: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
const footer: PdfPageTemplateElement = new PdfPageTemplateElement({ width: 515, height: 40 });

// Draw copyright text
footer.graphics.drawString(
  '© Copyright 2025 Syncfusion',
  footerFont,
  { x: 0, y: 15, width: 250, height: 20 },
  new PdfBrush({ r: 128, g: 128, b: 128 })
);

// Draw dynamic page number composite field ("Page {0} of {1}")
const pageNumber: PdfPageNumberField = new PdfPageNumberField({ font: footerFont });
const pageCount: PdfPageCountField = new PdfPageCountField({ font: footerFont });
const composite: PdfCompositeField = new PdfCompositeField({
  font: footerFont,
  brush: new PdfBrush({ r: 128, g: 128, b: 128 }),
  pattern: 'Page {0} of {1}',
  automaticFields: [pageNumber, pageCount]
});
composite.draw(footer.graphics, { x: 415, y: 15 });

// Assign footer template to bottom of document
document.template.bottom = { template: footer };

// Save and release
document.save('header-footer.pdf');
document.destroy();
```

---

## Odd and Even Page Templates

Assign different templates to odd and even pages using `oddTop`, `oddBottom`, `evenTop`, and `evenBottom` on `document.template`:

```typescript
import {
  PdfDocument,
  PdfPage,
  PdfPageTemplateElement,
  PdfStandardFont,
  PdfFontFamily,
  PdfBrush,
  PdfStringFormat,
  PdfTextAlignment,
  PdfVerticalAlignment
} from '@syncfusion/ej2-pdf';

const document: PdfDocument = new PdfDocument();
document.addPage();
document.addPage();

const font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 11);
const center: PdfStringFormat = new PdfStringFormat();
center.alignment = PdfTextAlignment.center;
center.lineAlignment = PdfVerticalAlignment.middle;

// Odd page header
const oddHeader: PdfPageTemplateElement = new PdfPageTemplateElement({ width: 515, height: 40 });
oddHeader.graphics.drawString(
  'Odd Page Header - Document Guide',
  font,
  { x: 0, y: 0, width: 515, height: 40 },
  new PdfBrush({ r: 0, g: 0, b: 0 }),
  center
);

// Even page header
const evenHeader: PdfPageTemplateElement = new PdfPageTemplateElement({ width: 515, height: 40 });
evenHeader.graphics.drawString(
  'Even Page Header - Chapter 1',
  font,
  { x: 0, y: 0, width: 515, height: 40 },
  new PdfBrush({ r: 0, g: 0, b: 0 }),
  center
);

// Assign odd and even templates
document.template.oddTop = { template: oddHeader };
document.template.evenTop = { template: evenHeader };

document.save('odd-even-headers.pdf');
document.destroy();
```

---

## Section-Level Headers and Footers

Assign headers and footers to a specific `PdfSection` rather than document-wide. This is useful when different sections (e.g., front matter, content chapters, appendix) require distinct header and footer styles.

Use `PdfTemplateHorizontalAlignment` (`left`, `center`, `right`) to align section templates horizontally:

```typescript
import {
  PdfDocument,
  PdfSection,
  PdfPageTemplateElement,
  PdfStandardFont,
  PdfFontFamily,
  PdfBrush,
  PdfTemplateHorizontalAlignment
} from '@syncfusion/ej2-pdf';

const document: PdfDocument = new PdfDocument();
const section: PdfSection = document.addSection();
section.addPage();

const font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 12);
const brush: PdfBrush = new PdfBrush({ r: 0, g: 0, b: 0 });

// Section header
const sectionHeader: PdfPageTemplateElement = new PdfPageTemplateElement({ width: 500, height: 50 });
sectionHeader.graphics.drawString('Section Header', font, { x: 10, y: 10, width: 150, height: 30 }, brush);
section.template.top = {
  template: sectionHeader,
  alignment: PdfTemplateHorizontalAlignment.center
};

// Section footer
const sectionFooter: PdfPageTemplateElement = new PdfPageTemplateElement({ width: 500, height: 50 });
sectionFooter.graphics.drawString('Section Footer', font, { x: 10, y: 10, width: 150, height: 30 }, brush);
section.template.bottom = {
  template: sectionFooter,
  alignment: PdfTemplateHorizontalAlignment.center
};

document.save('section-header-footer.pdf');
document.destroy();
```

---

## Automatic Fields

Automatic fields are dynamic elements evaluated at render time based on page position, section structure, or document metadata.

### Supported Field Types

| Field Class | Description |
|---|---|
| `PdfPageNumberField` | Displays the current page number |
| `PdfPageCountField` | Displays the total number of pages in the document |
| `PdfSectionPageNumberField` | Displays the page number within the current section |
| `PdfSectionPageCountField` | Displays the total number of pages in the current section |
| `PdfSectionNumberField` | Displays the section number of the current page |
| `PdfDateTimeField` | Displays the current system date and time |
| `PdfCreationDateField` | Displays the creation date read from document metadata |
| `PdfDocumentAuthorField` | Displays the author metadata read from document properties |
| `PdfDestinationPageNumberField` | Displays the page number of a specific destination page target |
| `PdfCompositeField` | Combines multiple fields using a format pattern (`Page {0} of {1}`) |

All automatic field constructors accept an options object with:
- `font`: `PdfFont` / `PdfStandardFont`
- `brush`: `PdfBrush` for text color
- `stringFormat`: `PdfStringFormat` for text alignment
- `numberStyle`: `PdfNumberStyle` (e.g. `PdfNumberStyle.numeric`) for page/section number fields

Fields are rendered using `.draw(graphics, { x, y })` on either a `page.graphics` or a template `header.graphics`/`footer.graphics`.

### Page Number Field

```typescript
import { PdfDocument, PdfPage, PdfPageNumberField, PdfStandardFont, PdfFontFamily, PdfBrush, PdfStringFormat, PdfTextAlignment, PdfNumberStyle } from '@syncfusion/ej2-pdf';

const document: PdfDocument = new PdfDocument();
const page: PdfPage = document.addPage();

const font = new PdfStandardFont(PdfFontFamily.helvetica, 12);
const brush = new PdfBrush({ r: 0, g: 0, b: 0 });
const format = new PdfStringFormat(PdfTextAlignment.right);

const pageNumber: PdfPageNumberField = new PdfPageNumberField({
  font: font,
  brush: brush,
  stringFormat: format,
  numberStyle: PdfNumberStyle.numeric
});
pageNumber.draw(page.graphics, { x: 250, y: 750 });
```

### Page Count Field

```typescript
import { PdfPageCountField, PdfStandardFont, PdfFontFamily, PdfBrush, PdfStringFormat, PdfTextAlignment, PdfNumberStyle } from '@syncfusion/ej2-pdf';

const pageCount: PdfPageCountField = new PdfPageCountField({
  font: new PdfStandardFont(PdfFontFamily.helvetica, 12),
  brush: new PdfBrush({ r: 0, g: 0, b: 0 }),
  stringFormat: new PdfStringFormat(PdfTextAlignment.right),
  numberStyle: PdfNumberStyle.numeric
});
pageCount.draw(page.graphics, { x: 250, y: 730 });
```

### Section Page Number Field

```typescript
import { PdfSectionPageNumberField, PdfStandardFont, PdfFontFamily, PdfBrush, PdfStringFormat, PdfTextAlignment, PdfNumberStyle } from '@syncfusion/ej2-pdf';

const sectionPageNumber: PdfSectionPageNumberField = new PdfSectionPageNumberField({
  font: new PdfStandardFont(PdfFontFamily.helvetica, 12),
  brush: new PdfBrush({ r: 0, g: 0, b: 0 }),
  stringFormat: new PdfStringFormat(PdfTextAlignment.right),
  numberStyle: PdfNumberStyle.numeric
});
sectionPageNumber.draw(page.graphics, { x: 200, y: 680 });
```

### Section Page Count Field

```typescript
import { PdfSectionPageCountField, PdfStandardFont, PdfFontFamily, PdfBrush, PdfStringFormat, PdfTextAlignment, PdfNumberStyle } from '@syncfusion/ej2-pdf';

const sectionPageCount: PdfSectionPageCountField = new PdfSectionPageCountField({
  font: new PdfStandardFont(PdfFontFamily.helvetica, 12),
  brush: new PdfBrush({ r: 0, g: 0, b: 0 }),
  stringFormat: new PdfStringFormat(PdfTextAlignment.right),
  numberStyle: PdfNumberStyle.numeric
});
sectionPageCount.draw(page.graphics, { x: 200, y: 660 });
```

### Section Number Field

```typescript
import { PdfSectionNumberField, PdfStandardFont, PdfFontFamily, PdfBrush, PdfStringFormat, PdfTextAlignment, PdfNumberStyle } from '@syncfusion/ej2-pdf';

const sectionNumber: PdfSectionNumberField = new PdfSectionNumberField({
  font: new PdfStandardFont(PdfFontFamily.helvetica, 12),
  brush: new PdfBrush({ r: 0, g: 0, b: 0 }),
  stringFormat: new PdfStringFormat(PdfTextAlignment.right),
  numberStyle: PdfNumberStyle.numeric
});
sectionNumber.draw(page.graphics, { x: 200, y: 700 });
```

### Date and Time Field

Displays system current date and time:

```typescript
import { PdfDateTimeField, PdfStandardFont, PdfFontFamily, PdfBrush, PdfStringFormat } from '@syncfusion/ej2-pdf';

const dateTime: PdfDateTimeField = new PdfDateTimeField({
  font: new PdfStandardFont(PdfFontFamily.helvetica, 12),
  brush: new PdfBrush({ r: 0, g: 0, b: 0 }),
  stringFormat: new PdfStringFormat()
});
dateTime.draw(page.graphics, { x: 200, y: 640 });
```

### Creation Date Field

Reads date metadata configured via `document.setDocumentInformation({ creationDate: ... })`:

```typescript
import { PdfCreationDateField, PdfStandardFont, PdfFontFamily, PdfBrush, PdfStringFormat } from '@syncfusion/ej2-pdf';

document.setDocumentInformation({ creationDate: new Date() });

const creationDate: PdfCreationDateField = new PdfCreationDateField({
  font: new PdfStandardFont(PdfFontFamily.helvetica, 12),
  brush: new PdfBrush({ r: 0, g: 0, b: 0 }),
  stringFormat: new PdfStringFormat(),
  dateFormat: 'yyyy/MM/dd'
});
creationDate.draw(page.graphics, { x: 200, y: 620 });
```

### Document Author Field

Reads author metadata configured via `document.setDocumentInformation({ author: ... })`:

```typescript
import { PdfDocumentAuthorField, PdfStandardFont, PdfFontFamily, PdfBrush, PdfStringFormat } from '@syncfusion/ej2-pdf';

document.setDocumentInformation({ author: 'Syncfusion' });

const authorField: PdfDocumentAuthorField = new PdfDocumentAuthorField({
  font: new PdfStandardFont(PdfFontFamily.helvetica, 12),
  brush: new PdfBrush({ r: 0, g: 0, b: 0 }),
  stringFormat: new PdfStringFormat()
});
authorField.draw(page.graphics, { x: 200, y: 580 });
```

### Destination Page Number Field

Displays the dynamic page number of another target page (useful in indexes or cross-references):

```typescript
import { PdfDestinationPageNumberField, PdfStandardFont, PdfFontFamily, PdfBrush, PdfStringFormat, PdfTextAlignment, PdfNumberStyle } from '@syncfusion/ej2-pdf';

const page1 = document.addPage();
const page2 = document.addPage();

const destination: PdfDestinationPageNumberField = new PdfDestinationPageNumberField({
  font: new PdfStandardFont(PdfFontFamily.helvetica, 12),
  brush: new PdfBrush({ r: 0, g: 0, b: 0 }),
  stringFormat: new PdfStringFormat(PdfTextAlignment.right),
  numberStyle: PdfNumberStyle.numeric,
  page: page2
});
destination.draw(page1.graphics, { x: 200, y: 600 });
```

### Composite Field

Combines multiple automatic fields into a formatted string template (e.g. `Page {0} of {1}`):

```typescript
import { PdfCompositeField, PdfPageNumberField, PdfPageCountField, PdfStandardFont, PdfFontFamily, PdfBrush } from '@syncfusion/ej2-pdf';

const font = new PdfStandardFont(PdfFontFamily.helvetica, 10);
const brush = new PdfBrush({ r: 128, g: 128, b: 128 });

const pageNumber = new PdfPageNumberField({ font, brush });
const pageCount = new PdfPageCountField({ font, brush });

const composite = new PdfCompositeField({
  font: font,
  brush: brush,
  pattern: 'Page {0} of {1}',
  automaticFields: [pageNumber, pageCount]
});
composite.draw(footer.graphics, { x: 415, y: 20 });
```

---

## Best Practices

1. **Use `PdfPageTemplateElement` for Margins**: Assigning to `document.template.top`/`bottom` automatically offsets body page coordinates so content never overlaps headers or footers.
2. **Combine Fields with `PdfCompositeField`**: Use `PdfCompositeField` rather than drawing individual number fields separately to ensure correct string alignment and spacing (e.g., `Page {0} of {1}`).
3. **Use Section Templates for Varied Layouts**: When front matter (cover, table of contents) should not display headers/footers, split the document into `PdfSection` instances and assign templates only to content sections.
4. **Odd/Even Page Alternation**: For book-style printing or bound publications, use `document.template.oddTop` and `document.template.evenTop` to alternate header placement.
5. **Set Metadata Before Metadata Fields**: If using `PdfCreationDateField` or `PdfDocumentAuthorField`, invoke `document.setDocumentInformation()` before rendering.

---

## Common Gotchas

- **Template Dimensions**: `PdfPageTemplateElement` width and height determine the reserved header/footer box. If the height is too small, drawn text or graphics may clip.
- **Coordinate Space**: The template's graphics context starts at `(0, 0)` within its own bounding box, not at the parent page's top-left corner.
- **Page Association**: Ensure `addPage()` is called so the document has pages on which the document template can render.
- **Section Alignment**: Section templates accept `alignment: PdfTemplateHorizontalAlignment.center` (`left`, `center`, `right`) to control positioning across varying page widths.

---

## Related References

- [Templates](./templates.md) - General reusable page templates and stamping
- [PDF Pages](./pdf-pages.md) - Working with document pages and sections
- [Text Rendering](./text-rendering.md) - Fonts, formatting, and string formats
- [Document Settings](./document-settings.md) - Document properties and creation metadata
