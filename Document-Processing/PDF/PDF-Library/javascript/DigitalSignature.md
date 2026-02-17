---
title: Digital Signature in JavaScript PDF library | Syncfusion
description: This section explains how to create a digital signature in the PDF document by using JavaScript PDF library
platform: document-processing
control: PDF
documentation: UG
---
# Digital Signature in JavaScript PDF library

The PDF provides support to create, validate, and manage digital signatures in PDF documents, ensuring authenticity, integrity, and security.

## Adding a digital signature 

This example demonstrates how to add a digital signature to a PDF document using the `PdfSignature` class. Digital signatures ensure document authenticity and integrity by applying cryptographic standards.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfForm, PdfSignatureField, DigestAlgorithm, CryptographicStandard} from '@syncfusion/ej2-pdf';

// Load the document
let document: PdfDocument = new PdfDocument()
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
    {
        cryptographicStandard: CryptographicStandard.cms,
        digestAlgorithm: DigestAlgorithm.sha256
    },
    certData,
    password
);
// Set the signature to the field
field.setSignature(sign);
// Add the field into PDF form
form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the document
var document = new ej.pdf.PdfDocument();
// Get the first page of the document
var page = document.addPage();
// Access the PDF form
var form = document.form;
// Create a new signature field
var field = new ej.pdf.PdfSignatureField(page, 'Signature', {x: 10, y: 10, width: 100, height: 50});
// Create a new signature using PFX data and private key
var sign = ej.pdf.PdfSignature.create({cryptographicStandard: ej.pdf.CryptographicStandard.cms, digestAlgorithm: ej.pdf.DigestAlgorithm.sha256}, certData, password);
// Set the signature to the field
field.setSignature(sign);
// Add the field into PDF form
form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a digital signature in an existing PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfForm, PdfSignatureField, DigestAlgorithm, CryptographicStandard} from '@syncfusion/ej2-pdf';

// Load the document
let document: PdfDocument = new PdfDocument(data)
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
    {
        cryptographicStandard: CryptographicStandard.cms,
        digestAlgorithm: DigestAlgorithm.sha256
    },
    certData,
    password
);
// Set the signature to the field
field.setSignature(sign);
// Add the field into PDF form
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
    {
        cryptographicStandard: ej.pdf.CryptographicStandard.cms,
        digestAlgorithm: ej.pdf.DigestAlgorithm.sha256
    },
    certData,
    password
);
// Set the signature to the field
field.setSignature(sign);
// Add the field into PDF form
form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Create PDF Signature with External Signing

Syncfusion<sup>&reg;</sup> PDF provides support to create a new PDF signature using a callback function for external signing, enabling secure and flexible digital signature workflows.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfForm, PdfSignatureField, DigestAlgorithm, CryptographicStandard} from '@syncfusion/ej2-pdf';

// Load the document
let document: PdfDocument = new PdfDocument(data);
// Gets the first page of the document
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
    return new Uint8Array(); // Placeholder return
};
// Create a new signature using external signing
let signature: PdfSignature = PdfSignature.create(externalSignatureCallback, {
    cryptographicStandard: CryptographicStandard.cms,
    algorithm: DigestAlgorithm.sha256,
});
// Set the signature to the field
field.setSignature(signature);
// Add the field into PDF form
form.add(field);
// Save the document
document.save('output.pdf');
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
var field = new ej.pdf.PdfSignatureField(page, 'Signature', { x: 10, y: 10, width: 100, height: 50 });
// Define a callback function used for external signing
var externalSignatureCallback = (data, options) => {
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
// Add the field into PDF form
form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Create Signature with Public Certificates for External Signing

This example demonstrates how to create a new PDF signature using the `PdfSignature` class with public certificates for external signing. External signing allows you to implement custom signing logic outside the PDF library while maintaining compliance with cryptographic standards.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfForm, PdfSignatureField, DigestAlgorithm, CryptographicStandard} from '@syncfusion/ej2-pdf';

// Load the document
let document: PdfDocument = new PdfDocument(data);
// Gets the first page of the document
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
    return new Uint8Array(); // Placeholder return
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
// Add the field into PDF form
form.add(field);
// Save the document
document.save('output.pdf');
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
var field = new ej.pdf.PdfSignatureField(page, 'Signature', { x: 10, y: 10, width: 100, height: 50 });
// Define a callback function used for external signing
var externalSignatureCallback = function (data, options) {
    // Implement external signing logic here
    return new Uint8Array(); // Placeholder return
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
// Add the field into PDF form
form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Certified Signature

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
//// Add the signature field to the document form
document.form.add(field);
// Save the document
document.save('output.pdf');
// Release resources used by the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Lock Signature

This example shows how to add a signature field to a PDF, create a digital signature using certificate data and a password, lock the document after signing, and save the result in PDF library.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfSignatureField, PdfSignature } from '@syncfusion/ej2-pdf';

