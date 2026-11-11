# Document Settings and Properties

## Table of Contents
- [Overview](#overview)
- [Creating PDF Documents](#creating-pdf-documents)
- [Opening and Saving Documents](#opening-and-saving-documents)
- [Page Settings](#page-settings)
- [Document Properties](#document-properties)
- [Incremental Updates](#incremental-updates)
- [Flattening Content](#flattening-content)
- [Best Practices](#best-practices)
- [Common Gotchas](#common-gotchas)
- [Related References](#related-references)

## Overview

This reference covers configuration of PDF documents including page settings, document metadata properties, incremental updates, and flattening operations.

## Creating PDF Documents

### Basic Document Creation

```typescript
import { PdfDocument } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();

// Add pages and content...

// Save the document
document.save('output.pdf');

// Clean up
document.destroy();
```

### Loading Existing Documents

```typescript
import { PdfDocument } from '@syncfusion/ej2-pdf';

// Load an existing PDF document (Uint8Array or base64 string)
let document: PdfDocument = new PdfDocument(pdfData);

// Modify document...

// Save modified document
document.save('modified.pdf');

// Clean up
document.destroy();
```

## Page Settings

### PdfPageSettings Class

Use `PdfPageSettings` to configure page properties such as size, orientation, margins, and rotation.

```typescript
import { 
  PdfDocument, 
  PdfPage, 
  PdfPageSettings, 
  PdfPageOrientation, 
  PdfMargins,
  PdfRotationAngle 
} from '@syncfusion/ej2-pdf';

// Create page settings
let pageSettings: PdfPageSettings = new PdfPageSettings({
  orientation: PdfPageOrientation.landscape,
  size: { width: 842, height: 595 },  // A4 landscape
  margins: new PdfMargins(40),
  rotation: PdfRotationAngle.angle0
});

// Create document
let document: PdfDocument = new PdfDocument();

// Add page with settings
let page: PdfPage = document.addPage(pageSettings);
```

### Page Size Options

**Standard Sizes (in points, 1 point = 1/72 inch):**
- **A4:** `{ width: 595, height: 842 }` (Portrait) or `{ width: 842, height: 595 }` (Landscape)
- **Letter:** `{ width: 612, height: 792 }` (Portrait)
- **Legal:** `{ width: 612, height: 1008 }` (Portrait)
- **A3:** `{ width: 842, height: 1191 }` (Portrait)
- **A5:** `{ width: 420, height: 595 }` (Portrait)

**Custom Size:**
```typescript
let customSettings: PdfPageSettings = new PdfPageSettings({
  size: { width: 600, height: 800 }  // Custom dimensions in points
});
```

### Page Orientation

```typescript
// Portrait (default)
let portraitSettings: PdfPageSettings = new PdfPageSettings({
  orientation: PdfPageOrientation.portrait
});

// Landscape
let landscapeSettings: PdfPageSettings = new PdfPageSettings({
  orientation: PdfPageOrientation.landscape
});
```

### Page Margins

```typescript
import { PdfMargins, PdfPageSettings } from '@syncfusion/ej2-pdf';

// Uniform margins (all sides)
let uniformMargins: PdfMargins = new PdfMargins(50);  // 50 points on all sides

// Individual margins
let customMargins: PdfMargins = new PdfMargins({
  left: 40,
  top: 50,
  right: 40,
  bottom: 60
});

// Apply to page settings
let pageSettings: PdfPageSettings = new PdfPageSettings({
  margins: customMargins
});
```

**Note:** Default margin is 40 points, providing uniform spacing for better readability.

### Page Rotation

```typescript
import { PdfRotationAngle } from '@syncfusion/ej2-pdf';

// Rotation options
let settings: PdfPageSettings = new PdfPageSettings({
  rotation: PdfRotationAngle.angle0    // No rotation (default)
  // rotation: PdfRotationAngle.angle90   // 90 degrees clockwise
  // rotation: PdfRotationAngle.angle180  // 180 degrees
  // rotation: PdfRotationAngle.angle270  // 270 degrees clockwise
});
```

### Complete Page Settings Example

```typescript
import { 
  PdfDocument, 
  PdfPage, 
  PdfGraphics, 
  PdfPageSettings, 
  PdfPageOrientation, 
  PdfMargins, 
  PdfRotationAngle,
  PdfFont,
  PdfFontFamily,
  PdfFontStyle,
  PdfBrush
} from '@syncfusion/ej2-pdf';

// Create document
let document: PdfDocument = new PdfDocument();

// Configure page settings
let pageSettings: PdfPageSettings = new PdfPageSettings({
  orientation: PdfPageOrientation.landscape,
  size: { width: 842, height: 595 },
  margins: new PdfMargins(40),
  rotation: PdfRotationAngle.angle0
});

// Add page with settings
let page: PdfPage = document.addPage(pageSettings);

// Get graphics
let graphics: PdfGraphics = page.graphics;

// Set font
let font: PdfFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);

// Draw text
graphics.drawString('Hello World', font, 
  { x: 10, y: 20, width: 100, height: 200 }, 
  new PdfBrush({ r: 0, g: 0, b: 255 }));

// Save
document.save('output.pdf');
document.destroy();
```

## Document Properties

### PdfDocumentInformation Class

Set and retrieve document metadata including title, author, subject, keywords, and dates.

```typescript
import { PdfDocument } from '@syncfusion/ej2-pdf';

// Create document
let document: PdfDocument = new PdfDocument();

// Set document properties
document.setDocumentInformation({
  title: "Sample PDF Document",
  author: "John Doe",
  subject: "PDF Metadata Example",
  keywords: "PDF, Metadata, Example",
  creator: "JavaScript PDF Library",
  producer: "JavaScript PDF Engine",
  language: "en-US",
  creationDate: new Date(),
  modificationDate: new Date()
});

// Add content...

// Save
document.save('output.pdf');
document.destroy();
```

### Retrieving Document Properties

```typescript
import { PdfDocument, PdfDocumentInformation } from '@syncfusion/ej2-pdf';

// Load existing document
let document: PdfDocument = new PdfDocument(data);

// Access document information
let info: PdfDocumentInformation = document.getDocumentInformation();

// Get individual properties
let title: string = info.title as string;
let author: string = info.author as string;
let subject: string = info.subject as string;
let keywords: string = info.keywords as string;
let creator: string = info.creator as string;
let producer: string = info.producer as string;
let language: string = info.language as string;
let creationDate: Date = info.creationDate as Date;
let modificationDate: Date = info.modificationDate as Date;

// Clean up
document.destroy();
```

### Property Fields Explained

| Property | Description | Example |
|----------|-------------|---------|
| **title** | Document title | "Sales Report Q4 2025" |
| **author** | Document author/creator name | "John Doe" |
| **subject** | Document subject/topic | "Quarterly Sales Analysis" |
| **keywords** | Search keywords (comma-separated) | "sales, report, Q4, 2025" |
| **creator** | Application that created the document | "Invoice Generator v1.0" |
| **producer** | PDF producer/converter | "Syncfusion PDF Library" |
| **language** | Document language | "en-US", "fr-FR", "de-DE" |
| **creationDate** | When document was created | `new Date()` |
| **modificationDate** | When document was last modified | `new Date()` |

## Incremental Updates

### What is Incremental Update?

Incremental updates allow modifying a PDF by appending changes rather than rewriting the entire document. This improves performance for large documents.

```typescript
import { PdfDocument, PdfPage, PdfGraphics, PdfFont, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

// Create document
let document: PdfDocument = new PdfDocument();

// Disable incremental update (rewrite entire file)
document.fileStructure.isIncrementalUpdate = false;

// Add page
let page: PdfPage = document.addPage();
let graphics: PdfGraphics = page.graphics;
let font: PdfFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);

// Draw text
graphics.drawString('Hello World', font, 
  { x: 10, y: 20, width: 100, height: 200 }, 
  new PdfBrush({ r: 0, g: 0, b: 255 }));

// Save
document.save('output.pdf');
document.destroy();
```

**When to Use:**
- **Enable (default):** For large documents where only small changes are made
- **Disable:** When completely reorganizing document structure or reducing file size

## Flattening Content

### What is Flattening?

Flattening converts interactive elements (annotations, form fields) into static page content, removing interactivity while preserving visual appearance.

```typescript
import { PdfDocument } from '@syncfusion/ej2-pdf';

// Load document with interactive elements
let document: PdfDocument = new PdfDocument(data);

// Flatten all annotations and form fields
document.flatten = true;

// Save flattened document
document.save('output.pdf');

// Clean up
document.destroy();
```

### Why Flatten Documents?

**Benefits:**
- **Security:** Prevent modification of form data or annotations
- **Compatibility:** Ensure consistent appearance across all PDF viewers
- **File Size:** Sometimes reduces file size by removing interactive structures
- **Printing:** Ensures forms and annotations print as expected

**Use Cases:**
- Finalized forms that should not be edited
- Documents for archival or legal purposes
- PDFs for printing where interactivity is not needed
- Converting fillable forms to read-only documents

### Flattening Workflow Example

```typescript
import { PdfDocument, PdfPage, PdfFormFieldsTabOrder } from '@syncfusion/ej2-pdf';

// Load form document
let document: PdfDocument = new PdfDocument(formData);

// Optional: Fill form fields before flattening
let page: PdfPage = document.getPage(0);
// ... fill form fields ...

// Flatten to make non-editable
document.flatten = true;

// Save finalized document
document.save('finalized-form.pdf');
document.destroy();
```

## Opening and Saving Documents

Open an existing PDF from Base64 data or a `Uint8Array`, open encrypted PDFs with passwords, save and trigger downloads, or save to a byte array in memory:

```typescript
// Open from a Base64 string or Uint8Array
let document: PdfDocument = new PdfDocument(base64Data);
let fromBytes: PdfDocument = new PdfDocument(binaryData);

// Open an encrypted document with its password
let secured: PdfDocument = new PdfDocument(data, 'password');

// Save and download in the browser
document.save('output.pdf');

// Save to a Uint8Array (parameterless overload)
let bytes: Uint8Array = document.save();

// Release memory after every load/save
document.destroy();
```

## Best Practices

1. **Always call `destroy()`** after saving to free memory
2. **Set document properties** for better searchability and organization
3. **Use consistent page settings** across similar documents
4. **Flatten documents** when interactivity is no longer needed
5. **Enable incremental updates** for large documents with small changes
6. **Use standard page sizes** (A4, Letter) for compatibility

## Common Gotchas

- **Default Settings:** Pages default to A4 size, portrait orientation, 40pt margins
- **Coordinates:** Start from top-left (0, 0), not bottom-left
- **Rotation:** Applied to page content, not just display orientation
- **Flattening:** Irreversible - keep original if you need to edit later
- **Incremental Updates:** Only beneficial for existing documents, not new creation

## Related References

- **Adding pages:** See [pdf-pages.md](pdf-pages.md)
- **Text content:** See [text-rendering.md](text-rendering.md)
- **Forms:** See [form-fields.md](form-fields.md)
- **Annotations:** See [annotations.md](annotations.md)
- **XMP Metadata:** See [xmp-metadata.md](xmp-metadata.md)
