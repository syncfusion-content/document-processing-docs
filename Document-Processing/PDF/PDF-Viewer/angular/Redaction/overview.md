---
layout: post
title: Redaction annotation in Angular PDF Viewer | Syncfusion
description: Learn how to hide sensitive information with interactive and programmatic redaction using the Syncfusion Angular PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Redaction in Angular PdfViewer

Redaction annotations hide confidential or sensitive information in a PDF. The Syncfusion Angular PDF Viewer (EJ2) enables marking regions or entire pages for redaction, customizing appearance, and permanently applying redaction with a single action.

## Enable the redaction toolbar

To enable the redaction toolbar, configure the `toolbarSettings.toolbarItems` property of the PdfViewer instance to include the **RedactionEditTool**.

The following example shows how to enable the redaction toolbar:

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, ViewChild } from '@angular/core';
import {
  PdfViewerComponent,
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  AnnotationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  FormFieldsService,
  FormDesignerService,
  PageOrganizerService,
  ToolbarSettingsModel
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
    <div class="content-wrapper">
      <ejs-pdfviewer
        #pdfviewer
        id="pdfViewer"
        [resourceUrl]="resourceUrl"
        [documentPath]="documentPath"
        [toolbarSettings]="toolbarSettings"
        style="height:640px;display:block">
      </ejs-pdfviewer>
    </div>
  `,
  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    AnnotationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    FormFieldsService,
    FormDesignerService,
    PageOrganizerService
  ]
})
export class AppComponent {
  @ViewChild('pdfviewer', { static: true }) pdfViewer!: PdfViewerComponent;

  // Standalone mode (CDN) – keep this version aligned with your package
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  // Matches your JS toolbar configuration, with RedactionEditTool included
  public toolbarSettings: ToolbarSettingsModel = {
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
      'RedactionEditTool',   // Redaction entry in the primary toolbar
      'FormDesignerEditTool',
      'SearchOption',
      'PrintOption',
      'DownloadOption'
    ]
  };
}

{% endhighlight %}
{% endtabs %}

N> Add the PdfViewer control to the Angular application and ensure the redaction feature is included in the installed package version. Once applied, redaction permanently removes the selected content.

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
