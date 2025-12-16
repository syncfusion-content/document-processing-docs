---
layout: post
title: Customize annotations in TypeScript PDF Viewer | Syncfusion
description: Learn how to customize PDF annotations in Syncfusion TypeScript PDF Viewer using UI tools and programmatic settings (defaults and runtime edits).
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Customize annotations

You can customize annotation color, stroke color, thickness, opacity, and other properties using the built‑in UI or via code. This page summarizes common customization patterns and shows how to set defaults per annotation type.

## Customize via UI

Use the annotation toolbar after selecting an annotation:
- Edit Color: changes the annotation fill/text color
![Edit color](../images/edit_color.png)
- Edit Stroke Color: changes border/line color (shapes and lines)
![Edit stroke color](../images/shape_strokecolor.png)
- Edit Thickness: adjusts border/line thickness
![Edit thickness](../images/shape_thickness.png)
- Edit Opacity: adjusts transparency
![Edit opacity](../images/shape_opacity.png)

Type‑specific options (for example, Line Properties) are available from the context menu (right‑click > Properties) where supported.

## Set default properties during initialization

You can set defaults for specific annotation types when creating the PdfViewer instance. You can set author, subject, color, opacity using Annotation Settings. Below are examples using settings already used in the annotation type pages.

TextMarkup Annotations:

