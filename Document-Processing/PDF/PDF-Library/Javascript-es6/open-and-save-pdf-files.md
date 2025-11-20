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

 ## Opening an Existing PDF Document from a Uint8Array

Open an existing PDF document using the `PdfDocument` class with the specified Uint8Array data.

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