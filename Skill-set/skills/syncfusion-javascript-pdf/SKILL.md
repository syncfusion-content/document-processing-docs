---
name: syncfusion-javascript-pdf
description: "Provides comprehensive guidance for implementing the Syncfusion JavaScript PDF library (@syncfusion/ej2-pdf) to create and manipulate PDF documents programmatically across TypeScript, JavaScript, Angular, React, Vue, and ASP.NET platforms. Use this when working with PDF creation, tables, lists, form filling, annotations, encryption, document merging/splitting, text or image extraction, or digital signatures."
metadata:
  author: "Syncfusion Inc"
  version: "1.0.0"
---

# Processing PDF Documents

A comprehensive skill for creating, reading, and manipulating PDF documents programmatically using the Syncfusion JavaScript PDF library. This library provides seamless integration for TypeScript, JavaScript, Angular, React, Vue, ASP.NET Core, and ASP.NET MVC applications.

## When to Use This Skill

Use this skill when the user needs to:

- **Create PDF documents** from scratch with text, images, shapes, tables, lists, and other graphical elements
- **Manipulate existing PDFs** by adding content, modifying properties, or extracting data
- **Add interactive features** such as forms, annotations, bookmarks, and hyperlinks
- **Secure PDFs** with password protection, RC4/AES encryption, permissions, and digital signatures
- **Merge or split** PDF documents for document management workflows
- **Extract content** including text (with search and bounds) and images from existing PDFs
- **Add watermarks** (text or image-based) for branding or security
- **Manage document informations** including title, author, subject, keywords, and dates
- **Work with PDF layers** for complex document structures
- **Implement templates** for consistent document generation

**Platform Support:** TypeScript, JavaScript, Angular, React, Vue, ASP.NET Core, ASP.NET MVC

## Library Overview

The Syncfusion JavaScript PDF library (`@syncfusion/ej2-pdf`) is a powerful, high-performance class library that enables:

- Creating PDF documents from scratch without Adobe Acrobat
- Loading, editing, and saving existing PDF files
- Opening password-protected PDF documents
- Adding text, images, shapes, and graphical elements
- Interactive components (bookmarks, annotations, form fields)
- Document operations (merge, split, flatten)
- Content extraction (text, images)
- Security features (digital signatures, LTV, validation, encryption, redaction)

**Key Classes:**
- `PdfDocument` - Main document object
- `PdfPage` - Individual pages
- `PdfGraphics` - Drawing surface for content
- `PdfGrid` - Table generation and layout
- `PdfFont`, `PdfBitmap`, `PdfBrush` - Content elements

## Two modes: choose from the full user intent

### Mode 1: Coding Assistant *(default)*
Use when the user wants code, snippets, integration guidance or explanations. Detect host (Node/browser, TS/JS, framework), tell the user to `npm install @syncfusion/ej2-pdf` if missing, generate from the reference files only, and do not execute anything.

### Mode 2: Execution *(only on explicit request)*
Use when the user asks to create/update/produce a PDF file or to run code (for example "create output/invoice.pdf", "extract text from this PDF", "redact and save a copy"). Requires Node.js 18+.
1. Copy `scripts/template.ts` to `scripts/temp-{timestamp}.ts` and fill `buildDocument()`.
2. Install in `scripts/` if `node_modules` is absent: `npm install --no-save --no-package-lock @syncfusion/ej2-pdf @syncfusion/ej2-base tsx`.
3. Run `tsx temp-{timestamp}.ts --output <file.pdf> [--input <file.pdf>]`.
4. Verify `SUCCESS:`, delete the temp script, report the output path.

**Input PDFs:** creating a new document needs none. Tasks on an existing PDF (parse, extract, redact, fill, merge) use the PDF the user supplies via `--input`; if none was given, ask for it. Never delete the user's input or outputs. In a browser, Mode 2 is unavailable: give Mode 1 code that ends with `document.save('output.pdf')` ([references/browser-and-node-io.md](references/browser-and-node-io.md)). Details: [references/execution-mode.md](references/execution-mode.md).

| Request | Mode |
|---|---|
| "Show me how to merge two PDFs" | 1 |
| "Create output/invoice.pdf with a table" | 2 |
| "Extract text from `in.pdf`" | 2, `--input in.pdf` |
| "Create a PDF with a text box" in a web page | 1, `document.save('output.pdf')` |

## Documentation and Navigation Guide

