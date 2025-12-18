---
layout: post
title: Custom annotation tools in TypeScript PDF Viewer | Syncfusion
description: Learn how to build a custom toolbar for Syncfusion TypeScript PDF Viewer and switch annotation tools programmatically using setAnnotationMode.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Custom annotation tools in TypeScript PDF Viewer

PDF viewer allows to add your own toolbar and toggle PDF annotation tools programmatically using the setAnnotationMode method. You can enable tools such as Highlight, Underline, Rectangle, Circle, Arrow, Free Text, Ink, and Measurement annotations (Distance, Perimeter, Area, Radius).

Follow these steps to build a minimal custom annotation toolbar.

Step 1: Start from a basic PDF Viewer sample

See the [Getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started) to create a basic sample.

Step 2: Add HTML for a lightweight custom toolbar

Add buttons for the tools you want to expose. You can use plain buttons or Syncfusion Toolbar. Below is a plain-HTML variant that keeps things simple.

```html
<div id="annotationToolbar" class="e-pv-custom-anno-toolbar">
  <button id="toolHighlight">Highlight</button>
  <button id="toolUnderline">Underline</button>
  <button id="toolStrike">Strikethrough</button>
  <button id="toolRectangle">Rectangle</button>
  <button id="toolCircle">Circle</button>
  <button id="toolLine">Line</button>
  <button id="toolArrow">Arrow</button>
  <button id="toolPolygon">Polygon</button>
  <button id="toolFreeText">Free Text</button>
  <button id="toolInk">Ink</button>
  <button id="toolSticky">Sticky Note</button>
  <button id="toolDistance">Distance</button>
  <button id="toolPerimeter">Perimeter</button>
  <button id="toolArea">Area</button>
  <button id="toolRadius">Radius</button>
  <button id="toolNone">Exit</button>
</div>
<div id="PdfViewer" style="height:640px;"></div>
```

Step 3: Import and inject modules

Make sure the Annotation module is injected. If you also want text selection/search, include those as needed.

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch);

let pdfviewer: PdfViewer = new PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});
pdfviewer.appendTo('#PdfViewer');

// Wire up custom annotation tools using setAnnotationMode
const bindAnnoTools = () => {
  const setMode = (mode: string) => pdfviewer.annotationModule.setAnnotationMode(mode as any);

  document.getElementById('toolHighlight')?.addEventListener('click', () => setMode('Highlight'));
  document.getElementById('toolUnderline')?.addEventListener('click', () => setMode('Underline'));
  document.getElementById('toolStrike')?.addEventListener('click', () => setMode('Strikethrough'));
  document.getElementById('toolRectangle')?.addEventListener('click', () => setMode('Rectangle'));
  document.getElementById('toolCircle')?.addEventListener('click', () => setMode('Circle'));
  document.getElementById('toolLine')?.addEventListener('click', () => setMode('Line'));
  document.getElementById('toolArrow')?.addEventListener('click', () => setMode('Arrow'));
  document.getElementById('toolPolygon')?.addEventListener('click', () => setMode('Polygon'));
  document.getElementById('toolFreeText')?.addEventListener('click', () => setMode('FreeText'));
  document.getElementById('toolInk')?.addEventListener('click', () => setMode('Ink'));
  document.getElementById('toolSticky')?.addEventListener('click', () => setMode('StickyNotes'));
  // Measurement tools
  document.getElementById('toolDistance')?.addEventListener('click', () => setMode('Distance'));
  document.getElementById('toolPerimeter')?.addEventListener('click', () => setMode('Perimeter'));
  document.getElementById('toolArea')?.addEventListener('click', () => setMode('Area'));
  document.getElementById('toolRadius')?.addEventListener('click', () => setMode('Radius'));

  // Exit drawing mode
  document.getElementById('toolNone')?.addEventListener('click', () => setMode('None'));
};

bindAnnoTools();
```

## Custom Tools Using Syncfusion Toolbar for a richer UI

You can replace the plain buttons with Syncfusion EJ2 Toolbar items and icons similar to the custom toolbar sample. Here is a compact example showing a few common tools. Add the Toolbar package (@syncfusion/ej2-navigations) and wire each item’s click to setAnnotationMode.

```ts
import { Toolbar as Tool, ClickEventArgs, ItemModel } from '@syncfusion/ej2-navigations';

// Add built-in icon classes via EJ2 CSS (match your version), for example:
// <link rel="stylesheet" href="https://cdn.syncfusion.com/ej2/31.1.23/material.css" />

