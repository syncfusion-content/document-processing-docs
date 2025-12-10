---
layout: post
title: Open and save PDF files using JavaScript PDF library | Syncfusion
description: Learn to load and save PDFs in Syncfusion JavaScript PDF library using data as base64 strings or byte arrays.
platform: document-processing
control: PDF
documentation: ug
domainurl: ##DomainURL##
---

# Open and save PDF files in JavaScript PDF library

## Opening an existing PDF document

Open an existing PDF document using the `PdfDocument` class with the specified PDF data.

```typescript
// Load an existing PDF document from string data
let document: PdfDocument = new PdfDocument(data);
```

The PdfDocument constructor can accept PDF data in either Base64 string or Uint8Array format. Here’s a quick example for both approaches:

### Using Base64 String

Open an existing PDF document using the `PdfDocument` class with the specified PDF data as Base64 string.

```javascript
let data: string = 'JVBERi0xLjcNJeLjz9MNCjEyNSAw...........TU3MTQNCiUlRU9GDQo=';
// Load an existing PDF document from data as Base64 string
let document: PdfDocument = new PdfDocument(data);
```

### Using Uint8Array

Open an existing PDF document using the `PdfDocument` class with the specified PDF data as Uint8Array.

```javascript
let binaryData: Uint8Array = Uint8Array.from(data);
// Load an existing PDF document from data as Uint8Array
let document: PdfDocument = new PdfDocument(binaryData);
```

## Opening an Encrypted PDF document with password

Open an encrypted PDF document using the `PdfDocument` class by providing the correct password.

```javascript
// Load an existing PDF document with password
let document: PdfDocument = new PdfDocument(data, "password");
```

## Save and download a PDF document in browser environment

Save and download the PDF document using the `save` method of `PdfDocument` class with the specified file name.

```javascript
// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// To-Do some manipulation
// Save and download the PDF document to the specified filename.
document.save('output.pdf');
```

## Saving a PDF document to byte array

Save the modified PDF document to the specified byte array using the `save` method available in `PdfDocument` class.

```javascript
// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
//To-Do some manipulation
// Save and get PDF data as byte array.
let data: Uint8Array = document.save();
```

## Closing a document

After the document manipulation and save operation are completed, you should close the instance of `PdfDocument`, in order to release all the memory consumed by PDF DOM. The following code example illustrates how to destroy a `PdfDocument` instance.

```javascript
// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
//To-Do some manipulation
// Save the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();
```