- Highlight : Set default properties before creating the control using [`highlightSettings`](./annotation-types/highlight-annotation/#set-default-properties-during-control-initialization)
- Strikethrough: Use [`strikethroughSettings`](./annotation-types/strikethrough-annotation/#default-strikethrough-settings-during-initialization)
- Underline: Use [`underlineSettings`](./annotation-types/underline-annotation/#default-underline-settings-during-initialization)
- Squiggly: Use [`squigglySettings`](./annotation-types/Squiggly-annotation/#set-default-properties-during-control-initialization)

Shape Annotations:

- Line: Use [`lineSettings`](./annotation-types/line-annotation/#default-line-settings-during-initialization)
- Arrow: Use [`arrowSettings`](./annotation-types/arrow-annotation/#default-arrow-settings-during-initialization)
- Rectangle: Use [`rectangleSettings`](./annotation-types/rectangle-annotation/#default-rectangle-settings-during-initialization)
- Circle : Use [`circleSettings`](./annotation-types/circle-annotation/#default-circle-settings-during-initialization)
- Polygon: Use [`polygonSettings`](./annotation-types/polygon-annotation/#default-polygon-settings-during-initialization)

Measurement Annotations:

- Distance: Use [`distanceSettings`](./annotation-types/distance-annotation/#default-distance-settings-during-initialization)
- Perimeter: Use [`perimeterSettings`](./annotation-types/perimeter-annotation/#default-perimeter-settings-during-initialization)
- Area: Use [`areaSettings`](./annotation-types/area-annotation/#default-area-settings-during-initialization)
- Radius: Use [`radiusSettings`](./annotation-types/radius-annotation/#default-radius-settings-during-initialization)
- Volume: Use [`volumeSettings`](./annotation-types/volume-annotation/#default-volume-settings-during-initialization)

Other Annotations:

- Redaction: Use [`redactionSettings`](./annotation-types/redaction-annotation/#default-redaction-settings-during-initialization)
- Free Text: Use [`freeTextSettings`](./annotation-types/free-text-annotation/#default-free-text-settings-during-initialization)
- Ink (Freehand): Use [`inkAnnotationSettings`](./annotation-types/ink-annotation/#default-ink-settings-during-initialization)
- Stamp: Use [`stampSettings`](./annotation-types/stamp-annotation/#default-stamp-settings-during-initialization)
- Sticky Notes: Use [`stickyNotesSettings`](./annotation-types/sticky-notes-annotation/#default-sticky-notes-settings-during-initialization)

Set defaults for specific annotation types when creating the PdfViewer instance. Below are examples using settings already used in the annotation type pages.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
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
  lineSettings: { strokeColor: '#0066ff', thickness: 2, opacity: 0.8 },
  arrowSettings: { strokeColor: '#0066ff', thickness: 2, opacity: 0.8 },
  rectangleSettings: { fillColor: '#ffffff00', strokeColor: '#222222', thickness: 1, opacity: 1 },
  circleSettings: { fillColor: '#ffffff00', strokeColor: '#222222', thickness: 1, opacity: 1 },
  polygonSettings: { fillColor: '#ffffff00', strokeColor: '#222222', thickness: 1, opacity: 1 },

  // Measurements
  distanceSettings: { strokeColor: '#0066ff', thickness: 2, opacity: 0.8 },
  perimeterSettings: { strokeColor: '#0066ff', thickness: 2, opacity: 0.8 },
  areaSettings: { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, fillColor: '#ffffff00' },
  radiusSettings: { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, fillColor: '#ffffff00' },
  volumeSettings: { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, fillColor: '#ffffff00' },

  // Others
  freeTextSettings: { borderColor: '#222222', thickness: 1, opacity: 1 },
  inkAnnotationSettings: { color: '#0000ff', thickness: 3, opacity: 0.8 },
  stampSettings: { opacity: 0.9 },
  stickyNotesSettings: { author: 'QA', subject: 'Review', color: '#ffcc00', opacity: 1 }
});

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation);

const pdfviewer: PdfViewer = new PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',

  highlightSettings: { author: 'QA', subject: 'Review', color: '#ffff00', opacity: 0.6 },
  strikethroughSettings: { author: 'QA', subject: 'Remove', color: '#ff0000', opacity: 0.6 },
  underlineSettings: { author: 'Guest User', subject: 'Points to be remembered', color: '#00ffff', opacity: 0.9 },
  squigglySettings: { author: 'Guest User', subject: 'Corrections', color: '#00ff00', opacity: 0.9 },

  lineSettings: { strokeColor: '#0066ff', thickness: 2, opacity: 0.8 },
  arrowSettings: { strokeColor: '#0066ff', thickness: 2, opacity: 0.8 },
  rectangleSettings: { fillColor: '#ffffff00', strokeColor: '#222222', thickness: 1, opacity: 1 },
  circleSettings: { fillColor: '#ffffff00', strokeColor: '#222222', thickness: 1, opacity: 1 },
  polygonSettings: { fillColor: '#ffffff00', strokeColor: '#222222', thickness: 1, opacity: 1 },

  distanceSettings: { strokeColor: '#0066ff', thickness: 2, opacity: 0.8 },
  perimeterSettings: { strokeColor: '#0066ff', thickness: 2, opacity: 0.8 },
  areaSettings: { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, fillColor: '#ffffff00' },
  radiusSettings: { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, fillColor: '#ffffff00' },
  volumeSettings: { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, fillColor: '#ffffff00' },

  freeTextSettings: { borderColor: '#222222', thickness: 1, opacity: 1 },
  inkAnnotationSettings: { color: '#0000ff', thickness: 3, opacity: 0.8 },
  stampSettings: { opacity: 0.9 },
  stickyNotesSettings: { author: 'QA', subject: 'Review', color: '#ffcc00', opacity: 1 }
});

pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

N> After changing defaults using UI tools (Edit Color, Edit Opacity, etc.), the values will reflect the latest selection for subsequent annotations in the same session.

## Customize programmatically at runtime

To update an existing annotation from code, modify its properties and call editAnnotation.

Example: bulk‑update matching annotations.

```html
<button id="bulkUpdateAnn">Bulk update annotations</button>
```
```ts
// Requires a PdfViewer instance named `pdfviewer`
document.getElementById('bulkUpdateAnn')?.addEventListener('click', () => {
  for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
    const ann = pdfviewer.annotationCollection[i];
    // Example criteria; customize as needed
    if (ann.author === 'Guest' || ann.subject === 'Rectangle') {
      ann.color = '#ff0000';
      ann.opacity = 0.8;
      // For shapes/lines you can also change strokeColor/thickness when applicable
      // ann.strokeColor = '#222222';
      // ann.thickness = 2;
      pdfviewer.annotation.editAnnotation(ann);
    }
  }
});
```

## Customize Annotation Settings 

Defines the settings of the annotations. You can change annotation settings like author name, height, width etc., using [annotationSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#annotationsettings) API

```html
<div id="PdfViewer" style="height: 100%;width: 100%;"></div>
```
```ts
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, TextSearch, Print, Annotation, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';

    PdfViewer.Inject(Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields, FormDesigner);
    
    let viewer: PdfViewer = new PdfViewer();
    viewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib";
    viewer.documentPath = "PDF_Succinctly.pdf";
    // Change the annotation settings.
    viewer.annotationSettings = {
         author: 'XYZ', 
         minHeight: 10, 
         minWidth: 10, 
         maxWidth: 100, 
         maxHeight: 100, 
         isLock: false, 
         skipPrint: false, 
         skipDownload: false, 
         allowedInteractions: [AllowedInteraction.Select, AllowedInteraction.Move] 
        };
    viewer.appendTo('#PdfViewer');
```
## Customize Annotation SelectorSettings

Defines the settings of annotation selector. You can customize the annotation Selector using [annotationSelectorSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#annotationselectorsettings) API

```html
<div id="PdfViewer" style="height: 100%;width: 100%;"></div>
```
```ts
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, TextSearch, Print, Annotation, FormFields, FormDesigner, AnnotationResizerLocation, CursorType } from '@syncfusion/ej2-pdfviewer';

    PdfViewer.Inject(Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner);

    let viewer: PdfViewer = new PdfViewer();
    viewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib";
    viewer.documentPath = "PDF_Succinctly.pdf";
    // Change the annotation selector settings.
    viewer.annotationSelectorSettings = {
         selectionBorderColor: 'blue', 
         resizerBorderColor: 'red', 
         resizerFillColor: '#4070ff', 
         resizerSize: 8, 
         selectionBorderThickness: 1, 
         resizerShape: 'Circle', 
         selectorLineDashArray: [5, 6], 
         resizerLocation: AnnotationResizerLocation.Corners | AnnotationResizerLocation.Edges, 
         resizerCursorType: CursorType.grab 
        };
    viewer.appendTo('#PdfViewer');
```

[View Sample on GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master)