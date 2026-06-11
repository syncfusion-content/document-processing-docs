---
layout: post
title: Redaction annotation in Vue PDF Viewer | Syncfusion
description: Learn how to hide sensitive information with interactive and programmatic redaction using the Syncfusion Vue PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Redaction in Vue PdfViewer

Redaction annotations hide confidential or sensitive information in a PDF. The Syncfusion Vue PDF Viewer (EJ2) enables marking regions or entire pages for redaction, customizing appearance, and permanently applying redaction with a single action.

## Enable the redaction toolbar

To enable the redaction toolbar, configure the `toolbarSettings.toolbarItems` property of the PdfViewer instance to include the **RedactionEditTool**.

The following example shows how to enable the redaction toolbar:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <div class="control-section">
      <ejs-pdfviewer
        id="container"
        :documentPath="documentPath"
        :resourceUrl="resourceUrl"
        :toolbarSettings="toolbarSettings"
        style="height: 680px"
      />
    </div>
  </div>
</template>
<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  data() {
    return {
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
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
          'RedactionEditTool',
          'FormDesignerEditTool',
          'SearchOption',
          'PrintOption',
          'DownloadOption'
        ]
      }
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      Annotation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      FormFields,
      FormDesigner,
      PageOrganizer
    ]
  }
};
</script>
{% endhighlight %}
{% endtabs %}

N> Add the PdfViewer control to the Vue application and ensure the redaction feature is included in the installed package version. Once applied, redaction permanently removes the selected content.

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

- The button is disabled until at least one redaction annotation exists.  
- It becomes active when redaction annotations are present.

![Toolbar showing the Apply Redaction button](redaction-annotations-images/redact-button-icon.png)

A confirmation dialog appears before applying redaction to ensure acknowledgement of the irreversible action.

![Confirmation dialog for applying redaction](redaction-annotations-images/apply-redaction-dialog.png)

N> Applying redaction is irreversible. Once applied, the original content cannot be recovered.

## Comment Support

Redaction annotations can include comments using the built‑in comment panel. This helps you add notes, track reviews, or record the reason for redaction.  

Comments can be added through the UI or API. For more details, see the [Comments documentation](../annotations/comments).

## Import and Export Redaction Annotations

You can save and reload redaction annotations by exporting and importing them in JSON format. This makes it easy to persist annotations or share them across sessions.

For more details, see the [Export and import annotations documentation](../how-to/import-export-annotation).

## See also

* [Redaction UI interactions](./ui-interaction)
* [Redaction Programmatic support](./programmatic-support)
* [Redaction Toolbar](./toolbar)
* [Redaction Mobile view](./mobile-view)
* [Search Text and Redact](./search-redact)
