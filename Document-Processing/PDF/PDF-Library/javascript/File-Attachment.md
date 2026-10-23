---
title: Attachments in JavaScript PDF | Syncfusion
canonical_url: https://www.syncfusion.com/document-sdk/javascript-pdf-library
description: Learn how to add, remove, and extract file attachments in PDF documents using the Syncfusion JavaScript PDF Library.
platform: document-processing
control: PDF
documentation: UG
---

# Attachments in JavaScript PDF

## Overview

A PDF document can embed supporting files, such as text documents, images, and other PDF documents, as document-level file attachments. The attachments are stored inside the PDF file and can be extracted by the user or by an application later.

The JavaScript PDF Library supports the following attachment operations through the `PdfAttachment` class and the attachment members of `PdfDocument`:

* Add an attachment to a new or an existing PDF document.
* Read the attachment count, metadata, and raw byte data.
* Extract an embedded file in the browser.
* Remove one attachment or all attachments from a loaded document.
* Add a button that opens an embedded attachment through a JavaScript action.

## Adding an attachment to a new PDF document

Create a `PdfDocument`, create a `PdfAttachment` with the file data and the file name (in that order), and add it using the `addAttachment` method. The file data can be a `Uint8Array` or a Base64-encoded string.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfAttachment, PdfAttachmentRelationship } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
document.addPage();
// Create an attachment with the file data (Uint8Array) and the file name
let attachment: PdfAttachment = new PdfAttachment(attachmentData, 'input.txt', {
    mimeType: 'text/plain',
    description: 'Input text file',
    modificationDate: new Date(),
    relationship: PdfAttachmentRelationship.Data
});
// Add the attachment to the document
let index: number = document.addAttachment(attachment);
// Save the document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
document.addPage();
// Create an attachment with the file data (Uint8Array) and the file name
var attachment = new ej.pdf.PdfAttachment(attachmentData, 'input.txt', {
    mimeType: 'text/plain',
    description: 'Input text file',
    modificationDate: new Date(),
    relationship: ej.pdf.PdfAttachmentRelationship.Data
});
// Add the attachment to the document
var index = document.addAttachment(attachment);
// Save the document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

N> The `options` argument of the `PdfAttachment` constructor is optional. When the data is a string, it must be Base64-encoded.

## Attachment properties

The following table lists the public properties of the `PdfAttachment` class.

| Property | Type | Access | Description |
|----------|------|--------|-------------|
| `fileName` | `string` | Read / Write | The file name of the attachment. It is used as the display name and as the name of the embedded file. |
| `data` | `Uint8Array` | Read-only | A copy of the decoded bytes of the embedded file. |
| `index` | `number` | Read-only | The current zero-based position of the attachment in the document. |
| `description` | `string` | Read / Write | A description of the attachment. The default value is an empty string. |
| `mimeType` | `string` | Read / Write | The MIME type of the file, for example `text/plain`. The default value is an empty string. |
| `creationDate` | `Date` | Read / Write | The creation date of the embedded file. It has no value unless it is set or read from the PDF. |
| `modificationDate` | `Date` | Read / Write | The last modification date of the embedded file. It has no value unless it is set or read from the PDF. |
| `relationship` | `PdfAttachmentRelationship` | Read / Write | How the file relates to the document content: `Source`, `Data`, `Alternative`, `Supplement`, or `Unspecified` (default). |

N> `data` and `index` can be read only while the attachment belongs to a document. Reading them from an attachment that has been removed throws an error.

## Adding an attachment to an existing PDF document

Load the existing PDF document from `pdfData`, create the attachment from `attachmentData`, and add it to the document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfAttachment } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(pdfData);
// Create an attachment with the file data and the file name
let attachment: PdfAttachment = new PdfAttachment(attachmentData, 'input.txt');
// Set the attachment properties
attachment.mimeType = 'text/plain';
attachment.description = 'Input text file';
// Add the attachment at the end of the attachment collection
document.addAttachment(attachment);
// Save the document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(pdfData);
// Create an attachment with the file data and the file name
var attachment = new ej.pdf.PdfAttachment(attachmentData, 'input.txt');
// Set the attachment properties
attachment.mimeType = 'text/plain';
attachment.description = 'Input text file';
// Add the attachment at the end of the attachment collection
document.addAttachment(attachment);
// Save the document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

To insert the attachment at a specific position, pass a zero-based index as the second argument: `document.addAttachment(attachment, 0)`. The index must be between `0` and the current attachment count; otherwise, an error is thrown.

## Accessing and extracting attachments

Use `attachmentsCount` to get the number of attachments and `getAttachment` to get an attachment by its zero-based index. The following example reads the metadata and bytes of each attachment and downloads the embedded file in the browser.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfAttachment } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(pdfData);
// Get the number of attachments
let count: number = document.attachmentsCount;
for (let i: number = 0; i < count; i++) {
    // Get the attachment at the zero-based index
    let attachment: PdfAttachment = document.getAttachment(i);
    // Read the file name, MIME type, and raw byte data
    let fileName: string = attachment.fileName;
    let mimeType: string = attachment.mimeType || 'application/octet-stream';
    let bytes: Uint8Array = attachment.data;
    // Create a Blob from the bytes
    let blob: Blob = new Blob([bytes], { type: mimeType });
    // Create a temporary object URL
    let url: string = URL.createObjectURL(blob);
    // Download the embedded file
    let link: HTMLAnchorElement = window.document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
    // Revoke the object URL after use
    URL.revokeObjectURL(url);
}
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(pdfData);
// Get the number of attachments
var count = document.attachmentsCount;
for (var i = 0; i < count; i++) {
    // Get the attachment at the zero-based index
    var attachment = document.getAttachment(i);
    // Read the file name, MIME type, and raw byte data
    var fileName = attachment.fileName;
    var mimeType = attachment.mimeType || 'application/octet-stream';
    var bytes = attachment.data;
    // Create a Blob from the bytes
    var blob = new Blob([bytes], { type: mimeType });
    // Create a temporary object URL
    var url = URL.createObjectURL(blob);
    // Download the embedded file
    var link = window.document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
    // Revoke the object URL after use
    URL.revokeObjectURL(url);
}
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

