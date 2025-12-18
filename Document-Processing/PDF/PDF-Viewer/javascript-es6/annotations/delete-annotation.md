---
layout: post
title: Remove annotations in TypeScript PDF Viewer | Syncfusion
description: Learn how to remove/delete PDF annotations in Syncfusion TypeScript PDF Viewer using UI options (context menu, toolbar, Delete key) and programmatic APIs.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Remove annotations

You can remove annotations using the built-in UI or programmatically. This page shows the common ways to delete annotations in the viewer.

## Delete via UI

You can delete a selected annotation in three ways:
- Context menu: Right-click the annotation and choose Delete.
![Delete via context menu](../annotations/annotation-images/delete-annot-context-menu.png)
- Secondary toolbar: Select the annotation and click the Delete button on the annotation toolbar.
![Delete via annotation toolbar](../annotations/annotation-images/delete-annot.png)
- Keyboard: Select the annotation and press the `Delete` key.

## Delete programmatically

You can delete the currently selected annotation, or delete a specific annotation by its id.

```html
<div class="toolbar">
  <button id="del">Delete Annotation</button>
  <button id="delbyId">Delete Annotation By ID</button>
</div>
<div id="PdfViewer" style="height: 700px; border: 1px solid #ccc;"></div>
```
```ts
import {
  PdfViewer,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection,
  TextSearch,
  Print,
  Annotation,
  FormFields,
  FormDesigner
} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection,
  TextSearch,
  Print,
  Annotation,
  FormFields,
  FormDesigner
);

// Create viewer
const viewer = new PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  // Standalone resources
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
});
viewer.appendTo('#PdfViewer');

document.getElementById('del')?.addEventListener('click', () => {
  // Delete the selected annotation
  viewer.annotation.deleteAnnotation();
});

document.getElementById('delbyId')?.addEventListener('click', () => {
  // Delete the first annotation using its id from the annotation collection
  if (viewer.annotationCollection.length > 0) {
    viewer.annotation.deleteAnnotationById(viewer.annotationCollection[0].id);
  }
});
```

N> Deleting via API requires the annotation to exist in the current document. Ensure an annotation is selected when using deleteAnnotation(), or pass a valid id to deleteAnnotationById().

[View Sample on GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master)

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotations/annotation-types/area-annotation)
- [Annotation Toolbar](../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../annotations/create-modify-annotation)
- [Customize Annotation](../annotations/customize-annotation)
- [Handwritten Signature](../annotations/signature-annotation)
- [Export and Import Annotation](../annotations/export-import/export-annotation)
- [Annotation Permission](../annotations/annotation-permission)
- [Annotation in Mobile View](../annotations/annotations-in-mobile-view)
- [Annotation Events](../annotations/annotation-event)
- [Annotation API](../annotations/annotations-api)
