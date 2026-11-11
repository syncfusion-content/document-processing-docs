# Content Redaction

## Table of Contents
- [Overview](#overview)
- [Understanding Redaction](#understanding-redaction)
- [Package Requirements](#package-requirements)
- [Basic Redaction](#basic-redaction)
- [PdfRedactionRegion Configuration](#pdfredactionregion-configuration)
- [Async vs Sync Redaction](#async-vs-sync-redaction)
- [Canvas Render Callback](#canvas-render-callback)
- [Fill Colors](#fill-colors)
- [Custom Appearance](#custom-appearance)
- [Multiple Redaction Regions](#multiple-redaction-regions)
- [Common Scenarios](#common-scenarios)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

## Overview

Redaction permanently removes sensitive or confidential information from PDF documents. The Syncfusion JavaScript PDF library provides the `PdfRedactor` and `PdfRedactionRegion` classes for applying irreversible redactions to specific areas of PDF pages.

**When to use:**
- Remove personally identifiable information (PII)
- Protect confidential business data
- Comply with data privacy regulations (GDPR, HIPAA)
- Redact sensitive text, images, or graphics
- Apply consistent redaction appearance

## Understanding Redaction

**Redaction vs Deletion:**
- **Redaction**: Permanently removes content and replaces it with a visible indicator
- **Deletion**: May leave traces in PDF structure

**Key Characteristics:**
- **Irreversible**: Cannot be undone after saving
- **Permanent**: Content is completely removed from PDF
- **Visible**: Typically filled with color or custom appearance
- **Secure**: No way to recover redacted content

## Package Requirements

Redaction requires the data extraction add-on package:

```bash
npm install @syncfusion/ej2-pdf-data-extract --save
```

Base PDF library:

```bash
npm install @syncfusion/ej2-pdf --save
```

## Basic Redaction

### TypeScript Example

```typescript
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfRedactor, PdfRedactionRegion, ApplicationPlatform } from '@syncfusion/ej2-pdf-data-extract';

// Load the document
let document: PdfDocument = new PdfDocument(data);

// Create redactor
let redactor: PdfRedactor = new PdfRedactor(document);

// Define redaction region (page 0, x:10, y:10, width:100, height:50)
let redactions: PdfRedactionRegion[] = [];
redactions.push(new PdfRedactionRegion(0, {x: 10, y: 10, width: 100, height: 50}));

// Add redactions
redactor.add(redactions);

// Define canvas callback
const canvasRenderCallback = (): {canvas: any, applicationPlatform: ApplicationPlatform} => {
  const canvas = document.createElement('canvas');
  return { canvas: canvas, applicationPlatform: ApplicationPlatform.typescript };
};

// Apply redactions
await redactor.redact(canvasRenderCallback);

// Save and clean up
document.save('redacted.pdf');
document.destroy();
```

### JavaScript Example

```javascript
// Load the document
var document = new ej.pdf.PdfDocument(data);

// Create redactor
var redactor = new ej.pdfdataextract.PdfRedactor(document);

// Define redaction region
var redactions = [];
redactions.push(new ej.pdfdataextract.PdfRedactionRegion(0, {x: 10, y: 10, width: 100, height: 50}));

// Add redactions
redactor.add(redactions);

// Define canvas callback
const canvasRenderCallback = () => {
  const canvas = document.createElement('canvas');
  return { canvas: canvas, applicationPlatform: ej.pdfdataextract.ApplicationPlatform.javascript };
};

// Apply redactions
await redactor.redact(canvasRenderCallback);

// Save and clean up
document.save('redacted.pdf');
document.destroy();
```

## PdfRedactionRegion Configuration

### Constructor Syntax

```typescript
new PdfRedactionRegion(pageIndex, bounds, hasAppearance?)
```

**Parameters:**
- `pageIndex` (number): Zero-based page number
- `bounds` (Rectangle): `{x, y, width, height}` in PDF units
- `hasAppearance` (boolean, optional): Whether to use custom appearance (default: false)

### Basic Region

```typescript
// Redact area on page 1 (index 0)
let region = new PdfRedactionRegion(0, {
  x: 50,      // X coordinate
  y: 100,     // Y coordinate
  width: 200,  // Width
  height: 30   // Height
});
```

### Region with Custom Appearance

```typescript
// Enable custom appearance rendering
let region = new PdfRedactionRegion(0, {x: 50, y: 100, width: 200, height: 30}, true);
```

## Async vs Sync Redaction

### Async Redaction: redact(callback)

**Use when:**
- Redacting images along with text
- Need complete content redaction
- Can handle async operations

**Characteristics:**
- Requires canvas render callback
- Processes all content types (text, images, graphics)
- Slower but comprehensive

```typescript
await redactor.redact(canvasRenderCallback);
```

### Sync Redaction: redactSync()

**Use when:**
- Redacting only text and shapes (not images)
- Need faster performance
- No image redaction required

**Characteristics:**
- No callback needed
- Faster execution
- Cannot redact images

```typescript
redactor.redactSync();
```

**Important Note:**
> Use `PdfRedactor.redact(callback)` when you need to redact images along with other PDF content. In contrast, `PdfRedactor.redactSync()` is faster because it runs synchronously, but it cannot redact images—only text and other non-image elements.

## Canvas Render Callback

Required for async redaction to handle image processing.

### TypeScript Callback

```typescript
const canvasRenderCallback = (): {canvas: any, applicationPlatform: ApplicationPlatform} => {
  const canvas = document.createElement('canvas');
  return { 
    canvas: canvas, 
    applicationPlatform: ApplicationPlatform.typescript 
  };
};
```

### JavaScript Callback

```javascript
const canvasRenderCallback = () => {
  const canvas = document.createElement('canvas');
  return { 
    canvas: canvas, 
    applicationPlatform: ej.pdfdataextract.ApplicationPlatform.javascript 
  };
};
```

### ApplicationPlatform Values

- `ApplicationPlatform.typescript`
- `ApplicationPlatform.javascript`
- `ApplicationPlatform.angular`
- `ApplicationPlatform.react`
- `ApplicationPlatform.vue`

**Choose the platform that matches your application environment.**

## Fill Colors

Apply solid colors to redacted areas:

### TypeScript Example

```typescript
let region = new PdfRedactionRegion(0, {x: 40, y: 41, width: 80, height: 90});

// Set fill color (RGB format)
region.fillColor = {r: 255, g: 0, b: 0};  // Red

redactions.push(region);
```

### Common Fill Colors

```typescript
// Black (most common for redaction)
region.fillColor = {r: 0, g: 0, b: 0};

// White
region.fillColor = {r: 255, g: 255, b: 255};

// Red
region.fillColor = {r: 255, g: 0, b: 0};

// Gray
region.fillColor = {r: 128, g: 128, b: 128};
```

## Custom Appearance

Draw text or graphics over redacted areas:

### Text Appearance

```typescript
import { PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

// Create region with custom appearance enabled
let region = new PdfRedactionRegion(0, {x: 0, y: 0, width: 80, height: 20}, true);

// Embed font
let font = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);

// Draw text on redaction overlay
region.appearance.normal.graphics.drawString(
  'REDACTED',
  font,
  {x: 0, y: 0, width: 80, height: 20},
  new PdfBrush({r: 255, g: 255, b: 255})  // White text
);

redactions.push(region);
```

### Graphics Appearance

```typescript
import { PdfPen } from '@syncfusion/ej2-pdf';

let region = new PdfRedactionRegion(0, {x: 100, y: 100, width: 150, height: 40}, true);

// Access graphics
let graphics = region.appearance.normal.graphics;

// Draw rectangle with border
let pen = new PdfPen({r: 255, g: 0, b: 0}, 2);
let brush = new PdfBrush({r: 0, g: 0, b: 0});
graphics.drawRectangle(pen, brush, {x: 0, y: 0, width: 150, height: 40});

// Draw text
let font = document.embedFont(PdfFontFamily.helvetica, 12, PdfFontStyle.bold);
graphics.drawString(
  'CONFIDENTIAL',
  font,
  {x: 10, y: 12, width: 130, height: 20},
  new PdfBrush({r: 255, g: 255, b: 255})
);

redactions.push(region);
```

## Multiple Redaction Regions

Apply multiple redactions in a single operation:

### Example: Redact Header and Footer

```typescript
let redactions: PdfRedactionRegion[] = [];

// Redact header (full width, top 100 units)
let header = new PdfRedactionRegion(0, {x: 0, y: 0, width: 595, height: 100});
header.fillColor = {r: 0, g: 0, b: 0};
redactions.push(header);

// Redact footer (full width, bottom 50 units)
let pageHeight = 842; // A4 height
let footer = new PdfRedactionRegion(0, {x: 0, y: pageHeight - 50, width: 595, height: 50});
footer.fillColor = {r: 0, g: 0, b: 0};
redactions.push(footer);

// Add all redactions at once
redactor.add(redactions);
await redactor.redact(canvasRenderCallback);
```

### Example: Multiple Regions on Multiple Pages

```typescript
let redactions: PdfRedactionRegion[] = [];

// Redact on page 1
redactions.push(new PdfRedactionRegion(0, {x: 50, y: 100, width: 200, height: 30}));
redactions.push(new PdfRedactionRegion(0, {x: 50, y: 200, width: 150, height: 25}));

// Redact on page 2
redactions.push(new PdfRedactionRegion(1, {x: 100, y: 150, width: 180, height: 40}));

// Redact on page 3
redactions.push(new PdfRedactionRegion(2, {x: 75, y: 250, width: 220, height: 35}));

redactor.add(redactions);
await redactor.redact(canvasRenderCallback);
```

## Common Scenarios

### Scenario 1: Redact Social Security Numbers

```typescript
// Assuming you know positions of SSN fields
let redactions: PdfRedactionRegion[] = [];

// Redact SSN field on form
let ssnRegion = new PdfRedactionRegion(0, {x: 200, y: 450, width: 100, height: 15});
ssnRegion.fillColor = {r: 0, g: 0, b: 0};
redactions.push(ssnRegion);

redactor.add(redactions);
await redactor.redact(canvasRenderCallback);
```

### Scenario 2: Redact Signature Area

```typescript
let region = new PdfRedactionRegion(0, {x: 100, y: 600, width: 200, height: 50}, true);

// Add "SIGNATURE REDACTED" text
let font = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.italic);
region.appearance.normal.graphics.drawString(
  'SIGNATURE REDACTED',
  font,
  {x: 0, y: 20, width: 200, height: 30},
  new PdfBrush({r: 128, g: 128, b: 128})  // Gray text
);

redactions.push(region);
redactor.add(redactions);
await redactor.redact(canvasRenderCallback);
```

### Scenario 3: Redact Entire Page Section

```typescript
// Redact top third of page
let pageWidth = 595;  // A4 width
let pageHeight = 842; // A4 height

let topSection = new PdfRedactionRegion(0, {
  x: 0,
  y: 0,
  width: pageWidth,
  height: pageHeight / 3
});
topSection.fillColor = {r: 0, g: 0, b: 0};

redactions.push(topSection);
redactor.add(redactions);
await redactor.redact(canvasRenderCallback);
```

### Scenario 4: Redact with Classification Label

```typescript
let region = new PdfRedactionRegion(0, {x: 50, y: 50, width: 300, height: 40}, true);

// Draw red background
let graphics = region.appearance.normal.graphics;
graphics.drawRectangle(
  null,
  new PdfBrush({r: 255, g: 0, b: 0}),
  {x: 0, y: 0, width: 300, height: 40}
);

// Add classification text
let font = document.embedFont(PdfFontFamily.helvetica, 14, PdfFontStyle.bold);
graphics.drawString(
  'CLASSIFIED - REDACTED',
  font,
  {x: 10, y: 12, width: 280, height: 28},
  new PdfBrush({r: 255, g: 255, b: 255})
);

redactions.push(region);
redactor.add(redactions);
await redactor.redact(canvasRenderCallback);
```

## Best Practices

1. **Test on copy first**: Always test redaction on a copy before applying to original documents

2. **Verify coordinates**: Use PDF coordinate system (bottom-left origin) correctly

3. **Choose appropriate method**:
   - Use `redact()` for images
   - Use `redactSync()` for text-only (faster)

4. **Save after redaction**: Redaction is only permanent after saving

5. **Provide visual feedback**: Use fill colors or custom appearance to clearly indicate redacted areas

6. **Batch redactions**: Add all regions before applying for better performance

7. **Handle errors**: Wrap redaction in try-catch blocks

8. **Document redaction policy**: Keep records of what was redacted and why (for compliance)

## Troubleshooting

### Issue: Redaction Not Applied

**Solution:**
```typescript
// Ensure redactions are added before applying
redactor.add(redactions);

// Call redact method
await redactor.redact(canvasRenderCallback);

// MUST save document for changes to persist
document.save('output.pdf');
```

### Issue: Canvas Callback Error

**Solution:**
```typescript
// Ensure canvas element is created properly
const canvasRenderCallback = (): {canvas: any, applicationPlatform: ApplicationPlatform} => {
  try {
    const canvas = document.createElement('canvas');
    if (!canvas) {
      throw new Error('Failed to create canvas element');
    }
    return { 
      canvas: canvas, 
      applicationPlatform: ApplicationPlatform.typescript 
    };
  } catch (error) {
    console.error('Canvas callback error:', error);
    throw error;
  }
};
```

### Issue: Incorrect Redaction Position

**Solution:**
```typescript
// PDF coordinates start from bottom-left
// To redact from top: y = pageHeight - desiredTopOffset - height

let pageHeight = 842; // A4
let topOffset = 50;   // 50 units from top
let height = 30;

let region = new PdfRedactionRegion(0, {
  x: 100,
  y: pageHeight - topOffset - height,  // Calculate from top
  width: 200,
  height: height
});
```

### Issue: Custom Appearance Not Showing

**Solution:**
```typescript
// Ensure hasAppearance parameter is true
let region = new PdfRedactionRegion(0, bounds, true);  // Third parameter MUST be true

// Then add appearance
region.appearance.normal.graphics.drawString(...);
```

### Issue: Images Not Redacted

**Solution:**
```typescript
// Use async redact() method, NOT redactSync()
await redactor.redact(canvasRenderCallback);  // Redacts images

// redactor.redactSync();  // Does NOT redact images
```

### Issue: Page Index Out of Range

**Solution:**
```typescript
// Validate page index before creating region
let pageIndex = 5;
if (pageIndex >= 0 && pageIndex < document.pageCount) {
  let region = new PdfRedactionRegion(pageIndex, bounds);
  redactions.push(region);
} else {
  console.error(`Invalid page index: ${pageIndex}`);
}
```

## Security Considerations

1. **Irreversible**: Redaction cannot be undone after saving
2. **Complete removal**: Content is fully removed from PDF structure
3. **No metadata traces**: Redacted content leaves no recoverable traces
4. **Compliance**: Meets GDPR, HIPAA, and similar privacy requirements
5. **Verification**: Always verify redacted output before distribution

## Related Topics

- Image Extraction: [image-extraction.md](image-extraction.md)
- Common Workflows: [README.md](../README.md#common-use-cases)
