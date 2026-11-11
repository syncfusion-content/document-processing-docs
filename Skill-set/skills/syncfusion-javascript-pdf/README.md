# Syncfusion JavaScript PDF Library - Skill Documentation

This directory contains comprehensive skill documentation for working with Syncfusion's JavaScript PDF processing libraries. The skill provides detailed guidance on creating, manipulating, extracting data from, and securing PDF documents across multiple platforms.

## Directory Structure

```
syncfusion-javascript-pdf/
├── README.md (this file)
├── SKILL.md (main skill entry point)
└── references/ (22 detailed feature documentation files)
```

## Overview

**Skill Name:** `syncfusion-javascript-pdf`

**Purpose:** Create, manipulate, and process PDF documents programmatically using Syncfusion's JavaScript PDF libraries.

**Libraries:**
- `@syncfusion/ej2-pdf` - Core PDF creation and manipulation
- `@syncfusion/ej2-pdf-data-extract` - Advanced features (text extraction, image extraction, redaction)

**Platform Support:**
- ✅ JavaScript (ES5+)
- ✅ TypeScript
- ✅ Angular
- ✅ React
- ✅ Vue
- ✅ ASP.NET Core
- ✅ ASP.NET MVC
- ✅ Node.js

## Installation

### Core PDF Library (Required)

Install the base PDF library for document creation and manipulation:

```bash
npm install @syncfusion/ej2-pdf --save
```

### Data Extract Library (Optional - For Advanced Features Only)

Install the data extract add-on **only if** you need:
- ✅ Text extraction from PDFs
- ✅ Image extraction from PDFs
- ✅ Content redaction

```bash
npm install @syncfusion/ej2-pdf-data-extract --save
```

> **Note:** The `@syncfusion/ej2-pdf-data-extract` package is an add-on and is **not required** for basic PDF creation, manipulation, or rendering. Only install it when you need text extraction, image extraction, or redaction capabilities.

### Using CDN

**Core Library:**

**Syntax:**
> Script: `https://cdn.syncfusion.com/ej2/{Version}/dist/{PACKAGE_NAME}.min.js`

**Data Extract Library** (if needed):

**Syntax:**
> Script: `https://cdn.syncfusion.com/ej2/{Version}/dist/{PACKAGE_NAME}.min.js`

**Placeholder:**

- Replace **{PACKAGE_NAME}** with one of the following based on your requirement:
  - `ej2-pdf` – for core PDF functionality
  - `ej2-pdf-data-extract` – for PDF data extraction features

- Replace **{VERSION}** with the latest available CDN version of the package. For example: `33.1.44`.

### Dependencies

The following packages are automatically included:

```bash
|-- @syncfusion/ej2-compression
|-- @syncfusion/ej2-base
```

### Platform-Specific Setup

For detailed platform-specific setup instructions, see:
📄 [references/getting-started.md](references/getting-started.md)

## Key Features

### Document Creation & Manipulation
✅ Create PDFs from scratch with complete control  
✅ Add multiple pages with custom settings  
✅ Load and modify existing PDFs  
✅ Set document properties (title, author, subject)  
✅ Save in multiple formats

**Required Package:** `@syncfusion/ej2-pdf`

### Content Addition
✅ Draw text with multiple fonts and sizes  
✅ Add images (JPEG, PNG) with sizing/positioning  
✅ Draw shapes (rectangles, circles, lines, paths)  
✅ Create tables and lists (including custom image markers and advanced table layouts)  
✅ Apply colors, styling, and effects

**Required Package:** `@syncfusion/ej2-pdf`

### Interactive Elements
✅ Create fillable form fields  
✅ Add digital signatures for authentication  
✅ Insert annotations and comments  
✅ Add navigation bookmarks  
✅ Include web and internal hyperlinks

**Required Package:** `@syncfusion/ej2-pdf`

### Advanced Operations
✅ **Extract text from PDFs** ⚠️ *Requires: `@syncfusion/ej2-pdf-data-extract`*  
✅ **Extract images from PDFs** ⚠️ *Requires: `@syncfusion/ej2-pdf-data-extract`*  
✅ **Redact sensitive information** ⚠️ *Requires: `@syncfusion/ej2-pdf-data-extract`*  
✅ Merge multiple PDFs together  
✅ Split documents into individual pages  
✅ Apply watermarks and layers

**Required Packages:**  
- `@syncfusion/ej2-pdf` (for merge, split, watermarks, layers)
- `@syncfusion/ej2-pdf-data-extract` (for extraction and redaction)

