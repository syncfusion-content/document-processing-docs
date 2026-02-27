---
layout: post
title: Create and modify annotations in React PDF Viewer | Syncfusion
description: Learn how to create and modify annotations in Syncfusion React PDF Viewer with UI and programmatic examples, plus quick links to all annotation types.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Create and modify annotations

The PDF Viewer annotation tools add, edit, and manage markups across documents. This page provides an overview with quick navigation to each annotation type and common creation and modification workflows.

## Quick navigation to annotation types

Jump directly to a specific annotation type for detailed usage and examples:

TextMarkup annotations:

- Highlight: [Highlight annotation](./annotation-types/highlight-annotation)
- Strikethrough: [Strikethrough annotation](./annotation-types/strikethrough-annotation)
- Underline: [Underline annotation](./annotation-types/underline-annotation)
- Squiggly: [Squiggly annotation](./annotation-types/Squiggly-annotation)

Shape annotations:

- Line: [Line annotation](./annotation-types/line-annotation)
- Arrow: [Arrow annotation](./annotation-types/arrow-annotation)
- Rectangle: [Rectangle annotation](./annotation-types/rectangle-annotation)
- Circle : [Circle annotation](./annotation-types/circle-annotation)
- Polygon: [Polygon annotation](./annotation-types/polygon-annotation)

Measurement annotations:

- Distance: [Distance annotation](./annotation-types/distance-annotation)
- Perimeter: [Perimeter annotation](./annotation-types/perimeter-annotation)
- Area: [Area annotation](./annotation-types/area-annotation)
- Radius: [Radius annotation](./annotation-types/ra)
- Volume: [Volume annotation](./annotation-types/vo)

Other annotations:

- Redaction: [Redaction annotation](./annotation-types/redaction-annotation)
- Free Text: [Free text annotation](./annotation-types/free-text-annotation)
- Ink (Freehand): [Ink annotation](./annotation-types/ink-annotation)
- Stamp: [Stamp annotation](./annotation-types/stamp-annotation)
- Sticky Notes: [Sticky notes annotation](./annotation-types/sticky-notes-annotation)

N> Each annotation type page includes both UI steps and programmatic examples specific to that type.

## Create annotations

### Create via UI

- Open the annotation toolbar in the PDF Viewer.
- Choose the required tool (for example, Shape, Free text, Ink, Stamp, Redaction).
- Click or drag on the page to place the annotation.

![Annotation toolbar](../images/shape_toolbar.png)

Note:
- When pan mode is active and a shape or stamp tool is selected, the viewer switches to text select mode automatically.
- Property pickers in the annotation toolbar let users choose color, stroke color, thickness, and opacity while drawing

### Create programmatically

Creation patterns vary by type. Refer to the individual annotation pages for tailored code. Example: creating a Redaction annotation using [`addAnnotation`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#annotationsettings).

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Inject, Toolbar, Annotation } from '@syncfusion/ej2-react-pdfviewer';

function getViewer() { return document.getElementById('container').ej2_instances[0]; }

function addRedactionAnnotation() {
  const viewer = getViewer();
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
}

function App() {
  return (
    <>
      <button onClick={addRedactionAnnotation}>Add Redaction Annotation</button>
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ height: '650px' }}
      >
        <Inject services={[Toolbar, Annotation]} />
      </PdfViewerComponent>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

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

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Inject, Toolbar, Annotation } from '@syncfusion/ej2-react-pdfviewer';

function getViewer() { return document.getElementById('container').ej2_instances[0]; }

function bulkEditAnnotations() {
  const viewer = getViewer();
  for (const ann of viewer.annotationCollection) {
    // Example match: author/subject; customize the condition as needed
    if (ann.author === 'Guest User' || ann.subject === 'Corrections') {
      ann.color = '#ff0000';
      ann.opacity = 0.8;
      viewer.annotation.editAnnotation(ann);
    }
  }
}

function App() {
  return (
    <>
      <button onClick={bulkEditAnnotations}>Bulk Edit Annotations</button>
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ height: '650px' }}
      >
        <Inject services={[Toolbar, Annotation]} />
      </PdfViewerComponent>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

N> For type-specific edit examples (for example, editing line endings, moving stamps, or updating sticky note bounds), see the corresponding annotation type page linked above.

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotation/annotation-types/area-annotation)
- [Annotation Toolbar](../toolbar-customization/annotation-toolbar)
- [Customize Annotation](../annotation/customize-annotation)
- [Remove Annotation](../annotation/delete-annotation)
- [Handwritten Signature](../annotation/signature-annotation)
- [Export and Import Annotation](../annotation/export-import/export-annotation)
- [Annotation Permission](../annotation/annotation-permission)
- [Annotation in Mobile View](../annotation/annotations-in-mobile-view)
- [Annotation Events](../annotation/annotation-event)
- [Annotation API](../annotation/annotations-api)
