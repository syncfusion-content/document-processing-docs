---
layout: post
title: Annotations in .NET MAUI PDF Viewer | Syncfusion
description: Learn about the annotation types and functionalities available in the Syncfusion<sup>®</sup> .NET MAUI PDF Viewer (SfPdfViewer) control.
platform: document-processing
control: SfPdfViewer
documentation: ug
keywords: .net maui pdf viewer, .net maui view pdf, pdf viewer in .net maui, .net maui open pdf, maui pdf viewer, maui pdf view
---

# Annotations in .NET MAUI PDF Viewer (SfPdfViewer)

The [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) allows you to add, remove, and modify annotations in PDF documents. Annotations are useful for marking up document content — for example, highlighting important text, drawing shapes to indicate areas of interest, adding sticky notes for reviewer comments, or stamping a document with a status indicator.

This section covers the annotation types and common functionalities available in the PDF Viewer. For detailed instructions on each annotation type, refer to the individual sections listed below.

To learn how to work with annotations, you can also check out our video tutorial below.

<style>#MAUISfPdfViewerVideoTutorial{width : 90% !important; height: 400px !important }</style> <iframe id='MAUISfPdfViewerVideoTutorial' src='https://www.youtube.com/embed/Vom4I_xt--I'></iframe>

## Supported Annotation Types

The [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) supports the following annotation types, grouped by category.

### Text Markup Annotations

Use these annotations to mark up text content within the PDF document.

| Annotation | Description |
|---|---|
| Highlight | Highlights selected text with a color. |
| Underline | Draws a line beneath selected text. |
| Strikeout | Draws a line through selected text to indicate deletion. |
| Squiggly | Draws a wavy underline to indicate a possible error or area of concern. |

For more information, see [Text Markup Annotations](../text-markups).

### Shape Annotations

Use these annotations to draw geometric shapes over PDF content.

| Annotation | Description |
|---|---|
| Arrow | Draws an arrow to point to specific content. |
| Circle | Draws an ellipse or circle over the page. |
| Line | Draws a straight line between two points. |
| Polygon | Draws a closed polygon shape. |
| Polyline | Draws an open multi-segment line. |
| Square | Draws a rectangle over the page. |

For more information, see [Shape Annotations](../shapes).

### Freehand and Rich Content Annotations

| Annotation | Description |
|---|---|
| Ink | Draws freehand strokes over the page. |
| Ink eraser | Erases parts of existing ink annotations. |
| Free text | Adds a text box directly on the page. |
| Stamp | Places an image or predefined stamp on the page. |
| Sticky notes | Attaches a pop-up note to a specific location on the page. |

For more information, see [Ink Annotations](../ink), [Free Text Annotations](../free-text), [Stamps](../stamps), and [Sticky Notes](../sticky-notes).

## In This Section

### Annotation Types

| Topic | Description |
|---|---|
| [Text Markup Annotations](../text-markups) | Highlight, underline, strikeout, and squiggly annotations on selected text. |
| [Shape Annotations](../shapes) | Draw arrows, circles, lines, polygons, polylines, and rectangles over pages. |
| [Ink Annotations](../ink) | Draw freehand strokes over any page area. |
| [Ink Eraser](../ink-eraser) | Erase portions of existing ink annotations. |
| [Free Text Annotations](../free-text) | Place a text box directly on the page. |
| [Stamps](../stamps) | Apply predefined or custom image stamps on a page. |
| [Sticky Notes](../sticky-notes) | Attach pop-up notes to specific locations on a page. |

### Common Annotation Operations

| Topic | Description |
|---|---|
| [Add, Remove, and Modify Annotations](../add-remove-modify-annotations) | Programmatically add, update, and delete any annotation type. |
| [Annotation Collection](../annotation-collection) | Access and iterate the full annotation collection. |
| [Select and Deselect Annotations](../select-deselect-annotations) | Select one or more annotations programmatically. |
| [Lock and Unlock Annotations](../lock-unlock) | Prevent annotations from being edited or deleted. |
| [Show and Hide Annotations](../show-hide) | Toggle visibility of annotations without removing them. |
| [Import and Export Annotations](../import-export-annotations) | Import/export annotation data in XFDF, FDF, JSON, and XML formats. |
| [Undo and Redo](../undo-redo) | Reverse or reapply recent annotation changes. |
| [Annotation Comments](../annotations-comment) | Add review comments and status to annotations. |

## See Also
- [Add, Remove, and Modify Annotations](../add-remove-modify-annotations)
- [Import and Export Annotations](../import-export-annotations)
- [Save a Document](../save-a-document)
- [Undo and Redo](../undo-redo)
