---
title: XMP Metadata support in JavaScript PDF Library | Syncfusion
canonical_url: https://www.syncfusion.com/document-sdk/javascript-pdf-library
description: Learn to create, read, edit, and manage XMP metadata in PDF documents with JavaScript PDF Library, including schemas, custom metadata, and best practices
platform: document-processing
control: PDF
documentation: UG
---

# XMP Metadata support in JavaScript PDF Library

XMP (Extensible Metadata Platform) is a standardized framework for embedding structured metadata inside documents such as PDF. It uses RDF-based XML to store information like title, author, keywords, creation date, and rights.

In PDF files, XMP metadata is stored inside the PDF's Catalog dictionary as an XMP packet. It helps make content easier to find, works well across different tools, and keeps information consistent by storing details in a clear and flexible format.

## Adding Metadata to a New PDF Document

XMP metadata can be added to a newly created PDF document using the `xmpMetadata` property in `PdfDocumentInformation`. By assigning values through relevant schema objects, the metadata is automatically serialized and embedded into the PDF when the document is saved.

This example illustrates how to generate a new PDF and include XMP metadata by utilizing the Basic and Dublin Core schemas.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfXmpMetadata, PdfDocumentInformation } from '@syncfusion/ej2-pdf';

// Create PDF document
let document: PdfDocument = new PdfDocument();
// Access the document properties
let documentProperties: PdfDocumentInformation = document.getDocumentInformation(false);
// Gets XMP metadata
let xmpMetadata: PdfXmpMetadata = documentProperties.xmpMetadata;
// Set basic schema metadata
xmpMetadata.basicSchema.creatorTool = 'My App';
xmpMetadata.basicSchema.createDate = new Date();
xmpMetadata.basicSchema.modifyDate = new Date();
// Set Dublin Core metadata
xmpMetadata.dublinCoreSchema.title = { 'en-US': 'Sample PDF' };
xmpMetadata.dublinCoreSchema.creator = ['Syncfusion'];
// Save document
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create PDF document
var document = new ej.pdf.PdfDocument();
// Access document properties
var documentProperties = document.getDocumentInformation(false);
// Get existing XMP metadata
var xmpMetadata = documentProperties.xmpMetadata;
// Set Basic schema metadata
xmpMetadata.basicSchema.creatorTool = 'My App';
xmpMetadata.basicSchema.createDate = new Date();
xmpMetadata.basicSchema.modifyDate = new Date();
// Set Dublin Core metadata
xmpMetadata.dublinCoreSchema.title = { 'en-US': 'Sample PDF' };
xmpMetadata.dublinCoreSchema.creator = ['Syncfusion'];
// Save the document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Reading and Modifying Metadata of an Existing PDF

Existing PDF metadata can be accessed through the `xmpMetadata` property. Values can be read, updated, and saved back without affecting document content.

This sample demonstrates how to read and update metadata in an existing PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfDocumentInformation, PdfXmpMetadata } from '@syncfusion/ej2-pdf';

// Load existing PDF
let document: PdfDocument = new PdfDocument(data);
// Access the document properties
let documentProperties: PdfDocumentInformation = document.getDocumentInformation(false);
// Access metadata
let xmpMetadata: PdfXmpMetadata = documentProperties.xmpMetadata;
// Modify metadata
xmpMetadata.basicSchema.creatorTool = 'Updated Tool';
xmpMetadata.dublinCoreSchema.title = { 'en-US': 'Updated Title' };
// Save changes
document.save('Modified.pdf');
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load existing PDF
var document = new ej.pdf.PdfDocument(data);
// Access document properties
var documentProperties = document.getDocumentInformation(false);
// Access metadata
var xmpMetadata = documentProperties.xmpMetadata;
// Modify metadata
xmpMetadata.basicSchema.creatorTool = 'Updated Tool';
xmpMetadata.dublinCoreSchema.title = { 'en-US': 'Updated Title' };
// Save changes
document.save('Modified.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Custom Metadata

Custom metadata values are added directly to the PDF's **Info dictionary** as key-value pairs. When an XMP metadata instance is present, the same values are also stored under a Custom Schema within the XMP metadata for standardized representation.

This sample demonstrates how to add custom metadata.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfDocumentProperties, PdfCustomMetadata } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access the document information
let documentProperties: PdfDocumentProperties = document.getDocumentInformation(false);
// Gets the custom metadata from document information
let custom: PdfCustomMetadata = documentProperties.customMetadata;
// Sets a custom metadata value
custom.set('key', 'value');
// Sets the document information
document.setDocumentInformation(documentProperties);
// Saves the document
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access the document information
var documentProperties = document.getDocumentInformation(false);
// Gets the custom metadata from document information
var custom = documentProperties.customMetadata;
// Sets a custom metadata value
custom.set('key', 'value');
// Sets the document information
document.setDocumentInformation(documentProperties);
// Saves the document
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% endtabs %}

