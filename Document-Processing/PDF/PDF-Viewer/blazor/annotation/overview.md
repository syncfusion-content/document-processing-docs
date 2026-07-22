---
layout: post
title: Overview of Annotation in Blazor SfPdfViewer Component | Syncfusion
description: Learn about Annotations and how to add, edit, delete, and configure Annotations in the Blazor SfPdfViewer.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Annotations overview in Blazor SfPdfViewer

Annotations in the SfPdfViewer are interactive elements that allow users to add notes, highlights, or text boxes directly to a PDF document. They add context and feedback to PDFs, simplifying collaboration during document reviews.

The Blazor SfPdfViewer provides a complete set of annotation tools for reviewing, measuring, and marking up PDFs.

## Supported annotations

- Text markup: [Highlight](./text-markup/highlight-annotation), [Underline](./text-markup/underline-annotation), [Squiggly](./text-markup/squiggly-annotation), [Strikethrough](./text-markup/strikethrough-annotation)
- Shapes: [Line](./shape/line-annotation), [Arrow](./shape/arrow-annotation), [Rectangle](./shape/rectangle-annotation), [Circle](./shape/circle-annotation), [Polygon](./shape/polygon-annotation)
- Free text: [Free Text](./free-text-annotation)
- Drawing: [Ink](./ink-annotation)
- Stamps: [Standard and custom stamps](./stamp-annotation)
- Notes: [Sticky Notes](./sticky-notes-annotation)
- Redaction: [Redaction](../redaction/overview)
- Measurement: [Distance](./measurement/distance-annotation), [Perimeter](./measurement/perimeter-annotation), [Area](./measurement/area-annotation), [Radius](./measurement/radius-annotation), [Volume](./measurement/volume-annotation)

## Annotation manipulation capabilities

- [Create annotations](../annotation/create-modify-annotation): Use the toolbar, context menu, or APIs to add highlights, notes, shapes, and more directly onto the PDF document.
- [Edit annotations](../annotation/create-modify-annotation): Modify existing annotations by moving, resizing, or updating text and style properties like color, opacity, and thickness.
- [Delete annotations](../annotation/delete-annotation): Remove unwanted annotations using the context menu or the `DeleteAnnotationAsync` API.
- [Customize annotations](../annotation/customize-annotation): Adjust appearance and behavior—such as fonts, fill colors, and opacity—through the UI or configuration options.
- [Undo and redo annotations](../annotation/annotations-undo-redo): Revert or reapply annotation actions (add, edit, delete) using toolbar buttons or corresponding APIs.
- [Import and export annotations](../annotation/import-export-annotation): Save and load annotations in JSON (`.json`) or XFDF (`.xfdf`) formats to persist markups across sessions or share them with others.
- [Set permissions](../annotation/annotation-permission): Enable or disable the `AnnotationPermission` enum value (default: `AnnotationPermission.All`) to control which annotation actions users can perform.
- [Add and manage comments](../annotation/comments): Insert, edit, and delete comments or sticky notes attached to annotations for clearer feedback and collaboration. The Comments pane must be enabled in the [toolbar settings](../toolbar-customization).

## See also

- [Text Markup Annotation](./text-markup/highlight-annotation)
- [Shape Annotation](./shape/line-annotation)
- [Free Text Annotation](./free-text-annotation)
- [Ink Annotation](./ink-annotation)
- [Stamp Annotation](./stamp-annotation)
- [Comments](./comments)
- [Redaction](./../redaction/overview)
- [Measurement Annotation](./measurement/distance-annotation)
- [Export and Import Annotation](./import-export-annotation)
- [Delete Annotation](./delete-annotation)
- [Customize annotations](./customize-annotation)
- [Annotations undo and redo](./annotations-undo-redo)
- [Import and export annotations](./import-export-annotation)
- [Annotation permissions](./annotation-permission)
- [Comments](./comments)
- [Toolbar customization](../toolbar/overview)
- [Events reference](./events)