---
layout: post
title: Create and modify annotations in JavaScript PDF Viewer | Syncfusion
description: Learn how to create and modify annotations in Syncfusion JavaScript PDF Viewer with UI and programmatic examples, plus quick links to all annotation types.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Create and modify annotations

The PDF Viewer annotation tools add, edit, and manage markups across documents. This page provides an overview with quick navigation to each annotation type and common creation and modification workflows.

## Quick navigation to annotation types

Jump directly to a specific annotation type for detailed usage and examples:

Text markup annotations:

- Highlight: [Highlight annotation](./annotation-types/highlight-annotation)
- Strikethrough: [Strikethrough annotation](./annotation-types/strikethrough-annotation)
- Underline: [Underline annotation](./annotation-types/underline-annotation)
- Squiggly: [Squiggly annotation](./annotation-types/Squiggly-annotation)

Shape annotations:

- Line: [Line annotation](./annotation-types/line-annotation)
- Arrow: [Arrow annotation](./annotation-types/arrow-annotation)
- Rectangle: [Rectangle annotation](./annotation-types/rectangle-annotation)
- Circle: [Circle annotation](./annotation-types/circle-annotation)
- Polygon: [Polygon annotation](./annotation-types/polygon-annotation)

Measurement annotations:

- Distance: [Distance annotation](./annotation-types/distance-annotation)
- Perimeter: [Perimeter annotation](./annotation-types/perimeter-annotation)
- Area: [Area annotation](./annotation-types/area-annotation)
- Radius: [Radius annotation](./annotation-types/ra)
- Volume: [Volume annotation](./annotation-types/vo)

Other annotations:

- Redaction: [Redaction annotation](./annotation-types/redaction-annotation)
- Free text: [Free text annotation](./annotation-types/free-text-annotation)
- Ink (freehand): [Ink annotation](./annotation-types/ink-annotation)
- Stamp: [Stamp annotation](./annotation-types/stamp-annotation)
- Sticky notes: [Sticky notes annotation](./annotation-types/sticky-notes-annotation)

N> Each annotation type page includes both UI steps and programmatic examples specific to that type.

## Create annotations

### Create via UI

- Open the annotation toolbar in the PDF Viewer.
- Choose the required tool (for example, Shape, Free text, Ink, Stamp, Redaction).
- Click or drag on the page to place the annotation.

![Annotation toolbar](../images/shape_toolbar.png)

Note:
- When pan mode is active and a shape or stamp tool is selected, the viewer switches to text select mode automatically.
- Property pickers in the annotation toolbar let users choose color, stroke color, thickness, and opacity while drawing.

### Create programmatically

Creation patterns vary by type. Refer to the individual annotation pages for tailored code. Example: creating a Redaction annotation using `addAnnotation`.

```html
<button id="addRedactAnnot">Add Redaction Annotation</button>
```
```js
// Requires a PdfViewer instance named `viewer`
document.getElementById('addRedactAnnot')?.addEventListener('click', () => {
  viewer.annotation.addAnnotation('Redaction', {
    bound: { x: 200, y: 480, width: 150, height: 75 },
    pageNumber: 1,
    markerFillColor: '#0000FF',
    markerBorderColor: 'white',
    fillColor: 'red',
    overlayText: 'Confidential',
    fontColor: 'yellow',
    fontFamily: 'Times New Roman',
    fontSize: 8,
    beforeRedactionsApplied: false
  });
});
```

Refer to the individual annotation pages for enabling draw modes from UI buttons and other type-specific creation samples.

## Modify annotations

### Modify via UI

Use the annotation toolbar after selecting an annotation:
- Edit color: change the fill or text color (when applicable)
![Edit color](../images/edit_color.png)
- Edit stroke color: change the border or line color (shape and line types)
![Edit stroke color](../images/shape_strokecolor.png)
- Edit thickness: adjust the border or line thickness
![Edit thickness](../images/shape_thickness.png)
- Edit opacity: change transparency
![Edit opacity](../images/shape_opacity.png)


Additional options such as Line Properties (for line/arrow) are available from the context menu (right-click > Properties) where supported.

### Modify programmatically

Use `editAnnotation` to apply changes to an existing annotation. Common flow:
- Locate the target annotation from `annotationCollection`.
- Update the desired properties.
- Call `editAnnotation` with the modified object.

```html
<button id="bulkEdit">Bulk edit matching annotations</button>
```
```js
// Example: change color/opacity for matching annotations
// Requires a PdfViewer instance named `pdfviewer`
document.getElementById('bulkEdit')?.addEventListener('click', () => {
  for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
    const ann = pdfviewer.annotationCollection[i];
    // Example match: author/subject; customize the condition as needed
    if (ann.author === 'Guest User' || ann.subject === 'Corrections') {
      ann.color = '#ff0000';
      ann.opacity = 0.8;
      pdfviewer.annotation.editAnnotation(ann);
    }
  }
});
```

N> For type-specific edit examples (for example, editing line endings, moving stamps, or updating sticky note bounds), see the corresponding annotation type page linked above.

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotations/annotation-types/area-annotation)
- [Annotation Toolbar](../toolbar-customization/annotation-toolbar)
- [Customize Annotation](../annotations/customize-annotation)
- [Remove Annotation](../annotations/delete-annotation)
- [Handwritten Signature](../annotations/signature-annotation)
- [Export and Import Annotation](../annotations/export-import/export-annotation)
- [Annotation Permission](../annotations/annotation-permission)
- [Annotation in Mobile View](../annotations/annotations-in-mobile-view)
- [Annotation Events](../annotations/annotation-event)
- [Annotation API](../annotations/annotations-api)
