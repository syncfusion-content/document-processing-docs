# Lists in PDF Documents

## Table of Contents

- [Overview](#overview)
- [List Types](#list-types)
    - [Ordered Lists](#ordered-lists)
    - [Unordered Lists](#unordered-lists)
- [Customizing Lists](#customizing-lists)
    - [Custom Markers](#custom-markers)
    - [Image Markers](#image-markers)
    - [Custom Fonts](#custom-fonts)
- [Nested Lists](#nested-lists)
- [List Formatting](#list-formatting)
- [List Pagination](#list-pagination)
- [List Item Collection](#list-item-collection)
- [Best Practices](#best-practices)
- [Common Gotchas](#common-gotchas)
- [Related References](#related-references)

## Overview

The Syncfusion JavaScript PDF library provides comprehensive support for creating ordered and unordered lists in PDF documents. Lists can be customized with various markers, custom image markers, fonts, colors, and nested structures, offering flexible content organization and branded list presentation. Lists can use standard markers or custom image-based markers for enhanced visual presentation.

## List Types

### Ordered Lists

Ordered lists display items with sequential numbers or letters:

```typescript
import { PdfDocument, PdfPage, PdfListItemCollection, PdfOrderedList, PdfNumberStyle, PdfFontFamily, PdfFontStyle, PdfStringFormat, PdfPen, PdfBrush, PdfTextAlignment } from '@syncfusion/ej2-pdf';

// Load an existing document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Assign the array of string items
let products: string[] = ['Excel', 'Power', 'Point', 'Word', 'PDF'];
// Add the items to list item collection by passing the array of products
let items: PdfListItemCollection = new PdfListItemCollection(products);
// Initialize the instance of ordered list and pass the item collection and optional settings
let list: PdfOrderedList = new PdfOrderedList(items, {
    font: document.embedFont(PdfFontFamily.helvetica, 36, PdfFontStyle.regular),
    format: new PdfStringFormat(PdfTextAlignment.center),
    pen: new PdfPen({ r: 0, g: 255, b: 0 }, 1),
    brush: new PdfBrush({ r: 0, g: 255, b: 255 }),
    indent: 30,
    textIndent: 50,
    style: PdfNumberStyle.numeric,
    delimiter:  ')'
});
// Draw the ordered list on the page
list.draw(page, { x: 0, y: 20, width: 500, height: 700 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
```

**Number Styles:**
- `PdfNumberStyle.numeric` - 1, 2, 3...
- `PdfNumberStyle.lowerRoman` - i, ii, iii...
- `PdfNumberStyle.upperRoman` - I, II, III...
- `PdfNumberStyle.lowerLatin` - a, b, c...
- `PdfNumberStyle.upperLatin` - A, B, C...

### Unordered Lists

Unordered lists use bullets or symbols:

```typescript
import { PdfDocument, PdfPage, PdfUnorderedList, PdfUnorderedListStyle, PdfListItemCollection, PdfFontFamily, PdfFontStyle, PdfStringFormat, PdfPen, PdfBrush, PdfTextAlignment } from '@syncfusion/ej2-pdf';

// Load the existing document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Define the items in the unordered list
let products: string[] = ['Excel', 'Power', 'Point', 'Word', 'PDF'];
// Add the items to list item collection by passing the array of products
let items: PdfListItemCollection = new PdfListItemCollection(products);
// Initialize the instance of the unordered list and pass the list item collection and settings
let list: PdfUnorderedList = new PdfUnorderedList(items, {
    font: document.embedFont(PdfFontFamily.helvetica, 36, PdfFontStyle.regular),
    format: new PdfStringFormat(PdfTextAlignment.center),
    pen: new PdfPen({ r: 0, g: 255, b: 0 }, 1),
    brush: new PdfBrush({ r: 0, g: 255, b: 255 }),
    indent: 30,
    textIndent: 50,
    style: PdfUnorderedListStyle.disk,
    delimiter:  ')'
});
// Draw the unordered list on the page
list.draw(page, { x: 0, y: 20, width: 500, height: 700 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
```

**Marker Styles:**
- `PdfUnorderedListStyle.disk` - Filled circle (●)
- `PdfUnorderedListStyle.circle` - Empty circle (○)
- `PdfUnorderedListStyle.square` - Filled square (■)
- `PdfUnorderedListStyle.asterisk` - Asterisk (*)

## Customizing Lists

### Custom Markers

Change the marker style of an unordered list using predefined marker styles. Marker customization supports both built-in marker styles and image-based markers.

```typescript
import { PdfDocument, PdfPage, PdfUnorderedList, PdfUnorderedListStyle, PdfListItemCollection } from '@syncfusion/ej2-pdf';

// Load the existing document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Define the items in the unordered list
let products: string[] = ['PDF', 'XlsIO', 'DocIO', 'PPT'];
// Add the items to list item collection by passing the array of products
let items: PdfListItemCollection = new PdfListItemCollection(products);
// Initialize the instance of the unordered list and pass the list item collection and settings
let list: PdfUnorderedList = new PdfUnorderedList(items, {
    style: PdfUnorderedListStyle.disk
});
// Draw the unordered list on the page
list.draw(page, {x: 50, y: 50});
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
```

### Image Markers

Use custom images as unordered list markers instead of standard bullet styles. Image markers help create branded, visual, or visually distinctive list presentations.

Key APIs

- PdfImageMarker
- PdfBitmap
- PdfUnorderedList
- setMarker()

```typescript
import { PdfBitmap, PdfImageMarker, PdfUnorderedList } from '@syncfusion/ej2-pdf';

const imageMarker: PdfImageMarker = {
    image: new PdfBitmap(imageData)
};

unorderedList.setMarker(imageMarker);
```

Image markers are useful for branded reports, custom bullet styles, checklists, dashboards, and visually enhanced content.

### Custom Fonts

Apply custom fonts to list items:

```typescript
import { PdfDocument, PdfPage, PdfUnorderedList, PdfListItemCollection, PdfFontFamily, PdfFontStyle } from '@syncfusion/ej2-pdf';

// Load the existing document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Define the items in the unordered list
let products: string[] = ['PDF', 'XlsIO', 'DocIO', 'PPT'];
// Add the items to list item collection by passing the array of products
let items: PdfListItemCollection = new PdfListItemCollection(products);
// Initialize the instance of the unordered list and pass the list item collection and settings
let list: PdfUnorderedList = new PdfUnorderedList(items, {
    font: document.embedFont(PdfFontFamily.helvetica, 36, PdfFontStyle.regular)
});
// Draw the unordered list on the page
list.draw(page, {x: 50, y: 50});
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
```

## Nested Lists

### Creating Hierarchical Lists

Build multi-level list structures:

```typescript
import { PdfDocument, PdfPage, PdfOrderedList, PdfUnorderedList, PdfUnorderedListStyle, PdfListItemCollection } from '@syncfusion/ej2-pdf';

// Load the existing document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Initialize the instance of the unordered list and pass the list item collection
let list: PdfUnorderedList = new PdfUnorderedList(new PdfListItemCollection(['PDF', 'XlsIO', 'DocIO', 'PPT']));
// Set the marker style for the unordered list
list.style = PdfUnorderedListStyle.circle;
// Add a nested ordered list to the first list item
list.items.at(0).subList = new PdfOrderedList(new PdfListItemCollection(['JS', 'TS', 'Vue', 'Angular', 'ASP.Net Core']));
// Draw the unordered list on the page
list.draw(page, {x: 50, y: 150});
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
```

## List Formatting

### Indentation

Control list indentation:

```typescript
let list: PdfOrderedList = new PdfOrderedList(items, {
    indent: 30,        // Distance from left margin to marker
    textIndent: 50     // Distance from marker to text
});
```

### Text Alignment

Set text alignment within list items:

```typescript
import { PdfStringFormat, PdfTextAlignment } from '@syncfusion/ej2-pdf';

let format: PdfStringFormat = new PdfStringFormat(PdfTextAlignment.center);
let list: PdfOrderedList = new PdfOrderedList(items, {
    format: format
});
```

### Colors

Customize marker and text colors:

```typescript
import { PdfOrderedList, PdfPen, PdfBrush } from '@syncfusion/ej2-pdf';

let list: PdfOrderedList = new PdfOrderedList(items, {
    pen: new PdfPen({ r: 255, g: 0, b: 0 }, 1),      // Red marker
    brush: new PdfBrush({ r: 0, g: 0, b: 255 })      // Blue text
});
```

## List Pagination

### Automatic Page Breaks

Handle lists that span multiple pages:

```typescript
import { PdfDocument, PdfPage, PdfList, PdfLayoutFormat, PdfUnorderedList, PdfLayoutBreakType, PdfLayoutType, PdfListItemCollection, PdfLayoutResult } from '@syncfusion/ej2-pdf';

// Load the existing document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Create an instance for PDF layout format
let format: PdfLayoutFormat = new PdfLayoutFormat();
// Set the layout format
format.layout = PdfLayoutType.paginate;
format.break = PdfLayoutBreakType.fitElement;
// Initialize the instance of the unordered list and pass the list item collection and settings
let list1: PdfList = new PdfUnorderedList(new PdfListItemCollection(['PDF', 'XlsIO', 'DocIO', 'PPT', 'PDF', 'XlsIO', 'DocIO', 'PPT']));
let list2: PdfList = new PdfUnorderedList(new PdfListItemCollection(['A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic.']), {suffix: '_'});
// Draw the unordered list on the page
let result1: PdfLayoutResult = list1.draw(page, {x: 50, y: page.size.height - 100}, format);
let result2: PdfLayoutResult = list2.draw(result1.Page, {x: 50, y: result1.bounds.height + 50}, format);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
```

## List Item Collection

### Creating Items

Build item collections from arrays:

```typescript
import { PdfListItemCollection } from '@syncfusion/ej2-pdf';

let items: PdfListItemCollection = new PdfListItemCollection(['Item 1', 'Item 2', 'Item 3']);
```

### Accessing Items

Retrieve individual items:

```typescript
// Get item by index
let item = list.items.at(0);

// Get item count
let count = list.items.count;
```

## Best Practices

1. **Font Consistency**: Use same font family across nested lists for visual consistency
2. **Indentation**: Maintain appropriate spacing between list levels (typically 20-30 points)
3. **Marker Selection**: Choose markers that clearly differentiate list levels
4. **Text Wrapping**: Ensure sufficient width for text to wrap properly
5. **Pagination**: Use layout format when lists may span multiple pages
6. **Performance**: Create item collections once and reuse for multiple lists
7. **Image Markers for Branding**: Use image markers for branding and visual consistency.
8. **Marker Sizing**: Keep image marker sizes small to avoid layout issues.
9. **Contrast**: Use high-contrast markers for readability.
10. **Resource Reuse**: Reuse image resources when drawing multiple lists.
11. **Baseline Alignment**: Ensure marker images align well with list text baselines.

## Common Gotchas

1. **Coordinate System**: Remember PDF uses bottom-left origin when positioning lists
2. **Bounds**: Provide adequate width and height to avoid content clipping
3. **Nested Levels**: Deeply nested lists (>3 levels) may reduce readability
4. **Marker Width**: Account for marker width when calculating available text space
5. **Font Size**: Large fonts require more vertical space; adjust bounds accordingly
6. **RTL Text**: Right-to-left text requires special handling with format settings
7. **Image Marker Dimensions**: Large marker images may affect list spacing and alignment.
8. **Layout Impact**: Image marker dimensions influence list layout.
9. **Resolution**: Low-resolution images may appear blurred in PDFs.
10. **Decorative Markers**: Excessively decorative markers may reduce readability.
11. **List Support Limitation**: Image markers are supported only for unordered lists.

## Related References

- [Text Rendering](./text-rendering.md) - Advanced text formatting
- [Templates](./templates.md) - Reusable list templates
- [Annotations](./annotations.md) - Adding annotations to lists
- [Images](./images.md) - Loading and drawing image elements