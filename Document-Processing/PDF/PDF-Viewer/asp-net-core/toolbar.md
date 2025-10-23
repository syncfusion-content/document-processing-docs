---
layout: post
title: Overview of the toolbars in ASP.NET Core PDF Viewer Component | Syncfusion
description: Check out and learn about the primary, annotation, form designer, and redaction toolbars in the Syncfusion ASP.NET Core PDF Viewer component.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET Core
documentation: ug
---

# Toolbar in ASP.NET Core PDF Viewer Component

The PDF Viewer includes a built-in, responsive toolbar that surfaces common PDF actions and provides entry points to feature-specific toolbars. It adapts across desktop, tablet, and mobile, and can be customized to show or hide items, reorder commands, add custom items, and handle toolbar events.

There are four toolbars in the PDF Viewer:
* Primary toolbar
* Annotation toolbar
* Form designer toolbar

## Primary Toolbar in ASP.NET Core PDF Viewer Component

The PDF Viewer includes a built-in, responsive primary toolbar that provides quick access to common viewer actions and feature-specific toolbars. It adapts to the available width for desktop, tablet, and mobile layouts.

The primary toolbar includes the following options:

| Option | Description |
|---|---|
| OpenOption | This option provides an action to load the PDF documents to the PDF Viewer.|
| PageNavigationTool | This option provides an action to navigate pages in the PDF Viewer. It contains GoToFirstPage, GoToLastPage, GotoPage, GoToNext, and GoToLast tools.|
| MagnificationTool | This option provides an action to magnify pages with predefined or user-defined zoom factors in the PDF Viewer. Contains ZoomIn, ZoomOut, Zoom, FitPage, and FitWidth tools.|
| PanTool | This option provides an action for panning the pages in the PDF Viewer.|
| SelectionTool | This option provides an action to enable or disable text selection in the PDF Viewer.|
| SearchOption | This option provides an action to search for text in PDF documents.|
| PrintOption | This option provides an action to print the PDF document loaded in the PDF Viewer.|
| DownloadOption | This option provides an action to download the PDF document loaded in the PDF Viewer.|
| UndoRedoTool | This tool provides options to undo and redo the annotation actions performed in the PDF Viewer.|
| AnnotationEditTool | This tool provides options to enable or disable the edit mode of annotation in the PDF Viewer.|

![ASP.NET Core PDF Viewer primary toolbar with customized items](./images/pdfviewer-primary-toolbar.png)

* [Get more info about primary toolbar customization](./toolbar-customization/primary-toolbar-customization)

## Annotation toolbar in ASP.NET Core PDF Viewer Component

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

![ASP.NET Core PDF Viewer annotation toolbar](./images/annotation-toolbar.png)

* [Get more info about annotation toolbar customization](./toolbar-customization/annotation-toolbar-customization)

## Form Designer toolbar in ASP.NET Core PDF Viewer Component

Use the Form Designer toolbar to add and configure interactive form fields in the PDF. It appears below the primary toolbar when form designer is enabled.

* Field types: Button, Text box, Password, Checkbox, Radio button, Drop-down, List box, Signature, Initial
* Edit helpers: Delete
* Close

![ PDF Viewer form designer toolbar](./images/form-deigner-toolbar.png)

* [Get more info about form designer toolbar customization](./toolbar-customization/form-designer-toolbar-customization)

## See also

* [Mobile toolbar](./toolbar-customization/mobile-toolbar)
* [Adding the shape annotation in PDF viewer](./annotation/shape-annotation)
* [Form designer in PDF viewer](./form-designer/create-programmatically)
