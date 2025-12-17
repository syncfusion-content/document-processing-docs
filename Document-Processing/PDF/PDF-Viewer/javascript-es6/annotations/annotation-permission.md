---
layout: post
title: Annotations Permission in TypeScript PDF Viewer | Syncfusion
description: Learn how to use annotation permission in Syncfusion TypeScript PDF Viewer using programmatic APIs.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Annotation permissions

Use [annotationSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#annotationsettings) to control creation-time permissions and behavior of annotations in the PDF Viewer.

## Common permissions

- isLock: Locks the annotation so it cannot be moved, resized, edited, or deleted.
- skipPrint: Excludes annotations from the print output when the document is printed from the viewer.
- skipDownload: Excludes annotations from the exported/downloaded document.

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, TextSearch, Print, Annotation, FormFields, FormDesigner, 
    AllowedInteraction} from '@syncfusion/ej2-pdfviewer';

    PdfViewer.Inject(Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields, FormDesigner);

let viewer: PdfViewer = new PdfViewer();
viewer.resourceUrl= 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
viewer.documentPath= 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

// Default annotation settings applied to annotations created via the UI
viewer.annotationSettings = {
  author: 'XYZ',
  minHeight: 10,
  minWidth: 10,
  maxWidth: 100,
  maxHeight: 100,
  isLock: false,        // allow moving/resizing/editing by default
  skipPrint: false,      // include annotations when printing the document
  skipDownload: false,   // include annotations when downloading/exporting the document
  allowedInteractions: [AllowedInteraction.Resize],
};

viewer.appendTo("#pdfViewer");
```

## Individual permissions

- isPrint: Controls whether a specific annotation participates in printing. Set to false to prevent just that annotation from printing.
- isLock: You can also lock/unlock a specific annotation instance programmatically.

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields);

const pdfviewer: PdfViewer = new PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib",
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

[View Sample on GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master)