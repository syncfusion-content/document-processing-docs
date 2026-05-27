---
title: XMP Metadata support in JavaScript PDF library | Syncfusion
description: This section explains how to create, read, modify, and manage XMP metadata in PDF documents using the JavaScript PDF library.
platform: document-processing
control: PDF
documentation: UG
---

# XMP Metadata support in JavaScript PDF library

XMP (Extensible Metadata Platform) is a standardized framework for embedding structured metadata inside documents such as PDF. It uses RDF-based XML to store information like title, author, keywords, creation date, and rights.

In PDF documents, XMP metadata improves searchability, interoperability, and consistency across different tools by storing metadata in a structured and extensible format.

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
var xmp = documentProperties.xmpMetadata;
// Set Basic schema metadata
xmp.basicSchema.creatorTool = 'My App';
xmp.basicSchema.createDate = new Date();
// Set Dublin Core metadata
xmp.dublinCoreSchema.title = { 'en-US': 'Sample PDF' };
xmp.dublinCoreSchema.creator = ['Syncfusion'];
// Save the document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Read and Modifying Metadata of an Existing PDF

Existing PDF metadata can be accessed through the `xmpMetadata` property. Values can be read, updated, and saved back without affecting document content.

This sample demonstrates how to read and update metadata in an existing PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfDocumentInformation, PdfXmpMetadata } from '@syncfusion/ej2-pdf';

// Load existing PDF
let document: PdfDocument = new PdfDocument(existingData);
// Access the document properties
let documentProperties: PdfDocumentInformation = document.getDocumentInformation(false);
// Access metadata
let xmp: PdfXmpMetadata = documentProperties.xmpMetadata;
// Modify metadata
xmp.basicSchema.creatorTool = 'Updated Tool';
xmp.dublinCoreSchema.title = { 'en-US': 'Updated Title' };
// Save changes
document.save('Modified.pdf');
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load existing PDF  
var document = new ej.pdf.PdfDocument(existingData);
// Access document properties  
var documentProperties = document.getDocumentInformation(false);
// Access metadata  
var xmp = documentProperties.xmpMetadata;
// Modify metadata  
xmp.basicSchema.creatorTool = 'Updated Tool';
xmp.dublinCoreSchema.title = { 'en-US': 'Updated Title' };
// Save changes  
document.save('Modified.pdf');
// Destroy the document  
document.destroy();

{% endhighlight %}
{% endtabs %}

## Custom Metadata

Custom metadata values are added directly to the PDF's Info dictionary as key-value pairs. When an XMP metadata instance is present, the same values are also stored under a Custom Schema within the XMP metadata for standardized representation.

This sample demonstrates how to add custom metadata.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfDocumentProperites, PdfCustomMetadata } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data, password);
// Access the document informations
let documentProperties: PdfDocumentProperites = document.getDocumentInformation(false);
// Gets the custom metadata from document information
let custom: PdfCustomMetadata= documentProperties.customMetadata;
// Sets a custom metadata value
custom.set('key','value');
// Sets the document Information
document.setDocumentInformation(documentProperties);
// Saves the document
document.save();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document= new ej.pdf.PdfDocument(data, password);
// Access the document informations
var documentProperties = document.getDocumentInformation(false);
// Gets the custom metadata from document information
let custom = documentProperties.customMetadata;
// Sets a custom metadata value
custom.set('key','value');
// Sets the document Information
document.setDocumentInformation(documentProperties);
// Saves the document
document.save();

{% endhighlight %}
{% endtabs %}

## Removing Custom Metadata

Custom metadata entries can be selectively removed by deleting specific keys from the document metadata collection.

