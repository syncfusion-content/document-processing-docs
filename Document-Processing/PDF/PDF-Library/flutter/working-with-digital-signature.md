---
layout: post
title: Digital Signature in Flutter PDF library | Syncfusion
description: Learn here all about internal and external Digital Signature feature of Syncfusion Flutter PDF non-UI library and more.
platform: document-processing
control: PDF
documentation: ug
---

# Digital Signature in Flutter PDF

Flutter PDF allows you to add a digital signature to the PDF document. You can sign the PDF document internally using a certificate with private keys or externally by using the digital signature created from various sources such as cloud services like DigitalSign.

## Adding a digital signature

To add a digital signature, you need a certificate with private keys. The following code example explains how to add a digital signature to the PDF document.

{% tabs %}
{% highlight dart tabtitle="dart" %}

//Creates a new PDF document.
PdfDocument document = PdfDocument();

//Adds a new page.
PdfPage page = document.pages.add();

//Creates a digital signature and sets signature information.
PdfSignatureField field = PdfSignatureField(page, 'signature',
    bounds: Rect.fromLTWH(0, 0, 200, 100),
    signature: PdfSignature(
        //Creates a certificate instance from the PFX file with a private key.
        certificate:
            PdfCertificate(File('PDF.pfx').readAsBytesSync(), 'password123'),
        contactInfo: 'johndoe@owned.us',
        locationInfo: 'Honolulu, Hawaii',
        reason: 'I am author of this document.',
        digestAlgorithm: DigestAlgorithm.sha256,
        cryptographicStandard: CryptographicStandard.cms));

//Add a signature field to the form.
document.form.fields.add(field);

//Save and dispose the PDF document.
File('Output.pdf').writeAsBytes(await document.save());
document.dispose();

{% endhighlight %}
{% endtabs %}

## Signing an existing document

You can load the signature field from the existing PDF document and add a certificate to the document as follows,

{% tabs %}
{% highlight dart tabtitle="dart" %}

//Loads an existing PDF document.
PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

//Gets the first signature field of the PDF document.
PdfSignatureField field = document.form.fields[0] as PdfSignatureField;

//Creates a digital signature and sets the signature information.
field.signature = PdfSignature(
    //Creates a certificate instance from the PFX file with a private key.
    certificate:
        PdfCertificate(File('PDF.pfx').readAsBytesSync(), 'password123'),
    contactInfo: 'johndoe@owned.us',
    locationInfo: 'Honolulu, Hawaii',
    reason: 'I am author of this document.',
    digestAlgorithm: DigestAlgorithm.sha512,
    cryptographicStandard: CryptographicStandard.cades);

//Save and dispose the PDF document.
File('Output.pdf').writeAsBytes(await document.save());
document.dispose();

{% endhighlight %}
{% endtabs %}

## Adding a signature appearance

