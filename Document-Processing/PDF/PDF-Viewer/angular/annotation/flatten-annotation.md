---
layout: post
title: Flatten Annotations in the Syncfusion Angular PDF Viewer
description: Learn how all about how to flatten annotations and formfields before saving a PDF in the Syncfusion Angular PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Flatten Annotations in Angular PDF Viewer

Flattening takes the visual appearance of annotations and embeds them into each page's content stream. The visual result remains visible, but the annotation objects and interactive form field structures are removed or converted so they can no longer be selected, edited, or filled.

Flattening annotations permanently merges them into the PDF content. Once flattened:
- Annotations are **no longer editable** in any PDF viewer.
- Useful for **secure sharing**, preventing modifications.
- Ideal when **finalizing markup** before distribution.

## How to Flatten Annotations

You can flatten annotations either when a document is loaded (preprocessing) or when exporting/saving the file. Flattening on load makes the viewer display a flattened version immediately; flattening on export preserves the original viewer session while producing a flattened output file.

Typical export-time steps:
- Save the viewer contents to a Blob.
- Create a `PdfDocument` from the saved bytes.
- Enable `document.flatten = true` to merge annotations and form field appearances.
- Save the resulting PDF.

Use the example below to flatten at export time (on download).

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, ViewChild } from '@angular/core';
import {
  PdfViewerComponent,
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  BookmarkViewService,
  ThumbnailViewService,
  PrintService,
  TextSelectionService,
  TextSearchService,
  AnnotationService,
  FormFieldsService,
  FormDesignerService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';
import { PdfDocument } from '@syncfusion/ej2-pdf';

@Component({
  selector: 'app-root',
  template: `
    <div class="content-wrapper">
      <button (click)="flattenPdf()">Flatten and download PDF</button>
      <ejs-pdfviewer
        #pdfViewer
        id="pdfViewer"
        [documentPath]="document"
        [resourceUrl]="resource"
        style="height:640px;display:block">
      </ejs-pdfviewer>
    </div>
  `,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    BookmarkViewService,
    ThumbnailViewService,
    PrintService,
    TextSelectionService,
    TextSearchService,
    AnnotationService,
    FormFieldsService,
    FormDesignerService,
    PageOrganizerService
  ]
})
export class AppComponent {

  @ViewChild('pdfViewer')
  public pdfViewer!: PdfViewerComponent;

  public document: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public resource: string =
    'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public flattenPdf(): void {
    this.pdfViewer.saveAsBlob().then((value: Blob) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        const byteArray = new Uint8Array(arrayBuffer);
        const document = new PdfDocument(byteArray);
        // Flatten all annotations and form fields: this embeds appearances
        // into the page content so annotations are no longer interactive.
        document.flatten = true;
        document.save('flattened.pdf');
      };
      reader.readAsArrayBuffer(value);
    });
  }
}

{% endhighlight %}
{% endtabs %}

N> To flatten documents when they are uploaded/loaded into the viewer, see [Flatten on Load](../document-handling/preprocess-pdf#flatten-on-load).


## Notes

- Flattening applies to **all annotation types**: text markup, shapes, stamps, notes, ink, and form fields.
- Once flattened, annotations **cannot be edited or removed**.
- Use flattening **only at export time**, not during regular document interactions.

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotation/annotation-types/area-annotation)
- [Annotation Toolbar](../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../annotation/create-modify-annotation)
- [Customize Annotation](../annotation/customize-annotation)
- [Handwritten Signature](../annotation/signature-annotation)
- [Export and Import Annotation](../annotation/export-import/export-annotation)
- [Annotation Permission](../annotation/annotation-permission)
- [Annotation in Mobile View](../annotation/annotations-in-mobile-view)
- [Annotation Events](../annotation/annotation-event)
- [Annotation API](../annotation/annotations-api)