### Browser and Node.js I/O
📄 **Read:** [references/browser-and-node-io.md](references/browser-and-node-io.md)
- `document.save('output.pdf')` download vs Node `fs`; user input PDF rules

### Getting Started

📄 **Read:** [references/getting-started.md](references/getting-started.md)

Use this reference when the user needs to:
- Install the `@syncfusion/ej2-pdf` package
- Set up the library for TypeScript, JavaScript, Angular, React, Vue, or ASP.NET
- Understand dependencies and requirements
- Create their first PDF document
- Learn basic save and export operations

### Document Creation & Settings

📄 **Read:** [references/document-settings.md](references/document-settings.md)

Use this reference for:
- Creating `PdfDocument` instances
- Configuring page settings (size, orientation, margins, rotation)
- Setting document properties (title, author, subject, keywords, creation/modification dates)
- Enabling incremental updates
- Flattening annotations and form fields
- Opening (Base64/`Uint8Array`/password) and saving (download or `Uint8Array`) documents

📄 **Read:** [references/xmp-metadata.md](references/xmp-metadata.md)

Use this reference for:
- Standard XMP schemas (Basic, Dublin Core, Job Ticket, Rights Management, PDF, Paged Text)
- Accessing and updating `documentProperties.xmpMetadata` (`PdfXmpMetadata`)
- Custom metadata in Info dictionary (`customMetadata`)
- Custom XMP schemas with namespaces and prefixes (`PdfCustomSchema`)
- Modifying and removing metadata from existing documents

📄 **Read:** [references/pdf-pages.md](references/pdf-pages.md)

Use this reference for:
- Adding pages to documents
- Page manipulation and navigation
- Page sections with different settings
- Managing page collections

### Content Elements

📄 **Read:** [references/text-rendering.md](references/text-rendering.md)

Use this reference when adding text:
- Drawing text with `drawString()` method
- Font types (Standard, TrueType, CJK fonts)
- Font styles, sizes, and formatting
- Text layout and wrapping
- Graphics state management (save/restore)
- Text positioning and bounds

📄 **Read:** [references/images.md](references/images.md)

Use this reference for image operations:
- Adding JPEG and PNG images
- Using `PdfBitmap` class
- Image positioning and sizing
- Inserting images into existing documents
- Base64 and Uint8Array image formats
- Clipping and graphics transformations

📄 **Read:** [references/shapes.md](references/shapes.md)

Use this reference for drawing shapes:
- Rectangles, circles, ellipses, lines
- Complex paths and curves
- Pens and brushes for styling
- Fill and stroke operations
- Graphics transformations (translate, rotate, scale)

📄 **Read:** [references/barcodes.md](references/barcodes.md)

Use this reference for 2D barcode drawing:
- 2D barcodes (`PdfQRBarcode`, `PdfDataMatrixBarcode`, `Pdf417Barcode`)
- Error correction levels and QR Code with logo (`PdfQRBarcodeLogo`)
- Module dimension (`xDimension`), colors (`foreColor`, `backColor`), and quiet zones
- Barcode sizing rules, aspect ratios, printer resolution, and scanning verification

📄 **Read:** [references/tables.md](references/tables.md)

Use this reference for creating and formatting tables:
- Creating tables with `PdfGrid` from data sources or manual row/column definitions
- Table and cell styling, custom borders, padding, and built-in themes (`PdfGridBuiltinStyle`)
- Row and column customization, text alignment, and formatting
- Pagination, repeating header rows (`repeatHeader`), and row break prevention (`fitElement`)
- Dynamic multiple table positioning with `PdfGridLayoutResult`
- Merged cells (`rowSpan`, `columnSpan`), cell images, background images, and hyperlinks
- Nested grids, borderless tables, data source updating, and horizontal overflow modes

📄 **Read:** [references/lists.md](references/lists.md)

Use this reference for creating lists:
- Ordered and unordered lists
- Nested list structures
- Custom list markers and image markers (`PdfImageMarker`)
- List formatting options and pagination

📄 **Read:** [references/templates.md](references/templates.md)

Use this reference for reusable content:
- Creating page templates
- Dynamic content stamping
- Template positioning and layout
- Reusing content across pages

📄 **Read:** [references/headers-and-footers.md](references/headers-and-footers.md)

Use this reference for headers, footers, and automatic fields:
- Document-wide headers and footers (`PdfPageTemplateElement`, `document.template`)
- Odd and even page templates (`oddTop`, `oddBottom`, `evenTop`, `evenBottom`)
- Section-level templates (`section.template`, `PdfTemplateHorizontalAlignment`)
- Automatic fields (page number/count, section numbers, date/time, creation date, author, destination)
- Combined formatting with `PdfCompositeField`