You can customize the appearance of the signature field by using the [`appearance`](https://pub.dev/documentation/syncfusion_flutter_pdf/latest/pdf/PdfSignatureField/appearance.html) property in [`PdfSignatureField`](https://pub.dev/documentation/syncfusion_flutter_pdf/latest/pdf/PdfSignatureField-class.html) as follows,

{% tabs %}
{% highlight dart tabtitle="dart" %}

//Loads an existing PDF document.
PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

//Gets the first signature field of the PDF document.
PdfSignatureField field = document.form.fields[0] as PdfSignatureField;

//Creates a digital signature.
field.signature = PdfSignature(
    //Creates a certificate instance from the PFX file with a private key.
    certificate:
        PdfCertificate(File('PDF.pfx').readAsBytesSync(), 'password123'));

//Gets the signature field appearance graphics.
PdfGraphics graphics = field.appearance.normal.graphics;

//Draws the signature image.
graphics!.drawImage(
    PdfBitmap(File('image.jpg').readAsBytesSync()), Rect.fromLTWH(0, 0, field.bounds.width, field.bounds.height));

//Save and dispose the PDF document.
File('Output.pdf').writeAsBytes(await document.save());
document.dispose();

{% endhighlight %}
{% endtabs %}

## Externally sign a PDF document

You can sign the PDF document from an external digital signature created from various sources such as cloud services like DigitalSign.

The `addExternalSigner` method on `PdfSignature` accepts a custom signer (an implementation of `IPdfExternalSigner`) and a list of public-certificate bytes that are used to generate the message digest to be signed.

The following code example shows how to sign the PDF document from an external signature.

{% tabs %}
{% highlight dart tabtitle="dart" %}

//Loads an existing PDF document.
PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

//Gets the first signature field of the PDF document.
PdfSignatureField field = document.form.fields[0] as PdfSignatureField;

//Creates a digital signature.
field.signature = PdfSignature()
    ..addExternalSigner(
        //Creates an external signer.
        PdfExternalSigner(),
        //Loads a public certificate to generate message digest for signing.
        [File('certificate.cer').readAsBytesSync()]);

//Save and dispose the PDF document.
File('Output.pdf').writeAsBytes(await document.save());
document.dispose();

{% endhighlight %}
{% endtabs %}

You can create an external digital signature with the [`x509`](https://pub.dev/packages/x509) package by using the following steps:

**Add dependency**

Add the following dependency to your `pubspec.yaml` file and then run `flutter pub get`.

{% tabs %}
{% highlight yaml tabtitle="yaml" %}

dependencies:
  x509: ^0.1.4

{% endhighlight %}
{% endtabs %}

**Import package**

{% tabs %}
{% highlight dart tabtitle="dart" %}

import 'package:x509/x509.dart' as x509;

{% endhighlight %}
{% endtabs %}

You can compute the signed message digest by using the x509 package with a corresponding private key of the public certificate.

{% tabs %}
{% highlight dart %}

//Class for signing a PDF document externally.
class PdfExternalSigner extends IPdfExternalSigner {
  //Hash algorithm.
  @override
  DigestAlgorithm get hashAlgorithm => DigestAlgorithm.sha256;

  //Sign message digest.
  @override
  SignerResult signSync(List<int> message) {
    final pem = File('privatekey.pem').readAsBytesSync();
    final x509.KeyPair keyPair =
        x509.parsePem(String.fromCharCodes(pem)).single;
    final privateKey = keyPair.privateKey as x509.RsaPrivateKey;
    final signer = privateKey.createSigner(x509.algorithms.signing.rsa.sha256);
    final x509.Signature signed = signer.sign(message);
    return SignerResult(signed.data.toList());
  }
}

{% endhighlight %}
{% endtabs %}

You can use the sign method in `IPdfExternalSigner` for asynchronous signing.

N> The asynchronous `sign` method only works when the PDF document is saved asynchronously (using `await document.save()`). The `signSync` method can be used with both `document.save()` and `document.saveSync()`.

{% tabs %}
{% highlight dart tabtitle="dart" %}

    //Class for signing a PDF document externally.
    class PdfExternalSigner extends IPdfExternalSigner {
    //Hash algorithm.
    @override
    DigestAlgorithm get hashAlgorithm => DigestAlgorithm.sha256;

    //Sign message digest.
    @override
    Future<SignerResult> sign(List<int> message) async {
        final pem = File('privatekey.pem').readAsBytesSync();
        final x509.KeyPair keyPair =
            x509.parsePem(String.fromCharCodes(pem)).single;
        final privateKey = keyPair.privateKey as x509.RsaPrivateKey;
        final signer = privateKey.createSigner(x509.algorithms.signing.rsa.sha256);
        final x509.Signature signed = signer.sign(message);
        return SignerResult(signed.data.toList());
    }
    }

{% endhighlight %}
{% endtabs %}

## Adding multiple digital signatures

You can apply one or more digital signatures to a PDF document. The following code example shows how to add multiple signatures to the PDF document.

{% tabs %}
{% highlight dart tabtitle="dart" %}

//Loads an existing PDF document.
PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

//Gets the first signature field of the PDF document.
PdfSignatureField field = document.form.fields[0] as PdfSignatureField;

//Creates a digital signature and sets signature information.
field.signature = PdfSignature(
    //Creates a certificate instance from the PFX file with a private key.
    certificate:
        PdfCertificate(File('PDF.pfx').readAsBytesSync(), 'password123'),
    contactInfo: 'johndoe@owned.us',
    locationInfo: 'Honolulu, Hawaii',
    reason: 'I am author of this document.',
    digestAlgorithm: DigestAlgorithm.sha512,
    cryptographicStandard: CryptographicStandard.cades);

//Save and load the PDF document.
document = PdfDocument(inputBytes: await document.save());

//Gets the second signature field of the PDF document.
field = document.form.fields[1] as PdfSignatureField;

//Creates a digital signature and sets signature information.
field.signature = PdfSignature(
    //Creates a certificate instance from the PFX file with a private key.
    certificate: PdfCertificate(
        File('Certificate.pfx').readAsBytesSync(), 'password123'),
    contactInfo: 'johndoe@owned.us',
    locationInfo: 'Honolulu, Hawaii',
    reason: 'I am author of this document.',
    digestAlgorithm: DigestAlgorithm.sha256,
    cryptographicStandard: CryptographicStandard.cms);

//Save and dispose the PDF document.
File('Output.pdf').writeAsBytes(await document.save());
document.dispose();

{% endhighlight %}
{% endtabs %}

## Long Term Validation (LTV) PDF signature

The Syncfusion<sup>&reg;</sup> Flutter PDF supports creating long term signature validation for the signed PDF document. The LTV signature allows you to check the validity of a signature long after the document has been signed. To achieve long term validation, all the required elements for signature validation must be embedded in the signed PDF.

N> The resulting PDF document size will be substantial because all the necessary signature information, Certificate Revocation List (CRL), and Online Certificate Status Protocol (OCSP) are embedded.

The following code example shows how to enable LTV for a signed PDF document using the `createLongTermValidity` method in [PdfSignature](https://pub.dev/documentation/syncfusion_flutter_pdf/latest/pdf/PdfSignature-class.html) class.

{% tabs %}
{% highlight dart tabtitle="dart" %}

    // Load the existing PDF document.
    PdfDocument document =
        PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());
    // Load the existing signature field.
    PdfSignatureField field = document.form.fields[0] as PdfSignatureField;
    // Create LTV for loaded signed signature.
    bool isLTVAdded = await field.signature!.createLongTermValidity();
    // Save the document.
    File('output.pdf').writeAsBytesSync(await document.save());
    // Dispose the document.
    document.dispose();

{% endhighlight %}
{% endtabs %}

## LTV with public certificates data

The following code example shows how to create an LTV for a signed PDF document using public certificates with the `createLongTermValidity` method in [PdfSignature](https://pub.dev/documentation/syncfusion_flutter_pdf/latest/pdf/PdfSignature-class.html) class. The `publicCertificatesData` parameter accepts the chain of certificates returned by `PdfCertificate.getCertificateChain()`, and the `includePublicCertificates` flag controls whether the certificates are embedded into the signed document.

{% tabs %}
{% highlight dart tabtitle="dart" %}

    // Load the existing PDF document.
    PdfDocument document =
        PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());
    // Load the existing signature field.
    PdfSignatureField field = document.form.fields[0] as PdfSignatureField;
    // Load the certificate from the PFX file.
    PdfCertificate certificate =
        PdfCertificate(File('PDF.pfx').readAsBytesSync(), 'syncfusion');
    // Get the public certificates data.
    List<List<int>>? publicCertificatesData = certificate.getCertificateChain();
    // Create LTV with your public certificates.
    await field.signature!.createLongTermValidity(
        publicCertificatesData: publicCertificatesData,
        includePublicCertificates: true);
    // Save the document.
    File('output.pdf').writeAsBytesSync(await document.save());
    // Dispose the document.
    document.dispose();

{% endhighlight %}
{% endtabs %}

## Adding a timestamp in a digital signature

Use this approach when you are creating a new digital signature and want the signature itself to carry a trusted timestamp from a `TimestampServer` (a TSA URL, with optional `userName`, `password`, and `timeOut`).

The Syncfusion<sup>&reg;</sup> Flutter PDF allows you to add a timestamp in the digital signature of the PDF document using the `timestampServer` property in [PdfSignature](https://pub.dev/documentation/syncfusion_flutter_pdf/latest/pdf/PdfSignature-class.html) class. The following code example explains the same.

N> Signing using `TimestampServer` only works when the document is saved using the asynchronous [save](https://pub.dev/documentation/syncfusion_flutter_pdf/latest/pdf/PdfDocument/save.html). It is not supported in the synchronous [saveSync](https://pub.dev/documentation/syncfusion_flutter_pdf/latest/pdf/PdfDocument/saveSync.html).

{% tabs %}
{% highlight dart tabtitle="dart" %}

    // Create a new PDF document.
    PdfDocument document = PdfDocument();
    // Add a new page to the document.
    PdfPage page = document.pages.add();
    // Create a new timestamp server.
    TimestampServer server = TimestampServer(
        Uri.parse('http://syncfusion.digistamp.com'),
        userName: 'user',
        password: '123456',
        timeOut: const Duration(milliseconds: 5000));
    // Check whether the timestamp server is valid.
    bool isValid = await server.isValid;
    if (isValid) {
        // Add a new signature field to the page.
        PdfSignatureField field = PdfSignatureField(page, 'signature',
            bounds: const Rect.fromLTWH(0, 0, 200, 100),
            signature: PdfSignature(
            certificate:
                PdfCertificate(File('PDF.pfx').readAsBytesSync(), 'syncfusion'),
            contactInfo: 'johndoe@owned.us',
            locationInfo: 'Honolulu, Hawaii',
            reason: 'I am author of this document.',
            ));
        // Add the timestamp server to the signature.
        field.signature!.timestampServer = server;
        // Get the graphics of the signature field.
        final PdfGraphics? graphics = field.appearance.normal.graphics;
        // Draw an image to the signature field.
        graphics!.drawImage(PdfBitmap(File('picture.png').readAsBytesSync()),
            Rect.fromLTWH(0, 0, field.bounds.width, field.bounds.height));
        // Add the signature field to the form fields collection.
        document.form.fields.add(field);
    }
    // Save the document.
    File('output.pdf').writeAsBytesSync(await document.save());
    // Dispose the document.
    document.dispose();

{% endhighlight %}
{% endtabs %}

## Adding a timestamp to the PDF document

Use this approach when you need to add a trusted timestamp to a PDF document without binding it to a certificate-based signature.

You can add a timestamp to the PDF document using the `timestampServer` property in [PdfSignature](https://pub.dev/documentation/syncfusion_flutter_pdf/latest/pdf/PdfSignature-class.html) class. The following code example explains the same.

N> Signing using `TimestampServer` only works when the document is saved using the asynchronous [save](https://pub.dev/documentation/syncfusion_flutter_pdf/latest/pdf/PdfDocument/save.html). It is not supported in the synchronous [saveSync](https://pub.dev/documentation/syncfusion_flutter_pdf/latest/pdf/PdfDocument/saveSync.html).

{% tabs %}
{% highlight dart tabtitle="dart" %}

    // Create a new PDF document.
    PdfDocument document = PdfDocument();
    // Add a new page to the document.
    PdfPage page = document.pages.add();
    // Create a new timestamp server.
    TimestampServer server = TimestampServer(
        Uri.parse('http://syncfusion.digistamp.com'),
        userName: 'user',
        password: '123456',
        timeOut: const Duration(milliseconds: 5000));
    // Check whether the timestamp server is valid.
    bool isValid = await server.isValid;
    if (isValid) {
        // Add a new signature field to the page.
        PdfSignatureField field =
            PdfSignatureField(page, 'signature', signature: PdfSignature());
        // Add the timestamp server to the signature.
        field.signature!.timestampServer = server;
        // Add the signature field to the form fields collection.
        document.form.fields.add(field);
    }
    // Save the document.
    File('output.pdf').writeAsBytesSync(await document.save());
    // Dispose the document.
    document.dispose();

{% endhighlight %}
{% endtabs %}

## Adding a timestamp to an existing PDF document

Use this approach when the document already exists and you need to attach a trusted timestamp without re-signing with a certificate.

You can add a timestamp to the existing PDF document using the `timestampServer` property in [PdfSignature](https://pub.dev/documentation/syncfusion_flutter_pdf/latest/pdf/PdfSignature-class.html) class. The following code example explains the same.

N> Signing using `TimestampServer` only works when the document is saved using the asynchronous [save](https://pub.dev/documentation/syncfusion_flutter_pdf/latest/pdf/PdfDocument/save.html). It is not supported in the synchronous [saveSync](https://pub.dev/documentation/syncfusion_flutter_pdf/latest/pdf/PdfDocument/saveSync.html).

{% tabs %}
{% highlight dart tabtitle="dart" %}

    // Create a new PDF document.
    PdfDocument document =
        PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());
    // Load the existing signature field.
    PdfSignatureField field = document.form.fields[0] as PdfSignatureField;
    // Create a new timestamp server.
    TimestampServer server = TimestampServer(
        Uri.parse('http://syncfusion.digistamp.com'),
        userName: 'user',
        password: '123456',
        timeOut: const Duration(milliseconds: 5000));
    // Check whether the timestamp server is valid.
    bool isValid = await server.isValid;
    if (isValid) {
        // Add new signature to the existing signature field.
        field.signature = PdfSignature();
        // Add the timestamp server to the signature.
        field.signature!.timestampServer = server;
    }
    // Save the document.
    File('output.pdf').writeAsBytesSync(await document.save());
    // Dispose the document.
    document.dispose();

{% endhighlight %}
{% endtabs %}