---
title: Digital Signature in JavaScript PDF Library | Syncfusion
canonical_url: https://www.syncfusion.com/document-sdk/javascript-pdf-library
description: This section explains how to create a digital signature in the PDF document by using JavaScript PDF Library
platform: document-processing
control: PDF
documentation: UG
---

# Digital Signature in JavaScript PDF Library

The [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) provides support to create and manage digital signatures in PDF documents, ensuring authenticity, integrity, and security. For more information about the underlying API, see the [PdfSignature](https://ej2.syncfusion.com/documentation/api/pdf/pdfsignature) class reference.

## Adding a digital signature

This example demonstrates how to add a digital signature to a PDF document using the [PdfSignature](https://ej2.syncfusion.com/documentation/api/pdf/pdfsignature) class. Digital signatures ensure document authenticity and integrity by applying cryptographic standards.

### Add a digital signature to a new document

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfForm, PdfSignatureField, PdfSignature, DigestAlgorithm, CryptographicStandard} from '@syncfusion/ej2-pdf';

// Create the document
let document: PdfDocument = new PdfDocument();
// Get the first page of the document
let page: PdfPage = document.addPage();
// Access the PDF form
let form: PdfForm = document.form;
// Create a new signature field
let field: PdfSignatureField = new PdfSignatureField(page, 'Signature', {
    x: 10,
    y: 10,
    width: 100,
    height: 50
});
// Create a new signature using PFX data and private key
let sign: PdfSignature = PdfSignature.create(
    certData,
    password,
    {
        cryptographicStandard: CryptographicStandard.cms,
        digestAlgorithm: DigestAlgorithm.sha256
    }
);
// Set the signature to the field
field.setSignature(sign);
// Add the field to the PDF form
form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create the document
var document = new ej.pdf.PdfDocument();
// Get the first page of the document
var page = document.addPage();
// Access the PDF form
var form = document.form;
// Create a new signature field
var field = new ej.pdf.PdfSignatureField(page, 'Signature', {x: 10, y: 10, width: 100, height: 50});
// Create a new signature using PFX data and private key
var sign = ej.pdf.PdfSignature.create(certData, password, {cryptographicStandard: ej.pdf.CryptographicStandard.cms, digestAlgorithm: ej.pdf.DigestAlgorithm.sha256});
// Set the signature to the field
field.setSignature(sign);
// Add the field to the PDF form
form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Add a digital signature to an existing document

The following code snippet explains how to add a digital signature in an existing PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfForm, PdfSignatureField, PdfSignature, DigestAlgorithm, CryptographicStandard} from '@syncfusion/ej2-pdf';

// Load the document
let document: PdfDocument = new PdfDocument(data);
// Get the first page of the document
let page: PdfPage = document.getPage(0);
// Access the PDF form
let form: PdfForm = document.form;
// Create a new signature field
let field: PdfSignatureField = new PdfSignatureField(page, 'Signature', {
    x: 10,
    y: 10,
    width: 100,
    height: 50
});
// Create a new signature using PFX data and private key
let sign: PdfSignature = PdfSignature.create(
    certData,
    password,
    {
        cryptographicStandard: CryptographicStandard.cms,
        digestAlgorithm: DigestAlgorithm.sha256
    }
);
// Set the signature to the field
field.setSignature(sign);
// Add the field to the PDF form
form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the document
var document = new ej.pdf.PdfDocument(data);
// Get the first page of the document
var page = document.getPage(0);
// Access the PDF form
var form = document.form;
// Create a new signature field
var field = new ej.pdf.PdfSignatureField(page, 'Signature', {
    x: 10,
    y: 10,
    width: 100,
    height: 50
});
// Create a new signature using PFX data and private key
var sign = ej.pdf.PdfSignature.create(
    certData,
    password,
    {
        cryptographicStandard: ej.pdf.CryptographicStandard.cms,
        digestAlgorithm: ej.pdf.DigestAlgorithm.sha256
    }
);
// Set the signature to the field
field.setSignature(sign);
// Add the field to the PDF form
form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## External signing

[JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) provides support to create a new PDF signature using a callback function for external signing, enabling secure and flexible digital signature workflows.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfForm, PdfSignatureField, PdfSignature, DigestAlgorithm, CryptographicStandard} from '@syncfusion/ej2-pdf';

