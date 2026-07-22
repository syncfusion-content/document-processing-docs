---
title: XMP Metadata support in JavaScript PDF Library | Syncfusion
description: This section explains how to create, read, modify, and manage XMP metadata in PDF documents using the JavaScript PDF Library. It covers the supported XMP schemas, custom metadata, and best practices for embedding structured metadata in PDFs.
platform: document-processing
control: PDF
documentation: UG
---

# XMP Metadata support in JavaScript PDF Library

XMP (Extensible Metadata Platform) is a standardized framework for embedding structured metadata inside documents such as PDF. It uses RDF-based XML to store information like title, author, keywords, creation date, and rights.

In PDF files, XMP metadata is stored inside the PDF's Catalog dictionary as an XMP packet. It helps make content easier to find, works well across different tools, and keeps information consistent by storing details in a clear and flexible format.

## Choosing a Schema

Use the following guide to select the right schema for your metadata needs.

| If you need to store… | Use this Schema |
|---|---|
| Creator tool, creation/modification dates | Basic Schema |
| Title, author, subject, description | Dublin Core Schema |
| PDF-specific properties (keywords, producer, version) | PDF Schema |
| Print job or workflow information | Job Ticket Schema |
| Ownership, rights, and permissions | Rights Management Schema |
| Page count and structural metadata | Paged Text Schema |
| Application-specific data with a custom namespace | Custom XMP Schema |
| Simple key-value pairs in the PDF Info dictionary | Custom Metadata (Info Dictionary) |

> **Tip:** When in doubt, use **Dublin Core** for descriptive metadata and **Basic** for date and tool information. These two schemas cover the most common use cases.

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

var ej = require('@syncfusion/ej2-pdf');

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

### Verifying the Metadata

After saving, you can re-open the file to confirm the metadata was written correctly.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import * as fs from 'fs';

// Re-open the saved PDF
const buffer: Uint8Array = fs.readFileSync('Output.pdf');
let verifyDoc: PdfDocument = new PdfDocument(buffer);
let verifyInfo: PdfDocumentInformation = verifyDoc.getDocumentInformation(false);
console.log(verifyInfo.xmpMetadata.dublinCoreSchema.title);
verifyDoc.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

var fs = require('fs');
var buffer = fs.readFileSync('Output.pdf');
var verifyDoc = new ej.pdf.PdfDocument(buffer);
var verifyInfo = verifyDoc.getDocumentInformation(false);
console.log(verifyInfo.xmpMetadata.dublinCoreSchema.title);
verifyDoc.destroy();

{% endhighlight %}
{% endtabs %}

You can also open the saved PDF in any PDF reader (such as Adobe Acrobat) and inspect **File → Properties → Additional Metadata** to view the XMP packet.

## Reading and Modifying Metadata of an Existing PDF

Existing PDF metadata can be accessed through the `xmpMetadata` property. Values can be read, updated, and saved back without affecting document content.

This sample demonstrates how to read and update metadata in an existing PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfDocumentInformation, PdfXmpMetadata } from '@syncfusion/ej2-pdf';
import * as fs from 'fs';

// Load existing PDF
const data: Uint8Array = fs.readFileSync('input.pdf');
let document: PdfDocument = new PdfDocument(data);
// Access the document properties
let documentProperties: PdfDocumentInformation = document.getDocumentInformation(false);
// Access metadata
let xmpMetadata: PdfXmpMetadata = documentProperties.xmpMetadata;
// Modify metadata
xmpMetadata.basicSchema.creatorTool = 'Updated Tool';
xmpMetadata.dublinCoreSchema.title = { 'en-US': 'Updated Title' };
// Persist updated document information
document.setDocumentInformation(documentProperties);
// Save changes
document.save('Modified.pdf');
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

var fs = require('fs');
var ej = require('@syncfusion/ej2-pdf');

