# Watermarks in PDF Documents

## Overview

Watermarks add visible overlays to PDF documents for branding, copyright protection, or status indication. The Syncfusion JavaScript PDF library supports text and image watermarks with transparency, positioning, and rotation capabilities.

## Text Watermarks

### Basic Text Watermark

Add simple text overlay:

```typescript
import { PdfDocument, PdfPage, PdfGraphics, PdfFont, PdfStandardFont, PdfFontFamily, PdfFontStyle, PdfStringFormat, PdfTextAlignment, PdfVerticalAlignment, PdfBrush } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let graphics: PdfGraphics = page.graphics;

// Draw watermark text
let font: PdfFont = new PdfStandardFont(PdfFontFamily.helvetica, 36, PdfFontStyle.bold);
let format: PdfStringFormat = new PdfStringFormat(PdfTextAlignment.center, PdfVerticalAlignment.middle);

graphics.save();
graphics.translateTransform({ x: page.size.width / 2, y: page.size.height / 2});
graphics.rotateTransform(-45);
graphics.drawString('CONFIDENTIAL', font, { x: 0, y: 0, width: 100, height: 100 }, new PdfBrush({r: 0, g: 0, b: 255}), format);
graphics.restore();

document.save('output.pdf');
document.destroy();
```

```javascript
const { PdfDocument, PdfStandardFont, PdfFontFamily, PdfFontStyle, PdfStringFormat, PdfTextAlignment, PdfVerticalAlignment, PdfBrush } = require('@syncfusion/ej2-pdf');

var document = new PdfDocument();
var page = document.addPage();
var graphics = page.graphics;

// Draw watermark text
var font = new PdfStandardFont(PdfFontFamily.helvetica, 36, PdfFontStyle.bold);
var format = new PdfStringFormat(PdfTextAlignment.center, PdfVerticalAlignment.middle);

graphics.save();
graphics.translateTransform({ x: page.size.width / 2, y: page.size.height / 2});
graphics.rotateTransform(-45);
graphics.drawString('CONFIDENTIAL', font, { x: 0, y: 0, width: 100, height: 100 }, new PdfBrush({r: 0, g: 0, b: 255}), format);
graphics.restore();

document.save('output.pdf');
document.destroy();
```

### Diagonal Watermark

Create angled watermark:

```typescript
import { PdfDocument, PdfPage, PdfGraphics, PdfFont, PdfStandardFont, PdfFontFamily, PdfBrush } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let graphics: PdfGraphics = page.graphics;

graphics.save();
graphics.translateTransform({ x:250, y:400});
graphics.rotateTransform(-40);
let font: PdfFont = new PdfStandardFont(PdfFontFamily.helvetica, 50);
graphics.drawString('DRAFT', font, { x: 0, y: 0, width: 500, height: 500 }, new PdfBrush({r: 0, g: 0, b: 255}));
graphics.restore();

document.save('output.pdf');
document.destroy();
```

## Image Watermarks

### Adding Image Watermark

Overlay image with transparency:

```typescript
import { PdfDocument, PdfPage, PdfGraphics, PdfImage, PdfBitmap, PdfBlendMode } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let graphics: PdfGraphics = page.graphics;

// Load and draw image with transparency
let image: PdfImage = new PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z'); // Base64 image data
graphics.save();
graphics.setTransparency(0.3); // 30% opacity
let x = (page.size.width - 200) / 2;
let y = (page.size.height - 200) / 2;
graphics.drawImage(image, { x: x, y: y, width: 200, height: 200 });
graphics.restore();

document.save('output.pdf');
document.destroy();
```

```javascript
const { PdfDocument, PdfBitmap } = require('@syncfusion/ej2-pdf');

let document = new PdfDocument();
let page = document.addPage();
let graphics = page.graphics;

// Load and draw image with transparency
let image = new PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z'); // Base64 image data
graphics.save();
graphics.setTransparency(0.3); // 30% opacity
let x = (page.size.width - 200) / 2;
let y = (page.size.height - 200) / 2;
graphics.drawImage(image, { x: x, y: y, width: 200, height: 200 });
graphics.restore();

document.save('output.pdf');
document.destroy();
```

### Rotated Image Watermark

Diagonal image overlay:

```typescript
import { PdfDocument, PdfPage, PdfGraphics, PdfImage, PdfBitmap } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let graphics: PdfGraphics = page.graphics;

graphics.save();
graphics.translateTransform({x: page.size.width / 2, y: page.size.height / 2});
graphics.rotateTransform(-45);
graphics.setTransparency(0.25);
let image: PdfImage = new PdfBitmap(imageData);
graphics.drawImage(image, { x: -100, y: -100, width: 200, height: 200 });
graphics.restore();

document.save('output.pdf');
document.destroy();
```

## Multiple Page Watermarks

### Applying to All Pages

Add watermark to every page:

