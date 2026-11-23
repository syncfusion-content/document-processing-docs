---
title: Linearization (Fast Web View) in JavaScript PDF | Syncfusion
description: Optimize PDF documents for fast web view by enabling linearization using the Syncfusion JavaScript PDF Library.
platform: document-processing
control: PDF
documentation: UG
---

# Linearization (Fast Web View) in JavaScript PDF

A [linearized PDF](https://www.adobe.com/content/dam/acom/en/devnet/pdf/pdfs/PDF32000_2008.pdf), also known as **Fast Web View**, is a PDF file that is organized so that the first page can be rendered by a web browser or PDF viewer before the entire file is downloaded. Linearization rearranges the objects inside a PDF so that the page tree, cross-reference, and other critical structures are written first, followed by the page content. This is especially useful for large documents served over the web, because users can begin viewing the first page while the rest of the file is still being transferred.

The [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) supports saving both newly created and existing PDF documents in a linearized format through the [linearization](https://ej2.syncfusion.com/documentation/api/pdf/pdffilestructure) property of the [PdfFileStructure](https://ej2.syncfusion.com/documentation/api/pdf/pdffilestructure) class.

N> By default, `linearization` is set to `false`. Set it to `true` before calling `save` to produce a linearized PDF.

## Creating a linearized PDF document

The following code example shows how to create a new linearized PDF document and save it to a file.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument } from '@syncfusion/ej2-pdf';

// Create a new PDF document.
let document: PdfDocument = new PdfDocument();

// Add a page.
document.addPage();

// Set linearization to true for fast web view.
document.fileStructure.linearization = true;

// Save the document to a file.
document.save('linearized.pdf');

// Close the document.
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document.
var document = new ej.pdf.PdfDocument();

// Add a page.
document.addPage();

// Set linearization to true for fast web view.
document.fileStructure.linearization = true;

// Save the document to a file.
document.save('linearized.pdf');

// Close the document.
document.destroy();

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master).

## Linearizing an existing PDF document

You can load an existing PDF document, enable linearization, and save it to a new file. This is useful when you want to optimize documents that were created by another tool or by an earlier version of the Syncfusion PDF Library.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument } from '@syncfusion/ej2-pdf';

// Load an existing PDF document.
let document: PdfDocument = new PdfDocument(data);

// Set linearization to true for fast web view.
document.fileStructure.linearization = true;

// Save the document to a file.
document.save('linearized.pdf');

// Close the document.
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document.
var document = new ej.pdf.PdfDocument(data);

// Set linearization to true for fast web view.
document.fileStructure.linearization = true;

// Save the document to a file.
document.save('linearized.pdf');

// Close the document.
document.destroy();

{% endhighlight %}
{% endtabs %}

## Properties

The following property of the [PdfFileStructure](https://ej2.syncfusion.com/documentation/api/pdf/pdffilestructure) class controls linearization.

| Property | Type | Description |
|---|---|---|
| [linearization](https://ej2.syncfusion.com/documentation/api/pdf/pdffilestructure) | boolean | Gets or sets a value indicating whether the document is saved using a linearized PDF structure for Fast Web View. The default value is `false`. |

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/document-library/javascript/#/tailwind3/pdf/default.html)