// Load existing PDF
var data = fs.readFileSync('input.pdf');
var document = new ej.pdf.PdfDocument(data);
// Access document properties
var documentProperties = document.getDocumentInformation(false);
// Access metadata
var xmpMetadata = documentProperties.xmpMetadata;
// Modify metadata
xmpMetadata.basicSchema.creatorTool = 'Updated Tool';
xmpMetadata.dublinCoreSchema.title = { 'en-US': 'Updated Title' };
// Persist updated document information
document.setDocumentInformation(documentProperties);
// Save changes
document.save('Modified.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

> **Note:** `setDocumentInformation` is required whenever you modify `PdfDocumentInformation` (including XMP and custom metadata). Without it, the changes will not be persisted when you call `save()`.

## Custom Metadata

Custom metadata values are added directly to the PDF's **Info dictionary** as key-value pairs. When an XMP metadata instance is present, the same values are also stored under a Custom Schema within the XMP metadata for standardized representation.

> **Important:** This section describes the **Info dictionary** approach using `PdfCustomMetadata`. For **XMP custom namespaces**, see the [Custom Schema](#custom-xmp-schema) section.

This sample demonstrates how to add custom metadata.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfDocumentProperties, PdfCustomMetadata } from '@syncfusion/ej2-pdf';
import * as fs from 'fs';

// Load an existing PDF document
const data: Uint8Array = fs.readFileSync('input.pdf');
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

var fs = require('fs');
var ej = require('@syncfusion/ej2-pdf');

// Load an existing PDF document
var data = fs.readFileSync('input.pdf');
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
import * as fs from 'fs';

// Load an existing PDF document
const data: Uint8Array = fs.readFileSync('input.pdf');
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

var fs = require('fs');
var ej = require('@syncfusion/ej2-pdf');

// Load an existing PDF document
var data = fs.readFileSync('input.pdf');
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

> **Note:** If the specified key does not exist, `remove` returns `false` and does not modify the document. The call is silent and does not throw an exception.

## Supported Schema Types and Properties

Different schema types define categories of metadata used in PDF documents. The following tables list the available properties for each schema.

### Basic Schema

General document metadata such as creator tool and timestamps.

| Property | Type | Description |
|---|---|---|
| `creatorTool` | `string` | The name of the application that created the document |
| `createDate` | `Date` | The date and time the document was created |
| `modifyDate` | `Date` | The date and time the document was last modified |
| `metadataDate` | `Date` | The date and time the metadata was last modified |

### Dublin Core Schema

Descriptive metadata such as title, author, subject, and description.

| Property | Type | Description |
|---|---|---|
| `title` | `LangEntry` | The title of the document (language-tag map) |
| `creator` | `string[]` | The author(s) of the document |
| `subject` | `LangEntry` | The subject of the document |
| `description` | `LangEntry` | A description or abstract |
| `publisher` | `string[]` | The publisher(s) of the document |
| `contributor` | `string[]` | Additional contributors |
| `type` | `string[]` | The nature or genre of the document |
| `format` | `string` | The file format |
| `identifier` | `string` | A unique identifier |
| `source` | `string` | The source of the document |
| `language` | `string[]` | The language(s) of the content |
| `relation` | `string[]` | Related resources |
| `coverage` | `string[]` | Spatial or temporal scope |
| `rights` | `LangEntry` | Rights and licensing information |

> **Note:** `LangEntry` is a `Record<string, string>` map where keys are IETF RFC 5646 language tags (e.g., `'en-US'`, `'fr-FR'`) and values are the localized strings.

### Job Ticket Schema

Metadata related to print jobs and production workflow instructions.

| Property | Type | Description |
|---|---|---|
| `jobRef` | `string[]` | References to print jobs |
| `jobName` | `string` | The name of the print job |

### Rights Management Schema

Metadata related to document ownership, usage rights, and permissions.

| Property | Type | Description |
|---|---|---|
| `isMarked` | `boolean` | Indicates whether the document is rights-managed |
| `mark` | `string` | A short identifier for the rights holder |
| `webStatement` | `string` | A URL to a web statement describing the rights |
| `coverRights` | `string` | A URL to a cover image for the rights statement |

### PDF Schema

PDF-specific properties such as keywords, producer, and version.

| Property | Type | Description |
|---|---|---|
| `keywords` | `string` | Comma-separated keywords |
| `producer` | `string` | The tool that produced the PDF |
| `pdfVersion` | `string` | The PDF version (e.g., `'1.7'`) |
| `part` | `string` | The PDF part |

### Paged Text Schema

Metadata related to the document's paginated structure.

| Property | Type | Description |
|---|---|---|
| `pageCount` | `string` | Informational page count metadata |

> **Note:** `pageCount` is informational XMP metadata. It does **not** override the actual page count of the document, which is determined by the `PdfDocument` page collection. To set it accurately, assign `document.pageCount.toString()`.

### Custom XMP Schema

User-defined metadata with custom namespaces. See the [Custom XMP Schema](#custom-xmp-schema) section for usage.

| Property | Type | Description |
|---|---|---|
| `customData` | `Map<string, string>` | Key-value storage for custom metadata fields |

## Basic Schema

Basic schema is used to store general document metadata such as creator tool, creation date, and modification date.

This sample demonstrates how to set basic schema metadata.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfDocumentInformation } from '@syncfusion/ej2-pdf';
import * as fs from 'fs';

// Load an existing PDF document
const data: Uint8Array = fs.readFileSync('input.pdf');
let document: PdfDocument = new PdfDocument(data);
// Access document information
let documentProperties: PdfDocumentInformation = document.getDocumentInformation(false);
// Get XMP metadata
let xmpMetadata: PdfDocumentInformation['xmpMetadata'] = documentProperties.xmpMetadata;
// Set basic schema metadata
xmpMetadata.basicSchema.creatorTool = 'MyApp';
xmpMetadata.basicSchema.createDate = new Date();
xmpMetadata.basicSchema.modifyDate = new Date();
// Persist updated document information
document.setDocumentInformation(documentProperties);
// Save the updated document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

var fs = require('fs');
var ej = require('@syncfusion/ej2-pdf');

// Load an existing PDF document
var data = fs.readFileSync('input.pdf');
var document = new ej.pdf.PdfDocument(data);
// Access document information
var documentProperties = document.getDocumentInformation(false);
// Get XMP metadata
var xmpMetadata = documentProperties.xmpMetadata;
// Set basic schema metadata
xmpMetadata.basicSchema.creatorTool = 'MyApp';
xmpMetadata.basicSchema.createDate = new Date();
xmpMetadata.basicSchema.modifyDate = new Date();
// Persist updated document information
document.setDocumentInformation(documentProperties);
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
import * as fs from 'fs';

// Load an existing PDF document
const data: Uint8Array = fs.readFileSync('input.pdf');
let document: PdfDocument = new PdfDocument(data);
// Access document information
let documentProperties: PdfDocumentInformation = document.getDocumentInformation(false);
// Get XMP metadata
let xmpMetadata: PdfXmpMetadata = documentProperties.xmpMetadata;
// Set Dublin Core metadata
xmpMetadata.dublinCoreSchema.creator = ['Author Name'];
xmpMetadata.dublinCoreSchema.title = { 'en-US': 'Sample Title' };
// Persist updated document information
document.setDocumentInformation(documentProperties);
// Save the updated document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

var fs = require('fs');
var ej = require('@syncfusion/ej2-pdf');

// Load an existing PDF document
var data = fs.readFileSync('input.pdf');
var document = new ej.pdf.PdfDocument(data);
// Access document information
var documentProperties = document.getDocumentInformation(false);
// Get XMP metadata
var xmpMetadata = documentProperties.xmpMetadata;
// Set Dublin Core metadata
xmpMetadata.dublinCoreSchema.creator = ['Author Name'];
xmpMetadata.dublinCoreSchema.title = { 'en-US': 'Sample Title' };
// Persist updated document information
document.setDocumentInformation(documentProperties);
// Save the updated document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

> **Note:** The `title`, `subject`, `description`, and `rights` properties use a `LangEntry` object, which is a `Record<string, string>` map of IETF language tags (e.g., `'en-US'`, `'fr-FR'`) to localized strings.

## Job Ticket Schema

Job Ticket Schema is used to store metadata related to print jobs and production workflow instructions.

This sample demonstrates how to set Job Ticket Schema metadata.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfDocumentInformation, PdfXmpMetadata } from '@syncfusion/ej2-pdf';
import * as fs from 'fs';

