# Digital Signature

> Sign PDF documents using PdfSignatureField and PdfCertificate with PFX private keys, external signers, timestamp servers, multiple signatures, and Long Term Validation (LTV).

---

## Add a Digital Signature to a New PDF

```dart
//Create a signature field with certificate and signing information
PdfSignatureField field = PdfSignatureField(page, 'signature',
    bounds: Rect.fromLTWH(0, 0, 200, 100),
    signature: PdfSignature(
        //Load certificate from a PFX file with its password
        certificate:
            PdfCertificate(File('PDF.pfx').readAsBytesSync(), 'password123'),
        contactInfo: 'johndoe@owned.us',
        locationInfo: 'Honolulu, Hawaii',
        reason: 'I am author of this document.',
        digestAlgorithm: DigestAlgorithm.sha256,
        cryptographicStandard: CryptographicStandard.cms));

//Add the signature field to the form
document.form.fields.add(field);
```

---

## Sign an Existing PDF Document

```dart
PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

//Get the first signature field
PdfSignatureField field = document.form.fields[0] as PdfSignatureField;

//Assign a certificate to sign the field
field.signature = PdfSignature(
    certificate:
        PdfCertificate(File('PDF.pfx').readAsBytesSync(), 'password123'),
    contactInfo: 'johndoe@owned.us',
    locationInfo: 'Honolulu, Hawaii',
    reason: 'I am author of this document.',
    digestAlgorithm: DigestAlgorithm.sha512,
    cryptographicStandard: CryptographicStandard.cades);
```

---

## Retrieve Certificate Details

```dart
PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

//Get the first signature field
PdfSignatureField field = document.form.fields[0] as PdfSignatureField;

// Create certificate
PdfCertificate certificate =
    PdfCertificate(File('PDF.pfx').readAsBytesSync(), 'password123');

String issuerName = certificate.issuerName;
List<int> serialNumber = certificate.serialNumber;
String subjectName = certificate.subjectName;
DateTime validFrom = certificate.validFrom;
DateTime validTo = certificate.validTo;
int version = certificate.version;

// Assign signature
field.signature = PdfSignature(
  certificate: certificate,
  contactInfo: 'johndoe@owned.us',
  locationInfo: 'Honolulu, Hawaii',
  reason: 'I am author of this document.',
  digestAlgorithm: DigestAlgorithm.sha512,
  cryptographicStandard: CryptographicStandard.cades,
);

// Set the Signature Date and Signer Name
field.signature!.signedDate = DateTime.now();
field.signature!.signedName = 'John Doe';
```

---


## Add a Signature Appearance (Image)

```dart
PdfSignatureField field = document.form.fields[0] as PdfSignatureField;

field.signature = PdfSignature(
    certificate:
        PdfCertificate(File('PDF.pfx').readAsBytesSync(), 'password123'));

//Draw an image on the signature field's appearance area
PdfGraphics? graphics = field.appearance.normal.graphics;
graphics!.drawImage(
    PdfBitmap(File('image.jpg').readAsBytesSync()),
    Rect.fromLTWH(0, 0, field.bounds.width, field.bounds.height));
```

---

## Add Multiple Digital Signatures

```dart
//Sign the first signature field
PdfSignatureField field = document.form.fields[0] as PdfSignatureField;
field.signature = PdfSignature(
    certificate:
        PdfCertificate(File('PDF.pfx').readAsBytesSync(), 'password123'),
    contactInfo: 'johndoe@owned.us',
    locationInfo: 'Honolulu, Hawaii',
    reason: 'I am author of this document.',
    digestAlgorithm: DigestAlgorithm.sha512,
    cryptographicStandard: CryptographicStandard.cades);

//Save and reload to apply incremental update
document = PdfDocument(inputBytes: await document.save());

//Sign the second signature field
field = document.form.fields[1] as PdfSignatureField;
field.signature = PdfSignature(
    certificate: PdfCertificate(
        File('Certificate.pfx').readAsBytesSync(), 'password123'),
    contactInfo: 'johndoe@owned.us',
    locationInfo: 'Honolulu, Hawaii',
    reason: 'I am co-author of this document.',
    digestAlgorithm: DigestAlgorithm.sha256,
    cryptographicStandard: CryptographicStandard.cms);
```

---

## Externally sign a PDF document

> **Requires:** `x509: ^0.2.4+3` in `pubspec.yaml` and `import 'package:x509/x509.dart' as x509;`

