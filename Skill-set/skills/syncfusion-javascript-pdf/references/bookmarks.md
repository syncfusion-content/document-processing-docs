# Bookmarks in PDF Documents

## Table of Contents

- [Overview](#overview)
- [Creating Bookmarks](#creating-bookmarks)
- [Nested Bookmarks](#nested-bookmarks)
- [Bookmark Destinations](#bookmark-destinations)
- [Bookmark Styling](#bookmark-styling)
- [Modifying Bookmarks](#modifying-bookmarks)
- [Removing Bookmarks](#removing-bookmarks)
- [Bookmark Navigation](#bookmark-navigation)
- [Best Practices](#best-practices)
- [Common Gotchas](#common-gotchas)
- [Related References](#related-references)

## Overview

Bookmarks provide hierarchical navigation structure in PDF documents, allowing users to quickly jump to specific sections. The Syncfusion JavaScript PDF library supports creating, modifying, and removing bookmarks with full control over destinations, styling, and nested structures.

## Creating Bookmarks

### Basic Bookmark Creation

Add bookmarks to new documents:

```typescript
import {PdfDocument, PdfPage, PdfBookmarkBase, PdfBookmark, PdfDestination} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let bookmarks: PdfBookmarkBase = document.bookmarks;
let bookmark: PdfBookmark = bookmarks.add('Introduction', 0, {
    destination: new PdfDestination(page, { x: 100, y: 100 }, { zoom: 1 }),
    namedDestination: new PdfNamedDestination('First', new PdfDestination(page, { x: 0, y: 10 }, {zoom: 1 })),
    color: { r: 0, g: 0, b: 255 },
    textStyle: PdfTextStyle.bold
});
document.save('output.pdf');
document.destroy();
```

### Inserting Bookmarks

Insert at specific positions:

```typescript
import {PdfDocument, PdfPage, PdfBookmark, PdfBookmarkBase, PdfDestination} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument(data);
let page: PdfPage = document.getPage(0) as PdfPage;
let bookmarks: PdfBookmarkBase = document.bookmarks;
let bookmark: PdfBookmark = bookmarks.add('Introduction', 1);
bookmark.destination = new PdfDestination(page, { x: 100, y: 200 });
document.save('output.pdf');
document.destroy();
```

## Nested Bookmarks

### Creating Hierarchies

Build multi-level bookmark structures:

```typescript
import {PdfDocument, PdfPage, PdfBookmark, PdfBookmarkBase, PdfTextStyle, PdfNamedDestination, PdfDestination} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let bookmarks: PdfBookmarkBase = document.bookmarks;

// Parent bookmark
let bookmark: PdfBookmark = bookmarks.add('Introduction', 0, {
    destination: new PdfDestination(page, { x: 100, y: 100 }, { zoom: 1 }),
    color: { r: 0, g: 0, b: 255 },
    textStyle: PdfTextStyle.bold
});

// Child bookmark
let childbookmark: PdfBookmark = bookmark.add('FirstChild', 0, {
    destination: new PdfDestination(page, { x: 100, y: 150 }, { zoom: 1 }),
    color: { r: 0, g: 0, b: 255 },
    textStyle: PdfTextStyle.bold
});

document.save('output.pdf');
document.destroy();
```

## Bookmark Destinations

### Setting Destinations

Define where bookmarks navigate:

```typescript
import {PdfDestination, PdfDestinationMode} from '@syncfusion/ej2-pdf';

// Fit to page
let destination: PdfDestination = new PdfDestination(
    page,
    { x: 0, y: 0 },
    { mode: PdfDestinationMode.fitToPage }
);

// Specific coordinates with zoom
let destination2: PdfDestination = new PdfDestination(
    page,
    { x: 100, y: 200 },
    { zoom: 1.5 }
);
```

## Bookmark Styling

### Text Appearance

Customize bookmark appearance:

```typescript
import {PdfBookmark, PdfTextStyle} from '@syncfusion/ej2-pdf';

let bookmark: PdfBookmark = bookmarks.add('Chapter 1', 0, {
    color: { r: 255, g: 0, b: 0 },
    textStyle: PdfTextStyle.bold | PdfTextStyle.italic
});
```

**Text Styles:**
- `PdfTextStyle.regular`
- `PdfTextStyle.bold`
- `PdfTextStyle.italic`
- `PdfTextStyle.bold | PdfTextStyle.italic`

## Modifying Bookmarks

### Updating Properties

Change existing bookmarks:

```typescript
import {PdfDocument, PdfPage, PdfBookmarkBase, PdfBookmark, PdfDestination} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument(data);
let page: PdfPage = document.getPage(0);
let bookmarks: PdfBookmarkBase = document.bookmarks;
let bookmark: PdfBookmark = bookmarks.at(0);

// Update title
bookmark.title = 'Updated Title';

// Update destination
bookmark.destination = new PdfDestination(page, { x: 50, y: 50 });

// Update color
bookmark.color = { r: 0, g: 255, b: 0 };

document.save('output.pdf');
document.destroy();
```

## Removing Bookmarks

### Deletion Operations

Remove bookmarks from documents:

```typescript
import {PdfDocument, PdfBookmarkBase} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument(data);
let bookmarks: PdfBookmarkBase = document.bookmarks;

// Remove by name
bookmarks.remove('Introduction');

// Remove by index
bookmarks.remove(1);

// Remove all
bookmarks.clear();

document.save('output.pdf');
document.destroy();
```

## Bookmark Navigation

### Getting Page Index

Retrieve bookmark destinations:

```typescript
import {PdfDocument, PdfBookmarkBase, PdfBookmark} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument(data);
let bookmarks: PdfBookmarkBase = document.bookmarks;
let bookmark: PdfBookmark = bookmarks.at(0);
let pageIndex: number = bookmark.destination.pageIndex;
```

## Best Practices

1. **Hierarchy**: Keep bookmark depth reasonable (3-4 levels maximum)
2. **Naming**: Use clear, descriptive titles
3. **Order**: Add bookmarks in logical document order
4. **Styling**: Use consistent styling across bookmark levels
5. **Destinations**: Ensure destinations point to valid pages
6. **Performance**: Minimize excessive nesting

## Common Gotchas

1. **Index-Based**: Bookmark insertion uses 0-based indexing
2. **Destination Validity**: Invalid page references cause errors
3. **Title Length**: Very long titles may be truncated in viewers
4. **State Preservation**: Bookmark expansion state may vary by viewer
5. **Named Destinations**: Named destinations require unique identifiers
6. **Collection Modification**: Removing bookmarks during iteration requires careful handling

## Related References

- [Annotations](./annotations.md) - Interactive annotations
- [Hyperlinks](./hyperlinks.md) - Document links
- [Form Fields](./form-fields.md) - Interactive fields
