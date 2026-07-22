---
layout: post
title: Redaction UI interactions in Blazor PDF Viewer | Syncfusion
description: Learn about UI interactions in Redaction annotation of the Blazor PDF Viewer (SfPdfViewer) component.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Redaction UI interactions in Blazor PDF Viewer

## Add redaction annotations from the toolbar

Use the redaction tool on the toolbar to draw over content to be redacted. A mark can display overlay text (for example, "Confidential") and be styled with fill color and other properties.

![Drawing a redaction annotation on the page](redaction-annotations-images/adding-redaction-annotation.png)

### Interactive redaction annotations

* **Movable**: Reposition an annotation within the same page.

![Moving a redaction annotation](redaction-annotations-images/moving-redaction-annotation.png)

* **Resizable**: Adjust the size to cover the required region.

![Resizing a redaction annotation](redaction-annotations-images/resizing-redaction-annotation.png)

N> The redaction tool is hidden by default. Customize the toolbar to include it. For instructions, see [Toolbar customization](../toolbar-customization-overview) in the See also section.

## Update redaction properties

Update redaction marks after they are added. Changes can be made using the property panel for the selected redaction or programmatically via the [EditAnnotationAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EditAnnotationAsync_Syncfusion_Blazor_SfPdfViewer_PdfAnnotation_) API.

### Using the property panel

Select a redaction mark and edit its properties (overlay text, font, and fill color) in the property panel. Changes appear immediately in the viewer.

Access the panel by:

* Clicking the **redaction panel** icon on the redaction toolbar.

![Redaction Property Panel Icon](redaction-annotations-images/redaction-property-panel-icon.png)

* Using the **context menu** (right-click or long-press on mobile) and choosing Properties.

![Redaction Property Panel via Context Menu](redaction-annotations-images/redaction-property-panel-via-context-menu.png)

## Delete redaction marks

Delete a redaction mark using any of the following methods:

* Right-click and select Delete from the context menu.

![Context menu showing Delete for a redaction](redaction-annotations-images/redaction-delete-context-menu.png)

* Click the Delete button on the toolbar.

![Toolbar delete icon for redaction](redaction-annotations-images/redaction-delete-icon.png)

* Press the Delete key after selecting the annotation.

## Mark pages for redaction using the UI

Use the Redact Pages option on the redaction toolbar to mark whole pages. This step adds redaction marks to pages only; the marks must be applied to become permanent (see the following section). The Mark Page Range dialog offers:

* **Current Page**: Redacts the currently visible page.
* **Odd Pages Only**: Redacts all odd-numbered pages.
* **Even Pages Only**: Redacts all even-numbered pages.
* **Specific Pages**: Enter a list or ranges (for example, 1, 3–5, 7).

After choosing a range, select Save to add redaction marks to the selected pages.

![Page Redaction Panel](redaction-annotations-images/page-redaction-panel.png)

## Apply redaction from the toolbar

The Apply Redaction button permanently applies all redaction marks in the document.

* The button is disabled when no redaction marks exist.
* It is enabled automatically when redaction marks are present.

![Redact Button Icon](redaction-annotations-images/redact-button-icon.png)

A confirmation dialog appears, warning that the operation is permanent and irreversible.

![Apply Redaction Dialog](redaction-annotations-images/apply-redaction-dialog.png)

N> The redaction process is irreversible. Once applied, the original content cannot be recovered.

## See also

* [Overview of Redaction](./overview)
* [Programmatic Support in Redaction](./create-programmatically)
* [Redaction in Mobile View](./mobile-view)
* [Toolbar customization](../toolbar/overview)
