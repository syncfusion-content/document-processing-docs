---
layout: post
title: Customize the redaction toolbar in JavaScript PDF Viewer | Syncfusion
description: Learn how to customize the redaction toolbar in the Syncfusion JavaScript PDF Viewer by showing or hiding default items.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Redaction toolbar customization in JavaScript

The redaction toolbar in the Syncfusion JavaScript (ES5/JavaScript) PDF Viewer can be customized by rearranging existing items, hiding default items, or adding new ones. You can also place custom items at specific index positions among the existing toolbar items.

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

Refer to the following image for the toolbar view:

![Enable redaction toolbar](../redaction/redaction-annotations-images/redaction-icon-toolbar.png)

## Show or hide the redaction toolbar

You can toggle the redaction toolbar either using the built‑in toolbar icon or programmatically with the `showRedactionToolbar` method.

### Display the redaction toolbar using the toolbar icon

When **RedactionEditTool** is included in the toolbar settings, clicking the redaction icon in the primary toolbar will show or hide the redaction toolbar.

![Show redaction toolbar from the primary toolbar](../redaction/redaction-annotations-images/redaction-icon-toolbar.png)

### Display the redaction toolbar programmatically

You can also control visibility through code by calling `viewer.toolbar.showRedactionToolbar(true/false)`.

The following example demonstrates toggling the redaction toolbar programmatically:


```html
<!--Buttons in your HTML-->
<button id="showRedactionToolbar">Show Redaction Toolbar</button>
<button id="hideRedactionToolbar">Hide Redaction Toolbar</button>
```
```js
document.getElementById('showRedactionToolbar').addEventListener('click', () => {
    pdfviewer.toolbar.showRedactionToolbar(true);  // Show the redaction toolbar
});

document.getElementById('hideRedactionToolbar').addEventListener('click', () => {
    pdfviewer.toolbar.showRedactionToolbar(false); // Hide the redaction toolbar
});
```

[View Sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples)

Refer to the following image for details:

![Programmatically show the Redaction toolbar](../redaction/redaction-annotations-images/show-redaction-toolbar.png)

## See also

* [Adding the redaction annotation in PDF viewer](../redaction/overview)
* [UI interactions](./ui-interaction)
* [Programmatic support](./programmatic-support)
* [Mobile view](./mobile-view)
* [Search Text and Redact](./search-redact)