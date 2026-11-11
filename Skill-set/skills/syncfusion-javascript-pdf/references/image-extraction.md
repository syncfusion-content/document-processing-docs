# Image Extraction

## Table of Contents
- [Overview](#overview)
- [Package Installation](#package-installation)
- [Platform-Specific Setup](#platform-specific-setup)
- [Basic Image Extraction](#basic-image-extraction)
- [Image Metadata and Properties](#image-metadata-and-properties)
- [Page Range Extraction](#page-range-extraction)
- [Working with Image Data](#working-with-image-data)
- [Common Scenarios](#common-scenarios)
- [Troubleshooting](#troubleshooting)

## Overview

The Syncfusion JavaScript PDF library provides comprehensive image extraction capabilities through the `@syncfusion/ej2-pdf-data-extract` add-on package. Extract embedded images from PDFs along with their metadata, including position, format, dimensions, and rendering properties.

**When to use:**
- Extract all images from a PDF document
- Retrieve specific images from certain pages
- Access image metadata (bounds, format, dimensions)
- Analyze image properties (interpolation, masking)
- Export images for further processing

## Package Installation

The image extraction feature requires the data extraction add-on package:

```bash
npm install @syncfusion/ej2-pdf-data-extract --save
```

This package works alongside the base PDF library:

```bash
npm install @syncfusion/ej2-pdf --save
```

## Platform-Specific Setup

**Critical Setup Requirement:**

Ensure your application includes an `ej2-pdf-lib` folder within a publicly accessible static directory:
- **ASP.NET Core**: `wwwroot/ej2-pdf-lib/`
- **Angular/React/Vue**: `public/ej2-pdf-lib/` or `dist/ej2-pdf-lib/`
- **Node.js/Express**: `public/ej2-pdf-lib/` or static file directory

**Required Files:**

The `ej2-pdf-lib` folder must contain:
- `.wasm` files (WebAssembly modules)
- `.js` files (JavaScript helpers)
- `openjpeg` library files

**Verification:**

Check the platform's actual root directory path. Depending on the platform, the root path may vary. Review the path referenced in the [Getting Started documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/create-pdf-document-asp-net-core) for your specific platform.

## Basic Image Extraction

### TypeScript Example

```typescript
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor, PdfEmbeddedImage } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);

// Initialize a new instance of PdfDataExtractor
let extractor: PdfDataExtractor = new PdfDataExtractor(document);

// Extract images from all pages
let imageCollection: Promise<PdfEmbeddedImage[]> = extractor.extractImages({
  startPageIndex: 0,
  endPageIndex: document.pageCount - 1
});

console.log(`Found ${(await imageCollection).length} images`);

// Clean up
document.destroy();
```

### JavaScript Example

```javascript
// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);

// Initialize extractor
var extractor = new ej.pdfdataextract.PdfDataExtractor(document);

// Extract images from all pages
var imageCollection = extractor.extractImages({
  startPageIndex: 0,
  endPageIndex: document.pageCount - 1
});

console.log('Found ' + imageCollection.length + ' images');

// Clean up
document.destroy();
```

Before using the browser global objects in the example above, include the minified runtime scripts (CDN) in your HTML:

**Syntax:**
> Script: `https://cdn.syncfusion.com/ej2/{Version}/dist/{PACKAGE_NAME}.min.js`

**Placeholder:**
- Use required package `ej2-pdf` or `ej2-pdf-data-extract` as {PACKAGE_NAME} for the related PDF and data extract features.
- Use latest CDN package version of the package. For example, `33.1.44`.

## Image Metadata and Properties

Each extracted image is returned as a `PdfEmbeddedImage` object with comprehensive metadata:

### Accessing Image Properties

```typescript
// Get the first extracted image
let imageInfo: PdfEmbeddedImage = imageCollection[0];

// Raw image data
let imageData: Uint8Array = imageInfo.data;

// Image format (e.g., 'jpeg', 'png')
let format: ImageFormat = imageInfo.type;

// Page information
let pageIndex: number = imageInfo.pageIndex;         // Which page (0-based)
let occurrenceIndex: number = imageInfo.index;       // Which image on that page

// Position and size
let bounds = imageInfo.bounds;
console.log(`Position: x=${bounds.x}, y=${bounds.y}`);
console.log(`Size: ${bounds.width}x${bounds.height}`);

// Physical dimensions
let physicalDimension: Size = imageInfo.physicalDimension;
console.log(`Actual dimensions: ${physicalDimension.width}x${physicalDimension.height}`);

// Resource name
let resourceName: string = imageInfo.resourceName;  // XObject resource name

// Rendering properties
let isInterpolated: boolean = imageInfo.isImageInterpolated;
let isMasked: boolean = imageInfo.isImageMasked;
let isSoftMasked: boolean = imageInfo.isSoftMasked;
```

### Property Descriptions

| Property | Type | Description |
|----------|------|-------------|
| `data` | `Uint8Array` | Raw image bytes for saving or processing |
| `type` | `string` | Image format (jpeg, png, etc.) |
| `pageIndex` | `number` | Zero-based page number where image is located |
| `index` | `number` | Zero-based occurrence index on the page |
| `bounds` | `Rectangle` | Position (x, y) and size (width, height) in PDF units |
| `physicalDimension` | `Size` | Actual pixel dimensions of the image |
| `resourceName` | `string` | PDF XObject resource name for the image |
| `isImageInterpolated` | `boolean` | Whether image uses interpolation for rendering |
| `isImageMasked` | `boolean` | Whether image has a mask applied |
| `isSoftMasked` | `boolean` | Whether image uses soft masking |

## Page Range Extraction

### Extract from Specific Pages

```typescript
// Extract images from pages 3-5 only
let images = extractor.extractImages({
  startPageIndex: 2,  // Page 3 (0-based index)
  endPageIndex: 4     // Page 5 (inclusive)
});
```

### Extract from Single Page

```typescript
// Extract from page 1 only
let singlePageImages = extractor.extractImages({
  startPageIndex: 0,
  endPageIndex: 0
});
```

### Extract from Last Pages

```typescript
// Extract from last 3 pages
let lastPageCount = 3;
let images = extractor.extractImages({
  startPageIndex: document.pageCount - lastPageCount,
  endPageIndex: document.pageCount - 1
});
```

### Create Blob for Browser

```typescript
// Create blob for download in browser
let blob = new Blob([imageInfo.data], { type: `image/${imageInfo.type}` });
let url = URL.createObjectURL(blob);

// Trigger download
let a = document.createElement('a');
a.href = url;
a.download = `image.${imageInfo.type}`;
a.click();
URL.revokeObjectURL(url);
```

## Common Scenarios

### Scenario 1: Extract and Count Images by Page

```typescript
let pageImageCounts = new Map<number, number>();

imageCollection.forEach(image => {
  let count = pageImageCounts.get(image.pageIndex) || 0;
  pageImageCounts.set(image.pageIndex, count + 1);
});

pageImageCounts.forEach((count, page) => {
  console.log(`Page ${page + 1}: ${count} image(s)`);
});
```

### Scenario 2: Filter Images by Size

```typescript
// Extract only large images (>500x500 pixels)
let largeImages = imageCollection.filter(image => {
  return image.physicalDimension.width > 500 && 
         image.physicalDimension.height > 500;
});

console.log(`Found ${largeImages.length} large images`);
```

### Scenario 3: Extract Images by Format

```typescript
// Extract only JPEG images
let jpegImages = imageCollection.filter(image => 
  image.type.toLowerCase() === 'jpeg' || image.type.toLowerCase() === 'jpg'
);

// Extract only PNG images
let pngImages = imageCollection.filter(image => 
  image.type.toLowerCase() === 'png'
);
```

### Scenario 4: Get Image Position Information

```typescript
imageCollection.forEach((image, index) => {
  console.log(`Image ${index + 1}:`);
  console.log(`  Page: ${image.pageIndex + 1}`);
  console.log(`  Position: (${image.bounds.x}, ${image.bounds.y})`);
  console.log(`  Size: ${image.bounds.width} x ${image.bounds.height} units`);
  console.log(`  Actual: ${image.physicalDimension.width} x ${image.physicalDimension.height} pixels`);
  console.log(`  Format: ${image.type}`);
});
```

## Troubleshooting

### Issue: extractImages() Returns Empty Array

**Possible causes:**
1. PDF has no embedded images
2. Images are actually vector graphics (not raster images)
3. Platform setup incomplete (missing WASM files)
4. Incorrect page range

**Solutions:**
```typescript
// Verify page count
console.log(`Document has ${document.pageCount} pages`);

// Check for extraction errors
try {
  let images = extractor.extractImages({
    startPageIndex: 0,
    endPageIndex: document.pageCount - 1
  });
  if (images.length === 0) {
    console.log('No raster images found in PDF');
  }
} catch (error) {
  console.error('Extraction failed:', error);
}
```

### Issue: "Cannot find ej2-pdf-lib" Error

**Solution:**
1. Verify `ej2-pdf-lib` folder exists in your static directory
2. Check folder contains `.wasm` and `.js` files
3. Ensure web server serves static files from that directory
4. Verify path matches platform requirements

### Issue: Image Data is Corrupted

**Solution:**
```typescript
// Ensure proper data handling
let imageData: Uint8Array = imageInfo.data;

// Verify data is not empty
if (imageData.length === 0) {
  console.error('Image data is empty');
}

// Check image format is supported
let supportedFormats = ['jpeg', 'jpg', 'png'];
if (!supportedFormats.includes(imageInfo.type.toLowerCase())) {
  console.warn(`Unsupported format: ${imageInfo.type}`);
}
```

### Issue: Memory Issues with Large PDFs

**Solution:**
```typescript
// Extract page by page instead of all at once
for (let i = 0; i < document.pageCount; i++) {
  let pageImages = extractor.extractImages({
    startPageIndex: i,
    endPageIndex: i
  });
  
  // Process images immediately
  pageImages.forEach(image => {
    // Save or process image
  });
  
  // Allow garbage collection
  pageImages = null;
}
```

### Issue: Index Out of Range

**Solution:**
```typescript
// Validate page range
let startPage = 0;
let endPage = Math.min(desiredEndPage, document.pageCount - 1);

let images = extractor.extractImages({
  startPageIndex: startPage,
  endPageIndex: endPage
});
```

## Best Practices

1. **Always destroy the document** after extraction to free memory:
   ```typescript
   document.destroy();
   ```

2. **Extract by page range** for large documents to optimize memory usage

3. **Check image format** before processing to ensure compatibility

4. **Verify platform setup** before deploying to production

5. **Handle empty results** gracefully when PDFs have no images

6. **Use try-catch blocks** around extraction to handle errors

7. **Filter images** by properties (size, format, page) before processing all

## Related Topics

- Content Redaction: [content-redaction.md](content-redaction.md)
- Common Workflows: [README.md](../README.md#common-use-cases)
