---
layout: post
title: Annotations in Mobile View using SfPdfViewer Component | Syncfusion
description: Learn how to add, edit, and manage annotations in the mobile view of the Syncfusion Blazor SfPdfViewer component
platform: document-processing
control: SfPdfViewer
documentation: ug
---

This article explains how to work with annotations in the mobile view of the Blazor SfPdfViewer. It covers opening the annotation toolbar, adding each annotation type, adjusting properties, deleting annotations, and using the comments panel.

# To open the annotation toolbar

To open the annotation toolbar, tap the **Edit Annotation** option in the mobile primary toolbar. The annotation toolbar appears at the bottom of the viewer.

![Mobile Annotation Toolbar in Blazor SfPdfViewer](../images/open-annotation-toolbar.gif)

## To add sticky notes annotation

Tap the **Sticky Note Annotation** icon, then tap anywhere in the viewer to place the note.

![Choose Sticky Note Annotation in Blazor SfPdfViewer](../images/click-stickynote-annotation.png)

The comments panel opens so the comment for the sticky note can be entered.

![Sticky note annotation added in Blazor SfPdfViewer](../images/sticky-note-added.png)

## To add text markup annotation

Long-press to select text in the PDF, then tap a **Text Markup Annotation** in the toolbar (for example, highlight, underline, strikethrough, or squiggly).

![Select text for text markup in Blazor SfPdfViewer](../images/select-text-for-text-markup.png)

The toolbar then shows the available properties for the chosen annotation (such as color and opacity).

![Text markup applied to selected text in Blazor SfPdfViewer](../images/text-markup-added-for-selected-text.png)

## To add shape annotation

Tap the **Shape Annotation** icon in the toolbar to view the available shapes.

![Open the shape annotations menu in Blazor SfPdfViewer](../images/click-shape-icon.png)

Choose a shape, then tap and drag in the viewer to draw it.

![Select a shape type in Blazor SfPdfViewer](../images/select-required-shape.png)

After placement, the toolbar switches to the properties toolbar for the added annotation, where options such as fill color, stroke color, thickness, and opacity can be adjusted.

![Draw a selected shape annotation in Blazor SfPdfViewer](../images/add-selected-shape-annotation.png)

## To add measure annotation

Tap the **Measure Annotation** icon in the toolbar to view supported measurement types.

![Open the measure annotations menu in Blazor SfPdfViewer](../images/click-measure-icon.png)

Select a measurement type, then tap and drag in the viewer to add it.

![Select a measurement type in Blazor SfPdfViewer](../images/select-required-measure.png)

After placement, the properties toolbar appears with options relevant to the measurement annotation (for example, stroke color, thickness, and opacity).

![Draw a selected measurement annotation in Blazor SfPdfViewer](../images/add-selected-measure-annotation.png)

## To add free text annotation

Tap the **Free Text Annotation** icon in the toolbar. The properties toolbar appears with options for text formatting (such as font size, color, and opacity).

![Open Free Text Annotation in Blazor SfPdfViewer](../images/click-free-text-annotation.png)

Tap anywhere in the viewer to insert the free text annotation.

![Add free text in the viewer in Blazor SfPdfViewer](../images/add-free-text-viewer.png)

## To add stamp annotation

Tap the **Stamp Annotation** icon, then choose a stamp from the available list.

![Open the list of stamp annotations in Blazor SfPdfViewer](../images/open-list-of-stamp.png)

Tap anywhere in the viewer to place the stamp. The properties toolbar then appears for additional adjustments where applicable.

![Place the selected stamp in Blazor SfPdfViewer](../images/add-selected-stamp.png)

## To add signature

Tap the **Handwritten Signature** icon to open the signature dialog.

![Open the signature dialog in Blazor SfPdfViewer](../images/open-signature-dialog.png)

Draw the signature in the dialog’s canvas, then tap Create to add it to the viewer.

![Draw a signature in the dialog in Blazor SfPdfViewer](../images/draw-signature-in-dialog.png)

Tap anywhere in the viewer to place the signature. The properties toolbar then appears for further adjustments.

![Add the signature to the viewer in Blazor SfPdfViewer](../images/add-signature-to-viewer.png)

## To add ink annotation

Tap the **Ink Annotation** icon, then draw directly in the viewer.

![Start ink annotation in Blazor SfPdfViewer](../images/click-ink-annotation.png)

When finished, tap the Ink Annotation icon again to exit drawing mode. The properties toolbar then appears with options for ink color, thickness, and opacity.

![Complete an ink annotation in Blazor SfPdfViewer](../images/complete-ink-annotation.png)

## Change annotation properties (Before adding)

Annotation properties can be configured before placement. For example, tap the rectangle shape to show its properties toolbar, adjust the settings, and then tap and drag to place the annotation. The annotation is added using the modified properties.

![Change properties before adding an annotation in Blazor SfPdfViewer](../images/property-change-before-adding.gif)

## Change annotation properties (After adding)

After placement, select the annotation to display its properties toolbar. Adjust the required properties; the changes are applied immediately to the selected annotation.

![Change properties after adding an annotation in Blazor SfPdfViewer](../images/property-change-after-adding.gif)

## Delete Annotation

Select the annotation to delete. In the properties toolbar, tap the Delete icon. The annotation is removed from the PDF, and any associated comment is also deleted.

![Delete the selected annotation in Blazor SfPdfViewer](../images/delete-selected-annotation.png)

## Open and Close Comment Panel

Open the comments panel from the **more option** menu at the right end of the mobile primary toolbar.

![Open the comments panel from More options in Blazor SfPdfViewer](../images/select-comment-panel-icon.png)

To close the comments panel, tap the Close icon within the panel.

![Comments panel displayed in Blazor SfPdfViewer](../images/open-cooment-panel.png)
