---
layout: post
title: Open and save PDF files in JavaScript PDF library | Syncfusion
description: Learn how to load and save PDF files in the Syncfusion JavaScript PDF library from URLs, base64 strings, and databases by configuring the required server-backed services.
platform: document-processing
control: PDF
documentation: ug
domainurl: ##DomainURL##
---

# Open and save PDF files in JavaScript PDF library

## Opening an existing PDF document

Open an existing PDF document using the `PdfDocument` class with the specified string data.

```javascript
// Load an existing PDF document from string data
let document: PdfDocument = new PdfDocument("Input.pdf");

```

 ## Opening an existing PDF document from a byte array

Open an existing PDF document using the `PdfDocument` class with the specified byte array.

```javascript
// Load the PDF data from a file
const inputPDFByteArray: Uint8Array = new Uint8Array(fs.readFileSync('Input.pdf'));
// Create a new PdfDocument instance using the byte array
const loadedDocument = new PdfDocument(inputPDFByteArray);
```

## Opening an Encrypted PDF document

Open an encrypted PDF document using the `PdfDocument` class by providing the correct password.

```javascript
// Load an existing PDF document from string data
let document: PdfDocument = new PdfDocument("Input.pdf", "password");
```

## Opening an Encrypted PDF document from a byte array

Open an encrypted PDF document from a byte array using the `PdfDocument` class by providing the correct password.

```javascript
// Load the PDF data from a file
const inputPDFByteArray: Uint8Array = new Uint8Array(fs.readFileSync('Input.pdf'));
// Load an existing PDF document from string data
let document: PdfDocument = new PdfDocument(inputPDFByteArray, "password");
```

## Saving a PDF document

Save the manipulated PDF document using the `Save` method of `PdfDocument` class with the specified string data.

```javascript
// Load an existing PDF document from string data
let document: PdfDocument = new PdfDocument("Input.pdf");
//To-Do some manipulation
//To-Do some manipulation
// Save the PDF document
document.save('Output.pdf');
```

## Saving a PDF Document from a byte array

Open an existing PDF document using the `PdfDocument` class with the specified byte array.

```javascript
// Load the PDF data from a file
const inputPDFByteArray: Uint8Array = new Uint8Array(fs.readFileSync('Input.pdf'));
// Create a new PdfDocument instance using the byte array
const loadedDocument = new PdfDocument(inputPDFByteArray);
//To-Do some manipulation
//To-Do some manipulation
// Save the document
let data: Uint8Array = document.save();
```

## Closing a document

After the document manipulation and save operation are completed, you should close the instance of `PdfDocument`, in order to release all the memory consumed by PDF DOM. The following code example illustrates how to destroy a `PdfDocument` instance.

```javascript
// Load an existing PDF document from string data
let document: PdfDocument = new PdfDocument("Input.pdf");
//To-Do some manipulation
//To-Do some manipulation
// Save the PDF document
document.save('Output.pdf');
// Destroy the document
document.destroy();
```
