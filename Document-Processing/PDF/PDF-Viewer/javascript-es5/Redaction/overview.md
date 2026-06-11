---
layout: post
title: Redaction annotation in Javascript PDF Viewer | Syncfusion
description: Learn how to hide sensitive information with interactive and programmatic redaction using the Syncfusion JavaScript(ES5) PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Redaction in JavaScript (ES5) PdfViewer

Redaction annotations are used to hide confidential or sensitive information in a PDF. The Syncfusion JavaScript PDF Viewer (EJ2) enables marking regions or entire pages for redaction, customizing appearance, and permanently applying redaction them with a single action.

## Enable the redaction toolbar

To enable the redaction toolbar, configure the `toolbarSettings.toolbarItems` property of the PdfViewer instance to include the **RedactionEditTool**.

The following example shows how to enable the redaction toolbar:

```js
var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
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
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');
```

N> Add the PdfViewer control to the JavaScript application and ensure the redaction feature is included in the installed package version. Once applied, redaction permanently removes the selected content.

![Toolbar with the Redaction tool highlighted](redaction-annotations-images/redaction-icon-toolbar.png)

## Add Redaction Annotations

Mark specific content for redaction using the toolbar or programmatically.  

Select the **Redaction tool** and draw over text or graphics to hide. Optionally add overlay text (for example, “Confidential”) and adjust style properties: fill color, border color, and opacity.

![Drawing a redaction region over page content](redaction-annotations-images/adding-redaction-annotation.png)

## Delete Redaction Annotations

Remove redaction annotations using the toolbar or keyboard shortcuts:

- Click the **Delete** button on the toolbar, or
- Select the annotation and press the **Delete** key.

![Toolbar showing the Delete command for redaction](redaction-annotations-images/redaction-delete-icon.png)

## Redact Entire Pages

The viewer supports redacting entire pages that contain sensitive information. Use the built-in dialog to select specific pages, page ranges, or all pages, or invoke the same behavior programmatically.

![Toolbar showing the Redact Page option](redaction-annotations-images/redact-page-icon.png)

## Apply Redaction

After adding redaction annotations, permanently apply them to the document using the **Apply Redaction** toolbar button or the corresponding API method.

- The **Apply Redaction** button remains disabled until at least one redaction annotation exists.
- The button becomes enabled when redaction annotations are present.

![Toolbar showing the Apply Redaction button](redaction-annotations-images/redact-button-icon.png)

A confirmation dialog appears before applying redaction to ensure acknowledgment of the irreversible action.

![Confirmation dialog for applying redaction](redaction-annotations-images/apply-redaction-dialog.png)

N> Applying redaction is irreversible. Once applied, the original content cannot be recovered.

## Comment Support

Redaction annotations can include comments using the built‑in comment panel. This helps you add notes, track reviews, or record the reason for redaction.  

Comments can be added through the UI or API. For more details, see the [Comments documentation](../annotations/comments).

## Import and Export Redaction Annotations

You can save and reload redaction annotations by exporting and importing them in JSON format. This makes it easy to persist annotations or share them across sessions.

For more details, see the [Export and import annotations documentation](../how-to/import-export-annotation-js).

## See also

* [Redaction UI interactions](./ui-interaction)
* [Redaction Programmatic support](./programmatic-support)
* [Redaction Toolbar](./toolbar)
* [Redaction Mobile view](./mobile-view)
* [Search Text and Redact](./search-redact)
