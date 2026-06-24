---
title: Split in JavaScript PDF Library | Syncfusion
description:  This section explains how to split large PDF documents into smaller ones, each containing single or multiple pages, using the JavaScript PDF Library
platform: document-processing
control: PDF
documentation: UG
---

# Split in JavaScript PDF Library

The [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) supports splitting PDF file into single-page or multiple-page PDF documents.

## Splitting a PDF file into individual 

The [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) allows splitting the pages of an existing PDF document into multiple individual PDF documents using [split](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument#split) method of the [PdfDocument](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument) class.

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

## Split a range of pages into a separate PDF document

The [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) allows splitting a certain range of pages into a separate PDF document using the [splitByPageRanges](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument#splitbypageranges) method of the [PdfDocument](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument) class.

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

## Split by a fixed number of pages into a PDF document

The [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) allows splitting by fixed number of pages of an existing PDF document using the [splitByFixedNumber](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument#splitbyfixednumber) method of the [PdfDocument](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument) class.

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