```typescript
import { PdfDocument, PdfPage, PdfGraphics, PdfStandardFont, PdfFontFamily, PdfBrush } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();

// Add multiple pages
for (let i = 0; i < 5; i++) {
    document.addPage();
}

// Apply watermark to all pages
for (let i = 0; i < document.pageCount; i++) {
    let page: PdfPage = document.getPage(i);
    let graphics: PdfGraphics = page.graphics;
    
    graphics.save();
    graphics.translateTransform({ x:page.size.width / 2, y:page.size.height / 2});
    graphics.rotateTransform(-45);
    
    let font = new PdfStandardFont(PdfFontFamily.helvetica, 48);
    graphics.drawString('WATERMARK', font, { x: 0, y: 0, width: 500, height: 500 }, new PdfBrush({r: 0, g: 0, b: 255}));
    graphics.restore();
}

document.save('output.pdf');
document.destroy();
```

### Existing Document Watermark

Add to existing PDF:

```typescript
import { PdfDocument, PdfPage, PdfGraphics, PdfStandardFont, PdfFontFamily, PdfBrush } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument(existingPdfData);

// Apply watermark to each page
for (let i = 0; i < document.pageCount; i++) {
    let page: PdfPage = document.getPage(i);
    let graphics: PdfGraphics = page.graphics;
    
    graphics.save();
    graphics.translateTransform({x:page.size.width / 2, y:page.size.height / 2});
    graphics.rotateTransform(-45);
    
    let font = new PdfStandardFont(PdfFontFamily.helvetica, 48);
    graphics.drawString('SAMPLE', font, { x: 0, y: 0, width: 500, height: 500 }, new PdfBrush({r: 0, g: 0, b: 255}));
    graphics.restore();
}

document.save('output.pdf');
document.destroy();
```

## Transparency and Positioning

### Transparency Control

Adjust watermark opacity:

```typescript
import { PdfDocument, PdfPage, PdfGraphics } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let graphics: PdfGraphics = page.graphics;

// Set transparency (0.0 = invisible, 1.0 = opaque)
graphics.save();
graphics.setTransparency(0.5); // 50% opacity
// Draw watermark content
graphics.restore();

document.save('output.pdf');
document.destroy();
```

### Positioning Options

Control watermark placement:

```typescript
import { PdfDocument, PdfPage, PdfGraphics, PdfStandardFont, PdfFontFamily, PdfBrush } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let graphics: PdfGraphics = page.graphics;
let font = new PdfStandardFont(PdfFontFamily.helvetica, 24);

// Top-left corner
graphics.drawString('TOP LEFT', font, { x: 20, y: 20, width: 500, height: 500 }, new PdfBrush({r: 0, g: 0, b: 255}));

// Top-right corner
let size = font.measureString('TOP RIGHT');
graphics.drawString('TOP RIGHT', font, { x: page.size.width - size.width - 20, y: 20, width: 500, height: 500 }, new PdfBrush({r: 0, g: 0, b: 255}));

// Bottom-center
size = font.measureString('BOTTOM CENTER');
graphics.drawString('BOTTOM CENTER', font, { x: (page.size.width - size.width) / 2, y: page.size.height - 40, width: 500, height: 500 }, new PdfBrush({r: 0, g: 0, b: 255}));

document.save('output.pdf');
document.destroy();
```

## Advanced Techniques

### Blend Modes

Apply blend effects:

```typescript
import { PdfDocument, PdfPage, PdfGraphics, PdfBlendMode } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let graphics: PdfGraphics = page.graphics;

graphics.save();
graphics.setTransparency(0.7, 0.7, PdfBlendMode.multiply);
// Draw watermark
graphics.restore();

document.save('output.pdf');
document.destroy();
```

### Dynamic Watermarks

Date/time-based watermarks:

```typescript
import { PdfDocument, PdfPage, PdfGraphics, PdfStandardFont, PdfFontFamily, PdfBrush } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let graphics: PdfGraphics = page.graphics;

let currentDate: Date = new Date();
let dateString: string = `PRINTED: ${currentDate.toLocaleDateString()}`;

graphics.save();
graphics.setTransparency(0.4);
let font = new PdfStandardFont(PdfFontFamily.helvetica, 18);
graphics.drawString(dateString, font, { x: 50, y: page.size.height - 50, width: 500, height: 500 }, new PdfBrush({r: 0, g: 0, b: 255}));
graphics.restore();

document.save('output.pdf');
document.destroy();
```

## Best Practices

1. **Transparency**: Use 30-50% opacity for readability
2. **Positioning**: Center diagonal watermarks for best coverage
3. **Font Size**: Use 36-72pt for visibility without obstruction
4. **Color Choice**: Use gray tones or brand colors
5. **Save State**: Always use `save()` and `restore()` for transformations
6. **Performance**: Apply watermarks efficiently for large documents

## Common Gotchas

1. **Graphics State**: Forgetting `restore()` affects subsequent drawing
2. **Rotation Origin**: Transform before positioning text/images
3. **Transparency Range**: Values outside 0-1 cause errors
4. **Text Overlap**: Large watermarks can obscure content
5. **Blend Modes**: Not all PDF viewers support all modes
6. **Coordinates**: Rotation affects coordinate calculations

## Related References

- [Text Rendering](./text-rendering.md) - Text drawing and fonts
- [Images](./images.md) - Image handling and positioning
- [Templates](./templates.md) - Reusable watermark templates
