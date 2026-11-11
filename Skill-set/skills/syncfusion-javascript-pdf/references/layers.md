# Layers in PDF Documents

## Table of Contents

- [Overview](#overview)
- [Creating Layers](#creating-layers)
	- [Basic Layer](#basic-layer)
	- [Multiple Layers](#multiple-layers)
- [Layer Visibility](#layer-visibility)
	- [Default Visibility](#default-visibility)
	- [Toggle Visibility](#toggle-visibility)
- [Nested Layers](#nested-layers)
	- [Parent-Child Relationship](#parent-child-relationship)
	- [Multi-Level Hierarchy](#multi-level-hierarchy)
- [Layer Content](#layer-content)
	- [Drawing on Layers](#drawing-on-layers)
	- [Multiple Pages](#multiple-pages)
- [Layer Management](#layer-management)
	- [Accessing Layers](#accessing-layers)
	- [Removing Layers](#removing-layers)
- [Print and Export Settings](#print-and-export-settings)
	- [Print Behavior](#print-behavior)
	- [Export Settings](#export-settings)
- [Use Cases](#use-cases)
	- [Multilingual Documents](#multilingual-documents)
	- [Draft vs Final](#draft-vs-final)
- [Best Practices](#best-practices)
- [Common Gotchas](#common-gotchas)
- [Related References](#related-references)

## Overview

PDF layers (Optional Content Groups) control visibility of content elements, enabling interactive documents with toggleable elements. The Syncfusion JavaScript PDF library supports creating, managing, and nesting layers for dynamic content display.

## Creating Layers

### Basic Layer

Create simple layer:

```typescript
import { PdfDocument, PdfPage, PdfLayerCollection, PdfLayer, PdfGraphics, PdfStandardFont, PdfFontFamily, PdfBrush } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();

// Create layer
let layers: PdfLayerCollection = document.layers;
let layer: PdfLayer = layers.add('Layer1');
let graphics: PdfGraphics = layer.createGraphics(page);

// Draw on layer
let font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 14);
graphics.drawString('This is on Layer1', font, {x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));

document.save('output.pdf');
document.destroy();
```

```javascript
const { PdfDocument, PdfStandardFont, PdfFontFamily, PdfBrush } = require('@syncfusion/ej2-pdf');

const document = new PdfDocument();
const page = document.addPage();

var layers = document.layers;
var layer = layers.add('Layer1');
var graphics = layer.createGraphics(page);

let font = new PdfStandardFont(PdfFontFamily.helvetica, 14);
graphics.drawString('This is on Layer1', font, {x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));

document.save('output.pdf');
document.destroy();
```

### Multiple Layers

Create multiple independent layers:

```typescript
import { PdfDocument, PdfPage, PdfLayerCollection, PdfLayer, PdfGraphics, PdfStandardFont, PdfFontFamily, PdfBrush, PdfPen } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();

// Layer 1
let layers: PdfLayerCollection = document.layers;
let layer: PdfLayer = layers.add('Text Layer');
let graphics: PdfGraphics = layer.createGraphics(page);

let font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 14);
graphics.drawString('Text coontent', font, {x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));

// Layer 2
let layer2: PdfLayer = layers.add('Text Layer');
let graphics2: PdfGraphics = layer2.createGraphics(page);
// Create a new pen.
let pen: PdfPen = new PdfPen({r: 0, g: 0, b: 0}, 1);
graphics2.drawRectangle({ x: 100, y: 100, width: 100, height: 50 }, pen);

document.save('output.pdf');
document.destroy();
```

## Layer Visibility

### Default Visibility

Set initial layer state:

```typescript
import { PdfDocument, PdfPage, PdfLayerCollection, PdfLayer, PdfGraphics } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();

// Create visible layer (default)
let layers: PdfLayerCollection = document.layers;
let visibleLayer: PdfLayer = layers.add('Text Layer');
visibleLayer.visible = true ;

// Create hidden layer
let hiddenLayer: PdfLayer = layers.add('Hidden');
hiddenLayer.visible = false;

document.save('output.pdf');
document.destroy();
```

### Toggle Visibility

Control layer display:

```typescript
import { PdfDocument, PdfLayerCollection, PdfLayer } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();

let layers: PdfLayerCollection = document.layers;
let layer: PdfLayer = layers.add('Text Layer');

// Show layer
layer.visible = true;

// Hide layer
layer.visible = false;

document.save('output.pdf');
document.destroy();
```

## Nested Layers

### Parent-Child Relationship

Create layer hierarchy:

```typescript
import { PdfDocument, PdfPage, PdfLayerCollection, PdfLayer, PdfGraphics, PdfStandardFont, PdfFontFamily, PdfBrush } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();

// Parent layer
let layers: PdfLayerCollection = document.layers;
let layer: PdfLayer = layers.add('Text Layer');

let parentLayer: PdfLayer = layers.add('Parent');
let parentGraphics: PdfGraphics = parentLayer.createGraphics(page);
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 14, PdfFontStyle.regular);
parentGraphics.drawString('Parent Layer', font, {x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));

// Child layer
let childLayer: PdfLayer = layer.layers.add('Child');
let childGraphics: PdfGraphics = childLayer.createGraphics(page);
parentGraphics.drawString('Child Layer', font, {x: 50, y: 80, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));

document.save('output.pdf');
document.destroy();
```

### Multi-Level Hierarchy

Deep layer nesting:

```typescript
import { PdfDocument, PdfPage, PdfLayerCollection, PdfLayer, PdfGraphics, PdfStandardFont, PdfFontFamily, PdfBrush } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let layers: PdfLayerCollection = document.layers;

// Level 1
let level1: PdfLayer = layers.add('Level 1');

// Level 2
let level2: PdfLayer = level1.layers.add('Level 2');

// Level 3
let level3: PdfLayer = level2.layers.add('Level 3');
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 14, PdfFontStyle.regular);

// Draw on each level
level1.createGraphics(page).drawString('Level 1', font, {x: 50, y: 50, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
level2.createGraphics(page).drawString('Level 2', font, {x: 70, y: 80, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
level3.createGraphics(page).drawString('Level 3', font, {x: 90, y: 110, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));

document.save('output.pdf');
document.destroy();
```

## Layer Content

### Drawing on Layers

Add various content types:

```typescript
import { PdfDocument, PdfPage, PdfLayerCollection, PdfLayer, PdfGraphics, PdfImage, PdfBitmap, PdfStandardFont, PdfFontFamily, PdfPen } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let layers: PdfLayerCollection = document.layers;

// Text layer
let textLayer: PdfLayer = layers.add('Text');
let textGraphics: PdfGraphics = textLayer.createGraphics(page);
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 14, PdfFontStyle.regular);
textGraphics.drawString('Text on layer', font, {x: 50, y: 50, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));

// Image layer
let imageLayer: PdfLayer = layers.add('Image');
let imageGraphics: PdfGraphics = imageLayer.createGraphics(page);
let image: PdfImage = new PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
imageGraphics.drawImage(image, { x: 50, y: 100, width: 100, height: 100 });

// Shapes layer
let shapeLayer: PdfLayer = layers.add('Shapes');
let shapeGraphics: PdfGraphics = shapeLayer.createGraphics(page);
// Create a new pen.
let pen: PdfPen = new PdfPen({r: 0, g: 0, b: 0}, 1);
shapeGraphics.drawRectangle({ x: 200, y: 50, width: 100, height: 80 }, pen);

document.save('output.pdf');
document.destroy();
```

### Multiple Pages

Apply layers across pages:

```typescript
import { PdfDocument, PdfPage, PdfLayerCollection, PdfLayer, PdfGraphics, PdfStandardFont, PdfBrush } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let layers: PdfLayerCollection = document.layers;
let layer: PdfLayer = layers.add('MultiPage');
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 14, PdfFontStyle.regular);

// Apply to page 1
let page1: PdfPage = document.addPage();
let graphics1: PdfGraphics = layer.createGraphics(page1);
graphics1.drawString('Layer on page 1', font, {x: 50, y: 50, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));

// Apply to page 2
let page2: PdfPage = document.addPage();
let graphics2: PdfGraphics = layer.createGraphics(page2);
graphics2.drawString('Layer on page 2', font, {x: 50, y: 50, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));

document.save('output.pdf');
document.destroy();
```

## Layer Management

### Accessing Layers

Retrieve existing layers:

```typescript
import { PdfDocument, PdfLayer } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument(existingPdfData);

// Get layer count
let count: number = document.layers.count;

// Get layer by index
let layer: PdfLayer = document.layers.at(0);

// Get layer name
let name: string = layer.name;

document.save('output.pdf');
document.destroy();
```

### Removing Layers

Delete layers from document:

```typescript
import { PdfDocument, PdfLayerCollection, PdfLayer } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let layers: PdfLayerCollection = document.layers;
let layer: PdfLayer = layers.add('TempLayer');

// Remove layer
layers.remove(layer);

document.save('output.pdf');
document.destroy();
```

## Print and Export Settings

### Print Behavior

Control layer printing:

```typescript
import { PdfDocument, PdfLayerCollection, PdfLayer, PdfPrintState } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let layers: PdfLayerCollection = document.layers;
let layer: PdfLayer = layers.add('PrintLayer');

// Set print visibility
layer.printState = PdfPrintState.printWhenVisible; // Visible when printing

document.save('output.pdf');
document.destroy();
```

### Export Settings

Configure layer export:

```typescript
import { PdfDocument, PdfLayerCollection, PdfLayer, PdfPrintState } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let layers: PdfLayerCollection = document.layers;
let layer: PdfLayer = layers.add('ExportLayer');

// Control export behavior
layer.visible = true ;
layer.printState = PdfPrintState.alwaysPrint;

document.save('output.pdf');
document.destroy();
```

## Use Cases

### Multilingual Documents

Switch language layers:

```typescript
import { PdfDocument, PdfPage, PdfLayer, PdfGraphics, PdfStandardFont, PdfFontFamily } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let layers: PdfLayerCollection = document.layers;

// English layer
let englishLayer: PdfLayer = layers.add('English');
let englishGraphics: PdfGraphics = englishLayer.createGraphics(page);
let font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 14);
englishGraphics.drawString('Hello World', font, {x: 50, y: 50, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));

// Spanish layer
let spanishLayer: PdfLayer = layers.add('Spanish');
let spanishGraphics: PdfGraphics = spanishLayer.createGraphics(page);
spanishGraphics.drawString('Hola Mundo', font, {x: 50, y: 100, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));

// Default: show English, hide Spanish
englishLayer.visible = true;
spanishLayer.visible = false;

document.save('output.pdf');
document.destroy();
```

### Draft vs Final

Toggle draft markings:

```typescript
import { PdfDocument, PdfPage, PdfLayer } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let layers: PdfLayerCollection = document.layers;
let font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 14);

// Final content (always visible)
page.graphics.drawString('Final Content', font, {x: 50, y: 100, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));

// Draft watermark layer (toggleable)
let draftLayer: PdfLayer = layers.add('Draft');
let draftGraphics = draftLayer.createGraphics(page);
draftGraphics.drawString('DRAFT - NOT FOR DISTRIBUTION', font, {x: 50, y: 50, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));

// Set draft visible/hidden as needed
draftLayer.visible = false; // Hide for final version

document.save('output.pdf');
document.destroy();
```

## Best Practices

1. **Naming**: Use descriptive layer names
2. **Organization**: Group related content in layers
3. **Hierarchy**: Use nesting for logical structure
4. **Visibility**: Set appropriate defaults
5. **Print Settings**: Configure print behavior explicitly
6. **Performance**: Minimize layer count for large documents

## Common Gotchas

1. **Layer Ordering**: Creation order affects display order
2. **Nested Visibility**: Child layers inherit parent visibility
3. **Graphics Context**: Each layer needs separate graphics
4. **Page References**: Layer graphics tied to specific pages
5. **Removal**: Removing layers doesn't delete content
6. **Viewer Support**: Not all PDF viewers support layers

## Related References

- [Text Rendering](./text-rendering.md) - Drawing text on layers
- [Images](./images.md) - Adding images to layers
- [Shapes](./shapes.md) - Drawing shapes on layers
- [Watermarks](./watermarks.md) - Watermark layers
