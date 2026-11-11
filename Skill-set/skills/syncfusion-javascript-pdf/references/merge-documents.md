# Merging PDF Documents

## Table of Contents

- [Overview](#overview)
- [Basic Merging](#basic-merging)
    - [Merge Complete Documents](#merge-complete-documents)
    - [Multiple Documents](#multiple-documents)
- [Selective Page Import](#selective-page-import)
    - [Import Specific Pages](#import-specific-pages)
    - [Page Range Import](#page-range-import)
    - [All Pages Import](#all-pages-import)
- [Advanced Merging](#advanced-merging)
    - [Preserving Bookmarks](#preserving-bookmarks)
    - [Form Fields](#form-fields)
    - [Annotations](#annotations)
- [Optimization Options](#optimization-options)
- [Merge with New Content](#merge-with-new-content)
    - [Add Pages Between](#add-pages-between)
    - [Cover Page](#cover-page)
- [Practical Examples](#practical-examples)
    - [Merge from Array](#merge-from-array)
    - [Conditional Merge](#conditional-merge)
    - [Interleave Pages](#interleave-pages)
- [Error Handling](#error-handling)
- [Best Practices](#best-practices)
- [Common Gotchas](#common-gotchas)
- [Related References](#related-references)

## Overview

PDF merging combines multiple documents or pages into a single file. The Syncfusion JavaScript PDF library provides comprehensive merging capabilities including full document merge, selective page import, and optimization options.

## Basic Merging

### Merge Complete Documents

Combine multiple PDFs:

```typescript
import { PdfDocument } from '@syncfusion/ej2-pdf';

// Load source documents
let document1: PdfDocument = new PdfDocument(data1);
let document2: PdfDocument = new PdfDocument(data2);

// Merge document2 into document1
document1.importPageRange(document2, 0, document2.pageCount-1);

document1.save('merged.pdf');
document1.destroy();
document2.destroy();
```

```javascript
const { PdfDocument } = require('@syncfusion/ej2-pdf');

const document1 = new PdfDocument(data1);
const document2 = new PdfDocument(data2);

document1.importPageRange(document2, 0, document2.pageCount-1);

document1.save('merged.pdf');
document1.destroy();
document2.destroy();
```

### Multiple Documents

Merge several PDFs:

```typescript
import { PdfDocument } from '@syncfusion/ej2-pdf';

let mainDocument: PdfDocument = new PdfDocument();
let documents: PdfDocument[] = [
    new PdfDocument(data1),
    new PdfDocument(data2),
    new PdfDocument(data3)
];

for (let doc of documents) {
    mainDocument.importPageRange(doc, 0, doc.pageCount-1);
    doc.destroy();
}

mainDocument.save('merged.pdf');
mainDocument.destroy();
```

## Selective Page Import

### Import Specific Pages

Copy selected pages:

```typescript
import { PdfDocument } from '@syncfusion/ej2-pdf';

let destinationDocument: PdfDocument = new PdfDocument();
let sourceDocument: PdfDocument = new PdfDocument(sourceData);

// Import page 0 (zero-indexed)
destinationDocument.importPage(sourceDocument.getPage(0), sourceDocument);

destinationDocument.save('selected-pages.pdf');
destinationDocument.destroy();
sourceDocument.destroy();
```

### Page Range Import

Copy consecutive pages:

```typescript
import { PdfDocument } from '@syncfusion/ej2-pdf';

let destinationDocument: PdfDocument = new PdfDocument();
let sourceDocument: PdfDocument = new PdfDocument(sourceData);

// Import pages 0 through 4 (first 5 pages)
destinationDocument.importPageRange(sourceDocument, 0, 4);

destinationDocument.save('page-range.pdf');
destinationDocument.destroy();
sourceDocument.destroy();
```

### All Pages Import

Import all pages from source:

```typescript
import { PdfDocument } from '@syncfusion/ej2-pdf';

let destinationDocument: PdfDocument = new PdfDocument();
let sourceDocument: PdfDocument = new PdfDocument(sourceData);

// Import all pages
for (let i = 0; i < sourceDocument.pageCount; i++) {
    destinationDocument.importPage(i);
}

destinationDocument.save('all-pages.pdf');
destinationDocument.destroy();
sourceDocument.destroy();
```

## Advanced Merging

### Preserving Bookmarks

Maintain document structure:

```typescript
import { PdfDocument } from '@syncfusion/ej2-pdf';

let document1: PdfDocument = new PdfDocument(data1);
let document2: PdfDocument = new PdfDocument(data2);

// Merge with bookmarks
document1.importPageRange(document2, 0, document2.pageCount-1);

// Bookmarks from both documents are preserved

document1.save('merged-with-bookmarks.pdf');
document1.destroy();
document2.destroy();
```

### Form Fields

Merge documents with forms:

```typescript
import { PdfDocument } from '@syncfusion/ej2-pdf';

let document1: PdfDocument = new PdfDocument(formData1);
let document2: PdfDocument = new PdfDocument(formData2);

// Merge preserves form fields
document1.importPageRange(document2, 0, document2.pageCount-1);

// Access merged forms
let form = document1.form;

document1.save('merged-forms.pdf');
document1.destroy();
document2.destroy();
```

### Annotations

Preserve annotations during merge:

```typescript
import { PdfDocument } from '@syncfusion/ej2-pdf';

let document1: PdfDocument = new PdfDocument(annotatedData1);
let document2: PdfDocument = new PdfDocument(annotatedData2);

// Merge preserves annotations
document1.importPageRange(document2, 0, document2.pageCount-1);

document1.save('merged-annotations.pdf');
document1.destroy();
document2.destroy();
```

## Optimization Options

### Import Settings

Configure import behavior:

```typescript
import { PdfDocument, PdfImportOptions } from '@syncfusion/ej2-pdf';

let destinationDocument: PdfDocument = new PdfDocument();
let sourceDocument: PdfDocument = new PdfDocument(sourceData);

// Configure import options
let options: PdfPageImportOptions = new PdfPageImportOptions();
options.optimizeResources = true;

destinationDocument.importPage(sourceDocument.getPage(0) , sourceDocument, options);

destinationDocument.save('optimized-merge.pdf');
destinationDocument.destroy();
sourceDocument.destroy();
```

## Merge with New Content

### Add Pages Between

Insert content during merge:

```typescript
import { PdfDocument, PdfPage, PdfStandardFont, PdfFontFamily } from '@syncfusion/ej2-pdf';

let document1: PdfDocument = new PdfDocument(data1);
let document2: PdfDocument = new PdfDocument(data2);

// Add separator page
let separatorPage: PdfPage = document1.addPage();
let font = new PdfStandardFont(PdfFontFamily.helvetica, 24);
separatorPage.graphics.drawString('--- Section Break ---', font, {x: 50, y: 50, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));

// Merge second document
document1.importPageRange(document2, 0, document2.pageCount-1);

document1.save('merged-with-separator.pdf');
document1.destroy();
document2.destroy();
```

### Cover Page

Add cover to merged document:

```typescript
import { PdfDocument, PdfPage, PdfStandardFont, PdfFontFamily } from '@syncfusion/ej2-pdf';

let coverDocument: PdfDocument = new PdfDocument();
let coverPage: PdfPage = coverDocument.addPage();
let font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 36);
coverPage.graphics.drawString('Combined Documents', font, {x: 100, y: 400, width: 500, height: 500}, new PdfBrush({r: 0, g: 0, b: 255}));

// Merge content documents
let doc1: PdfDocument = new PdfDocument(data1);
let doc2: PdfDocument = new PdfDocument(data2);

coverDocument.importPageRange(doc1, 0, doc1.pageCount-1);
coverDocument.importPageRange(doc2, 0, doc2.pageCount-1);

coverDocument.save('merged-with-cover.pdf');
coverDocument.destroy();
doc1.destroy();
doc2.destroy();
```

## Practical Examples

### Merge from Array

Process multiple files:

```typescript
import { PdfDocument } from '@syncfusion/ej2-pdf';

let dataSources: Uint8Array[] = [data1, data2, data3, data4];
let mergedDocument: PdfDocument = new PdfDocument();

for (let data of dataSources) {
    let sourceDocument: PdfDocument = new PdfDocument(data);
    mergedDocument.importPageRange(sourceDocument, 0, sourceDocument.pageCount-1);
    sourceDocument.destroy();
}

mergedDocument.save('batch-merge.pdf');
mergedDocument.destroy();
```

### Conditional Merge

Merge based on criteria:

```typescript
import { PdfDocument } from '@syncfusion/ej2-pdf';

let mainDocument: PdfDocument = new PdfDocument();
let documents: Array<{ data: Uint8Array, include: boolean }> = [
    { data: data1, include: true },
    { data: data2, include: false },
    { data: data3, include: true }
];

for (let item of documents) {
    if (item.include) {
        let doc: PdfDocument = new PdfDocument(item.data);
    	mainDocument.importPageRange(doc, 0, doc.pageCount-1);
        doc.destroy();
    }
}

mainDocument.save('conditional-merge.pdf');
mainDocument.destroy();
```

### Interleave Pages

Alternate pages from documents:

```typescript
import { PdfDocument } from '@syncfusion/ej2-pdf';

let doc1: PdfDocument = new PdfDocument(data1);
let doc2: PdfDocument = new PdfDocument(data2);
let mergedDocument: PdfDocument = new PdfDocument();

let maxPages = Math.max(doc1.pageCount, doc2.pageCount);

for (let i = 0; i < maxPages; i++) {
    if (i < doc1.pageCount) {
        mergedDocument.importPage(doc1.getPage(i), doc1);
    }
    if (i < doc2.pageCount) {
        mergedDocument.importPage(doc2.getPage(i), doc2);
    }
}

mergedDocument.save('interleaved.pdf');
mergedDocument.destroy();
doc1.destroy();
doc2.destroy();
```

## Error Handling

### Safe Merging

Handle merge errors:

```typescript
import { PdfDocument } from '@syncfusion/ej2-pdf';

let mainDocument: PdfDocument = new PdfDocument();

try {
    let sourceDocument: PdfDocument = new PdfDocument(sourceData);
    mainDocument.importPageRange(sourceDocument, 0, sourceDocument.pageCount-1);
    sourceDocument.destroy();
    
    mainDocument.save('merged.pdf');
} catch (error) {
    console.error('Merge failed:', error);
} finally {
    mainDocument.destroy();
}
```

### Validation

Verify before merging:

```typescript
import { PdfDocument } from '@syncfusion/ej2-pdf';

function safeMerge(mainDoc: PdfDocument, sourceData: Uint8Array): boolean {
    try {
        let sourceDoc: PdfDocument = new PdfDocument(sourceData);
        
        if (sourceDoc.pageCount === 0) {
            sourceDoc.destroy();
            return false;
        }
        
    	mainDoc.importPageRange(sourceDoc, 0, sourceDoc.pageCount-1);
        sourceDoc.destroy();
        return true;
    } catch (error) {
        console.error('Invalid PDF:', error);
        return false;
    }
}

let mainDocument: PdfDocument = new PdfDocument();
let success = safeMerge(mainDocument, sourceData);

if (success) {
    mainDocument.save('merged.pdf');
}

mainDocument.destroy();
```

## Best Practices

1. **Resource Management**: Always destroy source documents after merge
2. **Memory**: Merge large documents in batches
3. **Optimization**: Enable resource optimization for large merges
4. **Validation**: Verify source documents before merging
5. **Order**: Plan merge order carefully
6. **Metadata**: Update document metadata after merging

## Common Gotchas

1. **Memory Usage**: Large merges consume significant memory
2. **Duplicate Resources**: Unoptimized merges duplicate images/fonts
3. **Form Field Names**: Duplicate field names cause conflicts
4. **Bookmarks**: Bookmark destinations may need adjustment
5. **Page Numbers**: Page-based references become invalid
6. **Destruction**: Source documents must be destroyed manually

## Related References

- [Split Documents](./split-documents.md) - Splitting PDFs
- [Bookmarks](./bookmarks.md) - Bookmark management
- [Form Fields](./form-fields.md) - Form field handling
- [Annotations](./annotations.md) - Annotation preservation
