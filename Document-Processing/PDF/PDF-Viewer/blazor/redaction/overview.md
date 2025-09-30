---
layout: post
title: Redaction Annotations in Blazor SfPdfViewer Component | Syncfusion
description: Check out how to add, edit, delete, configure, and apply redaction annotations in the Syncfusion Blazor SfPdfViewer component.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Redaction annotations in Blazor SfPdfViewer Component

Redaction annotations conceal sensitive content in a PDF. The Syncfusion Blazor PDF Viewer supports interactive and programmatic redaction with appearance customization and final application.

![Toolbar showing the redaction icon](redaction-annotations-images/redaction-icon-toolbar.png)

## Adding a Redaction annotation to the PDF document

The redaction feature allows hiding sensitive information by adding redaction annotations to pages. Annotations can be added from the toolbar or programmatically.

Use the redaction tool on the toolbar to draw over content that should be redacted. After marking, an annotation can display overlay text (for example, “Confidential”) and can be styled using fill color and other properties.

![Drawing a redaction annotation on the page](redaction-annotations-images/adding-redaction-annotation.png)

## Deleting Redaction Annotations

Redaction annotations can be removed through the UI or programmatically.

* **Click the _Delete_ button** on the toolbar.

![Toolbar delete icon for redaction](redaction-annotations-images/redaction-delete-icon.png)

* **Press the `Delete` key** after selecting the annotation.

## Add Page Redaction in Blazor SfPdfViewer Component

The Blazor PDF Viewer provides support to redact entire pages containing sensitive or confidential information. Redaction can be done programmatically or through the built-in UI dialog that offers flexible page selection options.

![Redact Page Icon](redaction-annotations-images/redact-page-icon.png)

## Applying Redaction to the Document in Blazor SfPdfViewer Component

The Blazor PDF Viewer provides functionality to permanently apply redaction annotations to the document, removing the marked content and making the redaction irreversible. This can be done through the UI using the redact button or programmatically.

The redact button in the toolbar allows users to permanently apply all redaction annotations present in the document.

* The redact button is disabled when no redaction annotations exist in the document.
* The button automatically enables when redaction annotations are present.

![Redact Button Icon](redaction-annotations-images/redact-button-icon.png)

A confirmation dialog is displayed before applying redaction to ensure users are aware that the redaction process is permanent and irreversible.

Refer to the Image below for details.

![Apply Redaction Dialog](redaction-annotations-images/apply-redaction-dialog.png)

N> The redaction process is irreversible. Once applied, the original content cannot be recovered.

## Comment Panel Support for Redaction Annotations

Redaction annotations support **comments** through the built-in **comment panel**. Add notes, track reviews, or record reasons for redaction.

Commenting is available through the UI and API. For details, see the [Comments documentation](../annotation/comments).

## Export and Import Support for the Redaction Annotations

The viewer supports exporting and importing redaction annotations to save and reload them for future use.

For details, see the [Export and import annotations documentation](../annotation/import-export-annotation).

## See also

* [UI Interaction in Redaction Annotation](./ui-interactions)
* [Programmatic Support in Redaction](./create-programmatically)
* [Redaction in Mobile View](./redaction-in-mobileView)