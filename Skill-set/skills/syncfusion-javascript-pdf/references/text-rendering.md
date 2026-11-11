# Text Rendering in PDF Documents

## Table of Contents

- [Overview](#overview)
- [Drawing Text in PDF Documents](#drawing-text-in-pdf-documents)
	- [Basic Text Drawing](#basic-text-drawing)
	- [Drawing Text in Existing Documents](#drawing-text-in-existing-documents)
- [Font Types](#font-types)
	- [Standard Fonts](#standard-fonts)
	- [TrueType Fonts](#truetype-fonts)
	- [CJK Fonts](#cjk-fonts)
- [Text Formatting and Alignment](#text-formatting-and-alignment)
	- [Text Alignment Options](#text-alignment-options)
	- [LineLimit and NoClip Properties](#linelimit-and-noclip-properties)
- [Graphics State Management](#graphics-state-management)
- [Best Practices](#best-practices)

## Overview

Text rendering in Syncfusion's JavaScript PDF library provides comprehensive support for adding and formatting text in PDF documents. The library enables precise control over text appearance through various font types including Standard, TrueType, and CJK (Chinese, Japanese, Korean) fonts, along with advanced formatting options and graphics state management.

## Drawing Text in PDF Documents

### Basic Text Drawing

Draw text on a new PDF document using the `drawString` method:

```typescript
import { PdfDocument, PdfPage, PdfStandardFont, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Get graphics from the page
let graphics: PdfGraphics = page.graphics;
// Set font
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
// Draw text
graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
```

### Drawing Text in Existing Documents

Add text to an existing PDF document:

```typescript
import { PdfDocument, PdfPage, PdfStandardFont, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access first page
let page: PdfPage = document.getPage(0);
// Set font
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
// Draw text
page.graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
```

## Font Types

### Standard Fonts

Use built-in PDF fonts for consistent rendering:

```typescript
import { PdfDocument, PdfPage, PdfStandardFont, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Set font
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
// Draw text
page.graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
```

**Available Standard Font Families:**
- Helvetica
- TimesRoman
- Courier
- Symbol
- ZapfDingbats

### TrueType Fonts

Use custom TrueType fonts for enhanced text rendering:

```typescript
import { PdfDocument, PdfPage, PdfTrueTypeFont, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Embed a TTF font into the PDF
let font: PdfTrueTypeFont = document.embedFont(data, 10);
// Draw text
page.graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
```

### CJK Fonts

Support for Chinese, Japanese, and Korean characters:

```typescript
import { PdfDocument, PdfPage, PdfCjkStandardFont, PdfBrush, PdfFontStyle } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Set font
let font: PdfCjkStandardFont = document.embedFont(PdfCjkFontFamily.heiseiMinchoW3, 10, PdfFontStyle.regular, true);
// Draw text
page.graphics.drawString('こんにちは世界', font, { x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
```

## Text Formatting and Alignment

### Text Alignment Options

Control text alignment using `PdfStringFormat`:

```typescript
import { PdfDocument, PdfPage, PdfStandardFont, PdfTextAlignment, PdfVerticalAlignment, PdfStringFormat, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Create a string format object to define text layout
let format = new PdfStringFormat(PdfTextAlignment.right, PdfVerticalAlignment.bottom);
format.wordSpacing = 2;                    // Set word spacing
format.characterSpacing = 1;               // Set character spacing
// Set font
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
// Draw text
page.graphics.drawString('Syncfusion JavaScript PDF library', font, { x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}), format);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
```

**Text Alignment Options:**
- Left
- Center
- Right
- Justify

**Vertical Alignment Options:**
- Top
- Middle
- Bottom

### LineLimit and NoClip Properties

Control text clipping and line limiting:

```typescript
import { PdfDocument, PdfPage, PdfStandardFont, PdfStringFormat, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Set font
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
// Create a new PdfStringFormat and set its properties
let format: PdfStringFormat = new PdfStringFormat();
// Set no clip
format.noClip = true;
// Set line limit
format.lineLimit = false;
// Draw text
page.graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}), format);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
```

## Graphics State Management

### Saving and Restoring State

Preserve graphics state when applying transformations:

```typescript
import { PdfDocument, PdfPage, PdfGraphics, PdfGraphicsState, PdfStandardFont, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Get graphics from the page
let graphics: PdfGraphics = page.graphics;
// Save the current graphics state and apply transformations
let state: PdfGraphicsState = graphics.save();
graphics.translateTransform({ x: 100, y: 50});
graphics.rotateTransform(45);
// Set font
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
// Draw text
graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
// Restore the graphics state
graphics.restore(state);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
```

## Right-To-Left Text

### Drawing RTL Text

Support for Hebrew, Arabic, and other RTL scripts:

```typescript
import { PdfDocument, PdfPage, PdfTrueTypeFont, PdfStringFormat, PdfTextAlignment, PdfTextDirection, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Set font
let font: PdfTrueTypeFont = document.embedFont(data, 13);
// Create a new PDF string format
let format: PdfStringFormat =  new PdfStringFormat();
// Sets the text alignment of form field as right
format.alignment = PdfTextAlignment.right; 
// Sets the text direction of form field as rightToLeft
format.textDirection = PdfTextDirection.rightToLeft;
// Draw RTL text
page.graphics.drawString(`שלום עולם!!!`, font, { x: 0, y: 200, width: 100, height: 100 }, new PdfBrush({ r: 0, g: 0, b: 0 }), format);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
```

## Font Embedding and Management

### Embedded Fonts

Optimize font usage by embedding fonts once:

```typescript
import { PdfDocument, PdfPage, PdfFont, PdfStandardFont, PdfCjkStandardFont, PdfFontFamily, PdfFontStyle, PdfCjkFontFamily, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Embed a standard font into the PDF document.
const embedded1: PdfStandardFont = document.embedFont(PdfFontFamily.timesRoman, 12,  PdfFontStyle.regular);
// Gets a font variant from the base font with the given size and style
const embedded2: PdfFont = embedded1.getFont(14, PdfFontStyle.bold);
const embedded3: PdfFont = embedded1.getFont(14, PdfFontStyle.italic);
// Embed a CJK font into the PDF document.
const embedded4: PdfCjkStandardFont = document.embedFont(PdfCjkFontFamily.hanyangSystemsGothicMedium, 12,  PdfFontStyle.regular , true);
// Draw string using embed font.
page.graphics.drawString('timesRoman with regular', embedded1, {x: 10, y: 10, width: 300, height: 24}, new PdfBrush({r: 0, g: 0, b: 255}));
page.graphics.drawString('timesRoman with bold', embedded2, {x: 10, y: 50, width: 300, height: 24}, new PdfBrush({r: 0, g: 0, b: 255}));
page.graphics.drawString('timesRoman with italic', embedded3, {x: 200, y: 50, width: 300, height: 24}, new PdfBrush({r: 0, g: 0, b: 255}));
page.graphics.drawString('Cjkfont with regular', embedded4, {x: 200, y: 10, width: 300, height: 24}, new PdfBrush({r: 0, g: 0, b: 255}));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
```

## Best Practices

1. **Font Embedding**: Always embed fonts to ensure consistent rendering across platforms
2. **Graphics State**: Use `save()` and `restore()` when applying transformations to avoid affecting subsequent operations
3. **Font Reuse**: Embed fonts once and reuse them throughout the document to reduce file size
4. **Character Support**: Use appropriate font types (Standard, TrueType, CJK) based on your content requirements
5. **Text Clipping**: Set `noClip` and `lineLimit` properties appropriately when working with bounded text areas
6. **RTL Text**: Use proper text direction and alignment settings for right-to-left scripts

## Common Gotchas

1. **Emoji Support**: Due to PDF specification limitations, emojis with skin tone modifiers are not supported; only base versions can be displayed
2. **Font Subsetting**: TrueType fonts are automatically subset to reduce file size, including only the characters used in the document
3. **Coordinate System**: PDF uses bottom-left origin; consider page height when positioning text from top
4. **String Format**: Always pass the format parameter when using special alignment or spacing settings
5. **Font Metrics**: Use `font.measureString()` to calculate text dimensions before drawing for accurate positioning

## Related References

- [Images](./images.md) - Adding and manipulating images in PDF
- [Shapes](./shapes.md) - Drawing shapes and graphics
- [Form Fields](./form-fields.md) - Creating interactive form fields with text
- [Annotations](./annotations.md) - Adding text annotations
- [Templates](./templates.md) - Creating reusable content with text