const items: ItemModel[] = [
  { text: 'Highlight', id: 'annHighlight', tooltipText: 'Highlight', prefixIcon: 'e-pv-highlight-icon' },
  { text: 'Underline', id: 'annUnderline', tooltipText: 'Underline', prefixIcon: 'e-pv-underline-icon' },
  { text: 'Strike', id: 'annStrike', tooltipText: 'Strikethrough', prefixIcon: 'e-pv-strikethrough-icon' },
  { type: 'Separator' },
  { text: 'Rect', id: 'annRect', tooltipText: 'Rectangle', prefixIcon: 'e-pv-shape-rectangle-icon' },
  { text: 'Circle', id: 'annCircle', tooltipText: 'Circle', prefixIcon: 'e-pv-shape-circle-icon' },
  { text: 'Line', id: 'annLine', tooltipText: 'Line', prefixIcon: 'e-pv-shape-line-icon' },
  { text: 'Arrow', id: 'annArrow', tooltipText: 'Arrow', prefixIcon: 'e-pv-shape-arrow-icon' },
  { text: 'Polygon', id: 'annPolygon', tooltipText: 'Polygon', prefixIcon: 'e-pv-shape-pentagon' },
  { type: 'Separator' },
  { text: 'Free Text', id: 'annFreeText', tooltipText: 'Free Text', prefixIcon: 'e-pv-freetext-icon' },
  { text: 'Ink', id: 'annInk', tooltipText: 'Ink', prefixIcon: 'e-pv-inkannotation-icon' },
  { text: 'Note', id: 'annSticky', tooltipText: 'Sticky Note', prefixIcon: 'e-pv-sticky-notes' },
  { type: 'Separator' },
  { text: 'Distance', id: 'annDistance', tooltipText: 'Distance', prefixIcon: 'e-pv-calibrate-distance-icon' },
  { text: 'Perimeter', id: 'annPerimeter', tooltipText: 'Perimeter', prefixIcon: 'e-pv-calibrate-perimeter-icon' },
  { text: 'Area', id: 'annArea', tooltipText: 'Area', prefixIcon: 'e-pv-calibrate-area-icon' },
  { text: 'Radius', id: 'annRadius', tooltipText: 'Radius', prefixIcon: 'e-pv-calibrate-radius-icon' },
  { type: 'Separator' },
  { text: 'Exit', id: 'annNone', tooltipText: 'Exit drawing', align: 'Right' }
];

const annoToolbar = new Tool({
  items,
  overflowMode: 'Scrollable',
  clicked: (args: ClickEventArgs) => {
    switch (args.item.id) {
      case 'annHighlight': pdfviewer.annotationModule.setAnnotationMode('Highlight'); break;
      case 'annUnderline': pdfviewer.annotationModule.setAnnotationMode('Underline'); break;
      case 'annStrike': pdfviewer.annotationModule.setAnnotationMode('Strikethrough'); break;
      case 'annRect': pdfviewer.annotationModule.setAnnotationMode('Rectangle'); break;
      case 'annCircle': pdfviewer.annotationModule.setAnnotationMode('Circle'); break;
      case 'annLine': pdfviewer.annotationModule.setAnnotationMode('Line'); break;
      case 'annArrow': pdfviewer.annotationModule.setAnnotationMode('Arrow'); break;
      case 'annPolygon': pdfviewer.annotationModule.setAnnotationMode('Polygon'); break;
      case 'annFreeText': pdfviewer.annotationModule.setAnnotationMode('FreeText'); break;
      case 'annInk': pdfviewer.annotationModule.setAnnotationMode('Ink'); break;
      case 'annSticky': pdfviewer.annotationModule.setAnnotationMode('StickyNotes'); break;
      case 'annDistance': pdfviewer.annotationModule.setAnnotationMode('Distance'); break;
      case 'annPerimeter': pdfviewer.annotationModule.setAnnotationMode('Perimeter'); break;
      case 'annArea': pdfviewer.annotationModule.setAnnotationMode('Area'); break;
      case 'annRadius': pdfviewer.annotationModule.setAnnotationMode('Radius'); break;
      case 'annNone': pdfviewer.annotationModule.setAnnotationMode('None'); break;
    }
  }
});
annoToolbar.appendTo('#annotationToolbar');
```

Notes

- setAnnotationMode accepts the annotation type name. Common values include: Highlight, Underline, Strikethrough, StickyNotes, FreeText, Ink, Rectangle, Circle, Line, Arrow, Polygon, Polyline, Distance, Perimeter, Area, Radius, and None to exit.
- You can predefine default annotation styles using the corresponding settings properties (for example, areaSettings as shown in the Area annotation topic).
- To combine with a fully custom viewer toolbar, see Custom Toolbar in TypeScript PDF Viewer.

[View Sample on GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master)

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