### Security Features
✅ Password protection (user and owner passwords)  
✅ Document encryption (RC4 and AES 128/256-bit)  
✅ Permission settings and access control  
✅ Digital signature validation and Long-Term Validation (LTV)

**Required Package:** `@syncfusion/ej2-pdf`

## Available Reference Files (25 Total)

### Core Document Operations

1. **[getting-started.md](references/getting-started.md)** (~200 lines)
   - Installation for both `@syncfusion/ej2-pdf` and `@syncfusion/ej2-pdf-data-extract`
   - Platform-specific setup (TypeScript, JavaScript, Angular, React, Vue, ASP.NET)
   - Basic document creation
   - Save and export operations

2. **[document-settings.md](references/document-settings.md)** (~250 lines)
   - PdfDocument creation
   - Page settings (size, orientation, margins, rotation)
   - Document properties (metadata)
   - Incremental updates
   - Flattening annotations and forms
   - Opening and saving documents (Base64, Uint8Array, password, download, byte array)

3. **[xmp-metadata.md](references/xmp-metadata.md)** (~250 lines)
   - Standard XMP schemas (Basic, Dublin Core, Job Ticket, Rights Management, PDF, Paged Text)
   - Reading, writing, and modifying `xmpMetadata`
   - Custom metadata in Info dictionary (`customMetadata`)
   - Custom XMP schemas with namespaces and prefixes (`PdfCustomSchema`)

4. **[pdf-pages.md](references/pdf-pages.md)** (~200 lines)
   - Adding Pages
   - Page sections
   - Page navigation
   - Page manipulation
   - Page rotation
   - Importing pages

### Content Elements

5. **[text-rendering.md](references/text-rendering.md)** (~300 lines)
   - Drawing text with PdfGraphics
   - Font types and styles
   - Text formatting and layout
   - Graphics state management

6. **[images.md](references/images.md)** (~200 lines)
   - Adding JPEG and PNG images
   - Image positioning and sizing
   - Working with PdfBitmap class

7. **[shapes.md](references/shapes.md)** (~250 lines)
   - Drawing geometric shapes
   - Pens and brushes
   - Complex paths and transformations

8. **[barcodes.md](references/barcodes.md)** (~250 lines)
   - 2D barcodes (`PdfQRBarcode`, `PdfDataMatrixBarcode`, `Pdf417Barcode`)
   - QR Code with centered logo (`PdfQRBarcodeLogo`)
   - Module dimensions (`xDimension`), custom colors, and quiet zones
   - Error correction levels and scanning/printing operational notes

9. **[tables.md](references/tables.md)** (~500 lines)
   - Creating tables with PdfGrid (data source and manual)
   - Table and cell styling, borders, and built-in themes
   - Pagination, repeated headers, and row break prevention
   - Cell spanning, embedded images, background images, and hyperlinks
   - Nested tables and horizontal overflow handling

10. **[lists.md](references/lists.md)** (~200 lines)
    - Ordered and unordered lists
    - Custom markers and image markers (PdfImageMarker)
    - Nested lists and custom fonts
    - List pagination and formatting

11. **[templates.md](references/templates.md)** (~200 lines)
    - Page templates and reusable content
    - Dynamic content stamping
    - Template dimensions, bounds, and graphics operations

12. **[headers-and-footers.md](references/headers-and-footers.md)** (~250 lines)
    - Document-wide headers and footers (`PdfPageTemplateElement`, `document.template`)
    - Odd and even page templates (`oddTop`, `oddBottom`, `evenTop`, `evenBottom`)
    - Section-level templates (`section.template`, `PdfTemplateHorizontalAlignment`)
    - Dynamic automatic fields (page number/count, section numbers, date/time, creation date, author, destination)
    - Formatted combinations with `PdfCompositeField`

### Interactive Features

13. **[annotations.md](references/annotations.md)** (~350 lines)
    - Annotation types (popup, free text, line, shapes, ink, text markup, file attachment, URI, document link, watermark, redaction)
    - Custom appearance in rubber stamp annotations
    - Measurement annotations (line, distance, radius, area, angle)
    - Cloud border style customization (`borderEffect`)
    - Adding, modifying, and deleting annotations
    - Flattening annotations

14. **[bookmarks.md](references/bookmarks.md)** (~200 lines)
    - Creating navigation bookmarks
    - Nested bookmark structures
    - Bookmark modification

15. **[form-fields.md](references/form-fields.md)** (~350 lines)
    - Form field types (text, checkbox, radio, dropdown, button, date, barcode)
    - Field properties, validation, and read-only flags
    - Filling and flattening forms
    - Import/export form data