// Load an existing PDF document
const data: Uint8Array = fs.readFileSync('input.pdf');
let document: PdfDocument = new PdfDocument(data);
// Access document information
let documentProperties: PdfDocumentInformation = document.getDocumentInformation(false);
// Get XMP metadata
let xmpMetadata: PdfXmpMetadata = documentProperties.xmpMetadata;
// Set job references
xmpMetadata.basicJobTicketSchema.jobRef = ['JobA', 'JobB'];
xmpMetadata.basicJobTicketSchema.jobName = 'Quarterly Report';
// Persist updated document information
document.setDocumentInformation(documentProperties);
// Save the updated document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

var fs = require('fs');
var ej = require('@syncfusion/ej2-pdf');

// Load an existing PDF document
var data = fs.readFileSync('input.pdf');
var document = new ej.pdf.PdfDocument(data);
// Access document information
var documentProperties = document.getDocumentInformation(false);
// Get XMP metadata
var xmpMetadata = documentProperties.xmpMetadata;
// Set job references
xmpMetadata.basicJobTicketSchema.jobRef = ['JobA', 'JobB'];
xmpMetadata.basicJobTicketSchema.jobName = 'Quarterly Report';
// Persist updated document information
document.setDocumentInformation(documentProperties);
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
import * as fs from 'fs';

