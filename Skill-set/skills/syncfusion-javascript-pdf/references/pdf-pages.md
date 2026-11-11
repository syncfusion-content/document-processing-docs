# PDF Pages Management

## Table of Contents
- [Overview](#overview)
- [Adding Pages](#adding-pages)
- [Page Sections](#page-sections)
- [Page Navigation](#page-navigation)
- [Page Manipulation](#page-manipulation)
- [Page Rotation](#page-rotation)
- [Importing Pages](#importing-pages)

## Overview

This reference covers comprehensive page management including adding, removing, rearranging, rotating, and importing pages in PDF documents.

**Note:** PDF pages are created with default settings: A4 size (595x842 points), portrait orientation, and 40-point margins.

## Adding Pages

### Basic Page Addition

```typescript
import { PdfDocument, PdfPage } from '@syncfusion/ej2-pdf';

// Create document
let document: PdfDocument = new PdfDocument();

// Add page with default settings
let page: PdfPage = document.addPage();

// Save
document.save('Output.pdf');
document.destroy();
```

### Adding Pages with Custom Settings

```typescript
import { 
  PdfDocument, 
  PdfPage, 
  PdfPageSettings, 
  PdfPageOrientation, 
  PdfMargins 
} from '@syncfusion/ej2-pdf';

// Create document
let document: PdfDocument = new PdfDocument();

// Define custom page settings
let settings: PdfPageSettings = new PdfPageSettings({
  orientation: PdfPageOrientation.landscape,
  size: { width: 842, height: 595 },
  margins: new PdfMargins(50)
});

// Add page with custom settings
let page: PdfPage = document.addPage(settings);

// Save
document.save('Output.pdf');
document.destroy();
```

### Adding Multiple Pages

```typescript
import { PdfDocument, PdfPage } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();

// Add multiple pages
let page1: PdfPage = document.addPage();
let page2: PdfPage = document.addPage();
let page3: PdfPage = document.addPage();

// Each page is appended to the end
// Order: page1, page2, page3

document.save('Output.pdf');
document.destroy();
```

## Page Sections

Sections allow different page settings within the same document.

### Creating Sections with Different Settings

```typescript
import { 
  PdfDocument, 
  PdfPage, 
  PdfSection,
  PdfPageSettings, 
  PdfPageOrientation, 
  PdfMargins,
  PdfGraphics,
  PdfPen,
  PdfFont,
  PdfFontFamily,
  PdfFontStyle,
  PdfBrush,
  PdfStringFormat,
  PdfTextAlignment
} from '@syncfusion/ej2-pdf';

// Create document
let document: PdfDocument = new PdfDocument();

// Section 1: A4 Portrait with 40pt margins
const settingsA4Portrait: PdfPageSettings = new PdfPageSettings({
  margins: new PdfMargins(40),
  size: { width: 595, height: 842 },
  orientation: PdfPageOrientation.portrait
});

// Section 2: A5 Portrait with 30pt margins
const settingsA5Portrait: PdfPageSettings = new PdfPageSettings({
  margins: new PdfMargins(30),
  size: { width: 420, height: 595 },
  orientation: PdfPageOrientation.portrait
});

// Add first section with A4 settings
const section1: PdfSection = document.addSection(settingsA4Portrait);
const page1: PdfPage = section1.addPage();
const page2: PdfPage = section1.addPage();

// Add second section with A5 settings
const section2: PdfSection = document.addSection(settingsA5Portrait);
const page3: PdfPage = section2.addPage();
const page4: PdfPage = section2.addPage();

// All pages in section1 use A4 settings
// All pages in section2 use A5 settings

document.save('Output.pdf');
document.destroy();
```

### Section Use Cases

- **Mixed orientations:** Portrait cover page + landscape charts
- **Different page sizes:** A4 main content + A3 fold-outs
- **Varying margins:** Standard margins + full-bleed pages
- **Chapter divisions:** Different formatting per chapter

## Page Navigation

### Getting Page Count

```typescript
import { PdfDocument } from '@syncfusion/ej2-pdf';

// Load existing document
let document: PdfDocument = new PdfDocument(data);

// Get total page count
let count: number = document.pageCount;

console.log(`Document has ${count} pages`);

document.destroy();
```

### Accessing Specific Pages

```typescript
import { PdfDocument, PdfPage } from '@syncfusion/ej2-pdf';

// Load document
let document: PdfDocument = new PdfDocument(data);

// Access first page (index 0)
let firstPage: PdfPage = document.getPage(0);

// Access last page
let lastPage: PdfPage = document.getPage(document.pageCount - 1);

// Access specific page
let pageIndex = 2;  // Third page
let page: PdfPage = document.getPage(pageIndex);

document.destroy();
```

### Iterating Through Pages

```typescript
import { PdfDocument, PdfPage } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument(data);

// Loop through all pages
for (let i = 0; i < document.pageCount; i++) {
  let page: PdfPage = document.getPage(i);
  // Process each page...
}

document.destroy();
```

## Page Manipulation

### Removing Pages

```typescript
import { PdfDocument, PdfPage } from '@syncfusion/ej2-pdf';

// Load document
let document: PdfDocument = new PdfDocument(data);

// Remove by index (zero-based)
document.removePage(0);  // Removes first page

// Remove by page object
let lastPage: PdfPage = document.getPage(document.pageCount - 1);
document.removePage(lastPage);

// Save modified document
document.save('output.pdf');
document.destroy();
```

### Rearranging Pages

```typescript
import { PdfDocument } from '@syncfusion/ej2-pdf';

// Load document
let document: PdfDocument = new PdfDocument(data);

// Reorder pages by index array
// Example: Move page 3 to first, page 2 to second, page 1 to third
document.reorderPages([2, 1, 0]);

// Another example: Reverse order of first 4 pages
// Original: [0, 1, 2, 3, ...]
// New: [3, 2, 1, 0, ...]
document.reorderPages([3, 2, 1, 0]);

// Save
document.save('output.pdf');
document.destroy();
```

**Reorder Rules:**
- Provide zero-based page indices
- Array length must match total pages or subset to reorder
- Pages not in array remain in original position after specified pages

### Rearrangement Use Cases

```typescript
import { PdfDocument } from '@syncfusion/ej2-pdf';

// Load document
let document: PdfDocument = new PdfDocument(data);
// Reverse entire document
let indices = [];
for (let i = document.pageCount - 1; i >= 0; i--) {
  indices.push(i);
}
document.reorderPages(indices);

// Move first page to end
let reorder = [];
for (let i = 1; i < document.pageCount; i++) {
  reorder.push(i);
}
reorder.push(0);  // Original first page now last
document.reorderPages(reorder);
```

## Page Rotation

### Adding Rotated Pages

```typescript
import { 
  PdfDocument, 
  PdfPage, 
  PdfPageSettings, 
  PdfRotationAngle,
  PdfGraphics,
  PdfFont,
  PdfFontFamily,
  PdfFontStyle,
  PdfBrush
} from '@syncfusion/ej2-pdf';

// Create document
let document: PdfDocument = new PdfDocument();

// Define settings with rotation
let settings: PdfPageSettings = new PdfPageSettings({
  rotation: PdfRotationAngle.angle180
});

// Add rotated page
let page: PdfPage = document.addPage(settings);

// Get graphics and add content
let graphics: PdfGraphics = page.graphics;
let font: PdfFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);

graphics.drawString('Hello World', font, 
  { x: 10, y: 20, width: 100, height: 200 }, 
  new PdfBrush({ r: 0, g: 0, b: 255 }));

document.save('Output.pdf');
document.destroy();
```

### Rotation Angles

```typescript
import { PdfRotationAngle } from '@syncfusion/ej2-pdf';

// Available rotation angles
PdfRotationAngle.angle0    // No rotation (default)
PdfRotationAngle.angle90   // 90 degrees clockwise
PdfRotationAngle.angle180  // 180 degrees (upside down)
PdfRotationAngle.angle270  // 270 degrees clockwise (90 CCW)
```

### Rotating Existing Pages

```typescript
import { PdfDocument, PdfPage, PdfRotationAngle } from '@syncfusion/ej2-pdf';

// Load document
let document: PdfDocument = new PdfDocument(data);

// Access page to rotate
let page: PdfPage = document.getPage(0);

// Set rotation
page.rotation = PdfRotationAngle.angle180;

// Save
document.save('output.pdf');
document.destroy();
```

### Rotation Use Cases

- **Landscape content:** Rotate 90° for wide tables/charts
- **Mixed orientations:** Some pages portrait, others landscape
- **Scanning corrections:** Fix improperly scanned pages
- **Special layouts:** Rotated pages for binding or folding

## Importing Pages

### Duplicating Pages Within Document

```typescript
import { 
  PdfDocument, 
  PdfPageImportOptions,
  PdfRotationAngle
} from '@syncfusion/ej2-pdf';

// Load document
let document: PdfDocument = new PdfDocument(data);

// Create import options
let options: PdfPageImportOptions = new PdfPageImportOptions();
options.targetIndex = 1;  // Insert at index 1
options.rotation = PdfRotationAngle.angle180;
options.optimizeResources = true;

// Copy first page and insert as second page
document.importPage(0, options);

// Save
document.save('output.pdf');
document.destroy();
```

### PdfPageImportOptions Properties

| Property | Description | Example |
|----------|-------------|---------|
| **targetIndex** | Index where page will be inserted | `0` (first), `1` (second) |
| **rotation** | Rotation angle for imported page | `PdfRotationAngle.angle90` |
| **optimizeResources** | Optimize shared resources | `true` or `false` |

### Import Use Cases

```typescript
import { PdfDocument, PdfPageImportOptions, PdfRotationAngle } from '@syncfusion/ej2-pdf';

// Load document
let document: PdfDocument = new PdfDocument(data);
// Duplicate cover page
let options: PdfPageImportOptions = new PdfPageImportOptions();
options.targetIndex = document.pageCount;  // Add to end
document.importPage(0, options);

// Create multiple copies with rotation
let copyOptions: PdfPageImportOptions = new PdfPageImportOptions();
copyOptions.targetIndex = 1;
copyOptions.rotation = PdfRotationAngle.angle90;
copyOptions.optimizeResources = true;
document.importPage(0, copyOptions);
```

## Best Practices

1. **Page Order:** Add pages in the order they should appear
2. **Sections:** Use sections for different page settings within one document
3. **Memory:** Call `destroy()` after saving to free resources
4. **Indexing:** Remember pages are zero-indexed (first page = 0)
5. **Rearrange Carefully:** Test page reordering with small documents first
6. **Rotation:** Apply rotation before adding content for correct positioning

## Common Gotchas

- **Zero-Based Indexing:** First page is index 0, not 1
- **Default Settings:** A4 portrait, 40pt margins unless specified
- **Rearrange Array:** Must provide valid indices matching existing pages
- **Remove Page:** Indices shift after removal (removing index 0 makes old index 1 the new index 0)
- **Rotation Coordinates:** Content coordinates rotate with page

## Page Properties

### Accessing Page Dimensions

```typescript
import { PdfDocument, PdfPage } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument(data);
let page: PdfPage = document.getPage(0);

// Get page size
let pageSize = page.size;
let width = pageSize.width;   // In points
let height = pageSize.height; // In points

// Get graphics client size (accounting for margins)
let graphics = page.graphics;
let clientSize = graphics.clientSize;
let contentWidth = clientSize.width;
let contentHeight = clientSize.height;

document.destroy();
```

## Related References

- **Document settings:** See [document-settings.md](document-settings.md)
- **Adding content:** See [text-rendering.md](text-rendering.md), [images.md](images.md)
- **Page templates:** See [templates.md](templates.md)
- **Merging documents:** See [merge-documents.md](merge-documents.md)
