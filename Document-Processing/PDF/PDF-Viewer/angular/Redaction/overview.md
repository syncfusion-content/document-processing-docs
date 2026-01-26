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

Redaction annotations are used to hide confidential or sensitive information in a PDF. The Syncfusion Angular PDF Viewer (EJ2) lets you mark areas or entire pages for redaction, customize their appearance, and permanently apply them with a single action.

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

N> Prerequisites: Add the PdfViewer control to your Angular application and ensure the redaction feature is available in the version you are using. Once applied, redaction permanently removes the selected content.

![Toolbar with the Redaction tool highlighted](redaction-annotations-images/redaction-icon-toolbar.png)

## Add Redaction Annotations

You can mark specific content for redaction using the toolbar or through code.  

Select the **Redaction tool** and draw over the text or graphics you want to hide. You can also add overlay text (such as “Confidential”) and adjust the style — fill color, border color, and opacity.

![Drawing a redaction region over page content](redaction-annotations-images/adding-redaction-annotation.png)

## Delete Redaction Annotations

Redaction annotations can be removed easily:

- Click the **Delete** button on the toolbar, or  
- Select the annotation and press the **Delete** key.

![Toolbar showing the Delete command for redaction](redaction-annotations-images/redaction-delete-icon.png)

## Redact Entire Pages

The viewer allows you to redact whole pages that contain sensitive information. You can choose specific pages, page ranges, or redact all pages using the built‑in dialog, or perform the same action programmatically.

![Toolbar showing the Redact Page option](redaction-annotations-images/redact-page-icon.png)

## Apply Redaction

Once annotations are added, you can permanently apply them to the document. This action cannot be undone.  

Use the **Apply Redaction** button on the toolbar or call the API method:

- The button is disabled until at least one redaction annotation exists.  
- It becomes active when redaction annotations are present.

![Toolbar showing the Apply Redaction button](redaction-annotations-images/redact-button-icon.png)

A confirmation dialog appears before applying redaction to ensure you acknowledge the irreversible nature of the process.

![Confirmation dialog for applying redaction](redaction-annotations-images/apply-redaction-dialog.png)

N> After redaction is applied, the original content cannot be recovered.

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