16. **[hyperlinks.md](references/hyperlinks.md)** (~150 lines)
    - Web and document hyperlinks
    - Link annotations
    - Navigation actions

17. **[digital-signatures.md](references/digital-signatures.md)** (~350 lines)
    - Certificate-based signing and external signing
    - Long-Term Validation (LTV) with OCSP/CRL
    - Digital signature validation (`field.validateSignature()`, `validateSignatures()`)
    - Signature appearance and timestamps

18. **[encryption.md](references/encryption.md)** (~300 lines)
    - Document encryption with RC4 (40/128-bit) and AES (128/256-bit Rev 5/6)
    - User and owner password protection
    - Document permissions and bitwise permission validation
    - Password detection, password type identification, and decryption

### Document Operations

19. **[watermarks.md](references/watermarks.md)** (~200 lines)
    - Text and image watermarks
    - Positioning, opacity, and rotation

20. **[layers.md](references/layers.md)** (~150 lines)
    - Creating and managing layers
    - Layer visibility
    - Removing/flattening layers

21. **[merge-documents.md](references/merge-documents.md)** (~150 lines)
    - Merging multiple PDFs
    - Importing pages
    - Bookmarks preservation

22. **[split-documents.md](references/split-documents.md)** (~150 lines)
    - Splitting by page range
    - Extracting pages
    - Creating separate documents

### Data Extraction & Redaction ⚠️ Requires `@syncfusion/ej2-pdf-data-extract`

23. **[text-extraction.md](references/text-extraction.md)** (~300 lines)
    - ⚠️ **Requires:** `@syncfusion/ej2-pdf-data-extract`
    - Synchronous and asynchronous text extraction (`extractTextSync`, `extractText`)
    - Layout-based and bounds-based extraction (`extractTextLinesSync`, `extractTextLines`)
    - Find text and search multiple text values (`findTextSync`, `findText`)

24. **[image-extraction.md](references/image-extraction.md)** (~200 lines)
    - ⚠️ **Requires:** `@syncfusion/ej2-pdf-data-extract`
    - Extracting images from PDFs
    - Image metadata and properties
    - Saving extracted images

25. **[content-redaction.md](references/content-redaction.md)** (~200 lines)
    - ⚠️ **Requires:** `@syncfusion/ej2-pdf-data-extract`
    - Text and shape redaction
    - Permanent content removal
    - Custom redaction appearance

## Quick Start Examples

### Basic PDF Creation (Core Library Only)

```typescript
import { PdfDocument, PdfPage, PdfGraphics, PdfFont, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a new PDF document
const document = new PdfDocument();

// Add a page
const page: PdfPage = document.addPage();

// Get graphics from the page
const graphics: PdfGraphics = page.graphics;

// Set font
const font: PdfFont = document.embedFont(PdfFontFamily.helvetica, 12, PdfFontStyle.regular);

// Draw text
graphics.drawString('Hello, PDF World!', font, 
  { x: 50, y: 50, width: 500, height: 100 }, 
  new PdfBrush({ r: 0, g: 0, b: 0 }));

// Save the document
document.save('output.pdf');

// Destroy the document
document.destroy();
```

### Text Extraction (Requires Data Extract Library)

```typescript
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
const document = new PdfDocument(pdfData);

// Create data extractor
const extractor = new PdfDataExtractor(document);

// Extract text from all pages
const text = extractor.extractText({
  startPageIndex: 0,
  endPageIndex: document.pageCount - 1
});

console.log(text);

// Destroy the document
document.destroy();
```

### Image Extraction (Requires Data Extract Library)

```typescript
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor, PdfEmbeddedImage } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
const document = new PdfDocument(pdfData);

// Create data extractor
const extractor = new PdfDataExtractor(document);

// Extract images
const images: PdfEmbeddedImage[] = extractor.extractImages({
  startPageIndex: 0,
  endPageIndex: document.pageCount - 1
});

// Access first image
const imageInfo = images[0];
const imageData: Uint8Array = imageInfo.data;

// Destroy the document
document.destroy();
```

### Content Redaction (Requires Data Extract Library)

```typescript
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfRedactor, PdfRedactionRegion, ApplicationPlatform } from '@syncfusion/ej2-pdf-data-extract';

// Load the document
const document = new PdfDocument(pdfData);

// Create redactor
const redactor = new PdfRedactor(document);

// Add redactions
const redactions: PdfRedactionRegion[] = [];
redactions.push(new PdfRedactionRegion(0, { x: 10, y: 10, width: 100, height: 50 }));
redactor.add(redactions);

// Define canvas render callback
const canvasRenderCallback = () => {
  const canvas = document.createElement('canvas');
  return { canvas, applicationPlatform: ApplicationPlatform.typescript };
};

// Apply redactions
await redactor.redact(canvasRenderCallback);

// Save and destroy
document.save('redacted.pdf');
document.destroy();
```

