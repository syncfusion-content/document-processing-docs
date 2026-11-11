# PDF XMP Metadata

XMP (Extensible Metadata Platform) is an ISO standard (ISO 16684-1) framework for embedding standardized, schema-driven XML metadata directly inside PDF documents (stored within the PDF Catalog dictionary as an XMP packet).

## Table of Contents

- [Overview](#overview)
- [Adding XMP Metadata to a New Document](#adding-xmp-metadata-to-a-new-document)
- [Reading and Modifying Existing Metadata](#reading-and-modifying-existing-metadata)
- [Custom Metadata (Info Dictionary)](#custom-metadata-info-dictionary)
- [Removing Custom Metadata](#removing-custom-metadata)
- [Custom XMP Schema](#custom-xmp-schema)
- [Supported Schema Types and Properties](#supported-schema-types-and-properties)
  - [Basic Schema](#basic-schema)
  - [Dublin Core Schema](#dublin-core-schema)
  - [Job Ticket Schema](#job-ticket-schema)
  - [Rights Management Schema](#rights-management-schema)
  - [PDF Schema](#pdf-schema)
  - [Paged Text Schema](#paged-text-schema)
- [Best Practices](#best-practices)
- [Common Gotchas](#common-gotchas)
- [Related References](#related-references)

---

## Overview

The Syncfusion JavaScript PDF Library provides comprehensive support for reading, writing, and modifying XMP metadata in PDF files through the `PdfXmpMetadata` class, accessed via `PdfDocumentInformation.xmpMetadata`.

Key capabilities:
- Embed standardized metadata across standard schemas (Basic, Dublin Core, Rights Management, PDF, Job Ticket, Paged Text).
- Add custom metadata key-value pairs to the PDF Info dictionary with automatic XMP mirroring.
- Define custom application-specific XMP schemas with unique XML namespaces and prefixes.
- Modify existing XMP metadata without affecting the visible page contents of the document.

---

## Adding XMP Metadata to a New Document

Access `xmpMetadata` from the document information and populate desired schema properties:

```typescript
import { PdfDocument, PdfXmpMetadata, PdfDocumentInformation } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();

// Access document properties (pass false to retrieve existing/default properties)
let documentProperties: PdfDocumentInformation = document.getDocumentInformation(false);

// Get the XMP metadata object
let xmpMetadata: PdfXmpMetadata = documentProperties.xmpMetadata;

// Populate Basic Schema
xmpMetadata.basicSchema.creatorTool = 'My Enterprise App';
xmpMetadata.basicSchema.createDate = new Date();
xmpMetadata.basicSchema.modifyDate = new Date();

// Populate Dublin Core Schema
xmpMetadata.dublinCoreSchema.title = { 'en-US': 'Quarterly Financial Report' };
xmpMetadata.dublinCoreSchema.creator = ['Syncfusion Software'];
xmpMetadata.dublinCoreSchema.subject = ['finance', 'report', '2026'];

// Save and clean up
document.save('Output.pdf');
document.destroy();
```

---

## Reading and Modifying Existing Metadata

Load an existing document, access its XMP metadata, update values, and save back:

```typescript
import { PdfDocument, PdfDocumentInformation, PdfXmpMetadata } from '@syncfusion/ej2-pdf';

// Load existing PDF from Base64 or Uint8Array
let document: PdfDocument = new PdfDocument(pdfData);

// Access document properties
let documentProperties: PdfDocumentInformation = document.getDocumentInformation(false);
let xmpMetadata: PdfXmpMetadata = documentProperties.xmpMetadata;

// Modify existing schema values
xmpMetadata.basicSchema.creatorTool = 'Updated Processing Tool';
xmpMetadata.dublinCoreSchema.title = { 'en-US': 'Updated Report Title' };

// Save modified document
document.save('Modified.pdf');
document.destroy();
```

---

## Custom Metadata (Info Dictionary)

Custom metadata key-value pairs are stored in the PDF's **Info dictionary**. When an XMP metadata instance is present, the same values are also mirrored under a custom schema within the XMP metadata.

```typescript
import { PdfDocument, PdfDocumentProperties, PdfCustomMetadata } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument(pdfData);
let documentProperties: PdfDocumentProperties = document.getDocumentInformation(false);

// Access custom metadata collection
let custom: PdfCustomMetadata = documentProperties.customMetadata;

// Set custom key-value pairs
custom.set('Department', 'Engineering');
custom.set('DocumentClassification', 'Confidential');

// Apply updated properties back to document
document.setDocumentInformation(documentProperties);

document.save('Output.pdf');
document.destroy();
```

---

## Removing Custom Metadata

Selectively remove custom metadata keys using `custom.remove(key)`:

```typescript
import { PdfDocument, PdfDocumentProperties, PdfCustomMetadata } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument(pdfData);
let documentProperties: PdfDocumentProperties = document.getDocumentInformation(false);

let custom: PdfCustomMetadata = documentProperties.customMetadata;
custom.remove('TemporaryFlag');

document.setDocumentInformation(documentProperties);
document.save('Output.pdf');
document.destroy();
```

---

## Custom XMP Schema

Use `PdfCustomSchema` to define application-specific metadata embedded directly in the XMP packet under a custom namespace URI and prefix, keeping the Info dictionary untouched:

```typescript
import {
  PdfDocument,
  PdfDocumentInformation,
  PdfCustomSchema,
  PdfXmpMetadata
} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument(pdfData);
let documentProperties: PdfDocumentInformation = document.getDocumentInformation(false);
let xmpMetadata: PdfXmpMetadata = documentProperties.xmpMetadata;

// Create a custom schema with custom prefix and namespace URI
let customSchema: PdfCustomSchema = new PdfCustomSchema(
  xmpMetadata,
  'corp',
  'http://schemas.mycompany.com/pdf/1.0/'
);

// Store key-value pairs in customData
customSchema.customData.set('appVersion', '2.5.0');
customSchema.customData.set('workflowStage', 'Reviewed');

document.save('Output.pdf');
document.destroy();
```

---

## Supported Schema Types and Properties

| Schema Type | Description | Key Properties |
|---|---|---|
| **Basic Schema** | General document lifecycle metadata | `creatorTool`, `createDate`, `modifyDate`, `rating`, `label` |
| **Dublin Core Schema** | Standard descriptive metadata | `title`, `creator`, `subject`, `description`, `publisher`, `rights` |
| **Job Ticket Schema** | Print workflow and production instructions | `jobRef`, `jobName` |
| **Rights Management Schema** | Ownership, permissions, and copyright | `isMarked`, `mark`, `webStatement`, `certificate` |
| **PDF Schema** | PDF-engine and standard PDF document info | `keywords`, `producer`, `pdfVersion` |
| **Paged Text Schema** | Structural pagination metadata | `pageCount`, `sequenceNumber` |
| **Custom Schema** | User-defined namespaces | Key-value pairs stored via `customData` |

### Basic Schema

```typescript
xmpMetadata.basicSchema.creatorTool = 'BillingService v4';
xmpMetadata.basicSchema.createDate = new Date();
xmpMetadata.basicSchema.modifyDate = new Date();
```

### Dublin Core Schema

```typescript
xmpMetadata.dublinCoreSchema.creator = ['Primary Author', 'Contributor'];
xmpMetadata.dublinCoreSchema.title = { 'en-US': 'System Architecture Guide' };
```

### Job Ticket Schema

```typescript
xmpMetadata.basicJobTicketSchema.jobRef = ['Batch-2026-04', 'Job-89'];
xmpMetadata.basicJobTicketSchema.jobName = 'Annual Invoice Batch';
```

### Rights Management Schema

```typescript
xmpMetadata.rightsManagementSchema.isMarked = true;
xmpMetadata.rightsManagementSchema.mark = 'Copyright 2026 Syncfusion Inc.';
xmpMetadata.rightsManagementSchema.webStatement = 'https://www.example.com/legal/copyright';
```

### PDF Schema

```typescript
import { PdfDocument, PdfXmpMetadata } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument(pdfData);
let xmpMetadata: PdfXmpMetadata = new PdfXmpMetadata();
document.xmpMetadata = xmpMetadata;

xmpMetadata.pdfSchema.keywords = 'invoice, payment, syncfusion';
xmpMetadata.pdfSchema.producer = 'Syncfusion JavaScript PDF Library';
xmpMetadata.pdfSchema.pdfVersion = '1.7';
```

### Paged Text Schema

```typescript
xmpMetadata.pagedTextSchema.pageCount = document.pageCount.toString();
```

---

## Best Practices

1. **Synchronize Document Properties and XMP:** When setting title, author, or subject, keep standard `PdfDocumentInformation` properties aligned with Dublin Core / PDF schemas for maximum reader compatibility.
2. **Use Recognized XML Namespaces:** When defining custom schemas with `PdfCustomSchema`, use valid, unique URI strings for namespaces.
3. **Always Call `destroy()`:** Clean up the `PdfDocument` instance after saving to avoid memory leaks.
4. **Preserve Existing Metadata:** When updating existing documents, read existing properties with `getDocumentInformation(false)` to prevent overwriting metadata populated by earlier workflows.

---

## Common Gotchas

1. **Info Dictionary vs XMP Custom Schema:** Setting metadata through `properties.customMetadata` writes to the PDF Info dictionary (and mirrors to XMP), whereas `PdfCustomSchema` embeds directly inside the XMP XML packet with a custom URI prefix.
2. **Localized Titles in Dublin Core:** `dublinCoreSchema.title` expects a language-mapped object (e.g. `{ 'en-US': 'Title' }`), not a plain string.
3. **Saving Requirement:** Metadata is serialized into the catalog dictionary at the time `document.save()` is executed. Changes made after saving will not be included.

---

## Related References

- [Document Settings](./document-settings.md) - Standard document properties and page settings
- [Encryption](./encryption.md) - Document security and permissions
- [Digital Signatures](./digital-signatures.md) - Cryptographic signing and validation
