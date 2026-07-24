---
layout: post
title: Customize Signature Appearance in React PDF Viewer | Syncfusion
description: Learn how to customize the appearance of visible PKI digital signatures in PDFs using the Syncfusion PDF Library for React applications.
platform: document-processing
control: PdfViewer
documentation: ug
---

# Customize Signature Appearance

This page explains how to customize the visual appearance of PKI [digital signature](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/digitalsignature) (visible signature appearance) produced with the Syncfusion PDF Library.

## Overview

When applying a PKI [digital signature](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/digitalsignature), you can create a visible appearance that includes text, images (logo/seal), fonts, and layout. The appearance is rendered by drawing text and images into signature graphics via the PDF Library, then embedding them in the signature field.

For implementation details and exact API usage, check the Syncfusion PDF Library references:

- .NET PDF Library — [Drawing text/image in the signature appearance](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-digitalsignature#drawing-textimage-in-the-signature-appearance)
- JavaScript PDF Library — [Drawing text/image in the signature appearance](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/digitalsignature#drawing-textimage-in-the-signature-appearance)

## What you can customize

- Text (signer name, signing reason, date, descriptive labels)
- Fonts, sizes, and styles
- Images (company logo, seal, signature image)
- Layout and bounding box for the visible appearance (page index, x, y, width, and height)

## Visible vs invisible signatures

A PKI signature can be applied as either a **visible** signature (with a rendered appearance placed on a page) or an **invisible** signature (with no visual representation). The Syncfusion PDF Library supports both modes; the customization options on this page apply only to visible signatures.

## Guidance

- Use the [PDF Library](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/digitalsignature) APIs to draw strings and images into the signature appearance graphics; attach the resulting appearance to the signature field before finalizing the PKI signature.
- Prefer embedding high‑quality logo/seal images and use readable fonts for accessibility.
- Keep the appearance compact to avoid overlapping form content and to preserve signature validation data.
- Test appearances across typical page sizes and DPI settings to ensure consistent rendering.

## Best Practices

- Use consistent branding for signature visuals.
- Keep appearance elements minimal and readable.
- Avoid including data that might change after signing; when a Time Stamping Authority (TSA) is used, the displayed date should reflect the time provided by the TSA.
- When producing legally binding signatures, ensure the PKI signing process and appearance comply with your legal/operational requirements.

## See Also

- [Add Digital Signature in React PDF Viewer](./add-digital-signature-react)
- [Validate Digital Signatures in React PDF Viewer](./validate-digital-signatures)
- [Custom fonts for Signature fields](../../how-to/custom-font-signature-field)
- [Signature workflows](./signature-workflow)
