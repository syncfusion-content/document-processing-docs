---
layout: post
title: Custom Data in annotations in JavaScript PDF Viewer | Syncfusion
description: Learn how to use add custom Data in annotation in Syncfusion JavaScript PDF Viewer
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Custom data in annotations

You can attach any custom key–value data to annotations using the customData property. This works at two levels:
- Default level with annotationSettings: Applies to all annotations created via the UI.
- Per-annotation-type level: Supply customData in each annotation type settings (highlightSettings, rectangleSettings, etc.).

The customData value can be any serializable object. It is preserved when exporting or importing annotations and is available at runtime on the annotation object.

## Default custom data (annotationSettings)

```js
// Standalone script usage
// Include the PDF Viewer scripts/styles on the page, then use the global `ej.pdfviewer` namespace

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
  allowedInteractions: [ej.pdfviewer.AllowedInteraction.Resize],
  // Custom data applied to all newly created annotations
  customData: {
    appId: 'pdf-review',
    tenant: 'northwind',
    featureFlags: { allowShare: true, qaStamp: false }
  }
};

viewer.appendTo('#pdfViewer');
```

## Per-annotation custom data

Provide customData inside individual annotation-type settings when you want specific payloads for different tools.

```js
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

var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',

  // Text markup
  highlightSettings: { author: 'QA', subject: 'Review', color: '#ffff00', opacity: 0.6, customData: { tag: 'needs-review', priority: 'high' } },
  strikethroughSettings: { author: 'QA', subject: 'Remove', color: '#ff0000', opacity: 0.6, customData: { tag: 'remove', priority: 'medium' } },
  underlineSettings: { author: 'Guest User', subject: 'Notes', color: '#00ffff', opacity: 0.9, customData: { tag: 'note', owner: 'guest' } },
  squigglySettings: { author: 'Guest User', subject: 'Corrections', color: '#00ff00', opacity: 0.9, customData: { tag: 'typo' } },

  // Shapes
  lineSettings: { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, customData: { id: 'ln-1', category: 'connector' } },
  arrowSettings: { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, customData: { id: 'ar-1', category: 'direction' } },
  rectangleSettings: { fillColor: '#ffffff00', strokeColor: '#222222', thickness: 1, opacity: 1, customData: { id: 'rect-1', zone: 'content' } },
  circleSettings: { fillColor: '#ffffff00', strokeColor: '#222222', thickness: 1, opacity: 1, customData: { id: 'circ-1', zone: 'highlight' } },
  polygonSettings: { fillColor: '#ffffff00', strokeColor: '#222222', thickness: 1, opacity: 1, customData: { id: 'poly-1', group: 'area' } },

  // Measurements
  distanceSettings: { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, customData: { units: 'cm', scale: 1 } },
  perimeterSettings: { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, customData: { units: 'cm', calc: 'perimeter' } },
  areaSettings: { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, fillColor: '#ffffff00', customData: { units: 'cm^2', calc: 'area' } },
  radiusSettings: { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, fillColor: '#ffffff00', customData: { units: 'cm', calc: 'radius' } },
  volumeSettings: { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, fillColor: '#ffffff00', customData: { units: 'cm^3', calc: 'volume' } },

  // Others
  freeTextSettings: { borderColor: '#222222', opacity: 1, customData: { template: 'comment', mentions: ['qa'] } },
  inkAnnotationSettings: { strokeColor: '#0000ff', thickness: 3, opacity: 0.8, customData: { tool: 'pen', userId: 12345 } },
  stampSettings: { opacity: 0.9, customData: { stampType: 'Approved', by: 'Manager' } },
  stickyNotesSettings: { author: 'QA', subject: 'Review', opacity: 1, customData: { channel: 'inbox', unread: true } }
});

pdfviewer.appendTo('#PdfViewer');
```

## Retrieve custom data at runtime

You can access the customData for any annotation through the viewer's annotationCollection. For example, wire a button click to iterate all annotations and read their custom payloads.

```html
<button id="CustomData">Show Custom Data</button>
```

```js
// Assume `pdfviewer` is your PdfViewer instance
var btn = document.getElementById('CustomData');
if (btn) {
  btn.addEventListener('click', function () {
    var annotations = pdfviewer.annotationCollection;
    for (var i = 0; i < annotations.length; i++) {
      var a = annotations[i];
      console.log('Annotation', a.id, 'customData:', a.customData);
    }
  });
}
```

### Notes
- customData can be any JSON-serializable object and is stored with the annotation.
- Use default annotationSettings.customData for global defaults and override with per-tool settings as needed.

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
- [Annotation Permission](../annotations/annotation-permission)
- [Annotation in Mobile View](../annotations/annotations-in-mobile-view)
- [Annotation Events](../annotations/annotation-event)
- [Annotation API](../annotations/annotations-api)
