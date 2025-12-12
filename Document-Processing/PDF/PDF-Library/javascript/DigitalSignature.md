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

## Retrieve the Signed Date of a PDF Signature

This example demonstrates how to retrieve the signed date of a PDF signature using the `getSignedDate()` method of the `PdfSignature` class. This property helps identify when the document was digitally signed.

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
// Get the signed date
sign.getSignedDate();
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
var field = new ej.pdf.PdfSignatureField(page, 'Signature', { x: 10, y: 10, width: 100, height: 50 });
// Create a new signature using PFX data and private key
var sign = ej.pdf.PdfSignature.create({ cryptographicStandard: ej.pdf.CryptographicStandard.cms, digestAlgorithm: ej.pdf.DigestAlgorithm.sha256 }, certData, password);
// Set the signature to the field
field.setSignature(sign);
// Get the signed date
sign.getSignedDate();
// Add the field into PDF form
form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

## Get Certificate Information from a PDF Signature

This example demonstrates how to retrieve the certificate information of a PDF signature using the `getCertificateInformation()` method of the `PdfSignature` class. This information includes details about the signer's certificate used for digital signing.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfForm, PdfSignatureField, DigestAlgorithm,PdfCertificateInformation, CryptographicStandard} from '@syncfusion/ej2-pdf';

// Load the document
let document: PdfDocument = new PdfDocument(data);
// Get the first page of the document
let page: PdfPage = document.getPage(0);
// Access the PDF form
let form: PdfForm = document.form;
// Create a new signature field
let field: PdfSignatureField = new PdfSignatureField(page, 'Signature', { x: 10, y: 10, width: 100, height: 50 });
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
// Get the certificate information of the signature
let certificateInfo: PdfCertificateInformation = sign.getCertificateInformation();
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
var field = new ej.pdf.PdfSignatureField(page, 'Signature', { x: 10, y: 10, width: 100, height: 50 });
// Create a new signature using PFX data and private key
var sign = ej.pdf.PdfSignature.create({ cryptographicStandard: ej.pdf.CryptographicStandard.cms, digestAlgorithm: ej.pdf.DigestAlgorithm.sha256 }, certData, password);
// Set the signature to the field
field.setSignature(sign);
// Get the certificate information of the signature
var certificateInfo = sign.getCertificateInformation();
// Add the field into PDF form
form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

## Get Digital Signature Configuration Options

This example demonstrates how to retrieve the configuration options of a digital signature in a PDF document using the `getSignatureOptions()` method of the `PdfSignature` class. These options include details such as the cryptographic standard and digest algorithm used for signing.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfForm, PdfSignatureField, DigestAlgorithm, CryptographicStandard} from '@syncfusion/ej2-pdf';

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
// Get the cryptographic standard of the signature
let cryptographicStandard: CryptographicStandard = options.cryptographicStandard;
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
// Get the cryptographic standard of the signature
var cryptographicStandard = options.cryptographicStandard;
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
let data: Uint8Array = document.save();
// Destroy the document
document.destroy();
// Replace the empty signature with externally signed hash and certificates
let signedDocumentData: Uint8Array = PdfSignature.replaceEmptySignature(
    data,
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
var data = document.save();
// Destroy the document
document.destroy();
// Replace the empty signature with externally signed hash and certificates
var signedDocumentData = ej.pdf.PdfSignature.replaceEmptySignature(
    data,
    'Signature',
    signedData,
    ej.pdf.DigestAlgorithm.sha256,
    publicCertificates
);
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}