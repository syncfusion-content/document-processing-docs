---
layout: post
title: Create and modify annotations in Vue PDF Viewer | Syncfusion
description: Learn how to create and modify annotations in Syncfusion Vue PDF Viewer with UI and programmatic examples, plus quick links to all annotation types.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Create and modify annotations in Vue

The PDF Viewer annotation tools add, edit, and manage markups across documents. This page provides an overview with quick navigation to each annotation type and common creation and modification workflows.

## Quick navigation to annotation types

Jump directly to a specific annotation type for detailed usage and examples:

TextMarkup annotations:

- Highlight: [Highlight annotation](../annotation-types/highlight-annotation)
- Strikethrough: [Strikethrough annotation](../annotation-types/strikethrough-annotation)
- Underline: [Underline annotation](../annotation-types/underline-annotation)
- Squiggly: [Squiggly annotation](../annotation-types/squiggly-annotation)

Shape annotations:

- Line: [Line annotation](../annotation-types/line-annotation)
- Arrow: [Arrow annotation](../annotation-types/arrow-annotation)
- Rectangle: [Rectangle annotation](../annotation-types/rectangle-annotation)
- Circle: [Circle annotation](../annotation-types/circle-annotation)
- Polygon: [Polygon annotation](../annotation-types/polygon-annotation)

Measurement annotations:

- Distance: [Distance annotation](../annotation-types/distance-annotation)
- Perimeter: [Perimeter annotation](../annotation-types/perimeter-annotation)
- Area: [Area annotation](../annotation-types/area-annotation)
- Radius: [Radius annotation](../annotation-types/radius-annotation)
- Volume: [Volume annotation](../annotation-types/volume-annotation)

Other annotations:

- Redaction: [Redaction annotation](../annotation-types/redaction-annotation)
- Free Text: [Free text annotation](../annotation-types/free-text-annotation)
- Ink (Freehand): [Ink annotation](../annotation-types/ink-annotation)
- Stamp: [Stamp annotation](../annotation-types/stamp-annotation)
- Sticky Notes: [Sticky notes annotation](../annotation-types/sticky-notes-annotation)

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

Annotations can be created programmatically by calling the `addAnnotation()` method on the annotation module. You must provide the annotation object with all required properties.

Example: Create a Rectangle annotation programmatically

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
<template>
  <button @click="addRectangle">Add Rectangle</button>
  <ejs-pdfviewer
    ref="pdfviewer"
    id="container"
    :documentPath="documentPath"
    :resourceUrl="resourceUrl"
    style="height: 650px"
  ></ejs-pdfviewer>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Annotation,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [Toolbar, Annotation],
  },
  methods: {
    addRectangle() {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.annotation.addAnnotation('Rectangle', {
        offset: { x: 200, y: 480 },
        pageNumber: 1,
        width: 150,
        height: 75,
      });
    },
  },
};
</script>

{% endhighlight %}
{% endtabs %}

## Modify annotations

### Modify via UI

- Select the annotation on the page.
- Use the annotation toolbar to change properties (color, opacity, thickness).
- Right-click for a context menu with additional options like Properties or Delete.
- Drag or resize the annotation to change its position or dimensions.

### Modify programmatically

Retrieve an annotation, modify its properties, and apply changes using `editAnnotation()`.

Example: Modify an annotation's color and opacity

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <div style="margin-bottom: 8px">
      <button @click="editRectangleProgrammatically">
         Edit Annotations
      </button>
    </div>

    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      style="height: 650px"
    >
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormDesigner,
  FormFields,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',

  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },

  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    };
  },

  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },

  methods: {
    editRectangleProgrammatically() {
        const viewer = document.getElementById('pdfViewer').ej2_instances[0];
        for (const annot of viewer.annotationCollection) {
          if (annot.subject === 'Rectangle') {
            annot.strokeColor = '#0000ff';
            annot.thickness = 2;
            annot.fillColor = '#ffff00';
            viewer.annotation.editAnnotation(annot);
            break;
          }
        }
      }
  },
};
</script>

{% endhighlight %}
{% endtabs %}

N> For type-specific edit examples (for example, editing line endings, moving stamps, or updating sticky note bounds), see the corresponding annotation type page linked above.

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotation-types)
- [Annotation Toolbar](../toolbar-customization)
- [Customize Annotation](./customize-annotation)
- [Delete Annotation](./delete-annotation)
- [Annotation Permission](./annotation-permission)
- [Annotation Events](./annotation-event)
- [Annotations API](./annotations-api)
