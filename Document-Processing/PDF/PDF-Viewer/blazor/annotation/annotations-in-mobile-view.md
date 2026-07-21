---
layout: post
title: Annotations in Mobile View using SfPdfViewer Component | Syncfusion
description: Learn how to add, edit, and manage annotations in the mobile view of the Blazor SfPdfViewer component
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Annotations in Mobile View

This guide explains how to add, edit, and manage PDF annotations in the mobile view of the Syncfusion Blazor `SfPdfViewer` component. By the end, you will know how to open the annotation toolbar, add each annotation type, adjust properties, and use the comments panel on a mobile device.

## Supported Annotation Types

The mobile view supports the following annotation types:

- Sticky note
- Text markup (highlight, underline, strikethrough, squiggly)
- Shape (rectangle, circle, line, arrow, polygon, polyline, cloud)
- Measurement (distance, perimeter, area, radius)
- Free text
- Stamp
- Signature
- Ink

## Open the Annotation Toolbar

Tap the **Edit Annotation** option in the mobile primary toolbar. The annotation toolbar appears at the bottom of the viewer.

![Mobile Annotation Toolbar in Blazor SfPdfViewer](../images/open-annotation-toolbar.gif)

## Add a Sticky Note Annotation

Tap the **Sticky Note Annotation** icon, then tap anywhere in the viewer to place the note. The comments panel opens so you can enter the comment associated with the sticky note.

A sticky note is a popup icon attached to a comment thread. Tap the note to open or edit its comment, and use the comments panel to add replies.

![Choose Sticky Note Annotation in Blazor SfPdfViewer](../images/click-stickynote-annotation.png)

![Sticky note annotation added in Blazor SfPdfViewer](../images/sticky-note-added.png)

## Add a Text Markup Annotation

Long-press the text in the PDF to enter selection mode, then tap a **Text Markup Annotation** option in the toolbar (for example, highlight, underline, strikethrough, or squiggly).

Each markup type shows a slightly different selection menu. The properties toolbar exposes the color picker, opacity (default 100%), and thickness (default 1 pt).

![Select text for text markup in Blazor SfPdfViewer](../images/select-text-for-text-markup.png)

![Text markup applied to selected text in Blazor SfPdfViewer](../images/text-markup-added-for-selected-text.png)

## Add a Shape Annotation

Tap the **Shape Annotation** icon in the toolbar to view the available shapes.

![Open the shape annotations menu in Blazor SfPdfViewer](../images/click-shape-icon.png)

Choose a shape, then draw it in the viewer:

- **Rectangle, circle, line, arrow:** tap and drag to draw.
- **Polygon, polyline, cloud:** tap to place each vertex, then double-tap to close.

![Select a shape type in Blazor SfPdfViewer](../images/select-required-shape.png)

After placement, the properties toolbar appears for the added annotation. Adjust the fill color, stroke color (default black), thickness (default 1 pt), and opacity (default 100%).

![Draw a selected shape annotation in Blazor SfPdfViewer](../images/add-selected-shape-annotation.png)

## Add a Measurement Annotation

Tap the **Measure Annotation** icon in the toolbar to view the supported measurement types.

![Open the measure annotations menu in Blazor SfPdfViewer](../images/click-measure-icon.png)

Select a measurement type, then tap and drag in the viewer to add it. The supported types on mobile are distance, perimeter, area, and radius. Volume measurement is not available in the mobile view.

> Configure the measurement unit (points, inches, centimeters, millimeters, or picas) and scale ratio in the SfPdfViewer settings before drawing. The default unit is points.

![Select a measurement type in Blazor SfPdfViewer](../images/select-required-measure.png)

After placement, the properties toolbar appears with options for stroke color, thickness, and opacity.

![Draw a selected measurement annotation in Blazor SfPdfViewer](../images/add-selected-measure-annotation.png)

## Add a Free Text Annotation

