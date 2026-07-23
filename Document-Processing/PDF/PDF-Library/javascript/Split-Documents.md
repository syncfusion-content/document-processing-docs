---
title: Splitting PDFs in the JavaScript PDF Library | Syncfusion
description: Learn how to split a PDF into individual pages, custom page ranges, or fixed-size chunks using the JavaScript PDF Library.
platform: document-processing
control: PDF
documentation: UG
---

# Splitting PDFs in the JavaScript PDF Library

The [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) supports splitting a PDF file into individual pages, a user-defined range of pages, or a fixed number of pages per output document.

## Choosing a split method

The library provides three methods on the `PdfDocument` class. Use the table below to pick the one that matches your scenario.

| If you need to… | Use | Output |
|---|---|---|
| Split every page into its own PDF | [`split`](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument#split) | One PDF per page. |
| Extract specific page ranges | [`splitByPageRanges`](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument#splitbypageranges) | One PDF per range you specify. |
| Chunk the document into equal-sized groups | [`splitByFixedNumber`](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument#splitbyfixednumber) | One PDF per group of N pages. |

## Splitting a PDF into individual pages

Use the [`split`](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument#split) method to produce one PDF per page.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfDocumentSplitEventArgs} from '@syncfusion/ej2-pdf';
import { Save } from '@syncfusion/ej2-file-utils';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
document.splitEvent = documentSplitEvent;
// Split PDF document into individual pages
document.split();
// Event to invoke while splitting PDF document data
function documentSplitEvent(sender: PdfDocument, args: PdfDocumentSplitEventArgs): void {
  Save.save('output_' + args.index + '.pdf', new Blob([args.pdfData], { type: 'application/pdf' }));
}
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
document.splitEvent = documentSplitEvent;
// Split PDF document into individual pages
document.split();
// Event to invoke while splitting PDF document data
function documentSplitEvent(sender, args): void {
  Save.save('output_' + args.index + '.pdf', new Blob([args.pdfData], { type: 'application/pdf' }));
}
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Splitting a specified range of pages

Use the [`splitByPageRanges`](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument#splitbypageranges) method when you know exactly which pages belong in each output.

Each entry in the array is a tuple `[start, end]` where:

- `start` and `end` are **0-based** page indices.
- The bounds are **inclusive** on both ends.
- Ranges must not overlap.
- The page count of the source document is not validated against the ranges; out-of-range indices are ignored.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfDocumentSplitEventArgs} from '@syncfusion/ej2-pdf';
import { Save } from '@syncfusion/ej2-file-utils';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
document.splitEvent = documentSplitEvent;
// Split PDF document by page ranges specified
document.splitByPageRanges([[0, 4], [5, 9]]);
// Event to invoke while splitting PDF document data
function documentSplitEvent(sender: PdfDocument, args: PdfDocumentSplitEventArgs): void {
  Save.save('output_' + args.index + '.pdf', new Blob([args.pdfData], { type: 'application/pdf' }));
}
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
document.splitEvent = documentSplitEvent;
// Split PDF document by page ranges specified
document.splitByPageRanges([[0, 4], [5, 9]]);
// Event to invoke while splitting PDF document data
function documentSplitEvent(sender, args): void {
  Save.save('output_' + args.index + '.pdf', new Blob([args.pdfData], { type: 'application/pdf' }));
}
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Splitting by a fixed number of pages

Use the [`splitByFixedNumber`](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument#splitbyfixednumber) method to chunk the document into equal-sized groups of N pages. The final chunk may contain fewer than N pages.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfDocumentSplitEventArgs} from '@syncfusion/ej2-pdf';
import { Save } from '@syncfusion/ej2-file-utils';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
document.splitEvent = documentSplitEvent;
// Split PDF document by fixed number of pages
document.splitByFixedNumber(1);
// Event to invoke while splitting PDF document data
function documentSplitEvent(sender: PdfDocument, args: PdfDocumentSplitEventArgs): void {
  Save.save('output_' + args.index + '.pdf', new Blob([args.pdfData], { type: 'application/pdf' }));
}
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
document.splitEvent = documentSplitEvent;
// Split PDF document by fixed number of pages
document.splitByFixedNumber(1);
// Event to invoke while splitting PDF document data
function documentSplitEvent(sender, args): void {
  Save.save('output_' + args.index + '.pdf', new Blob([args.pdfData], { type: 'application/pdf' }));
}
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/tailwind3/pdf/default.html)