// Create a new PDF document
const document = new PdfDocument();
// Add a new page to the document
const page: PdfPage = document.addPage();
// Create a signature field on the page at specified coordinates
const field = new PdfSignatureField(page, 'field', { x: 50, y: 50, width: 100, height: 100 });
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
// Assign// Assign the signature to the signature field
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
// Retrieve the second signature field by index
field = ldocument.form.fieldAt(1) as PdfSignatureField;
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

## Drawing text/image in the Signature Appearance

This example demonstrates how to create a visible signature field, apply a CMS (SHA-256) digital signature with signer information, customize the signature appearance using a base64-encoded image, and save the signed PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfSignatureField, PdfSignature, CryptographicStandard, DigestAlgorithm, PdfGraphics, PdfImage, PdfBitmap } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a new page to the document
let page = document.addPage();
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
// Create an image from a base64-encoded bitmap (placeholder content shown)
let image: PdfImage = new PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Draw the image to fill the signature widget (100x100)
graphics.drawImage(image, { x: 0, y: 0, width: 100, height: 100 });
// Register the signature field
document.form.add(field);
// Apply the signature to the field
field.setSignature(signature);
// Save the Document
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
// Create an image from a base64-encoded bitmap (placeholder content shown)
var image = new ej.pdf.PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Draw the image to fill// Draw the image to fill the signature widget (100x100)
graphics.drawImage(image, { x: 0, y: 0, width: 100, height: 100 });
// Register the signature field with the document form
document.form.add(field);
// Apply the signature to the field
field.setSignature(signature);
// Save the document
document.save('output.pdf');
// Release document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## Retrieve the signed date of a PDF signature

This example demonstrates how to retrieve the signed date of a PDF signature using the `getSignedDate()` method of the `PdfSignature` class. This property helps identify when the document was digitally signed.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfForm, PdfSignatureField} from '@syncfusion/ej2-pdf';

// Load the document
let document: PdfDocument = new PdfDocument(data);
// Get the first page of the document
let page: PdfPage = document.getPage(0);
// Access the PDF form
let form: PdfForm = document.form;
// Access the loaded signature field
let field: PdfSignatureField = document.form.fieldAt(0) as PdfSignatureField;
// Get the signed
let signature = field.getSignature();
// Get the signed date
let date = signature.getSignedDate;
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
// Access the loaded signature field
var field = document.form.fieldAt(0) as ej.pdf.PdfSignatureField;
// Get the signed
var signature = field.getSignature();
// Get the signed date
var date = signature.getSignedDate;
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Get Certificate Information from a PDF Signature

This example demonstrates how to retrieve the certificate information of a PDF signature using the `getCertificateInformation()` method of the `PdfSignature` class. This information includes details about the signer's certificate used for digital signing.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfSignatureField, PdfCertificateInformation} from '@syncfusion/ej2-pdf';

// Load the document
let document: PdfDocument = new PdfDocument(data);
// Get the first page of the document
let page: PdfPage = document.getPage(0);
// Access the loaded signature field
let field = document.form.fieldAt(0) as PdfSignatureField;
// Get the signed
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
// Get the first page of the document
var page = document.getPage(0);
// Access the loaded signature field
var field = document.form.fieldAt(0) as PdfSignatureField;
// Get the signed
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

## Get Digital Signature Configuration Options

This example demonstrates how to retrieve the configuration options of a digital signature in a PDF document using the `getSignatureOptions()` method of the `PdfSignature` class. These options include details such as the cryptographic standard and digest algorithm used for signing.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfForm, PdfSignature, PdfSignatureOptions, PdfSignatureField, CryptographicStandard} from '@syncfusion/ej2-pdf';

// Load the document
let document: PdfDocument = new PdfDocument(data);
// Get the first page of the document
let page: PdfPage = document.getPage(0);
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
// Get// Get the signature name
let signedName = options.signedName;
// Get the lock status of the signature
let isLocked = options.isLocked
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
// Get// Get the signature name
var signedName = options.signedName;
// Get the lock status of the signature
var isLocked = options.isLocked
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Replace Empty Signature with Externally Signed Data