// Load the document
let document: PdfDocument = new PdfDocument(data);
// Get the first page of the document
let page: PdfPage = document.getPage(0);
// Access the PDF form
let form: PdfForm = document.form;
// Create a new signature field
let field: PdfSignatureField = new PdfSignatureField(page, 'Signature', { x: 10, y: 10, width: 100, height: 50 });
// Define a callback function used for external signing
let externalSignatureCallback = (
    data: Uint8Array,
    options: {
        algorithm: DigestAlgorithm,
        cryptographicStandard: CryptographicStandard,
    }
): { signedData: Uint8Array; timestampData?: Uint8Array } => {
    // Implement external signing logic here
    return { signedData: new Uint8Array() }; // Placeholder return
};
// Create a new signature using external signing
let signature: PdfSignature = PdfSignature.create(externalSignatureCallback, {
    cryptographicStandard: CryptographicStandard.cms,
    algorithm: DigestAlgorithm.sha256,
});
// Set the signature to the field
field.setSignature(signature);
// Add the field to the PDF form
form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the document
var document = new ej.pdf.PdfDocument(data);
// Get the first page of the document
var page = document.getPage(0);
// Access the PDF form
var form = document.form;
// Create a new signature field
var field = new ej.pdf.PdfSignatureField(page, 'Signature', { x: 10, y: 10, width: 100, height: 50 });
// Define a callback function used for external signing
var externalSignatureCallback = function (data, options) {
  // data: Uint8Array
  // options: { algorithm: ej.pdf.DigestAlgorithm, cryptographicStandard: ej.pdf.CryptographicStandard }
  // Implement external signing logic here and return the signed bytes.
  // Example (placeholder): return only the required property 'signedData'
  return { signedData: new Uint8Array() };
};
// Create a new signature using external signing
var signature = ej.pdf.PdfSignature.create(externalSignatureCallback, {
  cryptographicStandard: ej.pdf.CryptographicStandard.cms,
  algorithm: ej.pdf.DigestAlgorithm.sha256
});
// Set the signature to the field
field.setSignature(signature);
// Add the field to the PDF form
form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Create Signature with Public Certificates for External Signing