N> * Attachment indexes are zero-based. Passing an index that is negative, not an integer, or greater than or equal to `attachmentsCount` to `getAttachment` throws an error.
N> * The browser decides where a downloaded file is saved. The library does not write files to disk.
N> * Revoke each object URL after the download starts to release the memory held by the `Blob`.
N> * The `fileName` value is the name stored in the PDF. Validate or sanitize it before using it as a download name when the PDF comes from an untrusted source.
N> * The `data` property returns a new `Uint8Array` containing the decoded bytes on every read, so modifying it does not change the attachment. The name `document` in the examples refers to the `PdfDocument`; use `window.document` for the browser DOM.

## Removing an attachment from an existing PDF document

Use `removeAttachment` to remove an attachment by index or by object reference. Check `attachmentsCount` before removing by index, because an index outside the valid range throws an error. Use `clearAllAttachments` to remove every document-level attachment.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfAttachment } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(pdfData);
if (document.attachmentsCount > 1) {
    // Get the second attachment
    let attachment: PdfAttachment = document.getAttachment(1);
    // Remove the attachment by object reference
    document.removeAttachment(attachment);
}
if (document.attachmentsCount > 0) {
    // Remove the first attachment by index
    document.removeAttachment(0);
}
// Remove all remaining attachments
document.clearAllAttachments();
// Save the document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(pdfData);
if (document.attachmentsCount > 1) {
    // Get the second attachment
    var attachment = document.getAttachment(1);
    // Remove the attachment by object reference
    document.removeAttachment(attachment);
}
if (document.attachmentsCount > 0) {
    // Remove the first attachment by index
    document.removeAttachment(0);
}
// Remove all remaining attachments
document.clearAllAttachments();
// Save the document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

N> Removing an attachment by reference throws an error if the attachment does not belong to the document. A removed `PdfAttachment` is detached, and its `data` and `index` properties can no longer be read.

## Working with the attachment collection

The attachment collection is accessed through the following members of `PdfDocument`.

| Member | Signature | Description |
|--------|-----------|-------------|
| `attachmentsCount` | `number` (read-only property) | Gets the number of document-level attachments. |
| `getAttachment` | `getAttachment(index: number): PdfAttachment` | Gets the attachment at the zero-based index. |
| `addAttachment` | `addAttachment(attachment: PdfAttachment): number` | Adds the attachment at the end and returns its index. |
| `addAttachment` | `addAttachment(attachment: PdfAttachment, index: number): void` | Inserts the attachment at the specified index. |
| `has` | `has(attachment: PdfAttachment): boolean` | Checks whether the attachment belongs to the document. |
| `removeAttachment` | `removeAttachment(index: number): void` | Removes the attachment at the specified index. |
| `removeAttachment` | `removeAttachment(attachment: PdfAttachment): void` | Removes the specified attachment. |
| `clearAllAttachments` | `clearAllAttachments(): void` | Removes all document-level attachments. |

N> `addAttachment` throws an error when the attachment is `null`, its file name is empty or contains a null character, or it has no data.

## Adding PDF attachments with interactive launch buttons

You can embed a file in the document and add a button that opens it when clicked. The button uses a `PdfJavaScriptAction` assigned to its `mouseUp` action, and the script calls the PDF viewer's `exportDataObject` function with the embedded file name.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPage, PdfAttachment, PdfButtonField, PdfJavaScriptAction } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Embed the file in the document
let fileName: string = 'input.txt';
document.addAttachment(new PdfAttachment(attachmentData, fileName));
// Create a JavaScript action; the name must match the attachment file name exactly
let action: PdfJavaScriptAction = new PdfJavaScriptAction(
    'this.exportDataObject({ cName: "' + fileName + '", nLaunch: 2 });'
);
// Create a button field
let button: PdfButtonField = new PdfButtonField(page, 'OpenAttachment', { x: 20, y: 20, width: 140, height: 30 });
button.text = 'Open attachment';
// Run the action when the mouse button is released
button.actions.mouseUp = action;
// Add the button to the form
document.form.add(button);
// Save the document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Embed the file in the document
var fileName = 'input.txt';
document.addAttachment(new ej.pdf.PdfAttachment(attachmentData, fileName));
// Create a JavaScript action; the name must match the attachment file name exactly
var action = new ej.pdf.PdfJavaScriptAction(
    'this.exportDataObject({ cName: "' + fileName + '", nLaunch: 2 });'
);
// Create a button field
var button = new ej.pdf.PdfButtonField(page, 'OpenAttachment', { x: 20, y: 20, width: 140, height: 30 });
button.text = 'Open attachment';
// Run the action when the mouse button is released
button.actions.mouseUp = action;
// Add the button to the form
document.form.add(button);
// Save the document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

N> * The name passed as `cName` must exactly match the attachment `fileName`.
N> * `exportDataObject` is a feature of Adobe Acrobat's JavaScript API. Other PDF viewers, including browser-based viewers, may ignore the script, and viewers that run it usually show a security prompt before opening the file.

## Additional Resources

* [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
* [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
* [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
* [JavaScript PDF Library examples](https://ej2.syncfusion.com/javascript/demos/#/tailwind3/pdf/default)