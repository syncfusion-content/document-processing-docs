---
title: Merging PDF Documents in JavaScript PDF Library | Syncfusion
description: This section explains how to merge multiple PDF documents into a single file and import pages from one document to another using the JavaScript PDF Library.
platform: document-processing
control: PDF
documentation: UG
---
# Merging PDF Documents in JavaScript PDF Library

The Syncfusion JavaScript PDF Library supports merging multiple PDF documents into a single file and importing pages from one document to another. This guide covers three common scenarios:

- **Importing a Page Range** — copy the full range of pages from one document to another.
- **Importing from Multiple Documents** — import selected page ranges from several source PDFs at specified positions.
- **Importing a Page with Optimization Options** — import a single page with rotation, resource optimization, and grouped form fields.

## Importing a Page Range

This section explains how to import a range of pages from a source PDF into a destination document using the [importPageRange](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument#importpagerange) method. The overload used in this example copies the full range `[0, pageCount-1]` of the source document into the destination.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let destination: PdfDocument = new PdfDocument(data1);
// Load another existing PDF document
let sourceDocument: PdfDocument = new PdfDocument(data2);
// Import the full range of pages from the source document into the destination
destination.importPageRange(sourceDocument, 0, sourceDocument.pageCount-1);
// Save the output PDF
destination.save('Output.pdf');
// Destroy the documents to free resources
destination.destroy();
sourceDocument.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var destination= new ej.pdf.PdfDocument(data1);
// Load another existing PDF document
var sourceDocument = new ej.pdf.PdfDocument(data2);
// Import the full range of pages from the source document into the destination
destination.importPageRange(sourceDocument, 0, sourceDocument.pageCount-1);
// Save the output PDF
destination.save('Output.pdf');
// Destroy the documents to free resources
destination.destroy();
sourceDocument.destroy();

{% endhighlight %}
{% endtabs %}

## Importing from Multiple Documents

This section demonstrates how to import selected page ranges from multiple source PDFs into a destination document at specified positions using the [importPageRange](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument#importpagerange) method and [PdfPageImportOptions](https://ej2.syncfusion.com/documentation/api/pdf/pdfpageimportoptions). The `targetIndex` property controls where the imported pages are inserted in the destination document; when omitted, pages are appended at the end.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPageImportOptions } from '@syncfusion/ej2-pdf';

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

## Importing a Page with Optimization Options

This example imports a single page from a source PDF into a destination document with rotation, resource optimization, and grouped form fields using the [PdfPageImportOptions](https://ej2.syncfusion.com/documentation/api/pdf/pdfpageimportoptions) class. The `targetIndex` property is optional; when omitted, the page is appended at the end of the destination document.

### `PdfPageImportOptions` Properties

| Property | Type | Description |
|----------|------|-------------|
| `targetIndex` | `number` | The destination page index at which the imported page is inserted. Optional; defaults to append. |
| `rotation` | `PdfRotationAngle` | The rotation angle applied to the imported page. |
| `optimizeResources` | `boolean` | When `true`, merges duplicated resources (fonts, images) to reduce file size. |
| `groupFormFields` | `boolean` | When `true`, groups form fields together for consistent appearance across viewers. |

### `PdfRotationAngle` Enum

| Member | Description |
|--------|-------------|
| `angle0` | No rotation (0°). |
| `angle90` | Rotated 90° clockwise. |
| `angle180` | Rotated 180°. |
| `angle270` | Rotated 270° clockwise. |

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfPageImportOptions, PdfRotationAngle } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let destination: PdfDocument = new PdfDocument(data1);
// Load another existing PDF document
let sourceDocument: PdfDocument = new PdfDocument(data2);
// Access the first page of the source document
let pageToImport: PdfPage = sourceDocument.getPage(0);
// Options to customize the support of import PDF pages
let options: PdfPageImportOptions = new PdfPageImportOptions();
// Sets the rotation angle
options.rotation = PdfRotationAngle.angle270;
// Enables resource optimization when importing pages
options.optimizeResources = true;
// Groups form fields together while importing pages
options.groupFormFields = true;
// Import the page into the destination document (appended at the end since targetIndex is not set)
destination.importPage(pageToImport, sourceDocument, options);
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
// Access the first page of the source document
var pageToImport = sourceDocument.getPage(0);
// Options to customize the support of import PDF pages
var options = new ej.pdf.PdfPageImportOptions();
// Sets the rotation angle
options.rotation = PdfRotationAngle.angle270;
// Enables resource optimization when importing pages
options.optimizeResources = true;
// Groups form fields together while importing pages
options.groupFormFields = true;
// Import the page into the destination document (appended at the end since targetIndex is not set)
destination.importPage(pageToImport, sourceDocument, options);
// Save the output PDF
destination.save('Output.pdf');
// Destroy the documents to free resources
destination.destroy();
sourceDocument.destroy();

{% endhighlight %}
{% endtabs %}

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/fluent2/pdf/default)