---
layout: post
title: Customize Annotation Selectors | Syncfusion Angular PDF Viewer
description: Learn how to customize annotation selectors in the Angular PDF Viewer component using annotationSelectorSettings with examples.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Customize annotation selectors in Angular PDF Viewer

Use the [annotationSelectorSettings](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#annotationselectorsettings) property to configure the appearance and behavior of annotation selectors. This includes selection handles and resizers (for example, handle shape and size), which determine how users interact with annotations during editing.

The example below changes the selector's resizer handle shape to circular and opens an existing annotation for editing. Setting `resizerShape = 'Circle'` updates the selector appearance to circular resizer handles; ensure an annotation exists before calling `editAnnotation` to avoid runtime errors.

Example: Customize the selector of a shape annotation

```html
<button ejs-button cssClass="e-primary" (click)="onAnnotationSelector()">annotationSelector</button>
```

```ts
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import {
  PdfViewerComponent,
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

/**
 * Default PdfViewer Controller
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.html',
  encapsulation: ViewEncapsulation.None,
  // tslint:disable-next-line:max-line-length
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
  styleUrls: ['app.css'],
  standalone: true,
  imports: [PdfViewerModule],
})
export class AppComponent {
  @ViewChild('pdfviewer')
  public pdfviewerControl: PdfViewerComponent;
  public document: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string =
    'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib';

  onAnnotationSelector(): void {
    if (!this.pdfviewerControl) {
      return;
    }
    this.pdfviewerControl.rectangleSettings.annotationSelectorSettings.resizerShape =
      'Circle';
    const annot = this.pdfviewerControl.annotationCollection[0];
    if (annot) {
      this.pdfviewerControl.annotationModule.editAnnotation(annot);
    }
  }

  ngOnInit(): void {
    // ngOnInit function
  }
}
```

Sample: [How to customize the annotation selector](https://stackblitz.com/edit/angular-pfdpfdzq-u7rmrzrp?file=src%2Fapp.component.html,src%2Fapp.component.ts)