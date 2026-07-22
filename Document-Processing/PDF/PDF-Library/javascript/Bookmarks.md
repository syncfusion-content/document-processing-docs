---
title: Bookmarks in JavaScript PDF Library | Syncfusion
description: This section explains how to add, modify and remove bookmarks in the PDF document by using JavaScript PDF Library
platform: document-processing
control: PDF
documentation: UG
---

# Bookmarks in JavaScript PDF Library

[JavaScript PDF](https://www.syncfusion.com/document-sdk/javascript-pdf-library) provides support to insert, remove, and modify the bookmarks in the PDF Document.

Bookmarks (also called *outlines* in the PDF specification) appear in the bookmark pane of a PDF reader and let users jump directly to a specific page, location, or named destination. In the **JavaScript PDF Library**, bookmarks are managed through the [PdfBookmark](https://ej2.syncfusion.com/documentation/api/pdf/pdfbookmark) class, which is exposed via the [PdfBookmarkBase](https://ej2.syncfusion.com/documentation/api/pdf/pdfbookmarkbase) collection returned by `PdfDocument.bookmarks`. Each bookmark can carry an optional [PdfDestination](https://ej2.syncfusion.com/documentation/api/pdf/pdfdestination) (the page, point, and zoom to display when activated) and an optional [PdfNamedDestination](https://ej2.syncfusion.com/documentation/api/pdf/pdfnameddestination) (a reusable, named target that can be referenced from other links and the PDF reader's "Go To" dialog).

This guide covers the supported operations:

| Operation | API |
|---|---|
| Add a bookmark to a new PDF | `bookmarks.add(title, index, options?)` |
| Insert a bookmark at a specific position in an existing PDF | `bookmarks.add(title, index, options?)` |
| Create nested (parent–child) bookmarks | `bookmark.add(title, index, options?)` |
| Remove a bookmark by title | `bookmarks.remove(title)` |
| Remove a bookmark at a specific index | `bookmarks.remove(index)` |
| Remove every bookmark | `bookmarks.clear()` |
| Get the page index of a bookmark | `bookmark.destination.pageIndex` |

---

## Adding bookmarks to a PDF

This example demonstrates how to add bookmarks to a PDF document using the [PdfBookmark](https://ej2.syncfusion.com/documentation/api/pdf/pdfbookmark) class. Bookmarks provide an easy way to navigate through different sections of a PDF file.

`bookmarks.add` has two overloads:

| Signature | Description |
|---|---|
| `add(title: string, index: number): PdfBookmark` | Adds a minimal bookmark at the given position. The destination can be set afterwards via `bookmark.destination`. |
| `add(title: string, index: number, options: PdfBookmarkOptions): PdfBookmark` | Adds a bookmark with destination, named destination, color, and text style in a single call. |

The `PdfDestination` constructor accepts `(page: PdfPage, point: { x: number, y: number }, zoom?: { zoom: number })`. Coordinates are in PDF user space (origin at the bottom-left of the page). The `color` option is an `{ r, g, b }` object with each channel in `0`–`255`; it controls the bookmark's color in the reader's bookmark pane. `PdfTextStyle` is an enum with values such as `regular`, `bold`, and `italic`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfBookmarkBase, PdfBookmark, PdfDestination, PdfNamedDestination, PdfTextStyle} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Get the bookmarks
let bookmarks: PdfBookmarkBase = document.bookmarks;
// Add a new bookmark to the PDF document
let bookmark: PdfBookmark = bookmarks.add('Introduction', 0, {
destination: new PdfDestination(page, { x: 100, y: 100 }, { zoom: 1 }),
namedDestination: new PdfNamedDestination('First', new PdfDestination(page, { x: 0, y: 10 }, {zoom: 1 })),
color: { r: 0, g: 0, b: 255 },
textStyle: PdfTextStyle.bold});
// Save the document
document.save('output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Get the bookmarks
var bookmarks = document.bookmarks;
// Add a new bookmark to the PDF document
var bookmark = bookmarks.add('Introduction', 0, {
destination: new ej.pdf.PdfDestination(page, { x: 100, y: 100 }, { zoom: 1 }),
namedDestination: new ej.pdf.PdfNamedDestination('First', new ej.pdf.PdfDestination(page, { x: 0, y: 10 }, {zoom: 1 })),
color: { r: 0, g: 0, b: 255 },
textStyle: ej.pdf.PdfTextStyle.bold});
// Save the document
document.save('output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

---

## Inserting bookmarks at a specific position

This example demonstrates how to insert a bookmark at a specific index in an existing PDF document using the [PdfBookmark](https://ej2.syncfusion.com/documentation/api/pdf/pdfbookmark) class. The 2-argument `add(title, index)` form creates a minimal bookmark; the destination is set afterwards via the `bookmark.destination` property.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfBookmark, PdfBookmarkBase, PdfDestination} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Get the first page
let page: PdfPage = document.getPage(0) as PdfPage;
// Get the bookmarks
let bookmarks: PdfBookmarkBase = document.bookmarks;
// Add a new bookmark at the specified bookmark index
let bookmark: PdfBookmark = bookmarks.add('Introduction', 1);
// Sets destination to the bookmark
bookmark.destination = new PdfDestination(page, { x: 100, y: 200 });
// Save the document
document.save('output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Get the first page
var page = document.getPage(0);
// Get the bookmarks
var bookmarks = document.bookmarks;
// Add a new bookmark at the specified bookmark index
var bookmark = bookmarks.add('Introduction', 1);
// Sets destination to the bookmark
bookmark.destination = new ej.pdf.PdfDestination(page, { x: 100, y: 200 });
// Save the document
document.save('output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

---

## Creating nested bookmarks

This example demonstrates how to create hierarchical (parent–child) bookmarks in a PDF using the [PdfBookmark](https://ej2.syncfusion.com/documentation/api/pdf/pdfbookmark) class. This feature allows organizing content with nested bookmark structures for easier navigation. The `add` method on a `PdfBookmark` instance works exactly like the one on `PdfBookmarkBase` and produces a child bookmark.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfBookmark, PdfBookmarkBase, PdfTextStyle, PdfNamedDestination, PdfDestination} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Get the bookmarks
let bookmarks: PdfBookmarkBase = document.bookmarks;
// Add a parent bookmark to the PDF document
let bookmark: PdfBookmark = bookmarks.add('Introduction', 0, {
destination: new PdfDestination(page, { x: 100, y: 100 }, { zoom: 1 }),
namedDestination: new PdfNamedDestination('First', new PdfDestination(page, { x: 0, y: 10 }, {zoom: 1 })),
color: { r: 0, g: 0, b: 255 },
textStyle: PdfTextStyle.bold});
// Add a child bookmark under the parent
bookmark.add('FirstChild', 0, {
destination: new PdfDestination(page, { x: 100, y: 150 }, { zoom: 1 }),
namedDestination: new PdfNamedDestination('Second', new PdfDestination(page, { x: 0, y: 10 }, {zoom: 1 })),
color: { r: 0, g: 0, b: 255 },
textStyle: PdfTextStyle.bold});
// Save the document
document.save('output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Get the bookmarks
var bookmarks = document.bookmarks;
// Add a parent bookmark to the PDF document
var bookmark = bookmarks.add('Introduction', 0, {
destination: new ej.pdf.PdfDestination(page, { x: 100, y: 100 }, { zoom: 1 }),
namedDestination: new ej.pdf.PdfNamedDestination('First', new ej.pdf.PdfDestination(page, { x: 0, y: 10 }, {zoom: 1 })),
color: { r: 0, g: 0, b: 255 },
textStyle: ej.pdf.PdfTextStyle.bold});
// Add a child bookmark under the parent
bookmark.add('FirstChild', 0, {
destination: new ej.pdf.PdfDestination(page, { x: 100, y: 150 }, { zoom: 1 }),
namedDestination: new ej.pdf.PdfNamedDestination('Second', new ej.pdf.PdfDestination(page, { x: 0, y: 10 }, {zoom: 1 })),
color: { r: 0, g: 0, b: 255 },
textStyle: ej.pdf.PdfTextStyle.bold});
// Save the document
document.save('output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

---

## Removing bookmarks

The `PdfBookmarkBase` collection exposes three removal patterns: by title, by index, or all at once. `remove(title)` removes the first bookmark whose title matches; if multiple bookmarks share a title, only the first match is removed. `remove(index)` removes the bookmark at the given zero-based position. `clear()` removes every bookmark in the collection.

### Remove a bookmark by title

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfBookmarkBase} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Get the bookmarks
let bookmarks: PdfBookmarkBase = document.bookmarks;
// Removes the specified bookmark from the document
bookmarks.remove('Introduction');
// Save the document
document.save('output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Get the bookmarks
var bookmarks = document.bookmarks;
// Removes the specified bookmark from the document
bookmarks.remove('Introduction');
// Save the document
document.save('output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Remove a bookmark at a specific index

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfBookmarkBase} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Get the bookmarks
let bookmarks: PdfBookmarkBase = document.bookmarks;
// Removes the bookmark from the document at the specified index
bookmarks.remove(1);
// Save the document
document.save('output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Get the bookmarks
var bookmarks = document.bookmarks;
// Removes the bookmark from the document at the specified index
bookmarks.remove(1);
// Save the document
document.save('output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Remove all bookmarks

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfBookmarkBase} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Get the bookmarks
let bookmarks: PdfBookmarkBase = document.bookmarks;
// Removes all the bookmarks from the collection
bookmarks.clear();
// Get the count after removal of all bookmarks
let count: number = bookmarks.count;
// Save the document
document.save('output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Get the bookmarks
var bookmarks = document.bookmarks;
// Removes all the bookmarks from the collection
bookmarks.clear();
// Get the count after removal of all bookmarks
var count = bookmarks.count;
// Save the document
document.save('output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

---

## Getting a bookmark's page index

This example demonstrates how to retrieve the page index associated with a bookmark in an existing PDF document using the [PdfBookmark](https://ej2.syncfusion.com/documentation/api/pdf/pdfbookmark) class. The page index can then be used to navigate to that page or to log the bookmark's location.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfBookmark, PdfBookmarkBase} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Get bookmarks
let bookmarks: PdfBookmarkBase = document.bookmarks;
// Get the first bookmark (or any specific one)
let bookmark: PdfBookmark = bookmarks.at(0);
// Get the page index of the bookmark's destination
let pageIndex: number = bookmark.destination.pageIndex;
// Logs the page index to the console
console.log(pageIndex);
// Save the document
document.save('output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Get bookmarks
var bookmarks = document.bookmarks;
// Get the first bookmark (or any specific one)
var bookmark = bookmarks.at(0);
// Get the page index of the bookmark's destination
var pageIndex = bookmark.destination.pageIndex;
// Logs the page index to the console
console.log(pageIndex);
// Save the document
document.save('output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

---

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/fluent2/pdf/default)