This sample demonstrates how to remove XMP metadata from a PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfDocumentProperites, PdfCustomMetadata } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data, password);
// Access the document informations
let documentProperties: PdfDocumentProperites = document.getDocumentInformation(false);
//Gets the custom metadata from document information
let custom:PdfCustomMetadata = documentProperties.customMetadata;
// Removes the key from the custom metadata
custom.remove('key');
// Sets the document Information
document.setDocumentInformation(documentProperties);
// Saves the document
document.save();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document= new ej.pdf.PdfDocument(data, password);
// Access the document informations
let documentProperties= document.getDocumentInformation(false);
//Gets the custom metadata from document information
let custom = documentProperties.customMetadata;
// Removes the key from the custom metadata
custom.remove('key');
// Sets the document Information
document.setDocumentInformation(documentProperties);
// Saves the document
document.save();

{% endhighlight %}
{% endtabs %}

## Supported Schema types

Different schema types define categories of metadata used in PDF documents.

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
let document: PdfDocument = new PdfDocument(data, password);
// Access document information 
let documentProperties: PdfDocumentInformation = document.getDocumentInformation(false);
// Get XMP metadata 
let xmpMetadata = documentProperties.xmpMetadata;
// Modify metadata (set creator tool) 
xmpMetadata.basicSchema.creatorTool = 'MyApp';
// Save the updated document 
document.save('output.pdf');
// Destroy the document 
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document 
var document = new ej.pdf.PdfDocument(data, password);
// Access document information 
var documentProperties = document.getDocumentInformation(false);
// Get XMP metadata 
var xmpMetadata = documentProperties.xmpMetadata;
// Modify metadata (set creator tool) 
xmpMetadata.basicSchema.creatorTool = 'MyApp';
// Save the updated document 
document.save('output.pdf');
// Destroy the document 
document.destroy();

{% endhighlight %}
{% endtabs %}

## Dublin Core Schema

Dublin Core Schema is used to store descriptive metadata such as title, author, subject, and description.

This sample demonstrates how to set Dublin Core Schema metadata.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfDocumentInformation, PdfXmpMetadata} from '@syncfusion/ej2-pdf';

// Load an existing PDF document  
let document: PdfDocument = new PdfDocument(data, password);
// Access document information  
let documentProperties: PdfDocumentInformation = document.getDocumentInformation(false);
// Get XMP metadata  
let xmp: PdfXmpMetadata = documentProperties.xmpMetadata;
// Set Dublin Core metadata  
xmp.dublinCoreSchema.creator = ['Author Name'];
xmp.dublinCoreSchema.title = { 'en-US': 'Sample Title' };
// Save the updated document  
document.save('output.pdf');
// Destroy the document  
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document  
var document = new ej.pdf.PdfDocument(data, password);
// Access document information  
var documentProperties = document.getDocumentInformation(false);
// Get XMP metadata  
var xmp = documentProperties.xmpMetadata;
// Set Dublin Core metadata  
xmp.dublinCoreSchema.creator = ['Author Name'];
xmp.dublinCoreSchema.title = { 'en-US': 'Sample Title' };
// Save the updated document  
document.save('output.pdf');
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
let document: PdfDocument = new PdfDocument(data, password);
// Access document information  
let documentProperties: PdfDocumentInformation = document.getDocumentInformation(false);
// Get XMP metadata  
let xmpMetadata: PdfXmpMetadata = documentProperties.xmpMetadata;
// Set job references  
xmpMetadata.basicJobTicketSchema.jobRef = ['JobA', 'JobB'];
// Save the updated document  
document.save('output.pdf');
// Destroy the document  
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document  
var document = new ej.pdf.PdfDocument(data, password);
// Access document information  
var documentProperties = document.getDocumentInformation(false);
// Get XMP metadata  
var xmpMetadata = documentProperties.xmpMetadata;
// Set job references  
xmpMetadata.basicJobTicketSchema.jobRef = ['JobA', 'JobB'];
// Save the updated document  
document.save('output.pdf');
// Destroy the document  
document.destroy();

{% endhighlight %}
{% endtabs %}

## Rights Management Schema

Rights Management Schema is used to store metadata related to document ownership, usage rights, and permissions.

