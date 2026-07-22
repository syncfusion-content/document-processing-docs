---
title: Lists in JavaScript PDF Library | Syncfusion
description: This section explains how to work with lists in a PDF document using the JavaScript PDF Library to display and manage items in a structured format
platform: document-processing
control: PDF
documentation: UG
---

# Lists in JavaScript PDF Library

The **JavaScript PDF Library** allows you to list the content in ordered and unordered lists. The ordered list can use numbers or letters (alphabetic characters), and the unordered list can use bullets, circles, squares, and asterisks as markers. Image-based markers are also supported through custom configuration; see the [Customize list markers](#customize-list-markers) section for details.

## Overview

The JavaScript PDF Library exposes a hierarchy of list classes rooted at the abstract `PdfList` base class.

| Class | Description |
|-------|-------------|
| [PdfList](https://ej2.syncfusion.com/documentation/api/pdf/pdflist/) | Abstract base class that defines common list behavior such as `draw`, `items`, and pagination hooks. |
| [PdfOrderedList](https://ej2.syncfusion.com/documentation/api/pdf/pdforderedlist/) | Renders items using a numeric or letter-based marker (for example, `1)`, `a)`, `i)`). |
| [PdfUnorderedList](https://ej2.syncfusion.com/documentation/api/pdf/pdfunorderedlist/) | Renders items using a symbol-based marker (for example, `•`, `■`, `*`, `o`). |
| [PdfListItem](https://ej2.syncfusion.com/documentation/api/pdf/pdflistitem/) | Represents a single item in a list. Exposes a `subList` property used to create nested lists. |
| [PdfListItemCollection](https://ej2.syncfusion.com/documentation/api/pdf/pdflistitemcollection/) | A collection class that wraps an array of strings (or `PdfListItem` instances) and exposes array-style indexing, `at(index)`, `add(item)`, and `count`. |

Both `PdfOrderedList` and `PdfUnorderedList` accept a `PdfListItemCollection` and an optional settings object that controls font, indentation, marker style, and so on.

## Adding an ordered list

This example demonstrates how to create an ordered list in a PDF document using the [PdfOrderedList](https://ej2.syncfusion.com/documentation/api/pdf/pdforderedlist/) class. Ordered lists allow you to present items in a structured, sequential format, typically numbered or lettered, enhancing readability and organization within the PDF content.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfListItemCollection, PdfBrush, PdfStringFormat, PdfPen, PdfNumberStyle, PdfOrderedList, PdfFontFamily, PdfFontStyle, PdfTextAlignment } from '@syncfusion/ej2-pdf';

// Load an existing document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Assign the array of string items
let products: string[] = ['Excel', 'Power', 'Point', 'Word', 'PDF'];
// Add the items to the list item collection
let items: PdfListItemCollection = new PdfListItemCollection(products);
// Initialize the ordered list with the collection and optional settings
let list: PdfOrderedList = new PdfOrderedList(items, {
    font: document.embedFont(PdfFontFamily.helvetica, 36, PdfFontStyle.regular),
    format: new PdfStringFormat(PdfTextAlignment.center),
    pen: new PdfPen({ r: 0, g: 255, b: 0 }, 1),
    brush: new PdfBrush({ r: 0, g: 255, b: 255 }),
    indent: 30,
    textIndent: 50,
    style: PdfNumberStyle.numeric,
    delimiter: ')'
});
// Draw the ordered list on the page
list.draw(page, { x: 0, y: 20, width: 500, height: 700 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing document
var document = new ej.pdf.PdfDocument(data);
// Access the first page
var page = document.getPage(0);
// Assign the array of string items
var products = ['Excel', 'Power', 'Point', 'Word', 'PDF'];
// Add the items to the list item collection
var items = new ej.pdf.PdfListItemCollection(products);
// Initialize the ordered list with the collection and optional settings
var list = new ej.pdf.PdfOrderedList(items, {
    font: document.embedFont(ej.pdf.PdfFontFamily.helvetica, 36, ej.pdf.PdfFontStyle.regular),
    format: new ej.pdf.PdfStringFormat(ej.pdf.PdfTextAlignment.center),
    pen: new ej.pdf.PdfPen({ r: 0, g: 255, b: 0 }, 1),
    brush: new ej.pdf.PdfBrush({ r: 0, g: 255, b: 255 }),
    indent: 30,
    textIndent: 50,
    style: ej.pdf.PdfNumberStyle.numeric,
    delimiter: ')'
});
// Draw the ordered list on the page
list.draw(page, { x: 0, y: 20, width: 500, height: 700 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### PdfOrderedList options

| Option | Type | Description |
|--------|------|-------------|
| `font` | `PdfFont` | Font used to render each list item. Use `document.embedFont(...)` to create. |
| `format` | `PdfStringFormat` | Text layout settings such as alignment, line spacing, and clipping. |
| `pen` | `PdfPen` | Stroke used for the marker glyph. |
| `brush` | `PdfBrush` | Fill used for the marker glyph. |
| `indent` | `number` | Left indent (in points) for the entire list block, applied at every nesting level. |
| `textIndent` | `number` | Indent (in points) from the marker to the item text. |
| `style` | `PdfNumberStyle` | Numbering format. See the enum table below. |
| `delimiter` | `string` | Character(s) placed between the marker and the item text. Default is `.`. |

### PdfNumberStyle values

| Value | Rendered marker |
|-------|-----------------|
| `numeric` | `1`, `2`, `3`, ... |
| `lowerLetter` | `a`, `b`, `c`, ... |
| `upperLetter` | `A`, `B`, `C`, ... |
| `lowerRoman` | `i`, `ii`, `iii`, ... |
| `upperRoman` | `I`, `II`, `III`, ... |

## Adding an unordered list

This example demonstrates how to create an unordered list in a PDF document using the [PdfUnorderedList](https://ej2.syncfusion.com/documentation/api/pdf/pdfunorderedlist/) class. Unordered lists display items with bullet points instead of numbers, making them ideal for presenting non-sequential information in a clear and organized manner.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfBrush, PdfStringFormat, PdfFontFamily, PdfUnorderedList, PdfFontStyle, PdfPen, PdfUnorderedListStyle, PdfListItemCollection } from '@syncfusion/ej2-pdf';

// Load the existing document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Define the items in the unordered list
let products: string[] = ['Excel', 'Power', 'Point', 'Word', 'PDF'];
// Add the items to the list item collection
let items: PdfListItemCollection = new PdfListItemCollection(products);
// Initialize the unordered list with the collection and settings
let list: PdfUnorderedList = new PdfUnorderedList(items, {
    font: document.embedFont(PdfFontFamily.helvetica, 36, PdfFontStyle.regular),
    format: new PdfStringFormat(PdfTextAlignment.center),
    pen: new PdfPen({ r: 0, g: 255, b: 0 }, 1),
    brush: new PdfBrush({ r: 0, g: 255, b: 255 }),
    indent: 30,
    textIndent: 50,
    style: PdfUnorderedListStyle.disk,
    delimiter: ')'
});
// Draw the unordered list on the page
list.draw(page, { x: 0, y: 20, width: 500, height: 700 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the existing document
var document = new ej.pdf.PdfDocument(data);
// Access the first page
var page = document.getPage(0);
// Define the items in the unordered list
var products = ['Excel', 'Power', 'Point', 'Word', 'PDF'];
// Add the items to the list item collection
var items = new ej.pdf.PdfListItemCollection(products);
// Initialize the unordered list with the collection and settings
var list = new ej.pdf.PdfUnorderedList(items, {
    font: document.embedFont(ej.pdf.PdfFontFamily.helvetica, 36, ej.pdf.PdfFontStyle.regular),
    format: new ej.pdf.PdfStringFormat(ej.pdf.PdfTextAlignment.center),
    pen: new ej.pdf.PdfPen({ r: 0, g: 255, b: 0 }, 1),
    brush: new ej.pdf.PdfBrush({ r: 0, g: 255, b: 255 }),
    indent: 30,
    textIndent: 50,
    style: ej.pdf.PdfUnorderedListStyle.disk,
    delimiter: ')'
});
// Draw the unordered list on the page
list.draw(page, { x: 0, y: 20, width: 500, height: 700 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### PdfUnorderedList options

| Option | Type | Description |
|--------|------|-------------|
| `font` | `PdfFont` | Font used to render each list item. |
| `format` | `PdfStringFormat` | Text layout settings. |
| `pen` | `PdfPen` | Stroke used for the marker glyph. |
| `brush` | `PdfBrush` | Fill used for the marker glyph. |
| `indent` | `number` | Left indent (in points) for the entire list block. |
| `textIndent` | `number` | Indent (in points) from the marker to the item text. |
| `style` | `PdfUnorderedListStyle` | Marker style. See the enum table below. |
| `delimiter` | `string` | Character(s) placed between the marker and the item text. |

## Customize list markers

This example demonstrates how to change the marker style of an unordered list in a PDF document using the [PdfUnorderedList](https://ej2.syncfusion.com/documentation/api/pdf/pdfunorderedlist/) class. The marker defines the symbol that appears before each list item. You can choose from the predefined marker styles listed below to visually distinguish different list types or emphasize specific content.

### PdfUnorderedListStyle values

| Value | Rendered marker |
|-------|-----------------|
| `disk` | `•` (filled circle) |
| `circle` | `o` (hollow circle) |
| `square` | `■` (filled square) |
| `asterisk` | `*` (asterisk) |
| `none` | No marker is rendered |

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfUnorderedList, PdfUnorderedListStyle, PdfListItemCollection } from '@syncfusion/ej2-pdf';

// Load the existing document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Add the items to the list item collection
let items: PdfListItemCollection = new PdfListItemCollection(['PDF', 'XlsIO', 'DocIO', 'PPT']);
// Initialize the unordered list and set the marker style
let list: PdfUnorderedList = new PdfUnorderedList(items, {
    style: PdfUnorderedListStyle.disk
});
// Draw the unordered list on the page
list.draw(page, { x: 50, y: 50 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the existing document
var document = new ej.pdf.PdfDocument(data);
// Access the first page
var page = document.getPage(0);
// Add the items to the list item collection
var items = new ej.pdf.PdfListItemCollection(['PDF', 'XlsIO', 'DocIO', 'PPT']);
// Initialize the unordered list and set the marker style
var list = new ej.pdf.PdfUnorderedList(items, {
    style: ej.pdf.PdfUnorderedListStyle.disk
});
// Draw the unordered list on the page
list.draw(page, { x: 50, y: 50 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

**Switching marker style**

To render a different marker, change the `style` value. The list below shows how each style renders for the same input (`['PDF', 'XlsIO', 'DocIO', 'PPT']`):

```ts
// Disk
let list: PdfUnorderedList = new PdfUnorderedList(items, { style: PdfUnorderedListStyle.disk });
// Circle
let list: PdfUnorderedList = new PdfUnorderedList(items, { style: PdfUnorderedListStyle.circle });
// Square
let list: PdfUnorderedList = new PdfUnorderedList(items, { style: PdfUnorderedListStyle.square });
// Asterisk
let list: PdfUnorderedList = new PdfUnorderedList(items, { style: PdfUnorderedListStyle.asterisk });
// No marker
let list: PdfUnorderedList = new PdfUnorderedList(items, { style: PdfUnorderedListStyle.none });
```

> For image-based markers, supply an image to the `markerImage` property of the list before drawing.

## Applying custom fonts to list items

Custom fonts, including Standard, TrueType, and CJK types, can be embedded and applied to list items for consistent multilingual text rendering across platforms.

### Standard font (built-in)

Standard PDF fonts are built in and do not require an external font file.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfUnorderedList, PdfListItemCollection, PdfFontFamily, PdfFontStyle } from '@syncfusion/ej2-pdf';

// Load the existing document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Add the items to the list item collection
let items: PdfListItemCollection = new PdfListItemCollection(['PDF', 'XlsIO', 'DocIO', 'PPT']);
// Initialize the unordered list with a Standard (Helvetica) font
let list: PdfUnorderedList = new PdfUnorderedList(items, {
    font: document.embedFont(PdfFontFamily.helvetica, 36, PdfFontStyle.regular)
});
// Draw the unordered list on the page
list.draw(page, { x: 50, y: 50 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the existing document
var document = new ej.pdf.PdfDocument(data);
// Access the first page
var page = document.getPage(0);
// Add the items to the list item collection
var items = new ej.pdf.PdfListItemCollection(['PDF', 'XlsIO', 'DocIO', 'PPT']);
// Initialize the unordered list with a Standard (Helvetica) font
var list = new ej.pdf.PdfUnorderedList(items, {
    font: document.embedFont(ej.pdf.PdfFontFamily.helvetica, 36, ej.pdf.PdfFontStyle.regular)
});
// Draw the unordered list on the page
list.draw(page, { x: 50, y: 50 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### TrueType font (from a file)

TrueType fonts are loaded from a `.ttf` file and embedded in the resulting PDF so that the text renders consistently on any viewer.

```ts
import { PdfDocument, PdfPage, PdfUnorderedList, PdfListItemCollection, PdfFontStyle } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let fontData: Uint8Array = new Uint8Array('OpenSans-Regular.ttf');
let items: PdfListItemCollection = new PdfListItemCollection(['PDF', 'XlsIO', 'DocIO', 'PPT']);
let list: PdfUnorderedList = new PdfUnorderedList(items, {
    font: document.embedFont(fontData, 36, PdfFontStyle.regular)
});
list.draw(page, { x: 50, y: 50 });
document.save('output.pdf');
document.destroy();
```

### CJK font (Chinese, Japanese, Korean)

CJK fonts must be loaded from a font file because the built-in Standard fonts do not include full CJK glyph sets.

```ts
import { PdfDocument, PdfPage, PdfUnorderedList, PdfListItemCollection, PdfFontStyle } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let fontData: Uint8Array = new Uint8Array('NotoSansCJK-Regular.ttc');
let items: PdfListItemCollection = new PdfListItemCollection(['日本語', '简体中文', '繁體中文', '한국어']);
let list: PdfUnorderedList = new PdfUnorderedList(items, {
    font: document.embedFont(fontData, 36, PdfFontStyle.regular)
});
list.draw(page, { x: 50, y: 50 });
document.save('output.pdf');
document.destroy();
```

> In the browser, load the font file with `fetch(url).then(r => r.arrayBuffer())` and pass the resulting `Uint8Array` to `embedFont`. In Node.js, use `fs.readFileSync`.

## Creating nested list structures

This example demonstrates how to create nested list structures in a PDF document using the [PdfUnorderedList](https://ej2.syncfusion.com/documentation/api/pdf/pdfunorderedlist/) and [PdfOrderedList](https://ej2.syncfusion.com/documentation/api/pdf/pdforderedlist/) classes. Nested lists allow you to organize information hierarchically by placing one list inside another. This is useful when representing multi-level data, outlining topics with sub-points, or grouping related items clearly.

Each [PdfListItem](https://ej2.syncfusion.com/documentation/api/pdf/pdflistitem/) exposes a `subList` property of type `PdfList`. Assign any `PdfOrderedList` or `PdfUnorderedList` to `subList` to add a child list. There is no hard depth limit, but for readability, two or three levels are recommended.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfOrderedList, PdfUnorderedList, PdfUnorderedListStyle, PdfNumberStyle, PdfFontFamily, PdfListItemCollection, PdfFontStyle } from '@syncfusion/ej2-pdf';

// Load the existing document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Initialize the parent unordered list
let list: PdfUnorderedList = new PdfUnorderedList(new PdfListItemCollection(['PDF', 'XlsIO', 'DocIO', 'PPT']));
// Set the marker style for the outer list
list.style = PdfUnorderedListStyle.circle;
// Configure a different marker style for the inner (nested) list
let nested: PdfOrderedList = new PdfOrderedList(new PdfListItemCollection(['JS', 'TS', 'Vue', 'Angular', 'ASP.Net Core']), {
    style: PdfNumberStyle.lowerLetter,
    font: document.embedFont(PdfFontFamily.helvetica, 24, PdfFontStyle.regular)
});
// Attach the nested list to the first item of the outer list
list.items.at(0).subList = nested;
// Draw the nested list on the page
list.draw(page, { x: 50, y: 150 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the existing document
var document = new ej.pdf.PdfDocument(data);
// Access the first page
var page = document.getPage(0);
// Initialize the parent unordered list
var list = new ej.pdf.PdfUnorderedList(new ej.pdf.PdfListItemCollection(['PDF', 'XlsIO', 'DocIO', 'PPT']));
// Set the marker style for the outer list
list.style = ej.pdf.PdfUnorderedListStyle.circle;
// Configure a different marker style for the inner (nested) list
var nested = new ej.pdf.PdfOrderedList(new ej.pdf.PdfListItemCollection(['JS', 'TS', 'Vue', 'Angular', 'ASP.Net Core']), {
    style: ej.pdf.PdfNumberStyle.lowerLetter,
    font: document.embedFont(ej.pdf.PdfFontFamily.helvetica, 24, ej.pdf.PdfFontStyle.regular)
});
// Attach the nested list to the first item of the outer list
list.items.at(0).subList = nested;
// Draw the nested list on the page
list.draw(page, { x: 50, y: 150 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## List pagination

This example shows how long lists automatically continue onto the next page when drawn using the [PdfUnorderedList](https://ej2.syncfusion.com/documentation/api/pdf/pdfunorderedlist/) class. By applying a [PdfLayoutFormat](https://ej2.syncfusion.com/documentation/api/pdf/pdflayoutformat/), the layout engine handles page breaks smoothly while preserving markers, indentation, and nested levels. This ensures consistent rendering of multi-page or dynamically generated list content.

The `suffix` option appends a character after each marker; for example, `suffix: '_'` renders items as `_PDF`, `_XlsIO`, and so on.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfList, PdfLayoutFormat, PdfUnorderedList, PdfLayoutBreakType, PdfLayoutType, PdfListItemCollection, PdfLayoutResult } from '@syncfusion/ej2-pdf';

// Load the existing document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Create an instance of PDF layout format
let format: PdfLayoutFormat = new PdfLayoutFormat();
// Configure the layout format
format.layout = PdfLayoutType.paginate;
format.break = PdfLayoutBreakType.fitElement;
// Initialize the first unordered list
let list1: PdfList = new PdfUnorderedList(new PdfListItemCollection(['PDF', 'XlsIO', 'DocIO', 'PPT', 'PDF', 'XlsIO', 'DocIO', 'PPT']));
// Initialize the second unordered list with a custom suffix
let list2: PdfList = new PdfUnorderedList(new PdfListItemCollection(['A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.']), { suffix: '_' });
// Draw the first list near the bottom of the page so pagination triggers
let result1: PdfLayoutResult = list1.draw(page, { x: 50, y: page.size.height - 100 }, format);
// Use the returned page and bounds to place the second list immediately after the first
let result2: PdfLayoutResult = list2.draw(result1.page, { x: 50, y: result1.bounds.y + result1.bounds.height + 50 }, format);
// Chain a third list using the second result
let list3: PdfList = new PdfUnorderedList(new PdfListItemCollection(['Item A', 'Item B', 'Item C', 'Item D']));
let result3: PdfLayoutResult = list3.draw(result2.page, { x: 50, y: result2.bounds.y + result2.bounds.height + 30 }, format);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the existing document
var document = new ej.pdf.PdfDocument(data);
// Access the first page
var page = document.getPage(0);
// Create an instance of PDF layout format
var format = new ej.pdf.PdfLayoutFormat();
// Configure the layout format
format.layout = ej.pdf.PdfLayoutType.paginate;
format.break = ej.pdf.PdfLayoutBreakType.fitElement;
// Initialize the first unordered list
var list1 = new ej.pdf.PdfUnorderedList(new ej.pdf.PdfListItemCollection(['PDF', 'XlsIO', 'DocIO', 'PPT', 'PDF', 'XlsIO', 'DocIO', 'PPT']));
// Initialize the second unordered list with a custom suffix
var list2 = new ej.pdf.PdfUnorderedList(new ej.pdf.PdfListItemCollection(['A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.']), { suffix: '_' });
// Draw the first list near the bottom of the page so pagination triggers
var result1 = list1.draw(page, { x: 50, y: page.size.height - 100 }, format);
// Use the returned page and bounds to place the second list immediately after the first
var result2 = list2.draw(result1.page, { x: 50, y: result1.bounds.y + result1.bounds.height + 50 }, format);
// Chain a third list using the second result
var list3 = new ej.pdf.PdfUnorderedList(new ej.pdf.PdfListItemCollection(['Item A', 'Item B', 'Item C', 'Item D']));
var result3 = list3.draw(result2.page, { x: 50, y: result2.bounds.y + result2.bounds.height + 30 }, format);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### PdfLayoutFormat options

| Property | Type | Description |
|----------|------|-------------|
| `layout` | `PdfLayoutType` | Layout strategy. Use `PdfLayoutType.paginate` to enable automatic page breaks. |
| `break` | `PdfLayoutBreakType` | How an element that does not fit on the current page is handled. `fitElement` keeps the element together by moving it to the next page. |

### PdfLayoutResult properties

| Property | Type | Description |
|----------|------|-------------|
| `page` | `PdfPage` | The page on which the last fragment of the element was drawn. Use this page to draw the next element. |
| `bounds` | `Rectangle` | Rectangle describing where the element was drawn. `bounds.x` and `bounds.y` are the top-left corner; `bounds.width` and `bounds.height` are the rendered size. |

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/fluent2/pdf/default)