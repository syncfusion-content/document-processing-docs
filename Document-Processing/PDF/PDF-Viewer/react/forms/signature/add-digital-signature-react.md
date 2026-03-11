---
layout: post
title: Add Digital Signature to PDF in React PDF Viewer | Syncfusion
description: Learn how to add signature fields and apply PKI-based digital signatures using Syncfusion React PDF Viewer and JavaScript PDF Library.
platform: document-processing
control: PdfViewer
documentation: ug
---

# Add Digital Signature to PDF

This section explains how to **add signature fields** using the Syncfusion **React PDF Viewer** and how to apply **digital (PKI) signatures** using the **JavaScript PDF Library**.

N> As instructed by team leads — use the **React PDF Viewer only to add & place signature fields**. Use the **JavaScript PDF Library** to apply the *actual cryptographic digital signature*.

## Overview (Explanation)

A **digital signature** provides:
- **Authenticity** – confirms the signer’s identity.
- **Integrity** – detects modification after signing.
- **Non‑repudiation** – signer cannot deny signing.

Syncfusion supports a hybrid workflow:
- Viewer → **[Design signature fields](../manage-form-fields/create-form-fields#signature-field)**, capture Draw/Type/Upload electronic signature.
- PDF Library → **[Apply PKCS#7/CMS digital signature](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/digitalsignature)** using a certificate (PFX/P12).

## Add a Signature Field (How-to)

### Using the UI
1. Open **Form Designer**.
2. Select **Signature Field**.
3. Click on the document to place the field.
4. Configure Name, Tooltip, Required, etc.

![Signature annotation toolbar](../../../javascript-es6/images/add_sign.png)

### Using the API
```tsx
viewerRef.current?.formDesignerModule.addFormField('SignatureField', {
  name: 'ApproverSignature',
  pageNumber: 1,
  bounds: { X: 72, Y: 640, Width: 220, Height: 48 },
  isRequired: true,
  tooltip: 'Sign here'
});
```

## Capture Electronic Signature (Draw / Type / Upload)
Users click the field → dialog appears → they can **Draw**, **Type**, or **Upload** a handwritten signature.

This creates a *visual* signature only (not cryptographically secure).

## Apply PKI Digital Signature (JavaScript PDF Library)

Digital signature must be applied using **@syncfusion/ej2-pdf**.

```ts
import { PdfDocument, PdfSignature, PdfSignatureField, CryptographicStandard, DigestAlgorithm } from '@syncfusion/ej2-pdf';

const document = new PdfDocument(pdfBytes);
const page = document.getPage(0);

let field = new PdfSignatureField(page, 'ApproverSignature', {
  x: 72,
  y: 640,
  width: 220,
  height: 48
});
document.form.add(field);

const signature = PdfSignature.create(
  {
    cryptographicStandard: CryptographicStandard.cms,
    digestAlgorithm: DigestAlgorithm.sha256
  },
  pfxBytes,
  password
);

field.setSignature(signature);
const signedBytes = await document.save();
document.destroy();
```

## Important Notes
- **Do all form edits first. Sign last.** Any PDF modification *after signing* invalidates the signature.
- Self‑signed PFX will show **Unknown / Untrusted** until added to Trusted Certificates.

## Best Practices
- Place signature fields via Viewer for accurate layout.
- Apply PKI signature using PDF Library only.
- Use CMS + SHA‑256 for compatibility.
- Avoid flattening **after** signing.

## See Also
- Add Handwritten or Electronic Signature
- Validate Digital Signatures
- Customize Signature Appearance