### Interactive Features

📄 **Read:** [references/annotations.md](references/annotations.md)

Use this reference for annotations:
- Annotation types (popup, free text, line, shapes, ink, text markup)
- File attachment, URI, document link, watermark, and redaction annotations
- Measurement annotations and custom stamp appearance
- Cloud border style customization (`borderEffect`, `PdfBorderEffectStyle`)
- Adding, configuring, and modifying annotations
- Annotation properties and appearance
- Flattening annotations to static content

📄 **Read:** [references/bookmarks.md](references/bookmarks.md)

Use this reference for navigation:
- Creating document bookmarks
- Nested bookmark hierarchies
- Bookmark navigation and linking
- Modifying existing bookmarks

📄 **Read:** [references/form-fields.md](references/form-fields.md)

Use this reference for interactive forms:
- Form field types (text, checkbox, radio, dropdown, button, date, barcode)
- Adding and configuring form fields
- Field validation and properties
- Filling form data programmatically
- Importing/exporting form data
- Flattening forms to remove interactivity

📄 **Read:** [references/hyperlinks.md](references/hyperlinks.md)

Use this reference for linking:
- Adding web hyperlinks
- Document internal navigation links
- Link annotations and appearance
- Navigation actions

### Document Operations

📄 **Read:** [references/merge-documents.md](references/merge-documents.md)

Use this reference for merging:
- Combining multiple PDF files
- Importing pages from other documents
- Preserving bookmarks during merge
- Merging workflows

📄 **Read:** [references/split-documents.md](references/split-documents.md)

Use this reference for splitting:
- Splitting PDFs by page range
- Extracting specific pages
- Creating separate documents from pages

📄 **Read:** [references/watermarks.md](references/watermarks.md)

Use this reference for watermarks:
- Text watermarks
- Image watermarks
- Watermark positioning and layout
- Opacity and rotation settings

📄 **Read:** [references/layers.md](references/layers.md)

Use this reference for layer management:
- Creating PDF layers (Optional Content Groups)
- Layer visibility control
- Adding content to layers
- Removing or flattening layers

### Data Extraction

📄 **Read:** [references/text-extraction.md](references/text-extraction.md)

Use this reference for extracting text:
- Synchronous and asynchronous text extraction (`extractTextSync`, `extractText`)
- Page-range text extraction
- Layout-based and bounds-based extraction (`extractTextLinesSync`, `extractTextLines`)
- Finding text and bounding rectangles (`findTextSync`, `findText`)
- Searching for multiple text values with match coordinates across pages

📄 **Read:** [references/image-extraction.md](references/image-extraction.md)

Use this reference for extracting images:
- Extracting images from PDF documents
- Image data formats
- Saving extracted images
- Required package: `@syncfusion/ej2-pdf-data-extract`

### Security & Protection

📄 **Read:** [references/digital-signatures.md](references/digital-signatures.md)

Use this reference for digital signatures:
- Adding digital signatures (standard and external signing)
- Certificate-based signing
- Signature appearance customization
- Long-Term Validation (LTV) with embedded OCSP/CRL revocation
- Digital signature validation (single field and document-wide)
- Timestamp servers and certificate trust chains

📄 **Read:** [references/encryption.md](references/encryption.md)

Use this reference for encryption and document security:
- Document encryption with RC4 (40-bit, 128-bit) and AES (128-bit, 256-bit Rev 5 and Rev 6)
- User passwords (opening) and owner passwords (permissions)
- Document permission restrictions (`PdfPermissionFlag`) and bitwise permission checking
- Decrypting secured documents and changing passwords
- Detecting password protection and identifying password types

📄 **Read:** [references/content-redaction.md](references/content-redaction.md)

Use this reference for content removal:
- Redacting sensitive text
- Shape redaction
- Redaction annotations
- Permanent content removal

## Quick Start Example

```typescript
import { PdfDocument, PdfPage, PdfGraphics, PdfFont, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();

// Add a page
let page: PdfPage = document.addPage();

// Get graphics from the page
let graphics: PdfGraphics = page.graphics;

// Set font
let font: PdfFont = document.embedFont(PdfFontFamily.helvetica, 20, PdfFontStyle.regular);

// Create a brush
let brush = new PdfBrush({r: 0, g: 0, b: 0});

// Draw text
graphics.drawString('Hello World!', font, {x: 20, y: 20, width: 200, height: 50}, brush);

// Save the document
document.save('output.pdf');

// Clean up
document.destroy();
```

