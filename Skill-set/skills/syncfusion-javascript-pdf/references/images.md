# Images in PDF Documents

## Table of Contents

- [Overview](#overview)
- [Supported Image Formats](#supported-image-formats)
- [Adding Images to PDF Documents](#adding-images-to-pdf-documents)
   - [Basic Image Drawing](#basic-image-drawing)
   - [Image with Dimensions](#image-with-dimensions)
- [Working with Existing Documents](#working-with-existing-documents)
- [Image Formats](#image-formats)
   - [Loading from Base64](#loading-from-base64)
   - [Loading from Uint8Array](#loading-from-uint8array)
- [Advanced Image Manipulation](#advanced-image-manipulation)
   - [Clipping and Graphics State](#clipping-and-graphics-state)
   - [Transparency and Rotation](#transparency-and-rotation)
- [Image Positioning](#image-positioning)
- [Graphics Transformations](#graphics-transformations)
- [Best Practices](#best-practices)

## Overview

The Syncfusion JavaScript PDF library provides comprehensive support for adding and manipulating images in PDF documents. The library supports JPEG and PNG image formats through the `PdfImage` and `PdfBitmap` classes, with capabilities for positioning, scaling, rotation, transparency, and clipping.

## Supported Image Formats

The library supports:
- **JPEG** - Lossy compression format, ideal for photographs
- **PNG** - Lossless compression with transparency support

## Adding Images to PDF Documents

### Basic Image Drawing

Add an image to a new PDF document:

```typescript
import { PdfDocument, PdfPage, PdfImage, PdfGraphics, PdfBitmap } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Get graphics from the page
let graphics: PdfGraphics = page.graphics;
// Load the image(base64 / Uint8Array)
let image: PdfImage = new PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Draw the image.
image.draw(graphics, { x: 10, y: 10});
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
```

### Image with Dimensions

Specify width and height when drawing:

```typescript
import { PdfDocument, PdfPage, PdfImage, PdfGraphics, PdfBitmap } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Get graphics from the page
let graphics: PdfGraphics = page.graphics;
// Load the image(base64 / Uint8Array)
let image: PdfImage = new PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Draw the image with specified dimensions
image.draw(graphics, { x: 10, y: 10, width: 200, height: 150});
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
```

## Working with Existing Documents

### Inserting Images

Add images to existing PDF documents:

```typescript
import { PdfDocument, PdfPage, PdfGraphics, PdfImage, PdfBitmap } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access first page
let page: PdfPage = document.getPage(0);
// Get graphics from the page
let graphics: PdfGraphics = page.graphics;
// Load the image (base64 / Uint8Array)
let image: PdfImage = new PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Draw the image.
image.draw(graphics, { x: 10, y: 10});
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
```

## Image Formats

### Loading from Base64

Load images from Base64 encoded strings:

```typescript
import { PdfBitmap } from '@syncfusion/ej2-pdf';

// Create image from Base64 string
let image: PdfBitmap = new PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
```

### Loading from Uint8Array

Load images from byte arrays:

```typescript
import { PdfBitmap } from '@syncfusion/ej2-pdf';

// Assume imageBytes is a Uint8Array containing image data
let image: PdfBitmap = new PdfBitmap(imageBytes);
```

## Advanced Image Manipulation

### Clipping and Graphics State

Apply clipping regions to images:

```typescript
import { PdfDocument, PdfPage, PdfGraphics, PdfImage, PdfBitmap, PdfGraphicsState, PdfFillMode  } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Get graphics from the page
let graphics: PdfGraphics = page.graphics;
// Load the image (base64 / Uint8Array)
let image: PdfImage = new PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Save the current graphics state (to restore later)
let state: PdfGraphicsState = graphics.save();
graphics.setClip({ x: 0, y: 0, width: 50, height: 12}, PdfFillMode.alternate );
// Draw the image.
image.draw(graphics, { x: 10, y: 10});
// Restore the graphics state to remove the clipping region
graphics.restore(state);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
```

### Transparency and Rotation

Apply transparency and rotation transformations:

```typescript
import { PdfDocument, PdfPage, PdfGraphics, PdfImage, PdfBitmap, PdfGraphicsState } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Get graphics from the page
let graphics: PdfGraphics = page.graphics;
// Load the image (base64 / Uint8Array)
let image: PdfImage = new PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Save the current graphics state (to restore later)
let state: PdfGraphicsState = graphics.save();
//Translate the coordinate system to the  required position
graphics.translateTransform({ x: 100, y: 100});
//Apply transparency
graphics.setTransparency(0.5);
//Rotate the coordinate system
graphics.rotateTransform(-45);
// Draw the image.
image.draw(graphics,{ x: 10, y: 20});
// Restore the graphics state to remove the clipping region
graphics.restore(state);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
```

## Image Positioning

### Basic Positioning

Position images using x and y coordinates:

```typescript
import { PdfGraphics, PdfImage } from '@syncfusion/ej2-pdf';

// Draw image at specific position
image.draw(graphics, { x: 50, y: 100 });
```

### Positioning with Dimensions

Specify position and size:

```typescript
import { PdfGraphics, PdfImage } from '@syncfusion/ej2-pdf';

// Draw image at specific position with custom size
image.draw(graphics, { x: 50, y: 100, width: 300, height: 200 });
```

## Graphics Transformations

### Translation

Move the coordinate origin before drawing:

```typescript
import { PdfGraphics } from '@syncfusion/ej2-pdf';

// Translate coordinate system
graphics.translateTransform({ x: 100, y: 50 });
// Draw image - will be offset by translation
image.draw(graphics, { x: 0, y: 0 });
```

### Rotation

Rotate images by specifying angle in degrees:

```typescript
import { PdfGraphics } from '@syncfusion/ej2-pdf';

// Rotate coordinate system by -45 degrees
graphics.rotateTransform(-45);
// Draw rotated image
image.draw(graphics, { x: 10, y: 10 });
```

### Scaling

Scale images using transformation:

```typescript
import { PdfGraphics } from '@syncfusion/ej2-pdf';

// Scale by 1.5x in both directions
graphics.scaleTransform(1.5, 1.5);
// Draw scaled image
image.draw(graphics, { x: 10, y: 10 });
```

## Transparency Effects

### Setting Opacity

Control image transparency:

```typescript
import { PdfGraphics, PdfGraphicsState } from '@syncfusion/ej2-pdf';

// Save graphics state
let state: PdfGraphicsState = graphics.save();
// Set transparency (0.0 = fully transparent, 1.0 = fully opaque)
graphics.setTransparency(0.5);
// Draw semi-transparent image
image.draw(graphics, { x: 10, y: 10 });
// Restore graphics state
graphics.restore(state);
```

## Image Quality Considerations

### Resolution

The library preserves the original image resolution. Consider these factors:
- Higher resolution images produce better quality but larger file sizes
- Images are not automatically downsampled
- For web display, 72-96 DPI is typically sufficient
- For print, 300 DPI or higher is recommended

### Compression

JPEG images maintain their compression settings:
- Already compressed JPEGs are embedded as-is
- PNG images are embedded with their original compression

## Best Practices

1. **Image Format Selection**:
   - Use JPEG for photographs and complex images
   - Use PNG for images with transparency or sharp edges

2. **Size Optimization**:
   - Resize images to appropriate dimensions before adding to PDF
   - Avoid embedding unnecessarily large images

3. **Graphics State Management**:
   - Always use `save()` before and `restore()` after transformations
   - Prevents unintended effects on subsequent drawing operations

4. **Coordinate System**:
   - Remember PDF uses bottom-left origin
   - Calculate Y-coordinates considering page height

5. **Transparency**:
   - Test transparency settings across different PDF viewers
   - Some viewers may not fully support alpha channel

6. **Memory Management**:
   - Reuse image objects when adding the same image multiple times
   - Reduces memory footprint and file size

## Common Gotchas

1. **Image Stretching**: If width and height don't match aspect ratio, images will be stretched or compressed

2. **Transformation Order**: Order of transformations matters - translate then rotate produces different results than rotate then translate

3. **Clipping Regions**: Clipping regions remain active until graphics state is restored

4. **Coordinate Origin**: PDF coordinate system has origin at bottom-left, not top-left

5. **State Restoration**: Forgetting to restore graphics state can affect subsequent operations

6. **Image References**: Same image data can be referenced multiple times without increasing file size significantly

7. **Transparency Stacking**: Multiple transparent images may produce unexpected visual results when overlapping

## Image Properties

### Getting Image Dimensions

```typescript
import { PdfBitmap } from '@syncfusion/ej2-pdf';

let image: PdfBitmap = new PdfBitmap(imageData);
// Properties are available after creation
let width: number = image.width;
let height: number = image.height;
```

## Related References

- [Text Rendering](./text-rendering.md) - Drawing text in PDF documents
- [Shapes](./shapes.md) - Drawing shapes and graphics
- [Templates](./templates.md) - Using images in reusable templates
- [Watermarks](./watermarks.md) - Adding image watermarks
- [Annotations](./annotations.md) - Adding image-based annotations
- [Image Extraction](./image-extraction.md) - Extracting images from PDFs