This example demonstrates how to create a new PDF signature using the [PdfSignature](https://ej2.syncfusion.com/documentation/api/pdf/pdfsignature) class with public certificates for external signing. External signing allows you to implement custom signing logic outside the [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) while maintaining compliance with cryptographic standards.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfForm, PdfSignatureField, PdfSignature, DigestAlgorithm, CryptographicStandard} from '@syncfusion/ej2-pdf';

// Load the document
let document: PdfDocument = new PdfDocument(data);
// Get the first page of the document
let page: PdfPage = document.getPage(0);
// Access the PDF form
let form: PdfForm = document.form;
// Create a new signature field
let field: PdfSignatureField = new PdfSignatureField(page, 'Signature', { x: 10, y: 10, width: 100, height: 50 });
// Define a callback function used for external signing
let externalSignatureCallback = (
    data: Uint8Array,
    options: {
        algorithm: DigestAlgorithm,
        cryptographicStandard: CryptographicStandard
    }
): { signedData: Uint8Array; timestampData?: Uint8Array } => {
    // Implement external signing logic here
    return { signedData: new Uint8Array() }; // Placeholder return
};
// Create a new signature using external signing with public certificate collection
let signature: PdfSignature = PdfSignature.create(
    externalSignatureCallback,
    publicCertificates,
    {
        cryptographicStandard: CryptographicStandard.cms,
        algorithm: DigestAlgorithm.sha256
    }
);
// Set the signature to the field
field.setSignature(signature);
// Add the field to the PDF form
form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the document
var document = new ej.pdf.PdfDocument(data);
// Get the first page of the document
var page = document.getPage(0);
// Access the PDF form
var form = document.form;
// Create a new signature field
var field = new ej.pdf.PdfSignatureField(page, 'Signature', { x: 10, y: 10, width: 100, height: 50 });
// Define a callback function used for external signing
var externalSignatureCallback = function (data, options) {
    // Implement external signing logic here
    return { signedData: new Uint8Array() }; // Placeholder return
};
// Create a new signature using external signing with public certificate collection
var signature = ej.pdf.PdfSignature.create(
    externalSignatureCallback,
    publicCertificates,
    {
        cryptographicStandard: ej.pdf.CryptographicStandard.cms,
        algorithm: ej.pdf.DigestAlgorithm.sha256
    }
);
// Set the signature to the field
field.setSignature(signature);
// Add the field to the PDF form
form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Replacing an empty signature

This example demonstrates how to replace an empty signature field in a PDF document with externally signed data using the [`replaceEmptySignature()`](https://ej2.syncfusion.com/documentation/api/pdf/pdfsignature#replaceemptysignature) method of the [PdfSignature](https://ej2.syncfusion.com/documentation/api/pdf/pdfsignature) class. This method allows embedding externally signed content, certificates, and optional timestamp data into the PDF.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfForm, PdfSignatureField, PdfSignature, DigestAlgorithm, CryptographicStandard} from '@syncfusion/ej2-pdf';

// Load the document
let document: PdfDocument = new PdfDocument(data);
// Get the first page of the document
let page: PdfPage = document.getPage(0);
// Access the PDF form
let form: PdfForm = document.form;
// Create a new signature field
let field: PdfSignatureField = new PdfSignatureField(page, 'Signature', { x: 10, y: 10, width: 100, height: 50 });
// Placeholder for signed data produced by the external signer
let signedData: Uint8Array;
// Define a callback function used for external signing
let externalSignatureCallback = (
    data: Uint8Array,
    options: {
        algorithm: DigestAlgorithm;
        cryptographicStandard: CryptographicStandard;
    }
): { signedData: Uint8Array; timestampData?: Uint8Array } => {
    // Implement external signing logic here
    const result: { signedData: Uint8Array; timestampData?: Uint8Array } = { signedData: new Uint8Array() };
    signedData = result.signedData;
    return result;
};
// Create a new signature using external signing with public certificate collection
let signature: PdfSignature = PdfSignature.create(
    externalSignatureCallback,
    publicCertificates,
    {
        cryptographicStandard: CryptographicStandard.cms,
        algorithm: DigestAlgorithm.sha256
    }
);
// Set the signature to the field
field.setSignature(signature);
// Add the field to the PDF form
form.add(field);
// Save the document data
let finalData: Uint8Array = document.save();
// Destroy the document
document.destroy();
// Replace the empty signature with externally signed hash and certificates
let signedDocumentData: Uint8Array = PdfSignature.replaceEmptySignature(
    finalData,
    'Signature',
    signedData,
    DigestAlgorithm.sha256,
    publicCertificates
);

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the document
var document = new ej.pdf.PdfDocument(data);
// Get the first page of the document
var page = document.getPage(0);
// Access the PDF form
var form = document.form;
// Create a new signature field
var field = new ej.pdf.PdfSignatureField(page, 'Signature', { x: 10, y: 10, width: 100, height: 50 });
// Placeholder for signed data produced by the external signer
var signedData;
// Public certificate chain to embed with the signature
var publicCertificates = [/* your certificates here */];
// Define a callback function used for external signing
var externalSignatureCallback = function (data, options) {
    // Implement external signing logic here
    var result = { signedData: new Uint8Array() };
    signedData = result.signedData;
    return result;
};
// Create a new signature using external signing with public certificate collection
var signature = ej.pdf.PdfSignature.create(
    externalSignatureCallback,
    publicCertificates,
    {
        cryptographicStandard: ej.pdf.CryptographicStandard.cms,
        algorithm: ej.pdf.DigestAlgorithm.sha256
    }
);
// Set the signature to the field
field.setSignature(signature);
// Add the field to the PDF form
form.add(field);
// Save the document data
var finalData = document.save();
// Destroy the document
document.destroy();
// Replace the empty signature with externally signed hash and certificates
var signedDocumentData = ej.pdf.PdfSignature.replaceEmptySignature(
    finalData,
    'Signature',
    signedData,
    ej.pdf.DigestAlgorithm.sha256,
    publicCertificates
);

{% endhighlight %}
{% endtabs %}

N> The two-step process is required when the signing operation cannot complete inside the `PdfSignature.create(...)` callback — for example, when the private key lives on a remote HSM with high latency. First, reserve the signature field with an empty signature dictionary; then, after the remote signer returns the signed bytes, call `replaceEmptySignature(...)` to embed them in the previously reserved field.

## Signature options

The following examples demonstrate the signature-creation options available in `PdfSignatureOptions`.

### `PdfSignatureOptions` reference

| Property | Type | Description |
|---|---|---|
| `signedName` | `string` | Name of the signer. |
| `isLocked` | `boolean` | Locks the document after signing. |
| `documentPermissions` | `PdfCertificationFlags` | Permissions granted after certifying. |
| `certify` | `boolean` | Marks the signature as a certifying signature. |
| `reason` | `string` | Reason for signing. |
| `locationInfo` | `string` | Physical location of signing. |
| `contactInfo` | `string` | Signer contact information. |
| `cryptographicStandard` | `CryptographicStandard` | Cryptographic standard. |
| `digestAlgorithm` | `DigestAlgorithm` | Digest algorithm. |

### Certified signature

This example demonstrates how to add a signature field to a PDF, create a digital signature using certificate data and a password, certify the document, and save the signed PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfSignatureField, PdfSignature } from '@syncfusion/ej2-pdf';

// Create a new PDF document
const document = new PdfDocument();
// Add a new page to the document
const page: PdfPage = document.addPage();
// Create a signature field on the page at specified coordinates
const field: PdfSignatureField = new PdfSignatureField(page, 'field', { x: 50, y: 50, width: 100, height: 100 });
// Create a digital signature using certificate data and password, enabling certification
const signature: PdfSignature = PdfSignature.create(certData, password, { certify: true });
// Assign the signature to the signature field
field.setSignature(signature);
// Add the signature field to the document form
document.form.add(field);
// Save the document
document.save('output.pdf');
// Release resources used by the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a new page to the document
var page = document.addPage();
// Create a signature field on the page at specified coordinates
var field = new ej.pdf.PdfSignatureField(page, 'field', { x: 50, y: 50, width: 100, height: 100 });
// Create a digital signature using certificate data and password, enabling certification
var signature = ej.pdf.PdfSignature.create(certData, password, { certify: true });
// Assign the signature to the signature field
field.setSignature(signature);
// Add the signature field to the document form
document.form.add(field);
// Save the document
document.save('output.pdf');
// Release resources used by the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Lock signature

This example shows how to add a signature field to a PDF, create a digital signature using certificate data and a password, lock the document after signing, and save the result in [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library).

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfSignatureField, PdfSignature } from '@syncfusion/ej2-pdf';

