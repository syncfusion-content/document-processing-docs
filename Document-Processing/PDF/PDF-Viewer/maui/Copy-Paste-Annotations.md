---
layout: post
title: Copy, Cut, and Paste Annotations in .NET MAUI PDF Viewer | Syncfusion
description: Learn how to copy, cut, and paste annotations in the Syncfusion<sup>®</sup> .NET MAUI PDF Viewer (SfPdfViewer) control.
platform: document-processing
control: SfPdfViewer
documentation: ug
keywords: .net maui pdf viewer, .net maui view pdf, pdf viewer in .net maui, .net maui open pdf, maui pdf viewer, maui pdf view
---

# Copy, Cut, and Paste Annotations in .NET MAUI PDF Viewer

The [SfPdfViewer](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) provides built-in support for copying, cutting, and pasting annotations. Use these operations to duplicate an annotation or move it to another location in the same document without recreating its appearance. On Android and iOS, the operations are available from the annotation context menu. On Windows and macOS, they are available through keyboard shortcuts after an annotation is selected.

## Copy or cut an annotation on Android and iOS

On Android and iOS, annotation editing options are available through the context menu. Long-press the annotation you want to duplicate or move, and then select **Copy** or **Cut**.

![Annotation context menu showing Copy, Cut, and Paste options](Images/Annotations/copy-cut-paste-annotations.gif)

*Annotation context menu showing Copy, Cut, and Paste options*

1. Long-press the annotation.
2. Select **Copy** or **Cut** from the context menu.

## Paste an annotation on Android and iOS

After an annotation has been copied or cut, long-press an empty area on the page and select **Paste** from the context menu. The pasted annotation keeps the appearance and properties of the original annotation.

1. Long-press an empty area on the page.
2. Select **Paste** from the context menu.

N> The **Paste** option is available only after an annotation has been copied or cut.

## Copy, cut, and paste annotations on Windows and macOS

After selecting an annotation, use the following keyboard shortcuts to copy, cut, or paste it. On macOS, use the Command key in place of the Ctrl key.

| Action | Windows | macOS |
| --- | --- | --- |
| Copy | Ctrl + C | Command + C |
| Cut | Ctrl + X | Command + X |
| Paste | Ctrl + V | Command + V |

N> In Windows, a UI element receives key notifications only when it is focused. Click or tap the PDF Viewer before using these shortcuts. For other viewer shortcuts, see [Keyboard Shortcuts](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/keyboard-shortcuts).

## Supported annotation types

Copy, cut, and paste operations are supported for the following annotation types:

* [Shape annotations](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/shapes)
* [Ink annotations](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/ink)
* [Free text annotations](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/free-text)
* [Stamp annotations](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/stamps)
* [Sticky note annotations](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/sticky-notes)

N> Pasted annotations retain the appearance and properties of the original annotation. 
N> For [locked annotations](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/lock-unlock), only Copy and Paste operations are supported. Cut is not available because a locked annotation cannot be removed.

## See Also

* [Annotations Overview](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/annotations-overview)
* [Select and Deselect Annotations](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/select-deselect-annotations)
* [Lock and Unlock Annotations](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/lock-unlock)
* [Keyboard Shortcuts](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/keyboard-shortcuts)
* [Free Text Annotations](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/free-text)