## Removing Custom Metadata

Custom metadata entries can be selectively removed by deleting specific keys from the document metadata collection.

This sample demonstrates how to remove custom metadata from a PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfDocumentProperties, PdfCustomMetadata } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access the document information
let documentProperties: PdfDocumentProperties = document.getDocumentInformation(false);
// Gets the custom metadata from document information
let custom: PdfCustomMetadata = documentProperties.customMetadata;
// Removes the key from the custom metadata
custom.remove('key');
// Sets the document information
document.setDocumentInformation(documentProperties);
// Saves the document
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access the document information
var documentProperties = document.getDocumentInformation(false);
// Gets the custom metadata from document information
var custom = documentProperties.customMetadata;
// Removes the key from the custom metadata
custom.remove('key');
// Sets the document information
document.setDocumentInformation(documentProperties);
// Saves the document
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% endtabs %}

## Supported Schema Types and Properties

Different schema types define categories of metadata used in PDF documents. The following tables list the available properties for each schema.

Use the following guide to select the right schema for your metadata needs.

| Schema Type              | Description                                      |
|--------------------------|--------------------------------------------------|
| Basic Schema             | General document metadata (creator, dates, tool) |
| Dublin Core Schema       | Descriptive metadata (title, author)             |
| Job Ticket Schema        | Print workflow metadata                          |
| Rights Management Schema | Ownership and permissions                        |
| PDF Schema               | PDF-specific properties (producer, version)      |
| Paged Text Schema        | Page content and structure-related metadata      |
| Custom Schema            | User-defined metadata with custom namespaces     |

## Basic Schema

Basic schema is used to store general document metadata such as creator tool, creation date, and modification date.

This sample demonstrates how to set basic schema metadata.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfDocumentInformation } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access document information
let documentProperties: PdfDocumentInformation = document.getDocumentInformation(false);
// Get XMP metadata
let xmpMetadata = documentProperties.xmpMetadata;
// Set basic schema metadata
xmpMetadata.basicSchema.creatorTool = 'MyApp';
xmpMetadata.basicSchema.createDate = new Date();
xmpMetadata.basicSchema.modifyDate = new Date();
// Save the updated document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access document information
var documentProperties = document.getDocumentInformation(false);
// Get XMP metadata
var xmpMetadata = documentProperties.xmpMetadata;
// Set basic schema metadata
xmpMetadata.basicSchema.creatorTool = 'MyApp';
xmpMetadata.basicSchema.createDate = new Date();
xmpMetadata.basicSchema.modifyDate = new Date();
// Save the updated document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Dublin Core Schema

Dublin Core Schema is used to store descriptive metadata such as title, author, subject, and description.

This sample demonstrates how to set Dublin Core Schema metadata.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfDocumentInformation, PdfXmpMetadata } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access document information
let documentProperties: PdfDocumentInformation = document.getDocumentInformation(false);
// Get XMP metadata
let xmpMetadata: PdfXmpMetadata = documentProperties.xmpMetadata;
// Set Dublin Core metadata
xmpMetadata.dublinCoreSchema.creator = ['Author Name'];
xmpMetadata.dublinCoreSchema.title = { 'en-US': 'Sample Title' };
// Save the updated document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access document information
var documentProperties = document.getDocumentInformation(false);
// Get XMP metadata
var xmpMetadata = documentProperties.xmpMetadata;
// Set Dublin Core metadata
xmpMetadata.dublinCoreSchema.creator = ['Author Name'];
xmpMetadata.dublinCoreSchema.title = { 'en-US': 'Sample Title' };
// Save the updated document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Job Ticket Schema

Job Ticket Schema is used to store metadata related to print jobs and production workflow instructions.

This sample demonstrates how to set Job Ticket Schema metadata.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfDocumentInformation, PdfXmpMetadata } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access document information
let documentProperties: PdfDocumentInformation = document.getDocumentInformation(false);
// Get XMP metadata
let xmpMetadata: PdfXmpMetadata = documentProperties.xmpMetadata;
// Set job references
xmpMetadata.basicJobTicketSchema.jobRef = ['JobA', 'JobB'];
xmpMetadata.basicJobTicketSchema.jobName = 'Quarterly Report';
// Save the updated document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access document information
var documentProperties = document.getDocumentInformation(false);
// Get XMP metadata
var xmpMetadata = documentProperties.xmpMetadata;
// Set job references
xmpMetadata.basicJobTicketSchema.jobRef = ['JobA', 'JobB'];
xmpMetadata.basicJobTicketSchema.jobName = 'Quarterly Report';
// Save the updated document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Rights Management Schema

