---
layout: post
title: Remove annotations in Angular PDF Viewer | Syncfusion
description: Learn how to remove/delete PDF annotations in Syncfusion Angular PDF Viewer using UI options (context menu, toolbar, Delete key) and programmatic APIs.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Remove annotations in Angular

Annotations can be removed using the built-in UI or programmatically. This page shows common methods to delete annotations in the viewer.

## Delete via UI

A selected annotation can be deleted in three ways:

- Context menu: right-click the annotation and choose Delete.
![Delete via context menu](../../javascript-es6/annotations/annotation-images/delete-annot-context-menu.png)
- Annotation toolbar: select the annotation and click the Delete button on the annotation toolbar.
![Delete via annotation toolbar](../../javascript-es6/annotations/annotation-images/delete-annot.png)
- Keyboard: select the annotation and press the `Delete` key.

## Delete programmatically

Annotations can be deleted programmatically either by removing the currently selected annotation or by specifying an annotation id.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import { PdfViewerModule, ToolbarService, AnnotationService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="deleteAnnotation()">Delete Annotation</button>
    <button (click)="deleteAnnotationById()">Delete Annotation By ID</button>
    <ejs-pdfviewer
      id="pdfViewer"
      [documentPath]="documentPath"
      [resourceUrl]="resourceUrl"
      style="height:650px;display:block">
    </ejs-pdfviewer>
  `,
  imports: [PdfViewerModule],
  providers: [ToolbarService, AnnotationService]
})
export class AppComponent {
  public documentPath: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  getViewer() {
    return (document.getElementById('pdfViewer') as any).ej2_instances[0];
  }

  deleteAnnotation() {
    // Delete the selected annotation
    this.getViewer().annotation.deleteAnnotation();
  }

  deleteAnnotationById() {
    const viewer = this.getViewer();
    // Delete the first annotation using its id from the annotation collection
    if (viewer.annotationCollection.length > 0) {
      viewer.annotation.deleteAnnotationById(viewer.annotationCollection[0].id);
    }
  }
}
{% endhighlight %}
{% endtabs %}

N> Deleting via the API requires the annotation to exist in the current document. Ensure an annotation is selected when using `deleteAnnotation()`, or pass a valid id to `deleteAnnotationById()`.

[View Sample on GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples)

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