// Load an existing PDF document
const data: Uint8Array = fs.readFileSync('input.pdf');
let document: PdfDocument = new PdfDocument(data);
// Access document information
let documentProperties: PdfDocumentInformation = document.getDocumentInformation(false);
// Get XMP metadata
let xmpMetadata: PdfXmpMetadata = documentProperties.xmpMetadata;
// Mark document as rights-managed
xmpMetadata.rightsManagementSchema.isMarked = true;
xmpMetadata.rightsManagementSchema.mark = 'Copyright 2026 Syncfusion';
xmpMetadata.rightsManagementSchema.webStatement = 'https://example.com/rights';
// Persist updated document information
document.setDocumentInformation(documentProperties);
// Save the updated document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

var fs = require('fs');
var ej = require('@syncfusion/ej2-pdf');

// Load an existing PDF document
var data = fs.readFileSync('input.pdf');
var document = new ej.pdf.PdfDocument(data);
// Access document information
var documentProperties = document.getDocumentInformation(false);
// Get XMP metadata
var xmpMetadata = documentProperties.xmpMetadata;
// Mark document as rights-managed
xmpMetadata.rightsManagementSchema.isMarked = true;
xmpMetadata.rightsManagementSchema.mark = 'Copyright 2026 Syncfusion';
xmpMetadata.rightsManagementSchema.webStatement = 'https://example.com/rights';
// Persist updated document information
document.setDocumentInformation(documentProperties);
// Save the updated document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## PDF Schema

PDF Schema is used to store PDF-specific metadata such as keywords, producer, and version details.

This sample demonstrates how to set PDF schema metadata.

> **Note:** This example uses the alternate API path `document.xmpMetadata = xmp;`, which is convenient when constructing a brand-new `PdfXmpMetadata` instance without first retrieving a `PdfDocumentInformation`. Both API paths are valid; the `getDocumentInformation(false).xmpMetadata` path used in other sections is the standard when working with an existing document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfXmpMetadata } from '@syncfusion/ej2-pdf';
import * as fs from 'fs';

// Load an existing PDF document
const data: Uint8Array = fs.readFileSync('input.pdf');
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

var fs = require('fs');
var ej = require('@syncfusion/ej2-pdf');

// Load an existing PDF document
var data = fs.readFileSync('input.pdf');
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

> **Note:** `pageCount` is informational XMP metadata. The actual page count of the document is determined by the `PdfDocument` page collection. The recommended approach is to assign `document.pageCount.toString()` so the metadata accurately reflects the real number of pages.

This sample demonstrates how to set Paged Text schema metadata.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfDocumentInformation, PdfXmpMetadata } from '@syncfusion/ej2-pdf';
import * as fs from 'fs';

// Load an existing PDF document
const data: Uint8Array = fs.readFileSync('input.pdf');
let document: PdfDocument = new PdfDocument(data);
// Access document information
let documentProperties: PdfDocumentInformation = document.getDocumentInformation(false);
// Get XMP metadata
let xmpMetadata: PdfXmpMetadata = documentProperties.xmpMetadata;
// Set page count from the actual document page count
xmpMetadata.pagedTextSchema.pageCount = document.pageCount.toString();
// Persist updated document information
document.setDocumentInformation(documentProperties);
// Save the updated document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

var fs = require('fs');
var ej = require('@syncfusion/ej2-pdf');

// Load an existing PDF document
var data = fs.readFileSync('input.pdf');
var document = new ej.pdf.PdfDocument(data);
// Access document information
var documentProperties = document.getDocumentInformation(false);
// Get XMP metadata
var xmpMetadata = documentProperties.xmpMetadata;
// Set page count from the actual document page count
xmpMetadata.pagedTextSchema.pageCount = document.pageCount.toString();
// Persist updated document information
document.setDocumentInformation(documentProperties);
// Save the updated document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Custom XMP Schema

