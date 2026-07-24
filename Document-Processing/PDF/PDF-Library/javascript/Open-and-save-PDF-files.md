---
layout: post
title: Open and save PDF files using JavaScript PDF Library | Syncfusion
canonical_url: https://www.syncfusion.com/document-sdk/javascript-pdf-library
description: Learn how to load and save PDFs in the JavaScript PDF Library using Base64 strings or Uint8Array data.
platform: document-processing
control: PDF
documentation: ug
---

# Open and save PDF files in JavaScript PDF Library

The [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) enables you to load existing PDF documents, modify their content, and save the updated document. This guide demonstrates the complete workflow, from loading and editing a PDF to saving and disposing of document resources.

## Opening an existing PDF document

Open an existing PDF document by passing the PDF data to the [PdfDocument](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument) constructor. The constructor accepts PDF data as a Base64-encoded string or a `Uint8Array`, and supports additional optional parameters for password and permissions. The following subsections demonstrate each data format.

### Using Base64 String

Provide the PDF data as a Base64-encoded string to the `PdfDocument` constructor.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

// Sample Base64-encoded PDF data
let data: string = 'JVBERi0xLjcNJeLjz9MNCjEyNSAw...........TU3MTQNCiUlRU9GDQo=';
// Load an existing PDF document from a Base64 string
let document: PdfDocument = new PdfDocument(data);

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

var data = 'JVBERi0xLjcNJeLjz9MNCjEyNSAw...........TU3MTQNCiUlRU9GDQo=';
// Load an existing PDF document from data as Base64 string
var document = new ej.pdf.PdfDocumentPdfDocument(data);
// Load an existing PDF document from a Base64 string
var document = new ej.pdf.PdfDocument(data);

{% endhighlight %}
{% endtabs %}

### Using Uint8Array

Open an existing PDF document using the [PdfDocument](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument) class with the specified PDF data as Uint8Array.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

// Sample Uint8Array data
let binaryData: Uint8Array = Uint8Array.from(data);
// Load an existing PDF document from a Uint8Array
let document: PdfDocument = new PdfDocument(binaryData);

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

var binaryData = Uint8Array.from(data);
// Load an existing PDF document from a Uint8Array
var document = new ej.pdf.PdfDocument(binaryData);

{% endhighlight %}
{% endtabs %}

## Opening an encrypted PDF document with password

Open an encrypted PDF document by providing the correct password to the [PdfDocument](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument) constructor. The library supports standard PDF encryption algorithms including AES 128/256-bit and RC4 40/128-bit.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

// Load an encrypted PDF document with a user password
let document: PdfDocument = new PdfDocument(data, 'password');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an encrypted PDF document with a user password
var document = new ej.pdf.PdfDocument(data, 'password');

{% endhighlight %}
{% endtabs %}

## Saving and downloading a PDF document in the browser

Save and download the PDF document directly from the browser by passing a filename to the [save](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument#save) method. The browser triggers a file download with the specified name.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// To-Do: perform manipulation on the document
// Save and download the PDF document with the specified filename
document.save('output.pdf');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// To-Do: perform manipulation on the document
// Save and download the PDF document with the specified filename
document.save('output.pdf');

{% endhighlight %}
{% endtabs %}

## Saving a PDF document to a byte array

Save the modified PDF document to memory as a `Uint8Array` using the parameterless [save](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument#save) overload. This is useful when you want to forward the PDF to a server, store it in a database, or process it further before downloading.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// To-Do: perform manipulation on the document
// Save the PDF document and obtain a Uint8Array
let bytes: Uint8Array = document.save();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// To-Do: perform manipulation on the document
// Save the PDF document and obtain a Uint8Array
var bytes = document.save();

{% endhighlight %}
{% endtabs %}

## Closing a PDF document

After every load and save operation described above, you must call the `destroy` method on the [PdfDocument](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument) instance to release the memory held by the PDF document instance. Failing to do so can lead to memory leaks, especially in long-running applications or when processing many documents in sequence.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// To-Do: perform manipulation on the document
// Save the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// To-Do: perform manipulation on the document
// Save the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/tailwind3/pdf/default.html)