---
layout: post
title: Appearance Based Annotation Rendering | Syncfusion Angular PDF Viewer
description: Learn how to view PDF annotations with their embedded custom appearance in the Angular PDF Viewer by enabling the showAnnotationAppearance API.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Appearance-Based Annotation Rendering in Angular PDF Viewer

Appearance-based annotation rendering enables the Angular PDF Viewer to display the annotations of the loaded PDF using the appearance that is already embedded in the document. Instead of rebuilding each annotation from its individual properties, the viewer uses the appearance stored in the PDF, so that every annotation is shown exactly as its author intended.

This is especially useful for annotations that carry custom graphics, which cannot be reproduced from the annotation properties alone. Enable this behavior by setting the `showAnnotationAppearance` property to `true`.

## Why appearance-based rendering is required

A PDF annotation can optionally include a custom appearance. This appearance holds the pre-rendered graphics of the annotation, such as a rubber stamp with a company logo, a highlighted region drawn with a specific transparency gradient, or a free text annotation whose text was drawn using an embedded font.

When such an annotation is opened in a viewer that ignores the custom appearance, the viewer falls back to generating the annotation from its basic properties. As a result, the custom graphics are lost, the styling differs from the original document, and the annotation appears differently across viewers and platforms.

By rendering the embedded appearance, the Angular PDF Viewer preserves the original visual representation of the annotation and keeps the output consistent with the source PDF in every viewer and on every platform.

## Enable appearance-based annotation rendering

Set the showAnnotationAppearance property to `true` on the PDF Viewer component to display the annotations of the loaded document with their embedded appearance.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component } from '@angular/core';
import {
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  AnnotationService,
  FormFieldsService,
  FormDesignerService,
  PageOrganizerService,
  PdfViewerModule,
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
    <div class="content-wrapper">
      <ejs-pdfviewer
        id="pdfViewer"
        [documentPath]="document"
        [resourceUrl]="resource"
        [showAnnotationAppearance]="true"
        style="height:650px;display:block">
      </ejs-pdfviewer>
    </div>
  `,
  imports: [PdfViewerModule],
  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    AnnotationService,
    FormFieldsService,
    FormDesignerService,
    PageOrganizerService,
  ],
})
export class AppComponent {
  public document: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public resource: string =
    'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
}

{% endhighlight %}
{% endtabs %}

![Circle annotation with custom appearance in the Angular PDF Viewer](../images/circle-annotation-with-custom-appearance-ej2-pdf-viewer.png)

When the property is enabled, every annotation in the loaded document that contains an appearance is displayed with that appearance. The remaining annotations continue to be displayed from their annotation properties, so that the document is shown without any missing content.

## Custom appearance (AP) entry

The custom appearance of an annotation is stored in the `/AP` entry of the PDF annotation. An annotation that carries this entry contains graphics that are defined only inside the appearance. For example, a rubber stamp annotation may embed a company logo, a border, and a signature line that are drawn with custom graphics and that are not described by any of the annotation properties.

When `showAnnotationAppearance` is set to `true`, the viewer displays that custom appearance, and the annotation is shown with the logo, border, and signature line exactly as they were authored.

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotation/annotation-types/area-annotation)
- [Annotation Toolbar](../toolbar-customization/annotation-toolbar)
- [Customize Annotation](../annotation/customize-annotation)
- [Resize and Move Annotations](../annotation/resize-move-annotations)
- [Remove Annotation](../annotation/delete-annotation)
- [Annotation Events](../annotation/annotation-event)