Custom XMP Schema allows defining application-specific metadata using custom namespaces and flexible key-value storage. Unlike the [Custom Metadata](#custom-metadata) section (which writes to the PDF Info dictionary), this approach stores values inside the XMP packet under a user-defined namespace.

This sample demonstrates how to create and use a custom XMP schema.

> **Constructor Parameters:**
>
> | Parameter | Type | Description |
> |---|---|---|
> | `xmpMetadata` | `PdfXmpMetadata` | The XMP metadata instance that owns this custom schema |
> | `prefix` | `string` | A short namespace prefix (e.g., `'cust'`). Must be unique within the document. |
> | `namespaceUri` | `string` | The full namespace URI (e.g., `'http://custom.example.com/ns/'`). Should be a URI you control or have permission to use. |
>
> **Data Structure:** The `customData` property is a `Map<string, string>` collection that supports `set`, `get`, `has`, and `remove` operations.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfDocumentInformation, PdfCustomSchema, PdfXmpMetadata } from '@syncfusion/ej2-pdf';
import * as fs from 'fs';

// Load an existing PDF document
const data: Uint8Array = fs.readFileSync('input.pdf');
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
// Persist updated document information
document.setDocumentInformation(documentProperties);
// Save the document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

var fs = require('fs');
var ej = require('@syncfusion/ej2-pdf');

// Load an existing PDF document
var data = fs.readFileSync('input.pdf');
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
// Persist updated document information
document.setDocumentInformation(documentProperties);
// Save the document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## End-to-End Example

The following complete example loads an existing PDF, sets XMP metadata across multiple schemas, and saves the result.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfDocumentInformation, PdfXmpMetadata } from '@syncfusion/ej2-pdf';
import * as fs from 'fs';

function addMetadataToPdf(inputPath: string, outputPath: string): void {
    const data: Uint8Array = fs.readFileSync(inputPath);
    let document: PdfDocument = new PdfDocument(data);
    let documentProperties: PdfDocumentInformation = document.getDocumentInformation(false);
    let xmpMetadata: PdfXmpMetadata = documentProperties.xmpMetadata;

    // Basic Schema
    xmpMetadata.basicSchema.creatorTool = 'My App';
    xmpMetadata.basicSchema.createDate = new Date();
    xmpMetadata.basicSchema.modifyDate = new Date();

    // Dublin Core Schema
    xmpMetadata.dublinCoreSchema.title = { 'en-US': 'Annual Report' };
    xmpMetadata.dublinCoreSchema.creator = ['Jane Doe'];

    // PDF Schema
    xmpMetadata.pdfSchema.keywords = 'annual, report, 2026';
    xmpMetadata.pdfSchema.producer = 'Syncfusion PDF Library';

    // Paged Text Schema
    xmpMetadata.pagedTextSchema.pageCount = document.pageCount.toString();

    document.setDocumentInformation(documentProperties);
    document.save(outputPath);
    document.destroy();
}

addMetadataToPdf('input.pdf', 'Output.pdf');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

var fs = require('fs');
var ej = require('@syncfusion/ej2-pdf');

function addMetadataToPdf(inputPath, outputPath) {
    var data = fs.readFileSync(inputPath);
    var document = new ej.pdf.PdfDocument(data);
    var documentProperties = document.getDocumentInformation(false);
    var xmpMetadata = documentProperties.xmpMetadata;

    // Basic Schema
    xmpMetadata.basicSchema.creatorTool = 'My App';
    xmpMetadata.basicSchema.createDate = new Date();
    xmpMetadata.basicSchema.modifyDate = new Date();

    // Dublin Core Schema
    xmpMetadata.dublinCoreSchema.title = { 'en-US': 'Annual Report' };
    xmpMetadata.dublinCoreSchema.creator = ['Jane Doe'];

    // PDF Schema
    xmpMetadata.pdfSchema.keywords = 'annual, report, 2026';
    xmpMetadata.pdfSchema.producer = 'Syncfusion PDF Library';

    // Paged Text Schema
    xmpMetadata.pagedTextSchema.pageCount = document.pageCount.toString();

    document.setDocumentInformation(documentProperties);
    document.save(outputPath);
    document.destroy();
}

addMetadataToPdf('input.pdf', 'Output.pdf');

{% endhighlight %}
{% endtabs %}

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/fluent2/pdf/default)