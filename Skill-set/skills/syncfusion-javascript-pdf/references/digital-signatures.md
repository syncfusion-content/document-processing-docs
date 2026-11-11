# Digital Signatures in PDF Documents

## Table of Contents

1. [Overview](#overview)
2. [Adding Signatures](#adding-signatures)
3. [External Signing](#external-signing)
4. [Certified Signatures](#certified-signatures)
5. [Multiple Signatures](#multiple-signatures)
6. [Timestamps](#timestamps)
7. [Long-Term Validation (LTV)](#long-term-validation-ltv)
8. [Digital Signature Validation](#digital-signature-validation)
9. [Signature Properties](#signature-properties)
10. [Document Revisions](#document-revisions)
11. [Best Practices](#best-practices)
12. [Common Gotchas](#common-gotchas)
13. [Related References](#related-references)

## Overview

Digital signatures ensure PDF document authenticity, integrity, and security. The Syncfusion JavaScript PDF library provides comprehensive support for:

- Digital signature creation using PFX certificates and private keys
- External signing workflows with custom signing providers and hardware security modules (HSMs)
- Timestamp support for trusted verification of signing time
- Long-Term Validation (LTV) embedding revocation information (OCSP/CRL)
- Digital signature validation for document integrity and certificate trust chains
- Certificate inspection and metadata extraction
- Revision tracking for multi-signature workflows

## Adding Signatures

### Basic Digital Signature

Sign a PDF using PFX certificate:

```typescript
import {PdfDocument, PdfPage, PdfForm, PdfSignatureField, DigestAlgorithm, CryptographicStandard, PdfSignature} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let form: PdfForm = document.form;
let field: PdfSignatureField = new PdfSignatureField(page, 'Signature', {
    x: 10, y: 10, width: 100, height: 50
});
let sign: PdfSignature = PdfSignature.create(
    certData,
    password,
	{
        cryptographicStandard: CryptographicStandard.cms,
        digestAlgorithm: DigestAlgorithm.sha256
    }
);
field.setSignature(sign);
form.add(field);
document.save('output.pdf');
document.destroy();
```

### Signing Existing Documents

Add signature to existing PDF:

```typescript
import {PdfDocument, PdfPage, PdfForm, PdfSignatureField, PdfSignature, CryptographicStandard, DigestAlgorithm} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument(data);
let page: PdfPage = document.getPage(0);
let form: PdfForm = document.form;
let field: PdfSignatureField = new PdfSignatureField(page, 'Signature', {
    x: 10, y: 10, width: 100, height: 50
});
let sign: PdfSignature = PdfSignature.create(
    certData,
    password,
    {
        cryptographicStandard: CryptographicStandard.cms,
        digestAlgorithm: DigestAlgorithm.sha256
    }
);
field.setSignature(sign);
form.add(field);
document.save('output.pdf');
document.destroy();
```

## External Signing

### Callback-Based Signing

Implement custom signing logic:

```typescript
import {PdfDocument, PdfPage, PdfForm, PdfSignatureField, PdfSignature, DigestAlgorithm, CryptographicStandard} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument(data);
let page: PdfPage = document.getPage(0);
let form: PdfForm = document.form;
let field: PdfSignatureField = new PdfSignatureField(page, 'Signature', { x: 10, y: 10, width: 100, height: 50 });

let externalSignatureCallback = (
    data: Uint8Array,
    options: {
        algorithm: DigestAlgorithm,
        cryptographicStandard: CryptographicStandard,
    }
): { signedData: Uint8Array; timestampData?: Uint8Array } => {
    // Implement external signing logic here
    return { signedData: new Uint8Array() };
};

let signature: PdfSignature = PdfSignature.create(externalSignatureCallback, {
    cryptographicStandard: CryptographicStandard.cms,
    algorithm: DigestAlgorithm.sha256,
});

field.setSignature(signature);
form.add(field);
document.save('output.pdf');
document.destroy();
```

### With Public Certificates

External signing with certificate chain:

```typescript
let signature: PdfSignature = PdfSignature.create(
    externalSignatureCallback,
    publicCertificates,
    {
        cryptographicStandard: CryptographicStandard.cms,
        algorithm: DigestAlgorithm.sha256
    }
);
```

## Certified Signatures

### Document Certification

Certify document with restrictions:

```typescript
import { PdfDocument, PdfPage, PdfSignatureField, PdfSignature, PdfCertificationFlags } from '@syncfusion/ej2-pdf';

const document: PdfDocument = new PdfDocument();
const page: PdfPage = document.addPage();
const field: PdfSignatureField = new PdfSignatureField(page, 'field', { x: 50, y: 50, width: 100, height: 100 });
const signature: PdfSignature = PdfSignature.create(certData, password, { certify: true });
field.setSignature(signature);
document.form.add(field);
document.save('output.pdf');
document.destroy();
```

### Lock After Signing

Prevent modifications:

```typescript
const signature: PdfSignature = PdfSignature.create(certData, password, { isLocked: true });
```

## Multiple Signatures

### Adding Sequential Signatures

Apply multiple signatures:

```typescript
import { PdfDocument, PdfPage, PdfSignatureField, PdfSignature, PdfCertificationFlags } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();

// First signature (certifying)
let field: PdfSignatureField = new PdfSignatureField(page, 'Signature', { x: 50, y: 50, width: 100, height: 100 });
let signature: PdfSignature = PdfSignature.create(
    certData,
    password,
    {
        certify: true,
        documentPermissions: PdfCertificationFlags.allowFormFill
    },
);
field.setSignature(signature);
document.form.add(field);

// Second field for later signing
let field2: PdfSignatureField = new PdfSignatureField(page, 'Signature1', { x: 250, y: 50, width: 100, height: 100 });
document.form.add(field2);

let data: Uint8Array = document.save();
document.destroy();

// Reopen and sign second field
let ldocument: PdfDocument = new PdfDocument(data);
field = ldocument.form.fieldAt(1) as PdfSignatureField;
signature = PdfSignature.create(
    certData,
    password,
    {
        certify: true,
        documentPermissions: PdfCertificationFlags.forbidChanges
    },
);
field.setSignature(signature);
ldocument.save('output.pdf');
ldocument.destroy();
```

## Timestamps

### Adding Timestamp

Include trusted timestamp:

```typescript
import { PdfDocument, PdfPage, PdfForm, PdfSignatureField, PdfSignature } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument(data);
let page: PdfPage = document.getPage(0);
let form: PdfForm = document.form;
let field: PdfSignatureField = new PdfSignatureField(page, 'Signature', {x: 10, y: 10, width: 100, height: 50});

async function timestampCallback(request: Uint8Array): Promise<{ response: Uint8Array }> {
    // Implement timestamp response logic here
    return { response: new Uint8Array() };
}

const signature: PdfSignature = PdfSignature.create(certData, password, 
    { cryptographicStandard: CryptographicStandard.cms, digestAlgorithm: DigestAlgorithm.sha256 }, 
    timestampCallback
);

field.setSignature(signature);
form.add(field);
await document.saveAsync('output.pdf');
document.destroy();
```

## Long-Term Validation (LTV)

Long-Term Validation (LTV) preserves signature validity by embedding certificate revocation information (OCSP/CRL) directly into the PDF. This allows signatures to remain verifiable even after certificates expire.

### Enable Long-Term Validation for Existing Signatures

Enable LTV on a signed document by reloading the saved PDF, retrieving the signature field and its `PdfSignature`, and calling `enableLTV()` with a callback returning revocation responses (OCSP or CRL).

Key APIs
- `PdfSignature`
- `enableLTV()`

```typescript
const signature: PdfSignature = field.getSignature();

await signature.enableLTV(longTermValidationCallback);
```

Full workflow:

```typescript
import { PdfDocument, PdfSignatureField, PdfSignature } from '@syncfusion/ej2-pdf';

let loadedDocument: PdfDocument = new PdfDocument(signedData);
let loadedField: PdfSignatureField = loadedDocument.form.fieldAt(0) as PdfSignatureField;
let loadedSignature: PdfSignature = loadedField.getSignature();

async function longTermValidationCallback(url: string, requestBytes?: Uint8Array): Promise<{ response: Uint8Array }> {
    // Send requestBytes to the supplied URL and return OCSP or CRL response bytes
    return { response: revocationResponse };
}

await loadedSignature.enableLTV(longTermValidationCallback);
loadedDocument.save('ltv-output.pdf');
loadedDocument.destroy();
```

### Create LTV for External Signatures

For external signing workflows, reload the externally signed document, retrieve the created signature, and attach OCSP/CRL revocation information.

Key APIs
- `PdfSignature`
- `enableLTV()`
- `PdfSignature.create()`

```typescript
import { PdfDocument, PdfSignatureField, PdfSignature } from '@syncfusion/ej2-pdf';

// Reload externally signed PDF document
let document: PdfDocument = new PdfDocument(externalSignedData);
let field: PdfSignatureField = document.form.fieldAt(0) as PdfSignatureField;
let signature: PdfSignature = field.getSignature();

// Enable LTV using available OCSP or CRL response
await signature.enableLTV(longTermValidationCallback);
document.save('external-ltv.pdf');
document.destroy();
```

### Enable LTV with Public Certificates

Provide the public certificate chain when enabling LTV for an externally signed or certificate-chained document to validate revocation.

Key APIs
- `enableLTV()`
- `RevocationType`

```typescript
await signature.enableLTV(
    publicCertificates,
    RevocationType.ocspOrCrl,
    callback
);
```

### Best-Practice Guidance for LTV

- Enable LTV immediately after signing.
- Embed revocation information whenever possible.
- Use LTV for archival and compliance scenarios.
- Apply LTV to every signature in multi-signature documents.

## Digital Signature Validation

Validate signatures to verify authenticity, certificate trust chains, revocation information, timestamps, and document integrity.

Signature validation checks:
- Document modifications made after signing
- Certificate chain validity against provided trusted certificates
- Timestamp validity associated with the signature
- OCSP validation and certificate revocation status
- CRL validation
- Multiple signature verification across all document fields

### Validate a Signature From a Signature Field

Retrieve an individual signature field and validate its associated signature using configured validation options and trusted certificates. Validation is called directly on the `PdfSignatureField` using `validateSignature()`.

Key APIs
- `PdfSignatureField`
- `PdfSignatureValidationOptions`
- `validateSignature()`

```typescript
import { PdfDocument, PdfSignatureField, PdfSignatureValidationOptions } from '@syncfusion/ej2-pdf';

const document: PdfDocument = new PdfDocument(documentData);
const field: PdfSignatureField = document.form.fieldAt(0) as PdfSignatureField;

const options: PdfSignatureValidationOptions = {
    trustedCertificates: [certificateData],
    passwords: ['syncfusion']
};

// Validate signature from the signature field
const result = field.validateSignature(options);
```

**Returned Validation Information:**
- `signatureName`: Name identifying the validated signature field.
- `isSignatureValid`: Boolean indicating whether the signature is cryptographically valid.
- `signatureStatus`: Overall status of the signature.
- `isDocumentModified`: Boolean indicating whether document changes occurred after signing.
- `revocationResult`: Revocation status from OCSP and CRL checks.

### Validate All Signatures in a PDF

Perform document-wide validation across every signature field in the PDF document using `validateSignatures()`.

Key APIs
- `validateSignatures()`

```typescript
import { PdfDocument, PdfSignatureValidationOptions } from '@syncfusion/ej2-pdf';

const document: PdfDocument = new PdfDocument(documentData);

const options: PdfSignatureValidationOptions = {
    trustedCertificates: [certificateData],
    passwords: ['syncfusion']
};

const result = document.form.validateSignatures(options);

if (result.isValid) {
    console.log('All signatures in the document are valid');
}

result.results.forEach((sigResult) => {
    console.log(`${sigResult.signatureName}: valid=${sigResult.isSignatureValid}`);
});
```

Key properties of the result:
- `result.isValid`: `true` if all signatures in the PDF document are valid.
- `result.results`: Collection of individual validation results for each signature field.

### Validation Use Cases

- Compliance verification (e.g., eIDAS, PDF/A, FDA CFR 21 Part 11)
- Signature auditing and provenance inspection
- Workflow approval verification before downstream processing
- Document integrity validation to detect unauthorized modifications

## Signature Properties

### Retrieving Information

Get signature details:

```typescript
import {PdfDocument, PdfPage, PdfSignatureField, PdfCertificateInformation, PdfSignatureOptions} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument(data);
let page: PdfPage = document.getPage(0);
let field = document.form.fieldAt(0) as PdfSignatureField;
let signature = field.getSignature();

// Get signed date
let date = signature.getSignedDate;

// Get certificate information
let certificateInfo: PdfCertificateInformation = signature.getCertificateInformation();
let issuerName = certificateInfo.issuerName;
let serialNumber = certificateInfo.serialNumber;
let subjectName = certificateInfo.subjectName;
let validFrom = certificateInfo.validFrom;

// Get signature options
let options: PdfSignatureOptions = signature.getSignatureOptions();
let cryptographicStandard = options.cryptographicStandard;
let digestAlgorithm = options.digestAlgorithm;

document.destroy();
```

### Custom Appearance

Draw image in signature:

```typescript
import { PdfDocument, PdfPage, PdfSignatureField, PdfSignature, PdfGraphics, PdfImage, PdfBitmap } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let field: PdfSignatureField = new PdfSignatureField(page, 'field', { x: 50, y: 50, width: 100, height: 100 });
const signature: PdfSignature = PdfSignature.create(
  certData,
  password,
  {
    contactInfo: 'johndoe@owned.us',
    locationInfo: 'Honolulu, Hawaii',
    reason: 'I am author of this document.'
  },
);

let graphics: PdfGraphics = field.getAppearance().normal.graphics;
let image: PdfImage = new PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
graphics.drawImage(image, { x: 0, y: 0, width: 100, height: 100 });

document.form.add(field);
field.setSignature(signature);
document.save('output.pdf');
document.destroy();
```

## Document Revisions

### Accessing Revisions

Retrieve document history:

```typescript
import {PdfDocument, PdfForm, PdfSignatureField} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument(data);
let form: PdfForm = document.form;
let signature: PdfSignatureField = form.fieldAt(0);
let revisions: number[] = document.getRevisions();
let revision: number = signature.getRevision();
document.destroy();
```

## Best Practices

1. **Certificate Security**: Store certificates securely
2. **Algorithm Choice**: Use SHA-256 or higher
3. **Timestamps**: Include for long-term validity
4. **Appearance**: Provide visual signature representation
5. **Validation**: Validate signatures before distribution
6. **Multiple Signatures**: Plan signature workflow carefully
7. **Enable LTV for Preservation**: Enable LTV for long-term document preservation.
8. **Validate Before Archival**: Validate signatures before archival or distribution.
9. **Trusted Root Certificates**: Use trusted root certificates when validating signatures.
10. **Combine Timestamps with LTV**: Include timestamps together with LTV whenever possible.
11. **Review Certificate Chains**: Periodically review certificate trust chains.
12. **Preserve Revocation Data**: Preserve revocation information for compliance workflows.

## Common Gotchas

1. **Certificate Expiry**: Expired certificates invalidate signatures
2. **Timestamp Required**: Some jurisdictions require timestamps
3. **Certification Order**: Certifying signature must be first
4. **Locked Documents**: Locked signatures prevent all modifications
5. **Revision Tracking**: Each signature creates new revision
6. **External Signing**: Requires proper PKCS#7 formatting
7. **LTV Dependency on Revocation Sources**: LTV requires OCSP or CRL response availability.
8. **LTV Order**: LTV must be applied after a signature exists.
9. **Certificate Trust Dependency**: Validation results depend on trusted certificates.
10. **Unavailable Revocation Data**: Revocation checks may fail if revocation data is unavailable.
11. **Individual Verification**: Multiple signatures should be validated individually.
12. **Expired Certificates with LTV**: Expired certificates may still validate if properly timestamped and LTV-enabled.

## Related References

- [Form Fields](./form-fields.md) - Signature fields
- [Annotations](./annotations.md) - Signature annotations
- [Encryption](./encryption.md) - Document security and encryption
- [Certificates](./certificates.md) - Certificate management
- [Attachments](./attachments.md) - Document attachments
- [Document Security](./document-security.md) - General document security