This example demonstrates how to replace an empty signature field in a PDF document with externally signed data using the `replaceEmptySignature()` method of the `PdfSignature` class. This method allows embedding externally signed content, certificates, and optional timestamp data into the PDF.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfForm, PdfSignatureField, DigestAlgorithm, CryptographicStandard} from '@syncfusion/ej2-pdf';

// Load the document
let document: PdfDocument = new PdfDocument(data);
// Get the first page of the document
let page: PdfPage = document.getPage(0);
// Access the PDF form
let form: PdfForm = document.form;
// Create a new signature field
let field: PdfSignatureField = new PdfSignatureField(page, 'Signature', { x: 10, y: 10, width: 100, height: 50 });
// Placeholder for signed data
let signedData: Uint8Array;
// Define a callback function used for external signing
let externalSignatureCallback = (
    data: Uint8Array,
    options: {
        algorithm: DigestAlgorithm;
        cryptographicStandard: CryptographicStandard;
    }
): void => {
    // Implement external signing logic here
    signedData = new Uint8Array(); // Placeholder return
};
// Create a new signature using external signing with public certificate collection
let signature: PdfSignature = PdfSignature.create(
    {
        cryptographicStandard: CryptographicStandard.cms,
        algorithm: DigestAlgorithm.sha256
    },
    externalSignatureCallback,
    publicCertificates
);
// Set the signature to the field
field.setSignature(signature);
// Add the field into PDF form
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
// Placeholder for signed data
var signedData;
// Define a callback function used for external signing
var externalSignatureCallback = function (data, options) {
    // Implement external signing logic here
    signedData = new Uint8Array(); // Placeholder return
};
// Create a new signature using external signing with public certificate collection
var signature = ej.pdf.PdfSignature.create(
    {
        cryptographicStandard: ej.pdf.CryptographicStandard.cms,
        algorithm: ej.pdf.DigestAlgorithm.sha256
    },
    externalSignatureCallback,
    publicCertificates
);
// Set the signature to the field
field.setSignature(signature);
// Add the field into PDF form
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
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Document revisions

Digital signatures create incremental revisions in a PDF, preserving each version of the document as new signatures are added. These revisions allow you to view the state of the document at the time of signing and verify whether any changes occurred afterward. The API provides access to these versions through `getRevisions()` for all revisions and `getRevision()` for the specific revision tied to a signature.

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

This section explains how to apply a digital signature to an existing unsigned signature field in a PDF form. The JavaScript PDF library lets you locate predefined signature fields and sign them without modifying the document layout. This is especially useful for templates where signature placeholders already exist. By applying a certificate and signature settings, you can securely complete the signature field and follow standard PDF signing workflows.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfForm, DigestAlgorithm, CryptographicStandard, PdfSignatureField} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access loaded form
let form: PdfForm = document.form;
// Access the loaded form field
let field: PdfSignatureField = form.fieldAt(0);
// Create a digital signature with CMS + SHA-256
const signature: PdfSignature = PdfSignature.create(certificate, 'password', {
    digestAlgorithm: DigestAlgorithm.sha256,
    cryptographicStandard: CryptographicStandard.cms
});
// Apply the signature to the field 
field.setSignature(signature);
// Add a form field
document.form.add(field);
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
// Create a digital signature with CMS + SHA-256
const signature = ej.pdf.PdfSignature.create(certificate, 'password', {
    digestAlgorithm: ej.pdf.DigestAlgorithm.sha256,
    cryptographicStandard: ej.pdf.CryptographicStandard.cms
});
// Apply the signature to the field 
field.setSignature(signature);
// Add a form field
document.form.add(field);
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Remove existing digital signature

This section explains how to remove one or more digital signatures from a PDF and restore the document to an signed or unsigned state. The JavaScript PDF library allows you to clear signature dictionaries so the file can be edited, re‑signed, or corrected. Removing a signature also invalidates any associated certification, making the document fully editable again. This is useful when preparing a PDF for updates or resolving signature‑related issues.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfForm, PdfSignatureField} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access loaded form
let form: PdfForm = document.form;
// Access the loaded form field
let field: PdfSignatureField = form.fieldAt(0) as PdfSignatureField;
// Remove the form field
if (field instanceof PdfSignatureField ) { 
    document.form.removeField(field); 
}
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
// Remove the form field
if (field instanceof ej.pdf.PdfSignatureField ) { 
    document.form.removeField(field); 
}
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}