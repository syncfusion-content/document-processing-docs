---
title: Merge in JavaScript PDF library | Syncfusion
description: This section explains how to merge multiple PDF documents into a single file and import pages from one document to another using the JavaScript PDF library.
platform: document-processing
control: PDF
documentation: UG
---
# Merge in JavaScript PDF library

The PDF provides support to merge multiple PDF documents into a single file and import pages from one document to another.

## Importing pages

This section explains how to import a range of pages from a source PDF into a destination document using the `importPageRange` method.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfPageImportOptions} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let destination: PdfDocument = new PdfDocument(data1);
// Load another existing PDF document
let sourceDocument: PdfDocument = new PdfDocument(data2);
// Import the page into the destination document at the specified index
destination.importPageRange(sourceDocument, 0, sourceDocument.pageCount-1);
// Save the output PDF
destination.save('Output.pdf');
// Destroy the documents
destination.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var destination= new ej.pdf.PdfDocument(data1);
// Load another existing PDF document
var sourceDocument = new ej.pdf.PdfDocument(data2);
// Import the page into the destination document at the specified index
destination.importPageRange(sourceDocument, 0, sourceDocument.pageCount-1);
// Save the output PDF
destination.save('Output.pdf');
// Destroy the documents
destination.destroy();

{% endhighlight %}
{% endtabs %}

## Importing pages from multiple documents

This section demonstrates how to import multiple pages from a source PDF into a destination document at a specified position using the `importPageRange` method and `PdfPageImportOptions`. This is useful for merging selected page ranges from different PDFs into one document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPageImportOptions} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let destination: PdfDocument = new PdfDocument(data1);
// Load another existing PDF document
let sourceDocument1: PdfDocument = new PdfDocument(data2);
// Options to customize the import of PDF pages
let options: PdfPageImportOptions = new PdfPageImportOptions();
// Sets the target page index to insert the imported pages
options.targetIndex = 3;
// Import 5 pages from page index 2 to 6 into the destination document and insert them at index 3
destination.importPageRange(sourceDocument1, 2, 6, options);
// Load another existing PDF document
let sourceDocument2: PdfDocument = new PdfDocument(data3);
// Options to customize the import of PDF pages
options = new PdfPageImportOptions();
// Sets the target page index to insert the imported pages
options.targetIndex = 7;
// Import 4 pages from page index 0 to 3 into the destination document and insert them at index 7
destination.importPageRange(sourceDocument2, 0, 3, options);
// Save the output PDF
destination.save('Output.pdf');
// Destroy the documents to free resources
destination.destroy();
sourceDocument1.destroy();
sourceDocument2.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var destination = new ej.pdf.PdfDocument(data1);
// Load another existing PDF document
var sourceDocument1 = new ej.pdf.PdfDocument(data2);
// Options to customize the import of PDF pages
var options = new ej.pdf.PdfPageImportOptions();
// Sets the target page index to insert the imported pages
options.targetIndex = 3;
// Import 5 pages from page index 2 to 6 into the destination document and insert them at index 3
destination.importPageRange(sourceDocument1, 2, 6, options);
// Load another existing PDF document
var sourceDocument2 = new ej.pdf.PdfDocument(data3);
// Options to customize the import of PDF pages
options = new ej.pdf.PdfPageImportOptions();
// Sets the target page index to insert the imported pages
options.targetIndex = 7;
// Import 4 pages from page index 0 to 3 into the destination document and insert them at index 7
destination.importPageRange(sourceDocument2, 0, 3, options);
// Save the output PDF
destination.save('Output.pdf');
// Destroy the documents to free resources
destination.destroy();
sourceDocument1.destroy();
sourceDocument2.destroy();

{% endhighlight %}
{% endtabs %}

## Optimizing PDF resources when merging PDF documents

Imports a page from a source PDF into a destination document at a specific index with group form fields, rotation and resource optimization using `PdfPageImportOptions` class.

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
// Sets the rotation angle
options.rotation = PdfRotationAngle.angle270;
// Enables resource optimization when importing pages
options.optimizeResources = true;
// Groups form fields together while importing pages
options.groupFormFields = true;
// Import the page into the destination document at the specified index
destination.importPage(pageToImport, sourceDocument, options);
// Save the output PDF
destination.save('Output.pdf');
// Destroy the documents
destination.destroy();
sourceDocument.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var destination = new ej.pdf.PdfDocument(data1);
// Load another existing PDF document
var sourceDocument = new ej.pdf.PdfDocument(data2);
// Access first page of the source document
var pageToImport = sourceDocument.getPage(0);
// Options to customize the support of import PDF pages.
var options = new ej.pdf.PdfPageImportOptions();
// Sets the rotation angle
options.rotation = PdfRotationAngle.angle270;
// Enables resource optimization when importing pages
options.optimizeResources = true;
// Groups form fields together while importing pages
options.groupFormFields = true;
// Import the page into the destination document at the specified index
destination.importPage(pageToImport, sourceDocument, options);
// Save the output PDF
destination.save('Output.pdf');
// Destroy the documents
destination.destroy();
sourceDocument.destroy();

{% endhighlight %}
{% endtabs %}