## Core Classes & APIs

### Core Library (`@syncfusion/ej2-pdf`)

| Class | Purpose |
|-------|---------|
| `PdfDocument` | Main document class for creation and manipulation |
| `PdfPage` | Represents individual pages |
| `PdfGraphics` | Drawing operations on pages |
| `PdfFont` | Font management and embedding |
| `PdfBrush` | Fill colors and styling |
| `PdfPen` | Stroke and line styling |
| `PdfImage`, `PdfBitmap` | Image handling |
| `PdfTextBoxField` | Form text input fields |
| `PdfCheckBoxField` | Form checkboxes |
| `PdfRadioButtonField` | Form radio buttons |
| `PdfComboBoxField` | Form dropdown lists |
| `PdfSignature` | Digital signatures |
| `PdfPopupAnnotation` | Comment annotations |
| `PdfBookmark` | Navigation bookmarks |

### Data Extract Library (`@syncfusion/ej2-pdf-data-extract`)

| Class | Purpose |
|-------|---------|
| `PdfDataExtractor` | Extract text and images from PDFs |
| `PdfEmbeddedImage` | Represents extracted image with metadata |
| `PdfRedactor` | Redaction operations manager |
| `PdfRedactionRegion` | Defines area to redact |
| `ApplicationPlatform` | Platform enumeration for redaction |

## Common Use Cases

### Document Generation
**Packages:** `@syncfusion/ej2-pdf`

- **Invoices, Reports, Receipts** → Start with: [document-settings.md](references/document-settings.md), [text-rendering.md](references/text-rendering.md), [images.md](references/images.md)
- **Certificates, Cards** → See: [document-settings.md](references/document-settings.md), [templates.md](references/templates.md)
- **Letters, Documents** → See: [text-rendering.md](references/text-rendering.md), [watermarks.md](references/watermarks.md)

### Interactive Forms
**Packages:** `@syncfusion/ej2-pdf`

- **Fillable Forms** → Read: [form-fields.md](references/form-fields.md)
- **Digital Signatures** → Read: [digital-signatures.md](references/digital-signatures.md)
- **Annotations** → Read: [annotations.md](references/annotations.md)

### Data Extraction
**Packages:** `@syncfusion/ej2-pdf` + `@syncfusion/ej2-pdf-data-extract`

- **Text Extraction** → Read: [text-extraction.md](references/text-extraction.md) ⚠️
- **Image Extraction** → Read: [image-extraction.md](references/image-extraction.md) ⚠️
- **Form Data Extraction** → Read: [form-fields.md](references/form-fields.md)

### Document Management
**Packages:** `@syncfusion/ej2-pdf`

- **Merge PDFs** → Read: [merge-documents.md](references/merge-documents.md)
- **Split PDFs** → Read: [split-documents.md](references/split-documents.md)
- **Watermarking** → Read: [watermarks.md](references/watermarks.md)

### Security & Privacy
**Packages:** Mixed

- **Digital Signatures** → Read: [digital-signatures.md](references/digital-signatures.md) (`ej2-pdf`)
- **Redaction** → Read: [content-redaction.md](references/content-redaction.md) ⚠️ (`ej2-pdf-data-extract`)
- **Password Protection** → Read: [document-settings.md](references/document-settings.md) (`ej2-pdf`)

## Navigation by Feature

### By Package Requirement

#### Core Features (Only `@syncfusion/ej2-pdf`)
- Document creation and settings
- Pages management
- Text rendering
- Image insertion
- Shapes and graphics
- Lists
- Templates
- Bookmarks
- Hyperlinks
- Annotations
- Form fields
- Digital signatures
- Watermarks
- Layers
- Merge/split operations

#### Advanced Features (Requires `@syncfusion/ej2-pdf-data-extract`)
- ⚠️ Text extraction
- ⚠️ Image extraction  
- ⚠️ Content redaction

## Execution mode and input PDF resources

See [references/execution-mode.md](references/execution-mode.md). `scripts/template.ts` runs generated code with `tsx`; an input PDF is used only when the user supplies one (`--input`); new documents need none. Browser hosts use `document.save('output.pdf')` ([references/browser-and-node-io.md](references/browser-and-node-io.md)).

## Troubleshooting

### Installation Issues

