# Shapes in PDF Documents

## Table of Contents

- [Overview](#overview)
- [Supported Shape Types](#supported-shape-types)
- [Drawing Basic Shapes](#drawing-basic-shapes)
  - [Line](#line)
  - [Rectangle](#rectangle)
  - [Rounded Rectangle](#rounded-rectangle)
- [Drawing Curves and Circular Shapes](#drawing-curves-and-circular-shapes)
  - [Ellipse](#ellipse)
  - [Pie](#pie)
  - [Arc](#arc)
- [Complex Shapes](#complex-shapes)
  - [Polygon](#polygon)
  - [Bezier Curve](#bezier-curve)
- [Custom Paths](#custom-paths)
- [Best Practices](#best-practices)
- [Related References](#related-references)

## Overview

The Syncfusion JavaScript PDF library provides comprehensive support for drawing various shapes including lines, rectangles, ellipses, polygons, pies, arcs, Bezier curves, and custom paths. All shapes are rendered using `PdfPen` and `PdfBrush` classes through the `PdfGraphics` interface.

## Supported Shape Types

- Line
- Rectangle
- Rounded Rectangle
- Ellipse
- Polygon
- Pie
- Arc
- Bezier Curve
- Path

## Drawing Basic Shapes

### Line

Draw straight lines between two points:

```typescript
import { PdfDocument, PdfPage, PdfGraphics, PdfPen } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Get graphics from the page
let graphics: PdfGraphics = page.graphics;
// Create a new pen
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a line on the page graphics
graphics.drawLine(pen, { x: 10, y: 200}, { x: 100, y: 100});
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
```

### Rectangle

Draw rectangles with specified bounds:

```typescript
import { PdfDocument, PdfPage, PdfGraphics, PdfPen } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Gets the graphics of the PDF page
let graphics: PdfGraphics = page.graphics;
// Create a new pen.
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a rectangle on the page graphics.
graphics.drawRectangle({ x: 10, y: 20, width: 100, height: 200}, pen);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
```

### Rounded Rectangle

Draw rectangles with rounded corners:

```typescript
import { PdfDocument, PdfPage, PdfGraphics, PdfPen, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Get the graphics of the PDF page
let graphics: PdfGraphics = page.graphics;
// Create a new pen
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Create a new brush
let brush: PdfBrush = new PdfBrush({ r: 0, g: 0, b: 255 });
// Draw a rounded rectangle on the page graphics
graphics.drawRoundedRectangle(
  { x: 10, y: 20, width: 100, height: 200 },
  5,  // Corner radius
  pen,
  brush
);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
```

## Drawing Curves and Circular Shapes

### Ellipse

Draw ellipses and circles:

```typescript
import { PdfDocument, PdfPage, PdfGraphics, PdfPen } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Gets the graphics of the PDF page
let graphics: PdfGraphics = page.graphics;
// Create a new pen
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw an ellipse on the page graphics
graphics.drawEllipse({ x: 10, y: 20, width: 100, height: 200}, pen);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
```

### Pie

Draw pie slices for charts:

```typescript
import { PdfDocument, PdfPage, PdfGraphics, PdfPen } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Gets the graphics of the PDF page
let graphics: PdfGraphics = page.graphics;
// Create a new pen
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a pie slice on the page graphics
graphics.drawPie({ x: 10, y: 50, width: 200, height: 200}, 180, 60, pen);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
```

### Arc

Draw arc segments:

```typescript
import { PdfDocument, PdfPage, PdfGraphics, PdfPen } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Gets the graphics of the PDF page
let graphics: PdfGraphics = page.graphics;
// Create a new pen
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw an arc slice on the page graphics
graphics.drawArc({ x: 10, y: 20, width: 100, height: 200}, 20, 30, pen);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
```

## Complex Shapes

### Polygon

Draw multi-sided polygons:

```typescript
import { PdfDocument, PdfPage, PdfGraphics, PdfPen, Point } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Get graphics from the page
let graphics: PdfGraphics = page.graphics;
// Create a new pen
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Define the polygon points
let points: Point[] = [{x: 10, y: 100}, { x: 10, y: 200}, { x: 100, y: 100}, { x: 100, y: 200}, { x: 55, y: 150}];
// Draw the polygon on the page graphics
graphics.drawPolygon(points, pen);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
```

### Bezier Curve

Draw smooth curved lines:

```typescript
import { PdfDocument, PdfPage, PdfGraphics, PdfPen } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Gets the graphics of the PDF page
let graphics: PdfGraphics = page.graphics;
// Create a new pen
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a Bezier curve on the page graphics
graphics.drawBezier({ x: 50, y: 100}, { x: 200, y: 50}, { x: 100, y: 150}, { x: 150, y: 100}, pen);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
```

## Custom Paths

### Creating Paths

Create complex shapes using paths:

```typescript
import { PdfDocument, PdfPage, PdfPen, PdfPath, PdfGraphics } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Create a new path
let path: PdfPath = new PdfPath();
// Gets the graphics of the PDF page
let graphics: PdfGraphics = page.graphics;
// Create a new pen
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Add lines to the path
path.addLine({ x: 10, y: 50}, { x: 200, y: 250});
path.addLine({ x: 10, y: 150}, { x: 220, y: 250});
path.addLine({ x: 10, y: 200}, { x: 240, y: 250});
// Draw the path on the page graphics
graphics.drawPath(path, pen);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
```

## Styling Shapes

### Using Pens

Control line appearance with `PdfPen`:

```typescript
import { PdfPen } from '@syncfusion/ej2-pdf';

// Create pen with color and width
let pen: PdfPen = new PdfPen({ r: 255, g: 0, b: 0 }, 2);

// Pen properties
pen.dashStyle = PdfDashStyle.dash;  // Dashed line
pen.lineCap = PdfLineCap.round;      // Round line ends
pen.lineJoin = PdfLineJoin.round;    // Round corners
```

### Using Brushes

Fill shapes with solid colors:

```typescript
import { PdfBrush } from '@syncfusion/ej2-pdf';

// Create brush with RGB color
let brush: PdfBrush = new PdfBrush({ r: 0, g: 0, b: 255 });

// Draw filled rectangle
graphics.drawRectangle({ x: 10, y: 20, width: 100, height: 200}, pen, brush);
```

## Transformations

### Translation

Move shapes by translating the coordinate system:

```typescript
import { PdfGraphics, PdfGraphicsState } from '@syncfusion/ej2-pdf';

let state: PdfGraphicsState = graphics.save();
graphics.translateTransform({ x: 100, y: 50});
// Draw shape - will be offset by translation
graphics.drawRectangle({ x: 0, y: 0, width: 50, height: 50}, pen);
graphics.restore(state);
```

### Rotation

Rotate shapes around a point:

```typescript
import { PdfGraphics, PdfGraphicsState } from '@syncfusion/ej2-pdf';

let state: PdfGraphicsState = graphics.save();
graphics.translateTransform({ x: 100, y: 100});
graphics.rotateTransform(45);  // Rotate 45 degrees
graphics.drawRectangle({ x: -25, y: -25, width: 50, height: 50}, pen);
graphics.restore(state);
```

### Scaling

Scale shapes proportionally:

```typescript
import { PdfGraphics, PdfGraphicsState } from '@syncfusion/ej2-pdf';

let state: PdfGraphicsState = graphics.save();
graphics.scaleTransform(2.0, 2.0);  // Scale 2x
graphics.drawEllipse({ x: 10, y: 10, width: 50, height: 50}, pen);
graphics.restore(state);
```

## Best Practices

1. **Graphics State**: Always save and restore graphics state when applying transformations
2. **Pen Width**: Consider pen width when calculating shape positions and bounds
3. **Color Space**: Use RGB color values in range 0-255
4. **Performance**: Reuse pen and brush objects when drawing multiple shapes with same style
5. **Coordinates**: Remember PDF uses bottom-left origin for coordinate system
6. **Path Complexity**: Complex paths with many segments may impact rendering performance

## Common Gotchas

1. **Coordinate System**: PDF coordinates have origin at bottom-left, not top-left
2. **Pen Centering**: Pen stroke is centered on the shape outline, affecting final bounds
3. **Fill vs Stroke**: Shapes can be filled (brush), stroked (pen), or both
4. **Transformation Order**: Order matters - translate then rotate is different from rotate then translate
5. **State Management**: Forgetting to restore graphics state affects subsequent operations
6. **Closed Paths**: Polygon automatically closes the path between last and first points

## Related References

- [Text Rendering](./text-rendering.md) - Adding text to PDFs
- [Images](./images.md) - Working with images
- [Annotations](./annotations.md) - Interactive shape annotations
- [Templates](./templates.md) - Reusable shape content
- [Barcodes](./barcodes.md) - Drawing QR Code, Data Matrix, and PDF417 barcodes
