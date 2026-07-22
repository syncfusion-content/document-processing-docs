---
title: Splitting PDFs in the JavaScript PDF Library | Syncfusion
description: Learn how to split a PDF into individual pages, custom page ranges, or fixed-size chunks using the JavaScript PDF Library.
platform: document-processing
control: PDF
documentation: UG
---

# Splitting PDFs in the JavaScript PDF Library

The [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) supports splitting a PDF file into individual pages, a user-defined range of pages, or a fixed number of pages per output document.

> **Note:** `ej2-pdf` is a client/browser library. It does not run under server-side rendering (SSR) and is not intended for use in Node.js without a bundler. For server scenarios, use the Syncfusion server-side PDF libraries.

## Choosing a split method

The library provides three methods on the `PdfDocument` class. Use the table below to pick the one that matches your scenario.

| If you need to… | Use | Output |
|---|---|---|
| Split every page into its own PDF | [`split`](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument#split) | One PDF per page. |
| Extract specific page ranges | [`splitByPageRanges`](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument#splitbypageranges) | One PDF per range you specify. |
| Chunk the document into equal-sized groups | [`splitByFixedNumber`](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument#splitbyfixednumber) | One PDF per group of N pages. |

`split()` is equivalent to `splitByFixedNumber(1)`.

## Shared event handler

The split methods raise the `splitEvent` once for every output PDF. The handler receives a `PdfDocumentSplitEventArgs` object with the following members:

| Member | Type | Description |
|---|---|---|
| `index` | `number` | 0-based sequence number of the emitted split. |
| `pdfData` | `Uint8Array` | Bytes of the emitted PDF document. |

A single handler is sufficient for all three methods. The samples below reuse the handler declared here:

```typescript
// filepath: shared/split-handler.ts
import { PdfDocument, PdfDocumentSplitEventArgs } from '@syncfusion/ej2-pdf';
import { Save } from '@syncfusion/ej2-file-utils';

export function documentSplitEvent(
  sender: PdfDocument,
  args: PdfDocumentSplitEventArgs
): void {
  Save.save(
    'output_' + args.index + '.pdf',
    new Blob([args.pdfData], { type: 'application/pdf' })
  );
}
```

> **Cleanup:** Always call `document.destroy()` after the split completes. `PdfDocument` instances hold native PDF objects in memory; without `destroy()`, repeated splits will leak memory.

> **Performance tip:** Each split document is retained internally until `destroy()` is called. For large inputs, write each chunk to disk from inside the event handler (as shown above) instead of accumulating the event results.

## Splitting a PDF into individual pages

Use the [`split`](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument#split) method to produce one PDF per page.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { documentSplitEvent } from './shared/split-handler';

// `data` is a Uint8Array or ArrayBuffer (see "Loading a source PDF").
let document: PdfDocument = new PdfDocument(data);
document.splitEvent = documentSplitEvent;
document.split();   // Produces one PDF per page.
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

var document = new ej.pdf.PdfDocument(data);
document.splitEvent = documentSplitEvent;
document.split();   // Produces one PDF per page.
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
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { documentSplitEvent } from './shared/split-handler';

let document: PdfDocument = new PdfDocument(data);
document.splitEvent = documentSplitEvent;
// Splits pages 1–5 into output_0.pdf and pages 6–10 into output_1.pdf.
document.splitByPageRanges([[0, 4], [5, 9]]);
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
var document = new ej.pdf.PdfDocument(data);
document.splitEvent = documentSplitEvent;
document.splitByPageRanges([[0, 4], [5, 9]]);
document.destroy();
{% endhighlight %}
{% endtabs %}

## Splitting by a fixed number of pages

Use the [`splitByFixedNumber`](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument#splitbyfixednumber) method to chunk the document into equal-sized groups of N pages. The final chunk may contain fewer than N pages.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { documentSplitEvent } from './shared/split-handler';

let document: PdfDocument = new PdfDocument(data);
document.splitEvent = documentSplitEvent;
document.splitByFixedNumber(1);   // Same result as split().
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
var document = new ej.pdf.PdfDocument(data);
document.splitEvent = documentSplitEvent;
document.splitByFixedNumber(1);
document.destroy();
{% endhighlight %}
{% endtabs %}

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/fluent2/pdf/default)