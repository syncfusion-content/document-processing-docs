# Templates in PDF Documents

## Table of Contents

- [Overview](#overview)
- [Creating Templates](#creating-templates)
    - [Basic Template Creation](#basic-template-creation)
- [Template Dimensions](#template-dimensions)
    - [Setting Bounds](#setting-bounds)
- [Drawing on Templates](#drawing-on-templates)
    - [Graphics Operations](#graphics-operations)
- [Using Templates](#using-templates)
    - [Applying to Pages](#applying-to-pages)
    - [Reusing Templates](#reusing-templates)
- [Headers and Footers](#headers-and-footers)
- [Common Use Cases](#common-use-cases)
    - [Headers](#headers)
    - [Footers](#footers)
    - [Watermarks](#watermarks)
- [Best Practices](#best-practices)
- [Common Gotchas](#common-gotchas)
- [Related References](#related-references)

## Overview

PDF templates in the Syncfusion JavaScript PDF library provide a reusable drawing surface for creating consistent content across multiple pages or documents. Templates support all standard PDF elements including text, images, shapes, and graphics, making them ideal for headers, footers, watermarks, and repeated content.

## Creating Templates

### Basic Template Creation

Create a simple template with text and images:

```typescript
import { PdfDocument, PdfPage, PdfTemplate, PdfImage, PdfBitmap, PdfStandardFont, PdfBrush, PdfFontFamily, PdfFontStyle } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Create a template
let template: PdfTemplate = new PdfTemplate({ x: 100, y: 100, width: 400, height: 200 });
// Create new image object by using JPEG image data as Base64 string format
let image: PdfImage = new PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Draw the image into the template graphics
template.graphics.drawImage(image, { x: 0, y: 0, width: 100, height: 50 });
// Create a new font
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 20, PdfFontStyle.regular);
// Draw the text into template graphics.
template.graphics.drawString('Created by Syncfusion PDF', font, {x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
// Draw template to the page
page.graphics.drawTemplate(template, { x: 0, y: 0, width: 100, height: 50 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
```

## Template Dimensions

### Setting Bounds

Define template size:

```typescript
let template: PdfTemplate = new PdfTemplate({ 
    x: 0, 
    y: 0, 
    width: 400, 
    height: 100 
});
```

## Drawing on Templates

### Graphics Operations

Templates support all graphics operations:

```typescript
// Draw text
template.graphics.drawString(text, font, bounds, brush);

// Draw images
template.graphics.drawImage(image, position);

// Draw shapes
template.graphics.drawRectangle(bounds, pen, brush);
template.graphics.drawEllipse(bounds, pen);
```

## Using Templates

### Applying to Pages

Draw templates on PDF pages:

```typescript
// Draw at specific position
page.graphics.drawTemplate(template, { x: 50, y: 100 });

// Draw with scaling
page.graphics.drawTemplate(template, { x: 0, y: 0, width: 200, height: 50 });
```

### Reusing Templates

Use the same template across multiple pages:

```typescript
let document: PdfDocument = new PdfDocument();

// Create template once
let headerTemplate: PdfTemplate = new PdfTemplate({ x: 0, y: 0, width: 500, height: 50 });
// ... configure template ...

// Apply to multiple pages
for (let i = 0; i < 5; i++) {
    let page: PdfPage = document.addPage();
    page.graphics.drawTemplate(headerTemplate, { x: 0, y: 0, width: 200, height: 50 });
}
```

## Common Use Cases

### Headers

Create consistent page headers:

```typescript
let header: PdfTemplate = new PdfTemplate({ x: 0, y: 0, width: 500, height: 50 });
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 12, PdfFontStyle.regular);
header.graphics.drawString('Document Title', font, { x: 10, y: 10, width: 480, height: 30}, new PdfBrush({r: 0, g: 0, b: 0}));
```

### Footers

Add page footers with page numbers:

```typescript
let footer: PdfTemplate = new PdfTemplate({ x: 0, y: 0, width: 500, height: 30 });
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
footer.graphics.drawString('Page 1', font, { x: 250, y: 5, width: 50, height: 20}, new PdfBrush({r: 0, g: 0, b: 0}));
```

### Watermarks

Create transparent watermarks:

```typescript
let watermark: PdfTemplate = new PdfTemplate({ x: 0, y: 0, width: 400, height: 100 });
let state = watermark.graphics.save();
watermark.graphics.setTransparency(0.3);
watermark.graphics.rotateTransform(-45);
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 48, PdfFontStyle.bold);
watermark.graphics.drawString('CONFIDENTIAL', font, { x: 0, y: 50, width: 400, height: 100}, new PdfBrush({r: 255, g: 0, b: 0}));
watermark.graphics.restore(state);
```

## Headers and Footers

Document-wide, odd/even, and section-level headers and footers (`PdfPageTemplateElement`, `document.template`) and automatic fields (page number/count, date/time, `PdfCompositeField`) are covered in [headers-and-footers.md](./headers-and-footers.md).

## Best Practices

1. **Template Sizing**: Create templates at actual size for best quality
2. **Resource Reuse**: Define templates once and reuse across pages
3. **Graphics State**: Use save/restore when applying transformations
4. **Memory**: Release templates when no longer needed
5. **Positioning**: Consider page margins when positioning templates
6. **Content**: Keep template content lightweight for better performance

## Common Gotchas

1. **Coordinate System**: Template graphics use their own coordinate space starting at (0,0)
2. **Scaling**: Scaling templates may affect quality; create at target size when possible
3. **Transparency**: Transparency effects in templates apply when drawn on pages
4. **Bounds**: Template bounds define clipping region for content
5. **Graphics State**: State changes in template affect only template content

## Related References

- [Text Rendering](./text-rendering.md) - Adding text to templates
- [Images](./images.md) - Working with images in templates
- [Shapes](./shapes.md) - Drawing shapes in templates
- [Watermarks](./watermarks.md) - Creating watermark templates
- [Headers and Footers](./headers-and-footers.md) - Page templates and automatic fields
