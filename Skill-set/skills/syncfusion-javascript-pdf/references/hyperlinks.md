# Hyperlinks in PDF Documents

## Table of Contents

- [Overview](#overview)
- [Web Navigation](#web-navigation)
    - [Creating Web Links](#creating-web-links)
- [Internal Navigation](#internal-navigation)
    - [Document Links](#document-links)
- [External File Links](#external-file-links)
    - [File Link Annotation](#file-link-annotation)
- [Modifying Hyperlinks](#modifying-hyperlinks)
    - [Updating URLs](#updating-urls)
- [Removing Hyperlinks](#removing-hyperlinks)
- [Link Appearance](#link-appearance)
    - [Color Customization](#color-customization)
- [Best Practices](#best-practices)
- [Common Gotchas](#common-gotchas)
- [Related References](#related-references)

## Overview

Hyperlinks in PDF documents enable navigation to web pages, document locations, and external files. The Syncfusion JavaScript PDF library supports creating, modifying, and removing web links, document links, and file links with customizable appearance.

## Web Navigation

### Creating Web Links

Add clickable links to URLs:

```typescript
import { PdfDocument, PdfPage, PdfStringFormat, PdfStandardFont, PdfFontFamily, PdfTextWebLinkAnnotation, PdfFontStyle, Size } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 36, PdfFontStyle.regular);
let size: Size = font.measureString('Syncfusion');
let annotation: PdfTextWebLinkAnnotation = new PdfTextWebLinkAnnotation(
    { x: 50, y: 40, width: size.width, height: size.height }, 
    { r: 0, g: 0, b: 0}, 
    { r: 165, g: 42, b: 42 }, 
    1
);
annotation.url = 'http://www.syncfusion.com';
page.annotations.add(annotation);
document.save('Output.pdf');
document.destroy();
```

## Internal Navigation

### Document Links

Navigate within the same PDF:

```typescript
import { PdfDocument, PdfPage, PdfDocumentLinkAnnotation, PdfDestination, PdfDestinationMode, Size } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
let size: Size = font.measureString('Syncfusion');
let annotation: PdfDocumentLinkAnnotation = new PdfDocumentLinkAnnotation(
    { x: 50, y: 40, width: size.width, height: size.height },
    { r: 0, g: 0, b: 0}, 
    { r: 165, g: 42, b: 42 }, 
    1
);
let destination: PdfDestination = new PdfDestination(
    page,
    { x: 20, y: 20, width: 100, height: 50 },
    { zoom: 20, mode: PdfDestinationMode.fitToPage }
);
annotation.destination = destination;
page.annotations.add(annotation);
document.save('Output.pdf');
document.destroy();
```

## External File Links

### File Link Annotation

Link to external files:

```typescript
import { PdfDocument, PdfPage, PdfFileLinkAnnotation } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let annotation: PdfFileLinkAnnotation = new PdfFileLinkAnnotation(
    { x: 10, y: 40, width: 30, height: 30 }, 
    'image.png'
);
page.annotations.add(annotation);
document.save('Output.pdf');
document.destroy();
```

## Modifying Hyperlinks

### Updating URLs

Change existing hyperlinks:

```typescript
import { PdfDocument, PdfPage, PdfTextWebLinkAnnotation } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument(data);
let page: PdfPage = document.getPage(0);
let annotation: PdfAnnotation = page.annotations.at(0);
if (annotation instanceof PdfTextWebLinkAnnotation) {
    annotation.url = 'https://www.google.co.in/';
}
document.save('Output.pdf');
document.destroy();
```

## Removing Hyperlinks

### Delete Operations

Remove hyperlinks from documents:

```typescript
import { PdfDocument, PdfPage, PdfTextWebLinkAnnotation } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument(data);
let page: PdfPage = document.getPage(0);
let annotation: PdfTextWebLinkAnnotation = page.annotations.at(0) as PdfTextWebLinkAnnotation;
page.annotations.remove(annotation);
page.annotations.removeAt(1);
document.save('output.pdf');
document.destroy();
```

## Link Appearance

### Color Customization

Customize link colors:

```typescript
let annotation: PdfTextWebLinkAnnotation = new PdfTextWebLinkAnnotation(
    bounds,
    { r: 0, g: 0, b: 255},      // Text color (blue)
    { r: 255, g: 0, b: 0 },     // Hover color (red)
    1                            // Border width
);
```

## Best Practices

1. **Visibility**: Use contrasting colors for links
2. **Bounds**: Ensure clickable area covers entire link text
3. **Testing**: Verify links work in target PDF viewers
4. **URI Encoding**: Properly encode URLs with special characters
5. **Destinations**: Validate internal destinations exist
6. **Accessibility**: Include meaningful link text for screen readers

## Common Gotchas

1. **Coordinate System**: PDF uses bottom-left origin
2. **Bounds Accuracy**: Incorrect bounds lead to non-clickable areas
3. **URL Format**: Must include protocol (http://, https://)
4. **Page Index**: Internal links use 0-based page indexing
5. **Annotation Order**: Later annotations may overlay earlier ones
6. **Color Values**: RGB values range from 0-255

## Related References

- [Bookmarks](./bookmarks.md) - Document navigation
- [Annotations](./annotations.md) - Interactive elements
- [Form Fields](./form-fields.md) - Interactive fields
