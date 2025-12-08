---
title: Digital Signature in TypeScript PDF library | Syncfusion
description: This section explains how to create a digital signature in the PDF document by using TypeScript PDF library
platform: document-processing
control: PDF
documentation: UG
---
# Digital Signature in TypeScript PDF library

Essential<sup>&reg;</sup> PDF provides support to create, validate, and manage digital signatures in PDF documents, ensuring authenticity, integrity, and security.

## Adding a digital signature

This example demonstrates how to add a digital signature to a PDF document using the `PdfSignature` class. Digital signatures ensure document authenticity and integrity by applying cryptographic standards.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfForm, PdfSignatureField, DigestAlgorithm, CryptographicStandard} from '@syncfusion/ej2-pdf';

// Load the document
let document: PdfDocument = new PdfDocument(data, password);
// Get the first page of the document
let page: PdfPage = document.getPage(0);
// Access the PDF form
let form: PdfForm = document.form;
// Create a new signature field
let field: PdfSignatureField = new PdfSignatureField(page, 'Signature', { x: 10, y: 10, width: 100, height: 50 });
// Define a callback function used for external signing
const externalSignatureCallback = (
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
const signature: PdfSignature = PdfSignature.create(externalSignatureCallback, {
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
{% endtabs %}

## Create a Signature Without Certificate Data for External Signing

This example demonstrates how to create a signature field and configure a PDF signature for external signing without embedding certificate data. External signing enables you to implement custom signing logic outside the PDF library while maintaining compliance with cryptographic standards.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfForm, PdfSignatureField, DigestAlgorithm, CryptographicStandard} from '@syncfusion/ej2-pdf';

    // Load the document
    let document: PdfDocument = new PdfDocument(data, password);
    // Gets the first page of the document
    let page: PdfPage = document.getPage(0);
    // Access the PDF form
    let form: PdfForm = document.form;
    // Create a new signature field
    let field: PdfSignatureField = new PdfSignatureField(page, 'Signature', { x: 10, y: 10, width: 100, height: 50 });
    // Define a callback function used for external signing
    const externalSignatureCallback = (data: Uint8Array,
                                        options: {
                                          algorithm: DigestAlgorithm,
                                          cryptographicStandard: CryptographicStandard,
                                          }): {signedData: Uint8Array, timestampData?: Uint8Array}  => {
    // Implement external signing logic here
    return new Uint8Array(); // Placeholder return
     };
    // Create a new signature using external signing
    const signature: PdfSignature = PdfSignature.create({
         cryptographicStandard: CryptographicStandard.cms,
         algorithm: DigestAlgorithm.sha256
    }, externalSignatureCallback);
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
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfForm, PdfSignatureField, DigestAlgorithm, CryptographicStandard} from '@syncfusion/ej2-pdf';

// Load the document
let document: PdfDocument = new PdfDocument(data, password);
// Get the first page of the document
let page: PdfPage = document.getPage(0);
// Access the PDF form
let form: PdfForm = document.form;
// Create a new signature field
let field: PdfSignatureField = new PdfSignatureField(page, 'Signature', { x: 10, y: 10, width: 100, height: 50 });
// Define a callback function used for external signing
const externalSignatureCallback = (
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
const signature: PdfSignature = PdfSignature.create(
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
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Create Signature Using PFX Data and Private Key

This example demonstrates how to create a new PDF signature using the `PdfSignature` class with PFX certificate data and a private key. This approach is commonly used for digital signing when you have access to a personal certificate file and its password.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfForm, PdfSignatureField, DigestAlgorithm, CryptographicStandard} from '@syncfusion/ej2-pdf';

// Load the document
let document: PdfDocument = new PdfDocument(data, password);
// Get the first page of the document
let page: PdfPage = document.getPage(0);
// Access the PDF form
let form: PdfForm = document.form;
// Create a new signature field
let field: PdfSignatureField = new PdfSignatureField(page, 'Signature', { x: 10, y: 10, width: 100, height: 50 });
// Create a new signature using PFX data and private key
const sign: PdfSignature = PdfSignature.create(
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
{% endtabs %}

## Check Signature Visibility

This example demonstrates how to check whether a PDF signature is visible using the `isVisible()` method of the `PdfSignature` class. This property helps determine if the signature appearance is displayed on the document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfForm, PdfSignatureField, DigestAlgorithm, CryptographicStandard} from '@syncfusion/ej2-pdf';

// Load the document
let document: PdfDocument = new PdfDocument(data, password);
// Get the first page of the document
let page: PdfPage = document.getPage(0);
// Access the PDF form
let form: PdfForm = document.form;
// Create a new signature field
let field: PdfSignatureField = new PdfSignatureField(page, 'Signature', { x: 10, y: 10, width: 100, height: 50 });
// Create a new signature using PFX data and private key
const sign: PdfSignature = PdfSignature.create(
    {
        cryptographicStandard: CryptographicStandard.cms,
        digestAlgorithm: DigestAlgorithm.sha256
    },
    certData,
    password
);
// Set the signature to the field
field.setSignature(sign);
// Check the signature visibility
sign.isVisible();
// Add the field into PDF form
form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Get Signed Date

This example demonstrates how to retrieve the signed date of a PDF signature using the `getSignedDate()` method of the `PdfSignature` class. This property helps identify when the document was digitally signed.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfForm, PdfSignatureField, DigestAlgorithm, CryptographicStandard} from '@syncfusion/ej2-pdf';

// Load the document
let document: PdfDocument = new PdfDocument(data, password);
// Get the first page of the document
let page: PdfPage = document.getPage(0);
// Access the PDF form
let form: PdfForm = document.form;
// Create a new signature field
let field: PdfSignatureField = new PdfSignatureField(page, 'Signature', { x: 10, y: 10, width: 100, height: 50 });
// Create a new signature using PFX data and private key
const sign: PdfSignature = PdfSignature.create(
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
{% endtabs %}

## Get Certificate Information of the Signature

This example demonstrates how to retrieve the certificate information of a PDF signature using the `getCertificateInformation()` method of the `PdfSignature` class. This information includes details about the signer’s certificate used for digital signing.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfForm, PdfSignatureField, DigestAlgorithm, CryptographicStandard} from '@syncfusion/ej2-pdf';

// Load the document
let document: PdfDocument = new PdfDocument(data, password);
// Get the first page of the document
let page: PdfPage = document.getPage(0);
// Access the PDF form
let form: PdfForm = document.form;
// Create a new signature field
let field: PdfSignatureField = new PdfSignatureField(page, 'Signature', { x: 10, y: 10, width: 100, height: 50 });
// Create a new signature using PFX data and private key
const sign: PdfSignature = PdfSignature.create(
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
const certificateInfo: PdfCertificateInformation = sign.getCertificateInformation();
// Add the field into PDF form
form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Get Digital Signature Options

This example demonstrates how to retrieve the configuration options of a digital signature in a PDF document using the `getSignatureOptions()` method of the `PdfSignature` class. These options include details such as the cryptographic standard and digest algorithm used for signing.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfForm, PdfSignatureField, DigestAlgorithm, CryptographicStandard} from '@syncfusion/ej2-pdf';

// Load the document
let document: PdfDocument = new PdfDocument(data, password);
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
{% endtabs %}

## Replace Empty Signature with Externally Signed Data

This example demonstrates how to replace an empty signature field in a PDF document with externally signed data using the `replaceEmptySignature()` method of the `PdfSignature` class. This method allows embedding externally signed content, certificates, and optional timestamp data into the PDF.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfForm, PdfSignatureField, DigestAlgorithm, CryptographicStandard} from '@syncfusion/ej2-pdf';

// Load the document
let document: PdfDocument = new PdfDocument('data');
// Get the first page of the document
let page: PdfPage = document.getPage(0);
// Access the PDF form
let form: PdfForm = document.form;
// Create a new signature field
let field: PdfSignatureField = new PdfSignatureField(page, 'Signature', { x: 10, y: 10, width: 100, height: 50 });
// Placeholder for signed data
let signedData: Uint8Array;
// Define a callback function used for external signing
const externalSignatureCallback = (
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
const signature: PdfSignature = PdfSignature.create(
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
const data: Uint8Array = document.save();
// Destroy the document
document.destroy();
// Replace the empty signature with externally signed hash and certificates
const signedDocumentData: Uint8Array = PdfSignature.replaceEmptySignature(
    data,
    'Signature',
    signedData,
    DigestAlgorithm.sha256,
    publicCertificates
);
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}