---
layout: post
title: Overview of the toolbars in Blazor SfPdfViewer Component | Syncfusion
description: Check out and learn about the primary, annotation, form designer, and redaction toolbars in the Syncfusion Blazor SfPdfViewer component.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Toolbar in Blazor SfPdfViewer Component

The SfPdfViewer includes a built-in, responsive toolbar that surfaces common PDF actions and provides entry points to feature-specific toolbars. It adapts across desktop, tablet, and mobile, and can be customized to show or hide items, reorder commands, add custom items, and handle toolbar events.

There are four toolbars in the SfPdfViewer:
* Primary toolbar
* Annotation toolbar
* Form designer toolbar
* Redaction toolbar

## Primary Toolbar in Blazor SfPdfViewer Component

The SfPdfViewer includes a built-in, responsive primary toolbar that provides quick access to common viewer actions and feature-specific toolbars. It adapts to the available width for desktop, tablet, and mobile layouts.

The primary toolbar includes the following options:

* Open PDF file
* Page navigation
* Magnification
* Pan tool
* Text selection
* Text search
* Print
* Submit form
* Comments panel
* Download
* Undo and redo
* Annotation tools
* Form designer tools
* Redaction tools
* Bookmark panel
* Thumbnail panel

![Blazor PDF Viewer primary toolbar with customized items](../blazor-classic/images/blazor-pdfviewer-custom-toolbar.png)

* [Get more info about primary toolbar customization](./toolbar/primary-toolbar-customization)

## Annotation toolbar in Blazor SfPdfViewer Component

The Annotation toolbar appears below the primary toolbar when annotation features are enabled. It provides tools to create and edit annotations.

* Text markup: Highlight, Underline, Strikethrough, Squiggly
* Shapes: Line, Arrow, Rectangle, Circle, Polygon
* Measurement: Distance, Perimeter, Area, Radius, Volume
* Freehand: Ink, Signature
* Text: Free text
* Stamp: Predefined and custom stamps
* Properties: Color, opacity, thickness, font
* Edit helpers: Comments panel, Delete
* Close

![Blazor PDF Viewer annotation toolbar](./images/blazor-annotation-toolbar.png)

* [Get more info about annotation toolbar customization](./toolbar/annotation-toolbar-customization)

## Form Designer toolbar in Blazor SfPdfViewer Component

Use the Form Designer toolbar to add and configure interactive form fields in the PDF. It appears below the primary toolbar when form designer is enabled.

* Field types: Button, Text box, Password, Checkbox, Radio button, Drop-down, List box, Signature, Initial
* Edit helpers: Delete
* Close

![Blazor PDF Viewer form designer toolbar](./images/blazor-form-deigner-toolbar.png)

* [Get more info about form designer toolbar customization](./toolbar/form-designer-toolbar-customization)

## Redaction toolbar in Blazor SfPdfViewer Component

The Redaction toolbar provides tools to mark and permanently remove sensitive content from the document. It appears below the primary toolbar when redaction is enabled.

* Redaction marks: Mark for redaction, Redact page
* Apply redactions: Permanently remove marked content
* Properties: Redaction properties
* Edit helpers: Delete
* Close

![Blazor PDF Viewer redaction toolbar](./images/blazor-redaction-toolbar.png)

* [Get more info about redaction toolbar customization](./toolbar/redaction-toolbar-customization)

## See also

* [Mobile toolbar](./toolbar/mobile-toolbar)
* [Adding the shape annotation in PDF viewer](./annotation/shape-annotation)
* [Adding the redaction annotation in PDF viewer](./annotation/redaction-annotation)
* [Form designer in PDF viewer](./form-designer/overview)