Rights Management Schema is used to store metadata related to document ownership, usage rights, and permissions.

This sample demonstrates how to mark a document as rights-managed.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfDocumentInformation, PdfXmpMetadata } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access document information
let documentProperties: PdfDocumentInformation = document.getDocumentInformation(false);
// Get XMP metadata
let xmpMetadata: PdfXmpMetadata = documentProperties.xmpMetadata;
// Mark document as rights-managed
xmpMetadata.rightsManagementSchema.isMarked = true;
xmpMetadata.rightsManagementSchema.mark = 'Copyright 2026 Syncfusion';
xmpMetadata.rightsManagementSchema.webStatement = 'https://example.com/rights';
// Save the updated document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access document information
var documentProperties = document.getDocumentInformation(false);
// Get XMP metadata
var xmpMetadata = documentProperties.xmpMetadata;
// Mark document as rights-managed
xmpMetadata.rightsManagementSchema.isMarked = true;
xmpMetadata.rightsManagementSchema.mark = 'Copyright 2026 Syncfusion';
xmpMetadata.rightsManagementSchema.webStatement = 'https://example.com/rights';
// Save the updated document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## PDF Schema

PDF Schema is used to store PDF-specific metadata such as keywords, producer, and version details.

This sample demonstrates how to set PDF schema metadata.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfXmpMetadata } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Create XMP metadata
let xmpMetadata: PdfXmpMetadata = new PdfXmpMetadata();
// Assign metadata to document
document.xmpMetadata = xmpMetadata;
// Set PDF keywords
xmpMetadata.pdfSchema.keywords = 'sample, pdf, metadata';
xmpMetadata.pdfSchema.producer = 'Syncfusion PDF Library';
xmpMetadata.pdfSchema.pdfVersion = '1.7';
// Save the document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Create XMP metadata
var xmpMetadata = new ej.pdf.PdfXmpMetadata();
// Assign metadata to document
document.xmpMetadata = xmpMetadata;
// Set PDF keywords
xmpMetadata.pdfSchema.keywords = 'sample, pdf, metadata';
xmpMetadata.pdfSchema.producer = 'Syncfusion PDF Library';
xmpMetadata.pdfSchema.pdfVersion = '1.7';
// Save the document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Paged Text Schema

Paged Text Schema is used to store metadata related to the document's paginated structure, such as page count and layout details.

This sample demonstrates how to set Paged Text schema metadata.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfDocumentInformation, PdfXmpMetadata } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access document information
let documentProperties: PdfDocumentInformation = document.getDocumentInformation(false);
// Get XMP metadata
let xmpMetadata: PdfXmpMetadata = documentProperties.xmpMetadata;
// Set page count from the actual document page count
xmpMetadata.pagedTextSchema.pageCount = document.pageCount.toString();
// Save the updated document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access document information
var documentProperties = document.getDocumentInformation(false);
// Get XMP metadata
var xmpMetadata = documentProperties.xmpMetadata;
// Set page count from the actual document page count
xmpMetadata.pagedTextSchema.pageCount = document.pageCount.toString();
// Save the updated document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Custom XMP Schema

Custom XMP Schema allows defining application-specific metadata using custom namespaces and flexible key-value storage. Unlike the [Custom Metadata](#custom-metadata) section (which writes to the PDF Info dictionary), this approach stores values inside the XMP packet under a user-defined namespace.

This sample demonstrates how to create and use a custom XMP schema.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfDocumentInformation, PdfCustomSchema, PdfXmpMetadata } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access the document properties
let documentProperties: PdfDocumentInformation = document.getDocumentInformation(false);
// Get XMP metadata
let xmpMetadata: PdfXmpMetadata = documentProperties.xmpMetadata;
// Create a custom schema
let custom: PdfCustomSchema = new PdfCustomSchema(
    xmpMetadata,
    'cust',
    'http://custom.example.com/ns/'
);
// Add custom metadata value
custom.customData.set('appVersion', '1.0.0');
// Save the document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access the document properties
var documentProperties = document.getDocumentInformation(false);
// Get XMP metadata
var xmpMetadata = documentProperties.xmpMetadata;
// Create a custom schema
var custom = new ej.pdf.PdfCustomSchema(
    xmpMetadata,
    'cust',
    'http://custom.example.com/ns/'
);
// Add custom metadata value
custom.customData.set('appVersion', '1.0.0');
// Save the document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/tailwind3/pdf/default.html)