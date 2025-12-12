---
title: Merge in TypeScript PDF library | Syncfusion
description: This section explains how to merge multiple PDF documents into a single file and import pages from one document to another using the JavaScript PDF library.
platform: document-processing
control: PDF
documentation: UG
---
# Merge in TypeScript PDF library

The PDF provides support to merge multiple PDF documents into a single file and import pages from one document to another.

## Merging multiple documents

This section explains how to import a range of pages from a source PDF into a destination document using the `importPageRange` method. This is useful for merging multiple pages or entire documents efficiently.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfPageImportOptions} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let destination: PdfDocument = new PdfDocument(data1);
// Load another existing PDF document
let sourceDocument: PdfDocument = new PdfDocument(data2);
// Access first page of the source document
let pageToImport: PdfPage = sourceDocument.getPage(0);
// Options to customize the support of import PDF pages.
let options: PdfPageImportOptions = new PdfPageImportOptions();
// Sets the target page index to import
options.targetIndex = 5;
// Import the page into the destination document at the specified index
destination.importPageRange(sourceDocument, 0, sourceDocument.pageCount-1);
// Save the output PDF
destination.save('Output.pdf');
// Destroy the documents
destination.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Load an existing PDF document
var destination= new PdfDocument(data1);
// Load another existing PDF document
var sourceDocument = new PdfDocument(data2);
// Access first page of the source document
var pageToImport = sourceDocument.getPage(0);
// Options to customize the support of import PDF pages.
var options = new PdfPageImportOptions();
// Sets the target page index to import
options.targetIndex = 5;
// Import the page into the destination document at the specified index
destination.importPageRange(sourceDocument, 0, sourceDocument.pageCount-1);
// Save the output PDF
destination.save('Output.pdf');
// Destroy the documents
destination.destroy();
{% endhighlight %}
{% endtabs %}


## Importing pages from multiple documents

This section demonstrates how to import multiple pages from a source PDF into a destination document at a specified position using the `importPageRange` method and PdfPageImportOptions. This is useful for merging selected page ranges from different PDFs into one document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPageImportOptions} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let destination: PdfDocument = new PdfDocument(data1);
// Load another existing PDF document
let sourceDocument: PdfDocument = new PdfDocument(data2);
// Options to customize the import of PDF pages
let options: PdfPageImportOptions = new PdfPageImportOptions();
// Sets the target page index to insert the imported pages
options.targetIndex = 3;
// Import 5 pages from page index 2 to 6 into the destination document and insert them at index 3
destination.importPageRange(sourceDocument, 2, 6, options);
// Save the output PDF
destination.save('Output.pdf');
// Destroy the documents to free resources
destination.destroy();
sourceDocument.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Load an existing PDF document
var destination = new ej.pdf.PdfDocument(data1);
// Load another existing PDF document
var sourceDocument = new ej.pdf.PdfDocument(data2);
// Options to customize the import of PDF pages
var options = new ej.pdf.PdfPageImportOptions();
// Sets the target page index to insert the imported pages
options.targetIndex = 3;
// Import 5 pages from page index 2 to 6 into the destination document and insert them at index 3
destination.importPageRange(sourceDocument, 2, 6, options);
// Save the output PDF
destination.save('Output.pdf');
// Destroy the documents to free resources
destination.destroy();
sourceDocument.destroy();
{% endhighlight %}
{% endtabs %}

## Optimizing PDF resources when merging PDF documents

Imports a page from a source PDF into a destination document at a specific index with rotation and resource optimization using `PdfPageImportOptions` class.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfPageImportOptions } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let destination: PdfDocument = new PdfDocument(data1);
// Load another existing PDF document
let sourceDocument: PdfDocument = new PdfDocument(data2);
// Access first page of the source document
let pageToImport: PdfPage = sourceDocument.getPage(0);
// Options to customize the support of import PDF pages.
let options: PdfPageImportOptions = new PdfPageImportOptions();
// Sets the target page index to import
options.targetIndex = 5;
// Import the page into the destination document at the specified index
destination.importPage(pageToImport, sourceDocument, options);
// Save the output PDF
destination.save('Output.pdf');
// Destroy the documents
destination.destroy();
sourceDocument.destroy();
{% highlight javascript tabtitle="JavaScript" %}
// Load an existing PDF document
var destination = new ej.pdf.PdfDocument(data1);
// Load another existing PDF document
var sourceDocument = new ej.pdf.PdfDocument(data2);
// Access first page of the source document
var pageToImport = sourceDocument.getPage(0);
// Options to customize the support of import PDF pages.
var options = new ej.pdf.PdfPageImportOptions();
// Sets the target page index to import
options.targetIndex = 5;
// Import the page into the destination document at the specified index
destination.importPage(pageToImport, sourceDocument, options);
// Save the output PDF
destination.save('Output.pdf');
// Destroy the documents
destination.destroy();
sourceDocument.destroy();
{% endhighlight %}
{% endtabs %}