## Common Workflows

### Create Invoice or Report

1. Create document with custom page settings
2. Add company logo (image)
3. Add header text with formatting
4. Create tables with borders (shapes + text)
5. Add totals and footer
6. Save and download

**Start with:** [references/getting-started.md](references/getting-started.md), then [references/text-rendering.md](references/text-rendering.md) and [references/images.md](references/images.md)

### Fill and Flatten PDF Form

1. Load existing PDF document with form fields
2. Fill form fields programmatically
3. Flatten form to make it non-editable
4. Save modified document

**Start with:** [references/form-fields.md](references/form-fields.md)

### Extract Data from PDF

1. Load existing PDF document
2. Extract text from specific pages
3. Extract images if needed
4. Parse and process extracted data

**Start with:** [references/text-extraction.md](references/text-extraction.md) and [references/image-extraction.md](references/image-extraction.md)

### Merge Multiple PDFs

1. Create main document
2. Import pages from source documents
3. Optionally add bookmarks for sections
4. Save combined document

**Start with:** [references/merge-documents.md](references/merge-documents.md)

### Add Digital Signature

1. Load document or create new one
2. Configure digital signature with certificate
3. Set signature appearance and position
4. Save signed document

**Start with:** [references/digital-signatures.md](references/digital-signatures.md)

## Platform-Specific Considerations

### TypeScript/JavaScript
- Direct import from `@syncfusion/ej2-pdf`
- Browser or Node.js environment
- File saving via browser download or Node.js fs

### Angular/React/Vue
- Component-based integration
- Handle file downloads in component lifecycle
- State management for document generation
- Keep Syncfusion PDF operations in framework services, hooks, or component methods, then bind generated output to the framework's download or upload flow.

### ASP.NET Core/MVC
- Server-side PDF generation
- Return PDF as file result
- Memory stream handling

For platform-specific setup details and package examples for TypeScript, JavaScript, Angular, React, Vue, ASP.NET Core, and ASP.NET MVC, see [references/getting-started.md](references/getting-started.md).

## Key Props and Methods

### PdfDocument
- `addPage(settings?)` - Add new page
- `getPage(index)` - Access existing page
- `save(filename)` - Save document
- `destroy()` - Clean up resources
- `embedFont()` - Load font for use

### PdfGraphics
- `drawString(text, font, bounds, brush)` - Draw text
- `drawImage(image, bounds)` - Draw image
- `drawRectangle(pen, bounds)` - Draw rectangle
- `save()` - Save graphics state
- `restore(state)` - Restore graphics state

### PdfPage
- `graphics` - Get drawing surface
- `size` - Get page dimensions
- `rotation` - Get/set rotation

For complete API details, refer to the specific reference files.

## Common Use Cases

1. **Automated Report Generation** - Create branded reports with tables (`PdfGrid`), lists, charts, and formatted text
2. **Invoice Creation** - Generate professional invoices with `PdfGrid` line items, totals, and company logos
3. **Certificate Generation** - Create certificates with templates and custom text
4. **Form Filling** - Programmatically fill PDF forms for bulk processing
5. **Document Assembly** - Merge multiple PDFs into consolidated documents
6. **Data Extraction & Search** - Extract or find text with bounds and extract images from PDFs for processing
7. **Digital Signing & Validation** - Apply digital signatures with LTV and validate signature trust chains
8. **Document Encryption & Access Control** - Secure documents with AES 256-bit encryption, passwords, and permissions
9. **Watermarking** - Add branding or security watermarks to documents
10. **Redaction** - Remove sensitive information permanently before sharing
11. **Archive Creation** - Convert documents for long-term storage and compliance workflows

## Troubleshooting Tips

- **Missing fonts**: Ensure font is embedded before use with `document.embedFont()`
- **Image not displaying**: Verify image format (JPEG/PNG) and data (base64/Uint8Array)
- **Large files**: Use incremental updates or split operations
- **Memory issues**: Call `document.destroy()` after saving
- **Extract features not working**: Install `@syncfusion/ej2-pdf-data-extract` package

## Related Resources

- Package: `@syncfusion/ej2-pdf`
- Add-on: `@syncfusion/ej2-pdf-data-extract` (for extraction features)
- Dependencies: `@syncfusion/ej2-compression`, `@syncfusion/ej2-base`