**Problem:** Package not found
```bash
npm ERR! 404 '@syncfusion/ej2-pdf' is not in the npm registry
```

**Solution:** Verify package name and npm access. Syncfusion packages require proper npm configuration:
```bash
npm install @syncfusion/ej2-pdf --save
npm install @syncfusion/ej2-pdf-data-extract --save
```

### Import Errors

**Problem:** Cannot find module '@syncfusion/ej2-pdf-data-extract'

**Solution:** This module is only needed for advanced features. If you're not using text extraction, image extraction, or redaction, you don't need to install it. If you do need these features:
```bash
npm install @syncfusion/ej2-pdf-data-extract --save
```

### Platform-Specific Issues

**Problem:** WASM files not loading for extraction features

**Solution:** For `@syncfusion/ej2-pdf-data-extract`, ensure the `ej2-pdf-lib` folder is in your public directory with required `.js` and `.wasm` files. See [getting-started.md](references/getting-started.md) for platform-specific setup.

### Document Won't Load
- Verify PDF file is not corrupted
- Check file permissions and access
- Ensure sufficient memory for large files

### Fonts Not Displaying
- Use standard PDF fonts: Helvetica, Times, Courier
- Verify font is embedded in document
- Check text color has sufficient contrast

### Images Not Appearing
- Verify image format (JPEG/PNG supported)
- Check image file exists and is readable
- Ensure image dimensions fit within page bounds

### Performance Issues
- Process large PDFs in chunks
- Dispose documents after processing (`document.destroy()`)
- Optimize image sizes before embedding
- Use batch processing for multiple files

For detailed troubleshooting, see individual reference files.

## Resources

### NPM Packages
- 📦 **Core Library:** [@syncfusion/ej2-pdf](https://www.npmjs.com/package/@syncfusion/ej2-pdf)
- 📦 **Data Extract Add-on:** [@syncfusion/ej2-pdf-data-extract](https://www.npmjs.com/package/@syncfusion/ej2-pdf-data-extract)

### Official Documentation
- 📖 **PDF Library API:** [Syncfusion JavaScript PDF Library](https://ej2.syncfusion.com/documentation/api/pdf/overview)
- 📖 **Data Extract API:** [Syncfusion PDF Data Extract Library](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/overview)

### Community & Support
- 🔗 **Syncfusion Website:** [www.syncfusion.com](https://www.syncfusion.com)
- 💬 **Community Forums:** [Syncfusion Forums](https://www.syncfusion.com/forums)
- 📧 **Support:** [Syncfusion Support](https://www.syncfusion.com/support)

## Getting Help

### For Specific Features
Each reference file includes:
- Clear explanations
- Working code examples (TypeScript & JavaScript)
- Common patterns and workflows
- Edge cases and gotchas
- Troubleshooting tips

### For Complex Scenarios
Combine multiple reference files:
1. Identify main goal (e.g., "invoice with signature")
2. Read relevant references: document-settings → text-rendering → digital-signatures
3. Follow patterns and adapt to your use case

### For Package Selection
**Decision Tree:**

1. **Do you need text extraction, image extraction, or redaction?**
   - **YES** → Install both `@syncfusion/ej2-pdf` and `@syncfusion/ej2-pdf-data-extract`
   - **NO** → Install only `@syncfusion/ej2-pdf`

2. **Are you only creating/manipulating PDFs without extraction?**
   - **YES** → Install only `@syncfusion/ej2-pdf`
   - **NO** → See question 1

## Skill Metadata

- **Skill Name:** `syncfusion-javascript-pdf`
- **Version:** 1.0.0
- **Author:** Syncfusion Inc
- **Last Updated:** March 22, 2026
- **License:** SEE LICENSE IN license
- **Total Reference Files:** 20
- **Estimated Lines:** ~4,200
- **Platform Support:** JavaScript, TypeScript, Angular, React, Vue, ASP.NET Core, ASP.NET MVC

## Contributing

To suggest improvements or report issues with the skill documentation:
1. Review the skill structure in [SKILL.md](SKILL.md)
2. Check relevant reference files
3. Include specific file(s) and section(s) in your feedback

## License

See LICENSE file for details on Syncfusion licensing and terms of use.

---

**💡 Quick Tip:** If you're new to PDF processing, start with [getting-started.md](references/getting-started.md) and [document-settings.md](references/document-settings.md) to understand the basics before diving into specific features.

**⚠️ Remember:** The `@syncfusion/ej2-pdf-data-extract` package is only required for text extraction, image extraction, and redaction features. All other PDF operations work with the core `@syncfusion/ej2-pdf` package alone.
