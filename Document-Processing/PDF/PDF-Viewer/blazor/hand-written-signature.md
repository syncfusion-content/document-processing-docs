---
layout: post
title: Handwritten Signature in Blazor SfPdfViewer Component | Syncfusion
description: Learn how to add and edit handwritten signatures in the Syncfusion Blazor SfPdfViewer component, including placement and property customization.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Handwritten Signature in Blazor SfPdfViewer Component

The SfPdfViewer component supports adding handwritten signatures to PDF documents. Handwritten signatures reduce paperwork during review and enable digital verification within the document.

## Adding a handwritten signature to the PDF document

Add a handwritten signature using the annotation toolbar.

* Click the **Edit Annotation** in the SfPdfViewer toolbar to open the annotation toolbar.
* Select the **HandWritten Signature** tool to open the signature panel.

![Handwritten signature option in Blazor SfPdfViewer](images/blazor-pdfviewer-handwritten-sign.png)

* Draw the signature in the signature panel using a mouse, or touch.

![Signature panel displayed in Blazor SfPdfViewer](images/blazor-pdfviewer-sign-panel.png)

* Click **Create**, then move and place the signature at the desired location on the page.

![Placing a handwritten signature in Blazor SfPdfViewer](images/blazor-pdfviewer-adding-signature.png)

The added signature becomes part of the PDF annotations and is preserved when saving or exporting the document.

## Editing the properties of handwritten signature

The stroke color, thickness, and opacity of a handwritten signature can be adjusted using the annotation toolbar’s edit stroke color tool, edit thickness tool, and edit opacity tools. Select the signature on the page to enable these property editors for that item. After placement, the signature can also be moved, resized, or removed like other annotations.

![Editing handwritten signature properties in Blazor SfPdfViewer](images/blazor-pdfviewer-signature-properties.png)

## See also

* [Form filling in Blazor SfPdfViewer Component](./form-filling)