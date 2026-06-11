---
layout: post
title: Annotations in Mobile View using SfPdfViewer Component | Syncfusion
description: Learn how to add, edit, and manage annotations in the mobile view of the Syncfusion Blazor SfPdfViewer component
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Annotations in mobile view

This topic explains how to work with annotations in the mobile view of the Blazor `SfPdfViewer`. It covers opening the annotation toolbar, adding annotation types, adjusting properties, deleting annotations, and using the comments panel.

## Open the annotation toolbar

Open the annotation toolbar by tapping the **Edit Annotation** option in the mobile primary toolbar. The annotation toolbar appears at the bottom of the viewer.

![Mobile Annotation Toolbar in Blazor SfPdfViewer](../images/open-annotation-toolbar.gif)

## Add a sticky note annotation

Tap the **Sticky Note Annotation** icon, then tap anywhere in the viewer to place the note.

![Choose Sticky Note Annotation in Blazor SfPdfViewer](../images/click-stickynote-annotation.png)

The comments panel opens to enter the comment associated with the sticky note.

![Sticky note annotation added in Blazor SfPdfViewer](../images/sticky-note-added.png)

## Add a text markup annotation

Long-press to select text in the PDF, then tap a **Text Markup Annotation** option in the toolbar (for example, highlight, underline, strikethrough, or squiggly).

![Select text for text markup in Blazor SfPdfViewer](../images/select-text-for-text-markup.png)

The toolbar then shows properties for the chosen annotation (such as color and opacity).

![Text markup applied to selected text in Blazor SfPdfViewer](../images/text-markup-added-for-selected-text.png)

## Add a shape annotation

Tap the **Shape Annotation** icon in the toolbar to view available shapes.

![Open the shape annotations menu in Blazor SfPdfViewer](../images/click-shape-icon.png)

Choose a shape, then tap and drag in the viewer to draw it.

![Select a shape type in Blazor SfPdfViewer](../images/select-required-shape.png)

After placement, the toolbar switches to the properties toolbar for the added annotation; adjust options such as fill color, stroke color, thickness, and opacity.

![Draw a selected shape annotation in Blazor SfPdfViewer](../images/add-selected-shape-annotation.png)

## Add a measurement annotation

Tap the **Measure Annotation** icon in the toolbar to view supported measurement types.

![Open the measure annotations menu in Blazor SfPdfViewer](../images/click-measure-icon.png)

Select a measurement type, then tap and drag in the viewer to add it.

![Select a measurement type in Blazor SfPdfViewer](../images/select-required-measure.png)

After placement, the properties toolbar appears with options relevant to the measurement annotation (for example, stroke color, thickness, and opacity).

![Draw a selected measurement annotation in Blazor SfPdfViewer](../images/add-selected-measure-annotation.png)

## Add a free text annotation

Tap the **Free Text Annotation** icon in the toolbar. The properties toolbar appears with options for text formatting (such as font size, color, and opacity).

![Open Free Text Annotation in Blazor SfPdfViewer](../images/click-free-text-annotation.png)

Tap anywhere in the viewer to insert the free text annotation.

![Add free text in the viewer in Blazor SfPdfViewer](../images/add-free-text-viewer.png)

## Add a stamp annotation

Tap the **Stamp Annotation** icon, then choose a stamp from the available list.

![Open the list of stamp annotations in Blazor SfPdfViewer](../images/open-list-of-stamp.png)

Tap anywhere in the viewer to place the stamp. The properties toolbar then appears for additional adjustments where applicable.

![Place the selected stamp in Blazor SfPdfViewer](../images/add-selected-stamp.png)

## Add a signature

Tap the **Handwritten Signature** icon to open the signature dialog.

![Open the signature dialog in Blazor SfPdfViewer](../images/open-signature-dialog.png)

Draw the signature in the dialog’s canvas, then tap Create to add it to the viewer.

![Draw a signature in the dialog in Blazor SfPdfViewer](../images/draw-signature-in-dialog.png)

Tap anywhere in the viewer to place the signature. The properties toolbar then appears for further adjustments.

![Add the signature to the viewer in Blazor SfPdfViewer](../images/add-signature-to-viewer.png)

## Add an ink annotation

Tap the **Ink Annotation** icon, then draw directly in the viewer.

![Start ink annotation in Blazor SfPdfViewer](../images/click-ink-annotation.png)

When finished, tap the Ink Annotation icon again to exit drawing mode. The properties toolbar then appears with options for ink color, thickness, and opacity.

![Complete an ink annotation in Blazor SfPdfViewer](../images/complete-ink-annotation.png)

## Change annotation properties before adding

Annotation properties can be configured before placement. For example, tap a shape to show its properties toolbar, adjust the settings, then tap and drag to place the annotation. The annotation is added with the modified properties.

![Change properties before adding an annotation in Blazor SfPdfViewer](../images/property-change-before-adding.gif)

## Change annotation properties after adding

After placement, select the annotation to display its properties toolbar. Adjust required properties; the changes are applied immediately to the selected annotation.

![Change properties after adding an annotation in Blazor SfPdfViewer](../images/property-change-after-adding.gif)

## Delete an annotation

Select the annotation to delete. In the properties toolbar, tap the Delete icon. The annotation is removed from the PDF, and any associated comment is also deleted.

![Delete the selected annotation in Blazor SfPdfViewer](../images/delete-selected-annotation.png)

## Open and close the comments panel

Open the comments panel from the More options menu at the right end of the mobile primary toolbar.

![Open the comments panel from More options in Blazor SfPdfViewer](../images/select-comment-panel-icon.png)

To close the comments panel, tap the Close icon within the panel.

![Comments panel displayed in Blazor SfPdfViewer](../images/open-cooment-panel.png)

## See Also

* [Annotation Toolbar in Mobile mode](../toolbar-customization/mobile-toolbar)