// Create a new PDF document
const document = new PdfDocument();
// Add a new page to the document
const page: PdfPage = document.addPage();
// Create a signature field on the page at specified coordinates
const field: PdfSignatureField = new PdfSignatureField(page, 'field', { x: 50, y: 50, width: 100, height: 100 });
// Create a digital signature using certificate data and password, locking the document after signing
const signature: PdfSignature = PdfSignature.create(certData, password, { isLocked: true });
// Assign the signature to the signature field
field.setSignature(signature);
// Add the signature field to the document form
document.form.add(field);
// Save the document
document.save('output.pdf');
// Release resources used by the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a new page to the document
var page = document.addPage();
// Create a signature field on the page at specified coordinates
var field = new ej.pdf.PdfSignatureField(page, 'field', { x: 50, y: 50, width: 100, height: 100 });
// Create a digital signature using certificate data and password, locking the document after signing
var signature = ej.pdf.PdfSignature.create(certData, password, { isLocked: true });
// Assign the signature to the signature field
field.setSignature(signature);
// Add the signature field to the document form
document.form.add(field);
// Save the document
document.save('output.pdf');
// Release resources used by the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Adding multiple signatures to a PDF

This example demonstrates how to add two visible signature fields to a PDF, apply a certifying signature to the first field (allowing form filling), then reopen the document and apply a second signature with forbid changes permissions.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPage, PdfSignatureField, PdfSignature, CryptographicStandard, DigestAlgorithm, PdfCertificationFlags } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a new page to the document
let page: PdfPage = document.addPage();
// Add the first visible signature field
let field: PdfSignatureField = new PdfSignatureField(page, 'Signature', { x: 50, y: 50, width: 100, height: 100 });
// Add the second visible signature field
let field2: PdfSignatureField = new PdfSignatureField(page, 'Signature1', { x: 250, y: 50, width: 100, height: 100 });
// Create a certifying signature
let signature: PdfSignature = PdfSignature.create(
    certData,
    password,
    {
        cryptographicStandard: CryptographicStandard.cms,
        digestAlgorithm: DigestAlgorithm.sha256,
        reason: 'I am author of this document.',
        certify: true,
        documentPermissions: PdfCertificationFlags.allowFormFill
    },
);
// Bind the certifying signature to the first signature field
field.setSignature(signature);
// Add the first signature field
document.form.add(field);
// Add the second signature field
document.form.add(field2);
// Save the current state to a Uint8Array
let data: Uint8Array = document.save();
// Dispose of the first document
document.destroy();
// Reopen the saved bytes as a new PdfDocument
let ldocument: PdfDocument = new PdfDocument(data);
// Retrieve the second signature field by index (0-based; index 1 = the second field)
field = ldocument.form.fieldAt(1);
// Create the second signature
signature = PdfSignature.create(
    certData,
    password,
    {
        cryptographicStandard: CryptographicStandard.cms,
        digestAlgorithm: DigestAlgorithm.sha256,
        certify: true,
        documentPermissions: PdfCertificationFlags.forbidChanges
    },
);
// Bind the signature to the second field
field.setSignature(signature);
// Save the document
ldocument.save('output.pdf');
// Dispose of the document
ldocument.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a new page to the document
var page = document.addPage();
// Add the first visible signature field
var field = new ej.pdf.PdfSignatureField(page, 'Signature', { x: 50, y: 50, width: 100, height: 100 });
// Add the second visible signature field
var field2 = new ej.pdf.PdfSignatureField(page, 'Signature1', { x: 250, y: 50, width: 100, height: 100 });
// Create a certifying signature (CMS + SHA-256), allowing form fill
var signature = ej.pdf.PdfSignature.create(
  certData,
  password,
  {
    cryptographicStandard: ej.pdf.CryptographicStandard.cms,
    digestAlgorithm: ej.pdf.DigestAlgorithm.sha256,
    reason: 'I am author of this document.',
    certify: true,
    documentPermissions: ej.pdf.PdfCertificationFlags.allowFormFill
  }
);
// Bind the certifying signature to the first signature field
field.setSignature(signature);
// Add the first signature field
document.form.add(field);
// Add the second signature field
document.form.add(field2);
// Save the current state to a Uint8Array
var data = document.save();
// Dispose of the first document
document.destroy();
// Reopen the saved bytes as a new PdfDocument
var ldocument = new ej.pdf.PdfDocument(data);
// Retrieve the second signature field by index (0-based; index 1 = the second field)
field = ldocument.form.fieldAt(1);
// Create the second signature (certify with forbid changes)
signature = ej.pdf.PdfSignature.create(
  certData,
  password,
  {
    cryptographicStandard: ej.pdf.CryptographicStandard.cms,
    digestAlgorithm: ej.pdf.DigestAlgorithm.sha256,
    certify: true,
    documentPermissions: ej.pdf.PdfCertificationFlags.forbidChanges
  }
);
// Bind the signature to the second field
field.setSignature(signature);
// Save the document
ldocument.save('output.pdf');
// Dispose of the document
ldocument.destroy();