```dart
PdfSignatureField field = document.form.fields[0] as PdfSignatureField;

//Create a signature using an external signer with a public certificate
field.signature = PdfSignature()
  ..addExternalSigner(
      PdfExternalSigner(),
      [File('certificate.cer').readAsBytesSync()]);
```

```dart
//External signer implementation using synchronous signing
class PdfExternalSigner extends IPdfExternalSigner {
  @override
  DigestAlgorithm get hashAlgorithm => DigestAlgorithm.sha256;

  @override
  SignerResult signSync(List<int> message) {
    final pem = File('privatekey.pem').readAsBytesSync();
    final x509.KeyPair keyPair =
        x509.parsePem(String.fromCharCodes(pem)).single;
    final privateKey = keyPair.privateKey as x509.RsaPrivateKey;
    final signer =
        privateKey.createSigner(x509.algorithms.signing.rsa.sha256);
    final x509.Signature signed = signer.sign(message);
    return SignerResult(signed.data.toList());
  }
}
```

---

## Add a Timestamp to a Digital Signature

> **Note:** Timestamp signing only works with asynchronous `document.save()`. Before building the application, provide a valid URL to configure the timestamp.

```dart
PdfDocument document = PdfDocument();
PdfPage page = document.pages.add();

//Configure the timestamp server
TimestampServer server = TimestampServer(
    Uri.parse('add valid url'),
    userName: 'user',
    password: '123456',
    timeOut: const Duration(milliseconds: 5000));

bool isValid = await server.isValid;
if (isValid) {
  PdfSignatureField field = PdfSignatureField(page, 'signature',
      bounds: const Rect.fromLTWH(0, 0, 200, 100),
      signature: PdfSignature(
          certificate:
              PdfCertificate(File('PDF.pfx').readAsBytesSync(), 'syncfusion'),
          contactInfo: 'johndoe@owned.us',
          locationInfo: 'Honolulu, Hawaii',
          reason: 'I am author of this document.'));

  //Attach the timestamp server
  field.signature!.timestampServer = server;

  //Draw a signature image
  field.appearance.normal.graphics!.drawImage(
      PdfBitmap(File('picture.png').readAsBytesSync()),
      Rect.fromLTWH(0, 0, field.bounds.width, field.bounds.height));

  document.form.fields.add(field);
}

File('output.pdf').writeAsBytesSync(await document.save());
document.dispose();
```

---

## Add Timestamp to an Existing PDF Document

> **Note:** Before building the application, provide a valid URL to configure the timestamp.

```dart
PdfSignatureField field = document.form.fields[0] as PdfSignatureField;

TimestampServer server = TimestampServer(
    Uri.parse('add valid url'),
    userName: 'user',
    password: '123456',
    timeOut: const Duration(milliseconds: 5000));

bool isValid = await server.isValid;
if (isValid) {
  field.signature = PdfSignature();
  field.signature!.timestampServer = server;
}
```

---

## Create Long Term Validation (LTV) Signature

```dart
PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

PdfSignatureField field = document.form.fields[0] as PdfSignatureField;

//Create LTV for the signed signature
bool isLTVAdded = await field.signature!.createLongTermValidity();

File('output.pdf').writeAsBytesSync(await document.save());
document.dispose();
```

---

## Create Long Term Validation (LTV) with public certificates data

```dart
PdfSignatureField field = document.form.fields[0] as PdfSignatureField;

PdfCertificate certificate =
    PdfCertificate(File('PDF.pfx').readAsBytesSync(), 'syncfusion');

//Get public certificate chain
List<List<int>>? publicCertificatesData = certificate.getCertificateChain();

await field.signature!.createLongTermValidity(
    publicCertificatesData: publicCertificatesData,
    includePublicCertificates: true);
```

---

## Digest Algorithms and Cryptographic Standards

```dart
// Digest algorithms
DigestAlgorithm.sha1
DigestAlgorithm.sha256   // SHA-256 (recommended)
DigestAlgorithm.sha384
DigestAlgorithm.sha512   // SHA-512

// Cryptographic standards
CryptographicStandard.cms    // CMS (PKCS#7)
CryptographicStandard.cades  // CAdES (advanced electronic signature)
```

---

## Notes

- `PdfCertificate` requires a valid `.pfx` file with password containing the private key.
- For external signing, `signSync` works with both sync and async saves; async `sign` only works with async save.
- LTV embeds CRL/OCSP data — expect significantly larger file sizes.
- Timestamp server requires an active internet connection and a valid TSA (Time Stamp Authority) endpoint.
- Units are in **points** (1 inch = 72 points).