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

 In Syncfusion, you typically **[design the signature field in the Viewer](../../forms/manage-form-fields/create-form-fields#signature-field)** and then use the Syncfusion PDF Library to perform cryptographic validation. See the PDF Library documentation for API references and examples: [Digital signature validation (PDF Library)](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-digitalsignature#digital-signature-validation).

## How validation fits in the Viewer flow (Concept)

1. Load and interact with the PDF in **React PDF Viewer** (place fields, fill forms). 
2. Use **JavaScript PDF Library** to **open the PDF bytes** and **validate the signature**.
3. Display the validation outcome (valid/invalid/unknown) in your React UI (badge, toast, side panel).

![Validation status badge in toolbar](../forms/images/signature-validation-badge.png)

 ## How‑to: Validate a digital signature (Client‑side)

 Cryptographic signature validation is performed by the Syncfusion PDF Library. Please refer to the PDF Library documentation for detailed guidance and sample code. The following pages cover validation concepts, APIs, and full examples:

- [Digital signature validation overview](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-digitalsignature#digital-signature-validation)

- [Validate all signatures in a PDF document](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-digitalsignature#validate-all-signatures-in-pdf-document)

- [Validate and classify digital signatures in a PDF document](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-digitalsignature#validate-and-classify-digital-signatures-in-a-pdf-document)

After using the PDF Library to obtain validation results (integrity, trust, timestamp), surface those results in your React UI (for example: badge, table, or details panel) to communicate status to users.

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
- [Customize Signature Appearance](./customize-signature-appearance)
- [Signature workflows](./signature-workflow)