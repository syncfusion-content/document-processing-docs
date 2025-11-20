---
layout: post
title: Redaction in mobile view in JavaScript ES6 PDF Viewer | Syncfusion
description: Learn how to apply redactions in mobile view using the Syncfusion JavaScript (ES6) PDF Viewer with a complete toolbar setup and redaction workflow.
platform: document-processing
control: PdfViewer
documentation: ug
---

# Redaction in Mobile View in JavaScript (ES6) PdfViewer Component

The Redaction Tool enables users to permanently mark and remove sensitive content from PDF documents in mobile view using the JavaScript (ES6) PdfViewer component. This feature is optimized for touch interactions and provides a streamlined redaction workflow specifically designed for mobile devices.

![Redaction in Mobile View](./redaction-annotations-images/redaction-mobile-view.png)

N> In mobile view, the redaction toolbar appears at the bottom of the viewer for easy thumb access. Mobile layout activates automatically on small screens.

## Adding Redaction in Mobile View

To enable redaction functionality in your JavaScript (ES6) application, configure the PDF Viewer with the following setup:

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, Print, Annotation, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, Print, Annotation, FormFields, FormDesigner);
let viewer: PdfViewer = new PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
  toolbarSettings: {
    toolbarItems: [
      'OpenOption',
      'UndoRedoTool',
      'PageNavigationTool',
      'MagnificationTool',
      'PanTool',
      'SelectionTool',
      'CommentTool',
      'SubmitForm',
      'AnnotationEditTool',
      'RedactionEditTool',   // Enables Redaction toolbar
      'FormDesignerEditTool',
      'SearchOption',
      'PrintOption',
      'DownloadOption'
    ]
  }
});
viewer.appendTo('#pdfViewer');
```

## Understanding Mobile Redaction Toolbar Tools

When you enter redaction mode in mobile view, a specialized redaction toolbar appears with multiple tools optimized for touch interaction. Each tool serves a specific purpose in the redaction workflow.

### Redaction Annotation Tool

The Redaction Annotation tool is the primary redaction feature that allows you to draw redaction rectangles on specific content:

Function: Creates visual redaction annotations that mark content for permanent removal
Usage:
Touch and drag to draw rectangular redaction overlays on any content area.

Process:
- Selected content appears with a customizable overlay (default black)
- Annotations remain editable until explicitly applied
- Can be repositioned or deleted before final application

![Redaction Annotation Tool](./redaction-annotations-images/redaction-annotation-annot.png)

### Page Redaction Tool

The Page Redaction tool enables batch redaction of entire pages based on specific patterns.

![Page Redaction Tool](./redaction-annotations-images/page-redaction-annot.png)

Function: Redacts complete pages or page ranges with a single action
Options Available:
- Odd Pages: Redacts only odd-numbered pages (1, 3, 5, etc.)
- Even Pages: Redacts only even-numbered pages (2, 4, 6, etc.)
- Specific Page: Specify single pages, ranges (e.g., 1-5, 10-15), or comma-separated lists (e.g., 1,3,5-7)
- Current Page: Redacts only the currently displayed page

Usage:
Select desired pattern → Review affected pages in the viewer → Confirm redaction scope

![Page Redaction Tool Dialog](./redaction-annotations-images/page-redaction-dialog-annot.png)

### Redaction Properties Tool

The Redaction Properties tool allows customization of redaction appearance before application.

![Redaction Properties Mobile View](./redaction-annotations-images/redaction-properties-annot.png)

Function: Customize the visual appearance of redaction overlays and text replacement
Customizable Properties:
- Fill Color: Change the redaction overlay color (default: black)
- Outline Color: Set outline color for redaction boxes (optional)
- Overlay Text: Add custom text to appear on redacted areas (e.g., "REDACTED", "CONFIDENTIAL")
- Text Color: Change overlay text color for better visibility
- Text Font: Select font family for overlay text
- Text Alignment: Position overlay text within redaction boxes
- Text Size: Adjust overlay text size relative to redaction area

![Redaction Properties Dialog Mobile View](./redaction-annotations-images/redaction-properties-dialog-annot.png)

## Enabling Redaction Mode in Mobile View

Step 1: Tap the Redaction button in the mobile toolbar to activate redaction mode. The redaction toolbar will appear at the bottom of the viewer.

![Redaction toolbar displayed at bottom of mobile PDF viewer with three distinct tools](./redaction-annotations-images/redaction-mobile-view.png)

Step 2: From the redaction toolbar, select your desired redaction tool:
- First Tool (Redaction Annotation): For selective content redaction
- Second Tool (Page Redaction): For page-wide or pattern-based redaction
- Third Tool (Redaction Properties): For appearance customization

Step 3: Configure your redaction parameters using the selected tool interface.

## Applying Different Redaction Types in Mobile View

### Selective Content Redaction
1. Select Redaction Annotation tool (first button)
2. Choose Content: Tap and drag over text or draw rectangular areas
3. Preview: Check redaction overlays for accuracy
4. Apply: Tap "Apply Redactions" button

### Page-Wide Redaction
1. Select Page Redaction tool (second button)
2. Choose Pattern: Select odd pages, even pages, or custom range
3. Review: Verify affected pages in the viewer
4. Apply: Confirm page redaction scope and apply

### Custom Appearance Redaction
1. Select Redaction Properties tool (third button)
2. Customize: Adjust colors, overlay text, and formatting
3. Preview: See changes applied to existing annotations
4. Apply: Use customized appearance for final redaction

## Applying Redactions in Mobile View

N> Applying redactions is permanent. After applying, the underlying content and text are removed from the document and cannot be recovered.

Once you have configured redactions using any combination of tools.

Step 1: Review all redaction marks and configurations.

![Review Redaction Annotation](./redaction-annotations-images/review-redaction-annotation-mv-annot.png)

Step 2: Tap the Apply Redactions button in the redaction toolbar

![Apply Redaction Button](./redaction-annotations-images/apply-redaction-button-mv.png)

Step 3: Confirm the action when prompted - this operation is permanent and cannot be undone

![Apply Redaction Dialog](./redaction-annotations-images/apply-redaction-dialog-mv-annot.png)

The selected content will be permanently removed and replaced according to your redaction properties (solid color blocks or custom overlay text).

![Applied Redaction](./redaction-annotations-images/applied-redaction-annot.png)

## Removing Redaction Annotations

To remove existing redaction annotations before they are applied:

- Step 1: Tap the Redaction Edit button in the mobile toolbar to enter annotation editing mode
- Step 2: Tap on any existing redaction annotation you wish to remove
- Step 3: Select Delete from the context menu that appears

Alternative: Tap redaction annotation → Use delete button in annotation properties panel

![Delete Redaction Annotation](./redaction-annotations-images/delete-redaction-annotation-annot.png)

N> Once redactions have been applied to the document, they become part of the PDF content and cannot be removed or modified.

## See Also

* [Redaction Overview](./overview)
* [UI Interaction](./ui-interaction)
* [Programmatic Support in Redaction](./programmatic-support)
* [Toolbar](./toolbar)
* [Search Text and Redact](./search-redact)