This sample demonstrates how to set Rights Management Schema metadata.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfDocumentInformation, PdfXmpMetadata } from '@syncfusion/ej2-pdf';

// Load an existing PDF document  
let document: PdfDocument = new PdfDocument(data, password);
// Access document information  
let documentProperties: PdfDocumentInformation = document.getDocumentInformation(false);
// Get XMP metadata  
let xmp: PdfXmpMetadata = documentProperties.xmpMetadata;
// Set rights information  
xmp.rightsManagementSchema.isMarked = true;
// Save the updated document  
document.save('output.pdf');
// Destroy the document  
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document  
var document = new ej.pdf.PdfDocument(data, password);
// Access document information  
var documentProperties = document.getDocumentInformation(false);
// Get XMP metadata  
var xmp = documentProperties.xmpMetadata;
// Set rights information  
xmp.rightsManagementSchema.isMarked = true;
// Save the updated document  
document.save('output.pdf');
// Destroy the document  
document.destroy();

{% endhighlight %}
{% endtabs %}

## PDF Schema

PDF Schema is used to store PDF-specific metadata such as keywords, producers, and version details.

This sample demonstrates how to set PDF schema metadata

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfXmpMetadata } from '@syncfusion/ej2-pdf';

// Load an existing PDF document  
let document: PdfDocument = new PdfDocument(data, password);
// Create XMP metadata  
let xmp: PdfXmpMetadata = new PdfXmpMetadata();
// Assign metadata to document  
document.xmpMetadata = xmp;
// Set PDF keywords  
xmp.pdfSchema.keywords = 'sample, pdf, metadata';
// Save the document  
document.save('output.pdf');
// Destroy the document  
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document  
var document = new ej.pdf.PdfDocument(data, password);
// Create XMP metadata  
var xmp = new ej.pdf.PdfXmpMetadata();
// Assign metadata to document  
document.xmpMetadata = xmp;
// Set PDF keywords  
xmp.pdfSchema.keywords = 'sample, pdf, metadata';
// Save the document  
document.save('output.pdf');
// Destroy the document  
document.destroy();

{% endhighlight %}
{% endtabs %}

## Paged Text Schema

Paged Text Schema is used to store metadata related to the document’s paginated structure, such as page count and layout details.

This sample demonstrates how to set Paged Text schema metadata.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfDocumentInformation, PdfXmpMetadata } from '@syncfusion/ej2-pdf';

// Load an existing PDF document  
let document: PdfDocument = new PdfDocument(data, password);
// Access document information  
let documentProperties: PdfDocumentInformation = document.getDocumentInformation(false);
// Get XMP metadata  
let xmp: PdfXmpMetadata = documentProperties.xmpMetadata;
// Set page count  
xmp.pagedTextSchema.pageCount = 5;
// Save the updated document  
document.save('output.pdf');
// Destroy the document  
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document  
var document = new ej.pdf.PdfDocument(data, password);
// Access document information  
var documentProperties = document.getDocumentInformation(false);
// Get XMP metadata  
var xmp = documentProperties.xmpMetadata;
// Set page count  
xmp.pagedTextSchema.pageCount = 5;
// Save the updated document  
document.save('output.pdf');
// Destroy the document  
document.destroy();

{% endhighlight %}
{% endtabs %}

## Custom Schema

Custom Schema allows defining application-specific metadata using custom namespaces and flexible key-value storage.

This sample demonstrates how to create and use a custom schema.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfDocumentInformation, PdfCustomSchema } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data, password);
// Access the document properties
let documentProperties: PdfDocumentInformation = document.getDocumentInformation(false);
// Get XMP metadata
let xmpMetadata = documentProperties.xmpMetadata;
// Create a custom schema
let custom: PdfCustomSchema = new PdfCustomSchema(
xmpMetadata,
'cust',
'http://custom.example.com/ns/'
);
// Add custom metadata value
custom.customData.set('appVersion', '1.0.0');
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
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
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}
