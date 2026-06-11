---
layout: post
title: Undo and Redo annotation in Angular PDF Viewer | Syncfusion
description: Learn to undo and redo annotations changes in Syncfusion Angular PDF Viewer, with UI and programmatic examples.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Undo and redo annotations in Angular PDF Viewer

The PDF Viewer supports undo and redo for annotations.

![Undo-redo](../../javascript-es6/annotations/annotation-images/annotation-undo-redo.png)

Undo and redo actions can be performed by using either of the following methods:

1. Using keyboard shortcuts (desktop):
    After performing an annotation action, press `Ctrl+Z` to undo and `Ctrl+Y` to redo on Windows and Linux. On macOS, use `Command+Z` to undo and `Command+Shift+Z` to redo.
2. Using the toolbar:
    Use the **Undo** and **Redo** tools in the toolbar.

Refer to the following code snippet to call undo and redo actions from the client side.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import { PdfViewerModule, ToolbarService, AnnotationService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
    <div style="margin-bottom:8px; display:flex; gap:8px;">
      <button (click)="undoAnnotation()">Undo</button>
      <button (click)="redoAnnotation()">Redo</button>
    </div>
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

  undoAnnotation() {
    this.getViewer().undo();
  }

  redoAnnotation() {
    this.getViewer().redo();
  }
}
{% endhighlight %}
{% endtabs %}

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotation/annotation-types/area-annotation)
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../../annotation/create-modify-annotation)
- [Customize Annotation](../../annotation/customize-annotation)
- [Remove Annotation](../../annotation/delete-annotation)
- [Handwritten Signature](../../annotation/signature-annotation)
- [Export and Import Annotation](../../annotations/export-import/export-annotation)
- [Annotation in Mobile View](../../annotation/annotations-in-mobile-view)
- [Annotation Events](../../annotation/annotation-event)
- [Annotations API](../annotation/annotations-api)