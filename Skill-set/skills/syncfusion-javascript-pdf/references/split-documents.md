# Splitting PDF Documents

## Table of Contents

- [Overview](#overview)
- [Basic Splitting](#basic-splitting)
  - [Split into Individual Pages](#split-into-individual-pages)
  - [Split by Fixed Number](#split-by-fixed-number)
  - [Split by Page Ranges](#split-by-page-ranges)
- [Advanced Splitting](#advanced-splitting)
  - [Understanding Split Event](#understanding-split-event)
  - [Split with Custom File Names](#split-with-custom-file-names)
  - [Split Odd and Even Pages](#split-odd-and-even-pages)
- [Content Preservation](#content-preservation)
- [Best Practices](#best-practices)
- [Common Gotchas](#common-gotchas)

## Overview

PDF splitting divides documents into smaller files based on page ranges, fixed intervals, or custom criteria. The Syncfusion JavaScript PDF library enables precise document splitting using built-in split methods with event-driven callbacks for handling split documents.

## Basic Splitting

### Split into Individual Pages

Split a PDF document into individual single-page documents:

```typescript
import { PdfDocument, PdfDocumentSplitEventArgs } from '@syncfusion/ej2-pdf';
import { Save } from '@syncfusion/ej2-file-utils';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
document.splitEvent = documentSplitEvent;

// Split PDF document into individual pages
document.split();

// Event to invoke while splitting PDF document data
function documentSplitEvent(sender: PdfDocument, args: PdfDocumentSplitEventArgs): void {
  Save.save('output_' + args.index + '.pdf', new Blob([args.pdfData], { type: 'application/pdf' }));
}

// Destroy the document
document.destroy();
```

```javascript
const { PdfDocument } = require('@syncfusion/ej2-pdf');
const { Save } = require('@syncfusion/ej2-file-utils');

// Load an existing PDF document
const document = new PdfDocument(data);
document.splitEvent = documentSplitEvent;

// Split PDF document into individual pages
document.split();

// Event to invoke while splitting PDF document data
function documentSplitEvent(sender, args) {
  Save.save('output_' + args.index + '.pdf', new Blob([args.pdfData], { type: 'application/pdf' }));
}

// Destroy the document
document.destroy();
```

### Split by Fixed Number

Split a PDF document by a fixed number of pages per file:

```typescript
import { PdfDocument, PdfDocumentSplitEventArgs } from '@syncfusion/ej2-pdf';
import { Save } from '@syncfusion/ej2-file-utils';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
document.splitEvent = documentSplitEvent;

// Split PDF document by fixed number of pages (e.g., 5 pages per file)
document.splitByFixedNumber(5);

// Event to invoke while splitting PDF document data
function documentSplitEvent(sender: PdfDocument, args: PdfDocumentSplitEventArgs): void {
  Save.save('output_' + args.index + '.pdf', new Blob([args.pdfData], { type: 'application/pdf' }));
}

// Destroy the document
document.destroy();
```

### Split by Page Ranges

Split a PDF document into separate files based on specific page ranges:

```typescript
import { PdfDocument, PdfDocumentSplitEventArgs } from '@syncfusion/ej2-pdf';
import { Save } from '@syncfusion/ej2-file-utils';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
document.splitEvent = documentSplitEvent;

// Split PDF document by page ranges specified
// Each sub-array represents a range: [startPage, endPage] (zero-indexed)
document.splitByPageRanges([[0, 4], [5, 9], [10, 14]]);

// Event to invoke while splitting PDF document data
function documentSplitEvent(sender: PdfDocument, args: PdfDocumentSplitEventArgs): void {
  Save.save('output_' + args.index + '.pdf', new Blob([args.pdfData], { type: 'application/pdf' }));
}

// Destroy the document
document.destroy();
```

```javascript
const { PdfDocument } = require('@syncfusion/ej2-pdf');
const { Save } = require('@syncfusion/ej2-file-utils');

// Load an existing PDF document
const document = new PdfDocument(data);
document.splitEvent = documentSplitEvent;

// Split PDF document by page ranges specified
document.splitByPageRanges([[0, 4], [5, 9]]);

// Event to invoke while splitting PDF document data
function documentSplitEvent(sender, args) {
  Save.save('output_' + args.index + '.pdf', new Blob([args.pdfData], { type: 'application/pdf' }));
}

// Destroy the document
document.destroy();
```

## Advanced Splitting

### Understanding Split Event

The split event provides access to split document data:

```typescript
import { PdfDocument, PdfDocumentSplitEventArgs } from '@syncfusion/ej2-pdf';

function documentSplitEvent(sender: PdfDocument, args: PdfDocumentSplitEventArgs): void {
  // args.index: Index of the split document (0-based)
  // args.pdfData: Uint8Array containing the PDF data
  
  // Custom file naming
  const filename = `document-part-${args.index + 1}.pdf`;
  Save.save(filename, new Blob([args.pdfData], { type: 'application/pdf' }));
  
  // Or save to server, database, etc.
  // uploadToServer(filename, args.pdfData);
}
```

### Split with Custom File Names

Use split index to create custom file names:

```typescript
import { PdfDocument, PdfDocumentSplitEventArgs } from '@syncfusion/ej2-pdf';
import { Save } from '@syncfusion/ej2-file-utils';

let document: PdfDocument = new PdfDocument(data);
document.splitEvent = customSplitEvent;

// Split by page ranges
document.splitByPageRanges([[0, 9], [10, 19], [20, 29]]);

function customSplitEvent(sender: PdfDocument, args: PdfDocumentSplitEventArgs): void {
  const sectionNames = ['Introduction', 'Main-Content', 'Conclusion'];
  const filename = sectionNames[args.index] || `Section-${args.index}`;
  Save.save(filename + '.pdf', new Blob([args.pdfData], { type: 'application/pdf' }));
}

document.destroy();
```

### Split Odd and Even Pages

Split a document into odd and even page documents:

```typescript
import { PdfDocument, PdfDocumentSplitEventArgs } from '@syncfusion/ej2-pdf';
import { Save } from '@syncfusion/ej2-file-utils';

let document: PdfDocument = new PdfDocument(data);
let pageCount = document.pageCount;

// Create ranges for odd pages (0, 2, 4...)
let oddRanges: number[][] = [];
for (let i = 0; i < pageCount; i += 2) {
  oddRanges.push([i, i]);
}

// Create ranges for even pages (1, 3, 5...)
let evenRanges: number[][] = [];
for (let i = 1; i < pageCount; i += 2) {
  evenRanges.push([i, i]);
}

// Split odd pages
document.splitEvent = (sender: PdfDocument, args: PdfDocumentSplitEventArgs) => {
  Save.save('odd-pages.pdf', new Blob([args.pdfData], { type: 'application/pdf' }));
};
document.splitByPageRanges(oddRanges);

// Split even pages
document.splitEvent = (sender: PdfDocument, args: PdfDocumentSplitEventArgs) => {
  Save.save('even-pages.pdf', new Blob([args.pdfData], { type: 'application/pdf' }));
};
document.splitByPageRanges(evenRanges);

document.destroy();
```

## Content Preservation

### Preserving Document Features

The split methods automatically preserve:

- **Bookmarks**: Bookmarks within the split page ranges are maintained
- **Form Fields**: Form fields on split pages are preserved
- **Annotations**: Annotations on split pages are included
- **Hyperlinks**: Internal and external links are maintained
- **Metadata**: Document properties can be preserved

```typescript
import { PdfDocument, PdfDocumentSplitEventArgs } from '@syncfusion/ej2-pdf';
import { Save } from '@syncfusion/ej2-file-utils';

// Load document with bookmarks, forms, and annotations
let document: PdfDocument = new PdfDocument(data);
document.splitEvent = documentSplitEvent;

// Split preserves all content features
document.splitByPageRanges([[0, 4], [5, 9]]);

function documentSplitEvent(sender: PdfDocument, args: PdfDocumentSplitEventArgs): void {
  // Split documents maintain original features
  Save.save('output_' + args.index + '.pdf', new Blob([args.pdfData], { type: 'application/pdf' }));
}

document.destroy();
```

## Practical Examples

### Split Every N Pages

Split document into chunks of N pages:

```typescript
import { PdfDocument, PdfDocumentSplitEventArgs } from '@syncfusion/ej2-pdf';
import { Save } from '@syncfusion/ej2-file-utils';

let document: PdfDocument = new PdfDocument(data);
document.splitEvent = documentSplitEvent;

// Split into chunks of 10 pages each
document.splitByFixedNumber(10);

function documentSplitEvent(sender: PdfDocument, args: PdfDocumentSplitEventArgs): void {
  Save.save(`chunk-${args.index + 1}.pdf`, new Blob([args.pdfData], { type: 'application/pdf' }));
}

document.destroy();
```

### Split Large Document Efficiently

Split a large document into manageable parts:

```typescript
import { PdfDocument, PdfDocumentSplitEventArgs } from '@syncfusion/ej2-pdf';
import { Save } from '@syncfusion/ej2-file-utils';

let document: PdfDocument = new PdfDocument(largeData);
let pageCount = document.pageCount;
let pagesPerPart = 50;

// Calculate ranges
let ranges: number[][] = [];
for (let i = 0; i < pageCount; i += pagesPerPart) {
  let endPage = Math.min(i + pagesPerPart - 1, pageCount - 1);
  ranges.push([i, endPage]);
}

document.splitEvent = (sender: PdfDocument, args: PdfDocumentSplitEventArgs) => {
  Save.save(`part-${args.index + 1}.pdf`, new Blob([args.pdfData], { type: 'application/pdf' }));
};

document.splitByPageRanges(ranges);
document.destroy();
```

### Split with Progress Tracking

Track split progress:

```typescript
import { PdfDocument, PdfDocumentSplitEventArgs } from '@syncfusion/ej2-pdf';
import { Save } from '@syncfusion/ej2-file-utils';

let document: PdfDocument = new PdfDocument(data);
let totalSplits = 5;
let completedSplits = 0;

document.splitEvent = (sender: PdfDocument, args: PdfDocumentSplitEventArgs) => {
  completedSplits++;
  let progress = (completedSplits / totalSplits) * 100;
  console.log(`Split progress: ${progress.toFixed(2)}%`);
  
  Save.save(`output_${args.index}.pdf`, new Blob([args.pdfData], { type: 'application/pdf' }));
};

// Split by fixed number
document.splitByFixedNumber(Math.ceil(document.pageCount / totalSplits));
document.destroy();
```

### Save to Server or Storage

Upload split documents to a server:

```typescript
import { PdfDocument, PdfDocumentSplitEventArgs } from '@syncfusion/ej2-pdf';

async function uploadToServer(filename: string, data: Uint8Array): Promise<void> {
  const formData = new FormData();
  formData.append('file', new Blob([data], { type: 'application/pdf' }), filename);
  
  await fetch('/api/upload', {
    method: 'POST',
    body: formData
  });
}

let document: PdfDocument = new PdfDocument(data);
document.splitEvent = async (sender: PdfDocument, args: PdfDocumentSplitEventArgs) => {
  await uploadToServer(`split-${args.index}.pdf`, args.pdfData);
};

document.split();
document.destroy();
```

## Batch Operations

### Split Multiple Documents

Process multiple PDF documents:

```typescript
import { PdfDocument, PdfDocumentSplitEventArgs } from '@syncfusion/ej2-pdf';
import { Save } from '@syncfusion/ej2-file-utils';

let dataSources: Uint8Array[] = [data1, data2, data3];

dataSources.forEach((data, docIndex) => {
  let document: PdfDocument = new PdfDocument(data);
  
  document.splitEvent = (sender: PdfDocument, args: PdfDocumentSplitEventArgs) => {
    Save.save(`doc${docIndex}-part${args.index}.pdf`, new Blob([args.pdfData], { type: 'application/pdf' }));
  };
  
  // Split each document into individual pages
  document.split();
  document.destroy();
});
```

### Async Split Processing

Handle split operations asynchronously:

```typescript
import { PdfDocument, PdfDocumentSplitEventArgs } from '@syncfusion/ej2-pdf';

async function splitDocumentAsync(data: Uint8Array, outputPrefix: string): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      let document: PdfDocument = new PdfDocument(data);
      let splitCount = 0;
      let expectedSplits = document.pageCount;
      
      document.splitEvent = async (sender: PdfDocument, args: PdfDocumentSplitEventArgs) => {
        // Upload or save asynchronously
        await saveAsync(`${outputPrefix}-${args.index}.pdf`, args.pdfData);
        splitCount++;
        
        if (splitCount === expectedSplits) {
          document.destroy();
          resolve();
        }
      };
      
      document.split();
    } catch (error) {
      reject(error);
    }
  });
}

async function saveAsync(filename: string, data: Uint8Array): Promise<void> {
  // Implement async save logic
  console.log(`Saving ${filename}`);
}

// Usage
await splitDocumentAsync(data, 'output');
```

### Conditional Splitting

Split documents based on conditions:

```typescript
import { PdfDocument, PdfDocumentSplitEventArgs } from '@syncfusion/ej2-pdf';
import { Save } from '@syncfusion/ej2-file-utils';

let document: PdfDocument = new PdfDocument(data);
let pageCount = document.pageCount;

// Only split if document has more than 10 pages
if (pageCount > 10) {
  document.splitEvent = documentSplitEvent;
  document.splitByFixedNumber(5);
} else {
  // Save as single document
  Save.save('document.pdf', new Blob([data], { type: 'application/pdf' }));
}

function documentSplitEvent(sender: PdfDocument, args: PdfDocumentSplitEventArgs): void {
  Save.save(`output_${args.index}.pdf`, new Blob([args.pdfData], { type: 'application/pdf' }));
}

document.destroy();
```

## Split Methods Comparison

| Method | Description | Use Case |
|--------|-------------|----------|
| `split()` | Splits into individual pages | Create single-page documents |
| `splitByFixedNumber(n)` | Splits by fixed page count | Equal-sized chunks |
| `splitByPageRanges(ranges)` | Splits by custom ranges | Specific sections/chapters |

## Best Practices

1. **Resource Management**: Always call `destroy()` after splitting
2. **Event Handler**: Set `splitEvent` before calling split methods
3. **Page Ranges**: Use zero-based indices for page ranges
4. **File Naming**: Use `args.index` for unique filenames
5. **Memory**: For large documents, process splits immediately
6. **Error Handling**: Wrap split operations in try-catch blocks
7. **Validation**: Check `pageCount` before splitting

## Common Use Cases

### Split for Email Attachment

Split large document to fit email size limits:

```typescript
import { PdfDocument, PdfDocumentSplitEventArgs } from '@syncfusion/ej2-pdf';
import { Save } from '@syncfusion/ej2-file-utils';

let document: PdfDocument = new PdfDocument(data);
let maxPagesPerEmail = 10;

document.splitEvent = (sender: PdfDocument, args: PdfDocumentSplitEventArgs) => {
  // Each split will be small enough for email
  Save.save(`email-attachment-${args.index + 1}.pdf`, new Blob([args.pdfData], { type: 'application/pdf' }));
};

document.splitByFixedNumber(maxPagesPerEmail);
document.destroy();
```

### Split for Web Viewing

Create individual pages for web viewer:

```typescript
import { PdfDocument, PdfDocumentSplitEventArgs } from '@syncfusion/ej2-pdf';
import { Save } from '@syncfusion/ej2-file-utils';

let document: PdfDocument = new PdfDocument(data);

document.splitEvent = (sender: PdfDocument, args: PdfDocumentSplitEventArgs) => {
  // Save each page for lazy loading in web viewer
  Save.save(`page-${args.index + 1}.pdf`, new Blob([args.pdfData], { type: 'application/pdf' }));
};

document.split();
document.destroy();
```

## Common Gotchas

1. **Zero-Indexed Pages**: Page ranges use 0-based indexing (page 1 = index 0)
2. **Event Timing**: Set `splitEvent` before calling split methods
3. **Memory Management**: Always destroy the document after splitting
4. **Page Range Validation**: Ensure ranges don't exceed page count
5. **Async Operations**: Handle async saves properly in split event
6. **Blob Creation**: Use correct MIME type for PDF blobs

## Error Handling

```typescript
import { PdfDocument, PdfDocumentSplitEventArgs } from '@syncfusion/ej2-pdf';
import { Save } from '@syncfusion/ej2-file-utils';

try {
  let document: PdfDocument = new PdfDocument(data);
  
  // Validate page count
  if (document.pageCount === 0) {
    throw new Error('Document has no pages');
  }
  
  document.splitEvent = (sender: PdfDocument, args: PdfDocumentSplitEventArgs) => {
    try {
      Save.save(`output_${args.index}.pdf`, new Blob([args.pdfData], { type: 'application/pdf' }));
    } catch (saveError) {
      console.error(`Failed to save split ${args.index}:`, saveError);
    }
  };
  
  document.split();
  document.destroy();
} catch (error) {
  console.error('Split operation failed:', error);
}
```

## Related References

- [Merge Documents](./merge-documents.md) - Combining PDFs
- [Bookmarks](./bookmarks.md) - Working with bookmarks
- [Form Fields](./form-fields.md) - Form preservation
- [Annotations](./annotations.md) - Annotation handling
- [PDF Pages](./pdf-pages.md) - Page manipulation
