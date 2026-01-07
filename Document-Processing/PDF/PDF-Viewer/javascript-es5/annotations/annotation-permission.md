---
layout: post
title: Annotations Permission in JavaScript PDF Viewer | Syncfusion
description: Learn how to use annotation permissions in Syncfusion JavaScript PDF Viewer using programmatic APIs.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Annotation permissions in JavaScript PDF Viewer

Use [annotationSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#annotationsettings) to control creation-time permissions and behavior of annotations in the PDF Viewer.

## Common permissions

- isLock: Locks the annotation so it cannot be moved, resized, edited, or deleted.
- skipPrint: Excludes annotations from the print output when the document is printed from the viewer.
- skipDownload: Excludes annotations from the exported/downloaded document.

```js
// Ensure you have included the required EJ2 PDF Viewer scripts and styles via CDN before this script
// Example CDN: https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2.min.js and corresponding CSS

// Inject required modules
ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar,
  ej.pdfviewer.Magnification,
  ej.pdfviewer.Navigation,
  ej.pdfviewer.LinkAnnotation,
  ej.pdfviewer.ThumbnailView,
  ej.pdfviewer.BookmarkView,
  ej.pdfviewer.TextSelection,
  ej.pdfviewer.TextSearch,
  ej.pdfviewer.Print,
  ej.pdfviewer.Annotation,
  ej.pdfviewer.FormFields,
  ej.pdfviewer.FormDesigner
);

// Create viewer instance
var viewer = new ej.pdfviewer.PdfViewer();
viewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
viewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

// Default annotation settings applied to annotations created via the UI
viewer.annotationSettings = {
  author: 'XYZ',
  minHeight: 10,
  minWidth: 10,
  maxWidth: 100,
  maxHeight: 100,
  isLock: false,        // allow moving/resizing/editing by default
  skipPrint: false,     // include annotations when printing the document
  skipDownload: false,  // include annotations when downloading/exporting the document
  allowedInteractions: [ej.pdfviewer.AllowedInteraction.Resize]
};

viewer.appendTo('#pdfViewer');
```

## Individual permissions

- isPrint: Controls whether a specific annotation participates in printing. Set to false to prevent just that annotation from printing.
- isLock: You can also lock/unlock a specific annotation instance programmatically.

```js
// Ensure you have included the required EJ2 PDF Viewer scripts and styles via CDN before this script
// Example CDN: https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2.min.js and corresponding CSS

// Inject required modules
ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar,
  ej.pdfviewer.Magnification,
  ej.pdfviewer.Navigation,
  ej.pdfviewer.LinkAnnotation,
  ej.pdfviewer.ThumbnailView,
  ej.pdfviewer.BookmarkView,
  ej.pdfviewer.TextSelection,
  ej.pdfviewer.Annotation,
  ej.pdfviewer.FormDesigner,
  ej.pdfviewer.FormFields
);

// Create viewer instance with settings
var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',

  // Text markup defaults
  highlightSettings: { author: 'QA', subject: 'Review', color: '#ffff00', opacity: 0.6 },
  strikethroughSettings: { author: 'QA', subject: 'Remove', color: '#ff0000', opacity: 0.6 },
  underlineSettings: { author: 'Guest User', subject: 'Points to be remembered', color: '#00ffff', opacity: 0.9 },
  squigglySettings: { author: 'Guest User', subject: 'Corrections', color: '#00ff00', opacity: 0.9 },

  // Shapes
  lineSettings: { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, isLock: false, isPrint: true },
  arrowSettings: { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, isLock: false, isPrint: true },
  rectangleSettings: { fillColor: '#ffffff00', strokeColor: '#222222', thickness: 1, opacity: 1, isLock: false, isPrint: true },
  circleSettings: { fillColor: '#ffffff00', strokeColor: '#222222', thickness: 1, opacity: 1, isLock: false, isPrint: true },
  polygonSettings: { fillColor: '#ffffff00', strokeColor: '#222222', thickness: 1, opacity: 1, isLock: false, isPrint: true },

  // Measurements
  distanceSettings: { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, isLock: false, isPrint: true },
  perimeterSettings: { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, isLock: false, isPrint: true },
  areaSettings: { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, fillColor: '#ffffff00', isLock: false, isPrint: true },
  radiusSettings: { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, fillColor: '#ffffff00', isLock: false, isPrint: true },
  volumeSettings: { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, fillColor: '#ffffff00', isLock: false, isPrint: true },

  // Others
  freeTextSettings: { borderColor: '#222222', opacity: 1, isLock: false, isPrint: true },
  inkAnnotationSettings: { strokeColor: '#0000ff', thickness: 3, opacity: 0.8, isLock: false, isPrint: true },
  stampSettings: { opacity: 0.9, isLock: false, isPrint: true },
  stickyNotesSettings: { author: 'QA', subject: 'Review', opacity: 1, isLock: false, isPrint: true }
});

pdfviewer.appendTo('#PdfViewer');
```

Behavior notes
- isLock true: The annotation is locked; users cannot move, resize, or edit it through the UI until it is unlocked.
- skipPrint true: All annotations are omitted from the print output initiated from the viewer.
- skipDownload true: All annotations are omitted from the exported/downloaded PDF from the viewer.
- isPrint on an individual annotation: Use this when you only want to exclude a particular annotation from printing while leaving others printable.

[View Sample on GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master)

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotations/annotation-types/area-annotation)
- [Annotation Toolbar](../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../annotations/create-modify-annotation)
- [Customize Annotation](../annotations/customize-annotation)
- [Remove Annotation](../annotations/delete-annotation)
- [Handwritten Signature](../annotations/signature-annotation)
- [Export and Import Annotation](../annotations/export-import/export-annotation)
- [Annotation in Mobile View](../annotations/annotations-in-mobile-view)
- [Annotation Events](../annotations/annotation-event)
- [Annotation API](../annotations/annotations-api)