{% endhighlight %}
{% endtabs %}

## Adding a timestamp in digital signature

This example shows how to apply a digital signature with a trusted timestamp, ensuring the signature remains valid even after the certificate expires. A timestamp callback contacts a Time Stamping Authority (TSA) to add an official time record to the signature. This provides long‑term proof of when the document was signed.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfForm, PdfSignatureField, PdfSignature, CryptographicStandard, DigestAlgorithm } from '@syncfusion/ej2-pdf';

// Load the document
let document: PdfDocument = new PdfDocument(data);
// Gets the first page of the document
let page: PdfPage = document.getPage(0);
// Access the PDF form
let form: PdfForm = document.form;
// Create a new signature field
let field: PdfSignatureField = new PdfSignatureField(page, 'Signature', {x: 10, y: 10, width: 100, height: 50});
// Create a timestamp callback
async function timestampCallback(request: Uint8Array): Promise<{ response: Uint8Array }> {
    // Implement timestamp response logic here
    return { response: new Uint8Array() }; // Placeholder return
}
// Create a new signature using PFX data, private key and call back function for timestamp
const signature: PdfSignature = PdfSignature.create(certData, password, { cryptographicStandard: CryptographicStandard.cms, digestAlgorithm: DigestAlgorithm.sha256 }, timestampCallback);
// Sets the signature to the field
field.setSignature(signature);
// Add the field into PDF form
form.add(field);
// Save the document
await document.saveAsync('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the document
var document = new ej.pdf.PdfDocument(data);
// Gets the first page of the document
var page = document.getPage(0);
// Access the PDF form
var form = document.form;
// Create a new signature field
var field = new ej.pdf.PdfSignatureField(page, 'Signature', {x: 10, y: 10, width: 100, height: 50});
// Create a timestamp callback
async function timestampCallback(request) {
    // Implement timestamp response logic here
    return { response: new Uint8Array() }; // Placeholder return
}
// Create a new signature using PFX data, private key and call back function for timestamp
const signature = PdfSignature.create(certData, password, { cryptographicStandard: ej.pdf.CryptographicStandard.cms, digestAlgorithm: ej.pdf.DigestAlgorithm.sha256 }, timestampCallback);
// Sets the signature to the field
field.setSignature(signature);
// Add the field into PDF form
form.add(field);
// Save the document
await document.saveAsync('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

N> This section requires async handling. When the timestamp or external-signing callback is asynchronous, use `await document.saveAsync(...)` instead of `document.save(...)`. Otherwise, the save completes before the async callback resolves and the timestamp bytes are lost.

## Customizing the signature appearance

This example demonstrates how to create a visible signature field, apply a CMS (SHA-256) digital signature with signer information, customize the signature appearance by drawing an image into the field, and save the signed PDF document.

`PdfBitmap` accepts an image from a base64 string, a `Uint8Array` of decoded bytes. Supported formats include PNG and JPEG.

`field.getAppearance()` returns a [PdfAppearance](https://ej2.syncfusion.com/documentation/api/pdf/pdfappearance) object whose `normal.graphics` property exposes a [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) instance for custom drawing inside the signature widget.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfSignatureField, PdfSignature, CryptographicStandard, DigestAlgorithm, PdfGraphics, PdfImage, PdfBitmap } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a new page to the document
let page: PdfPage = document.addPage();
// Create a visible signature field at (50, 50) sized 100x100
let field: PdfSignatureField = new PdfSignatureField(page, 'field', { x: 50, y: 50, width: 100, height: 100 });
// Create a digital signature with CMS + SHA-256
const signature: PdfSignature = PdfSignature.create(
  certData,
  password,
  {
    cryptographicStandard: CryptographicStandard.cms,
    digestAlgorithm: DigestAlgorithm.sha256,
    contactInfo: 'johndoe@owned.us',
    locationInfo: 'Honolulu, Hawaii',
    reason: 'I am author of this document.'
  },
);
// Get the normal appearance graphics for the signature field
let graphics: PdfGraphics = field.getAppearance().normal.graphics;
// Create an image from a base64-encoded bitmap (replace with a valid base64 PNG/JPEG string)
let image: PdfImage = new PdfBitmap( '/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Draw the image to fill the signature widget (100x100)
graphics.drawImage(image, { x: 0, y: 0, width: 100, height: 100 });
// Apply the signature to the field
field.setSignature(signature);
// Register the signature field with the document form
document.form.add(field);
// Save the document
document.save('output.pdf');
// Release document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a new page to the document
var page = document.addPage();
// Create a visible signature field at (50, 50) sized 100x100
var field = new ej.pdf.PdfSignatureField(page, 'field', { x: 50, y: 50, width: 100, height: 100 });
// Create a digital signature with CMS + SHA-256 and signer info
var signature = ej.pdf.PdfSignature.create(
  certData,
  password,
  {
    cryptographicStandard: ej.pdf.CryptographicStandard.cms,
    digestAlgorithm: ej.pdf.DigestAlgorithm.sha256,
    contactInfo: 'johndoe@owned.us',
    locationInfo: 'Honolulu, Hawaii',
    reason: 'I am author of this document.'
  }
);
// Get the normal appearance graphics for the signature field
var graphics = field.getAppearance().normal.graphics;
// Create an image from a base64-encoded bitmap (replace with a valid base64 PNG/JPEG string)
var image = new ej.pdf.PdfBitmap( '/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Draw the image to fill the signature widget (100x100)
graphics.drawImage(image, { x: 0, y: 0, width: 100, height: 100 });
// Apply the signature to the field
field.setSignature(signature);
// Register the signature field with the document form
document.form.add(field);
// Save the document
document.save('output.pdf');
// Release document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## Inspecting signatures

The following examples demonstrate how to read information from existing signatures in a PDF document.

### Retrieve the signed date of a PDF signature

This example demonstrates how to retrieve the signed date of a PDF signature using the [`getSignedDate()`](https://ej2.syncfusion.com/documentation/api/pdf/pdfsignature#getsigneddate) method of the [PdfSignature](https://ej2.syncfusion.com/documentation/api/pdf/pdfsignature) class. This property helps identify when the document was digitally signed.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfSignatureField, PdfSignature} from '@syncfusion/ej2-pdf';

// Load the document
let document: PdfDocument = new PdfDocument(data);
// Access the loaded signature field
let field: PdfSignatureField = document.form.fieldAt(0) as PdfSignatureField;
// Get the signature
let signature: PdfSignature = field.getSignature();
// Get the signed date
let date: Date = signature.getSignedDate();
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the document
var document = new ej.pdf.PdfDocument(data);
// Access the loaded signature field
var field = document.form.fieldAt(0);
// Get the signature
var signature = field.getSignature();
// Get the signed date
var date = signature.getSignedDate();
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Get certificate information from a PDF signature

This example demonstrates how to retrieve the certificate information of a PDF signature using the [getCertificateInformation()](https://ej2.syncfusion.com/documentation/api/pdf/pdfsignature#getcertificateinformation) method of the [PdfSignature](https://ej2.syncfusion.com/documentation/api/pdf/pdfsignature) class. This information includes details about the signer's certificate used for digital signing.

The `PdfCertificateInformation` object exposes the following properties:

| Property | Type | Description |
|---|---|---|
| `issuerName` | `string` | Issuer distinguished name. |
| `subjectName` | `string` | Subject distinguished name. |
| `serialNumber` | `string` | Certificate serial number. |
| `validFrom` | `Date` | Certificate validity start. |
| `validTo` | `Date` | Certificate validity end. |
| `version` | `string` | Certificate version. |
| `publicKey` | `Uint8Array` | Public key bytes. |

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfSignatureField, PdfCertificateInformation} from '@syncfusion/ej2-pdf';

// Load the document
let document: PdfDocument = new PdfDocument(data);
// Access the loaded signature field
let field: PdfSignatureField = document.form.fieldAt(0) as PdfSignatureField;
// Get the signature
let signature = field.getSignature();
// Get the certificate information of the signature
let certificateInfo: PdfCertificateInformation = signature.getCertificateInformation();
// Get the issuer name of the certificate
let issuerName = certificateInfo.issuerName;
// Get the serial number of the certificate
let serialNumber = certificateInfo.serialNumber;
// Get the subject name of the certificate
let subjectName = certificateInfo.subjectName;
// Get the start date from which the certificate is valid
let validFrom = certificateInfo.validFrom;
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the document
var document = new ej.pdf.PdfDocument(data);
// Access the loaded signature field
var field = document.form.fieldAt(0);
// Get the signature
var signature = field.getSignature();
// Get the certificate information of the signature
var certificateInfo = signature.getCertificateInformation();
// Get the issuer name of the certificate
var issuerName = certificateInfo.issuerName;
// Get the serial number of the certificate
var serialNumber = certificateInfo.serialNumber;
// Get the subject name of the certificate
var subjectName = certificateInfo.subjectName;
// Get the start date from which the certificate is valid
var validFrom = certificateInfo.validFrom;
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Get digital signature configuration options

This example demonstrates how to retrieve the configuration options of a digital signature in a PDF document using the [getSignatureOptions](https://ej2.syncfusion.com/documentation/api/pdf/pdfsignature#getsignatureoptions) method of the [PdfSignature](https://ej2.syncfusion.com/documentation/api/pdf/pdfsignature) class. These options include details such as the cryptographic standard and digest algorithm used for signing.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfForm, PdfSignature, PdfSignatureOptions, PdfSignatureField, CryptographicStandard} from '@syncfusion/ej2-pdf';

// Load the document
let document: PdfDocument = new PdfDocument(data);
// Access the PDF form
let form: PdfForm = document.form;
// Get the signature field
let field: PdfSignatureField = form.fieldAt(0) as PdfSignatureField;
// Get the PDF signature
let signature: PdfSignature = field.getSignature();
// Get the signature options
let options: PdfSignatureOptions = signature.getSignatureOptions();
// Get the cryptographic standard
let cryptographicStandard = options.cryptographicStandard;
// Get the digest algorithm
let digestAlgorithm = options.digestAlgorithm;
// Get the signer contact information
let contactInfo = options.contactInfo;
// Get the reason for signing
let reason = options.reason;
// Get the physical signing location
let locationInfo = options.locationInfo;
// Get the certification flag
let certify = options.certify;
// Get the certification permissions
let documentPermissions = options.documentPermissions;
// Get the signature name
let signedName = options.signedName;
// Get the lock status of the signature
let isLocked = options.isLocked;
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the document
var document = new ej.pdf.PdfDocument(data);
// Access the PDF form
var form = document.form;
// Get the signature field
var field = form.fieldAt(0);
// Get the PDF signature
var signature = field.getSignature();
// Get the signature options
var options = signature.getSignatureOptions();
// Get the cryptographic standard
var cryptographicStandard = options.cryptographicStandard;
// Get the digest algorithm
var digestAlgorithm = options.digestAlgorithm;
// Get the signer contact information
var contactInfo = options.contactInfo;
// Get the reason for signing
var reason = options.reason;
// Get the physical signing location
var locationInfo = options.locationInfo;
// Get the certification flag
var certify = options.certify;
// Get the certification permissions
var documentPermissions = options.documentPermissions;
// Get the signature name
var signedName = options.signedName;
// Get the lock status of the signature
var isLocked = options.isLocked;
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Document revisions

Digital signatures in a PDF create new revisions, keeping every previous version intact. These revisions let you see how the document looked when each signature was applied and check if anything changed later. You can access all revisions using [`getRevisions()`](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument#getrevisions) method of the [PdfDocument](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument) class or get a specific one using [`getRevision()`](https://ej2.syncfusion.com/documentation/api/pdf/pdfsignaturefield#getrevision) method of the [PdfSignatureField](https://ej2.syncfusion.com/documentation/api/pdf/pdfsignaturefield).

`getRevisions()` returns the zero-based indices of all revisions in a signed PDF, ordered by the sequence in which they were applied. `getRevision(index)` returns the document bytes for the revision at the given index, allowing comparison of pre- and post-signature states.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfForm, PdfSignatureField} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access loaded form
let form: PdfForm = document.form;
// Access the loaded form field
let signature: PdfSignatureField = form.fieldAt(0);
// Retrieve all revision indexes of the PDF document
let revisions: number[] = document.getRevisions();
// Gets the revision number associated with the signature field
let revision: number = signature.getRevision();
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access loaded form
var form = document.form;
// Access the loaded form field
var signature = form.fieldAt(0);
// Retrieve all revision indexes of the PDF document
var revisions = document.getRevisions();
// Gets the revision number associated with the signature field
var revision = signature.getRevision();
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Sign existing signature field

This section explains how to sign an existing unsigned signature field in a PDF using the [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library). You can locate predefined signature fields and apply a digital signature directly by calling [`setSignature()`](https://ej2.syncfusion.com/documentation/api/pdf/pdfsignaturefield#setsignature) method of the [PdfSignatureField](https://ej2.syncfusion.com/documentation/api/pdf/pdfsignaturefield) class, without altering the document layout. This is ideal for templates where signature placeholders already exist, allowing you to add digital signatures to the field using a certificate and signature settings.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfForm, DigestAlgorithm, CryptographicStandard, PdfSignature, PdfSignatureField} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access loaded form
let form: PdfForm = document.form;
// Access the loaded form field
let field: PdfSignatureField = form.fieldAt(0) as PdfSignatureField;
// Create a digital signature with CMS + SHA-256
const signature: PdfSignature = PdfSignature.create(certData, password, {
    digestAlgorithm: DigestAlgorithm.sha256,
    cryptographicStandard: CryptographicStandard.cms
});
// Apply the signature to the field
field.setSignature(signature);
// Save the document
document.save('output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access loaded form
var form = document.form;
// Access the loaded form field
var field = form.fieldAt(0);
// Create a digital signature with CMS + SHA-256
var signature = ej.pdf.PdfSignature.create(certData, password, {
    digestAlgorithm: ej.pdf.DigestAlgorithm.sha256,
    cryptographicStandard: ej.pdf.CryptographicStandard.cms
});
// Apply the signature to the field
field.setSignature(signature);
// Save the document
document.save('output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Remove existing digital signature

This section explains how to remove an existing digital signature from a PDF by using [`removeField()`](https://ej2.syncfusion.com/documentation/api/pdf/pdfform#removefield) method of [PdfForm](https://ej2.syncfusion.com/documentation/api/pdf/pdfform) class to delete the signature field entirely. Removing the field clears the signature dictionary, allowing the document to be edited, corrected, or re‑signed as needed. This is useful when preparing a PDF for updates or resolving signature‑related issues.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfForm, PdfSignatureField} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access loaded form
let form: PdfForm = document.form;
// Access the loaded form field
let field: PdfSignatureField = form.fieldAt(0) as PdfSignatureField;
// Remove the signature field
if (field instanceof PdfSignatureField) {
    document.form.removeField(field);
}
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access loaded form
var form = document.form;
// Access the loaded form field
var field = form.fieldAt(0);
// Remove the signature field
if (field instanceof ej.pdf.PdfSignatureField) {
    document.form.removeField(field);
}
// Save the document
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