Tap the **Free Text Annotation** icon in the toolbar. The properties toolbar appears with options for font size (default 12 pt), color (default black), and opacity (default 100%).

![Open Free Text Annotation in Blazor SfPdfViewer](../images/click-free-text-annotation.png)

Tap anywhere in the viewer to insert the free text annotation. After placement, you can resize, move, or edit the text inline.

![Add free text in the viewer in Blazor SfPdfViewer](../images/add-free-text-viewer.png)

## Add a Stamp Annotation

Tap the **Stamp Annotation** icon, then choose a stamp from the available list. Built-in categories include Approved, Confidential, Draft, and Final. For custom stamps, see [Custom Stamp Annotations](../stamp-annotation).

![Open the list of stamp annotations in Blazor SfPdfViewer](../images/open-list-of-stamp.png)

Tap anywhere in the viewer to place the stamp. The properties toolbar then appears for additional adjustments where supported.

![Place the selected stamp in Blazor SfPdfViewer](../images/add-selected-stamp.png)

## Add a Signature

Tap the **Handwritten Signature** icon to open the signature dialog. You can also create a typed signature or upload an image; tap the appropriate option in the dialog.

![Open the signature dialog in Blazor SfPdfViewer](../images/open-signature-dialog.png)

Draw the signature in the dialog's canvas, then tap **Create** to add it to the viewer.

![Draw a signature in the dialog in Blazor SfPdfViewer](../images/draw-signature-in-dialog.png)

Tap anywhere in the viewer to place the signature. The properties toolbar then appears for further adjustments.

![Add the signature to the viewer in Blazor SfPdfViewer](../images/add-signature-to-viewer.png)

## Add an Ink Annotation

Tap the **Ink** icon, then draw directly in the viewer.

![Start ink annotation in Blazor SfPdfViewer](../images/click-ink-annotation.png)

When finished, tap the Ink icon again to exit drawing mode. The properties toolbar then appears with options for ink color (default black), thickness (default 1 pt), and opacity (default 100%).

![Complete an ink annotation in Blazor SfPdfViewer](../images/complete-ink-annotation.png)

## Configure Annotation Properties Before Adding

You can configure annotation properties before placement. For example, tap a shape to display its properties toolbar, adjust the settings, then draw the shape in the viewer. The annotation is added with the modified properties.

![Change properties before adding an annotation in Blazor SfPdfViewer](../images/property-change-before-adding.gif)

## Configure Annotation Properties After Adding

After placement, tap the annotation to display its properties toolbar. Adjust the required properties; the changes are applied immediately to the selected annotation.

![Change properties after adding an annotation in Blazor SfPdfViewer](../images/property-change-after-adding.gif)

## Delete an Annotation

Select the annotation to delete. In the properties toolbar, tap the **Delete** icon. The annotation is removed from the PDF, and any associated comment is also deleted. You can also delete an annotation by long-pressing it in the comments panel.

![Delete the selected annotation in Blazor SfPdfViewer](../images/delete-selected-annotation.png)

## Open the Comments Panel

Open the comments panel from the **More options** menu at the right end of the mobile primary toolbar.

![Open the comments panel from More options in Blazor SfPdfViewer](../images/select-comment-panel-icon.png)

> Ensure comments are enabled in the SfPdfViewer settings; otherwise, the comments panel will not appear.

To close the comments panel, tap the **Close** icon within the panel.

![Comments panel displayed in Blazor SfPdfViewer](../images/open-comments-panel.png)

## See also

* [Annotation Toolbar in Mobile Mode](../toolbar-customization/mobile-toolbar)
* [Customize Annotations](../customize-annotation)
* [Annotation Events](../events)
* [Import and Export Annotations](../import-export-annotation)
* [Annotation Permission](../annotation-permission)
* [Create and Modify Annotations](../create-modify-annotation)
* [Comments](../comments)
* [Annotation Undo/Redo](../annotations-undo-redo)