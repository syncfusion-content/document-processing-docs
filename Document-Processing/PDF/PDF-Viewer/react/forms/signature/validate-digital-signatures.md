---
layout: post
title: Validate Digital Signatures in React PDF Viewer | Syncfusion
description: Learn how to validate digital signatures applied to PDF forms using the Syncfusion JavaScript PDF Library with the React PDF Viewer. Covers integrity, certificate trust, timestamp, and revocation checks.
platform: document-processing
control: PdfViewer
documentation: ug
---

# Validate Digital Signatures

This guide explains **how to validate digital signatures** on PDFs when using the **Syncfusion React PDF Viewer** together with the **JavaScript PDF Library**. It clarifies what the Viewer does (display fields and signature appearances) and what the **PDF Library** does (perform **cryptographic validation** and produce validation results).

N> **Important:** The React PDF Viewer renders signature fields and their visual appearances, but **cryptographic validation is performed by the JavaScript PDF Library**. Use the library to check integrity, certificate trust, and timestamp status, and surface the result in your UI. 

## Overview (Explanation)

A **digital signature** is a cryptographic proof embedded in the PDF that allows verifiers to confirm:

- **Document integrity** – The PDF has not changed since it was signed.
- **Signer identity & trust** – The signer’s certificate chains to a trusted authority or is trusted locally.
- **Timestamp validity** – (If present) the signature was time‑stamped by a trusted TSA at signing time.
- **Revocation status** – Whether the signer’s certificate was revoked at or after signing (OCSP/CRL).

In Syncfusion, you typically **[design the signature field in the Viewer](../../forms/manage-form-fields/create-form-fields#signature-field)** and then **[apply and validate the digital signature using the PDF Library]()**.

## How validation fits in the Viewer flow (Concept)

1. Load and interact with the PDF in **React PDF Viewer** (place fields, fill forms). 
2. Use **JavaScript PDF Library** to **open the PDF bytes** and **validate the signature**.
3. Display the validation outcome (valid/invalid/unknown) in your React UI (badge, toast, side panel).

![Validation status badge in toolbar](../forms/images/signature-validation-badge.png)

## How‑to: Validate a digital signature (Client‑side)

The example below shows how to load the PDF bytes yourself, open with the **PDF Library**, and validate each signature field. You can call this when the document is loaded or on demand (e.g., a **Validate** button).

```ts
// Assumes you already have the PDF bytes (e.g., fetched via fetch(...).arrayBuffer())
import {
  PdfDocument,
  // The validation API is available on the signature/field instance
} from '@syncfusion/ej2-pdf';

async function validateSignatures(pdfBytes: ArrayBuffer) {
  const doc = new PdfDocument(pdfBytes);

  const results: Array<{
    fieldName: string;
    isIntact: boolean;      // document integrity
    isTrusted: boolean;     // certificate trust (based on local trust)
    isTimestampValid?: boolean;
    message: string;
  }> = [];

  // Iterate form fields and locate signature fields
  if (doc.form && doc.form.fields && doc.form.fields.length) {
    for (const f of doc.form.fields as any[]) {
      if (f && f.type === 'SignatureField') {
        const sigField = f; // PdfSignatureField

        // Validate the signature on this field. Depending on your build, this may
        // expose a method like validate() or properties describing status flags.
        // Pseudocode below: adapt to your actual API surface.
        const vr = await sigField.validate();
        // vr may include: isDocumentIntact, isCertificateTrusted, isTimestampValid, messages, etc.

        results.push({
          fieldName: sigField.name,
          isIntact: !!vr?.isDocumentIntact,
          isTrusted: !!vr?.isCertificateTrusted,
          isTimestampValid: vr?.isTimestampValid,
          message: vr?.message || ''
        });
      }
    }
  }

  doc.destroy();
  return results;
}
```

N> If your current build doesn’t expose a promise‑based `validate()` on the field, consult the PDF Library’s digital signature API in your version and map the available properties/methods to the same **intact / trusted / timestamp** status for display.

### Displaying results in React (example snippet)

```tsx
const [validation, setValidation] = useState(null);

async function onValidateClick() {
  const bytes = await fetch('/path/to/signed.pdf').then(r => r.arrayBuffer());
  const r = await validateSignatures(bytes);
  setValidation(r);
}
```

Render a simple table or badge:

```tsx
{validation && (
  <div className="sig-validation">
    {validation.map(v => (
      <div key={v.fieldName} className="chip">
        <strong>{v.fieldName}:</strong>
        {v.isIntact && v.isTrusted ? ' Valid' : ' Invalid/Unknown'}
      </div>
    ))}
  </div>
)}
```

## Interpreting validation outcomes (Reference)

- **Valid** – Integrity OK **and** certificate is trusted. (Timestamp valid if present.) 
- **Invalid** – Bytes changed after signing **or** signature object malformed.
- **Unknown/Not Trusted** – Integrity OK but signer certificate is not trusted locally (common with **self‑signed PFX** used for demos). Import the signer certificate into the trusted store to see a *Valid* badge.

## Best practices (Explanation)

- **Single‑save rule:** Do **all edits first**, then **sign**, and **do not modify** the PDF after signing; modifying bytes after signing will invalidate the signature.
- **Establish trust:** For demos, a self‑signed PFX will appear *Unknown*. For production, use a certificate that chains to a trusted CA or import the signer/issuer to the verifier’s trust store.
- **Prefer timestamping (TSA):** A trusted timestamp improves long‑term validation even if the signer’s cert later expires or is revoked.
- **Surface status in UI:** Show a clear badge (Valid/Invalid/Unknown) near the signature field or toolbar, and offer a *View details* panel with integrity, trust, and timestamp info. 

## Troubleshooting

- **Signature shows Invalid** – Check whether the PDF was modified **after** signing (e.g., second save/flatten). Re‑sign as the last step.
- **Unknown signer** – You are using a **self‑signed** PFX. Import the certificate into the validator’s trust store or use a CA‑issued certificate.
- **Algorithm unsupported** – Use CMS/PKCS#7 with SHA‑256 (avoid SHA‑1).
- **No revocation info** – Ensure OCSP/CRL endpoints are reachable by the validator or embed revocation data if supported.

## See also
- [Add Digital Signature](/document-processing/pdf/pdf-viewer/react/forms/signature/add-digital-signature)
- [Add Handwritten or Electronic Signature](/document-processing/pdf/pdf-viewer/react/forms/signature/add-electronic-signature)
- [Customize Signature Appearance](./customize-signature-appearance)