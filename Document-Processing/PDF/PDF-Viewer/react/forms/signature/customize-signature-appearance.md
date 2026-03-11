---
layout: post
title: Customize Signature Appearance in React PDF Viewer | Syncfusion
description: Learn how to customize handwritten, typed, image-based, and digital signature appearances using Signature annotations, Signature fields, and the JavaScript PDF Library.
platform: document-processing
control: PdfViewer
documentation: ug
---

# Customize Signature Appearance

This section explains how to customize the **visual appearance of signatures** in the Syncfusion **React PDF Viewer**, including:
- Handwritten/electronic **Signature annotations** (Draw / Type / Upload)
- **Signature field** appearance (fonts, tooltips)
- **Digital signature** visual appearance (image/text via PDF Library)

N> This page complements: **[Add Handwritten or Electronic Signature](./add-handwritten-or-electronic-signature)**, **[Add Digital Signature](./add-digital-signature-react)**, and **[Validate Digital Signatures](./validate-digital-signatures)**.

## Overview (Explanation)

The React PDF Viewer offers two signature mechanisms:
- **Signature annotation** → free‑placed electronic signature with customizable UI appearance.
- **Signature field** → guided signing area inside forms; can use fonts, tooltips, and properties.
- **Digital signature appearance** → applied using **[JavaScript PDF Library](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/digitalsignature)** when generating visual PKI signature content.

Each supports different appearance customization levels.

## Customize Signature Annotation (How‑to)

Electronic (Draw/Type/Upload) signatures added through Annotation toolbar are fully customizable.

### Customize from UI
Users can modify appearance through the built‑in annotation settings:
- Stroke color
- Line thickness
- Opacity
- Resizing and repositioning
- Replace signature image (Upload)

![Signature Annotation UI](../../../javascript-es6/images/style-sign.png)

### Customize via API
```tsx
viewerRef.current.annotationModule.updateAnnotationProperties({
  opacity: 0.85,
  strokeColor: '#2C3E50',
  thickness: 2
});
```

## Customize Signature Field Appearance (Forms)

Signature fields have different customization rules. They do **not** support stroke/opacity settings like annotations.

### Supported customizations
- Tooltip text
- Name / Identifier
- Required field highlight
- Bounding box dimensions
- **Custom font** for typed signature appearance

![Signature Field](../../../javascript-es6/images/ui-signature.png)

### Example: Adding a signature field with properties
```tsx
viewerRef.current?.formDesignerModule.addFormField('SignatureField', {
  name: 'ClientSignature',
  pageNumber: 1,
  bounds: { X: 120, Y: 620, Width: 200, Height: 48 },
  tooltip: 'Please sign here',
  isRequired: true
});
```

### Custom font for Signature Field (How‑to)
Signature fields can use a custom font by embedding it inside the PDF.

See: **[Custom fonts for Signature and Initial fields](../../how-to/custom-font-signature-field)**.

## Customize Digital Signature Appearance (PDF Library)

When applying a PKI digital signature, you can generate a **visible signature appearance**.

### Example: Creating custom visible appearance
```ts
import {
  PdfDocument,
  PdfGraphics,
  PdfBitmap,
  PdfSignature,
  PdfSignatureField,
  CryptographicStandard,
  DigestAlgorithm
} from '@syncfusion/ej2-pdf';

const doc = new PdfDocument(pdfBytes);
const page = doc.getPage(0);

const field = new PdfSignatureField(page, 'Signer1', { x: 72, y: 640, width: 220, height: 60 });
doc.form.add(field);

// Create graphics for appearance
tconst g = field.appearance.graphics;
g.drawString('Digitally Signed by User1', new PdfStandardFont(12), 0, 0);
// Optional: Add an image/seal
g.drawImage(new PdfBitmap(sealBytes), 120, 0, 40, 40);

const sig = PdfSignature.create(
  { cryptographicStandard: CryptographicStandard.cms, digestAlgorithm: DigestAlgorithm.sha256 },
  pfxBytes,
  password
);

field.setSignature(sig);
const finalBytes = await doc.save();
doc.destroy();
```

### What you can customize in digital signature appearance
- Text (signer name, date, labels)
- Font / style
- Images (company logo / seal)
- Appearance bounding box
- Visible vs invisible signature

## Best Practices
- Use consistent branding colors in handwritten signatures.
- Prefer **Signature fields** when you need standardized appearance.
- Keep annotation opacity above **0.7** for readability.
- For legally binding workflows, use **PDF Library** appearance settings.
- Avoid modifying a PDF **after** applying a digital signature.

## See Also
- [Add Handwritten or Electronic Signature](./add-handwritten-or-electronic-signature)
- [Add Digital Signature](./add-digital-signature-react)
- [Validate Digital Signatures](./validate-digital-signatures)
- [Custom fonts for Signature fields](../../how-to/custom-font-signature-field)
